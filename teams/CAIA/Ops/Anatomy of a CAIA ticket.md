# CAIA ticket types and how to use them
`Current WIP Version: V1.0`

## In this Document
- [Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#overview)
- [Ticket Types](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#ticket-types)
    - [CAIA Intake](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#caia-intake)
- [Custom Field Section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#custom-field-section)
- [Ticket Status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#ticket-status)

# Overview

This document details how to create, update, and close a CAIA ticket, ensuring all the custom field data is correctly entered.

## CAIA Github terms and definitions

<details><summary>Toggle to view definitions of Github vocabulary</summary>

| **Term** | Definition |
|------------------------|------------------|
| **Issue**                   | An issue is a discreet, well defined unit of work for a team or project. In Github, they are synonymous with tickets - that is, a ticket will usually contain a single well defined issue.| 
| **Ticket**                   | Tickets contain the details of the issue and the steps or work required to meet the definition of done.|
| **Epic**                   |     An overarching "bucket" of work that contains individual `Issues`. CAIA uses Epics to group work by product. | 
| **Task**                   |     In Github, a task is an individual work item, usually assignable to someone, who will then complete that item and check it off. Tasks can be used as a simple checklist, or converted into issues. Task lists can connect to existing issues as well as tasks converted into issues. An issue can appear in multiple task lists, simply by connecting it with the issue number. Regardless if a task is a plain text task or an issue, when it is unchecked, it is open and when it is checked, it is closed. The tickets that are connected to tasks are tracking tasks. GHP will show the number of tasks completed in an issue, and the overall progress as a percentage. You can also use multiple task lists in one ticket for different parts of your project. [Learn more about tasks from GitHub.](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) | 
| **Repository**                   |     A place where a project’s files, version history, and resources live. CAIA operates in the VA.gov-team repository.| 
| **Pipeline**                   |     A pipeline is a collection or series of workflows that defines the status of work being done at a given point in the work process. The CAIA Pipeline consists of distinct stages that help define the status of work while it is with our team. The starting point for our pipeline is `New Intakes` and the end point is `Closed`.| 
| **Refinement**                   |     The process of reviewing and assessing tickets in the various stages of the CAIA pipeline (Ready, Backlog, etc.) in an effort to progress them through the pipeline to a closed status. | 

</details>

# Ticket Types
There are 2 types of tickets that CAIA will use in its pipeline:

- [CAIA Intake Request]([https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2C+coforma-terry&labels=sitewide+CAIA%2C+sitewide+content-product+support&projects=&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2CNaomiPMC&labels=sitewide+CAIA&projects=&template=CAIA-intake-form.md&title=%5BCAIA+Intake%5D+%3CTeam+Name%3E%3A+%3CInitiative+Name%3E)).  This is the intake template for teams to request collaboration with CAIA. During refinement, CAIA will attach new child tickets to capture work needed from each CAIA discipline.
- CAIA child ticket: This is the issue created by CAIA, based on an intake or stakeholder request, that outlines the specific work needed from the assignee.

These two types can be view separately on our board: 
- Child tickets: [Task Table](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1) and [Task Board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/74)
- Intakes and Epics: [High Level Table](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/75) and [High Level Board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/72)

When a ticket is created, it automatically assigns `Naomi` and `Lily` and adds the `sitewide CAIA` label. This label triggers GitHub Projects to pull the ticket into CAIA's view, and adds it to the `New Intakes` [lane on the main board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1). A ticket must have the `sitewide CAIA` label to exist in GH Projects!

### CAIA intake

### Title
The title section contains the name of the ticket with the following naming convention:

- [CAIA intake] is used to distinguish the ticket type
- Child tickets can be named in whatever way makes sense, but it's good to keep it brief and include the name of the tool/product for easier scanning

### Custom Field Section
This section contains field data that is important for filtering and tracking issues within the CAIA pipeline. This includes:

- **Assignees** - Shows who is responsible for the work being done on the ticket. This should be used only for the person actively working on the ticket, not for general awareness (if you need to flag a ticket for someone's awareness, tag them in a comment). As a ticket moves through the work process, the assignee may change. For example, a content ticket will be handed off from an editor to a writer to a copyeditor--to make it obvious who is actively responsible for work, we won't keep all three of those people assigned the whole time.
- **Labels** - Sometimes known as tags. These allow for CAIA to 'tag' which discipline needs to be involved with the work. Current labels for CAIA are:
  - sitewide CAIA
  - sitewide content
  - sitewide IA
  - sitewide accessibility
  - CAIA translation 
  - CAIA-a11y-research (used to denote CAIA research involvement for Assistive Technology support)
- **Milestone** - not currently used
- **Opened Date** - the date the ticket was created - this is auto generated by Github, however, the default data cannot be used to filter issues on the board
- **Linked pull requests** - not used
- **Repository** - the Github repository in which the ticket was created
- **Closed Date** - the date the ticket was closed - when closing a ticket, be sure to fill out this field!
- **Target date** - we don't use this consistently. It has been used to track both product team launch dates and general internal CAIA deadlines.
- **Estimate** - the level of effort required for this ticket. Only used on Task tickets, not Epics. Level of effort is determined using basic tee shirt sizes based on the time it would take to complete the work iteself (not including waiting on SMEs or stakeholders, back and forth with OCTO, etc.):
  - **Small** for 1-5 days - Redirects, deprecating a page
  - **Medium** for 2-4 weeks - Best bets, React Widgets
  - **Large** for 1-3 months - Launching a new tool
  - **Extra large** for 4+ months -  Migration audit
- **Priority** - used to indicate how urgent a piece of work is, based on the following scale
  - **High** - top priority, work should begin immediately
  - **Medium** - important but not as urgent as high priority
  - **Normal** - default, regular priority
  - **Low** - not urgent, does not require immediate work. This can be used for items in backlog without current work or actionable next steps yet
  - **Chipper** - special status for work that is generally not a high priority item but that can be worked on as time and capacity allows. Generally long-term initiatives and items with no fixed deadline
- **Sprint** - Used for planning when the work in this ticket should be scheduled
- **Blocked by** - used to indicate which OCTO crew is blocking the work
- **Reason Blocked** - general text field to  add detail to the reason the ticket is blocked
- **Originator/Team** - shows the team or stakeholder requesting the work
- **Last Checked** - used to show the last time a ticket was checked, typically in backlog or blocked to ensure tickets do not go stale in the pipeline

## Ticket Status
- Status - the following tickets statuses exist in CAIA and relate to which swim lane the ticket will be in in the [Main Board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/46) view in Github Projects.
  -  **New Intakes** - default lane for all new work that is submitted
  -  **Epics** - used to group tickets related to the same product. Epics themself do not usually contain any direct work, rather they are a bucket for related intakes or child tickets where individual work is being tracked.
  -  **Backlog** - items not currently being worked on - usually of a lower priority
  -  **OCTO Audits** - tickets created by OCTO leadership - usually audit work
  -  **Blocked** - issues where work has been forced to stop due to blockers. Can include the following:
      -  Waiting on stakeholder
      -  Waiting on another team or CAIA discipline to complete work
      -  Waiting on a decision or review by OCTO or VBA
      -  Missing or incomplete artifacts required to complete work
  -  **Ready** - issue has been refined and is ready to begin work on
  -  **In Progress** - work is currently being carried out
  -  **Validate** - for cases where a product or page is published, but needs additional review to ensure there are no bugs or stakeholder changes, or similar instances where CAIA work is complete but followup from the product team/OCTO is required. This should be noted in the ticket. 
  -  **Closed** - work completed for this issue. Updates are live, the product has launched, or feedback or deliverables have been provided to the team. Anyone assigned to a ticket can close and record it in the [capacity spreadsheet](https://docs.google.com/spreadsheets/d/1D1gNZlAIYbOIL9epKA_AadT5rdDCIu5IweRbRxDf288/edit#gid=623845405).
  -  
## Closing Tickets
If  CAIA work on a ticket has been completed, the person working on that ticket can move the ticket to `validate`, or if no validation is required, a ticket can be moved directly to closed and recorded in the capacity tracker.

- If the work on a ticket is complete (for example, an updated page is live or a deliverable has been sent to a stakeholder), you can move the ticket to `closed`.
- Tickets that are closed should have all of their fields completed, prior to closing out the ticket.
- Tickets that are closed should be added to the [capacity tracker]([url](https://docs.google.com/spreadsheets/d/1D1gNZlAIYbOIL9epKA_AadT5rdDCIu5IweRbRxDf288/edit#gid=623845405)), for the assignees involved.
- A ticket should only be moved to `validate` if there is specific validation criteria (for example, a when launching a new tool that needs a short window of time post-launch for the product team to spot bugs or review live pages). In this case, please revisit and close once followup is complete.







