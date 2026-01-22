# IA design for secure messaging tool
**Team:** My HealtheVet Secure Messages

**Product/Feature:** Secure Messages

**Change log/updates:** 
- 08/2025 - Sara - Updating the "start a new message" flow in order to prepare for integration with Oracle Health EHR system data
- 06/2025 - Sara - MHV Classic version of SM is being sunset on 6/4/2025 - users will be redirected to SM on VA.gov.
- 05/2025 - Sara - Beginning to plan for the integration of OH/Cerner users in the new version of the tool. The /new-message flow will need to be updated to accommodate an extra screen in order to step users through a flow based on how triage group data are organized in that EHR system. New features also include surfacing recent recipients and updated UI for editing contact lists (VistA only).
- 03/2025 - Sara - Links on VA.gov connect all users to the new tool (no longer route to MHV Classic version)
- 12/20/2024 - Sara - All tools in Phase 2 (open to all users - no longer in pilot phase) 
- 06/2024 - Sara - Integrating secure messages into the full MHV on VA.gov portal, with secondary navigation to connect all tools.
- 10/2023 - SM is in Phase 0
- 12/19/2022 - Joni completed documentation
- 12/28/2022 - Mikki - added link to phased roll-out Mural, updated image of visual site map to represent full launch IA, simplified URL/breadcrumb info, other minor copy updates
- 1/11/2023 - Mikki - updated sitemap to represent core pages in structure, dynamic views, and sub-task flows;  updated breadcrumbs for My folders and Advanced Search pages

**On this page:**
- [User/Page Flows](#flows)
- [IA Structure, URLS and Breadcrumbs](#map)
- [Changes to core navigation](#nav)
- [Redirects](#redirects)
- [Meeting Notes](#notes)

## <a name="map">IA structure, URLS and breadcrumbs</a>
Page-level specifications, like page titles (H1), URL, and breadcrumb. 

**IA structure / sitemap**

<img width="784" alt="Screenshot 2025-06-03 at 1 56 06 PM" src="https://github.com/user-attachments/assets/30ff9af6-a27b-49c4-8b61-f640b6c21f4a" />

## Main product pages
| Page title |URL | Breadcrumb | Title tag |
|----|----------|-------------|-----------|
|Messages: Inbox | va.gov/my-health/secure-messages/inbox | VA.gov home > My HealtheVet > Messages: Inbox | Messages: Inbox \| Veterans Affairs |
|Messages: Sent | va.gov/my-health/secure-messages/sent | VA.gov home > My HealtheVet > Messages: Sent | Messages: Sent \| Veterans Affairs |
|Messages: Drafts | va.gov/my-health/secure-messages/drafts | <- Back | Messages: Drafts \| Veterans Affairs |
|Messages: Trash | va.gov/my-health/secure-messages/trash | <- Back | Messages: Trash \| Veterans Affairs |
|Messages: More folders | va.gov/my-health/secure-messages/folders | VA.gov home > My HealtheVet > Messages: More folders | Messages: More folders \| Veterans Affairs |

## New message task flow
|Page title |URL | Breadcrumb | Title tag |
|----|----------|-------------|-----------|
|[Interstitial page] Only use messages for non-urgent needs | va.gov/my-health/secure-messages/new-message | VA.gov home > My HealtheVet > Start a new message  | Only Use Messages For Non-Urgent Needs \| Veterans Affairs |
| Care teams you recently sent messages to | va.gov/my-health/secure-messages/new-message/recent | <-Back | Recently Messaged Care Teams  - Start Message \| Veterans Affairs |
| Select care team | va.gov/my-health/secure-messages/new-message/select-care-team | <-Back | Select Care Team - Start Message \| Veterans Affairs |
| Can't find your care team? | va.gov/my-health/secure-messages/new-message/care-team-help | <-Back | Care Team Help - Start Message \| Veterans Affairs |
| Messages: Contact list | va.gov/my-health/secure-messages/new-message/contact-list | <-Back | Messages: Contact List \| Veterans Affairs |
| Start message| va.gov/my-health/secure-messages/new-message/start-message | <-Back | Start Message \| Veterans Affairs |
 
 ## <a name="redirects">Redirects</a>

|URL | Redirect|
|-----|-------|
|va.gov/my-health/secure-messages/ | va.gov/my-health/secure-messages/inbox |
 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 

* Test landing page on messages home to determine usefulness of content.

## Archive
Outdated information and links to IA resources and tickets from previous iterations on this product:

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/42428

**Feedback created:** 12/15/2022

- For phase 0, people will enter the tool via email invite only. There will be no entry points within VA.gov. Additional entry points will be added as the new tool is opened up to more visitors.  
- The secure messaging tool will live within the My Health patient portal when it launches. In the meantime, secure messaging will be a standalone tool on VA.gov.
- The phased launch and entry point requirements are documented in the [Phased roll-out - UX and flow impacts mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a)
