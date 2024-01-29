# Anatomy of a CAIA Ticket
`Current WIP Version: V1.0`

## In this Document
- [Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#overview)
  - [Purpose of this Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#purpose-of-this-document)
- [Ticket Anatomy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#ticket-anatomy)
   - [Ticket Types](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#ticket-types)
    - [Standard Intake Request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#standard-intake-request)
    - [General Collaboration Request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#general-collaboration-request)
      - [Title](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#title)
      - [Main Body](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#main-body)
      - [Custom Field Section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#custom-field-section)
 

# Overview

## Purpose of this Document
This document is designed to detail how to fill out and create a CAIA ticket, ensuring all the custom field data is correctly entered.
It also details the steps required when closing out a ticket.

For details of the CAIA ticket process itself, please refer to the following document - [CAIA-Ticket Prcocess](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md)

# Ticket Anatomy
## Ticket Types
There are 2 main tickets that CAIA will use in its pipeline:

- [Standard Intake Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=strelichl%2C+coforma-terry&labels=sitewide+CAIA%2C+sitewide+content-product+support&projects=&template=sitewide-content-intake-form.md&title=%3CType+of+Request%3E+from+%3CTeam%3E). Typically used for teams going through the collaboration cycle or beginning a new product or initiative.
- [General Collaboration Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=coforma-terry%2Cstrelichl&labels=sitewide+CAIA&projects=&template=caia-general-collab-request.md&title=%5BCAIA+General+Support%5D%3A%3CTeam+name%3E%3CSupport+Needed%3E). Typically used for teams requesting general collaboration with CAIA that is not part of the collaboration cycle or for an already existing product or service.

### Standard Intake Request

### General Collaboration Request

### Title
![Title](https://github.com/department-of-veterans-affairs/va.gov-team/assets/109677068/73d12ae7-751e-4dec-a900-57dd94339b48)
The title section contains the name of the ticket with the following naming convention

- [] is used for the ticket type
- <> is used for the team requesting

The ticket title also conatains the following ticket information

- Ticket Status - See in the [Custom Field Section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/Anatomy%20of%20a%20CAIA%20ticket.md#custom-field-section) Below
- Number of tasks completed and total number of tasks
- Who opened the ticket and when


### Main Body
![Main Body](https://github.com/department-of-veterans-affairs/va.gov-team/assets/109677068/e58c76ec-7278-4016-ab95-de36cab48546)
The main body of the the standard intake request consists of the following sections

- **About your team** - Details information on the team requesting collaboration with CAIA Includes details such as
  - OCTO Product Owner
  - Slack Channel
  - Content Writer on team (if applicable)
- About your request - Details information about the nature of the collaboration request

### Custom Field Section
![Custom Fields](https://github.com/department-of-veterans-affairs/va.gov-team/assets/109677068/f321f7c3-5cc4-4fd8-a7b6-43f95fc1fbad)
This section contains filed data that is important for filyering and tracking issues within the CAIA pipeline. They include

- **Assignees** - Shows who is involved in the work being done on the ticket
- **Labels** - Sometimes known as tags - these allow for CAIA to 'tag' which discipline needs to be involved with the work. Current labels for CAIA are
  - sitewide CAIA
  - sitewide content
  - sitewide IA
  - sitewide accessibility
  - CAIA translation
- Milestone - not currently used
- Status - the following tickets statuses exist in CAIA and relate to which swimlane the ticket will show in the [Main Board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/46) view in Github Projects.
  -  **New Intakes** - default lane for all new work that is submitted
  -  **EPICS** - used to group parent tickets, also known as EPICS. EPICS themself do not usually contain any direct work, rather they are a vessel for containing child tickets that are used to track the actual work done.
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
- **Opened Date** - the date the ticket was created - this is auto generated by Github, however, the default data cannot be used to filter issues on the board
- **Linked pull requests** - not used
- **Repository** - the Github repository in which the ticket was created
- **Closed Date** - the date the ticket was closed - when closing a ticket, be sure to fill out this field!
- **Target date** - when evalluating a ticket in refinement, if there is a Congressionally mandated completion date, for example, the date that CAIA needs to complete this work is added here. Otherwise it can be used as a general "we'd like to get this work done by this date' field.
- **Estimate** - the level of effort required for this ticket - usually only used on Task tickets, rather than EPICS. Is determined using basic "T-Shirt sizes" scrum estimating technique using 2, 4, 8, 12, or 16 to indicate the amount of work needed.
- **Actual** - when closing a ticket, add the actual amount of work needed to complete the work, based on the same T-short scal as the estimate (above).
- **Priority** - used to indicate how urgent a piece of work is, based on the following scale
  - **High** - top priority, work should begin immediately. 
  - **Medium** - important but not as urgent as high priority.
  - **Normal** - default, regular priority. 
  - **Low** - not urgent, does not require immediate work. This can be used for items in backlog without current work or actionable next steps yet.
  - **Chipper** - special status for work that is generally not a high priority item but that can be worked on as time and capacity allows. Generally long-term initiatives and items with no fixed deadline
- **Sprint** - Used for planning when the work in this ticket should be scheduled.
- **Blocked by** - used to indicate which OCTO crew is blocking the work
- **Reason Blocked** - general text field to  add detail to the reason the ticket is blocked
- **Originator** - shows how the ticket entered the CAIA pipeline - i.e. Created by CAIA, a direct OCTO request, Inatke form by team etc
- **Last Checked** - used to show the last time a ticket was checked, typically in backlog or blocked to ensure tickets do not go stale in the pipeline









