# IA Design for Reimbursement rates - WEAMS Public data migration
**STATUS: [In progress]**

- **Team:** EDM
- **PM:** Cassidy Beach
- **Designer:** Sneha Kulkarni
- **CAIA IA:** Sam Walker
  
**[CAIA Intake ticket: 92369](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92369)**

**[IA Tracker:95208](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95208)** 

**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Staged Rollout](#stagedrollout)


## <a name="map"></a>Page structure<br>
*The screenshots from this spec, and additional draft IA notes, are available in [this Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729183095781/13879f018516bd9dd354f278919b5a9c101a0f1f?wid=136-1729183109815).*
Sitemap notes for this scope of work:
- A new info page will replace the 'GI Bill school comparison' tool in level-3 of the page heirarchy. This will be a Drupal page.
- The new info page will provide links to three level-4 pages:
  1. the existing 'GI Bill school comparison' search tool, moved one spot down in the page heirarchy. This will be a team-maintained tool.
  2. a new 'License and Certification reimbursement rates' search tool. This will be a team-maintained tool.
  3. a new 'National tests reimbursement rates' page, that will contain list data. This will be a team-maintained page, so that Education can update rates at their discretion.*
![Tests 11](https://github.com/user-attachments/assets/c85576d5-c4e9-428c-aba0-cec4cf0b4d71)



## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


**1) GI Bill school comparison and test rates - New**
- URL: va.gov/education/gi-bill-schools-and-rates/
- Breadcrumb: VA.gov home > Education and training  > GI Bill comparison tool and test rates
- H1: GI Bill school comparison and test rates
- Notes: This info page takes the current spot occupied by the 'GI Bill school comparison' tool in IA

**2) GI Bill school comparison tool - Existing**
- URL: va.gov/education/gi-bill-schools-and-rates/school-comparison-tool/
- Breadcrumb: VA.gov home > Education and training  > GI Bill comparison tool and test rates > GI Bill comparison tool
- H1: GI Bill comparison tool
- Notes: This is the current search tool, moved to a new location. This will require a redirect since the URL will change.

**3) License and Certification rates search tool - New**
- URL: va.gov/education/gi-bill-schools-and-rates/license-and-certification-rates/
- Breadcrumb: VA.gov home > Education and training  > GI Bill comparison tool and test rates > License and Certification reimbursement rates
- H1: License and Certification reimbursement rates
- Notes: New search tool

**4) National test rates list - New**
- URL: va.gov/education/gi-bill-schools-and-rates/national-test-rates
- Breadcrumb: VA.gov home > Education and training  > GI Bill comparison tool and test rates > National test reimbursement rates
- H1: National test reimbursement rates
- Notes: New page of list data



## <a name="nav"></a>Entry points <br>

### Primary entry point
_Most of the time this is the CTA on a tool static landing page. For forms or features that don't have a static landing page, it may be on a different core page, such as the "How to apply" page, or it may be a navigation component (top, left) or a header/footer/home page link. This is the only entry point that HAS to be implemented to launch when a team goes through staging review._

**1) New 'GI Bill school comparison and test rates' info page** - Add/Modify/Remove
- Placement description: Info page will have links to all three sub-pages
- Link labels
  - GI Bill comparison tool - va.gov/education/gi-bill-schools-and-rates/school-comparison-tool/
  - License and Certification reimbursement rates - va.gov/education/gi-bill-schools-and-rates/license-and-certification-rates/
  - National test reimbursement rates - va.gov/education/gi-bill-schools-and-rates/national-test-rates
![Tests 2](https://github.com/user-attachments/assets/b9671a84-f99b-48c8-8544-18d216561c06)


### Secondary entry points
_Any additional locations that the page should be navigable from such navigation components, additional static pages where its prominently linked from, etc.   These are secondary, and while they are still very important, are not required for launch._

**1. Education left nav** - Modify
- Placement description: Replace the left nav's current link to the school comparison tool, with a link to the new info page.
- Link label: GI Bill school comparison and test rates
- Link destination: va.gov/education/gi-bill-schools-and-rates/
![Screenshot 2024-11-13 at 9 40 10 AM](https://github.com/user-attachments/assets/2362bcec-09f7-4c08-90c4-16a89cea1261)

**2. Education Hub page** - Modify
- Placement description: Update the text and destination to the new info page.
- Link label: GI Bill school comparison and test rates
- Link destination: va.gov/education/gi-bill-schools-and-rates/
![Tests 4](https://github.com/user-attachments/assets/f3421324-45d5-4fbe-aa4d-61d76b84bf82)

**1. Mega menu** - Modify
- Placement description: TBD whether the card in the Mega menu should direct users to the info page, or to the existing school comparison tool at its new URL
![Tests 5](https://github.com/user-attachments/assets/70cbeb2d-cd1a-4098-8894-37bdeddb361b)


### Crosslinks
_Not required. Links in content or in related links sections of other pages that point to this feature. This includes places where an existing crosslink may need to be updated. This section is not intended to capture every crosslinking placement, it is only to capture placements identified during the IA design process for reference.  Crosslinks are primarily identified by the content team and stakeholders.  The content team will be responsible for finding all existing referring links that may need to be updated._

** TBD whether existing cross-links should point to the new info page, or to the existing school comparison tool at its new URL. The examples listed below were found through Search. There may be additional crosslinks on the site.**

**Page with links to the current tool** - Modify
- [GI Bill enrollment verification FAQs](https://www.va.gov/resources/gi-bill-enrollment-verification-faqs/)
- [Choosing a GI BIll approved school](https://www.va.gov/education/choosing-a-school/)
- [Survivors' and Dependents' Educational Assistance](https://www.va.gov/family-and-caregiver-benefits/education-and-careers/dependents-education-assistance/)
- [Foreign programs](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/study-at-foreign-schools/)
- [Montbomery GI Bill Selected Reserve (MGIB-SR)](https://www.va.gov/education/about-gi-bill-benefits/montgomery-selected-reserve/)
- [On-the-job training and apprenticeships](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/)
- [Tuition Assistance Top-Up](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/tuition-assistance-top-up/)

 
### <a name="bestbets"></a>Best Bets<br>
![Tests 10](https://github.com/user-attachments/assets/ab68eead-8463-440b-9300-c78700895a2a)

## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


Current URL | Redirect to | Notes
--- | --- | ---
va.gov/education/gi-bill-comparison-tool | va.gov/education/gi-bill-schools-and-rates/school-comparison-tool/ | The URL for the current school search tool needs to be updated when the tool is moved.
 


## <a name="stagedrollout"></a>Staged Rollout<br>

No
