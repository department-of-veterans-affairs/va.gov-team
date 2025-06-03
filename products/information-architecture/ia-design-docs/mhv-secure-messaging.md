# IA design for secure messaging tool
**Team:** MyHealth

**Product/Feature:** Secure messaging tool (Phase 0)

**Background/Context:** 
* 2025 - Remainder of year will be spent focusing on a pilot that integrates the OH/Cerner EHR into the front-end. 
* 2025 Milestone 2: June 4, 2025 - Remaining 3 major tools shut off on MHV Classic: SM, MR, Pharmacy. Also self-entered data, Account Activity Logs, Mental health resources, and many resources were also sunset on Classic. 
* 2025 Milestone 1: March 12, 2025 - Appointments has been shut off on MHV Classic. All of VA.gov now points to the VA.gov version of tools
* 2024 Phase 2: Medical Records has now launched on Va.gov & all tools have reached Phase 2 as of December 20, 2024. The experiences are also still available on MHV Classic and VA.gov points back to classic versions of tools at this time. 
* 2024 Phase 1.5: Secondary navigation released and all tools are connected to one another on VA.gov - however the rest of Va.gov does not point to them yet. And Medical Records is still not available on VA.gov
* 2023 Phase 1: Launched to all users on VA.gov and is accessible via a link in a "try me" banner on Classic, but is not connected to the overall VA.gov experience or to the other tools - they will remain "islands" until Phase 2
* 2023 Phase 0: We are migrating a modernized secure messaging to VA.gov. It will migrate as a standalone tool that is only accessible to a very small group of known test users, but will eventually be part of the My Health portal.

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/42428

**Feedback created:** 12/15/2022

**Last update:** 
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

## <a name="flows">User/Page flows</a>

- For phase 0, people will enter the tool via email invite only. There will be no entry points within VA.gov. Additional entry points will be added as the new tool is opened up to more visitors.  
- The secure messaging tool will live within the My Health patient portal when it launches. In the meantime, secure messaging will be a standalone tool on VA.gov.
- The phased launch and entry point requirements are documented in the [Phased roll-out - UX and flow impacts mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a)

User flow provided by product team: https://www.sketch.com/s/77fd8aec-67b1-446d-b64a-8b942865be82/p/6FFCD430-73CB-4B8E-9853-A026EFCFA024/canvas

## <a name="map">IA structure, URLS and breadcrumbs</a>
Page-level specifications, like page titles (H1), URL, and breadcrumb. 

**Site map when fully launched**

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/6dd9131b-94eb-46e8-8cd5-2eb7be928f7c)

<br>
 
**Messages tool landing page:**
- **H1**: TBD by Sitewide Content 
- **URL**: https://www.va.gov/my-health/messages
  - This is the canonical URL that will be used as the root for all consecutive pages within the messages tool. Additional sub-directories or parameters can be added to this as needed.  
- **Breadcrumb**: [VA.gov home](www.va.gov) > [My health](www.va.gov/my-health) > **Messages**
  - Note: The breadcrumb will be suppressed on this page for phase 0, and likely until the My health landing page is launched. 

**Pages: My folders, Advanced search**
- **H1**: TBD by Sitewide Content 
- **Breadcrumb**: [VA.gov home](www.va.gov) > [My health](www.va.gov/my-health) > **Messages**
  - Note: The breadcrumb will be suppressed on this page for phase 0, and likely until the My health landing page is launched. 

**Dynamic views of messages: Inbox, Drafts, Sent, Trash**
- **H1**: TBD by Sitewide Content 
- **Breadcrumb**: [VA.gov home](www.va.gov) > [My health](www.va.gov/my-health) > **Messages**
  - Note: The breadcrumb will be suppressed on this page for phase 0, and likely until the My health landing page is launched. 

**Sub-tasks: A user's custom folder, Compose, Message/conversation detail, Search results from any view, Advanced search results, Edit draft, Create folder**
- **H1/page title:** TBD by Sitewide Content 
- **Breadcrumb:** No breadcrumb, will include a "back" link to return to previous view


## <a name="nav">Changes to core navigation (entry/exit points)</a>

**Phase 0**
- There are no changes to the core navigation on VA.gov or MHV, all visitors will access the tool by direct link within an email only

**Phase 1-5**
- The entry point requirements will be defined as roll-out of this tool and the My health landing page progresses.


 
 ## <a name="redirects">Redirects</a>
 
 * The root URL for the My health patient portal (https://www.va.gov/my-health) will need to be temporarily redirected to avoid 404 errors for anyone who attempts to hack the URL to that sub-directory.  
 * This will likely be temporarily redirected back to the messages tool https://www.va.gov/my-health/messages/.
 * This redirect will need to be reversed with the My health landing page is launched.
 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 



## <a name="notes">Additional Notes/Recommendations</notes>
### Required:
* Confirm H1s for each view with Sitewide Content.
* The core URLs are provided in this doc. Engineers will determine URLs of sub-pages - sub-directories or parameters.  Please let Sitewide IA know the URLs of additional pages. 
* Have accessibility review next design iteration and coded prototype before moving to staging.
### Recommended:
* Test landing page on messages home to determine usefulness of content.
