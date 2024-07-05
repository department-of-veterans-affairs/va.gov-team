# Initiative Brief - Oracle Health Scheduling

## Overview

The Appointments tool on VA.gov will need to support online scheduling for Oracle Health. The goal is to sunset the current My VA Health portal and have users use the MHV on VA.gov tool to schedule and manage their appointments.
 
---

## Outcome Summary

A user can view their appointments (upcoming, pending, canceled or past), book an appointment and submit request an appointment at an Oracle Health site. 


**Related/Associated product(s)**
- Dependent on [VPG service launch](.md) rollout 

## Problem
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - We would need to support the sites that have the Oracle Health system. The VA.gov Appointments tool does online shceduling for Vista system and HSRM for Community Care requests. This addition would be benefecial for Veterans who are registered at a Oracle Health site and would have the ability to use the new MHV on VA.gov application.  
  
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - Trying to unify the online scheduling for a Veteran. Some Veterans use the legacy MHV portal to manage their appointments at Vista sites and others may use legacy My VA Health tool for their Oracle Health appointments. The proposed changes will give the user to schedule an appointment at either site (Vista/Oracle Health) as long as they meet the eligibility requirements. 
    
* How does this initiative help further OCTO-DE's mission and goals?
  - Meet user expectations of available online transactions
  - Support Oracle Health system

 <details>
  <summary><b>User Feedback Quotes</b></summary>
  
  <q>
  </q></p>
  
  <q> 
  </q></p>

</details>

## Desired Outcomes
- A Veteran can schedule and manage their Oracle Health Appointments in the Appointments tool on VA.gov 

## Undesired Outcomes
- A Veteran cannot use the Appointments tool on VA.gov


## Key Decisions

### Access

Follows the business rules for [login and access](login-and-access.md).

OH facility [leadership] can configure the online scheduling options available to Veterans:
- OH facility [leadership] can enable direct scheduling through VAOS for `Nutrition and Food` appointments for a given location.
- OH facility [leadership] can enable requests through VAOS for `Nutrition and Food` appointments for a given location

### Direct scheduling

**A Veteran must [choose a type of care](schedule-flow/all--type-of-care.md).**
   - Only `Nutrition and Food` appointments are supported for direct scheduling or requests. 

**A Veteran must [choose a location for their appointment](schedule-flow/va-direct--choose-location.md) for their selected type of care.**

- The system displays all OH locations where the Veteran has had an encounter.

- A OH user can schedule nutrition and food appointments at any OH location where:
  - They are a registered patient at any OH location.
    - Note: registering at one OH location automatically registers them at all other OH facilities.
  - AND They have had an encounter at that location for `Nutrition and Food`
  - AND The location has enabled direct scheduling for `Nutrition and Food`

When choosing an OH location, a Veteran will be directed to [request an appointment](#requests) if the facility:
  - Does not have DS enabled,
  - AND has requests enabled.

When choosing an OH location, a Veteran will be directed to call to schedule if:
   - They select any type of care other than 
   - They select `Nutrition and Food`, but have not had an encounter for that type of care at that location.
   - Neither DS nor requests are enabled

**A Veteran may choose a provider for their appointment.**
The Veteran is given the option to select:
- Providers with whom they have had a recent encounter (within the last 36 months) for `Nutrition and Food`.
- None of the options
    - If they choose this option:
      - AND requests are enabled, they are directed to [request an appointment](#requests).
      - If requests are disabled, they are directed to call to schedule.

**A Veteran must [provide the preferred date for their appointment](schedule-flow/va-direct--preferred-date.md).**
- Note: OH can't receive preferred date due to a technical limitation. However, this field is used to warn users that they can't select same day appointments.

**A Veteran must [choose an appointment date and time](schedule-flow/va-direct--choose-a-date.md)**


**A Veteran must [provide the reason for their appointment](schedule-flow/va-direct--reason-for-appointment.md).**


**A Veteran must [review/enter the contact information for their appointment](schedule-flow/va-direct--reason-for-appointment.md).**


**A Veteran must [review their appointment information](schedule-flow/va-direct--review-and-submit.md) before confirming/scheduling their appointment**


### Requests

A Veteran may request an appointment when:
- [Facility leadership] have enabled requests for `Nutrition and Food` at their chosen location and:
  - Direct scheduling isn't enabled.
  - OR There are no appointment times available.
  - OR they want a different provider than the options allow.
  
Requesting an appointment at OH follows the current VistA request flow business rules.

### Community care

A Veteran may not request community care for any care type through an OH location.
- Community Care request is not supported at this time for Oracle Health site. 

## Out of scope

We won't be surfacing provider availability in a way that lets Veterans compare providers to find the best time:
- For nutrition and food, we're just showing providers where the Veteran with whom a Veteran has had an encounter in the past 36 months.
- We don't have a situation where a Veteran can choose from any provider, whether or not they have a provider. Once that comes up, we can revisit this. 

---
## Measuring Success

- Success will be measured by the increased number of veterans using VAOS instead of MHV
- Will look at these specific measurements:
  - Number of unique users of VAOS
  - Number of pageviews of appointment list page
  - No increase in average response time of appointment list page
  - Decrease in the number of errors when fetching appointment data (desired)

### Key Performance Indicators (KPIs)

Key Result | Baseline | Target | Link to data source (e.g. GA, Domo)
--- | --- | --- | ---
Increase conversion rate | Baseline | Target | Link to data source (e.g. GA, Domo)
Increase scheduling submission success rate | Baseline | Target | Link to data source (e.g. GA, Domo)
Increase number of scheduling transactions | Baseline | Target | Link to data source (e.g. GA, Domo)
Increase satisfaction rating | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery

### Relevant studies
 <details>
  <summary>TBD</summary>

</details>

 <details>
  <summary>TBD</summary>
</details>
 

### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The user may need to use multiple tools to manage their appointments
 
- **Usability Risks** (can people figure out how to use it):
  - We will have one Appointments tool on VA.gov for a better user experience for the Veteran
    
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Must work with our engineers to see how to integrate a new service (VPG) into the current application
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: VA stakeholder testing, marketing, compliance requirements 

### Prioritization
1. 

### Solution Summary
- Date and time change only


--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
1. 

2. VAOS team investigating the use of an online, one time notice that would appear to veterans when navigating to VAOS landing page


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

Current State: 


### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Appointments Team
- GitHub Label(s): appointments 
- Slack channel: #appointments-team
- Product POCs: [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79) and [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)

</details>
 
#### Team Members

<details>
 
- DEPO Lead: [Katherine Lawyer]()
- PM: [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79) and [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)
- Engineering: [Simi Adebowale](https://dsva.slack.com/archives/D037VNB23T2), [Ryan Shaw](), 
- Research/Design:[Peter Russo](https://dsva.slack.com/team/U01C2UUHXH9) and [Melissa Leferve]() 
 
</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): Kay Lawyer (OCC)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
