# 0781 paper sync work breakdown

**This is a WIP, unrefined document. It is not a source of truth**. It is just my best estimates as to how long the work will take, and how we could break it down.

## TL;DR

This document references pages by number as defined in [this layout](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9250-79571&node-type=section&t=coFOPPvO8yrT5Pcq-0)

### Strategy
Esentially we roll through this from top to bottom, adding functionality. If that's 3 devs, then we simply pick up the next chunk. When we hit the bottom we go back and roll through adding content. As long as the routes are set in stone, this should all be pretty plug and play

This is just to get things functional. It does not take into account writting tests, accessibility testing, any advanced styling, rollout, etc.

### Workable Chunks

Each of these can be built and deployed esentially as 'sub apps' that start and end at predefined routes. 

## Build data storage 'solution': 1 sprint
- define where form data is stored
- ensure we have a FE API writing service / React store / Database harmony

## Pre-form routing: 1 sprint
- where the entry point is the first page a vet would see if the flipper was on (2.1)
  - 2.1 (screener page)
    - checkboxes to select. combinations and resulting routing defined in above layout doc
      - PTSD
      - Hearing Loss
      - Not Claiming
    - 'Submit' button or link
  - 3.1 (start page)
    - options to click
      - start (will become form 'box' with status in later work)
        - clicking this routes to 3.2 placeholder
      - continue
        - clicking this does nothing (error will be added later)
  - 3.2 (choice page)
    - route to blank place holder

## Form start routing / opt out logic: 1 sprint
- where entry point is defined as page 3.2
  - radio select for 
    - Complete online
      - routes to blank 3.4 mental health placeholder
    - upload
      - routes to blank 3.3 upload placeholder page
    - Opt out
      - sets relevant info in React store to ensure form flow is skipped
        - no idea what this is
      - routes to start page, displays placholder indicating user has 'opted out' (style not important yet)
      - backend request?

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


