# Incident Response 

## Overview: 
Now that we have created our [Service Level Objectives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Login%20SLO/SLIs_and_SLOs.md) and published our [Service Level Agreements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/identity_SLA_template.md), it is time to create procedures surrounding what happens when incidents arise relating to those objectives and/or agreements.

This is a part of the book of work that maps to _O1-KR2: VA.gov authentication SLOs are developed._


## Problem Statement: 
We currently do not have an end-to-end methodology for defining, tracking, communicating and resolving incidents. In order to better serve Veterans and other VA.gov teams, we need to implement and communicate a formalized Incident Response process which includes the following:
* Incident Management System
* Outage Communication strategy for Veterans and other VA.gov teams.
* System recovery process.
* Internal reporting on incidents.

## Relevant Documents:
**From the SLO & SLA Projects**
- [SLO & SLI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Login%20SLO/SLIs_and_SLOs.md)
- [SLA Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/identity_SLA_template.md)
- [Incident Management](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/Incident%20Management.md)

**UX Communication Recommendations**
- [Authentication Status Internal Communication for VA Teams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Service%20Level%20Objectives/Content-research-internal-teams.md)
- [Content Research for Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Service%20Level%20Objectives/Content%20research%20for%20Veterans.md)

**What Platform Does**
- [Incident Response Documentation for Application Teams](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)

**Identity Processes Previously Established**
- [SSOe Outage on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Policies%20and%20Procedures/SSOe_Outage_Response.md)
- [Update Monitors Alerts Datadog](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/Monitoring%20and%20Alerting/Monitors_Alerts_Datadog.md) (very old, should be deleted after mined for use)

## What's In Scope: 
### These deliverables:
* [Incident Management System](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Management%20System.md)
* [Outage Communication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Outage%20Communication.md)
  * Internal
  * External (when applicable)
* [System Recovery Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/System%20Recovery%20Process.md)
* [Internal Reporting on Incidents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Internal%20Reporting.md)

### For these areas of responsibility:
**Directly Responsible**
- Unified Sign-in Page (USiP)
- Single Sign-On External (SSOe)
- Sign-in Service (SiS)
- Terms of Use (ToU)

**Indirectly Responsible (to a point)**
- Credential Service Providers (CSP)
- Master Person Index (MPI)

  
## Out of Scope: (for this iteration)
* Status Page
* Planned Outage Communications

## High-Level Use Cases:
* As a VA.gov team member, I would like the Identity team to create a process for incident response, so that I may know what to expect when there are service outages.
* As a Va.gov user, I would like to see notifications which tell me there is a current issue with logging into VA.gov, so I understand why I cannot currently login.


## Assumptions:
- We build upon what we we put in the [SLA Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/identity_SLA_template.md) for the definition of Incident.
- We update the current Datadog alert links, which are currently broken.
- We determine and document where our lines of responsibilites begin and end.
- We automate as much of the communication as is possible.
- The System Recovery piece will help fulfill our ATO responsibilities (two for the price of one!)
- We come up with a prioritization / triage process for alerts based upon severity. (Possibly starting with that SLA doc.)
- We revisit our levels of response within our current off-hour alerts (in datadog).
- We come with with a list of sources of incident reporting and what the response will be. (Or maybe a table?)



## Solution Approach: 
In order to track each Deliverable by each Area of Responsibility, we've created this table:

| Deliverable →   Area  ↓   | Incident Management System      | Outage Comms (Internal) | Outage Comms (External) | System Recovery | Internal Reporting | 
| :------------- |:------------- | :----- | :----- |  :----- |  :----- |
| **USiP** | | | | | |
| **SSOe** | | | | | |
| **SiS** | | | | | |
| **ToU**| | | | | |
| **Login.gov** | | | | | |
| **ID.Me** | | | | | |
| **MHV**| | | | | |
| **DS Logon** | | | | | |
| **MPI** | | | | | |

The early thinking is that each field will contain a link to where our documentation for that solution exists. It may not be be that every single field will be filled out, but if a field doesn't need to be filled out, as simple "n/a" will suffice.
  
## Technical Considerations:
| Issue         | Notes         | 
| :------------- |:-------------| 
| Update the downtime banners to fire based on authentication method, either SiS or SSOe. Today the banner shows if the SSOe service is down even if a user is trying to login with SiS (oauth=true param set)| We need to add a PD integration within PD, we need to figure out how to handle backend statuses, potentially need to update the frontend banner settings, need to update the datadog monitor for SiS              |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:------------- | 
| Language & placements for outage messages for Vets |  Review current outage messages   |

## Measuring Success:
| KPI           | Notes         | 
| ------------- |:------------- | 
| MTTA (Mean Time To Acknolwedge |  [MTTA Monthly Review Procedure](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/SLA/Reports/MTTA_Instructions.md)             |
| Time to Remediate | Will need to figure out how to properly measure this | 


## Milestones:
* Launch Dates


## Future Scope:


