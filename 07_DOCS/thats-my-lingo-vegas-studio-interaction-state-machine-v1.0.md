# That’s My Lingo Vegas Studio — Interaction State Machine v1.0

Date: 2026-09-21
Status: STAGING CONTRACT

## States

### WORLD_IDLE
Default Vegas environment. Motion is decorative, audio muted, navigation available.

### WORLD_ENTER
Triggered by explicit user entry. Play visual portal transition and optionally the welcome voice if sound has been enabled.

### EXPLORE
User can move among world sections: Games, Missions, Events, Rewards, VIP, Community, Creator Hub, Drops, Sweepstakes.

### GAME_SESSION
A permitted virtual entertainment experience is active. The session can modify only non-cash game/progression state.

### MISSION_ACTIVE
A mission is displayed with progress, requirements, and a non-cash reward outcome.

### REWARD_REVEAL
A virtual reward animation plays. The result must be clearly labeled as virtual unless it is a separately administered sweepstakes result.

### SWEEPSTAKES_INFO
Displays eligibility, rules, entry method, dates, geography/age constraints where applicable, and prize terms.

### EVENT_LIVE
Displays live-event information, creator/performance content, and participation actions.

### COMMUNITY
Displays social/community surfaces. No financial transaction is implied by community status.

### COMMERCE
Routes to ordinary merchandise/commerce. Commerce purchases are not a wager and must not silently grant paid sweepstakes odds.

### WORLD_EXIT
Returns to the Lingo Legacy Digital World Studio.

## Transition rules

- WORLD_IDLE -> WORLD_ENTER only through explicit user interaction.
- WORLD_ENTER -> EXPLORE after visual/audio initialization.
- EXPLORE -> GAME_SESSION only through a game action.
- GAME_SESSION -> REWARD_REVEAL only through a defined virtual outcome.
- EXPLORE -> SWEEPSTAKES_INFO without entering GAME_SESSION.
- EXPLORE -> COMMERCE without entering GAME_SESSION.
- Any state -> WORLD_EXIT through the world/home control.
- Audio errors never block state transitions.
- Missing media never blocks state transitions.
- Reduced-motion mode replaces motion transitions with instant/low-motion transitions.

## Financial isolation

No transition may create:
- deposit state
- wager state
- cash balance
- cash-out state
- odds/bet state

Sweepstakes state must remain distinct from gameplay state.

## Telemetry categories

Permitted analytics categories:
- world entry
- navigation
- game launch
- mission progress
- virtual reward reveal
- event interaction
- sweepstakes information view
- eligible entry action where legally implemented
- commerce click
- world exit

Telemetry must not contain payment credentials, authentication secrets, or unnecessary personal data.

## Failure behavior

If a service or media asset fails:
- preserve the world shell
- show a clear non-blocking status
- preserve navigation
- preserve safety boundaries
- do not invent rewards, prizes, balances, or transaction success
