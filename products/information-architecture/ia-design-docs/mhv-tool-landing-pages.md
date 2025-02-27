# IA Design for MHV on VA.gov - Tool landing pages and entry point visibility work
**STATUS: FINAL**

**Team:** MHV on VA.gov Portal / Cartography

**Tickets:** 
Content and IA intake:  https://github.com/department-of-veterans-affairs/va.gov-team/issues/93081

**Supporting files:**
Mural: [MHV on VA.gov entry points](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728071932126/91696c078149ca319e0cf553278f2780db11efe8?wid=4-1738695366260)

**On this page:**
- [Navigation flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirets](#redirects)
- [Search best bets](#bestbets)


## <a name="flows"></a>Navigation flows <br>
*Illustration and/or description of how users will navigate to and flow through the experience for all impacted visitors typies. This helps identify key entry points and findability requirements, user flow scenarios, and content/messaging needs across various scenarios.*

Notes:
- The Medications and Messaging products both have landing pages in the auth tool.  Those landing pages will be eliminated and all content will be moved to R&S.
- The only direct/deep links to the MHV on VA.gov portal landing page and tools will be on the Health care benefit hub tool landing pages.  All other links across the site will link to those tool landing pages first to prompt sign in.
- This work will result in all links to MHV tools on VA.gov pointing at the VA.gov version.
- This flow does not represent the flows for external deep links (i.e. bookmarks) directly to the portal landing page or the tools. That flow is documented within the sign in/MHV portal routing documentation. This only represents general flows through uanuth content to the portal. 

![image of navigation flow](https://github.com/user-attachments/assets/9cb7a635-35a6-49bc-be53-46554ffbdd47)
 

## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

Notes:
- The "View your VA lab and test results" page will be merged with the "Get your VA medical records" page.
- A new page for the MHV on VA.gov portal landing page will be added.
- Pages within this section of the hub will be reordered based on 1) the portal landing page first 2) page view of the main 4 portal tools and 3) page views of the remaining health tools 4) page views of any additional pages/crosslinks.
- The sitemap shown does not reflect final page titles. 

![image of sitemap for health care benefit hub](https://github.com/user-attachments/assets/52fd223e-bb2d-4126-89c3-a5adef7b1f45)



## <a name="url"></a>Page URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


1) **NEW - MHV on VA.gov portal tool landing page**
    - URL: www.va.gov/health-care/manage-health/
    - Breadcrumb:
      - Desktop: Va.gov home > [H1 of health care hub page] > [H1 of page]
        - Example: Va.gov home > Health care > Manage your health with My HealtheVet on VA.gov
      - Mobile: < [H1 of health care hub page]
        - Example: < Health care
    - Notes:
      - Will have a sign in widget

2) **REVISED - [Schedule and manage health appointments page](www.va.gov/health-care/schedule-view-va-appointments/)**
    - Current URL: www.va.gov/health-care/schedule-view-va-appointments/
    - New URL: www.va.gov/health-care/manage-appointments/
    - Notes:
      - Breadcrumb to be updated based on H1 change

3) **REVISED - [Refill and track prescriptions page](www.va.gov/health-care/refill-track-prescriptions/)**
    - Current URL:  www.va.gov/health-care/refill-track-prescriptions/
    - New URL: www.va.gov/health-care/manage-prescriptions-medications/
    - Notes:
      - Breadcrumb to be updated based on H1 change
     
4) **REVISED - [Get VA medical records page](www.va.gov/health-care/get-medical-records/)**
    - Current URL: www.va.gov/health-care/get-medical-records/ 
    - New URL: www.va.gov/health-care/review-medical-records/ 
    - Notes:
      - Breadcrumb to be updated based on H1 change

5) **REVISED - [Use secure message page](www.va.gov/health-care/secure-messaging/)**
    - Current URL: www.va.gov/health-care/secure-messaging/
    - New URL: www.va.gov/health-care/send-receive-messages/
    - Notes:
      - Breadcrumb to be updated based on H1 change
     
6) **REVISED - [Get travel pay reimbursement page](www.va.gov/health-care/get-reimbursed-for-travel-pay/)**
    - Current URL: www.va.gov/health-care/get-reimbursed-for-travel-pay/
    - New URL: www.va.gov/health-care/file-travel-pay-reimbursement/
    - Notes:
      - Breadcrumb to be updated based on H1 change


## <a name="nav"></a>Entry points<br>

### Required entry point(s)
*These entry points allow visitors to navigate to your new feature and must be in place for launch. Provide proof of the implementation of these entry points at staging review.*  

1. **Add and reorder links on [Health care benefit hub page](https://www.va.gov/health-care/)**
    - ADD LINK: 
      - Add link to the MHV on VA.gov static tool landing page within the "Manage your health and benefits" section of the page, and remove the "View lab and test results" page from section
    - PLACEMENT:
      - Placed MHV on VA.gov link as the first option in the list
      - Order of links in section (final link labels TBD):
        - *Manage your health with My HealtheVet* (Add - Link to www.va.gov/health-care/manage-health/) 
        - Schedule and manage health appointments
        - Refill and track prescriptions
        - Get VA medical records 
        - Use secure message
        - Get travel pay reimbursement
        - Order medical supplies
        - Get a Veteran Health Identification Card (VHIC)
        - Review and pay copay bill
        - Update health benefits information
        - ~View lab and test results~ (Remove link)
    - NOTES:
      - Pages within this section of the hub page have been reordered based on 1) the portal landing page first 2) page view of the main 4 portal tools and 3) page views of the remaining health tools 4) page views of any additional pages/crosslinks, with a max of 10 items to appear.

2. **Sign in widgets on all MHV tool landing pages**
    - Description:
      - The sign in widgets (React) on the existing health tool landing pages display multiple CTAs once a visitor has signed in to support links to MHV Classic and Oracle health (My VA health).
      - With this work
        - all content within the existing React widgets will be removed and updated content will be implemented within the applicable Drupal pages
        - all sign in widgets will only provide a single CTA deep linking visitors to the applicable tool within the MHV on VA.gov experience
        - a new sign in widget will be created for the new "Manage your health" unauth page that will link visitors to the [MHV on VA.gov portal landing page](www.va.gov/my-health)
       - Pages that will need new or updated widget
         - [MHV on VA.gov portal tool landing page](www.va.gov/health-care/manage-health/) to link to www.va.gov/my-health/
         - [Schedule and manage health appointments page](www.va.gov/health-care/manage-appointments/) to link to www.va.gov/my-health/appointments/
         - [Refill and track prescriptions page](www.va.gov/health-care/manage-prescriptions-medications/) to link to www.va.gov/my-health/medications/
         - [Get VA medical records page](www.va.gov/health-care/review-medical-records/) to link to www.va.gov/my-health/medical-records/
         - [Use secure message page](www.va.gov/health-care/send-receive-messages/) to link to www.va.gov/my-health/secure-messages/inbox
         - Facility appointment pages - example page: https://www.va.gov/minneapolis-health-care/make-an-appointment/
         - Facility medical records pages - example page: https://www.va.gov/minneapolis-health-care/medical-records-office/
         - Facility pharmacy pages - example page: https://www.va.gov/minneapolis-health-care/pharmacy/


### Additional key entry points (post-launch)
_Any additional key locations that the page should be navigable from. Although these are not required for launch, they are critical to the findability of your content/feature.  Examples of key entry points include "About a form" pages, additional navigation component (top, left) placements, additional static pages where its prominently linked from, etc._

1. **Health care benefit left nav**
    - ADD LINK: 
      - Add link to the MHV on VA.gov static tool landing page within the "Manage your health and benefits" section of the page, and remove the "View lab and test results" page from section
    - PLACEMENT:
      - Place MHV on VA.gov link as the first option in the list
      -  Order of links in section (final link labels TBD):
        - *Manage your health with My HealtheVet on VA.gov* (Add - Link to www.va.gov/health-care/manage-health/) 
        - Schedule and manage health appointments
        - Refill and track prescriptions
        - Get VA medical records online
        - Use secure message
        - Get travel pay reimbursement
        - Order medical supplies
        - Get a Veteran Health Identification Card (VHIC)
        - Review and pay copay bill
        - Update health benefits information
        - COVID-19 vaccines at VA
        - Request a decision review or clinical appeal
        - ~View lab and test results~ (Remove link)
    - NOTES:
      - Pages within this section of the hub page have been reordered based on 1) the portal landing page first 2) page view of the main 4 portal tools and 3) page views of the remaining health tools 4) page views of any additional pages/crosslinks, with a max of 10 items to appear.


2. **Header**
    - ADD LINK:
      - Add the "My Healthevet" link to the desktop version of the unauthenticated view of the header and the injected header.
    - PLACEMENT:
      - Right justified on primary nav row, same position as it is in auth header 
    - NOTES:
      - The option will link to the [Manage your health with My HealtheVet on VA.gov](www.va.gov/health-care/tbd) static tool landing page in the health care benefit hub.
      - The link in the authenticated header will not change, that will continue to link directly to the [MHV on VA.gov portal landing page](www.va.gov/my-health)

3. **Primary navigation**
    - ADD/REMOVE/MODIFY LINKS:
      - Modify list of links under the "Manage your health" column
    - PLACEMENT/ORDER:
      - Order of links 
        - Schedule and manage health appointments
        - Refill and track prescriptions
        - _Get VA medical records online_ (New link - https://www.va.gov/health-care/get-medical-records)
        - Use secure message
        - _Get travel pay reimbursement_ (New link - https://www.va.gov/health-care/get-reimbursed-for-travel-pay)
        - ~View lab and test results~ (Remove link)
        - ~Order medical supplies~ (Remove link)

4. **Homepage "Top pages" section**
    - ADD/REMOVE/MODIFY LINKS:
      - Modify list of links under the "Top pages section" on the home page
    - PLACEMENT/ORDER:
      - Order of links in left column 
        - _Download VA benefit letters_ (New link - https://www.va.gov/records/download-va-letters)
        - Get travel pay reimbursement
        - Check claim, decision review, or appeal status
        - Schedule and manage health appointments
        - _View your disability rating_ (New link - https://www.va.gov/disability/view-disability-rating)
      - Order of links in right column
        - _Manage your health with My HealtheVet on VA.gov_ (New link - TBD)
        - View your VA payment history
        - _Check remaining GI Bill benefits_ (New link - https://www.va.gov/education/check-remaining-post-9-11-gi-bill-benefits)
        - Review or update dependents
        - _Review and manage VA debt_ (New link - https://www.va.gov/manage-va-debt/)
        - ~Compare GI Bill schools~ (Remove link)
        - ~Get mental health care~ (Remove link)
        - ~Get VA medical records online~ (Remove link)

5. **[My VA](www.va.gov/my-va/)**
    - ADD/REMOVE/MODIFY LINKS:
      - Modify list of links under the "Manage your health" section link users directly to the MHV on VA.gov portal tools
      - Remove existing widget to "Choose the right health portal"

### Other entry point and crosslink work
_Any additional key crosslinking opportunities or link changes needed across the site.  This is not intended to capture all link needs, but to document any key work discussed in this space._ 

- Many of the core health tool pages will have H1 and URL updates.  These changes will need to be made in all places these links exist across the modernized site.
- 

##  <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience.* 

**For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) at least 2 weeks in advance.**  

Current URL | Redirect to | Notes
--- | --- | ---
www.va.gov/health-care/get-medical-records/ | www.va.gov/health-care/review-medical-records/ | Revising H1 and URL
www.va.gov/health-care/view-test-and-lab-results/ | www.va.gov/health-care/review-medical-records/ | Merging pages
www.va.gov/health-care/schedule-view-va-appointments/ | www.va.gov/health-care/manage-appointments/ | Revising H1 and URL
www.va.gov/health-care/refill-track-prescriptions/ | www.va.gov/health-care/manage-prescriptions-medications/ | Revising H1 and URL
www.va.gov/health-care/secure-messaging/ | www.va.gov/health-care/send-receive-messages/ | Revising H1 and URL
www.va.gov/health-care/get-reimbursed-for-travel-pay/ | www.va.gov/health-care/file-travel-pay-reimbursement/ | Revising H1 and URL
www.va.gov/health-care/covid-19-vaccine/ | TBD R&S page | This may not be done with this work effort

## <a name="bestbets"></a>Search best bets
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. Best bets are not implemented for every page, and not intended to be permanent.  They can aid in helping visitors find key content and features that are not ranking search well or competing with similar pages in search results. Existing best bets must be removed or updated when links/URLs change.*

**Best bet work is still in progress.**

**1. Best bet for [page name]** - 
- Destination page:
- Additional keywords:






<hr>
<hr>

