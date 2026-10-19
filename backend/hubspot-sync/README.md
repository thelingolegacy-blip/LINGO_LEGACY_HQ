# Consent-aware HubSpot sync Lambda

This handler is a server-side bridge scaffold. It does not sync contacts merely because a caller sends `marketingConsent: true`. It verifies a Firebase ID token, requires a verified Firebase email, loads a server-recorded consent document, and then creates or updates a HubSpot contact.

## Required deployment configuration

- Runtime: Node.js 20 or later.
- Environment secret: `HUBSPOT_ACCESS_TOKEN`, stored in AWS Secrets Manager and injected securely by the deployment configuration. Never commit the token.
- Firebase Admin credentials: use the Lambda execution role / workload identity or a securely provisioned service-account credential. Do not commit credentials.
- HubSpot contact properties must be created in advance: `lingo_uid`, `source_application`, `marketing_opt_in`, `marketing_opt_in_timestamp`, and `marketing_policy_version`.
- CORS only permits the apex and www production origins in this example. Update this allowlist for the actual web origin and test preflight behavior.

## Consent data contract

A trusted consent-capture flow must write `users/{uid}/consent/marketing` server-side with:
- `optedIn: true`
- `timestamp`: Firestore timestamp for the affirmative action
- `policyVersion`: version of the notice shown
- optional `sourceApp`: an allow-listed product identifier

Do not accept consent as a request-body boolean. Store the notice version, timestamp, source, and consent state. Provide a revocation workflow that records opt-out and removes or updates marketing eligibility in HubSpot. This handler intentionally skips sync when the consent record is absent or incomplete.

## API contract

POST with `Authorization: Bearer <Firebase ID token>`. The request body is not used for identity or consent. Call only after Firebase email verification and after a trusted backend has persisted the user's explicit marketing opt-in.

## Important hardening before deployment

- The Firebase Firestore rules in this branch currently default-deny all subcollections; a trusted Admin SDK writes the consent record, bypassing Firestore rules. Keep that write server-side.
- Confirm the HubSpot API client version and the email lookup method in an integration test against a non-production HubSpot portal before release.
- Add API Gateway throttling, request-size limits, CloudWatch alarms, least-privilege IAM, and secret rotation.
- Ensure privacy notice, consent copy, retention, deletion, and unsubscribe processes are approved.
- Add integration tests for missing/expired ID tokens, unverified email, absent consent, opted-out consent, duplicate contact, HubSpot timeout, and token/API failure.
- The function is committed as source only; it has not been deployed or connected to a live HubSpot portal.
