# IA Design for Request for Reimbursement of National Exam Fee (VA Form 22-0810)

**STATUS: Complete**

**Team:** VEBT

**CAIA Intake ticket:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/122043

**IA Tracker:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/126840

**Files:**
- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1761854391180/a6947821c5cea11a0bc304b5bd5a23d89223131b?wid=0-1761854466465)
- [Figma](https://www.figma.com/design/unaCYgu2gwdZazLCDKVRsy/VEBT-Form-22-0810--App.-for-Reimbursement-of-National-Exam-Fee?m=auto&t=XJdvbPAQM2u7Sc8a-6)

**On this page:**
- [Navigation/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Launch coordination activities](#launch)


## <a name="flows"></a>Navigation/page flows <br>
*Illustration and/or description of how users will navigate to and flow through the experience for all impacted visitors typies. This helps identify key entry points and findability requirements, user flow scenarios, and content/messaging needs across various scenarios.*
<img width="1456" height="449" alt="Screenshot 2025-12-17 162902" src="https://github.com/user-attachments/assets/d5d46456-b52f-4c7b-b82b-f0e9c486cd8e" />


## <a name="map"></a>Page structure<br>
<img width="145" height="623" alt="Screenshot 2025-12-18 141227" src="https://github.com/user-attachments/assets/75d162ac-e00f-4ec5-ba45-f98cf930c2ea" />


## <a name="url"></a>Page URLs and breadcrumbs
Follow the [VA Design System](https://design.va.gov/) for URL, breadcrumb, and page title guidance.  
- [URLs](https://design.va.gov/components/url-standards/)
- [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Title tags](https://design.va.gov/content-style-guide/title-tags)


**1) National exam fee reimbursement (VA Form 22-0810) - Existing (Drupal page; former About form page; redirect to be done by content)**
- URL: va.gov/forms/22-0810/
- H1: National exam fee reimbursement (VA Form 22-0810)
- Sub-heading: Request for Reimbursement of National Exam Fee
- Breadcrumb: VA.gov > VA forms > National exam fee reimbursement (VA Form 22-0810)
- Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - National Exam Fee Reimbursement (VA Form 22-0810) | Veterans Affairs

**2) Request national exam fee reimbursement online - New (form)**
- URL: va.gov/forms/22-0810/request-reimbursement-national-exam-fee-online/
- H1: Request national exam fee reimbursement online
- Sub-heading: Request for Reimbursement of National Exam Fee (VA Form 22-0810)
- Breadcrumb: VA.gov > VA forms > National exam fee reimbursement (VA Form 22-0810) > Request national exam fee reimbursement online
- Browser title: [H1 of introduction page in title case] | Veterans Affairs
    - Request National Exam Fee Reimbursement Online | Veterans Affairs


**Structuring URLs for individual pages within the form flows**
- All pages within form flows will exist as child pages of the core/canonical URL.
  - Examples:
      - va.gov/forms/22-0810/request-reimbursement-national-exam-fee-online/introduction/
      - va.gov/forms/22-0810/request-reimbursement-national-exam-fee-online/review-and-submit/
      - va.gov/forms/22-0810/request-reimbursement-national-exam-fee-online/confirmation/
  - Please refer to [URL standards for form flows](https://design.va.gov/components/url-standards/#guidelines-for-urls-in-form-flows) when defining the URLs for these pages.  Reach out to #content-ia-centralized-team with any questions.


## <a name="nav"></a>Entry points <br>

Teams must launch with at least one entry point that allows site visitors to navigate to the new content or feature. 

**Please note:** The Governance Team requires preview links of updated entry points as a part of staging review in the Collaboration Cycle. It may be a launch-blocking issue. Updates that will be done by the Content and IA team, as noted below, should be requested a minimum of one week before the staging review cutoff (four days prior to scheduled review). Two weeks of advanced knowledge is preferred when possible. Please communicate the staging review date as soon as it is scheduled to your main Content and IA contact. 

### Required entry point(s)

1. **National exam fee reimbursement (VA Form 22-0810)**
  - Entry page URL: va.gov/forms/22-0810/
  - Placement description: Add a link to the form as appropriate
  - Link details
    - Link label: TBD by content
    - Link destination: va.gov/forms/22-0810/request-reimbursement-national-exam-fee-online/
  - Notes:
    - Who will update: Content will add the link
    - When will this entry point go live: at launch
    - **Note: If the form will be released incrementally (aka not at 100%) or if the launch plan includes taking the form down temporarily after launch to check submission quality, a widget will be required. This requires coordination between the product engineer to create the widget and content to provide text for the widget. This can take some time. Please plan for at least 2 weeks ahead of staging review.** 

### Additional key entry points
None at this point

##  <a name="redirects"></a>Redirects <br>
The identified entry point is the existing About form page. That section is being updated by Public Websites and Content and IA teams. These teams will be responsible for the redirect for the existing About page URL.  


## <a name="launch"></a>Launch coordination <br>
*Communication when preparing for launch is critical to ensuring all supporting content, links, and messaging are implemented in a timely manner to ensure a good experience. Missing any of these steps can result in findability challenges, incorrect or misleading information, duplicate content, etc. *

| Key task | Responsibility | When to complete | Additional info |
| ------------- | ------------- | ------------- | ------------- |
| Communicate if staged/incremental launch is planned | VEBT | ASAP | initiates coordination of widget creation |
| Communicate date of staging review | VEBT | Once scheduled | Allows OCTO to prepare entry point preview links |
| Communicate launch date | VEBT | Once scheduled | Allows OCTO to plan for updates to About and static pages |


<hr>
<hr>
