# Unhoused Veteran No Address Iniative Brief
Alex Seelig, 3/26/2025
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
* Adding the ability for Veterans who do not have a home address to indicate that and have their Preffered Facility address be added to their record.

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
- Veterans who do not have an address, or do not wish to provide one, cannot currently fill out the 10-10EZR without having to provide an address. 
* What is the problem and who is affected? And, what evidence do we have of the problem?
- Veterans need a home address to complete a 1010EZR and in some cases, maintain their healthcare without copays.
* Why do you think the problem is occurring? Other reasons why this might be occurring?
- The 1010EZR was not designed for Veterans without addresses, and thus address was a required field despite not being required in VES. 
* How does this initiative help further OCTO-DE's mission and goals?
- This improves the experience for the vulnerable unhoused Veteran population. 

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

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo) ALEX FILL THIS OUT!!!!!!!!!!!!

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - How many unhoused Veterans go online to update their healthcare information via the EZR?
- **Usability Risks** (can people figure out how to use it):
  - Will unhoused Veterans know to check the box?
  - Will unhoused Veterans understand that by checking the box their Preferred Facility's address will be used as their address?
  - Will unhoused Veterans understand that if they have previously indicated that they're unhoused, that their Preferred Facility address will display? 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Can we create an indicator to VES that the Veteran is homeless and to make their address their preferred facility?
  - Can the backend VES system automatically default an unhoused Veteran's address to their preferred facility when a Veteran indicates they are homeless?
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Will this make is easier for unhoused Veterans to use VA.gov?

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
- A FE indicator where a Veteran can indicate that they're unhoused. 
- Once that is indicated, when the EZR is submitted to VES, VES automatically populates the Veteran's address as their preferred facility and indicates that they're homeless.
- Making address NOT a required field either on the FE or BE. 
- Content explaining this.
> *What have you explicitly decided to **not** include and why?*
- Anything not listed above, including but not limited to the EZR system automatically populating the Veteran's address.
> *How does this solution address your Assumptions & Risks?
- We have checked with VES lead Joshua Faulkner and confirmed that VES has a procedure for handling homeless Veterans. 
- We will build a FE that makes it clear to Homeless Veterans how they can fill out an EZR without having an address, including content to match that.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- Notifying the field would be helpful as they can let homeless Veterans know they can update their information online.

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

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
