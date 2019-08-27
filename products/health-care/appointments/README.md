# VA Online Scheduling Product Outline
- GitHub Label: vaos [TODO: add filtered GH link]
- Chat
  - [VAPPG Slack](vappgteam.slack.com)
  - [DSVA Slack - VAOS team](https://app.slack.com/client/T03FECE8V/CMNQT72LX)
- Status: Discovery / Not in production
- VA.gov link: N/A [TODO: add once VAOS in production]
- Demo video link: n/a [TODO: add once VAOS in production]
- Product POCs:
  - VA.gov Health Product Owner: Lauren Alexanderson (lauren.alexanderson@va.gov)
  - Architect: Kam Karshenas (kam@adhocteam.us / kamyar.karshenas@va.gov)
  - Eng Lead: Stephen Barrs (stephen.barrs@va.gov
  - Product Manager: Mark Greenburg (mark.greenburg@adhocteam.us / mark.greenburg@va.gov)

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Resources and Documentation](#resources-and-documentation)
- [Keywords](#Keywords)
- [Team](#team)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement
A very small percentage of veteran appointments with VA Medical Centers are scheduled online. Other avenues for scheduling appointments like phone, secure messaging, reminder letters, and return to clinic orders can lead to clerical errors, miscommunications, and heavier burden for schedulers. These issues cause delays in scheduling care and are frustrating for veterans.

## Solution Goals

### Veterans
- Make scheduling healthcare appointments online easier & improve the success rate of online scheduling attempts
- Enable veterans to schedule appointments on the platform they already use to handle other VA interactions
- Make it easier to get help or find next steps for appointments that can't be scheduled online
- Allow veterans to schedule appointments online through any common device to which a veteran may have access

### Business
- Ensure that veterans are able to easily schedule the healthcare they've earned
- Improve veteran satisfaction with and trust in the VA
- Reduce number of missed appointments
- Reduce support burden (money + time) associated with offline scheduling flows like phone scheduling
- Comply with all existing and upcoming legislation (e.g., Mission Act)

### Non Goals


## Assumptions
- Veterans prefer self-service to face-to-face interaction
- Veterans prefer consolidated features to using separate tools & platforms (Secure Messaging, etc.)
- Veterans would prefer to be able to use a variety of devices to self-schedule healthcare appointments
- Missed appointments are due to lack of reminders / updates (and not some other cause)
- VA will be able to handle any influx in request volume that may stem from easier self-service Veteran experience

## Requirements and Constraints
- Legislation requires that certain features exist, and that those features may have specific functionality that's required.
- Backends may be swapped in the future (VistA -> Cerner), so APIs for self-scheduling may change in form & function in the future. This may require front-end changes as well.

## Discovery Takeaways

[Initial prototype based on DSVA research](https://adhoc.invisionapp.com/share/WATIINRHZ3F#/screens/379622434)

## Solution Approach
[WIP]
- Provide an intuitive home for the scheduling tool so that veterans can interact with the VA via a single platform
- Easily navigate to scheduling app and set up an appointment as a self-service
- Make it easier for veterans to find information and steps needed to schedule offline when online scheduling not possible


## Value Propositions

#### User Value

#### Business Value

## KPIs

### Goals
- Increase percent of appointments scheduled online
- Decrease percent of scheduled appointments that result in no-shows
- Improve perception of scheduling experience among veterans
- Decrease processing time for schedulers
- Decrease phone volume for appointment scheduling
- Reduce volume of appointments scheduled via Secure Messaging

### KPIs
[TODO: Add some KPIs once we get a handle on available and possible metrics]

---

# Implementation Info

## Status

## Solution Narrative
- **Date**: summary of any big changes and why
- **Date**: summary of any big changes and why

## How to Access and Test
- Link:
- Password protection info:
- User authentication info:

## Error Handling

## Service Level Objective

## API Calls and Dependent Systems

## Resources and Documentation

- Discovery and Research
- Technical Documentation
- Product specs
- Design
- Roadmap
- ATO documentation

## Keywords


## Team

- VA Executive Sponsor `*`: 
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`:
- Design Lead:
- Eng Lead:
- VA Web Comms Partner: 
- VA Call Center Partner(s): 
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):
- Front-end Engineer(s):
- Back-end Engineer(s):

`*` = approval required for launch

### Screenshots
#### Before
#### After
