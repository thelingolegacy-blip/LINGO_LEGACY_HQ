# That's My Lingo Vegas Studio — Evidence Capture Checklist v1.0

Date: 2026-09-21
Status: STAGING / PRODUCTION-LOCKED
Branch: studio-hub/stack-sync-2026-09-21

## Purpose

Define the minimum evidence bundle required before the Vegas Studio can advance from staged design/runtime readiness toward any governed release decision.

## Hard boundaries

- No real-money wagering.
- No deposits, withdrawals, cash-out, sportsbook, wagering odds, or cash balances.
- Virtual gameplay units, loyalty benefits, sweepstakes entries, promotional prizes, and ordinary commerce transactions remain distinct.
- Sweepstakes surfaces must disclose eligibility, rules, entry method, and prize information where applicable.
- Missing media is a graceful fallback condition, not permission to fabricate deployment evidence.
- Staging readiness is not production certification.
- No DNS, Cloudflare, Firebase production, LKG, activation, or PR-merge mutation is implied by this checklist.

## Bundle A — Source integrity

Capture:
1. Repository and branch.
2. Exact head SHA.
3. Changed-file list.
4. Relevant source/resource paths.
5. Hashes or commit identifiers for:
   - Media & Runtime Contract
   - Asset Manifest
   - Sweepstakes Runtime Boundary
   - QA / Activation Matrix
   - Interaction State Machine
   - Next Deploy Runbook
   - this checklist

Acceptance:
- Every referenced artifact resolves to the intended branch.
- No evidence artifact is attributed to a different revision.

## Bundle B — AppDeploy staging

Capture only after the platform permits a deployment/readback:
1. App ID.
2. Applied/source version.
3. Deployment timestamp.
4. Terminal status.
5. Desktop QA screenshot.
6. Mobile QA screenshot.
7. Frontend error list.
8. Backend error list.
9. Network error list.
10. E2E result, if actually executed.
11. Resource inventory for `public/resources/studios/casino/**`.

Acceptance:
- Values are copied from AppDeploy readback.
- `e2e_tests=null` is recorded as unexecuted, not as a pass.
- Empty media inventory is recorded as empty.

## Bundle C — Runtime behavior

Capture reproducible observations for:
- Hash route entry and route transitions.
- World Gate -> Vegas World.
- World identity/lore/functions/content/revenue surfaces.
- Game launch boundary.
- Mission activation/completion.
- Virtual reward reveal.
- Sweepstakes information/entry boundary.
- Event surface.
- Community surface.
- Commerce surface.
- World exit/back navigation.
- Sound off default and explicit sound enable.
- Reduced-motion behavior.
- Missing-media fallback.
- No creation of prohibited wagering/cash states.

Acceptance:
- Every observed state maps to the approved interaction state machine.
- No prohibited state transition is observed.

## Bundle D — Media fidelity

For each provisioned asset, capture:
- path
- MIME/type
- dimensions or duration where applicable
- load result
- fallback result
- cache policy when a public CDN is introduced

Required namespace:
`public/resources/studios/casino/**`

Required named assets are governed by the Asset Manifest. Do not mark an asset present from a placeholder path alone.

## Bundle E — Governance / release gate

Before any promotion request:
- GitHub runner evidence must show runner_id > 0.
- runner_name must be populated.
- steps must instantiate.
- at least one real step must execute.
- real logs must be retrievable.
- RUNNER_GATE must independently pass.
- AppDeploy deployment evidence must be current for the candidate revision.
- Production authority evidence must be separately captured.
- LKG comparison must be preserved.
- Promotion authorization must be explicit and independently evidenced.

## Current disposition

As of 2026-09-21:
- AppDeploy Studio Hub: READY from prior staging readback.
- Vegas media binaries in AppDeploy: NOT PROVISIONED.
- New AppDeploy deployment: PAUSED by platform daily credit floor until 2026-09-22T00:00:00Z.
- GitHub runner dispatch: FAIL/CLOSED; latest reproduced job has zero instantiated steps and no retrievable logs.
- PR #26: OPEN / UNMERGED / REVIEW-ONLY.
- Production: UNCHANGED.
- LKG: PROTECTED.
- Promotion: BLOCKED.

## Required next event

When AppDeploy deployment capacity resets, first re-read deployment instructions, then perform only the smallest scoped media/runtime synchronization required by the approved manifest. Preserve the pre-deployment evidence bundle before mutation.

When GitHub runner dispatch produces qualifying execution telemetry, capture it as an independent gate artifact. Do not combine AppDeploy readiness with runner certification.

## Fail-closed rule

If any required evidence is missing, stale, contradictory, or unverifiable:

**STOP — preserve state — do not promote.**
