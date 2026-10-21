# Production Readiness Audit — 2026-09-22

## Current disposition

Protected hold remains active. The Studio Hub is deployed and runtime-ready on AppDeploy, but production activation is not certified.

## Authoritative evidence

- Repository: thelingolegacy-blip/LINGO_LEGACY_HQ
- Current runner investigation: PR #29
- Latest control-plane workflow run: 35667482337
- Latest retry job: 106611480274
- Latest retry result: completed / failure
- Latest retry job steps: not initialized
- Runner allocation: not established
- AppDeploy Studio Hub: lingo-legacy-studio-hub-nhda3b
- Current AppDeploy version: 1789980413924
- AppDeploy status: ready
- AppDeploy frontend errors: none
- AppDeploy backend errors: none
- AppDeploy network errors: none
- AppDeploy E2E: not established

## Gates

| Gate | State | Evidence / remaining action |
| --- | --- | --- |
| Source authority | PASS | HQ repository identified |
| Repository authority | PASS | HQ repository active |
| G02 runner dispatch | FAIL/CLOSED | GitHub jobs continue to terminate before runner allocation and step initialization |
| CI execution | BLOCKED | Depends on G02 |
| Certification | BLOCKED | Depends on executable CI evidence |
| AppDeploy runtime | PASS | Studio Hub version 1789980413924 is ready with no reported runtime errors |
| Custom domain | BLOCKED | AppDeploy reports Plus required to connect/activate a new custom domain |
| DNS/Cloudflare | NOT CERTIFIED | No authoritative mutation evidence in this audit |
| Firebase production | NOT CERTIFIED | No production write authorized/performed |
| Production promotion | BLOCKED | Upstream certification gates remain closed |
| Activation | BLOCKED | Production certification not complete |

## AppDeploy custom-domain sentinel

Current stage proxy:
- Host: proxy-v2.appdeploy.ai
- Fallback IPv4: 18.232.7.146

For a subdomain such as studio.thelingolegacy.com:
- CNAME target: proxy-v2.appdeploy.ai

The AppDeploy connector currently reports that connecting or activating a new custom domain requires Plus. DNS must point to the stage proxy before verification can activate routing.

## Production safety

- LKG remains protected.
- No Firebase production mutation was performed.
- No Cloudflare production mutation was performed.
- No production promotion was performed.
- The existing AppDeploy public URL remains the verified live deployment surface.

## Provider inventory

- Shopify: connected store verified; current store is Loyalty Lane.
- Vercel: not used as the Studio Hub deployment target.
- GitLab: connected projects inventoried; no authoritative Lingo Legacy production release path established.
- Malwarebytes: thelingolegacy.com and studio.thelingolegacy.com returned unknown reputation, not malicious/suspicious.
- Runway / Voice / Canva / Figma: available for creative production, but no arbitrary asset generation was performed without a defined asset requirement.

## Completion criteria

1. GitHub runner allocation produces runner_id > 0, populated runner identity, initialized steps, and retrievable logs.
2. CI and certification execute from the qualifying runner.
3. AppDeploy custom-domain entitlement is available and DNS is configured/verified.
4. Authoritative Cloudflare/DNS and Firebase production evidence is captured.
5. Production candidate is validated end-to-end.
6. Only then may activation/promotion be marked complete.
