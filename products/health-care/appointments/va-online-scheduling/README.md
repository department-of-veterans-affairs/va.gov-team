
<br />
  <h1 align="center">VA online scheduling on VA.gov</h1>

  <p align="center">
    Homepage for all VA online scheduling app (VAOSR) Documentation
    <br />
    <a href="https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wiki.mobilehealth.va.gov/pages/viewpage.action?pageId=180908234">Demo</a>
    ·
    <a href="https://app.flowmapp.com/share/0fdcf2559a4c55625591f89c2e5d7649/userflow/83089/">View User Flow</a>
    ·
    <a href="https://github.com/department-of-veterans-affairs/va.gov-team/projects/13">Roadmap</a>
    ·
    <a href="https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vaos&repos=133843125">Product Backlog</a>
  </p>
</p>

# Table of Contents

### About the product (VAOSR) 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
    - [MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/releases/vaosr-mvp.md)
- [OKRs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/analytics/vaos-kpis.md)

### Implementation Information
- [Status](#status)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Resources and Documentation](#resources-and-documentation)
- [Keywords](#Keywords)
- [Team](#Key)
- [Screenshots](#screenshots)

---
## Key Documents + Team Members
- GitHub Label: [vaos](https://github.com/department-of-veterans-affairs/va.gov-team/issues#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vaos&repos=133843125&showPipelineDescriptions=false)
- Chat
  - [DSVA Team Slack - #vaos-team](https://dsva.slack.com/channels/vaos-team)](https://app.slack.com/client/T03FECE8V/CMNQT72LX), [#vaos-eng](https://app.slack.com/client/T03FECE8V/CSCD0B1V3)
  - [VA PPG Team Slack - #vaos-sm-toolset](https://dsva.slack.com/channels/vaos-sm-toolset)](https://app.slack.com/client/T6J0KKXPW/CFCQT5XJL), [#vaos-engineers](https://app.slack.com/client/T6J0KKXPW/CM5ENJZ6C)
- [Zenhub](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vaos&repos=133843125)
- VA.gov link: https://www.va.gov/health-care/schedule-view-va-appointments/appointments/
- Demo video link: [Need to update] Current link -- https://drive.google.com/file/d/1LucLBX2AApkvPTK7nyo72SrFa7QZqmQQ/view
- [Confluence Wiki page for VAOSR](https://wiki.mobilehealth.va.gov/display/VAOSR/VAOS-R+UX+Dev+Team+Repository)
- Product POCs:
  - VAOS Suite Business Owners:
    - Dr. Kathleen Frisbee
    - Dr. John Murphy
    - Dr. Neil Evans
    - Dr. Clinton Greenstone
    - Ms. Flo Jenkinks
  - Mobile Portfolio Manager: Steve Eaton 
  - VAOS Suite Project Manager: Eric Hopkins 
  - VAOS Suite Analyst/Scrum Master: Judy Mercado 
  - VA.gov Health Product Owner: Lauren Alexanderson 
  - Lead Designer: Ryan Thurlwell, Peter Russo
  - Eng Lead: Steven Brush 
  - Frontend Engineers:
    - Jeff Balboni
    - Jennie McGibney 
    - Tony Williams
    - Lance Gunderson
  - BE Engineers:
    - Kam Karshenas
    - AJ Magbud
    - Brad Gross
    - Corey Ferris
  - Product Manager Lead: Lauren Ernest
- Full VAOS-R User Experience Flow: [VAOS-R User Flow Mapped](https://app.flowmapp.com/share/0fdcf2559a4c55625591f89c2e5d7649/userflow/83089/)

# About VA online scheduling product

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

---

# Implementation Info

## Status
- [MVP Phased release](product/phased-rollout-plan.md) -- Currently live 100% on VA.gov with new VAOS-R -- COMPLETE
- [Express Care release]() -- Active at 1 VAMC -- COMPLETE

## How to Access and Test
- Link: https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/
- Password protection info: Check with VAOS team member
- User authentication info: Check with VAOS team member

## Error Handling


## Service Level Objective


## API Calls and Dependent Systems


## Resources and Documentation
- Discovery and Research
- Technical Documentation
- Product specs
- Design
- [Roadmap] (https://github.com/department-of-veterans-affairs/va.gov-team/projects/13)
- ATO documentation

## Keywords
VA Online Scheduling, VAOS, Veteran Appointment Request

### Screenshots
#### Before
Old VAOS Tool: https://veteran.mobile.va.gov/var/v4/
![Old VAOS Tool Homepage](/products/health-care/appointments/va-online-scheduling/product/images/old-vaos-homepage.png)

#### After
New VAOS Tool: https://www.va.gov/health-care/schedule-view-va-appointments/appointments
![New VAOS Tool Homepage](/products/health-care/appointments/va-online-scheduling/product/images/new-vaos-homepage.png)
