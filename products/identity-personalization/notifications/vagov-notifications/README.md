# Product: Alerts & notifications on VA.gov ("On-site Notifications")

Last updated May 3, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: vsa-authd-exp

### Roles

[Please see the My VA product outline for the current team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#roles).

Additionally, we work with the VANotify team to support on-site notifications.

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
- [Projects](#projects)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

## Overview

VA.gov is in the process of implementing a comprehensive communication strategy to support email, text, and in-app (ie. on VA.gov) notifications. Currently, the VANotify team  builds and manages email notification support for VA.gov, and they are working in tandem with VEText to integrate support for text messages into their platform. The authenticated experience team aims to cover information around the third and final pillar -- notifications that show to logged-in users on VA.gov.

## Problem Statement

- As a customer of the VA, I need to know if there are tasks I need to complete so that I can receive or manage my benefits.

## User outcomes

### Desired User Outcomes

- VA.gov users will be able to find and complete necessary tasks more quickly.
- As a result, VA.gov users may receive benefits or other outcomes more quickly.
- VA.gov users may also more easily avoid unideal outcomes if we can get information in front of them more quickly (eg. updating the number of dependents they have so their compensation payments are correct).

### Undesired User Outcomes

- Confusion or lack of syncing between on-site notifications/action items and email, text, or mail communications (data integrity). We can avoid this by building on the VANotify platform to ensure a synchronous experience between email, text, and notifications on VA.gov.
- An overwhelming amount of notifications makes it so that this update feels more like noise than a helpful tool.

## Business outcomes

### Desired Business Outcomes

- To create a unified experience through the VANotify platform. 
- Once the notification infrastructure is in place, it will be easy for VA business lines to get necessary action items in front of users with little lift.
- We'll be able to build more nuanced logic to get messages in front of certain audiences (eg. show a notification to all people who have a BVS hearing within the next 30 days). 
- We'll be able to show notifications on more than one page, or in a central location (eg. a notification center) that is accessible from all pages.

### Undesired Business Outcomes

- This tool becomes a bandaid for bad information architecture and navigation.
- This tool is over-utilized and results in more noise than guidance.

## Measuring success

- Initial metrics will be tracked as part of the [on-site notifications MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications/mvp#measuring-success).

## Projects

- [On-site notifications MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications/mvp)

## Backend

We receive on-site notification from [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html). The system works as follows:

- A backend system (eg. debt management) talks to VANotify and tells it to send out a notification.
- VANotify then determines via what channels to send the notification (eg. email, text, VA.gov).
- If VANotify determines it should send a notification to VA.gov (ie. on-site notifications), it will send a `user id` and `template id` to VA.gov. This will tell us what notification to show and to whom.

## Frontend

The frontend connects to VANotify via an API we set up.

## Design

### Before

*My VA 2.0*

![My VA 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After
