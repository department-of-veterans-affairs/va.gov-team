## README.md

This is the list of APIs that the VA.gov UI will consume, in priority order. The priority was determined by:

1. Ping endpoint first, as the simplest test of the plumbing.
2. Form APIs before Dashboard APIs (since we'll be working on Forms first).
3. APIs that can only be fed by Dynamics APIs (data that only lives in Dynamics).
4. All other endpoints, in the general order that we plan to attack them.

## Hey! The Links Don't Work!

The links in this document are intentionally disabled. The AVA CRM Team and the AVA FE Team are currently collaborating on the API design and definitions. As the details are ironed out, the subordinate pages will be cleaned up and linked from this document.

## API Integration Status

|Color | Status |
|---|---|
⬜ | Not Started |
🟨 | In Progress |
🟦 | Paused |
🟩 | Done |
🟥 | Blocked |

Note: The CRM team will share endpoint designs with the front-end team as they complete them.

| Artifact | Endpoint | Source | AVA CRM | AVA FE | Phase | Notes |
|---|---|---|:---:|:---:|---|---|
Status | [GET /ping](Status_Ping.md) | Dynamics | 🟩 | 🟨 | integration | Khoa pending correct configuration to test in staging  | 
Form | [GET /topics?{id}](Form_GetTopics.md) | Dynamics | 🟨 | ⬜ | development | CRM team waiting on new team to start pair programing later this week | 
Form | [GET /announcements](Form_RetrieveBannerMessage.md) | Dynamics | 🟨 | ⬜ | design | CRM team to complete design of all endpoints by 11/29| 
Form | [GET /inquiry?{num}](Form_GetInquiry.md) | Dynamics | 🟨 | ⬜ | design | | 
Dashboard | [GET /inquiry/{id}/replies](Dashboard_RetrieveCorrespondence.md) | Dynamics | 🟨 | ⬜ | design | |
Form | [GET /schools?{code}](Form_SchoolFacilityCodes.md) | Dynamics | 🟨 | ⬜ | design |  | 
Form | [PUT /inquiry/new](Form_SubmitInquiry.md)  | Dynamics | 🟦 | ⬜ | design | |  
Dashboard | [PUT /inquiry/{id}/reply/new](Dashboard_SubmitAReply.md) | Dynamics | 🟨 | ⬜ | design |  | 
Dashboard | [PUT /attachment/new?{id}](Dashboard_UploadFile.md) | Dynamics | 🟨 | ⬜ | design |  | 
Dashboard | [GET /attachment?{id}](Dashboard_GetAttachment.md) | Dynamics | 🟨 | ⬜ | design | | 
Dashboard | [GET /inquiries](Dashboard_RetrieveInquiries.md) | Dynamics | 🟨 | ⬜ | design | | 
Form | [GET /zipcodes?{prefix}](Form_ZipCodes.md) | Lighthouse | N/A | ⬜ | design |  | 
Form | [GET /states](Form_States.md) | Lighthouse | N/A | ⬜ | design | |  
Form | GET /countries | Lighthouse | N/A | ⬜ | design | | 
Form | [GET /facilities?{code}](Form_MedicalFacilities.md)  | Lighthouse | N/A | ⬜ | design |  | 
Dashboard | [GET /profile](Dashboard_ReadMyProfile.md)   | VA Profile | 🟦 | ⬜ | design | VA Profile | 

