# LINGO_LEGACY_HQ — Governance & Portfolio Reference

This repository is the **ecosystem governance, architecture, and portfolio-reference library** for The Lingo Legacy. It contains master operating contracts, architecture documentation, folder structures, templates, and starter assets.

**It is not the canonical production code repository and does not independently authorize production releases.**

## Source-of-truth boundaries

- **Canonical production implementation:** [`thelingolegacy-blip/TheLingoLegacy`](https://github.com/thelingolegacy-blip/TheLingoLegacy), `main`. This repository owns the production Worker source, `worker.js`, `wrangler.jsonc`, and implementation-level release evidence for `thelingolegacyv-5`.
- **Governance and architecture reference:** `LINGO_LEGACY_HQ` (this repository). It owns reusable enterprise contracts, portfolio standards, architecture decisions, templates, and reconciliation records. It does not replace the canonical implementation repository.
- **Product and child repositories:** own product-specific source only when registered in the canonical portfolio inventory, mapped to a named product owner, and accepted through the release gates.
- **Parallel implementations, templates, and archives:** remain non-production until their source, owner, route, runtime, data, asset and release provenance are reconciled and explicitly accepted.

The production truth rule remains: a design, scaffold, Git commit, preview upload, AppDeploy deployment record, or successful build is not automatically a production release. A release is only marked LIVE after source, build, deployment, domain, backend, data, analytics, security and QA evidence are correlated and independently reviewed.

## Top-level folders

- `01_WEBSITES` — landing pages and site skeletons
- `02_GAMES` — game project folders and design bibles
- `03_MUSIC_DIVISION` — artist folders and soundtracks
- `04_MEDIA` — video and media assets
- `05_ASSETS` — visuals, sounds, animations, source files
- `06_CODE` — engine folders and build notes
- `07_DOCS` — master plan, game design bible templates, blueprints, operating maps, production contracts
- `08_EXPORTS` — exportable PDFs and conversion tools

## Canonical operating model

`TheLingoLegacy/main` is the production implementation source. This HQ repository is the governance and architecture reference. No repository may silently replace either role or claim production authority by README wording alone.

Each project must be classified in the canonical portfolio registry as one of:

- `CANONICAL` — authoritative implementation source
- `ACTIVE CHILD` — accepted product implementation with owner and source mapping
- `MERGE` — implementation being consolidated into the canonical source
- `REFERENCE` — retained for documentation/history
- `TEMPLATE` — reusable starter, not production code
- `ARCHIVE` — no longer used for production
- `EMPTY` — no verified implementation

Every active child needs a named accountable product owner, source path, runtime, deployment target, backend/data boundary, asset provenance, tests, support path, and rollback target. The GitHub account owner is not a substitute for a named operational owner or independent approver.

See `07_DOCS/production-reconciliation-2026-08-24.md` for the existing reconciliation contract and execution order. Current portfolio and route reconciliation is maintained in the canonical implementation repository.

## askLINGO and LINGOai

Every LINGO product may expose an `askLINGO` experience backed by the shared `LINGOai` capability and a product-specific knowledge layer. Product agents may specialize in their own application, workflows, content, controls and help topics while inheriting shared identity, policy, permissions and cross-product context.

Provider integrations, model API keys, data access and production actions must remain server-side, authenticated, rate-limited, audited and explicitly approved. No provider is considered integrated from a design or placeholder endpoint alone.

See `07_DOCS/ask-lingo-ai-architecture.md` for the architecture reference.

## Studio UI

The Studio UI must use the shared LINGO OS design language and remain responsive, accessible and motion-safe. Deployment provider claims belong in deployment manifests and release records, not in generic documentation.

## Blueprint Studio Phase 2

See `07_DOCS/blueprint-studio-phase-2.md` for the shared Creative OS, asset taxonomy, dashboard modules, studio pipelines, automation flow and wireframe checklist.

## Production Dashboard Architecture

See `07_DOCS/production-dashboard-architecture.md` for the Admin Command Center, Asset Vault Ops Dashboard, HQ operating map, core modules and implementation targets.

## Premium Studio Production Layout System

See `07_DOCS/premium-production-layout-system.md` for the shared high-premium layout language across web, game, asset, book and GDevelop surfaces.

## Lane activation front-to-back

See `07_DOCS/lane-activation-front-to-back.md` for the Flutter, Firebase, Cloudflare and GitHub integration map for Loyalty Lane Apparel, Lingo Wash District, Kotton’s Code, Spades, Uhno, promotion banners, sounds, animations and safety guardrails.

## Production sequence

`RECONCILE → FIX → VERIFY → REVIEW → FINISH QUEUED BUILD → QA → PUSH → DEPLOY → VERIFY LIVE → CONTINUE IN ORDER`

No production promotion occurs while a required test, security, privacy, legal, data, rollback or independent-review gate is blocked.
