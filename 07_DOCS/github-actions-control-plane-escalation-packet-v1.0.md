# GitHub Actions Control-Plane Escalation Packet v1.0

Date: 2026-09-21
Repository: thelingolegacy-blip/LINGO_LEGACY_HQ
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Executive finding
Multiple controlled workflows fail before step execution. The same essential signature was reproduced across Ubuntu hosted-runner labels and a Windows hosted-runner route.

## Freshest evidence
Windows alternate route:
- workflow: Runner Route Probe — Alternate Hosted Fleet
- run: 35650727264
- job: 106502210234
- status: completed
- conclusion: failure
- steps: []
- logs_url: null
- log retrieval: HTTP 404 BlobNotFound
- RequestId: 0dbedfec-901e-00bd-4507-4a2709000000
- timestamp: 2026-09-21T20:25:01.2984538Z

Latest Ubuntu-family evidence:
- run: 35649394259
- job: 106497742825
- status: completed
- conclusion: failure
- steps: []
- logs_url: null
- log retrieval: HTTP 404 BlobNotFound
- RequestId: 14a1a837-c01e-00d2-1906-4a2dfa000000
- timestamp: 2026-09-21T20:20:37.6364654Z

Historical evidence includes repeated failures under ubuntu-latest, ubuntu-22.04, and ubuntu-24.04 with the same pre-execution signature.

## Repository-side verification
Inspected workflows:
- .github/workflows/auto-mode-policy-validation.yml
- .github/workflows/policy-gate.yml
- .github/workflows/jekyll-docker.yml

All inspected workflows define jobs with actual steps and use ubuntu-latest. The alternate diagnostic workflow uses windows-latest and a first-step sentinel.

## Requested GitHub-side checks
1. Confirm Actions service health for this repository/account at the observed timestamps.
2. Confirm hosted-runner capacity and dispatch availability.
3. Confirm organization/enterprise Actions policies permit hosted runners.
4. Confirm runner groups and repository access restrictions.
5. Confirm account-level or platform-level restrictions on workflow execution.
6. Confirm whether jobs are being rejected before runner assignment.
7. Confirm whether job-log object creation is failing independently or because no runner execution occurs.
8. Confirm whether the repository is subject to any hidden Actions quota, billing, abuse, or trust restriction affecting hosted-runner dispatch.
9. Identify the control-plane reason for completed/failure jobs with zero instantiated steps.

## Evidence boundary
This packet does not claim a root cause. It records an observed failure boundary and asks GitHub to identify the authoritative control-plane reason.

## Requested response
Please provide the specific repository/account/control-plane condition preventing hosted-runner assignment and the remediation required to restore normal workflow execution.

## Safety posture
No production bypass is requested.
No self-hosted runner substitution is authorized by this packet.
No DNS, Cloudflare, Firebase, AppDeploy production, or PR merge action is requested.

## Unlock condition
runner_id > 0 -> runner_name populated -> steps instantiated -> first step executes -> retrievable logs.

Until that condition is observed, RUNNER_GATE remains FAIL/CLOSED.