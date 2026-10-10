# LINGO platform integration and host-recovery plan

Status: **PROPOSED / NOT ACTIVATED**  
Scope: isolated infrastructure integration proposal for PR #34. This document does not provision cloud resources, change production DNS, deploy services, install agents, rotate credentials, delete data, or merge to `main`.

## 1. Operating boundaries

- Production remains fail-closed. The current GitHub Actions blocker is runner dispatch before step initialization; it is not yet evidence of Docker disk or I/O exhaustion.
- Preserve last-known-good (LKG), Cloudflare-authoritative routing, apex/www HQ routing, and the dedicated Loyalty Lane Apparel module. No Vercel/DNS/root rebinding or production promotion through this change.
- No cloud provider, container cluster, monitoring stack, or external integration is activated until owner, account/project, region, network, budget, data classification, authentication method, and teardown plan are verified.
- No secrets in Git, Terraform state, workflow logs, Compose files, or artifacts. Use OIDC/short-lived credentials where supported and a reviewed secret manager.
- No automatic deletion of Docker images or volumes. Do not run destructive cleanup against persistent hosts.

## 2. Proposed architecture

```
GitHub source + pull request
  └─ CI sentinel / runner identity / correlated evidence
      ├─ Docker build validation (no image push)
      ├─ SonarQube static analysis (quality gate required before promotion)
      ├─ Terraform fmt/validate/plan (no apply in CI)
      ├─ Ansible syntax/check mode (no production mutation)
      └─ artifact: run + attempt + commit + job + logs + test outputs

Cloud adapter (select one approved target per workload)
  ├─ AWS: ephemeral runner/compute only after account, region, VPC, IAM/OIDC, budget and teardown are approved
  └─ Azure: equivalent isolated runner/compute after tenant, subscription, region, network, workload identity and budget are approved

Runtime (only after acceptance)
  ├─ Kubernetes: isolated namespace, resource requests/limits, probes, network policies, secrets integration
  ├─ Docker/Compose: development or staging only; pinned images; named volumes explicitly documented
  └─ Gateway: Cloudflare remains authoritative for public edge/routing; internal gateway is a separate service and must not replace root routing

Observability
  ├─ Prometheus → Grafana dashboards/alerts
  └─ Logs → Logstash → Elasticsearch → Kibana
       └─ alerts route to Slack only after webhook/app permissions are validated
```

## 3. Integration register

| Requested tool | Proposed role | Gate / notes |
|---|---|---|
| Gigatech | Vendor/product adapter placeholder | Exact vendor, API, account and intended function are unconfirmed; do not invent an endpoint. |
| AWS | Optional ephemeral CI runner / cloud infrastructure | No instance or service provisioned. Verify account, region, VPC, IAM/OIDC, spend ceiling, TTL and teardown. |
| Azure | Alternative cloud adapter | Do not deploy alongside AWS by default; select based on existing ownership and network/security requirements. |
| Cloud / new gateway | Separate internal service gateway | Public DNS remains Cloudflare-authoritative; no root route changes. |
| Docker containers | Reproducible build/runtime | No verified root Dockerfile was found in the earlier audit. Do not invent an application image. |
| Docker daemon | Log rotation and host diagnostics | Merge settings into existing config only after backup, validation, change window and host evidence. |
| I/O/disk exhaustion | Diagnose bytes, inodes, I/O wait, daemon logs, container writable layers, builder cache and persistent volumes separately | Current host telemetry is unknown until a real runner/host executes checks. |
| Docker cache mounts | Do not add or retain Dockerfile `RUN --mount=type=cache` unless a reviewed workload specifically requires it | This proposal does not introduce cache-mount syntax. CI cache remains separate and bounded. |
| Terraform / HashiCorp | Infrastructure-as-code and secret-management adapters | Start with fmt/validate/plan; remote state encryption/locking; no `apply` or state import until approved. Vault/secret-manager choice remains open. |
| Kubernetes | Optional orchestrator after container and capacity evidence | Not a fix for GitHub control-plane runner dispatch. Require quotas, probes, policies, resource limits, ingress review and rollback. |
| Ansible | Idempotent host preflight and reviewed maintenance playbooks | Syntax check and check mode first; no production daemon restart in this PR. |
| Jenkins | Optional alternate CI controller | Do not create a second source of release truth. Document ownership, agent isolation and artifact provenance before enabling. |
| CircleCI / Orbs | Alternative CI adapter | Validate orb source/version and pin versions; do not duplicate production deployment jobs. |
| GitHub Actions / YAML | Current canonical PR CI and evidence chain | Primary blocker is pre-step runner assignment. Workflow changes cannot fix an unavailable runner by themselves. |
| GitLab (Beta) | Potential mirror or independent CI adapter | No canonical matching project was confirmed. Correct GitLab identity, project and evidence semantics before claiming synchronization. |
| SonarQube | Static analysis / quality gate | Configure project key, token secret, exclusions and quality threshold outside source; do not treat absent report as pass. |
| Prometheus | Metrics and alert rules | Define retention, scrape permissions, cardinality limits and alert ownership. |
| Grafana | Dashboards and alert presentation | SSO/RBAC, folder ownership and datasource secrets required. |
| ELK Stack | Central log pipeline: Elasticsearch, Logstash, Kibana | Storage sizing, retention, TLS, authentication and PII filtering required before activation. |
| Slack | Alert delivery and human approvals | Use least-privilege app/webhook; never print webhook URL or tokens. |
| Kira | Integration placeholder | Exact product/service and required workflow are ambiguous; keep disabled until identified. |
| PromAI | AI/alert-analysis placeholder layered over approved telemetry | Exact product, model/data boundary and access scope unconfirmed; no telemetry sharing enabled. |
| Time-triggered workflow | Scheduled diagnostics after runner acceptance | No cron is added while G02 fails; otherwise it would generate recurring un-actionable failures. |

## 4. Required evidence gates

### G02 — runner dispatch
All must be true: real runner assigned; runner ID > 0; runner/group identity populated; steps instantiated; sentinel executes; logs retrievable; artifact retrievable; run/job/commit correlation exact; independent verification recorded.

### Host and Docker
Only after G02 passes: capture `df -hT`, `df -ih`, `iostat` (when installed), `vmstat`, Docker daemon status/logs, `docker system df -v`, container restart/OOM signals, filesystem and block-device metrics. Do not infer exhaustion from a pre-step GitHub failure.

### CI / quality
Required before promotion: workflow syntax validation, tests/build where a real app target exists, SonarQube quality gate, Terraform validate/plan, Ansible syntax/check-mode results, image scan/SBOM if images exist, retrievable evidence and exact commit correlation.

### Runtime / production
Requires separate approval after staging validation, backup/rollback proof, independent browser/public reachability, security checks, observability alerts and route contract verification.

## 5. Rollback and stop conditions

Stop on unknown account/tenant, missing owner, unexpected cost, absent logs, runner ID 0, empty steps, artifact mismatch, unverified DNS, state drift, destructive plan, failed quality gate, or unreviewed secret exposure. Preserve LKG and leave production unchanged.
