# Thoughts on why we may want to pivot the direction of on-site notifications

November 2021

## Overview

I think we've lost sight of the original goal of the on-site notifications project, which was [to explore how we could better elevate action items on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/action-items-discovery/research/alerts-discovery-research-summary.md#research-goals). At some point, this work became more about how do we create on-site alerts based on email/text notifications, and as a result, we stopped considering specifics around action items and whether action items need to be tied to email and text alerts in the first place. We've also uncovered a lot of technical complexity and content constraints around VANotify powering information within VA.gov that has made me question whether VANotify should have anything to do with what we show on My VA. So, I'd like us to revisit some of our thinking to determine if the current path we are on is the best path.

## There are only seven time-sensitive actions Veterans need to take

If we want to revisit the original goal of this work -- elevating action items -- we first need to start by considering what time-sensitive action items exist. I could only think of seven. They are:

- Complete an application that is about to expire
- Go to an appointment
- Read/reply to a message from their medical team (future: read/reply to messages potentially for other benefits)
- Pay a debt
- Refill a prescription
- Upload evidence for a claim or appeal
- [Applying for benefits that have a time limit](https://www.military.com/benefits/veteran-benefits/veterans-benefit-expiration-dates.html)

If there are **seven** time-sensitive things a veteran might need to do, then **we do not need a whole notifications center to accommodate this**. We can plug directly into relevant backends to elevate this information, like we already do for appointments and unread messages.

## Action items are not the same thing as on-site alerts/email and text alerts, and showing action items on VA.gov does not need to be tied to email/text notifications

The original thinking was that VANotify would back onsite notifications so that we had a unified approach to showing information related to email/text alerts on the website. This is sound with the exception of one major detail: it doesn't consider specifics around what we would want to show as an on-site notification.

Again, the original goal for this work was to elevate action items, and **action items and on-site notifications are not the same thing**. An on-site notification is a **vehicle**, just like an email or text is a vehicle. The action item itself -- or any other personally relevant info -- is the **content**.

The approach we've taken with this work so far assumes that on-site notifications are the best way to show action items, but it is not necessarily the only way to show action items or to make sure they have priority on My VA. Here are some examples that we already handle on My VA:

- We already show people's next upcoming appointment if they have one in the next 30 days. This is not tied to any alerts VEText might send, and that is OK. This information is relevant up until the day of the appointment, not matter on what cadence VEText sends reminders.
- We already show unread message counts. This is relevant until until a user reads the message, and it's relevancy does not depend on whether VEText sends them an alert that they have an unread messages.
- While not an action item, we already show someone's most recently updated claim. This is relevant because it's something someone has in flight, not because of when a text or email alert goes out.

The problem we are trying to solve is to make sure action items are properly elevated and easy to find on My VA/VA.gov. We can do this -- and already do -- without tying this information to email and text alerts.

**When email/text alerts should trigger something on the website**

Email and text should trigger on-site noticications for anything that is not personalized. For example, if we wanted to elevate COVID-19 "Keep me informed" updates on the dashboard, we may still want to consider an integration so that an on-site alert shows up at the same time as an email or text. 

## There are discrepancies between what VANotify currently supports and what people want to see on their dashboards

If we want VANotify to support on-site content, we are bound to the content VANotify supports now for our on-site notifications MVP. Again, in theory, this makes a lot of sense. However, it falls apart when we realize that VANotify does not support enough content veterans want to see as action items, we already have some of this information on My VA, and it's just a lot easier to connect directly to backend endpoints.

**What VANotify supports**

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
- Benefits that Veterans are entitled to **(Action: Apply for benefits if there is a time limit to apply)**
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

Furthermore, we already show unread messages and appointments on My VA by connecting directly to those endpoints. We don't need VANotify for this, as it would be much easier to support debt info and BVA appointment reminders with integrations directly to those backends.

## There are personalization issues that arise from working through VANotify because of privacy constraints around email/text

There are additional privacy restrictions for email and text alerts that prevent them from showing personally-relevant information that we would want to show on VA.gov. Were VANotify to support action items on My VA, this would mean we'd either have to show partial, incomplete data because we're bound to the same restrictions as text and email since we'd be working off the data they currently have, OR we'd have to do some weird logic to somehow get the additional information we can show to people when they are authenticated and identity verified.

**Example**: VANotify can't show someone the name of a prescription or full tracking number in an email, so we wouldn't be able to show that on My VA even though people would expect to be able to see that if they were logged in.

## TL;DR

Essentially, the approach we have been taking loses sight of the original problem -- how to elevate action items on VA.gov. We have been treating this project as if the problem to solve is how to create a system that can show on-site notifications in a way that is synced with email/text, and this ignores the actual content we want to show and focuses too much on the vehicle of how to show it. While action items *could* show as on-site alerts, they do not have to, and this is not the only way to elevate this information. 

## Next steps

- Pause the current VANotify integration. We should pursue this later after we've developed a strategy to better elevate action items on My VA.
- Discuss how we want to pursue a strategy for better elevating action items on My VA -- appointment reminders (medical and appeals hearings), unread messages, refill a prescription, pay a debt, upload evidence for a claim, and completing applications that are about to expire. We'll need to consider benefit recommendations later on.
- Plan immediate next steps for work.
