# That’s My Lingo — Sweepstakes Runtime Boundary v1.0

Date: 2026-09-21
Status: GOVERNANCE SPEC / PRODUCTION LOCKED

## Allowed experience

The product may provide:
- free-to-play virtual entertainment
- non-cash virtual points/currencies
- missions and achievements
- cosmetic unlocks
- progression levels
- community events
- creator showcases
- merchandise and ordinary commerce
- loyalty benefits
- separately presented sweepstakes opportunities
- eligibility and rules information
- entry/status interfaces for legally supported sweepstakes
- prizes administered through a compliant sweepstakes process

## Prohibited runtime behavior

The product must not implement:
- deposits of real money for wagering
- cash betting
- cash-out from gameplay balances
- real-money casino balances
- sportsbook/betting functionality
- wagering odds markets
- chips representing deposited cash
- a conversion path from virtual game currency to cash
- a conversion path from gameplay rewards into withdrawable funds
- language that falsely represents virtual play as gambling for money

## Separation rule

Virtual gameplay and sweepstakes must be visibly separated.

A user playing a virtual experience should not be required to wager money or purchase a chance to obtain sweepstakes eligibility.

Any sweepstakes implementation must display its own eligibility, official rules, entry method, geographic/age restrictions where applicable, and prize terms appropriate to the jurisdiction and promotion.

## Product copy baseline

Use:
- “Virtual play”
- “Virtual rewards”
- “Loyalty Bucks”
- “Lingo Tokens”
- “Sweepstakes”
- “Eligibility”
- “Official Rules”
- “No real-money wagering”

Avoid:
- “Bet”
- “Cash wager”
- “Deposit to play”
- “Cash out”
- “Real-money casino balance”
- “Guaranteed prize”
- “Buy a chance”

## Engineering enforcement

Any future wallet or reward API must explicitly distinguish:
- virtual gameplay units
- loyalty benefits
- sweepstakes entries
- promotional prizes
- ordinary commerce transactions

No single balance may silently represent all five categories.

## Gate

This document defines product boundaries; it does not constitute legal advice or authorize a live sweepstakes launch. Jurisdiction-specific rules and official terms must be reviewed before activation.
