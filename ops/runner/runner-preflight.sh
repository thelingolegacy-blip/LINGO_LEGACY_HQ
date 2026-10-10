#!/usr/bin/env bash
# Read-only self-hosted GitHub Actions runner preflight.
# Usage: bash ops/runner/runner-preflight.sh /path/to/actions-runner [systemd-unit-name]
set -uo pipefail

runner_dir="${1:-$PWD}"
service_name="${2:-}"

section() { printf '\n===== %s =====\n' "$1"; }

section "Timestamp and host"
date -u +'%Y-%m-%dT%H:%M:%SZ'
uname -a
id
printf 'runner_dir=%s\n' "$runner_dir"

section "Runner configuration (safe fields only)"
if [[ -f "$runner_dir/.runner" ]]; then
  python3 - "$runner_dir/.runner" <<'PY'
import json, sys
from pathlib import Path
path = Path(sys.argv[1])
try:
    data = json.loads(path.read_text(encoding="utf-8"))
    print("serverUrl:", data.get("gitHubUrl", data.get("serverUrl", "(not present)")))
    print("agentName:", data.get("agentName", "(not present)"))
    print("workFolder:", data.get("workFolder", "(not present)"))
    labels = data.get("labels", [])
    if isinstance(labels, list):
        labels = [x.get("name", str(x)) if isinstance(x, dict) else str(x) for x in labels]
    print("labels:", ", ".join(labels) if labels else "(not present)")
except Exception as exc:
    print("Could not parse .runner:", type(exc).__name__ + ": " + str(exc))
    raise SystemExit(1)
PY
else
  printf '[FAIL] %s/.runner not found. This directory may not be configured as a runner.\n' "$runner_dir"
fi

section "Credential file presence only (contents never printed)"
for file in .credentials .credentials_rsaparams; do
  if [[ -f "$runner_dir/$file" ]]; then
    printf '%s=present\n' "$file"
  else
    printf '%s=missing\n' "$file"
  fi
done

section "Runner service status"
if [[ -x "$runner_dir/svc.sh" ]]; then
  (cd "$runner_dir" && ./svc.sh status) 2>&1 || true
else
  printf '[INFO] svc.sh not found. This may be a non-service or incomplete runner install.\n'
fi
if command -v systemctl >/dev/null 2>&1; then
  systemctl list-units --type=service --all --no-legend --no-pager 'actions.runner.*' 2>&1 || true
  if [[ -n "$service_name" ]]; then
    systemctl is-active "$service_name" 2>&1 || true
    systemctl status "$service_name" --no-pager --lines=0 2>&1 || true
  fi
fi

section "Runner processes"
ps -eo pid,lstart,comm,args 2>/dev/null |
  awk 'NR==1 || /Runner.Listener|Runner.Worker/ { print }'

section "Recent runner diagnostic filenames (contents not printed)"
if [[ -d "$runner_dir/_diag" ]]; then
  find "$runner_dir/_diag" -maxdepth 1 -type f -printf '%T@\t%f\n' 2>/dev/null |
    sort -nr | head -n 10
else
  printf '[INFO] _diag directory missing.\n'
fi

section "GitHub HTTPS reachability"
if command -v curl >/dev/null 2>&1; then
  curl --silent --show-error --max-time 8 -o /dev/null \
    -w 'github_api_http_status=%{http_code}\n' https://api.github.com/ 2>&1 || true
else
  printf '[WARN] curl is not installed.\n'
fi

section "Safety"
printf 'RUNNER_SERVICE_CHANGED=false\n'
printf 'RUNNER_RE_REGISTERED=false\n'
printf 'CREDENTIALS_EXPOSED=false\n'
printf 'This script is read-only. Do not print or share .credentials, .credentials_rsaparams, registration tokens, or environment secrets.\n'
