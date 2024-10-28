# CAIA Refinement Process
`Last updated 10/2024`

## In this document
- [Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#overview)
  - [Purpose of this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#purpose-of-this-document)
  - [Purpose of Refinement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#purpose-of-caia-ops-refinement)
- [Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#process)
  - [CAIA Ops Refinement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#caia-ops-refinement)
  - [OCTO Planning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#octo-planning)
  - [CAIA Discipline Planning](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#caia-discipline-planning)
  - [CAIA Board Management](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#caia-board-management)
  - [CAIA Validate and Close](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#caia-validate-and-close)


## Overview

### Purpose of this document
This document serves as instruction and guidance for conducting CAIA refinement.

### Purpose of Refinement
CAIA refinement focuses on adding detail/context, estimating, and prioritizing intake tickets in "New Intakes", as well as reviewing items in "Backlog" and "Blocked". Refinement is an essential part of the effective management and prioritization of work and makes us aware of and better able to plan for new work as it enters the CAIA pipeline.

Primary outcomes of CAIA Refinement:
- Reviewing all new requests in "New Intakes" column
- Filling out ticket custom fields with relevant data
- Identifying which disciplines or individual contributors should be involved in the work
- Flagging items for prioritization review with OCTO
- Responding to requesting teams for clarification or context
- Ensuring items in blocked and backlog do not go stale and get forgotten

## Process
There are 4 stages of Refinement, to account for CAIA's multi-disciplinary setup and our reliance on OCTO for ongoing prioritization.
1. CAIA Ops Refinement
2. OCTO Planning
3. CAIA Discipline Planning
4. CAIA Board Management

### CAIA Ops Refinement

- **Goal:** Intake tickets have task tickets. We understand what the work is.
- **Audience:** CAIA Delivery Lead, CAIA Product Manager, Accessibility Lead, IA Lead
- **Frequency:** Weekly on Monday

**Agenda:**

Review [New Intakes Column](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/78)
- Add “CAIA-Intake” label
- Add Originator/Team Name
- Add Opened Date
- Add Target Date (if applicable)
- Add Estimate (if easily ascertained)
- Add to Sprint (if applicable)
- Post follow-up questions to teams in a comment in the intake
- Apply discipline labels 
- Add task list to outline handoff between discipline specialists
- Assign individuals (if known at this point)
- Review and close Intake tickets in Validate

<details close>
  <summary>Additional steps for specific intake types</summary>
  
- Redirect requests are treated as work tickets and should move through work ticket swim lanes
- If team is publishing a new page or launching a new page, set up a work ticket for the entry point work (this includes crosslinks from other pages and left nav and top nav placement). Use the IA document provided by the IA team and list out each page the team needs to add an entry point. An example entry point ticket is [here](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/28677).
- If a new tool is launching incrementally, a React widget needs to be added to the page. Set up a ticket to implement the work. More info on react widgets [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/sitewide-content/processes/dynamic-content-process.md).
- If request is related to MHV, tag Sara Sterkenburg (@sterkenburgsara) and Riley Orr (@rileyorr)
- If team has selected “no” on collab cycle checkbox, share in the Governance Slack channel to confirm they dont need to go through collab cycle
- If the ticket is related to HEALTH, triage whether it goes to Sara Sterkenberg (Cartography team) or Kristin Ouellette (CAIA)
- If the url of the tool/page starts with /health-care/, it goes to Kristin (tag Kristin and Sitewide IA)
- If the url starts with myhealth, it goes to Sara (tag Sara and Cartography team)
  
</details>

### OCTO Planning

- **Goal:** We have confirmed what we are working on and know the priority order.
- **Audience:** CAIA Delivery Lead, CAIA Product Manager, OCTO Lead (Danielle Thierry)
- **Frequency:** 30 minutes every two weeks (once per sprint)

**Agenda:**

Review [Collaboration Cycle intakes](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/12?filterQuery=no%3Acaia+-status%3AClosed%2C%22Post+Staging+Review%22+-label%3A%22CAIA-Collab%22+)
- Determine whether CAIA needs to be involved
- If CAIA work is needed, create an intake on the CAIA board using the CAIA intake template
  - If CAIA already has related work, cross-link CC intake to CAIA intake
- Add the CC intake to the CAIA intake as a sub-issue or hyperlink
- Add "CAIA-collab" label to CC intake OR select "Involved" in the "CAIA" column (working this out with Shira)
- Reach out to product team in a comment in the CC intake to share the CAIA intake and ask about timeline

Review CAIA intakes 
- Confirm we should take on this work.
- For requests related to any non-Veteran forms, respond with: “This is a non-Veteran-facing form. Our IA team will review and provide placement direction. Our content and IA team will provide guidance on the H1 to ensure that it does not compete or cause confusion with any Veteran-facing forms. Beyond that, we cannot provide additional UX flow or content support.”
- Review priority against Benefits PO Sharepoint spreadsheet or any additional context from Danielle.
- Review IC workload and capacity against prioritization
- If work cannot be taken on, plan messaging to product team and other resources to send them to.

### CAIA Discipline Planning

- **Goal:** Individual contributors are assigned and understand the work described in the ticket and what priority order they should tackle tickets in.
- **Audience:** 
  - A11y planning - CAIA Delivery Lead + Accessibility Lead + full accessibility team + OCTO A11y Lead (Martha Wilkes)
  - IA planning - CAIA Delivery Lead + IA Lead + Optional OCTO IA Lead (Mikki Northuis)
  - Content planning - CAIA Product Manager + Content Leads
- **Frequency:** 30 minutes every week

**Agenda:**

Planning and load balancing:
- Review intake tickets tagged with discipline labels 
- Assign individual contributors to intakes
- Create child task tickets and assign to individual contributors (all intake should have at least one child task ticket)
- Each task ticket should have one specialist assigned (except A11y)
- Review Individual Contributor tabs and/or consult other capacity tracking to plan timing for new work against existing work
- Confirm to team we are working on it, if applicable
- Send message to schedule kickoff, if applicable
- Move to “Ready” column, if applicable


### CAIA Board Management

- **Goal:** Issues do not go stale or slip through the cracks on our board.
- **Audience:** CAIA Delivery Lead, CAIA Product Manager
- **Frequency:** Monthly, async

**Agenda:**

**Review Blocked Items **
- Check the comments for any project updates
- Check the “Reason Blocked” field 
- Share in Slack with the CAIA assignee  to see if it is still Blocked and if any action should be taken
- Comment in ticket reflecting this followup and any next steps that might result from it
- Update the “Last Checked” date
- If an issue has been in Blocked for more than 6 months, and we’ve reached out to the requesting team again and gotten no answer, share with OCTO in Slack to follow up on.
- If an issue has been in Blocked for more than 6 months and does not have a requesting team (ie, is generated by OCTO request or CAIA work), move to Icebox if it does not have a clear timeline or next steps.

**Review Backlog Items **
- Determine if item is still deprioritized (by viewing comments or reaching out to assignees via Slack)
- Update estimates or priority level, if applicable
- Update the “Last Checked” date
- If an issue has been in Backlog more than 6 months and does not have a clear timeline or next steps, move it to Icebox.

**Review Icebox Items **
- Share in Slack with the CAIA assignee or OCTO lead to see if it is still required/relevant
- Comment in ticket reflecting this followup and any next steps that might result from it
- Update the “Last Checked” date 
- If an issue has been in Icebox for more than 6 months and we’ve reached out to the requesting team again and gotten no answer, share with OCTO in Slack to determine if it can be closed.

### CAIA Validate and Close

- **Goal:** Completed issues are closed and tracked in the CAIA Capacity spreadsheet.
- **Audience:** CAIA Discipline Leads
- **Frequency:** Weekly, async

**Agenda:**

These instructions are also included in [CAIA Tickets and How To Use Them](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Tickets%20and%20How%20To%20Use%20Them.md).

**Review Validate Items**

- Remember to check the Validate column in both the [Work Ticket View](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1) and the [Intake View](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/75)
- Confirm that all work tickets attached to an intake are closed
- If a ticket is not ready for closure, add a comment explaining why and next steps, and move the ticket to an active status swimlane (such as In Progress or Blocked)
- Add closed intakes and their attached work tickets to the [CAIA metric spreadsheet](https://docs.google.com/spreadsheets/d/1D1gNZlAIYbOIL9epKA_AadT5rdDCIu5IweRbRxDf288/edit?gid=1091370068#gid=1091370068) in the relevant sprint tab.
- Note: to close a ticket, you need to use "Close issue" button in the comments section of the ticket. Unfortunately, just dragging the ticket into the "Closed" column does not actually close the ticket.
