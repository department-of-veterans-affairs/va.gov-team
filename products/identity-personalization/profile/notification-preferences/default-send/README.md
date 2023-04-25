# Project outline: Notifications Settings - Default Send Functionality

**Updating in progress....: April 25, 2023**

### Communications

- **Github labels**: authenticated-exp; notification-settings
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

- Users can

### Undesired User Outcomes

- Users are

## Business outcomes

### Desired Business Outcomes

- VA.gov supports

### Undesired Business Outcomes

- (For VA.gov) We are

## Measuring success

OKRs and KPIs TBD.

- We are not currently measuring any OKRs or KPIs for notification settings. For previous OKRs/KPIs: [Notification settings MVP project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/product/mvp-project-outline.md#measuring-success)

## Solution approach

**Discovery - when?? 2022**
Liz

**Definition, scoping, and planning - when??? 2022**

- We

### Key dates

- February 2022: Begin MHV profile audit

## Backend

### Services

- Notification settings come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations).
- This section is also managed in close partnership with [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html), which manages all notifications.

Additional details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/backend_documentation.md)

## Frontend

- Frontend documentation on how the notificatio settings UI works: [API to Display notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/display-notes.md)

## Design

- Sketch files: [desktop](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c_), [mobile](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/p/B5792AF8-87F2-496D-AE7A-DAD1448A6018/canvas)

## Research

- Completed research from usability testing on the designs: [findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/usability-study-add-email-jan-2023/findings-summary.md)
- Discussed how our design changes could support VA Notify's requirements for capturing optins and optouts now that we have default send available in July 2022: [meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/default-send/july-2022-notes.md)





