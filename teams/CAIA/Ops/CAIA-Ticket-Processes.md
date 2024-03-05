
> [!CAUTION]
> This page is no longer current and is being merged with [Anatomy of a CAIA Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#anatomy-of-a-caia-ticket) which lives here: teams/CAIA/Ops/Anatomy of a CAIA ticket.md Please refer to the Anatomy of a CAIA Ticket as the :new: source of truth on tickets from CAIA.
 
# CAIA Ticket Processes

_The purpose of this documentation is to establish a clear way of work for the CAIA ticked work processes. Sets out involvement and ownership of CAIA processes, ceremonies, and meetings related to ticketed work._

> [!WARNING]
> STOP! You are about to read a page that is no longer current. See the note at the top of this page, to access current information. 
    

<details><summary>Toggle to view the old version of this page that is no longer valid</summary>

## Documentation Purpose

<details><summary>Toggle to view additional details about this documentation</summary>

### CAIA Disciplines
- Accessibility
- Content
- Information Architecture

### Ways of Working
- Refinement
- Backlog Maintenance
- Planning
- Outline meetings - purpose and cadence

### Tools Utilized by CAIA
#### Project Management
- [GitHub Projects](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/3)
- [GitHub (formerly Zenhub)](https://github.com/department-of-veterans-affairs/va.gov-team#workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/board)
#### Reporting
[CAIA Dashboard](https://lookerstudio.google.com/reporting/a5feda72-eb6d-4197-ad45-4c3a1e862fc9)

</details>

## Also in this Doc
1. [Global Definitions](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#global-definitions)
2. [Ticket Creation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#ticket-creation)
3. Processes
4. [Tasks](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#tasks) 
5. [Ticket Closeout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#closing-tickets)
6. [Meetings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#refinement-meetings)
7. [Tickets, assignees, labels and fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#tickets-assignees-labels-and-fields)
8. [Sample Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#sample-journey)

<hr>

## Global Definitions
_Review the terms and definitions utlizied by the CAIA Team._ 

<details><summary>Toggle to view CAIA definitions</summary>

| **Term** | Definition |
|------------------------|------------------|
| **Ticket**                   | A method to track a work requirement. In Github they are used to track issues at the repository level. Tickets contain the details of the issue and the steps or work required to meet the definition of done.|
| **Issue**                   |     An issue is a discreet, well defined unit of work for a team or project. In Github, they are synonymous with tickets - that is, a ticket will usually contain a single well defined issue. With VA, however, tickets can contain more than one issue, and so the best way to think of it is that a ticket is a ‘bucket’ or ‘repository’ for issues.| 
| **EPIC**                   |     An overarching grouping of tasks (or sub-tasks) that contain several smaller `Issues`, also known as `User Stories`. | 
| **Task**                   |     In Github, a task is an individual work item, usually assignable to someone, who will then complete that item and check it off. Tasks can be as simple as a checklist item, or they can be multi-functional, when it is converted into an issue. Task lists can connect to existing issues as well as tasks converted into issues. An issue can appear in multiple task lists, simply by connecting it with the issue number. Regardless if a task is a plain text task or an issue, when it is unchecked, it is open and when it is checked, it is closed. The tickets that are connected to tasks are tracking tasks. GHP will tell you the number of tasks completed and overall, along with a percentage. You can also use multiple task lists in one ticket for different parts of your project. [Learn more about tasks from GitHub.](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) | 
| **Repository**                   |     A place where a project’s files, version history, and resources live. In CAIA, we operate in the VA.gov-team repository.| 
| **Pipeline**                   |     A pipeline is a collection or series of workflows that defines the status of work being done at a given point in the work process. The CAIA Pipeline consists of distinct stages that help define the status of work while it is with our team. The start point for our pipeline is `New Stuff` and the end point is `Closed`.| 
| **Refinement**                   |     The process of reviewing and assessing tickets in the various stages of the CAIA pipeline - Ready, Backlog etc - in an effort to progress them through the pipeline to a closed status. Includes the following: raw tickets, backlog and blocked. | 
| **Refinement**: Raw Tickets| Reviewing & assessing raw tickets as they come into the `New Stuff` column.|
| **Refinement**: Backlog |Reviewing and assessing tickets in the backlog to ensure they do not get forgotten and seeing if they can be pulled into the current `Ready` or `In Progress` work streams.|
| **Refinement**: Blocked |Reviewing and assessing tickets in `Blocked`  to see if they can be unblocked or if not, who needs to be notified or informed to get it unblocked.|

</details>

## Ticket Creation
**The [CAIA Intake Request Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2C+coforma-terry&labels=sitewide+CAIA%2C+sitewide+content-product+support&projects=&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E) is filled out by VFS teams.**  

### Access Points
- **DSVA Slack Channels:**
    - [#accessibility-help](https://dsva.slack.com/archives/C8E985R32)
    - [#sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH)
- **VA Platform Website**
    - [Touchpoint: Sitewide Content, Accessibility, and Information Architecture (CAIA) intake request](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/sitewide-content-and-ia-intake-request)
### Intake Process
<details><summary>Toggle to view what takes place during ticket creation</summary>
  
- Ticket automatically assigns `Terry` and `Lily` and adds the `sitewide CAIA` label.
- This label triggers GitHub Projects to pull the ticket into CAIA's view, and adds it to the `New Stuff` [lane on the main board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1).
    - **Default assignees:** Terry, Lily
    - **Default Labels:** `sitewide CAIA`
    - **Note:** A ticket must have the `sitewide CAIA` label to exist in GH Projects!
    - **Additional Views:**
        - [Grouped by Intake](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/3)
        - [Grouped by Tracked By](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/50)
        - [Grouped by Lane](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/46)

</details>

## Tickets, Assignees, Labels and Fields

<details><summary>Learn more about CAIA tickets, assignees, labels and fields</summary>

### Ticket Types
- [Regular Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#1-regular-ticket-type)
- [Research Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#2-caia-research-intake-ticket)
- [EPIC](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#3-epic-ticket-type)
- [Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#4-super-epic-ticket-type)
### Ticket Details
- [Labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#labels)
- [Assignees](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#assignees)
- [Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#ghp-fields)

### Ticket Types
- There are four distinct ticket `types` that are relevant to CAIA. 
- There are additional tickets within each discipline that are spun off of the intake tickets, based on the work being requested. This is done via ‘tasks’.

#### 1. Regular Ticket Type
- Generally, a ticket that has a specific task or tasks associated with it and is associated with a single CAIA discipline. For example the ticket may require content work.
- In some cases a single regular ticket may contain more than one CAIA discipline - for example a ticket requiring a content update and some IA work. 
- Whether to make that ticket into an EPIC is discretionary and gauged by the work estimate/complexity of the request.
    - If it makes sense to make it an EPIC, do so.
    - If not, and the multidisciplinary involvement is minor, it can stay a regular ticket.
    - Ultimately, it is whatever is easiest for CAIA to track and complete the work.

#### 2. CAIA Research Intake Ticket
VFS teams can request assistive technology research support through CAIA, where CAIA a11ys attend user research sessions and provide support for assistive technology sessions, in addition to taking a11y-related notes, used to generate a detailed deliverable, focused on a11y issues identified during the research sessions.
- [There are resources for assistive technology research sessions that can be viewed on the Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/research-assistive-technology-sessions)
    - [Research with assistive technology users](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users)
    - [Screen reader checklist](https://depo-platform-documentation.scrollhelp.site/research-design/screen-reader-checklist)
    - [Disability etiquette](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
    - [Testing your prototype with assistve technology users](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u)

#### 3. Epic Ticket Type
- A container for other tickets. EPICS are used as a vessel for attaching other tickets to, especially in cases where multiple work streams are involved with the work. 
    - For example, a collaboration cycle ticket might contain work from IA, a11y, and content, and so the EPIC is used as an anchor for all the tickets associated with the individual work tickets that are created to actually do the work.
    - An example of how the individual work tickets are shown in EPIC can be seen below:
        - An EPIC will usually not have team members assigned to it directly, as the EPIC is normally just used as a vessel, however, assignees may be added to indicate ownership or involvement with some or all of the ticket content of the EPIC.
        - For example, an accessibility audit ticket might contain 4 or 5 individual tickets with work being done by different members of the a11y team in different areas, but the a11y lead may be “assigned” in the EPIC as they have ownership of the collective work of the audit in general.

#### 4. Super Epic Ticket Type
- Simply an EPIC used for tying together multiple related EPICS to align to a specific goal, area, or objective.
- And EPIC that contains other EPICS in a hierarchical system.
- Similar assigning and labeling rules apply to SUPER EPICS that also apply to EPICS.
- Labels and assignees are tied to tickets.
### Labels
5 main labels are used to indicate the CAIA work stream involved with the work:
-  `sitewide CAIA` - used to associate tickets within GitHub with the CAIA team. Also used as an automation trigger for adding newly created tickets to GHProjects. Default label for intake request.
-  `sitewide content` used to denote CAIA content involvement with the work.
 - `sitweide accessibility` used to denote that CAIA a11y has involvement with the work.
 - `sitewide IA`- used to denote that the CAIA Information Architecture team has work involvement.
 - `CAIA-a11y-research` - used to denote CAIA research involvement for Assistive Technology support.
### Assignees
By default, newly created intake request tickets in Github will automatically assign Terry and Lily. 
- CAIA Leads then review after Terry and Lily, that is Sara, Kristin, and Laura.
- During refinement, both assignees and labels can be removed from the ticket as appropriate after determining no involvement by those streams or people.
- Refined tickets will be moved to ready but may not have a specific team member assigned to the ticket.
- During planning, assignees will be added to tickets to indicate that there is a work involvement expectation from that team member. In other words, they’re doing the work.

### GHP Fields
The following fields are currently being used in GitHub Projects, and should be completed. 

| **Field** | Definition |
|------------------------|------------------|
| **Assignees**                   | Details can be found in the section above.         |
| **Labels**                   | Details can be found in the section above.         |
| **Status**                   | New Stuff, Epics, Backlog, Blocked, Ready, In Progress, Validate or Closed         |
| **Open Date**                   | The date the ticket was created. Can be pulled from the top of the ticket, where you can hover to view exact date.         |
| **Closed Date**                   | The date the ticket was closed out by a CAIA team member.         |
| **Target Date**                  | If the ticket has a requested deadline or date the CAIA work needs to be completed by, enter that date here.         |
| **Start Date**                  | The date that work on the ticket started, or was moved into `In Progress`         |
| **Estimate**                   | The estimate of the work to be done, as a whole, by CAIA based on fib.         |
| **Actual**                   | Once the ticket is closed, compare the estimate with the actual amount of work that was done. Add this number here.         |
| **Priority**                   | Choose the drop-down that best applies to the work being requested. This helps to segment and sort CAIA's workload. **High**: Work should be tackled asap. **Medium**: Work is standard or regular priority. **Normal**: Default label until evaluation has been completed.**Low**: Low priority or non-urgent work. **Chipper**: A project available to work on as time allows.         |
| **Sprint**                   | Add the sprint that the work is done in. If it spans more than one sprint, this will need to be updated.         |
| **Copy Edit Date**                   | Date copy edit is required by.         |
| **Originator**                   | Select one of the following options: CAIA Internal; Email Request; Slack Request;OCTO Priority; Intake Form; or PO Ticket.         |
| **Last Checked**                   | This field should be updated when the ticket is reviewed.         |

</details>

## Tasks
Tasks are used within Intake/Epics, as well as individual issue tickets to help divvy up the work, and make sure items are checked off and completed. Tasks can be plain text list items, or they can be comprehensive and turned into issues, with assignees, labels, etc. There can be multiple task lists do deliniate between disciplines, task groupings, etc.

`Needs Reviewed`


## Sample Journey

_This is a sample scenario for a high priority ticket created by a VFS team using the standard CAIA intake request form._ 

<details><summary>Toggle to view a sample Ticket Journey</summary>
  
1. Intake comes in from the `VFS Team` on Thursday of week 1 in the sprint.
2. GHP picks up the  `sitewide CAIA`label and adds this new ticket to `New Stuff`  in GHP. The filter in this column put new tickets at the top, sorted by date. This is dependent on the`Date Opened` field being filled out.
3. Email is also created and sent to everyone on the assignee list as the ticket is created
4. Representative from xyz team should post a follow up notification in our DSVA Slack Channel
5. Leads then look at the ticket on their week 1&2 Monday Refinement session and determine ticket priority, and needs to be completed by  date.
   - These fields are then filled out in the ticket in GHP and the ticket - now refined - moved to `Ready`
   - Someone is assigned to the work based on their current capacity/workload
  
<img width="532" alt="Main Table in GitHub Projects, showcasing the New Stuff lane" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/124186314/a4c18490-6dee-49c1-9e18-003d3557d84d">

</details>

## Closing Tickets
If  CAIA work on a ticket has been completed, the person working on that ticket can move the ticket to `validate`, or if no validation is required, a ticket can be moved directly to closed and recorded in the capacity tracker.

<details><summary>Toggle to learn how to close a CAIA ticket</summary>

- If the work on a ticket is complete (for example, an updated page is live or a deliverable has been sent to a stakeholder), you can move the ticket to `closed`.
- Tickets that are closed should have all of their fields completed, prior to closing out the ticket.
- Tickets that are closed should be added to the [capacity tracker]([url](https://docs.google.com/spreadsheets/d/1D1gNZlAIYbOIL9epKA_AadT5rdDCIu5IweRbRxDf288/edit#gid=623845405)), for the assignees involved.
- A ticket should only be moved to `validate` if there is specific validation criteria (for example, a when launching a new tool that needs a short window of time post-launch for the product team to spot bugs or review live pages). In this case, please revisit and close once followup is complete.
</details>

## Refinement Meetings
- CAIA Ops Refinement
- CAIA OCTO Refinement
- Terry & Lily refinement


</details>
