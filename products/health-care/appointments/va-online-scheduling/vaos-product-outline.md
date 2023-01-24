# VA Online Scheduling (VAOS) Product Outline
---

## Overview
VA online scheduling (VAOS) is a Veteran-facing healthcare appointment scheduling tool on VA.gov.  VAOS allows veterans to view upcoming, pending, past and canceled appointments, directly schedule a VA appointment, submit a request for VA and Community Care appointments, and cancel an appointment/request.

The VAOS application running on VA.gov was released to Veterans in March 2020 through a phased rollout.  The tool was gradually released until 100 percent of Veterans were using VAOS on VA.gov.  As of March 18, 2021 the VAOS application is fully availale to all Veterans on VA.gov.

## Problem Statement
A very small percentage of Veteran appointments with VA Medical Centers are scheduled online. Other avenues for scheduling appointments like phone, secure messaging, reminder letters, and return to clinic orders can lead to clerical errors, miscommunications, and a heavier burden for schedulers. These issues cause delays in scheduling care and are frustrating for Veterans.
 
## Desired User Outcomes

- VAOS is the first place veterans go to view and manage their VA appointments
- Reduce confusion and simplify the appointment scheduling process for veterans
- Create a seemless and positive experience for any Veteran who wants to schedule an appointment online

## Undesired User Outcomes

- Veterans require knowledge of VA processes and rules in order to use VAOS
- Veterans encounter dead ends and can't complete scheduling tasks using VAOS
- Veterans require assistance or are frustrated when using VAOS

## Desired Business Outcomes

- Better trust and satisfaction with the VA. 
- More appointments scheduled and requested online, reducing support costs for phone-based bookings. 
- More maintainable solution by in-house teams over the long-term.
- Decrease the number of appointments that result in no-shows

## Undesired Business Outcomes

- Increase in Help Desk support related to scheduling appointments through VAOS
- Veterans being booked for incorrect appointment type
- Errors in date or time of booked appointments
- Increase in number of no-show appointments

---
## Measuring Success

### Objectives / Key results (OKRs) / Key Performance Indicators (KPIs)

[Google Data Studio - VAOS OKRs](https://datastudio.google.com/reporting/c5241d40-3786-4b4a-bdda-247c5e32fc60/page/p_qpdl4337qc)

### OBJECTIVE 1: Increase appointments successfully requested or scheduled.
- **KR** - Increase completion rate to 50% or above (previous baseline was 35% for initial rollout)
  - **KPI** - Converion Rate - Number of appointments started and completed
- **KR** - Increase scheduling submission success rate to 99%
  - **KPI** - Submission Rate - Number of appointments successfully sumbmitted

![image](https://user-images.githubusercontent.com/97117349/204655179-8bf2953d-c740-44b7-a13d-a3e495b2cdba.png)
![Flow Conversion Rate](https://user-images.githubusercontent.com/97117349/204656384-bc7c5212-fc5a-4ff4-bc95-cb0e0625e618.png)

### OBJECTIVE 2: Increase number of Online transactions. 
- **KR** - Increase number of scheduling transactions by x%
  - **KPI** - New appointment transactions (VA Request/VA Direct/CC Request)
  - **KPI** - Canceled appointments
- **KR** - Increase number of appointment pageviews by x%
  - **KPI** - All Pageviews (Upcoming/Past/Requested/Canceled/VA Details/CC Details)

![image](https://user-images.githubusercontent.com/97117349/204655496-5842fc70-fc1b-449a-b6b9-0075e681a66d.png)
![Scheduling Transactions (YoY) (1)](https://user-images.githubusercontent.com/97117349/204656660-3c847f71-11af-4057-8031-e53eeb076eee.png)

### OBJECTIVE 3: Improve the usability of VA Online Scheduling.
- **KR** - Increase number of users who access VA online scheduling by x%
  - **KPI** - Number of Veterans who log in / access VAOS

![image](https://user-images.githubusercontent.com/97117349/204655641-26b05c32-a5b9-4868-b1de-021eec8399d8.png)
![Web Users (YoY)](https://user-images.githubusercontent.com/97117349/204656749-bb31340d-4418-4ef6-a6db-54c6f9f3da10.png)

#### Baseline KPI Values

## Assumptions
- Providing veterans with a self service appointment scheduling application will:
  - Decrease the amount of time veterans spend making an appointment
  - Provide more accurate information in a timely manner resulting in fewer no-shows
  - Increase veteran satisfaction with the VA and the appointment scheduling process 

## Solution Approach

- VAOS is currently updating the core services used for requesting and scheduling appointments within the VA.  This involves replacing old services used today with modern architecture.  The new VAOS and Acheron service will allow retirement of old technology, such as Scheduling Manager, and reduce the number of systems that the scheduling staff needs to work with.
- The initial release will update the appointment request workflow for VA and Community Care requests.  Direct Scheduled appointments will be addressed soon after the initial release of the new VAOS Service and Acheron.
- Besides eliminating old technology, the new VAOS Service and Acheron form the foundation for connectivity to modern healthcare systems.  The updated services more closely adhere to the FHIR interface standard.  This is important as we connect with other systmes, such as Cerner, and develop new workflows, such as provider based scheduling.

### Initiatives
This is a list of the current initiatives in progress or on the road map.

- VAOS Service Integration | [Link to Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/vaos-service-integration/vaos-service-integration-initiative-brief.md)
- Appointment List Redesign | [Link to Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/appointment-list/ininitiative-brief-appointment-list.md)
- Reschedule Appointments | [Link to Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/reschedule-appointments/reschedule-appointments-initiative-brief.md)
- Appointment Detail Improvements | [Link to Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/appointment-details.md)
- Improve Community Care and Request Appointment Flow | [Link to Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/cc-request-flow.md)
- Update API Domain | [Link to Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/domain-api-update.md)
--- 

## Launch Strategy
- VAOS is live in production and available to all veterans.  Once a veteran signs in to VA.gov a link to VAOS is shown on their homepage along with their next upcoming appointment.
- The integration to VAOS Service and Acheron will be the next launch by the VAOS team.
- [VAOS & Acheron Service Integration Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/vaos-service-integration/vaos-service-integration-release-plan.md)

## Launch Dates
- Original launch March 2020 (phased rollout)
- March 18, 2021 - Enabled for 100% of veterans
- July 29, 2022 - VAOS Service Community Care workflow in production (feature flags disabled)
- December 1, 2022 - VAOS Service VA Request workflow in production (feature flags disabled)

---

## Solution Narrative

### Current Status

- VA Online Scheduling is live on the VA.gov platform and enables veterans to directly schedule appointments for services like primary care and mental health.  For appointments that can't be directly scheduled, veterans can make requests for appointments to the VA and Community Care.  The VAOS team is ccompleting the transition over to the new VAOS Service, which will route VA requests to VistA and Community Care requests to HSRM.  This will allow decomissioning of Scheduling Manager once all old requests have been processed.  Once this trasition is complete, the next step will be to route direct scheduled appointments through Acheron to VistA.
- The VAOS team is also working on updating the appointment list view.  This work will make it easier for veterans to understand what appointments they have scheduled and whether they are in person, an online video session or a telephone call.  This work is slated to be completed and launched during Q1-2023.
- The next projects on the schedule for VAOS are Provider Based Scheduling, Multi-modailty Scheduling and Rescheduling of appointments.  The VAOS team is in the research and design phase for these intiatives.

### Key Decisions

- [Key Decisions FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/product/decisions/decisions-faq.md)
- [VAOS Business Rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md)
---
   
## Screenshots

- [User Flow Diagram](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=0%3A1&t=sCpR1vUgIXPWrNMx-1)

### Before

- Original VAOS Appointment List view

![image](https://user-images.githubusercontent.com/97117349/204657147-4b134465-356c-45fa-9c6e-e3045a32e0f1.png)

- Initial VAOS Appointment List view on VA.gov

![VAOS Old Appt List](https://user-images.githubusercontent.com/97117349/204638371-6fd63913-d86d-4ed4-8185-dcee9b18279d.png)

### After

- Current VAOS Appointment List view

![VAOS Updated Appt List](https://user-images.githubusercontent.com/97117349/204637467-58add092-59da-491e-9119-7d5659f7459c.png)

---

#### Communications

<details>

- Team Name: VAOS - VA Online Scheduling
- GitHub Label: vaos
- Slack channel: [#vaos-team](https://dsva.slack.com/archives/CMNQT72LX), [#vaos-eng](https://dsva.slack.com/archives/CSCD0B1V3), [#vaos-alerts](https://dsva.slack.com/archives/C016QB6T340), [#vaos-engineering](https://dsva.slack.com/archives/C023EFZPX4K), 
- Product POCs: 
  - [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP), Sr. Product Manager 
  - [Leah De La Costa](https://dsva.slack.com/archives/D02UF0RKQRK), Associate Product Manager
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
   - [Kay Lawyer](https://dsva.slack.com/archives/D0386DE3B8C), Health Products- Office of CTO
 - PM: 
   - [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)
   - [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79)
 - Engineering:
   - [Simi Adebowale](https://dsva.slack.com/archives/D037VNB23T2)
   - [Corey Ferris](https://dsva.slack.com/team/U01F5F6V8QN)
   - [Ryan Shaw](https://dsva.slack.com/team/U039WSSQKS4)
   - [AJ Magbud](https://dsva.slack.com/team/UUW4NUCM7)
   - [Jennie McGibney](https://dsva.slack.com/team/UMLH49T7G)
   - [Tony Williams](https://dsva.slack.com/team/UMBGJ37EK)
 - Research/Design: 
   - [Peter Russo](https://dsva.slack.com/team/U01C2UUHXH9)
   - [Ciera Maddox](https://dsva.slack.com/team/U02JWT564E9)
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
