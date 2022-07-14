## Initiative Brief – Home page redesign initiative 

[Overview](#overview)

[Problems to solve](#problems-to-solve)

[Desired outcomes](#desired-outcomes)

[Approach](#approach)

[Measuring success](#measuring-success)

[Assumptions and risks](#assumptions-and-risks)

[Prioritization](#prioritization)

[Summary of changes](#summary-of-changes)
 - [March 2022 iteration](#march-2022-iteration)
 - [Next iteration](#next-iteration)


[Ongoing efforts](#ongoing-efforts)
- [Connection to authenticated experience](#connection-to-authenticated-experience)
- [Discussions with stakeholders](#discussions-with-stakeholders)

[Launch planning](#launch-planning)

- [Collaboration cycle](#collaboration-cycle)

- [Go-to-market strategy](#go-to-market-strategy)

- [Timeline](#timeline) 

[Screenshots](#screenshots)

## Overview
- Although the redesign was planned as a series of smaller changes, given the strong evidence for change and experimental nature of our work, it was decided to go straight to the planned Step 3 design for the first build. Further refinement will be informed by Veteran research before changes are moved to production.
- So that users of assistive technology can participate in usability testing of the new design, the iteration will be built as functional code in a subdomain on staging. Because the page will not receive visitor traffic outside of user testing, no data layer has been applied. 
- This "first build" will be complete with internal links vs. just a static Preview home page with links out to Prod sub-pages 

## Problems to solve

**1. The text-heavy current experience increases cognitive load and discourages engagement.**
- The volume of content causes Veterans to focus on a single area of the homepage, usually the top 4 boxes. 
- Some tasks are easier than others to complete. 
- A few tasks in the top four boxes get most of the traffic.

**2. The row of Veteran portraits acts as a false bottom which negatively affects engagement with content displayed below the images.**

**3. Search and login**
- ~15% of users logged in to VA.gov, which means the majority of users do not benefit from the personalized experience.
- ~ 586K unique searches initiated from the homepage Jan-Jun 2022 - second only to Find a VA Form but still only 12% of all unique searches. 

**4. The current homepage does not meet organizational and stakeholder needs.**
- We need to help Veterans discover changes in products, services, or eligibility that affect them so they can take action.
- We need to empower Veterans to receive information, rather than to actively seek it out (i.e. subscirbe for email updates).
- We need to direct non-Veteran/beneficiary audiences where to go for the information and tasks appropriate to their needs
- The current UX design was optimized for viewability across Desktop and Mobile, limiting the number of links to five in each of the four top task boxes. This limitation has made it difficult to respond to the expanding benefit and program landscape and stakeholder requests. 

## Desired Outcomes
**Desired user outcomes**
- As a Veteran I want to be able to access tools and processes quickly and easily so that I can manage my own VA benefits 
- As a Veteran, caregiver, family member, etc, I want to be able to learn about the different benefits available to me including eligibility etc. so that I can apply to these benefits.
- As a secondary audience to VA.gov (VSO, Member of Congress, News) I need to understand where on VA.gov I should go to manage and learn activities appropriate to my needs 
- Veterans have increased access to self-service tools through an elevated login funnel 

**Undesired User Outcomes**
- Decrease in engagement with the most popular Top Tasks might be concerning, but would have to be viewed in context of overal engagement patterns.
- Search behavior should be monitored for signs that prominent placement of Search in the page is attracting users for use cases that would be better served by some other path/product.

**Desired Business Outcomes**
- Stakeholders can promote and give visibility to new products and services
- More traffic from the home page to the VAntage Point blog
- More logins

## Approach
Use findings from Veteran research, quantitative user data and benefit utilization to inform design iterations which support the followiing goals
- make it easier for Veterans to navigate the page, engage with relevant information and complete their tasks
- increase the use of the authenticated experience
- intuitively empower Veterans to find and take action on less common tasks
- provide and avenue for Veterans to receive updates and information

## Measuring Success

### Key Performance Indicators (KPIs)
- Increased clickthrough rates
- Decreased time on page before taking action
- Increased login from homepage
- Increased Veteran satisfaction scores
- Increased subscriptions to email updates

## Assumptions and risks

**Value Risks** (will people use it): 
  - The use of the home page itself is a given.
  - The case for change is very strong, given engagement gaps with the current design.

**Usability Risks** (can people figure out how to use it):
  - It may be unclear that "Search" is searching content on VA.gov. The list of other search tools below complicates what exactly they're searching when they type something into that section.
  - The "Popular" heading may be unclear as to what exactly this list is for. (Popular what?)
  - The "other search tools" may be unclear as to where someone would actually be going when they click on those links, and what information they would find there.
  - There is a lot of copy in the "Browse benefits..." section. Users are likely just scanning the headings and not reading the copy. It could be generally overwhelming and create too much cognitive load to some users and they may ignore the section.

**Feasibility Risks** (can we build it with available tech/data):
  - The idea of creating a “parallel” home page experience seems pretty straightforward but has not been tried before in recent memory. There are potential challenges to our ideas, including Analytics setup and Search API integration. Future CMS integration has not yet been explored for feasibility or level of effort.
  - Changes to the codebase are small and localized. The only external dependency relates to the Search component, but the implementation and functionality will be identical to the search that already exists in the header. 

**Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - We may need the support of teams outside of OCTO-DE to get our experiment live on a va.gov subdomain.

## Prioritization

Given the strong evidence for change and experimental nature of our work, we intend to implement several ideas at once. Further refinement will be possible later, especially when any of these changes is moved to production.

## Summary of changes

### March 2022 iteration

<details>
<summary> First build - March 2022 </summary>
 
![First build design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/va-home-page-first-build.png)

</details>

 - A randomized, rotating set of Veteran portraits has been added to the top of the page
 - Sign in/Sign up CTA has elevated visibility and top placement
 - Four top task boxes have been replaced with a data-driven list of links to 5 Veteran-facing pages where actions can be taken 
 - A visible search option which mimics the site search is available, followed by a  list of other search tools not available through Search (such as Yellow Ribbon, Education benefits, Find a VA form, Facility Locator)
 - VAntage blog article appears in prominent location

**Value proposition**
- Veteran portraits humanize VA and remind stakeholders who VA.gov is intended to serve
- By using analytics to determine search tools and task lists, we can ensure optimal use of space
- Delivers simplified, easy to read design 

**Out of scope**
- Initial scope will not include the header and footer as these are shared across VA.gov and developing consensus on their use will be significantly more complicated. 
- The “Other VA resources” section (which contains links to other VA resources such as Choose VA, Resources and Support, VSO websites, VA offices and Programs) is found in the design but not implemented in the testing version as the links are not Veteran-facing. 

**Next steps - Research**

- Conduct Veteran research to identify top tasks, informing the list of "most popular" links which replace the 4 top task boxes in the new iteration
- Validate design changes with Veterans, including those who use screen readers, screen magnification, and voice command at a variety of experience/skill levels and a variety of devices, including the following
  - that the redesigned home page supports Veterans and beneficiaries in task completion 
  - that users understand to use search for tasks which are not explicitly displayed 
- Research findings should be shared broadly, including Authenticated Experience team and Apartment teams

### Next iteration 

**Planned changes ~3Q22**
- Update for Top Tasks based on research findings
- Language/labels for "other search tools"
- Consider replacing Veteran portraits with additional promo space to be used for OPIA priority information (i.e. PACT ACT)
  - _this will require consensus on content governance and accessibility support, particularly for images_
- "Off ramp" area for non-Veteran facing content
- Order of benefit hubs

## Ongoing efforts

### Connection to authenticated experience
- Explore routed queries - direct Veterans to a deep link rather than the search results page
- Determine expected behavior for logged in users
  - should sign in/sign up CTA still be present? 
  - user flow when My VA becomes the logged in home page (expected Summer 2022)

### Discussions with stakeholders
- June 22, 2022 Review of redesign and research plan with Dave Conlon, Chris Johnston, and Jeff Barnes
- July 12, 2022 Deep dive presentation to Digital Modernization Council

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*


| Collab cycle milestone |	Date	|	Issue	|	Notes |
---	|	---	|	---	|	---
| | | Epic: [VA.gov Home page redesign #40845](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40845)| |
| Design intent | 03/29/2022 | [CMS-Offices team - VA.gov Home Page #39038](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39038) | |
| Research | 5/2022 - 6/2022| [Epic: Veteran Top Task Research (moderated and unmoderated) #40857](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39038) | |
| Research | _planned 7/2022_ | [Epic: Usability of redesigned home page #41578](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39038) | |
| Analytics | _requested 5/2022_ | [Search DOMO #41512](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41512) / [Content DOMO #41503](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41503) | |
| Accessibility | _requested 6/2022_| [Accessibility spot check review for redesigned VA.gov home page #42860](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42860)| |

### Go-to-market strategy
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

1. Deploy first build into publicly available interactive environment (for access by stakeholders and usability research)
2. Request analytics support
3. Develop usability research plan
4. Discussions with VA leadership, Digital media partners and other stakeholders
5. Evolution of Web Governance board

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

| Date | Milestone|
|---|---|
| March 39, 2022 | Design intent |
| June 3, 2022 | Moderated Top Task research synthesis - [findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/research/Veteran-tasks/moderated/research-findings.md) |
| June 3, 2022 | First build deployed to staging |  
| June 2022 | [Unmoderated Top Task research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/public-websites/research/Veteran-tasks/unmoderated/research-findings.md)|
| July 2022 | Usability research | 

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before (Current)
<details>
<summary> VA.gov home page as of 3/1/2022 </summary>

![Current homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/va-home-page-current.png)
</details>

### After (Still on VA.gov subdomain)
<details>
<summary> First build - June 2022 </summary>
 
![First build design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/images/va-home-page-first-build.png)

</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)


