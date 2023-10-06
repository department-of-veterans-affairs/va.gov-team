# IA design for secure messaging tool
**Team:** MyHealth

**Product/Feature:** Secure messaging tool (Phase 0)

**Background/Context:** In this first phase, we are migrating a modernized secure messaging to VA.gov. It will migrate as a standalone tool but will eventually be part of the My Health portal in late 2023. 

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/42428

**Feedback created:** 12/15/2022

**Last update:** 
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
