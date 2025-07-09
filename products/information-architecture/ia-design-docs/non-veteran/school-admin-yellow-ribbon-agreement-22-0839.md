# IA Design for School Official: Yellow Ribbon program agreement - Form 22-0839
**STATUS: Ready for OCTO review**

**Team:** VEBT team
- Team name: govcio-vebt
- Slack: #govcio-vebt-team

**Related tickets/docs/files**
- Content and IA tickets:
  - Form 22-0839 - https://github.com/department-of-veterans-affairs/va.gov-team/issues/111583
- Design files:
  - [IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728420465790/8c90120e504744ecb3db02068818df573ddab93b?wid=21-1751393464277)
  - [VEBT Figma file and user flow for 22-0839](https://www.figma.com/design/TzGpQWC3DDLZIBVw2aFTHo/VEBT-Form-22-0839--Yellow-Ribbon-Program-Agreement?node-id=0-1&p=f&t=1wniaMgf4neQKxif-0)

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

<img width="600" alt="image" src="https://github.com/user-attachments/assets/26e1b9e2-4045-4148-8292-b268d6b08202" />



## <a name="urls"></a>URL, breadcrumb, and title guidance

Follow the [VA Design System](https://design.va.gov/) for URL, breadcrumb, and page title guidance.  
- [URLs](https://design.va.gov/components/url-standards/)
- [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Title tags](https://design.va.gov/content-style-guide/title-tags)

Also review [Capitalization](https://design.va.gov/content-style-guide/capitalization) for standards for headings vs.title tags

**Submit the Yellow Ribbon Program agreement VA Form 22-0839**
  - URL:  va.gov/school-administrators/submit-yellow-ribbon-program-agreement-form-22-0839/
    - This is the canonical URL for the form and what will appear in search results.
    - All referring links should have this URL as the destination.
    - Once this URL renders, form logic should redirect the visitor to the first page within the form flow - per standards this is generally /introduction
  - Breadcrumb:  VA.gov home > Resources for schools > [H1 of form introduction page] 
    - Per the standard breadcrumb component, the last segment of the breadcrumb must match the H1 of the page exactly
    - Example based on H1 in Figma: VA.gov home > Resources for schools > Submit a Yellow Ribbon Program agreement request
  - Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - Example based on H1 in Figma: Submit a Yellow Ribbon Program Agreement Request | Veterans Affairs


**Structuring URLs for individual pages within the form flows**
- All pages within form flows will exist as child pages of the core/canonical URL.
  - Examples:
      - ww.va.gov/school-administrators/submit-yellow-ribbon-program-agreement-form-22-0839/introduction/
      - ww.va.gov/school-administrators/submit-yellow-ribbon-program-agreement-form-22-0839/review-and-submit/
      - ww.va.gov/school-administrators/submit-yellow-ribbon-program-agreement-form-22-0839/confirmation/
  - Please refer to [URL standards for form flows](https://design.va.gov/components/url-standards/#guidelines-for-urls-in-form-flows) when defining the URLs for these pages.  Reach out to #content-ia-centralized-team with any questions.


## <a name="nav"></a>Entry points
*Entry points are where the primary call-to-action is provided allowing a site visitor to navigate to the page/feature.*


**1) Resources for schools landing page - https://www.va.gov/school-administrators/**
  - This page is the parent of both the online forms  and must include a link within the content of the page.
  - The VEBT will be responsible for identifying where on the page these links should be placed and implementing them.

**2) About VA Form 22-0839**
- This is a standard page that is part of the "Find VA forms" experience.  It has a standard approach to page content and links.
- The OCTO Content and IA team will update this page at https://www.va.gov/find-forms/about-form-22-0839/.  
- Once the online form is launched, the OCTO Content and IA team will ensure a CTA is added to the page to allow visitors to link to the online version of the form.  

## <a name="redirects"></a>Redirects
*Redirects should be implemented when a page is moved or archived to ensure visitors do not receive a "404 - Page not found" error.*

The product team is responsible for identifying, requesting, and implementing any redirects. The standard process for redirects can be found on the Platform website. 

**Please note that ALL redirects require you to submit a [Redirect Request Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) to be reviewed and approved before implementing.** Please submit at least 2 weeks in advance.*  
