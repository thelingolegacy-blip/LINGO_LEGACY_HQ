# G02 Containment, Isolation, and Rebuild Runbook

**Status:** Operational procedure; not evidence of runner recovery.  
**Last reviewed:** 2026-10-19  
**Scope:** `thelingolegacy-blip/LINGO_LEGACY_HQ`, runner `lingo-legacy-g02`, Firestore Rules CI.  
**Safety invariants:** production and last-known-good (LKG) remain protected; PR #42 stays draft/unmerged; no production deploy, DNS/Firebase mutation, or gate bypass.

## 1. Current incident boundary

The Firestore workflow on `ubuntu-latest` has completed before any steps were recorded (run `39246609607`, job `118039957627`, commit `38e2dcd1bdc73dece3058f5a793d7494b14b41f0`). Runner ID is 0, step list is empty, logs return `BlobNotFound`, and there are no artifacts. The same empty-step/log signature appeared in Firestore PR CI, Jekyll CI, and the alternate hosted-fleet probe.

This is a GitHub Actions pre-execution/dispatch boundary. It is not evidence that Firestore rules or Jest assertions failed. Changing the test assertions, loosening Firestore rules, or adding post-step artifact logic cannot fix a job that never reaches a step.

## 2. Containment rules

1. Keep PR #42 draft and unmerged. Do not promote, deploy, activate, or change production DNS/Firebase/Cloudflare resources.
2. Do not point a workflow triggered by public `pull_request` events at a self-hosted runner. Untrusted PR code could compromise the runner host and any credentials or network reachable from it.
3. Do not register a second runner, rotate/revoke runner credentials speculatively, kill the runner process, delete its directory, or reinstall the host before collecting diagnostics.
4. Do not rerun jobs while an equivalent job is still queued, and do not create more label/fleet probes to repeat the known empty-step signature.
5. Keep the existing pinned Firestore rules and six Jest scenarios unchanged until tests run and show a reproducible assertion defect.
6. Do not paste PATs, registration tokens, private keys, environment dumps, or secrets into issues or chat.

## 3. GitHub administration checks (must be performed by an authorized repository/account admin)

Record screenshots or exported non-secret values for:

- Runner scope: repository-level versus organization-level.
- Exact runner name, runner ID, enabled/disabled state, online/idle state, and last-seen time.
- Runner group and whether that group explicitly permits `LINGO_LEGACY_HQ`.
- Repository and workflow access restrictions, including public-repository eligibility where applicable.
- Exact labels. The dedicated G02 sentinel expects `self-hosted`, `linux`, `x64`, and `lingo-g02`.
- Actions policy/account eligibility and whether GitHub reports any restriction.

If any of these controls are unavailable or the runner is ineligible, stop and resolve the administrative restriction first. Do not infer eligibility from an “Online” badge.

## 4. Existing host diagnostics (only on the authorized runner host)

Capture these before restarting anything:

- Runner version using the installed runner's supported version command (for example, `./run.sh --version` from its installation directory).
- Service state and recent service-manager logs.
- Relevant `_diag/Runner_*.log` and `_diag/Worker_*.log` excerpts around the time of the queued job.
- Outbound HTTPS/DNS reachability to GitHub Actions and artifact endpoints, without printing credentials.
- Disk space, process state, clock synchronization, and runner auto-update status.

Redact secrets and tokens before preserving or sharing diagnostic excerpts. If the runner version is below GitHub's currently enforced minimum, use the official in-place runner update procedure and preserve the old diagnostic logs first.

## 5. Restart decision

Restart only the **existing, confirmed dedicated non-production runner service**, and only after capturing logs and confirming the host is not shared with production workloads.

- Prefer the service manager's graceful restart/restart command.
- Do not use `kill -9` as the first response.
- Do not delete the runner directory or remove/re-register the runner unless GitHub administration evidence proves the registration is irrecoverably wrong and an authorized admin approves that specific action.
- After restart, verify the same runner returns online, has the required labels, and continues polling. An online state alone is not acceptance.

If host access or dedication cannot be confirmed, do not restart or kill anything. Escalate using the recorded GitHub Support incident and provide run IDs, job IDs, timestamps, request IDs, and the empty-step/BlobNotFound signature.

## 6. Controlled verification order

1. Resolve the hosted-runner control-plane issue or validate the existing dedicated runner's eligibility and polling.
2. Run the minimal G02 sentinel from a trusted branch using the required labels. Do not run untrusted pull-request code on self-hosted infrastructure.
3. Accept G02 only when the run/job are correlated, runner ID is greater than zero, runner name/group are populated, a sentinel step executes, logs are retrievable, and evidence is independently reviewed.
4. Generate a lockfile in a network-enabled, isolated environment, review it, commit it on an isolated branch, and change CI to `npm ci`. Do not synthesize integrity hashes or guess dependency resolutions.
5. Run the Firestore Emulator and all six Jest scenarios. Preserve the exact commit SHA, toolchain versions, raw logs, machine-readable Jest report, artifacts, and SHA-256 manifest.
6. Review all six results and rules semantics. Only then can the test gate be considered for acceptance; G02 success alone does not authorize merge or production promotion.

## 7. Rebuild/repurpose criteria

Rebuild or repurpose the runner host only if diagnostics establish a host-level defect (for example, corrupt runner installation, unsupported version that cannot update in place, or incompatible host configuration). Before rebuild, verify the host is dedicated/non-production, record its runner ID/scope/labels, preserve diagnostics, and obtain approval for any runner deregistration. Provision a clean non-production runner with least privilege and no production secrets. Do not repurpose a production or shared host to solve a CI dispatch issue.

## 8. Acceptance record

Current state at last repository verification:

- `G02 = NOT QUALIFIED`
- `FIRESTORE_TESTS = NOT EXECUTED`
- `PR #42 = DRAFT / UNMERGED`
- `PRODUCTION_MUTATION = 0`
- `LKG = PROTECTED`

This runbook is a controlled recovery procedure, not proof that any administrative, host, test, or production action has succeeded.
