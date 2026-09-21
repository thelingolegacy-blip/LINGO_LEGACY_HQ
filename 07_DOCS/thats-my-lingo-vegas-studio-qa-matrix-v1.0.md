# That’s My Lingo Vegas Studio — QA Matrix v1.0

Date: 2026-09-21
Status: STAGING QA PLAN

## World shell

- [ ] Vegas world loads without console errors
- [ ] World Gate opens and returns home
- [ ] That’s My Lingo property route resolves
- [ ] Mobile layout remains usable
- [ ] Reduced-motion mode removes continuous animation
- [ ] Missing media falls back cleanly

## Motion

- [ ] Background motion renders when enabled
- [ ] Flying-object layer remains decorative
- [ ] Particle effects do not block interaction
- [ ] Reward animations terminate cleanly
- [ ] No runaway timers or animation loops

## Audio

- [ ] Audio is off by default
- [ ] User can enable/disable audio
- [ ] Welcome voiceover plays only after interaction
- [ ] Playback failure is caught
- [ ] Route changes stop/reset previous audio
- [ ] Reduced-motion/accessibility settings remain compatible

## Virtual economy

- [ ] Virtual balances are labeled clearly
- [ ] Missions award virtual progression only
- [ ] Rewards cannot be withdrawn as cash
- [ ] No deposit flow exists
- [ ] No cash-out flow exists
- [ ] No wagering API exists
- [ ] Commerce purchases remain ordinary commerce

## Sweepstakes

- [ ] Sweepstakes surface is visibly separate
- [ ] Eligibility is presented
- [ ] Official rules link/surface exists before activation
- [ ] Entry mechanism is independently testable
- [ ] Prize language is accurate
- [ ] Jurisdiction/age restrictions are configurable where required
- [ ] No sweepstakes claim is represented as a guaranteed outcome

## World systems

- [ ] Featured games
- [ ] Missions
- [ ] Achievements
- [ ] Events
- [ ] Community
- [ ] Creator hub
- [ ] Exclusive drops
- [ ] VIP/lounge presentation
- [ ] Rewards
- [ ] World navigation

## Evidence

A staging QA pass is not production certification.

Required promotion evidence:
1. source revision
2. media inventory
3. build/deployment identity
4. QA result
5. runtime evidence
6. security/economy boundary verification
7. CI runner evidence
8. production-specific authorization

Until the canonical CI runner gate produces real runner assignment, instantiated steps, and real logs, production remains blocked.
