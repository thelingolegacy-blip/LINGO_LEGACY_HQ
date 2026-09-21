# That's My Lingo Vegas Studio — Reset Handoff v1.0

Date: 2026-09-21
Status: READY FOR NEXT CONTROLLED WINDOW
Branch: studio-hub/stack-sync-2026-09-21

## Objective

Provide the exact restart sequence for the first controlled execution window after AppDeploy deployment capacity returns.

## Phase 0 — Preserve

Before any mutation:
- Preserve current AppDeploy READY evidence.
- Preserve current screenshots and error readback.
- Preserve current PR head SHA.
- Preserve the empty Vegas media inventory as the baseline.
- Preserve GitHub runner failure evidence.
- Preserve the production/LKG hold state.

No baseline artifact may be overwritten by a new result.

## Phase 1 — Re-read platform controls

1. Request fresh AppDeploy deployment instructions.
2. Confirm the platform no longer reports the daily credit floor.
3. Confirm the minimum deployment-credit requirement.
4. Confirm current app ID and current source snapshot.
5. Stop if the platform still reports a credit restriction.

Do not attempt repeated deployments while the platform explicitly blocks them.

## Phase 2 — Synchronize only approved media

Target namespace:

`public/resources/studios/casino/**`

Add only assets represented in the approved Vegas Asset Manifest.

Required minimum:
- background.webm
- poster.webp
- ambient.mp3
- welcome-voice.mp3
- ui-enter.mp3
- ui-hover.mp3
- reward-stinger.mp3
- mission-complete.mp3
- event-stinger.mp3
- world-gate.webp
- boulevard.webp
- rewards.webp
- events.webp
- community.webp

For each asset:
- verify source identity;
- verify file type;
- verify non-empty content;
- verify path;
- verify no credentials or secrets are embedded;
- preserve provenance;
- record the resulting resource inventory.

If a generated asset is only available as an external URL and has not been ingested through the controlled resource path, it is **not deployed media**.

## Phase 3 — Scoped application update

Only after Phase 0 and Phase 1 pass:
- sync the current source snapshot;
- apply the smallest scoped diff;
- preserve existing hash routing;
- preserve graceful missing-media fallback;
- preserve sound-off default;
- preserve reduced-motion behavior;
- preserve sweepstakes boundary;
- preserve virtual-economy separation.

Do not alter DNS, Cloudflare, Firebase production, LKG, or release configuration in this phase.

## Phase 4 — Deployment readback

After deployment:
- poll status at the platform-required interval;
- capture terminal status;
- capture source/applied version;
- capture deployment timestamp;
- capture desktop QA;
- capture mobile QA;
- capture frontend/backend/network errors;
- capture E2E result without converting null/unexecuted into pass;
- capture resource inventory.

If errors appear, use the smallest scoped repair. Maximum three controlled repair iterations; then stop and preserve evidence.

## Phase 5 — Runtime acceptance

Verify:
1. World Gate entry.
2. Vegas World identity.
3. Boulevard/media rendering.
4. Audio explicit activation.
5. Game launch.
6. Mission loop.
7. Virtual reward loop.
8. Sweepstakes information and eligible entry boundary.
9. Events.
10. Community.
11. Commerce.
12. World exit.
13. Reduced motion.
14. Missing-media fallback.
15. Absence of prohibited wagering/cash states.

## Phase 6 — Independent CI gate

Do not infer CI success from AppDeploy.

For RUNNER_GATE:
- runner_id > 0;
- runner_name populated;
- steps instantiated;
- first step executes;
- real logs retrievable.

Anything less remains RUNNER_GATE = FAIL/CLOSED.

## Phase 7 — Stop point

Even if all staging/runtime checks pass:
- do not merge PR #26;
- do not change production DNS;
- do not change Cloudflare production routing;
- do not write Firebase production state;
- do not alter LKG;
- do not activate the production release.

Those require their own independent evidence and authorization.

## Current blockers

- AppDeploy deployment credit floor until 2026-09-22T00:00:00Z.
- GitHub runner dispatch failure with zero instantiated steps and unavailable logs.
- Vegas media binaries not yet provisioned into AppDeploy.
- Production promotion remains blocked by governance.

## Restart decision

The correct restart event is:

**capacity restored + fresh deployment instructions + preserved baseline**

—not merely the passage of time.

## Fail-closed instruction

If any control, evidence, provenance, or runtime result is ambiguous:

**STOP. Preserve. Diagnose. Do not promote.**
