# That's My Lingo Phase 3: Visual, Audio, Animation, and Live Operations Package

Phase 3 defines the creative production system that makes That's My Lingo feel like a complete Lingo Legacy game experience. It covers visual identity, UI kit, symbol art, character states, animation library, audio design, future voice integration, live events, retention, social systems, admin controls, server functions, security, app store assets, and the Phase 4 release package.

## 1. Visual Identity System

Main theme: Industrial Noir Casino

Design language:

- Deep Onyx backgrounds
- Metallic gold trim
- Neon cyan technology glow
- Silver chrome effects
- Luxury casino lighting
- Futuristic legacy aesthetic

Production guidance:

- Use dark backgrounds with high-contrast gold and cyan focal points.
- Reserve gold for wins, rewards, jackpots, VIP surfaces, and legacy moments.
- Use neon cyan for technology, buttons, hover states, loading states, and active controls.
- Keep chrome/silver for borders, reel frames, and premium panels.

## 2. Game UI Kit

### Buttons

```text
ui/buttons/
├── spin_button_idle.png
├── spin_button_pressed.png
├── spin_button_glow.png
├── auto_spin.png
├── turbo_spin.png
├── bonus_button.png
├── shop_button.png
└── reward_button.png
```

Button animations:

- Pulse glow
- Light sweep
- Press bounce
- Particle burst

### Panels

```text
ui/panels/
├── wallet_panel.png
├── xp_panel.png
├── vip_panel.png
├── daily_reward_panel.png
├── jackpot_panel.png
└── leaderboard_panel.png
```

Panel usage:

- Wallet panel: coins, Loyalty Bucks, Lingo Tokens
- XP panel: level, progress, next reward
- VIP panel: membership benefits and upgrades
- Daily reward panel: login calendar and claims
- Jackpot panel: prize progress and events
- Leaderboard panel: weekly rankings and tournament standings

## 3. Symbol Art Package

Each symbol needs idle, glow/spin, and win states where applicable.

```text
symbols/
├── star/
│   ├── idle.png
│   ├── glow.png
│   └── win.png
├── crown/
│   ├── idle.png
│   ├── glow.png
│   └── win.png
├── diamond/
│   ├── idle.png
│   ├── spin.png
│   └── win.png
├── microphone/
│   ├── idle.png
│   └── soundwave.png
├── book/
│   ├── idle.png
│   └── open_animation.png
├── coin/
│   ├── idle.png
│   └── drop_animation.png
└── seven/
    └── idle.png
```

Symbol production notes:

- Lingo Star should carry the strongest glow and highest payout treatment.
- Legacy Crown should feel premium and royal.
- Diamond Token should clearly communicate multiplier value.
- Microphone and Book symbols connect the game to music and learning.
- Coin and Seven retain classic slot readability.

## 4. Character System

Mascot: Lingo

Character states:

```text
lingo/
├── idle
├── happy
├── thinking
├── excited
├── celebrating
├── jackpot
├── level_up
└── welcome
```

Uses:

- Main menu guide
- Tutorials
- Rewards
- Events
- Notifications
- Jackpot celebrations
- Level-up moments

Behavior rules:

- Idle state should be subtle and loopable.
- Happy/excited states should appear after medium wins and rewards.
- Jackpot state should be reserved for rare high-value moments.
- Thinking state should guide tutorials, tooltips, and settings.

## 5. Animation Library

### Reel animations

Required:

- Reel start
- Fast spin
- Blur effect
- Slow down
- Stop bounce
- Winning line highlight

### Win effects

Required:

- Gold explosion
- Confetti
- Coins falling
- Screen glow
- Camera shake
- Particle trails

### Jackpot sequence

```text
0 sec  — Screen dim
2 sec  — Legacy logo appears
4 sec  — Reels freeze
6 sec  — Prize reveal
8 sec  — Celebration effects
12 sec — Reward collection
```

Implementation notes:

- Jackpot flow should be deterministic and interrupt-safe.
- Reward collection must happen after server-side validation.
- Effects should degrade gracefully on low-power devices.

## 6. Audio Design

### Music tracks

```text
audio/music/
├── main_lounge.mp3
├── high_energy_spin.mp3
├── bonus_world.mp3
├── jackpot_theme.mp3
└── victory_theme.mp3
```

### Sound effects

```text
audio/sfx/
├── button_press.wav
├── spin_start.wav
├── reel_tick.wav
├── reel_stop.wav
├── small_win.wav
├── big_win.wav
├── jackpot.wav
├── coins.wav
├── level_up.wav
└── reward_claim.wav
```

Audio rules:

- Keep button sounds short and responsive.
- Use layered win sounds for small, medium, big, and jackpot moments.
- Provide mute controls and persist the player's audio preference.
- Avoid overlapping reward sounds that obscure accessibility voice.

## 7. Voice System

Future Ask Lingo integration examples:

- “Lingo, spin time!”
- “Lingo, you hit a jackpot!”
- “Lingo, your reward is ready!”

Voice options:

- Character voice
- Announcer voice
- Accessibility voice

Implementation guidance:

- Keep voice optional and user-controlled.
- Support captions/subtitles for key voice lines.
- Avoid voice prompts during payment or account-security flows unless explicitly enabled.

## 8. Live Events System

### Seasonal events

Legacy Gold Rush:

- Gold skins
- Bonus coins
- Exclusive badges

Lingo Festival:

- New symbols
- New soundtrack
- Limited avatars

Holiday Events:

- Special reels
- Limited rewards
- Collectibles

Event data model:

```text
live_events
├── id
├── name
├── starts_at
├── ends_at
├── status
├── reward_rules
├── symbol_overrides
├── theme_assets
└── created_at
```

## 9. Player Retention System

Daily:

- Login rewards
- Free spins
- Challenges

Weekly:

- Leaderboards
- Missions
- Tournaments

Monthly:

- Seasons
- New content
- VIP rewards

Retention rules:

- Avoid pay-to-win progression.
- Keep daily rewards understandable.
- Use tournaments and missions to drive repeat play without requiring purchases.

## 10. Social System

Features:

- Friend list
- Send gifts
- Clubs
- Leaderboards
- Achievements
- Challenges

Database shape:

```text
social/
├── friends
├── messages
├── gifts
├── clubs
└── rankings
```

Safety requirements:

- Block/report controls
- Age-appropriate communication rules
- Rate limits on gifts and messages
- Moderation hooks for clubs and public names

## 11. Admin Control Panel

### Game Manager controls

- Symbol payouts
- Events
- Rewards
- Ads
- Promotions
- Player support

### Analytics tracks

- Players
- Spins
- Revenue
- Retention
- Sessions
- Purchases

Admin modules:

```text
admin/
├── overview
├── players
├── payouts
├── events
├── rewards
├── ads
├── promotions
├── support
├── analytics
└── audit_logs
```

Security rule: all payout, reward, event, and promotion changes must be admin-only and audit logged.

## 12. Server Functions

Firebase Cloud Functions package:

```text
functions/
├── spinValidation.js
├── rewardClaim.js
├── dailyBonus.js
├── leaderboardUpdate.js
├── purchaseVerification.js
└── eventManager.js
```

Function responsibilities:

- `spinValidation.js`: validates spin cost, RNG result, payout, and wallet update.
- `rewardClaim.js`: validates reward eligibility and claim status.
- `dailyBonus.js`: checks daily login cadence and bonus calendar state.
- `leaderboardUpdate.js`: updates rankings after valid score/spin events.
- `purchaseVerification.js`: verifies platform or payment-provider purchase state.
- `eventManager.js`: activates and expires event configuration.

Vercel fit:

- Use Vercel for the HTML5 web build, preview deployments, production deployments, and Vercel Functions for web/API endpoints that sit outside Firebase.
- Keep Firebase Cloud Functions for Firebase-native auth, game state, purchases, and leaderboard workflows if Firebase remains the backend of record.

## 13. Security

Protection requirements:

- Server-side reward validation
- Anti-cheat checks
- Purchase verification
- Account protection
- Activity logs
- Admin audit logs
- Rate limits for reward claims, gifts, and leaderboard submissions
- Replay protection for spin and purchase requests

Security rule: never trust client-side spin outcomes for rewards, XP, wallet credits, or leaderboards.

## 14. App Store Package

### iOS

Required:

- App icon
- Screenshots
- Description
- Privacy information
- Test build

### Android

Required:

- Store listing
- APK/AAB build
- Screenshots
- Content rating

Shared store requirements:

- Support URL
- Privacy Policy URL
- Terms URL
- Age rating
- In-app purchase disclosures if applicable
- Ad disclosures if applicable
- Test accounts for reviewer access

## 15. Final Production Asset Checklist

Art:

- Symbols
- UI
- Characters
- Backgrounds
- Effects

Audio:

- Music
- SFX
- Voice

Code:

- Engine
- Backend
- Database
- Analytics

Operations:

- Events
- Rewards
- Admin tools
- Monetization

## Phase 4 next package

That's My Lingo Phase 4 — Production Release Package should include:

- Complete Phaser source structure
- Firebase Cloud Functions
- Remote Config system
- App build configuration
- QA testing matrix
- Beta tester system
- Launch marketing campaign
- Store listings
- Post-launch update schedule
- Lingo Legacy Wallet integration

This phase prepares That's My Lingo for a real release workflow.
