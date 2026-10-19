# Individual Studio Asset and Delivery Manifest
Version: 0.1.0
Status: starter implementation inventory; not a production approval.

## Product page slices created in this branch
| Product | Page | Visual direction | Interaction | Backend status |
|---|---|---|---|---|
| Kotton's Code | `01_WEBSITES/KottonsCode/index.html` | Cream, botanical green, lime, peach, playful shapes | Five Codes, story anchors, opt-in Web Audio cue | Not connected |
| Loyalty Lane Apparel | `01_WEBSITES/LoyaltyLane/index.html` | Industrial noir, monochrome, metallic gold | Collection cards and product-detail feedback | Not connected |
| That's My Lingo | `01_WEBSITES/ThatsMyLingo/index.html` | Dark game floor, gold, pink and cyan | Demo reels, motion, optional sound toggle | Demo only; no value |
| Portfolio portal | `01_WEBSITES/studio-world-preview/index.html` | Premium flagship noir/gold with per-world accents | Search, category filters, touch feedback, sound and motion controls | Not connected |

## Asset classes to provision for every product
- Brand: primary logo, secondary/stacked logo, monochrome and reversed variants, favicon/app icon, clear-space examples, usage rules, font licenses and color tokens.
- Images: hero key art, responsive desktop/mobile crops, background textures, feature/collection art, thumbnails, image alt text and focal points.
- Video: trailers, product demos, captions, poster frames, transcripts, rights and expiry data.
- Sound: UI cues, mute toggle, optional audio branding, music/SFX, source project, format/sample-rate, loudness target, licensing and attribution.
- Motion: editable source project, reduced-motion fallback, duration/easing, frame-rate budget, interaction states and device performance checks.
- Touch and interaction: focus, hover, active, disabled, loading, success, empty, error and offline states.
- Delivery: content hash, immutable asset ID, source/owner, license, consent, approver, version, dimensions, format, compression, cache policy, accessibility review and rollback version.

## Required media workflow
`BRIEF → SOURCE/RIGHTS → CONCEPT → PRODUCT REVIEW → APPROVED → OPTIMIZED → ACCESSIBILITY QA → PERFORMANCE QA → VERSIONED MANIFEST → RELEASE CANDIDATE → LIVE VERIFICATION`

A missing approval or evidence item blocks release. Never use a generated concept or placeholder as an approved production asset.

## Frontend acceptance
- Responsive at narrow mobile, tablet and desktop widths.
- Semantic landmarks, accessible names, keyboard focus and status announcements.
- Contrast and screen-reader review.
- Reduced-motion behavior and no sound autoplay.
- Touch targets, loading/error/empty states and functional navigation.
- No fake checkout, login, wallet balance, analytics, purchase or account-success claims.
- Validate local asset paths, broken links, console errors, CSP compatibility, bundle/asset budgets and visual regression.

## CI/CD gates
1. **Source gate:** branch, changed-file scope and protected path policy.
2. **Static gate:** HTML parsing, duplicate IDs, required metadata, local-link/asset existence, JavaScript syntax, CSS parsing and accessibility smoke checks.
3. **Build gate:** deterministic lockfile install and framework build using the product's actual package manager.
4. **Test gate:** unit/component tests, end-to-end critical flows, responsive snapshots, accessibility and security checks.
5. **Artifact gate:** immutable artifact, checksums, SBOM/dependency review and signed build provenance where supported.
6. **Preview gate:** isolated preview only; secrets scoped and no production credentials.
7. **Release gate:** reviewer approval, passing CI, security/privacy review, media rights approval, rollback plan and release authorization.
8. **Live gate:** independent URL checks, error/telemetry review and evidence archived against the exact commit.

## Monetization and economics gate
Before activation, specify product-level price and entitlement rules; payment provider; idempotency; webhook verification; refunds/chargebacks; tax treatment; ledger reconciliation; fraud/rate limits; privacy and consumer disclosures; and any age/region/legal requirements. Compute unit economics using clearly labeled actuals versus assumptions: conversion, average order value, gross margin, acquisition cost, retention/churn, processor fees, refunds, support and infrastructure cost. Never let the browser authoritatively set prices, wallet balances, rewards or purchase entitlements.

## Current gate status
- Three dedicated product landing-page source files: CREATED.
- Portfolio preview and 18 starter SVG marks: CREATED.
- Final approved logos and original/licensed media packs: NOT COMPLETE.
- Product-specific backend integrations: NOT CONNECTED.
- Automated tests and cross-device QA: NOT RUN / NOT VERIFIED.
- G02 CI runner and production certification: BLOCKED.
- Merge and production deployment: NOT AUTHORIZED.
