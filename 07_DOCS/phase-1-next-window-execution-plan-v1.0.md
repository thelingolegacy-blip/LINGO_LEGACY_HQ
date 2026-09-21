# Phase 1 Next-Window Execution Plan v1.0

Date: 2026-09-21
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Entry conditions

Phase 1 cannot begin until:
- GitHub runner evidence satisfies the RUNNER_GATE unlock condition.
- AppDeploy deployment capacity is restored.
- Fresh AppDeploy deployment instructions are available.
- The protected baseline remains preserved.

## Track A — GitHub execution

1. Capture the first qualifying runner telemetry.
2. Confirm runner_id > 0.
3. Confirm runner_name is populated.
4. Confirm workflow steps instantiate.
5. Confirm first step executes.
6. Retrieve real logs.
7. Preserve the complete run/job identifiers.
8. Reconcile RUNNER_GATE independently.

No production deployment is implied by a CI pass.

## Track B — AppDeploy media/runtime

1. Re-read deployment instructions.
2. Confirm current app/source snapshot.
3. Preserve current READY evidence.
4. Provision only approved Vegas assets under public/resources/studios/casino/**.
5. Verify each binary before use.
6. Apply the smallest scoped source/resource diff.
7. Deploy once.
8. Poll until terminal.
9. Capture desktop/mobile QA and all error fields.
10. Record E2E exactly as reported.
11. Record the resulting media inventory.

Maximum three scoped repair iterations if actual runtime errors occur. Persistent failure stops the track.

## Track C — Vegas runtime acceptance

Verify:
- World Gate entry
- Vegas World identity
- boulevard/background rendering
- explicit audio activation
- game launch
- mission loop
- virtual rewards
- sweepstakes information and entry boundary
- events
- community
- commerce
- exit/back navigation
- reduced-motion behavior
- missing-media fallback
- absence of prohibited wagering/cash states

## Track D — Evidence reconciliation

Build one candidate evidence bundle containing:
- source SHA
- AppDeploy source/deployment version
- deployment timestamp
- QA screenshots
- frontend/backend/network errors
- E2E result
- media inventory
- runtime observations
- GitHub runner telemetry
- LKG baseline reference

Do not collapse independent gates into one “ready” status.

## Track E — Release decision

Even after staging and CI evidence pass:
- keep PR #26 unmerged unless separately authorized;
- keep production DNS unchanged;
- keep Cloudflare production unchanged;
- keep Firebase production unchanged;
- preserve LKG;
- require independent production-authority evidence before any promotion.

## Completion criteria for Phase 1

Phase 1 is complete only when:
1. RUNNER_GATE is independently PASS.
2. Candidate staging revision has fresh AppDeploy evidence.
3. Vegas runtime acceptance is evidenced.
4. Media provenance is recorded.
5. Sweepstakes boundary remains intact.
6. No prohibited wagering/cash state exists.
7. Evidence is internally consistent.
8. No production mutation occurred without explicit authorization.

## If either dependency fails

Do not improvise around the gate.

Preserve the evidence, record the failure, diagnose the specific boundary, and return to protected hold.

## Transition

Phase 1 -> Phase 2 requires a separate release-candidate decision. A successful Phase 1 does not itself authorize production promotion.
