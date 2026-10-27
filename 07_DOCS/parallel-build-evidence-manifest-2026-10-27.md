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
