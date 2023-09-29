## Meeting Notes for CRM Sync on 9/28/2023

Chris returns. Several topics covered.

### Attendees: 

* **Integration:** Joe, Jacob, Khoa, Chante, Becky
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
