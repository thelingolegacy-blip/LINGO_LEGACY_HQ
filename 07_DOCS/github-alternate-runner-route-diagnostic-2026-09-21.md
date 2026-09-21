# Alternate Runner Route Diagnostic — 2026-09-21

Repository: thelingolegacy-blip/LINGO_LEGACY_HQ
Branch: studio-hub/stack-sync-2026-09-21
PR: #26

## Route attempted
A dedicated `runner-route-probe.yml` was added to test a different GitHub-hosted runner family:
`runs-on: windows-latest`
The probe contains a first-step sentinel that would print runner OS, runner name, architecture, and run ID.
The workflow was then exposed to pull requests targeting `main` so PR #26 can exercise the alternate route.

Probe commits:
- initial route probe: 586005b1342edd1c36179698b39c63bd3be4aea0
- PR-trigger correction: d3712984cfd6c253e399ab42d703c105af3a66ce

## Current observation
No PR-triggered workflow run was returned yet for the probe commit through the available workflow-run readback.
The combined commit status currently exposes:
- Vercel = failure
- Vercel Deployments – thelingolegacy = pending

These Vercel contexts are recorded as external status signals only. They are not treated as production authorization or as proof of the runner condition.

## Interpretation
The alternate Windows route is now structurally present, but it has not yet produced execution telemetry.
Therefore the reroute is INCONCLUSIVE, not PASS.

## Safety
No production DNS, Cloudflare, Firebase, AppDeploy production, or PR merge action was performed.
LKG remains protected.

## Next qualifying evidence
A run of `Runner Route Probe — Alternate Hosted Fleet` must show:
1. job created;
2. runner assignment;
3. non-empty runner identity;
4. instantiated steps;
5. sentinel step execution;
6. retrievable logs.

Only that evidence can determine whether the alternate hosted fleet bypasses the observed Ubuntu dispatch boundary.