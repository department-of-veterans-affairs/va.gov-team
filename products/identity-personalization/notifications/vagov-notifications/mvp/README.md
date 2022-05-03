# Project outline: On-site notifications MVP

Last updated May 3, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: vsa-authd-exp

### Roles

[Please see the on-site notifications product outline for the current team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Key deliverables](#key-deliverables)
- [Key dates](#key-dates)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

## Overview

VA.gov is in the process of implementing a comprehensive communication strategy to support email, text, and in-app (ie. on VA.gov) notifications. Currently, the VANotify team  builds and manages email notification support for VA.gov, and they are working in tandem with VEText to integrate support for text messages into their platform. 

The third and final pillar -- notifications that show to logged-in users on VA.gov -- is finally ready for MVP development by the auth. experience team. For our MVP, we plan to focus on **one** singular notification to start building the infrastructure to manage more robust on-site notification needs in the future. 

**MVP use case**: We will show an on-site notification when a new debt is added in someone's VA.gov account.

## Problem Statement

- As a customer of the VA, I need to know if the VA has added a new debt to my account.

## User outcomes

### Desired User Outcomes

- Users will see a debt alert and be able to act on it more quickly than if we did not have on-site notification functionality.

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

### Objective: Meet user need/expectation by elevating debt informtion to user dashboard.

**Key result**: Increase overall clicks into debt information by 10%.

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Qx 2022| Post-launch: Qx 2022|
|----------|-------------|---------------|-------------------|
|Clicks to view all debts ("You have n oustanding debt payments. [Manage your VA debt](va.gov/manage-va-debt/your-debt)")| 158k|TBD|TBD|

**Key result**: Establish baseline metric for how many people click the debt notification from My VA. Goal: 20K clicks/quarter.

|KPI/metric|Baseline: Aug-Nov 2021|Post-launch: Qx 2022| Post-launch: Qx 2022|
|----------|-------------|---------------|-------------------|
|Clicks of debt notification on My VA| -- |TBD|TBD|

## Solution approach

The following is needed for the MVP build:

### Product

- We will be building **one** notification out first as a proof of concept. We will then assess metrics for this MVP and determine next steps for the overall on-site notifications strategy.
- That MVP use case is debt notifications.

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
- December 2021: MVP use case determine -- adding a new debt to VA.gov
- January - March 2022: Project largely on hold due to VANotify team switch
- April 2022: VANotify starts on build; 
- May 2022: Design updates to accomodate multiple notifications; Connecting frontend to backend

## Backend

### How it works

[Please see the product outline for details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/README.md#backend).

### How to test

Staging and testing documentation for the MVP is pending.

## Frontend

[Please see the product outline for details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/README.md#frontend).

## Design

- Notifications are a simple line of copy and a link to more information.
- We do not show personalized data in notifications since that is not sent to us from VANotify.
- We can show timestamps to help differentiate similar notifications.

### Before

*My VA 2.0*

![My VA 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After

