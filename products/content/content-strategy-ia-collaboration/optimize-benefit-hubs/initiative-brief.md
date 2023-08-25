# Initiative Brief: Optimizing the benefit hubs
#### Overview

The initial benefit hub content and structure was created in 2018 via the launch of the new VA.gov and the migration of Veteran-facing benefit and health care content from both Vets.gov and legacy (Team Site) VA.gov pages.  At that time, all Veteran and family benefit content was placed within one of the 3 "spokes" - Get, Manage, or Resources - of each hub.   Content within these hubs continued to grow as more content was migrated into the new experience. 

In late 2020, the Resources and support product was launched, and was intended to house "benefit-adjacent" content, to allow for additional content to be migrated from legacy VA.gov into the modernized VA.gov experience without cluttering the core benefit hubs. However, "benefit-adjacent" was not a well-defined descriptor, and it was unclear what content belonged in R&S versus the benefit hubs.  

In 2022, OCTO Content and IA rolled out version 1 of the content placement criteria which provided strict, clear eligibility criteria for benefith hub and R&S content.  This criteria has been tested and is being utilized, and refined, as new content is proposed, and as content migrations continue.

An oppurtunity now exists to revisit the content and organizational structure of the benefit hubs to apply the content placement criteria, in an effort to simplify the experience, and optimize the path to apply. 

Goals:

Optimize user flows and conversion paths on benefit hub pages to:
  
1. Help increase account creation; online application submissions; sign in’s to manage benefits or top tasks
2. Optimize templatize benefit hubs for best-path for conversion tools and apps (Does the original Benefit Hub templates optimize pathways for veterans to find, complete and track benefits?).  

Optimize user navigation funnels from benefit hub to Tier 1 spoke/benefit action:

1. Help increase navigation through left hand nav slim down (Optimization - as content is moved to R&S). 
2. Ensure pathways are clear paths to self-service tools, focusing on the services most important to Veterans and beneficiaries.
3. Remove content roadblocks i.e. CMS Content Rigidity (Template Blobbiness) 


**Product(s) impacted**
- Benefit hubs
- Resources and support

## Problem

* Problem Defined: The original goal of the benefit hubs was to have a path for Veterans to follow in order to complete Tier 1 benefit actions.  It was also to provide navigational experience that would optimize wayfinding to the easiest way to find and action upon any VA services.  However, when we migrated the benefit hubs into Drupal thier wasn't any "content model" redesign, which was determined to be too "blobby" to make rigid in current state.  We've now reached the point that the benefit hubs require an IA flattening and rework for "clear path" navigation in order to optimize the Veteran-facing experience along with conversion paths to the benefit hubs. 

* Evidence to support Prolem: Whether someone lands from organic or site search, from a learning center page, or campaign or search landing page, we need to ensure that people can easily continue their path to relevant online tools, with the right contextual information. In a recent VA.gov wayfinding research we determined several key findings that support this pain point: "Many participants were unable to successfully complete desired tasks, the first of which was completed without any assistance by only one participant. Participants couldn't find what they were looking for (form to appoint representative, set up direct deposit for VA travel pay reimbursement, and share VA medical history with a doctor outside the VA). Navigation paths to complete some of these tasks were not straightforward" [Read full Baseline VA.gov Wayfinding research study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/research/202104-baseline-wayfinding/research-report.md)

* Why do you think the problem is occurring? Other reasons why this might be occurring?
     * This is occuring likely due to the context rich pages in the benefit hubs that are likely creating "content roadblocks" for Veterans to complete intented tasks. In addition to the large left hand navigational menu (mega menu) as it was proven that the smaller navigational menu is easier to navigate and provides a quicker path for users to interact with and follow.  
     * [Recent analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20210501&_u.date01=20210531&explorer-segmentExplorer.segmentId=analytics.pageGroup1&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=25&_.useg=builtin1,useri0ZvPaPpQKyUHGrYCFPigw/) show most users navigate on the unauthenticated pages of VA.gov over those of the authenticated, likely due to the fact Veterans tend to focus on Tier 1 benefit actions when authenticated and not wayfinding and expect a clear path to benefit actions when authenticated.  
     * Veterans were asked in a recent research wayfinding session what they didn't like about VA.gov, almost half of the participants said that it was difficult to find what you need, especially when it isn't in the "top 4" boxes. "A lot of things I can't find".  
     * Website Navigational Orientation:
      ![Screen Shot 2021-06-23 at 5 21 47 PM](https://user-images.githubusercontent.com/70410912/123179946-9a371600-d447-11eb-9308-5716d4f68a88.png)
     * This is reflected in the following breakdown:
      ![Screen Shot 2021-06-21 at 1 11 48 PM](https://user-images.githubusercontent.com/70410912/122816053-78952d80-d293-11eb-8126-fb2fcd7dd2cf.png)

 
* How does this initiative help further OCTO-DE's mission and goals?
     * VA North Star: Increase the usage and throughput of VA services 
     * VA North Star: Increase the quality and reliability of VA services
 

## Desired User Outcomes
* *Ie. Faster load, increased trust, etc*


## Undesired User Outcomes
* 

## Desired Business Outcomes
* 


## Undesired Business Outcomes
* 

---
## Measuring Success

### Key Performance Indicators (KPIs)


- Service Completion: Increase benefit conversion rates for Veterans applying for benefits via unauth/auth experience 
- Ease of use: Reduced bounce rate (+10%) for the proposed benefit hub to conversion path to tier 1 benefit action 
- Trust/Satisfaction: Increase satisfaction score by 15% -- via Medallia for the proposed va.gov/benefithubs score listing

- 
| Product KPI | Baseline as of **DATE** | Target | Link to data source (e.g. GA, Domo) |
| ----------- |  ----------- |  ----------- |  ----------- | 
| VA.gov health hub page performance |   |   |   | 
| Online form performance |   |   |   | 
| VA.gov Overall Satisfaction |   |   |   | 
| VA.gov Experience rating |   |   |   | 


---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is measurable value to Veterans as we are replacing "content roadblocks" and "content spirals" caused on mega menu with a clear navigational path that increases conversion rates for Tier 1 benefit actions. 
- **Usability Risks** (can people figure out how to use it):
  -  Only 2% of users were clicking on the right rail navigation because for most users(on desktop, tablet, and mobile), media queries forced that section to the bottom of the page, even on desktop.
  -  Mega Menu is too exstensive and not "straightforward" leading Veterans down content spirals and not down the intended "direct paths" for service completion tasks. 
  -  Scoping the navigational paths to be "three-click rule" compliant could help user find itended supporting content that would lead to an informed benefit action providing a clear conversion paths from the benefit hubs to the benefit action spoke. 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - This page will be easy to refactor, requiring no complex technical integration with APIs.  This will however require strong colaboration accross VFS teams to ensure any technical udpates don't affect current codebase, node counts or future release plans. A primary focus will be placed on stability and common code elements for troubleshooting efforts forward.  
- **Viability Risks/Constraints** (will there be a positive organizational impact):
  - This optimization will apply some much needed streamlining for navigational strategies along with user flow and conversion paths as related to the benefit hubs. Risk/constraint to consideer will be ensuring no disruptions to the current veteran expereince in applying for benefit actions (servicability needs to remain stead and active).  A secondary contraint will be to ensure user flow and conversion paths are fully tested with Veterans through exstensive user testing to ensure optimization of pathways and flows meet desired outcomes. 
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### Solution Scope
**In Scope**
- Mega Menu 
- left hand nav slim down - Benefit hub funnels 
- Content shift - Benefit hubs to R&S
- FAQ Shift - What remains in Benefit hubs and what transitions to R&S (Streamline content flow to remove "roadblocks")

**Not In Scope**
- Benefit hub refactor (moving/reorienting of hubs)
- No moving of "top or bottom" header links
- No refactoring of Alerts or placement of Alerts (Homepage or Benefit Hubs)
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

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

See initiative design folder

---

#### Communications

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:
  - VA Product Owner: 
  - Product Manager:
  - Delivery Manager: 


#### Stakeholders
  
- 


---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
