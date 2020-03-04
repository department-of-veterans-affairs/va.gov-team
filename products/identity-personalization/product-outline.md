# Personalization Outline
- GitHub Label: Personlization, Dragons
- Slack channel: #Personalization
- Vets.gov link: n/a yet
- Demo video link: n/a yet

---

### Table of Contents

# Executive Summary 
- [Mission](#mission)
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## Mission
**_Show veterans two things:_**
1. The benefits and services that they, specifically, can get access to.
2. Their personal data, to ensure accuracy and make updates accordingly.

## User Problem Statement

1. I don’t know what I don’t know - what benefits and services can I get access to?
2. What info does VA know about me and why isn’t it always accurate / consistent?

## Solution Goals

#### User Goals

1. Apply for benefits before they expire or when I need them - and know about them!
2. Change/update my info in one place, and have it change/update across all of VA.

#### Business Goals

1. Convert more website _visitors_ to _customers_.
2. Improve the Vets.gov brand to be recognized as top in federal government.

## Questions
- What are the reasons around why people are currently missing serivices and benefits on Vets.gov?
- What level of personalization can we be confident in?
- How big is the lift for the eligibility rules engine? How much value would that provide?
- What value can Vet360 provide now? How do we incorporate their added value moving forward?

## Assumptions

- MVI considered “golden standard” of user info
- We probably want data from CorpDB directly
- If the user's data is innacurate, we cannot begin to personalize effectively.

## Requirements and Constraints

- Data in the VA itself is non-standard
- Contact info currently stored across, MVI , EMIS, PCIU, etc. - many locations, and often conflicting
- Current registration with EMIS, “flashes” out of EVSS (tons of fields)

## Discovery Takeaways
- We already have the functionality to update address, email, and phone from the work with VA letters (address tested end-to-end, some testing still requred for email & phone)
- We already have the functionality to send asychronous notifications from the work with HCA (it is 6-months old, and merge conflicts will likely need to be resolved but fairly low lift)
- We need more information about what Veteran information we can trust, and how we personalize around that foundation
- If we don't have any information we can trust, customization may be a better approach in terms of having the user dictate their goals, needs, and eligibility (customization), as opposed to the system (personalization)

## (Potential) Solution Approach(es)
1. Enable user to update their personal data (address, email, phone) for accuracy.
2. Request additional input from the user to improve the quality of their personal data (data gaps, conflicts, inaccuracies; user preferences, interests, eligibility).
3. Share information with the user based on their personal (existing) and custom (entered) data.

## Value Propositions
- Increase Veteran access to the benefits they deserve.

#### User Value
- Veterans, caregivers, and family members get increased access to benefits.

#### Business Value


## KPIs

---

# Implementation Info

## Status

## Solution Narrative
- **Date**: summary of any big changes and why
- **Date**: summary of any big changes and why

## Team

- VA Executive Sponsor `*`: 
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`:
- Design Lead:
- Eng Lead:
- VA Web Comms Partner: 
- VA Contact Center Partner(s): 
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):
- Front-end Engineer(s):
- Back-end Engineer(s):

`*` = approval required for launch

## Resources and Documentation

- Discovery and Research
- Technical Documentation
- Product specs
- Design
- Roadmap
- ATO documentation

### How to access in staging
- Link:
- Password protection info:
- User authentication info:

### Screenshots
#### Before
#### After
