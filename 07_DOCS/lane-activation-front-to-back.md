# Lane activation front-to-back map

## Activated lanes

- Loyalty Lane Apparel: storefront/apparel presentation, vendor handoff, and checkout-gated CTA layer.
- Lingo Wash District: neighborhood missions, partner banners, safe local progression, and community route panels.
- Kottons Code Spades: family card room concept with educator-facing guardrails and no open chat by default.
- Uhno: original color-card room concept with virtual-only play and no cash value.
- Studio Hub constellation: canonical routing surface for Avalon, Lingo Legacy OS, Game143, and LingoCampus properties.

## Interface layers

- Frontend: dynamic web surfaces consume the canonical studio/entity manifest and route users to the owning studio.
- Backend: authenticated APIs and server-authoritative configuration remain required before production activation; static pages do not receive production write authority.
- Flutter: mobile shell consumes lane metadata, visual tokens, reduced-motion settings, sound-toggle state, and the canonical entity/studio manifest.
- Firebase: auth/profile/progress/event collections remain schema-gated; no production write path is enabled from static pages.
- Cloudflare: authoritative DNS/CDN/WAF/runtime edge; Workers, Pages where appropriate, D1, KV, R2, routing, and edge health are production controls.
- GitHub: source of truth for pull requests, release notes, asset manifests, CI evidence, and review gates.
- AppDeploy: isolated staging/QA surface for implementation snapshots; staging readiness does not authorize promotion.

## Production synchronization contract

SOURCE → BUILD → CI RUNNER → JOB/STEP EVIDENCE → RUNTIME/QA → CLOUDFLARE LIVE CHECK → FIREBASE AUTH/DATA CHECK → REVIEW → ELIGIBILITY → PROMOTION

Any missing evidence blocks the next transition.

## Safety defaults

- Promotion/ad slots are labeled and no third-party tracking scripts load by default.
- No wagers, deposits, paid spins, cash-out, or prizes tied to game outcomes.
- Sounds require user action; animations need reduced-motion fallbacks.
- Backend accounts, payments, matchmaking, and reward fulfillment require explicit review before activation.
- Secrets never enter source control.

## Canonical routing

`/` → Studio Hub / Master Home

`/loyalty-lane` → `/p/loyalty-lane-apparel` → Loyalty Lane Apparel commerce destination

`/kottons-code` → `/p/kottonscode`

`/casino` → `/p/thats-my-lingo`

`/uhoh-lingo-university` → `/p/uhno-lingo-u-no`

`/legacy-legends` → `/p/legacy-legends-lingo-city`

`/travel` → `/p/lingotravel`

`/ai` → `/p/lingo-ai`

`/apps`, `/websites`, `/blogs`, and `/shop` remain network-level directories/gateways.

The Studio Hub is the intended homepage layer. Loyalty Lane Apparel and other properties are destinations beneath the unified domain, not competing apex surfaces.

## Studio Universe runtime contract

The web and Flutter surfaces consume the same studio-universe metadata contract: route, studio id, visual theme, poster fallback, optional background media, optional audio cue, typography token, motion policy, and accessibility state.

Web rendering may use CSS/Canvas plus governed media resources. Flutter uses the same logical metadata but resolves platform-specific media implementations. Neither client owns Google Cloud credentials.

Firebase stores authenticated user preferences and eligible experience state; it does not become the public media origin. Cloudflare remains the production edge authority. Google Cloud Storage/CDN/Media CDN may serve approved media behind an explicitly governed origin and cache policy.

Asset intelligence such as image labeling, dominant-color extraction, or OCR belongs in an authenticated backend/media pipeline using Google Cloud Vision. Generated media belongs in a controlled build/media pipeline. Neither is required for basic landing-page rendering.

Required fallback behavior: poster/image fallback, reduced motion, audio-off-by-default, graceful missing-media handling, and telemetry for media load failures/performance.

Production promotion requires evidence for asset provenance, cache behavior, performance, accessibility, runtime errors, and edge delivery in addition to the existing runner/runtime gates.
