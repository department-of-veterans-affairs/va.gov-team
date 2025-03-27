# IA Design for School Certifying Official Forms
**STATUS: IN REVIEW**

**Team:** VEBT team
- Team name: govcio-vebt
- Slack: #govcio-vebt-team

**Related tickets/docs/files**
- Content and IA tickets:
  - Form 22-1919 - https://github.com/department-of-veterans-affairs/va.gov-team/issues/103835
  - Form 22-8794 - https://github.com/department-of-veterans-affairs/va.gov-team/issues/103841
- Design files:
  - [IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728420465790/8c90120e504744ecb3db02068818df573ddab93b)
  - [VEBT Figma file for 22-1919](https://www.figma.com/design/9dlTPeLY6kUq19m4YrjyF7/VEBT-Form-22-1919%3A-Conflicting-Interests?node-id=2529-24298&t=14gA2vCBa4YrkuJz-1)
  - [VEBT Figma file for 22-8794](https://www.figma.com/design/SYloiyh5mf1RjjZnkPiJH9/VEBT-Form-22-8794%3A-Certifying-Officials?node-id=170-13869&p=f&t=p4AFgOWqNe89Po3b-0)
  - [VEBT team's user flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718211888145/62b605a599fa763fd3a91f46fb89b74f0748d1bb)

**On this page:**
- [User/page flows](#user-page-flows)
- [IA placement](#map)
- [URL, H1, title tag and breadcrumb guidance](#urls)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Supporting information](#supportinginfo)


## <a name="flows"></a>User/page flows
_Illustration of of page flow._

- Visitors will primarily access these forms through the "Resources for schools" page. As the parent page of these forms, the page must contain a link to each of the forms digitized. This page is maintained by the VEBT team.
- Each form will also have an "About form" page published within the "Find a VA form" search tool on VA.gov which will include a link to both the PDF and the online form.  These pages are published and maintained by the OCTO Content and IA team.
- These forms will also be findable via internal and external search engines. 

<img width="608" alt="image" src="https://github.com/user-attachments/assets/827e2732-9383-428e-a1e2-17d4b88be5e4" />


## <a name="map"></a>Placement within the VA.gov IA
*Illustration and/or description of where this product/feature will live within the overall information architecture of VA.gov.*

- These online form flows will live under the www.va.gov/school-administrators/ sub-directory

<img width="493" alt="image" src="https://github.com/user-attachments/assets/1b423a48-4ec0-4966-a453-682e4549cc39" />


## <a name="urls"></a>URL, breadcrumb, and title guidance

Follow the [VA Design System](https://design.va.gov/) for URL, breadcrumb, and page title guidance.  
- [URLs](https://design.va.gov/components/url-standards/)
- [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Title tags](https://design.va.gov/content-style-guide/title-tags)*


**1) Designate school certifying officials 22-8794 form**
  - URL:  www.va.gov/school-administrators/update-certifying-officials/
    - This is the canonical URL for the form and what will appear in search results.
    - All referring links should have this URL as the destination.
    - Once this URL renders, form logic should redirect the visitor to the first page within the form flow - per standards this is generally /introduction
  - Breadcrumb:  VA.gov home > Resources for schools > [H1 of form introduction page] 
    - Per the standard breadcrumb component, the last segment of the breadcrumb must match the H1 of the page exactly
    - Example based on H1 in Figma: VA.gov home > Resources for schools > Update your institution's list of certifying officials
  - Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - Example basedon H1 in Figma: Update Your Institution's List Of Certifying Officials | Veterans Affairs

**2) Conflicting interests certification 22-1919 form**
  - URL: www.va.gov/school-administrators/report-conflicting-interests/
    - This is the canonical URL for the form and what will appear in search results.
    - All referring links should have this URL as the destination.
    - Once this URL renders, form logic should redirect the visitor to the first page within the form flow - per standards this is generally /introduction
  - Breadcrumb: VA.gov home > Resources for schools > [H1 of form introduction page] 
    - Per the standard breadcrumb component, the last segment of the breadcrumb must match the H1 of the page exactly
    - Example: VA.gov home > Resources for schools > Report conflicting interests for proprietary schools
    - _Please note: We utilize action words within our form titles to emphasize the nature of the task.  We recommend adding the word "Report" - or something similar - to what your current Figma files represents as the H1._ 
  - Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - Example based on recommended H1: Report Conflicting Interests For Proprietary Schools | Veterans Affairs

**Structuring URLs for individual pages within the form flows**
- All pages within form flows will exist as child pages of the core/canonical URL.
  - Examples:
      - ww.va.gov/school-administrators/update-certifying-officials/introduction/
      - ww.va.gov/school-administrators/update-certifying-officials/review-and-submit/
      - ww.va.gov/school-administrators/update-certifying-officials/confirmation/
  - Please refer to [URL standards for form flows](https://design.va.gov/components/url-standards/#guidelines-for-urls-in-form-flows) when defining the URLs for these pages.  Reach out to #content-ia-centralized-team with any questions.


## <a name="nav"></a>Entry points
*Entry points are where the primary call-to-action is provided allowing a site visitor to navigate to the page/feature.*


**1) Resources for schools landing page - https://www.va.gov/school-administrators/**
  - This page is the parent of both the online forms  and must include a link within the content of the page.
  - The VEBT will be responsible for identifying where on the page these links should be placed and implementing them.

**2) About VA Form 22-1919**
- This is a standard page that is part of the "Find VA forms" experience.  It has a standard approach to page content and links.
- The OCTO Content and IA team will create and publish this page at https://www.va.gov/find-forms/about-form-22-1919/.  This may be done prior to the launch of the online form.
- Once the online form is launched, the OCTO Content and IA team will ensure a CTA is added to the page to allow visitors to link to the online version of the form.  

**2) About VA Form 22-8794**
- This is a standard page that is part of the "Find VA forms" experience.  It has a standard approach to page content and links.
- The OCTO Content and IA team will create and publish this page at https://www.va.gov/find-forms/about-form-22-8794/.  This may be done prior to the launch of the online form.
- Once the online form is launched, the OCTO Content and IA team will ensure a CTA is added to the page to allow visitors to link to the online version of the form.


## <a name="redirects"></a>Redirects
*Redirects should be implemented when a page is moved or archived to ensure visitors do not receive a "404 - Page not found" error.*

The product team is responsible for identifying, requesting, and implementing any redirects. The standard process for redirects can be found on the Platform website. 

**Please note that ALL redirects require you to submit a [Redirect Request Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) to be reviewed and approved before implementing.** Please submit at least 2 weeks in advance.*  


 

<hr>
<hr>

  ## <a name="supportinginfo"></a>Supporting information

**Search data for: www.va.gov/school-administrators/**

Summary: These forms are not currently available in a digital format or through search, so data is for related search terms resulting in traffic/clicks to the /school administrators page. 
- 12 month period
- On-site search clicks: 3,341
  - Queries and resulting clicks
    - official - ~105
    - sco - ~850
    - certify - ~120
    - 1919 - 0
    - 8794 - 0
    - conflict - 0
    - designate - 2
    - interest - 0
- Google clicks: 7,953
  - Queries and resulting clicks (all queries including the term)
    - official - 172 clicks, 33.9% CTR
    - sco - 1k, 12.7% CTR
    - certify - 172, 33.9% CTR
    - 1919 - 1
    - 8794 - 0
    - conflict - 0
    - proprietary - 0
    - designate - 0
    - interest - 0





