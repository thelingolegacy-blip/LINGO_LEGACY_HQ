# Lingo Legacy HQ — Screenshot-to-Implementation Audit
**Date:** 2026-10-19  
**Candidate branch:** `studio/lingo-hq-universe-portal-2026-10-19`  
**Repository:** `thelingolegacy-blip/LINGO_LEGACY_HQ`  
**Status:** Candidate work only. No production deployment or live-route acceptance is claimed.

## Executive summary
The supplied screenshot defines a single flagship discovery portal that presents The Lingo Legacy as a connected ecosystem. The canonical repository already contains an HTML studio landing page, brand assets, and extensive operating documentation. The existing root `index.html` is not a faithful implementation of the screenshot: it is a studio command-floor shell, has a canonical URL pointing at `characterbible.vercel.app`, loads Vercel analytics scripts, and foregrounds Character Bible HQ rather than the full public brand universe. Do not replace the root page or promote a new root binding until domain ownership, Worker routing, the current live response, and rollback state have been verified.

## Visible module inventory
| Module | Category | Core intent | Integration dependency |
|---|---|---|---|
| The Lingo Legacy HQ | Platform | Flagship discovery and command center | Canonical root route and source-of-truth navigation |
| Loyalty Lane Apparel | Commerce | Apparel, collections, product discovery | Verified storefront URL, commerce events |
| KOTTONSCODE | Creative | Books, characters, learning | Catalog and publishing links |
| That's My Lingo | Games | Signature slot-style game | Game runtime, age/region policy, wallet boundaries |
| LINGOarcade | Games | Original games and multiplayer discovery | Game catalog and per-game route manifest |
| LINGOslots | Games | Slots, tournaments, rewards concepts | Game state, eligibility and responsible-play controls |
| LINGO Nexus | Games | Unified game/world discovery | Catalog aggregation and player identity contract |
| LINGOmedia | Creative | Music/video/content | Media catalog, creator permissions |
| LINGOlibrary | Creative | Books and audiobooks | Publishing/catalog service |
| Virtual Cinema | Creative | Movies and shows | Media rights, playback, entitlement checks |
| askLINGO | Platform | Assistant across products | Shared policy, product-scoped knowledge and permissions |
| LINGO ID | Platform | Shared identity | Auth provider, consent, session/security contract |
| Universal Legacy Wallet | Commerce | Rewards and payments | Server-authoritative ledger, idempotency, reconciliation |
| Creator Marketplace | Commerce | Creator commerce and collaboration | Listings, moderation, seller/payment capabilities |
| Community Laundromat Hub | Community | Community resources and opportunity | Location/service content and partner validation |
| Doughboys Oasis | Games | Persistent crews, quests and territories | Game servers, persistence, moderation and economy |
| LINGOworld | Games | Connected world and social experiences | World directory, identity, social safety |
| Business & Services | Commerce | Services for brands and creators | Verified offerings, lead capture and consent |
| Invest & Partner | Commerce | Partnerships and investor information | Approved legal copy and controlled lead workflow |
| Support Center | Platform | Help, guides and tickets | Support platform and escalation ownership |

## Repository observations
- Repository root: `thelingolegacy-blip/LINGO_LEGACY_HQ`; default branch is `main`.
- Existing root `index.html` is a standalone HTML/CSS page, not the screenshot's full catalog portal.
- Existing root canonical metadata points to `https://characterbible.vercel.app`; this is inconsistent with the canonical brand domain.
- Existing root loads `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`; these should not be treated as valid for the Cloudflare Worker production topology without proof.
- The repository README explicitly requires a combined evidence record before calling a release LIVE.
- A branch called `studio/lingo-ecosystem-integration-2026-10-04` was not found in the repository branch listing inspected for this pass. Do not assume its existence or merge its content without locating the actual source.
- Current screenshot image is a design reference; the HTML candidate uses CSS-built art and does not claim to include the screenshot's original image assets.

## Candidate implementation delivered
The isolated `hq-universe-portal/index.html` is a responsive, self-contained static candidate. It includes:
- dark industrial-noir visual language, gold borders and restrained royal-purple atmosphere;
- responsive hero, brand identity, quick navigation, catalog grid, and footer;
- 20 module cards with canonical product spelling for KOTTONSCODE and LINGO product names;
- live text search and category filters;
- keyboard-visible focus, semantic landmarks, labels, reduced-motion support, and mobile menu;
- safe candidate behavior: selecting a card updates its detail panel and clearly says that the production route is not yet verified, rather than fabricating a live destination;
- no external JS libraries, no remote font dependency, no analytics beacon, and no auth/payment writes.

## Critical findings / risks
1. **Domain and routing:** the canonical domain is `thelingolegacy.com`. The root and www routing must be checked against the current Cloudflare Worker configuration. A screenshot or successful GitHub write does not prove live behavior.
2. **Root collision:** Loyalty Lane Apparel must remain a dedicated module and must not replace the flagship apex homepage.
3. **Destination integrity:** catalog cards need a controlled route manifest with explicit destination URLs and an owner for each route. Avoid guessed links.
4. **Identity and authorization:** LINGO ID must be the entry point only after Firebase Auth/session behavior and authorization rules are verified.
5. **Wallet and monetization:** client-side displays cannot authoritatively mint, redeem, or transfer value. All wallet operations require trusted server-side transactions, idempotency, fraud controls, and reconciliation.
6. **Games:** demo balances, rewards, tournaments, multiplayer, and real-money-like language must be separated by policy and product boundaries. Do not imply production rewards or availability from a visual card.
7. **Privacy and analytics:** only load analytics after provider, consent, event schema, and data-retention review. Avoid exposing personal activity feeds with unverified or invented events.
8. **Asset rights and performance:** use owned/cleared assets, optimize images, provide alt text, and track source/license/provenance in the asset manifest.
9. **Accessibility:** validate keyboard-only navigation, focus order, color contrast, reduced motion, zoom, screen-reader labels, and touch target sizes.
10. **Build/CI blocker:** the canonical G02 runner-dispatch problem remains an independent gate. A new branch or HTML candidate does not resolve it.

## Acceptance matrix
| Gate | Acceptance evidence | Current state |
|---|---|---|
| Source | Candidate branch and exact commit are identified | Branch created; files committed by connector |
| Design | Desktop/mobile layout and interaction review | Candidate implementation; not browser-tested here |
| Static QA | HTML validation, JS checks, accessibility scan | Not run in this connector session |
| Build | CI job assigned to a real runner; steps and logs retrievable | BLOCKED until qualifying runner evidence exists |
| Staging | Isolated preview URL, route smoke test, screenshots | NOT VERIFIED |
| Backend | Firebase/Auth/Firestore/Functions behavior and rules verified | NOT VERIFIED by this change |
| DNS/edge | Apex returns HQ 200; www redirects to apex; health/runtime checks pass | NOT VERIFIED by this change |
| Security | CSP/headers, secret handling, dependency scan, abuse controls | NOT VERIFIED |
| Production | Independent public fetch and rollback evidence | BLOCKED; no deployment attempted |

## Next steps, in order
1. Review this candidate and audit on the isolated branch.
2. Run static validation and browser QA on a working runner; attach logs and screenshots.
3. Resolve G02 runner dispatch independently; do not conflate a code commit with runner recovery.
4. Define the route manifest and confirm each destination owner and current live URL.
5. Verify Cloudflare Worker, DNS, apex/www redirect, `/healthz`, and `/api/v1/runtime` against the live environment.
6. Connect auth, wallet, analytics, media and commerce only after their service contracts and security review pass.
7. Stage first, collect independent evidence, then request production promotion as a separate gated action.

## Explicit non-claims
This candidate is not certified, not a live production deployment, does not prove Firebase integration, and does not repair GitHub runner dispatch or domain reachability.
