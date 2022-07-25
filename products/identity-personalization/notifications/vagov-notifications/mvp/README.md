# Project outline: On-site notifications MVP

Last updated July 25, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

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
|Clicks to view all debts ("You have n oustanding debt payments. [Manage your VA debt](https://va.gov/manage-va-debt/your-debt)")| 158k|TBD|TBD|

**Key result**: Establish baseline metric for how many people click the debt notification from My VA. Goal: 20K clicks/quarter.

|KPI/metric|Post-launch: Qx 2022| Post-launch: Qx 2022|
|----------|---------------|-------------------|
|Clicks of debt notification on My VA|TBD|TBD|

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
- June 2022: VANotify fixes some issues; Begin trying to get end-to-end testing to work
- July 2022: Figure out how all staging environments are connected; Get first working e2e test on July 12

## Backend

### How it works

We receive on-site notifications from [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/partner-services-upstream-services). For the MVP, the system works as follows:

- The debt management center backend (DMC) will add debts for a given set of users. Those debts will show up in the debt tool in VA.gov.
- Once a day, the DMC backend will send a batch request to VANotify to send out notifications to folks alerting them that they have a new debt.
- VANotify will then send out notifications:
  - An email notification (this existed prior to the on-site notification MVP and was an entirely separate effort).
  - A notification that shows on someone's My VA personalized dashboard if they are logged in and identity-verified (LOA3) on VA.gov.
  - Users receive notifications based on their preferences. Email notifications can be turned off; on-site notifications can not. 
- If VANotify determines it should send the "you have a new debt" notification to VA.gov, it will send a `user id` and `template id` to VA.gov. This is what tells us to show the "you have a new debt" notification and to whom.

[Additional technical documentation from VANotify on how the on-site notification functionality works on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/onsite-notifications/README.md#workflow-overview)

### How to test

This is the [on-site notification MVP QA documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification.md). 

It is important to note that notifications are dismissible in the MVP, so it's possible that as time passes, users who had on-site notifications for QA no longer have them if someone dismisses them. To get new debt notifications added, there are two possible options:

- **The easier/shorter route**: Ask VANotify to trigger the on-site notification in their staging environment for whichever staging user you want to test. 
  - **This will not add a debt in the debt tool, so there will not be a corresponding debt with the debt notification.** This is because a different setup controls what debts show in the debt tool. 
- **The longer route**: Contact DMC (Debt Management Center) folks and ask them to trigger a "You have a new debt" notification to VANotify in their staging environment. We worked with DMC in development of the MVP to make sure that the on-site notification functionality worked end-to-end.
  - **This will not add a debt in the debt tool, so there will not be a corresponding debt with the debt notification.** This is because -- as of July 2022 -- the debt tool is not connected to DMC's staging environment. So, when DMC adds a debt request, it does not also add a debt to VA.gov staging. 
  - DMC will need the "file number", aka SSN, for the staging user you want to test.
  - These notifications batch process at 6:40 CT everyday **unless** DMC manually pushes them through. If you need to see them more immediately, you'll need to request that DMC push the notification request immediately.

#### Troubleshooting testing issues

If you have a debt notification added to My VA and it doesn't show up, this could be because VANotify was not able to send the notification for one of the following reasons. If a debt notification doesn't show up as expected, check in with VANotify to see if they can detect whether one of these issues is the cause:

- Staging user does not have a VA Profile ID.
- Staging user is marked as deceased.

## Frontend

- The frontend connects to VANotify via an API we set up.
- Currently, the frontend code stores the content for on-site notifications. This may be stored by VANotify some time in the future, but not for the MVP.
- If VANotify determines it should send the "you have a new debt" notification to VA.gov, it will send a `user id` and `template id` to VA.gov. This is what tells us to show the "you have a new debt" notification and to whom.

## Design

- Add Sketch files

### Before

*My VA 2.0*

![My VA 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After

![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/images/onsite-notification.png)
