# VSA Product Outline: VA.gov homepage (WIP)

> _This product outline has being written several years post-launch with the purpose of kicking off an initiative to update the homepage._

## Executive summary

Conceived as the unifying "Veteran-facing digital brand" for the Department of Veteran Affairs when it launched in late 2018, VA.gov has become the front-door to top tasks, tools and information for Veterans and their beneficiaries. 

In the nearly three years since the site's launch, the range of VA benefits and programs has grown and evolved, with new valuable offerings. The VA.gov authenticated experience has expanded to include MyVA, MyProfile, eBenefits migration, and soon MyHealthevet integration. 

The VA.gov homepage needs to effectively bridge users to the personalized logged-in experience and act as a vital guidepost to a growing selection of new information and benefit services while managing stakeholders competing for valuable real estate on the homepage. 

## Problems to solve

- In March 2022, ~10% of users log in to VA.gov, which means the majority of users do not benefit from the personalized experience.
- The home page has a very low engagement (measured by event rates), particularly for
  - VAntage Point blog articles on the home page
  - top tasks in the 4 panels 
- The text-heavy current experience increases cognitive load and discourages engagement. 
- The current UX design was optimized for viewability across Desktop and Mobile, limiting the number of links to five in each of the four top task boxes. This limitation has made it difficult to respond to the expanding benefit and program landscape and stakeholder requests. 

### Research

- Findings from homepage research and other related relevant research findings are summarized on the [Research README page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/home-page/research).

## Goals 

### User goals

- As a Veteran I want to be able to access tools and processes quickly and easily so that I can manage my own VA benefits 
- As a Veteran, caregiver, family member, etc, I want to be able to learn about the different benefits available to me including eligibility etc. so that I can apply to these benefits.
- As a secondary audience to VA.gov (VSO, Member of Congress, News) I need to understand where on VA.gov I should go to manage and learn activities appropriate to my needs 
- Veterans have increased access to self-service tools through an elevated login funnel 
- Benefits and services are represented by plain language terms consistently throughout the VA.gov ecosystem

### Business goals

- Stakeholders need to promote and give visibility to new products and services

**This work maps to the following North star goals** 
- Increase availability of self-service tools
- Decrease time to outcomes
- Maximize satisfaction, reliability, availability, and security

### Product goals

- The VA.gov homepage is viewed as a partnership which exists to ensure the most valuable Veteran-facing tasks, tools and content are featured while effectively managing stakeholders requests. 

## Measuring success

### [Baseline values](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md)
- [Traffic to the homepage and log-in rates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#traffic-to-the-homepage-and-login-rates)
- [Header events](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#header-events)
- [Mega menu link events](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#mega-menu-link-events)
- [Events on top 4 box tasks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#events-on-top-4-box-tasks)
- [Events on benefit hub links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#events-on-benefit-hub-links)
- [Events on VAntage Point navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#events-on-vantage-point-navigation)
- [Events on Main page buttons](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#events-on-main-page-buttons)
- [Data visualizations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/baseline-event-data.md#data-visualizations)

### Objectives and key results (OKRs)

**Objective: Increase access to personalized self-service tools via authenticated experience** (WIP)
 - Key result: x% of unique users will login to MyVA
 - Key result: Increased clickthrough on action funnels
 - Key result: Decrease time to access the authenticated experience
 - Bet: Elevated login funnel 

**Objective: Increase Veteran engagement** (WIP)
 - Key result: Improved CSAT scores
 - Key result: Increased clickthrough on browse funnels
 - Key result: Increased clickthrough on spotlight funnels
 - Key result: Increased scroll depth

## Assumptions, risks and constraints

### Assumptions
- Through online banking and retail experiences, users are accustomed to personalized, task focused home pages which also promote new products and services.

### Risks
**Risks to data-driven decisions**
 - Analytics (i.e. clicks on the home page) are predicated on the ability for users to find their desired task on the home page in the first place. As a result, this data may not fully represent the “top tasks” which users came to complete. 

**Usability risks (can people figure out how to use it?)**
 - The "other search tools" may be unclear as to where someone would actually be going when they click on those links, and what information they would find there.
 - There is a lot of copy in the "Browse benefits..." section. Users are likely just scanning the headings and not reading the copy. It could be generally overwhelming and create too much cognitive load to some users and they may ignore the section.
 - Analysis of the current home page already shows duplication for some tasks, although it is unclear if this has been by design. The home page update may result in more duplication which we can leverage to identify the best locations for certain tasks through data.
 - Current search functionality does not surface results as readily as users may expect based on search engine experiences such as Google.  

**Feasibility risks (can we build it with available tech/data?)**
 - The idea of creating a “parallel” homepage experience seems pretty straightforward but has not been tried before in recent memory. There are potential challenges to our ideas, including Analytics setup and Search API integration. Future CMS integration has not yet been explored for feasibility or level of effort.
 - Changes to the codebase are small and localized. The only external dependency relates to the Search component, but the implementation and functionality will be identical to the search that already exists in the header.

**Organizational viability risks/constraints (will there be a positive organizational impact?)**
 - We may need the support of teams outside of OCTO-DE to get our experiment live on a va.gov subdomain.
 - Reboot of VSA contract teams, including Public Websites
 - Evolving composition of the Web Governance Board (WGB) and charter

### Constraints
  - A/B testing of design changes may not be possible because of unauthenticated experience

## Solution approach

### Summary 

- The VA.gov home pages will evolve through a series of iterations which are deployed into a publicly accessible subdomain of va.gov so that they can be tested with Veterans. 
- Updates to the VA.gov homepage will prioritize mobile functionality and accessibility while addressing the following key issues
  - scrollability
  - redundancy
  - data driven top tasks
  - providing a prominent place for OPIA content
  - humanizing the VA
- A decision-making framework will be used to  provide transparency, consistency and expectations for the use and maintenance of allocated space. 

### March 2022 iteration
- [Homepage iteration initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/home-page/home-iteration-initiative-mar2022/initiative-brief.md) | March 2022
- [Phased design plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/design/phased-design-plan.md)
- [Summary of changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/home-page/home-iteration-initiative-mar2022/initiative-brief.md#summary-of-changes)

<details>
<summary> First build - March 2022 </summary>
 
![First build design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/va-home-page-first-build.png)

</details> 

**Next steps**

- Validate design changes with Veterans, including those who use screen readers, screen magnification, and voice command at a variety of experience/skill levels and a variety of devices

### Post-March 2022 considerations

**Next**
- Address findings from usability research
- Revisit “mobile first”/responsive design
- Determine roll-out plan for replacing current VA.gov plan

**Later**
- Monitor search behavior for signs that prominent placement of Search in the page is attracting users for use cases that would be better served by some other path/product.
- Implement “Other VA resources” with links to other (non-Veteran-facing) VA resources, such as Choose VA, Resources and Support, VSO websites, VA offices and Programs
- Pay particular attention to the page’s content choreography so that users get the highest-value content above the fold, regardless of device viewport size
- Leverage queries to direct users to the best page for the task, reducing the number of intermediate clicks

## Stakeholders
Web governance board
  
## Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
