# Initiative Brief - Appointment List Improvements
## Overview

Looking to improve the user experience in VAOS by updating the appointment list page to help the veterans view their upcoming appointments, pending apppointments and past appointments. The goal is to have the VAOS appointments list show the same information and value as the equivalent list in MyHealtheVet.
 
---

## Outcome Summary

A user can view their appointments (upcoming, pending, canceled or past) without any confusion and provide value information to the veteran

**Related/Associated product(s)**
- Dependent on [VAOS service launch](.md) rollout 

## Problem
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - Majority of the Veterans use the MyHealtheVet appointment list to help manage and understand their appointments and as more Veterans move to VAOS to do the     same tasks, they may see a discrency between to the two lists. 
  - The user may be confused with viewing their appointment list in two separate applications and having to do two separate logins. 
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - Current functionality
  - Anecdotal feedback from stakeholders and Veterans
  - Qualitative feedback from surveys
* How does this initiative help further OCTO-DE's mission and goals?
  - Improve user satisfaction
  - Meet user expectations of available online transactions


 <details>
  <summary><b>User Feedback Quotes</b></summary>
  
  <q>
   I hate that when I clicked on schedule an appointment, I must go to another site to log back in. It should be on one page."
  </q></p>
  
  <q> 
   The log-in process is frustrating because you are already logged into MHV and when you need to schedule an appointment why would I need to log in again?
  </q></p>

</details>

## Desired Outcomes
- Provide clear information that answers basic questions about appointments in the list
- Seamless navigation experience from MHV (MyHealtheVet) to VAOS
- Veterans are able to find all the same appointment information in VAOS as currently available in MHV

## Undesired Outcomes
- A user does not have clear information about their appointment details in the list 

## Key Decisions
- It is preferred that VAOS provides the same value and information of the appointment list similiar to MHV application
- Use of icons to differentiate the different types of care is preferrable, based on user research

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
  <summary>2021 MHV and VAOS Gap analysis</summary>
  
   <ul>
    <li><a href="https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7B6A5CFF66-F89C-4BC5-A39B-518FA6AD415C%7D&file=Appointments%20Features%20Description%20and%20Business%20Requirements.docx&wdOrigin=OFFICECOM-WEB.MAIN.REC&ct=1648741306594&action=default&mobileredirect=true">Analysis document</a></li>
    <li><a href="https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7B24A0A2A8-279E-42D1-B0E4-3C1C8EF5D5F5%7D&file=MHV%2BVAOS%20Gap%20analysis%20recommendations.docx&wdOrigin=OFFICECOM-WEB.MAIN.SEARCH&ct=1648741454406&action=default&mobileredirect=true">Recommendations</a></li>
    <li><a href="https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/_layouts/15/Doc.aspx?sourcedoc=%7B9E5702C8-5AF7-476B-879D-8DD1B717526F%7D&file=MHV%2BVAOS%20Appointments%20Project%20Scope%20and%20Decisions%20DRAFT220181.docx&action=default&mobileredirect=true&DefaultItemOpen=1&ct=1648741387781&wdOrigin=OFFICECOM-WEB.MAIN.EDGEWORTH&cid=8a5358d8-b930-4449-a0b6-b7957b856b86">Project scope and decisions</a></li>
   </ul>
</details>

 <details>
  <summary>February 2022 Appointments list study</summary>
  <ul>
      <li><a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2022-MHV%2BVAOS-appts-list-discovery/report-MHV%2BVAOS-appts-list-discovery.md">Findings report</a></li>
      <li><a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2022-MHV%2BVAOS-appts-list-discovery/Research%20Presentation%20-%20MHV%2BVAOS%20Appointments%20List%20Discovery.pdf">Findings slide deck</a></li>
 </ul>
</details>
 
 <details>
  <summary>January 2021 Appointments list study</summary>
  <ul>
      <li><a href="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2021-01-appts-list-test/report-out.md">Findings</a></li>
  </ul>
 </details>
 
 


### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The experience may vary based on the data we have for the appointment type
  - If user is unable to find any value in VAOS, they may lose trust in the application and are less likely to return
- **Usability Risks** (can people figure out how to use it):
  - We will have to balance between showing the right amount of information in the appointment list 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Must work with our engineers to see what available data we can use to enhance the appointment details 
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: VA stakeholder testing, marketing, compliance requirements 

### Prioritization
1. Provide clear and value information in the appointment list
2. Facility location 
3. TBD - "Appointment List Improvement" requests

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
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

Current State: 

<img width="592" alt="Screen Shot 2022-05-05 at 8 01 54 AM" src="https://user-images.githubusercontent.com/90797205/166919184-d6aa9850-f205-4542-b78c-b28836dd24e8.png">

Future State (Post v2 Launch): 

<img width="638" alt="Screen Shot 2022-05-05 at 7 58 13 AM" src="https://user-images.githubusercontent.com/90797205/166919230-c2640d26-5b42-44b1-81d0-361842eb8e4d.png">


### After

[Prototype](https://www.figma.com/proto/JpGM8LGBCqAlL8qh3DmFk8/Home-Page-Redesign?node-id=193%3A24159&starting-point-node-id=193%3A24159)

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
 
- DEPO Lead: [Lauren Alexanderson](https://dsva.slack.com/team/U772MC9BQ)
- PM: [Leah De La Costa](https://dsva.slack.com/team/U02F00JPL79) and [Jeff Roof](https://dsva.slack.com/archives/D02UD9VS3JP)
- Engineering: [Simi Adebowale](https://dsva.slack.com/archives/D037VNB23T2)
- Research/Design:[Peter Russo](https://dsva.slack.com/team/U01C2UUHXH9) and [Ciera Maddox](https://dsva.slack.com/team/U02JWT564E9)
 
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
