# G02 runner dispatch reinitiation and cleanup evidence

**Capture date:** 2026-10-27 (UTC)  
**Repository:** `thelingolegacy-blip/LINGO_LEGACY_HQ`  
**Diagnostic branch:** `fix/runner-probe-label-and-sync-2026-09-21`  
**Cleanup branch:** `ops/g02-runner-recovery-main-2026-10-27`  
**Disposition:** `G02 BLOCKED`; production remains `PROTECTED HOLD`.

## Execution evidence

### Run 40595339397 — initial post-repair push

- Workflow: `Runner Route Probe — Hosted Fleet`
- Commit: `a1c92b9723afb2c57f65fda5d00c0a87cc9f4873`
- Conclusion: `failure`
- Artifact inventory: empty.
- Run URL: https://github.com/thelingolegacy-blip/LINGO_LEGACY_HQ/actions/runs/40595339397

### Run 40595369983 — timestamp correction and retry

- Workflow: `Runner Route Probe — Hosted Fleet`
- Commit: `93100cba108e71b26f9cfbbaee0409bc58760bfb`
- Run attempt 1: `failure`; job ID `122509813009`.
- Run attempt 2 (explicit failed-job re-run): `failure`; job ID `122512588860`.
- Both attempts reported `runner_id=0`, empty `runner_name`, and an empty `steps` list.
- Step inspection returned `[]`.
- Artifact inventory returned `[]`.
- Job-log retrieval returned HTTP 404 with `BlobNotFound`.
- Run URL: https://github.com/thelingolegacy-blip/LINGO_LEGACY_HQ/actions/runs/40595369983

## Latest main-based recovery PR execution

The main-based recovery branch triggered a Jekyll site CI run after the first branch commit:

- Run: `40598152899`
- Job: `122519231221`
- Workflow: `Jekyll site CI`
- Commit: `5f154dca4654896e10c5cc4f6ff7638732788edb`
- Conclusion: `failure`
- Runner ID: `0`; runner name: empty
- Steps: empty
- Log retrieval: HTTP 404 `BlobNotFound`
- Run URL: https://github.com/thelingolegacy-blip/LINGO_LEGACY_HQ/actions/runs/40598152899

This is a fresh reproduction of pre-step dispatch failure on the main-based branch. It does not validate the new workflow syntax or prove dedicated-runner assignment.

## Allocation and dispatch cleanup

A repository Actions-run inventory for the diagnostic branch returned 22 workflow runs: **22 completed, 0 queued, 0 in progress, 0 waiting/requested/pending** at capture time. There are no active run/job allocations in this queried branch inventory to cancel. Completed runs and their audit history were preserved; they were not deleted.

The three redundant exploratory probes below and the hosted-fleet diagnostic were changed to manual-only (`workflow_dispatch`) on this recovery branch to reduce repeated automatic dispatch failures while preserving intentional incident-driven launches:

- `.github/workflows/runner-control-plane-probe.yml`
- `.github/workflows/runner-route-probe.yml`
- `.github/workflows/runner-slim-control-plane-probe.yml`

Each now has least-privilege `contents: read`, a bounded timeout, and a stable concurrency group. The canonical self-hosted G02 sentinel (`.github/workflows/g02-self-hosted-runner-sentinel.yml`) was preserved. The hosted-fleet diagnostic (`.github/workflows/runner-slim-probe.yml`) was preserved and changed to manual-only. No runner registration, runner group, secrets, production resources, DNS records, deployments, or credentials were changed.

## Canonical sentinel hardening added on the cleanup branch

The canonical self-hosted sentinel was updated on this branch after the failed hosted diagnostic capture:

- Workflow is manual-only and requires an incident reference plus explicit confirmation that the run is an isolated canary.
- Target remains `[self-hosted, linux, x64, lingo-g02]`; concurrency is serialized; permissions remain `contents: read`.
- The workflow captures run ID, attempt, job, commit, ref, available runner name/OS/architecture, timestamp and incident reference. Runner assignment ID is verified independently from the GitHub job metadata; the workflow does not rely on an undocumented runner-context ID.
- It creates a run/attempt-correlated evidence artifact and SHA-256 checksum, including failure evidence when a job starts but sentinel checks fail.
- Latest workflow-hardening commit at synchronization: `ba0f2f1675342a2b18bcf8fd824c6814ff43e67a`.
- Operations and acceptance runbook: [G02 Runner Operations and Acceptance](G02-RUNNER-OPERATIONS-AND-ACCEPTANCE-2026-10-27.md).

These are configuration changes only. No canary has been executed against the dedicated runner from this update, so runner assignment, logs, artifact retrieval, digest verification, and G02 acceptance remain unverified.

## Acceptance result

| Predicate | Result |
|---|---|
| Workflow triggered | PASS |
| Job record exists | PASS |
| Assigned runner ID is greater than zero | FAIL (`0`) |
| Runner name populated | FAIL (empty) |
| Steps instantiated and executed | FAIL (empty) |
| Retrievable job logs | FAIL (`BlobNotFound`) |
| Correlated artifact generated | FAIL (none) |
| G02 accepted | BLOCKED |

## Next required operator-side checks

1. Verify GitHub Actions policy, account/org/enterprise restrictions, hosted-runner availability and any billing/budget blocks.
2. For the dedicated self-hosted sentinel, verify the runner daemon is online and actively polling, with labels `self-hosted`, `linux`, `x64`, `lingo-g02` and access to the repository's runner group.
3. Re-run the canonical `g02-self-hosted-runner-sentinel.yml` after runner availability is confirmed; retain the exact run ID, attempt, commit, runner identity, steps, retrievable logs and artifact checksum.
4. Do not mark G02 passed from this hosted diagnostic. Do not promote or deploy until all required predicates have independently verifiable evidence.

This file records failed execution and cleanup observations; it is not itself a successful runner-execution artifact or a G02 pass certificate.
