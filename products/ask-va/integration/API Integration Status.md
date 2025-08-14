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
🟡 | Ready for Dev | development can begin |
🟨 | In Progress | design or development work has begun |
🟦 | Paused | research is incomplete or product decisions need to be made |
🟩 | Done | endpoint is deployed and accessible in staging environment |
🟥 | Blocked | work cannot continue until issues are resolved |



| Phase | Description |
|:---:|---|
| design | documentation being generated and synced between teams | 
| ready for dev | design is complete and development can begin building the endpoint |
| development | design is complete and both teams are working on building their respective endpoint |
| integration | endpoints are deployed to staging for both teams. Communication between the endpoints is being validated |
| production | endpoints are deployed to production for both teams. |

## Process
1) When working on syncing documentation the phase will be "design".
2) When documentation sync is complete, the phase will go to "ready for dev" with a yellow circle until development starts.
3) When documentation sync is complete, the phase will go to "development" with a yellow box.
4) When an endpoint is deployed to staging, the box will go green and the phase will go to "integration".
5) When integration testing is complete and the endpoint has been deployed to production, the status will go to "production"

## Status

| Artifact | Endpoint | Source | AVA CRM | VA.gov Static | VA.gov Live | VA.gov UI | E2E Testing | Notes |
|---|---|---|:---:|:---:|:---:|:---:|:---:|---|
Status | [GET /ping](crm_api/Status_Ping.md) | CRM | 🟩 | 🟩 | 🟩 | N/A | N/A |  | 
Form | [GET /topics?{id}](crm_api/Form_GetTopics.md) | CRM | 🟩 | 🟩 | 🟩 | 🟩 | ⬜ |  | 
Form | [GET /optionset?{name}](crm_api/Form_GetOptionSet.md) | CRM | 🟩 | 🟩 | 🟩 | 🟩 | ⬜ | | 
Form | [GET /profile](crm_api/AVA_Profile.md) from AVA | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ | Needed after all; Adding back in 6/3 | 
Form | [GET /announcements](crm_api/Form_RetrieveAnnouncements.md) | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ | Review with Design 6/6 | 
Dashboard | [GET /inquiries](crm_api/Dashboard_RetrieveInquiries.md) | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ | CRM handed off this endpoint on 02/27 | 
Form | [POST /inquiries/auth](crm_api/Form_SubmitInquiry.md)  | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ | integration into UI is in backlog |  
Form | [POST /inquiries](crm_api/Form_SubmitInquiry.md)  | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ | integration into UI is in backlog |  
Dashboard | [GET /attachment?{id}](crm_api/Dashboard_GetAttachment.md) | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ |  | 
Form | [GET /inquirystatus?{inquiryNumber}](crm_api/Form_GetInquiryStatus.md) | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ |  | 
Dashboard | [GET /inquiry/{id}/replies](crm_api/Dashboard_RetrieveReplies.md) | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ |  |
Dashboard | [POST /inquiry/{id}/reply/new](crm_api/Dashboard_SubmitAReply.md) | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ |  | 
Dashboard | [POST /attachment/new?{inquiryNumber}](crm_api/Dashboard_UploadFile.md) | CRM | 🟩 | 🟩 | 🟩 | 🟡 | ⬜ | CRM handed off this endpoint on 03/11 | 
Form | [GET /health_facilities/{id}](lighthouse/Form_MedicalFacilities.md)  | Lighthouse | N/A | 🟩 | 🟩 | 🟩 | ⬜ |  | 
Form | [GET /education_facilities](crm_api/Form_SchoolFacilityCodes.md) | GI Bill Comparison Tool (GIBCT) | N/A | N/A | 🟩 | 🟩 | ⬜ |  | 
Form | GET /branch_of_service | VA Profile | N/A | N/A | 🟩 | 🟩 | ⬜ |  | 
Form | ~[GET /profile](va_profile/profile_processes.md) from VA~ | ~VA Profile~ | ~N/A~ | ~N/A~ | ~N/A~ | ~N/A~ | ~N/A~ | login provides profile data, no need to separate call to API | 

