# CAIA Tickets and How To Use Them
`Current WIP Version: V1.0`

## In this Document
- [Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#overview)
- [Ticket Types](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#ticket-types)
- [Custom Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#custom-field-section)
- [Ticket Status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#ticket-status)

# Overview

This document details how to create, update, and close a CAIA ticket, ensuring all the custom field data is correctly entered.

## CAIA Github terms and definitions

| **Term** | Definition |
|------------------------|------------------|
| **Repository**                   |     A place where a project’s files, version history, and resources live. CAIA operates in the VA.gov-team repository.| 
| **Pipeline**                   |     A pipeline is a collection or series of workflows that defines the status of work being done at a given point in the work process. The CAIA Pipeline consists of distinct stages that help define the status of work while it is with our team. The starting point for our pipeline is `New Intakes` and the end point is `Closed`.| 
| **Refinement**                   |     The process of reviewing and assessing tickets in the various stages of the CAIA pipeline (Ready, Backlog, etc.) in an effort to progress them through the pipeline to a closed status. | 
| **Epic**                   |     An overarching "bucket" of work that contains individual `Issues` and/or Intakes. CAIA uses Epics to group work by product. | 
| **Intake**                 | A request from a product team or stakeholder for CAIA support, which will be broken down into individual work tickets. Intakes might also be added to an Epic, if there are other intakes for the same product. |
| **Issue**                   | An issue is a discreet, well defined unit of work for a team or project. In Github, they are synonymous with tickets - that is, a ticket will usually contain a single well defined issue.| 
| **Ticket**                   | Tickets contain the details of the issue and the steps or work required to meet the definition of done.|
| **Task**                   |     In Github, a task is an individual work item that can be checked off when completed. Tasks can be used as a simple checklist or converted into issues. Task lists can connect to existing issues as well as tasks converted into issues. An issue can appear in multiple task lists, simply by connecting it with the issue number. Regardless if a task is a plain text task or an issue, when it is unchecked, it is open and when it is checked, it is closed. The tickets that are connected to tasks are tracking tasks. GHP will show the number of tasks completed in an issue, and the overall progress as a percentage. You can also use multiple task lists in one ticket for different parts of your project. [Learn more about tasks from GitHub.](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) |

</details>

# Ticket Types
There are 2 types of tickets that CAIA will use in its pipeline:

- [CAIA Intake Request]([https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2C+coforma-terry&labels=sitewide+CAIA%2C+sitewide+content-product+support&projects=&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2CNaomiPMC&labels=sitewide+CAIA&projects=&template=CAIA-intake-form.md&title=%5BCAIA+Intake%5D+%3CTeam+Name%3E%3A+%3CInitiative+Name%3E)).  This is the intake template for teams to request collaboration with CAIA. During refinement, CAIA will attach new work tickets to capture individual support tasks needed from each CAIA discipline. You will use the intake ticket to communicate with the product team/stakeholder and share any deliverables.
- CAIA work ticket: This is the issue created by CAIA, based on an intake or stakeholder request, that outlines the specific work needed from an individual contributor (we have also called these "child" or "task" tickets). Product teams can see work tickets attached to their intake, but these work tickets are for you to use. You can add notes in comments to help you track your progress and move the ticket wherever in belongs in the status swim lanes described below.

These two types can be view separately on our board: 
- Work tickets: [Work Table](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1) and [Work Board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/74)
- Intakes and Epics: [Intake Table](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/75) and [Intake Board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/72)

When a ticket is created, it automatically assigns `Naomi` and `Lily` and adds the `sitewide CAIA` label. This label triggers GitHub Projects to pull the ticket into CAIA's view, and adds it to the `New Intakes` [lane on the main board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1). A ticket must have the `sitewide CAIA` label to exist in GH Projects!

### Title
The title section contains the name of the ticket with the following naming convention:

- [CAIA intake] is used to distinguish the ticket type
- Work tickets can be named in whatever way makes sense, but it's good to keep it brief and include the name of the tool/product for easier scanning

# Custom Fields
This section contains field data that is important for filtering and tracking issues within the CAIA pipeline. This includes:

### Required fields
- **Opened Date** - The date the ticket was created. This is auto-generated by Github, but the default data cannot be used to filter issues on the board, so we still need to manually input this date.
- **Closed Date** - the date the ticket was closed. This is not auto-generated, so please be sure to fill out this field when you close a ticket (for content tickets, PDM will do this).
- **Estimate** - the level of effort we think will be required for a ticket. Only used on Task tickets, not Epics. Level of effort is determined using basic tee shirt sizes based on the time it would take to complete the work iteself (not including waiting on SMEs or stakeholders, back and forth with OCTO, etc.):
  - **Small** for 1-5 days - Redirects, deprecating a page
  - **Medium** for 2-4 weeks - Best bets, React Widgets
  - **Large** for 1-3 months - Launching a new tool
  - **Extra large** for 4+ months -  Migration audit
- **Actual** - how much effort was required, once we've completed the work and can asses how big a lift it was
- **Originator/Team** - the team or stakeholder that requested the work

### Additional fields
- **Assignees** - Shows who is responsible for the work being done on the ticket. This should be used only for the person actively working on the ticket, not for general awareness (if you need to flag a ticket for someone's awareness, tag them in a comment). As a ticket moves through the work process, the assignee may change. For example, a content ticket will be handed off from an editor to a writer to a copyeditor--to make it obvious who is actively responsible for work, we won't keep all three of those people assigned the whole time.
- **Labels** - Sometimes known as tags. These allow for CAIA to 'tag' which discipline needs to be involved with the work. Current labels for CAIA are:
  - sitewide CAIA
  - sitewide content
  - sitewide IA
  - sitewide accessibility
  - CAIA translation 
  - CAIA-a11y-research (used to denote CAIA research involvement for Assistive Technology support)
- **Last Checked** - the last time a ticket was checked, especially helpful to track on tickets in backlog or blocked to ensure tickets do not go stale in the pipeline
- **Target date** - we don't use this consistently. It has been used to track both product team launch dates and general internal CAIA deadlines.
- **Priority** - we don't use this consistently, but it can be used to indicate how urgent a piece of work is based on the following scale:
  - **High** - top priority, work should begin immediately
  - **Medium** - important but not as urgent as high priority
  - **Normal** - default, regular priority
  - **Low** - not urgent, does not require immediate work. This can be used for items in backlog without current work or actionable next steps yet
  - **Chipper** - special status for work that is generally not a high priority item but that can be worked on as time and capacity allows. Generally long-term initiatives and items with no fixed deadline
- **Sprint** - Used for planning when the work in this ticket should be scheduled
- **Blocked by** - used to indicate which OCTO crew is blocking the work
- **Reason Blocked** - general text field to  add detail to the reason the ticket is blocked
- **Milestone** - not currently used by CAIA, these are another way of grouping work and tracking progress
- **Linked pull requests** - not used

# Ticket Status
The ticket status shows where work is in the CAIA pipeline and provides an overview of what's actually happening across the team. The status corresponds to which swim line the ticket will appear in on the [Task Table](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1))(and task board) view in Github Projects. We use two sets of statuses for the two different ticket types:

## Intake status:
  -  **New Intakes** - this is where all new work comes into the board. When you create a ticket and add the sitewide-caia label, it will automatically appear here.
  -  **Intakes in Refinement** - Intakes that have been viewed by the Delivery Lead/Product Manager, but need more followup (feedback from OCTO, additional information from the requesting team, etc.)
  -  **Intakes in Progress** - Intakes where work has started and work tickets are moving through the swimlanes. 
  -  **Backlog/Blocked Intakes** - Intakes where work has stopped or been deprioritized.
  -  **Epics** - used to group tickets related to the same product. Epics themself do not usually contain any direct work, rather they are a bucket for related intakes or work tickets where individual work is being tracked.
  -  **Closed** - all the work tickets related to the intake are complete, so the intake has been closed.

## Work ticket status:
  -  **Icebox** - issues that have been deprioritized with no clear timeline or next steps. These are tickets we will only check on a quarterly or yearly basis, so if you anticipate action sooner than that, or need to keep a closer eye on the issue and check it more frequently, better to keep it in Backlog or Blocked.
  -  **Backlog** - issues that are not currently being worked on, but are still relevant and should be pulled in in the foreseeable future
  -  **Blocked** - issues where work has been stopped for more than a week or two. This includes any ticket where the next step belongs to a person that is external to CAIA:
    - Tickets that need a decision or review from a stakeholder/SME or OCTO PO
    - Tickets where artifacts required to complete work are missing or incomplete
    - Tickets that are blocked by normal pipeline process steps. For example, a piece of work going through the Collaboration Cycle that is waiting on a product team to finish research before we can help them make changes. There’s no blocker we need to remove, we’re just waiting for it to come back to us.
    - Leave yourself assigned  so you can pick them up when they come back to you!
  -  **Ready** - issues have been refined, have next steps and assignees, and is ready to begin work on. It's ok if some work has been done already, by your discipline or another disclipine. Tickets here are what you are going to tackle next.
  -  **In Progress** - your current workload, things that you are actively focused on in the current week or two.
  -  **Validate** - once CAIA work is complete on an issue, the person responsible for it at that stage should fill out the custom fields and move the ticket to validate. Naomi will close and track the ticket in the capacity spreadsheet. Make a note in the ticket for any cases where a product or page is published but needs additional review to ensure there are no bugs, stakeholder changes, or followup from the product team/OCTO.
 -  **Closed** - work completed for this issue. Updates are live, the product has launched, or feedback or deliverables have been provided to the team.
  - **OCTO Audits** - tickets created by OCTO leadership - usually audit work

# Closing tickets
The way we close tickets matters to our reporting, but we have different steps to complete due to the range of ticket types and discipline setups on our team. 

### Closure process for team members
**Work ticket that is attached to an intake:**
1. Add all required fields
2. Close ticket

**Work ticket that is NOT attached to an intake:**

The assignee responsible for the last step will be responsible for moving the ticket.
1. Add all required fields
2. Add a comment confirming that the ticket is ready for closure review, and tag your discipline lead.
3. Move the ticket to Validate

**Intakes**

If you are assigned to the last open work ticket on an intake (or you’re the only team member assigned), you are responsible for moving the intake. 
1. Confirm that all the work tickets are closed
2. Add all required fields
3. Add a comment confirming that the ticket is ready for closure review, and tag your discipline lead.
4. Move the ticket to Validate

### Closure process for discipline "leads"/delivery

At least weekly, review the Validate column and close intakes and work tickets related to your discipline. 
1. Confirm that all work tickets attached to an intake are closed
2. If a ticket is not ready for closure, add a comment explaining why and next steps, and move the ticket to an active status swimlane (such as In Progress or Blocked)
3. Add closed intakes and their attached work tickets to the [CAIA metric spreadsheet](https://docs.google.com/spreadsheets/d/1D1gNZlAIYbOIL9epKA_AadT5rdDCIu5IweRbRxDf288/edit?gid=1091370068#gid=1091370068) in the relevant sprint tab.
   
