# That’s My Lingo Vegas Studio — Asset Manifest v1.0

Date: 2026-09-21
Status: STAGED / AWAITING APPDEPLOY MEDIA UPLOAD

## Asset namespace

All Vegas Studio production media belongs under:

public/resources/studios/casino/

## Required production assets

| Asset | Intended role | Fallback |
|---|---|---|
| background.webm | looping Vegas environment | CSS world field |
| poster.webp | video poster / static hero | generated/reference hero |
| ambient.mp3 | optional environment bed | silent |
| welcome-voice.mp3 | branded world introduction | text-only welcome |
| ui-enter.mp3 | portal transition | visual transition |
| ui-hover.mp3 | navigation feedback | none |
| reward-stinger.mp3 | virtual reward feedback | visual burst |
| mission-complete.mp3 | mission completion | visual confirmation |
| event-stinger.mp3 | event announcement | marquee animation |
| world-gate.webp | World Gate visual | CSS gradient |
| boulevard.webp | main Vegas district | poster.webp |
| rewards.webp | rewards dashboard visual | CSS panel |
| events.webp | live-events visual | CSS panel |
| community.webp | community visual | CSS panel |

## Media rules

1. Missing media never blocks the application shell.
2. Broken media never creates an uncaught runtime error.
3. Video remains muted by default.
4. Audio requires an explicit user interaction before audible playback.
5. Reduced-motion preference disables continuous video/particle motion.
6. Media URLs must remain same-origin or approved controlled asset origins.
7. No credentials, tokens, private keys, or user data may be embedded in media URLs.
8. Production media promotion requires preserved evidence of the exact asset set.

## Generated reference artwork

Current visual references include:
- full World Gate / Digital World Studio composition
- That’s My Lingo Vegas boulevard composition
- player/rewards/events dashboard composition

These references are design inputs until copied into the controlled media resource pipeline.

## Asset QA

Every uploaded asset must be checked for:
- correct path
- MIME type
- non-zero size
- playable/decodeable media where applicable
- expected dimensions
- no broken requests
- no console errors
- graceful fallback
- correct mobile behavior
- reduced-motion behavior

## Promotion gate

MEDIA_READY is not equivalent to PRODUCTION_READY.

Production promotion remains blocked until the established CI runner/evidence gates pass.
