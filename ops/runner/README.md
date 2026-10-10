# GitHub self-hosted runner preflight

Run this before changing labels, re-registering, restarting, or replacing the runner daemon.

```bash
bash ops/runner/runner-preflight.sh /path/to/actions-runner
```

If the actual systemd unit name is known, pass it as the second argument:

```bash
bash ops/runner/runner-preflight.sh /path/to/actions-runner actions.runner.<scope>.<repo>.<runner>.service
```

The script reports safe runner configuration fields, service/process status, diagnostic filenames, and basic HTTPS reachability. It never prints credential file contents, modifies service state, or requests a registration token.

Acceptance still requires the existing G02 sentinel to execute with a positive runner ID, populated runner/group identity, retrievable logs and artifact, and exact run/job/commit correlation. An `Online Idle` UI label alone is not proof that the daemon is polling and receiving jobs.
