# 1010D & OHI Merge Product Outline

## Overview
Applicants seeking CHAMPVA benefits must complete and submit VA Form 10-10d for benefits enrollment and VA Form 10-7959c for Other Health Insurance (OHI) certification separately. To enhance user experience and streamline operations, we propose merging these two forms into a single, cohesive digital application process.​


## Problem Statement
Applicants are required to submit VA Form 10-10d and VA Form 10-7959c separately, leading to potential redundancy and increased processing times. This dual-submission process can be burdensome for users and may delay the overall application process. Our goal is to merge the submission processes to reduce the load on both the time it takes a veteran to submit, and the time it takes the approval team to process and approve applications.

- How might we simplify the CHAMPVA application and OHI supporting docs process to allow applicants to submit both benefits enrollment and OHI certification seamlessly in a single digital experience?

- How can we reduce processing times by merging the CHAMPVA and OHI forms?
 

## Desired User Outcomes

- Veterans can complete and submit both the CHAMPVA benefits application and OHI certification through a unified digital interface.​
- Veterans spend less time and effort filling out the forms.
- Veterans spend less time waiting to hear back on the status of their application.
- Veteran satisfaction increased with application experience.

## Undesired User Outcomes
- Veterans encounter errors during the online process.
- Veterans have low confidence in the online process or have concerns around online security.
- Veterans spend more time filling out the online forms than the printed PDF forms.

## Desired Business Outcomes

- Reduce the amount of time spent processing paper forms.
- Expedite the application process for these two forms by reducing multitasking needed by the approval team.
- Reduce error rates or rejections by removing the dependence on handwritten forms.

## Undesired Business Outcomes
- Increased number of incomplete or incorrect submissions due to the complexity of merging two forms
- Increased processing time for the approval team.
- Online information not being transferred successfully for processing.
- Veterans opting out of using the online form due to the length of the merged solution.


---
## Measuring Success

### Key Performance Indicators (KPIs)

#### Baseline KPI Values
_Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._
- Number of PDF downloads
- Processing time for paper forms

### Objectives and Key results (OKRs)

- Objective: Increase number of people filing online for CHAMPVA and OHI
  - Key result: Increase % of Veterans and families who apply for health care benefits online
  - Key result: Increase number of beneficiaries who apply for CHAMPVA & submit OHI online
  - Key result: Applicant satisfaction increases due to digital form

- Objective: Reduce time to submit both CHAMPVA and OHI
  - Key result: Measure number of applications completed in single session
  - Key result: Lower average session length than submitting CHAMPVA & OHI separately
  - Key result: Low dropoff when users encounter OHI part of merged solution

- Objective: Faster delivery of benefits for Veterans and their families
  - Key result: Increase number of people who obtain approvals for claims filed 
  - Key result: Reduce processing and approval time
  - Key result: Reduce the number of resubmissions


---

## Assumptions
- **Applicants prefer a consolidated application process over separate submissions.​**
- Integrating the two forms will not compromise the integrity or accuracy of the information collected.​
- The merged application will be compliant with all relevant legal and regulatory requirements

## Solution Approach

Provide CHAMPVA Benefits Application and OHI submission as a merged form.

- We have already successfully launched CHAMPVA Benefits applications and OHI forms. This process will merge them together so veterans can complete both in the same experience.
- We’ve chosen this solution after extensive discussions with sponsors and stakeholders, as well as user research, to identify the best possible experience for both veterans and the approvals team for completing and reviewing applications.
- We will intently monitor this implementation to confirm our assumptions and research findings were accurate, and that this is a better user experience

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan]([https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10D%20Extended%20Release%20Plan))

Incident Response info

[ivc-champva-forms](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms?fromUser=false&refresh_mode=weekly&from_ts=1734391252265&to_ts=1734709253529&live=true) will be monitored by the team **(TO BE UPDATED WHEN 10-10D EXTENDED DASBHOARD IS LIVE)** [Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/ivc-forms-monitoring-playbook.md)

Rollback & Fix plan (1-3 days to triage and implement fix)

In the event of a security vulnerability incident, we will: 
- Immediately - Turn off feature using feature toggle
- Immediately - Triage incident
- Day 1 - Assess viable solutions
- Day 1-3 - Implement solutions
- Day 1-3 - Complete solution testing
- Day 1 - Implement additional monitoring, if applicable
- Day 1-3 - Turn on feature using feature toggle (starting with a small percentage)
- Day 1-30 - Continue to monitor performance
- Day 1-10 - Proceed with Release Plan

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
- Research mural: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1734537770114/c43159bce476eaee8e52f597201223934411963b
- Design Figma: https://www.figma.com/design/UmAtr3ULQEInMXfNFwP0g0/Application-for-CHAMPVA?node-id=5194-37072&t=oTNtlONmioBYVyQp-4


### Key Decisions
A combined submission is the best approach. 

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name:  IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mike Mooney
- Stakeholders: 

</details>

#### Team Members

<details>
 
- DEPO Lead: Premal Shah
- PM: Mike Mooney
- Engineering: Michael Clement, Kyle Brost, Rachel Eiting, Steve Long
- Research/Design: Rachel Pope, Jamie Fiore, Renata Keck
 
</details>


#### Stakeholders

<details>

- OIT
- CHAMPVA
 
</details>
