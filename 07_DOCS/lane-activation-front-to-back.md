
# Lane activation front-to-back map

## Activated lanes

- Loyalty Lane Apparel: storefront/apparel presentation, vendor handoff, and checkout-gated CTA layer.
- Lingo Wash District: neighborhood missions, partner banners, safe local progression, and community route panels.
- Kottons Code Spades: family card room concept with educator-facing guardrails and no open chat by default.
- Uhno: original color-card room concept with virtual-only play and no cash value.

## Interface layers

- Flutter: mobile shell consumes lane metadata, visual tokens, reduced-motion settings, and sound-toggle state.
- Firebase: proposed auth/profile/progress/event collections remain schema-gated; no production write path is enabled from static pages.
- Cloudflare: proposed DNS/CDN/WAF edge policy stays documented as an external configuration layer.
- Vercel: hosts the web lanes, preview deployments, Web Analytics, Speed Insights, and production environment controls.
- GitHub: source of truth for pull requests, release notes, asset manifests, and review gates.

## Safety defaults

- Promotion/ad slots are labeled and no third-party tracking scripts load by default.
- No wagers, deposits, paid spins, cash-out, or prizes tied to game outcomes.
- Sounds require user action; animations need reduced-motion fallbacks.
- Backend accounts, payments, matchmaking, and reward fulfillment require explicit review before activation.
