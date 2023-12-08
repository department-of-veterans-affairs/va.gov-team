# Feature Outline: Dependency Verification (email)
<!-- *Iterating on a product? Have a new feature? Check out the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)* -->

---

## Overview
Dependency Verification gives a quick and easy opportunity for a Veteran to update the VA on whenther the dependents on their award is are accurate.  This is important because the VA would like to reduce the almost $250 million dollars in over payments made every year as well as relieve VEterans of unneccessary debt.

## Problem Statement
Veterans are currently required to update their dependents by mailed paper letter only every 8 years. This results in a very low quality feedback loop of what dependents are intended to be on award.

## Solution
- Email Veterans asking them to verify the dependents on their dependents by directing them to the existing "view dependents" page on VA.gov.

## Considered Solutions
- Using existing Diary Entries, we can determine if the Veteran needs to update their verification and show them a list of their dependents and ask if they are correct.  If they are correct, we submit a 21-0538 on thier behalf that will route through Centralized Mail and update their Diary Entry to ask again in 1 year.  Else, the Veteran is given an iopportunity to update their dependents if needed.
- It has been discussed to update the Diary Entry directly, but there are a few challenges with that as it is unknown if editing those numbers can be done safely by us. We are currently using a modal window to present the list of dependents.
- [Modal solution](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/ebenefits/dependency-verification#:~:text=modal%2D-,README,-.md) (developed in 2021 but release was cancelled) 
 
## Desired User Outcomes

- Veteran's can quickly, easily and regulary update the VA on their dependents' status' so that they aren't being overpaid or underpaid.
- The VA will save close to $250 M a year in overpayments.
- Congressional obligations will be met.

## Undesired User Outcomes
- Veterans ignore the email and another type of intercept would be needed.

## Desired Business Outcomes
- The VA will save close to $250 M a year in overpayments.
- Veterans receive the benefits they are entitled to.
- Congressional obligations will be met.

## Undesired Business Outcomes


---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* Effectively at 0%

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: More Veterans have verified that their dependents are correct, or have the option to correct them.
  - Key result: Percentage comparison of annual updates compared to total (0%+)
  - Key result: Conversion rate from opening email to viewing "view dependents" page (>50%)
  - Key result: Reduced annual overpayment (<$100m)

---

## Assumptions
- Veterans will not receive email (bad or no address).
- Veterans will not open the email.
- Veterans will open the email, but not take any action.
- Veterans will open the email, click through to view dependents, but not make necessary updates.
- Veterans will open the email, click through to view dependents, and make necessary updates.

## Solution Approach

- [Sketch file](https://www.sketch.com/s/149b2ccf-af21-4c71-9ca8-2ef2ae8af9fc)
- Once a year, email all Veterans with dependents on their benefits
- Test messaging and gather feedback to adjust email copy as needed
- Develop additional email messages to fit other use cases (e.g., reminder to update dependent when they turn 18)

  
### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - September 2023
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch?*
  - +1 month
---

## Solution Narrative

### Current Status
- CAIA review complete
- BE testing some Centralized Mail pdfs

### Key Decisions
- We are working closely with OCTO and the VBA Dependent team.
- There is a Congressional mandate for this to be in place ASAP.

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Benefits Non-Disability Experience
- GitHub Label: #tree
- Slack channel: #benefits-ce-non_disability_exp
- Product POCs: 
- Stakeholders: Brandi Traylor (VBA Dependent Team)

</details>

#### Team Members

<details>
 
 - DEPO Lead: Emily Theis
 - PM: Laura Steele
 - Engineering: Thomas Blackwell (lead), Evan Smith, Tyler Fink, Zack Youngren 
 - Research/Design: Ajia Wallace, Julie Pedtke
 
</details>


