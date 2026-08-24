# LINGO_LEGACY_HQ — Master Repository

This repository is the **canonical aggregator and architecture source of truth** for the Lingo Legacy ecosystem. It contains the master folder structure, templates, shared operating contracts, and starter assets for child projects.

> **Production truth rule:** a design, scaffold, Git commit, preview deployment, or AppDeploy deployment is not automatically a production release. A release is only marked LIVE after repository, build, deployment, domain, backend, data, analytics, and QA verification are recorded together.

## Top-level folders

- `01_WEBSITES` — landing pages and site skeletons
- `02_GAMES` — game project folders and design bibles
- `03_MUSIC_DIVISION` — artist folders and soundtracks
- `04_MEDIA` — YouTube and media assets
- `05_ASSETS` — visuals, sounds, animations, source files
- `06_CODE` — engine folders and build notes
- `07_DOCS` — master plan, game design bible templates, blueprints, operating maps, production contracts
- `08_EXPORTS` — exportable PDFs and conversion tools

## Canonical operating model

`LINGO_LEGACY_HQ` owns the ecosystem-level contracts. Child repositories own implementation details. No child repository may silently become a competing master.

Each project must be classified as one of:

- `ACTIVE` — current implementation source
- `MERGE` — implementation being consolidated into the canonical source
- `REFERENCE` — retained for documentation/history
- `ARCHIVE` — no longer used for production

See `07_DOCS/production-reconciliation-2026-08-24.md` for the current reconciliation contract and execution order.

## Ask Lingo ⭐️ / Lingo.AI

Every Lingo product and entity is intended to expose an **Ask Lingo ⭐️** surface backed by a shared `Lingo.AI` brain and a product-specific knowledge layer. Product agents may specialize in their own application, workflows, content, controls, and help topics while inheriting shared identity, policy, permissions, and cross-product context.

See `07_DOCS/ask-lingo-ai-architecture.md` for the canonical architecture.

## Studio UI

The Studio UI must use the shared Lingo OS design language and remain responsive, accessible, and motion-safe. Deployment provider claims belong in deployment manifests and release records, not in generic documentation.

## Blueprint Studio Phase 2

See `07_DOCS/blueprint-studio-phase-2.md` for the shared Creative OS, asset taxonomy, dashboard modules, studio pipelines, automation flow, and wireframe checklist.

## Production Dashboard Architecture

See `07_DOCS/production-dashboard-architecture.md` for the Admin Command Center, Asset Vault Ops Dashboard, HQ operating map, core modules, and implementation targets.

## Premium Studio Production Layout System

See `07_DOCS/premium-production-layout-system.md` for the shared high-premium layout language across web, game, asset, book, and GDevelop surfaces.

## Lane activation front-to-back

See `07_DOCS/lane-activation-front-to-back.md` for the Flutter, Firebase, Cloudflare, deployment, GitHub interface map for Loyalty Lane Apparel, Lingo Wash District, Kottons Code Spades, Uhno, promotion banners, sounds, animations, and safety guardrails.

## Production sequence

`RECONCILE → FIX → VERIFY → REVIEW → FINISH QUEUED BUILD → QA → PUSH → DEPLOY → VERIFY LIVE → CONTINUE IN ORDER`
