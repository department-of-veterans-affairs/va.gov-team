# IA Design for Medical Supply re-order form
**STATUS: Redesign in progress**

**Team:** There isn't really a team dedicated to supply re-ordering. It's a combination of Cartography team (engineering) + OCTO Fellows Jasmine Yohannan (Product) & Jenny Wang (Design). 

**What's changed:** The supply re-order form is scaling to support additional supplies for medical devices beyond just hearing aids and CPAP machines. Since the literal name of the form was scoped to those two things previously, several changes needed to be made: form name change, H1 changes, URL changes, unauth page updates, and addition of more radio buttons to handle the additional supplies. 

**URL update:**
* Old URL: va.gov/health-care/order-hearing-aid-batteries-and-accessories
* New URL: va.gov/my-health/order-medical-supplies

## On this page
- [Sitemap](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)

## <a name="map"></a>Sitemap<br>
The form is broadening to cover additional medical supplies, but is also shrinking its sitemap. Updated sitemap is below:
<img width="824" alt="Screenshot 2025-02-04 at 10 03 18 AM" src="https://github.com/user-attachments/assets/4d01bd7d-88af-42a6-b942-7c57bf73e7e8" />

## <a name="url"></a>Page titles, URLs, breadcrumbs, title tags

### High-level specifications:
* **URL:** Base URL for this form: https://www.va.gov/my-health/order-medical-supplies
* **H1**: All pages of the form should be: "Order medical supplies
* **H2**: Will vary by form-stepper / chapter 
* **H3**: _If applicable, will provide more narrower page information below the form step_
* **Breadcrumbs**: The first & last page of the form should use the traditional breadcrumb component & reflects the /introduction page. The body of the form should have simple `<- Back` link breadcrumbs (on mobile + desktop) throughout. 
  * First & last page desktop: `VA.gov home > My HealtheVet > Order medical supplies`
  * First & last page mobile: `<- My HealtheVet`
  * Body of form: `<- Back`
* **Title tags**: all pages of the form should have the same title tag
  * Order Medical Supplies | Veterans Affairs

### Detailed page specifications
1. **Introduction page**
  * **URL**: https://www.va.gov/health-care/order-medical-supplies/introduction
  * **H1**: Medical supplies
  * **Lede text**: Use this form to order your medical supplies online
  * **Breadcrumbs**: 
    * Desktop: `VA.gov home > My HealtheVet > Order medical supplies`
    * Mobile: `<- My HealtheVet`
  * **Title tag**: Order Medical Supplies | Veterans Affairs
2. **Select supplies page**
  * **URL**: https://www.va.gov/my-health/order-medical-supplies/select-supplies
  * **H1**: Order medical supplies
  * **H2**: Select supplies (form stepper component)
  * **Breadcrumbs**: `<- Back`
  * **Title tag**: Order Medical Supplies | Veterans Affairs
3. **Contact information page**
  * **URL**: https://www.va.gov/my-health/order-medical-supplies/contact-information
  * **H1**: Order medical supplies
  * **H2**: Contact information (form stepper component)
  * **Breadcrumbs**: `<- Back`
  * **Title tag**: Order Medical Supplies | Veterans Affairs
  * **Edit email address**
    * URL: https://www.va.gov/health-care/order-medical-supplies/edit-email
    * H3: Edit email address
    * Other elements same as above
  * **Edit shipping address**
    * URL: https://www.va.gov/health-care/order-medical-supplies/edit-shipping
    * H3: Edit shipping address
    * Other elements same as above
   
4. **Review page**
  * **URL**: https://www.va.gov/my-health/order-medical-supplies/review
  * **H1**: Order medical supplies
  * **H2**: Review order details
  * **Breadcrumbs**: `<- Back`
  * **Title tag**: Order Medical Supplies | Veterans Affairs

5. **Confirmtation page**
  * **URL**: https://www.va.gov/my-health/order-medical-supplies/confirmation
  * **H1**: Order medical supplies
  * **H2**:
    * [Success alert]: You've submitted your medical supplies order
    * [Error alert]: Reorder request not submitted
  * **Breadcrumbs**:
    * Desktop: `VA.gov home > My HealtheVet > Order medical supplies`
    * Mobile: `<- My HealtheVet`
  * **Title tag**: Order Medical Supplies | Veterans Affairs

## <a name="nav"></a>Entry points <br>
There are two possible entry points to this form: 
1. The My HealtheVet landing page at https://www.va.gov/my-health - this URL requires several validation checks for access
  * check 1: must be signed-in
  * check 2: must be ID-verified
  * check 3: must have at least one VA facility listed in the user's profile
2. The health care hub page for supply re-ordering at https://www.va.gov/health-care/order-medical-supplies - this URL has one less access check. This page can be accessed many ways: search engine, site search, side navigation/secondary nav, and primary mega menu nav. 
  * check 1: Signed-in
  * check 2: ID-verified
  * _this page does not check for a facility in the user's profile, the form itself will need to check for that and route-guard users to the /my-health landing page if a facility is not present. Users will see an appropriate warning alert in-place on the landing page telling users that they do not have access to My HealtheVet._

## <a name="redirects"></a>Redirects <br>
It appears there is an empty directory at `va.gov/my-health/order-medical-supplies` - this needs to be redirected to the `/introduction` page (included in table below). 

| Current URL                                                                         | Redirect to                                                 |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------|
| https://www.va.gov/health-care/order-hearing-aid-batteries-and-accessories            | https://www.va.gov/my-health/order-medical-supplies/      |
| https://www.va.gov/health-care/order-hearing-aid-batteries-and-accessories/*          | https://www.va.gov/my-health/order-medical-supplies/      |
| https://www.va.gov/my-health/order-medical-supplies                                   | https://www.va.gov/my-health/order-medical-supplies/introduction      |

## <a name="bestbets"></a>Best Bets<br>
New medical devices with supplies that are now supported by this form that should have best bets added
* TENS Unit
* Nebulizer
* Blood Pressure Monitor

## ARCHIVE - Information about the previous version of this form:

**IA Request:** [79661](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/26?pane=issue&itemId=58126536)

**Mural:** https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1712349672737/42d77ae33ad84086e68e98d4a06b8daa33303fc8?sender=ua67f17f1c416a96ea04d2476

### User flows
![User flow to finding medical device ordering](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/cff5ed82-6737-4777-8b61-63b1f9fb6e81)


### Page structure
Our future state will put all medical device ordering info under one drupal static page for unauth users. The single page will point to the CPAP/hearing aids ordering form AND the prosthetic socks order form on eBenefits.

![Current vs future sitemap](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/99408f05-b2d3-4f67-a65e-abccac82724b)


### URLs and breadcrumbs
![Sitemap with urls and breadcrumbs](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/14090003-36ff-4f61-96e4-a61af785b057)


**1) Order medical supplies - NEW**
- URL: va.gov/health-care/order-medical-supplies/
- Breadcrumb: Home > Health care > [H1 tbd by content]
- Notes: this page will replace 3 current pages for hearing aids, cpap, and prosthetic socks.

![There are 6 ways to get to and through medical device ordering](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/bfc6be25-e673-4147-a446-47f03bff89ce)


1. **Left Nav - EDIT**
  - Placement description: Below 'view lab and test results' and above 'COVID 19 vaccines'
  - Link label: Order medical supplies
  - Link destination: va.gov/health-care/order-medical-supplies/
  - Notes: replaces the 3 existing medical device  ordering pages (hearing aids, cpap, prosthetic socks)

2. **Health care hub page - EDIT**
  - Placement description: replace 'Order hearing aid batteries and accessories'
  - Link label: Order medical supplies
  - Link destination: va.gov/health-care/order-medical-supplies/

3. **Mega Menu - EDIT**
  - Placement description: replace 'Order hearing aid batteries and accessories'
  - Link label: Order medical supplies
  - Link destination: va.gov/health-care/order-medical-supplies/ 
 

### Redirects
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


| Current URL                                                                         | Redirect to                                                 |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------|
| https://www.va.gov/health-care/order-hearing-aid-batteries-and-accessories          | https://www.va.gov/health-care/order-medical-supplies/      |
| https://www.va.gov/health-care/order-cpap-supplies                                  | https://www.va.gov/health-care/order-medical-supplies/      |
| https://www.va.gov/health-care/order-hearing-aid-or-CPAP-supplies-form/introduction | TBD depending on if we can just put it straight in myHealth |
| https://www.va.gov/health-care/order-prosthetic-socks                               | https://www.va.gov/health-care/order-medical-supplies/      |
 

### Best bets
| URL                                                                                 | Best bet changes                                                            |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| https://www.va.gov/health-care/order-medical-supplies/                              | Add new best bet, make sure it has keywords for all of the supplies we need |
| https://www.va.gov/health-care/order-hearing-aid-batteries-and-accessories          | Remove best bet                                                             |
| https://www.va.gov/health-care/order-cpap-supplies                                  | Remove best bet                                                             |
| https://www.va.gov/health-care/order-hearing-aid-or-CPAP-supplies-form/introduction | Edit best bet to reflect whatever URL it ends up at                         |
| https://www.va.gov/health-care/order-prosthetic-socks                               | Remove best bet                                                             |

<hr>
<hr>
