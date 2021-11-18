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

- BVA hearing appointment reminders
- Debt notifications
- Prompts to refill a prescription 

We do not show the following action items, either, but we do not yet have the infrastructure to be able to do so even if we wanted to:

- Upload evidence for a claim or appeal
- [Applying for benefits that have a time limit](https://www.military.com/benefits/veteran-benefits/veterans-benefit-expiration-dates.html)
- [Potential future functionality: Fill out check-in forms online for doctor's appointments]

## Proposal

We should focus on incorporating the remaining action items with available endpoints/infrastructure into the My VA dashboard. We should also continue to explore how to better elevate tasks, though whether we do this in tandem with incorporating new data or after we incorporate additional data is up for discussion.

### Immediate next steps

- We are currently exploring adding debt notifications as part of a new payment & financials section we are going to add per user request/need, analytics, and business need (request from the edu team to start adding edu info, of which viewing payments is the most important in terms of user need). We are still determining whether we will address debts as part of the payment section MVP or not, but if not, we should definitely move to incorporate this functionality right after launch. This would give us an important additional action item on My VA.
- Potentially explore methods for elevating tasks like paying a debt while this data gets integrated into VA.gov.

### Future next steps

- Explore adding BVA hearing appointment info to the dashboard. [Per Kim Ladin](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/appeals-data.md), this info is accessible already, as it shows in the claim status tool, so we should be able to access it for the dashboard.
- Explore adding prescription refill info to the dashboard. This will likely be a larger engagement given the complexity of prescriptions and how confusing this can be to users if not handled well, as we saw in [March 2021 user testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/Research/MyVA-research-findings.md#health-care-1) with the original prescription info we had proposed for the dashboard.
- We may want to explore adding a "To-do" section to the My VA dashboard, or making other adjustments to information architecture or callouts to draw more attention to action items. We could also potentially explore this as part of the work we're going to do to integrate more action items into My VA.
- If an endpoint become available so we can show a prompt to upload evidence to a claim on My VA, we should definitely add this.
- With regards to prompting people to apply for time sensitive benefits, this 
- An effort to suggest which benefits to apply for is likely going to be larger and more complex since there are many differen factors that could determine whether we prompt someone to apply for something (eg. time, discharge status, etc). We'll likely need to explore this over a much longer period of time and implementation will likely be a long-term, ongoing effort.
