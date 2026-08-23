# Rule Engine Runtime v1

Constitutional runtime contract for policy validation and deterministic evaluation.

## Evaluation order
1. system_safety
2. legal_platform
3. parent
4. user
5. application

A higher-precedence DENY wins over lower-precedence ALLOW. Evaluation failures are fail-closed.

## Decisions
`ALLOW | DENY | LIMIT | REQUIRE_APPROVAL | REQUIRE_PARENT_AUTH`

## Runtime boundary
The evaluator returns a decision and enforcement metadata. Applications cannot mutate or override the decision. Approval workflows remain platform-owned.
