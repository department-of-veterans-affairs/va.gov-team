# IA Design for School Official: Principles of Excellence for educational institutions - Form 22-10275
**STATUS: In progress**

**Team:** VEBT team
- Team name: govcio-vebt
- Slack: #govcio-vebt-team

**Related tickets/docs/files**
- Content and IA tickets:
  - Form 22-10275 - (https://github.com/department-of-veterans-affairs/va.gov-team/issues/114533)
- Design files:
  - [IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728420465790/8c90120e504744ecb3db02068818df573ddab93b?wid=21-1751393464277)
  - [VEBT Figma file and user flow for 22-10275](https://www.figma.com/design/k4lPmNEDbY48GIaCDf3aer/VEBT-Form-22-10275--Principles-of-Excellence-for-Educational-Institutions?node-id=1-20&t=VmuAAZgxwqDjM1lo-1))

**On this page:**
- [User/page flows](#user-page-flows)
- [IA placement](#map)
- [URL, H1, title tag and breadcrumb guidance](#urls)
- [Entry points](#nav)
- [Redirects](#redirects)


## <a name="flows"></a>User/page flows
_Illustration of of page flow._

- Visitors will primarily access these forms through the "Resources for schools" page. As the parent page of these forms, the page must contain a link to each of the forms digitized. This page is maintained by the VEBT team.
- Each form will also have an "About form" page published within the "Find a VA form" search tool on VA.gov which will include a link to both the PDF and the online form.  These pages are published and maintained by the OCTO Content and IA team.
- These forms will also be findable via internal and external search engines. 

<img width="608" alt="image" src="https://github.com/user-attachments/assets/827e2732-9383-428e-a1e2-17d4b88be5e4" />


## <a name="map"></a>Placement within the VA.gov IA
*Illustration and/or description of where this product/feature will live within the overall information architecture of VA.gov.*

- These online form flows will live under the www.va.gov/school-administrators/ sub-directory

<img width="1264" height="667" alt="Screenshot 2025-07-16 151003" src="https://github.com/user-attachments/assets/3ff31dfe-9ae6-4ec5-9e57-235bb32c7140" />



## <a name="urls"></a>URL, breadcrumb, and title guidance

Follow the [VA Design System](https://design.va.gov/) for URL, breadcrumb, and page title guidance.  
- [URLs](https://design.va.gov/components/url-standards/)
- [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Title tags](https://design.va.gov/content-style-guide/title-tags)

Also review [Capitalization](https://design.va.gov/content-style-guide/capitalization) for standards for headings vs.title tags

**Commit to the Principles of Excellence for educational institutions VA Form 22-10275**
  - URL:  va.gov/school-administrators/commit-principles-of-excellence-form-22-10275/
    - This is the canonical URL for the form and what will appear in search results.
    - All referring links should have this URL as the destination.
    - Once this URL renders, form logic should redirect the visitor to the first page within the form flow - per standards this is generally /introduction
  - Breadcrumb:  VA.gov home > Resources for schools > [H1 of form introduction page] 
    - Per the standard breadcrumb component, the last segment of the breadcrumb must match the H1 of the page exactly
    - Example based on H1 in Figma: VA.gov home > Resources for schools > Commit to the Principles of Excellence for educational institutions
  - Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - Example based on H1 in Figma: Commit to the Principles of Excellence for Education Institutions | Veterans Affairs


**Structuring URLs for individual pages within the form flows**
- All pages within form flows will exist as child pages of the core/canonical URL.
  - Examples:
      - ww.va.gov/school-administrators/commit-principles-of-excellence-form-22-10275/introduction/
      - ww.va.gov/school-administrators/commit-principles-of-excellence-form-22-10275/review-and-submit/
      - ww.va.gov/school-administrators/commit-principles-of-excellence-form-22-10275/confirmation/
  - Please refer to [URL standards for form flows](https://design.va.gov/components/url-standards/#guidelines-for-urls-in-form-flows) when defining the URLs for these pages.  Reach out to #content-ia-centralized-team with any questions.


## <a name="nav"></a>Entry points
*Entry points are where the primary call-to-action is provided allowing a site visitor to navigate to the page/feature.*

**Please note:** The Governance Team requires preview links of updated entry points as a part of staging review in the Collaboration Cycle. It may be a launch-blocking issue.   

**1) Resources for schools landing page - https://www.va.gov/school-administrators/ -- Required for launch**
  - This page is the parent of both the online forms  and must include a link within the content of the page.
  - The VEBT will be responsible for identifying where on the page these links should be placed and implementing them.

**2) About VA Form 22-10275 -- Post Launch**
- This is a standard page that is part of the "Find VA forms" experience.  It has a standard approach to page content and links.
- The OCTO Content and IA team will update this page at https://www.va.gov/find-forms/about-form-22-10275/.  
- Once the online form is launched, the OCTO Content and IA team will ensure a CTA is added to the page to allow visitors to link to the online version of the form.  

## <a name="redirects"></a>Redirects
*Redirects should be implemented when a page is moved or archived to ensure visitors do not receive a "404 - Page not found" error.*

The product team is responsible for identifying, requesting, and implementing any redirects. The standard process for redirects can be found on the Platform website. 

**Please note that ALL redirects require you to submit a [Redirect Request Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) to be reviewed and approved before implementing.** Please submit at least 2 weeks in advance.*  
