## Meeting Notes for CRM Sync on 10/12/2023

Analytics; Refactoring Categories/Topics/Subtopics

### Attendees:

* **Integration Team:** Ruchi, Khoa, Joe, Becky
* **CRM Team:** Chris, Joseph Duty, Shelby, Tina
* **Note Taker:** Ruchi

### Key Takeaways:

**The two pieces of information for the KPIs of the current AVA application:**

1. The time it takes for a submitter to submit an inquiry
  * If an inquiry  was submitted, how long did it take from the start of a session to the end of the session?
  * For submitters that submitted an inquiry, what is the average time that it took them from the time that they landed on the ask.va.gov page to the time that they clicked submit?
  * For submitters that submitted an inquiry, what is the average time that it took them from the time the NEXT button is clicked in "Tell us about your question" page to the time that they clicked submit?
> >  _Data collected should include the submitter's device and whether they were authenticated or not._
2. The percentage of users that complete the journey to submit their inquiry
  * What percentage of submitters completed the user journey once beginning the session?
  * Numerator: Submitters that completed the journey (the submission confirmation page).
  * Denominator: Total number of submitters that click the NEXT button on “Tell us about your question” page. (This shows intent to submit an inquiry.)
> >  _Data collected should include the submitter's device and whether they were authenticated or not._

**Four levels of changes identified so far:**

* Minimal: Name change only. No impact to routing.
* Low-mid: Name changes on situations where it impacts rules on other fields.
* Low-Mid: Remove topic or subtopic. Need to figure out if archival is needed or transferred. 
* Low-mid: Add-Topic or subtopic. Impact to routing.
* High-Mid: Remove or add topic or subtopic. Existing queue needs to be added.
* Most: Remove or add topic or subtopic. An entirely new queue needs to be created.
> To mitigate instances where a name change might affect routing, the Dynamics APIs will track a new column (e.g. 'name_on_portal') with the va.gov UI's expected name for the selection. When that column has a NULL, the query will coallese back to the legacy name. The Dynamics APIs will handle mapping those values back to the originating row.
> 
> JOE: In this scenario, we could just pass the key back in. No need for the mapping in Dynamics APIs since this isn't a piece of data that conflicts with the va.gov sources &mdash; it only lives in Dynamics. We WILL need that new column for the name on portal, though.

**Where does the source of truth live?**

* Dynamics &mdash; We need to collaborate on each situation to make sure that we understand the ins and outs of each change.
> JOE: There are some data items that **MUST** be pulled from Dynamics. But, there are several pieces of data that we plan to pull from the va.gov APIs. That distinction will be documented in the API Contract documentation next week.

### Action Items:

- [ ] JD and the va.gov AVA integration team will look for folks with KQL (Kusto Query Language) experiennce to help massage the data needed for KPIs.
- [ ] Joe - Present API Docs and granular project plan to this meeting next Tuesday (10/17), Thursday at the latest.
- [ ] Joe - Incorporate the steps for "done" in the granular project timeline.


----


## Meeting Notes for CRM Sync on 10/10/2023

Update on API Doc status; Medallia meeting; Google Analytics; MSFT Teams housekeeping.

### Attendees:

* **Integration Team:** Khoa, Joe, Ruchi, Becky, Eddie
* **CRM Team:** Shelby, Chris, Joseph Duty, Jamie, James, Maria
* **Note Taker:** Khoa

### Key Takeaways:

* API Docs will need a bit more time to mature. Working on sorting endpoints into Lighthouse and Dynamics APIs buckets, cleaning up the gray areas.
* Medallia meeting rescheduled to 10/11 at 4:30pm ET.
* Analytics may require ATO review. JD and Ruchi are working to see if the App Insights data would serve the same purpose.
* Discussed Teams permissions, and culling the membership for those not involved in the project. Ruchi/Becky to follow up on VA/PO side.
* Relayed Shelby's response to Becky that stories in upcoming sprints don't affect CRM Team's work.

### Action Items:

- [X] Ruchi - Send the KPI questions on analytics to Joseph Duty to see if they have this data available to capture the current state on the two KPIs.
- [ ] Becky - Check Teams members with Andrea. (Teams housekeeping)
- [ ] Joe - Present API Docs and granular project plan to this meeting next Tuesday (10/17).
- [ ] Joe to incorporate the steps for "done" in the granular project timeline.


----


## Meeting Notes for CRM Sync on 10/6/2023 (off-cycle, ad-hoc meeeting)

Plan of attack; System of record; Continuous communication.

### Attendees:

* **Integration Team:** Joe, Jacob, Eddie, Ruchi, Em
* **CRM Team:** Chris, Shelby, Joseph Duty, Jamie
* **Note Taker:** Eddie

### Key Takeaways:

* Improved Communication
  * Meeting notes to follow every CRM sync, posted to GitHub, with link sent to Slack and Email.
* Plan of Attack
  * Implement "ping/pong" endpoint first to ensure we can call into Dynamics API servers and get a response.
  * Implement lookup APIs, since they have a lower complexity.
  * Implement submit inquiry ennpoint later, since it's dependent on other APIs and has more complexity.
* System(s) of Record (SoR)
  * There are two basic, oposing options:
    1. Treat Dynamics as the system of record, and everything will simply work since the keys and values will match themselves.
    2. Use the va.gov-directed APIs for lookups and profile data, which carries the risk that values will not match between the form and data in Dynamics' Dataverse.
  * Scenarios to explore:
    * Verify that "simple" lookups like State, Province, Military bases, and Diplomatic addresses will work as intended if pulled from Lighthouse.
    * Email address should match for the CRM agent to pull veterans' history. Can this be made so when calling VA Profile?
    * Email preference for submitter in AVA should be honored. Will the VA Profile equivalent satisfy this requirement?
    * How will we determine vet versus submitter versus agent on vet's behalf without Dynamics as SoR?
    * How will we distinguish between personal and business profile?
  * Important systems for the Dynamics side include the following. Should we use same if we're not using Dynamics as SoR?
    * WEAMS
    * PATSR
    * CORE (?? - confirm with Chris)
    * Difference between Facilities API and the data in Dynamics where agents can add and edit entries?
* Level of detail on granular plan on 10/12:
  * account for the same tasks for all API endpoints
    * documentation
    * development
    * testing
    * integration / validation
    * What does "done" look like?

### Action Items:

1. - [X] Joe to send GitHub link of meeting notes to larger email group and #ask-va-public Slack channel, after every CRM Sync.
1. - [ ] Joe to incorporate the steps for "done" in the granular project timeline.


----


## Meeting Notes for CRM Sync on 10/5/2023

Timelines discussed. Analytics considered.

### Attendees:

* **Integration Team:** Joe, Jacob, Khoa, Eddie
* **CRM Team:** Chris, Shelby, Tina
* **Note Taker:** Eddie, Khoa

### Key Takeaways:

* There was a discussion around the implications of not using Dynamics as the system of record. CRM team expressed concerns.
  * RE: AVA Profile, email address preference is used internally
  * RE: Education lookups, data can be edited/added by agents
  * RE: CRM tools, agent can look up history if the email matches, but may not match if comming from VA Profile
  * How to determine vet versus submitter
  * How to distinguish between personal and business profile
* There seems to be confusion on what API will be developed first.
  * First should be the "ping/pong" endpoint. We need to ensure the plumbing works as intended.
  * Submitting Inquiry should happen towards the end of the dev work.
  * Lookups are prime candidates for early implementation, but we need to know which are Dynamics and which will be va.gov APIs. To be settled by the time the 10/10 documentation is wrapped up.
  * We will discuss this in more detail on 10/6, in a meeting Becky has set up.

### Action Items:

1. - [ ] Joe to send GitHub link to meeting note link to larger email group, incl. Em if not already on the list.
2. - [ ] Joe and devs to wrap up API documentation by 10/10 for final review and feedback from CRM team after that.
3. - [ ] Joe (and Ruchi/Becky) to create a granular timeline in a spreadsheet by 10/12 that CRM can review and offer feedback.
4. - [ ] Joe to schedule a meeting after the documents are reviewed by CRM; agenda to include using or not using Dynamics as the SoR.


----


## Meeting Notes for CRM Sync on 10/3/2023

Timelines discussed. Analytics considered.

### Attendees:

* **Integration Team:** Joe, Jacob, Khoa, Becky, Tyler, Eddie
* **CRM Team:** Chris, Shelby, Tina, Bharat, Maria, Jamie, Cheri, Brad, (Joseph Duty last ½), George, Wayne
* **Note Taker:** Khoa

### Key Takeaways:

* Medallia meeting with CRM needs to be rescheduled, conflicts with existing meetings for key players on CRM team. Becky is coordinating.
* We need to incorporate recent feedback from the CRM team into our contract document. For example, the reply_enabled field is a calculated value, sent from CRM when requesting inquiry replies. Many other annotations to incorporate.
* CRM felt that the summary timeline document needs more granularity before they can officially commit to the work of building the APIs. The contract needs to be solidified before they can estimate the level of effort. Based on initial review by CRM team, December 12th date isn’t achievable. Dates need to align with their release schedule if possible.
* Medallia survey is dependednt on the upcoming meeting. Need to scope level of effort for this task. May want to group multiple deliverables into a maintenance release. (Maintenance releases are possible, but generally reserved for bug fixes.)
* Field removal work needs to be a separate meeting to see if any omissions will affect routing or validation. Most of this work is baked into other tasks. Hard to cite a delivery date.
* Google Analytics date is currently after code freeze. CRM team needs more guidance. Becky will coordinate with the platform team to share the needed info.
* CRM team suggested a CCB presentation in Fall '23.
* Joseph Duty: some of the dates are after the contract ends, RISK; Bharat: but VA has an intention to extend the contract.

### Action Items:

1. Integration team to knock out the remaining tasks on the contract document. Need to give an ETA on when this will be done. Then do it. — Joe / Devs
1. Integration team to deliver a more granular timeline, with milestones/touchpoints for CRM team. (e.g. integration testing complete, launch date, portal maintenance plan). — Joe / Ruchi / Becky
1. Google Analytics guidance from Becky / Platform team to CRM team. — Becky / Joe(?)
1. Need working. agreement for new requirements (post-launch), changes, … responsibilities of the two teams. — Ruchi / Becky
1. Communication plan for stakeholders - banner messages are typical, may be contractual issues where agents been to have a quota of inquiries completed, … — Ruchi / Becky
1. Google analytics needs to be tested alongside the built-in analytics for Power Apps. Dev environment would be enough to prove stability, and carry the lowest risk. — Joseph Duty (w/ guidance from platform team and Becky)


----

## Meeting Notes for CRM Sync on 9/28/2023

Chris returns. Several topics covered.

### Attendees: 

* **Integration:** Joe, Jacob, Khoa, Chante
* **CRM:** Shelby, Joseph Duty, Chris
* **Note Taker:** Khoa

### Takeaways:

1. Clarified the environment mappings.
   * Vets-api Prod => Dynamics Prod
   * Vets-api staging => Dynamics QA
   * Vets-api dev => Dynamics dev
2. Discussed Google Analytics in Dynamics UI.
   * Mentioned need to collect baseline data before launch of new UI.
   * Determined to be a low level of effort, but need to figure the logistics out.
   * Joseph Duty raised concern about potential for GA interfereing with built-in analytics for Power Apps.
3. Discussed inquiry archiving to fill in gaps in our understanding.
   * Inquiries/replies are never removed from Dataverse, they're just marked with a Closed status.
   * Data is copied to CxDW nightly, but Dataverse is considered the system of record.
   * Another benefit of closing an inquiry is to prevent user from asking a new question by replying to an old inquiry.
   * Business line sets reply windoe to 0-100 days, with most being 10 days.
4. Discussed paging of data for the dashboard.
   * Liist of inquiries returned in full.
   * List of replies for an inquiry returned in full.
   * Attachments are referenced in inquiries and replies by ID. Requested via separate API call. Likely Base-64 encoded.
5. Reminded attendees of the timeline to be shared in the next meeting (Tuesday).

### Action Items:

1. Retrieve Correspondence - needs updates, question for Shelby and Chris, but mostly confirmation that we were just mapping our fields to the data dictionary, not requesting new fields. – CRM Devs
2. Post Correspondence - needs update - Integration Devs
3. Remaining endpoints need to be cleaned up and finalized. – Integration Devs





---




## Meeting Notes for CRM Sync on 9/26/2023

This was a brief meeting. We'll have more to discuss when Chris is back online.

### Attendees: 

* **Integration:** Joe, Jacob, Khoa, Chante, Becky
* **CRM:** Shelby, Joseph Duty, Tina Purguy, Maria King
* **Note Taker:** Khoa

### Takeaways:

1. Joseph Duty told us that all server resources have been provisioned. We'll map our va.gov environments to their CRM environments. They have 5, we have 3 (two of which are technically the same). Likely something along the lines of our dev to their test, our staging to their staging, our prod to their prod-1.
2. Text search within inquiries should be doable.
	* CRM would expose this functionality to us
	* We would incorporate that functionality into our UI
	* Only active messages would be searched (not archived)
	* Only message bodies in inquiry or replies would be searched (not subjects)
3. Joseph had some feedback on the API endpoints that we documented.
	* He said that what he saw of Read Profile was 80%-90% there.
	* Most of his questions were for Chris and Shelby.
	* He wanted to confirm that we were matching our fields to their data dictionary as best we knew, and not asking for new fields. I confirmed that was the case.
	* Post Correspondence needs some love.
4. I mentioned that we intend to share a rough timeline with them on the next Tuesday sync that calls out milestones/dates and the dependencies on CRM that we have.

### Action Items:

1. Chante, Ruchi, and Tina will follow up on connecting CRM with the Medallia teeam to iron out the technical details for implementing in Dynamics.
2. Joe to add question about how inquiries are archived to the next CRM sync agenda.
