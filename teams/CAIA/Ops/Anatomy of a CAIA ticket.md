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
This document is designed to detail how to fill out and create a CAIA ticket ensuring all the custom filed data is correctly entered.
It also details the steps required when closing out a ticket.

For details of the CAIA ticket process itself, please refer to the following document - [CAIA-Ticket Prcocess](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA-Ticket-Processes.md)

# Ticket Anatomy
## Ticket Types
There are 2 main ticket's that CAIA will use in it's pipeline:

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

- Ticket Status - See in the Custom Field Section Below
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
- Milestone - not currently used
- Status - the following tickets statuses exist in CAIA and relate to which swimlane the ticket will show in the [Main Board](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/46) view in Github Projects.
  -  **New Intakes** - default lane for all new work that is submitted
  -  **EPICS** - used to group parent tickets, or EPICS as they are also known. EPICS themself do not usually contain any direct work, rather they are a vessel for containing child tickets or subtasks, that are used to track the actual work done.
  -  **Backlog** - items not currently being worked on - usually of a lower priority
  -  **OCTO Audits** - tickets created by OCTO leadership - usually audit work
  -  **Blocked** - issues where work has been forced to stop due to blockers. Can include the following
      -  Waiting on stakeholder
      -  Waiting on another team or CAIA discipline to complete work
      -  Waiting on a decision or review by OCTO or VBA
      -  Missing or incomplete artifacts required to complete work
  -  **Ready** - issue has been refined and is ready to begin work on
  -  **In Progress** - work is currently being carried out
  -  **Validate** - typically used by Content - the copy edit work has been submitted to the page but needs final review before going live
  -  **Closed** - work completed for this issue
- **Opened Date** - the date the ticket was created - this is auto generated by Github, however, the default data cannot be used to filter issues on the board
- **Linked pull requests** - not sued
- **Repository** - the Github repository in which the ticket was created
- **Closed Date** - the date the ticket was closed - when closing a ticket, be sure to fill out this field!
- **Target date** - when evalluating a ticket in refinement, if there is a Congressionally mandated completion date, for example, the date that CAIA needs to complete this work is added here. Otherwise it can be used as a general "we'd like to get this work done by this date' field.
- **Quick fix** - select "Yes" if this work can be completed quickly - i.e. in a day or less
-** Estimate** - the level of effort required for this ticket - usually only used on Task tickets, rather than EPICS. Is determined using basic "T-Shirt sizes" scrum estimating technique using 2, 4, 8, 12, or 16 to indicate the amount of work needed.
- **Actual** - when closing a ticket, add the actual amount of work needed to complete the work, based on the same T-short scal as the estimate (above).
- **Priority** - used to indicate how urgent a piece of work is, based on the following scale
  - **Urgent** - needs to be prioritzed above all other work and completed asap.
  - **High** - should begin work asap. Can be used to indicate that work being done on lesser priority items can be paused and work on this issue started.
  - **Medium** - should be prioritzed above medium, low, chipper, and icebox
  - **Normal** - default priority - will be added to queue above low priority and below
  - **Low** - typically added to items in backlog that are not concidered high enough priority to be currently worked on
  - **Chipper** - special status for work that is generally not a high priority item but that can be worked on as time and capacity allows. Generally long term initiatives and items with no fixed deadline
  - **Icebox** - items cannot be closed but all work has ceased and is prioritized below 'low' priority. These items need to be checked periodically and are typically items that have not been worked on for 6 months or longer or are indefintely blocked.









