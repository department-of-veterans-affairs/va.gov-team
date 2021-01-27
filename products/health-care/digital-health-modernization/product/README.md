# Product TL; DR
- This document reflects the evolving understanding of the product strategy lead (@aryeh-usds currently).
- It will be updated weekly or more through the course of discovery.
- It values readability over comprehensive explanations (ex., we start with constraints without explaining why comprehensively).
- It assumes we begin now and "end" when secure messaging, prescription refill, records download and appointments are all discoverable, accessible and usable on a modern VA-owned platform. 
- It is intended as the first "phase" of creating a new health product which is expected to exist indefinitely and will continue to iterate. 
- If you see something, say something! It's meant to be a conversation-starter.

## Constraints
### OCTO Priorities
1. **Beat Cerner to Market:** Over the next ten years, VA facilities will transition from VA's in-house EHR (VistA) to a commercial solution from Cerner. We aim to minimize the impact of this transition by providing Veteran-facing interfaces that are EHR-agnostic, so that Veterans do not need to keep track of which facilities use which EHR.
2. **Replatform My HealtheVet onto VA.gov:** The VA's core veteran-facing health product (My HealtheVet) is visually and functionally distinct from components being developed in (1) and the Cerner systems mentioned in (2), raising the risk of additional fragmentation.
3. **Reduce Veteran-facing tool fragmentation:** Key components of a patient portal on VA.gov (ex., messaging, appointments, prescriptions, notifications) are being developed without a unifying vision, which may lead to [fragmentation](https://xkcd.com/927/) rather than the single, high quality UX that is our [North Star](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/digitalmodernizationstrategy.pdf).

### User Research Insights 
4. **Most Veterans don't think of VA.gov as a health tool:** Health content on VA.gov is designed as a how-to manual with the expectation the Veteran will read, rather than an action-oriented product with the expectation the Veteran will skim for the right call to action.
5. **Veterans who do think of VA.gov as a health tool can't find things on it:** IA on VA.gov makes it difficult to discover the relevant health content, call to action or function. 
6. **Veterans who think of VA.gov as a health tool and can find things on it probably can't log in:** Several key user journeys (ex., an entire doctor visit, which may include scheduling an appointmnet, checking in, answering questions, getting reimbursed for travel — then later exchanging messages, renewing a prescription, reviewing a claim and paying a bill) are distributed across several VA systems that don't point to each other, can't be accessed from one another and weren't designed together. 

### Logistics
- **VA.gov is getting big, fast:** Some limitations from VA.gov's beginnings as a content site (ex., no sitewide notifications) may make it difficult to capitalize on the benefit of colocating Veteran-facing tools on VA.gov. Change control on such a big site will be a challenge. Teams own functional areas rather than designing arond user journeys per se, which presents a variety of challenges but notably runs the risk of tool duplication on our own product. These things will all change very slowly; we need to work around them, assuming they will remain true. 

##  Product Strategies
Subject to iteration based on learning. Each step assumes the previous step went well. Strategies are in no particular order and may or may not be mutually-exclusive due to resource constraints. All strategies assume we will work with the Identity team to transition Veterans with My HealtheVet credentials onto something that works with VA single sign-on. 

### Comparison Placeholder
This section needs a matrix comparing strategies and seeing where they do or not not intersect with constraints. Prototype below. 

| Strategy | Constraint 1 | C2 | C3 | C4 | C5 | C6 | 
| -- | -- | -- | -- | -- | -- | -- |
| A | + | + | - | - | + | + |
| B | - | + | - | + | + | - |

### Strategy A: Retrofit Content Pages into Action Pages
This would be a good strategy if OCTO leadership believes strongly we need to act quickly and conservatively to beat Cerner to market on VA.gov. Assumes rebuilding on VA.gov is cheaper and wiser than replatforming My HealtheVet's stack.

1. Optimize a single health page (ex., prescriptions) for call to action over content. A/B test against current state. Measure conversion funnel to good actions, and bounce rate between A and B. Tests hypothesis that modernization = action over understanding.
2. Optimize a single health page for action over content (ex., secure message). Measure conversion funnel to good actions, and bounce rate between va.gov and myhealthevet equivalent. Tests hypothesis that people will be willing to use tools directly on va.gov.
3. Integrate a single health page with Cerner (ex., secure message). Addresses feasibilty risk of one patient UX, two infrastructures.
4. Do another vertical slice (ex., appointments) that adds net new value to va.gov. Addresses feasibility risk of using APIs that were developed a couple years ago for vets.gov.
5. When the big four (appointments, meds, records, messages) all exist on VA.gov, begin to move the bulk of Veterans over (see Go to Market for details)
6. MHV remains the long tail site for things that are not migrated over, until they are migrated or sunset

### Strategy B: Build off MyVA
This would be a good strategy if we feel we can do the most good for the most Veterans by getting the ~3MM Veterans who use VA.gov but not MHV, access to online health tools and care. Assumes the barrier is awareness, not interest

1. Add a global notifications affordance for authenticated users on VA.gov
2. Send high-priority global notifications via VA Notify and / or Vet Text for people not authenticated
3. Add a single health use case (likely new Secure Message)  — at first this links back to MHV
4. Do qualitative user research and surveys on this experience — see if what we learn is "this would be less annoying if it didn't take me out of VA.gov)
5. If we hear the above, build out a health home on VA.gov 


### Strategy C: Focus on Providers
This would be a good strategy if we care most about Veteran health outcomes, and the best way to ensure that is increasing the availability and quality of direct contact between Veterans and Providers. 

Quarter-baked. This assumes we can do the most good for Veterans by increasing engagement with Providers by encouraging non-appointment interactions (ex., chat) and / or increasing Provider appointment throughput by removing technological barriers to doing Caregiver things instead of computer thing. Almost certainly mutually-exclusive expenditure of effort and focus to the directly Veteran-facing strategies, if we dig in here. Aryeh is doing some back-channel research into this. 

### Strategy D: Improve My HealtheVet in Place
This would be a good strategy if we believe that My HealtheVet's tech stack would allow it to happen (and could be the least disruptive option for Veterans and for the MHV team). 

1. Migrate MHV accounts into something that works with single sign-on on VA.gov
2. Alter MHV navigation and taxonomy to be closer to the rest of VA.gov
3. Lift and shift MHV into health.va.gov
4. Iterate in place

### Strategy E: Ignore VA.gov to Focus on Mobile
This would be a good strategy if we believe we need to focus our resources in order to demonstrate ANY viable portal, rather than trying to make two. Or if we think mobile is simply more useful to more Veterans. 

1. Build messages, appointments, presecriptions and health records into the Flagship Mobile App, iteratively, after the app goes live
2. Ignore VA.gov except to point to the app
3. Measure / iterate against usage and satisfaction — particularly compared to MHV and Cerner

## Major Risks
Only surface big problems here. Risks in order of @aryeh-usds's judgement of severity at time of writing.

### Viability
- Is OCTO set up logistically and financially to onboard and pay the staff and / or contractors we'll need to do this work? Smart play here may be to address feasibility risk first, which will surface staffing needs, which we can evaluate here.
- Can we identify a long-term owner of this initiative, which will last longer than the term of any USDS employee?
- Do we have evidence, or a way to get evidence, that doing this will dissuade anyone of letting Cerner take over the VA's patient portal? 

### Value
- Currently our approach is more about preserving (one good place on web to do health transactions) than adding value. The biggest risk here is that's very abstract to users, who may need a carrot to deal with the stick of us moving their cheese. Designing around user journeys may be the carrot. The carrot may be too big for this first phase of work. 

### Feasibility
- Engineering is a blind spot. There are many ways to handle making MHV and VA.gov feel, or actually be, more cohesive, that could eventually look the same to end users. However they could differ by many person-years of effort, and by specific technical risks. This is probably the first risk to tackle because it will inform both the value risk (by telling us which parts of the system are least problematic to change) and viability risk (by telling us something about how many people / how much time is the floor for making progress).

### Usability
- Major concern on the Clinician side. We know little of their world or how changes might affect them. Ultimately Veterans get value from this tech stack because it connects them with Clinicians. This is a big piece of the puzzle we should explore.

## Proposed Metrics
Quarter-baked. 

- An actual patient health outcome
- Number of clicks / screens / logins required to do a very common user journey (ex., login -> request appointment -> ... -> anything that needs to be paid to or by the Veteran has been paid)
- Active users of any authenticated health affordance
- Satisfaction with a specific tool compared to MHV and / or Cerner
- Proportion of MHV users who could follow a link into VA.gov (or the flagship app) without needing to login again

## Parking Lot

- Brand conflict between va.gov and myhealthevet
- "Awareness" (ex., places where vets learn, or re-learn, where to look for health resources in the first place)
- The long tail of 30+ apps and other forms of patient-generated data
- Permissions for caregivers (people share accounts for now, acceptable workaround, solve later)
