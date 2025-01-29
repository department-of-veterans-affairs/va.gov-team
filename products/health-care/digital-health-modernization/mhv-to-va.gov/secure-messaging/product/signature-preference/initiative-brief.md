# Messaging signature preferences
#### Overview

Migrates message signature preferences from MHV Classic Secure Messaging tool to VA.gov Messages tool.

## Outcome Summary
Users of Messages on VA.gov will be able to create, view, update, and delete their personal signature for outgoing messages.

**Related/Associated product(s)**

[VA.gov messaging product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product)

## Problem
MHV Classic Secure Messaging is being retired this year. Existing functionality, including signature prefereces, need to be migrated to VA.gov in order for retirement to happen. This initiative simply achieves feature parity with the MHV Classic experience and does not contemplate iteration, improvement, or elimination of the signature preference.

## Measuring Success

### Key Performance Indicators (KPIs)
- CSAT for VA.gov Messages will remain stable or improve

## Discovery
### Assumptions/Risks
- The MHV SM Patient API `/signature` endpoint behaves as expected.
- <10% of users will opt to use a custom signature (current level).
- Personal signatures on patient-generated messages are useful for message recipients.

### What're you building
- Adding a messaging signautre preference feature to VA.gov. Expectation is that this will be in the Personal Contacts section of va.gov/profile. This expectation is based on a decision made by the Authenticated Experience OCTO PO to place it there.
- 
#### Go-to-market 
Internal communications including MHV Coordinators and help desk staff are necessary to ensure they can guide users to the new signature preference feature on VA.gov. There is no planed external communication about the feature. It will be discoverable within the message compose interface.

## Launch Planning
### Collaboration Cycle
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102012)

### Timeline 
We expect this work to be complete by mid-March 2025.

Release plan is TBD, but expect a standard incremental release over several days.

#### Initiative Launch Dates
- *Target Launch Date*
  - 3/10/2025
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
Feature is net new on VA.gov and does not have a before screenshot. If additional reference is needed, view production state of the Personal Information section of va.gov/profile.

### After
![image](https://github.com/user-attachments/assets/8b9e8d17-8b71-4282-abc9-c764c4e93de1)

![image](https://github.com/user-attachments/assets/449504a4-cd4c-4fc8-bd1f-6e792245229f)

---

#### Communications
- Team Name: MHV on VA.gov Messages team
- GitHub Label(s): mhv-va.gov-secure-messaging
- Slack channel: mhv-secure-messaging
- Product POCs: Patrick Bateman; Bryan Riley

#### Stakeholders  
- Office/Department: VHA Office of Connected Care
- Contact(s): P. Henry
 
