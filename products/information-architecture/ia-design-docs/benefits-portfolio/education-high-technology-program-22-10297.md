# IA Design for High Technology Program -- VA form 22-10297 (Vet Tec 2.0)
**STATUS: In progress**

**Team:** VEBT

**CAIA Intake ticket:**
https://github.com/department-of-veterans-affairs/va.gov-team/issues/111582

**IA Tracker:** 
https://github.com/department-of-veterans-affairs/va.gov-team/issues/113242

**Files:**
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741952923569/292ec62768ccf39d097e94a278b65fea8e58b736)
- [Figma](https://www.figma.com/design/16Nm7LglbF1lCKBxdphRKk/VEBT-Form-22-10297--HITECH-VETS-Program--VET-TEC-2.0-?node-id=0-1&t=dWNWNxVO8S549B1I-1)

**On this page:**
- [Navigation/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirets](#redirects)
- [Search best bets](#bestbets)
- [Launch coordination activities](#launch)


## <a name="flows"></a>Navigation/page flows <br>
![Screenshot 2025-07-10 093429](https://github.com/user-attachments/assets/d65ee2d4-de53-4cda-a56b-92b3073b27e0)


## <a name="map"></a>Page structure<br>
This form will be under "Other VA education benefits" within the education hub and follow the patterns of that subsection. 

![Screenshot 2025-07-10 093455](https://github.com/user-attachments/assets/31d57867-93b8-4c42-8407-989721ab1114)



## <a name="url"></a>Page URLs and breadcrumbs
Follow the [VA Design System](https://design.va.gov/) for URL, breadcrumb, and page title guidance.  
- [URLs](https://design.va.gov/components/url-standards/)
- [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Title tags](https://design.va.gov/content-style-guide/title-tags)

**1) High Technology Program - New**
- URL: va.gov/education/other-va-education-benefits/high-technology-program/
- Breadcrumb: VA.gov home > Education and training > Other VA education benefits > High Technology Program 
- Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - Example based on H1 in Figma: High Technology Program | Veterans Affairs
-Notes: OCTO will create and publish this page as it lives in Drupal.

**2) Apply for the High Technology Program - New**
- URL: va.gov/education/other-va-education-benefits/high-technology-program/apply-for-high-technology-program-form-22-10297/
- Breadcrumb: VA.gov home > Education and training > Other VA education benefits > High Technology Program > Apply for the High Technology Program
- Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - Example based on H1 in Figma: Apply for the High Technology Program | Veterans Affairs

**3) About VA form 22-10297 - New**
- URL: va.gov/find-forms/about-form-22-10297/
- Breadcrumb: VA.gov home > Find a VA Form > About VA Form 22-10297
- Notes: OCTO will create and publish this page as it lives in Drupal.

**Structuring URLs for individual pages within the form flows**
- All pages within form flows will exist as child pages of the core/canonical URL.
  - Examples:
      - va.gov/education/other-va-education-benefits/high-technology-program/apply-for-high-technology-program-form-22-10297/introduction/
      - va.gov/education/other-va-education-benefits/high-technology-program/apply-for-high-technology-program-form-22-10297/review-and-submit/
      - va.gov/education/other-va-education-benefits/high-technology-program/apply-for-high-technology-program-form-22-10297/confirmation/
  - Please refer to [URL standards for form flows](https://design.va.gov/components/url-standards/#guidelines-for-urls-in-form-flows) when defining the URLs for these pages.  Reach out to #content-ia-centralized-team with any questions.



## <a name="nav"></a>Entry points <br>

Teams must launch with at least one entry point that allows site visitors to navigate to the new content or feature. 

### Required entry point(s)

**High Technology Program URL: va.gov/education/other-va-education-benefits/high-technology-program/**
  - This will be a new unauthenticated page under the Other VA education benefits subsection within the Education benefits hub.
    - Link destination: va.gov/education/other-va-education-benefits/high-technology-program/
  - Notes:
    - This will be created and published by the OCTO Content and IA team. The page could be published in advance once the program launch date and/or paper form is finalized. It must be published by the time the online form launches. 

### Additional key entry points

**About VA Form 22-10297**
- This is a standard page that is part of the "Find VA forms" experience. It has a standard approach to page content and links.
- The OCTO Content and IA team will create and update this page at https://www.va.gov/find-forms/about-form-22-10297/.  
- As soon as the paper form is finalized the OCTO Content and IA team can publish this page. Once the online form is launched, the OCTO Content and IA team will ensure a CTA is added to the page to allow visitors to link to the online version of the form.

**Other VA education benefits**
- This is an existing page within the education hub that is managed by the OCTO Content and IA team.
- Information will be added under the "Programs for additional GI Bill benefits" with a link to va.gov/education/other-va-education-benefits/high-technology-program/

##  <a name="redirects"></a>Redirects <br>
*Redirects should be implemented when a page is moved or archived to ensure visitors do not receive a "404 - Page not found" error.*

The standard process for redirects can be found on the Platform website. 

**Please note that ALL redirects require you to submit a [Redirect Request Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) to be reviewed and approved before implementing.** Please submit at least 2 weeks in advance.*  

| Current URL | Redirect to | Notes |
|----------|----------|----------|
| va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/ | va.gov/education/other-va-education-benefits/high-technology-program/ | **Product team responsible for requesting and implementing redirect** |
| va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/ | va.gov/education/other-va-education-benefits/high-technology-program/ | **OCTO team responsible for implenting redirect within Drupal** |


## <a name="launch"></a>Launch coordination <br>
*Communication when preparing for launch is critical to ensuring all supporting content, links, and messaging are implemented in a timely manner to ensure a good experience. Missing any of these steps can result in findability challenges, incorrect or misleading information, duplicate content, etc. *

| Key task | Responsibility | When to complete | Additional info |
| --- | --- | --- | --- |
| Communicate finalization of paper form | VEBT | Once final | Allows OCTO to create About and static pages |
| Communicate date of staging review | VEBT | Once scheduled |
| Submit redirect request | VEBT | at least 2 weeks prior to implementation | 
| Communicate launch date | VEBT | | Allows OCTO to plan for updates to About and static pages |





<hr>
<hr>
