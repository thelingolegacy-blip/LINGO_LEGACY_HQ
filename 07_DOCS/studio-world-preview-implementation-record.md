# Studio-World Preview — Implementation Record

**Status:** isolated interactive concept preview; not production-ready.
**Branch:** `studio/individual-world-production-standard-2026-10-19`
**Preview source:** `01_WEBSITES/studio-world-preview/index.html`
**Change policy:** no merge, deploy, DNS, Worker, payments, wallet activation, production config, or authentication mutation is authorized by this change.

## Delivered in this increment

- Responsive flagship portal with a distinct Industrial Noir / metallic-gold visual direction.
- Product discovery cards for 18 portfolio areas, each with its own accent color, mark treatment, description, capability tags, and destination identifier.
- Live search and category filters (Play, Create, Shop, Connect).
- Keyboard-visible focus, skip link, semantic landmarks, live announcements, mobile layouts, and reduced-motion stylesheet support.
- Explicit opt-in interface beep using Web Audio; sound is off by default.
- Motion pause/resume control and tactile pointer ripple feedback.
- Product CTA feedback explains that routes are concept identifiers, not proof of a deployed product.
- Clear preview-status notice to avoid implying that sign-up, payment, wallet, game persistence, analytics, or backend integrations are connected.

## Product-world register

The initial preview contains: The Lingo Legacy HQ, Loyalty Lane Apparel, Kotton's Code, That's My Lingo, LINGOarcade, LINGOslots, LINGO Nexus, LINGOmedia, LINGOlibrary, Virtual Cinema, askLINGO/LINGOai, LINGO ID, Universal Legacy Wallet, Creator Marketplace, Community Laundromat Hub, Doughboys Oasis, LINGOworld, and Business & Services.

This register is a portfolio starter, not a declaration that the catalog is exhaustive. Reconcile against the canonical product registry before treating it as authoritative.

## Production-grade asset pipeline required per product

1. **Intake and ownership:** product ID, owner, intended use, target platforms, usage rights, licensing/consent, expiry/revocation conditions, source files, and approval owner.
2. **Brand system:** primary/secondary logo, monochrome variants, icon/app icon, clear-space/minimum-size rules, color tokens, typography, product voice, icon family, and do-not-use rules.
3. **Visual assets:** hero/key art, backgrounds, photography/illustration, product imagery, character/environment art, thumbnails, responsive crops, alt text, and focal-point metadata.
4. **Sound:** branded UI sound cues, optional interaction tones, audio logos/stingers, music and effects, volume normalization, mute controls, licensing, captions/transcripts for spoken content, and no autoplay with sound.
5. **Motion:** animation source/project, exported formats, timing/easing, touch/hover/keyboard states, reduced-motion alternative, performance budgets, and no motion that blocks core tasks.
6. **Production delivery:** immutable asset IDs, checksums, optimized variants, dimensions/codec, cache policy, content-security policy compatibility, provenance, version, approval state, and rollback reference.
7. **QA and release:** visual regression, mobile/responsive review, contrast, screen-reader and keyboard checks, asset rights review, performance budgets, route tests, error/empty/loading states, logs, independent verification, and release authorization.

Required lifecycle states: `PROPOSED → RIGHTS_REVIEW → DESIGN_REVIEW → APPROVED → OPTIMIZED → QA_PASSED → RELEASE_CANDIDATE → LIVE_VERIFIED`. Rejection or missing evidence means `BLOCKED`; do not silently skip stages.

## Signup, commerce, monetization, and economics rules

- Account creation must use the approved identity provider, consent/privacy disclosure, verified session handling, abuse/rate-limit protection, recovery, and auditable access-control tests.
- Never collect or store raw payment-card data in the product application. Use an approved payment provider, server-side price/entitlement validation, signed webhooks, idempotency keys, refunds/chargebacks, reconciliation, tax handling, and auditable ledger entries.
- Never trust client-provided prices, reward balances, XP, inventory, virtual currency, purchase entitlements, or win outcomes. Authoritative mutations must be server-side, validated, idempotent, and auditable.
- Keep demo credits distinct from paid or redeemable value. No cash-out, transfer, prize, gambling, wallet-value, or paid chance feature activates without product-specific legal/compliance review, age/region controls where applicable, fraud controls, and explicit release approval.
- Revenue reporting must distinguish gross bookings, recognized revenue, refunds, taxes, processor fees, cost of goods/services, operating expenses, and net profit. No mock figure may be reported as actual performance.
- Model feature-specific unit economics before launch: conversion rate, average order value, gross margin, acquisition cost, churn/retention, infrastructure cost, support burden, and contribution margin. Treat forecasts as assumptions until reconciled to real records.

## Infrastructure boundaries

Shared services may provide identity, observability, asset delivery, commerce adapters, feature flags, and common design primitives. Each product retains its own approved brand tokens, content, navigation, experience, permissions, feature flags, and release evidence. Do not duplicate shared asset value or copy product-specific state into unrelated applications.

## Acceptance gates for this preview

- [x] Source created on an isolated branch.
- [x] Product discovery, search, filters, opt-in sound, motion toggle, responsive styles, and touch feedback authored.
- [x] Preview labels backend and route integrations as unconnected/unverified.
- [ ] Automated lint/build/test execution — not run in this connector-only change.
- [ ] Cross-browser, keyboard, screen-reader, and mobile-device QA — not run.
- [ ] Rights-reviewed final logos, original product photography, illustrations, soundtrack, animation files, and production asset manifests — not complete.
- [ ] Authentication, payment, wallet, analytics, storage, and product backends — not connected by this preview.
- [ ] Independent CI execution evidence and G02 recovery — still required.
- [ ] Production release authorization — not granted.

## Visual direction reference

A generated portal concept image is an art-direction reference only. It is not a final logo pack, licensed photography set, product screenshot, or production-ready asset. Each product requires separate approval and deliverables.
