# Initiative Brief - Reschedule Appointments
## Overview

Currently on VAOS, there isn't functionality to reschedule an appointment. A Veteran may be able to cancel a booked appointment if facility configurations allow for it.
 
---

## Outcome Summary

A user can update a booked (upcoming or canceled) VA appointment and leave the interaction with a new booked appointment for a different date and/or time.

**Related/Associated product(s)**
- Dependent on [Homepage Refresh](homepage-refresh-initiative-2021.md) rollout 

## Problem
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - To reschedule an appointment, a user must cancel their appointment and go through the full flow to create a new appointment.
  - In many cases, the original appointment is not available for direct scheduling online.
  - There's a risk that a user cancels an appointment and can't reschedule the same kind of appointment due.
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - Current functionality
  - Anecdotal feedback from stakeholders
  - Qualitative feedback from surveys
* How does this initiative help further OCTO-DE's mission and goals?
  - Improve user satisfaction
  - Meet user expectations of available online transactions


 <details>
  <summary><b>User Feedback Quotes</b></summary>
  
  <q>
    Wanted to reschedule an annual appointment to a year from now, as it isn't needed this year.  System says, I cannot reschedule without cancelling first, so I did. Now the only open appointment options are within a few months, so now, I must add to confusion to reschedule a cancelled appointment
  </q></p>
  
  <q>
    I needed to reschedule appontment with PMand R because of symptoms and options were only cancel and no reschedule or ability to describe nature for cancel.
  </q></p>

</details>

## Desired Outcomes
- A user can book the same appointment for a different time
- Patients attend their scheduled appointments

## Undesired Outcomes
- A user can't reschedule their appointment by self-scheduling
- A user reschedules an appointment and the new appointment is not booked (i.e. user leaves with 0 appointments)
- A user reschedules an appointment and the original appointment is not canceled (i.e. user has 2 of the same appointment)

## Key Decisions
- It is more preferable for a user to have 2 of the same appointments booked instead of 0 appointments (discussed with Dr. Murphy in PI Planning)
  - Book updated appointment, Then cancel original

---
## Measuring Success

### Key Performance Indicators (KPIs)

Key Result | Baseline | Target | Link to data source (e.g. GA, Domo)
--- | --- | --- | ---
Increase conversion rate | Baseline | Target | Link to data source (e.g. GA, Domo)
Increase scheduling submission success rate | Baseline | Target | Link to data source (e.g. GA, Domo)
Increase number of scheduling transactions | Baseline | Target | Link to data source (e.g. GA, Domo)
Increase satisfaction rating | Baseline | Target | Link to data source (e.g. GA, Domo)
Reduce no-shows to appointments | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The experience may vary based on facility configurations
  - If user is unable to self schedule the new appointment, they may lose trust in the functionality and are less likely to return
- **Usability Risks** (can people figure out how to use it):
  - We will have to balance the distinction between the cancel and reschedule functionality
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Must work with VAMF to set up rebook and cancel interactions
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: VA stakeholder testing, marketing, compliance requirements 

### Prioritization
1. Reschedule through direct schedule flow in VAOS
2. Reschedule through other channels
3. TBD - "Reschedule" requests

### Solution Summary
- Date and time change only


--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

**Cancel CTA**

![staging va gov_health-care_schedule-view-va-appointments_appointments_va_202201032100983000030800000000000000 copy](https://user-images.githubusercontent.com/72046525/142261083-d2f5d501-2da9-4026-9475-a1dcaa18a287.png)

**Cancel Confirmation Modal**

![staging va gov_health-care_schedule-view-va-appointments_appointments_va_202201032100983000030800000000000000 (2)](https://user-images.githubusercontent.com/72046525/142261188-1de1a7be-2bf5-4b28-87fd-0931d9a09f15.png)



### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
