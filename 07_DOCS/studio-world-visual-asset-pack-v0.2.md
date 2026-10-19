# Studio-world visual asset pack — starter v0.2

This pack defines distinct editable vector marks and reusable UI icon primitives for the next product worlds. The marks are design drafts, not final approved trademarks or app-store submissions.

## Dedicated landing-page sources added
- `01_WEBSITES/LINGOarcade/index.html` — neon cyan arcade discovery.
- `01_WEBSITES/LINGOslots/index.html` — gold reel-game design, explicitly demo-only.
- `01_WEBSITES/LINGONexus/index.html` — violet/cyan discovery and network hub.
- `01_WEBSITES/LINGOmedia/index.html` — magenta creator and media-production studio.

## SVG symbols
File: `05_ASSETS/studio-world-ui-icons.svg`
- `icon-arcade`
- `icon-slots`
- `icon-nexus`
- `icon-media`
- `icon-wave`
- `icon-book`
- `icon-wallet`
- `icon-shield`

Symbols use `currentColor`, so product-specific design tokens control their appearance. Embed by referencing the symbol ID from an SVG `use` element or copy the symbol into a controlled sprite build. Validate same-origin/CSP and asset URL behavior in the actual app before release.

## Product-specific direction
| Product | Palette | Shape/motion language | Sound direction |
|---|---|---|---|
| Kotton's Code | Cream, botanical green, lime, peach | Soft organic shapes; playful, restrained movement | Gentle optional short tones |
| Loyalty Lane | Obsidian, graphite, legacy gold | Angular editorial layout; slow restrained transitions | Minimal, optional tactile cues |
| That's My Lingo | Deep violet, gold, pink, cyan | Reel grid, quick transitions; no blocking animation | Optional short game UI cues |
| LINGOarcade | Dark base, neon cyan, pink | Grid/arcade geometry, energetic but reduced-motion aware | Optional UI confirmation cues |
| LINGOslots | Dark base, gold, cyan | Reel framing, clear state changes | Muted by default; no misleading reward sounds |
| LINGO Nexus | Violet, cyan, silver | Connected nodes and navigational lines | Subtle navigation cues |
| LINGOmedia | Dark base, magenta, cyan | Timeline/waveform and frame language | Audio workspace controls with visible mute state |

## Media rights and delivery
Each final asset needs stable ID, product/world ID, source/project file, creator/owner, rights and consent evidence, intended use, version, dimensions/duration, format/codec, optimization, alt text/captions, review status, approver, checksum, cache policy and rollback pointer. Do not ship assets with unknown rights.

## Current status
Landing-page source and SVG primitives are authored on an isolated branch. No final photo/video/audio pack, character animation project, production icon approval, integration, automated test execution, release certification or deployment is claimed.
