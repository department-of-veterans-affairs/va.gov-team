# API Integration Status

## Notes
* AVA CRM Team maintains an API Contract document that lives separately from this repo.
* The documentation here is kept in sync with the AVA CRM Team API Contract document
* The endpoints described here are between AVA FE's backend and external system endpoints
    *  When source is "Dynamics", that is an endpoint being developed by the AVA CRM Team
    *  When source is "Lighthouse", that is an endpoint that exists in [VA Lighthouse APIs](https://developer.va.gov/explore)
    *  When source is "VA Profile", that is referring to the VA.Gov Profile system

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

## Process
1) When working on syncing documentation the phase will be "design".
2) When documentation sync is complete, the phase will go to "development" with two white boxes until development starts.
3) When development starts, the box will go yellow.
4) When an endpoint is deployed to staging, the box will go green and the phase will go to "integration".
5) When integration testing is complete and the endpoint has been deployed to production, the status will go to "production"

## Status

| Artifact | Endpoint | Source | AVA CRM | AVA FE | Phase | Notes |
|---|---|---|:---:|:---:|---|---|
Status | [GET /ping](crm_api/Status_Ping.md) | Dynamics | 🟩 | 🟨 | integration | Khoa pending correct configuration to test in staging  | 
Form | [GET /topics?{id}](crm_api/Form_GetTopics.md) | Dynamics | 🟨 | ⬜ | development | CRM team waiting on new team to start pair programing later this week | 
Form | [GET /announcements](crm_api/Form_RetrieveAnnouncements.md) | Dynamics | ⬜ | ⬜ | design | CRM team to complete design of all endpoints by 11/29| 
Dashboard | [GET /inquiries](crm_api/Dashboard_RetrieveInquiries.md) | Dynamics | ⬜ | ⬜ | design | | 
Form | [GET /inquirystatus?{inquiryNumber}](crm_api/Form_GetInquiryStatus.md) | Dynamics | ⬜ | ⬜ | design | | 
Dashboard | [GET /inquiry/{id}/replies](crm_api/Dashboard_RetrieveReplies.md) | Dynamics | ⬜ | ⬜ | design | |
Form | [GET /schools?{facilityId}](crm_api/Form_SchoolFacilityCodes.md) | Dynamics | ⬜ | ⬜ | design |  | 
Form | [PUT /inquiry/new](crm_api/Form_SubmitInquiry.md)  | Dynamics | 🟦 | ⬜ | design | |  
Dashboard | [PUT /inquiry/{id}/reply/new](crm_api/Dashboard_SubmitAReply.md) | Dynamics | ⬜ | ⬜ | design |  | 
Dashboard | [PUT /attachment/new?{inquiryNumber}](crm_api/Dashboard_UploadFile.md) | Dynamics | ⬜ | ⬜ | design |  | 
Dashboard | [GET /attachment?{id}](crm_api/Dashboard_GetAttachment.md) | Dynamics | ⬜ | ⬜ | design | | 
Form | [GET /zipcodes?{prefix}](lighthouse/Form_ZipCodes.md) | Lighthouse | N/A | ⬜ | design |  | 
Form | [GET /states](lighthouse/Form_States.md) | Lighthouse | N/A | ⬜ | design | |  
Form | [GET /countries](lighthouse/Form_GetCountries.md) | Lighthouse | N/A | ⬜ | design | | 
Form | [GET /facilities?{code}](lighthouse/Form_MedicalFacilities.md)  | Lighthouse | N/A | ⬜ | design |  | 
Dashboard | [GET /profile](va_profile/Dashboard_ProfileSyncing.md)   | VA Profile | 🟦 | ⬜ | design | VA Profile | 

