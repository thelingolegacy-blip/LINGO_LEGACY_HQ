#!/usr/bin/env bash
# Read-only Docker host preflight. No prune, restart, daemon mutation, or deletion.
set -uo pipefail

section() { printf '\n===== %s =====\n' "$1"; }
run_readonly() {
  local label="$1"; shift
  section "$label"
  "$@" 2>&1 || printf '[WARN] command returned non-zero: %s\n' "$label"
}

section "Timestamp and host"
date -u +'%Y-%m-%dT%H:%M:%SZ'
uname -a
id

run_readonly "Filesystem capacity" df -hT
run_readonly "Filesystem inode capacity" df -ih

section "Docker client/server"
if command -v docker >/dev/null 2>&1; then
  docker version 2>&1 || true
  docker info 2>&1 || true
  docker system df -v 2>&1 || true
  docker ps -a --no-trunc --format 'table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Image}}' 2>&1 || true
else
  printf '[WARN] docker CLI is not installed or not on PATH.\n'
fi

section "Docker daemon service"
if command -v systemctl >/dev/null 2>&1; then
  systemctl is-active docker 2>&1 || true
  systemctl status docker --no-pager --lines=0 2>&1 || true
else
  printf '[INFO] systemctl is unavailable; inspect the host service manager.\n'
fi

section "Daemon configuration validation (read-only)"
if [[ -f /etc/docker/daemon.json ]]; then
  python3 - <<'PY'
import json
from pathlib import Path

path = Path("/etc/docker/daemon.json")
try:
    config = json.loads(path.read_text(encoding="utf-8"))
    print("daemon.json syntax: VALID")
    print("log-driver:", config.get("log-driver", "(Docker default)"))
    print("log-opts:", json.dumps(config.get("log-opts", {}), sort_keys=True))
except Exception as exc:
    print("daemon.json syntax: INVALID")
    print(type(exc).__name__ + ": " + str(exc))
    raise SystemExit(1)
PY
  if command -v dockerd >/dev/null 2>&1; then
    dockerd --validate --config-file=/etc/docker/daemon.json 2>&1 || true
  fi
else
  printf '[INFO] /etc/docker/daemon.json does not exist. No file was created.\n'
fi

section "Largest JSON container logs (metadata only)"
docker_root=""
if command -v docker >/dev/null 2>&1; then
  docker_root="$(docker info --format '{{.DockerRootDir}}' 2>/dev/null || true)"
fi
if [[ -z "$docker_root" ]]; then
  printf '[WARN] Docker root directory could not be queried; log-size inventory skipped.\n'
elif [[ -d "$docker_root/containers" ]]; then
  printf 'Docker root: %s\n' "$docker_root"
  find "$docker_root/containers" -type f -name '*-json.log' -printf '%s\t%f\n' 2>/dev/null |
    sort -nr | head -n 10 |
    awk -F '\t' '{ printf "%.1f MiB\t%s\n", $1/1048576, $2 }'
else
  printf '[INFO] JSON container-log directory not present beneath Docker root.\n'
fi

section "Safety"
printf 'READ_ONLY=true\n'
printf 'DOCKER_PRUNE_EXECUTED=false\n'
printf 'DAEMON_RESTARTED=false\n'
printf 'FILES_DELETED=false\n'
printf 'Do not run broad prune commands or restart Docker until findings and the affected workload are reviewed.\n'
