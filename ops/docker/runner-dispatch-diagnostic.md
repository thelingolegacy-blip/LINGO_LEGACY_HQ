# Runner dispatch diagnostic record

Updated: 2026-10-10

## Current classification

- `G02_RUNNER_DISPATCH = FAIL`
- `DOCKER_HOST_STATE = UNKNOWN`
- `DISK_EXHAUSTION = NOT_DIAGNOSED`
- `ARTIFACT_EVIDENCE = ABSENT`
- `PRODUCTION = FAIL_CLOSED`

## Latest isolated evidence

Latest branch head before this documentation update: `b2679d40248bbd4499dc929e68fdd6ed518d4bd8`

Three independent workflows failed before step initialization:

| Workflow | Run ID | Job ID |
| --- | ---: | ---: |
| Docker Disk & Build Stabilization — runner sentinel | 38013594208 | 114098888281 |
| Runner Route Probe — Alternate Hosted Fleet | 38013594203 | 114098888175 |
| Jekyll site CI | 38013594205 | 114098888056 |

The newest observed runs at documentation-update head `df64df814e3afe4df7702331943e505621356a4a` also failed before steps:

| Workflow | Run ID | Job ID |
| --- | ---: | ---: |
| Docker Disk & Build Stabilization — runner sentinel | 38013792683 | 114099512347 |
| Runner Route Probe — Alternate Hosted Fleet | 38013792719 | 114099512427 |
| Jekyll site CI | 38013792688 | 114099512259 |

Observed across the jobs: `runner_id=0`, blank `runner_name`, `runner_group_id=0`, blank `runner_group_name`, `steps=[]`, log downloads return `BlobNotFound`, and no artifacts. The Docker diagnostics job was correctly skipped because the runner sentinel did not execute.

A retry of an earlier Docker run also failed with the same signature. This is evidence of a GitHub Actions runner allocation/dispatch or account/repository policy issue, not evidence of Docker disk exhaustion or an image build failure.

Related blocker issue: https://github.com/thelingolegacy-blip/LINGO_LEGACY_HQ/issues/35


## Latest current-head rerun

Latest branch head tested: `6f25ea5a646539f8ba7e05c270d3641814d8f5e6`.

| Workflow | Run ID | Job ID |
| --- | ---: | ---: |
| Docker Disk & Build Stabilization — runner sentinel | 38014382896 | 114101315278 |
| Runner Route Probe — Alternate Hosted Fleet | 38014382898 | 114101315154 |
| Jekyll site CI | 38014382872 | 114101315032 |

All three failed before steps. Job summaries returned `steps=[]` and `logs_url=null`; direct job log retrieval for earlier runs in this sequence returned `BlobNotFound`. The Docker diagnostics job was skipped behind the failed sentinel. Actual host disk telemetry remains unavailable until the runner dispatch gate passes or an authorized operator runs the host preflight locally.

## Vercel error isolated separately

Vercel project `character_bible` is linked to this monorepo. Deployment `dpl_FZGFf2rGAoaeUThK6WUJpqqdSoF3` is canceled; its build log says the Ignored Build Step ran `echo "Hello World"` and canceled the deployment. This is a configured skip command, not a Docker build failure.

The setting was briefly cleared during diagnosis, then restored to its original `echo "Hello World"` value because the correct application root/build contract has not been verified. Do not remove that guard again until the intended deployable subdirectory and command are known. Project configuration updates do not retroactively rerun a canceled deployment.

Separately, the GitHub commit status includes a Vercel failure linked to the account-level “deployment blocked” help page. The exact account policy/billing/protection cause is **not established** by the available logs. This status needs Vercel account/team inspection, distinct from both the ignored-build command and GitHub Actions runner dispatch.

## Required operator checks

1. In GitHub repository and owner Actions settings, verify Actions are enabled and allowed workflow policies do not block workflows.
2. Inspect hosted-runner availability/account limits, runner groups, repository access, inherited organization/enterprise restrictions, and account notices.
3. If self-hosted is the approved recovery route, confirm the runner service is running and polling, registered for this repository, and matches workflow labels.
4. Execute the minimal runner sentinel. It must emit identity and upload a one-file artifact without requiring Docker.
5. Retrieve and independently verify steps, logs, and artifact against the exact run, job, and commit.
6. Only after G02 passes, run Docker disk telemetry and consider cleanup.
7. Separately verify the intended Vercel app root/build contract and account-level deployment gate before changing the ignored-build guard or creating another deployment.

## Acceptance predicate

All must be true: positive runner ID, populated runner name/group, job assignment, instantiated steps, sentinel executes, logs retrievable by job ID, artifact retrievable, exact run/job/commit correlation, and independent verification.

## Operational safety

Do not create AWS resources speculatively, restart a production Docker daemon, prune persistent volumes, or deploy production as a workaround for unassigned jobs. Provision a cloud-hosted self-hosted runner only after an explicit, authorized plan defines region, account, networking, credential handling, cost controls, ephemeral lifecycle, registration-token handling, and teardown.
