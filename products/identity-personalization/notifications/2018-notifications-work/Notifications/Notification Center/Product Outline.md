# Notification Center Outline
- GitHub Label: 
- Slack channel: #dragons-team
- Vets.gov link: n/a
- Demo video link: n/a

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Questions We Have](#questions-we-have)
- [Stakeholders](#stakeholders)
- [Discovery Takeaways](#discovery-takeaways)
- [Requirements and Constraints](#requirements-and-constraints)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement

1. Users feel [in the dark](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Discovery/Internal%20Research/Synthesis.md#pain-points) about what is happening with their claims after they've been submitted, and they end up calling the VA daily to get updates. Users want to feel like they are up to date and have insight into what it is going on with their information at the VA.
2. In general, veterans want more transparency with what is happening with their benefits at the VA, and they want to be able to trust things aren't getting lost in the mix.
3. Feedback is key here, and while there are places in Vets.gov where users can see different kinds of updates, there is no single page that aggregates updates and no way to receive updates outside of Vets.gov.

## Solution Goals

1. Allow user to easily see and track actions taken by the VA over time.
2. Allow users to receive reminders from the VA.
3. Allow users to easily see and track actions they have taken over time. (Note: May not be displayed and handled the same way as notifications and reminders from the VA).

### User Goals

As a user, I want to:

1. See when an application:
  - Has been received.
  - Requires action.
  - Has had a status change.
  - Has had a decision made on it.
  - Is about to expire if it is in-progress.
2. See when prescriptions I have:
  - Are about to expire.
  - Have been refilled.
  - Have been shipped.
3. See when I have new secure messages.
4. See when I have a new payment or bill.
5. See when I have an upcoming appointment scheduled.
6. (See when I have updated personal or security information?)
7. See when a document is added to my eFolder. (eFolder is a future feature as of 5/2018)


### Business Goals

As the Vets.gov team/the VA, we want to:

1. Create meaningful in-app notifications.
2. Effectively elevate these notifications in someone's Vets.gov account.
2. Aggregate updates so users don't have a disjointed experience.
3. Have a place to link people when they receive an email notification.
4. Provide a modern, 21st century experience.

## Assumptions

We are assuming and should confirm the following:

1. Users want to see actions they have taken.
2. Users want to see actions the VA has taken.
3. Users weigh actions they have taken equally to those the VA has taken.
4. Email notifications need to link back to a notification center in Vets.gov.
5. Users want to be able to track historical actions/notifications.

## Questions We Have

* Do people want to see a list of all of their actions in one place, specifically everything they have applied for?
* What notifications might users want that we have not initially considered?
* Do all notifications need an email AND an in-app component?
* Where will users manage notification preferences?
* What kind of notification history do users want to be able to see/track?
* Is the notification center a separate experience from the dashboard? How do the two integrate?
* Are there stakeholders outside of the Vets.gov team?
* Are people mainly going to login in at the prompt of an email notification, or do they login in spontaneously as well?
* If people happen to login and see an important notification they did not get an email about (because email notifications aren't available yet for that feature), will people get mad?
* Will different notifications look different depending on the notification type (eg. claim update vs. new message)?

## Stakeholders

* **Rita Grewal** (rita.grewal@va.gov) — Vets.gov privacy officer. Only needs to be involved in approving any email copy. Is not needed for copy approval for anything that is behind a login on Vets.gov.
* **Internal Vets.gov product leads** — Any product lead for a form or flow that would trigger a notification is a stakeholder of sorts.
* **Claims Stakeholders**:
  * Paul Shute (Compensation) – Based in DC
  * Brad Houston (director of OBPI) – Based in TX
  * Richard Mounce (Senior Analyst for OBPI) – Based in DC
  * Chelsea C (helpful in trying to identify additional support and reviews that might need to happen; background in rating claims) – Based in DC

## Discovery Takeaways

### [Comparative Analysis](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Notifications/Notification%20Center/Discovery)

### [List of VA Notifications](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notifications/Full%20list%20of%20potential%20and%20existing%20notifications.xlsx)

## Requirements and Constraints

## Solution Approach

MVP Goals

## Value Propositions

#### User Value

#### Business Value

## KPIs

---

# Implementation Info

## Status

## Solution Narrative
- **Date**: summary of any big changes and why
- **Date**: summary of any big changes and why

## Team

- VA Executive Sponsor `*`: 
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`:
- Design Lead:
- Eng Lead:
- VA Web Comms Partner: 
- VA Call Center Partner(s): 
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):
- Front-end Engineer(s):
- Back-end Engineer(s):

`*` = approval required for launch

## Resources and Documentation

- Discovery and Research
  - Previous research:
    * [Notification email research](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Personalization/Notifications/HCA%20MVP/Research/March2018_Notes)
    * [Personalization background research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Discovery/Internal%20Research/Synthesis.md)
    * [Frog Research Readout](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/486afc3df27688007d8f30bfcb0183e012346d45/Products/Disability/Disability%20526EZ/discovery/2016-discovery/design/frog_deliverables/D5_frog_VCRD_ResearchReadout_final.pdf)
  - [Comparative analysis](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notification%20Center/Discovery/Notification%20center%20comparative%20analysis.docx)
  - [List of potential notifications](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Notification%20Center/Notifications%20–%20Full%20list%20of%20potential%20notifications.xlsx)
- Technical Documentation
  - [Technical discovery thread](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/10204)
- Product specs
- Design
- Roadmap
- ATO documentation

### How to access in staging
- Link:
- Password protection info:
- User authentication info:

### Screenshots
#### Before
#### After
