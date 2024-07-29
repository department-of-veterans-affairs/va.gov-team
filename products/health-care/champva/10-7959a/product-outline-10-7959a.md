
# Product Outline: 10-7959a CHAMPVA Claim Form

## Overview
For Veterans and beneficiaries enrolled in CHAMPVA (Civilian Health and Medical Program of the Department of Veterans Affairs), filing a claim online (form 10-7959a) follows the digitization of enrollment (form 10-10d) and Other Health Insurance certification (form 10-7959c).

## Problem Statement
Veterans and their beneficiaries need a way to file claims through CHAMPVA quickly and easily, so they can get coverage for the services they need. Currently they are sending these in via mail and fax, which can lead to long processing times.

How might we help family members of Veterans get their claims filed and processed quickly and easily?
 
## Desired User Outcomes

- Veterans are able to fill out the claim form online on VA.gov
- Veterans spend less time, effort and money filling out and mailing paperwork
- Veterans spend less time spent waiting to hear back on the status of their claims

## Undesired User Outcomes
- Veterans are unaware that they can file claims online
- Veterans encounter errors during the online filing process
- Veterans have low confidence in the online process or have concerns around online security

## Desired Business Outcomes

- Reduce amount of time spent processing paper forms
- Replace outdated and legacy DAPER system with PEGA for document upload and management

---
## Measuring Success


### Key Performance Indicators (KPIs)

#### Baseline KPI Values
- number of PDF downloads
- processing time for paper forms

### Objectives and Key results (OKRs)

- Objective: Measure number of people filing claims online through CHAMPVA
  - Key result: Increase number of beneficiaries who file CHAMPVA claims
  - Key result: Increase number of people who obtain approvals for claims filed 

- Objective: Reduce time from submission to notification
  - Key result: Measure number of application completed in single session
  - Key result: Reduce processing time for applications
---

## Assumptions
- Families and beneficiaries of Veterans prefer to fill out forms online rather than on paper.

## Solution Approach

Provide CHAMPVA claim form online with PDFs sent to PEGA for processing.

In scope:
- Build out form leveraging existing workflows, design system and content infrastructure as much as possible to avoid custom work
- General flow, patterns and components (v3) follow existing standards in design system as well as accessibility standards
- Fillable fields with pre fill for signed in users
- Digital signature with date stamp accepted by CHAMPVA team
- PDF output of completed form with required meta data and unique identifier sent to PEGA
- Integration with PEGA for forms and documents
- Authenticated and unauthenticated experience
- End to end testing with PEGA
- Confirmation and tracking/monitoring (to and from PEGA)
  
Out of scope:
- Integration with VES (this will need to be addressed in the future)
- Checking for eligibility requirements
- new list and loop pattern
  
Risks or dependencies:
- PEGA solution will need to be able to house files and handle the different workflows required for different documents and teams
- Integration with PEGA is still being developed

Other considerations:
- VA notify
- handling for mobile app

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd (dependent on PEGA integration timing)
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

Key Deliverables:
- [design](https://www.figma.com/file/Tfhq5h2LwXEeEEtFBAAFOv/10-7959a?type=design&node-id=13-80&mode=design&t=YuafvBbuKozoXYFY-0)
- research
- testing plan

### Key Decisions

---
   
## Screenshots

### Before
[PDF](https://www.va.gov/vaforms/medical/pdf/vha-10-7959a-fill.pdf)

### After

---

#### Communications

<details>

- Team Name: IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mary Wang
- Stakeholders: Erick Maes

</details>

#### Team Members

<details>
 
 - DEPO Lead: Premal Shah
 - PM: Mary Wang
 - Engineering: Michael Clement
 - Research/Design: Rachael Penfil, Steven Straily, Brian Wilke
 
</details>


#### Stakeholders

<details>
 
 - OIT
 - CHAMPVA
   
</details>

