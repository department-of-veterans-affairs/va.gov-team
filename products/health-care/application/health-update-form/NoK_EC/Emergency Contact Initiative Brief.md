# Emergency Contact - Initiative Brief
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
* Users can add, remove, and edit their Emergency Contacts on the 10-10EZR. This Emergency Contact information is then stores in the VA Enrollment System, which will then disseminate it out to all other systems of record (not part of the scope of this, but expected behavior for VES). This should lead to an increase in 

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
* Veterans cannot currently update their Emeregency Contacts online
* This impacts all Veterens, as until recently they couldn't even see their EC online
* Veterans can now see their EC (and NoK) in their VA.Gov profile, but a Medallia survey of those Veterans indicated they wanted to be able to edit that information online instead of calling the hotline
* This initiative should improve data integrity and overall Veteran experience with VHA in that VA should have the correct information should they need to reach out to a Veteran's EC


> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
* Why do you think the problem is occurring? Other reasons why this might be occurring?
* How does this initiative help further OCTO-DE's mission and goals?



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
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Will Veterans spend the time updating their EC as they go through EZR?
  - Will Veterans leave other VA.Gov areas (such as the VA.Gov Profile) to come to the EZR form to update EC?
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Can VES save new EC data?
  - Can VES update EC for existing ECs? Will they be saved as new ECs each time even if they're updates?
  - Can we delete ECs in VES?
  - Can we distinguish between primary and secondary ECs, particularly in VES?

  Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The team will work with HEC/MS stakeholders to help let Veterans know they can now enter this information online
  - Team will update Contact Center guide so that help desk knows Veterans can update this information online
  - Biggest challenge to visibility is simply that it will be part of a larger online form, the 10-10EZR, and it will take outreach work with the support of stakeholders to let Veterans know they can update this information
  - Suggestion: It may be worth letting VHA Comms know that Veterans can now do the 10-10EZR online, especially when Next of Kin is completed
  
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

- EC primary and secondary
- All EC fields including name, phone, relationship, and address
- ECs are optional within the EZR
- Add address to EC is optional
- Veteran can add, edit, remove, and cancel update for an EC
- EC is in Veteran Info section
- EC will be behind a Feature Flag to start
- EC rollout will be staggered
- EC will be QAed, E2E tested, and accessibility tested
- 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

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
