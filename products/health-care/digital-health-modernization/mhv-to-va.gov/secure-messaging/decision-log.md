# Secure Messaging Decision Log
Please log key decisions related to the below practice areas, including date, who made the decision, and a description of the decision and any specific rationale behind it.

## Product
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|7/16/25|Robyn Singleton, Patrick Bateman, Sylvia Palmer, Becky Phung|Instead of using plain language naming guidelines we developed ([review in this Excel](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7B9B8985D5-8E0B-482C-B370-BB8240060D65%7D&file=2024.07.29%20-%20MVP%20triage%20group%20types%20and%20subgroups.xlsx&action=default&mobileredirect=true&ovuser=e95f1b23-abaf-45ee-821d-b7ab251ab3bf%2CRobyn.Singleton%40VA.GOV&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNTA0MTcxOTMxMSJ9)), use OH naming guidelines instead ([review in this pdf in SharePoint](https://dvagov.sharepoint.com/sites/HealthApartment/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=ih4onZ&CID=6e66f097%2D817b%2D4b50%2D9658%2Dee7cdd0dc869&FolderCTID=0x012000E6CB91B251F8F14F832E520FAF90885D&id=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FOH%20guidelines%2FMessage%20Pool%20Standardization%20Style%20Guide%205%2E28%2E%20as2%20dck%2Epdf&parent=%2Fsites%2FHealthApartment%2FShared%20Documents%2FSecure%20Messaging%2FTriage%20Group%20Naming%2FOH%20guidelines)). This means MHV coordinators at VISTA sites will have to update current names to match OH naming guidelines.|All care team names will eventually have to follow OH naming guidelines. This decision avoids having to change care team names twice (i.e. change to align with plain language guidelines, then OH guidelines).|
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |

## Functional (How it works)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |

## Design (How it looks)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|12/20/2022|Carnetta Scruggs, Patty Henry, Bhanu Goparaju|For the MVP, users will not be able to reply to messages after 45 days of inactivity on their end. This functionality applies to both new replies, and replies that were saved into the drafts folder prior to the 45-day expiration date. This behavior will mimic MHV Legacy for the SM MVP, though research and ideation will be required as we iterate further.| Legacy allows the user to copy/paste draft messages into a new message, which is acceptable for the time being. However, a more accessible, user friendly solution should be explored through Veteran research.|
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |


## Research (How it tests)
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |

## Content & IA
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
| 8/30/23 |  Coulton Bunney, Sara Sterkenburg, Mikki Northuis   |   SM Phase 1 will maintain current URL structure    | Simplifies changes moving into Phase 1 and allows pages to be held together with "Messages" URL slug.  |
| 8/30/23 |  Coulton Bunney, Sara Sterkenburg, Mikki Northuis | SM Phase 1 will eliminate Messages landing page  | The page has minimal value and requires users to have an extra click every time they try to get into their inbox. Removing it will improve UX.|
| 8/30/23 | Coulton Bunney, Sara Sterkenburg, Mikki Northuis |  SM Phase 1 will redirect Messages landing page to /inbox |  This is to account for any users who hack their URL up to /messages, so that they will not get an empty directory. |
| 8/30/23 |  Coulton Bunney, Sara Sterkenburg, Mikki Northuis |  SM Phase 1 side navigation will change due to removal of landing page |  Will use existing sidenav component in DS with "messages" as clickable container that expands/collapses but does not have a page of it's own. All sub-pages (Inbox, Drafts, Sent, Trash, My folders) will fall beneath it.|
| 8/30/23 | Coulton Bunney, Sara Sterkenburg, Mikki Northuis |  SM phase 1 breadcrumbs will now expose the MHV on VA.gov landing page |  Now that SM is moving into "try me" phase, we will expose breadcrumbs that link users up to the MHV on VA.gov landing page (which must also be at 100% visibility by SM Phase 1 launch). List view pages will have traditional vertical breadcrumbs: i.e. "Home < My HealtheVet < Messages: Inbox" and detailed message view pages will have a simplified horizontal back breadcrumb: i.e. "< Back to Messages: Inbox" |
|3/12/2024|Kaitlin Fink, Sara Sterkenberg, Joel Calpumpong, Bobby Bailey|Interstitial page will not have it's own URL. Action link to continue to start a new message on interstitial page will be changed to a button to meet accessibility needs.|We considered pros and cons to a button vs. a new URL.  Decision at this time is to take the past of least resistance and solve the accessibility issue first.  We want to learn from this and can always move to a new URL in the future. If we consider creating a new URL we will have to manage that internally when we begin to cross-link to ensure users are landing on the interstitial message before the start new message page.|
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |

## Engineering
| Date | Decision Maker(s) | Description of Decision | Rationale |
|------|-------------------|-------------------------|-----------|
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |
|      |                   |                         |           |

