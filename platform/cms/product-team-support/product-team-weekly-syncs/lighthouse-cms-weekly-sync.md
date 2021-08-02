# Weekly sync: Lighthouse / CMS

<details><summary>About this meeting</summary>

- Mondays 3-3:30pm ET 
- Meeting owner: Clarence Maeng
- Facilitator: Clarence Maeng
- Standing agenda: 
  - Migrations
    - From VAST
    - To Lighthouse
- Regular participants: Dave Conlon, James Costa, Desiree Eugster, Steve Wirt, Adam Stilton

</details>

<details>
  <summary>Parking lot</summary>
  
  ## Open Action Items:
  * Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse. - will need to be prioritized
  * Detailed services returning an empty list rather than a null statement. Any next steps? From a data integrity standpoint a non-issue but Adam would like to go back and clean-up at some point.
    * Noticing automated schema tests not happy so looking to prioritize at some point
  * From 5/10/21 - When a Vet Center editor archives a Vet Center CAP, CMS will keep the data in archived (unpublished) form. Related questions: 
    * CMS will push this content update to Lighthouse.
    * CMS issue for content lifecycle documentation for CAPs, including Lighthouse dependencies.
    * CMS to mockup what the push fo CAPs to LH will look like
  * From 7/12/21 - LH will need a list of name strings to be sent in order to map service name to internal service name; CMS will need to iron out naming convention in order to send** (also research what's the right path for the data)
 
</details>

## Monday, August 2, 2021
* How to uniquely identify the health services objects
  * LH to go through UX to validate whether to use machine name or non-sensical ID or a list that LH owns (what makes sense for different consumers)
  * Will then need to add unique identifier into payload from CMS

## Monday, July 19, 2021
* Clarification on workflow for VAMC user data request changes for facilities
  * Current process is to email api@va.gov (LH customer support team)
  * Suggestion to reroute users to VSSC = VAST
  * LH wants to own any data that flows through it
  * VAST data entries take an approved editor
  * VAST data changes take a while so encourage/remind VHA Digital Media to send requests in as early as possible (can take weeks)
    * Dave C to leverage "Did You Know?" type announcements to remind
* CMS health services
  * LH to discuss internally how to handle services
  * LH requesting a list of service names to be able to start stress testing (current names as they are) = can be found here:  https://prod.cms.va.gov/vha-health-services/export, doesn't have unique ID which we'll probably want to leverage as unique ID
    * Need to account for these changing (e.g. LGBT to LGBTQ+) as well as new
    * Q: is there a static record of these services?
    * A: in the CMS there's a "term_ID" which might be possible to use as a unique identifier (also, "Health Service API ID" is currently visible at https://prod.cms.va.gov/vha-health-services)
    * Would it possible to align LH UX and CMS UX on taxonomy? (let's target for after LH has a chance to review the list)
* VC CAP data
  * Waiting on how we determine lat/long that Dave is currently tracking down
  * LH looking for confirmation that CMS push approach is viable. A: yes, will take about a sprint for CMS to set up (doesn't include testing)

## Monday July 12, 2021
* CMS health services
  * API pushing per facility - implementation timing (for initial bulk and then ongoing)
  * LH needs to work on how to present information once received from CMS (into existing API or a new endpoint or its own API)
  * LH not quite ready to receive the data yet
  * Proposed timeline: CMS won't have complete data until ~Jan 2022
    * All facilities in review state by ~Oct 2021
    * Then need to review
    * Q: should we push sooner to ensure that the workflow works? for CMS we could start pushing fairly quickly (by removing for just COVID)
    * A: could do it as facilities go "live" (3 have completed recently); could try to match the cutover process; but no customer until we have all the facilities because the facility locator will most likely wait until every facility comes online
    * Eventually want to deprecate "Access to Care" and just use facilitiy health services
    * Dave: let's revisit in Q4 2021 to sync CMS and LH roadmaps/priorities
    * LH may want to wait until a current initiative is completed
    * **ACTION ITEM: LH will need a list of name strings to be sent in order to map service name to internal service name; CMS will need to iron out naming convention in order to send** (also research what's the right path for the data)
* CAPs
  * Endpoint details (sending all data always)
  * Whatever pattern we land on we may want to consider for VBA data when CMS is the source of truth for facility data
  * VC rollout is being slowed down to ~75 VCs by end of August 2021, the rest towards the end of the year, which buys some more time for CAP data
* What happens when a new facility/system gets created?
  * Currently the CMS doesn't assign a VISN, will need to be manually assigned
  * This is because there is no source for that info

## Monday June 28, 2021
* How LH's API should get data for CMS health services
  * Go with API bulk push or GraphQL pull because of amount of traffic
  * LH wants to stick with API path, GraphQL as a fail-safe option if traffic is too much. Currently not anticipating that traffic will be a problem.
  * **ACTION ITEM: LH to engage Swirt to get feedback when he gets back.** if we need to sync next week we'll schedule one-off
  * If the answer turns out to be go with GraphQL then feedback requested asap
  * **ACTION ITEM: CMS to sync with Core Team and both potential scenarios**
  * Currently a single API call per service, per facility; LH can handle one call per facility with all services bundled
* How to grab CAP facilities data
  * Contingent on getting lat/long: Dave is currently researching and until unstuck there is no known path forward
  * Dave C reached out to Dave Mazik, and he may know who recently trued up VHA location data
  * LH has some potential paths forward and is looking for validation
  * LH exploring best interface: recommending to keep restriction in place on existing end-point and set up a new end-point to handle new IDs
    * **ACTION ITEM: CMS Team to review and give feedback**
    * **ACTION ITEM: CMS to sync on this with Core Team**
    * Dave C exploring how to possibly leverage the CMS as the source of truth for VBA data
    * Timeframe = Q3 for data call, Q4 for possible implementation
    * CAP solution to potentially align with the VBA solution

## Monday June 14, 2021

* CAP data questions
  * Geolocation discussions continued
  * Workflow
    * Very first create call - does anything need to be different?

## Monday June 7 3pm ET

* CAP data questions
  * Sample data, Adam is requesting CAP payloads for Lighthouse team
    * ![image (6)](https://user-images.githubusercontent.com/60702623/121074690-343d6400-c7a2-11eb-97a4-846dd8b59290.png)
    * Should be identical to Facility fields
    * With a subset of data, what is that subset?
    * What's currently required? because VC is thin with what it collects (geolocation, name, address, hours)
      * LH to send CMS list of required fields
    * Health facilities geolocation comes from VAST, not sure how they true up their coordinates.
    * Is there a VA service that provides geolocation that we can leverage? possibly through mapbox's API (but would take a contract mod)
    * How do cemeteries locate?
    * Should Drupal care about geolocation? if so, how would we obtain and where would it be stored?
    * VAST and cemeteries have their own solution we think. James to investigate how NCA is obtaining.
    * Lat/Long is required for all facilities currently, cemeteries are most likely being generated by BISL.
    * What about Benefits facilities? Adam to look in to whether or not they're coming from the same tables (Sandy Tadeo's custom data vs. a source database).
  * Workflows
    * Publishing workflow data?
    * How the pushes to Lighthouse are going to be triggered in terms of the lifecycle for a CAP
      * Dave has a mural that maps out
      * Is there anything special for the very first create call? Steve = no, but if LH needs it to be different just let us know
        * Current endpoint doesn't allow for entities that don't exist
        * Details TBD, LH will let CMS know
* Potential GraphQL support
  * LH to explore if they can accomplish without the GraphQL approach
  * TBD
  * Some Program discussions around only supporting RESTful APIs

## Monday May 17 3pm ET

* VAST meeting outcome

## Monday May 10 3pm ET

Vet Center CAP data and questions
* When a Vet Center editor archives a Vet Center CAP, CMS will keep the data in archived (unpublished) form. Related questions: 
  * CMS will push this content update to Lighthouse. **ACTION: Needs CMS issue**
  * How long should CAP data archived in the CMS be available to Vets, and in what form? Should the CMS be the place where CAPs are gradually closed, or is that best managed by Lighthouse / Facility Locator?
(Questions for Dave).
    * Dave: It shouldn't be. Within one business day, it should disappear from Facility Locator. Facility Status in CMS may indicate impending closure, or closure. Facility Status can be "closed" but the CAP can remain published in CMS.
    * Archived in CMS = Deleted in Lighthouse. 
  * What happens if the CAP is archived, then re-activated with the same ID?
    * **Lighthouse should be able to re-open a CAP with the same ID.**
  * **Action: CMS issue for content lifecycle documentation for CAPs, including Lighthouse dependencies**.
  * When to kick off this cross-team epic for pushing CAPs into Lighthouse, and providing CAPs to customers like Facility Locator? 
    * Dave: We will have data from 10 Vet Centers at end of May, then 50. Where does this fit into Lighthouse priorities? 
    * Josh: When the data becomes available from CMS we'll want to make available via Lighthouse
    * Steve: We can mockup what the push will look like **Action: CMS issue, Sprint 33 (end of May) or 34.**

How might graphQL support the needs to supply service data to lighthouse? 
* [CMS GraphQL documentation](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/f4341c29ad8e998de1dac2fca0b749cdef15c923/READMES/graph_ql.md). 
* Example implementation: [Platform Build Pipeline info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/69833737d9fe22b8990bb987e7c50de13205c5d5/products/platform/cms-metalsmith-build/product-outline.md)
* Research question: are there advantages to using GraphQL over the existing push approach. 
* Follow-up questions: #cms-support channel in DSVA slack.

## Monday May 3 3pm ET

Triage for incorrect data sourced via Facilities API 
* First user was forward to api@va.gov last week.
* next sprint for CMS: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/5180

VAST meeting: was it rescheduled?
* May 12 
  * May lead to some longer term roadmaps for Lighthouse/CMS collaboration

CAP data
 - How long should archived CAP data be available to Vets, and in what form?
 - IDs. 12 characters max, referencing the "parent" Vet Center ID, and appending an increment up to 99. [vcparentID][cap][99]

(Time available) Questions on Real-time API access via Lighthouse for Accelerated Publishing initiative
 - Intro/background
 - Can Lighthouse proxy API requests to another backend, or must data always be pushed to Lighthouse?
 - Can Lighthouse provide keyless access for public data? (How do rate limits play in)

## Monday April 26 3pm ET

- If a Vet Center or VAMC staff finds an issue with the data coming through Facilities API, what should they do?  Multiple data sets... Access to care, Mental health care contacts, VAST. 
  - Triage document for data - who to contact for different data scenarios.  What is the right escalation path?
  - Is all the Vet Center data from VAST? 
  - Can we just send all editors to Lighthouse if they find issues? 

Outcome
 - Since Lighthouse is the "middle man" and has all the stakeholder data, it makes sense for users to reach out to Lighthouse if there are data issues
 - Send users to helpdesk system: 
   - To: api@va.gov 
   - Subject line: "Facility data"
   - Body: 
     - Something like: [Describe issue with facility data... which field is wrong and how should it be corrected. ] (the clearer the report, the faster the resolution) 
     - Facility ID and Name 
- Any updates / to do items from the VAST meeting?
  - No one from VAST was there. 
- CAP data
  - CAPs come and go regularly... it will not be a one-time data transfer.


- Action Items:
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review) - no update as of 4/12
  - Lighthouse to investigate pushing of services in bulk. (+11,000 if doing a bulk push of one service at a time, not an immediate need) - no update as of 4/12
  - Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse. - will need to be prioritized
  - Detailed services returning an empty list rather than a null statement. Any next steps? From a data integrity standpoint a non-issue but Adam would like to go back and clean-up at some point.
    - Noticing automated schema tests not happy so looking to prioritize at some point

## Monday April 19 3pm ET

* Adding support for VCNumber in Facility API, eg as `parent: "VC_0327V"`; or unique CAP ID, in the same way as Facility Status
  - What would Lighthouse need to accept? prioritize for 4/19/21
  - There's something in VAST (parent)
  - CMS challenge: finding the relationship between VCs (e.g. VCNumber = 327 for Greensboro Vet Center, Spindale Outstation, and Greensboro Mobile Vet Center)
  - Exists in VAST (is this the source of truth?) but not available in the Facility API (should it?)
  - Problem we're tring to solve = trying to find a data source to show parent/child relationship
    - Dave is unsure of the accuraby of the data in VAST so hesitatnt to use them as the sourve of truth
    - Don't know if it's acitively being used and maintained
    - Upcoming meeting with VAST may provide clarity
    - Don't put any effort into this until we have more information
    - Question in the short term: how should Lighthouse handle new CAP site IDs? newly CMS generated IDs
      - Lighthouse would need to set up a new push/pull system to include IDs
      - CMS would want to keep the structure of the payload as similar to what's existing for services
- Upcoming VAST meeting coordination
  - Scheduled for Wed, 4/21
  - Goal of the meeting: to understand what VAST collects and why so CMS can communicate to users cohesively; understanding how there may be gaps in the way the field uses VAST (specifically around mobile facilities; e.g. mobile bus location schedules)
  - Questions for VAST:
    - How do they turn on/off Facility closure info (temporary closure, permanent closure, planned)?
    - How can we leverage to teach the field to manage correctly?
    - Clarity on the VCNumber field, how it's being used, is it being maintained?
- Facility status disconnects
  - Lighthouse currently implementing a fix, should be resolved
  - CMS to manage what to do with that info
- Dave out next 2 Mondays
- Detailed services: discussions ongoing around fields being classified as null or not null
* Action Items:
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review) - no update as of 4/12
  - Lighthouse to investigate pushing of services in bulk. (+11,000 if doing a bulk push of one service at a time, not an immediate need) - no update as of 4/12
  - Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse. - will need to be prioritized
  - Detailed services returning an empty list rather than a null statement. Any next steps? From a data integrity standpoint a non-issue but Adam would like to go back and clean-up at some point.
    - Noticing automated schema tests not happy so looking to prioritize at some point


## Monday April 12 3pm ET

* Action Items:
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review) - waiting to check against VC
  - Lighthouse to investigate pushing of services in bulk. (+11,000 if doing a bulk push of one service at a time, not an immediate need) - no updates
    - Should be only by facility, anticipated load of calls is probably around 2,000
    - CMS would need some fairly heavy rework of its data push to group by facility
    - More than just COVID vaccine send anticpated once VAMC Upgrade is completed at the end of 2021
    - Do we worry about 11,000 or a smaller number now? At what point do we need to worry about bulk services?
      - Currently fine with just vaccine and maybe one or two more
      - CMS would like to be aware of any limitations as early as possible
      - CMS has some throttling ability to help mitigate
  - Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse. - will need to be prioritized
  - Detailed services returning an empty list rather than a null statement. Any next steps? From a data integrity standpoint a non-issue but Adam would like to go back and clean-up at some point.
    - Noticing automated schema tests not happy so looking to prioritize at some point
* Q2 radar
  * CAP hours and phone number and address and name (don't live anywhere outside of the CMS) - will be prioritized by Lighthouse for Q2
    - 10 VCs by mid-May (10 services each VC)
  - Another 60 VCs by ~July (10 services each VC) - will be prioritized by Lighthouse for Q2
  - Another 240 VCs by ~Sept (10 services each VC)
    - Only mapping services to main VCs, not CAPs
  * Facility health services
    * Vet Center
    * VAMC services
    * Caregiver only? (Ming has a list)
      - James: was looking into Caregiver services short-term (early 2022); Drupal long-term; not sure if this is the same data
      - Need to understand the justification in order to prioritize for both teams
* Adding support for VCNumber in Facility API, eg as `parent: "VC_0327V"`; or unique CAP ID, in the same way as Facility Status
  - What would Lighthouse need to accept? prioritize for 4/19/21
  - There's something in VAST (parent)
- Notes
  - VAMC Upgrade rollout feedback: some VAST data is inaccurate and the timeline/workflow to change is 180 days and inconsistent
    - VAST feeds VATS (source of data for VAOS)

## Monday Apr 5 3pm ET

Agenda/Notes

  - Updates
    - CMS is now pushing Covid Vaccine service apointment info to Lighthouse. 
    - CMS has a method to bulk push these services to Lighthouse.
    - Timeline to get CAP data populated = mid-May

  - Action Items 
    - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
    - Lighthouse to investigate pushing of services in bulk.   (+11,0000 if doing a bulk push of one service at a time.)
    - Pushing Vet Center CAP Would need a new push endpoint or a new nightly sync from Lighthouse.

   - Prioritization?  Additional service data, VetCenter CAPS ?

## Monday Mar 29 3pm ET

Agenda/Notes

- Action item review
  - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
  
- GraphQL/Renaming Fields 
  - Possiblity of doing a nightly pull through GraphQL for both Covid19 (in addtion to the push) and for the larger health services integration
  - Potential issues and the need for renaming/mapping on both sides
- COVID health service data
  - Vaccine service
  - All health services
- VAST
- New items
   - Sync issues:
      - Facility exists in VAST but is not visitable for veterans. (active is not the appropriate status  ie. 660QD)
      - Lovel does not exist in vast but is a health facilty.
      - Human workflow needed with CMS report for buisiness process if a facility is removed from VAST.  It should not be an automated delete or archive.
  
  Action Items 
    - Dave to send CAP workflow to CMS and Lighthouse teams (waiting on Michelle to review)
    - Lighthouse to investigate pusing of services in bulk.   (+11,0000 if doing a bulk push of one service at a time.)
    - Pushing Vet Center CAP Would need a new push endpoint or a new nightly sync from Lighthouse.

## Monday Mar 22 3pm ET

Agenda/Notes

- Action item review
  - Lighthouse team to complete UX review for field name changes
  - CMS team to complete 3 field name changes by sprint 28 (ends 3/26/21)
  - Dave to send CAP workflow to CMS team
- COVID health service data
  - Vaccine service
  - All health services
- VAST

## Monday Mar 8 3pm ET

Agenda/Notes

- COVID health service data
  - Vaccine service:
    - Lighthouse to tie up website piece; may be beneficial to push everything except the website piece for now
    - Currently stalled with VAOS work that's happening
    - CMS to make changes to field names by 3/26/21 (sprint 28)
  - All health services:
    - Pulling data all at once from CMS to Lighthouse nightly is recommeneded instaed of pushing because services don't change often
    - We do want the ability to push on demand though just in case
    - Does Dave have a list of meta detail for service? yes, but because Vet Centers is adding columns it hasn't made it to prod yet. Looking to lock down by this CMS sprint 27 (3/12/21)
  - VC CAPs ought to be prioritized above all others
    - CAP data doesn't exist anywhere so would be good to get in Lighthouse in order to distribute elsewhere
    - Long-term plan is to pivot Facility health service locator to a Service locator
    - Data capture for all facilities won't complete until the end of Sept 2021 because of VAMC migrations, but CAPs should happen before the facility service data
    - Might make sense to do a push because the frequency is greater. should this include CAP statuses?
    - Operating status versus existence needs to be fleshed out
    - Need to determine the right format for what gets captured in Lighthouse
    - Let's start with a sample of existing CAP data and compare it to existing Lighthouse data to get a sense of how we might want to integrate fields
- VAST

Action items

- Lighthouse team to complete UX review for field name changes
- CMS team to complete 3 field name changes by sprint 28 (ends 3/26/21)
- Dave to send CAP workflow to CMS team
