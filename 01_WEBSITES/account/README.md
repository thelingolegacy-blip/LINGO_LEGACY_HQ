# Lingo ID Registration — Setup

This folder contains the first registration UI for The Lingo Legacy at `register.html`. It uses Firebase Authentication for account credentials and Firestore for the base `users/{uid}` identity profile.

## Configure Firebase

1. Open the intended Firebase project (use the approved development project first).
2. Register a Web app and copy its Firebase web-app configuration.
3. In Firebase Authentication → Sign-in method, enable **Email/Password** and **Google**.
4. In Authentication settings, add the actual registration host to **Authorized domains**.
5. In `register.html`, replace the four `REPLACE_WITH_...` values in `firebaseConfig` with the web-app values. Firebase web config is designed to be present in browser code; do not add service-account credentials, private API secrets, or Admin SDK credentials.
6. Enable Firestore and deploy restrictive rules before testing. A starting rule for the base profile is shown below; adapt it to the project's existing rules rather than replacing rules blindly.

```text
match /users/{userId} {
  allow read: if request.auth != null && request.auth.uid == userId;
  allow create: if request.auth != null
    && request.auth.uid == userId
    && request.resource.data.uid == request.auth.uid
    && request.resource.data.keys().hasOnly([
      'uid', 'displayName', 'firstName', 'lastName', 'email',
      'emailVerified', 'schemaVersion', 'createdAt', 'updatedAt'
    ]);
  allow update: if request.auth != null
    && request.auth.uid == userId
    && request.resource.data.uid == resource.data.uid;
  allow delete: if false;
}
```

This is a profile-only example, not a complete production ruleset. Merge it carefully with existing rules and test the final rules in the Firebase Emulator Suite. Validate every mutable field and immutable timestamp/identity field in your final rules.

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
