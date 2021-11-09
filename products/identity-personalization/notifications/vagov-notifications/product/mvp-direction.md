# Notifications MVP direction

November 2021

## Overview

I think we've lost sight of the original goal of this work, which is [how do we elevate action items on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#research-goals)? We've pivoted into how do we elevate ALL notifications. As a result, this is starting to get way too complicated to be worth the level of effort, and it is not the simplest way to elevate action item information. So, I'd like us to revisit some of our thinking to determine if the current path we are on is the best path.

## What are actions we know Veterans need to take?

- Complete an application that is about to expire
- Go to an appointment
- Read/reply to a message from their medical team (future: read/reply to messages potentially for other benefits)
- Pay a debt
- Refill a prescription that is due (question: does this happen automatically, or does a Veteran need to do this manually?)
- Upload evidence for a claim or appeal

We should confirm that this is the entire list of time-sensitive actions.

## Thoughts on why we may want to pivot how we are thinking about this work

If there are **six** things a veteran might need to do, ie. if there are six types of action items, then **we do not need a whole notifications center to accommodate this**. We need to figure out how to better elevate this information on My VA, and we can revisit non-action notifications later.

### VANotify should not support action items on VA.gov

The original thinking was that VANotify would back onsite notifications so that we had a unified approach to showing notifications. In theory, this is certainly sound. However, things start to break down when we consider what VANotify can support now vs. what informations veterans actually want to see:

**What VANotify currently supports vs. What people want to see on their dashboards**

*What VANotify supports*

- Rx Pharmacy Shipment Update Pilot Text Message
- Debt Management Center
- Covid Vaccine Updates
- Board of Veteran appeals hearing reminders (in person + virtual)

They also support a lot of email confirmations, but this isn't information we want to elevate for on-site alerts since people already see confirmation screens when making updates to VA.gov.

*What people want to see on their dashboards*

According to research, we know that action items and tasks are more important than general alerts. ([July 2021 alerts discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#prioritization-1); [March 2021 My VA usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#overall-1); [Dec 2020 My VA exploration discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#overall-1); [Summer 2020 Logged-in homepage discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#people-want-a-task-based-logged-in-homepage-tailored-to-them))

More specifically, users said the following were items they would like as alerts in [July 2021 alerts discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#things-veterans-mentioned-theyd-want-to-see-as-an-alert). I've made a note next to items that require action:

- Annual amount of disability compensation
- Appointments **(Action: Show up to appointment)**
- Benefits that Veterans are entitled to
- Claims and appeals information **(Action: Upload evidence if necessary)**
- Covid-19 updates
- Debt payments **(Action: Pay debt)**
- Education payments
- Home loan information (lenders, local APRs, loan status)
- Messages **(Action: Read and respond to message)**
- Physician referral approvals
- Prescriptions **(Action: Refill prescription)**
- Timeline on appeals
- Updates from the VA
- Veteran organizations available to join 

*Reconciling what VANotify can show and what people want to see*

Cross-checking these lists, there are only two items of overlap if we're talking about action items alone:

- Paying a debt
- Board of Veteran Appeals hearing appointment reminders

While COVID-19 information ("Keep me informed") was mentioned in research, this notification does *not* require action and therefore should be treated differently according to veteran feedback that action items are more important than general alerts that do not require action. 

**Personalization issues that arise from working through VANotify**

Since VANotify handles email and text messages, there are additional privacy restrictions that prevent them from showing information that we would want to be able to show on VA.gov to give people proper context to a given action item. Were VANotify to support action items on My VA, this would mean we'd either have to show partial, incomplete data because we're bound to the same restrictions as text and email, OR we'd have to do some weird logic to somehow get the additional information we can show to people when they are authenticated and identity verified.

**Example**: VANotify can't show someone the name of a prescription or full tracking number in an email, so we wouldn't be able to show that on My VA even though people would expect to be able to see that if they were logged in.

Furthermore, there are two action items that we know to be important to users -- eg. health care appointment information and unread messages -- **that we already surface** through an integration with those existing endpoints. This information is not currently supported in VANotify, either. It is supported by VEText, so if we wanted to tie this to email/text notification functionality, we'd then have to also have an integration with VEText, as they don't have a timeline for integrating with VANotify as far as I know.

**Action items don't necessarily need to be tied to email/text notifications**

Finally, action items don't necessary need to be tied to email/text notificactions -- they just need to show on people's dashboards for as long as they are relevant.

Examples: 

- As part of the My VA 2.0 redesign, we already show people's next upcoming appointment if they have one in the next 30 days. This is not tied to any alerts VEText might send, and that is OK. This information is relevant up until the day of the appointment, not matter on what cadence VEText sends reminders.
- similarly, we already show unread message counts. This is relevant to a user until they read the message, and it's relevancy does not depend on whether VEText sends them an alert that they have an unread messages.

**TL;DR**

Essentially, for action items specifically, this information's relevancy is not dependent on email and text alerts and should be fed to us directly from the specific endpoints that power them, NOT VANotify (or VEText). A VANotify integration would likely work best for information that is not personalized, like COVID-19 keep me informed updates. But, for personalized veteran information, that information is not email/text alert dependent and should not be treated as such. The integration of action items and other non-action benefit-related information should be integrated into My VA on a case-by-case basis that considers veteran needs and priorities.

## Next steps

- Pause the current VANotify integration. We should pursue this later after we've developed a strategy to better elevate action items on My VA.
- Discuss how we want to pursue a strategy for better elevating the six action items on My VA -- appointment reminders (medical and appeals hearings), unread messages, refill a prescription, pay a debt, upload evidence for a claim, and completing applications that are about to expire.
- Plan immediate next steps for work.
