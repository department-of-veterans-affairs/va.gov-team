# IA design for secure messaging tool
**Team:** MyHealth

**Product/Feature:** Secure messaging tool (Phase 0)

**Background/Context:** In this first phase, we are migrating a modernized secure messaging to VA.gov. It will migrate as a standalone tool but will eventually be part of the My Health portal in late 2023. 

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/42428

**Feedback created:** 12/15/2022

**Last update:**

**On this page:**
- [User/Page Flows](#flows)
- [IA Structure, URLS and Breadcrumbs](#map)
- [Changes to core navigation](#nav)
- [Redirects](#redirects)
- [Search Best Bets](#search)
- [Meeting Notes](#notes)

## <a name="flows">User/Page flows</a>
For phase 0, people will enter the tool via email invite only. There will be no entry points within VA.gov.

The secure messaging tool will follow the upcoming My Health portal’s left navigation when it launches. In the meantime, it will have its own left nav.
User flow provided by product team: https://www.sketch.com/s/77fd8aec-67b1-446d-b64a-8b942865be82/p/6FFCD430-73CB-4B8E-9853-A026EFCFA024/canvas

## <a name="map">IA structure, URLS and breadcrumbs</a>
Page-level specifications, like page titles (H1), URL, and breadcrumb. 

**Important:** Please confirm page names and H1s with Sitewide Content team. Please let Sitewide IA know when the URL parameters are determined by engineers. 

Secure messages tool landing page:
* **H1/Page title**: Messages (confirm this with Sitewide Content. Last string in URL and breadcrumb would match the actual name)
* **URL structure**: https://www.va.gov/my-health/messages
* **Breadcrumb**: None for phase 0.

**Note on breadcrumb:** This breadcrumb does not match the actual placement of this tool within the IA, instead it is intentionally utilizing a false hierarchy to ensure each segment provides a visitor with valid landing pages that match how they can access the tool in the initial phases.  This breadcrumb will need to be updated once the My health landing page is launched.

## Subsequent pages
Subsequent pages/views within the messages tool will use this structure:

### Second-level pages within the messaging tool (Inbox, Drafts, Sent, Trash, My Folders, Message FAQ, and Compose.

* **H1/Page title**: Check with Sitewide Content
* **URL structure**: https://www.va.gov/my-health/messages
* **Breadcrumb**: There will be no breadcrumbs for phase 0. 

### Third-level pages (detail views and results views)

#### Conversation detail
* **H1/page title:** Check with Sitewide Content
* **Breadcrumb:** Back link to return to previous view

#### Search results
* **H1/page title:** Check with Sitewide Content
* **Breadcrumb:** Back link to return to previous view

#### Edit draft
* **H1/page title:** Check with Sitewide Content
* **Breadcrumb:** Back link to return to previous view

#### Compose new message
* **H1/page title:** Check with Sitewide Content
* **Breadcrumb:** Back link to return to previous view

#### Trash/archive conversation detail
* **H1/page title:** Check with Sitewide Content
* **Breadcrumb:** Back link to return to previous view

#### Individual custom folder
* **H1/page title:** Check with Sitewide Content
* **Breadcrumb:** Back link to return to previous view

#### Create custom folder
* **H1/page title:** Check with Sitewide Content
* **Breadcrumb:** Back link to return to previous view

## <a name="nav">Changes to core navigation (entry/exit points)</a>
For this initial phase, there are no changes to the core navigation. More changes will be determined as secure messages becomes of the My Health portal in 2024.

## Visual site map
 ![image](https://user-images.githubusercontent.com/34143147/207992999-1ce45be1-69e5-441d-b1e1-3d96f25a6034.png)
 <img width="468" alt="image" src="https://user-images.githubusercontent.com/34143147/207993014-766b089a-d49b-4348-bb96-ffce2336c82f.png">
 
 ## <a name="links">Cross-linking</a>
 None at this time.
 
 ## <a name="redirects">Redirects</a>
 * The root URL for the messages tool (https://www.va.gov/my-health) will be temporarily redirected to https://www.va.gov/my-health/messages since the My Health portal won't exist yet.
 
 **Note:** When the My Health portal is ready, https://www.va.gov/my-health will point to it.
 Please submit a request for the redirect using the Redirect Request Issue Template at least 2 weeks in advance.
For more information, see the Redirect Request Process.

## <a name="bets">Search best bets</a>
* None

## <a name="notes">Additional Notes/Recommendations</notes>
### Required:
* Confirm H1s for each view with Sitewide Content.
* The core URLs are provided in this doc. Engineers will determine final URLs with parameters and will notify Sitewide IA of those parameters.
* Have accessibility review next design iteration and coded prototype before moving to staging.
### Recommended:
* Test landing page on messages home to determine usefulness of content.
