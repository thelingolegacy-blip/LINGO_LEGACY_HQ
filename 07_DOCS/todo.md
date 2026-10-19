# LINGO LEGACY — Delivery Queue
**Branch:** studio/individual-world-production-standard-2026-10-19  
**Status:** Working queue; no production promotion implied.

## P0 — Source authority and safe integration
- [ ] Reconcile Office Agent source files with repository files; preserve existing homepage/studio shell unless a reviewed replacement is approved.
- [ ] Maintain one canonical product/world registry; mark prototypes versus integrated systems.
- [ ] Resolve G02 runner dispatch: assigned runner, instantiated steps, sentinel execution, retrievable logs, independent evidence.
- [ ] Keep production deployment and activation locked until required gates pass.

## P1 — Portfolio UX and design system
- [x] Interactive studio-world discovery preview.
- [x] Seven distinct starter landing pages: Kotton’s Code, Loyalty Lane, That’s My Lingo, LINGOarcade, LINGOslots, LINGONexus, LINGOmedia.
- [x] Starter SVG brand marks and shared icon symbols.
- [x] Asset pipeline and production-standard documentation.
- [ ] Audit root homepage routes and canonical metadata; remove stale canonical URL only after the intended public domain is verified.
- [ ] Add and validate remaining canonical product pages without duplicating existing routes.
- [ ] Complete product-specific logos, icon families, responsive art direction, motion, and licensed audio packages.
- [ ] Establish a design-token contract for shared accessibility foundations and per-world themes.

## P1 — Architecture and product contracts
- [x] Create master architecture baseline and this delivery queue.
- [ ] Confirm canonical product names, route slugs, ownership, and product lifecycle status with the product registry.
- [ ] Define API contracts, error envelopes, auth boundaries, rate limits, and telemetry before connecting frontends.
- [ ] Define data retention, consent, account deletion, moderation, and accessibility requirements.

## P2 — One vertical slice at a time
- [ ] Choose one low-risk world for a complete prototype-to-preview route.
- [ ] Add real browser checks for mobile, keyboard, reduced motion, broken links, and console errors.
- [ ] Integrate Firebase Auth only in a configured non-production environment with tested rules.
- [ ] Implement trusted server-side demo-state persistence; do not expose wallet writes to clients.
- [ ] Connect AI only through server-side secrets and label model output clearly.
- [ ] Connect Shopify commerce only after webhook verification and test-order checks.
- [ ] Add Phaser.js gameplay only with deterministic tests and a defined game-state contract.

## P2 — Shared wallet and rewards (blocked pending review)
- [ ] Specify ledger invariants, idempotency, concurrent writes, reversals, fraud controls, reconciliation, and audit trails.
- [ ] Separate demo/promo coins from any cash-equivalent balance.
- [ ] Review legal, privacy, platform, and age/region requirements before enabling purchase, transfer, redemption, or payout.
- [ ] Keep live balance mutation and monetary claims disabled until backend, security, and release gates pass.

## P3 — Asset governance
- [ ] Enforce asset manifest fields: ID, product, type, source, provenance, rights, version, review, checksum, target platforms.
- [ ] Human-review generated logos and media before release.
- [ ] Produce final SVG/raster/logo exports, favicon/app icons, and social variants per approved world.
- [ ] Produce mastered sound/music only with documented source and rights; UI oscillator beeps are not final audio deliverables.
- [ ] Generate optimized renditions, validate contrast/alt text, and preserve a rollback-capable manifest.

## P3 — Verification and release
- [ ] Run lint/typecheck/build/tests on a functioning runner.
- [ ] Capture retrievable logs, artifact checksums, browser screenshots, and test reports.
- [ ] Perform security/dependency/secrets scan.
- [ ] Review preview deployment independently.
- [ ] Obtain explicit release approval for exact artifact and target.
- [ ] Deploy, validate, monitor, and document rollback only after all gates pass.

## Current release blockers
- G02 runner dispatch has not met its acceptance predicate.
- Downstream CI execution, certification, deployment, live validation, and activation remain blocked.
- Public reachability of the production site has previously been unverified; retest only through approved evidence workflow.
- No item in this queue authorizes merging, production deployment, wallet activation, payments, or user-data migration.
