# Project / Conversation Reconciliation Map — 2026-09

This map captures the project decisions currently available in the Lingo Legacy working context and routes them to their matching GitHub repositories. It is a reconciliation index, not a claim that every historical ChatGPT message is directly exportable.

| Project / workstream | Canonical/current repository candidates | Matching knowledge to preserve |
|---|---|---|
| Lingo Legacy HQ / ecosystem | `LINGO_LEGACY_HQ`, `TheLingoLegacy` | Platform Charter, Control Planes, Studio OS/Fabric, production gates, dynamic web runtime, App Registry, domain authority |
| That's My Lingo | `THATS-MY-LINGO`, `thats_my_lingo_app` | Vegas world, 5x3/20-line virtual slot foundation, Lingo ID, wallet, XP, rewards, no real-money wagering/payout/cash-out |
| Spades Is My Lingo | `Spades-is-my_Lingo`, `Spades_is_my-lingo` | game design, shared game platform, Lingo ID/wallet/XP/rewards |
| Kotton's Code | `kottens-code-engine`, `Kotton-code-engine` | kids universe, story/game/media pipeline, safe child-focused runtime |
| Loyalty Lane Apparel / Tap Stitch | `Loyaltylaneapparel` | Shopify/Stripe commerce, Tap Stitch identity, catalog/variants, cart, loyalty/rewards, Ask Lingo |
| Legacy Legends | `Lingolegends` | franchise/world expansion, shared Lingo OS and ecosystem services |
| Games platform | `Lingo-legacy-games`, `Games` | shared game runtime and integration layer |
| Backend | `Lingo-legacy-backend`, `lingo_backend`, `Backend` | identity/RBAC, wallet, XP, rewards, App Registry, APIs, audit/evidence |
| Admin | `lingo_admin_console`, `Admin` | production command center, asset/project/studio/timeline/testing/publishing/automation |
| TV OS | `Lingo-legacy-tv-os`, `Lingo-legacy-tv-os`, `Tv-os` | TV experience and ecosystem presentation |
| Website implementations | `TheLingoLegacy-Web`, `lingo_website`, `nextjs-lingolegacy`, `lingo-legacy-` | reconcile duplicates into the canonical dynamic web runtime |
| Media/assets | `lingo_assets`, `TheLingoLegacy`, `LINGO_LEGACY_HQ` | Asset Registry, studio visuals, sound/animation/media pipelines |

## Reconciliation rule

Do not blindly merge duplicate repositories. First classify each candidate ACTIVE / MERGE / REFERENCE / ARCHIVE, preserve unique implementation assets, then consolidate into the canonical project repository. Every production promotion must pass the fail-closed release sequence.
