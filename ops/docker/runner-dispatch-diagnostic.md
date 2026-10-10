# Runner dispatch diagnostic record

Updated: 2026-10-10

## Current classification

- `G02_RUNNER_DISPATCH = FAIL`
- `DOCKER_HOST_STATE = UNKNOWN`
- `DISK_EXHAUSTION = NOT_DIAGNOSED`
- `ARTIFACT_EVIDENCE = ABSENT`
- `PRODUCTION = FAIL_CLOSED`

## Latest isolated evidence

Current branch head: `b2679d40248bbd4499dc929e68fdd6ed518d4bd8`

Three independent workflows failed before step initialization:

| Workflow | Run ID | Job ID |
| --- | ---: | ---: |
| Docker Disk & Build Stabilization — runner sentinel | 38013594208 | 114098888281 |
| Runner Route Probe — Alternate Hosted Fleet | 38013594203 | 114098888175 |
| Jekyll site CI | 38013594205 | 114098888056 |

Observed across jobs: `runner_id=0`, blank `runner_name`, `runner_group_id=0`, blank `runner_group_name`, `steps=[]`, log download returned `BlobNotFound`, and no artifacts. The Docker diagnostics job was correctly skipped because the runner sentinel did not execute.

A retry of an earlier Docker run also failed with the same signature. This is evidence of a GitHub Actions runner allocation/dispatch or account/repository policy issue, not evidence of Docker disk exhaustion or an image build failure.

Related blocker issue: https://github.com/thelingolegacy-blip/LINGO_LEGACY_HQ/issues/35

## Vercel error isolated separately

Vercel project `character_bible`, linked to this repository, had a canceled preview deployment `dpl_FZGFf2rGAoaeUThK6WUJpqqdSoF3`. Its build events showed that the Ignored Build Step command executed `echo "Hello World"` and then canceled the deployment. The accidental ignore-step command was cleared through the Vercel project update endpoint. No production deployment was triggered. The latest deployment record remains canceled because configuration updates do not retroactively rerun it; a new deployment must independently verify the change once the upstream path is suitable.

This Vercel build-skip configuration issue and GitHub Actions runner-dispatch issue are independent.

## Required operator checks

1. In GitHub repository and owner Actions settings, verify Actions are enabled and allowed workflow policies do not block the workflows.
2. Inspect hosted-runner availability/account limits, runner groups, repository access, inherited organization/enterprise restrictions, and billing/account notices.
3. If self-hosted is the approved recovery route, confirm the runner service is running and polling, registered for this repository, and matches the workflow labels.
4. Execute the minimal runner sentinel. It must emit an identity line and upload a one-file artifact without needing Docker.
5. Retrieve and independently verify steps, logs, and artifact against the exact run, job, and commit.
6. Only after G02 passes, run Docker disk telemetry and consider disk cleanup.
7. Separately validate the corrected Vercel ignore-build configuration through a new non-production deployment before considering release.

## Acceptance predicate

All must be true: positive runner ID, populated runner name/group, job assignment, instantiated steps, sentinel executes, job logs retrievable by job ID, artifact retrievable, exact run/job/commit correlation, and independent verification.

## Operational safety

Do not create AWS resources speculatively, restart a production Docker daemon, prune persistent volumes, or deploy production as a workaround for unassigned jobs. Provision a cloud-hosted self-hosted runner only after a deliberately designed and authorized plan defines region, account, networking, credential handling, cost controls, ephemeral lifecycle, registration token handling, and teardown.
