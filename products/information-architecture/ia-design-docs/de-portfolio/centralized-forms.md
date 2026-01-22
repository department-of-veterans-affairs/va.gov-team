# IA Design Changes for Centralized forms

**STATUS: In progress**

**Team:** Public Websites

**Resources**
- CAIA Intake ticket 
- Public Websites: [EPIC] [Centralized Forms] Support the new Forms home [#22177](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22177)
- IA Tracker
- [Centralized forms working mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696009952077/c8bad5a3f7128491afb4c6a1d749acbaba480d81?wid=1-1756499657822)
- Research
  - Discovery ticket: [Centralized Forms] [SPIKE] Research Discovery for Centralized Forms [#22738](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22738)
  - Research plan TBD
  - Research readout TBD
  - Research synthesis TBD

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

# MVP Changes

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
  - The form number used as the URL segment should be pulled directly from the forms db and formatted the same way it currently is


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

### MVP Launch of URL/Redirects/H1 Changes

Key task | Responsibility | When to complete | Additional info
--- | --- | --- | ---
URL updates | Public Websites | Prior to the below activities |
Submit redirect request | Public Websites | at least 2 weeks prior to implementation  | 
Implement redirects | Public Websites | at the same time as the URL changes |
Update entry point destination URLs and labels | Content and IA team | After URL changes and redirects are in place |
Update best bet destination URLs | Content and IA team | After URL changes and redirects are in place | 

# Design Changes

## Key points
- The VA forms landing page will be redesigned per research results
- The VA forms search screen will be redesigned per research results
- The About Form page will be redesigned per research results


### General Release of Design Changes

Key task | Responsibility | When to complete | Additional info
--- | --- | --- | ---
--- | --- | --- | ---
--- | --- | --- | ---
--- | --- | --- | ---


### Staged rollout

#### MVP Release - Date TBD
- The MVP release will consist of the following updates/changes:
  - URL
  - Redirects
  - H1
- [Centralized Forms] Launch of the URL and redirect changes for the Centralized Forms project [#22656](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/22656)

#### General Release - Date TBD
The General release will consist of the balance of the design changes.

### Key Decisions

| Decision | Date | Participants |
|----------|-------------|--------------------|
| Exclude conditions from MVP  | 4/25/2023 | Danielle, Dave, Mikki |

---
   
## Screenshots

### Before
- N/A - brand new product

### After

#### Find a VA Form landing page
<img width="764" height="712" alt="image" src="https://github.com/user-attachments/assets/915787b1-fa24-48a0-8ea5-a2f0d2ebac98" />
<img width="710" height="600" alt="image" src="https://github.com/user-attachments/assets/8eb53dcf-02ca-4e20-9975-7090e87fedbd" />
<img width="707" height="554" alt="image" src="https://github.com/user-attachments/assets/63f7cd08-2fac-4d21-8575-6746d04b5008" />

#### Find a VA Form search results page
<img width="770" height="776" alt="image" src="https://github.com/user-attachments/assets/8b062ba6-2c86-491c-8bcc-c135b4e7a86e" />
<img width="717" height="763" alt="image" src="https://github.com/user-attachments/assets/ffafe02b-757f-4a3a-baf2-2dd0fb727650" />
<img width="722" height="871" alt="image" src="https://github.com/user-attachments/assets/e4592479-d9ef-4b59-8c5b-2ea1d67cc074" />
<img width="726" height="802" alt="image" src="https://github.com/user-attachments/assets/62411d46-de28-4178-a2c3-8f54a7d0350b" />

#### About VA Form [form-number]
_Without the form upload button_
<img width="737" height="711" alt="image" src="https://github.com/user-attachments/assets/8ff5042d-07ee-4617-bc35-23b6e926f067" />
<img width="718" height="521" alt="image" src="https://github.com/user-attachments/assets/dcea59f2-8c20-4d87-b66d-62897a989621" />

#### About VA Form 21-0779
_With the form upload button_
<img width="744" height="798" alt="image" src="https://github.com/user-attachments/assets/444832b6-8c39-47aa-b674-492693ddab9e" />
<img width="732" height="615" alt="image" src="https://github.com/user-attachments/assets/b8f29dec-beec-47e9-85b4-60c932bb5061" />

---

#### Points of Contact
- OCTO-DE PO: Randi Hecht
- PM: Fran Cross (A6)
- DM: Alex Parker (A6)

##### Team
- Team Name: Sitewide Public Websites
- GitHub Label: sitewide-public-websites
- Slack channel: #Sitewide-Public-Websites
- People:
  - OCTO PO: Randi Hecht
  - OCTO-DE Lead: Danielle Theirry
  - OCTO-DE IA: Mikki Northuis
  - PM: Fran Cross (A6)
  - DM: Alex Parker (A6)
  - Engineering: Daniel Sasser and Chris Kim
  - Design: Dave Pickett and Tim Shundo
  - Research: Tina Kambil


##### Stakeholders: 
- 


<hr>
<hr>

