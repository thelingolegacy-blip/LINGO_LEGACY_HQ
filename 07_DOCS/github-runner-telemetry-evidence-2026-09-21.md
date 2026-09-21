# GitHub Runner Telemetry Evidence — 2026-09-21

## Scope

Repository: thelingolegacy-blip/LINGO_LEGACY_HQ
Branch: studio-hub/stack-sync-2026-09-21
PR: #26
Purpose: preserve reproducible pre-execution runner-boundary evidence.

## Latest retry

Run: 35646802002
Original job: 106489128358
Retry job: 106494085840

Retry request was accepted by GitHub.

Final retry state:
- status: completed
- conclusion: failure
- steps: []
- logs_url: null
- runner assignment: not observable
- direct log retrieval: 404 BlobNotFound
- log request ID: dbd4ba43-701e-0001-3a03-4a6ea4000000
- log retrieval time: 2026-09-21T20:00:43.0866605Z

## Interpretation

The workflow job was created and executed to terminal failure without observable runner assignment, instantiated steps, first-step execution, or retrievable logs.

This evidence does NOT prove the ultimate root cause. It establishes the observed failure boundary: before repository workflow-step execution.

## Workflow sanity check

Current branch workflows inspected:
- .github/workflows/auto-mode-policy-validation.yml
- .github/workflows/policy-gate.yml
- .github/workflows/jekyll-docker.yml

All three explicitly declare `runs-on: ubuntu-latest` and contain instantiated workflow steps including checkout where applicable.

Therefore the current evidence does not support attributing the observed zero-step signature to an empty workflow definition.

## Gate disposition

RUNNER_GATE = FAIL / CLOSED
CI_EXECUTION = BLOCKED
CERTIFICATION = BLOCKED
PROMOTION = BLOCKED
PRODUCTION = UNCHANGED
LKG = PROTECTED

## Required next evidence

A qualifying runner event must show:
1. runner_id > 0;
2. runner_name populated;
3. steps instantiated;
4. first step executes;
5. real logs retrievable.

Only then may RUNNER_GATE be reconsidered.

## Support packet identifiers

Primary historical smoke run:
- 35505727978
- job 106065097658

Latest reproduced retry:
- 35646802002
- job 106494085840

Do not merge PR #26, mutate production infrastructure, or infer application failure from this telemetry.
