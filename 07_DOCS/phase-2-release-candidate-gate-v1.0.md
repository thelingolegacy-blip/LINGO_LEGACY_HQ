# Phase 2 Release-Candidate Gate v1.0

Date: 2026-09-21
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Purpose
Define the independent gate between a successfully evidenced staging revision and any later production authorization.
Phase 2 is a decision gate, not a deployment command.

## Required Phase 1 inputs
All must be present and mutually consistent:
- source revision identity
- AppDeploy deployment identity and timestamp
- staging QA evidence
- runtime acceptance evidence
- media inventory/provenance
- GitHub runner telemetry
- CI execution logs
- sweepstakes boundary evidence
- prohibited-state checks
- LKG baseline reference

Missing, stale, contradictory, or unverifiable evidence => Phase 2 CLOSED.

## RC-01 Source integrity
PASS only if source SHA, intended branch, changed files, authorized scope, and PR #26 status are exact.

## RC-02 CI integrity
PASS only if runner_id > 0, runner_name is populated, steps instantiate, the first step executes, and real logs are retrievable.
A green-looking status without execution telemetry is insufficient.

## RC-03 Staging integrity
PASS only if AppDeploy deployment identity, terminal status, error fields, QA screenshots, E2E result, and route behavior are captured.

## RC-04 Media integrity
PASS only if every required Vegas asset has known provenance, manifest-aligned paths, verified binary availability, graceful fallback, and no embedded credentials.

## RC-05 Product-boundary integrity
PASS only if virtual entertainment remains non-cash; deposits, cash-out, wagering, odds, sportsbook, and cash balances are absent; sweepstakes are visibly distinct with applicable eligibility/rules/entry/prize information.

## RC-06 Runtime integrity
PASS only if World Gate entry, world identity, games, missions, rewards, explicit audio interaction, reduced-motion behavior, recoverable navigation, and absence of uncaught runtime errors are evidenced.

## RC-07 Governance integrity
PASS only if LKG remains preserved; production DNS, Cloudflare, Firebase, and deployment state remain unchanged unless separately authorized; PR #26 remains unmerged unless explicitly authorized.

## Decision matrix
All RC gates PASS -> RELEASE_CANDIDATE = ELIGIBLE_FOR_SEPARATE_AUTHORIZATION
Any RC gate FAIL/BLOCKED -> RELEASE_CANDIDATE = CLOSED
Eligible does not mean approved.

## Explicit non-authorizations
Phase 2 does not authorize DNS changes, Cloudflare production deployment, Firebase production writes, PR merge, AppDeploy production promotion, domain cutover, public activation, or monetization activation.

## Evidence package
Preserve: source manifest; deployment readback; QA captures; runtime acceptance record; media manifest; CI runner/job/log evidence; boundary verification; governance reconciliation; final gate table; immutable timestamps.

## Exit states
RC-CLOSED — insufficient evidence or failed gate.
RC-ELIGIBLE — all RC gates pass; separate authorization required.
No third state is permitted.