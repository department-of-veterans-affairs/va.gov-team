# Project outline: Scaling onsite notifications (Onsite notifications V2)

**Last updated: December 22, 2022**

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

[Please see the on-site notifications product outline for the current team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications#readme)

### Table of Contents

- [Overview](#overview)
- [Problems](#problems)
- [Questions](#questions)
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

[The onsite notification MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/mvp#readme) launched in October 2022. This functionality does the following:

- Integrates VA.gov and VANotify, so that VANotify can tell VA.gov when to show an on-site alert to a user.
- Elevates a single, action-oriented alert on My VA for when a user has had a new debt added to their account. Users can click for more information or dismiss the alert.

Now that we've established the initial infrastructure for VA.gov to leverage VANotify's functionality, we are ready to determine next steps for scaling this feature.

## Problems

### Governance

This effort has two main pillars, one of which is how do we manage the process of adding notifications over time? Potential issues we'll tackle include:

#### Intake

Over time, we need a process for determining what gets added to the onsite notifications feature. This might piggyback off of VANotify's intake process. Ideally, we will work with VANotify to implement a process that considers onsite notifications from the beginning as teams are adding new email/text notifications.

#### Speeding up development time

Understandably, the MVP required a lot of thinking, planning, iterating, and testing. While we weren't working on the feature full time for a whole year, it did take us about a year to go from our original planning meetings to launch. This is obviously unsustainable -- we shouldn't need to take a year to launch every on-site notification. As part of this work, we should figure out how we can make implementing new onsite notifications a relatively low-lift over time. 

#### Updates to the VANotify platform

We need to work with VANotify to figure out what we need to manage onsite notifications in the VANotify self-service tool.

### Adding new onsite notifications to VA.gov

The other pillar to this effort is actually adding new onsite notifications. Potential issues we'll tackle include:

#### What notifications to add to VA.gov in V2

There are a couple factors that go into what we can or might add to the onsite notifications feature:

- **Type of notification**: For on-site notifications, we are prioritizing action-oriented alerts. We have heard repeatedly in user research that the most important information for people is if VA needs them to take action on something, so we want to make sure these kinds of alerts are elevated above others. Second, we would prioritize alerts where VA has taken an action, but no action is required by the user (eg. VA has made a payment to a user). Currently, we are not prioritizing suggestions, and we have no plans to show "confirmation" information (eg. confirming a user has submitted an application).
- **VANotify support**: We can only support onsite notifications for which VANotify already offers text or email notification support. We can not support a notification if it's not in VANotify, no matter how useful that alert might be.

#### Scaling onsite notifications without overwhelming My VA

In our MVP approach, we show our singular "You have a new debt" notification on My VA. At this point, a notification center didn't make sense since we were starting with one notification. However, we now have the opportunity to add more than one notification to this feature, but we don't want to overwhelm the other content on My VA.

#### Determining when to add a notification center

There is an assumption that, eventually, we'll build a notification center that will co-exist with My VA. Is this a fair assumption? How do we validate this? And when is the right time to switch from showing notifications on My VA to showing notifications in a notification center?

For V2, **we will not be adding a notification center**, but we may want to consider overall notification center discovery as part of the scope of V2.

#### How to increase interactions with notifications

For the MVP, we didn't add any indicators that someone has a new notification until they get to My VA. We may want to explore how to get more people to notifications to increase visibility and access to the tool.

## Questions

#### General

- What can we get done in 3 months before Samara's maternity leave?
- What would be appropriate to work on while Samara is on leave?

#### Intake

- What is VANotify's current intake process? Can we piggyback off of this?
- Is VANotify's intake process tied to VA Profile's intake process in any way?
- Do we need a separate intake process?
- What is a "deliverable" for creating an intake process? How we do we implement something that people will actually do and that's effective?

#### Speeding up development time

- How can we reduce the time to test a new notification (even if this is not reduced time overall, but reduced effort on our team's part)?
- What development is required to add a new notification now that the MVP exists (ask backend)?

#### Adding new notifications to VA.gov

- What does VANotify currently support?

#### Scaling notifications without overwhelming My VA

- Can we add any new notifications without potentially overwhelming My VA?

#### Notification center

- What makes something a notification center? Is this "just" a separate page? Something else?
- Is there an in between step between what we have now and a notification center?
- If we need one, when is the right time to go from showing notifications on My VA to a notification center? Is there a right number or type of notifications to make this feature feel useful?
- If users don't see common notifications in a notification center yet because VANotify does not yet support them (eg. new message from your doctor, or a prescription shipping), will users trust the feature?
- How do we do discovery on this without being too leading? We're already pretty sure that users will respond positively to a notification center, so how can we determine this is the right path without being too self-fulfilling?
- What are OCTO stakeholders expectations around how we elevate notifications on VA.gov? 
- How would a notification center affect the navigation? How would this affect other teams?
- Have other teams talked to users about how they expect to see notifications on VA.gov (eg. has this come up through health apartment research at all? Or VAOS? Or the mobile app? etc etc)

#### Increasing interactions

- What would increase interactions with the notifications feature? And is this important enough to tackle in V2?

## User outcomes

### Desired User Outcomes

### Undesired User Outcomes

## Business outcomes

### Desired Business Outcomes

### Undesired Business Outcomes

## Measuring success

TBD

## Solution approach

### In scope

**Tentative scope**

- Define and document intake process with VANotify (potentially low lift)
- Inventory existing notifications to figure out what onsite notification backlog looks like
- Add 1 (maybe 2?) new onsite notifications
- Notification center discovery (what questions do we still have? definitely want to talk to stakeholders; plan to scale over time so we can have regular launches)

### Out of scope

- Designing and building a notification center.

## Key deliverables

## Key dates

- September 2022: Initial on-site notifications V2 planning
- October - December 2022: V2 work on hold due to MVP launch and lull due to contract switch-over
- January 2023: Project discovery; Scope V2

## Backend

### How to test

## Frontend

## Design

- Add Sketch files

### Before

TBD

### After

TBD
