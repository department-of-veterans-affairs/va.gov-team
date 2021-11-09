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

### Thoughts on VANotify supporting action items

The original thinking was that VANotify would back onsite notifications so that we had a unified approach to showing notifications. In theory, this is certainly sound. However, things start to break down when we consider what VANotify can support now vs. what informations veterans actually want to see:

**What VANotify currently supports**

- Rx Pharmacy Shipment Update Pilot Text Message
- Debt Management Center
- Covid Vaccine Updates
- Board of Veteran appeals hearing reminders (in person + virtual)

They also support a lot of email confirmations, but this isn't information we want to elevate for on-site alerts since people already see confirmation screens when making updates to VA.gov.

**What people want to see on their dashboards**

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

**Reconciling what VANotify can show and what people want to see**

Cross-checking these lists, there are only two items of overlap if we're talking about action items alone:

- Paying a debt
- Board of Veteran Appeals hearing appointment reminders

While COVID-19 information ("Keep me informed") was mentioned in research, this notification does *not* require action and therefore should be treated differently according to veteran feedback that action items are more important than general alerts that do not require action.

**
