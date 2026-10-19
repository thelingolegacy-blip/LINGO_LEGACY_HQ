# LINGO LEGACY — Master Architecture
**Version:** 1.0  
**Status:** Working architecture baseline — proposed, not production-certified  
**Updated:** 2026-10-19

## 1. Product principle
The Lingo Legacy is a portfolio of distinct story, commerce, gaming, media, education, community, and utility experiences. Each product owns its audience promise, brand expression, navigation, content model, and release gate. Shared identity, rewards, and infrastructure are services—not reasons to flatten every world into one UI.

**Brand foundation:** Loyalty. Legacy. Language.  
**Parent visual system:** Industrial Noir, premium monochrome, metallic gold and royal purple. Product worlds may define their own palettes.  
**Naming:** use canonical LINGO + lowercase product names where established. Preserve KOTTONSCODE as the canonical spelling. Do not add a star after “Lingo.”

## 2. Portfolio registry (working, non-exhaustive)
| Product / world | Purpose | Initial surface | Readiness note |
|---|---|---|---|
| Lingo Legacy HQ / Studio | Parent brand, discovery, production command surface | Flagship site + studio floor | UI shell only until integrated and tested |
| Loyalty Lane Apparel / Designs | Apparel, design, commerce | Storefront and collection pages | Commerce requires verified Shopify integration |
| Kotton’s Code | Children’s stories, learning, character universe | Story-world landing page | Child privacy and safeguarding review required |
| That’s My Lingo | Casino-style casual game concept | Demo reels / game lobby | Demo-only; no real-money claims |
| LINGOarcade | Arcade game discovery and play | Arcade hub | Game engines must be individually tested |
| LINGOslots | Slot-style casual game concept | Slot demo surface | Demo-only; no real-money wagering or cash-out |
| LINGO Nexus | Connected game-world discovery | Nexus hub | Integration shell; product routes need verification |
| LINGOmedia / ROZ | Music, video, creator media | Media landing page | Rights and playback sources must be verified |
| LINGOlibrary / Virtual Cinema | Digital reading and viewing | Library/catalog | Rights, age rating, and playback entitlements required |
| askLINGO / LINGOai | AI assistance and search | Assistant interface | Mock responses must be labelled until API is wired |
| LINGO ID | Shared identity and authentication | Sign-in/account shell | Firebase/Auth integration and threat review required |
| Universal Legacy Wallet | Shared balances and transaction history | Wallet UI | No balance mutation or payouts until ledger/backend gates pass |
| XP / rewards / Lingo Laundromat | Progression, rewards, earn/redeem | Rewards dashboard | Economy is a proposal until ledger rules and abuse controls pass |
| Community Laundromat Hub | Community participation and engagement | Community hub | Moderation, privacy, and reporting required |
| LINGOworld / Lingo City | Exploration, world maps, social discovery | World directory | Location/privacy and safety review where applicable |
| Doughboys Oasis | Persistent multiplayer survival/crew game | Game world and vertical slice | Mature themes, age gating, safety and platform compliance review |
| UhOh Lingo University | Learning and education | Course/campus hub | Learning records and accessibility review |
| Spades Is My Lingo | Card-game experience | Game lobby | Rules, matchmaking, and age/region policy review |
| Lingo Travel | Travel discovery/planning | Travel hub | Booking/payment features require verified provider integrations |
| Lingo Legacy Studio | Creative production and publishing | Studio command floor | Production controls must remain fail-closed |
| Other registered products | Additional IP and services | Registry entry required | Do not create duplicates; reconcile against canonical registry |

This list is a working registry for architecture planning, not a claim that every listed product is deployed or implemented.

## 3. System architecture
### Experience layer
- Web: Next.js/React where app routing, server rendering, and shared components are needed; standalone HTML previews remain isolated prototypes.
- Mobile: Flutter app shell with feature modules; do not duplicate business rules in client code.
- Games: Phaser.js for suitable 2D browser games; Unity for higher-fidelity cross-platform/3D production when selected per project.
- Design: accessible token system plus product-specific theme packages; reusable components must support distinct visual worlds.

### Service layer
- Firebase Authentication for identity after configuration and security review.
- Firestore for appropriate application documents; define ownership, indexes, retention, and rules before production data is stored.
- Cloud Functions or Cloudflare Workers for trusted server-side operations. Never trust client-supplied wallet balances, reward totals, purchase receipts, or role claims.
- Shopify for apparel commerce where authorized; validate webhooks and use idempotency.
- AI provider integration through server-side secrets only; add rate limits, content safeguards, telemetry, and user disclosure.
- Optional analytics/error monitoring only after privacy review and environment configuration.

### Edge, delivery, and source control
- GitHub repository is the source authority for code and review.
- Cloudflare Pages/Workers or Vercel may serve approved web surfaces; one documented deployment owner per surface.
- Keep DNS, redirects, caches, and deployment configuration under a reviewed change record.
- Build, test, security scan, accessibility check, artifact capture, and release approval must precede promotion.

## 4. Shared service boundaries
### LINGO ID
- Identity provider ID is the stable principal; profile fields are not authorization.
- Roles are server-controlled and least-privilege. Suggested roles: guest, member, creator, moderator, administrator. Super-admin privileges require explicit server-side assignment, MFA where supported, and audit logging.
- Account linking, recovery, deletion, export, and consent need defined flows.

### Universal Legacy Wallet / Lingo Coins
- Treat all balances as a double-entry or otherwise auditable server-authoritative ledger; never update balances directly from client UI.
- Every mutation must have an idempotency key, actor, reason, source, timestamp, status, and immutable audit event.
- Separate promotional/demo coins from cash-equivalent value. No monetary value, payout, transfer, or purchase promise unless separately reviewed and lawfully implemented.
- Validate earning/redeeming eligibility server-side, add velocity/abuse controls, reconcile balances, and test concurrent transactions.
- Initial UI values are mock data and must be visibly labelled.

### XP and progression
- Server-authoritative rules; event idempotency; rate limits; anti-cheat; versioned formulas; reversible administrative corrections with audit trail.
- Do not allow XP to imply financial value unless a separate approved program explicitly establishes it.

### Games, slots, and social play
- Game state is authoritative where competitive integrity requires it.
- Randomness must be appropriate to the game and transparently tested. Demo slot-style mechanics must not imply real-money wagering.
- Add moderation, report/block flows, safe defaults, age ratings, and platform compliance where social or mature content exists.

## 5. Firestore data domains (illustrative; not deployable schema)
- users/{uid}: public profile fields only; separate private account/security data.
- userPreferences/{uid}: themes, accessibility and notification preferences.
- worlds/{worldId} and products/{productId}: canonical metadata, routes, owners, status, brand token references.
- assets/{assetId}: provenance, rights, owner, review state, checksums, rendition manifest, release references.
- walletAccounts/{accountId} and walletTransactions/{transactionId}: server-only ledger and immutable transaction history.
- xpEvents/{eventId} and progression/{uid}: idempotent events and derived state.
- games/{gameId}, gameSessions/{sessionId}, leaderboards/{boardId}: scoped, rules-protected game state.
- catalogItems/{itemId}, orders/{orderId}: catalog references and verified commerce state.
- aiSessions/{sessionId}: minimal retained context with retention controls and consent.
- moderationReports/{reportId}, auditEvents/{eventId}: access-controlled safety and audit records.
Define security rules, retention, indexing, backup, deletion, and data-processing purpose for each collection before use. Never expose private user, payment, or moderation fields through public queries.

## 6. Asset and brand pipeline
Canonical pipeline: **SOURCE → MASTER → OPTIMIZE → MANIFEST → RUNTIME → CACHE → QA → APPROVAL → RELEASE**.
Manifest fields: asset ID, product/world, type, associations, campaign, version, source/provenance, creator, rights/license, approval status, platform, rendition, checksum, timestamp, reviewer, and history.
- AI-generated media starts as draft.
- Verify trademarks, likeness/voice rights, stock licenses, music rights, and child-safety constraints.
- Export SVG logos/icons where appropriate; raster artwork in web-friendly formats; audio in suitable compressed formats; motion assets with fallback/reduced-motion behavior.
- Do not claim that a concept mark is a final registered logo or that synthesized UI beeps are mastered music/sound design.

## 7. Design and accessibility system
- Shared foundations: spacing scale, typography scale, focus states, motion tokens, layout breakpoints, contrast checks, semantic components.
- Each world gets its own theme, logo lockup, icon set, imagery direction, and motion signature.
- Support keyboard navigation, visible focus, semantic headings, labelled controls, accessible forms, reduced motion, and useful empty/error/loading states.
- Avoid hover-only interactions on touch devices. Every animation needs a purpose and a reduced-motion alternative.

## 8. CI/CD and release gates
1. Source/branch and change-scope validation.
2. Dependency lockfile and reproducible install.
3. Formatting, lint, typecheck where applicable.
4. Unit tests and domain-rule tests.
5. Build and artifact manifest.
6. Accessibility, link, route, and responsive checks.
7. Security/dependency/secrets scanning.
8. Preview deployment to an isolated environment.
9. Browser smoke/E2E tests with retained logs and screenshots.
10. Independent evidence review, explicit approval, and promotion.
11. Post-deploy health checks, telemetry review, and rollback readiness.

**Fail-closed:** missing runner assignment, missing steps/logs, failed tests, unverifiable artifacts, incomplete evidence, or missing authorization blocks promotion. The known G02 runner-dispatch blocker must be resolved with real execution evidence before downstream release gates are considered passed.

## 9. Roadmap (gated, not a promise of delivery dates)
- Phase 0 — inventory, source authority, environment boundaries, and evidence gates.
- Phase 1 — flagship discovery surface, design tokens, canonical registry, and individual world prototypes.
- Phase 2 — one end-to-end vertical slice: identity + one product + trusted service + observability + tests.
- Phase 3 — shared wallet/rewards only after ledger/security review; creator/media and commerce integrations separately.
- Phase 4 — mobile shell, broader game integrations, operations dashboards, and staged rollout.

Each phase advances only when its acceptance criteria and evidence are recorded. Calendar estimates are not release authorization.

## 10. Definition of done
- Product route and owner are registered.
- Responsive layout, accessibility, reduced-motion, and failure states are checked.
- Asset provenance/rights/approval is recorded.
- No secrets or production credentials are committed.
- Backend security rules and trusted mutations are tested.
- CI has real runner execution, retrievable logs, and independently verifiable artifacts.
- Product owner approves the exact scope.
- Deployment, activation, and post-activation checks have separate explicit gates.

## 11. Current status caveat
This document is a master planning baseline. It does not certify that listed systems exist, that authentication/economy backends are connected, or that any world is production-ready. Verify current repository and provider state before implementation or deployment.
