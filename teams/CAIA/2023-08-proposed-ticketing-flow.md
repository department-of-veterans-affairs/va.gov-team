# Proposed updates for the CAIA ticketing process 

- Status: `DRAFT`
- Author: Eli Mellen
- Draft Date: 2023-08-21
- Updated Date:

***

**NOTE:** This is a draft proposal, and should be considered a work in progress until it has been sufficiently reviewed and de-risked by at least: 

- CAIA workstream leads
- CAIA POs

Once that review has taken place, this header will be updated by either CAIA's PO or the original author.

***

This document proposes updates to CAIA's internal ticketing/project board management process.

The current process is shared between all workstreams within CAIA -- [content](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/CAIA/content), [accessibility](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/CAIA/accessibility] and [information architecture](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/CAIA/information-architecture). Whereas CAIA started as a team wholly focused on content it is our theory that this process doesn't fit the needs of the greatly expanded team. Furthermore, external forces such as the Platform Governance team and VA POs have shared concerns with the "black-box" nature of CAIAs process, noting that they struggle to understand the priority of the team's backlog items, and where along the process towards completion of individual tickets are. 

An internal pain point identified is that CAIA team members struggle to understand what items on the board they "own," and are responsible for stewarding to completion, and what items on the board they are tagged on for visibility, but not inherently responsible for. 

What follows is a proposal to address these issues.

## Splitting the board

Our core suggestion is that we move away from a singular, monolithic board, and move to a scenario where we have 2 boards: 

- high-level board of `intake tickets` and `epics`
- day-to-day project board that details the work to be done, and by whom

### High-level board

This high-level board would primarily be for CAIA workstream leads, and VA POs. This board would provide an overview of the status of larger project work.

As happens today, an external team of VA PO would create an intake ticket. This ticket would appear on the high-level board. 

From there, CAIA workstream leads and team members as needed will decompose the intake ticket into supporting tasks to be completed (those will live on the task board detailed latter, here). 

The high-level board will have the following swimlanes: 

- `intake`, new work that hasn't been reviewed or decomposed into individual tasks, yet
- `backlog`, vetted work that has been reviewed and broken into composite tasks to be done
- `in process`, an epic moves into this state when at least 1 of its child tickets is being worked on
- `complete`, an epic moves into this state when 100% of its tasks are complete
- `delivered`, an epic moves into this state when the CAIA team has officially followed up, and delivered the completed work to the requesting individual or team

**QUESTIONS:** Would it be valuable to have a `blocked` and/or an `up next` swim lane?

No one will be assigned to epics. Epics will purely be an organizational tool that empowers individuals and external groups to understand what kind of progress CAIA is making on work without having to navigate a large and active project board.

### Task board

The day-to-day task board is where work to be done is assigned to individual members of the CAIA team. 

The majority of all the tickets that manifest on this board will be child tickets of epics on the other board.

Swimlanes for this board include: 

- `verify`, this is a fresh ticket as drafted by a CAIA PO or workstream lead. By workstream, teams will review each ticket in this column to determine if it is clear and if it contains all the necessary information for an individual to take on. If it does, it will move to the `backlog`, if not, a message will be sent to the workstream lead for further detail
- `backlog`, the backlog is a collection of work ready to be done, but not yet in process. Tickets in this swimlane haven't been assigned to anyone, yet
- `up next`, tickets in this lane have been assigned to an owner and are scheduled to be started shortly
- `in process`, tickets here are being actively worked on
- `blocked`, tickets here were being worked on, but have a dependency or something of the sort that needs to be cleared before they can be completed 
- `verify`, tickets in this column are complete, but in need of review
- `done`, tickets in this column are complete and have been reviewed
