# Lingo Legacy Rule Engine Evaluation Contract v1.0

## Canonical flow

`evaluate(identity, resource, action, context)` → load applicable policies → validate conditions → resolve constitutional precedence → produce decision → write mandatory audit event.

## Contract invariants

1. Safety and constitutional controls are evaluated before application behavior.
2. The highest-precedence applicable policy determines the result.
3. A lower-precedence ALLOW cannot override a higher-precedence DENY.
4. Evaluation errors fail closed to `DENY`.
5. Every decision carries `policy_id`, `policy_version`, `reason_code`, `source`, `evaluated_at`, and `trace_id`.
6. Audit emission is mandatory and cannot be disabled by policy.
7. `LIMIT`, `REQUIRE_APPROVAL`, and `REQUIRE_PARENT_AUTH` are enforcement outcomes, not application suggestions.
8. Applications consume the decision; they do not rewrite it.

## Decision semantics

- `ALLOW`: execute within the evaluated scope.
- `DENY`: block the requested operation.
- `LIMIT`: execute only within returned parameters.
- `REQUIRE_APPROVAL`: suspend execution and invoke the platform-owned approval workflow.
- `REQUIRE_PARENT_AUTH`: suspend execution until required parent step-up authentication succeeds.

## Failure behavior

Unknown policy, malformed policy, invalid context, precedence ambiguity, evaluator exception, or audit failure results in a fail-closed outcome. The failure is recorded with a unique trace ID and reason code.

## Example response

```json
{
  "decision": "DENY",
  "policy_id": "policy.music.explicit",
  "policy_version": "1.0",
  "user_id": "child_123",
  "resource": "music.track_456",
  "reason_code": "CONTENT_RESTRICTED",
  "source": "system_safety",
  "evaluated_at": "2026-08-23T00:00:00Z",
  "expires_at": null,
  "trace_id": "RULE-TRACE-1234",
  "audit_required": true
}
```
