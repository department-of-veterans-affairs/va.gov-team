## Outcome Summary
To make it easy for Veterans to file disability compensation claims resulting from the PACT Act via va.gov, we are adding a toxic exposure (TE) section to the 21-526ez Veterans Disability Compensation and Related Compensation Benefits form on VA.gov. This change brings the digital form at VA.gov into parity with the 526ez paper form on these exposure questions, and will enable Veterans to specify aspects of their service history that might qualify them for disability benefits related to toxic exposure.

**Related/Associated product(s)**
- 21-526ez | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/21-526ez.md)

## Problem
Today, while Veterans can file disability compensation for conditions believed to be caused by TE on the paper version of the 21-526ez, they’re not able to file a TE claim at va.gov. This creates an unnecessary burden for the Veteran, who may have mental, physical, or other environmental challenges or disabilities that prevent or otherwise make it difficult for them to file a claim using the paper version of the 526 form.

## Desired User Outcomes
- Veterans will be able to complete the paper form equivalent of Section IV; questions 15a-15e 
- 15a: "Are you claiming any conditions related to toxic exposures?
- 15b: "Did you serve in any of the following gulf war hazard locations?"
- 15c: "Did you serve in any of the following Herbicide locations?"
- 15d: "Have you been exposed to any of the following?" and;
- 15e: "If you were exposed multiple times, please provide all additional dates and locations of potential exposure."

## Undesired User Outcomes
- Filing a disability compensation claim with TE-related service-conencted conditions is more time consuming and more difficult for the Veteran.

## Desired Business Outcomes
- Bring the online 526 form into compliance by being up to date with the 2022 paper form
- Mantain or reduce abandonment rates
- Successfully migrate 526 submission infrastructure off EVSS
- Reduce or maintain existing submission errors
- Maintain % of submissions that use normal path
- Maintain or reduce uses of backup and failsafe path

## Undesired Business Outcomes
- The online 526 form is more error prone than it was previously
- Performance is worse than it was previously
- Veterans express that the UX is worse than it was before

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - We believe Veterans find value in being able to file disability claims online, especially as their condition relates to the PACT Act.
- **Usability Risks** (can people figure out how to use it):
  - We believe that by leveraging UX research, design, VA.gov design system standards, predefined UI components, and governance checkpoints such as CAIA, and Collab Cycle that we are building a solution that is usable.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - The core functionality is similar to how the 21-526ez digital form is already built today
    - This solution will also be built natively using the Lighthouse API for more performant and future-proof functionality
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
 Yes. We believe there will be a posititve organizational impact. In addition to bringing the digital 526 form into closer compliance with the paper version of the form, this feature also fulfills the intent of the PACT Act while broading access.

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?
- There are two use cases that we are considering for this release. For each, we plan to follow an incremental release strategy using established traffic percentages to route Veterans to the 526 form. We plan to use Flipper to control availabity for each use case. In the 2019 form version, the toxic exposure section is not available to the Veteran. In 2022 form version, the toxic exposure section is available to the Veteran.

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
