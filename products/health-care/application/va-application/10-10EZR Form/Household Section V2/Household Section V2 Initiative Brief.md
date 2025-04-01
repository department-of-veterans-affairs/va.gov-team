# Household Section V2 Initiative Brief
Alex Seelig, 3.21.2025
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
* Improve the layout of the Household section of the 10-10EZR to be “review and edit” as needed, as opposed to page-by-page updates. This is done with the goal of making the Veteran’s time on the EZR shorter, and the data accuracy that VHA has for Veterans higher.

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* What is the problem and who is affected? And, what evidence do we have of the problem?
- **Veterans are spending too much time filling out the 10-10EZR, particularly the Household section which is time intensive and complex.**
* Why do you think the problem is occurring? Other reasons why this might be occurring?
- **Some of this is due to the nature of the section, but we believe allowing the Veterans to view their information and make changes as needed will help speed up the process and improve data integrity within VHA.**
* How does this initiative help further OCTO-DE's mission and goals?
- **This helps reduce the time burden on Veterans and improves data integrity within VHA**

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
- **Reduced time on Household section | Baseline | Target | Link to data source (e.g. GA, Domo)**
- - Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Will Veterans find this helpful?
  - Will they take the time to look through all of their information?
- **Usability Risks** (can people figure out how to use it):
  - Will users understand how to edit information on the page that displays their data?
  - Will they find it easier to use than the previous design (multi-page)?
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Can the List&Loop pattern handle this?
  - Can the platform team resolve the bugs in the L&L so that we can launch?
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Will this increase the time burden on Veterans for the EZR and thus go against the stated aim of making things faster for Veterans?
  - Will this improve data integrity within VHA systems?
 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
- Change Dependent, Spouse, and Financial sections of the Household section to utilize the List&Loop pattern and allow Veterans to view their information and edit it as needed. Adding prefill to the household section.
> *What have you explicitly decided to **not** include and why?*
- Any section outside of the Household section. Anything outside of transitioning to List&Loop. 
> *How does this solution address your Assumptions & Risks?
- We believe that fewer screens and presenting information up front will both reduce the time burden for Veterans and improve data integrity for VHA. 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- Just the 1010 team and our POs Patrick Bateman, Amanda Klausmeier, and Jina Ryu. 
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*
- We are debating either launching at 100%, or doing an A/B testing style launch with the existing flow.
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
