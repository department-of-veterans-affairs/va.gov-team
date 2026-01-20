# Product Outline: 10-7959a CHAMPVA Claim Form v2

## Overview
For Veterans and beneficiaries enrolled in CHAMPVA (Civilian Health and Medical Program of the Department of Veterans Affairs), filing a claim online (form 10-7959a) follows the digitization of enrollment (form 10-10d) and Other Health Insurance certification (form 10-7959c).

This product outline has been updated to reflect recent enhancements to the CHAMPVA claims flow that **expand digital capabilities**. Previously, Veterans could only submit **new claims** online. With these updates, Veterans can now **digitally submit resubmissions and reopens**, enabling them to respond to requests for additional information without relying on mail or fax.

Additional improvements to language, layout, and document upload guidance support this expanded functionality and make the form easier to understand and complete.

---

## Problem Statement
Veterans and their beneficiaries need a way to file claims through CHAMPVA quickly and easily so they can get coverage for the services they need. Historically, claims — especially resubmissions and reopens — had to be sent via mail or fax, which led to long processing times and additional burden for users.

Prior to these updates:
- Users could submit new claims online, but **could not digitally resubmit or reopen an existing claim**.
- Users responding to CHAMPVA requests for more information had no digital option, even if the original claim was submitted online.

How might we enable Veterans and their families to submit **all claim-related actions**, including resubmissions and reopens, quickly and easily through VA.gov?

---

## Desired User Outcomes
- Veterans are able to submit new claims, resubmissions, and reopens online on VA.gov
- Veterans spend less time, effort, and money filling out and mailing paperwork
- Veterans can respond to CHAMPVA requests for additional information digitally
- Veterans spend less time waiting to hear back on the status of their claims
- Veterans have confidence that their claim and supporting documents were received successfully

## Undesired User Outcomes
- Veterans are unaware that they can file or resubmit claims online
- Veterans encounter errors during the online filing process
- Veterans have low confidence in the online process or concerns around online security
- Veterans are forced to switch back to mail or fax to complete claim-related actions

---

## Desired Business Outcomes
- Reduce amount of time spent processing paper forms
- Replace outdated and legacy DAPER system with PEGA for document upload and management
- Reduce manual handling of mailed or faxed resubmissions and reopens
- Improve turnaround time for claims requiring additional documentation

---
## Measuring Success

### Key Performance Indicators (KPIs)

#### Baseline KPI Values
- number of PDF downloads
- processing time for paper forms

#### Additional KPI Considerations (New)
- number and percentage of resubmissions/reopens submitted digitally
- reduction in mailed or faxed resubmissions
- time from request-for-information to successful resubmission
- downstream processing time for resubmitted claims

### Objectives and Key results (OKRs)
- Objective: Increase use of digital claims submission
  - Key result: Increase number of beneficiaries who file CHAMPVA claims online
  - Key result: Increase number of resubmissions and reopens completed digitally

- Objective: Reduce time from submission to notification
  - Key result: Measure number of applications completed in a single session
  - Key result: Reduce processing time for applications and resubmissions

---

## Assumptions
- Families and beneficiaries of Veterans prefer to complete claim-related actions online rather than on paper.
- Enabling digital resubmissions and reopens will reduce delays caused by mail and fax workflows.
- Clear, structured steps will help users provide the correct information when responding to CHAMPVA requests.

---

## Solution Approach
Provide CHAMPVA claim form online with PDFs and supporting documents sent to PEGA for processing, while expanding the flow to support **new claims, resubmissions, and reopens**.

### In scope
- Build out form leveraging existing workflows, design system, and content infrastructure as much as possible to avoid custom work
- General flow, patterns, and components (v3) follow existing standards in the design system and accessibility guidelines
- Fillable fields with pre-fill for signed-in users
- Digital signature with date stamp accepted by the CHAMPVA team
- PDF output of completed form with required metadata and unique identifier sent to PEGA
- Integration with PEGA for forms and supporting documents
- Authenticated and unauthenticated experience
- End-to-end testing with PEGA
- Confirmation and tracking/monitoring (to and from PEGA)

### Updated capabilities (New)
#### Digital resubmissions and reopens
- Users can now submit:
  - A new claim, or
  - A resubmission/reopen for an existing claim
- This enables users to respond digitally when CHAMPVA requests additional information, instead of using mail or fax.

#### New screener questions
- **Do you currently receive CHAMPVA benefits?**
  - Ensures users are routed to the correct experience.
- **What type of claim are you submitting?**
  - New claim
  - Resubmission for an existing claim

#### New and updated pages to support resubmissions
- **Your CHAMPVA claim status**
  - Users indicate whether they are submitting a new claim or a resubmission.
- **Your claim identification number**
  - Users:
    - Select identification type:
      - PDI number, or
      - Claim control number
    - Enter the corresponding identification number.
- **Upload the letter you received**
  - Users upload:
    - A letter requesting more information, or
    - An Explanation of Benefits (EOB).
- **Upload supporting documents for your claim**
  - Users upload requested documentation such as:
    - A superbill
    - An EOB from their insurance
    - A prescription or pharmacy statement

#### Content and layout improvements
- Clearer language throughout the flow, including:
  - Replacing “sponsor” with “veteran” where appropriate
  - Reducing unclear or shifting pronouns
- Improved instructions at each step to help users complete the form efficiently
- Updated page headers and content organization aligned with current design standards

### Out of scope
- Integration with VES (this will need to be addressed in the future)
- Eligibility determination beyond the basic screener questions
- New list and loop pattern

### Risks or dependencies
- PEGA must support additional routing and workflows for resubmissions and reopens
- Incorrect claim identification numbers could still delay processing if entered incorrectly
- Measuring downstream impact may require coordination with CHAMPVA and PEGA teams

### Other considerations
- VA Notify
- Handling for mobile app

---

## Launch Strategy
- Communicate expanded digital capabilities (including resubmissions) to Veterans and beneficiaries
- Coordinate outreach with CHAMPVA stakeholders and call centers
- [Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

Incident Response info

[Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms?fromUser=false&refresh_mode=sliding&from_ts=1739300121041&to_ts=1741892121041&live=true)  
[Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/ivc-forms-monitoring-playbook.md)

Rollback & Fix plan (1–3 days to triage and implement fix)

---

## Launch Dates
- Target Launch Date
  - 1/26/2026
- Actual Launch Date
  - tbd
- Impact Review
  - tbd

---

## Solution Narrative

### Current Status
Key Deliverables:
- Design:
  - https://www.figma.com/file/Tfhq5h2LwXEeEEtFBAAFOv/10-7959a
- Research and testing plans complete
- Digital resubmission and reopen capability implemented and ready for rollout

### Key Decisions
- Expand the existing online claim flow to support resubmissions and reopens.
- Require claim identification information to correctly route resubmitted claims.
- Continue using PEGA as the downstream document management and processing system.

---

## Screenshots

### Before
- Downloadable PDF:
  - https://www.va.gov/find-forms/about-form-10-7959a/
- Image:
  - products/health-care/champva/10-7959a/temp_champva_claim.png

### After
- TBD (updated flow screenshots)

---

## Communications
- Team Name: IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mike Mooney
- Stakeholders: Erick Maes

## Team Members
- DEPO Lead: Premal Shah
- PM: Mike Mooney
- Engineering: Michael Clement, Kyle Brost, Rachel Eiting, Steve Long
- Research/Design: Rachel Pope, Jamie Fiore

## Stakeholders
- OIT
- CHAMPVA
