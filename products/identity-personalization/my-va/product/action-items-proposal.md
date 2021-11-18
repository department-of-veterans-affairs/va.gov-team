# Proposal for how we should proceed with action items work

[As I outlined here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/product/on-site-notifications-pivot.md), I do not think we should proceed with showing action items as on-site notifications on My VA, at least not at this time given VANotify's current capabilities. However, per user needs and expectations, elevating action items is still a priority for My VA. This document will outline some thoughts on how we could potentially proceed with this work.

## What action items exist?

To the best of my knowledge, there are only seven action items currently:

If we want to revisit the original goal of this work -- elevating action items -- we first need to start by considering what time-sensitive action items exist. I could only think of seven. They are:

**Can be done online**

- Complete an application that is about to expire
- Read/reply to a message from their medical team (future: read/reply to messages potentially for other benefits)
- Pay a debt
- Refill a prescription
- Upload evidence for a claim or appeal
- [Applying for benefits that have a time limit](https://www.military.com/benefits/veteran-benefits/veterans-benefit-expiration-dates.html)
- [Potential future functionality: Fill out check-in forms online for doctor's appointments]

**Done IRL**

- Go to an appointment (Medical or BVA hearing)

While we should elevate all of these tasks, we will likely want to treat tasks that can be done online differently than tasks (ie. going to appointments) that are done offline/in real life.

## Current status

We already show the following on the My VA dashboard:

- Medical appointments
- Unread messages
- Expiration dates for benefit applications


We do not show the following action items that **do** have existing endpoints we could connect to:

- BVA hearing appointments
- Debt notifications
- Refill a prescription

We do not show the following action items, either, but we do not yet have the infrastructure to be able to do so even if we wanted to:

- Upload evidence for a claim or appeal
- [Applying for benefits that have a time limit](https://www.military.com/benefits/veteran-benefits/veterans-benefit-expiration-dates.html)
- [Potential future functionality: Fill out check-in forms online for doctor's appointments]
