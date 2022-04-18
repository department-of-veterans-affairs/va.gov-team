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


## Monday, April 18, 2022
* Sitewide crew org updates
* System name with facility push details
  * going with plain language common name
  * waiting for LH to be ready to receive
* Health connect phone number push details
  * to be sent at the same time as facility but with system data
  * CMS recommendation: always send phone numbers in the same structure
  * similar to mental health, will be sent in a single string
  * CMS most likely moving to two structures: one slimmed down, and one more beefed
* VC CAP new push endpoint
  * CMS and LH ready to implement post v1 rollout

## Monday, April 11, 2022
* This LH team is going to do Forms API.   Woot!
* Pushing Vet Center CAP would need a new push endpoint or a new nightly sync from Lighthouse.  Post V1
   * need to push lat lon.  Will be ready most likely by end of this sprint.  (admin only for moving pins)   
   * default services? Not defined yet how to handle.  Awaiting feedback Jessica.
* System Names  (official or plain)  Consumer investigation from Lighthouse may direct this decision. 
* healtth connect phone number location in the payload.  (swirt and Adam to follow up offline, and Dave has thoughts on this too)

## Monday, April 4, 2022
* general updates (servicelocations, healthserviceAPI, VA health connect, facility urls, Cerner)
* LH close to a QA-like environment this week, timelines will be clearer after that
* facility url: CMS team to work on data structure agreed to
* Cerner data
  * what health record is being used at which system (3 states = Vista, Cerner, or almost Cerner)
  * CMS could add to facility push but Dave has reservations
    * OCTO-DE would prefer Veterans to go through VA's portal, not Cerner's
    * may be some value for other systems to be able to differentiate
    * would need to make a distinction between Cerner and specific Vista instance
    * health care teams may be interested
    * LH to validate if there's a consumer desire before CMS connects to LH
    * data is currently available in the CMS
  * doesn't add any benefit to LH today, might augment Vista info
* VA health connect phone
  * LH to add to v0
  * 24 reload, details on how to send from CMS to LH
  * CMS to provide LH IDs of facilities with health connect numbers (existing 3 VISNs: 2, 8, 17)

## Monday, March 28, 2022
* `servicelocations` (8017)
  * LH in a holding pattern until latency issue is resolved
* `healthserviceAPI` (8019)
  * same boat
* VA health connect...
  * rolling out VISN by VISN (separate number per VISN)
  * can VA Health Connect go into v0?
  * LH: possible = yes; will push forward to implement
  * LH to think through what makes most sense for push from CMS, update daily instead of real time
  * Future state = editors in the field will be updating these phone numbers, want to think through validation and timeliness
  * Added to existing status push (payload per facility whenever operating status changes)
    * Revisit when thinking through mental health numbers so as not to block this
    * CMS to provide LH IDs of facilities with health connect numbers (existing 3 VISNs)
* COVID/facility urls: potentially appending to overlay process, looking for status
  * CMS ?: what should it be attached to?
    * COVID url: in service structure
      * would be bespoke
    * Faciltiy url: at the top level, e.g. status push
    * Dave to talk through with joint task force / JHL in regards to a comms strategy

## Monday, March 21, 2022
* `servicelocations`
  * CMS working on defining hours to normalize the data and put in more structured format (e.g. 9:00am vs. 9am)
  * could be blocked by hours details, hoping to resolve by 3/25
  * LH fine going the path of least resistance as they aren't ready to recieve yet anyway
  * locations also need to be added
* `healthserviceAPI`
  * LH not able to consume anything non-COVID yet
  * nothing tested yet for full load
* where facility hours source of truth ought to be?
  * large facilities hours are often listed as 24/7 but smaller facilities without ERs may need to define "core hours" or "business hours" (e.g. 9-5)
  * VAST does not have additional hours fields, but has facilities hours with an extra field for "operational hours" with additional notes/special instructions (text string that may include business hours are 9-5)
  * could CMS become a source of truth for these?
  * what does the current data describe? to define the subset
  * CMS to define by service
  * LH open to this but would like to define data definitions that would help with their additional notes/special instructions field
  * research around CMS field definitions (business hours, operational hours, service hours, core hours, emergency, urgent, etc)
  * possibly to explore in Q3
  * VAST POC: Kelly, James and Dave would know
* expected timelines for non-V1 specific items (e.g. `field_va_health_connect_phone`, mental health phone transition)
  * LH V1 initial estimate was end of Q1, not currently tied to a specific roll out date
  * `field_va_health_connect_phone` as candidate for next prioritization
    * Michelle verifying timeline from VISN perspective (guess is end of March), will potentially drive prioritization outside of LH V1
  * then mental health phone transition for CMS to be SSOT
  * could LH push health connect phone outside of V1? less convenient but possible
  * CMS: relatively minor to stop pushing as is and expose to editors, or bring in from another source
* possible scaling back the on-demand nature of overlay updates
  * LH to connect with Dave
  * service may be ok but operating status may need more urgency
* VAOS/mobile app issue
  * LH looking for other teams that may have info, CMS currently doesn't interact with VAOS

## Monday, March 7, 2022
* `servicelocations`
  * no updates
* `healthserviceAPI`
  * still in LH court, working through latency issues
  * from CMS: if a term gets updated it will push all relevant services and then all relevant facilities (ready by the end of this week)
  * Q: what if a facility is closed? will it send delete updates? A: yes, already in place; orphaned zombies should be accounted for with this
* `field_va_health_connect_phone`
  * no updates, available in the CMS just not pushing to LH yet
  * LH = post V1 (late March) to be able to receive it
  * Michelle and Facilities team looking for this functionality to direct VISN 8 to LH for source of truth
* geolocations and pins being misaligned update
  * Michelle to update in CMS KB
* how Facility Locator connects with LH
  * Dave C and Dave M to bring forward a larger convo with Unauth / Platform on how to best connect
  * Would like to glean from Lance his framework

## Monday, February 28, 2022
* `servicelocations` fields
* `healthserviceAPI`
  * all services are ready to push without locations data
  * LH hoping to have a solution to be ready to receive soon (possibly this week)
* VBA service - was going to validate with VBA if "pension" should be in the data
  * reach out to office of field operations to see if it needs to be deprecated from LH or we need to add data
  * no response yet
  * verified that LH gets lat/long from Sandy Tadeo's database and not geoBisl
* Process for map thumbnail misalignments (one offs)
  * Best way to make requests: posting in slack currently; LH to get back with best intake method for requestors to do directly
  * currently based on lat/long from LH which they get from multiple sources
  * possible batches and timing questions
    * "GSSC bands get updated on the last Saturday of every month. GSSC aims to integrate that data around the 15th of the following month, but recently it has been coming about a week later."

## Monday, February 14, 2022
* `servicelocations` fields. CMS projecting to fill out in sprint 52 (ends 2/25)
  * [8017](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8017) - identify sample data to use in order to validate with LH
  * LH: not critical for V1
* `healthserviceAPI`
  * CMS keeping the name we're already sending the same; LH validated ok
  * Service identifiers will be entered and sent from CMS to LH
  * CMS to stop filtering on COVID and start sending everything
  * LH to reach out once ready to recieve, CMS to implement full send
  * [8019](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/8019)
* `field_va_health_connect_phone` refinement
  * CMS ready to start writing the push for this (each facility will have this number attached)
  * mid-March timeline for LH to be ready to address
* VBA service - was going to validate with VBA if "pension" should be in the data
  * reach out to office of field operations to see if it needs to be deprecated from LH or we need to add data

## Monday, February 7, 2022

* `servicelocations` fields in detailed service payload. LH looking for confirmation when to expect.
  * detailed service block for COVID, didn't fill out the full schema, specifically the node for service locations
  * CMS currently sending: published, name, national description, physical description, APIid, appointment lead in, phones, referral
  * [slack thread with context](https://dsva.slack.com/archives/C0FQSS30V/p1610129900071700)
  * CMS medium LOE, does LH need for v1 or post?
  * CMS to project filling out in sprint 52 (ends 2/25)
* Is it worth solving this user story (via help desk) in the interim? "As a VAMC staff, i want to know who to contact if i see an issue with the services that are listed for my facility in the facility locator."
  * LH can own intake for these questions before next version of FL
  * LH to update [KB article](https://prod.cms.va.gov/help/vamc/how-do-i-update-my-vamc-facilitys-basic-location-data)
* Status of healthserviceAPI
  * CMS: once numerated list is received from LH, can add it
  * naming it `serviceId`, CMS to rename `healthserviceAPI` to match
* `field_va_health_connect_phone`
  * CMS should be able to push by end of February
  * Is it ok to send with Facility Status payload? A: should be fine, as long they're distinct elements
      * expectation that this wouldn't change very often
* VBA service
  * FL is pulling "pension" which doesn't happen to line up with any of the existing services
  * Currently returns blank, not even a column in the data
  * Need to go back to VBA to validate if this is something that should be in the data
* Geo coordinates off
  * LH to group all together and send monthly to FL
  * timing TBD, normally roll out around 21-23 of the month

## Monday, January 31, 2022
* Status of healthserviceAPI
  * LH wrapping up setting up numerated list
  * CMS working on this sprint: list of service identifiers to be added in; handling for exceptions
    * need to determine how it's going to look in the push (field prefix - key value pair)
    * LH: it can go anywhere in the existing service structure, LH will be calling it serviceId (in CMS = healthserviceAPI but can rename to match): #7558 (not currently in sprint 51)
    * can't push non-COVID services, but LH can accept new field
    * LH doesn't need CMS changes in place to launch but will need it for work to key off of (testing and so forth)
  * LH to ping CMS once first portion is in place
* VA Health Connect number "field_va_health_connect_phone", timing for CMS and LH changes
  * how will LH get this data?
  * is it just the phone nubmer? A: yes
  * would it be reasonable to host this with the other number? or are we anticipating other things that would point to a new object?
    * A: unsure because discussions around branding still occuring; Conlon would like to flesh out the plan in order to determine
    * LH would like to explore in order to help shape this data long-term
  * what kind of timeline is desired to get live?
    * A: will make it easier on some existing products (end of March for next VISN that will need, VISN 8 currently has a hack in place - FE to surface this number on correct facility, not like Orlando - which has it correctly stored)
  * LH V1 go-live project = 2/25
  * LH would prefer to nail down any additional data that may want to be pushed with this in the future (explore between now and end of March)
  * do we want to be pushing CMS Cerner data to LH? (which EHRM a facility is connected to) A: not yet
    * LH to explore if this may be useful
    * easy for CMS to add at any time
  * would LH want to know what system each facility is a part of? health teams currently requesting
    * double counting facilities currently occuring between VBA and VHA

## Monday, January 24, 2022
* healthserviceAPI field updates
  * LH list received, CMS set to move forward
  * CMS timeline: still need to scope out how to implement (whether phased or all at once), will be at least another sprint before LH is able to receive (2/8 = LH end of sprint)
  * VCs have not been talked about yet, don't need to quite yet (CMS), LH should be good to support any future expansion
  * would be it fair for whoever is owning the services taxonomy to use the pattern that LH has established when new services get added? what should be the process that new ones are derived? through LH UX?
    * CMS to lead any recommendations with LH having first right of refusal
    * need = governance doc describing process
* CAPs
  * LH planning to treat as its own type (VAMC CAP vs VC CAP)
  * how facilities are structured = VC, Outstations, CAPs (can tell if the ID has OS at the end - outstation)
  * should we break out Outstations? classification = null for all VCs, "outstation" is part of the name; there may be a value to breaking them out to help users understand hierarchy
  * CAP hours are not being pushed to LH currently (CAPs in general, are waiting for lat/long)
  * CMS/LH discussion needed on CAPs
* VA Health Connect number "field_va_health_connect_phone"
  * direction coming from Charles to include (Dec 2021)
  * phone number will be rolled out for each health care system, getting put into CMS this sprint (by 1/28)
  * would like to be pushed to LH so that it's available for applications like Facility locator to be pulled into the FE
  * next set of facilities that will be going live with these = end of March
  * LH will probably just append to existing facilities

## Wednesday, January 19, 2022
* on CMS side: create management for existing field (not a new one, just admins can add, required) the healthseviceAPI field that will be leveraged as the unique identifier. the list of curated machine names will come from Lighthouse UX folks for ones that don't exist yet.
  * audiology, cardiology, dermatology, gastroenterology, gynecology, mentalHealth, ophthalmology, optometry, orthopedics, primaryCare, specialtyCare, urology
* the list currently has ~100 services
* Lighthouse UX to provide list by 1/21/22
* may need to flesh out edge cases (when a service breaks out into multiple)
* when new services are spun up, what is the process? CMS to ping Lighthouse for now, or CMS to come up with a pattern
  * concern around knowledge share and context for any possible staffing changes with Lighthouse UX
  * CMS to ask LH, LH to recommend a name, CMS to approve
  * how often are new services spun up? A: depends, intent is to do them in chunks (e.g. currently doing VBA services)
  * what's the timeframe from "need a new service" to it getting spun up? A: probably once a quarter at most
  * lift on LH should be manageable for new service requests
* CMS recommending to also push the term ID to help debug (would only be passed between CMS/LH)
* healthserviceAPI field probably won't get replaced (being leveraged for wait times by FE)
  * if they're going to eventually match should they still exist in duplicate?
  * ~15 will have wait time scores, the remaining ~85 won't
  * ideally would crosswalk existing data with new service machine names (not touching existing)
  * where did the original ATC ones originally come from? A: not sure, possibly LH UX (they blessed off the COVID one)
  * if we populate for all services, will that break the FE widget? Dave: FE should account for this (no wait time data for some services) if it doesn't already. will need to test this
* CMS can't make required until values are populated
* LH has all the current service names, looking to populate list by end of this week
* Ongoing governance meeting in regards to service strategy (Jessica - VC and JHL - VHA, looking to add VBA) - every Wednesday
  * in an effort to standardize taxonomies
  * want to lean into patient friendly names

## Monday, January 10, 2022
* Timing of Lighthouse v1 confirmation
  * preliminary date of late Feb but dependent on service identifier path forward
* Identifiers for detailed service entries
  * looking for Dave's input on using a term ID and publishing a table through the portal that shows the mapping
  * service identifier per service type instead of term ID: recommended from LH
  * CMS has a "health service API ID" that might suffice (comes from LH as opposed to access to care)
  * because the terms are maleable, what happens when things get split (e.g. smoking cessation and addiction)
    * LH recommendation: the old service gets spun down and replaced with two new services
    * what is the promise we would be making when returning search queries? TBD
      * bc if we wanted to return off of old service search after split, this recommendation wouldn't work
  * where do we burden consumers vs. stakeholders vs. LH vs. CMS
  * optics component (e.g. LGBT vs. LGBTQ+)
  * LH: interested in impact on consumers, superfluous ID doesn't serve them without a lookup
    * what other options would reduce the load on LH consumers?
    * string matching (did you mean?) instead of maintaining history
    * possibility of historical reference/lookup?
  * as long as names are consumable enough for API users
  * change management around when name of service changes
    * e.g. Veteran connections and community engagement
    * naming is highly volatile (anticipating VBA stuff)
    * how do we notify folks when things change?
  * is it worth starting to track synonyms?
  * current state for when a service gets split out: it depends on what the impact is on data contributors (data call to clean)
  * LH will huddle internally to discuss and we'll try to come to a firm decision at 1/17/22's sync
* Status in facility locator that doesn't match what's in the CMS (didn't get to)

## Monday, January 3, 2022

* Timing of Lighthouse v1
  * Aiming for February, not locked down yet
  * LH will confirm by mid-day tomorrow
* Radius functionality for lat long being actively worked on by LH and will be availble before v1 (possibly end of current sprint)
* Identifiers for detailed service entries
  * have discussed in the past adding a resource id or machine name field
  * on hold for a UX decision on the LH side but no preference determined
  * looking for consistency (e.g. diabetes vs. diabetic care)
  * how do you connect when they get updated?
  * don't want the list to change
  * need somthing that's user facing and will not change (truncated text string or service ID-123)
  * possibly using the term ID, but not very front facing so a translation to what this actually means would be needed
    * where do we connect the meaningful text string to the one that doesn't?
    * unless we agree on a set of text based terms
  * either CMS needs to control a non-changing text string identifier for a service
  * or send a text ID and LH maps
  * or just use term ID throughout and publish a table through the portal that shows the mapping (easiest to keep in sync)
    * lookup list to also be stored in the CMS
    * LH consumes a possible name change registry
    * if someone searches on a term that has changed the return wouldn't be exact
  * current search UI is cumbersome
  * will want Dave's input but LH would like to push forward as soon as possible

## Monday, December 27, 2021

Cancelled

## Monday, December 20, 2021

Cancelled

## Monday, December 13, 2021
* Integrating/being informed of changes in VAST - both Lighthouse and CMS teams
      * Meeting last week may shine light on path forward - update?
        * Communication path has been opened
      * Service phone number source of truth?
* Removing Facility status migration?
  * Keep until Dave talks to Jenny

## Monday, December 6, 2021
* Integrating/being informed of changes in VAST - both Lighthouse and CMS teams
   * CMS has backlog item to discover changes to VAST data - update?
   * Meeting later this week may shine light on path forward
* Basic Location Data Questions: Facility type/classification, Phone numbers confusion/conflicts, and "additional inquiries"
  * What will be source of truth for services phone numbers?  VAST or CMS?
  * Dave to talk to Jenny.
* Update on FAPI bug not displaying all CMS overlays.
  * CMS folks to Async and come up with timeline to fix (SWirt and Kev) - Update?
* Order of operations
  * Worked out in meeting

## Monday, November 29, 2021
* Integrating/being informed of changes in VAST - both Lighthouse and CMS teams
   * Potentially looking for update on regular cadence. - VAST admins to meet and discuss way to notify us.
   * CMS has backlog item to discover changes to VAST data
   * VAST to huddle and get back to LH to notify of any upcoming changes
* Updating guidelines / KB
  * Will talk to Michelle about creating ticket for Facilities backlog to create templates for e-mail links for making update to vet center info - Dave to update Michelle 
  * Adding michelle to this meeting (starting next week?)
* Operational Hours Special Instructions
  * currently one blob of content with 4 possible options from VAST
  * do we have the special insctruictions belong in CMS?
  * CMS to determine best way to get to front end
* Basic Location Data Questions: Facility type/classification, Phone numbers confusion/conflicts, and "additional inquiries"
  * need to seperate out phone numbers
  * What will be source of truth for services phone numbers?  VAST or CMS?
  * LH to remove "Additional Inquiries" potentially
* Update on FAPI bug not displaying all CMS overlays.
  * CMS to create a backlog item to look at updating facility and service URLS 
  * CMS folks to Async and come up with timeline to fix (SWirt and Kev)

## Monday, November 22, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * Dave Conlon to follow up with Stan on URL updating process. Redirect happening
  * Potentially looking for update on regular cadence. - VAST admins to meet and discuss way to notify us.

* Updating guidelines / KB
  * Joe and Josh reviewed and updated the two tables
  * Will talk to Michelle about creating ticket for Facilities backlog to create templates for e-mail links for making update to vet center info - Dave to update Michelle 
* Discuss Ethans changes - Done
* Operational Hours Special Instructions
  * currently one blob of content with 4 possible options from VAST
  * do we have the special insctruictions belong in CMS
  * CMS to determine best way to get to front end


## Monday, November 15, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * Updates?  Group went offline to discuss.
  * San Diego cut over to prod last wednesday 11/10
  * Dave Conlon to follow up with Stan on URL updating process.
  * Potentially looking for update on regular cadence.
  * How can CMS/LH get notified as early as possible of these things, James to poke with VAST folks
    * For this iteration we won't worry about it per Dave C
    * James talked to VAST awaiting response
* Updating guidelines / KB
  * Joe and Josh reviewed and updated the two tables
  * Will talk to Michelle about creating ticket for Facilities backlog to create templates for e-mail links for making update to vet center info

## Monday, November 8, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * going live 11/15
  * CMS to run migration, validate Veterans experience
  * Coordinate with public websites on whether or not we need to redirect
  * Dave to discuss with Stan when change will occur
* LH request for [Calahan VA Clinic](https://www.va.gov/birmingham-health-care/locations/callahan-va-clinic/) that's permanently closed but still populating on VA.gov
  * Josh created ticket
* [How to archive KB](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-archive-a-closed-facility) needs some love
    * VAMC Upgrade team to break into what CMS will do vs.
* How critical is the timing of the upcoming changes?
  * Facility API changes made morning of 11/15 won't reflect in the CMS until after 3am ET (Facility API migration - LH), VAST changes reflect in LH around 7:30am ET
  * Ought to be part of the request:
    * When do you want changes to reflect on va.gov?
    * How can CMS/LH get notified as early as possible of these things, James to poke with VAST folks
    * For this iteration we won't worry about it per Dave C
    * James talked to VAST awaiting response
* Duplicate facilities from VAST
*  * Update?
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint
  * Will look at today?



## Monday, November 1, 2021
* Mission Valley VA Clinic (664BY) is moving and becoming Kearny Mesa VA Clinic (664BY)
  * going live 11/15
  * url for this facility, will be processing a redirect
    * will change the H1 and therefore the url
    * CMS recommends to process redirects through Drupal
    * CMS to manage urls for LH
* LH request for [Calahan VA Clinic](https://www.va.gov/birmingham-health-care/locations/callahan-va-clinic/) that's permanently closed but still populating on VA.gov
  * Still showing on Facility locator as closed
  * CMS can archive it, nothing in the path to process automatically (Josh to create a helpdesk ticket to track)
  * Probably exists in VAST as permanently closed but no longer in LH
  * Request fulfillment process to unpublish a site questions
    * Formal request is going to come to CMS
    * If user goes to LH first, LH will process for the user through a JSD ticket
  * [How to archive KB](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-archive-a-closed-facility) needs some love
    * VAMC Upgrade team to break into what CMS will do vs. LH, etc
* How critical is the timing of the upcoming changes?
  * Facility API changes made morning of 11/15 won't reflect in the CMS until after 3am ET (Facility API migration - LH), VAST changes reflect in LH around 7:30am ET
  * Ought to be part of the request:
    * When do you want changes to reflect on va.gov?
    * How can CMS/LH get notified as early as possible of these things, James to poke with VAST folks
    * For this iteration we won't worry about it per Dave C
* Duplicate facilities from VAST
*  * Update?
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint - update
* Possibility of unifying VBA and VHA sites
  * Update following 10/26 meeting
* Kevin to create issue on KB for facility deletion requests - done?

## Monday, October 25, 2021
* Duplicate facilities from VAST
* Will VAST create new facilities each time one moves?
  * SWirt to grab current instances of issue and send over - Done
  * Determine VAST business process - James Shared via Slack
  * Make VAST team aware of impacts of current method for transferring facilities from one center to another
  * Examine possible mitigation by LH
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint
* VBA sites missing after data update
  * Caseflow is using "inaccurate" list of facilities 
  * Facilities should not be hard-coded
  * Dave Conlon spoke to Caseflow provided canonical list
* Possibility of unifying VBA and VHA sites
  * need to schedule a full one hour session on this - scheduled for tomorrow (10/26/21)
* Kevin to create issue on KB for facility deletion requests

## Monday, October 18, 2021
* Duplicate facilities from VAST
* Will VAST create new facilities each time one moves?
  * SWirt to grab current instances of issue and send over
  * Determine VAST business process
  * Make VAST team aware of impacts of current method for transferring facilities from one center to another
  * Ought to pull down old site instead and set to not active
  * Some of this may be from LH, not VAST
* Updating guidelines / KB
  * Josh and Joe to look at and complete within next sprint
* VBA sites missing after data update
  * Caseflow is using "inaccurate" list of facilities 
  * Facilities should not be hard-coded
* Possibility of unifying VBA and VHA sites
  * need to schedule a full one hour session on this

## Monday, October 4, 2021
* Lovell coordination
  * 4 facilities within Lovell that service Veterans (Captain James, Evanston, McHenry, Kenosha) will be in Lighthouse
  * 4 additional that only service active military (USS Osborne, USS Red Rover, USS Tranquility, Zachary) will not be in Lighthouse
    * Won't be needed in the CMS
* Absolute URLs for services: ownership timeline for CMS
  * New updates are getting pulled in from a Sharepoint site
  * Manually updated, poorly formed
  * CMS can't own it yet because we're not aware of when they go from dual-state or not
  * Prior to turning on the full health service integration, will we be able to assume that CMS is providing correct paths?
    * For COVID services, it's currently a detail page so unstructured data
    * Which order the services come in through the API is important, shouldn't be maintaining it manually for much longer
* Documentation of who to reach out to for VAST updates
  * CMS to update KB articles and help text to point to the source of truth KB article
* As LH looks at the pending horizon of Facilities v1, might want to look at the backend infrastructure of how everything integrates


## Monday, September 27, 2021
* Creation of four new Lovell Federal facilities from Facilities sync call
* Absolute URLs for services being pulled by LH from CMS - timeline, roadmap

## Monday, September 20, 2021
* Facility data update workflow, [6413](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6413)
  * https://prod.cms.va.gov/help/vet-centers/how-do-i-update-my-facilitys-basic-location-data
  * Break out existing KB article by product type (possibly 4)
  * LH team to own info in KB articles for VAMC and VC; CMS to own cemeteries and VBA Regional offices for now
  * LH team to send over folks they want to have access to edit:
    * joshua.jennings@va.gov, james.costa@va.gov, adam.stilton@va.gov, joseph.justice2@va.gov
* Updates for facilities detailed services
  * Frequency of updates from CMS to make sure data is in sync
  * Ideally shouldn't need it but CMS to plan for a nightly sync
    * Bulk push of all vs. LH single query; bulk push with all individual services hasn't been tested yet; LH will be set up for bulk push but want to notify their DevOps folks as early as possible
    * Decision: start with the bulk push, explore single query if needed
    * Q: currently these pushes are scheduled for the night time, should we consider moving to when folks are around? TBD

## Monday, Spetember 13, 2021
* MVC status updates, if any
  * LH deployed update for Facilities API this past Friday, so should have no orphaned overlay info now
  * Falling back to the VAST operating status
* Census office API updates, if any
  * CMS team has a spike in queue
* PAO communications on how to update facility data
  * How can we streamline communications for escalations while limiting incorrect escalations?
  * Suggestion: LH to update and maintain CMS KB article on how to update facility data
  * In CMS help text would direct to KB article instead of directly to api@va.gov
  * Access to care wait time data: how to better inform users on how to update (add info to KB article)
  * Explore KB article editor role
* VBA data status
  * Dave did clean up
  * Back with VBA to answer questions, will circle back in ~2 weeks with the goal to refresh around mid-October

## Monday, August 30, 2021
* MVC statuses, LH code is complete and merged but not quite in (can then delete overlays)
* James and Jessica (VC) connected now for RCS (Readjustment Counseling Services) path stuff, James waiting on a response
  * Jessica might have info on updates for VCs not being handled the same way as VAMCs

## Monday, August 23, 2021
* New slack channel to collaborate here: [#cms-lighthouse](https://join.slack.com/share/zt-ukjhgl7n-YUFtRrwVRm_QssZWYfT2pQ)
* Census office API for lat/long service: for CMS to pull into a future sprint for discovery (for CAPs, future VBA stuff)
  * Potentially CMS as SSOT for this for LH to consume so that users can validate
* VBA database
  * Data call completed
  * Drupal to be used for content, to be put on CMS roadmap
  * Dave's targetting for Q4
  * Upstream BISL dependency to be aware of, driving timeline
  * Will additional columns break anything? (is the VBA facility inside a VHA facility? services at a specific address)
  * If data elements change will that break anything?
* VBA facilities have been deleted as a part of the above
  * CMS needs to understand and track when a facility is no longer in LH so that a VBA editor doesn't update a facility that doesn't exist
  * Could be the same use case as for VAMC facilities
* VBA_facilities database (with one table) changes
  * new columns should have no impact on LH, will just ignore
  * value changes in existing columns (facility_type): `outbased` field, is that mapped to classification? doesn't look to be used currently by LH
  * Dave has what he needs to move forward
  * What's the process for adding a new service / integration point with LH: bring up at this weekly meeting
  * LH queries time zone based off of lat/long
  * Uses IANA format (official zone name, doesn't have UTC) for Arizona funkiness, leverages polygons
    * Is this API accessible? lat/long to timezone conversion
    * CMS issue is how to display
    * CMS may look to LH to mimic for repeating events that it's creating
* CMS is working with VEO to centralize event data if LH is interested
* MVC statuses
  * Adding in overlay deletions today-ish, once in then operating status overlay can go in
  * LH should be good by next meeting
  * MVCs will still be listed in VAST

## Monday, August 16, 20221
* Lat/long update: Dave has found a service at the Census office that we might be able to use.
  * Dave will investigate how we might leverage for VC CAPs, and VBA stuff. TBD on timing. https://geocoding.geo.census.gov/
  * CMS team to explore how to leverage. Some concerns around if it needs to be validated.
* Mobile Vet Center statuses
  * When removed, Facility status for MVCs got stuck with no way to update
  * Will leave as is in CMS for now until Dave clarifies business process with Jessica
    * Facility needs to be removed or made inactive in VAST - won't be something that CMS/LH will be able to solve because the Facility will still appear with the VC.
    * CMS may need to archive in order to make it disappear.
    * FYI for CMS helpdesk: users may be confused.
    * Status from CMS side = currently doesn't exist for MVC
  * LH to set status to null
* Communication channel
  * Separate channel or existing?
  * Clarence to set up and add other relevant folks (Michelle Middaugh, CMS helpdesk)
* If CMS becomes source of truth for services data (away from ATC), some data will be lost but may not be needed (access to care, wait time, and satisfaction)
  * Currently LH is getting 14 services from ATC
  * 82 other services from CMS currently don't have wait time and satisfaction
  * Mission Act drove wait time and satisfaction data being tracked / visible
  * Important to keep in the API response but may never get for 82 services
  * CMS will govern if a facility has a service or not regardless
  * Possibly flagging the 14 services that have this info for the FE
  * Contingencies on bad data will need to be explored

## Monday, August 9, 20221
* LH currently working on changing the architecture of how they handle the overlay data, going to decouple the overlay from the facility objects so that CMS can send data for a facility that doesn't exist. Is CMS doing anything with the return codes?
  * CMS team to look into how they're handled, specifically 201 (received but couldn't do anything with it)
  * Currently, LH will store even if ID isn't recognized and not ever purging
  * CMS would want to know if recurring
  * CMS would want to know if 201 occurs in order to remove it from the queue
* The url to the service info pages for the detailed service blocks, currently LH is managing through external (bc COVID) - need Dave for direction
  * Paths ought to be part of the CMS but currently not
  * CMS doesn't have the full path bc the system isn't part of it yet, possibly bc some were nationally controlled
    * Not all the facilities are synced up because many are still done by hand, VAMC Upgrade team still needs to populate
* The character limit for additional info for operating status
  * Should LH loosen or CMS tighten? Decision by Dave to harden on CMS end. [CMS issue](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/6027)
  * CMS to also look at the error messaging around this
* Machine names for services still on hold

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
