# Platform Integration Matrix — Sonic Boom 2030

| Layer | System | Role | Required integration |
|---|---|---|---|
| Client | Flutter | Mobile/tablet application shell | Lingo ID, API gateway, push, analytics, secure storage |
| Identity | Firebase Auth / Lingo ID | Authentication and identity | App clients, backend verification, roles |
| Data | Firestore | User/product/community application data | Security rules, indexes, server workers |
| Server | Firebase Functions / backend services | Trusted business workflows | queues, webhooks, scheduled jobs |
| Edge | Cloudflare Workers | Public API/edge orchestration | routing, auth verification, rate limits |
| Data edge | Cloudflare D1 | Relational operational data | migrations, backups/export strategy |
| Object storage | Cloudflare R2 | Media/assets/artifacts | signed access, lifecycle policies |
| Fast state | Cloudflare KV | configuration/cache/non-authoritative state | namespace separation and TTLs |
| Source | GitHub | Canonical implementation and CI/CD | branches, PRs, checks, release tags |
| QA | GitHub Actions + Live Lab | automated verification | unit, integration, E2E, security, AI evals |
| Observability | Cloud + app telemetry | health and performance | logs, traces, metrics, alerts |

## Environment model

`local → development → staging → production`

Each environment must have separate credentials, data controls and deployment configuration.

## Flutter
- Keep platform capabilities behind interfaces.
- Centralize API/auth/session state.
- Add accessibility, offline handling and error recovery.
- Keep health, location, contacts, microphone, camera and device controls permission-gated.

## Firebase
- Use Auth for identity primitives; Lingo ID remains the product identity contract.
- Firestore security rules must enforce tenant/user boundaries.
- Functions handle trusted server-side workflows.
- Do not place secrets in Flutter or public repositories.

## Cloudflare
- Workers expose the edge API and orchestration boundary.
- D1 is used for relational operational workloads where appropriate.
- R2 stores media and production artifacts.
- KV is used only for data that can safely be cached or reconstructed.
- Wrangler configuration must distinguish environments and never contain production secrets.

## GitHub
- Main branch is protected by review/check policy where available.
- Feature work goes through branches and pull requests.
- CI must run before production release.
- Release records link commit, build, deployment and verification evidence.

## Migration principle
Existing repositories remain classified as ACTIVE, MERGE, REFERENCE or ARCHIVE until reconciliation is verified. Do not silently overwrite a working production source with a planning scaffold.
