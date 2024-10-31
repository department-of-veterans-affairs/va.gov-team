# Initiative - Resources and Support search experience enhancements, Phase 1

- [Overview](#overview)
- [Problems to solve](#problems-to-solve)
- [Scope](#scope)
- [Design](#design)
- [Measuring success](#measuring-success)
- [Questions](#questions)
- [Relevant resources](#relevant-resources)
- [Launch planning](#launch-planning) 
  - [Collaboration cycle](#collaboration-cycle)
  - [Timeline](#timeline)
- [Screenshots](#screenshots)
- [POCs and Stakeholders](#pocs-and-stakeholders)


## Overview
Initially called the "Learning Center", Resources and Support leverages a variety of Drupal content types to provide a self-serve library with targeted, supplemental information to help Veterans and other beneficiaries understand their VA benefits. 

Resources and Support was designed to provide a home for Tier 2 content which directly supports a Veteran, service member, or family member in discovering, applying for, tracking, managing, or using a VA benefit or service **and**
- provides supplemental eligibility, evidence information, or application instructions for a benefit, _or_
- explains ways to use a VA benefit, _or_
- provides more information about a specific program, service, or sub-benefit that a person can use after they apply for a VA benefit, _or_
- provides a brief overview and link to more information about a Veteran benefit from another government agency (like DoD), _or_
- provides support for signing into and using VA.gov, _or_
- answers a question that Veterans, service members, or family members have about VA benefits and services (based on contact center reports, search data, and user feedback)

**The first articles were published in November 2020.** 

Since then, Resources and support has expanded to include 137 articles (as of September 2024). As much as 50% of the content from the Benefit Hubs is expected to be moved into Resources and Support as part of that streamlining effort. We expect the number of articles will continue to grow via the ongoing migration of content to VA.gov from legacy sites. Other major content areas are being evaluated, such as health education and materials for non-beneficiary audiences. This anticipated growth accelerated the prioritization of this effort to ensure the experience adequately supports discoverability and Veteran understanding.

## Problems to solve

### Current Veteran experience
- The Resources and Support search component is custom built and allows the Veteran to search resources and support articles _or_ all of VA.gov 
- "Tags" for benefit category, topic, and Audience _might_ appear on articles but aren't consistent, interactive, or use to filter or sort search results.
- The landing page does not adequately support browsing - topic lists are incomplete and manually organized by benefit hub, rather than based on Veteran mental models. 
- The experience contains a number of accessibility defects, as discovered by an [audit performed in May 2024](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17365#issuecomment-2116090937) 

### Current Drupal editorial experience
- Tags representing topic and/or audience group (i.e. beneficiary or non-beneficiary) are not required.
- Options for topic tags are not comprehensive
- Methods to organize content and support findability rely on manual editorial processes, making them inconsistent and/or absent.

## Scope
### In scope
Phase 1 focus
- addressing accessibility defects - either through design iteration or engineering implementation
- increasing findability 
  - search improvements
  - taxonomy enhancements to implement functional tagging, which can be extended to other parts of the VA.gov experience
- landing page redesign
- detail page template improvements
- ensuring no silent failures

### Out of scope
The following changes will be part of a future iteration phase 
- Page content improvements
  - new content types (i.e., image list)
  - template improvements (i.e. checklist, multi FAQs)
- Adjust search for Resources and Support searching only

### Discovery to inform iteration 
Efforts to inform this iteration with Veteran feedback
- [#19090 Good/Bad rating - update submitted feedback success message #19090](https://app.zenhub.com/workspaces/vagov-sitewide-product-team-6645154188a81a1f7a0a9464/issues/gh/department-of-veterans-affairs/va.gov-cms/19090) will simplify the feedback process and enourage high participation by presenting the Medallia survey after a user rates a R&S page, with hopes that we will receive more actionable qualitative feedback
- Veteran usability research will be conducted using a prototype of the redesigned search experience


## Design
[Figma](https://www.figma.com/design/cg8VNnxFOxw7lb10FVHpi5/VA-Resources-support-template?node-id=198-5737&node-type=section&t=G7yoxBvukRBiwCbI-0)
Experimental Design [Ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3423)

### Drupal UX

## Questions 
> Related - [Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/initiatives/2024-search-experience-enhancements-Phase-1/decision-log.md)

### Editorial experience
- user permissions vs Section/Organization

### Tag categories
- Which categories will be available?
- Which categories will be required in Drupal UX?
- Which categories will be available in front end for filtering?

### UX behavior
- If multiple filters are used in search, do they expand or reduce search results (i.e., when (hypothetical) tags for both `Careers and Employment` and `Education and training` are chosen, do search results include articles tagged with either cateogry or only those which are tagged with both?)

### Governance
- What criteria determines the topics/categories available for browsing via the landing page?
  - What is the maximum number of categories to be displayed? 
- What criteria determines links displayed as Featured?
  - Do featued links direct to individual pages or pre-filtered search results?
- What criteria determines which topics are available for filtering?
  - What is the maximum number of filters?
- What criteria is used to determine when a new topic can be added?
- Can topics be deprecated? If so, by what criteria?


## Measuring Success

### Analytics
- For baseline metrics, including CSAT, user and traffic data, and pageviews, please see [Resources & Support Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/analytics/Analytics%20-%20Resources%20%26%20Support.md)
- Monthly experience ratings are available in the [Unauthenticated outcomes and metrics folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/sitewide-content/unauthenticated-content-outcomes-and-metrics/monthly-experience-ratings/ratings-by-month)

## Relevant resources
- [Product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/resources-and-support)
- [Early Learning center template requirements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content/tier-2-content-IA-and-design/learning-center-mvp/template-requirements.md#learning-center-template-requirements)
- [Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/resources-and-support/analytics/Analytics%20-%20Resources%20%26%20Support.md)
- [Article list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/resources-and-support/resources-and-support-article-list.md)
- [A guide to Resources and support content types](https://prod.cms.va.gov/help/resources-and-support/a-guide-to-resources-and-support-content-types) - requires network connection

--- 

## Launch Planning
### Collaboration Cycle
Milestone | Date | Link to issue |
---| :---: | :---: |
| Collaboration cycle kickoff request | | |
| PO Sync |October 30, 2024| [#95014](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95014) |
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

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
<details>
  <summary> Current landing page experience </summary>

  ![image](https://github.com/user-attachments/assets/fbb1022e-e339-4780-a501-e7b7214e893d)

</details>

<details>
  <summary> Example article </summary>

![image](https://github.com/user-attachments/assets/b1fc2e64-025e-4a5b-a452-8c087c6a36b0)

</details>

### After

---

#### POCs and Stakeholders

- Team Name: Sitewide Public Websites
- GitHub Label(s): Public Websites
- Slack channel: #proj-sitewide
- Product POCs:
   - Michelle Middaugh - OCTO PO
   - Fran Cross - A6 PM
   - Jill Adams - A6 Delivery Manager

</details>
