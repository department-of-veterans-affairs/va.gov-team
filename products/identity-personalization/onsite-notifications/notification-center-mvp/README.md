# Project outline: Notification Center MVP (Draft/WIP)

**Last updated: June 6, 2023 - collab cycle epic linked**

### Communications

- **GitHub Label**: authenticated-experience; onsite-notifications; notification-center
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)
- **Epic:** [#58425](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58425)
- **Collab Cyle Epic:** [#59826](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59826)

### Roles

[Please see the on-site notifications product outline for the current team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications#product-outline-on-site-notifications-ie-personalized-notifications-that-show-on-vagov)

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

The [onsite notification MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/mvp#readme) launched in October 2022. As we look to scale onsite notifications by adding more types, and other applications and services like MHV on VA.gov will want to leverage onsite notifications, we need to have a way to manage a large volume of onsite notifications and a centralized home for viewing a history of notifications.

[Our team spoke with a variety of stakeholders and teams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery/scaling-onsite-notifications-stakeholder-research-findings.md) from across the VA ecosystem to share the concept of a notification center on VA.gov and to build consensus around its purpose and the problems it aims to solve. 

## Problem Statement

- As a customer of the VA, I can access a history of all my onsite notifications on VA.gov.

## User outcomes

### Desired User Outcomes

- ...

### Undesired User Outcomes

- ...

## Business outcomes

### Desired Business Outcomes

- ...

### Undesired Business Outcomes

- ...

## Measuring success

- TK

## Solution approach

The following is needed for the MVP build:

### My VA Requirements

**Needs**
- A new page on VA.gov, with its own url _not_ nested under My VA, that's can be linked to from other areas on VA.gov (i.e. new MHV landing page)
- A link on My VA to the notification center (implies an "ever present" state for Notifications must exist on My VA so that the user can access the NC even when they don't have notifications to show)
- Historical display of all onsite notifications, displayed reverse chronologicall by date
- Pagination

**Out of Scope**
- Filtering or sorting of notifications
- Houses messages (or other VA comms) in addition to notifications
- Changes to naviagtion
- Indicators in the navigation/personal menu


### VANotify Requirements

**Needs**

- ...

**Out of scope**

- ...

## Key deliverables

- [Notification Center Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery)


## Key dates

- March 2023: Discovery kickoff
- ...

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

Additional technical documentation can be found at:

- [Onsite Notification Workflow Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/onsite-notifications/README.md#workflow-overview)
- [Onsite Notification Technical Overview](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/my-va/onsite_notifications/technical_overview.md)


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

- ...

### Before

NA- new feature on VA.gov

### After

_Post-launch image goes here_
