# That’s My Lingo Vegas Studio — Media & Runtime Contract

Date: 2026-09-21
Status: STAGING SPEC / PRODUCTION LOCKED

## Product boundary

That’s My Lingo Vegas is a fictional entertainment and sweepstakes environment. The runtime must not implement real-money wagering, cash betting, deposits, withdrawals, sportsbook functionality, or real-money casino balances.

Virtual progression may use non-cash currencies, loyalty points, cosmetic unlocks, missions, events, and other game-state rewards. Sweepstakes mechanics must remain separately identified and subject to applicable rules, eligibility, disclosures, entry requirements, and prize administration.

## World presentation

The Vegas Studio is a complete audiovisual world rather than a static landing page:

- black obsidian, metallic gold, royal purple, neon architecture
- animated city skyline and boulevard
- flying vehicles and air traffic
- holographic signage and floating virtual objects
- fountains, particles, light trails, ambient bloom, and marquee effects
- featured games and world districts
- player profile and progression
- missions and achievements
- virtual rewards
- VIP/lounge areas
- live events and creator showcases
- exclusive merchandise/drops
- community/social spaces
- sweepstakes information and entry surfaces
- return gateway to the Lingo Legacy Digital World Studio

## Interaction model

Primary loops:

1. Enter Vegas World.
2. Explore districts and game surfaces.
3. Play permitted virtual entertainment experiences.
4. Earn non-cash progression/reward units.
5. Complete missions and achievements.
6. Discover live events and creator content.
7. View sweepstakes opportunities separately from ordinary virtual play.
8. Navigate to connected Lingo Legacy worlds.

## Media contract

Generated media should be stored as controlled production assets under:

- public/resources/studios/casino/

Expected asset families:

- background visual / hero still
- optional WebM motion background
- poster fallback
- ambient music
- branded voiceover
- UI sound effects
- transition sounds
- reward/mission stingers
- event ambience
- optional particle overlays

Current generated concept art is reference/design material until formally uploaded into the AppDeploy resource pipeline. Missing binaries must degrade gracefully to CSS/runtime effects rather than producing broken-media UI.

## Audio

Sound is opt-in and independently controllable. The studio must provide:

- master sound toggle
- ambient/music state
- voiceover state
- graceful playback failure handling
- reduced-motion compatibility
- no forced autoplay with audible output

A branded welcome voiceover has been generated for the Vegas Studio and explicitly states the non-wagering boundary.

## Runtime motion

When motion is enabled, the environment may animate:

- orbital/flying objects
- neon signage pulses
- particle fields
- fountain/light effects
- holographic panels
- reward counters
- event marquees
- background parallax

When reduced motion is requested, disable continuous animation and video while retaining the usable information architecture.

## Governance

This contract is staging/design scope only. It does not authorize:

- production DNS changes
- Cloudflare mutation
- Firebase production writes
- AppDeploy production promotion
- LKG changes
- PR merge
- production activation

Production remains governed by the existing fail-closed evidence chain.
