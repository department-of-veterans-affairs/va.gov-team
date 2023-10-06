### Last updated: 10/2/2023
----
# Table of Contents
- [Executive Summary](#executive-summary)
- [Team](#team)
- [Product Strategy](#product-strategy)
- [Vision](#vision)
- [Mission](#mission)
- [Diagnosis, Guiding Policy, and Solution Approach](#diagnosis-guiding-policy-and-solution-approach)
- [Roadmap - 30,000 Foot View](#roadmap-30,000-foot-view)
- [Roadmap - Tactical View](#roadmap---tactical-view)
- [Initiatives](#initiatives)
- [Epics](#epics)
- [Milestones](#milestones)
- [Success Measures](#success-measures)
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
## Team
## Product Strategy
## Vision
**For Veterans seeking the most accessible method of filing an appeal, the Decision Review experience stands as an unparalleled, empowering, and seamless resource, ensuring swift and efficient filing. No hacks or "gotchas".**

Our vision for the future gives way to filing experience that puts Veterans in the driver’s seat of their appeals. No other online experience provides the accessibility and access to claim data that VA.gov offers. By filing appeals online, Veteran’s can:
- Understand how their claim history effects their appeal 
- Learn about their appeal options through the lens of their unique service and healthcare history
- Invite supporters into the experience
- Trust that their appeal is transmitted securely and reliably

## Mission
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

## Diagnosis, Guiding Policy, and Solution Approach
### SWOT Themes
|Strengths|Weaknesses|Opportunities|Threats|
|---|---|---|---|
|Accessible to a wide audience of Veterans|Login and IA|VRO for building APIs and connecting appeals to PACT data|Product ownership split across teams|
|Access to claim data|Discoverability|Solutions between 526 and appeals are scalable|No alignment across agencies, POs, or teams|
|SME approved resources|Actions that delay the claim process (Ex: Duplicate claims, filing claims for a large number of issues)|More VFS resources to support shared outcomes|No centralized logging and monitoring|
|Task management features|Logging and monitoring|N/A|N/A|

## Guiding Policy

## Solution 

## Roadmap - 30,000 Foot View
|Q1 (Oct-Dec 2023)|Next|Pre-Decisional|
|---|---|---|
|Connecting Use Cases (NOD)
## Roadmap - Tactical View
# Initiatives
## Epics
## Milestones
## Success Measures
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
