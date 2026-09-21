# Studio Hub Staging Runtime Checkpoint — 2026-09-21

## Status

- AppDeploy app: `lingo-legacy-studio-hub-nhda3b`
- Latest staging snapshot: `1789978708549`
- AppDeploy status: READY
- Frontend errors: 0
- Backend errors: 0
- Network errors: 0
- Production promotion: NOT AUTHORIZED

## Runtime corrections

The staging implementation was corrected to:

1. Render one Studio Universe preview per property landing page.
2. Resolve route-specific audio through the declared `audioAsset` path rather than a synthetic browser oscillator.
3. Keep audio disabled until explicit user action.
4. Stop and reset the audio element when sound is disabled or the route changes.
5. Preserve graceful playback failure when an asset is unavailable.
6. Preserve deterministic WebM/WebP/MP3 resource paths.

## Media contract

The following resource paths remain declared and require actual binary assets before media fidelity can be certified:

- `public/resources/studios/loyalty-lane/background.webm`
- `public/resources/studios/loyalty-lane/ambient.mp3`
- `public/resources/studios/loyalty-lane/poster.webp`
- `public/resources/studios/kottons-code/background.webm`
- `public/resources/studios/kottons-code/ambient.mp3`
- `public/resources/studios/kottons-code/poster.webp`
- `public/resources/studios/casino/background.webm`
- `public/resources/studios/casino/ambient.mp3`
- `public/resources/studios/casino/poster.webp`

These are resource-contract paths, not evidence that the binaries have been provisioned.

## Test coverage

The staging test suite covers:

- canonical homepage and property routing
- Studio Universe preview and sound control
- configured studio audio behavior
- property CTAs and brand navigation
- application directory launch behavior
- mobile property presentation and controls

## Production gate

This checkpoint does not authorize:

- Git merge
- Cloudflare production mutation
- DNS changes
- Firebase production writes
- AppDeploy promotion
- production activation
- LKG modification

GitHub runner evidence remains the controlling execution gate. The latest PR-associated run remains a completed failure with zero instantiated job steps and unavailable logs. A staging READY state does not substitute for authoritative CI/runtime evidence.
