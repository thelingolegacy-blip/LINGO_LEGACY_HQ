# Phase 1 Restart Packet v1.0

Date: 2026-09-21
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Purpose
Provide the exact restart sequence once the current external blockers clear.
This packet is procedural only and does not authorize production mutation.

## R0 — Preserve
- Preserve the current branch and PR state.
- Preserve LKG.
- Preserve all prior runner failure evidence.
- Preserve AppDeploy READY evidence.
- Preserve generated Vegas media as undeployed artifacts.
- Do not merge PR #26.

## R1 — Runner recovery evidence
Trigger a controlled workflow using the existing approved branch workflow.
Capture:
- run ID;
- job ID;
- runner_id;
- runner_name;
- job status;
- job conclusion;
- instantiated steps;
- first executed step;
- retrievable logs;
- artifacts, if any.

Acceptance requires runner_id > 0, populated runner_name, instantiated steps, first-step execution, and retrievable real logs.

## R2 — AppDeploy capacity recovery
After the documented credit reset window, obtain fresh deployment instructions.
Do not assume capacity restoration; verify it.
Capture the returned instructions and deployment constraints before modifying the app.

## R3 — Snapshot synchronization
Read the current Studio Hub source snapshot before editing.
Confirm the expected route, world, and resource contracts still exist.
Do not overwrite newer source changes with stale content.

## R4 — Media staging
Verify each approved Vegas asset independently before upload:
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

Missing assets remain missing; do not create false evidence.

## R5 — Scoped application update
Apply only the approved media/runtime changes.
Do not alter production DNS, Cloudflare, Firebase production state, or unrelated application surfaces.

## R6 — Controlled deployment
Deploy only after fresh instructions are verified.
Poll at the platform-required interval until terminal.
Capture deployment ID, version, timestamp, status, and errors.

## R7 — QA
Capture desktop and mobile QA.
Record frontend, backend, network, and E2E fields exactly as returned.
Verify hash routing, world entry, audio, reduced motion, media fallback, virtual economy, and sweepstakes separation.

## R8 — Evidence bundle
Preserve source SHA, deployment identity, media inventory, screenshots, QA results, runtime observations, and CI evidence.
Correlate timestamps and identifiers.

## R9 — Gate reconciliation
Update only gates supported by evidence.
Runner evidence may advance G02/G03; it does not automatically advance deployment, certification, activation, or acceptance.

## R10 — Stop point
After Phase 1 evidence is complete, stop before Phase 2 authorization.
Do not infer production readiness.

## Failure handling
Any failed or ambiguous step:
1. stop;
2. preserve evidence;
3. identify the exact failed boundary;
4. make no unrelated mutation;
5. return to the appropriate blocked state.

## Restart invariant
Recovery is not permission to promote.
Capacity is not authorization.
Staging readiness is not production certification.
Mergeability is not approval.