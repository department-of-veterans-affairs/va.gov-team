# VA Online Scheduling (VAOS) Product Outline
---

## Overview
VA online scheduling (VAOS) is a Veteran-facing healthcare appointment scheduling tool on VA.gov.  VAOS allows veterans to view upcoming, pending and past and canceled appointments, directly schedule appointments, submit a request for VA and Community Care appointments, and cancel appointments/requests.

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

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes


---
## Measuring Success

### Objectives / Key results (OKRs) / Key Performance Indicators (KPIs)

[Google Data Studio - VAOS OKRs](https://datastudio.google.com/reporting/c5241d40-3786-4b4a-bdda-247c5e32fc60/page/p_qpdl4337qc)

### OBJECTIVE 1: Increase appointments successfully requested or scheduled.
- **KR** - Increase completion rate to 50% or above (previous baseline was 35% for initial rollout)
  - **KPI** - Converion Rate - Number of appointments started and completed
- **KR** - Increase scheduling submission success rate to 99%
  - **KPI** - Submission Rate - Number of appointments successfully sumbmitted

### OBJECTIVE 2: Increase number of Online transactions. 
- **KR** - Increase number of scheduling transactions by x%
  - **KPI** - New appointment transactions (VA Request/VA Direct/CC Request)
  - **KPI** - Canceled appointments
- **KR** - Increase number of appointment pageviews by x%
  - **KPI** - All Pageviews (Upcoming/Past/Requested/Canceled/VA Details/CC Details)

### OBJECTIVE 3: Improve the usability of VA Online Scheduling.
- **KR** - Increase number of users who access VA online scheduling by x%
  - **KPI** - Number of Veterans who log in / access VAOS

#### Baseline KPI Values

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

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
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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

![VAOS Old Appt List](https://user-images.githubusercontent.com/97117349/204638371-6fd63913-d86d-4ed4-8185-dcee9b18279d.png)

### After

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
