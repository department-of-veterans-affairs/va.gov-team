# IA design for secure messaging tool
**Team:** My HealtheVet Secure Messages

**Product/Feature:** Secure Messages

**Change log/updates:** 
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

**Inbox:**
- **H1**: Messages: Inbox
- **URL**: https://www.va.gov/my-health/secure-messages/inbox
- **Breadcrumb**: VA.gov home > My HealtheVet > Messages: Inbox

**Sent**:
- **H1**: Messages: Sent
- **URL**: https://www.va.gov/my-health/secure-messages/sent
- **Breadcrumb**: VA.gov home > My HealtheVet > Messages: Sent

**Drafts**:
- **H1**: Messages: Drafts
- **URL**: https://www.va.gov/my-health/secure-messages/drafts
- **Breadcrumb**: VA.gov home > My HealtheVet > Messages: Drafts

**Trash**:
- **H1**: Messages: Trash
- **URL**: https://www.va.gov/my-health/secure-messages/trash
- **Breadcrumb**: VA.gov home > My HealtheVet > Messages: Trash

**More folders**:
- **H1**: Messages: More folders
- **URL**: https://www.va.gov/my-health/secure-messages/folders
- **Breadcrumb**: VA.gov home > My HealtheVet > Messages: More folders

**Start a new message flow**:
- **URLs**:
  - Interstitial page `https://www.va.gov/my-health/secure-messages/new-message/`
  - Recent recipients page `https://www.va.gov/my-health/secure-messages/new-message/recent-recipients/`
  - Select recipient page `https://www.va.gov/my-health/secure-messages/new-message/select-recipient/`
  - Can't find my care team help page `https://www.va.gov/my-health/secure-messages/new-message/care-team-help/`
  - Start message page `https://www.va.gov/my-health/secure-messages/new-message/start-message/`
- **Breadcrumbs**: <- Back

 
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
