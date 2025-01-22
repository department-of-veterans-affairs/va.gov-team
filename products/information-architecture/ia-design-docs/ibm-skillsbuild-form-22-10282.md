# IA Design for IBM SkillsBuild form digitization 

**STATUS: FINAL 1/22/2025**

**Team:** govcio-vebt

**People:** 
- Ariana Adili - product team UX
- Katherine handed off to Monica and A. - CAIA content
- Sam Walker  - CAIA IA

**CAIA Intake ticket:** [87265](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/70?pane=issue&itemId=69171351)

**IA Tracker:** [88619](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/70?pane=issue&itemId=71290073)

**On this page:**
- [Navigation](#flows) _Updated 1/22/2025 by MN_
- [Page structure](#map) _Updated 1/22/2025 by MN_
- [URLs and breadcrumbs](#url) _Updated 1/22/2025 by MN_
- [Entry points](#nav) _Updated 1/22/2025 by MN_
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>Navigation flows <br>
_Updated 1/22/2025 by MN_

![Navigation flow](https://github.com/user-attachments/assets/b4f5bbf5-1cbf-4675-987e-b243e6a6d69c)



## <a name="map"></a>Page structure<br>
_Updated 1/22/2025 by MN_

![site map](https://github.com/user-attachments/assets/a2bf0ee1-0167-4cc7-b731-6ea5de04d82b)




## <a name="url"></a>URLs and breadcrumbs
_Updated 1/22/2025 by MN_

1) **Static benefit info page for IBM SkillsBuild - New**
    - Page will be created in Drupal
    - URL: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/
    - Breadcrumb: VA.gov home > Education and training > Other VA education benefits > [IBM SkillsBuild program page H1]


2) **Online form for IBM SkillsBuild - New**
    - URL: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282/
      - This is the canonical URL for the form.  All links should point to this URL.  This URL should immediately redirect visitors to the first page of the form flow, which is typically the /introduction page. 
    - Breadcrumb: VA.gov home > Education and training > Other VA education benefits > [IBM SkillsBuild program page H1] > [IBM SkillsBuild online form introduction page H1]
 
3) **Sub-pages in the form flow - New**
    - Breadcrumb: VA.gov home > Education and training > Other VA education benefits > [IBM SkillsBuild program page H1] > [IBM SkillsBuild online form introduction page H1]
      - Each segment must exactly match the H1 of the corresponding page
      - In form flows, the breadcrumb does not display the pages/path through the flow. The breadcrumb stops at the initial page of the flow and remains displayed that way throughout the flow.
    - URLs:
      -  CAIA IA is not prescribing specific URL slugs for each page in the form flow, but we can provide or review if requested.
      -  You must follow the [standards for URLs for sub-pages in a form flow](https://design.va.gov/components/url-standards/#guidelines-for-urls-in-form-flows)

4) **About VA Form Form 22-10282 - New**
    - Page will be created in Drupal
    - This is a standardized page that will be created and published by CAIA content.  The URL, H1, and breadcrumbs will be implemented per the standard direction of this section.
    - Note: Stakeholders want *only* the digital form, available. Page should not include a PDF option. 

## <a name="nav"></a>Entry points <br>
_Updated 1/22/2025 by MN_

### Required entry points

1. **[Other VA education benefits page](https://www.va.gov/education/other-va-education-benefits/)**
    - Add option for the IBM Skillsbuild program page
    - Placement:
      - Exact placement TBD by CAIA content
      - will include link and teaser text TBD by CAIA content
    - Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/
    - *Note about the content organization on this page: the 'Other VA education benefits' page currently has two H2 sections for organizing benefits. Each heading describes the benefits' relationship with the GI bill. Should we consider adding new H2 for the IBM Skillsbuild program, since this benefit does not have any dependancy/relationship with GI Bill at all?* <br>

    - <img width="250" alt="ibm page placement screenshot" src="https://github.com/user-attachments/assets/38d01231-d70b-4d93-a378-e187095a64c7">

2. **Benefit info page for IBM Skillsbuild** 
    - Add action link to apply online within the content.  This is the primary entry point for the form flow that allows visitors to navigate to the online form
    - Placement description:
      - The page will be created and published by CAIA content. Placement of the link.  contains a description of the benefit
      - Draft content in the [Content Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728998207284/c6a24447b96cefa10acf5138d27fdde8b07aca45?wid=0-1729001422687))
    - Link details
      - Link label: TBD by CAIA content
      - Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282/

### Additional key entry points

1. **Education hub left nav**
  - Add option for the IBM Skillsbuild program page. This is the primary entry point that allows visitors to navigate to the static program info page.
  - This entry point cannot be added until the program page is live
  - Placement description:
    - In the left nav, under Get benefits > Other VA education benefits
    - Place as 4th child option under "Other VA education benefits"
  - Link details:
    - Left nav link label: Match H1 of page
    - Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/ 
    
    <img width="200" alt="ibm 1 2" src="https://github.com/user-attachments/assets/c0c2242d-9c66-4292-a7d5-4d38b3453a58">


2. **Education hub left nav**
    - Add option for the IBM Skillsbuild online application
    - This entry point cannot be added until the online application is live to 100%
    - Placement description:
      - In the left nav, under Get benefits > Other VA education benefits > IBM SkillsBuild program
    - Link details
      - Left nav link label: Match H1 of page
      - Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282/


3. **About form 22-10282 page** - Add
    - This page does not currently exist and will need to be created and published.
    - Stakeholders want *only* the digital form, available. Page should not include a PDF option. 
    - Placement description:
      - CAIA content to place action link and supporting content in a standard placement on page
    - Link details:
      - Link label and content TBD by CAIA content
      - Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282/




## <a name="redirects"></a>Redirects <br>
*No redirects, since this is a newly digitized form and newly added pages.*


## <a name="bestbets"></a>Best Bets<br>

1. Add a best bet for the IBM Skillsbuild benefit info page that directs users to www.va.gov/education/other-va-education-benefits/[H1 - TBD by Content]/


## <a name="stagedrollout"></a>Staged Rollout<br>
No


