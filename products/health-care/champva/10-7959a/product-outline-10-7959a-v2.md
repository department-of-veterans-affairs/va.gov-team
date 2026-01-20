# Product Outline: 10-7959a CHAMPVA Claim Form

## Overview
For Veterans and beneficiaries enrolled in CHAMPVA (Civilian Health and Medical Program of the Department of Veterans Affairs), filing a claim online (form 10-7959a) follows the digitization of enrollment (form 10-10d) and Other Health Insurance certification (form 10-7959c).

This product outline has been updated to reflect recent improvements to the CHAMPVA claims flow that:
- add screeners to ensure users are eligible to submit claims and routed correctly, and
- support **new claims, resubmissions, and reopens** with clearer instructions and better document collection.

## Problem Statement
Veterans and their beneficiaries need a way to file claims through CHAMPVA quickly and easily, so they can get coverage for the services they need. Currently they are sending these in via mail and fax, which can lead to long processing times.

Additionally, users can be confused about what information is required and what type of claim they are submitting (new vs resubmission/reopen). This can result in incomplete submissions, misrouted claims, and extra follow-up cycles.

How might we help family members of Veterans get their claims filed and processed quickly and easily?

## Desired User Outcomes
- Veterans are able to fill out the claim form online on VA.gov
- Veterans spend less time, effort and money filling out and mailing paperwork
- Veterans spend less time spent waiting to hear back on the status of their claims
- Veterans can clearly identify whether they are submitting a new claim or resubmitting/reopening a claim
- Veterans can provide the right supporting documentation the first time

## Undesired User Outcomes
- Veterans are unaware that they can file claims online
- Veterans encounter errors during the online filing process
- Veterans have low confidence in the online process or have concerns around online security
- Veterans submit the wrong claim type (new vs resubmission) and experience delays
- Veterans miss required documentation and need to resubmit

## Desired Business Outcomes
- Reduce amount of time spent processing paper forms
- Replace outdated and legacy DAPER system with PEGA for document upload and management
- Reduce avoidable resubmission cycles caused by unclear instructions or missing documentation
- Improve routing accuracy for resubmissions and reopens

---
## Measuring Success

### Key Performance Indicators (KPIs)

#### Baseline KPI Values
- number of PDF downloads
- processing time for paper forms

#### Additional KPI Considerations (New)
- percentage of submissions that are resubmissions/reopens vs new claims
- percentage of resubmissions that include a valid claim identification number
- percentage of resubmissions that include the requested letter/EOB
- reduction in follow-up requests due to missing documentation (if measurable)

### Objectives and Key results (OKRs)
- Objective: Measure number of people filing claims online through CHAMPVA
  - Key result: Increase number of beneficiaries who file CHAMPVA claims
  - Key result: Increase number of people who obtain approvals for claims filed

- Objective: Reduce time from submission to notification
  - Key result: Measure number of application completed in single session
  - Key result: Reduce processing time for applications

- Objective: Improve successful completion on first submission
  - Key result: Reduce percentage of claims that require follow-up due to missing information/documents
  - Key result: Increase completion rate for resubmissions by ensuring correct routing data is captured

---

## Assumptions
- Families and beneficiaries of Veterans prefer to fill out forms online rather than on paper.
- Users are more likely to submit complete claims when:
  - instructions are consistent and easy to scan, and
  - the flow clearly distinguishes between new claims and resubmissions/reopens.

## Solution Approach
Provide CHAMPVA claim form online with PDFs sent to PEGA for processing.

### In scope
- Build out form leveraging existing workflows, design system and content infrastructure as much as possible to avoid custom work
- General flow, patterns and components (v3) follow existing standards in design system as well as accessibility standards
- Fillable fields with pre fill for signed in users
- Digital signature with date stamp accepted by CHAMPVA team
- PDF output of completed form with required meta data and unique identifier sent to PEGA
- Integration with PEGA for forms and documents
- Authenticated and unauthenticated experience
- End to end testing with PEGA
- Confirmation and tracking/monitoring (to and from PEGA)

### Updated flow enhancements (New)
#### New screener questions
- Screener: **Do you currently receive CHAMPVA benefits?**
  - Purpose: Ensure the user is in the correct place to file a CHAMPVA claim and reduce misrouted submissions.
- Screener: **Are you submitting a new claim or a resubmission?**
  - Purpose: Route resubmissions/reopens correctly and collect additional required information.

#### Clearer language and instructions
- Updated wording throughout the flow to reduce confusion, including:
  - Replacing “sponsor” with “veteran” where appropriate
  - Reducing the use of unclear or shifting pronouns
- Improved instructions to help users understand what’s needed at each step and complete the form more quickly

#### Updated design and layout
- Page headers updated to align with the latest design team style guidelines
- Content reorganized to make each step more focused and easier to scan

#### New and updated pages
- **Your CHAMPVA claim status**
  - Users select one:
    - A new claim
    - A resubmission for an existing claim
- **Your claim identification number**
  - Users will:
    - Choose identification type from a dropdown:
      - PDI number, or
      - Claim control number
    - Enter the corresponding identification number
- **Upload the letter you received**
  - Users upload:
    - A letter requesting more information, or
    - An Explanation of Benefits (EOB)
- **Upload supporting documents for your claim**
  - Users upload additional requested documentation, such as:
    - A superbill
    - An EOB from their insurance
    - A prescription or pharmacy statement

### Out of scope
- Integration with VES (this will need to be addressed in the future)
- Checking for eligibility requirements (beyond screeners described above)
- new list and loop pattern

### Risks or dependencies
- PEGA solution will need to be able to house files and handle the different workflows required for different documents and teams
- Integration with PEGA is still being developed
- Resubmission/reopen flows increase complexity and the risk of users entering incorrect identifiers or uploading the wrong documents without strong content guidance
- Measuring reduction in follow-up cycles may require coordination with downstream stakeholders and/or tagging in PEGA workflows

### Other considerations
- VA notify
- handling for mobile app

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

Incident Response info

[Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms?fromUser=false&refresh_mode=sliding&from_ts=1739300121041&to_ts=1741892121041&live=true)  
[Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/ivc-forms-monitoring-playbook.md)

Rollback & Fix plan (1-3 days to triage and implement fix)

In the event of a security vulnerability incident, we will:
- Immediately - Turn off feature using feature toggle
- Immediately - Triage incident
- Day 1 - Assess viable solutions
- Day 1-3 - Implement solution
- Day 1-3 - Complete solution testing
- Day 1 - Implement additional monitoring, if applicable
- Day 1-3 - Turn on feature using feature toggle (starting with a small percentage)
- Day 1-30 - Continue to monitor performance
- Day 1-10 - Proceed with Release Plan

Points of Contact:
- DEPO Lead: Premal Shah
- PM: Mike Mooney
- DM: Andrea Merrill
- OCTO Engineering Lead: Adrian Rollet
- Engineering: Michael Clement, Kyle Brost, Rachel Eiting, Steve Long

Downstream Dependencies
- Pega/DOCMP
  - Contact: Denise (Cindy) Carr

## Launch Dates
- *Target Launch Date*
  - 4/2/2025
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
  - [Stakeholder Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/research/stakeholders/2024-06-stakeholder-research-plan-and-conversasion-guide.md)
  - [Stakeholder Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/research/stakeholders/2024-06-CHAMPVA-Claims-(10-7959a)-Stakeholder-Research-Findings.md)
  - [User Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/research/user-research/2024-08-Research-Plan-for-Integrated-Veteran-Care-(IVC)-Team%2C-Form-10-7959a%2C-August-1st.md)
  - [User Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/10-7959a/research/stakeholders/2024-06-CHAMPVA-Claims-(10-7959a)-Stakeholder-Research-Findings.md)
- testing plan

### Key Decisions
- Add two screener questions:
  - confirm user currently receives CHAMPVA benefits
  - identify whether the submission is a new claim or a resubmission/reopen
- Update content and page layout to reduce confusion and improve scan-ability.
- Add structured pages for resubmissions to ensure correct routing:
  - claim status (new vs resubmission)
  - claim identification number (PDI or claim control number)
  - upload letter/EOB
  - upload supporting documents requested

---
   
## Screenshots

### Before
- [Downloadable PDF](https://www.va.gov/find-forms/about-form-10-7959a/)
- [Image](products/health-care/champva/10-7959a/temp_champva_claim.png)

### After
- TBD (updated flow screenshots)

---

#### Communications

<details>

- Team Name: IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mike Mooney
- Stakeholders: Erick Maes

</details>

#### Team Members

<details>
 
 - DEPO Lead: Premal Shah
 - PM: Mike Mooney
 - Engineering: Michael Clement, Kyle Brost, Rachel Eiting, Steve Long
 - Research/Design: Rachel Pope, Jamie Fiore
 
</details>

#### Stakeholders

<details>
 
 - OIT
 - CHAMPVA
   
</details>
