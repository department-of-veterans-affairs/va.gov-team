# Initiative Brief: 2024 21P-53-EZ Online Form Updates

<!---
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
 --->
---

## Outcome Summary
Decrease the amount of time it takes applicants to receive burial allowance benefits. The online 21P-530EZ form is several versions behind its paper counterpart, and it's missing some critical fields needed for efficient and effective processing.

**Related/Associated product(s)**
- 21P-530EZ | [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/burial-allowance/README.md)
- 21P-530EZ  | [Landing Page](https://www.va.gov/burials-and-memorials/application/530/introduction)

## Problem
All online applications for burial benefits (530EZ) forms require additional development because required information is missing. This missing information causes delays in claim processing, places undo burden on applicants, and ultimately delays the receipt of benefits. Individuals submitting this form are often family members of deceased Veterans, caretakers of deceased Veterans, VSOs, social workers, funeral homes. By updating the online form to align with the most recent paper version, the number of online claims requiring development will be reduced and benefits will be received faster. The current online form also contains some outdated form components and accessibility issues that will be addressed on the pages impacted by the field updates.

## Desired User Outcomes

- Online 530EZ claims are as complete as possible and require little to no development
- Applicants receive benefits faster
- The updated online form is easier to use
- The updated online form is quicker to use

## Undesired User Outcomes
- Online application are missing information required for efficient processing
- Users find the updated online form hard to use

## Desired Business Outcomes
- Online 530EZ applications require less resources to process than they currently do
- Online 530EZ applications are easier to process than paper applications

## Undesired Business Outcomes
- Online 530EZ applications require the same or more resources to process than they currently do
- Online 530EZ applications are harder to process than paper applications

---
## Measuring Success

### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| KPI                              | Category           | Baseline | Goal   |
|----------------------------------|--------------------|----------|--------|
| % of claims requiring development| Service Completion | 100%     | 20%    |
| KPI                              | Ease of Use        |          |        |
| KPI                              | Trust/Satisfaction |          |        |
| % of submission failures         | Form Health        | ?        | <1%    |


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Reduce the amount of time applicants are waiting for benefits.
  - Key result: % of online claims requiring development
  - Key result: Average days from online claim submission to decision letter
    
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Updates to the online 530EZ form may not increase usage if eligible individuals are not aware of their eligibility for benefits
- **Usability Risks** (can people figure out how to use it):
  - Limiting usability and accessibility improvements to sections of the form we are making critial updates to may create an inconsistent experience for users.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Mitigating and potentially restoring claims that silently failed (discovered in December 2024) may divert development resources away from this iniative and delay release.
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Adding the missing fields that are critical for processing 530EZ online applications may not reduce processing time as much as anticipated if other data processing issues exist (questions are confusing, form still does not collect correcct data, etc.)
  - Additional feedback and/or changes from VBA SMEs shortly before launch could impact release timelines

### What're you building
- Adding required missing form fields to the online form
- Removing depreciated form fields from online form
- Address critical (level 0 and 1) accessibility issues within pages receiving updates
- Ensuring an online 530 claim can be traced end-to-end and successfully makes it to all downstream systems
- We are not:
  - Addressing critical accessiblity issues on pages we are not updating (future project)
  - Addressing level 2-5 accessibility issues on the pages we are touching (they will be backlogged)

#### Go-to-market 
- These updates will be applied to the existing online form. No marketing outreach to user groups is planned.
- The VBA will be closely involved in the review and release of these updates and communicate any impacts to downstream teams (e.g., claim processing)

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65251)
- [CAIA Review Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68984)
- [Epic - Update Burial 530 Online Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63351)

### Timeline 
- Design Intent: October 19, 2023
- CAIA Kickoff Meeting: November 6, 2023
- Midpoint Review: December 19, 2023
- Staging Review: February or March 2024 (target)

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/burial-allowance/530-release-plan-2024-updates.md)

#### Initiative Launch Dates
- *Target Launch Date*: February or March 2024
- *Actual Launch Date*:

---
   
## Screenshots

### Before
- [Existing screenshots](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1691512530884/67e3bc6677c8d17cf6fc8848319a6e40ebced1af?wid=0-1691603080134)
  
### After
- [Figma Files](https://www.figma.com/file/jpJQSCKiGegacdW4RH5uQB/Burial-530-2024-Updates-MVP?type=design&node-id=174-43726&mode=design)
- [Form Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1691512530884/67e3bc6677c8d17cf6fc8848319a6e40ebced1af?wid=0-1694615398728&sender=u934f98f179a86c76e6ee9592)
---

#### Communications

- GitHub Label: burial, umbrella
- Slack channel: #benefits-non-disability
- VA.gov link: https://www.va.gov/burials-and-memorials/application/530/introduction
- Product Roadmap: [link](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697040351744/d0ff11497ce0df685a377f3889f6d27687c0ffb4?sender=u0e8ac1d6d7681bb7e1b80558)
- Demo video link: n/a
- Test users: 530-staging-test-accounts.md
- Keywords: burial, 21-530EZ, burial benefits
- Product repo: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/burial-allowance
- Teams repo:
- Zenhub board: Workspace - [Non-Disability experience](https://github.com/department-of-veterans-affairs/va.gov-team#workspaces/benefits-non-disability-645913c7d909c20011380ae8/board?labels=burial)

---

## Team

- Executive sponsor: Chris Johnston (christopher.johnston2@va.gov)
- Product Owner: Emily Theis (emily.theis@va.gov)
- VBA Stakeholders and SMEs: Eric Henne, Terrence Minyard, Chelsey Carlin, Maureen Domzalski, Jennifer Feuer, Derek Uttley
  
 Non-Disability Experience Team: 
- Product manager: Laura Steele
- Design and Research: Julie Pedke and Fiorella Geedi
- Engineering: Thomas Blackwell (lead), Dakota Larson, Sean Midgley
- Delivery: Sarah Ortiz Shields


#### Stakeholders

- VBA Stakeholders and SMEs: Eric Henne, Terrence Minyard, Chelsey Carlin, Maureen Domzalski, Jennifer Feuer, Derek Uttley
- CAIA Team (content review)

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
