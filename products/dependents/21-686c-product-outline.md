
# Product Outline: 21-686c Application Request to Add and/or Remove Dependents
*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*

---

## Overview
The online 686c form allows Veterans to add or remove dependents from their VA benefits. The online form flow is integrated with the 21-674 form (Request for Approval of School Attendance), which is used when claiming benefits for a Veteran's child who is at least 18 years old, but under 23, and attending school. Both online forms are out-of-sync with the latest paper version of the forms, and the online forms are either missing fields or they contain fields that are no longer needed. The scope of this project is to make the critical updates necessary to ensure parity between the online forms and their paper counterparts. Non-critical accessibility issues and some outdated design components will be out-of-scope for this project. 

## Problem Statement
Veterans are submitting online 686/674 claims that generate outdated pdf claim forms, are missing information, and/or contain information that is no longer required. Downstream systems (RBPS) need to offramp these claims for manual processing, which delays the Veteran's benefits.

How might we update the 686 and 674 online form experience to ensure Veterans are submitting the necessary information in a format that can be automatically processed by downstream systems (RBPS)?
 
## Desired User Outcomes

- The 686 and 674 online form flow generates and submits the most recent version of the claim pdf to increase the liklihood of automated processing by RBPS.
- The 686 and 674 online form flow collects all required information from the Veteran to ensure successful claim processing. 
- Veterans spend less time filling out the 674 form flow because depreciated fields have been removed.
- Veterans encounter fewer critical accessibility issues with completing the online 686/674 form

## Undesired User Outcomes
- 686 and 674 online claims still encounter processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome

## Desired Business Outcomes
- 686 and 674 online form submissions no longer need to be offramped for manual processing -- they can be automatically processed by RBPS.

## Undesired Business Outcomes
- 686 and 674 online form submissions generate claim errors that prevent automated processing 

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| KPI                       | Baseline Value | Target Value | Actual Value |
|---------------------------|----------------|--------------|--------------|
| # of 686 claims offramped |                |              |              |
| # of claim errors         |                |              |              |


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Online 686/674 claims are processed as quickly as possible (automated processing)
  - Key result: Average # of days to process an online 686 form
  - Key result: Average # of days to process an online 674 form

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- Update the 686 online form flow to include new fields and remove old fields
- Update the 674 online form flow to include new fields and remove old fields
- Update the pdf version both the 686 and 674 online form flows generate
- Remediate any critical accessibilty issues
- Out of scope: Remediation of non-critical accessibility issues. Descoping a complete accessibilty audit will ensure we can get critical form updates to Veterans in a timely manner.
- Future: An assessment of the complete 686/674 online form experience will be done to identify and prioritize form improvements and additional accessibility work.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
