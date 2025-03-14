# IA Design for WEAMS data integration into GIBCT
**STATUS: [FINAL]**
- 3/14/2025 - MN: Updated to include Yellow Ribbon integration IA work and finalized based on team's approach


**Project info:**
- Team: EDM Team - Cassidy Beach (PM), Theresa Simone (PM), Sneha Kulkarni (UX) Jenn Drahota (BA)
- CAIA IA: Sam Walker
- Tickets:
  - CAIA Intake ticket: [92369](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92369)
  - IA Tracker: [95208](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95208);
- [IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729183095781/13879f018516bd9dd354f278919b5a9c101a0f1f?wid=136-1729183109815).
- Figma design files: [Desktop](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=72-1228&node-type=canvas&t=etnWBEfJkurm6JoP-0), [Licensing & Certification on mobile](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=1122-38781&node-type=canvas&t=JDAGEOPE8D1fFZwJ-0), [Search results on mobile
](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=2273-321672&node-type=canvas&t=XqMTcBSnWK9UgZfB-0)


IA support will be focused on the connections between the Comparison Tool and the rest of va.gov, but will not be providing feedback on IA within the tool or sub-pages. Please reference the following guidelines for design/content/IA decisions inside the tool:
- All content, data, new functionality, and child pages holding WEAMS data must be built on, or as sub-pages of, the current Comparison Tool parent url of https://www.va.gov/education/gi-bill-comparison-tool.
- How sub-pages under that parent URL are structured is up to the product team.
- Follow VADS standards for all [URLs](https://design.va.gov/components/url-standards/), [breadcrumbs](https://design.va.gov/components/breadcrumbs), [page titles](https://design.va.gov/content-style-guide/page-titles-and-section-titles).
- Every page created must have a clear entry point - a way for visitors to navigate to the page through links and navigation components. Pages cannot be reachable only via search.
- Key SEO elements - page titles and intro text - should be differentiated from other pages in the Education hub. For example, do not create a sub-page of the comparison tool named "Education benefits management".

**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map).*

- The team will maintain the existing URL - https://www.va.gov/education/gi-bill-comparison-tool/ - as the primary landing page for the expanded comparison tool.
- The existing comparison tool will move down a level in the hieararchy to nest under the landing page
- New pages to support licensing and certifications and the national test data will also be sub-pages under the landing page

![image](https://github.com/user-attachments/assets/ffe219cf-ffc8-45ee-be6e-60a95360c000)


## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


**1) GI Bill Comparison Tool landing page - Existing URL, new screen**
- URL: va.gov/education/gi-bill-comparison-tool
- Breadcrumb: VA.gov home > Education and training  > [Page H1]
  - Example breadcrumb: VA.gov home > Education and training > GI Bill Comparison Tool
- Notes:
  - This URL currently holds the first screen in the Compare Schools search workflow.
  - This same URL should now be used for the new 'landing page' screen. The H1 may be updated to reflect the added information in the tool.

**2) School search - Existing screen, new URL**
- URL: va.gov/education/gi-bill-comparison-tool/schools-and-employers/
- Breadcrumb: VA.gov home > Education and training  > [Page H1] > [Page H1]
  - Example breadcrumb:  VA.gov home > Education and training  > GI Bill Comparison Tool > Search schools and employers
- Notes:
  - This will be the start screen of the School Comparision tool search flow.
  - It will be moved down one level in the heirarchy and will have a new URL and breadcrumb showing it as sub-page of va.gov/education/gi-bill-comparison-tool

**3) Licensing & Certification search - new**
- URL: va.gov/education/gi-bill-comparison-tool/licenses-certifications-and-prep-courses/
- Breadcrumb: VA.gov home > Education and training  > [Page H1] > [Page H1]
  - Example breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > Licenses, certifications and prep courses
- Notes:
  - New page, for the start of a new search flow for licenses and certifications data.
  - It should be a sub-page of va.gov/education/gi-bill-comparison-tool

**4) National tests data list - new**
- URL: va.gov/education/gi-bill-comparison-tool/national-exams/
- Breadcrumb: VA.gov home > Education and training  > [Page H1] > [Page H1]
  - Example breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > National tests and exams
- Notes: New page holding list data. It should be a sub-page of va.gov/education/gi-bill-comparison-tool


## <a name="nav"></a>Entry points <br>

### Entry points required for launch

**1) [Education benefit hub page](https://www.va.gov/education/)**
- KEEP the existing "GI Bill Comparison Tool" link label and destination, UPDATE the teaser text to reflect the additional content added into the Comparison Tool.
- REMOVE the "Find a Yellow Ribbon school" link and teaser text


### Post-launch entry points

**1. Education benefit hub secondary nav** 
- REMOVE the "Find a Yellow Ribbon school" option from the left nav
- KEEP the "GI Bill Comparison Tool" link label and placement as is

**2. Benefit hub promo spot**
- UPDATE the teaser text of the GI Bill Comparison Tool promo spot to reflect the additional content added to the tool


### Best bets

**1. GI Bill School Comparison Tool**  
- UPDATE existing best bet for GIBCT with description and keyword matches that reflect the additional content added into the tool
- REMOVE the existing best bet in place for the Find a Yellow Ribbon school tool


## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. Redirects listed are the responsibility of the product team, please submit a [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) at least 2 weeks in advance, so that CAIA IA can verify that the redirects are successful on launch.*  

- Who implements the redirect: EDM team
- When does the redirect go live: After launch

Current URL | Redirect to | Notes
--- | --- | ---
www.va.gov/education/gi-bill-comparison-tool/[xxxx] | www.va.gov/education/gi-bill-comparison-tool/[TBD school comparison search] | Team will need to redirects old URLs to new URL structure.  This will ensure that child pages of the tool - which can be indexed in search and bookmarked - redirect visitors to the corrected URL structure and avoid receiving a 404 error. 
www.va.gov/education/yellow-ribbon-participating-schools/ | www.va.gov/education/gi-bill-comparison-tool/schools-and-employers/| Redirect original yellow ribbon tool URL to the search page of the school comparison tool




<hr>

