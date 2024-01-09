# Feature Brief: Dependency Verification (email)
<!-- *Iterating on a product? Have a new feature? Check out the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)* -->

---

## Overview
Dependency Verification gives a quick and easy opportunity for a Veteran to update the VA on whenther the dependents on their award is are accurate.  This is important because the VA would like to reduce the almost $250 million dollars in over payments made every year as well as relieve Veterans of unneccessary debt.

## Problem Statement
Veterans are currently required to update their dependents by mailed paper letter only every 8 years. This results in a very low quality feedback loop of what dependents are intended to be on award.

## Solution
- Email Veterans asking them to verify the dependents on their benfits by directing them to the existing "view dependents" page on VA.gov.

## Considered Solutions
- [Modal solution](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/ebenefits/dependency-verification#:~:text=modal%2D-,README,-.md) (developed in 2021 but release was cancelled)
   - Using existing Diary Entries, we can determine if the Veteran needs to update their verification and show them a list of their dependents and ask if they are correct.  If they are correct, we submit a 21-0538 on thier behalf that will route through Centralized Mail and update their Diary Entry to ask again in 1 year.  Else, the Veteran is given an iopportunity to update their dependents if needed.
   - It has been discussed to update the Diary Entry directly, but there are a few challenges with that as it is unknown if editing those numbers can be done safely by us. We are currently using a modal window to present the list of dependents.
- Email notification: Send an annual email to Veterans with dependents on their benefits asking them to review their dependents by visiting the existing "view dependents" page on VA.gov
- Text notification: Send an annual text to Veterans with dependents on their benefits asking them to review their dependents by visiting the existing "view dependents" page on VA.gov

 
## Desired User Outcomes
- Veteran's can quickly, easily and regulary update the VA on their dependents' status' so that they aren't being overpaid or underpaid.
- The VA will save close to $250 M a year in overpayments.
- Congressional obligations will be met.

## Undesired User Outcomes
- Veterans ignore the email and another type of intercept would be needed.

## Desired Business Outcomes
- Veterans receive the benefits they are entitled to.
- Veterans will not owe the VA money.
- The VA will save close to $250 M a year in overpayments.
- Congressional obligations will be met.

## Undesired Business Outcomes
- The email notification does not increase the number and frequency of dependent updates.
- The email notificatino does not lead to a decreate in overpayments.

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| KPI                       | Base Value | Target Value | Ending Value |
|---------------------------|------------|--------------|--------------|
| Bounce rate               |            |              |              |
| Open rate                 |            |              |              |
| Click-through rate        |            |              |              |
| Volume of 686 submissions |            |              |              |
| Total Overpayment Amount  |            |              |              |


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

--- 

## Go-to-market Strategy
- Veterans will receive this email annually in February (need to validate with VBA)
- The VBA will be notified before the first email is sent
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/annual-email/Release-Plan-Verification%20Email.md)

## Launch Dates
- *Target Launch Date*: February 2023
- *Actual Launch Date*:
- *What date will you evaluate impact after launch?*
  - +1 month
---

## Solution Narrative

### Current Status
- [CAIA review complete](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65222)
- OCTO review complete
- VBA review complete
- Distribution list requested from PA&I
- [VA Notify kickoff](https://github.com/department-of-veterans-affairs/va.gov-team/issues/71504) on 1/10/24

### Key Decisions
- We are working closely with OCTO and the VBA Dependent team.
- There is a Congressional mandate for this to be in place ASAP.

---
   
## Screenshots

### Before
- none
  
### After
- [Copy source of truth](https://docs.google.com/document/d/1iSO7jTqeA2wM-7S2sYqjt6sFoJp7h_AtEIaSz_dqTYQ/edit#heading=h.zptou6y925s)

---

#### Communications

<details>

- Team Name: Benefits Non-Disability Experience
- GitHub Label: #tree
- Slack channel: #benefits-dependents-management
- Product POCs: Laura Steele, Emily Theis (OCTO)
- Stakeholders: Brandi Traylor (VBA Dependent Team)

</details>

#### Team Members

<details>
 
 - DEPO Lead: Emily Theis
 - PM: Laura Steele
 - Engineering: Thomas Blackwell (lead), Evan Smith, Tyler Fink, Zack Youngren 
 - Research/Design: Ajia Wallace, Julie Pedtke
 
</details>


