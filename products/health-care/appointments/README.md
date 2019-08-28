# VA Online Scheduling Product Outline
- GitHub Label: vaos [TODO: add filtered GH link]
- Chat
  - [VA PPG Team Slack](vappgteam.slack.com)
  - [DSVA Team Slack - VAOS channel](https://app.slack.com/client/T03FECE8V/CMNQT72LX)
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
- Find where & how to schedule a healthcare appointment online
- Schedule a healthcare appointment online (where permitted)
- Find & take action on next steps to schedule healthcare appointments that can't be scheduled online
- Schedule (or find next steps to schedule) a healthcare appointment using common desktop, mobile, or tablet browsers

### Business
- Veterans are able to easily schedule the healthcare they've earned
- Veteran satisfaction with and trust in the VA improves
- Number of missed appointments is reduced [TODO: validate this problem]
- Support burden (money + time) associated with offline scheduling flows (like phone scheduling) is reduced
- Complies with all existing and upcoming legislation (e.g., Mission Act)
- VA can maintain and iterate on a veteran-facing solution in-house over the long term

### Non Goals
- Improving internal tools for schedulers (VATS configuration utility, Schedule Manager, etc.)
  - These will be phased out by Cerner tools
  - However, critical bugfixes and patches affecting production tools do need to be addressed

## Assumptions
- Veterans prefer self-service to face-to-face interaction
- Veterans prefer consolidated features to using separate tools & platforms (Secure Messaging, etc.)
- Veterans would prefer to be able to use a variety of devices to self-schedule healthcare appointments
- Missed appointments are due to lack of reminders / updates (and not some other cause)
- VA will be able to handle any influx in request volume that may stem from easier self-service Veteran experience

## Requirements and Constraints
- Legislation requires that certain features exist, and that those features may have specific functionality that's required.
- Backends may be swapped in the future (VistA -> Cerner), so APIs for self-scheduling may change in form & function in the future. This may require reworking the front end depending on the constraints of the new APIs.
- Data comes from several partner services that are not in the direct control of the VAOS team and that have other consumers.
- The existing healthcare appointment scheduling business logic is very complex and isn't standardized, as schedulers perform all kinds of hacks to coax the system into working for them and these hacks vary from site to site. Individual workflows aren't generalizable to the wider VA healthcare system.
     

## Discovery Takeaways

### Background & Context

#### What is VAOS?
VAOS is the name of an existing product suite containing a veteran-facing healthcare appointment online scheduling tool of the same name (formerly named VAR - Veteran Appointment Request), a scheduler-facing appointment management tool named Schedule Manager, and a schedule configuration utility for VA facilities, named VATS (VA Tool Set).

Schedule Manager and VATS are more or less in maintenance mode, as they will eventually be deprecated in favor of Cerner-based tools when VistA, the very old scheduling backend, is retired over the next few years.

#### How do veterans access VAOS today?
The veteran-facing VAOS tool is accessible via the appointment links on the [MHV dashboard](https://www.myhealth.va.gov/mhv-portal-web/home), or via the [VA mobile App Store](https://mobile.va.gov/appstore/) (though it is simply a web app and no actual VAOS mobile app exists for any platform). The direct URL for the veteran-facing tool is https://veteran.mobile.va.gov/var/v4/.

#### How do veterans use VAOS today and what is their feedback?
[Initial discovery research performed by DSVA in 2017](research/2017-studies/Online%20Scheduling%20Usability%20Study%20FINAL%2001-12-2018.pdf) found low task completion rates among veterans when research participants were asked to walk through self-scheduling an appointment. Targeted work was done to address specific issues found by that team (increasing the number of auth options, improving the visibility / marketing of the tool, adding more types of care to each facility's data, etc.), and additional follow-on work was identified to improve conversion rates (scheduling or requesting appointments) of veterans entering the online scheduling funnel by improving the UX of the tool.

#### Legislation
The [VA Mission Act](https://missionact.va.gov/) mandates expanded options for veterans seeking care. In practice, this translates to giving veterans private healthcare options in situations where VA care is not practical (due to distance from VA facility, excessive wait times at nearby VA facilities, lack of specialists, etc.). In these cases, private care is available as an alternative to VA care, and is named 'Community Care.' Scheduling Community Care appointments is a separate process that needs its own discovery work - both technical and design - to understand. However, Community Care (and Community Care eligibility data) integration will be important to any healthcare self-scheduling online tool in the long term.

#### Current capabilities & limitations
The online scheduling tool allows veterans to direclty self-schedule or request an appointment at a VA facility (or request an appointment with a community care private facility) for a number of types of care (primary care, mental health, social work, specialties like optometry, etc.).

##### Self-scheduling directly is usually not an option
Technically, veterans are able to directly self-schedule for many types of health appointments at the VA. However, intricate & often-times impossible work is required to make a single given schedule complete & accurate with regard to availability, so site admins choose to make a majority of healthcare appointment types not self-schedulable. The reasons for this are various, but basically boil down to limitations within how resources are grouped under a schedule - as a bad example, a multi-disciplinary doctor could be a part of two clinics or two locations, so might be on two schedules simultaneously, which would make it impossible to know whether he or she was truly available at a given time based on looking at just one clinic's schedule. This problem also affects doctors and schedulers, who may have to look at several calendars simulatneously in order to know what's free and where to go next.

Generally, veterans are able to self-schedule for Primary Care with their PACT (Patient-Aligned Care Team), and may be able to schedule for other things that their PACT controls (disciplines within a PACT vary based on individual veteran needs), but most care types at most facilities are only requestable.

##### Registration happens offline & must be done per-region
An additional limitation is that a veteran must be registered with a VA region, which is an offline process that happens their VA facility or over the phone before they're able to use the online scheduling tool. Worse, the registration isn't national since VistA instances are deployed at the regional level - so while you may be able to seek care at your local VAMC via online scheduling, you will not have the option to online schedule after moving to a new state. There is no way to register online.


### Discovery Next Steps

#### Prototype usability, technical discovery, and metrics gathering
- Based on existing research and interviews with product owners, DSVA created [prototypes](https://adhoc.invisionapp.com/share/WATIINRHZ3F#/screens/379622434) for several scheduling flows. We are putting these flows in front of veterans in early Sept 2019 and running targeted usability sessions against the prototypes to test the design hypotheses. The outcome of these research sessions will inform our product development priorities.
- Technical discovery work is currently underway to understand what the technical implications are of the prototype as it stands today.
- Data gathering of baseline / current tool performance underway

#### Calendar UI
Direct scheduling UX centers around a calendar view in the prototypes. We need to do some discovery here to determine whether this new pattern is appropriate or if it could be solved more simply.


#### Community Care research
After initial usability testing is complete and development is underway, we'll perform additional discovery and user research centered around community care integration - where veterans expect this option, how we should present their options, handling health care registration and eligibility, technical discovery regarding actual direct-scheduling capabilities, integrating with the VA.gov Facility Locator, etc.


## Solution Approach [WIP]

### Strategic Bets
[TODO: adds our bets to address veteran & va goals]

### MVP Implementation
[Initial prototype based on DSVA research](https://adhoc.invisionapp.com/share/WATIINRHZ3F#/screens/379622434)

MVP Definition
- Initial data in Analytics suggests that direct-scheduling Primary Care with a veteran's PACT team could account for ~50% of existing tool usage (need to cross-reference this with other data)
  - This approach would require discovery for the calendar date picker UX
  - May wish to start with something simpler, which would be a lower-cost test both in terms of traffic and dev time
  
 Beta conversation
 - Another option would be to leverage our ability to offer a beta app on VA.gov (not mutually exclusive with a limited-scope MVP)

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
