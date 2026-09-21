# Lingo Legacy Studio Stack Development Contract — 2026-09

## Status
ACTIVE • CANONICAL • PRODUCTION-DIRECTED

## Non-negotiables
- Cloudflare is the authoritative web/runtime edge: Workers, Pages only where appropriate, D1, KV, R2, and Cloudflare routing.
- GitHub is the authoritative source-control and CI/CD coordination layer.
- Firebase remains the application data/auth platform where already designated by the ecosystem architecture.
- Flutter remains the mobile/super-app client platform.
- AppDeploy staging may be used for isolated implementation and QA; an AppDeploy preview never becomes production authority by itself.
- Secrets never enter source control.
- Production promotion remains fail-closed: RECONCILE → FIX → VERIFY → REVIEW → QA → PUSH → DEPLOY → VERIFY LIVE.

## Dynamic web standard
Every production web surface should expose, as applicable:
- /healthz
- /api/v1/runtime
- /api/v1/platform/manifest
- /api/v1/platform/status
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
- askLINGO / LINGO.ai product knowledge layer
- App Registry
- audit/evidence ledger
- safety and monetization controls
- analytics/observability

## Studio constellation routing
- Avalon: Loyalty Lane Cycle, Say It Again, The Block I Grew Up On, DiceShift Hotel
- Lingo Legacy OS: LINGO, LINGOtravel, askLINGO, LINGO.ai, Loyalty Lane Apparel
- Game143: That’s My Lingo, KottonsCode, Spades Is My Lingo, UhNo Lingo U-NO, LINGOarena, Legacy Legends: Lingo City, Doughboys Oasis, Crazy Weasol’s, Tricia’s Escape, Cashman Lingo Mania, Lingo Lion Eruptions
- LingoCampus: learning extensions for UhNo Lingo U-NO, KottonsCode, Say It Again, and LINGOarena

Secondary relationships do not create duplicate canonical ownership.

## Current staging implementation
The Lingo Legacy Studio Hub AppDeploy staging surface is lingo-legacy-studio-hub-nhda3b. Its latest verified AppDeploy state is READY with zero reported frontend, backend, or network errors. It remains staging and is not production authority.

## Production gate
GitHub Actions runner evidence remains the controlling execution gate. A successful staging build or preview cannot substitute for runner/job/step evidence, live Cloudflare verification, Firebase authorization evidence, or production eligibility.

## Domain policy
thelingolegacy.com and www.thelingolegacy.com are the canonical web hostnames. DNS and runtime authority must remain with Cloudflare. A third-party deployment preview must never become production authority.

## Canonical homepage and landing-page model

- `https://thelingolegacy.com/` is the intended Master Home / Studio Hub gateway.
- The root homepage is an ecosystem directory and must never be replaced by a child storefront.
- Loyalty Lane Apparel owns the dedicated landing path `/loyalty-lane` and canonical property path `/p/loyalty-lane-apparel`.
- The commerce route `/shop` is a gateway into the live Loyalty Lane storefront; checkout remains owned by the commerce platform.
- Other properties receive dedicated landing paths under `/p/<slug>` with short canonical aliases where defined by the route map.
- The homepage owns discovery; property landing pages own context; external or verified application targets own execution; no child property becomes apex authority.
