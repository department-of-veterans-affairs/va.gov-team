# Product Outline: Medical Renewal Flow Via SM (VA.gov and VAHB)



##  Overview 

Today, an automatic renewal button on the medication portal is not currently possible for online medications renewal. 

This is due to the the Medications API limitations of not having a direct established correlation between the meds provider and the SM provider in both systems. This correlation is necessary to send the renewal request to the provider through SM.



## Problem/User Story
As a Veteran with an expired medication, I need to have a clear way to request an online renewal for both Web and Mobile

### Use Case

Use Case: User has an expired prescription and opens up an secure message that is pre-filled to request a prescription renewal.

-We need a digital way to submit renewal requests for medications.

-We need the ability for users/vets to send a secure message to a doctor, requesting a refill


## Outcome Summary 
An renewal flow is needed while the API integration work is in progress simultaenously (estimated for Dec. rollout).



### What we are building (Udpate Here)

**For Web:**

We are implementing a Link to Secure Messaging with pre-filled information by Utilizing the Oracle Health Portal

**For Mobile:**

We are Update VAHB FE to include a button within RX that will navigate the user to a the new message screen and pre-fill details based on the info for the given prescription


### Assumptions/Risks (Update Here)

- We assume that the EHRM/Oracle Health recipient objects and messaging APIs operate as stated in production
- We assume there is no reliable way to get patient-to-recipient mappings for EHRM/Oracle Health recipient objects
### Key Performance Indicators (KPIs) (Udpate Here)


### **Resources:**

-Medications Team's Design Explorations
https://www.figma.com/design/cqiuYyA1vn728D0Nde2NgS/Medications---Milestone-1---2?node-id=16957-25194&p=f&t=i20DbkMG9gL9aHe3-0

-SM Sprint Spike Explorations
https://www.figma.com/design/s1lAPraSoTHsevgl84SDoo/Source-of-truth---SM?node-id=4423-105558&t=LJsqgk7rTsSVkxYl-1



#### Go-to-market  (Update Here)
- Internal communications to MHV Coordinators and help desk staff to ensure they are aware of how the feature works and can guide users who need help.
- External communication notifying patients at EHRM transitioned sites that they can now message their providers on VA.gov.


## Launch Planning
 Medications Team would like to do testing in October timeframe with a possible Go Live in December

### Collaboration Cycle
View all related tickets

#### October 2025 -Kick off Ticket: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/3?pane=issue&itemId=132372214&issue=department-of-veterans-affairs%7Cva.gov-team%7C121406

#### November 2025

#### December 2025
