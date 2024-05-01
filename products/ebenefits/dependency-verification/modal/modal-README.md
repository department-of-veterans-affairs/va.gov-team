# Feature Outline: Dependency Verification (Modal Solution)
<!-- *Iterating on a product? Have a new feature? Check out the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)* -->

---

## Overview
Dependency Verification gives a quick and easy opportunity for a Veteran to update the VA on whenther the dependents on their award is are accurate.  This is important because the VA would like to reduce the almost $250 million dollars in over payments made every year as well as relieve VEterans of unneccessary debt.

## Problem Statement
Veterans are currently asked to update their dependents by mailed paper letter only every 8 years.  This results in a very low quality feedback loop of what dependents are intended to be on award.  USing existing Diary Entries, we can determine if the Veteran needs to update their verification and show them a list of their dependents and ask if they are correct.  If they are correct, we submit a 21-0538 on thier behalf that will route through Centralized Mail and update their Diary Entry to ask again in 1 year.  Else, the Veteran is given an iopportunity to update their dependents if needed.  

It has been discussed to update the Diary Entry directly, but there are a few challenges with that as it is unknown if editing those numbers can be done safely by us. We are currently using a modal window to present the list of dependents.
 
## Desired User Outcomes

- Veteran's can quickly, easily and regulary update the VA on their dependents' status' so that they aren't being overpaid.
- The VA will save close to $250 M a year in overpayments.
- Congressional obligations will be met.

## Undesired User Outcomes
- Veterans ignore the modal window and another type of intercept would be needed.

## Desired Business Outcomes

- The VA will save close to $250 M a year in overpayments.
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
  - Key result: Conversion rate of presented question vs skipped (>50%)


---

## Assumptions
- Veterans will close modal windows without looking , especially if in their way to do something else.
- The modal is not clear/simple  enough

## Solution Approach

- Starting with a modal window that once seen to be effective, can be displayed anywhere on the site.
- An inline approach might be advantageous for some pages (View Dependents), as well as email campaings that drive traffic to View Dependents/Modal
- Not sharing Dependents NOT on award at this time as we want to keep messaging simple and non-awarded dependents are not impacting any party financially
- The modal window can travel aroudn the site as needed, be granualr in how it and when it gets presented

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
  - September 2021
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch?*
  - +1 month
---

## Solution Narrative

### Current Status
- FE complete
- BE testing some Centralized Mail pdfs

### Key Decisions
- Because this question is so important, we are working very closely with the Comp Innocvation Team that is going to be producing global comms on this feature once available.
- There is a Congressional mandate for this to be in place ASAP.

---
   
## Screenshots

### Before

### After
- Staging: https://staging.va.gov/view-change-dependents
- Backup Protoype: https://xd.adobe.com/view/2ac2e549-4997-4870-8115-17f62703bb0f-7f91/?fullscreen

---

#### Communications

<details>

- Team Name: eBenefits
- GitHub Label: #vsa-ebenefits
- Slack channel: #vsa-ebenefits-migration
- Product POCs: Jason Wolf
- Stakeholders: Paul Shute, Alejandro Mendiolaflores

</details>

#### Team Members

<details>
 
 - DEPO Lead: Matt Self
 - PM: Jason Wolf
 - Engineering: Kathleen, Kevin M, Micha, Jesse
 - Research/Design: Jim, Candy
 
</details>


