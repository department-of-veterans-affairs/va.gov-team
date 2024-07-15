# MHV to VA.gov Landing Page Decision Log Template
Please log key MHV to VA.gov Landing Page decisions related to the below practice areas, including date, who made the decision, a description of the decision and any specific rationale behind it.  For decisions about specific products, please use the decision log within that products document folder.

## Product
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| 2/28/2023     |Patrick Bateman                   | Landing page rollout won't have a "trusted users" phase; we will start with 5% of users.                        | Would like to follow the same pattern used for other VA.gov apps          |
| 6/4/2024 | Mikki/Kaitlin/CAIA | Landing page will not have an unauthenticated version | Unauthenticated information about MHV will be centralized in unauth areas of the website, most likely R&S (resources & support) |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## Functional (How it works)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| 4/10/24 | Cartographers, Patrick | links to Spotlight articles on MHV Classic should open in same tab, with SSOe session intact (using eauth deep-links) | the alternative of opening them in a new tab, _without_ SSOe session intact, may make sense at a later point in the transition when MHV Classic is no longer a central part of the health experience |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## Design (How it looks)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|2/1/2023      |Lauren Alexanderson                   |MVP should include only the most critical stuff that will be available to start                         |Deliver early and often; starting point for continuous improvement           |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


## Research (How it tests)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## Content & IA
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| March 2024 | CAIA | Supply re-ordering benefit hub page will get a "simple" sign-in widget | As we move the supply reorder app under /my-health/, users should be authenticated already for a good experience |
| 5/28/2024 | Patrick + tool POs | Pending tool team approval, users will be routed ("route guard") to the MHV landing page to receive account-based alerts (eg "Verify your identity" | Rules are the same for most health tools; so reduce the number of places in codebase that where any new language around these alerts would need to be implemented |
|  |  |  |  |
|  |  |  |  |

## Engineering
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| 4/1/23 | Patrick Bateman | will implement demographics service from VA Profile (for PreferredName) using older API, not v3 | v3 is not ready for us and is a new pattern for VAgov, outside this team's expertise |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
