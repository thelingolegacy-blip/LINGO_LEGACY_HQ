# That's My Lingo HTML5 / Phaser Production Blueprint

This blueprint expands That's My Lingo into a complete production-ready HTML5 social casino slot game structure: identity, core loop, assets, visuals, audio, animations, project folders, Phaser architecture, Firebase backend structure, monetization, mobile packaging, and launch preparation.

## Game identity

| Field | Value |
| --- | --- |
| Title | That's My Lingo |
| Genre | Social Casino / Slot Entertainment Game |
| Targets | Web HTML5, mobile web, iOS wrapper, Android wrapper, future desktop app |
| Visual theme | Industrial Noir + Luxury Casino |

Core palette:

- Deep Onyx
- Metallic Gold
- Neon Cyan
- Silver
- Dark Slate

## Core game loop

```text
Player Login
      ↓
Receive Coins
      ↓
Spin Reels
      ↓
Match Symbols
      ↓
Win Rewards
      ↓
Earn XP
      ↓
Unlock Features
      ↓
Return Daily
```

## Slot machine feature set

Configuration:

- 5 reels
- 3 rows
- 20 paylines
- Spin button
- Auto spin
- Turbo mode
- Free spins
- Bonus rounds
- Jackpot events

## Currencies

### Demo Coins

Used for:

- Free play
- Tutorials
- Practice

### Loyalty Bucks

Used for:

- Rewards
- Promotions
- Store items

### Lingo Tokens

Used for:

- Premium features
- Special events

## Symbol asset list

### Standard symbols

- Lingo Star: highest value symbol, animated glow, golden particle effect
- Legacy Crown: premium symbol, royal animation
- Diamond Token: bonus multiplier
- Microphone: music theme symbol
- Book: knowledge bonus
- Lightning Bolt: speed bonus
- Seven: classic slot symbol
- Lucky Coin: currency symbol

### Special symbols

Lingo Wild:

- Replaces standard symbols
- Animated entrance
- Rainbow effect

Legacy Portal:

- Triggers free spins
- Opens bonus worlds
- Unlocks reward moments

## Character assets

Mascot: Lingo Character

```text
lingo_character/
├── idle.png
├── happy.png
├── excited.png
├── celebrate.png
├── thinking.png
├── spin_animation/
└── win_animation/
```

## UI asset plan

```text
ui/
├── buttons/
│   ├── spin_button.png
│   ├── auto_spin.png
│   ├── turbo.png
│   └── settings.png
├── panels/
│   ├── wallet_panel.png
│   ├── reward_panel.png
│   └── profile_panel.png
└── icons/
    ├── coin.png
    ├── xp.png
    └── trophy.png
```

## Animation system

### Reel animation

- Reel blur
- Slow down
- Bounce stop
- Winning highlight

### Win animation

- Confetti
- Gold particles
- Screen shake
- Flash effects
- Sound triggers

### Jackpot animation sequence

1. Screen darkens.
2. Logo appears.
3. Coins explode.
4. Prize is revealed.
5. Celebration sound plays.

## Audio package

```text
audio/music/
├── main_theme.mp3
├── bonus_theme.mp3
├── jackpot_theme.mp3
└── menu_theme.mp3

audio/sfx/
├── spin.wav
├── reel_stop.wav
├── win.wav
├── big_win.wav
├── jackpot.wav
├── button_click.wav
├── coin_drop.wav
├── level_up.wav
└── reward.wav
```

## Phase 1 HTML5 starter structure

```text
thats-my-lingo/
├── index.html
├── package.json
├── README.md
├── src/
│   ├── game.js
│   ├── config.js
│   ├── wallet.js
│   ├── rewards.js
│   ├── leaderboard.js
│   └── analytics.js
├── engine/
│   ├── slotEngine.js
│   ├── reel.js
│   ├── paylines.js
│   └── bonusEngine.js
├── assets/
│   ├── images/
│   │   ├── symbols/
│   │   ├── characters/
│   │   ├── backgrounds/
│   │   └── ui/
│   ├── audio/
│   │   ├── music/
│   │   └── sfx/
│   └── animations/
├── styles/
│   └── game.css
└── server/
    ├── database.js
    ├── auth.js
    └── api.js
```

### HTML5 starter file

```html
<!DOCTYPE html>
<html>
<head>
  <title>That's My Lingo</title>
  <link rel="stylesheet" href="styles/game.css">
</head>
<body>
  <div id="game">
    <h1>That's My Lingo</h1>
    <div id="wallet">Coins: <span id="coins">1000</span></div>
    <div id="slotMachine">
      <div class="reel"></div>
      <div class="reel"></div>
      <div class="reel"></div>
      <div class="reel"></div>
      <div class="reel"></div>
    </div>
    <button id="spin">SPIN</button>
  </div>
  <script src="src/game.js"></script>
</body>
</html>
```

### Starter slot engine

```js
const symbols = ["star", "crown", "diamond", "book", "coin", "seven"];
let balance = 1000;

function spin() {
  if (balance <= 0) {
    alert("Need more coins");
    return;
  }

  balance -= 10;
  const reels = [];

  for (let i = 0; i < 5; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    reels.push(symbol);
  }

  checkWin(reels);
}

function checkWin(reels) {
  const match = reels.every((item) => item === reels[0]);

  if (match) {
    balance += 500;
    alert("BIG WIN!");
  }
}

document.getElementById("spin").onclick = spin;
```

## Phase 2 Phaser production stack

### Final technology stack

Frontend game engine: Phaser 3

Purpose:

- Reels
- Animations
- Effects
- Touch controls
- Mobile scaling
- Audio management

Backend: Firebase

Used for:

- Authentication
- Player profiles
- Cloud save
- Rewards
- Leaderboards
- Analytics
- Remote configuration

Deployment:

- Vercel for the HTML5 web build, previews, production deployment, and Vercel Functions where server-side game APIs are needed
- Firebase for retained authentication, player data, leaderboards, analytics, and remote config workloads
- Mobile wrapper for Android and iOS builds

## Complete Phaser project folder

```text
thats-my-lingo/
├── public/
│   ├── index.html
│   ├── favicon.png
│   └── manifest.json
├── src/
│   ├── main.js
│   └── config.js
├── scenes/
│   ├── BootScene.js
│   ├── LoadScene.js
│   ├── MenuScene.js
│   ├── SlotScene.js
│   ├── BonusScene.js
│   ├── RewardScene.js
│   └── SettingsScene.js
├── systems/
│   ├── SlotEngine.js
│   ├── WalletSystem.js
│   ├── XPSystem.js
│   ├── RewardSystem.js
│   ├── AchievementSystem.js
│   ├── AudioSystem.js
│   └── SaveSystem.js
├── objects/
│   ├── Reel.js
│   ├── Symbol.js
│   ├── Button.js
│   └── Popup.js
├── firebase/
│   ├── auth.js
│   ├── database.js
│   └── analytics.js
├── assets/
│   ├── sprites/
│   │   ├── symbols/
│   │   ├── characters/
│   │   ├── effects/
│   │   └── backgrounds/
│   ├── audio/
│   │   ├── music/
│   │   └── sfx/
│   └── animations/
└── styles/
    └── game.css
```

## Game screens

### Splash Screen

Displays:

- Lingo Legacy logo
- That's My Lingo logo
- Loading animation

### Main Menu

Buttons:

- Play
- Rewards
- Shop
- Leaderboard
- Profile
- Settings

### Slot Room layout

```text
--------------------------------
 LINGO TOKENS       XP LEVEL
--------------------------------
      REEL 1 REEL 2 REEL 3
      REEL 4 REEL 5
--------------------------------
 BET -       SPIN       BET +
--------------------------------
 FREE SPINS | BONUS | JACKPOT
--------------------------------
```

## Slot engine configuration

```js
const slotConfig = {
  reels: 5,
  rows: 3,
  paylines: 20,
  symbols: ["star", "crown", "diamond", "mic", "book", "coin", "seven"],
  betOptions: [10, 25, 50, 100]
};
```

## Payline system

```js
const paylines = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [0, 1, 2, 1, 0],
  [2, 1, 0, 1, 2]
];
```

## Win calculation engine

```js
function calculateWin(result) {
  let payout = 0;

  if (result.every((symbol) => symbol === "star")) {
    payout = 1000;
  }

  return payout;
}
```

## Player system

```json
{
  "id": "",
  "username": "",
  "coins": 1000,
  "tokens": 0,
  "xp": 0,
  "level": 1,
  "inventory": [],
  "achievements": []
}
```

## Achievement system

Examples:

- First Spin: rewards 100 XP
- Big Winner: rewards badge and coins
- Legacy Master: rewards exclusive avatar

## Daily reward system

- Day 1: Coins
- Day 3: XP Boost
- Day 7: Free Spins
- Day 30: Legend Chest

## Shop system

Avatars:

- Lingo Founder
- Golden Player
- Legacy VIP

Themes:

- Noir Casino
- Gold Room
- Neon Room

Boosts:

- XP Boost
- Lucky Spin
- Free Spin Pack

## Firebase structure

```text
users
└── uid
    ├── profile
    ├── wallet
    ├── progress
    └── settings

games
└── uid
    └── thatsMyLingo

leaderboards
transactions
payments
events
seasonalEvents
```

## Ads and revenue

Rewarded ads:

- Extra spin
- Double reward
- Bonus coins

Interstitial ads:

- Between sessions

Premium:

- Remove ads
- VIP rewards
- Exclusive content

Additional revenue:

- Premium currency
- Cosmetic items
- VIP membership
- Season passes
- Merchandise tie-ins
- Sponsored events

## Mobile features

- Touch controls
- Haptic feedback
- Push notifications
- Cloud save
- Account sync
- App purchases

## Marketing assets

Trailer:

- Logo reveal
- Reel spin
- Jackpot moment
- Rewards
- Characters

Social packs:

- TikTok clips
- YouTube Shorts
- Instagram reels
- Facebook ads

Store assets:

- App icon
- Screenshots
- Banner images
- Promotional video

## Production asset checklist

- Game design document
- HTML5 structure
- Folder architecture
- Slot engine foundation
- Phaser scene architecture
- UI plan
- Symbol list
- Character assets plan
- Audio plan
- Animation plan
- Database plan
- Monetization plan
- Mobile packaging plan
- Marketing pipeline
- Lingo Legacy integration plan

## Phase 3 next package

Next production package:

- Full UI design system
- Character mascots
- Complete animation library
- Sound design catalog
- Firebase Functions
- Admin dashboard
- Live events system
- App Store and Google Play launch package
- QA testing checklist

This moves That's My Lingo from game concept into a complete production pipeline.
