# GitHub Runner Support Escalation Packet v1.1

Date: 2026-09-22
Repository: thelingolegacy-blip/LINGO_LEGACY_HQ
Visibility: public
Current branch: main

## Current reproduction

Corrected probe workflows use `runs-on: ubuntu-latest`.

Latest corrected route probe:
- Run: 35786113936
- Job: 106943216523
- Status: completed
- Conclusion: failure
- runner_id: 0
- runner_name: empty
- runner_group_name: empty
- steps: []
- logs_url: null
- direct log retrieval: HTTP 404 BlobNotFound

Latest corrected commit:
- b97ddc7e1fc038c28950b1af0d06ad89272626a1

## Interpretation

The invalid `ubuntu-slim` label was corrected. The corrected `ubuntu-latest` probe still terminates before runner assignment and before step initialization.

A normal `ubuntu-latest` Jekyll workflow triggered by the same commit also failed before steps/logs were available.

This confirms that the remaining blocker is not established as an application workflow-step defect. The evidence boundary remains GitHub Actions dispatch/control-plane behavior.

## Required GitHub-side investigation

1. Hosted-runner availability for this repository/account.
2. Actions policy restrictions.
3. Runner groups or organization/enterprise restrictions.
4. Account/platform-level Actions restrictions.
5. Hosted-runner eligibility for this public repository.
6. Why jobs terminate with runner_id=0 and no instantiated steps.
7. Why job log blobs are absent and return BlobNotFound.

## Unlock condition

RUNNER_GATE may change only when fresh telemetry proves:

runner_id > 0
AND runner_name != ""
AND steps are instantiated
AND sentinel executes
AND logs are retrievable.

## Governance

RUNNER_GATE = FAIL/CLOSED
CI_EXECUTION = BLOCKED
CERTIFICATION = BLOCKED
DEPLOYMENT/PROMOTION = BLOCKED
LKG = PROTECTED
PRODUCTION = UNCHANGED

No production workaround or gate bypass is authorized by this packet.
