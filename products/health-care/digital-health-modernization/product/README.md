# DRAFT Product TL; DR
- This document reflects the evolving understanding of the product strategy lead (@aryeh-usds).
- It will be updated weekly or more through the course of discovery. 
- If you see something, say something! It's meant to be a conversation-starter (but will become a conversation-ender as we move toward execution). 

## Core Problems / Opportunities
### Premise
Many common veteran needs / journeys (ex., find a doctor -> get the appointment -> go there -> pay for it -> get the meds -> exchange follow-up comms with the care team) require transacting with several systems that you need to know are there, and how to find them, and how to log into them in order to use them successfully. 

### Owned by Our Team
1. Key components of a viable patient portal (ex., messaging, appointments, prescriptions, notfications) are being developed independently without a unifying vision, which will lead to [additional fragmentation](https://xkcd.com/927/) rather than the single, high quality UX that is our North Star
2. Over the next ten years, one VA facilitiy at a time will migrate off of the VA's in-house EHR (VistA) onto a commercial solution with Cerner, which if we do nothing will exacerbate veteran confusion and tool fragmentation because it is largely not interoperable with other health tools on va.gov (including myhealthevet)
3. The VA's core veteran-facing health product has high brand recognition, a great reputation and is massively successful — but it's something of an island, not well-integrated with the components being developed in (1) and not well-positioned to handle the looming Cerner issue in (2) 
4. Health content on va.gov is designed from the perspective of a how-to manual with the expectation the veteran will read, rather than an action-oriented product with the expectation the veteran will skim for the right call to action

### Affects Our Team
- Va.gov lacks a sticky "home" with consolidated notifications and easy access to high-probability needs, which will make it difficult to provide a cohesive experience relative to analogous products, like MyChart, in which billing and payments at a mimimum live in the same place as clinical functions. This problem is being worked on by several teams. 
- Key health-related tools have authentication challenges that make it difficult for veterals to get access, and / or to navigate digital health during the period of time in which not everything lives on va.gov (that period of time will be measured in "years" or "decades"). This is also being worked on by other teams. 

## Proposed Definition of Digital Health Modernization
- Veterans who visit va.gov can skim to find the right action, rather than read to understand what they might see after finding it

## Proposed High Level Strategies
Subject to iteration based on learning. Each step assumes the previous step went well. 

### No Matter What
- Continue improving single sign-on across health and benefits tools so long as they're semi-separate
- Continue creating a context-sensitive auth-d home concept on va.gov, to use as a hub for the individual person

### Strategy A: Action over Content
1. Optimize a single health page (ex., prescriptions) for call to action over content. A/B test against current state. Measure conversion funnel to good actions, and bounce rate between A and B. Tests hypothesis that modernization = action over understanding. 
2. Optimize a single health page for action over content (ex., secure message). Measure conversion funnel to good actions, and bounce rate between va.gov and myhealthevet equivalent. Tests hypothesis that people will be willing to use tools directly on va.gov. 
3. Integrate a single health page with Cerner (ex., secure message). Addresses feasibilty risk of one patient UX, two infrastructures. 
4. Do another vertical slice (ex., appointments) that adds net new value to va.gov. Addresses feasibility risk of using APIs that were developed a couple years ago for vets.gov. 
5. When the big four (appointments, meds, records, messages) all exist on va.gov, either embed them as components into MHV or sunset MHV as the health "hub" entirely 
6. MHV remains the long tail site for things that are not migrated over, until they are migrated or sunset

### Strategy B: Global Notifications as Integrator

## Proposed Performance Metrics

## Parking Lot
Things the PM acknowledges need to be managed eventually, but which he is punting on for now, in rough priority order.

- Transitioning large number of people away from myhealthevet credentials into something more secure
- Brand conflict between va.gov and myhealthevet
- "Awareness" (ex., places where vets learn, or re-learn, where to look for health resources in the first place)
- The long tail of 30+ apps and other forms of patient-generated data
- Permissions for caregivers (people share accounts for now, acceptable workaround, solve later)
