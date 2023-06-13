# Initiative Brief - New appointments list navigation under MHV on VA.gov

## Overview
Adding the navigation to the new Appointment List in MHV on VA.gov by providing the user an easier way to view their appointments in the new portal. The goal is to provide a seamless experience for the Veteran.  
 
---

## Outcome Summary

The user is able to navigate between the appointment status (upcoming, pending, and past)

**Related/Associated product(s)**
- Dependent on Appointment List rollout

## Problem
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - We will need to direct the Veterans to the new URLS for appointments in MHV on VA.gov. The previous navigation in the current tool will no longer be used in MHV on VA.gov 
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - N/A
* How does this initiative help further OCTO-DE's mission and goals?
  - Improve user satisfaction
  - Meet user expectations of a seamless experience 

 <details>
  <summary><b>User Feedback Quotes</b></summary>
  

</details>

## Desired Outcomes
- Seamless navigation experience for Veterans to view the new Appointment List in MHV on VA.gov 

## Undesired Outcomes
- A user cannot access the new Appointment List in MHV on VA.gov 

## Key Decisions

These are based on the [Sitewide IA Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/health-appointments.md)

**Doing:**
- Top level URLs will be
    - Manage appts: `www.va.gov/my-health/appointments`
    - Schedule appts: `www.va.gov/my-health/appointments/schedule`
       - The type of care page URL be `www.va.gov/my-health/appointments/schedule/type-of-care` 
- We will remove cc/va from the details page URLS
- Page title tags will follow [the format described in the design system](https://design.va.gov/content-style-guide/seo#title-tags): `[H1 Page Title] | Veterans Affairs`
- IA will review the full list of URLs for the MVP
- We will not change heading content as part of this effort
- Breadcrumbs:
    - Top level breadcrumb will be `VA.gov home > My HealtheVet > Appointments` 
    - **Details** pages will show descriptive back links instead of a breadcrumb: `< Back to [h1 of previous page]
    - **Scheduling** pages will continue to show breadcrumbs, updated to show the new structure
       - The Forms Digitization team will be exploring a descriptive back link on task-flows. Once that work is complete we'll follow their lead.

**Not doing:**
- We will not update the cancelation flow for this round. We'll revisit moving it to separate pages when we look at updating that flow in te future
- Parameter based URLS: Due to technical issues with the way we get Request data, this structure would add complexity and cause performance issues. However, if the data we receive back is improved this would be a helpful technical improvement. We'll revisit this when we look at the request data. UX will add a ticket outlining this approach to the idea board.

**Open questions:**

- Should there be a breadcrumb on confirmation pages?
    - 06/08 Meeting: Agreed that we should treat it like the rest of the details pages and include the descriptive back link. We'll map out this flow and share with IA.
- 06/13 IA requested we double check with design council on descriptive back links. TBD experimental design ticket will outline the requirements.

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
  <summary>Enter research details (if any) </summary>
  
   
   </ul>
</details>



### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The experience may vary based on the data we have for the appointment type
  - If user is unable to find any value in the appointments, they may lose trust in the application and are less likely to return
- **Usability Risks** (can people figure out how to use it):
  - We will have to balance between showing the right path to access the appointment list
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Must work with our engineers to see how we can implement the new navigation links to MHV on VA.gov 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: VA stakeholder testing, marketing, compliance requirements 

### Prioritization
1. MHV on VA.gov Phase 1
2. MHV on VA.gov Phase 2A

### Solution Summary
- Date and time change only

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
  - August 2023
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before


### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Appointments Team 
- GitHub Label(s): vaos 
- Slack channel: #appointments-team
- Product POCs: Kay Lawyer](https://dsva.slack.com/archives/U7T6EKTK9), [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP) and [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79)

</details>
 
#### Team Members

<details>
 
- DEPO Lead: [Kay Lawyer](https://dsva.slack.com/archives/U7T6EKTK9) 
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
