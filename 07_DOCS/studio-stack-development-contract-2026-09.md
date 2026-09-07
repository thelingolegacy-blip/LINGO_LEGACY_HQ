# Lingo Legacy Studio Stack Development Contract — 2026-09

## Status
ACTIVE • CANONICAL • PRODUCTION-DIRECTED

## Non-negotiables
- Vercel is retired and must not be a runtime, deployment provider, DNS authority, or production dependency.
- No static-only application architecture. Every production web surface must have a dynamic runtime contract, API boundary, persistent-data plan, observability, and release verification.
- Cloudflare is the authoritative web/runtime edge: Workers, Pages only where appropriate, D1, KV, R2, and Cloudflare routing.
- GitHub is the authoritative source-control and CI/CD coordination layer.
- Firebase remains the application data/auth platform where already designated by the ecosystem architecture.
- Flutter remains the mobile/super-app client platform.
- Secrets never enter source control.
- Production promotion remains fail-closed: RECONCILE → FIX → VERIFY → REVIEW → QA → PUSH → DEPLOY → VERIFY LIVE.

## Dynamic web standard
Every web project should expose, as applicable:
- `/healthz`
- `/api/v1/runtime`
- `/api/v1/platform/manifest`
- `/api/v1/platform/status`
- authenticated application APIs
- server-authoritative feature/config state
- persistent state through the owning backend
- structured logs/observability
- safe error and rollback behavior

HTML/CSS/JS assets may be shipped as build artifacts, but the product must not be treated as a static-only site. Navigation, configuration, identity, commerce, rewards, analytics, live-ops, content, and operational state must be runtime-capable.

## Shared ecosystem services
- Lingo ID / identity and RBAC
- Universal Legacy Wallet
- XP Engine
- Rewards Engine
- Bones-to-Coins conversion where applicable
- Ask Lingo ⭐ / Lingo.AI product knowledge layer
- App Registry
- audit/evidence ledger
- safety and monetization controls
- analytics/observability

## Project routing
Each project remains independently deployable while inheriting this contract. Canonical implementation belongs in its matching GitHub repository; LINGO_LEGACY_HQ owns ecosystem contracts and reconciliation.

## Current project families
- TheLingoLegacy — ecosystem web/HQ experience
- THATS-MY-LINGO / thats_my_lingo_app — Vegas entertainment game
- Spades_is_my-lingo / Spades-is-my_Lingo — Spades Is My Lingo
- kottens-code-engine / Kotton-code-engine — Kotton's Code
- Loyaltylaneapparel — Tap Stitch / Loyalty Lane Apparel
- Lingolegends — Legacy Legends
- Lingo-legacy-games / Games — shared game platform
- Lingo-legacy-backend / lingo_backend / Backend — backend consolidation candidates
- lingo_admin_console / Admin — operations/admin consolidation candidates
- Lingo-legacy-tv-os / Lingo-legacy-tv-os / Tv-os — TV platform family
- lingo_website / TheLingoLegacy-Web / nextjs-lingolegacy / lingo-legacy- — web implementation candidates requiring reconciliation

## Chat/project knowledge reconciliation
Prior planning conversations are treated as source material, not executable production truth. Matching project decisions should be captured in the project's README/docs/design record and then implemented through reviewed commits. Conflicting or obsolete plans must be marked REFERENCE/ARCHIVE rather than silently merged.

## Domain policy
`thelingolegacy.com` and `www.thelingolegacy.com` are the canonical web hostnames. DNS and runtime authority must remain with Cloudflare. A third-party deployment preview must never become production authority.
