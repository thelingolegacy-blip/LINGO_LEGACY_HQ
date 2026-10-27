# LINGO Legacy Parallel Build — Evidence Manifest

Date: 2026-10-27
Disposition: PROTECTED HOLD; no production promotion authorized.

## Current independently observed facts
- GitHub account repository listing returned 38 repositories. Repository names alone do not establish source authority or readiness.
- HQ workflow run 40292271636: completed/failure; jobs API returned zero jobs; artifacts API returned zero artifacts.
- Runtime repository workflow run 40536368836: completed/failure; jobs API returned zero jobs; artifacts API returned zero artifacts.
- Vercel search returned four projects: lingo-assets, nextjs-lingolegacy, the-lingo-legacy, thats-my-lingo.
- Vercel deployment query returned recent READY records, including production-targeted deployments. READY does not prove custom-domain routing or live application acceptance.
- Vercel domain listing returned zero domains for the queried scope. This does not prove that all projects or teams have no domains.
- Public page retrieval of https://thelingolegacy.com/ returned the flagship page and its own disclosure: "Candidate experience — not a production status statement."
- Public page reader could not retrieve www, /healthz, /api/v1/runtime, or /api/v1/platform/gates. These reader errors are not HTTP status evidence.

## Blocked / unknown
- G02 runner qualification: BLOCKED.
- Cloudflare zone, DNS, routes, Worker/build configuration and traffic: NOT independently verified in this pass; the API inventory request was blocked by tool safety checks.
- Firebase credentials/runtime and security rules: BLOCKED pending authorized non-production validation.
- Browser accessibility, security, end-to-end and mobile acceptance: NOT YET QUALIFIED.
- Production promotion: NOT AUTHORIZED.

## Parallel work lanes
1. Reconcile repository roles, commits and existing PR overlap before duplicate implementation.
2. Diagnose G02 with runner-admin/host evidence; require runner ID > 0, identity, instantiated steps, executed sentinel, retrievable logs/artifacts, checksums and independent correlation.
3. Review existing flagship PR #402; keep draft until static tests run and live route/source parity is verified.
4. Obtain authorized read-only Cloudflare inventory; do not change production DNS, routes, Worker, builds or traffic.
5. Resolve Vercel team/domain scope; validate target, deployed source and custom-domain mapping.
6. Validate Firebase only in an authorized non-production environment; never fabricate credentials or expose secrets.
7. Execute browser, accessibility, dependency/security, API contract, commerce sandbox and product-specific build tests on qualified runners.
8. Independently review evidence, rollback target and authorization before promotion.

## Evidence acceptance
Every result must identify repository, commit SHA, workflow/run/attempt/job, runner, command/tool versions, timestamp, exit code, retrievable logs/artifacts, SHA-256, deployment target/version, live route/HTTP/TLS/security-header results, redacted backend checks, independent verifier and exception record. No result passes on assumption or dashboard status alone.

Final state: SOURCE INVENTORY=PARTIAL; CI=NOT QUALIFIED; CLOUDFLARE=UNKNOWN; FIREBASE=BLOCKED; PRODUCTION=PROTECTED HOLD.


## Post-commit execution check — 2026-10-27

The evidence-manifest commit triggered the existing `.github/workflows/runner-slim-probe.yml` workflow on the isolated PR branch.

- Run: https://github.com/thelingolegacy-blip/LINGO_LEGACY_HQ/actions/runs/40580610156
- Commit: `976ee4de527537114d3fecc3c3c5937bba5e03d2`
- Run status: completed / failure.
- Jobs API: `total_count=0`, `jobs=[]`.
- Artifacts API: `total_count=0`, `artifacts=[]`.
- Interpretation: this new attempt did not qualify CI execution and produced no retrievable job/artifact evidence. The G02 acceptance predicate remains unchanged and blocked.

This is a real control-plane observation correlated to the commit, but it is not a passing test result and does not independently establish the underlying cause of runner dispatch failure.


## Additional independent control-plane verification — 2026-10-27 22:23 UTC

### Cloudflare authoritative inventory
- Read-only Cloudflare API returned the `thelingolegacy.com` zone as active and unpaused, with nameservers `rita.ns.cloudflare.com` and `rustam.ns.cloudflare.com`.
- DNS records: apex A is proxied; `www` is a proxied CNAME to the apex; `casino` CNAME targets `proxy-v2.appdeploy.ai`; `app` CNAME targets `my-flutter-app.pages.dev`; `admin` CNAME targets `admin-thelingolegacy.firebaseapp.com`.
- Worker route inventory confirms both `thelingolegacy.com/` → `lingo-flagship-root` and `thelingolegacy.com/*` → `thelingolegacyv-5`; `www.thelingolegacy.com/*` → `thelingolegacyv-5`. These routes are present in the live API inventory. Apex page retrieval shows the flagship candidate page and its explicit non-production-status disclosure. The browser reader could not retrieve `www` or the Cloudflare Pages preview URLs, so those live HTTP/browser checks remain unqualified.
- The exact-root Worker has active deployment `31ccefbb-ddf4-4a62-974b-3ee9d0bc81d3`, version `658acd1a-997b-45cd-b8fc-e59c59b26b45`, at 100% of that Worker’s traffic. The existing `thelingolegacyv-5` Worker’s latest deployment `ecd71a70-e476-4318-92a7-35249ced360b` assigns version `2d161fa5-598f-4998-ada8-7ac4c72c3461` at 100% of that Worker’s traffic. These are per-Worker allocations, not a single combined site traffic percentage.
- Cloudflare Workers Builds API confirms no build configuration exists for script target `thelingolegacy` (404). The existing `thelingolegacyv-5` configuration is explicitly fail-closed: branch `__LINGO_FAIL_CLOSED_HOLD__`, production path include `__LINGO_DEPLOYMENT_DISABLED__/**`, and previews disabled with `__LINGO_PREVIEW_DISABLED__/**`. Its recent successful-status build records use `build_command: true` and disabled path filters; they are not evidence of a real source build or deploy.
- Cloudflare Pages project `lingo-legacy-github-integration-test` has a successful preview deployment `4d273caf-67bb-404d-8079-bb45174262a0` for branch `architecture/landing-page-foundation-2026-10-27`, commit `8c34811b9f4999ec1f0d59e348e2b16dc9d20800`. This is preview-build evidence only; its page content could not be independently browser-verified in this pass.

### Vercel and source checks
- Vercel team inventory distinguishes a Hobby team (`shop-c54e0277`) and a Pro team (`thelingolegacy`); both show a project named `the-lingo-legacy` linked to `TheLingoLegacy`. The queried Hobby-team project has `launch.thelingolegacy.com`, `studio-preview.thelingolegacy.com`, and a `vercel.app` domain; the queried Pro-team project domain list returned zero. No apex/www Vercel mapping was found in these scoped project-domain results. This does not override the live Cloudflare routing inventory.
- Runtime PR #402 checks show Cloudflare Pages preview success and Vercel preview success, while the Cloudflare Workers Build check fails because script target `thelingolegacy` does not exist. This is a source-to-provider configuration mismatch, not proof that the candidate is ready for production.
- Firebase source inspection confirms placeholder API keys/app IDs in `lib/firebase_options.dart`; the `.firebaserc` default project is `lingo-legacy-production`. Project ownership, live authentication, and rules remain unverified.
- HQ Actions runs now return job records for several probe runs, but those records have `steps: null` and `logs_url: null`; direct log retrieval returns `BlobNotFound`. Other runs still return no jobs. Therefore no real sentinel/test execution has been proven.
- Vercel status for HQ manifest commit `b0fc439bbc8faa90e6fa9dc79994b99db40f83d0` reports `Account is blocked` and `1 required project failed to deploy`. This is an independent preview/deployment blocker for that project, separate from GitHub runner dispatch.

### Updated gate interpretation
- Source inventory: PARTIAL, with live Cloudflare route and DNS state now observed.
- G02/G03: BLOCKED; job identity/step/log/artifact acceptance predicate not satisfied.
- Cloudflare: LIVE ROUTES OBSERVED; SOURCE-TO-ROUTE PARITY NOT QUALIFIED; Worker build target mismatch and intentionally disabled build configuration remain.
- Vercel: PREVIEW PROJECT ACCESS/BILLING BLOCKED for HQ status; scoped domain results do not show apex/www on the queried Vercel projects.
- Firebase: BLOCKED by source placeholders and missing authorized non-production validation.
- Browser acceptance, accessibility, game/commerce integrations, backup/rollback drill, and release authorization: NOT QUALIFIED.
- Production remains PROTECTED HOLD. No production configuration was changed by this verification.


## Recovery action register — RESTORE / REPAIR / REFORM / REINITIATE / REPRODUCE / RENDER / REMATCH / REMOVE / REMEMBER / REMINDER

### Completed in this pass
- **REPAIR / REMOVE (isolated workflow only):** Repaired `.github/workflows/runner-slim-probe.yml` on branch `fix/runner-probe-label-and-sync-2026-09-21`. Removed the empty `hosted-runner-probe:` job definition; retained one explicit `ubuntu-latest` sentinel job; added least-privilege `contents: read`, a five-minute timeout, execution-context capture, and a 14-day artifact upload.
- **REPAIR:** Corrected UTC timestamp command formatting in the sentinel.
- **REINITIATE / REPRODUCE:** Both changes were committed to the isolated branch. Commits: `a1c92b9723afb2c57f65fda5d00c0a87cc9f4873` (workflow structure and evidence capture), then `93100cba108e71b26f9cfbbaee0409bc58760bfb` (timestamp correction). The second commit is the latest workflow source.
- **REMEMBER:** This register preserves the action history and the acceptance limits. The corrected workflow source was re-fetched and verified at blob `a88bf4181cd862eaeba5371a45da336be4662a1b`.
- **RENDER:** The workflow now emits a plain-text execution sentinel intended to become an inspectable artifact when a runner actually executes it. Artifact creation has not yet been proven.
- **REMATCH:** Workflow remains explicitly configured for GitHub-hosted `ubuntu-latest`; it does not claim or substitute for the canonical self-hosted G02 identity gate.
- **RESTORE / REFORM:** Continue from last-known-good, fail-closed state; reconcile source, route ownership, provider project identity, and accepted evidence before any release decision.

### Still outstanding
- No workflow run associated with the repair commits was returned by the PR-filtered commit-runs query; this is not proof the push-triggered workflow executed. Independently verify a new run, positive runner identity, instantiated steps, retrievable logs, and the exact-run artifact.
- G02 remains BLOCKED until the canonical self-hosted runner acceptance predicate is met. This hosted probe is diagnostic only and cannot satisfy G02.
- Cloudflare route/source parity, Vercel team/project/domain reconciliation, Firebase placeholders, accessibility/browser acceptance, and release certification remain unresolved.
- **REMOVE boundary:** Only the malformed empty job was removed. No live routes, DNS records, production workers, credentials, app data, or deployments were removed.
- **REMINDER:** No reminder has been scheduled yet because the requested reminder time or cadence was not specified.
- Production disposition remains `PROTECTED HOLD`; no PR was merged and no production configuration or traffic was changed.
