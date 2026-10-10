# Lingo Legacy Configuration Synchronization Contract

Status: STAGED / FAIL-CLOSED
Branch: config-sync/staged-2026-09-23
Production mutation: PROHIBITED
Promotion: BLOCKED until G02 PASS

## Synchronization rule

No target system may be promoted or mutated from this contract until its source-of-truth configuration has been read, compared, independently verified, and accepted.

## Source-of-truth order

1. Git repository configuration and approved release artifacts
2. GitHub Actions runner/CI configuration
3. Cloudflare edge/DNS configuration
4. Firebase configuration
5. AppDeploy deployment configuration
6. Shopify configuration
7. GitLab configuration, when a project is actually present
8. Vercel configuration, only where explicitly retained

## Required synchronization states

Each subsystem must report one of:

- VERIFIED_SYNC
- DRIFT_DETECTED
- BLOCKED
- NOT_CONNECTED
- NOT_APPLICABLE

Unknown values are never interpreted as synchronized.

## G02 prerequisite

Configuration synchronization that can affect release, deployment, DNS, Firebase, AppDeploy, Shopify, or activation remains blocked until:

runner_id > 0
AND runner_name != ""
AND runner_group_name != ""
AND steps instantiated
AND sentinel executed
AND logs retrievable
AND evidence independently verified

## Current authoritative state

G00 = PASS
G01 = PASS
G02 = FAIL/CLOSED
G03-G11 = BLOCKED
LKG = PROTECTED
PRODUCTION MUTATION = 0

## External administrative boundary

The connected GitHub integration does not expose the repository self-hosted-runner administration endpoints required to inspect or change runner groups, repository access, workflow access, registration, or GitHub account/organization Actions restrictions.

Therefore those controls must be resolved in GitHub's repository Settings > Actions > Runners / applicable account administration surface.

## Synchronization acceptance

A subsystem may advance only when:

SOURCE
  -> READ
  -> COMPARE
  -> VERIFY
  -> ACCEPT
  -> SYNC

No automatic overwrite is permitted merely because a target differs from the source.

## Rollback rule

If verification fails, synchronization stops and the last-known-good state remains authoritative.
