# IA Design for Downloadable form 1095-B
**STATUS: FINAL**

**Product/Featue:** Download personal 1095b form <br>
**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/37639

**On this page:**
- [User flows, structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="ia"></a>User flows, IA Structure, URLs and Breadcrumbs <br>
*Description of how users will flow through the experience, site map, breadcrumb requirements, and final URLs.*

### User flow

![image](https://user-images.githubusercontent.com/20994159/156238052-63fe55b5-b318-47fb-a440-9a5dee62081f.png)

<br>

### Site map

![image](https://user-images.githubusercontent.com/20994159/157137004-0a5e19d4-c86c-4a8d-93d6-33944e0f5157.png)

- This feature will live within the Records hub on VA.gov
- A single page will support both unauth and auth users
  - Unauth users will see informational content and an option to sign in
  - Auth users will see informational content and an option to download their personal 1095b form
- Download will happen via the browser, a new page will not be rendered to download or provide confirmation

### URLs and breadcrumbs

**Page** | **URL** | **Breadcrumb** | **Notes**
--- | --- | --- | ---
Download form 1095b page   | www.va.gov/records/download-your-irs-1095-b   | Home > Records > [Page H1] |  Per Sitewide content, H1 of page will be: Download your IRS 1095-B tax form


## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**A/R/M** | **Page/component** | **Link destination** | **Label** | **Placement/description of change**
--- | --- | --- | --- | ---
Add   | [Records hub page](https://www.va.gov/records/)   | |  [defined by Sitewide content]   |  Placed as 5th option, after "Download your VA benefit letters".  Sitewide content to determine the link label and teaser text
Add   | Records left nav   |  TBD   |  Download your IRS 1095-B tax form |  Placed as 6th option, after "Download your VA benefit letters".  Although we do occasionaly shorten the left nav lable, it is best practice for the left nav label to match the H1. In this particular case, even a shortened version (which would closely match the URL segment) will still wrap to a 2nd line, so I recommend using the full H1.  

**Note:** The above table captures the primary entry points from within core navigation elements.  Additional entry points can be placed in content pages as needed. 

## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  None

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

