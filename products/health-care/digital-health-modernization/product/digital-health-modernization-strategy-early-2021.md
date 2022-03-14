# Digital Health Modernization Strategy
- This document reflects the evolving understanding of the Digital Health Modernization Team (Aryeh, Emily, Meg).
- It values readability over comprehensiveness.
- It defines the first steps to integrate health with other services and benefits Veterans access online. 

## Mission
- Make Veterans Affairs (VA) healthcare easier for Veterans to find and use online. 
- Ensure Veterans have easy access to online health irrespective of electronic health record (EHR) system employed by a given facility. 

### Why
- So that we can design for Veterans' needs that cut across "health" and "benefits," and may not fit neatly into distinct products.
- So that Veterans do not need to understand as much about the VA's org design in order to get care. 

## Current Initiatives
- Identity consolidation between My HealtheVet (MHV) and VA.gov in collaboration with Identity and MHV teams. 
- Make health tools more discoverable on VA.gov in collaboration with Content and Public Website teams. 
- Ship a VA flagship mobile app that contains key health tools, in collaboration with Mobile and MHV teams. 
- Create a council with the breadth of experience and power to shape and enforce a broader health modernization plan.  

### Why
- Pursues key problems (difficulty with auth across VA tools and difficulty using VA.gov for health tasks) that are valuable to Veterans per se **and** block successful execution of most identified modernization strategy options.
- Keeps our options open on how to reconcile VA.gov with MHV while we await needed input on Cerner API availability. 
- Give us runway to create a team and process with the breadth of experience and power to chart next steps (which will be all or some of expensive, disruptive and mutually-exclusive).

## Current Approach
1. Do the things in Current Initiatives (explained above).
2. While doing that, gather information on MHV's structure, process, incentives and stack (we need this info no matter what).
3. While doing that, stand up small teams to ship minimal appointments and prescriptions into the VA mobile app (this benefits Veterans, aids #3 and keeps us moving forward on demonstrating the VA can ship a viable patient portal while we think about where to go next). 
4. Present and refine recommended next steps with the health modernization council (recommendations could look like "allocate all of our effort toward an amazing mobile app" or "focus on cutting My Healthevet's lead time from six months to six weeks" — we won't know until we've done #2-5). 
5. Set clear KPIs based on the result of previous step. 
6. Build, measure, learn — ad infinitum. 

### Why
#### OCTO Priorities
- **Shield Veterans from needing to track VA software acquisition strategy:** Over the next ten years, VA facilities will transition from VA's in-house EHR (VistA) to a commercial solution from Cerner. We aim to minimize the impact of this transition by providing Veteran-facing interfaces that are EHR-agnostic, so that Veterans do not need to keep track of which facilities use which EHR.
- **Reduce Veteran-facing user experience (UX) fragmentation:** Key components of a patient portal on VA.gov (ex., messaging, appointments, prescriptions, notifications) are being developed without a unifying vision, which may lead to [fragmentation](https://xkcd.com/927/) rather than the single, high quality UX that is our [North Star](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/digitalmodernizationstrategy.pdf).

#### Veteran Research Insights 
- **Veterans and caregivers don’t go to VA.gov to do health tasks.** They have worked hard to learn the fragmented VA digital landscape, and they go directly to MHV because it enables them to complete most of their health tasks. Participants who did demonstrate or describe managing benefits on VA.gov did so in the context of disability or education benefits –– not health. 

> “[VA.gov] usually ends up kicking me to another website, so I go to the primary website to start with.” – P11-A

- **Participants struggled to complete health tasks whenever those tasks took them outside MHV.** On VA.gov, participants struggled to complete the appointment flow because the IA and content does not offer easily discoverable calls to action. 

> “And I don’t find any other option [to schedule an appointment]. Other than if I do it through Secure Messaging.” - P8-C, struggling to navigate the appointments tool page on VA.gov. 

- **Because participants did not use the secure sign-in option when signing into MHV, they experienced issues when they went outside of MHV to do tasks.**
Several key user journeys (ex., an entire doctor visit, which may include scheduling an appointment, getting reimbursed for travel — then later exchanging messages, refilling a prescription, and paying a medical bill) are distributed across several VA systems that have separate credentials and do not share information with each other. 

> "'Please sign in to view, schedule or cancel the appointment.'I am getting confused because I signed in twice already." – P2-B reading green CTA on appointments tool page on VA.gov after redirect from MHV. 

> "This is confusing because I would assume my balance would be on here....I have to end up having to call or go off my letters." – P8-A, referring to their pay.gov account. 

## Modernization Strategy Options
Strategies are not mutally-exclusive or collectively exhaustive. For example, current initiatives hedge and advance all of A, B and E. We aim to narrow this by June. 

### A: Evolve VA.gov slowly from content site into transactional product(s) by replatforming My HealtheVet 
Assumes rebuilding on VA.gov is cheaper and wiser than lifting and shifting My HealtheVet's stack (we have no evidence on this). largely analogous to eBenefits' migration strategy to VA.gov. 

1. Optimize a single health page (ex., secure messagae) for call to action over content. A/B test against current state. Measure conversion funnel to good actions, and bounce rate between A and B. Tests hypothesis that modernization = action over understanding.
2. Optimize a single health page for action over content (ex., secure message). Measure conversion funnel to good actions, and bounce rate between va.gov and myhealthevet equivalent. Tests hypothesis that people will be willing to use tools directly on va.gov.
3. Integrate a single health page with Cerner (ex., secure message). Addresses feasibilty risk of one patient UX, two infrastructures.
4. Do another vertical slice (ex., prescriptions) that adds net new value to va.gov. Addresses feasibility risk of using APIs that were developed a couple years ago for vets.gov.
5. When the big four (appointments, meds, records, messages) all exist on VA.gov, begin to move the bulk of Veterans over (see Go to Market for details)
6. MHV remains the long tail site for things that are not migrated over, until they are migrated or sunset

### B: Use ubiquitious single sign-on and user-centered notifications to create user flows across products without necessarily moving them
This would be a good strategy if we feel we can do the most good for the most Veterans by getting the ~3MM Veterans who use VA.gov but not MHV, access to online health tools and care. Assumes the barrier is awareness, not interest

1. Add a global notifications affordance for authenticated users on VA.gov
2. Send high-priority global notifications via VA Notify and / or Vet Text for people not authenticated
3. Surface high-value needs for action on MyVA
4. Integrate with MHV and My VA Health to ensure key info uses these global notifictions
5. Link back to MHV or My VA Health as appropriate given notification origin
6. Iterate on the balance of what lives in VA.gov, vs distinct portals, continuously based on user feedback
7. Initiate conversations on the future of MHV vis-a-vis VA.gov when we have gotten down to a small handful of facilities still using VistA (years from now)

### D: Iterate on My HealtheVet in place to ingest Cerner data
This would be a good strategy if we believe that My HealtheVet's tech stack would allow it to happen (and could be the least disruptive option for Veterans and for the MHV team). 

1. Migrate MHV accounts into something that works with single sign-on on VA.gov
2. Alter MHV navigation and taxonomy to be closer to the rest of VA.gov
3. Lift and shift MHV into health.va.gov
4. Iterate in place

### E: Focus all effort on the mobile app to demonstrate a Veteran experience only the VA could deliver
This would be a good strategy if we believe we need to focus our resources in order to demonstrate ANY viable portal, rather than trying to make two. Or if we think mobile is simply more useful to more Veterans. 

1. Build messages, appointments, presecriptions and health records into the Flagship Mobile App, iteratively, after the app goes live
2. Ignore VA.gov except to point to the app
3. Measure / iterate against usage and satisfaction — particularly compared to MHV and Cerner

## Risks and Mitigations
Only surface big problems here. Risks in order of @aryeh-usds's judgement of severity at time of writing.

### Viability
1. Is OCTO set up logistically and financially to onboard and pay the staff and / or contractors we'll need to do this work — and to coordinate among all the various teams that ship to VA.gov? Smart play here may be to address feasibility risk first, which will surface staffing needs, which we can evaluate here.
  - Mitigation: Propose very small changes at first, requiring only a small number of people / teams to get to yes. Grow the speed and scale slowly enough that we can evolve a structure which manages it successfully.  
2. Can we identify a long-term owner of this initiative, which will last longer than the term of any USDS employee?
3. Do we have evidence, or a way to get evidence, that doing this will dissuade anyone of letting Cerner take over the VA's patient portal? 

### Value
4. Some strategies propose massive expensive – in time, money and disruption to Veterans – but may add little immediate value to Veterans given overall contentmeny with MHV. 

### Feasibility
5. Engineering is a blind spot. There are many ways to handle making MHV and VA.gov feel, or actually be, more cohesive, that could eventually look the same to end users. However they could differ by many person-years of effort, and by specific technical risks. This is probably the first risk to tackle because it will inform both the value risk (by telling us which parts of the system are least problematic to change) and viability risk (by telling us something about how many people / how much time is the floor for making progress).

### Usability
6. Major concern on the Clinician side. We know little of their world or how changes might affect them. Ultimately Veterans get value from this tech stack because it connects them with Clinicians. This is a big piece of the puzzle we should explore.
7. Are there known statutory, regulatory, policy and / or guidance-based reasons transactional notifications (ex., you have a new secure emssage) must be opt-in instead of opt-out? (They are currently opt-in)

## Outcomes
Quarter-baked. 

- An actual patient health outcome
- Number of clicks / screens / logins required to do a very common user journey (ex., login -> request appointment -> ... -> anything that needs to be paid to or by the Veteran has been paid)
- Active users of any authenticated health affordance
- Satisfaction with a specific tool compared to MHV and / or Cerner
- Proportion of MHV users who could follow a link into VA.gov (or the flagship app) without needing to login again

# Appendix

## Problems with this Approach / Document / Strategy
- Goals are fuzzy per strategy. What are we really trying to do, here, for Veterans? 
- Does not lay out link between insight -> constraint -> approach in a way a business analyst might (product strategy lead believes that would be jousting at windmills to try given the complexity of the domain, though there has been demand for this)

## Parking Lot
- Brand conflict between va.gov and myhealthevet
- "Awareness" (ex., places where vets learn, or re-learn, where to look for health resources in the first place)
- The long tail of 30+ apps and other forms of patient-generated data
- Permissions for caregivers (people share accounts for now, acceptable workaround, solve later)

### Strategy C: Focus on Providers (deprecated as too far off-mission)
This would be a good strategy if we care most about Veteran health outcomes, and the best way to ensure that is increasing the availability and quality of direct contact between Veterans and Providers. 

Quarter-baked. This assumes we can do the most good for Veterans by increasing engagement with Providers by encouraging non-appointment interactions (ex., chat) and / or increasing Provider appointment throughput by removing technological barriers to doing Caregiver things instead of computer thing. Almost certainly mutually-exclusive expenditure of effort and focus to the directly Veteran-facing strategies, if we dig in here. Aryeh is doing some back-channel research into this. 

### Current Best Guess of What Will Actually Happen
2. Begin transition MHV credential to ID.me and Login.gov (will take years to finish, perhaps months to get to the first real users). 
3. Begin to modify VA.gov content to privilege calls to action over explanation (will take months, but will deliver tiny changes often — will lead to changes to page structure, site navigation and eventually flows / IA). 
4. Ship minimal secure messaging with flagship mobile app (already happening). 
5. Contingent on API availability, integrate secure message with Cerner so Veterans can message in any VA health secure message product for any facility (Veterans use secure message as a workaround to solve appointment and prescription problems already anyway). 
6. Here we may learn that provider tools are no longer "cool opporutnity for eventually," more like "pay attention to this right now or break the provider UX so badly it will cripple health care delivery"
7. Here be dragons. This is where we should know a lot more about whether or not Cerner takes over VA's patient portal. Let's say they do NOT:
8. Stand up a team or teams to integrate Cerner data dowloads, appointments and prescriptions into existing VA products. This will almost certainly involve a ton of un-glorious work evolving MHV's stack and team process. 
9. Harmonize MHV's style and nav with VA.gov
10. Lift and shift from Veteran perspective
11. Continue down the long path of getting MHV and VA.gov's stacks in closer alignment


## WIP
### Comparison Placeholder
This section needs a matrix comparing strategies and seeing where they do or not not intersect with constraints. Prototype below. 

| Strategy | Constraint 1 | C2 | C3 | C4 | C5 | C6 | 
| -- | -- | -- | -- | -- | -- | -- |
| A | + | + | - | - | + | + |
| B | - | + | - | + | + | - |
