# Docker host configuration and disk hygiene

This is a staged infrastructure proposal. It does not mutate a live Docker host, AWS account, DNS, or production environment.

## Daemon log rotation

`daemon.json.example` sets the `json-file` logging driver with 10 MiB per file and 3 files. Treat this as a merge fragment: inspect and back up the current `/etc/docker/daemon.json`, merge rather than replace settings, validate the entire result, then apply only during a reviewed maintenance window. A Docker daemon restart can interrupt workloads. Existing containers may require recreation to inherit new logging settings.

## BuildKit cache mounts

Add cache mounts to the relevant existing Dockerfile only after confirming the package manager and user, for example:

```dockerfile
# syntax=docker/dockerfile:1.7
RUN --mount=type=cache,target=/root/.npm npm ci
```

## Disk diagnosis and cleanup

Capture `df -hT`, `df -ih`, and `docker system df -v` before and after a build. Separate byte exhaustion, inode exhaustion, JSON logs, image layers, builder cache, artifacts, and volumes before removing anything. The CI workflow only prunes BuildKit cache older than 24 hours on its runner. It never automatically prunes volumes or images. Alert when free space falls below 15%, subject to host-specific policy.

## Wrapper/runner error isolation

For each run, correlate run ID, attempt, commit SHA, runner name, job ID, job steps, logs, and artifact. An empty `steps` array, `runner_id=0`, blank runner name, and non-retrievable log blob indicate failure before useful job execution; they do not show a Docker disk failure. Escalate runner dispatch separately from the Docker workload.

## Scheduled execution

The workflow supports `workflow_dispatch` and pull requests; it deliberately has no cron schedule until a functioning runner is independently proven. Add a schedule only after G02 passes, avoid persistent-host cleanup on a timer without an approved deletion policy, and do not configure AWS resources or credentials speculatively.

## Release gate

Do not merge, deploy, or activate production based only on configuration commits. Require real assigned runner identity, instantiated/executed steps, retrievable logs, a retrievable artifact, exact run/job/commit correlation, and independent verification. Live daemon changes require host access and maintenance approval.
