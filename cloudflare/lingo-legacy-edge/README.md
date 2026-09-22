# Lingo Legacy Cloudflare Edge Bridge

## Purpose

Provide a Cloudflare Worker edge layer in front of the existing AppDeploy Studio Hub origin without making a production DNS mutation.

## Origin

https://lingo-legacy-studio-hub-nhda3b.v2.appdeploy.ai/

## Intended production routing

thelingolegacy.com -> Cloudflare Worker -> AppDeploy Studio Hub

The Worker is deliberately fixed to the AppDeploy origin; it is not an open proxy.

## Required Cloudflare activation

1. Deploy the Worker to the intended Cloudflare account.
2. Bind the production hostname to the Worker.
3. Configure/verify DNS and TLS at Cloudflare.
4. Verify GET/HEAD behavior, redirects, assets, API paths, and error handling.
5. Preserve the captured evidence bundle.

## Governance boundary

This branch is staging only. It does not constitute production activation.

No DNS mutation, Worker deployment, or LKG promotion is performed by this artifact.

GitHub G02 remains independent: a successful Cloudflare route does not satisfy the GitHub hosted-runner evidence requirement.

Hosted-runner probe validation is intentionally isolated from production activation.
