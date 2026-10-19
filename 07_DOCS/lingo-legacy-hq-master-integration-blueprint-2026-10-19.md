# The Lingo Legacy HQ — Master Integration Blueprint
**Version:** 1.0 candidate  
**Date:** 2026-10-19  
**Design reference:** Lingo Legacy HQ screenshot supplied in conversation  
**Repository:** `thelingolegacy-blip/LINGO_LEGACY_HQ`  
**Candidate branch:** `studio/lingo-hq-universe-portal-2026-10-19`

## 1. Product outcome
Deliver one premium, responsive flagship portal that introduces the entire Lingo Legacy ecosystem, routes people to the right product, and creates a coherent surface for games, apparel, books, media, creators, community, identity, support, and future commerce. The HQ is a discovery and navigation layer—not a substitute for each child product's runtime or authorization boundary.

Brand principle: **Loyalty. Legacy. Language.**  
Visual system: industrial noir, near-black surfaces, metallic gold, royal-purple atmosphere, high contrast, restrained motion, cinematic composition, responsive cards.  
Canonical naming: use `LINGO` plus lowercase product suffix where specified; canonical spelling `KOTTONSCODE`; do not append a star glyph after “Lingo”.

## 2. Product information architecture
### Global shell
- Brand crest and “The Lingo Legacy” wordmark.
- Primary navigation: Home, Studios, Games, Apparel, Books, Media, AI, Community, Wallet, Marketplace, Support.
- Search across all known destinations.
- Hero with “One Legacy. Many Worlds.” positioning.
- Quick-action rail for discover, shop, read, watch, play, create, and belong.
- Searchable and filterable ecosystem catalog.
- Membership CTA and footer policy/support links.

### Product domains
| Domain | Canonical entries | Responsibilities |
|---|---|---|
| HQ & platform | The Lingo Legacy HQ, LINGO ID, askLINGO, Support Center | Discovery, identity entry, assistant entry, support |
| Games & worlds | That's My Lingo, LINGOarcade, LINGOslots, LINGO Nexus, LINGOworld, Doughboys Oasis | Catalog, launch routing, game-specific policies and runtime |
| Creative & IP | KOTTONSCODE, LINGOlibrary, LINGOmedia, Virtual Cinema | Story, publishing, learning, music/video, rights and entitlements |
| Commerce | Loyalty Lane Apparel, Universal Legacy Wallet, Creator Marketplace, Business & Services, Invest & Partner | Storefront links, creator transactions, service inquiry, partner leads |
| Community | Community Laundromat Hub | Resources, community programs, local service information |

## 3. Integration topology
Canonical high-level path:
`thelingolegacy.com → Cloudflare DNS/edge → canonical Lingo Legacy Worker → HQ shell → validated route manifest → individual product surface`.

- The apex is the flagship HQ, never the Loyalty Lane Apparel storefront.
- `www.thelingolegacy.com` redirects permanently to the apex.
- Child products retain independent deploy/release boundaries.
- The HQ catalog only links to destinations listed in a reviewed route manifest.
- Cloudflare Worker is the canonical edge layer. Do not add Vercel or AppDeploy as a competing root without an explicit architecture decision.
- Existing environment records, DNS and public reachability must be independently checked at release time.

## 4. Shared service contracts
### Identity
- Firebase Authentication is the current planned identity foundation.
- Establish one documented user/session contract, product-specific authorization checks, session revocation, and account recovery.
- A shared ID must not imply that every product automatically has permission to read every other product's data.
- Never expose service account keys or privileged credentials in client code.

### Data and runtime
- Firestore is the planned shared data service; Cloud Functions own trusted mutations and cross-product orchestration.
- Define data ownership, tenant/product boundaries, validation, audit events, retention and deletion behavior before sharing collections.
- Runtime status endpoints report observed deployment/configuration facts, not aspirational status.

### Wallet and rewards
- Universal Legacy Wallet is a product concept and shared service boundary, not a front-end balance variable.
- Server-side ledger entries must be immutable or correction-recorded, idempotent, authorization-checked, and reconciled.
- Define currency/point types separately (e.g., demo coins, Loyalty Bucks, Lingo Tokens); prohibit implicit conversions.
- Keep purchases, rewards, refunds, transfers, and game demo balances separated by explicit server-enforced rules.
- Do not enable payment or value-transfer actions until security, legal, abuse, and reconciliation reviews pass.

### Media, asset pipeline and commerce
- Store source asset, canonical name, owner, license/provenance, format, dimensions, checksum, rights, destination, and release state in an asset manifest.
- Generate optimized derivatives while retaining immutable source masters.
- Store large media in an approved object store/CDN; avoid bundling full-resolution masters in the HTML repo.
- Commerce and marketplace surfaces link to verified listings/services. Order, payment, fulfillment, seller, refund, and dispute operations remain owned by their respective trusted backends.

### askLINGO
- Shared assistant policy and identity context, with product-scoped knowledge and explicit authorization.
- Do not infer access to private product data from a shared login alone.
- Provide source attribution and safe failure states for unavailable integrations.

## 5. Route manifest
Every destination should have:
- stable product ID and canonical display name;
- environment-specific URL (local/dev, staging, production);
- owner repository and accountable team;
- authentication requirement and minimum role;
- allowed embed/open mode;
- availability and release state;
- health check and smoke-test procedure;
- last independently verified timestamp and evidence reference.

Unknown routes remain disabled or show a clearly marked candidate detail state. Do not manufacture URLs.

## 6. Frontend quality bar
- Semantic HTML, keyboard support, visible focus, proper labels, contrast, screen-reader status updates.
- Responsive layouts at 320px, 390px, 768px, 1024px, 1440px and large desktop.
- Honor `prefers-reduced-motion`; avoid layout shifts and overuse of animation.
- Use lazy loading and responsive images when real imagery is introduced.
- Search and filters must work without network access.
- No fake live activity, fake ratings, fabricated account states, or unverified metrics.
- Provide explicit empty/error states and never imply a protected action succeeded before the backend confirms it.

## 7. Security and privacy
- Threat-model auth, wallet, account links, uploads, search, support, creator listings and community submissions.
- Validate input server-side; apply rate limits and abuse monitoring; enforce least privilege.
- Keep secrets in approved secret stores; redact tokens from logs and artifacts.
- Add security headers/CSP and review all third-party scripts before enabling them.
- Consent, analytics schema, data retention, deletion, and privacy copy must be reviewed before tracking is activated.
- Avoid exposing user activity, geographic information, or private transaction state on public pages.

## 8. CI/CD and production gates
Canonical evidence chain: `SOURCE → EVIDENCE → VERIFICATION → ACCEPTANCE → PASSED → AUTHORIZATION → PROMOTION`.

| Gate | Required proof |
|---|---|
| G00 Source | Approved source ref, diff, dependency/asset provenance |
| G01 Repository | Correct repo/branch and expected tree |
| G02 Runner | Real matching runner, nonzero runner ID, assigned job, instantiated steps, sentinel execution, retrievable logs, independent verification |
| G03 CI | Static checks, tests and build pass with stored logs |
| G04 Security | Dependency, secret, headers, auth/rules and abuse checks |
| G05 Candidate | Reviewable preview, route manifest, responsive screenshots |
| G06 Deploy | Approved deployment target and exact artifact digest |
| G07 Live validation | Apex 200, www 301/308 to apex, `/healthz` 200, `/api/v1/runtime` 200 with `dynamic:true` |
| G08 Sync | DNS, edge, source and runtime are correlated |
| G09 Activation | Explicit authorization after all prior gates pass |
| G10 Post-activation | Smoke tests, telemetry, error rate, rollback readiness |
| G11 Acceptance | Evidence bundle independently reviewed and accepted |

Current known governance context: G02 runner dispatch has previously failed before step initialization. That failure is not resolved by creating this candidate branch. Production remains fail-closed until qualifying execution and public live evidence exist.

## 9. Phased delivery
### Phase A — Candidate
- Isolated static portal and design system.
- Inventory and route manifest.
- Accessible interactions, mobile behavior, content and brand review.

### Phase B — Staging
- Run HTML/JS checks, accessibility tests, device/browser matrix and security review.
- Capture preview URL, screenshots, commit SHA, build logs and test report.
- Validate all destinations against the route manifest; dead or unknown links stay disabled.

### Phase C — Service integration
- Add Firebase Auth and authorization after rules review.
- Integrate approved media, storefront and support links.
- Implement server-authoritative wallet and event contracts only after explicit review.
- Add analytics only after consent/privacy approval.

### Phase D — Release
- Verify Cloudflare and domain routing, health and dynamic runtime endpoints.
- Obtain independent public fetch results and preserve previous known-good (LKG) artifact.
- Require explicit promotion authorization; never auto-promote solely because a build passes.

## 10. Definition of done
- The flagship matches the approved design direction on desktop and mobile.
- All visible destinations have verified route owners or are explicitly marked candidate-only.
- Search, filters, keyboard navigation and reduced-motion behavior pass.
- No unauthorized secrets, fake activity, fake balances or unverified availability claims.
- CI evidence is retrievable and independently verified.
- Staging and live-route evidence meet the gates above.
- LKG is protected and rollback is rehearsed.
- Production status is reported from evidence, not inferred from source code or a deployment attempt.
