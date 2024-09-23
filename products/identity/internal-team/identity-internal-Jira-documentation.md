# Jira Documentation for Internal Teams - Identity Crew

## Table of Contents:

- [Getting Started](#getting-started)
    - [Account creation](#account-creation)
    - [Navigating Jira](#navigating-jira)
    - [Activity & Statistics](#activity-and-statistics)
- [The Identity Board](#the-identity-board)
    - [Swimlanes](#swimlanes)
    - [Columns](#columns)
    - [Quick filters](#quick-filters)
    - [Flags](#flags)
- [How Tickets Work](#how-tickets-work)
    - [Creating Tickets](#creating-tickets)
    - [Issue Types](#issue-types)
    - [Labels](#labels)
    - [Assigning Tickets](#assigning-tickets)
    - [Sprint Commitments](#sprint-commitments)
- [The Backlog](#the-backlog)

## Getting Started

### Account Creation

You can find the link to our crew’s [Jira Dashboard](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=12029) pinned to our crew’s [slack channel](https://dsva.slack.com/archives/C04MM3WJN1E).

**Important Note:** A Personal Identity Verification (PIV) card to gain access to our team’s [Jira Dashboard](https://jira.devops.va.gov/projects/VI/summary)

- Reach out to Product Manager [Mike King](mailto:mike.king@oddball.io) or Program Manager [Parker Baranowski](mailto:parker.baranowski@oddball.io) once you have your PIV and set up your login credentials.
    - Once logged in, you’ll have access to the [Identity Jira board](https://jira.devops.va.gov/secure/RapidBoard.jspa?projectKey=VI&rapidView=12029), be able to create tickets, and view [crew activity.](https://jira.devops.va.gov/projects/VI/summary) **Note:** You do not need to be on the CAG network to log in but you will need your PIV card.

You can read more about Jira documentation [here.](https://confluence.atlassian.com/jira)

### Navigating Jira

Using the navigation on the right side of the page, users can navigate between [Team Activity](https://jira.devops.va.gov/projects/VI/summary), [backlog](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=12029&projectKey=VI&view=planning&issueLimit=100#), [active sprints](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=12029&projectKey=VI&selectedIssue=VI-287#), [reports](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=12029&projectKey=VI&view=reporting&chart=cumulativeFlowDiagram&swimlane=23434&swimlane=23435&swimlane=23720&swimlane=22528&column=84876&column=84877&column=86730&column=84878#), and [issues](https://jira.devops.va.gov/projects/VI/issues/VI-418?filter=allopenissues). Crew members can also access the [Live and Monitoring board](https://jira.devops.va.gov/issues/?filter=124503) and view which issues need [PM intervention](https://jira.devops.va.gov/issues/?filter=124528) under “Project Shortcuts”

<img width="282" alt="Screenshot 2024-08-27 at 3 35 04 PM" src="https://github.com/user-attachments/assets/01f1710b-5b4c-435d-a9e0-51106ba344a4">

### Activity and Statistics

Crew members can keep track of the crew’s activity through the [Activity Log](https://jira.devops.va.gov/projects/VI/summary). Here we can see when an issue is created, assigned, updated, or changes status and we can see which crew member is actively engaging with the issue.

<img width="751" alt="Screenshot 2024-08-27 at 3 35 23 PM" src="https://github.com/user-attachments/assets/6d2be0f5-8b21-432e-898e-4b3cd91b770d">

Crew members can monitor statistics on unresolved issues and view them by priority, assignee, or component. Crew members can also view the Status Summary [here.](https://jira.devops.va.gov/projects/VI/summary/statistics)

<img width="1136" alt="Screenshot 2024-08-27 at 3 36 39 PM" src="https://github.com/user-attachments/assets/4aeed6cd-1cb4-4cf3-93b8-69c2256881b5">

## The Identity Board

<img width="1440" alt="Screenshot 2024-08-23 at 11 38 34 AM" src="https://github.com/user-attachments/assets/5de36a5a-6890-4c51-8b0d-644b0f7863e8">

### Swimlanes

There are two swimlanes. One for each team. They are named accordingly: **Identity Experience Team** and **Platform Support Team**

<img width="534" alt="Screenshot 2024-08-23 at 11 42 10 AM" src="https://github.com/user-attachments/assets/df1db729-fa29-4914-b396-55632cb64976">

**Note:** For a better view of your team’s sole assignments, use the arrows to minimize and maximize the swimlanes on the board.

### Columns

There are four columns: **Ready**, **In Progress**, **Ready for Review**, and **Done**

<img width="1118" alt="Screenshot 2024-08-23 at 11 41 28 AM" src="https://github.com/user-attachments/assets/a006ac9c-3732-42ef-b6f8-442ea396e959">

- **Ready:** Ticket has been refined, assigned during sprint planning, and added to the sprint.
- **In Progress:** Ticket has been assigned to a crew member and is actively being worked on.
- **In Review**: Mainly for engineering use. Engineers can move their tickets in the “Ready for Review” column when they have a pull request filled out properly, testing has been completed, and PR is marked *ready for review* in [GitHub](https://github.com/department-of-veterans-affairs). Engineers are responsible for getting their PR’s reviewed in a timely manner as stated here
- **Done:** Ticket has been completed and updated. Tickets with the *Live and Monitoring Label* should be moved to *Done*. New bug tickets will be created if bugs are found while monitoring work live.

### Quick Filters

There are a few built in quick filters that are useful for organizing the view of the board. The quick filters will filter out tickets by certain labels so be sure to label tickets appropriately.

<img width="995" alt="Screenshot 2024-08-23 at 11 40 47 AM" src="https://github.com/user-attachments/assets/127c9cde-59d6-44f2-b912-370d7b4214c4">

**Assigned to Me**: Only show tickets that have been assigned to you

**Team Filter**: Identity Experience Team/ Identity Platform Support

**Role Filters** Frontend, Backend, UX, Product

### Flags

<img width="225" alt="Screenshot 2024-08-23 at 11 42 28 AM" src="https://github.com/user-attachments/assets/86a2437b-1750-4855-9a13-068afae29fd9">


[**Live and Monitoring:**](https://jira.devops.va.gov/issues/?filter=124503) this flag is for features that need to be monitored after deploying to production. Mainly used by Engineers, this flag serves as a quick filter to view outage recoveries, feature launches, or bug fixes that have been recently deployed. Engineer or PM can remove flag when

<img width="942" alt="Screenshot 2024-08-27 at 2 06 42 PM" src="https://github.com/user-attachments/assets/c5dfc9fa-ab23-48a7-a4c2-cb763d3cf0fe">

[**Needs Intervention:**](https://jira.devops.va.gov/issues/?filter=124528) The Needs Intervention flag should be used when a ticket is blocked or needs intervention from a PM. This serves as a quick filter for product managers to view tickets that need more attention so they can respond quicker.

<img width="942" alt="Screenshot 2024-08-27 at 2 07 01 PM" src="https://github.com/user-attachments/assets/db935c0d-993b-4c71-a564-174c6af6d645">

## How tickets work

### Creating Tickets

Tickets are created to track stories, spikes, and bug fixes. They should include a Title and description at minimum.

<img width="797" alt="Screenshot 2024-08-27 at 2 21 15 PM" src="https://github.com/user-attachments/assets/3a6b39fd-fadd-46cb-bf1c-33d04f79938d">

There are many features and details that can be included in the ticket to better describe the acceptance criteria, priority, and details of the task

These Include:

- **Priority** - rated High to Low. High priority tickets should ALWAYS use this feature
- **Labels** - Team label and role label should be added to ticket to assist with filtering tickets
- **Attachments** - used to add screenshots, recordings and other attachments related to the task
- **Linked Issue** - Can be used to link to a related issue and provide details about how that issue is related.
- **Assignee** - Allows the ability to assign a team member to a ticket or leave it unassigned.
- **Epic Link** - Allows the ability to link to an epic that the task is in the scope of.
- **Sprint** - Allows the ability to assign the ticket to a specific sprint.

<img width="797" alt="Screenshot 2024-08-27 at 2 21 08 PM" src="https://github.com/user-attachments/assets/03c4aa26-71e0-4430-86e5-42a68fdb3307">

**Note:** Creating tickets using the “Create” button in the backlog can be less buggy and more reliable than the ticket creation button on the team home page.

<img width="327" alt="Screenshot 2024-08-27 at 2 19 15 PM" src="https://github.com/user-attachments/assets/ae449eda-939b-457c-be08-b82e842c3eb5">

### Issue Types

Issue types help to tell the assignee and other team members what type of Issue the ticket is. There are different Issue Types for tickets

<img width="260" alt="Screenshot 2024-08-27 at 2 20 16 PM" src="https://github.com/user-attachments/assets/2fe41fa0-4d9b-451f-9fbb-db19926dcdb0">

- **Task:** Issue that includes action item and clear definition of done
- **Story:** Issue that include a user story and clear acceptance criteria
- **Bug:** Issues related to bug investigations, bug fixes, and system recovery. **Note:** Urgent bugs can be investigated before a ticket is created as long as Parker or Joe have been informed.
- **Epic:** Used to track multiple issues related to an Epic. Are usually assigned to Product Managers and not Engineers or UX.
- **Initiative:** Used to track multiple Epics related to an Initiative. Never assigned to a single team member.
- **Theme:** Used to track multiple Initiatives related to a Theme. Never assigned to a single team member.
- **Strategic Objective:** Used to track multiple themes throughout the quarter and ultimately throughout the year.
- 

**Note:** Urgent tickets should be immediately brought up to either Parker or Joe.

### Labels

Labels should be added to each ticket to help distinguish who the ticket should be assigned to. Labels are also used to filter tickets by role, team, or status.

<img width="401" alt="Screenshot 2024-08-27 at 2 18 17 PM" src="https://github.com/user-attachments/assets/3e83e9b1-1848-44ad-967e-b21cb1392b32">

Some of the labels we use currently are:

- **Identity_experience** - used for tickets created for the Identity Experience team
- **Identity_platform** - used for tickets created for the Identity Platform team
- **Pm_intervention** - Adds the Needs Intervention flag to tickets that are blocked or need attention from a Product Manager
- **Monitoring** - Adds the [Live and Monitoring](https://jira.devops.va.gov/issues/?filter=124503) flag to tickets that are done and need to be monitored by a PM or engineer.
- **Frontend, Backend, UX**, and **Content** - use to filter tickets by role
- **To_refine** - Used to mark tickets that need to be refined and prioritized by Product Managers.

### Assigning Tickets

Tickets can be assigned after they have been refined. If more information is needed to complete the task, the assignee is responsible for reaching out to the PM or Reported for more context.

<img width="372" alt="Screenshot 2024-08-27 at 2 12 16 PM" src="https://github.com/user-attachments/assets/8b50ddcc-ecf1-4a8c-a86b-db01933040bc">

Team members creating their own tickets may assign those tickets to themselves by simply clicking “Assign to me”.

<img width="323" alt="Screenshot 2024-08-27 at 2 12 54 PM" src="https://github.com/user-attachments/assets/6687aa5e-0d18-4ce3-8d94-cd83319400a9">

### Sprint Commitments

At the end of each sprint, tickets that are in the **Done** column will be closed out. Any remaining tickets in the **In Progress**, **Ready, or Review** columns will AUTOMATICALLY roll over to the next sprint and remain on the board with the same assignee.

## The Backlog

The backlog is a place for tickets that have been created but are not in the current sprint. When you click the backlog button you will see three sections: Current Sprint, Upcoming Sprint, and Backlog

<img width="1134" alt="Screenshot 2024-08-27 at 4 36 53 PM" src="https://github.com/user-attachments/assets/99d2e79b-53df-4e01-a806-db3807a57f2a">

**Current sprint:** Issues under “current sprint” are actively being worked on. This section is an exact reflection of the board and is located at the top. These issues are refined and vary in status from “Ready” to “Done”.

**Upcoming sprint:** Issues under the “Upcoming sprint” drop down are tickets that have been refined, are ready to work on in the next sprint and may or may not already be assigned.

**Backlog:** Issues under the “Backlog” drop down are not assigned to a sprint. Tickets above the refinement line are ready to be worked on and can be dragged into the current sprint if needed. Issues above the refinement line can be self assigned and worked on after sprint commitments have been met. Backlog tickets below the refinement line should NOT be worked on until refined properly unless otherwise directed by either a Product Manager or a Lead.

Refinement line: A placeholder issue in the backlog section separating issues that have been refined (issue has correct labels, epic links, description, attachments, etc) and tickets that haven’t been refined yet. Refinement meetings happen every other Monday before the end of the current sprint.

<img width="690" alt="Screenshot 2024-08-27 at 4 35 06 PM" src="https://github.com/user-attachments/assets/84303986-ba49-4392-9c4c-d3c93cda971d">

Refinement Requirements: Issue has the following:

- Title
- Description
- Epic
- Labels
- Attachments (if needed)
- Acceptance Criteria
- Definition of Done
- User Story (if needed)
- Related Issue (if needed)
