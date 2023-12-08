## Meeting Notes for CRM Sync on 11/30/2023

Worked through Get Topics and Submit Inquiry

### Attendees:

* **AVA FE Team:** Joe, Khoa, Natalie, Becky,  
* **AVA CRM Team:** JD, Catherine, Bharat, Chris, Joanne, Timothy,

### Key Takeaways:

1. Made progress on the hairy parts of the last two endpoints - get topics and submit inquiry.
2. Worked through Get Topics and Submit Inquiry. Lots of notes were taken for this meeting, but they're detailed and technical. Adding to the contract docs in github.
  
### Action Items:

- [ ] Joe: Update the comments in existing contract docs with notes from this meeting.
- [ ] Shelby: Review Category/Topic/Subtopic changes in Teams spreadsheet; Provide a LoE estimate for each type of change present in the sheet (new, rename, deleted, …) by Tuesday's CRM Sync.
- [ ] Joe/Jacob: Review new information on possible existing schools API.

---

## Meeting Notes for CRM Sync on 11/29/2023

Discussion of LoE for Category/Topic/Subtopic changes

### Attendees:

* **AVA FE Team:** Holly, Becky, Ruchi, Eddie, Jacob, Natalie, Joe
* **AVA CRM Team:** Chris, Jamie, Shelby, JD, Bharat

### Key Takeaways:

1. Natalie: looking for a Level of Effort for the Category/Topic/Subtopic changes
2. Chris: name-change-only items can likely be done in 1 sprint
3. Shelby: need to account for each type of change (new, deleted, edited names)
4. Tech Note: The names can affect the flow of the CRM logic as some conditional logic is driven by the display names (rather than their backing id/key). Suggestion from the devs on both sides is to add a new column to hold the display names for the new portal, then let the API send those names instead of the current names. This will allow the new portal to use the updated names, and allow for minimal (if any) changes in the CRM logic.
    * This should address the issue that Chris mentioned in an email on the name changes and reporting issues. 
  
### Action Items:

- [X] ~Holly: Update the comments in [ticket #375](https://github.com/department-of-veterans-affairs/ask-va/issues/375) with a summary of this meeting.~
- [ ] Shelby: Review Category/Topic/Subtopic changes in Teams spreadsheet; Provide a LoE estimate for each type of change present in the sheet (new, rename, deleted, …) by Tuesday's CRM Sync.

---

## Meeting Notes for CRM Sync on 11/16/2023

Documentation; Various tasks

### Attendees:

* **AVA FE Team:** Khoa, Jacob, Joe, Natalie, Holly
* **AVA CRM Team:** JD, Chris, Shelby, Bharat
* **Note Taker:** Joe

### Key Takeaways:

1. JD/CC: Need to document mappings and transformations, to include calculated fields and queries. Needed for all API endpoints, but the majority will be trivial. They will update the team in the daily scrums, and call in the larger group if collaboration is needed.
2. Joe and all FE devs will get AWS credentials and request permissions to manage the secrets store for connections to the Dynamics APIs.
3. Status updates from the team were given. Action items added as needed.
  
### Action Items:

- [ ] JD/CC: Document mappings, transformations, and calculated fields in the APIs.
- [ ] Joe: Update API contract detail files with latest notes from CRM workshops.
- [ ] Tina: Document the pitfalls of using VA Profile as the sole source of profile data.
   - [X] ~Tina's notes~
   - [ ] Move the teams chat notes to the github space? (Joe or designee)
- [ ] Jacob: Is Lighthouse pulled from VAST? (11/14)
- [ ] Jacob: Reach out to GI Bill team to see how their list is maintained and if there's an API for it. (11/14)
- [ ] Joe/Eddie: Reach out to AVA CRM see what metadata is available from the unified Category/Topic/Subtopic endpoint.
- [ ] Khoa: See `/ping` endpoint invoked from STAGING server (including the locked-down version of the endpoint).
- [ ] Joe and Jacob to request zero tokens and access to the appropriate Azure resources.\
   They will follow up with the support team and JD as needed for information on the resources to get access.
- [ ] Joe and other FE devs to get AWS permissions to manage secrets for Dynamics API access
   - [ ] AWS Login
      - [X] ~Joe~
      - [X] ~Eddie~
      - [ ] Jacob
      - [ ] Khoa
   - [ ] AWS PutParameter permissions
      - [ ] Joe
      - [ ] Eddie
      - [ ] Jacob
      - [ ] Khoa

---


## Meeting Notes for CRM Sync on 11/14/2023

Daily scrums; VA Profile discussion

### Attendees:

* **AVA FE Team:** Joe, Khoa, Eddie, Jacob, Ruchi, Tyler, Natalie
* **AVA CRM Team:** Bharat, Wayne, Chris, Kathleen, Jamie, Shelby
* **Note Taker:** Khoa

### Key Takeaways:

1. Natalie suggested a daily scrum meeting to cover our progress.
   * AVA CRM - JD, Tina, Bharat
   * AVA FE - Joe, Khoa, Jacob, Eddie (with Becky/Ruchi/Holly optional)
2. Plan is to pull data from VA Profile rather than AVA Profile.
   * Plan to leave missing pre-fill data blank on the form, and have the user enter the information, e.g. business email and phone.
   * There is some data in the form that gets added back to AVA Profile on submit.
   * Tina suggests pulling from VA, but filling in the missing data from AVA.
   * Chris says that the users most affected by this gap are the most vocal.
   * Chris added that the ID.me and Login.gov profiles are the users' personal profiles. Need a relationship to business side.
   * It wsa suggested that we start the intake process to add the missing fields to VA Profile for a longer-term solution.
   * Browsers remember previous inputs in most scenarios, but it was said that the VA-side browsers are configured to not do that.
   * Tina volunteered to document the issues for the team, send to Natalie.
  
### Action Items:

- [ ] Tina: Document the pitfalls of using VA Profile as the sole source of profile data.
- [X] ~Natalie to set up daily scrums and facilite the same.~

- [ ] Jacob: Is Lighthouse pulled from VAST? (11/14)
- [ ] Jacob: Reach out to GI Bill team to see how their list is maintained and if there's an API for it. (11/14)
- [X] ~Joe: Consolidate Category/Topic/Subtopic into a single endpoint in the API status doc.~
- [ ] Joe/Eddie: Reach out to AVA CRM see what metadata is available from the unified Category/Topic/Subtopic endpoint.
- [ ] Khoa: See `/ping` endpoint invoked from STAGING server (including the locked-down version of the endpoint).
- [ ] Joe and Jacob to request zero tokens and access to the appropriate Azure resources.\
   They will follow up with the support team and JD as needed for information on the resources to get access.

---

## Meeting Notes for CRM Sync on 11/07/2023

`/ping` is working; GitHub for API docs/status; Facilities

### Attendees:

* **AVA FE Team:** Joe, Khoa, Eddie, Jacob, Ruchi, Becky, Natalie
* **AVA CRM Team:** Bharat, Wayne, Chris, Kathleen, Jamie, Shelby
* **Note Taker:** Khoa

### Key Takeaways:

1. The `/ping` endpoint was shown to work behind the VA's VPN. Last step is to see it working in STAGING, which should happen before we start our API workshop on Thursday.
   * We will continue looking for a resolution to localhost development as a low-priority, background task.
2. As we collaborate, we'll keep the API documentation and endpoint statuses in GitHub.
3. Medical Facilities
   * We were looking for a system of record that is managed by a team that's upstream from our application. (Trying to not keep app-specific copies of data.)
   * Lighthouse exposes Medical Facilities that map to CRM records almost perfectly, but there are two exceptions that we discussed.
      1. Lighthouse stores Northern California facilities in a more granular way than CRM. Those facilities would need to be mapped to the parent facility.
      2. Lighthouse exposes many more facilities than have been referenced in CRM inquiries. New facilities would have to be accounted for in routing, OR mapped to the CRM catch-all facility, OR filter the larger list down to the facilities expected by AVA CRM.
   * AVA CRM mentioned that the medical facilities were OIT-directed and VAST-sourced. When asked how new facilities come into the inquiry process, it was stated that this has never happened before, but OIT should alert them.
4. Educational Facilities
   * We were looking for a system of record that is managed by a team that's upstream from our application. (Trying to not keep app-specific copies of data.)
   * We found a source of facilities that is used by the GI Bill Comparison Tool that matches the AVA CRM data almost prefectly. Only a few malformed AVA facility codes could not be matched.
   * We believe this data was sourced from WEAMS, but there is no API backing it. Dynamics CRM may be the only system of record for this.
   * AVA FE will follow up with the GI Bill team to ensure there is no API before closing the lid on this one.

### Action Items:

- [ ] Jacob: Is Lighthouse pulled from VAST? (11/14)
- [ ] Jacob: Reach out to GI Bill team to see how their list is maintained and if there's an API for it. (11/14)
- [X] ~Joe: Consolidate Category/Topic/Subtopic into a single endpoint in the API status doc.~
- [ ] Joe/Eddie: Reach out to AVA CRM see what metadata is available from the unified Category/Topic/Subtopic endpoint.
- [ ] Khoa: See `/ping` endpoint invoked from STAGING server (including the locked-down version of the endpoint).
---
- [X] ~Becky to touch base with Kathleen on military information fields this week.~\
   ~Check that fields won’t affect routing / system.~\
   ~Draft email.~
- [X] ~[Hold after convo with Kathleen] Communicate to business teams about military information.~\
   ~Send out email in tandem (Kathleen and Becky) to AVA distribution email~
- [ ] Joe and Jacob to request zero tokens and access to the appropriate Azure resources.\
   They will follow up with the support team and JD as needed for information on the resources to get access.

---

## Meeting Notes for CRM Sync on 11/02/2023

Focused on `/ping`; Cat/Topic/Sub; 01/02 Remainder

### Attendees:

* **AVA FE Team:** Joe, Khoa, Eddie, Natalie
* **AVA CRM Team:** JD, Chris, Shelby, Jamie, Tina, Bharat
* **Note Taker:** Joe

### Key Takeaways:

1. The `/ping` endpoint is still the focus to make sure that we can get our calls from va.gov to ask.va.gov and back.
   * AVA FE team has abandoned the attempts to get calls to work from development machines, falling back to ...
   * The development process will be frustratingly slow. But our fallback is to push every change to DEV servers for validation and testing. It's a 20-minute-per-edit difference, but ...
   * We will keep looking for a resolution to localhost development as a low-priority, background task.
2. JD recommended that we consolidate the `/category`, `/topic`, and `/subtopic` API endpoints into a single endpoint that specifies an optional parent identifier
   * Call the endpoint without an id to get a list of categories
   * Call the endpoint with a category id to get a list of topics
   * Call the endpoint with a topic id to get a list of subtopics (or empty list)
3. JD mentioned that a good bit of the topic config can be passed back as well, so that the API can help us make the UI more data-driven.
   * Many of the show/hide annotations of fields by topic is included in the tables
   * Not all scenarios are included, so can't be 100% data-driven.
4. Bharat (rightly) reminded us of the fast-approaching 01/02 date, and let us know that his team would help us in any way needed to help move things along faster.
5. Spoke briefly about data mappings between AVA/VA.
   * Verified with the CRM team that medical facility field is 3 digits in the source VA data, which helped us to later complete the mappings between the two sources.
   * Natalie reviewed the VA Profile process again and offered to help in the process if we need to add any fields (i.e. intake form, ...), asked to be included in any related meetings.
   * Eddie reminded the devs that we have a very thorough document between his SPIKE findings and Becky's related document.

### Action Items:

- [ ] Joe to tweak the API endpoint documentation for Cat/Topic/Sub, as described by JD.
- [ ] Joe and Eddie to reach out to see what metadata is available from the unified Cat/Topic/Sub endpoint.
- [ ] Khoa to wrap up `/ping` endpoint from DEV/STAGING server, to include the locked-down version of the endpoint.
- [ ] Joe to queue up the next non-ping endpoints for discussion soon, possibly for Tuesday if `/ping` has been validated in DEV.\
      ---
- [ ] Becky to touch base with Kathleen on military information fields this week.\
   Check that fields won’t affect routing / system.\
   Draft email.
- [ ] Joe and Jacob to request zero tokens and access to the appropriate Azure resources.\
   They will follow up with the support team and JD as needed for information on the resources to get access.
- [ ] [Hold after convo with Kathleen] Communicate to business teams about military information.\
   Send out email in tandem (Kathleen and Becky) to AVA distribution email

---

## Meeting Notes for CRM Sync on 10/31/2023

Focused on `/ping`; Future discussions

### Attendees:

* **AVA FE Team:** Joe, Khoa, Jacob, Eddie
* **AVA CRM Team:** JD, Chris, Shelby, Stephanie, Wayne, Tina, 
* **Note Taker:** Khoa

### Key Takeaways:

1. The `/ping` endpoint is still the focus to make sure that we can get our calls from va.gov to ask.va.gov and back.
   * AVA FE team is working through some connectivity and deployment issues.
   * AVA CRM is at the ready to answer any questions we may have.
   * In a nutshell, we're trying to hit the `/ping` endpoint that JD provided from our development machines using the SOCKS proxy. Otherwise, our development process will be frustratingly slow. But our fallback is to push every change to DEV servers for validation and testing. It's a 20-minute-per-edit difference that can make our iterations on ideas flow much more quickly. But we are timeboxing this effort to the next day (Wednesday).
2. Natalie gave the teams a heads up that she'll be facilitating a discussion during the next all-hands sync on the LOE for changes to categories/topics/subtopics that might possibly impact routing.

### Action Items:

- [x] ~Joe to document the `sec_id` -> `ICN` decision in a GitHub issue.~
- [ ] Becky to touch base with Kathleen on military information fields this week.\
   Check that fields won’t affect routing / system.\
   Draft email.
- [ ] Joe and Jacob to request zero tokens and access to the appropriate Azure resources.\
   They will follow up with the support team and JD as needed for information on the resources to get access.
- [ ] [Hold after convo with Kathleen] Communicate to business teams about military information.\
   Send out email in tandem (Kathleen and Becky) to AVA distribution email

---

## Meeting Notes for CRM Sync on 10/26/2023

Focused on `/ping`; Baseline analytics strategy

### Attendees:

* **AVA FE Team:** Khoa, Joe, Jacob, Eddie, Ruchi
* **AVA CRM Team:** JD, Chris, Jamie, Bharat, 
* **Note Taker:** Khoa

### Key Takeaways:

1. The `/ping` endpoint will be the focus to make sure that we can get our calls from va.gov to ask.va.gov and back.
2. Rather than dump tons of data from the App Insights log, Joe and Jacob will request access to querythe data directly.

### Action Items:

- [X] ~Joe to update Thursday meetings to use Teams moving forward.~
- [ ] Joe to document the `sec_id` -> `ICN` decision in a GitHub issue.
- [ ] Becky to touch base with Kathleen on military information fields this week.\
   Check that fields won’t affect routing / system.\
   Draft email.
- [X] ~Bharat - send out a briefing of the lower environment~
- [ ] Joe and Jacob to request zero tokens and access to the appropriate Azure resources.\
   They will follow up with the support team and JD as needed for information on the resources to get access.
- [X] ~Joseph Duty to send API credentials via secure VA email.~
- [X] ~Joseph Duty to send code snippet on calling out to the APIs.~
- [ ] [Hold after convo with Kathleen] Communicate to business teams about military information.\
   Send out email in tandem (Kathleen and Becky) to AVA distribution email


---

## Meeting Notes for CRM Sync on 10/23/2023

`sec_id` potential issues; AVA data questions

### Attendees:

* **AVA FE Team:** Khoa, Joe, Jacob, Eddie
* **AVA CRM Team:** JD, Chris
* **Note Taker:** Jacob

### Key Takeaways:

1. User Auth: `sec_id` may stop being a reliable key to track users in the next 6-9 months. Identity team recommends using other fields.
   * Current SSOe solution leverages expensive, quirky hardware from IBM. Trying to move away from that.
   * Possible alternative is the credential_UUID, plus originating login provider.
   * There is a mapping table used by Identity team that maps sec_id / EDIPI / ICN.
   * When using one of the 4 identity providers, verified users have an MPI record. (Regardless of whether they're a vet or not.)
2. Ed Facilities: CRM agents edit/add facilities when a facility does not exist in the list, as reported by a submitter.
   * This is an optional field.
   * If submitter can't find the school code, they can leave it blank and pick the state (with optional feedback).
   * The code is used to find the state, so having just the state is enough for routing.
3. VA Facility: This is a mostly-static list from PATS-R.
   * If there's a discrepency, someone internal would raise it.
   * This list doesn't change much.
   * VA Facilities are hospitals.
   * This is a required field.
   * If not found, the submitter can just pick another facility, and include feedback with their selection.
4. AVA Profile / VA Profile:
   * Used for pre-fill.
   * Backend uses the pre-filled values, so those fields still need to be included with the inquiry that gets submitted.
   * Jacob to compare with the data dictionary to see which fields may be missing.
   * Need to have a business email and a personal email to split the dashboard into personal / business tabs.

### Action Items:

- [ ] Jacob to compare with the AVA Profile data dictionary to the VA Profile fields to see which fields may be missing.
- [ ] Chris believes that the sec_id may be a substring of the ICN. Needs to verify using the data that they have.


-----


## Meeting Notes for CRM Sync on 10/19/2023

App Insights; Project Plan; Medallia; Field Removal; Teams for Syncs; sec_id Usage; AVA CRM Lower Environments

### Attendees:

* **AVA FE Team:** Khoa, Joe, Becky, Ruchi, Jacob
* **AVA CRM Team:** JD, Natalie, Tina
* **Note Taker:** Khoa

### Key Takeaways:

1. Getting a dump of the App Insights data was discussed. Joe sent an email to the key players to narrow the scope and better define what the AVA FE team is looking for.
2. The potential issues around `sec_id` were discussed. Joe shared Trevor's (from Identity Team) initial comment and response to Joe's follow up questions. Baseed on Trevor's response, and the AVA CRM team's experience in PROD, I believe this is a non issue. It's likely only an issue for people who have only ever logged in on the mobile app, bypassing the SSOe gateway.
3. Medallia was discussed in the context of Power Pages. It looks like the AVA CRM team will be blazing a new trail. Becky to send effort, acceptance criteria adependencies and filalized survey questions to Shelby.
4. Removing (rather hiding) fields was discussed. Chris emphasized the point that "required" might be interpreted by the CRM agents as "really nice to have", and described possible pitfalls around inquiry rerouting. Becky will meet with Kathleen to verifyy that the hidden fields won't affect routing, then plan a joint announcement from both teams to the LOBs as a draft email to the channels that Kathleen already has established for AVA CRM communications.
5. The move to MSFT Teams was mentioned again. Joe needs to remove the Zoom invite for the Thursday syncs and resend as Teams invite.
6. The project plan was discussed. The dates will need to be examined and tweaked. Natalie to create a MSFT Project file to replace the current spreadsheet.
7. Bharat et.al. mentioned the lower environments for the AVA CRM team. Bharat to send an email, briefing them.

### Action Items:

- [ ] ~Joe - Get list of fields to collect from App Insights data to CRM team ASAP - target of 10/19's sync.~
- [ ] ~Joe - Coordinate discussion of the use of `sec_id` in the current and new AVA applications.~
- [ ] Natalie - convert the API Project plan from Excel -> MS Project by 10/31.
- [ ] Ruchi and Becky - add the other dependencies in the Project plan by next thursday 10/26.
- [ ] Joe - add Natalie to the Teams folder.
- [ ] AVA CRM and AVA FE teams - annotate the projedct plan spreadsheet with concerns, dates, questions, ..
- [ ] Bharat - send out email brieffing of lower environments.
- [ ] JD - see if it's possible to export all the App Insights data.
- [ ] Becky and Kathleen - check that hiding military information fields won't affect routing / system. Draft email to Lobs.
- [ ] Kathleen - send effort, acceptance criteria, dependencies, finaliized survey questions to Shelby.

- [ ] Kathleen - Create new placeholder task in JIRA for the Medallia survey work. Send effort, acceptance criteria, dependencies & finalized survey questions to Shelby.
- [ ] Becky - Ask Medallia team about experience on other sites.
- [ ] Becky - Touch base with Kathleen on military information fields this week. Check that fields won’t affect routing. Draft email.
- [ ] Becky/Kathleen - [Hold after convo with Kathleen] Communicate to business teams about military information. Notify on CCB in October 27th. Send out email in tandem (Kathleen and Becky) to AVA distribution email.

Carryover action items:

- [ ] ~JD and the va.gov AVA integration team will look for folks with KQL (Kusto Query Language) experiennce to help massage the data needed for KPIs.~
- [x] Joe - Present API Docs and granular project plan to this meeting on Thursday (10/19).
- [ ] Joe - Incorporate the steps for "done" in the granular project timeline.


----

## Meeting Notes for CRM Sync on 10/17/2023

Admin; Data Analysis; User Identifiers; Surveys; Field Removal

### Attendees:

* **Integration Team:** Khoa, Joe, Becky, Ruchi, Em
* **CRM Team:** Jaime, Maria, Shelby, Bharat, Kathleen, Tina, Natalie, Chris
* **Note Taker:** Khoa

### Key Takeaways:

1. Ruchi let the team know that we'll be using MS Teams for future meetings, and that invitations will be sent to everyone's VA.gov email. Bharat requested that we include the CRM team's group email, which will send the invite to both their VA emails and their contractor emails.
2. Joe requested that we get a copy of the raw data for running analysis and generating reports and graphs, rather than the planned aggregated data. An action item was added for Joe to send a list of the data (columns) that we'll need.
3. Joe brought up a concern that  was expressed by one of the members of the Identity team surrounding the use of `sec_id`. Per Trevor, "Not everyone who authenticates on VA.gov will have a sec_id, so it’s possible there are other identifiers that are more appropriate to use (again, I can help describe which ones you may prefer using, depending on your requirements)." One alternative mentioned in the sync was to send the method of authentication and the key that the authentication provider uses. This could have broad implications for the existing AVA application too.  Joe has an action item to arrange a meeting with the key players to discuss, to include the CRM team's trused identity resource, Damien.
4. Becky brought up the task to implement Medallia surveys in the current AVA application. Timelines were discussed, including the upcoming code freezes and production releases for the CRM team. It was stated that design and API discussions could continue, but development wouldn't be possible since they'll have switched into stability mode, focusing on any bug fixes that may need to be made. Shelby and Becky agreed to having a placeholder ticket put into the CRM team's backlog for this task, but that it would be blocked until the survey questions are finalized. Tina explaine that since this is uncharted territory for them, they would need to implement in a lower environment to judge the level of effort.
5. The "removal" of unused military fields was discussed. The LOBs have indicated that they're not needed, but their removal has the potential to affect routing and rerouting. The CRM team has the comms channels established for the LOBs, and the communication of the removal will be annouced jointly with the integration teeam on those channels.

### Action Items:

- [ ] Joe - Get list of fields to collect from App Insights data to CRM team ASAP - target of 10/19's sync.
- [ ] Joe - Coordinate discussion of the use of `sec_id` in the current and new AVA applications.
- [ ] Bharat - Send an email to the group on mandatory meetings that the AVA CRM team has so that we can know availability since the calendars on the va email side might not be updated.
- [ ] Kathleen - Create new placeholder task in JIRA for the Medallia survey work. Send effort, acceptance criteria, dependencies & finalized survey questions to Shelby.
- [ ] Becky - Ask Medallia team about experience on other sites.
- [ ] Becky - Touch base with Kathleen on military information fields this week. Check that fields won’t affect routing. Draft email.
- [ ] Becky/Kathleen - [Hold after convo with Kathleen] Communicate to business teams about military information. Notify on CCB in October 27th. Send out email in tandem (Kathleen and Becky) to AVA distribution email.

Carryover action items:

- [ ] JD and the va.gov AVA integration team will look for folks with KQL (Kusto Query Language) experiennce to help massage the data needed for KPIs.
- [ ] Joe - Present API Docs and granular project plan to this meeting on Thursday (10/19).
- [ ] Joe - Incorporate the steps for "done" in the granular project timeline.


----

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
