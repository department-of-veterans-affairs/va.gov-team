# Initiative Brief - Compensation and Pension Appointments
## Overview

Looking to display the Compensation and Pension Appointments in VAOS. This feature would allow Veterans to view their upcoming and past Compensation and Pension exam appointments. 
 
---

## Outcome Summary

Compensation and Pension exams appear in the upcoming and past appointment lists for users.

**Related/Associated product(s)**
- 

## Problem
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - Since we moved to the VAOS v2 services, the Compensation and Pension appointments are being passed to VAOS. The upcoming and past appointment list displays the Compensation and Pensions appointments as health appointments and may be confusing to the Veteran if it is actually their Compensation and Pension exam.  A same issue appears when viewing the details of an appointment. 
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - Current functionality was not designed to look for C&P appointments and display them differently from regular health appointments
* How does this initiative help further OCTO-DE's mission and goals?
  - Improve user satisfaction
  - Meet user expectations 


## Desired Outcomes
- C&P appointments are displayed as Compensation and pension exam instead of showing type of care
- User can view the appointment details for their Compensation and Pension exam

## Undesired Outcomes
- C&P appointments are listed showing type of care
- User cannot view their C&P appointment details in VAOS 

## Key Decisions
- 

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

- [Whiteboard with initial internal discovery.](https://www.figma.com/file/wpu8ihC3ps2gjAd37lPkrs/Compensation-and-Pension-(C%26P)-Exam---initial-discovery?node-id=0%3A1&t=ScDo9r4KoGJeKwfS-1)

### Assumptions

**List**
- C&P appts will show in Upcoming and Past lists
- C&P appts canceled by the facility will show in the Upcoming list
- Type of care column will display “Compensation and pension exam” followed by provider if available
- Veterans with C&P appts will be able to start the scheduling process as normal.

**Details**
- No option to cancel. Appointment will display facility contact info instead
- A link back to the Ebenefits portal will be available.
- Upcoming appointments that aren't canceled will have an option to add to calendar
- All will have the print option

### Risks

- **Value Risks** (will people use it): 
  - We won't be showing all compensation and pension exams, since some may be scheduled outside of VistA. Veterans may not trust the data in the list.


- **Usability Risks** (can people figure out how to use it):
  - Veterans won't be able to cancel compensation and pension exams online.
      - Veterans may miss compensation and pension exams that aren't listed.


- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: VA stakeholder testing, marketing, compliance requirements 

### Prioritization
1.

### Solution Summary
- 


--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
1. Launch of the updated appointment list view will be marketed as an enhancement and will be part of a re-launch campaign for VAOS.
* Re-launch and new appointment list will be marketed through veteran focused electronic newsletters, especially those related to health care.
* Specific newsletters need to be identified and timelines for publication coordinated with launch plans

2. VAOS team investigating the use of an online, one time notice that would appear to veterans when navigating to VAOS landing page
* Notice would be a small indicator that something is new on the site.
* Clicking on the notice would provide more details about the change to the appointment list view.
* The online notification would lose focus after a veteran has clicked on it.  This includes subsequent sessions.
* Online notification would only be visible for a configurable date range.
* VAOS team to investigate feasibility of such a feature with the platform support team.

3. VA and CC scheduling personnel will need to be informed of the appointment view update and provided a demonstration.

4. VAOS product guide will need to be updated to include new screen shots of the updated appointment list view

5. Call Center will need to be informed of change to appointment list view

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

<img width="655" alt="Screenshot 2023-04-26 at 9 54 51 AM" src="https://user-images.githubusercontent.com/90797205/234598143-63991c57-100e-4051-887f-61d94aa13cda.png">


### After

[Prototype]

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: VA Online Scheduling
- GitHub Label(s): vaos 
- Slack channel: #vaos-team
- Product POCs: [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79) and [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)

</details>
 
#### Team Members

<details>
 
- DEPO Lead: [Katherine Lawyer]()
- PM: [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79) and [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)
- Engineering: [Simi Adebowale](https://dsva.slack.com/archives/D037VNB23T2)
- Research/Design:[Peter Russo](https://dsva.slack.com/team/U01C2UUHXH9) and [Ciera Maddox](https://dsva.slack.com/team/U02JWT564E9)
 
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
