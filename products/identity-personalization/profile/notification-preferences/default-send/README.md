# Project outline: Notifications Settings - Default Send Functionality

**Last Updated:** 12/5/23, launch dates and launch stats

### Communications

- **Github labels**: `authenticated-exp`; `notification-settings`; `profile`
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Stakeholders & Partners

|Name|Role|Email|
|----|----|-----|
|Beverly Nelson| OCTO lead for VANotify| beverly.nelson@va.gov |
|Melanie Jones | VANotify PM | melanie.jones@oddball.io |

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

## Overview

We need to be able to support email as a channel in order to support MHV notification preferences, and notification preferences from other partners that may require email. 

In order to be able to add email as a channel, we need to do two things: add the default-send indicator, and update the UI to move from a radio button to checkbox design. We'll likely complete the default send work in Q2 of the calendar year, and start the UI updates in Q2 but launch them in Q3 of the calendar year.

Behind the scenes, Samara has been coordinating backend implementation of the MHV notification preferences in VA Profile. Once those have been implemented in VA Profile and MHV, our team should be in good shape to add them to our UI.

### Problems we'll tackle

In order to be able to add email as a channel, we need to do two things: add the default-send indicator, and update the UI to move from a radio button to checkbox design.

## Problem Statement

- As a customer of the VA, I need to be able to opt in or out of email communications so that I can customize through which channels I prefer to be contacted. 

## User outcomes

### Desired User Outcomes

- As a veteran, I want to be able to see what type of communications I am eligible to receive (e.g. email).
- As a veteran, I want to be able to select where and how I receive those communication (e.g. receive emails for claim updates).
- As a veteran, I only want to have to keep this information updated in one place.

## Business outcomes

### Desired Business Outcomes

- Allow veterans to set and manage email communication preferences from their VA.gov profile.
- Allow any updates veterans make to their permissions to be saved/accessed across the VA (through VA Profile backend).
- Set up an infrastructure for this functionality that is sustainable and allows us to scale easily over time.

## Measuring success

### Objective #1: Maintain overall performance of the notification preferences page

**When filling in data -- update dates to be 1 month pre-launch, one month post launch (to 100%), and the second month post-launch (to 100%) based on actual launch dates.**

**KPI: See no reduction in the percentage of successful retrievals and saves for notification preferences.**

- [Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986)
- [Metrics workbook](https://docs.google.com/spreadsheets/d/1ts0vX2Nzu3UQp1q1nNz20ZKS_iPUkXmDRi-nPSQrT_s/edit?usp=sharing)
- [Original GA Dashboard from notification settings launch](https://analytics.google.com/analytics/web/#/dashboard/LcYXUwF2Q8SQ59WQX6OTsw/a50123418w177519031p184624291/)
- ["Adam's GA Sandbox" with some notification setting info](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/_u.date00=20230926&_u.date01=20231024)

|KPI/metric|Baseline: 1 month pre-launch 9/26-10/24/2023| 25% 10/25-10/30/2023 | 50% 10/31-11/6/2023 | 100% 11/7-11/13/2023 |1 month post-launch to 100% 11/7-12/5/2023| 2 months post-launch to 100% 11/7/2023-1/2/2024|
|----------|:-:|:-:|:-:|:-:|:-:|:-:|
|Percentage of successful retrievals|99.66%|99.43%|99.67%|99.75%|99.73%|99.72%|
|Percentage of successful saves|99.95%|99.93%|100%|100%|99.79%|99.83%|


## Solution approach

**Discovery - July 2022**
- VA Profile added a data point to their API that tells us whether or not a notification is sent by default when a Veteran signs up for a service. Liz conducted a research discovery to understand the implications of this on the UI of our notification settings feature in the VA.gov profile.
- Discovery Research: [findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/default-send/july-2022-notes.md)

**Usability Research - February 2023**

- Liz conducted usability sessions with Veterans to achieve two goals: 1) Learn how our single page, auto-save works for users when all known notifications are represented, and 2) Learn what information needs to be surfaced to make the current settings and options clear to people.
- Usability Research: [findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/findings-summary.md)

**Design high-fidelity mock-ups - February/March 2023**
- Liz's designs need to go through a "Design Intent Review since usability testing on these designs were completed previously: [Design Files](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/README.md#design)

**Frontend Development - Februrary/March/April 2023**
- Add feature flag for new mobile editing page
- Add feature flat for MHV notification preferences
- Build editing page for VA.gov profile
- Update notification preferences so that feature flag can filter by channel (email/text)
- Update notificatio preferences so that it filters out the new QuickSubmit group
- Build editing page for Va.gov profile (part 2)
- Build the new page for the mobile number

## Key Deliverables
|Deliverable|notes|
|-----------|--------------|
|[Email as a channel epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61101)| |
|[Analytics Dashboard](https://analytics.google.com/analytics/web/?authuser=3#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/)|see the Notification Checkbox section|
|[QA Testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/default-send/QA)| |
| [UAT Go/no-go](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62915) | |
|[UAT Synthesis](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-UAT-edit-as-subtask-default-send-checkbox-ui/findings-summary.md)||
|[Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/releasePlan/defaultSendReleasePlan.md)||

## Key Dates

- January 2023: Start discovery on proposed updates
- February 2023: Complete discovery; Scope work over the next few months.
- Spring 2023: Begin/complete build
- August 2023: QA
- October 2023: Staging Review
- October 2023: UAT
- October 25, 2023: Initial Launch to 25%
- October 31, 2023: Launch to 50%
- November 7, 2023: Launch to 100%

## Backend

### Services

- Notification settings come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations).
- This section is also managed in close partnership with [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html), which manages all notifications.

Additional details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/backend_documentation.md)

## Frontend

- Frontend documentation on how the notification settings UI works: [API to Display notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/display-notes.md)

## Design

- Sketch files: [desktop](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c_), [mobile](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/p/B5792AF8-87F2-496D-AE7A-DAD1448A6018/canvas)

## Research

- Completed research from usability testing on the designs: [findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/findings-summary.md)
- Discussed how our design changes could support VA Notify's requirements for capturing optins and optouts now that we have default send available in July 2022: [meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/default-send/july-2022-notes.md)
