# Initiative Brief: Dependent Verification Tool (auto-generate 21-0538)

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
Decrease the over- and under-payment amount for dependent-related benefits by allowing Veterans to quickly and easily verify their dependents on VA.gov.

**Related/Associated product(s)**
- 21-0538 | [Mandatory Verification of Dependents Form](https://www.va.gov/find-forms/about-form-21-0538/)
- View/change dependents | [Landing Page](https://www.va.gov/view-change-dependents/)

## Problem
Currently, the VA overpays $250 million in dependent benefits each year. If a Veteran is overpaid a benefit, they are required to re-pay the overpayment back to the VA. Updating dependency information outside of the 8-year requirement is voluntary, and the burden to remember to make dependency updates falls on the Veteran. Vertifying dependents through a paper form is also burdensome for many Veterans. These problems results in a very low-quality feedback loop for maintaining an accurate list of of what dependents are intended to be on award.

## Desired User Outcomes

- Veterans receive the benefits they are entitled to
- Veterans review the dependents on their benefits at least once per year
- Veterans can easily understand what dependents are on or off their benefits
- Veterans can quickly and easily verify their dependents on VA.gov by submitting an official 21-0538 form.
- Veterans can quickly and easily update the VA on their dependents' status. 
- Veterans have a positive experience on VA.gov.


## Undesired User Outcomes
- Veterans ignore communications (email and letter) prompting them to verify their dependents and they are under- or over-paid benefits.
- Veterans find the process of verifying their dependency information on VA.gov confusing or too time-consuming.
- Veterans find the process of updating their dependency information on VA.gov confusing or too time-consuming.

## Desired Business Outcomes
- Veterans receive the benefits they are entitled to.
- The VA will save close to $250 million a year in overpayments.
- Congressional obligations will be met.
- The VA will mail out fewer dependency verification request letters (saving time, money, and resources)

## Undesired Business Outcomes
- Veterans do not receive the benefits they are entitled to.
- Efforts to increase the rate of dependency verification (21-0538 submissions) do not reduce the annual overpayment amount.


---
## Measuring Success

### Key Performance Indicators (KPIs)
<!-- * *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__ -->

| KPI                                                        | Category           | Baseline | Goal   |
|------------------------------------------------------------|--------------------|----------|--------|
| Annual Overpayment Amount                                  | Service Completion | $250m    | -80%   |
| Improved response rate to dependency verification requests | Ease of Use        |    0     |        |
| # of VA.gov 21-0538 submissions                            | Ease of Use        |          |        |
| % of submission failures                                   | Form Health        |    0     | <1%    |


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Reduce the amount of time applicants are waiting for benefits.
  - Key result: Percentage comparison of annual updates compared to total (0%+)
  - Key result: Reduced annual overpayment (<$100m)
    
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Creating an online option for dependency verification might not reduce under- or over-payments if individuals are not aware of the option
- **Usability Risks** (can people figure out how to use it):
  - Starting with a mid-weight solution to increase speed-to-market may not provide the functionality some users expect
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Developing a solution that auto-generates and submits a form outside of a fully digitized form experience may require the customization of VA.gov patterns
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Providing an online option for Veterans to quickly verify their dependents may uncover other issues within the workstream (e.g. large influx of update requests)
  - Additional feedback and/or changes from VBA SMEs shortly before launch could impact release timelines

### What're you building
- Email that will be sent annually to Veterans with dependents on their beneifts reminding them to verify their dependents on VA.gov
- Enhancements to the [view dependents page](https://www.va.gov/view-change-dependents/) that will allow Veterans to see additional info for each dependent
- Adding a question to the view dependents page that asks Veterans if their dependent information has changed.
   - If no, VA.gov will automatically generate a 21-0538 form, ask the Veteran to review the info and sign a statement of truth, and then submit the 21-0538 form.
   - If yes, they will be directed to fill out the add/remove dependents form on VA.gov (21-686c/674).
- We are not:
  - Digitizing the 21-0538 form into a complete form flow

#### Go-to-market
- The VBA will be closely involved in the review and release of these updates and communicate any impacts to downstream teams (e.g., claim processing)

--- 

## Launch Planning
### Collaboration Cycle

- [Collab Cycle Ticket]()
- [CAIA Review Request]()
- [Epic - Dependency Verification](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62218)

### Timeline 
- Design Intent: TBD
- CAIA Kickoff Meeting: TBD
- Midpoint Review: TBD
- Staging Review: TBD

* [Link to Release Plan for this Initiative](TBD)

#### Initiative Launch Dates
- *Target Launch Date*: July/August 2024
- *Actual Launch Date*:

---
   
## Screenshots

### Before
- [Existing view dependents page](https://app.mural.co/t/coforma8350/m/coforma8350/1693342568662/de8a4eb202d07e4802e1be45fe7f6a8f5d02128e?wid=0-1695231773149)
  
### After
- [Figma Files](https://www.figma.com/design/bvj72inycD0iZkuCbjYTWL/Dependent-Verification-MVP?node-id=59-960&t=NaZH2PffRU2sG1Kb-0)
  
---

#### Communications

- GitHub Label: tree, dependents-benefits, Dependency Verification
- Slack channel: #benefits-dependents-management
- Demo video link: n/a
- Test users: 
- Product repo: [https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials/burial-allowance](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/dependents/dependency_verification)
- Teams repo:
- Zenhub board: Workspace - [Dependents Experience](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new#workspaces/benefits-dependents-experience-6459139e7d64bf0015f6af13/board)

---

## Team

- Executive sponsor: Chris Johnston (christopher.johnston2@va.gov)
- Product Owner: Emily Theis (emily.theis@va.gov)
  
Benefits Dependents Experience Team: 
- Product manager: Laura Steele
- Design and Research: Julie Pedke and Ajia Wallace
- Engineering: Thomas Blackwell (lead), Dakota Larson, Sean Midgley, Evan Smith
- Delivery: Sarah Ortiz Shields


#### Stakeholders

- VBA Stakeholders and SMEs: Daivd Reis, Brandi Traylor, Angela Moritz
- CAIA Team (content review)

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
