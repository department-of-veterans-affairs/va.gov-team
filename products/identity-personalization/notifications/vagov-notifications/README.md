# Product: Alerts & notifications on VA.gov ("On-site Notifications")

Last updated July 14, 2022

### Communications

- **GitHub Label**: vsa-authenticated-exp; notifications
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Anastasia Jakabcin (AJ) |Product Manager| ana@adhocteam.us |
|Erica Sauve | Associate Product Manager | erica.sauve@adhocteam.us|
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Angela Agosto | Designer| angela.agosto@adhocteam.us|
|Taylor Mitchell| FE Engineer| tmitchell@governmentcio.com |
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

### How it works

We receive on-site notification from [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/partner-services-upstream-services). For the MVP, the system works as follows:

- The debt management center backend (DMC) will add debts for a given set of users. Those debts will show up in the debt tool in VA.gov.
- Once a day, the DMC backend will send a batch request to VANotify to send out notifications to folks alerting them that they have a new debt.
- VANotify will then send out notifications:
  - An email notification (this existed prior to the on-site notification MVP and was an entirely separate effort).
  - A notification that shows on someone's My VA personalized dashboard if they are logged in and identity-verified (LOA3) on VA.gov.
  - Users receive notifications based on their preferences. Email notifications can be turned off; on-site notifications can not. 
- If VANotify determines it should send the "you have a new debt" notification to VA.gov, it will send a `user id` and `template id` to VA.gov. This is what tells us to show the "you have a new debt" notification and to whom.

[Additional technical documentation from VANotify on how the on-site notification functionality works on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/onsite-notifications/README.md#workflow-overview)

### How to test

Currently, there is only one notification to test (2022). In the future, there may be multiple notifications that need to be tested in different ways. 

- For information on how to test the on-site notification MVP ("you have a new debt"), [please refer to the project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/vagov-notifications/mvp/README.md#how-to-test).

## Frontend

- The frontend connects to VANotify via an API we set up.
- Currently, the frontend code stores the content for on-site notifications. This may be stored by VANotify some time in the future, but not for the MVP.
- If VANotify determines it should send the "you have a new debt" notification to VA.gov, it will send a `user id` and `template id` to VA.gov. This is what tells us to show the "you have a new debt" notification and to whom.

## Design

- Add Sketch files
- Add use cases

### Before

*My VA 2.0*

![My VA 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

### After
