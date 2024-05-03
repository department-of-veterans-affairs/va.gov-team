
# Product Outline: 10-7959f-1 Foreign Medical Program (FMP) Registration

---

## Overview
Under the [IDEA Act](https://digital.gov/resources/delivering-digital-first-public-experience/), all user facing forms need to be digitized. For Veterans who are residing or traveling outside the US and are eligible for health coverage for a service-related condition, providing the Foreign Medical Program registration form online would allow them to more easily and quickly apply rather than go through the [current process](https://www.va.gov/health-care/foreign-medical-program/).

## Problem Statement
Veterans who are living or traveling outside the U.S. with a service connected disability are only able to apply for health care benefits by filling out the paper form and sending it through mail or fax. 

How might we improve the experience of Veterans living or traveling overseas who are applying for VA health care services? 
 
## Desired User Outcomes

- Veterans are able to fill out the registration form online on VA.gov
- Veterans spend less time, effort and money filling out and mailing paperwork
- Veterans spend less time spent waiting to hear back on their application status 

## Undesired User Outcomes

- Veterans are unaware that they can apply online
- Veterans encounter errors during the online application process 
- Veterans have low confidence in the online process or have concerns around online security
- The response burden is increased for the user

## Desired Business Outcomes

- Reduce the volume of paperwork being processed that comes in through mail and fax
- Reduce the time and effort spent processing paper forms
- Reduce the amount of resubmissions due to missing information or documents

## Undesired Business Outcomes
- Veterans are unaware they can fill out the application online
- The information entered online by Veterans is not successfully submitted to the VA
- Online forms processing adds confusion and complicates workflows further

---
## Measuring Success


### Key Performance Indicators (KPIs)
* _links to Domo or Google Analytics Dashboards/Reports_

#### Baseline KPI Values
- number of downloads
- number of submissions 
- processing time for paper forms

### Objectives and Key results (OKRs)

- Objective: Veterans can easily register for FMP online
  - Key result: Measure number of Veterans who register for FMP online
  - Key result: Reduce time it takes to fill out registration form
  - Key result: Reduce processing time 
- Objective: Veterans are updated and informed of statuses
  - Key result: Ensure testing and alert monitoring is in place to catch any errors
  - Key result: Accurate status is relayed to applicants

---

## Assumptions
- Veterans will want to fill out their information online
- Providing the form online will reduce the processing time for FMP applications and reduce the amount of manual work needed to process paper FMP forms.

## Solution Approach
Provide stand alone FMP registration form online with forms sent to PEGA for further processing. 
- **In scope**:
  - General flow, patterns and components (v3) follow existing standards in design system as well as accessibility standards
  - Fillable fields with pre fill for signed in users
  - Digital signature with date stamp accepted by FMP team
  - PDF output of completed form with required meta data and unique identifier
  - Integration with PEGA for forms and documents
  - Authenticated and unauthenticated experience
  - End to end testing with PEGA
- **Out of scope**:
  - Integration with VES (this will need to be addressed in the future)
  - Checking for eligibility requirements
  - Interoperability
  - new list and loop pattern
  - no known address/houseless
- **Risks or dependencies**:
  - PEGA solution will need to be able to house files and handle the different workflows required for different documents and teams
  - Integration with PEGA is still being developed and need better understanding of how files will be handled with this solution (more details [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/ADR-PEGA%20integration%20for%20CHAMPVA.md))
- **Other considerations**:
  - Content migration effort to va.gov and expansion of family member benefits hub - coordinate on timing
  - VA notify(?) and notifications in general
  - handling for mobile app 

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

Collaboration Cycle
- [x] [Collab Cycle ticket]https://github.com/department-of-veterans-affairs/va.gov-team/issues/74178
- [x] Design Intent: 1/29/24
- [x] [Content, Accessibility and IA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74190)
- [x] Midpoint: 2/29/24
- [ ] Research 
- [ ] Contact Center guide
- [ ] Analytics
- [ ] Staging 
- [ ] Infrastructure, Privacy & Security
 
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
- Conversations with stakeholders scheduled through 2/9 completed.
- Stakeholder interview analysis complete along with prototype creation and research readout.
- Research into uxpin for usability testing
  - (Figma has limited capabilities with the license the VA is on, and CodePen requires a heavier lift/coding

Key deliverables:
- design: 
  - [user flows](https://www.figma.com/file/PzB1F5TYuBK5KQgPbuhAwH/10-7959f-1?type=design&node-id=1-18&mode=design)
  - [wireframes](https://www.figma.com/file/PzB1F5TYuBK5KQgPbuhAwH/10-7959f-1?type=design&node-id=1-19&mode=design)
  - [service map (WIP)](https://www.figma.com/file/is5cbY5lM3HjTT0GcXhDT7/CHAMPVA-Service-Map-(WIP)?type=whiteboard&node-id=0-1&t=2h13odIsLW9EPMql-0)
  - [source of truth on github](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-1/content-source-of-truth.md)
- research: [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-1/research/users/research-plan.md)
- testing: plan

### General Questions
- For stakeholders: What is the current process/flow? Pain points? Which teams are involved?
- How does this program intersect (or not) with other programs such as VR&E (Veterans Readiness and Employment)?
  - A: VR&E is a minority

### Key Decisions
- 2/7/24 - even though it seems that the actual registration form is unnecessary (per stakeholder interviews conducted through 1/31/24-2/9/24), moving forward with digitization of the form with the understanding that the long term recommendation is to 1) make registration automatic and 2) have VBMS (Veteran Benefit Management System) and VIS/VISTA (Veterans Health Information Systems and Technology Architecture) communicate with each other.

### Key Dates
- Jan 2024: start discovery
- Collaboration cycle kickoff: 1/22/24
- Design intent: 1/29/24
---
   
## Screenshots

- [Before](https://www.va.gov/vaforms/medical/pdf/vha-10-7959f-1%20(1).pdf)
- After

---

#### Communications

<details>

- Team Name: IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mary Wang
- Stakeholders: Andy Szymczak, FMP Director

</details>

#### Team Members

<details>
 
 - DEPO Lead: Premal Shah
 - PM: Mary Wang
 - Engineering: Rachel Eiting, Bryan Alexander
 - Research/Design: Rachael Penfil, Brian Wilke, Steven Straily
 
</details>


#### Stakeholders

<details>
 
- FMP
- OIT
 
</details>

#### Resources

<details>
 
- [FMP page](https://www.va.gov/health-care/foreign-medical-program/)
- [Filing a claim](https://www.va.gov/resources/how-to-file-a-va-foreign-medical-program-claim/)
- [Community care page](https://www.va.gov/communitycare/programs/veterans/fmp/)
- [Benefits page](https://www.benefits.gov/benefit/567)
- [Getting care through FMP](https://www.va.gov/resources/getting-care-through-the-foreign-medical-program/)

 </details>
