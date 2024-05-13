# Incident Response (Draft)

## Overview: 
Now that we have created our [Service Level Objectives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Login%20SLO/SLIs_and_SLOs.md) and published our [Service Level Agreements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/identity_SLA_template.md), it is time to create procedures surrounding what happens when we don't meet those Agreements.


## Problem Statement: 
We currently do not have an end-to-end methodology for defining, tracking, communicating and resolving incidents. In order to better serve Veterans and VA.gov, we need to implement and communicate an Incident Response process.

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
  * ??
* How do we track the work we are doing to resolve an incident?
* How do we communicate an incident is happening to stakeholders?
* Documenting steps to resolve various types of incidents
* Automating as much as we possibly can.
  
## Out of Scope: (for this iteration)
*

## Use Cases:

### From SLA: 
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

## Assumptions:
* 

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




## Milestones:
* Launch Dates


## Future Scope:

## Joe Notes
