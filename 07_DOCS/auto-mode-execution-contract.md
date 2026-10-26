# Auto Mode Execution Contract

## Default loop
`AUDIT → PLAN → BUILD → INTEGRATE → TEST → VERIFY → FIX → RE-TEST → STAGE → DEPLOY → MONITOR → NEXT SPRINT`

## Autonomous work
Auto Mode may proceed through reversible planning, documentation, scaffolding, code changes, tests, issue creation and other authorized repository operations without asking for a separate confirmation for every sprint.

## Mandatory gates
Stop or escalate when an operation requires unavailable credentials, legal authority, payment authorization, production secret access, destructive data mutation, irreversible external communication, device control not explicitly granted by the integration, or a failed safety/security/compliance gate.

## Failure handling
1. Classify the failure.
2. Identify whether it is code, configuration, dependency, credential, platform or policy related.
3. Apply a reversible fix when authorized.
4. Re-run the smallest relevant verification.
5. Record the result.
6. Escalate only when the remaining blocker genuinely requires external authority or unavailable access.

## Release evidence
A production release requires a linked record of commit, build artifact, deployment target, domain status, backend/data state, analytics, smoke tests and rollback readiness.
