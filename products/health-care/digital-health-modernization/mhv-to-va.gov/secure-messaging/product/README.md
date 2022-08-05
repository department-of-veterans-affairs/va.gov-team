# My Health Secure Messaging Product Outline

Last Updated: August 5, 2022

### Communications

- **Github labels**: my-health; mhv-to-va.gov-SM
- **Slack channel**: [#mhv-secure-messaging](https://dsva.slack.com/channels/mhv-secure-messaging)

### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Tracey Mulrooney |oCTO Lead| tracey.mulrooney@va.gov |
|Marci McGuire |Core Team Product Manager| marci.mcguire@adhocteam.us|
|Jonathan Nelson|Core Team Designer |jonathan.nelson@adhocteam.us |
|Megan Graham| Core Team Researcher| megan.graham@adhocteam.us |
|Patrick Vinograd|Core Team Lead Engineer|patrick.vinograd@adhocteam.us|
|Christoper Froehlich|Core Team Engineer|christopher.froehlich@va.gov |
|Bryan Riley| MHV Team Delivery Manager/Product Manager| bryan.riley@vbylight.com |
|Lichelle Bain| MHV Team Product Manager| lichelle.nichols@bylight.com |
|Arienne Walters | MHV User Experience Specialist | arienne.walters@bylight.com |
|Alexia Wunder | MHV Team Designer | alexia.wunder@bylight.com |
|Jessica Robertson | MHV Team Designer | jessica.robertson@bylight.com |
|Mike Moyer| MHV Team Engineer | mike.moyer@va.gov |
|Kolby Balch| MHV Team Engineer | kolby.balch@va.gov |
|Roberto Rodriguez| MHV Team Engineer | roberto.rodriguez@bylight.com |
|Matthew Bain| MHV Team Engineer | matthew.bain@va.gov |
|Oleksii Morgun| MHV Team FE Engineer | oleksii.morgun@va.gov |
|Aaron Read| MHV Team QA Automation Lead | aaron.read@va.gov |
|Damjan| MHV Team QA Automation | Damjan.petrovski@bylight.com |
|Ally Ali|MHV Team Analytics | ally.ali@bylight.com |


### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Opportunities](#opportunities)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Analytics](#analytics)
- [Projects](#projects)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

## Overview
Secure Messaging on VA.gov will provide Veterans with the same ability to securely contact their VA health care providers as on MyHealtheVet (MHV) today The new application will employ modern technology and user-centered design to ensure that the tool is accessible, straightforward, and simple to use.  Moving this product out of MyHealtheVet and into the VA.gov landscape will also provide a more seamless and consistent experience than was possible on two distinct web sites.

## Problem Statement
Secure Messaging on VA.gov was researched and developed > 15 years ago and remains largely unchanged from UI, IA, accessibility, and technology perspectives.  When originally developed, it was purposefully designed not to be an email system, but recent usability studies show that most users expect it to behave like other email applications they are familiar with, such as Gmail and Outlook.  Furthermore, some of the rationale and decisions that drove the MHV secure messaging design may no longer be valid or timely today, and therefore should be re-examined and challenged where appropriate.

## Opportunities
How might we leverage user-centered design strategies, modern tech, and VA.gov design system and components to create a more intutive, user-friendly, and performant secure messaging experience that exists today?
 
## User Outcomes
### Desired User Outcomes

- Users have a secure messaging application whose function is more consistent with their email-derived mental models
- Users are able to perform most, if not all, of the functions provided in a typical email application
- Users no longer need to move between two different web sites (VA.gov and MHV) to perform various health care-related tasks
- User confidence and satisfaction increase as a result of a more consistent, reliable, and performant application
- Users who utilize assistive technology such as screen readers are able to easily use secure messaging

### Undesired User Outcomes

- Users are confused as to why secure messaging is no longer part of MyHealtheVet
- Users have difficulty finding the new secure messaging application on VA.gov
- Users are not be able to perform some of the tasks they were able to perform with the MyHealtheVet secure messaging application
- Users do not have the same level of control over their data as they did in the MyHealtheVet secure messaging application
- Users have to log into VA.gov to use secure messaging after accessing it from MHV

## Business Outcomes
### Desired Business Outcomes

- Support receives fewer support requests related to secure messaging
- VA health care providers have an equal or better experience with the messages generated from the new tool
- The VA's reputation for its ability to understand users' needs improves
- The VA's reputation for its ability to leverage modern technology improves

## Undesired Business Outcomes
- Support receives more support requests related to users' inability to locate or use the new tool
- The new tool does not perform as well as the old one, and users become frustrated and lose confidence in the VA
- Health care providers encounter difficulty with the messages generated from the new tool

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of Use                                                      | Service Completion      | Trust/Satisfaction | Health            |
|----------|------------------------------------------------------------------|-------------------------|--------------------|-------------------|
| KPI      | VA.gov secure messaging traffic vs. MHV secure messaging traffic |                         |                    |                   |
| KPI      |                                                                  | Message completion rate |                    |                   |
| KPI      |                                                                  |                         | Medallia score     |                   |
| KPI      |                                                                  |                         |                    | Submission errors |

#### Baseline KPI Values
- MHV Secure Messaging Traffic just before go-live
- VA.gov completion rate after go-live
- Medallia score after go-live
- Number of submission errors

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Ensure users are finding secure messaging on VA.gov
  - Key result: Traffic to VA.gov secure messaging is equal or greater than previous MHV secure messaging metrics

- Objective: Ensure the secure messaging tool is intutive and easy to use
  - Key result: Message completion rate is equal or greater than MHV secure messaging completion rate

- Objective: Ensure users are satisfied with the new tool
  - Key result: Medallia scores equal to or greater than comparable satisfaction scores on MHV

- Objective: Ensure product functions properly
  - Key result: 99% success rate upon submitting a message

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
  - We will build a tool on VA.gov that has functional parity with the tool on MHV.com.  We have decided to start there because we are replacing an existing tool
- *Why this solution / approach over other solutions / approaches?*
  - Adding additional functionality will increase an already-lengthy timeline for the overall MHV to VA.gov move.  Decreasing functionality would likely cause dissatisfaction among users.
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
  - Replacing the back-end secure messaging API will not be included in the MVP because the back-end does not need to move at this time.
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - Eventually we anticipate replacing the back-end API with the VA Notify API.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan -- TBD](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>


