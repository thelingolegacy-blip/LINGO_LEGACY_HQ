# G02 Runner Operations, Assignment, Synchronization, and Acceptance Plan

**Revision date:** 2026-10-27 UTC  
**Repository:** `thelingolegacy-blip/LINGO_LEGACY_HQ`  
**Change branch:** `ops/runner-dispatch-cleanup-2026-10-27`  
**Related review:** [PR #47](https://github.com/thelingolegacy-blip/LINGO_LEGACY_HQ/pull/47)  
**Current gate:** `G02 BLOCKED`  
**Production disposition:** `PROTECTED HOLD`  
**Policy:** fail closed; no release or promotion on inferred evidence.

## 1. Purpose and scope

This runbook consolidates runner workflow ownership, job routing, allocation checks, evidence generation, configuration synchronization, merge gates, and final acceptance. It is an isolated CI canary plan. It does not authorize production deployment, credential changes, runner registration replacement, DNS edits, or a release promotion.

## 2. Runner target and assignment contract

The only runner that can satisfy the G02 host-execution predicate is the dedicated persistent Linux x64 runner:

- Expected runner name: `lingo-legacy-g02`
- Required labels: `self-hosted`, `linux`, `x64`, `lingo-g02`
- Canonical workflow: `.github/workflows/g02-self-hosted-runner-sentinel.yml`
- Dispatch: manual only; operator must supply an incident reference and explicitly confirm this is a canary.
- Concurrency: `g02-runner-sentinel`, `cancel-in-progress: false`
- Permissions: `contents: read`
- Timeout: 10 minutes
- Evidence artifact: `g02-runner-evidence-<run-id>-<attempt>`
- Artifact payload: run-correlated evidence text and `SHA256SUMS`; retention 30 days.

A runner shown as registered or Online is not sufficient. A queued job is not an assignment. A job record with `runner_id=0`, no runner name, no steps, or no retrievable logs fails acceptance.

## 3. Mission and job allocation matrix

| Mission ID | Job / workflow | Execution target | Purpose | Acceptance evidence |
|---|---|---|---|---|
| G02-M0 | Runner host readiness | Host/operator verification | Confirm daemon is running, polling, and attached to the intended repository/group | Service status, runner name, labels, last contact and no duplicate registration |
| G02-M1 | Canonical sentinel | `[self-hosted, linux, x64, lingo-g02]` | Prove real assignment and Linux x64 execution | Positive runner ID, populated runner name, instantiated successful steps |
| G02-M2 | Evidence capture | Same job, always-run upload step | Preserve evidence even when sentinel checks fail after assignment | Run/attempt/SHA/incident correlation, non-empty artifact, matching SHA-256 digest |
| G02-M3 | Independent verification | Reviewer / separate verification context | Confirm GitHub job metadata, logs and artifact agree | Independently re-computed digest and matching run ID, attempt, commit, runner |
| G02-M4 | Gate adjudication | Authorized reviewer | Record pass/fail without relaxing the predicate | Explicit acceptance record; G02 passes only when every required predicate passes |
| G02-M5 | Release promotion | Separate release gate | Not part of the runner canary | Remains blocked until every downstream gate independently passes |

Do not launch multiple canaries in parallel. The canonical concurrency group intentionally serializes this mission.

## 4. Dispatch and allocation triage

Use this order so that each test isolates a distinct failure domain:

1. **Repository and workflow:** confirm the dispatch targets the intended repository, branch, workflow path, and current commit SHA.
2. **Actions policy:** inspect repository, organization, and enterprise Actions policy; verify the workflow and required actions are permitted.
3. **Runner group access:** confirm the repository is authorized to use the runner group and the runner is assigned to that group.
4. **Runner process:** verify the service/daemon is actually running and polling on the host. Registration or an Online label alone is not enough.
5. **Labels and routing:** confirm exact labels `self-hosted`, `linux`, `x64`, `lingo-g02` and exact `runs-on` match.
6. **Queue and assignment:** capture the run ID and job ID; inspect runner ID/name and job status. Do not cancel or delete historical runs to make the inventory appear clean.
7. **Execution and logs:** require instantiated steps, a completed sentinel, and retrievable logs.
8. **Artifact:** require a non-empty run/attempt-correlated artifact; independently recompute the SHA-256 digest.
9. **Gate decision:** write a pass only after all preceding evidence is present and mutually consistent.

If no runner is assigned, stop at the assignment boundary. Do not change labels to a hosted target and call it a G02 pass; hosted diagnostics can troubleshoot the control plane but cannot prove dedicated-host execution.

## 5. Configuration synchronization rules

Before review or merge, synchronize these sources:

- Canonical workflow: `.github/workflows/g02-self-hosted-runner-sentinel.yml`
- Hosted diagnostic: `.github/workflows/runner-slim-probe.yml`
- Exploratory workflows made manual-only:
  - `.github/workflows/runner-control-plane-probe.yml`
  - `.github/workflows/runner-route-probe.yml`
  - `.github/workflows/runner-slim-control-plane-probe.yml`
- Execution evidence: `07_DOCS/g02-runner-dispatch-execution-evidence-2026-10-27.md`
- This operations plan: `07_DOCS/G02-RUNNER-OPERATIONS-AND-ACCEPTANCE-2026-10-27.md`

Synchronization checks:

- Verify all workflow names and file paths against the branch tree.
- Keep the canonical sentinel manual-only and self-hosted-only.
- Keep least-privilege `contents: read`, bounded timeouts, and serialized concurrency.
- Keep the incident reference and explicit canary confirmation required.
- Ensure artifact names include both `github.run_id` and `github.run_attempt`.
- Ensure the evidence payload includes repository, workflow, run, attempt, job, commit, ref, runner ID/name/OS/architecture, timestamp, and final sentinel result.
- Do not claim a job's artifact exists merely because an upload step is configured; verify the artifact from the actual run.
- Avoid editing the same workflow path concurrently; fetch the latest blob SHA before each update.

## 6. Acceleration and replenishment

Acceleration means reducing unnecessary dispatches and shortening diagnosis cycles, not weakening acceptance:

- Three redundant exploratory probes are manual-only to reduce automatic PR/push dispatch noise.
- Canonical G02 is one serialized manual canary at a time.
- The runbook orders checks from policy and host polling through assignment, execution, logs, and artifact verification, reducing repeated blind retries.
- Keep completed runs and failed-run records for auditability.
- Replenish capacity only after the actual limiting resource is identified: host service/polling, runner-group authorization, GitHub Actions policy, or hosted-runner/account limits. Do not assume a capacity problem from a pre-step failure alone.
- Do not add a second runner registration, replace credentials, rotate secrets, or change billing/account settings without an authorized operator and evidence of the specific cause.

## 7. Review, merge, and synchronization gates

PR #47 remains a draft review vehicle. Merge is not authorized solely because the files exist or the branch is mergeable.

Before a merge decision:

- [ ] Inspect the complete diff and ensure no unrelated production/configuration changes.
- [ ] Validate YAML syntax and workflow schema.
- [ ] Confirm the three exploratory workflows have only `workflow_dispatch`.
- [ ] Confirm the canonical sentinel has only `workflow_dispatch`, explicit canary inputs, correct runner labels, and no deploy/promotion steps.
- [ ] Confirm artifact paths and SHA-256 capture are coherent.
- [ ] Obtain required repository review/approval and branch-protection checks.
- [ ] Record the exact head SHA and base SHA used for review.
- [ ] Re-check that no new commits landed after validation.

After merge (only after authorized approval), verify the merged commit and workflow contents on the target branch. Do not treat merge as proof of runner execution. G02 remains blocked until a real assigned runner completes the canary and its evidence is independently verified.

## 8. G02 acceptance predicate

All conditions are mandatory:

1. Correct repository, workflow, branch/ref, commit SHA, run ID and attempt recorded.
2. Job is assigned to the dedicated runner with `runner_id > 0` and populated `runner_name`.
3. Runner OS is Linux and architecture is x64.
4. Required labels and runner-group access are confirmed.
5. Sentinel checks complete successfully and the job has instantiated steps.
6. Logs are retrievable and show the same run, attempt, commit and runner identity.
7. Non-empty artifact exists for that exact run and attempt.
8. Artifact SHA-256 digest recomputes correctly and matches the captured checksum.
9. Independent reviewer records the result and evidence references.
10. No contradictory or missing evidence remains.

Any missing predicate yields `G02 BLOCKED`, not partial acceptance. This is distinct from downstream release readiness.

## 9. Current evidence and disposition

The latest recorded hosted diagnostic run `40595369983`, attempt 2, failed before observable step execution: `runner_id=0`, empty runner name, no steps, no artifact, and job-log retrieval returned `BlobNotFound`. The branch inventory snapshot contained no active runs to cancel. This evidence does not uniquely identify the root cause and does not prove the dedicated runner is or is not currently polling.

Current status:

- Runner assignment: **UNVERIFIED / BLOCKED**
- Sentinel execution: **BLOCKED**
- Logs and artifact: **NOT AVAILABLE for the failed hosted diagnostic**
- G02 acceptance: **BLOCKED**
- Merge: **DRAFT / REVIEW REQUIRED**
- Production and last-known-good: **PROTECTED HOLD**

## 10. Operator handoff checklist

- [ ] Confirm the dedicated host and daemon are running and actively polling.
- [ ] Confirm runner-group access and required labels.
- [ ] Dispatch the canonical workflow with a valid incident reference and explicit canary confirmation.
- [ ] Capture run ID, attempt, job ID, commit SHA, runner ID and runner name.
- [ ] Verify successful steps and retrieve logs.
- [ ] Download the artifact and independently validate SHA-256.
- [ ] Have a second reviewer reconcile the evidence against the acceptance predicate.
- [ ] Record gate disposition; keep production held unless every separate release gate is independently accepted.

**This plan is a control document, not execution evidence. It does not certify G02.**
