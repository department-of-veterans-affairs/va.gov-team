# VA.gov message Oracle Health recipient groups
#### Overview

VA.gov will become the exclusive web interface for patients at EHRM transitioned ("Oracle Health") facilities. To accomplish this goal, the VA.gov messages tool will need to accomodate a new type of recipient group. This initiative will make conforming changes to the existing VA.gov messaging tool for those new EHRM/Oracle Health recipient groups.

---

## Outcome Summary
Patients can message their providers from VA.gov regardless of which EHR their provider is using.

**Related/Associated product(s)**

[VA.gov messages product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)

## Problem
The incoming EHRM/Oracle Health recipient objects (alternately called "Group Inboxes" or "Message Pools") do not align with the existing MHV- and VistA-based recipient objects ("triage groups"). Specifically, there is no avaialble patient-to-recipient object mapping at present for EHRM/Oracle Health recipient objects. So the VA.gov messages tool must be  modified to help the user find the correct EHRM/Oracle Health recipient object.


## Measuring Success

### Key Performance Indicators (KPIs)
- CSAT for VA.gov messages tool


## Discovery
### Assumptions/Risks

- We assume that the EHRM/Oracle Health recipient objects and messaging APIs operate as stated in production
- We assume there is no reliable way to get patient-to-recipient mappings for EHRM/Oracle Health recipient objects

### What're you building
Patients that are treated at an EHRM transitioned facility will be asked to select a facility before proceeding to the compose screen. If the facility selected is an EHRM transitioned facility, the messages tool will use this facility selection to narrow down the list of potential EHRM/Oracle Health recipients from system-wide to just those associated with the selected facility.

#### Go-to-market 
- Internal communications to MHV Coordinators and help desk staff to ensure they are aware of how the feature works and can guide users who need help.
- External communication notifying patients at EHRM transitioned sites that they can now message their providers on VA.gov.
--- 

## Launch Planning
### Collaboration Cycle
View all related tickets [in this view](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue%20state%3Aopen%20OH%20curated%20list)

#### Jan 2025 
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102015)

#### Feb 2025 
- [Design intent](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103504)

#### Mar 2025 
- [Midpoint review - Content feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105996)
- [Midpoint review - IA feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106046)
- [Midpoint review - Design feedback](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106094)

#### May 2025 
[add ticket]

### Timeline 
- **March 2025**: basic messaging functionality (view, reply, compose) is integrated with EHRM/Oracle Health at the MHV backend level
- **After March 2025**: VA.gov messages tool makes changes described in this brief so users can select and send messages to EHRM recipients.

#### Initiative Launch Dates
- *Target Launch Date*
  - June 2025
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
TBD
### After
TBD

---

#### Communications
- Team Name: MHV on VA.gov Messages team
- GitHub Label(s): mhv-va.gov-secure-messaging
- Slack channel: mhv-secure-messaging
- Product POCs: Patrick Bateman; Bryan Riley

#### Stakeholders  
- Office/Department: VHA Office of Connected Care
- Contact(s): P. Henry
 
