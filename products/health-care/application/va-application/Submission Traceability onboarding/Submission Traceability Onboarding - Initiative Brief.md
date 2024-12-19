# Event Bus Onboarding - Initiative Brief

## Outcome Summary
- **MVP**: Begin to send 10-10EZ submission events to the Event Bus, so that the submission status can be shared with other consumers who would benefit from this event.
- **Future**: Support Enrollment System onboarding to Event Bus to send application statuses, so that the VA.gov 10-10EZ can expose really meaningful 10-10EZ status information to Veterans (whether on screen, via a notification, both, or other).

**Related/Associated product(s)**
- 10-10EZ Veteran health care application | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [10-10EZ Event Bus Onboarding - EPIC](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80978)

## Problem
* Veterans do not currently have a way to see the status of their health care application as it goes through the processing steps within VA
* 10-10EZ does not have a way to display the various statuses of an application on VA.gov without directly connecting and interpreting the statuses from the source system
* 10-10EZ does not have a way to transmit/communicate the submission status of the application from VA.gov to any other systems or applications without direct connections/integrations

## Desired User Outcomes
- Veterans will be able to see the status of their application on VA.gov as it moves through the processing steps in the Enrollment system

## Undesired User Outcomes
- Veterans will continue to receive and/or view minimal statuses of their application on VA.gov
- Veterans will continue to be unaware of what step in the process their application is and whether there have been any decisions made or further information needed.

## Desired Business Outcomes
- 10-10EZ will be able to consume application processing events from Enrollment system and display the meaningful statuses of Veterans' applications on VA.gov
- 10-10EZ will be able to produce the application submission status for other applications and/or systems to consume easily without direct connections or integrations

## Undesired Business Outcomes
- Enrollment system cannot onboard to Event Bus in a meaningful manner to share status events
- 10-10EZ is not able to consume Enrollment system events in a meaningful manner

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Veterans will not understand the application status being displayed
  
- **Usability Risks** (can people figure out how to use it):
  - Veterans will not know or understand if any actions are required of them to keep the application moving through the process
  
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
     - VA stakeholder testing, marketing, compliance requirements 

### What're you building
- **MVP - In scope**
     - 10-10EZ onboard to Event Bus to produce the application submission event

- **MVP - Out of scope**
     - Enrollment system onboard to Event Bus
     - 10-10EZ to consume events from Event Bus

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [TBD - Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
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

- Team Name: 10-10 Health Apps (Health Enrollment)
- GitHub Label(s): 1010-team
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO
- Contact(s): Patrick Bateman (Product Owner)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
