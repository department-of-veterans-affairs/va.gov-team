# IA Design for CHAMPVA Claim Form 7959a
**STATUS: Final**
- 3/17/2025 - MN: Updates to structure of content, URLs, breadcrumbs end entry points

  
**Team:** IVC Forms

**On this page:**
- [Navigation/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>Navigation/page flows <br>
*Illustration and/or description of how users will navigate to and flow through the experience for all impacted visitors typies. This helps identify key entry points and findability requirements, user flow scenarios, and content/messaging needs across various scenarios.*

![image of user flow](https://github.com/user-attachments/assets/2b237d4b-05b7-4087-950f-290eaa40da89)

<img src="https://github.com/user-attachments/assets/f0bc0605-dbfb-4cec-bf3d-c95b3751e08c" width="450">

## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

- The existing [CHAMPVA benefit page](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/) will serve as the parent page to all information and tasks related to the CHAMPVA program.
- Child pages of the CHAMPVA benefit page will include the application form, the OHI form, and the claim form.

![image](https://github.com/user-attachments/assets/7c3ac1f4-32e2-441d-8c98-c2bddbb3c80d)


## <a name="url"></a>URLs and breadcrumbs

**1) CHAMPVA claim form - NEW**
- Canonical URL: va.gov/family-and-caregiver-benefits/health-and-disability/champva/file-champva-claim-10-7959a/
  - Sub-pages of this form flow will be appended to the end of this canonical URL - i.e. /introduction, /review-and-submit, /confirmation
  - All links should utilize the canonical URL as the destination - this allows the form code to identify and render the initial page of the flow and any changes to that won't break referring links.
- Breadcrumb:
  - The breadcrumb that appears on the initial page of the form flow (i.e. the /introduction page) will remain as is throughout the form flow, all the way through the confirmation page as defined in the [breadcrumbs for linear page flows standard in the VA design system.](https://design.va.gov/components/breadcrumbs#breadcrumbs-for-linear-page-flows)  
  - Desktop breadcrumb: VA.gov home > [Family and caregiver benefits H1] > [Health and disability benefits H1] > [CHAMPVA benefits page H1] > [10-7959a form H1]
    - Example: VA.gov home > VA Benefits for family and caregivers > Health and disability benefits for family and caregivers > CHAMPVA benefits > File claim for benefits VA Form 10-7959a
  - Mobile breadcrumb: <  [CHAMPVA benefits page H1]
    - Example: < CHAMPVA benefits 


## <a name="nav"></a>Entry points <br>

    
### Entry point(s) required for launch

1. **[CHAMPVA benefit page](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/)**
    - This is the parent page of the claim form flow and therefore is required to have supporting content and a link to the claim form
    - Placement, link label, and content to be determined by content

### Additional key entry points

1.**Family hub left nav**
    - Once the claim form is live to 100% of visitors, an option should be added to the left nav within the family benefits hub
    - The option will be nested under the CHAMPVA benefits page and placed after the online application option
    - Link label should match the H1 of the page

<img src="https://github.com/user-attachments/assets/ef88ebc4-db99-4d82-b989-7b68fb3a1e0b" width="250">


2. **[About form 10-7959a page](https://www.va.gov/find-forms/about-form-10-7959a/)**
   - Once the claim form is live to 100% of visitors, an option should be added to the about form page that allows visitors quick access to the online version of the form.
   - Content and link label will follow standard approach used for these pages

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/dd64f177-31d5-4466-ad21-7b3bdc5e2021" width="500">


3. **Add to 'Do I need to file a claim / how to file a claim' R+S page**
  - Placement description: TBD by content
  - Link label: [TBD based on H1]
  - Link destination: va.gov/family-and-caregiver-benefits/health-and-disability/champva/file-claim-10-7959a/


## <a name="redirects"></a>Redirects <br>

- [5/9 update] - the form is live in production but has the wrong URL. IVC forms team will submit a redirect request to change https://www.va.gov/family-and-caregiver-benefits/health-and-disability/file-champva-claim-10-7959a/ to va.gov/family-and-caregiver-benefits/health-and-disability/champva/file-champva-claim-10-7959a/


## <a name="bestbets"></a>Best Bets<br>

- TBD, not needed until after launch    

## <a name="stagedrollout"></a>Staged Rollout<br>
*If a staged rollout is planned, a flipper that controls access to the feature will be required. That flipper should be placed on the page that serves as the primary entry point for the feature. 
Some pages/sections cannot contain a widget - i.e. find a form pages, within accordions, hub pages*

- **Staged rollout planned:**  Yes
- **Static page to contain the flipper:**  [CHAMPVA benefit page](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/)
- **Any other requirements related to the staged rollout?** No




<hr>
<hr>
