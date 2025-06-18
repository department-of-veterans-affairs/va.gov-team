# Initiative Brief Template
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: On-site Search* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/surfacing%20other%20search%20tools/initiative-%20brief.md)*
 - *Product: VA.gov Profile*
   - *Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences*
 - *Product: Disability Claims*
   - *Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)*
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Add ML model for handling contention classification in order to increase coverage and accuracy of programmatic classifications, a step that is otherwise handled by VSRs/RVSRs

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
  * Problem:          Not all contentions are classified 
  * Who is affected:  Disabled Veterans applying for disability benefits 
  * Evidence:         Not all contentions are classified by automation 
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  * The problem is occurring because there's too many combinations for explicit case writing to catch. 
  * Other reasons why this might be occurring, include: typos, invalid conditions, and conditions not covered by the current (non-ML) classifier
* How does this initiative help further OCTO-DE's mission and goals?
  * This further covers contention classification for veterans to receive their compensation in a timely, easy, and consistent way. 

<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
  - Contention Classification Coverage | 72% | 72% | [Contention Classification API Client: "/expanded-contention-classification"](https://vagov.ddog-gov.com/dashboard/977-iqs-6ic/benefits-disability-conditions-classification-api-metrics?fromUser=false&refresh_mode=sliding&from_ts=1749576241818&to_ts=1749749041818&live=true)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - 0% 
- **Usability Risks** (can people figure out how to use it):
  - 0% 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  - None 
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 
  - VA will need to perform less manual contention classification over time. 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 

Contention Classification ML Model will supplement the current non-ML classification logic. The ML Model will run if the CC Taxonomy does not find a match. This will have a feature flipper following deployment process. 

> *What have you explicitly decided to **not** include and why?*

This is not looking for performance improvement from the ML Model. This is to prove ML model addition does not adversely impact the contention classification. We are looking to maintain the Contention Classification Coverage.
1. All Contentions
 1. % Classification Coverage (New and Increase)
 1. 73.4 %
1. New Contentions
 1. % Classification Coverage for New Contentions
 1. 70.4 %
1. Increase Contentions
 1. % Classification Coverage for Increase Contentions
 1. 87.9 %

> *How does this solution address your Assumptions & Risks?

This solution is updating an existing process. The API endpoint does not change and a feature flag allows us to turn off if there are issues. 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

No marketing, outreach, or communications are necessary for this product to be successful. 
Conditions, AI, and Platform Deployment Teams are necessary for this to happen.  

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

1. PO Sync 
2. Architecture Intent 
3. CMS Request 
4. Research Review 
5. Midpoint Review 
6. Analytics Request 
7. Contact Center Review 
8. Staging Review 
9. Privacy, Security, Infrastructure Readiness Review 

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name:        Conditions Team 
- GitHub Label(s):  Va.gov Conditions Team Project 
- Slack channel:    #va-dbc-conditions-team
- Product POCs:     AI Team

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:  AI Team 
  - Contact(s):       Emily Mech 
- Office/Department:  Platform Deployment Team 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
