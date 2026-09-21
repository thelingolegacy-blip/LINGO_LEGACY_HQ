# Production Lifecycle State Ledger v1.0

Date: 2026-09-21
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Purpose
Provide one canonical status vocabulary across Phases 0 through 4.
The ledger is descriptive and does not grant authorization.

## State vocabulary
`LOCKED` — mutation is prohibited.
`READY` — prerequisites are present but execution has not occurred.
`RUNNING` — an authorized operation is actively executing.
`PASSED` — the defined evidence for that gate is satisfied.
`BLOCKED` — required predecessor or evidence is unavailable.
`FAILED` — the defined check executed and did not satisfy its acceptance criteria.
`ELIGIBLE` — evidence supports a release-candidate authorization request.
`AUTHORIZED` — explicit permission exists for the declared scope.
`PROMOTED` — the authorized mutation completed.
`ACCEPTED` — independent post-promotion validation passed.
`ROLLED_BACK` — production was returned to the recorded known-good artifact.

## State transition rules
LOCKED -> READY requires prerequisites.
READY -> RUNNING requires the applicable authorization.
RUNNING -> PASSED requires qualifying evidence.
RUNNING -> FAILED requires an executed check with a failed acceptance condition.
PASSED -> ELIGIBLE requires all required predecessor gates.
ELIGIBLE -> AUTHORIZED requires explicit authorization.
AUTHORIZED -> PROMOTED requires execution within declared scope.
PROMOTED -> ACCEPTED requires independent production validation.
PROMOTED -> ROLLED_BACK occurs when rollback criteria are met and the authorized rollback path executes.
Any ambiguous or contradictory state -> BLOCKED until reconciled.

## Current authoritative ledger
G00 SOURCE AUTHORITY = PASS
G01 REPOSITORY = PASS
G02 RUNNER DISPATCH = FAIL/CLOSED
G03 CI EXECUTION = BLOCKED
G04 CERTIFICATION = BLOCKED
G05 RELEASE CANDIDATE = BLOCKED
G06 DEPLOYMENT = BLOCKED
G07 LIVE VALIDATION = BLOCKED
G08 SYNCHRONIZATION = BLOCKED
G09 ACTIVATION = BLOCKED
G10 POST-ACTIVATION = BLOCKED
G11 ACCEPTANCE = BLOCKED

RUNNER_GATE = FAIL/CLOSED
FAIL_CLOSED = ACTIVE
LKG = PROTECTED
MUTATION_FREEZE = ACTIVE
PROMOTION = BLOCKED
PRODUCTION_AUTH = NOT_GRANTED
PRODUCTION_MUTATION = LOCKED
ACTIVATION = BLOCKED

## Phase documents
Phase 0: protected hold final disposition.
Phase 1: next-window controlled execution plan.
Phase 2: release-candidate gate.
Phase 3: production authorization and promotion control.
Phase 4: post-promotion verification, rollback, and acceptance.

## Single source of truth rule
If any project note, dashboard status, deployment message, or external readiness signal conflicts with this ledger, the conflict must be resolved against the underlying authoritative evidence before the ledger changes.

## Evidence precedence
1. Direct authoritative runtime/CI/deployment evidence.
2. Platform-generated deployment/readback evidence.
3. Repository source and immutable commit identity.
4. QA observations and screenshots.
5. Human-reported observations.
6. Planning documents.

Lower-level evidence cannot override contradictory higher-level evidence without reconciliation.

## Next-event contract
The next legitimate state transition is not production promotion.
The next legitimate transition is recovery of the blocked execution prerequisites:
1. qualifying GitHub runner telemetry;
2. restored AppDeploy deployment capacity;
3. fresh deployment instructions/readback;
4. preserved baseline verification.

Only then may Phase 1 execution begin.

## Final invariant
NO VERIFIED EVIDENCE -> NO GATE PASS -> NO AUTHORIZATION -> NO PROMOTION -> NO ACTIVATION.

This invariant remains active regardless of staging readiness, dashboard status, mergeability, generated media, or external service availability.