# Phase 3 Production Authorization and Promotion Control v1.0

Date: 2026-09-21
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Purpose
Define the authorization boundary after Release-Candidate eligibility and before any production mutation.
Phase 3 is an authorization-control layer. It does not perform deployment by itself.

## Required predecessor
Phase 2 must be RC-ELIGIBLE with a complete evidence package.
RC-CLOSED cannot enter Phase 3.

## Authorization dimensions
Each production mutation requires explicit authorization for its own scope:
- source/release revision
- target environment
- deployment mechanism
- DNS/domain surface if applicable
- Cloudflare resources if applicable
- Firebase production resources if applicable
- public activation
- monetization or commerce activation
- rollback authority

Authorization for one dimension does not imply authorization for another.

## PA-01 Release identity
Confirm exact candidate SHA, build/deployment identity, evidence timestamp, and immutable artifact references.

## PA-02 Target identity
Confirm exact production target, domain surface, Cloudflare Worker/resource, application target, and relevant backend environment.

## PA-03 Change-set scope
Enumerate every intended production mutation. Anything outside the declared set is prohibited.

## PA-04 Preflight baseline
Reconfirm LKG immediately before mutation. If LKG differs unexpectedly, stop and reconcile.

## PA-05 Rollback readiness
Record the rollback artifact, previous production identity, rollback mechanism, and verification signal before activation.

## PA-06 Activation authorization
Public activation is permitted only after the preceding controls pass and explicit authorization exists for the declared scope.

## PA-07 Post-promotion validation
Validate the production surface independently from staging evidence. Staging success cannot substitute for production validation.

## Promotion sequence
1. Freeze candidate identity.
2. Capture LKG baseline.
3. Capture production preflight evidence.
4. Confirm authorization scope.
5. Execute only the declared mutation.
6. Capture immediate deployment readback.
7. Validate DNS/routing where applicable.
8. Validate application response.
9. Validate critical runtime path.
10. Compare production behavior with the candidate evidence.
11. Record post-promotion telemetry.
12. Declare activation state only after evidence reconciliation.

## Automatic stop conditions
Stop and preserve state if:
- target identity differs;
- candidate SHA differs;
- unexpected files/resources change;
- deployment status is ambiguous;
- production response is inconsistent;
- DNS or routing differs from expected state;
- rollback cannot be verified;
- telemetry is missing;
- evidence cannot be retrieved;
- a prohibited product-boundary state appears.

## State model
PRODUCTION_AUTH = NOT_GRANTED
PRODUCTION_MUTATION = LOCKED
ACTIVATION = BLOCKED
POST_PROMOTION = NOT_STARTED

After explicit authorization and successful preflight:
PRODUCTION_AUTH = GRANTED_FOR_DECLARED_SCOPE
PRODUCTION_MUTATION = OPEN_FOR_DECLARED_SCOPE

After deployment plus independent validation:
ACTIVATION = VERIFIED_FOR_DECLARED_SCOPE

Anything less remains blocked.

## Non-authorizations
This document does not authorize a production mutation, PR merge, DNS change, Cloudflare change, Firebase write, AppDeploy promotion, or monetization activation.

## Final principle
Eligibility is evidence. Authorization is permission. Promotion is an action. Validation is proof. None of these states may be inferred from another.