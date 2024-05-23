# Dependency Verification Outline
<!-- *Iterating on a product? Have a new feature? Check out the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)* -->

---

## Overview
Veterans are required to update their dependents every 8 years through a paper "Mandatory Verification of Dependents" 21-0538 form that is mailed to them with a letter explaining the requirement. Veterans can also view their dependents on VA.gov and add or remove them by utilizing an online version of the 21-686c form. Veterans can also fill out an online 21-674 form to Request Approval of School Attendance when claiming benefits for a child who is at least 18 years old, but under 23, and attending school. The 686c and 674 online forms appear as one integrated experience, but VA.gov generates two seperate pdf forms when the online data is submitted.

- [21-0538 Paper Form](https://www.va.gov/find-forms/about-form-21-0538/)
- [21-686c Online Form](https://www.va.gov/find-forms/about-form-21-686c/): Application Request to Add and/or Remove Dependents
- [21-686c pdf](https://www.vba.va.gov/pubs/forms/VBA-21-686c-ARE.pdf)
- [21-674 Online Form](https://www.va.gov/find-forms/about-form-21-674/): Request for Approval of School Attendance
- [21-674 pdf](https://www.vba.va.gov/pubs/forms/VBA-21-674-ARE.pdf)

## Problem Statement
Currently, the VA overpays $250 million in dependent benefits each year. If a Veteran is overpaid a benefit, they are required to re-pay the overpayment back to the VA. Updating dependency information outside of the 8-year requirement is voluntary, and the burden to remember to make dependency updates falls on the Veteran. Vertifying dependents through a paper form is also burdensome for many Veterans. These problems results in a very low-quality feedback loop for maintaining an accurate list of of what dependents are intended to be on award.

## Desired User Outcomes

- Veteran's can quickly, easily and regulary update the VA on their dependents' status' so that they aren't being overpaid or underpaid.
- Veterans can quickly and easily understand what dependency benefits they are eligble for.
- Veterans have a positive experience on VA.gov.
- Veterans receive the benefits they are entitled to.

## Undesired User Outcomes
- Veterans ignore communications (email and letter) prompting them to update their dependency email and they are under- or over-paid benefits.
- Veterans find the process of updating their dependency information on VA.gov confusing or too time-consuming.

## Desired Business Outcomes
- The VA will save close to $250 M a year in overpayments.
- Veterans receive the benefits they are entitled to.
- Congressional obligations will be met.

## Undesired Business Outcomes
- Efforts to increase the rate of dependency verification do not reduce the annual overpayment amount.
- Efforts to increase the rate of dependency verification do not reduce the annual underpayment amount

---
## Measuring Success

### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| KPI                         | Base Value | Target Value | Actual Value |
|-----------------------------|------------|--------------|--------------|
| Annual Overpayment Amount   |            |              |              |
| Online Form CSAT Score      |            |              |              |
| # of online 0538 submissions|            |              |              |


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: More Veterans have verified that their dependents are correct, or have the option to correct them.
  - Key result: Percentage comparison of annual updates compared to total (0%+)
  - Key result: Reduced annual overpayment (<$100m)

---

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- [Pop-Up Modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/modal/modal-README.md)
   - Launched: Cancelled in 2021 
- [Annual Reminder Email](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/annual-email/Feature-Brief-Annual-Verification-Email.md)
   - Launched: Target February 2024, rework in progress to expand the solution to provide [an option](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md) to submit a "no" response and auto-generate an 0538 form via VA.gov
- [Dependent Verification Tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md)
   - Launched: Target July 2024 

--- 
### Key Decisions
- 2021: A [pop-up modal](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ebenefits/dependency-verification/modal) to prompt Veterans to update their dependent information was developed for VA.gov in 2021, but it was considered too disruptive to the VA.gov experience, so it not launched.
- March 2024: The annual reminder email was postponed after feedback from David Reis and others that VA.gov needed a mechanism to capture if a Veteran had no changes to their dependent info by auto-generating and submitted a 21-0538 form. 

---

#### Communications
- Team Name: Benefits Non-Disability Experience
- GitHub Label: #tree, #dependents-benefits
- Slack channel: #benefits-dependents-management
- Product POCs: 
- Stakeholders: Brandi Traylor (OBA), David Reis (OBA), Kayce White (Comp Service)


#### Team Members
 - DEPO Lead: Emily Theis
 - PM: Laura Steele
 - Engineering: Thomas Blackwell (lead), Evan Smith, Tyler Fink
 - Research/Design: Ajia Wallace, Julie Pedtke
