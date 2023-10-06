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
