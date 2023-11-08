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
🟩 | Done |
🟥 | Blocked |

| Artifact | Endpoint | Source | API Status | Integration | Notes | Docs |
|---|---|---|:---:|:---:|---|:---:|
Status | GET /ping | Dynamics | 🟩 | 🟨 |  | [link] |
Form | GET /topics?[id] | Dynamics | ⬜ | ⬜ |  | [link] |
Form | GET /alerts | Dynamics | ⬜ | ⬜ |  | [link] |
Form | PUT /inquiry/new | Dynamics | ⬜ | ⬜ |  | [link] |
Form | GET /inquiry?{num} | Dynamics | ⬜ | ⬜ | inquiry by number | [link] |
Dashboard | GET /inquiries | Dynamics | ⬜ | ⬜ | dahsboard inquiries | [link] |
Dashboard | GET /inquiries/search?{txt} | Dynamics | ⬜ | ⬜ | inquiry and reply search | [link] |
Dashboard | GET /inquiry/{id}/replies | Dynamics | ⬜ | ⬜ | | [link] |
Dashboard | PUT /inquiry/{id}/reply/new | Dynamics | ⬜ | ⬜ |  | [link] |
Dashboard | PUT /attachment/new?{id} | Dynamics | ⬜ | ⬜ |  | [link] |
Dashboard | GET /attachment?{id} | Dynamics | ⬜ | ⬜ |  | [link] |
Form | GET /facilities?{id} | Lighthouse | ⬜ | ⬜ |  | [link] |
Form | GET /facilities?{latlong} | Lighthouse | ⬜ | ⬜ |  | [link] |
Form | GET /facilities/ed?{id} | Dynamics? | ⬜ | ⬜ | likely Dynamics | [link] |
Form | GET /facilities/ed?{latlong} | Dynamics? | ⬜ | ⬜ | likely Dynamics | [link] |
Form | GET /zipcodes?{prefix} | Lighthouse? | ⬜ | ⬜ |  | [link] |
Form | GET /states | Lighthouse | ⬜ | ⬜ |  | [link] |
Form | GET /countries | Lighthouse | ⬜ | ⬜ |  | [link] |
Dashboard | GET /profile | VA Profile | ⬜ | ⬜ | VA Profile | [link] |
Dashboard | ~PUT /profile/new~ | VA Profile | ⬜ | ⬜ | VA Profile  | [link] |
Dashboard | ~POST /profile~ | VA Profile | ⬜ | ⬜ | VA Profile | [link] |
Form | ~GET /states~ | Dynamics | ⬜ | ⬜ |  | [link] |
Form | ~GET /provinces~ | Dynamics | ⬜ | ⬜ |  | [link] |
Form | ~GET /inquiry?[id]~ | Dynamics | ⬜ | ⬜ | | [link] |
Form | ~PUT /attachment?[id]~ | Dynamics | ⬜ | ⬜  |  | [link] |
