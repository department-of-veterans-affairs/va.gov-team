# IA Design for Foreign Medical Program - Claim form
**STATUS: COMPLETE 2/10/2025**

**Tickets:**
- [CAIA intake ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/78275)
- [Collab cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77082)

**Supporting files:** 
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-2/product-outline.md)
- [FMP Figma file](https://www.figma.com/design/WYZCqWcS2gJWIqLtmQlvl7/FMP-Claim-Cover-Sheet-(10-7959f-2)?node-id=726-21596&p=f&t=r7uFTzWUW9KtTgTL-0)
- [FMP Registration and Claims discovery](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705521134491/52690602ad9bb3ef8f9cbc82d48bd9698e63e83f?wid=0-1738792614730) (IA mural)

**On this page:**
- [Navigation flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirets](#redirects)
- [Search best bets](#bestbets)
- [Launch coordination activities](#launch)


## <a name="flows"></a>Navigation flows <br>
*Illustration and/or description of how users will navigate to and flow through the experience for all impacted visitors typies. This helps identify key entry points and findability requirements, user flow scenarios, and content/messaging needs across various scenarios.*

![image of navigation flow](https://github.com/user-attachments/assets/70ba87dc-ee00-4bfe-a626-02b6dd428477)


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

- The FMP claim form is classified as a feature related to using, tracking, or managing your benefits and is therefore placed within the "Manage benefits" spoke
- An R&S page was originally created to support the FMP claim process with the understanding that there wouldn't be a claim process in the Veteran experience.  With this change, the R&S page will be moved out of R&S and become a new page within the Veteran health care benefit hub to support the online claim form. 

![image of sitemap](https://github.com/user-attachments/assets/f291c4c6-c186-4448-9ccd-c104e055c9df)

## <a name="url"></a>Page URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


1) **NEW - File an FMP claim static page**
    - DESCRIPTION:
      - This is a Drupal unauth content page that will provide general supporting information about the FMP claim form and process
      - This content is currently in an [R&S page](www.va.gov/resources/how-to-file-a-va-foreign-medical-program-claim/) that will be retired and redirected to this new page
    - URL: www.va.gov/health-care/file-foreign-medical-program-claim/
    - BREADCRUMB: 
      - Desktop: VA.gov home > [Health care hub page H1] > [File an FMP claim static page H1] 
        - Example: VA.gov home > Health care > File a claim for the Foreign Medical Program
      - Mobile: < [Health care hub page H1]
        - Example: < Health care
    - NOTES: 

2) **NEW - FMP claim form 10-7959f-2**
    - DESCRIPTION:
      - This is form flow for the FMP claim form 10-7959f-2.
      - The URL provided is the canonical URL for the form, all pages within the form flow will be nested under this URL.
    - URL: www.va.gov/health-care/file-foreign-medical-program-claim/file-claim-form-10-7959f-2/
    - BREADCRUMB: 
      - Desktop: VA.gov home > [Health care hub page H1] > [File an FMP claim static page H1] > [Claim form H1]
        - Example: VA.gov home > Health care > File a claim for the Foreign Medical Program > File a claim with VA Form 10-7959f-2
      - Mobile: < [File an FMP claim static page H1]
        - Example: < File a claim for the Foreign Medical Program
    - NOTES: 
      - All links on the site should link to the canonical URL of the form not the /introduction page.



## <a name="nav"></a>Entry points <br>

Teams must launch with at least one entry point that allows site visitors to navigate to the new content or feature. 

### Required entry point(s) for launch

1. **[File an FMP claim static page](www.va.gov/health-care/file-foreign-medical-program-claim/)** (New page)
   - DESCRIPTION:
     - This new static page must launch with the FMP claim form, it is the primary access point to the online claim form.
     - The link label and placement on the page will be determined by content.


2. **Health care benefit hub left nav**
    - In order to navigate to the new online claim form through the static content page, a link must be provided to the static content page.  The primary placement for this link is in the left nav.
    - PLACEMENT: 
      - The link option should be placed in the 2nd to last position, just above "Request a decision review or clinical appeal"
        - The order of these links are being rearranged with the [MHV work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/mhv-tool-landing-pages.md). That work is moving the "COVID-19 vaccines at VA" link to the 2nd to last position until this page can be removed. If it is still in the left nav at the time of this implementation, place this new link above the COVID-19 vaccines option (3rd from last).  The vaccine option will eventually be removed once that content is move to R&S.
    - LINK DETAILS:
      - Link label: Match the H1 of the destination page
      - Link destination: www.va.gov/health-care/file-foreign-medical-program-claim/
    - NOTES:
      - The claim form will not appear in the left nav, only the static landing page.  This is the pattern used across the site for tool landing pages - only the landing page appears. 

### Additional key entry points (post-launch)
_Any additional key locations that the page should be navigable from. Although these are not required for launch, they are critical to the findability of your content/feature.  Examples of key entry points include "About a form" pages, additional navigation component (top, left) placements, additional static pages where its prominently linked from, etc._

1. **[About form 10-7959f-2 page](https://www.va.gov/find-forms/about-form-10-7959f-2/)**
    - A link to the online form and supporting content should be added to the about form page.
    - PLACEMENT: Content will place per standard guidance for these pages.
    - LINK DETAILS:
      - Link label: Content will determine link label per guidance for these pages.
      - Link destination: www.va.gov/health-care/file-foreign-medical-program-claim/file-claim-form-10-7959f-2/
    - NOTES:
      - Always link to the canonical URL of the form, not the /introduction page.


##  <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience.* 

**For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) at least 2 weeks in advance.**  

Current URL | Redirect to | Notes
--- | --- | ---
www.va.gov/resources/how-to-file-a-va-foreign-medical-program-claim/ | www.va.gov/health-care/file-foreign-medical-program-claim/ | Moving R&S page to benefit hub
www.va.gov/health-care/foreign-medical-program/file-claim-form-10-7959f-2/ | www.va.gov/health-care/file-foreign-medical-program-claim/file-claim-form-10-7959f-2/ | Correct form URL. Ensure all form child pages are redirected. Ensure breadcrumb is properly updated to reflect corrected IA.


## <a name="bestbets"></a>Search best bets
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. Best bets are not implemented for every page, and not intended to be permanent.  They can aid in helping visitors find key content and features that are not ranking search well or competing with similar pages in search results. Existing best bets must be removed or updated when links/URLs change.*

**1. Best bet for [page name]** - 
- Destination page:
- Additional keywords:

## <a name="launch"></a>Launch coordination <br>
*Communication when preparing for launch is critical to ensuring all supporting content, links, and messaging are implemented in a timely manner to ensure a good experience. Missing any of these steps can result in findability challenges, incorrect or misleading information, duplicate content, etc. *

Key task | Responsibility | When to complete | Additional info
--- | --- | --- | ---
Communicate date of staging review | | Once scheduled |
Submit redirect request | | at least 2 weeks prior to implementation | 
Communicate launch date | | |




### Staged rollout
*Is the team planning a staged rollout? Roll-outs hidden behind a flipper flag need a static page to place a sign in widget or CTA on. Pages/sections where a sign in widget can't be implemented - find a form pages, within accordions, hub pages*

1. What is the team's staged rollout plan?
2. Which page will have the widget that controls views?
3. Does the team need to manage search-engine results during rollout?




<hr>
<hr>

