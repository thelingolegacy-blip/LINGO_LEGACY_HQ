# Lingo Legacy — Individual Studio World & Production Standard

**Status:** Proposed standard; isolated branch only  
**Owner:** LINGO_LEGACY_HQ (ecosystem-level contract)  
**Effective rule:** Every product owns a distinct identity and experience while inheriting approved shared platform services.  
**Release policy:** Documentation, design, source code, previews, and queued workflows are not proof of production readiness.

## 1. Purpose and non-negotiable rule

Every Lingo Legacy product, franchise, service, game, publishing property, and business line must feel like its own complete studio world—not a renamed copy of the flagship. Each must have its own approved brand identity, logo system, art direction, environment, navigation, content, sound language, motion language, feature set, operational model, and release evidence.

Products share secure infrastructure and design-system foundations where appropriate. They do not share interchangeable logos, generic landing pages, unreviewed assets, undocumented dependencies, or unverified release status.

**Brand relationship:** The Lingo Legacy is the parent ecosystem. Individual products retain their own identity. The parent brand may appear as an endorsed-by signature, not as a replacement for the product's logo.

Parent brand line: **Loyalty. Legacy. Language.**  
Parent visual direction: Industrial Noir, premium monochrome, Deep Onyx, Metallic Slate, Architect Gold, with Neon Lime/Cyan used selectively for interaction or system status. Product-specific palettes may extend this system but must preserve legibility and brand distinction.

## 2. Product identity package — required for every product

Each product must have a versioned identity record containing:

- Canonical product name, spelling, short description, audience, value proposition, and owner.
- Primary logo, secondary/compact mark, monochrome/reversed variants, app icon/favicon, clear-space rules, minimum sizes, contrast guidance, and prohibited alterations.
- Product palette with semantic tokens: background, surface, text, border, brand, interactive, success, warning, and error.
- Typography: display, heading, body, utility/data, fallback stack, scale, weights, line-height, and licensing/source.
- Art direction: image treatment, illustration/photography rules, character/environment style, composition, lighting, texture, and prohibited styles.
- Voice and copy rules: terminology, tone, accessibility language, error messages, calls to action, and localization expectations.
- Sound identity: optional logo sting, ambient bed, interaction cues, success/error cues, mute/default behavior, volume limits, and reduced-sensory alternative.
- Motion identity: transitions, easing, duration tokens, camera/parallax rules, locomotion rules where relevant, loading states, and reduced-motion behavior.
- Header, navigation, footer, breadcrumbs, legal/support surfaces, empty states, loading states, error states, and mobile navigation.
- Approved asset manifest with provenance, license/rights, alt text/captions, owner, version, and target use.
- Product-specific feature map, architecture diagram, data classification, dependencies, support path, analytics events, and release gates.

Missing assets must be marked **MISSING**; uncertain implementation or rights must be marked **NOT VERIFIED**. Do not silently substitute a generic logo, stock image, sound, or unfinished component.

## 3. Studio-world experience standard

Every product studio must provide a coherent world with the following surfaces, tailored to its purpose:

1. **Entrance / landing:** product identity, clear value proposition, primary action, and fast path to the main experience.
2. **World / workspace:** unique environment and information hierarchy that fit the product (e.g., streetwear atelier, children's story world, arcade floor, publishing library, creator production room, community service hub).
3. **Product navigation:** responsive header, mobile menu, contextual navigation, active state, breadcrumbs where useful, and predictable back/exit paths.
4. **Footer:** product-specific support/contact route, privacy, terms, accessibility, rights/credits, status or help links as applicable, and parent-brand attribution where appropriate.
5. **Core flow:** the complete advertised task—from entry to success, confirmation, recovery, and support.
6. **System states:** loading, empty, offline, unavailable, permission denied, validation failure, success, retry, and destructive-action confirmation.
7. **Media layer:** responsive images, art, video, audio, captions/transcripts, poster/fallback images, and performance-aware loading.
8. **Interaction layer:** keyboard/touch/gamepad support as appropriate, visible focus, semantic controls, touch targets, feedback, and reduced-motion alternatives.
9. **Trust layer:** clear pricing and terms, privacy disclosures, rights/credits, age-appropriate experience where relevant, safe user-generated content controls, and no deceptive interface patterns.
10. **Operations layer:** health checks, diagnostics, support path, feature flags where justified, telemetry, and documented rollback/recovery.

A visually rich environment must not obscure core tasks, harm readability, autoplay disruptive audio, or trap keyboard, touch, or assistive-technology users.

## 4. Media and asset production pipeline

All visual, photographic, illustration, audio, animation, and environment assets follow one traceable pipeline:

**Brief → Concept → Rights/Provenance Check → Draft → Product/Brand Review → Technical Optimization → Accessibility Review → QA → Versioned Approval → Release Manifest → Runtime Verification**

Required asset metadata:
- Stable asset ID and canonical filename.
- Product/world owner and intended placement.
- Source/creator, license/permission, usage limits, and evidence of rights.
- Dimensions/aspect ratios, file format, size budget, color profile where relevant.
- Alt text or decorative designation; captions/transcript for meaningful audio/video.
- Motion duration, reduced-motion alternative, and loop behavior where relevant.
- Audio loudness/format, default mute state, and user controls.
- Version, checksum where supported, approval state, and replacement/rollback reference.

### Media quality rules
- Photography: approved subject, composition, crop variants, responsive sources, color treatment, and authentic product representation.
- Images/illustrations: optimized modern formats where supported, fallbacks, correct aspect ratios, no stretched assets, and no unlicensed content.
- Sound: original or licensed material, explicit controls, no surprise autoplay, no critical information conveyed by sound alone.
- Animation: purposeful, interruptible, performance-budgeted, and tested on lower-powered devices.
- Backgrounds/environments: readable contrast, controlled visual noise, responsive crops, and static fallback.
- Characters/3D/worlds: documented visual canon, model/texture/audio rights, performance targets, camera behavior, and accessibility settings.
- Fonts/icons: documented source and license, fallback behavior, consistent stroke/weight, and no missing-glyph failures.

## 5. Shared architecture and product isolation

Use a shared platform foundation without flattening product identity.

**Shared foundation (where applicable):**
- Identity and authorization, session management, consent and policy surfaces.
- Design tokens and accessible component primitives.
- API contracts, server-side validation, event conventions, and error schemas.
- Analytics/observability conventions, privacy controls, support routing, and status reporting.
- Build/test templates, dependency scanning, release manifests, and evidence records.

**Product-owned layer:**
- Logo, theme, world art, photography, sound, animation, content, navigation labels, product features, and product-specific user journeys.
- Product-specific schemas, rules, game mechanics, commerce configuration, and permissions, reviewed independently.
- Feature flags and configuration scoped to the correct product/environment.

**Security boundary:** product themes and client code cannot grant permissions. Authorization and valuable state must be enforced server-side. Never place secrets in client bundles or commit production credentials. Do not let demo rewards, local-only progress, or preview billing masquerade as real transactions.

**Architecture options:** use the existing Next.js/TypeScript web foundation, Flutter mobile foundation, Firebase/Auth/Firestore/Functions, and Cloudflare Workers/Pages only where the repository's approved architecture calls for them. Shopify and payment providers must remain behind explicit commerce contracts. Avoid introducing a new framework or provider merely for visual novelty. Every dependency needs an owner, purpose, security posture, support status, and migration/rollback plan.

## 6. Baseline production features

Select features based on the product's actual scope; do not claim every product needs every feature.

- Responsive web/mobile layouts and device-appropriate navigation.
- Accessible forms, validation, search/filtering where useful, and clear feedback.
- Authenticated profile/account surfaces only where real backend auth exists.
- Server-authoritative permissions, balances, rewards, entitlements, and transactions when applicable.
- Commerce: item availability, price/fees, taxes/shipping where applicable, checkout, order status, refunds/returns, support, and reconciliation.
- Games: build identity, save/persistence semantics, gameplay state validation, recovery, abuse controls, platform/device QA, and demo-versus-real-value separation.
- Publishing/media: rights, credits, metadata, distribution links, captions/transcripts, and content versioning.
- Community/marketplace: partner and worker roles, consent, moderation, reporting, dispute handling, payout/settlement controls, and privacy boundaries.
- Analytics: documented events, consent rules, conversion funnels, error monitoring, retention controls, and no unnecessary sensitive data.
- Operations: health/status endpoints where appropriate, alerts, backups, restore tests, incident runbooks, and accountable ownership.

## 7. Headers, footers, and shared UI contract

Each product must implement the same functional coverage while expressing its own visual identity.

**Header checklist:** correct product mark; useful navigation; clear primary action; account/cart/search controls only when functional; responsive collapse; visible focus; keyboard operation; no overlapping layers; safe-area support on mobile.

**Footer checklist:** product-specific help/contact; privacy and terms; accessibility statement or route; rights/credits; relevant social/community links; current copyright owner/year; parent attribution; no dead or placeholder links.

**Global component states:** default, hover, focus-visible, active, disabled, loading, success, error, empty, offline, and reduced-motion. Hover must never be the only way to discover or use a function.

## 8. Product delivery pipeline

**REGISTER → SPECIFY → DESIGN → BUILD → TEST → SECURITY REVIEW → RIGHTS REVIEW → STAGE → ACCEPT → AUTHORIZE → DEPLOY → VERIFY LIVE → MONITOR → ROLLBACK/RECOVER IF NEEDED**

Every stage has an owner, entry criteria, evidence output, and explicit pass/fail status. No stage can be passed by creating a document or source file alone.

Required gates:
- Product and brand scope approved.
- Logo/media inventory complete enough for the release scope.
- Rights and licenses checked.
- Accessibility and responsive checks complete.
- Functional, integration, and end-to-end tests pass.
- Security and privacy review passes.
- Payment, wallet, rewards, and data integrity verified where applicable.
- CI has a real runner assignment, instantiated steps, successful execution, retrievable logs, and correlated artifacts.
- Deployment, domains, TLS, backend bindings, and independent live probes verified.
- Customer acceptance, support, analytics, and rollback/recovery readiness recorded.
- Named release authority approves promotion.

## 9. Evidence and release status vocabulary

Use only these states in the product ledger:

- **CONCEPT** — idea or scope only.
- **DESIGN** — approved design artifacts; implementation not implied.
- **IMPLEMENTING** — source work in progress.
- **PREVIEW** — isolated demo or preview; not production.
- **BUILT** — reproducible build exists; live behavior not implied.
- **TESTED** — named tests executed and results retained for a defined scope.
- **STAGED** — deployed to a non-production environment and verified there.
- **LIVE-VERIFIED** — intended production endpoint and core flows independently checked.
- **CERTIFIED** — all applicable release gates passed and authorized.
- **BLOCKED** — a required gate failed or evidence is missing.
- **NOT VERIFIED** — available evidence is insufficient to assert a status.

A queued workflow, successful configuration edit, source commit, mock, screenshot, or preview is not equivalent to tested, live-verified, or certified.

## 10. Portfolio application map

Apply the standard independently to every named product, including at minimum:

- The Lingo Legacy HQ / Lingo OS
- Loyalty Lane Apparel, Loyalty Lane Designs, Loyalty Lane Cycles
- Kotton's Code and its book, character, game, and studio experiences
- That's My Lingo
- LINGOarcade and LINGOslots
- LINGO Nexus and shared game engines
- LINGOmedia, creator/video production, and music properties
- LINGOlibrary, books, publishing, and Virtual Cinema
- LINGO ID, Universal Legacy Wallet, XP/rewards, and Bones-to-Coins
- askLINGO / LINGOai
- Community Laundromat Hub / Lingo Wash District
- Creator marketplace, white-label products, LINGOworld, and Doughboys Oasis: Crews & Legacies
- Every additional game, app, studio, franchise, service, and experimental property registered in the canonical catalog.

The catalog must include new products as they are created. This list is a minimum inventory, not a claim that each property is implemented or production-ready.

## 11. Per-product acceptance record

Each product record must contain:
1. Canonical name and repository/source authority.
2. Logo/identity package and design-token reference.
3. Studio-world screenshots or approved design references for desktop and mobile.
4. Header/footer and navigation test results.
5. Asset manifest with rights/provenance.
6. Sound, animation, movement, reduced-motion, and fallback checks where applicable.
7. Feature inventory with implemented/tested/missing labels.
8. Architecture, data flows, integrations, and trust boundaries.
9. Test matrix, build ID/commit, runner/run IDs, logs, and artifacts.
10. Security, accessibility, performance, privacy, and legal/rights findings.
11. Staging/live probes, customer acceptance, analytics, support, and recovery evidence.
12. Open defects, risk owner, next action, release decision, and approver.

## 12. Current rollout and safety boundary

This document establishes the portfolio standard; it does not implement all product experiences or certify them. Start by reconciling the canonical catalog and current source of truth, then apply the standard to one product at a time in isolated branches. Prioritize commercial paths that can be validated quickly, but do not promote them without their own evidence.

The current repository's G02 runner-dispatch and release gates remain authoritative until fresh evidence proves otherwise. Keep the last-known-good production state protected. No automatic merges, DNS edits, Worker activation, payment activation, wallet-value activation, or production deployment are authorized by this standard.

**Definition of done:** each product has a distinct approved studio identity and a complete, tested, rights-cleared, accessible, observable experience for its declared scope; its infrastructure and dependencies are documented; and its release state is backed by independently verifiable evidence.
