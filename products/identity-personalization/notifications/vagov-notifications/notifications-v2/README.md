# Project outline: Scaling on-site notifications (On-site notifications V2)

Last updated September 30, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

[Please see the on-site notifications product outline for the current team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications#product-outline-on-site-notifications-ie-personalized-notifications-that-show-on-vagov)

### Table of Contents

- [Overview](#overview)
- [Questions](#questions)
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

[The on-site notification MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications/mvp#readme) is set to launch in October 2022. This functionality does the following:

- Integrates VA.gov and VANotify, so that VANotify can tell VA.gov when to show an on-site alert to a user.
- Elevates a single, action-oriented alert on My VA for when a user has had a new debt added to their account. Users can click for more information or dismiss the alert.

Now that we've established the initial infrastructure for VA.gov to leverage VANotify's functionality, we are ready to determine next steps for scaling this feature.

### Potential problems we'll tackle

#### What notifications can we add?

There are a couple factors that go into what we can or might add to the on-site notifications feature:

- **Type of notification**: For on-site notifications, we are prioritizing action-oriented alerts. We have heard repeatedly in user research that the most important information for people is if VA needs them to take action on something, so we want to make sure these kinds of alerts are elevated above others. Second, we would prioritize alerts where VA has taken an action, but no action is required by the user (eg. VA has made a payment to a user). Currently, we are not prioritizing suggestions, and we have no plans to show "confirmation" information (eg. confirming a user has submitted an application).
- **VANotify support**: We can only support on-site notifications for which VANotify already offers text or email notification support. We can not support a notification if it's not in VANotify, no matter how useful that alert might be.

#### How do we scale on-site notifications without overwhelming My VA?

In our MVP approach, we show our singular "You have a new debt" notification on My VA. At this point, a notification center didn't make sense since we were starting with one notification.

However, we now have the opportunity to add more than one notification to this feature, but we don't want to overwhelm the other content on My VA.

#### Do we need a notification center? If so, when?

There is an assumption that, eventually, we'll build a notification center that will co-exist with My VA. Is this a fair assumption? How do we validate this? And when is the right time to switch from showing notifications on My VA to showing notifications in a notification center?

#### How can we scale this feature over time so our team isn't having to put in so much development time?

Understandably, the MVP required a lot of thinking, planning, iterating, and testing. While we weren't working on the feature full time for a whole year, it did take us about a year to go from our original planning meetings to launch. This is obviously unsustainable -- we shouldn't need to take a year to launch every on-site notification.

As part of this work, we should figure out how we can make implementing new on-site notifications a relatively low-lift over time. We will need to work with VANotify to implement a process that considers on-site notifications from the beginning as teams are adding new email/text notifications.

#### What do we need from VANotify over time?

We need to work with VANotify to figure out how to scale this feature, both in terms of a governance, testing, and launch process, but also figuring out how and what we need to manage on-site notifications in the VANotify self-service tool.

## Questions

**Notification center**

- Do we need one?
- How do we make this feel that it's not redundant to My VA?
- If we need one, when is the right time to go from showing notifications on My VA to a notification center? Is there a right number or type of notifications to make this feature feel useful?
- If users don't see common notifications in a notification center yet because VANotify does not yet support them (eg. new message from your doctor, or a prescription shipping), will users trust the feature?

## Problem Statement

## User outcomes

### Desired User Outcomes

### Undesired User Outcomes

## Business outcomes

### Desired Business Outcomes

### Undesired Business Outcomes

## Measuring success

TBD

## Solution approach

### Product

### VANotify requirements

**Needs**

**Out of scope**

## Key deliverables

## Key dates

- September 2022: Initial on-site notifications V2 planning

## Backend

### How to test

## Frontend

## Design

- Add Sketch files

### Before

TBD

### After

TBD
