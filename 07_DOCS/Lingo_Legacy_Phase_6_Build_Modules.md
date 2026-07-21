# Lingo Legacy v1.0 Build Package: Phase 6 Build Modules

Phase 6 turns the Phase 5 product/platform specification into implementation-ready modules: database schema, API endpoints, app screens, website layouts, payment architecture, email automation, legal pages, and launch checklist.

## 1. Complete Database Schema

### Core identity tables

```text
users
├── id
├── email
├── phone
├── display_name
├── avatar_url
├── language
├── timezone
├── membership_tier
├── xp_level
├── rewards_balance
├── created_at
├── updated_at
└── status

profiles
├── id
├── user_id
├── bio
├── creator_status
├── privacy_level
├── public_slug
├── preferences_json
└── updated_at

security_settings
├── user_id
├── mfa_enabled
├── recovery_email
├── guardian_mode
├── last_password_change_at
└── trusted_devices_json
```

### Wallet, XP, and rewards tables

```text
wallets
├── id
├── user_id
├── balance
├── gift_balance
├── rewards_balance
├── status
└── updated_at

wallet_transactions
├── id
├── wallet_id
├── type
├── amount
├── source
├── reference_id
├── metadata_json
└── created_at

xp_events
├── id
├── user_id
├── source
├── points
├── level_before
├── level_after
├── metadata_json
└── created_at

achievements
├── id
├── code
├── title
├── description
├── xp_value
└── status

user_achievements
├── user_id
├── achievement_id
└── earned_at
```

### Commerce and subscriptions tables

```text
products
├── id
├── title
├── category
├── sku
├── price
├── inventory_count
├── status
└── metadata_json

orders
├── id
├── user_id
├── status
├── subtotal
├── tax
├── shipping
├── total
├── payment_provider
├── provider_reference
└── created_at

order_items
├── id
├── order_id
├── product_id
├── quantity
├── unit_price
└── total

subscriptions
├── id
├── user_id
├── plan_code
├── status
├── current_period_start
├── current_period_end
├── renews_at
├── canceled_at
└── provider_reference
```

### AI, automation, and memory tables

```text
ai_agents
├── id
├── name
├── category
├── description
├── status
└── configuration_json

ai_conversations
├── id
├── user_id
├── agent_id
├── title
├── created_at
└── updated_at

ai_messages
├── id
├── conversation_id
├── role
├── content
├── model
├── token_count
└── created_at

memory_items
├── id
├── user_id
├── category
├── title
├── content
├── permission_scope
├── expires_at
└── updated_at

automation_workflows
├── id
├── user_id
├── name
├── trigger_type
├── status
├── steps_json
└── updated_at

audit_logs
├── id
├── actor_user_id
├── action
├── resource_type
├── resource_id
├── metadata_json
└── created_at
```

### Content and community tables

```text
games
books
apparel_collections
media_projects
community_programs
events
support_tickets
newsletter_subscribers
```

Recommended implementation:

- Neon via the Vercel Marketplace for relational data. Vercel Postgres is no longer first-party; existing databases were migrated to Neon via the Vercel Marketplace in December 2024.
- Upstash Redis via the Vercel Marketplace for rate limits, cache, queues, and short-lived workflow state. Vercel KV is no longer first-party; existing stores were migrated to Upstash Redis via the Vercel Marketplace in December 2024.
- Vercel Blob for uploads, exports, media files, generated assets, and reports.

## 2. API Endpoints

### Public and identity APIs

```text
GET  /api/health
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/users/me
PATCH /api/users/me
GET  /api/profiles/:slug
PATCH /api/profiles/me
GET  /api/privacy/settings
PATCH /api/privacy/settings
```

### Wallet, XP, and subscription APIs

```text
GET  /api/wallet
GET  /api/wallet/transactions
GET  /api/xp
GET  /api/achievements
POST /api/achievements/claim
GET  /api/subscriptions
POST /api/subscriptions/checkout
POST /api/subscriptions/cancel
POST /api/billing/webhook
```

### Commerce APIs

```text
GET  /api/products
GET  /api/products/:id
POST /api/cart/items
PATCH /api/cart/items/:id
DELETE /api/cart/items/:id
POST /api/orders
GET  /api/orders
GET  /api/orders/:id
POST /api/payments/checkout
POST /api/payments/webhook
```

### Lingo.ai APIs

```text
GET  /api/agents
GET  /api/agents/:id
POST /api/ai/chat
POST /api/ai/voice/transcribe
POST /api/ai/voice/speak
GET  /api/ai/conversations
GET  /api/ai/conversations/:id
POST /api/ai/tools/writing
POST /api/ai/tools/creator
POST /api/ai/tools/business
POST /api/ai/tools/developer
GET  /api/memory
POST /api/memory
PATCH /api/memory/:id
DELETE /api/memory/:id
```

### Admin APIs

```text
GET  /api/admin/overview
GET  /api/admin/users
GET  /api/admin/orders
GET  /api/admin/subscriptions
GET  /api/admin/products
GET  /api/admin/agents
GET  /api/admin/audit-logs
GET  /api/admin/support-tickets
PATCH /api/admin/products/:id
PATCH /api/admin/users/:id/status
```

## 3. App Screen Designs

### Mobile app shell

```text
App Root
├── Onboarding
├── Create Lingo ID / Sign In
├── Home Dashboard
├── Ask Lingo
│   ├── Chat
│   ├── Voice
│   ├── Create
│   └── History
├── Games
├── Books and Learning
├── Store
├── Wallet
├── Rewards
├── Community
├── Notifications
├── Profile
└── Settings
    ├── Privacy
    ├── Security
    ├── Subscriptions
    └── Guardian Controls
```

### Admin HQ shell

```text
Admin HQ
├── Executive Overview
├── Users
├── Products
├── Orders
├── Subscriptions
├── Finance
├── Marketing
├── AI Agents
├── Automations
├── Content
├── Support
├── Legal
├── Security Operations
└── Analytics
```

## 4. Website Page Layouts

### TheLingoLegacy.com

- Home
- Lingo ID
- Ask Lingo / Lingo.ai
- Games
- Books
- Apparel
- Marketplace
- Community impact
- Membership
- Creator and partner network
- Newsletter
- Support
- Legal pages

### Connected site layouts

- shop.thelingolegacy.com: storefront, collections, product detail, cart, checkout, account orders
- games.thelingolegacy.com: game hub, title pages, leaderboards, rewards, events
- books.thelingolegacy.com: publishing hub, book detail pages, learning resources, audiobooks
- developer.thelingolegacy.com: API docs, SDKs, keys, examples, status
- support.thelingolegacy.com: help center, tickets, account support, billing support
- admin.thelingolegacy.com: private Admin HQ dashboard

## 5. Payment Architecture

### Checkout flow

1. User selects product, membership, game pass, or AI plan.
2. Cart validates price, inventory, coupon, and tax/shipping requirements.
3. Payment provider checkout session is created.
4. User completes payment.
5. Webhook confirms payment result.
6. Order, wallet, XP, and entitlement records update.
7. User receives confirmation email and in-app notification.

### Subscription lifecycle

```text
Trial or checkout
  ↓
Active subscription
  ↓
Renewal reminder
  ↓
Payment attempt
  ↓
Success → extend entitlements
Failure → retry + notify
Cancellation → access ends at billing boundary
```

### Required controls

- Webhook signature verification
- Idempotency keys
- Fraud/risk review hooks
- Refund and dispute tracking
- Admin-only manual adjustments
- Audit logs for entitlement changes

## 6. Email Automation

### Transactional email events

- Account verification
- Password reset
- Login alert
- Purchase receipt
- Subscription confirmation
- Renewal reminder
- Failed payment notice
- Cancellation confirmation
- Support ticket update
- Reward earned
- Launch announcement

### Marketing email events

- Newsletter welcome
- Game drop announcement
- Book release
- Apparel drop
- Event reminder
- Creator/partner updates
- Re-engagement campaigns

## 7. Legal Pages

Required initial pages:

- Terms of Service
- Privacy Policy
- Cookie Policy
- Refund Policy
- Subscription Terms
- Community Guidelines
- Creator Terms
- Developer Terms
- AI Use Policy
- Child Safety and Guardian Controls
- Accessibility Statement
- Contact and Support

## 8. Launch Checklist

### Infrastructure

- Production Vercel project configured
- Production domain connected and verified
- Preview deployments enabled
- Environment variables configured
- Database provider connected
- Blob storage configured
- AI Gateway configured
- Cron Jobs configured

### Product readiness

- Homepage complete
- Lingo ID flow complete
- Ask Lingo MVP complete
- Wallet and rewards MVP complete
- Commerce checkout tested
- Subscription lifecycle tested
- Admin HQ access secured
- Legal pages published
- Support intake available

### Operations readiness

- Analytics enabled
- Logs reviewed
- Error paths tested
- Backup/export plan documented
- Payment webhooks tested
- Email sender verified
- Launch communications drafted
- Rollback plan documented

## Phase 6 outcome

Phase 6 produces the working blueprint required to begin implementation in code: schema, APIs, screens, pages, payments, email, legal, and launch operations.
