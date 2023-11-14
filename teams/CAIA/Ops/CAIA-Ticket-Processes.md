# CAIA Ticket Processes
## Documentation Purpose
The purpose of this documentation is to establish a clear way of work for the CAIA ticked work processes.
- Ways of Working
- CAIA Disciplines
- Tools utilized

<details><summary>Toggle to view details on this documentation's purpose</summary>

### Ways of Working
- Refinement
- Backlog Maintenance
- Planning
- Outline meetings - purpose and cadence

**Sets out involvement and ownership of CAIA processes, ceremonies, and meetings related to ticketed work.**

### CAIA Disciplines
- Accessibility
- Content
- Information Architecture

### Tools Utilized by CAIA
- [GitHub Projects](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/3)
- [GitHub (formerly Zenhub)](https://github.com/department-of-veterans-affairs/va.gov-team#workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/board)

</details>

## Also in this Doc
1. [Global Definitions](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#global-definitions)
2. [Ticket Creation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md#ticket-creation)
3. Processes
4. Ticket Closeout
5. Meetings
6. Tickets, assignees, and labels
7. Sample Journey

<hr>

## Global Definitions
Review the terms and definitions utlizied by the CAIA Team. 
- Ticket
- Issue
- EPIC
- Task
- Repository
- Pipeline
- Refinement

<details><summary>Toggle to view CAIA definitions</summary>
  
### Ticket
A method to track a work requirement. In Github they are used to track issues at the repository level. Tickets contain the details of the issue and the steps or work required to meet the definition of done.

### Issue
An issue is a discreet, well defined unit of work for a team or project. In Github, they are synonymous with tickets - that is, a ticket will usually contain a single well defined issue. With VA, however, tickets can contain more than one issue, and so the best way to think of it is that a ticket is a ‘bucket’ or ‘repository’ for issues.

### EPIC
An overarching grouping of tasks (or sub-tasks) that contain several smaller `Issues`, also known as `User Stories`.

### Task
In Github, a task is an individual work item, usually assignable to someone, who will then complete that item and check it off. 

### Repository
A place where a project’s files, version history, and resources live. In CAIA, we operate in the VA.gov-team repository.

### Pipeline
A pipeline is a collection or series of workflows that defines the status of work being done at a given point in the work process. The CAIA Pipeline consists of distinct stages that help define the status of work while it is with our team. The start point for our pipeline is `New Stuff` and the end point is `Closed`.

### Refinement
The process of reviewing and assessing tickets in the various stages of the CAIA pipeline - Ready, Backlog etc - in an effort to progress them through the pipeline to a closed status. Includes the following:
- **Reviewing & assessing raw tickets** as they come into the `New Stuff` column.
- **Reviewing and assessing tickets in the backlog** to ensure they do not get forgotten and seeing if they can be pulled into the current `Ready` or `In Progress` work streams.
- **Reviewing and assessing tickets in “Blocked”** to see if they can be unblocked or if not, who needs to be notified or informed to get it unblocked.
</details>

## Ticket Creation
1. [CAIA Intake Request Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2C+coforma-terry&labels=sitewide+CAIA%2C+sitewide+content-product+support&projects=&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E) is filled out by VFS team. 
2. Ticket automatically assigns `Terry` and `Lily` and adds the `sitewide CAIA`label.
3. This label triggers GitHub Projects to pull the ticket into CAIA's view, and adds it to the `New Stuff` [lane on the main board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/1).
    - **Default assignees:** Terry, Lily
    - **Default Labels:** Sitewide CAIA
    - **Note:** A ticket must have the `sitewide CAIA` label to exist in GH Projects!
    - **Additional Views:**
        - [Grouped by Intake](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/3)
        - [Grouped by Tracked By](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/50)
        - [Grouped by Lane](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/46)

## Tickets, Assignees and Labels
- Ticket Types
- Regular Ticket
- EPIC
- Super Epic
- Labels
- Assignees

<details><summary>Learn more about CAIA tickets, assignees and labels</summary>

### Ticket Types
There are three distinct ticket “types” that are relevant to CAIA:

### Regular ticket
Generally, a ticket that has a specific task or tasks associated with it and is associated with a single CAIA discipline. For example the ticket may require content work. In some cases a single regular ticket may contain more than 1 CAIA discipline - for example a ticket requiring a content update and some IA work. 
Whether to make that ticket into an EPIC is discretionary and gauged by the work estimate/complexity of the request. If it makes sense to make it an EPIC, do so. If not, and the multidisciplinary involvement is minor,  it can stay a regular ticket. Whatever is easiest for CAIA to track and complete the work.

### EPIC
A container for other tickets. EPICS are used as a vessel for attaching other tickets to, especially in cases where multiple work streams are involved with the work. For example, a collaboration cycle ticket might contain work from IA, a11y, and content, and so the EPIC is used as an anchor for all the tickets associated with the individual work tickets that are created to actually do the work.
An example of how the individual work tickets are shown in EPIC can be seen below:

An EPIC will usually not have team members assigned to it directly, as the EPIC is normally just used as a vessel, however, assignees may be added to indicate ownership or involvement with some or all of the ticket content of the EPIC. 
For example, an accessibility audit ticket might contain 4 or 5 individual tickets with work being done by different members of the a11y team in different areas, but the a11y lead may be “assigned” in the EPIC as they have ownership of the collective work of the audit in general.
### SUPER EPIC
Simply an EPIC used for tying together multiple related EPICS to align to a specific goal, area, or objective. And EPIC that contains other EPICS in a hierarchical system. Similar assigning and labeling rules apply to 
SUPER EPICS that also apply to EPICS.
Labels and assignees are tied to tickets.
### Labels
4 main labels are used to indicate the CAIA work stream involved with the work:
-  ‘sitewide CAIA’ Used to associate tickets within GitHub with the CAIA team. Also used as an automation trigger for adding newly created tickets to GHProjects. Default label for intake request.
-  `sitewide CAIA` used to denote CAIA content involvement with the work.
 - `sitweide accessibility` used to denote that CAIA a11y has involvement with the work.
 - `sitewide IA`- used to donate that the CAIA Information Architecture team has work involvement.
### Assignees
By default, newly created intake request tickets in Github will automatically assign Terry and Lily and then 1 lead from each of the CAIA work streams. Currently that is Terry, Lily, Sara, Kristin, and Laura.
During refinement, both assignees and labels can be removed from the ticket as appropriate after determining no involvement by those streams or people. Refined tickets will be moved to ready but may not have a specific team member assigned to the ticket.
During planning, assignees will be added to tickets to indicate that there is a work involvement expectation from that team member. In other words, they’re doing the work.


</details>
