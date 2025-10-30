# Product Outline: VA.gov message Oracle Health recipient groups (Update Start New Message Flow)
#### Overview

VA.gov will become the exclusive web interface for patients at EHRM transitioned ("Oracle Health") facilities. To accomplish this goal, the VA.gov messages tool will need to accomodate a new type of recipient group. This initiative will make conforming changes to the existing VA.gov messaging tool for those new EHRM/Oracle Health recipient groups.

---

## Outcome Summary
Patients can message their providers from VA.gov regardless of which EHR-Oracle Health Facility their provider is using.

**Related/Associated product(s)**

[VA.gov messages product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)

## Problem
The incoming EHRM/Oracle Health recipient objects (alternately called "Group Inboxes" or "Message Pools") do not align with the existing MHV- and VistA-based recipient objects ("triage groups"). Specifically, there is no avaialble patient-to-recipient object mapping at present for EHRM/Oracle Health recipient objects. The VA.gov messages tool must be  modified to help the user find the correct EHRM/Oracle Health recipient object.
_


**As a Veteran with Oracle Health facilities in my profile, I need to be able to find and select the care team when I send a new message, so that I can continue to manage my care and communicate with my providers.**


## Hypothesis
If we change the user flow for sending a new message then we expect it will be able to accommodate very different data structure for triage groups coming from Oracle Health, so that any user will be able to send a new message no matter what EHR their facility runs on.


### Assumptions/Risks

- We assume that the EHRM/Oracle Health recipient objects and messaging APIs operate as stated in production
- We assume there is no reliable way to get patient-to-recipient mappings for EHRM/Oracle Health recipient objects

### What we are building
Patients that are treated at an EHRM-OH transitioned facility will be asked to select a facility before proceeding to the compose screen. If the facility selected is an EHRM-OH transitioned facility, the messages tool will use this facility selection to narrow down the list of potential EHRM/Oracle Health recipients from system-wide to just those associated with the selected facility.

### Background

## MVP: Update Start a New Message Flow

**Summary:** The "send a new message" flow must expand into additional screens in order to accommodate variations in data for triage groups that come in from Oracle Health. This work is "done" when Veterans can message providers at facilities operating on either EHR successfully.


**EPIC:** https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=123015170&issue=department-of-veterans-affairs%7Cva.gov-team%7C116017


## Hypothesis

If we change the user flow for sending a new message then we expect it will be able to accommodate very different data structure for triage groups coming from Oracle Health, so that any user will be able to send a new message no matter what EHR their facility runs on.

## Post MVP: Add Recent Recipient Flow
**Note: As part of the launch plan, we will launch both MVP and Post MVP as one product**.


**Summary:**
In our Post MVP, we are adjusting the flow to include shortcut for recent recipients, 

-Building out a new "shortcut" screen at va.gov/my-health/secure-messages/new-message/recent to allow Veterans to quickly identify -their most recently messaged care providers

-Adding those same recent care providers into the combo box component on the /select-care-teams page

-Adjusting the flow for users who do not have any recent recipients


**Governance rules around "recent" care teams include:**

(1) Up to 4 teams (no more than 4 to display)

(2) Ordered by the recency they were messaged

(3) Within the last 6 months

**EPIC**: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=126050940&issue=department-of-veterans-affairs%7Cva.gov-team%7C117885

## Measuring Success (Plan Post Launch)

(1) **Data Dog**: Increasing DD collection to 100% for those users on the new flow

(2) **Error rates** - the base for comparison, data from the new flow can be separated out and compared to base. This will require some eng capacity (estimated a full day for dashboard build)

(3) **CSAT** - continue to monitor CSAT for the base, and the new flows. We should be able to break out the new flows with URLs and compare feedback.

(4)**Messsages**- Number of messages successfully submitted by platform - this is already tracked



### Key Performance Indicators (KPIs)
- CSAT for VA.gov messages tool


#### Go-to-market 
- Internal communications to MHV Coordinators and help desk staff to ensure they are aware of how the feature works and can guide users who need help.
- External communication notifying patients at EHRM transitioned sites that they can now message their providers on VA.gov.
--- 

## Launch Planning

#### September 2025

**Release Guide** (In progress) : https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/Release%20Plan-OHSMFlow-MVP.md

### Collaboration Cycle
View all related tickets [in this view](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue%20state%3Aopen%20OH%20curated%20list)

**MVP Collab Cycle Ticket** (September 2025): https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=2818596889&issue=department-of-veterans-affairs%7Cva.gov-team%7C102015

**Post MVP Collab Cycle Ticket**(September 2025); https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=3380177653&issue=department-of-veterans-affairs%7Cva.gov-team%7C118453

___________________________________________________________________________________________________________________________________________

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
  - Fall 2025
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
 
