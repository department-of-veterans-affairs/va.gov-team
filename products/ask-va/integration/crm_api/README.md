## README.md

This is the list of APIs that the va.gov UI will consume, in priority order. The priority was determined by:

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

| Artifact | Endpoint | Source | AVA CRM | AVA FE | Phase | Notes | Docs |
|---|---|---|:---:|:---:|---|---|:---:|
Status | GET /ping | Dynamics | 🟩 | 🟨 | integration | secrets store | ☑ [link](Status_Ping.md)  |
Form | GET /topics?[id] | Dynamics | 🟨 | ⬜ | development | | ☑ [link](Form_GetTopics.md) |
Form | GET /alerts | Dynamics | ⬜ | ⬜ | design | | ☑ [link](Form_RetrieveBannerMessage.md) |
Form | GET /inquiry?{num} | Dynamics | ⬜ | ⬜ | design | | ☑ [link](Form_RetrieveInquiryStatus.md) |
Form | GET /facilities?[code] | Lighthouse | ⬜ | ⬜ | design |  | [link](Form_MedicalFacilities.md) |
Form | GET /schools?[code] | Dynamics? | ⬜ | ⬜ | design | likely Dynamics | [link](Form_SchoolFacilityCodes.md) |
Form | GET /zipcodes?{prefix} | Lighthouse? | ⬜ | ⬜ | design |  | [link](Form_ZipCodes.md)  |
Form | GET /states | Lighthouse | ⬜ | ⬜ | design | |  [link](Form_States.md) |
Form | GET /countries | Lighthouse | ⬜ | ⬜ | design | | [link] |
Dashboard | GET /inquiries | Dynamics | ⬜ | ⬜ | design | | ☑ [link](Dashboard_RetrieveInquiries.md)  |
Dashboard | GET /inquiries/search?{txt} | Dynamics | ⬜ | ⬜ | design | | [link] |
Dashboard | GET /inquiry/{id}/replies | Dynamics | ⬜ | ⬜ | design | | ☑ [link](Dashboard_RetrieveCorrespondence.md) |
Dashboard | PUT /inquiry/{id}/reply/new | Dynamics | ⬜ | ⬜ | design |  | ☑ [link](Dashboard_SubmitAReply.md) |
Dashboard | PUT /attachment/new?{id} | Dynamics | ⬜ | ⬜ | design |  | [link](Dashboard_UploadFile.md) |
Dashboard | GET /attachment?{id} | Dynamics | ⬜ | ⬜ | design | | [link] |
Dashboard | GET /profile | VA Profile | 🟦 | ⬜ | design | VA Profile | [link](Dashboard_ReadMyProfile.md)  |
Form | PUT /inquiry/new | Dynamics | 🟦 | ⬜ | design | |  [link](Form_SubmitInquiry.md) |
