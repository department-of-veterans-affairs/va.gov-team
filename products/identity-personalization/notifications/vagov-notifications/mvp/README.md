# Project outline: On-site notifications MVP

Last updated November 22, 2021

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Heather Justice|Product Manager| heather.justice@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Taylor Mitchell| FE Engineer| tmitchell@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Key deliverables](#key-deliverables)
- [Key dates](#key-dates)
- [Screenshots](#screenshots)

## Overview

VA.gov is in the process of implementing a comprehensive communication strategy to support email, text, and in-app (ie. on VA.gov) notifications. Currently, the VANotify team  builds and manages email notification support for VA.gov, and they are working in tandem with VEText to integrate support for text messages into their platform. 

The third and final pillar -- notifications that show to logged-in users on VA.gov -- is finally ready for MVP development by the auth. experience team. For our MVP, we plan to focus on **one** singular notification to start building the infrastructure to manage more robust on-site notification needs in the future.

## Problem Statement

- As a customer of the VA, I need to know if the VA needs me to do something related to the management of my benefits.

## User outcomes

### Desired User Outcomes

- Users will more easily be able to find the alert for the MVP use case and to act on it more quickly than if we did not have on-site notification functionality.

### Undesired User Outcomes

- Users are confused as to why they don't see notifications for other circumstances.

## Business outcomes

### Desired Business Outcomes

- Create a unified experience through the VANotify platform. 
- Build the infrastructure for on-site notifications so that we can easily leverage this infrastructure in the future.
- There is no way to turn off on-site notifications on VA.gov. This feature is seen as a backup in case all email and text notifications are turned off.

### Undesired Business Outcomes

- The MVP for some reason is not scalable to future use cases.

## Measuring success

Specific OKRs and KPIs TBD

- % of users that see this notification who click it
- Increase in task completion based on baseline metrics

## Solution approach

The following is needed for the MVP build:

### Product

- We will be building **one** notification out first as a proof of concept. We will then assess metrics for this MVP and determine next steps for the overall on-site notifications strategy.
- That MVP use case is debt notifications.

### Design

- Notifications will likely be a simple line of copy and a link to more information.
- We do not need to show personalized data in notifications.

**Up for discussion**

Some of this will be determined by the MVP use case.

- Does there need to be a way to dismiss a notification?
- Given that we are working with one notification for the MVP, do we need the separate notifications page?

### Frontend

- The frontend will receive information from the backend that determines which notification to show and to which user.
- The frontend code will be where we store content for a given alert at this point in time.

### Backend

- The backend will receive information from VANotify that will allow us to determine what notification to show and to which user.

### VANotify requirements

**Needs**

- VANotify needs to send us information so that we know which notification to show and to which user.
- VANotify needs a way in their platform to show that we've enabled an on-site notification for a given notification.
- VANotify should have a way to easily turn on/off an on-site notification from their platform.

**Out of scope**

- VANotify does not need to be a CMS and does not need to store any content for us.
- VANotify does not need to send us personalized data.

## Key deliverables

- [Action items discovery outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/action-items-discovery#readme)
- [Action items discovery research readout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md)
- [Design documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications/mvp/design/)
- Technical documentation
- How to access and test
- Release plan

## Key dates

- May 2021: Discovery kickoff
- September 2021: Design discovery complete
- October 2021: Technical discovery and MVP definition
- November 2021: Project pause and revisiting

## Screenshots

### Before

*My VA 2.0*

![My VA 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After

