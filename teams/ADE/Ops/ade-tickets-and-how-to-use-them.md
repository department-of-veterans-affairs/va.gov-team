# ADE Tickets and How To Use Them
> [!CAUTION]
> - This document is a **WIP**
> - Last updated: April, 15 2025

## Overview

- This document details how to create, update, and close an ADE ticket, ensuring all the custom field data is correctly entered.
- Use the outline (hamburger menu) in this document to view and navigate the different sections. 
## ADE Github Terms and Definitions
The following table covers common terms used by ADE and their definitions. They are ordered from high-level information to more granular information. 
| **Term** | Definition |
|------------------------|------------------|
| **GHP**                   |    The abbreviation for GitHub Projects.| 
| **Repository**                   |     A place where a project’s files, version history, and resources live. ADE operates in the VA.gov-team repository.| 
| **Pipeline**                   |     **A pipeline is a collection, or series of workflows, that defines the status of work being done at a given point in the workflow process.** <li>The ADE Pipeline consists of distinct stages that help define the status of work, while it is with our team. <li>The starting point for our pipeline is `New Intakes` and the end point is `Closed`.  |
| **Refinement**                   |     The process of reviewing and assessing tickets in various stages of the ADE pipeline (New Intakes , Backlog, Blocked, Icebox, etc.) in an effort to progress them through the pipeline to a `Closed` status. | 
| **Intake**                 | **A request from a VFS product team or stakeholder for ADE support, which will be broken down into individual work tickets.** <li>ADE selects the issue type “Epic” for these intakes, to group the work by issue type. <li>Intakes are also known as “parent tickets.” <li>Every intake has a quick summary at the top, for a quick high-level overview of what is enclosed. |
| **Issue**                   | **An issue is a well-defined unit of work.** <li>In Github, teams are asked to define the nature of their initiative and desired outcomes, in addition to providing background. <li>Ticket(s) are then created based on the defined issue.| 
| **Ticket**                   | **Ticket(s) are created based on the issue(s) presented by the VFS Team.** <li>Tickets contain the details of the issue and the steps “tasks” (or work) required to meet the acceptance criteria, which is the definition of done. <li>Every ticket has a quick summary at the top, for a quick high-level overview of what is enclosed.<li>**Multiple Tickets:** If the work needing to be done to support the intake ticket is elaborate, multiple tickets may be created to support each portion of the work. <li>**Single Tickets:** If the work is simple and straightforward,one ticket (or potentially more) will be generated to support that work. |
| **Task**                   |     **In Github, a task is an individual work item that can be checked off when completed. Tasks can be used as a simple checklist and/or converted into issues or sub-issues.** <li> **Unchecked Task:** When a task is unchecked, it is open. <li>**Checked Task:** When it is checked, it is closed. <li>**Task Progress:** GHP will show the number of tasks completed in an issue, and the overall progress at the top of the parent ticket. <li>**Lists:** You can also use multiple task lists in one ticket for different parts of your project. In any given ticket there will always be at least two task lists, an ADE Internal Task list and a task list for the VFS Team to complete.  |
| **Sub-Issues**                   | **It is important to show connectivity between tickets.** This can be done through sub-issues.[^1] <li>**Existing Issues:** To connect an existing issue, as a sub-issue, choose the drop-down from "create sub-issue" and select "add existing issue" <li>**New Issues:** To connect a new issue,as a sub-issue, choose the drop-down from "create sub-issue" and select "create sub-issue," and select the respective template. |
| **Supporting Artifacts**                   | Tickets also request supporting artifacts. ADE needs teams to include artifacts like product outlines, user flows, mockups and prototypes with links to screens/boards/sections to look at, in addition to user accounts for the scenarios provided to test. |
| **Titles**                   | **The title section will always begin with the following naming convention: `[ADE xyz]`.** <li>This is used to distinguish the ticket type, followed by the team name, product and the service being provided. <li>It is good to keep the title brief (if possible) and include the name of the tool/product for easier scanning. <li>Consistency is also helpful. <li>[See the Work Ticket Template section](#Work-Ticket-Templates), for suggested naming conventions.|

[^1]: **Discontinued Feature:** It is important to note that related tickets are no longer being tracked via “task lists in markdown,” due to GitHub's planned depreciation of “Task Lists” (April 2025). Instead, related tickets will be connected to tickets via "sub-issues".




## Ticket Types

**There are three main types of tickets.** [^2] 
1. [ADE Intake Requests](#ADE-Intake-Requests)
2. [ADE Work Ticket](#ADE-Work-Ticket)
3. [ADE Research Ticket](#ADE-Research-Ticket)

[^2]: **Anchor links and collapsed sections:** Anchor links will not activate on a collapsed details section, unless it is expanded on the page. In this example, be sure to expand the collapsed details section "Expand to view descriptions of the three main ticket types" to activate the anchor links above it. 

<details><summary>Expand to view descriptions of the three main ticket types.</summary>
    
### ADE Intake Requests
- [This is the intake for teams to request collaboration with ADE](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Accessibility-Digital-Experience-Intake-Ticket.md).
    - During refinement, ADE will attach new work tickets to capture individual support tasks needed.
- You will use the intake ticket to communicate with the product team/stakeholder and share any deliverables.
    - This intake ticket becomes the container for all the work that takes place, relating to this request. 
### ADE Work Ticket
- These are ticket sub-issues created by ADE.
    - These are based on an intake or stakeholder request stemming from our "menu" of [services we offer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/ADE/readme.md#services-we-offer).
        - Our menu outlines the specific work needed from an individual contributor (we have also called these "child" or "task" tickets).
    - Product teams can see work tickets attached to their intake, but these work tickets are for you to use.
    - You can add notes in comments and checklists to help you track your progress and move the ticket wherever in belongs in the status swim lanes described below.
### ADE Research Ticket
- [This is the initial ticket for teams to request collaboration with ADE on research](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Accessibility-Digital-Experience-Intake-Ticket.md)
    - This ticket can be opened as a standalone ticket, or be opened after or during an intake request
    - During refinement, ADE will attach new research work tickets to capture individual support tasks needed, based on the selections made in the research ticket.
        - If a pilot is requested, ADE will attach a pilot ticket to this research ticket.
        - If AT research support takes place, a research feedback ticket will be opened by ADE for each issue found, and attached to the main research ticket. 

</details>

> [!NOTE]
> ### Ticket Creation Automation
> When an ADE ticket is created it automatically assigns Lakwi, Sara and Martha and applies the `ADE` label.
> - This label is vital, it triggers GitHub Projects to pull the ticket into ADE's GHP views, adding it to our project.
>     - A ticket must have the `ADE` label and live in the Accessibility DE Project, to become visible to the ADE Team.
>     - The `ADE Intake` label is only present on parent tickets aka intakes aka epics.
>     - Upon the initial ticket save, the `New Intakes` [lane on the main board](https://github.com/orgs/department-of-veterans-affairs/projects/1597/views/1) is set.
> #### ADE Notifications
> - New intake tickets are also part of a Slack/GitHub integration, whereas a message is sent to the ADE team in DSVA Slack, by GitHub, notifying the entire team a new intake has arrived.
> - This increases visibility for the team, and OCTO, for awareness and prioritization, prior to refinement.
> - This is also used as the primary ticket thread for discussions in Slack.


## Work Ticket Templates

We use templates to make it easier to create tickets for specific kinds of work we do on a regular basis. 

> [!TIP]
> ### Template Access
> [Access all of the templates for the va.gov-team repository](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose).
> - Search on the term `ADE` to locate ADE-specific templates.
> - ADE templates will include the term `internal` if they are for use by the ADE team only.
> - All templates for ADE include a brief description.
> - Refer to this repository, as the source of truth for VA templates.[^3]

[^3]: **Avoiding Stale Templates:** If a template is linked with a relative URL, piping in fields for assignees for example, any changes to the template fields for assignees will not be reflected in this link. Therefore, when linking to the template, it is best to link to the template's name. **Example**: `?template=Accessibility-Digital-Experience-Intake-Ticket.md`
    
### ADE Ticket Templates for VFS Teams

| **Template** | Description/When to use | Title Format (Suggested) | Labels |
|------------------|------------------|-------------------------------------|------------------|
| [Accessibility Digital Experience (ADE) Intake Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Accessibility-Digital-Experience-Intake-Ticket.md) | Use this ticket to request collaboration on a new initiative with the Accessibility Digital Experience (ADE) team | [ADE Intake]:[Team Name][Product][Requesting]    | ADE, <br>ADE Intake |
| [Research Support Ticket (ADE)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ade-accessibility-research.yaml) | Request support for user research with Veterans who are using assistive technology (AT)	|[ADE Research]:[Team Name][Product][Researching](Month Year of Research) | ADE, ADE Research |

### ADE Ticket Templates for ADE Internal Use

| **Template** | Description/When to use | Title Format (Suggested) | Labels |
|------------------|------------------|-------------------------------------|------------------|
| [Internal ADE Research Child Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-research-refined-ticket-template.md) | Template for ADE Research Child Tickets - based on the work requested in the research intake ticket. These will be created as sub-issues, under the parent research intake ticket. | [ADE Research]:[Team Name][Product][Researching] - [Type of Support Requested]   | ADE, <br>ADE Research |
| [Internal ADE Pilot Research Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-Research-Pilot-Ticket.md) | Template for pilots conducted prior to research, created based on requests made to ADE. | [ADE Research - Pilot]:[Team Name][Product][Researching]- [Device Type](Month Year of Research) | ADE, ADE Research |
| [Internal ADE Accessibility Short Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-Short-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket outside the intake process such as a child ticket or an internal ADE work ticket. | [ADE Support]:[Team][Product][Requesting] | ADE
| [Internal ADE 508 Accessibility Audit Support Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-508-Audit-Support-Ticket.md) | Template for ADE members to utilize, when needing to create a 508 Audit Support Ticket as either a primary parent intake ticket c/o email report received by Martha, or as a child ticket aka sub-issue. | **Parent Ticket:** [ADE 508 Audit]: `TEAM NAME`: `PRODUCT AUDITED`: 508 Audit Report Findings Support <br> <br> **Child ticket (sub-issue)** [ADE Support]: `TEAM NAME`: `PRODUCT AUDITED`: 508 Audit Report Findings -`Name of Specific Finding` Issue | ADE, <br>ADE 508 Audit, <br>ADE 508 RECHECK, <br>ADE 508 FLAG CRITICAL (if applicable), <br>ADE 508 FLAG HIGH (if applicable), <br>ADE 508 FLAG MEDIUM (if applicable), <br>ADE 508 FLAG LOW (if applicable) |
| [Internal ADE CC Work Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-CC-Work-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket oustide the intake process such as a child ticket or a parent/epic for work being done to support the CC. | [ADE CC]:[Team][Product][Requesting][Stage] | ADE, <br>ADE CC AN |
| [Internal ADE Accessibility Office Hours Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-Office-Hours-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket to track work done to support office hours. Ex. Prepwork before the call. | [ADE Office Hours][Team Name]: [Product] - [Support Requested] | ADE, <br>ADE Office Hours |
| [Internal ADE Research Accessibility Feedback Issue Quantification Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-research-accessibility-feedback-issue-quantification.md) |Template to utilize following ADE research support for AT, in order to document and quantify the issues identified. These will be created as sub-issues, under the parent research intake ticket. | [ADE Research - Feedback] - [Team Name]: [Study] (Type of accessibility issue encountered) |ADE, <br>ADE Research, <br>ADE Research Feedback |

## Custom Ticket Fields
This section contains field data that is important for filtering and tracking issues within the ADE pipeline. 
    
### Required Fields
- **Opened Date** - The date the ticket was created. This is auto-generated by Github, but the default data cannot be used to filter issues on the board, so we still need to manually input this date.
- **Closed Date** - the date the ticket was closed. This is not auto-generated, so please be sure to fill out this field when you close a ticket (for content tickets, PDM will do this).
- **Estimate** - the level of effort we think will be required for a ticket. Only used on Task tickets, not Epics. Level of effort is determined using basic tee shirt sizes based on the time it would take to complete the work itself (not including waiting on SMEs or stakeholders, back and forth with OCTO, etc.):
  - **Small** for 1-5 days 
  - **Medium** for 2-4 weeks 
  - **Large** for 1-3 months - 
- **Actual** - how much effort was required, once we've completed the work and can asses how big a lift it was
- **Originator/Team** - [the team or stakeholder that requested the work](https://github.com/orgs/department-of-veterans-affairs/projects/1597/settings/fields/164855280)

### Additional Fields
- **Assignees** - Shows who is responsible for the work being done on the ticket. This should be used only for the person actively working on the ticket, not for general awareness (if you need to flag a ticket for someone's awareness, tag them in a comment). As a ticket moves through the work process, the assignee may change.
- **Labels** - Sometimes known as tags. These allow for ADE to 'tag' which discipline needs to be involved with the work. [Current labels for ADE](https://github.com/department-of-veterans-affairs/va.gov-team/labels?page=1&q=ADE)
    - **ADE** (required for all ADE tickets)
        - **ADE Transition** (internal label for transition from CAIA)
        - **ADE Intake** (present on all intake tickets)
        - **ADE Office Hours** (to track office hours requests)
        - **ADE MHV** (any ADE support provided to MHV work)
        - **ADE Research** (required for all ADE research tickets)
        - **ADE Research Feedback** (for tracking feedback/findings provided to VFS teams)
        - **ADE CC AN** (assistance needed for collab cycle work)
            - The stage ADE began work with the VFS team going through the collaboration cycle: 
                - **ADE CC - PO Sync**
                - **ADE CC - DI** (design intent)
                - **ADE CC - MP** (midpoint)
                - **ADE CC - STG** (staging)
                - **ADE CC NAN** (no assistance needed with the collab cycle)
        - **ADE 508 AUDIT**
            - **ADE 508 AN**
            - **ADE 508 FLAG CRITICAL**
            - **ADE 508 FLAG HIGH**
            - **ADE 508 FLAG MEDIUM**
            - **ADE 508 FLAG LOW**
            - **ADE 508 RECHECK**
        - **ADE 508 NAN**
- **Last Checked** - (required) the last time a ticket was checked, especially helpful to track on tickets in backlog or blocked to ensure tickets do not go stale in the pipeline
- **Target date** - (optional) It has been used to track both product team launch dates and general internal ADE deadlines.
- **Priority** - Set by Martha, used to indicate how urgent a piece of work is based on the following scale:
    - **High** - top priority, work should begin immediately
    - **Medium** - important but not as urgent as high priority
  	- **Normal** - default, regular priority
  	- **Low** - not urgent, does not require immediate work. This can be used for items in backlog without current work or actionable next steps. It can also be used for items that can be worked on slowly as time and capacity allows (formerly known as a "chipper"), i.e. long-term initiatives or items with no fixed deadline.
- **Sprint** - (required if being worked on or known)Used for planning when the work in this ticket should be scheduled
- **Blocked by** - used to indicate which OCTO crew is blocking the work
- **Reason Blocked** - general text field to  add detail to the reason the ticket is blocked
- **Milestone** - not currently used by ADE, these are another way of grouping work and tracking progress
- **Linked pull requests** - not used

## Ticket Status
The ticket status shows where work is in the ADE pipeline and provides an overview of what's actually happening across the team. The status corresponds to which swim lane the ticket will appear in on the [Task Table](https://github.com/orgs/department-of-veterans-affairs/projects/1597/views/8?sliceBy%5Bvalue%5D=New+Intakes)(and task board) view in Github Projects.

  -  **New Intakes** - this is where all new work comes into the board. When you create a ticket and add the ADE label, it will automatically appear here.
  -  **Intakes in Refinement** - Intakes that have been viewed by the Delivery Lead but need more followup (feedback from OCTO, additional information from the requesting team, etc.)
  -  **Intakes in Progress** - Intakes where work has started and work tickets are moving through the swimlanes.
  -  **Ready** - issues have been refined, have next steps and is ready for a SME to grab and begin work on. 
  -  **In Progress** - your current workload, things that you are actively focused on in the current week or two.
  -  **Backlog/Blocked Intakes** - Intakes where work has stopped or been deprioritized.
  -  **Closed** - all the work tickets related to the intake are complete, so the intake has been closed.
  -  **Icebox** - issues that have been deprioritized with no clear timeline or next steps. These are tickets we will only check on a quarterly or yearly basis, so if you anticipate action sooner than that, or need to keep a closer eye on the issue and check it more frequently, better to keep it in Backlog or Blocked.
  -  **Backlog** - issues that are not currently being worked on, but are still relevant and should be pulled in in the foreseeable future
  -  **Blocked** - issues where work has been stopped for more than a week or two. This includes any ticket where the next step belongs to a person that is external to ADE:
     - Tickets that need a decision or review from a stakeholder/SME or OCTO PO
     - Tickets where artifacts required to complete work are missing or incomplete
     - Tickets that are blocked by normal pipeline process steps. For example, a piece of work going through the Collaboration Cycle that is waiting on a product team to finish research before we can help them make changes. There’s no blocker we need to remove, we’re just waiting for it to come back to us.
     - Leave yourself assigned  so you can pick them up when they come back to you!
   -  **Closed** - work completed for this issue, feedback or deliverables have been provided to the team.
  - **OCTO** - tickets created by OCTO leadership - usually audit work

## Closing tickets
The way we close tickets matters to our reporting, but we have different steps to complete, due to the range of ticket types and discipline setups on our team. 

### Closure process for team members

- Confirm that all work tickets attached to an intake are closed
- If a ticket is not ready for closure, add a comment explaining why and next steps, and move the ticket to an active status swimlane (such as In Progress or Blocked)
- Add closed intakes and their attached work tickets to the [ADE Closed Tickets spreadsheet](https://docs.google.com/spreadsheets/d/1IBt-C2nXK9uDMPvFdQ_SEEx6WNJ8ms3gKVkuEVlns0U/edit?gid=860336617#gid=860336617) in the relevant sprint tab. Complete all columns, Martha will complete the applicable OKR column.
- Fields: We want to make sure that all of the GitHub Projects fields are updated/completed when closing a ticket.
    - Status: Closed
    - [Originator/Team](https://github.com/orgs/department-of-veterans-affairs/projects/1597/settings/fields/164855280)
    - Open Date
    - Closed Date
    - Estimate
    - Actual
    - Priority (should be set by Martha)
    - Sprint (you are closing the ticket)
    - Last checked
The ticket in GitHub proper should reflect as closed as well, in addition to the status in GHP.

- Labels: When closing we will want to make sure the tickets have the appropriate labels.
    - **ADE** (required for all ADE tickets)
    - **ADE Transition** (internal label for transition from CAIA)
    - **ADE Intake** (present on all intake tickets)
    - **ADE Office Hours** (to track office hours requests)
    - **ADE MHV** (any ADE support provided to MHV work)
    - **ADE Research** (required for all ADE research tickets)
    - **ADE Research Feedback** (for tracking feedback/findings provided to VFS teams)
    - **ADE CC AN** (assistance needed for collab cycle work)
        - The stage ADE began work with the VFS team going through the collaboration cycle: 
            - **ADE CC - PO Sync**
            - **ADE CC - DI** (design intent)
            - **ADE CC - MP** (midpoint)
            - **ADE CC - STG** (staging)
            - **ADE CC NAN** (no assistance needed with the collab cycle)
        - **ADE 508 AUDIT**
            - **ADE 508 AN**
            - **ADE 508 FLAG CRITICAL**
            - **ADE 508 FLAG HIGH**
            - **ADE 508 FLAG MEDIUM**
            - **ADE 508 FLAG LOW**
            - **ADE 508 RECHECK**
        - **ADE 508 NAN**

- Feedback: When closing, add a link to our feedback survey in the comments and/or in the team's Slack channel - [Survey: We would love to know your thoughts! Complete the ADE Feedback Survey.](https://app.optimalworkshop.com/questions/dj540s05/accessibility-digital-experience-feedback-survey/shared-results/9ocp2xepd9zax37no6051olly5nde9f1#/t/results/overview)

> [!Note]
> - For tickets that are shared across multiple GHP boards, there are some automation considerations.
> - When closing the ticket via the "close issue" button (located under the comments) it changes the ticket from open to closed. This closes the ticket on every, board that is attached to the ticket, because it is the official GitHub state.
> - Flipping the status from "in progress" to "closed" for example, within the ADE GitHub project board dropdown, will only impact our GHP views., thus keeping the ticket open for others, and us "technically" in GitHub.
> - When all teams are done on the ticket, someone (from any team) can close out the ticket officially.
> - While open, this ticket will not show on our GitHub API export as closed, it will show as open.

> [!TIP]
> - Be sure to move your ticket to `closed` during or by the end of the sprint in which the work was completed.



