# Studio Hub Commerce and Routing Reconciliation — 2026-09-21

## Commerce identity verification

The connected Shopify administration surface independently reports:

- Store name: Loyalty Lane
- Store domain: `vercel-store-f0dc9593.myshopify.com`
- Currency: USD
- Country: United States
- Plan: Advanced

This establishes the Shopify store identity associated with the configured Studio Hub commerce target.

It does **not** establish that the production apex domain currently routes to the Studio Hub, nor does it authorize DNS, Cloudflare, Shopify theme, or production routing changes.

## Studio Hub commerce contract

The intended hierarchy remains:

`/` → Studio Hub  
`/loyalty-lane` → Loyalty Lane property landing  
`/p/loyalty-lane-apparel` → canonical property landing  
`/shop` → commerce gateway  
Shopify → catalog, inventory, cart, checkout, and order execution

The current AppDeploy implementation opens the verified Shopify domain from the commerce gateway and Loyalty Lane property actions.

## Routing implementation note

The current AppDeploy Studio Hub implementation uses browser History API routing through `window.history.pushState()` and `popstate`.

AppDeploy platform guidance favors hash routing for React SPA deployments. This is recorded as an implementation compatibility review item, not an automatic defect: changing routing without a controlled regression pass could alter the currently implemented property aliases, directory paths, and landing-page behavior.

Before any production promotion, routing evidence should demonstrate:

1. Direct navigation to canonical and alias paths.
2. Browser refresh preservation.
3. Back/forward navigation.
4. Deep-link behavior at the deployment edge.
5. No route collision with Cloudflare Worker rules.
6. Mobile and desktop parity.

## Media state

The latest Studio Hub snapshot declares deterministic WebM/WebP/MP3 resource paths, but `public/resources/**/*` is empty in the inspected snapshot.

Therefore:

`MEDIA_CONTRACT = DECLARED`  
`MEDIA_BINARIES = NOT_PROVISIONED`  
`MEDIA_CERTIFICATION = BLOCKED`

## Governance disposition

This document is a reconciliation checkpoint only.

It authorizes no:

- Git merge
- production DNS mutation
- Cloudflare production mutation
- Firebase production write
- AppDeploy production promotion
- Shopify production theme mutation
- LKG modification

The GitHub runner/evidence gate remains controlling.
