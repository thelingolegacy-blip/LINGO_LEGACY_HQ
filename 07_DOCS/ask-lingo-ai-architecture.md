# Ask Lingo ⭐️ / Lingo.AI — Canonical Architecture

## Mission

Give every Lingo product/entity its own expert assistant while keeping the entire ecosystem connected to one governed `Lingo.AI` platform brain.

## Core model

`User → Ask Lingo ⭐️ → Lingo.AI Router → Shared Brain + Entity Knowledge → Tools → Verified Result`

### Shared Lingo.AI brain

Owns cross-ecosystem capabilities:

- identity and session context
- permissions and consent
- shared terminology
- universal navigation knowledge
- cross-product context
- safety and policy enforcement
- tool authorization
- memory boundaries
- audit events
- escalation and fallback

### Entity knowledge layer

Each product/entity receives a scoped knowledge pack containing:

- product purpose
- features
- navigation map
- button/CTA meanings
- workflows
- FAQs
- policies
- pricing/offer information when approved
- troubleshooting
- content rules
- release/version metadata
- supported tools

Examples:

- Ask Lingo — That's My Lingo ⭐️
- Ask Lingo — Spades Is My Lingo
- Ask Lingo — Kotton's Code
- Ask Lingo — Lingo Travel
- Ask Lingo — Loyalty Lane Apparel
- Ask Lingo — Lingo Legacy website
- Ask Lingo — Admin Command Center
- Ask Lingo — Media/YouTube Studio
- Ask Lingo — TikTok Studio
- Ask Lingo — Canva/Creative Studio

The entity layer is specialized, but it does not become an independent uncontrolled brain.

## Tier architecture

### Tier 0 — Core

Ask questions, explain the current product, navigate users, and surface help.

### Tier 1 — Guided

Walk users through workflows step-by-step and identify the next action.

### Tier 2 — Operator

Use approved tools for actions such as content preparation, asset organization, travel search/booking flows, project management, analytics, and publishing preparation.

### Tier 3 — Studio Agent

Coordinate multi-step production workflows such as:

- YouTube video planning → script → shot list → thumbnail brief → metadata → publishing checklist
- TikTok concept → hook → script → shot list → caption → hashtag set → publishing checklist
- Canva creative brief → asset requirements → design instructions → review checklist
- website/page QA → route inventory → interaction checks → issue report
- travel planning → itinerary → provider/search workflow → ticket/booking handoff

### Tier 4 — Orchestrator

Coordinate multiple specialized agents while preserving permissions, auditability, and user control.

## Tool boundaries

Ask Lingo may only perform an external action through an explicitly authorized tool. Examples include:

- media tools
- design tools
- project management tools
- GitHub
- deployment systems
- travel/booking providers
- communication/calling providers
- analytics systems

The AI must distinguish:

`KNOW → RECOMMEND → PREPARE → REQUEST AUTHORIZATION → EXECUTE → VERIFY`

It must never claim an action was executed when it only prepared instructions.

## Knowledge synchronization

`Entity Source → Knowledge Pack → Validation → Lingo.AI Registry → Ask Lingo Runtime`

Each knowledge pack should carry:

- entity ID
- version
- source repository
- source commit
- generated timestamp
- effective date
- owner
- policy version
- supported tool list
- expiration/review date

## Cross-product context

The router may use shared context when permitted, but entity-specific knowledge remains scoped. A travel question should not silently inherit game rules; a game question should not silently inherit commerce policies.

## Phone calls

Phone capabilities require an authorized calling provider and explicit user permission. Ask Lingo can prepare call objectives, scripts, summaries, and follow-up tasks; execution must be performed by an approved communications tool and recorded as an auditable action.

## Travel tickets

Ask Lingo can provide travel discovery, itinerary construction, comparison, and booking handoff. A ticket is only considered booked after the provider confirms the transaction. A generated itinerary is not a ticket.

## Media creation

For YouTube, TikTok, Canva, and related workflows, Ask Lingo should expose a reusable studio checklist rather than pretending to have completed an external publication when no publishing tool confirmation exists.

## Governance

Every tool call must have:

- actor/entity
- requested action
- permission state
- tool name
- input scope
- result
- verification state
- audit event

## Product UI standard

Every eligible Lingo surface should expose Ask Lingo ⭐️ through a consistent entry point while allowing product-specific branding and contextual prompts.

## Build order

1. Shared schema and entity registry.
2. Product knowledge-pack contract.
3. Router and permissions model.
4. Ask Lingo UI component.
5. Tool registry and audit events.
6. First-party entity integrations.
7. Tiered agent orchestration.
8. Cross-product QA.
9. Production rollout.
