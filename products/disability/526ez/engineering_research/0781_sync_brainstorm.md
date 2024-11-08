# 0781 paper sync work breakdown

**This is a WIP, unrefined document. It is not a source of truth**. It is just my best estimates as to how long the work will take, and how we could break it down.

## TL;DR

This document references pages by number as defined in [this layout](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9250-79571&node-type=section&t=coFOPPvO8yrT5Pcq-0)

## Strategy
Esentially we roll through this from top to bottom, adding functionality. If that's 3 devs, then we simply pick up the next chunk. When we hit the bottom we go back and roll through adding content. As long as the routes are set in stone, this should all be pretty plug and play

This is just to get things functional. It does not take into account writting tests, accessibility testing, any advanced styling, rollout, etc.

## Workable Chunks

Each of these can be built and deployed esentially as 'sub apps' that start and end at predefined routes. 'Predefined route'. 'Exit Points' are considered to be outside scope, we simply need the routing to lead a user to that endpoint. Exit Points *should not* be placeholder pages, just empty URLs. This will allow us to avoid merge conflicts

---

### Flipper Protected Entry Point (M)

Entry Point: TBD

Exit Point: 2.1

Set up a bare bones entry point to the new flow. There 

#### Acceptance Criteria
- IF a flipper is on AND a user does not have a started application
- they will enter the new flow
- their entry to the new flow will be persisted in the database

#### Deliverable
- A testable, flipper based entry point deployed in staging

---

### Screener Page Skeleton (L)

<img width="278" alt="Screenshot 2024-11-08 at 9 48 21 AM" src="https://github.com/user-attachments/assets/08bf938d-a3c5-408a-b1a0-65c449fdee08">

Estimated Entry Point: 2.1 

Estimated Exit Point(s): 3.4, 3.3, 3.1d

#### Acceptance Criteria

As a userArriving at the correct endpoint (see endpoint doc)

- I am presented with the following
  - 3 choice checkboxes
  - continue button
  - back button
- Selecting any permutation of these choices and clicking 'continue' or 'back' will result in the correct routing behavior as defined in the Design Tiles doc. This is the 'routing' portion.
- Any selection of options should be correctly persisted to the appropriate solutions (BE / FE)

---

### Choice Page Skeleton (L)

<img width="309" alt="Screenshot 2024-11-08 at 9 47 34 AM" src="https://github.com/user-attachments/assets/45f2423c-db79-4fb8-b86e-2319c87e9971">

Entry Point: 3.2

Exit Point(s): 3.1*, 3.3

#### Acceptance Criteria

- As a user visting this page, I should see 3 'Choice' options (unstyled)
- Selection will be stored in the correct data solutions (FE / BE)
  - NOTE this work must make this selection availabe to other FE componenets, as it will unblock subsequent work
 
---

### PDF Upload Page Skeleton & PDF Storage (L)

<img width="363" alt="Screenshot 2024-11-08 at 9 53 04 AM" src="https://github.com/user-attachments/assets/2c5cf249-1cb8-4901-9e04-f7fc1caaf067">

Entry Point: 3.3

Exit Point(s): TBD (where does a user get routed after they upload a PDF?)

Special Requirement: This should upload the PDF all the way to the correct storage solution (S3?) meaning there is a FE skeleton as well as an API and 3rd party requirement.

#### Acceptance Criteria

- As a user visting this page, I am presented with an option to upload a PDF
- Uploading this PDF stores and persists it to the correct data solution

---

### Start Page Skeleton (L)

**BLOCKED**: this requires the 'Choice Page Skeleton'. The Choice Page ticket defines the storage of data that the Form Tile and Continue Button in this ticket will require for their routing

<img width="255" alt="Screenshot 2024-11-08 at 9 39 06 AM" src="https://github.com/user-attachments/assets/b5f48ca3-1899-4b84-812d-57fb64e87e4b">

Entry Point: 3.1*

Exit Point: 3.2, Opt Out Modal / ??? (if someone opts out, where do they go after the modal?)

This page reads the status of the users form from the data solution and presents the Form Tile states
- option to start (3.2)
- option to continue (3.2)
- option to edit (if complete) (TBD? start of form or summary?)

Additionally, The 'Continue' Button now has conditional behavior.

- IF a user has opted out
  - THEN show them the opt out confirmation modal
  - modal routs to TBD (where do they go after they opt out?)
- ELSE IF a user has an incomplete form (not opted out is implicit here)
  - THEY they are prompted to complete their form
- ELSE
  - THEN they are routed to the next page (TBD, what comes after??)

---




## Event Intro / Type Choice: 1 sprint
- add 3.4 blank placeholder page. 
  - can click continue
    - routes to 3.5 placeholder
- add 3.5 blank placeholder page. 
  - can click continue
    - routes to 3.6 choice placeholder page
- add 3.6 Event Type
  - displays 4 check boxes
  - adds logic to handle routing based on selection in these check boxes

## Event to add / List & Loop page: 1 sprint
- placeholder list for added events. no style, should look at storage solution for list of 'events
- option to add a new event
  - routes to 3.8 (add event) form blank placeholder
- option to continue
  - routes to 3.11 (behavioral changes)

## Add event form: 2 sprints
- on any of these sub pages, cancel button should update solution and redirect
- add 3.8, unstyles with input
  - saves data to solution
  - continue routes to 3.9
- add 3.9 unstyled page with input
  - saves data to solution
  - continue routes to 3.10
- add 3.10 unstyled page with input
  - saves data to solution
  - continue routes to 3.7

## Behavioral Changes Part 1: 1 sprint
- intro page
- option to enter info or skip
  - enter info routes to change type input
    - saves data to solution
    - does not need to be a full list at this time, just enough to test
  - routes to either
    - change description page if changes entered
    - ??? somewhere else if no changes entered

## Behavioral Changes Part 2: 1 sprint
- Loop through added behaivoral changes
  - read behavoral changes
- form to add info
  - offer unstyled form input for change
    - must save to the solution for correct behavioral change
    - IF there is another change, continue to it
    - ELSE continue to next confirmation

## Conclusion / Summary page: 1 sprint
- prompt for 'give permission' should save to solution
- route to 'additional information'
- route to 'summary page'
  - must read from solution and list data
  - routes to next stage of form (out of 0781 flow)

## Add content / test: 1/4 sprint per each of the above

## JSON to PDF transformation service: 1 - 2 sprints
- Need to map these values into our database. This is probably going to be a copy of the existing 
  transform service


