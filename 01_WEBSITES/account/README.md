# Lingo ID Registration — Setup

This folder contains the first registration UI for The Lingo Legacy at `register.html`. It uses Firebase Authentication for account credentials and Firestore for the base `users/{uid}` identity profile.

## Configure Firebase

1. Open the intended Firebase project (use the approved development project first).
2. Register a Web app and copy its Firebase web-app configuration.
3. In Firebase Authentication → Sign-in method, enable **Email/Password** and **Google**.
4. In Authentication settings, add the actual registration host to **Authorized domains**.
5. In `register.html`, replace the four `REPLACE_WITH_...` values in `firebaseConfig` with the web-app values. Firebase web config is designed to be present in browser code; do not add service-account credentials, private API secrets, or Admin SDK credentials.
6. Enable Firestore and review the restrictive rules in [`firestore.rules`](./firestore.rules). Test them in the Firebase Emulator Suite, then deploy them to the **intended project** using an authorized Firebase Console session or CLI.

The supplied broad rule pattern `allow read, write: if ...` must **not** be combined with a narrower `allow update` deny rule as if one overrides the other. Firestore allows a request if any matching `allow` expression evaluates true. The included rules instead allow only the current user's single profile document, restrict create/update fields, preserve the original UID and creation timestamp, deny listing/deletion, and deny all other collections by default. This default-deny policy can affect existing application collections; reconcile it with the actual project rules before deployment rather than replacing a live ruleset blindly.

The client intentionally does not write `email` or `emailVerified` into the profile document; Firebase Authentication is authoritative for those values. Wallet, XP, rewards, and tier fields must be written only through trusted backend paths with server-side authorization. The profile rules are a scoped starting point and still need emulator tests against the full application.

## Deploy and route

- The file is a standalone HTML page. For static hosting, publish it at a URL such as `/account/register.html` or wire it into the existing Next.js/Flutter authentication flow after confirming the actual application routing.
- The sign-in link currently points to `./login.html`; add that route/page or update the link to the project's canonical login route.
- The Terms and Privacy links currently point to `/terms` and `/privacy`; connect them to approved published policies before public launch.
- Configure Firebase email action URL and verification templates for the real domain.
- Add Firebase App Check where supported, rate-limit abuse through Firebase/App Check and backend controls, and monitor authentication failures.
- Do not initialize the Universal Legacy Wallet, Loyalty Bucks, rewards, or XP in browser code. Provision valuable state through trusted, idempotent backend functions after the account is verified.

## Acceptance checklist

- [ ] Config contains the intended Firebase project, not a placeholder or unintended production project.
- [ ] Email/password registration succeeds and sends a verification email.
- [ ] Duplicate email and weak password errors are understandable.
- [ ] Google sign-in succeeds on the approved domain.
- [ ] Firestore profile writes are limited to the authenticated user's own UID.
- [ ] Rules deny cross-user reads/writes and client-created wallet/reward balances.
- [ ] Terms, Privacy, login route, and email verification redirect are valid.
- [ ] Mobile layout, keyboard navigation, and screen-reader status messages are checked.
- [ ] Test with a disposable account; never commit user credentials or private secrets.

## Current implementation boundary

This page does not claim that a production Firebase project is configured or that live registration has been tested. The configuration must be supplied for the intended project, and the final route must be integrated with the site's actual hosting setup.
