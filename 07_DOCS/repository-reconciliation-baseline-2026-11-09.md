# LINGO GitHub Repository Reconciliation Baseline

**Captured:** 2026-11-09 (UTC, GitHub API timestamps)  
**Scope:** Repositories returned by the connected GitHub repository search for `thelingolegacy-blip`  
**Purpose:** Establish an evidence-backed inventory before selecting canonical repositories or archiving anything.  
**Disposition:** READ-ONLY INVENTORY; no repositories, branches, workflows, settings, or production resources were changed.

## 1. Inventory summary

The connected search returned **38 repositories**. This is the visible search result set, not a guarantee that every repository in the account or every connected organization has been enumerated.

| Repository | Default branch | GitHub size | Initial observation |
|---|---|---:|---|
| `TheLingoLegacy` | `main` | 5812 | Primary flagship implementation candidate; substantial code and many product surfaces |
| `TheLingoLegacy-Web` | `main` | 5848 | Separate web implementation; active draft PRs and failing startup workflows |
| `LINGO_LEGACY_HQ` | `main` | 540 | Ecosystem governance and operating architecture; multiple open operations PRs |
| `lingo_assets` | `main` | 100 | Asset/dashboard implementation candidate |
| `THATS-MY-LINGO` | `main` | 196 | Dedicated game implementation candidate |
| `Loyaltylaneapparel` | `main` | 36 | Apparel product implementation candidate |
| `Spades-is-my_Lingo` | `main` | 124 | Dedicated game implementation candidate |
| `Spades_is_my-lingo` | `main` | 0 | Same-name variant; empty repository by reported GitHub size |
| `Theriseofzavione` | `main` | 59 | Media/IP implementation candidate |
| `kottens-code-engine` | `main` | 34 | Kotton's Code implementation candidate |
| `Kotton-code-engine` | `main` | 25 | Similar-name variant; ownership and code overlap require comparison |
| `thelingolegacy-hub` | `main-/-root⁠` | 95 | Hub candidate; unusual default branch string must be inspected |
| `thelingolegacy-hub-` | `main` | 0 | Similar-name empty repository |
| `-the-lingo-legacy-hub` | `main` | 4 | Similar-name variant |
| `-the-lingo-legacy-master` | `main` | 5 | Similar-name variant |
| `LingoLegacy-MasterBlueprint` | `main` | 62 | Master blueprint candidate |
| `thelingolegacy-blip-REPO-` | `main` | 28 | General repository candidate; role requires review |
| `lingo_admin_console` | `main` | 1 | Admin console candidate; minimal reported size |
| `lingo_backend` | `main` | 0 | Empty backend repository |
| `Backend` | `main` | 0 | Empty generic backend repository |
| `Games` | `main` | 0 | Empty generic games repository |
| `thats_my_lingo_app` | `main` | 0 | Empty app variant |
| `LingoLegacy-` | `main` | 0 | Empty similarly named repository |
| `lingo-legacy-` | `main` | 0 | Empty similarly named repository |
| `Tricia-escape-` | `main` | 0 | Empty game repository |
| `lingo_documentation` | `main` | 0 | Empty documentation repository |
| `lingo_website` | `main` | 0 | Empty website repository |
| `Github` | `main` | 0 | Empty generic repository |
| `Devontray` | `main` | 0 | Role unclassified |
| `ZavioneLingo` | `main` | 2 | Role unclassified |
| `Lingolegends` | `main` | 1 | Role unclassified |
| `nextjs` | `main` | 69 | Private generic framework repository; do not assume product ownership |
| `nextjs-boilerplate` | `main` | 69 | Private boilerplate candidate; do not assume product ownership |
| `angular` | `main` | 197 | Private framework repository; role requires owner confirmation |
| `chatbot` | `main` | 428 | Private chatbot candidate; role and dependencies require review |
| `django` | `main` | 5 | Private framework repository; role requires review |
| `Tv-os` | `main` | 0 | Empty TV app repository |
| `codemagic-docs` | `master` | 25754 | Large documentation/reference repository; likely vendor/reference material, not automatically LINGO product source |

GitHub's reported repository size is a rough storage measure, not a code-quality, completeness, or activity score.

## 2. Recent CI and pull-request observations

### `TheLingoLegacy`
- Recent workflow runs observed on 2026-11-09 returned `startup_failure`, including G02 runner image build, Crimson Smoke UI validation, and static CI.
- The corresponding G02 image build run returned zero jobs through the connected API query.
- Open draft PRs observed include #515 (Supabase-primary architecture), #514 (dispatch control plane), #513 (public demo-only pages), #512 (G02 diagnostic path), #511 (master registry/dependency graph), #510 (enterprise completion program), #509 (AppDeploy reconciliation), #508 (G02 sentinel path), and #506 (security hardening).
- PR #512 adds a read-only Docker Compose runner diagnostic script and updates host-provisioning guidance. This is a proposed change and has not been treated as merged or executed.

### `TheLingoLegacy-Web`
- Recent workflows for branch `integration/supabase-primary-foundation` returned `startup_failure`.
- The corresponding queried run had zero jobs.
- Open draft PR #43 is the staged Supabase primary-backend foundation; other open PRs include site reconstruction, AI orchestration, preview, navigation, and accessibility work.

### `LINGO_LEGACY_HQ`
- PR #50 is the current draft enterprise execution charter.
- Recent runs on the charter branch included runner probes and Jekyll CI; queried jobs returned failure and no instantiated steps for the runner-route probe.
- The Jekyll workflow invokes a Docker-based Jekyll build. A separate existing draft PR #49 proposes replacing the mismatched Jekyll Docker CI with HQ static contract checks. Review that PR rather than creating another competing CI repair.
- Multiple runner-probe workflows overlap. Their trigger scope and diagnostic value should be consolidated after a workflow inventory.

### `THATS-MY-LINGO`
- Latest visible workflow runs in the connected search were from 2026-10-21 and returned failures. Refresh before acting; the available snapshot is not current enough to establish present state.

## 3. High-priority reconciliation risks

1. **Repository proliferation:** multiple near-identical names and empty repositories increase the risk of commits landing in the wrong source.
2. **Source-of-truth ambiguity:** separate flagship and web repositories both have active implementation work. Define ownership boundaries and shared contracts.
3. **CI execution failure:** startup failures and zero-job observations prevent acceptance of build/test evidence.
4. **Overlapping draft PRs:** several PRs cover enterprise charter, registry, G02, CI, security, and Supabase architecture. Reconcile dependencies and merge order before opening more parallel changes.
5. **Runner-probe noise:** multiple probe workflows can create repeated failing runs without producing new diagnostic information.
6. **Unverified integrations:** repository presence or documentation does not prove a connected production service, valid credential, working runtime, or authorized publishing account.

## 4. Required classification process

Each repository must be assigned one reviewed disposition:

- **ACTIVE** — canonical implementation with an accountable product owner.
- **MERGE** — unique content or code must be migrated into a canonical repository before retirement.
- **REFERENCE** — retained as vendor documentation, template, research, or read-only reference.
- **ARCHIVE** — no longer needed after dependency and history review.
- **HOLD** — classification cannot be safely determined yet.

Do not delete, archive, rename, transfer, or change default branches until the owner has reviewed the dependency and history impact.

## 5. Next read-only audit sequence

1. Fetch full README, package manifests, workflow inventory, branch list, and recent commit history for each non-empty LINGO-owned candidate.
2. Compare similarly named repositories using file trees and commit ancestry; identify unique assets and code before proposing consolidation.
3. Inspect open PRs and workflow evidence for the two flagship repositories and HQ; map conflicting scopes and dependencies.
4. Reconcile deployment targets and domain ownership against current Cloudflare evidence without changing DNS, Workers, or traffic.
5. Refresh product repositories' workflow histories and classify each product's real build/test state.
6. Publish a reviewed canonical repository registry and dependency map.

## 6. Acceptance rule

This baseline is a discovery artifact, not an approved canonicalization decision. It records observed metadata and known workflow/PR snapshots only. Every repository disposition and any consolidation action requires evidence review and explicit owner approval.
