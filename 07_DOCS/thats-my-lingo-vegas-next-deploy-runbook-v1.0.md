# That’s My Lingo Vegas Studio — Next Deployment Runbook v1.0

Date: 2026-09-21

## Current pre-deploy condition

Studio Hub AppDeploy status: READY.
Current QA snapshot: frontend errors 0, backend errors 0, network errors 0.
E2E status: not yet produced.
Vegas resource directory: empty.

## Deployment sequence

1. Re-check AppDeploy deployment instructions.
2. Confirm available deployment credits.
3. Sync/read the current applied Studio Hub snapshot before editing.
4. Upload/attach the approved Vegas media assets under the casino resource namespace.
5. Apply only the intended Vegas Studio diffs.
6. Deploy.
7. Poll status no faster than the platform-required interval until terminal.
8. Inspect frontend/backend/network errors.
9. Inspect QA desktop and mobile screenshots.
10. Run/inspect E2E results.
11. Verify hash routing and return-to-home behavior.
12. Verify sound remains off until explicit user action.
13. Verify reduced-motion behavior.
14. Verify virtual reward state cannot become a cash balance.
15. Verify sweepstakes information is visibly separate from virtual play.
16. Preserve deployment ID, snapshot/version, timestamps, QA evidence, screenshots, and test results.
17. Record the evidence on PR #26.
18. Stop at staging unless the independent production gates are satisfied.

## Failure repair rule

If deployment or QA reveals a defect:
- inspect the exact error
- make the smallest scoped fix
- redeploy
- repeat QA
- maximum three repair iterations for one deployment cycle
- if the issue persists, stop and preserve evidence rather than widening scope

## Production lock

This runbook does not authorize:
- DNS changes
- Cloudflare production mutation
- Firebase production writes
- AppDeploy production promotion
- LKG changes
- PR merge
- activation

The GitHub runner/evidence gate remains an independent production prerequisite.
