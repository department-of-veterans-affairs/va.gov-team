# ADE Tickets and How To Use Them
> **Last updated April, 2025

## Overview

- This document details how to create, update, and close an ADE ticket, ensuring all the custom field data is correctly entered.
- Use the outline (hamburger menu) in this document to view and navigate the different sections. 
## ADE Github Terms and Definitions
| **Term** | Definition |
|------------------------|------------------|
| **Repository**                   |     A place where a project’s files, version history, and resources live. ADE operates in the VA.gov-team repository.| 
| **Pipeline**                   |     A pipeline is a collection, or series of workflows, that defines the status of work being done at a given point in the workflow process. The ADE Pipeline consists of distinct stages that help define the status of work, while it is with our team. The starting point for our pipeline is New Intakes and the end point is Closed.  |
| **Refinement**                   |     The process of reviewing and assessing tickets in various stages of the ADE pipeline (New Intakes , Backlog, Blocked, Icebox, etc.) in an effort to progress them through the pipeline to a closed status. | 
| **Intake**                 | A request from a VFS product team or stakeholder for ADE support, which will be broken down into individual work tickets. <br>ADE uses the issue type ‘Epic’ on these intakes, to group the work by issue. |
| **Issue**                   | An issue is a discreet, well defined unit of work for a team or project. In Github, they are synonymous with tickets - that is, a ticket will usually contain a single well defined issue.| 
| **Ticket**                   | Tickets contain the details of the issue and the steps or work required to meet the definition of done.|
| **Task**                   |     In Github, a task is an individual work item that can be checked off when completed. Tasks can be used as a simple checklist or converted into issues. Task lists can connect to existing issues as well as tasks converted into issues. An issue can appear in multiple task lists, simply by connecting it with the issue number. Regardless if a task is a plain text task or an issue, when it is unchecked, it is open and when it is checked, it is closed. The tickets that are connected to tasks are tracking tasks. GHP will show the number of tasks completed in an issue, and the overall progress as a percentage. You can also use multiple task lists in one ticket for different parts of your project. [Learn more about tasks from GitHub.](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) |

</details>

## Ticket Types

**There are two main types of tickets:**

### ADE Intake Requests
- [This is the intake for teams to request collaboration with ADE](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Accessibility-Digital-Experience-Intake-Ticket.md).
- During refinement, ADE will attach new work tickets to capture individual support tasks needed.
- You will use the intake ticket to communicate with the product team/stakeholder and share any deliverables.
### ADE Work Ticket
- This is the issue created by ADE, based on an intake or stakeholder request, that outlines the specific work needed from an individual contributor (we have also called these "child" or "task" tickets).
- Product teams can see work tickets attached to their intake, but these work tickets are for you to use.
- You can add notes in comments to help you track your progress and move the ticket wherever in belongs in the status swim lanes described below.

> [!NOTE]
> - When a ticket is created, it automatically assigns `Lakwi` ‘Sara’ and `Martha` and adds the `ADE` label.
> - This label triggers GitHub Projects to pull the ticket into ADE's view, and adds it to the `New Intakes` [lane on the main board](https://github.com/orgs/department-of-veterans-affairs/projects/1597/views/1).
> - A ticket must have the `ADE` label to exist in GH Projects

## Work Ticket Templates

We use templates to make it easier to create tickets for specific kinds of work we do on a regular basis. [Access all of the templates for the va.gov-team repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/.github/ISSUE_TEMPLATE).  
    
### ADE Templates

|   | **Template** | Description/When to use | Title Format (Suggested) | Labels |
|---|------------------|------------------|-------------------------------------|------------------|
| 1 | [Accessibility Digital Experience (ADE) Intake Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Accessibility-Digital-Experience-Intake-Ticket.md) | Use this ticket to request collaboration on a new initiative with the Accessibility Digital Experience (ADE) team | [ADE Intake]:[Team Name][Product][Requesting]    | ADE, <br>ADE Intake |
| 2 | [Research Support Ticket (ADE)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ade-accessibility-research.yaml) | Request support for user research with Veterans who are using assistive technology (AT)	|| ADE, ADE Research |
| 3 | [Internal ADE Research Child Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-research-refined-ticket-template.md) | Template for ADE Research Child Tickets - based on the work requested in the research intake ticket. These will be created as sub-issues, under the parent research intake ticket. | | ADE, <br>ADE Research |
| 4 | [Internal ADE Pilot Research Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-Research-Pilot-Ticket.md) | Template for pilots conducted prior to research, created based on requests made to ADE. || ADE, ADE Research |
| 5 | [Internal ADE Accessibility Short Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-Short-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket outside the intake process such as a child ticket or an internal ADE work ticket. | [ADE Support]:[Team][Product][Requesting] | ADE
| 6 | [Internal ADE 508 Accessibility Audit Support Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-508-Audit-Support-Ticket.md) | Template for ADE members to utilize, when needing to create a 508 Audit Support Ticket as either a primary parent intake ticket c/o email report received by Martha, or as a child ticket aka sub-issue. | [ADE 508 Audit]: [Title from Audit Email] | ADE, <br>ADE 508 Audit, <br>ADE 508 RECHECK, <br>ADE 508 FLAG CRITICAL (if applicable), <br>ADE 508 FLAG HIGH (if applicable), <br>ADE 508 FLAG MEDIUM (if applicable), <br>ADE 508 FLAG LOW (if applicable) |
| 7 | [Internal ADE CC Work Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-CC-Work-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket oustide the intake process such as a child ticket or a parent/epic for work being done to support the CC. | [ADE CC]:[Team][Product][Requesting][Stage] | ADE, <br>ADE CC AN |
| 8 | [Internal ADE Accessibility Office Hours Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-Office-Hours-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket to track work done to support office hours. Ex. Prepwork before the call. | [ADE Office Hours][Team Name]: [Product] - [Support Requested] | ADE, <br>ADE Office Hours |
| 9 | [Internal ADE Research Accessibility Feedback Issue Quantification Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-research-accessibility-feedback-issue-quantification.md) |Template to utilize following ADE research support for AT, in order to document and quantify the issues identified. These will be created as sub-issues, under the parent research intake ticket. | [ADE Research - Feedback] - [Team Name]: [Study (Type of accessibility issue encountered)] |ADE, <br>ADE Research, <br>ADE Research Feedback |
## Ticket Titles
The title section contains the name of the ticket with the following naming convention:

- `[ADE intake]` is used to distinguish the ticket type
- Work tickets can be named in whatever way makes sense, but it's good to keep it brief and include the name of the tool/product for easier scanning. Consistency is also helpful. See above for suggested naming conventions.

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

</details>
