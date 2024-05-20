# Incident Response (Draft)

## Overview: 
Now that we have created our [Service Level Objectives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Login%20SLO/SLIs_and_SLOs.md) and published our [Service Level Agreements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/identity_SLA_template.md), it is time to create procedures surrounding what happens when we don't meet those Agreements.

This is a part of the book of work that maps to _O1KR2: VA.gov authentication SLOs are developed._


## Problem Statement: 
We currently do not have an end-to-end methodology for defining, tracking, communicating and resolving incidents. In order to better serve Veterans and other VA.gov, we need to implement and communicate a formalized Incident Response process which includes the following:
* Ticketing System for tracking incidents
* Outage Communication strategy for Veterans and other teams.
* System recovery process.
* Internal reporting on incidents.

## Relevant Documents:
- [SLO & SLI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Login%20SLO/SLIs_and_SLOs.md)
- [SLA Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/identity_SLA_template.md)
- [Incident Management](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/Incident%20Management.md)
- [Authentication status internal communication for VA Teams (Research)](https://docs.google.com/document/d/1-ZN_csS6uuT-c6DymBNe5up_LR4tX6_3ntUNjjn_jrE/edit#heading=h.5c3b2fdqm6qz)
- [Authentication status external communication to Veterans (Research)](https://docs.google.com/document/d/14ekf2-kyqAPJYdjK_CfHaiaV1HuJYJxM8r4tIyx_zqo/edit#heading=h.6nfp8v1e4nb1)

## What's In Scope: 
For this first iteration, the focus will be on:
* What is an incident, anyways?
  * Failing to meet SLA
  * Service Outages
  * Any other incident that interrupts service 
* How do we track the work we are doing to resolve an incident?
* How do we communicate an incident is happening to stakeholders?
  * Realtime downtime banners
* Planned outage banners
* Documenting steps to resolve various types of incidents
* Automating as much as we possibly can.
  
## Out of Scope: (for this iteration)
* External Reporting on Incidents

## Use Cases:
* As a VA.gov team member, I would like the Identity team to create a process for incident response, so that I may know what to expect when there are service outages.
* As a Va.gov user, I would like to see banners that tell me there is a current issue with logging into VA.gov, so I understand why I cannot login
* As a VA.gov user, I would like to see banners that alert me as to when logging into VA.gov will be unavailable, so that I might plan to login during another time.

## Assumptions:
We build upon what we we put in the SLA:

The OCTO Identity team responds to service outages as follows:

| Severity level | Description | Response time |
| --- | --- | --- |
| Severity 1 | Impacting more than 1,000 VA.gov users per hour | 1 hour |
| Severity 2 | Impacting more than 50 VA.gov users per hour | 4 hours |
| Severity 3 | Impacting less than 50 VA.gov users per hour. Includes non-production issues. | 1 business day |

### Urgent requests outside of business hours

Urgent requests are defined as issues impacting VA.gov users on production servers.

If you need assistance with an urgent request during weekends, holidays, or outside of regular business hours, email: [component--identity-authentication-email.sy4b6pv6@dsva.pagerduty.com](mailto:component--identity-authentication-email.sy4b6pv6@dsva.pagerduty.com).

The OCTO Identity team monitors system performance and inbound communications 24x7 via Pager Duty and responds within 30 minutes to any alerts.

## Solution Approach: 
### Possible process using both Datadog and Pager Duty for incident management

This process reflects the new process if we used both Datadog and Pager Duty:

- Monitor alert triggered.
- Slack notification sent.
- Pager Duty alert sent to on-call developer.
- On-call developer acknowledges alert in Pager Duty.
- On-call developer clicks alert in Slack to pull up Datadog event.
- On-call developer assesses event.
- If event is a service outage, the on-call developer declares an incident via the Datadog incident management user interface.
- Team works to resolve service outage.
- Team adds notes to incident as details emerge and investigation progresses.
- Once the service has been restored, the on-call developer resolves the incident in both Datadog and Pager Duty.

  
## Technical Considerations:
| Issue         | Notes         | 
| :------------- |:-------------| 
| Update the downtime banners to fire based on authentication method, either SiS or SSOe. Today the banner shows if the SSOe service is down even if a user is trying to login with SiS (oauth=true param set)| We need to add a PD integration within PD, we need to figure out how to handle backend statuses, potentially need to update the frontend banner settings, need to update the datadog monitor for SiS              |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|  |               |

## Measuring Success:
| KPI           | Notes         | 
| ------------- |:-------------:| 
| MTTA (Mean Time To Acknolwedge |  [MTTA Monthly Review Procedure](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/Reports/MTTA_Instructions.md)             |
| Time to Remediate | Will need to figure out how to properly measure this | 


## Milestones:
* Launch Dates


## Future Scope:


