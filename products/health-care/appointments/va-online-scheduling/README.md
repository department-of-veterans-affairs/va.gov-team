# VA Online Scheduling Product Outline
- GitHub Label: [vaos](https://github.com/department-of-veterans-affairs/va.gov-team/issues#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vaos&repos=133843125&showPipelineDescriptions=false)
- Chat
  - [VA PPG Team Slack](vappgteam.slack.com)
  - [DSVA Team Slack - VAOS channel](https://app.slack.com/client/T03FECE8V/CMNQT72LX)
- VA.gov link: N/A [TODO: add once VAOS in production]
- Demo video link: n/a [TODO: add once VAOS in production]
- Product POCs:
  - VAOS Suite Business Owners:
    - Dr. Kathleen Frisbee (Kathleen.Frisbee@va.gov)
    - Dr. Neil Evans (Neil.Evans@va.gov)
    - Dr. Clinton Greenstone (Clinton.Greenstone@va.gov)
    - Dr. Michael Davies (Michael.Davies@va.gov)
  - VAOS Suite Product Owner: Steve Eaton (steve.eaton@va.gov)
  - VAOS Suite Program Manager: Eric Hopkins (eric.hopkins@va.gov)
  - VAOS Suite Project Manager: Judy Mercado (judy.mercado@va.gov)
  - VA.gov Health Product Owner: Lauren Alexanderson (lauren.alexanderson@va.gov)
  - Lead Designer: Ryan Thurlwell (ryan.thurlwell@va.gov)
  - Eng Lead: Stephen Barrs (stephen.barrs@va.gov)
  - Frontend Engineers:
    - Jeff Balboni (jeff@adhocteam.us)
    - Narin Ratana (narin@adhocteam.us)
    - Jennie McGibney (jennie.mcgibney@va.gov)
    - Tony Williams (tony.williams@va.gov)
  - BE Engineers:
    - Kam Karshenas (kam@adhocteam.us)
    - Alastair Dawson (alastair@adhocteam.us)
    - Steven Brush (steven.brush@va.gov
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
    - [MVP](#mvp-implementation)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
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

## North Star Goal of Online Scheduling 
Deliver a seamless and positive experience for any Veteran who wants to schedule an appointment online 

## User Problem Statement
A very small percentage of veteran appointments with VA Medical Centers are scheduled online. Other avenues for scheduling appointments like phone, secure messaging, reminder letters, and return to clinic orders can lead to clerical errors, miscommunications, and heavier burden for schedulers. These issues cause delays in scheduling care and are frustrating for veterans.

## Solution Goals

### Veterans
- Find where & how to schedule a healthcare appointment online
- Schedule a healthcare appointment online quickly & easily
- Choose between VA and Community Care healthcare when schduling (if eligible)
- Find actionable next steps to schedule healthcare appointments that can't be scheduled online
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
- Improving the backend data sources is mostly out of scope, though vets-api can work to optimize around the edges of the existing services

## Design principles
- Veterans see appointments as a single experience. If the feature is not related to scheduling or canceling an appointment, it is a separate product. 
- Always give users a path forward. No dead ends. 
- Don’t use VA Online Scheduling to solve staff workflow problems.
- Don’t ask VA Online Scheduling to solve bad data problems.
- Don’t present Veterans with options they don’t have.
- The burden of business rules is on the VA, not Veterans.

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

##### Self-scheduling directly is not currently configured for all care types
Technically, veterans are able to directly self-schedule for many types of health appointments at the VA. However, a lot of work is required to make a single given schedule complete & accurate with regard to availability, so site admins often default to not allowing direct self-scheduling. The reasons for this are various, but basically boil down to limitations within how resources are grouped under a schedule - as a bad example, a multi-disciplinary doctor could be a part of two clinics or two locations, so might be on two schedules simultaneously, which would make it impossible to know whether he or she was truly available at a given time based on looking at just one clinic's schedule. This problem also affects doctors and schedulers, who may have to look at several calendars simulatneously in order to know what's free and where to go next.

Generally, veterans are able to self-schedule for Primary Care with their PACT (Patient-Aligned Care Team), and may be able to schedule for other things that their PACT controls (disciplines within a PACT vary based on individual veteran needs), but most care types at most facilities are only requestable.

About 45% of legacy VAOS appointments are directly scheduled, compared to 55% that are requested.

##### Registration happens offline & must be done per-region
An additional limitation is that a veteran must be registered with a VA region, which is an offline process that happens their VA facility or over the phone before they're able to use the online scheduling tool. The registration isn't national since VistA instances are deployed at the regional level - so while you may be able to seek care at your local VAMC via online scheduling, you will not have the option to online schedule after moving to a new state. There is no way to register online.

##### Community Care & Drive Time
'Drive Time' is one of the eligibility criteria for Community Care, and is based on residential address used to enroll in healthcare. Specialty appointments have a max drive time of 60 minutes, and primary care 30. If no facilities exist within this range, a veteran will be eligible. There are also three static codes that determine eligibility ('grandfathered', 'hardship', and 'no VA facility').

The three static codes are used to determine eligibility for CC in existing VAOS, but the VA.gov tool will pull data for these _plus_ drive time from the new CCE API.

#### Provider-based scheduling
Currently, veterans start the online scheduling flow by selecting a type of care they'd like to schedule. In the Cerner future, it should be possible to enable provider-based scheduling (which is common in private sector solutions). However, it may currently be possible to schedule with providers that a veteran has seen before. More technical & design discovery needs to happen to understand this use case.

#### Improving DevOps and SRE capabilities
We don't currently have a lot of insight into the performance of the veteran-facing tool and associated bottlenecks, which makes issues hard to trace and debug. This point also hinders our ability to get a baseline reading of performance, which would be helpful for prioritizing problem areas in a data-informed way.

#### Duplication in messaging options & platforms
The existing VAOS solution supports messages / notifications from providers / schedulers. Additionally, veterans can write extra details in their appointment or appointment request, which will get relayed to providers along with the other appointment details. Responding to an appointment from their side will throw a message into the veteran's VAOS messaging queue that they can check from within the tool. However, this functionality duplicates Secure Messaging, which should be the hub for all messages between veterans and VA healthcare. We should do discovery research on what problems this is causing for veterans and what they'd like to see from VAOS messaging, and how to reduce duplication with other messaging tools.

#### Ability to reschedule appointments
Veterans can already cancel appointments - we may wish to hide some complexity for them by allowing them to 'reschedule' an appointment in the UI. This would require that we cancel the appointment and create a new one in its place behind the scenes. However, unclear whether this is something that veterans are currently asking for, and also unclear if there are any business rules for scheduling that might get in the way (e.g., if you're required to see a doctor within x days, but your rescheduled appointment would be outside that window, how would we know? Not sure if this - or anything else - is a real issue though).

## Solution Approach

### Strategic Bets

#### Applying human-centered design principles to VAOS development will improve completion rates for scheduling / requesting an appointment and overall veteran satisfaction rates.
Current Analytics data suggests that roughly 30% of veterans who enter the online scheduling flow are able to complete the flow (by either requesting or directly scheduling an appointment). We believe we can significantly improve the completion rates through better UX design. Better completion rates should translate into more satisfied veterans as well.

#### Revising the content of the scheduling tool with an eye toward plain language will improve veteran satisfaction and completion rates.
Scheduling options are confusing. Not all appointments can be directly scheduled, not all facilities are available to a veteran, not all care types are avaialable within a given facility, Community Care has specific eligibility requirements that aren't necessarily clear, it's not always clear how to book over the phone if online isn't an option, etc. We believe we can improve veteran satisfaction and completion rates by better explaining options to veterans, and providing more actionable next steps for completing appointment scheduling in cases where booking or requesting online isn't possible.

#### Building VAOS on the VA.gov platform will improve long-term maintainability, sustainability, and iteration speed.
Rewritting the veteran-facing scheduling application on VA.gov will give us access to shared resources across product, devops, design, research, issue triage, and insights/analytics. Additionally, VA.gov already has established design and front end patterns that we can reuse, while also giving us the ability to deploy to production at will.


#### Improving SRE & DevOps capabilities will ultimately improve completion rates and veteran satisfaction with the scheduling tool
The legacy tool has no performance monitoring, and developer speed is low due to challenges understanding the existing codebase & lack of dedicated SRE & devops expertise to help set the team up for success. Solving these key challenges will help us deliver a faster, more resilient, more efficient tool to veterans while reducing its long-term maintenance costs.

### MVP Implementation
The goal of the MVP is to improve usability of VAOS by rewritting the tool on VA.gov using existing design patterns already implemented there. We will not be introducing any new features compared to the existing tool, but will instead focus solely on veteran-centered usability.

  - KPIs
    - overall veteran usage of the tool
    - Task completion rates (requests, self-schedules)
    - Veteran satisfaction rates & contact center help requests
  - Goals
    - Increase the number of veterans entering the 'new appointment' flow compared to the existing tool
    - Increase the percent of veterans who are able to successfully request or schedule an appointment after starting the 'new appointment' flow compared to the existing tool
    - Decrease the number of contact center support tickets created about VAOS

#### Acceptance Criteria
To achieve these MVP goals we'll focus on implementing a tool on VA.gov that mostly mirrors the functionality of the existing VAOS tool
- Veterans can see details for their pending & confirmed appointments
- Veterans can cancel an existing confirmed or requested appointment
- Veterans can directly schedule a new Primary Care or Mental Health appointment at clinic where they were seen previously
- Veterans can request to schedule a new appointment for a type of care at a participating VA facility
- Veterans can request to schedule a new appointment for Community Care for a given type of care when eligible based on static code or drive time eligibility
- Veterans can message a scheduling clerk during the process of requesting an appointment
- Preferred appointment times are captured for both requests and self-scheduled appointments so that the VA can continue to track wait times

Additionally, the front end will need to talk to a new vets-api wrapper for the existing VAMF services. This wrapper will need to:
- Authenticate with necessary VAMF services (via integration with User Service)
- Send the front end data in a format that matches existing VAMF services as closely as possible

## Value Propositions

#### User Value
Makes it easier for veterans to directly schedule or request a healthcare appointment, either with the VA or a Community Care provider. The experience is integrated and cohesive with VA.gov, which is already a property with which many veterans are familiar.

#### Business Value
Better trust and satisfaction with the VA. More appointments scheduled and requested online, reducing support costs for phone-based bookings. More maintainable solution by in-house teams over the long-term.

## KPIs

### Goals [TODO: establish goal states once baselines measured]
- Increase percent of appointments scheduled online
- Decrease percent of scheduled appointments that result in no-shows
- Improve perception of scheduling experience among veterans
- Decrease processing time for schedulers
- Decrease phone volume for appointment scheduling
- Reduce volume of appointments scheduled via Secure Messaging

### KPIs [TODO: table or presentation improvements]

- Percent of veterans who are able to complete the scheduling flow
  - Measure with GA events: number of terminal events fired (request / direct schedule) compared to number of 'add new appointment' events fired.
- Percent of overall appointments scheduled or requested online
  - Tap into VA healthcare appointments metrics, compare with total completion events fired (requests + direct schedules)
- Percent of veterans who feel that they've accomplished what they set out to do
  - No way to currently track this and no baseline exists, but we could add a single survey question to the existing flow
- Number of healthcare appointments scheduled over the phone
  - Would need to tap into phone metrics, which may not be possible
- Veteran satisfaction
  - Not sure where these metrics would come from
- Latency, uptime, production bug volume, deploy speed
  - Should look through App Dynamics and also review any other sources for these metrics that we could track over time

---

# Implementation Info

## Status
- In active discovery and development
- Team onboarding onto VSP
- [Phased rollout](product/phased-rollout-plan.md) to begin November

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
VA Online Scheduling, VAOS, Veteran Appointment Request

## Team

- VA Executive Sponsor ``: 
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`:
- Design Lead:
- Eng Lead:
- VA Web Comms Partner: 
- VA Contact Center Partner(s): 
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):
- Front-end Engineer(s):
- Back-end Engineer(s):

`*` = approval required for launch

### Screenshots
#### Before
#### After
