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
