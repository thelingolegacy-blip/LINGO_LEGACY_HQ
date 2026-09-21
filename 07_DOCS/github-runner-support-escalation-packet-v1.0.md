# GitHub Runner Support Escalation Packet v1.0

Date: 2026-09-21
Repository: thelingolegacy-blip/LINGO_LEGACY_HQ
Visibility: public
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Issue
GitHub Actions jobs are reaching terminal failure before runner assignment and before workflow steps instantiate.

## Reproduction set
Historical controlled smoke: Run 35505727978; Job 106065097658; runner_id 0; runner_name empty; steps null; logs unavailable.
Latest retry: Run 35646802002; Job 106494085840; completed/failure; steps []; logs_url null; logs BlobNotFound.
Latest branch-triggered reproduction: Commit 0767a9f4360658b882c98518cbe7653756cf99b7; Run 35648556654; Job 106494918091; completed/failure; steps []; logs_url null; logs BlobNotFound; request ID f12e71ea-901e-010b-4604-4a076c000000; time 2026-09-21T20:03:06.8734323Z.

## Workflow verification
The branch contains auto-mode-policy-validation.yml, policy-gate.yml, and jekyll-docker.yml. Each declares runs-on: ubuntu-latest and contains actual workflow steps. The failure is therefore observed before normal step execution.

## Repository controls
Repository metadata confirms public visibility and connected integration permissions including admin/maintain/push/pull. Auto-merge is disabled.

## Requested GitHub-side investigation
1. Hosted-runner availability for the repository/account.
2. Actions policy restrictions.
3. Runner groups and organization/enterprise restrictions, if applicable.
4. Account/platform-level Actions restrictions.
5. Whether jobs are rejected or terminated by the Actions control plane before runner allocation.
6. Why job log blobs are absent and return BlobNotFound.
7. Whether the repository is eligible for hosted-runner dispatch despite public visibility.

## Evidence interpretation
This packet does not claim a definitive root cause. It documents the reproducible boundary: job creation -> terminal failure with no observable runner assignment, no steps, and no logs.

## Unlock condition
RUNNER_GATE may only change after telemetry shows runner_id > 0, runner_name populated, steps instantiated, first step executed, and real logs retrievable.

## Governance
RUNNER_GATE = FAIL/CLOSED
CI execution = BLOCKED
Certification = BLOCKED
Deployment/promotion = BLOCKED
LKG = PROTECTED
Production = UNCHANGED
PR #26 = OPEN / UNMERGED

No workaround in this packet authorizes production mutation or bypasses the runner gate.