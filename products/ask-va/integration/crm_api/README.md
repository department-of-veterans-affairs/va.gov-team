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
Status | GET /ping | Dynamics | 🟩 | 🟨 |  | [link] |
Form | GET /topics?[id] | Dynamics | ⬜ | ⬜ |  | [link] |
Form | PUT /inquiry/new | Dynamics | ⬜ | ⬜ |  | [link] |
Form | GET /alerts | Dynamics | ⬜ | ⬜ |  | [link] |
Dashboard | GET /inquiries?[num] | Dynamics | ⬜ | ⬜ | dahsboard / find by inquiry number | [link] |
Dashboard | GET /search?[text] | Dynamics | ⬜ | ⬜ |  | [link] |
Dashboard | GET /replies | Dynamics | ⬜ | ⬜ | | [link] |
Dashboard | PUT /reply?[id] | Dynamics | ⬜ | ⬜ |  | [link] |
Dashboard | PUT /attachment/new | Dynamics | ⬜ | ⬜ |  | [link] |
Dashboard | GET /attachment?id | Dynamics | ⬜ | ⬜ |  | [link] |
Dashboard | PUT /profile/new | VA Profile | ⬜ | ⬜ | VA Profile  | [link] |
Dashboard | GET /profile | VA Profile | ⬜ | ⬜ | VA Profile | [link] |
Dashboard | POST /profile | VA Profile | ⬜ | ⬜ | VA Profile | [link] |
Form | Medical Facilities | Lighthouse/Dynamics | ⬜ | ⬜ | Likely pulled from Lighthouse | [link] |
Form | School Facility Codes | WEAMS(?)/Dynamics | ⬜ | ⬜ | Likely pulled from Dynamics | [link] |
Form | GET /states | Lighthouse/Dynamics | ⬜ | ⬜ |  | [link] |
Form | GET /zipcodes?[prefix] | Lighthouse/Dynamics | ⬜ | ⬜ |  | [link] |
Form | GET /provinces | Lighthouse/Dynamics | ⬜ | ⬜ |  | [link] |
Form | ~GET /inquiry?[id]~ | Dynamics | ⬜ | ⬜ | | [link] |
Form | ~PUT /attachment?[id]~ | Dynamics | ⬜ | ⬜  |  | [link] |
