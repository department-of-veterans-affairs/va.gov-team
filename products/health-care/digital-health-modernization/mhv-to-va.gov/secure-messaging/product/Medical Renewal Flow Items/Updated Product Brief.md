 ## Product Outline: RX Medical Renewal Flow Via SM (VA.Gov MVP)
  Updated- 10/21/25

##  Overview 

Today, an automatic renewal button on the medication portal is not  possible for online medications renewal. 

This is due to the the Medications API limitations of not having a direct established correlation between the meds provider and the SM provider in both systems. This correlation is necessary to send the renewal request to the provider through SM.

**User Goal**: Renew Medications Online for Vista (December 2025-MVP). Note: Post MVP will be Vista and OH Users.


## Problem/User Story
As a Veteran with an expired medication, I need to have a clear way to request an online renewal for **VA.gov only.**

### Use Case

User has an expired prescription User has an expired prescription
Or an active med with 0 refills left and opens up an secure message that is pre-filled to request a prescription renewal.

1. We need a digital way to submit renewal requests for medications.



2. We need the ability for patients to send a renewal request via messaging that contains the relevant information for providers and pharmacists so as to expedite the renewal request

### Requirement for RX  Renewal

Vista Users

1. **Active Refills**:  For Active Refills, the user is eligible for renewal if 1. The user has no refills remaining 2. The user have a refills in progress with no refills remaining  2. the user has submitted for an active refill with no refills remaining

2. **Expired Refills** For In-active or Expired Refills, the user is eligible for renewal if 1.The prescription expiration is less than 120 days expired 

## Outcome Summary 
 This renewal flow will apply to Vista Users & applicable Data **only.**

**Note**: As a fast follow or Post MVP Approach, SM team plans to include both Vista and OH Data.
A Medication status would trigger and lead to a renewal. Vista and OH have different statuses that medications hold (ex. inactive vs. discontinued).

### Implemenation

For VA.Gov- Web: 

We are implementing a Link to Secure Messaging "Start a new message" page that will contain pre-filled details based on the info for the given prescription from MHV Medications API (integrated with OH system for OH RX's)

Note: Implementation will not apply to the Mobile App for MVP

### Key Performance Indicators (KPIs) 

TBD

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







