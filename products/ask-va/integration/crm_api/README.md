# API Integration Status

## Notes
* AVA CRM Team maintains an API Contract document that lives separately from this repo.
* The documentation here is kept in sync with the AVA CRM Team API Contract document
* The endpoints described here are between AVA FE's backend and the AVA CRM Team's API

## Legend

|Color | Status | Description |
|---|---|---|
⬜ | Not Started | Not started |
🟨 | In Progress | design or development work has begun |
🟦 | Paused | research is incomplete or product decisions need to be made |
🟩 | Done | endpoint is deployed and accessible in staging environment |
🟥 | Blocked | work cannot continue until issues are resolved |


| Phase | Description |
|:---:|---|
| design | documentation being generated and synced between teams | 
| development | design is complete and both teams are working on building their respective endpoint |
| integration | endpoints are deployed to staging for both teams. Communication between the endpoints is being validated |
| production | endpoints are deployed to production for both teams. |

## Status

| Artifact | Endpoint | Source | AVA CRM | AVA FE | Phase | Notes |
|---|---|---|:---:|:---:|---|---|
Status | [GET /ping](Status_Ping.md) | Dynamics | 🟩 | 🟨 | integration | Khoa pending correct configuration to test in staging  | 
Form | [GET /topics?{id}](Form_GetTopics.md) | Dynamics | 🟨 | ⬜ | development | CRM team waiting on new team to start pair programing later this week | 
Form | [GET /announcements](Form_RetrieveBannerMessage.md) | Dynamics | 🟨 | ⬜ | design | CRM team to complete design of all endpoints by 11/29| 
Dashboard | [GET /inquiries](Dashboard_RetrieveInquiries.md) | Dynamics | 🟨 | ⬜ | design | | 
Form | [GET /inquirystatus?{inquiry_number}](Form_GetInquiryStatus.md) | Dynamics | 🟨 | ⬜ | design | Inquiry Status Retrieval| 
Dashboard | [GET /inquiry/{id}/replies](Dashboard_RetrieveCorrespondence.md) | Dynamics | 🟨 | ⬜ | design | |
Form | [GET /schools?{code}](Form_SchoolFacilityCodes.md) | Dynamics | 🟨 | ⬜ | design |  | 
Form | [PUT /inquiry/new](Form_SubmitInquiry.md)  | Dynamics | 🟦 | ⬜ | design | |  
Dashboard | [PUT /inquiry/{id}/reply/new](Dashboard_SubmitAReply.md) | Dynamics | 🟨 | ⬜ | design |  | 
Dashboard | [PUT /attachment/new?{id}](Dashboard_UploadFile.md) | Dynamics | 🟨 | ⬜ | design |  | 
Dashboard | [GET /attachment?{id}](Dashboard_GetAttachment.md) | Dynamics | 🟨 | ⬜ | design | | 
Form | [GET /zipcodes?{prefix}](Form_ZipCodes.md) | Lighthouse | N/A | ⬜ | design |  | 
Form | [GET /states](Form_States.md) | Lighthouse | N/A | ⬜ | design | |  
Form | [GET /countries](Form_GetCountries.md) | Lighthouse | N/A | ⬜ | design | | 
Form | [GET /facilities?{code}](Form_MedicalFacilities.md)  | Lighthouse | N/A | ⬜ | design |  | 
Dashboard | [GET /profile](Dashboard_ReadMyProfile.md)   | VA Profile | 🟦 | ⬜ | design | VA Profile | 

