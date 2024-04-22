
# Product Outline - 10-7959f-2 Claim Cover Sheet

---

## Overview
Following the Foreign Medical Program registration form (10-7959f-1), the online [10-7959f-2]([https://www.va.gov/health-care/foreign-medical-program/]) would allow Veterans to file a claim to get coverage for a service connected condition while outside of the U.S.

## Problem Statement
Veterans living or traveling outside the U.S. must mail or fax in paper forms in order to receive coverage for care received for service connected conditions. On the receiving end, these paper forms must be scanned and manually entered into various systems.  

How might we make it easier for Veterans in the Foreign Medical Program to file claims? How might we reduce processing time per claim? 
 
## Desired User Outcomes

- Veterans are able to easily fill out the claim cover sheet  online on VA.gov
- Veterans spend less time, effort and money filling out and mailing paperwork

## Undesired User Outcomes
- Veterans are unaware that they can fill out form online
- Veterans encounter errors during the online process
- Veterans have low confidence in the online process

## Desired Business Outcomes

- Volume of paperwork being processed is reduced
- Veterans' information is processed in a timely manner
- Amount of resubmissions due to missing information or manual entry error is reduced

## Undesired Business Outcomes
- Errors during online submission process
- Increased delays during processing
  
---
## Measuring Success

### Key Performance Indicators (KPIs)
* _Include links to Domo or Google Analytics Dashboards/Reports_

#### Baseline KPI Values
- number of downloads
- number of submissions
- processing time for paper forms:
  - currently it takes 120 days to process (this is outside desired goal - 90% within 45 days).
  - Can take 'minutes to hours' to process a claim (depending on how many pages).

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Veterans can easily file for FMP claims online
  - Key result: Measure number of Veterans who file for FMP claims online
  - Key result: Reduce processing time for claims
- Objective: Veterans are updated and informed of statuses
  - Key result: Ensure testing and alert monitoring is in place to catch any errors
  - Key result: Accurate confirmation status is relayed to applicants 

---

## Assumptions/Risks
- Risk - PEGA solution/integration is still underway and dependent on another team's timing.

## Solution Approach

- In scope:
  - General flow, patterns and components (v3) follow existing standards in design system as well as accessibility standards
  - Fillable fields with pre fill for signed in users
  - Digital signature with date stamp accepted by FMP team
  - PDF output of completed form with required meta data and unique identifier sent to IVC team
    - Separate attachments are sent for each file and form
  - Integration with PEGA for forms and documents
  - Authenticated (and unauthenticated) experience
  - End to end testing with PEGA and status returned by PEGA team
--- 

## Launch Strategy
- [Link to Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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
- research and discovery kicked off, wifreframes in progress.
  
Key deliverables:
- design:
- user flows:
- research:
- testing plan:
  
### Key Decisions

---
   
## Screenshots

### Before
https://www.va.gov/find-forms/about-form-10-7959f-2/

### After

---

#### Communications

<details>

- Team Name: IVC Forms
- GitHub Label: 10-7959f-2
- Slack channel: ivc-forms
- Product POCs: Mary Wang
- Stakeholders: Andy S, Jennifer Rivera

</details>

#### Team Members

<details>
 
 - DEPO Lead: Premal Shah
 - PM: Mary Wang
 - Engineering: Bryan Alexander, Rachel Eiting
 - Research/Design: Rachael Penfil, Brian Wilke
 
</details>


#### Stakeholders

<details>
- FMP
</details>

