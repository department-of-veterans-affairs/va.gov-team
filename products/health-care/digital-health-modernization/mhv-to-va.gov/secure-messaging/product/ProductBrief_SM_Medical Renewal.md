# Product Outline: Medical Renewal Flow Via SM- VA.gov


##  Overview 

Today, an automatic renewal button on the medication portal is not  possible for online medications renewal. 

This is due to the the Medications API limitations of not having a direct established correlation between the meds provider and the SM provider in both systems. This correlation is necessary to send the renewal request to the provider through SM.



## Problem/User Story
As a Veteran with an expired medication, I need to have a clear way to request an online renewal for **VA.gov only.**

### Use Case

**Use Case**: User has an expired prescription and opens up an secure message that is pre-filled to request a prescription renewal.

-We need a digital way to submit renewal requests for medications.

-We need the ability for users/vets to send a secure message to a doctor, requesting a refill.


## Outcome Summary 
An renewal flow is needed while the API integration work is in progress simultaenously (estimated for Dec. rollout).

Note: The flow will be implemented for with **VISTA Data only.** 

**Note**: SM Team plans fast follow to integrate with OH data as a V2 approach.

**Note:** Medication status would trigger and lead to at renewal. Vista and OH have different statuses that medications hold (ex. inactive vs. discontinued).

### What we are building 

For VA.Gov- Web: 

We are implementing a Link to Secure Messaging "Start a new message" page that will contain pre-filled details based on the info for the given prescription from MHV Medications API (integrated with OH system for OH RX's)



### Key Performance Indicators (KPIs) 

- Number of link clicks: count
- Number of messages sent with Medication category increase
- Number of individual feedback from Veterans complaining about renewals confusion decrease

### **Resources:**

-Medications Team's Design Explorations
https://www.figma.com/design/cqiuYyA1vn728D0Nde2NgS/Medications---Milestone-1---2?node-id=16957-25194&p=f&t=i20DbkMG9gL9aHe3-0

-SM Sprint Spike Explorations
https://www.figma.com/design/s1lAPraSoTHsevgl84SDoo/Source-of-truth---SM?node-id=4423-105558&t=LJsqgk7rTsSVkxYl-1



#### Go-to-market  
TBD


## Launch Planning
 Medications Team would like to do testing in October timeframe with a possible Go Live in December

### Collaboration Cycle
View all related tickets

#### October 2025 -Kick off Ticket: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/3?pane=issue&itemId=132372214&issue=department-of-veterans-affairs%7Cva.gov-team%7C121406

#### November 2025

#### December 2025


#### Communications


Team Name: MHV Secure Messaging (SM Web and Mobile)
GitHub Label(s): mhv-secure-messaging
Slack channel: mhv-secure-messaging
Product POCs: Patrick Bateman; Stacy Blackwood
Mobile: Jayson Perkins (Lead Dev on Mobile)

