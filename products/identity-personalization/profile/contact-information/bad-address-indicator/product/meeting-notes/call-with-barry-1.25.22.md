# Bad address indicator call with Barry Willbanks & auth experience team, 1.25.22

In attendance: Samara, Marci, Adam, Tom, and Barry

- In the beginning (idk when), VA Profile only had good data (ie. good addresses. phone numbers, and emails).
- Then for mailing address, they added bad address indicator.
  - This is largely driven by partners and is determined by returned mail.
- Bad address indicator = the street address might be valid, but the person doesn't live there anymore. It's invalid for *that person* only.
- While they had the indicator, there was no system where they could really do anything with it.
- Then, they decided add a "dirty data repository", which includes any data they know to be bad for address, phone, and email. Stuff that might be allowed to save but we know it won't work (eg. 555-555-5555 for a phone number).
- Bad address indicator is actually in the "good data" world, but they are re-thinking that even though the addresses might be real.
- They are recommending that bad address data be moved to the dirty data repository.
- This is really relevant from a backend perspective. Does not affect the FE experience.
- Barry's suggestion: if we do not get a full profile, we should prompt to fill it out.
- What turns bad address indicator off: someone updates their address.
- Auto-notify: They are thinking of auto-generating communication if contact info is no longer complete or if address is bad.
- Can we tell that people had bad address without them signing in? If so, email or proactive outreach makes sense. If not, we don't need proactive functionality and should just alert people when they log in.
- Should this project encompass more than address?
- 300K people have bad address indicators.
