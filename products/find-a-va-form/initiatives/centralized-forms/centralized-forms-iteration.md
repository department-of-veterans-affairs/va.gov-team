# Centralized forms initiative

## Background and problem statement

Veterans, family member beneficiaries, and those who support them rely on many forms to apply for benefits, file claims, provide and update information on file with VA, and other critical tasks. VA.gov's current organizational approach to forms is not optimal to helping Veterans, family member beneficiaries, and those who support them find the forms and related information as quickly as possible.

VA.gov currently provides information about and access to these forms in different ways:
- Within benefit hubs, organized around benefit types (ex. The online 10-10EZ lives in the va.gov/health-care hub and the 526EZ lives in the va.gov/disability hub)
- Under root level pages, organized around a task (ex. The financial status report lives under the va.gov/manage-debt root-level page) or a grouping of forms (ex. Forms related to multiple claim types live under the www.va.gov/supporting-forms-for-claims/ root-level page)
- Within a dedicated "Find a form" section of the site, organized around forms and presented as a search experience (PDF forms)

Over time, this organizational approach has led to these problems:
- **Forms are harder to find due to the lack of a consistent information architecture for all forms and clear navigation paths to forms used across multiple benefits.** VA's continued digitization of more forms, including many used across multiple benefits, compounds this problem futher.
- **Information about how to apply for benefits and complete other tasks using forms is scattered across the site―leading to duplicative information and underutilization of the most SEO-optimized pages.** The "About form" pages garner the highest SEO rankings for their respective forms due to the form number being in the H1 of each page. But the "About form" page template does not allow for robust information about how to use a form, information to gather before starting a form, or what to expect after submitting a form. This helpful information, when present, is instead housed on pages such as "How to apply" pages and form introduction pages within the benefit hubs. So, the most robust and helpful information isn't presented on the pages that most appear in search results.

### History and resources
- [2021-README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-01-mvp/README.md#mvp-search-landing-page-status-and-decisions): 
We complete an iteration on the "Find a form" product in 2020 to align with the VA.gov look and feel, capitalize on high SEO value of About form pages to drive more traffic to top tasks and online forms, and add analytics tracking to all links and downloads. However, the About form page templates need additional iteration to better accomodate all relevant form information. This file offers a timeline of changes and overview of decisions.
---

## Outcome summary

The goals of this iteration are
- to create a centralized place for all digitized forms and form-related tasks (i.e. form search, pdf download, pdf upload, online completion)
- to eliminate the need to categorize by benefit or create unique spaces (i.e. /supporting-forms-for-claims/) for each new group of forms
- to eliminate the duplication of content that exists for benefit applications between the form detail page (about pg), the how to apply page, and the introduction pages of the online forms
- to reduce the number of pages fighting for search ranking 
- to allow for growth of and wider contribution to the digital forms space

## Problems to solve

- We are no longer digitizing forms that just support a single benefit for a single audience.
  - Teams are now digitizing forms that support multiple benefit types, aren't related to benefits, allow multiple audience types to submit, or are for non-Veteran audiences.  
- There is an entire library of forms, all of which do not fit into the benefit hub and spoke structure.
- Some forms require follow up reviews/approvals from non-Veteran audiences


## Current experience

### IA
<details>
  <summary> Current IA </summary>


  ![image](https://github.com/user-attachments/assets/3f0f7569-e86a-4b23-9d18-71116a5d01d4)

</details>

### Screens in the Find a form flow

- [Find a form landing page](www.va.gov/find-a-form/)
- Detail page - example: About VA Form 10-10EZ](www.va.gov/find-forms/about-form-10-10ez/)
  - In 2021, the Find a Form Team determined that the Top 100 most searched forms were the ideal scope for Details Pages and declared that only new Veteran-facing forms and selected non-Veteran facing forms averaging more than 200 Find a Form searches a month would receive Details page treatment
  - Today, CAIA determines if a form needs a detail page and if so, they add the relevant details (i.e., when to use, related forms)
  - Includes
    - About form intro
    - Download PDF (with Adobe Acrobat modal)
    - Apply now (online)
    - Check eligibility
    - Information needed
    - Apply now
    - Related forms
    - Helpful linke
- How to apply - example: [Apply for health care](www.va.gov/health-care/how-to-apply/)
  - Includes
    - Check eligibility
    - Information needed
    - Apply now (online)
    - How to apply
    - How to get help applying
    - After applying
- Application introduction - example: Apply for health care](www.va.gov/health-care/apply-for-health-care-form-10-10ez/)
  - Includes
    - About form intro
    - Sign in to check status
    - Check eligibility
    - Information needed
    - After applying
    - Apply now (online)
    - How to get help applying
- New pattern - document upload tool

[Screenshots](#screenshots)

## Proposed future experience

This iteration proposed a centralized forms experience where online forms and applications live, rather than in the hubs.  
The landing page includes search field, search result, and quick links to key forms. 

## Governance
The following areas will need clear decisions and documentation 
- Criteria to determine which types of pages are created, expected content for the page, and the team responsble for creating them
- Expectations for search results (i.e. what actions are displayed within the search results vs available on the detail page)

### Questions
Answers to the following questions will influence the next iteration

** Veteran experience**
- Are Veterans negatively impacted by the duplicative content included in the flow? If so, how?
- What role does the Find a form tool play in finding and using digitized forms? What is the typical user flow?
  - How might changing the existing experience impact Veteran usability?

** Content and IA strategies**
- What is the strategy for the "About" pages? What is the criteria for whether or not a page is published?
  - They perform well in search results but also compete with the form and with "how to apply" pages.
  - An "about" page might be redundant if there is a digital form.
  - Without a detail page, search results could just point to the appropriate page - but not every form has a home.
- What info should live with form vs benefit? And where does that content fit within the journey?
- Where does the online version of a combined form live? Should the individual form live with a combined form?
- What forms (if any) should remain in the benefit hub space?
- Should authenticated forms live in the new central home with an authenticated widget back on intro page?

** Forms and audience landscape **
- How many forms support more than one benefit?  
- How many forms don't relate to benefits at all?
- How many forms have more than one audience?
- How many forms have non-Veteran audiences (and who are they?)
- How many Veteran-facing forms also require actions from non-Veteran audiences?  


## Measuring Success

### Desirable user outcomes
- Improved time to find and use forms
- Reduced cognitive load by eliminating the need to understand how a form relates to the benefit hub IA to know where to go to find it
- Increased findability of forms and form related tasks by having a single common location that all entry points lead to and can be easily bookmarked for return visits
- Improved and simplified search results by reducing the number of pages competing for ranking for the same form

### Desirable business outcomes
- Reduced maintenance of duplicative content
- Reduced need for IA maintenance (i.e. form movement) as the site and digitized forms space grows
- Increased "self-service" placement by providing a simplified IA structure and related guidance on placement of digitized forms within the experience
- Increased ability for wider contribution to the digital forms space
- Decreased number of search best bets needed to highlight the most valid option in search








### Artifacts
- OCTO epic: [Centralized online forms #1160](https://github.com/orgs/department-of-veterans-affairs/projects/940/views/18?filterQuery=portfolio%3A%22OCTO+Digital+Experience%22+crew-%2F-pod%3A%22Content%2C+IA%2C+Editor+Experience%22&pane=issue&itemId=75354026&issue=department-of-veterans-affairs%7Cdigital-experience-products%7C1160)



## Scope


## Launch Planning

### Collaboration Cycle
Milestone | Date | Notes |
---| :---: | :---: |
| Collab cycle kickoff  | |
| PO Sync |  | |
| Design Intent | | |
| CMS Request| | |
| Research review| | |
| Midpoint Review| | |
| Analytics request| | |
| Contact center review| | |
| Staging review| | |
| Privacy, security, infrastructure readiness review| | |
| Architecture Intent| | |

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*



#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---
