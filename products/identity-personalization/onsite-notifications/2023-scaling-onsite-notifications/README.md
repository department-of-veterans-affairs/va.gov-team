# Initiative outline: Scaling the VANotify integration for onsite notifications

**Last updated: August 15, 2023 -- added key dates.**

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)
- **Development Epic:** [50758](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50758)
- **Collab Cycle Epic:** TK - not yet created

### Roles

[Please see the onsite notifications product outline for the current team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications#readme)

### Table of Contents

- [August 2023 -- Re-evaluating the VANotify/onsite (VA.gov) notifications strategy](#re-evaluating-the-vanotifyonsite-vagov-notifications-strategy) 
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

## Re-evaluating the VANotify/onsite (VA.gov) notifications strategy

**As of August 2023, we made the decision to put the initiative to scale VANotify support of onsite notifications on hold. The following document was circulated around OCTO and relevant VA.gov teams to explain this pause.**

### We all agree that:

1. The vision for VANotify -- a single system that can send emails, texts, and notifications to VA.gov -- is a sound.
2. We do not want other VA stakeholders creating their own one-off, silo’d notifications solutions. Similarly, VA.gov teams should be working together to create a consistent notification experience, not working in silos on their individual products.
3. The top user priority on VA.gov is to be able to quickly navigate to items which require action or attention. In turn, this makes guiding people to their action items and important updates the top priority of the logged-in experience on VA.gov.

### Problems:

1. **We haven’t been able to scale onsite notifications in 6+ months** -- and not for lack of trying on the parts of the auth experience and VANotify teams. Each time we meet to discuss a good candidate for a new onsite notification, there are technical constraints that prevent us from leveraging it. If we aren’t able to scale a feature after 6+ months of effort, this is a signal that we might want to reevaluate our strategy.
2. **There is high variability in how each backend sends data to VANotify** --The aforementioned technical constraints have been caused not by VANotify, but by the wide variability in how each backend system integrates with VANotify, and what data they pass to VANotify to enable emails/texts. Usually, the problem has been with how veteran look-up is done. While this is a fixable problem, it is only fixable with additional work by each individual backend team, which is significantly more effort than we’d originally hoped would be required for onsite notifications.

### What’s next – short-term:

#### A pause on using VANotify to support onsite notifications

We should take a pause and reevaluate how we can best leverage VANotify. There may still be some use cases for onsite notifications that would best be supported by VANotify and may not require as much additional development and support. 

#### Think through other ways to highlight action items and important updates

We know what information is important to veterans. We should explore other tools – like alert icons or tags – and how they can support a larger notification strategy. This doesn’t preclude us from using VANotify to support the onsite notifications strategy in the future.

### What’s next – long-term:

#### Larger revisiting of VANotify and its role in onsite notifications

We may want to consider revisiting what the goals and expectations are for VANotify as it pertains VA.gov notifications. If there are things we want/need/expect this system to do over time, those things should be clearly outlined and fit into broader VANotify development.


-----

**The rest of this document captures details about this initiative before we closed it down.**

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

### Q1 CY2023

#### To complete

- **Define intake process**: Define and document intake process with VANotify (potentially low lift)
- **Create onsite notifications backlog**: Inventory existing notifications to figure out what onsite notification backlog looks like
- **Notifications discovery**: Determine what we can currently add as an onsite notification, if anything
  - **Note**: As of March 2023, there is not a good candidate for a new onsite notification right now. [More details in this github ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/53707#issuecomment-1453689227).

#### Out of scope

- Notification center work
- Update the notification design (Design done; needs FE build and collab cycle)

### Q2 CY2023

#### To complete

- **Notification center discovery** - Should start towards the end of Q1 CY2023; will continue and likely be completed in Q2.
- **New notification design** - Put new notification design through collab cycle/build (OK if this ends up launching Q3).

#### To start, if time: Notification center MVP

[Notes are also in Samara's maternity leave plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/sprint-objectives/maternity-leave-plan-2023.md#onsite-notifications-v2-scale-notifications-feature)

**Why**

This was initially slated for Q3 CY2023, but I am moving this up. We had anticipated waiting on this until we had a new notification to add; however, [after a discussion with the MHV health apartment team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/meeting-notes/mhv-authexp-vanotify-4.3.23.md), it's clear we might need to move quickly on this once a new notification is ready. We don't want to be in a position where a new notification is ready and we have to wait to launch it until we've updated the notification functionality to accommodate this.

**What this is**

At most, this would be a page we could link to from My VA/the health apartment/anywhere on the site to view all notifications.

**What this is not**

- This does not involve any changes to the nav or any notification indicators to start (though this is likely to happen eventually).
- This is not a sub-page of My VA, at least URL-wise. It should be treated as something that can be linked to from anywhere, or eventually grow into a global tool.

**Steps involved**

- Technical discovery to determine scope
- Design/research
- The rest of the collab cycle

### Q3 CY2023

#### To complete

- **New notification design** - Launch new notification design if not launched in Q2.
- **New notifications** - Add new notifications if there is anything appropriate for us to add.
- **If possible**: Launch notification center MVP.

### Q4 CY2023

#### To complete

- **Launch notification center** - If not done in Q3 CY2023.
- **New notifications** - Add new notifications if there is anything appropriate for us to add.

## Key deliverables

|Deliverable|Date completed|
|-----------|--------------|
|[Existing notifications review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/notifications-v2/product/shared-notes-existing-notifications-to-review.md)| January 2023|
|[Update design component project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/update-design-system-component/README.md)| N/A|
|[Notification center discovery folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/2023-scaling-onsite-notifications/notification-center-discovery)| N/A|


## Key dates

- September 2022: Initial on-site notifications V2 planning
- October - December 2022: V2 work on hold due to MVP launch and lull due to contract switch-over
- January 2023: Project discovery; Scope V2
- February 2023: Technical discovery; Continued notifications discovery
- March 2023: Determination that there are no good candidate for immediately adding a new onsite notification; pivoting project to notification center discovery and putting the new notification design through the collab cycle.
- April - June 2023: Samara on maternity leave
- July 2023: Samara returns; Determination made to pause efforts to scale the VANotify integration.

## Backend

### How to test

## Frontend

## Design

- Add Sketch files

### Before

TBD

### After

TBD
