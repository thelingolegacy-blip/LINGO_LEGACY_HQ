# G02 Containment, Isolation, and Rebuild Runbook

**Status:** Procedure only; not proof of recovery. **Reviewed:** 2026-10-19.  
**Scope:** `thelingolegacy-blip/LINGO_LEGACY_HQ`, existing runner `lingo-legacy-g02`, Firestore Rules CI.  
**Invariants:** production and last-known-good stay protected; PR #42 remains draft/unmerged; no production deployment, DNS/Firebase mutation, or gate bypass.

## Incident boundary

Run `39246609607`, job `118039957627`, commit `38e2dcd1bdc73dece3058f5a793d7494b14b41f0`, completed failure before steps. Runner ID was 0, steps were empty, logs returned `BlobNotFound`, and artifacts were absent. Firestore PR CI, Jekyll CI, and the alternate hosted-fleet probe show the same empty-step signature. This is a pre-execution/dispatch failure, not a Firestore assertion result.

## Containment rules

1. Keep PR #42 draft/unmerged. No production promotion, deployment, activation, or DNS/Firebase/Cloudflare mutation.
2. Never route public `pull_request` code to a self-hosted runner. Untrusted PR code could compromise the host and reachable credentials/network.
3. Do not register a duplicate runner, revoke credentials speculatively, kill the process, delete its directory, or reinstall before preserving diagnostics.
4. Do not rerun a job while an equivalent job is queued, or add more probes to repeat the known failure.
5. Keep the pinned Firestore rules and six Jest scenarios unchanged until execution provides evidence of a test defect.
6. Never paste PATs, runner registration tokens, private keys, or secret-bearing environment dumps into issues/chat.

## Authorized GitHub administration checks

Record non-secret evidence for: runner scope (repository/organization), exact name/ID, enabled state, online/idle and last-seen state, runner group, repository/workflow access, public-repository eligibility, account Actions policy, and exact labels. The dedicated sentinel requires `self-hosted`, `linux`, `x64`, `lingo-g02`. An “Online” badge alone does not prove eligibility or polling. If administration evidence is unavailable, stop and escalate rather than infer the cause.

## Exact runner target contract

Both the GitHub workflow and the host operator must use the same target contract; do not guess from an Online badge.

- **Expected registered runner name:** `lingo-legacy-g02` (confirm this exact name in Actions → Runners before treating the identity as valid).
- **Required runner labels:** `self-hosted`, `linux`, `x64`, `lingo-g02` — all four must match the workflow's `runs-on` selector.
- **Repository/workflow scope:** `thelingolegacy-blip/LINGO_LEGACY_HQ`; the runner must be enabled and eligible for this repository and the trusted recovery-branch sentinel workflow.
- **Runner group:** record the actual configured group and confirm that group grants access to this repository. Do not infer a group from the runner name or labels.
- **Workload boundary:** only the trusted recovery-branch sentinel is eligible for this dedicated runner. Do not assign public/untrusted pull-request code or production workloads to it.
- **GitHub side must confirm:** run ID, attempt, job ID, selected labels, assigned runner ID greater than zero, exact runner name/group, and started steps.
- **Host side must confirm:** the same runner name, service/version, active polling and assignment in diagnostics, and the correlation ID/commit SHA emitted by the sentinel.
- **Mismatch behavior:** wrong runner name, missing label, wrong scope/group, runner ID zero, no assignment, or no first step means the handshake is rejected and G02 stays blocked.

## Audit finding — repository-scope mismatch (OPEN)

**Do not treat the sentinel run in `thelingolegacy-blip/LINGO_LEGACY_HQ` as a probe of the canonical runner until scope is verified.** A cross-repository audit found that the canonical runner bootstrap and host-provisioning documentation in `thelingolegacy-blip/TheLingoLegacy` explicitly set repository-scoped registration to `thelingolegacy-blip/TheLingoLegacy`, name `lingo-legacy-g02`, labels `self-hosted,linux,x64,lingo-g02`, and say the dedicated Linux host/daemon is NOT CREATED / NOT VERIFIED at that recorded checkpoint. The two repositories are distinct IDs. The owner is a personal account; the canonical runner package documents repository-level registration, not a shared organization runner group.

Therefore, the new queued run `39247766979` in `LINGO_LEGACY_HQ` may be blocked by repository scope even if a runner with the same name is online in `TheLingoLegacy`. The current GitHub connector cannot read the Actions runner-admin inventory or host telemetry, so it cannot establish whether a separate HQ registration exists. This is a **confirmed configuration/documentation mismatch, with the live registration state unresolved**.

**Required resolution:** use the existing trusted sentinel in `thelingolegacy-blip/TheLingoLegacy` (`.github/workflows/g02-sentinel.yml`) to validate the canonical repository-scoped runner, after confirming host readiness; or have an authorized admin explicitly prove that the intended runner is registered and eligible in `LINGO_LEGACY_HQ`. Do not create a duplicate runner or widen scope just to make the HQ run assign. Keep the current HQ run as an unresolved scope diagnostic, not acceptance evidence.

**Selector limitation:** GitHub `runs-on` selects by labels (and optionally runner group), not registered runner name. The HQ workflow's `runs-on: [self-hosted, linux, x64, lingo-g02]` does not by itself guarantee that the assigned runner is named `lingo-legacy-g02`. The canonical sentinel in `TheLingoLegacy` explicitly asserts `RUNNER_NAME == lingo-legacy-g02`; require that identity assertion and the run/job telemetry before acceptance.

**Host-side conflict:** prior reports described the runner as Online/Idle, while the checked-in host-provisioning checkpoint says the dedicated host and daemon are not verified. Treat these as contradictory/stale until an authorized operator supplies fresh host/service and GitHub inventory evidence from the same UTC window.

## Two-sided signal and correlation protocol

GitHub Actions is the control plane; the runner agent initiates outbound polling/communication to GitHub. Do not assume GitHub can open an inbound connection to the runner host, and do not expose an inbound runner port as a workaround. “Both sides signal at the same time” means one coordinated, timestamped handshake with evidence from each side—not two uncorrelated status badges.

For each authorized sentinel attempt, use one unique correlation value (for example, G02-<run_id>-<run_attempt>-<UTC timestamp>) and record:

1. **Control-plane signal (GitHub):** workflow name/ref/SHA, dispatch or event timestamp, run ID and attempt, job ID, queued/started/completed timestamps, assigned runner ID/name/group, labels/scope, step list, conclusion, and artifact IDs. Capture the API/UI response as observed; never infer assignment from “queued” or runner “Online”.
2. **Runner-side signal (host):** the same correlation value printed as the first sentinel step, UTC start/end timestamps, hostname or stable runner name (no secrets), runner service state/version, and the matching `_diag/Runner_*.log` / `_diag/Worker_*.log` polling/assignment lines. Keep the raw local diagnostics access-controlled and redact tokens.
3. **Join and acknowledgement:** compare both sides by run ID + attempt + job ID + correlation value + UTC time window + runner identity. The runner step should emit a small non-secret evidence file containing the correlation value and observed commit SHA; upload it as a run artifact. The control plane must independently show that the same job was assigned to the expected runner and that the artifact belongs to that exact run/attempt.
4. **Interpretation:** GitHub queue event without host polling evidence = control-plane only; host polling without job assignment = runner is reachable but not proven eligible; assignment without a started step = execution not proven; step without retrievable logs/artifact = evidence incomplete; mismatched IDs, SHA, runner identity, or time window = reject the handshake and keep G02 blocked.
5. **No blind retries:** create a new correlation value only after the previous attempt is terminal and its evidence is collected. Never create duplicate queued jobs to simulate simultaneous signaling.

The two sides do not exchange a guaranteed atomic signal. The acceptance condition is a correlated handshake across both evidence sources; clock synchronization and UTC timestamps are required to make the time window meaningful.

## Existing-host diagnostics

Only on the authorized runner host, capture before restarting: supported runner version output (for example `./run.sh --version`), service state/recent service-manager logs, relevant `_diag/Runner_*.log` and `_diag/Worker_*.log` excerpts around job polling, outbound DNS/HTTPS to GitHub Actions and artifact endpoints, disk space, process state, clock synchronization, and auto-update status. Redact tokens and secrets. If below the currently enforced GitHub minimum, preserve logs and use the official in-place update procedure.

## Restart / kill decision

Restart only the existing, confirmed dedicated non-production runner service after capturing diagnostics and confirming the host is not shared with production workloads. Prefer a graceful service-manager restart; do not start with `kill -9`. Do not unregister/re-register or delete the installation unless evidence proves registration is irrecoverably wrong and an authorized admin approves it. If host access or dedication is unconfirmed, do not restart or kill anything. Escalate with run/job IDs, UTC timestamps, request IDs, and the empty-step/BlobNotFound signature.

## Controlled recovery order

1. Resolve GitHub Actions eligibility/control-plane restrictions or verify the existing runner is eligible and polling.
2. Run the minimal G02 sentinel from a trusted branch using required labels; never run untrusted PR code on self-hosted infrastructure.
3. G02 acceptance requires correlated run/job, runner ID > 0, populated runner name/group, instantiated step, successful sentinel, retrievable logs, and independent evidence review.
4. Generate a real lockfile in an isolated network-enabled environment, review and commit it on a repair branch, then use `npm ci`. Do not invent resolved versions or integrity hashes.
5. Run the Firestore Emulator and all six Jest scenarios. Retain exact commit SHA, toolchain versions, raw logs, Jest JSON, artifacts, and SHA-256 manifest.
6. Review all assertions and rule semantics independently. G02 passing does not itself authorize merge or production promotion.

## Rebuild / repurpose criteria

Rebuild only if diagnostics establish a host-level defect (corrupt installation, unsupported version that cannot update in place, or incompatible host configuration). Confirm the host is dedicated/non-production, preserve logs and runner scope/labels, and obtain authorization before deregistration. Provision a least-privilege non-production runner with no production secrets. Never repurpose a production/shared host to work around a GitHub dispatch failure.

## Current acceptance record

- `G02 = NOT QUALIFIED`
- `FIRESTORE_TESTS = NOT EXECUTED`
- `PR #42 = DRAFT / UNMERGED`
- `PRODUCTION_MUTATION = 0`
- `LKG = PROTECTED`

This document is a recovery procedure, not proof any runner, test, or production action succeeded.
