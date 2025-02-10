# IA Design for CHAMPVA OHI (Other health insurance) Supplemental form 7959c
**STATUS: Final**
- 7/14/2024 - Draft complete KOM
- 1/28/2025 - Finalized MN

**Team:** IVC Forms
**IA Request:** 
- [collab cycle ticket](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1?filterQuery=ohi&pane=issue&itemId=62895038)
- [CAIA Intake](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77855)

**On this page:**
- [User/page flows](#flows) *(Updated 2/10/25)*
- [Page structure](#map) *(Updated 2/10/25)*
- [URLs and breadcrumbs](#url) *(Updated 1/28/25)*
- [Entry points](#nav) *(Updated 1/28/25)*
- [Redirects](#redirects)
- [Best Bets](#bestbets) *(Updated 1/28/25)*
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>Navigation flows <br>
*(Updated 2/10/25 - added entry point of CHAMPVA application confirmation page to flow diagram)*

![screenshot of the navigational paths to the OHI form](https://github.com/user-attachments/assets/aea0b7bd-e46d-4934-a637-c1c845c4c484)




## <a name="map"></a>Page structure<br>
*(Updated 2/10/25 - further defined rationale for structural approach)*

![screenshot of a site map showing placement of the pages](https://github.com/user-attachments/assets/8b2c261f-fb1d-45ad-ad66-20bd75d69b14)


Notes:
- The family member benefit hub - where CHAMPVA content and features live - is structured differently than the Veteran benefit hubs. The key difference is that the Veteran hubs have hard-coded groupings for "Get benefits" and "Manage benefits" which divides content and features based on needs before applying and after applying.
- These groupings do not exist in the family hub, and the family hub has very little "Manage benfits" content or features, so that structure is not planned for that space at this time. 
- Therefore, in the family member benefit hub, content and features related to getting benefits and managing benefits will both be nested under the primary benefit content page.


## <a name="url"></a>URLs and breadcrumbs
*(Updated 1/28/25)*

1) **CHAMPVA Other Health Insurance Certification online form**
- URL:
  - ~va.gov/family-and-caregiver-benefits/health-and-disability/champva/other-insurance-form-10-7959c/~
  - va.gov/family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c/
- Breadcrumb:
  - VA.gov home > [Family member hub H1] > [Health and disability sub-hub H1] > [CHAMPVA page H1] > [OHI form H1]
  - Example: VA.gov Home > VA benefits For family and caregivers > Health and disability benefits for family and caregivers > CHAMPVA Benefits > Submit a CHAMPVA Other Health Insurance Certification


## <a name="nav"></a>Entry points <br>
*(Updated 1/28/25)*

### Required entry point(s)

1. Family benefits hub left nav
    - Placement description:
      - Nested under Health and disability benefits > CHAMPVA
      - The second link under CHAMPVA in the family member hub left nav
    - Link label: Sumbit other insurance
    - Link destination: /family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c/

![Mock-up of left nav showing new menu item](https://github.com/user-attachments/assets/f4114e77-c458-4bec-ad8e-0b34087c2cd2)

### Other key entry points

1. [CHAMPVA benefits page](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/)
  <br> *This can be an alternative to the required entry point in the left nav. Either the left nav or the on page link need to be in place with launch so visitors can navigate to the form.
    - Placement description:
      - Under the "Supporting documents for your application" section
      - In the accordion titled "If you have other health insurance (including Medicare)
      - Add supporting content an a link to the OHI form
    - Link label: Supporting content and link label to be determined by CAIA content
    - Link destination: /family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c/

2. [CHAMPVA application confirmation page](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/apply-form-10-10d/) 
    - Placement description:
        - Add conditional supporting content and link to the confirmation page of the online 10-10d form for those applicants that did not upload an OHI with their application
    - Link label: Supporting content and link label to be determined by CAIA content
    - Link destination: /family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c/


3. [About VA form 10-7959c page](https://www.va.gov/find-forms/about-form-10-7959c/)
    - Placement description:
      - Add supporting content and link to the online version of the form
      - Follow standard placement guidance for the "About form" pages
  - Link label: Supporting content and link label to be determined by CAIA content
  - Link destination: /family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c/


## <a name="redirects"></a>Redirects <br>
No redirects because this online form does not exist yet


## <a name="bestbets"></a>Best Bets<br>
*(Updated 1/28/25)*

Existing/New | URL  | Title  | Description | Keywords | Notes  
--- | --- | --- | --- | --- | ---
Existing | https://www.va.gov/find-forms/about-form-10-7959c/ | Reporting Changes for Your 10-10d Application (VA Form 10-7959c) | Use VA Form 10-7959c when you are applying for CHAMPVA and need to declare changes as part of your VA Form 10-10d application. | 10-7959c, form 10-7959c, va 10-7959c, va form 10-7959c | Update this best bet to direct users to the online form rather than the "About form" page.  Update title and description.  Review keywords. 

## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Pages/sections that can't have a widget: find a form pages, within accordions, hub pages*

Yes, team is planning staged rollout.

**[Which static page has the widget, ie the main entry point?]**




<hr>
<hr>
