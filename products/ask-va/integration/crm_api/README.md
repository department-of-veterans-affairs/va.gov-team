## README.md

This is the list of APIs that the va.gov UI will consume, in priority order. The priority was determined by:

1. Ping endpoint first, as the simplest test of the plumbing.
2. Form APIs before Dashboard APIs (since we'll be working on Forms first).
3. APIs that can only be fed by Dynamics APIs (data that only lives in Dynamics).
4. All other endpoints, in the general order that we plan to attack them.


# API Integration Status

|Color | Status |
|---|---|
⬜ | Not Started |
🟨 | In Progress |
🟩 | Done |
🟥 | Blocked |

| Artifact | Endpoint | Source | API Status | Integration | Notes | Docs |
|---|---|---|:---:|:---:|---|:---:|
Status | GET /ping | Dynamics | 🟩 | 🟨 |  | [link](Status_Ping.md) |
Form | GET /topics?[id] | Dynamics | ⬜ | ⬜ |  | [link](form-get-topics.md) |
Form | PUT /inquiry/new | Dynamics | ⬜ | ⬜ |  | [link](Form_SubmitInquiry.md) |
Form | GET /alerts | Dynamics | ⬜ | ⬜ |  | [link](Form_RetrieveBannerMessage.md) |
Dashboard | GET /inquiries?[num] | Dynamics | ⬜ | ⬜ | dahsboard / find by inquiry number | [link](Dashboard_RetrieveInquiries.md) |
Dashboard | GET /search?[text] | Dynamics | ⬜ | ⬜ |  | link |
Dashboard | GET /replies | Dynamics | ⬜ | ⬜ | | [link](Dashboard_RetrieveCorrespondence.md) |
Dashboard | PUT /reply?[id] | Dynamics | ⬜ | ⬜ |  | [link](Dashboard_SubmitAReply.md) |
Dashboard | PUT /attachment/new | Dynamics | ⬜ | ⬜ |  | [link](Dashboard_UploadFile.md) |
Dashboard | GET /attachment?id | Dynamics | ⬜ | ⬜ |  | [link](Dashboard_DownloadFile.md) |
Dashboard | PUT /profile/new | VA Profile | ⬜ | ⬜ | VA Profile  | [link](Dashboard_CreateMyProfile.md) |
Dashboard | GET /profile | VA Profile | ⬜ | ⬜ | VA Profile | [link](Dashboard_ReadMyProfile.md) |
Dashboard | POST /profile | VA Profile | ⬜ | ⬜ | VA Profile | [link](Dashboard_UpdateMyProfile.md) |
Form | Medical Facilities | Lighthouse/Dynamics | ⬜ | ⬜ | Likely pulled from Lighthouse | [link](Form_MedicalFacilities.md) |
Form | School Facility Codes | WEAMS(?)/Dynamics | ⬜ | ⬜ | Likely pulled from Dynamics | [link](Form_SchoolFacilityCodes.md) |
Form | GET /states | Lighthouse/Dynamics | ⬜ | ⬜ |  | [link](Form_States.md) |
Form | GET /zipcodes?[prefix] | Lighthouse/Dynamics | ⬜ | ⬜ |  | [link](Form_ZipCodes.md) |
Form | GET /provinces | Lighthouse/Dynamics | ⬜ | ⬜ |  | [link](Form_CanadianProvinces.md) |
Form | ~GET /inquiry?[id]~ | Dynamics | ⬜ | ⬜ | | [link](Form_RetrieveInquiryStatus.md) |
Form | ~PUT /attachment?[id]~ | Dynamics | ⬜ | ⬜  |  | [link](Form_UploadFile.md) |
