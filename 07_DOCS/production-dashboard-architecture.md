# Production Dashboard Architecture

This document defines the next build wave for the Lingo Legacy Admin Command Center.

## Dashboard surfaces

| Surface | Repository | Route or location | Purpose |
| --- | --- | --- | --- |
| Admin Command Center | TheLingoLegacy | `/admin-command-center/` | Main production dashboard for assets, projects, studios, timeline, testing, publishing, and automation |
| Asset Vault Ops Dashboard | lingo_assets | `/dashboard/` | Asset taxonomy, intake queue, approval gates, studio routing, publishing readiness, and analytics labels |
| HQ Operating Map | LINGO_LEGACY_HQ | `07_DOCS/production-dashboard-architecture.md` | Canonical architecture reference for dashboard controls and handoffs |

## Core modules

1. Assets — upload, tag, version, approve, route
2. Projects — website, app, game, cinematic, commerce, brand studios
3. Studios — Website Studio, App Studio, Game Studio, Cinematic Studio, brand-specific studios
4. Timeline — sprints, milestones, event drops, release windows
5. Testing — QA notes, performance checks, accessibility checks, feedback
6. Publishing — Vercel web surfaces, commerce drops, social campaigns, rollout logs
7. Automation — asset added, auto-tagged, stored, routed, marketed, tracked

## Wireframe rules

Every dashboard card needs:

- A clear module label
- One operational job
- A visible status or next action
- A handoff destination
- A QA or publishing gate when the work affects a live surface

## Next implementation targets

- Add form-backed asset intake.
- Add persistent project/studio data.
- Add release checklist state.
- Add analytics event naming for CTAs and publishing actions.
