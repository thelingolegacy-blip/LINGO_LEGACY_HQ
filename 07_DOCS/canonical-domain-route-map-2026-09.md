# Lingo Legacy Canonical Domain Route Map — 2026-09

## Purpose

Establish one unified web hierarchy: the Lingo Legacy Studio Hub is the homepage and every child property receives a dedicated landing surface beneath the same domain.

## Canonical hierarchy

`/` — **The Lingo Legacy Studio Hub / Master Home**

The root is the ecosystem gateway. It presents the four studios, shared systems, featured properties, and discovery paths. It is not a storefront and must not be replaced by a child property.

### Featured commerce

`/loyalty-lane` — Loyalty Lane Apparel landing page

`/p/loyalty-lane-apparel` — canonical property landing

`/shop` — unified commerce gateway → live Loyalty Lane storefront

The landing page provides brand context and network navigation; the commerce platform remains responsible for product catalog, inventory, cart, checkout, and order processing.

### Property aliases

- `/kottons-code` → `/p/kottonscode`
- `/casino` → `/p/thats-my-lingo`
- `/uhoh-lingo-university` → `/p/uhno-lingo-u-no`
- `/legacy-legends` → `/p/legacy-legends-lingo-city`
- `/travel` → `/p/lingotravel`
- `/ai` → `/p/lingo-ai`

### Network directories

- `/apps` — application launchpad
- `/websites` — website directory
- `/blogs` — publication directory
- `/join` — unified participation gateway

## Ownership model

1. **Homepage:** Studio Hub owns discovery and routing.
2. **Landing page:** Each property owns its story, context, and next-action surface.
3. **Execution target:** A verified app, website, blog, or commerce platform owns the actual execution surface.
4. **Shared services:** Identity, data, rewards, analytics, safety, and runtime services remain cross-property infrastructure.

## Production controls

This route map is an architecture contract, not production authorization. Cloudflare remains the authoritative DNS/runtime edge. AppDeploy remains staging/QA unless separately certified. GitHub remains source/evidence authority. Any production promotion still requires the existing fail-closed evidence chain.

## Studio Universe media contract

Each dedicated property landing may declare a governed visual/audio context without changing domain ownership.

| Route | Universe | Visual context | Audio context | Media contract |
|---|---|---|---|---|
| /loyalty-lane | Streetwear Studio | Industrial grid, neon glare, urban motion | Atmospheric urban pulse | WebM background + WebP poster + MP3 audio |
| /kottons-code | Cartoon Studio | Cel-shaded layers, parallax, animated frames | Playful synth cues | WebM background + WebP poster + MP3 audio |
| /casino | Vegas Studio | Velvet black/gold, bloom, particles | Ambient game-room pulse | WebM background + WebP poster + MP3 audio |

### Asset authority

The frontend references deterministic resource paths under public/resources/studios/.... Actual binary assets must be supplied through the approved resource/upload path or an authenticated media service; placeholder URLs are not production evidence.

For large video/streaming workloads, Google Cloud Media CDN is the appropriate Google delivery layer; Cloud CDN is appropriate for general web assets. Google documentation distinguishes Media CDN for high-throughput video/download delivery from Cloud CDN for static web content.

Google Cloud Storage can serve as the asset origin, with CDN delivery in front of it. Cache behavior must be controlled with explicit Cache-Control metadata rather than assuming file extensions determine cacheability.

Google Cloud Vision may be used in an authenticated backend/media pipeline for asset labeling and image-property extraction, including dominant-color analysis; credentials must never be shipped to the browser.

Generative asset production through Vertex AI/Imagen remains a build/media-pipeline capability, not a browser runtime dependency. Generated assets must pass the same provenance, copyright, QA, and evidence gates as uploaded assets.

### Runtime fallback contract

1. Poster/image fallback must remain usable when video is unavailable.
2. Motion respects prefers-reduced-motion and the in-product motion control.
3. Audio remains off until explicit user action.
4. A missing media object must not prevent the landing page from rendering.
5. Media performance and error telemetry must be captured before production promotion.
6. No Google API credential is embedded in client-side source.
