# IA Design for Centralized forms - URL change work
**STATUS: In progress**

**Team:** Public Websites

**Resources**
- CAIA Intake ticket 
- [Public Websites ticket](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22163)
- IA Tracker
-[Centralized forms working mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696009952077/c8bad5a3f7128491afb4c6a1d749acbaba480d81?wid=1-1756499657822) 

**On this page:**
- [Navigation/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirets](#redirects)
- [Search best bets](#bestbets)
- [Launch coordination activities](#launch)


## <a name="flows"></a>Navigation/page flows <br>
*Illustration and/or description of how users will navigate to and flow through the experience for all impacted visitors typies. This helps identify key entry points and findability requirements, user flow scenarios, and content/messaging needs across various scenarios.*

<img width="498" height="243" alt="image" src="https://github.com/user-attachments/assets/12193c5e-0f16-43b1-aad7-59ccc7690d5a" />

## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

<img width="89" height="193" alt="image" src="https://github.com/user-attachments/assets/c621a731-891d-4298-acc7-4f428d4963b3" />


## <a name="url"></a>Page URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


**1) Forms landing page - Existing page**
- URL:
  - Current: www.va.gov/find-forms/
  - New: www.va.gov/forms/
- H1:
  - Current:  Find a VA form
  - New: VA forms
- Breadcrumb:
  - Current: VA.gov home > Find a VA form
  - New: VA.gov home > VA forms 
- Notes: 

**2) Form detail page - Existing/page**
- URL:
  - Current: www.va.gov/find-forms/about-form-[form-nbr]/, example www.va.gov/find-forms/about-form-10-10ez/
  - New: www.va.gov/forms/[form-nbr]/, example www.va.gov/forms/10-10ez/
- H1:
  - Current:  About VA Form 10-10EZ
  - New: No change at this time
- Breadcrumb:
  - Current: VA.gov home > Find a VA form > About VA Form [form number]
  - New: VA.gov home > VA forms > About VA Form [form number]  (no change to last segment)
- Notes:
  - The form number used as the URL segment should be pulled directly from the forms db
  - Any letters utilized in the form number should be lower case
  - Spaces should be replaced with a dash



## <a name="nav"></a>Entry points <br>

Teams must launch with at least one entry point that allows site visitors to navigate to the new content or feature. 

### Required entry point(s)

1. **Footer**
  - Link label: no change
  - Link destination:  www.va.gov/forms/


### Additional key entry points
_Any additional key locations that the page should be navigable from. Although these are not required for launch, they are critical to the findability of your content/feature.  Examples of key entry points include "About a form" pages, additional navigation component (top, left) placements, additional static pages where its prominently linked from, etc._

Additional links across the site will need to have the destination URL updated.  Link labels can be evaluated based on placement. 


##  <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience.* 

**For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) at least 2 weeks in advance.**  

Current URL | Redirect to | Notes
--- | --- | ---
www.va.gov/find-forms/ | www.va.gov/forms/  | 
www.va.gov/find-forms/about-form-[form-nbr]/ | www.va.gov/forms/[form-number] | These redirects should be 1:1, so the /about-form-10-10ez/ should redirect to /10-10ez/

**NOTE: When implementing redirects for the individual form detail pages, existing redirects in place should be reviewed and updated appropriately to avoid a redirect chain if possible.**

## <a name="bestbets"></a>Search best bets
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. Best bets are not implemented for every page, and not intended to be permanent.  They can aid in helping visitors find key content and features that are not ranking search well or competing with similar pages in search results. Existing best bets must be removed or updated when links/URLs change.*

Best bets are already in place for most of these pages.  Best bets will need to be updated to represent the correct URL destination. 

## <a name="launch"></a>Launch coordination <br>
*Communication when preparing for launch is critical to ensuring all supporting content, links, and messaging are implemented in a timely manner to ensure a good experience. Missing any of these steps can result in findability challenges, incorrect or misleading information, duplicate content, etc. *

Key task | Responsibility | When to complete | Additional info
--- | --- | --- | ---
URL changes | Public Websites |  |
Submit redirect request | Public Websites | at least 2 weeks prior to implementation  | 
Implement redirects | Public Websites | at the same time as the URL changes |
Update entry point destination URLs and labels | Content and IA team | After URL changes and redirects are in place |
Update best bet destination URLs | Content and IA team | After URL changes and redirects are in place | 




### Staged rollout
*Is the team planning a staged rollout? Roll-outs hidden behind a flipper flag need a static page to place a sign in widget or CTA on. Pages/sections where a sign in widget can't be implemented - find a form pages, within accordions, hub pages*

1. What is the team's staged rollout plan?
2. Which page will have the widget that controls views?
3. Does the team need to manage search-engine results during rollout?




<hr>
<hr>

