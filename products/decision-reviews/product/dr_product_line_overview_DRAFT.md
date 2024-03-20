### Last updated: 3/20/2024
----
# Table of Contents
- [Executive Summary](#executive-summary)
- [Team](#team)
- [Vision](#vision)
- [Mission Critical Challenges](#mission-critical-challenges)
- [Product Strategy](#product-strategy)
- [Potential Initiatives](#potential-initiatives)
- [Outcome-Based Roadmap](#outcome-based-roadmap)
- [Planning Boards](#planning-boards)
- [Service Flow Mapping](#service-flow-mapping)
- [Access and Testing](#access-and-testing)
- [User Logins](#user-logins)
- [Test Rail](#test-rail)
- [Defect Triage Process](#defect-triage-process)
- [Status Codes and Error Messages](#status-codes-and-error-messages)
- [Analysis Steps](#analysis-steps)
- [Bug Categorization](#bug-categorization)
- [Frontend](#frontend)
- [Backend](#backend)
- [Platform](#platform)
- [Code Yellow Procedure](#code-yellow-procedure)
# Executive Summary

In 2023, VA.gov achieved the major milestone of releasing of all decision review forms on VA.gov, enabling Veterans to file for reviews and appeals to decisions about their claims via self-service. With the MVP product line now in place, the product strategy will prioritize stability, transaction growth, and a holistic, personalized experience. Decisions that inform roadmap priorities, experiment scope, and KPIs are made based on their potential to help Veterans accomplish their top Decision Review tasks, increase VA.gov transactions resulting in favorable outcomes, and improve transaction integrity. 

## Team
Lighthouse, CMP, Data Dimensions, Doma, Caseflow, VBA, and BVA

## Vision
Our vision for the next stage of the product line's journey is to transform Decision Reviews from individual forms with sporadic content,into a personalized experience rivaling the value Veterans get from VSOs and accredited representatives. On VA.gov, we will offer Veterans the benefits they often seek VSOs for without introducing risks into their filing process by adding them to the in-line form experience while also making it clear that we are building these forms and submitting them on their behalf so the value is not hidden in the design.The Decision Review product line will transform into an easy-to-explore, trustworthy hub that provides the most sought-after resources for understanding the differences between each pathway, determining appeal eligibility and filing readiness to reduce undesired outcomes, and filing personalized claims confidently. No hacks or “gotchas”.

## Mission Critical Challenges
*"This new process is so harsh. Things have changed so much I need to check what options are available now. You can’t always work with someone with these things." - Veteran Research Participant*

Veterans struggle to connect their use case to the Decision Reviews experience on VA.gov. Below are problem themes related to the current experience:

- Confusing login experience 
- Page load issues make navigation difficult
- Forms are not easy to find
- No singular entry point into the decision review experience
- User experience blends pathways for learners and doers
- Lots of content with no connection to why it matters to the Veteran
- Deadlines and actions are hidden or lost in correspondence letters
- Service downtime
- Confusing / missing actionable error messages

## Product Strategy
Our latest research into the challenges faced by Veterans on VA.gov indicates that many visit static content and forms seeking answers to nuanced questions appeals, or to have a desire to file a decision review with the most compelling narrative and evidence possible. Many are unsatisfied with the website's performance, unyielding search tools, complex static content, and confusing navigation experience, leading to form and search abandonment, low content engagement, high page exits, site bounces, and low CSAT scores.
To address these, we aim to incrementally build distinct flows to accommodate cohorts of users based on the tasks they set out to complete while visiting Decision Review static content and forms. 
- File a decision review with a compelling narrative
- Understand the differences between decision reviews
- Determine if a decision is eligible for a decision review
- Speak to someone about a decision review that is in progress

These task categories may be interpreted as sets of "jobs to be done", iterated through design experiments to refine our understanding of the problems and symptoms contributing to each and design solutions that are accessible to the broadest audience possible.

## Potential Initiatives
To execute our strategy, we propose working outwards from the individual forms to balance quick wins against strategic initiatives that require collaboration across teams.

<details closed>
<summary>In-line Statement in Support of a Claim (VA Form 21-4138)</summary>
<br>

**Proposed Value**: A significant portion of qualitative Medallia feedback shows that Veterans are frustrated by their inability to explain why they are submitting a decision review. Many mistakenly believe that the survey can be used for this purpose and add their narrative and claim details, and personal information to the survey's text field in hopes that someone will contact them about their decision review. Form 4138 is one of the most common forms Veterans and VSOs use to explain service connection and evidence submitted with a claim or appeal, and is amongst the top three forms submitted with a decision review, including supplemental claims that receive a favorable decision. 

**Core Bet**: We believe if Veterans know this form is built into the current filing experience, they will be more likely to submit a decision review on VA.gov. 	

**Solution Approach Nuggets**
- Integrate the 4138 form text field into each DR form
- Remove small text fields on forms that contribute to form abandonment
- Use content to inform Veterans that we are submitting this form on their behalf
- Generate and submit the PDF as an ancillary form 

**Feasibility and Risk**: We have previously built in-line ancillary forms for other decision reviews, for example 20-0995 includes 0966 and 21-4142 as automated and seamless steps within the form, and have tested the usability of this approach. Much of the code can be borrowed from existing features. Code for this feature will be added to our existing suite of tests and transaction observability tools quickly. Combined, this reduces the overall cost of shipping the feature.

**Desired Outcome(s)**
- Increase in VA.gov form submission
- Increase CSAT scores 

**Performance Indicators**
- Conversion rates for users who visit this URL in the form funnel
- Reduction in form exits on form URLs with small text boxes
- Reduction in low quantitative CSAT scores on form URLs
- Reduction in qualitative CSAT feedback on form URLs from Veterans leaving claim narratives in the survey 

</details>

<details closed>
<summary>Veteran Service History and Eligibility: PACT Flashes</summary>
<br>

**Proposed Value**: Veterans who were previously denied PACT benefits due to an inability to connect their disability to their time in service may feel more confident about filing a supplemental claim if they know VA has reviewed their military history for eligibility. Relatedly, feedback in VA.gov surveys from static content pages in the "Decision Review" and "Resources" sections show that Veterans are still confused about their eligibility for PACT benefits, and they're not finding the answers they seek on these pages, resulting in site bounces, form exits, and low CSAT scores. 

**Core Bet**: We believe if Veterans see their eligibility when they view the online Supplemental Claim form, they will be more likely to submit a decision review on VA.gov. 	

**Solution Approach Nuggets**
Use flash data available in the Veteran Service History and Eligibility API
Insert an alert at on the form’s /introduction URL
Add content explaining how the data was gathered and encourage Veterans to submit a Supplemental Claim

**Feasibility and Risk**: Data used to create the API “flashes” may not account for Veterans who have already submitted a PACT Supplemental Claim. Content needs to be tested for usability.

**Desired Outcome(s)**
- Increase in VA.gov PACT submissions resulting in a favorable outcome
- Increase CSAT scores 

**Performance Indicators**
- Conversion rates for users with PACT flashes who visit this URL in the form funnel
- Reduction in form exits on /introduction URL
- Reduction in low quantitative CSAT scores on form’s URLs
- Increased percentage of PACT supplemental claims filed on VA.gov vs. paper submissions

</details>

<details closed>
<summary>Backup Process and Transaction Observability</summary>
<br>
**Proposed Value**: Due to the various integrated services that steward our data, VA.gov submissions are always at risk of experiencing transient errors or code changes that can cause silent failures. An ideal backup process will provide a clear path to diagnosis and recovery, and reduce costs incurred by: lengthy technical discovery, time spent waiting for diagnostic data, custom code solutions, manual processes, administrative overhead, and human error.

**Use Cases**
A Veteran believes they submitted a decision review with evidence and/or ancillary forms. Unbeknownst to them: 
- Scenario 1: The decision review PDF succeeded, but evidence and/or ancillary forms failed. Their claim is at risk of unfavorable outcomes. Business lines are at risk of legal action against them.
- Scenario 2: Both the decision review PDF AND evidence and/or ancillary forms failed. Their claim has not been recieved by VA and is not being processed, causing confusion, frustration, low trust, and duplicate submissions. 

**Solution Approach**: A comprehensive backup process should accomplish the following:

_Diagnosis_
- Transactions are fully observable through storage in VBMS.
- We're alerted as soon as possible when data fails at any stage in the transaction.
- Logs tell us exactly when and where data failed, including all downstream systems.
- Logs don't have false signals that misdirect our time and attention (examples: errors that are triaged by a downstream team or statuses that aren't reliable). 
- Logs can be revisited indefinitely, no re-hydration needed, no time restrictions.
- All original submission data is secure and retrieveable with no time restrictions.

_Communication_
- Veterans are made aware as soon as possible using the email they provided, including: what happened, what data was impacted, and any actions they can take.
- Claim processors and busines lines are made aware of the error and any data affected.

_Automatic Remediation_
- Data is enqueued and scheduled to retry in the order that it was recieved.
- The original submission date is preserved so as not to affect the date of award.
- Claims can be mapped to evidence and/or ancillary forms through a reliable common identifier (not timestamps).
- Retries don't silently stop or endlessly continue.
- Retry exhaustion is logged and triggers both a Watchtower and team notification.

_Manual Remediation_
- There is an established and time bound process, approved by OCTO and the business line.
- Owners are assigned to each step.
- The process is documented for future use, including the Definition of Done for remediation. 

**Desired Outcome(s)**
- Remediation is operationalized, fault tolerant, and scalable with as little manual invervention and custom code needed as possible.
- No transactions accepted by our products have a fatal error.

**Performance Indicators**
- Reduction in recovery time and cost.
- Reduction in new custom code changes needed to manage the functionality.
- Less VA.gov claim delays and unfavorable outcomes compared to paper submissions.
- Increase in number of form and evidence submissions for appeals forms.
- Decrease in transaction time for VA.gov submissions compared to paper.

</details>

## Outcome-Based Roadmap
- (Add a link)

## Planning Boards
- [Sprint Planning and Prioritization Board](https://github.com/orgs/department-of-veterans-affairs/projects/1026/views/1?filterQuery=)
- [Defect Triage Board](https://github.com/orgs/department-of-veterans-affairs/projects/876/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C46447480%2C46447511%2C46447563%2C%22Labels%22%5D)

# Service Flow Mapping
- [Request A Board Appeal](https://app.mural.co/t/departmentofveteransaffairs9999/m/lighthouseapiplatform7991/1631736307705/31e23e9b9754a0ffceecdc2f037dc86976553b08?sender=u0d70ac6e87daa7c066838517)
- [Supplemental Claims](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1654096034291/25f4086b638b48828941c4d6aa330f1df1c9527a?sender=u0d70ac6e87daa7c066838517)
- [Higher-Level Review](https://app.mural.co/t/departmentofveteransaffairs9999/m/lighthouseapiplatform7991/1631736307705/31e23e9b9754a0ffceecdc2f037dc86976553b08?sender=u0d70ac6e87daa7c066838517)
# Access and Testing
## User Logins
## Test Rail
# Defect Triage Process
## Status Codes and Error Messages
## Severity Criteria
Below are factors to consider when labeling severity for Decision Review bugs.

| Severity | Description |
|----------|-------------|
| **Critical** | - All users impacted<br>- Inability to complete the expected action<br>- Data integrity at risk, no backup pathway (appeals missing parts of the payload, effective date at risk, appeals not submitting/establishing)<br>- Data security at risk<br>- Special case: congressional inquiry<br>- Requires pickup in the current sprint |
| **Moderate** | - Some users impacted<br>- Ability to complete the expected action, but with gross flaws<br>- Data integrity has a backup pathway (ex: off-ramped to regional office or CMP)<br>- Data security not at risk<br>- Requires pickup in the next sprint |
| **Minor** | - Spelling errors<br>- Design blemishes<br>- Requires pickup in the next 1-3 sprints |

## Analysis Steps
## Analysis Steps
---
### Start with a time boxed spike, if needed

- Create a spike ticket
- Review the error in sentry and choose a severity label
- Check if there is SIP data, or UUID
- Attempt to reproduce: 1-2 hr time box
- If re-produceable, make a user story and attach it to the spike
- Include supporting details to determine the severity of the issue (number of users impacted, submission failures, device types impacted, monitoring/log details).

### Create a bug user story for verified issues
- Document tasks needed to fix the issue.
- Determine if the issue can be resolved internally or depends on another team. 
- Assign the engineers, product managers, or other stakeholders involved.
- Assign and label the issue to either `squad-1` or `squad-2`.
- Refine the issue with the parties assigned to it. 
- Assign the issue to a sprint.
- Update stakeholders on progress.

### Prioritize the bugs
- Add the issue to the [Decision Reviews Defect Board](https://github.com/orgs/department-of-veterans-affairs/projects/876/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C46447480%2C46447511%2C46447563%2C%22Labels%22%5D)
- If multiple issues have the same severity, add the number of users effected and occurrences
- Assign the issue to a sprint
- Confirm priority with the PO as needed for congressional inquiries and special cases
## Bug Categorization
### Frontend
### Backend
### Platform
### Code Yellow Procedure
