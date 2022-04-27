# Notification settings: Product outline

Last Updated April 27, 2022

### Communications

- GitHub Label: va-profile; profile; notification-settings
- Slack channel: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp) 
 
 ### Roles

[Please refere to the profile product outline for the current VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile#roles).

Additionally, we work in partnership with VANotify and VA Profile on this work. Additional partners include:

|Name|Role|Email|
|----|----|-----|
|Beverly Nelson| OCTO lead for VANotify| beverly.nelson@va.gov |
|Melanie Jones | VANotify PM | melanie.jones@oddball.io |
|Mike Richard | VA Profile PM | Michael.Richard2@va.gov |

### Table of Contents
- [Overview](#overview)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Projects](#projects)
- [How to access and test](#how-to-access-and-test)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#Design)


## Overview

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA.gov profile supports notification settings, which are powered by the [VA Profile backend](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html). This section is also managed in close partnership with [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html), which manages all notifications.

## User Outcomes

### Desired user outcomes

- As a veteran, I want to be able to see what types of communications I am eligible to receive.
- As a veteran, I want to be able to select where and how I receive those communication (eg. receive emails for claim updates; receive texts for appointment reminders).
- As a veteran, I only want to have to keep this information updated in one place.

### Undesired user outcomes

## Business Outcomes

### Desired business outcomes

- Allow veterans to set and manage communication preferences from their VA.gov profile.
- Allow any updates veterans make to their permissions to be saved/accessed across the VA (through VA Profile backend).
- Set up an infrastructure for this functionality that is sustainable and allows us to scale easily over time.

### Undesired business outcomes


## Measuring success

We are not currently measuring any OKRs or KPIs for notification settings.

For previous OKRs/KPIs:

- [Notification settings MVP project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/mvp-project-outline.md#measuring-success)

## Projects

|Projects|Launch date|
|--------|-----------|
|[Notification settings MVP project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/mvp-project-outline.md#measuring-success)| Nov 2021|

## How to Access and Test
- [Staging](https://staging.va.gov/profile/notifications)
- Testing documentation
     - [Notification settings test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences.md)
     - [Notification settings a11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences-a11y.md)
- [Production](https://va.gov/profile/notifications)

## Backend

Notification settings come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html). This section is also managed in close partnership with [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html), which manages all notifications.

### Error Handling
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/frontend#states)

## Frontend

- [Frontend documentation on how the notification settings UI works](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/frontend/display-notes.md)

## Design

### Latest mockups

- [Notification settings sketch files](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c)

### Before
This is a new feature, no **before** state.

### MVP launch: November 2021
<img width="628" alt="Screen Shot 2021-10-20 at 4 42 52 PM" src="https://user-images.githubusercontent.com/45603961/140571171-100fa36f-119e-4e53-83ee-116540ec3b08.png">

