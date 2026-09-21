# Phase 4 Post-Promotion Verification, Rollback and Acceptance v1.0

Date: 2026-09-21
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Purpose
Close the production lifecycle after an independently authorized mutation.
Phase 4 is evidence and recovery control. It does not authorize a new production mutation.

## Entry conditions
Phase 4 may begin only after:
- Phase 2 is RC-ELIGIBLE;
- Phase 3 authorization is explicitly granted for the declared scope;
- preflight baseline is preserved;
- rollback artifact and prior production identity are recorded;
- the authorized mutation has actually been executed.

## PV-01 Deployment identity
Capture exact production deployment identity, revision/SHA, timestamp, environment, target, and resulting status.

## PV-02 Edge and routing verification
Verify the production domain and relevant routes independently. Confirm expected status codes, redirects, canonical host behavior, and routing targets.

## PV-03 Application verification
Verify the critical public journey from the production surface:
1. homepage/world gate;
2. property landing;
3. intended destination;
4. critical interaction;
5. return/navigation path.

## PV-04 Runtime telemetry
Capture available production error, network, performance, and application telemetry. Distinguish absence of reported errors from proof that no errors exist.

## PV-05 Product-boundary verification
Reconfirm the production build has not introduced prohibited wagering, deposit, cash-out, odds, sportsbook, or cash-balance states. Confirm sweepstakes separation remains intact.

## PV-06 Media verification
Confirm production media resolves correctly, media failures degrade safely, audio remains explicitly activated, and reduced-motion behavior remains functional.

## PV-07 Rollback decision
Rollback is required when a critical acceptance condition fails and the failure cannot be safely isolated without expanding scope.

Rollback triggers include:
- incorrect production target;
- wrong candidate revision;
- broken canonical routing;
- critical application failure;
- security boundary failure;
- prohibited product state;
- unrecoverable media/runtime failure;
- missing or contradictory production evidence;
- inability to establish production integrity.

## Rollback sequence
1. Freeze further mutation.
2. Preserve failure evidence.
3. Identify the last known-good production artifact.
4. Execute only the pre-authorized rollback mechanism.
5. Verify production identity.
6. Verify critical routes.
7. Capture rollback telemetry.
8. Reconcile against LKG.
9. Return production to a known-good state.

Rollback does not authorize a redesign or unrelated repair.

## PV-08 Acceptance
Acceptance requires all critical production checks to pass and evidence to be internally consistent.

Acceptance states:
`ACCEPTED` — production behavior is verified for the declared scope.
`ROLLBACK_REQUIRED` — critical acceptance condition failed.
`ACCEPTANCE_BLOCKED` — evidence is insufficient or contradictory.

## Completion record
A completed release record must contain:
- authorized scope;
- candidate identity;
- production deployment identity;
- preflight baseline;
- post-promotion evidence;
- runtime checks;
- media checks;
- product-boundary checks;
- telemetry;
- rollback disposition;
- acceptance state;
- immutable timestamps.

## No inference rule
Staging success does not prove production success.
Production availability does not prove acceptance.
Absence of an observed error does not prove absence of all errors.
Acceptance requires the defined evidence set.

## Current status at document creation
PHASE_4 = NOT_STARTED
PRODUCTION_AUTH = NOT_GRANTED
PRODUCTION_MUTATION = LOCKED
ACTIVATION = BLOCKED
LKG = PROTECTED

## Final lifecycle principle
BUILD -> TEST -> EVIDENCE -> ELIGIBILITY -> AUTHORIZATION -> PROMOTION -> VALIDATION -> ACCEPTANCE.
Each transition requires its own evidence. No transition may be inferred from a neighboring state.