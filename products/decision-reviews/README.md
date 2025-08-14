### Last updated: 7/31/2025
----
# Table of Contents

Click the link to navigate to a section.👇
- [Executive Summary](#executive-summary)
- [Stakeholders](#stakeholders)
- [Vision](#vision)
- [Mission Critical Challenges](#mission-critical-challenges)
- [Product Strategy](#product-strategy)
- [Project Initiatives](#project-initiatives)
- [Outcome Driven Roadmap](#outcome-driven-roadmap)
- [Planning Boards](#planning-boards)
- [Decision Reviews Service Diagrams](#decision-reviews-service-diagrams)
- [Access and Testing](#access-and-testing)
- [User Logins](#user-logins)
- [Test Rail](#test-rail)
- [Defect Triage Process](#defect-triage-process)
- [Analysis Steps](#analysis-steps)
- [Status Codes and Error Messages](#status-codes-and-error-messages)

# Executive Summary

In 2023, VA.gov achieved the major milestone of releasing of all decision review forms on VA.gov, enabling Veterans to file for reviews and appeals to decisions about their claims via self-service. With the MVP product line now in place, the product strategy will prioritize stability, transaction growth, and a holistic, personalized experience. Decisions that inform roadmap priorities, experiment scope, and KPIs are made based on their potential to help Veterans accomplish their top Decision Review tasks, increase VA.gov transactions resulting in favorable outcomes, and improve transaction integrity. 

## Stakeholders  (NEEDS REVIEW)
| Team / Business Line    | Contact(s)               | Role                                 | This Person Helps With....                                                                                             |
|-------------------------|--------------------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Lighthouse              | Michael Hobson           | Decision Reviews API Product Manager | Questions about API requirements, prioritization for initiatives requiring an endpoint.                                |
| VBA                     | Andrew Gray            | Business Analyst                     | SME for policy and legal requirements pertaining to Supplemental Claim and Request for Board Appeal forms.             |
| VBA                     | Alejandro Mendelioflores               | Business Analyst                     | End-to-end testing in lower environments, contact for Doma and Data Dimensions teams, general CMP/EMMS API questions.  |
| BVA                     | John Gosnell             | POC for the Board                    | Primary stakeholder / decision maker for the Board.                                                                    |
| BVA                     | William Rollins          | BVA Intake team member               | SME for Board Appeal intake processes and legal constraints.                                                           |
| Centralized Mail Portal | Melissa Feidler          | Team Contact                         | Contact for Doma and Data Dimensions teams, CMP/EMMS API questions pertaining to requirements.                         |
| Caseflow                | Anita Lutonsky           | Team Contact                         | Questions about Caseflow capabilities, APIs, and requirements.                                                         |

## Vision (NEEDS REVIEW)
Our vision for the next stage of the product line's journey is to transform Decision Reviews from individual forms with sporadic content, into a personalized experience rivaling the value Veterans get from VSOs and accredited representatives. On VA.gov, we will offer Veterans the benefits they often seek VSOs for without introducing risks into their filing process by adding them to the in-line form experience while also making it clear that we are building these forms and submitting them on their behalf so the value is not hidden in the design. The Decision Review product line will transform into an easy-to-explore, trustworthy hub that provides the most sought-after resources for understanding the differences between each decision review pathway, determining appeal eligibility and filing readiness to reduce undesired outcomes, and filing personalized claims confidently. No hacks or “gotchas”.

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

## Product Strategy (NEEDS REVIEW)
Our latest research into the challenges faced by Veterans on VA.gov indicates that many visit static content and forms seeking answers to nuanced questions appeals, or to have a desire to file a decision review with the most compelling narrative and evidence possible. Many are unsatisfied with the website's performance, unyielding search tools, complex static content, and confusing navigation experience, leading to form and search abandonment, low content engagement, high page exits, site bounces, and low CSAT scores.

To address these, we aim to incrementally build distinct flows to accommodate cohorts of users based on the tasks they set out to complete while visiting Decision Review static content and forms. 
- File a decision review with a compelling narrative
- Understand the differences between decision reviews
- Determine if a decision is eligible for a decision review
- Speak to someone about a decision review that is in progress

These task categories may be interpreted as sets of "jobs to be done", iterated through design experiments to refine our understanding of the problems and symptoms contributing to each and design solutions that are accessible to the broadest audience possible. To execute our strategy, we propose working "outwards" from the individual forms to balance quick wins and independent work against strategic initiatives that require collaboration across teams. 

## Project Initiatives

### Q4 FY 2025 Quarterly Goals (July 2025 - September 2025)

#### Goal 1: Selecting a decision review option (AMA Onramp)

- Veterans know which decision review option(s) are most suitable for their situation.
- Success Metrics: We've gathered input from VA stakeholders and Veterans on the onramp to DR selection tool, cueing up delivery in Q1 FY25.
- Super Epic: [Support Veterans in choosing a Decision Review Pathway that leads to the best outcomes - AMA Decision Review Option Tool #1080] (https://github.com/department-of-veterans-affairs/digital-experience-products/issues/1080)
- Tasks:
   - Building the prototype
   - Conducting user research

#### Goal 2: Update the VA 10182 Form

- Veterans are submitting VA Form 10182 Board Appeal Request (Notice of Disagreement) on the latest form version.
- Success Metrics: 100% of Veterans submitting VA Form 10182 on VA.gov are doing so on the Feb 2025 version of the form.
- Super Epic: [Update VA Form 10182 to the latest version #115151] (https://github.com/department-of-veterans-affairs/va.gov-team/issues/115151)
- Tasks:
   - Update the version information in the 10182 form
 
#### Goal 3: DR form submission status on MyVA

- Veterans can view the status of their decision review form and evidence submission in MyVA dashboard.
- Success Metrics: We've begun implementation to surface DR submission statuses in MyVA, following integration guidance from the MyVA team, so users can confirm their DR has been received by VA or take action if not.
- Super Epic: [Veterans can view the status of their decision review form and evidence submission in MyVA dashboard #110583] (https://github.com/department-of-veterans-affairs/va.gov-team/issues/110583)
- Tasks:
   - TBD (Will be created once we have implementation guidance)
 
#### Goal 4: VA employees have visibility into decision review failure emails sent by VA.gov

- VA employees have visibility into decision review failure emails sent by VA.gov.
- Success Metrics: We've landed on an interim solution to meet the Board's needs and/or finalized an implementation approach that other teams within the portfolio can adopt.
- Super Epic: [VA employees have visibility into decision review failure emails sent by VA.gov #110581] (https://github.com/department-of-veterans-affairs/va.gov-team/issues/110581)
- Tasks:
   - TBD (Will be created once we have implementation approach has been decided)
 
#### Stretch Goal 5: Analysis of user pain points (Call Center, Medallia, etc)

- We've analyzed and synthesized top user pain points from call center data, Medallia survey data, and past research pertaining to decision reviews.
- Success Metrics: We've documented research findings and recommendations.
- Epic: [Analyze and synthesize top user pain points from call center data, Medallia survey data, and past research #115215] (https://github.com/department-of-veterans-affairs/va.gov-team/issues/115215)
- Tasks:
   - TBD
 

---

### Q3 FY 2025 Quarterly Goals (April 2025 - June 2025)

#### Goal 1: Selecting a decision review option (AMA Onramp)

- Veterans know which decision review option to choose that will lead to the best outcomes,
- Determine most suitable metric to measure impact,
- Gather baseline data
- (OCTO OKR 1.1)

#### Goal 2: Update the 4142

- Veterans can submit 4142s on VA.gov using the most up-to-date form
- Current 4142 form is out of date and needs to be updated
- The legalese is different on the paper form and digital form
- (BP KR 1)

#### Goal 3: Understand uploading failure email notifications

- We understand the feasibility of uploading failure email notifications to the Veteran’s eFolder
- (OCTO OKR 1.3)

#### Goal 4: Understand showing DR form submission status on MyVA

- We understand feasibility of showing decision review form submission status on the My VA dashboard
- (OCTO 1.3)

#### Stretch Goal 5: Avoid sending failure emails erroneously

- We avoid sending failure emails to Veterans erroneously
- With better categorization of unrecoverable & recoverable downstream errors
- Need Lighthouse coordination
- (OCTO OKR 1.3)


---
# HERE DOWN NEEDS REVIEW AND UPDATING!

## Outcome Driven Roadmap
### Last Updated: NEEDS UPDATING

**Note: ⚠️ This is a WIP Draft. Please reach out to the product manager via Slack in #benefits-decision-reviews.**

- Decision Reviews Quarterly Roadmap

## Planning Boards
- Sprint Planning and Prioritization Board

# Decision Reviews Service Diagrams
- [Request A Board Appeal](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686860506968/58cf67b56dfb12c9337cdd7b110dbf6182a55516?invited=true&sender=02d71842-45b3-44df-b5bd-b1399d0ba73e)
- [Supplemental Claims](https://app.mural.co/t/departmentofveteransaffairs9999/m/adhoccorporateworkspace2583/1654096034291/25f4086b638b48828941c4d6aa330f1df1c9527a?sender=66cfcd80-684f-490f-a034-1540c801ca34)
- [Higher-Level Review](https://app.mural.co/t/departmentofveteransaffairs9999/m/lighthouseapiplatform7991/1631736307705/31e23e9b9754a0ffceecdc2f037dc86976553b08?sender=u0d70ac6e87daa7c066838517)

# User Logins
### Test User Dashboard (TUD) requires SOCKS access

- [TUD User Logins](https://tud.vfs.va.gov/?page=1)

# Test Rail
- [Test Rail](https://dsvavsp.testrail.io/index.php?/suites/view/6&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)

# Defect Triage Process

## Severity Criteria
Below are factors to consider when labeling severity for Decision Review bugs.

| Severity | Description |
|----------|-------------|
| **Critical** | - All users impacted<br>- Inability to complete the expected action<br>- Data integrity at risk, no backup pathway (appeals missing parts of the payload, effective date at risk, appeals not submitting/establishing)<br>- Data security at risk<br>- Special case: congressional inquiry<br>- Requires pickup in the current sprint |
| **Moderate** | - Some users impacted<br>- Ability to complete the expected action, but with gross flaws<br>- Data integrity has a backup pathway (ex: off-ramped to regional office or CMP)<br>- Data security not at risk<br>- Requires pickup in the next sprint |
| **Minor** | - Spelling errors<br>- Design blemishes<br>- Requires pickup in the next 1-3 sprints |

--- 

## Analysis Steps
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

# Status Codes and Error Messages

- [Supplemental Claim](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/engineering/SC_frontend_backend_interactions.md)
- [Request a Board Appeal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/engineering/NOD_frontend_backend_interactions.md)
- [Higher-Level Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/engineering/HLR_frontend_backend_interactions.md)

-------

[Depreciated Decision Reviews README file] ()
