# Digital World Studio — Universe Contract

Date: 2026-09-21

## Purpose

The Lingo Legacy homepage is the **Digital World Studio** and canonical world gate.

The homepage owns discovery and world selection. Each property landing page is treated as a distinct universe entry rather than a generic directory card.

## World hierarchy

Digital World Studio
→ World Gate
→ Property / Universe Landing
→ World Functions
→ Content Loop
→ Commerce / Monetization Loop
→ Live App, Website, Blog, or Store
→ Connected Worlds
→ Legacy Home

## Required universe characteristics

Every property landing should provide:

- a distinct world identity and title
- route-specific visual treatment
- world lore / context
- functions a visitor can perform
- a content loop
- a commerce or monetization model where applicable
- a clear primary destination
- connected-world navigation
- a persistent return path to the Digital World Studio
- graceful media fallback
- audio off by default
- reduced-motion support
- mobile-safe controls

## Current world families

### Avalon District
People, restoration, opportunity, community services, stories, workforce and neighborhood infrastructure.

### Legacy Operating City
Identity, access, commerce, AI, travel, routing and shared platform services.

### Game143 Universe
Games, characters, missions, competition, events and expandable entertainment worlds.

### LingoCampus
Learning, creator labs, language practice, curriculum, assessment and opportunity pathways.

## Featured property worlds

- Loyalty Lane World — streetwear, commerce, lifestyle and community.
- KottonsCode World — story, youth, characters and learning-through-play.
- That’s My Lingo Casino World — game-room experience, play, content and commercial pathways.
- LINGOtravel World — travel discovery and experience routing.
- LINGO.ai World — AI and creator services.
- Lingo City World — legacy-world exploration and expandable IP.
- U-NO World — language-driven learning through play.
- DiceShift Hotel World — hospitality-world storytelling and interactive IP.

## Shared services

Worlds remain connected through shared architecture:

- Lingo ID / identity
- shared navigation
- commerce gateway
- application directory
- content/publication layer
- analytics/telemetry boundary
- approved media pipeline
- Cloudflare production edge
- GitHub source/evidence authority
- AppDeploy staging/QA

Firebase remains an identity/data layer and is not the public media origin.

## Media contract

Current staging references route-specific WebM, MP3 and WebP resources under:

`public/resources/studios/<world>/`

The source contract exists, but current AppDeploy verification shows the resource directory is empty. No production media-fidelity claim is authorized until binaries are actually provisioned and verified.

## AppDeploy routing

AppDeploy staging uses hash routing because the platform's SPA contract requires relative/hash routing.

Canonical production URL semantics remain documented separately from the AppDeploy staging transport mechanism.

## Monetization rule

A universe may contain:

- commerce
- subscriptions
- premium access
- virtual economies
- memberships
- sponsorships
- services
- certifications
- creator programs
- partner programs

Monetization must remain subordinate to the universe identity and must route to an explicitly governed destination.

## Production gate

This contract does not authorize:

- production DNS mutation
- Cloudflare promotion
- Firebase production writes
- AppDeploy production promotion
- PR merge
- LKG mutation
- runner-gate bypass

Production remains fail-closed until the canonical GitHub execution/evidence chain passes.
