# LINGO Canonical Brand and Platform Contract

Status: candidate source-governance contract; production promotion remains gated.

## Canonical brand
- Public flagship: **The Lingo Legacy**
- Public canonical origin: `https://thelingolegacy.com/`
- Tagline: **Loyalty. Legacy. Language.**
- Never append a star emoji to “Lingo”.
- Do not reference Duolingo.

## Canonical product names
Use the approved spelling and casing consistently:
- `askLINGO` — conversational assistant and language interface
- `LINGOai` — AI and intelligence platform
- `LINGOworld` — connected world discovery and lore
- `LINGOarcade` — games and interactive experiences
- `LINGOmedia` — stories, animation, music, and creator releases
- `LINGOlane` — fashion, merchandise, and commerce lane
- `LINGOlibrary` — knowledge, canon, and reading
- `LINGOclub` — membership, loyalty, and benefits
- `LINGOslots` — slot-game engine and product surface

Avoid variant labels such as “LINGOassist”, “Ask Lingo”, or “ASK LINGO” in user-facing brand labels when `askLINGO` is intended. Descriptive prose may use ordinary language; the product name itself must remain canonical.

## Platform authority
- Cloudflare is the production DNS and edge control plane.
- Cloudflare Workers/Pages are the production runtime targets where explicitly configured.
- AppDeploy is preview/staging unless custom-domain activation and promotion are independently verified.
- Vercel is retired for this production architecture; do not add Vercel canonical URLs, analytics scripts, Blob references, or deployment instructions.
- GitHub/GitLab CI results count only when a real runner/job, initialized steps, retrievable logs, and correlated artifacts are available.

## Release rule
No production mutation, merge, DNS change, or promotion from configuration alone. Require:
SOURCE → EVIDENCE → VERIFICATION → ACCEPTANCE → PASSED → AUTHORIZATION → PROMOTION.

Preserve last-known-good production and keep blocked gates blocked until evidence satisfies their acceptance predicates.
