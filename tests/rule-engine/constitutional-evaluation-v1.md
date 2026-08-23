# Constitutional Evaluation Tests v1

## Purpose
Verify that Rule Engine and Safety Gateway behavior remains fail-closed and precedence-deterministic.

### Test 1 — Safety DENY beats application ALLOW
Given system safety denies an action and application policy allows it, expect `DENY` with `source=system_safety`.

### Test 2 — Parent DENY beats user/application ALLOW
Given parent policy denies an action and lower policies allow it, expect `DENY` with `source=parent`.

### Test 3 — LIMIT is preserved
Given the highest applicable policy returns `LIMIT`, expect `LIMIT` and its parameters without escalation to ALLOW.

### Test 4 — Approval is platform-owned
Given `REQUIRE_APPROVAL`, the evaluator must not approve implicitly; it returns the decision and workflow metadata only.

### Test 5 — Evaluation failure fails closed
If policy loading, condition evaluation, precedence resolution, or audit persistence fails, the request must not produce ALLOW. Return a safe DENY/error outcome and emit an auditable failure event when the audit subsystem is available.

### Test 6 — Constitutional controls are non-expressible
Reject policies containing override/bypass/disable-audit/ignore-precedence/allow-on-failure capabilities.

### CI gate
All tests must pass before a policy bundle can progress from VALIDATING to APPROVED/ACTIVE.
