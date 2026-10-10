# Docker host configuration and disk hygiene

This directory is a **staged configuration proposal**. It does not modify a live Docker host.

## Daemon log rotation

`daemon.json.example` configures the `json-file` logging driver with a 10 MiB per-file limit and 3 rotated files per container. The effective maximum is approximately 30 MiB per container, excluding small metadata overhead.

Before applying it on a host:

1. Inspect the existing `/etc/docker/daemon.json`; merge these keys rather than replacing existing settings.
2. Validate the merged file with `sudo dockerd --validate --config-file=/etc/docker/daemon.json` where supported.
3. Schedule a maintenance window: restarting Docker can interrupt containers.
4. Back up the current file, apply the merged configuration, restart Docker only with operator approval, and verify `docker info` plus container health.
5. Existing containers may need recreation to inherit changed logging options.

Do not copy this example over an existing daemon configuration blindly.

## BuildKit cache mounts

For package-manager layers, use cache mounts in the relevant Dockerfile, for example:

```dockerfile
# syntax=docker/dockerfile:1.7
RUN --mount=type=cache,target=/root/.npm npm ci
```

Choose the cache path for the actual package manager and image user. Cache mounts are build acceleration, not a substitute for dependency lockfiles or reproducible builds.

## Disk exhaustion controls

- Record `df -hT`, `df -ih`, `docker system df -v` before and after builds.
- CI uses the GitHub Actions BuildKit cache with a dedicated scope and uploads compact diagnostics for 3 days.
- The workflow only prunes builder cache older than 24 hours on its ephemeral runner. It deliberately does not prune volumes or images.
- On persistent hosts, inspect container logs, build cache, images, and volumes separately before any deletion. Never automate `docker system prune --volumes` as a generic disk-full fix.
- Alert before free space falls below 15%; investigate inode exhaustion independently from byte exhaustion.

## Gate

This change is not evidence that the host daemon was modified or that a runner was assigned. Confirm a real CI run, runner identity, executed steps, retrievable logs, artifact retrieval, and run/job/commit correlation before promoting any pipeline or changing production state.
