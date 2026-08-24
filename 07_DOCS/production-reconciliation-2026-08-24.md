# Lingo Legacy Production Reconciliation — 2026-08-24

## Objective

Create one auditable sequence for fixing defects, verifying completed work, finishing the next queued build, and continuing the ecosystem in dependency order.

## Status vocabulary

- **BUILT** — implementation exists in source control.
- **PUSHED** — implementation is committed to GitHub.
- **DEPLOYED** — a deployment artifact exists.
- **LIVE-VERIFIED** — deployment, route/domain, backend dependencies, critical flows, and smoke tests were verified.
- **BLOCKED** — work cannot safely proceed because a dependency or credential is missing.
- **REVIEW** — implementation exists but awaits the user's review/acceptance pass.

Never promote BUILT, PUSHED, or DEPLOYED directly to LIVE-VERIFIED.

## Error-fix wave

1. Remove contradictory deployment claims from canonical documentation.
2. Establish `LINGO_LEGACY_HQ` as the ecosystem-level source of truth.
3. Classify every child repository as ACTIVE, MERGE, REFERENCE, or ARCHIVE.
4. Reconcile each live surface against repository, build, deployment, domain, backend, data, analytics, and QA evidence.
5. Treat missing production credentials or external provider approvals as BLOCKED rather than fabricating completion.
6. Require a release record before calling a surface LIVE-VERIFIED.

## Execution order

### Wave 0 — Reconciliation

- Inventory repositories and deployments.
- Detect duplicate/competing implementations.
- Record current branches and deployment targets.
- Record known CI/CD and environment gaps.

### Wave 1 — Defect correction

- Fix documentation contradictions.
- Fix broken navigation and CTA routes.
- Fix missing error/empty/loading states.
- Fix mobile/responsive regressions.
- Fix accessibility and keyboard/focus gaps.
- Fix analytics naming inconsistencies.
- Fix unsafe or unsupported claims.
- Add regression tests for every corrected defect.

### Wave 2 — Review gate

The corrected work enters REVIEW. No new feature wave is promoted until the correction set is accepted or explicitly waived.

### Wave 3 — Finish queued build

Complete the next implementation targets already defined in the production dashboard architecture:

- form-backed asset intake
- persistent project/studio data
- release checklist state
- analytics event naming for CTAs and publishing actions

### Wave 4 — Ask Lingo ⭐️ integration

Attach the shared Ask Lingo ⭐️ contract to every product/entity without creating isolated, conflicting AI brains.

### Wave 5 — Production QA and release

Run smoke, functional, accessibility, performance, security, analytics, and rollback checks. Only then mark LIVE-VERIFIED.

## Release record requirements

Every production release must record:

- project/entity name
- repository and commit SHA
- build/version
- deployment target
- production URL/domain
- backend dependencies
- database/data migration status
- analytics status
- QA result
- security result
- rollback target
- verification timestamp

## No false completion rule

If a task cannot be verified from connected tooling, it remains `PUSHED`, `DEPLOYED`, or `BLOCKED` as appropriate. It must not be represented as LIVE-VERIFIED.
