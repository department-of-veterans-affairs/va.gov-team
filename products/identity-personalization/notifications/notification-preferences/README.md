# Notification preferences: Product outline

Last Updated April 27, 2022

### Communications

- GitHub Label: va-profile; profile
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp)
 
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
- [User Outcomes]()
- [Business Outcomes]()
- [Measuring Success](#measuring-success)
- [Implementation Info](#implementation-info)
- [MVP Approach](#mvp-approach)
- [Status](#status)
- [Product Decisions](#product-decisions)
- [How to access and test](#how-to-access-and-test)
- [Backend](#backend)
- [Screenshots](#screenshots)


## Overview

The VA is ramping up their digital communications efforts, specifically through email and text. As a result, veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA.gov profile supports notification preferences, which are powered by the [VA Profile backend](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html). This section is also managed in close partnership with [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html), which manages all notifications.

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

We are not currently measuring any OKRs or KPIs for notification preferences.

For previous OKRs/KPIs:

- [Notification preferences MVP project outline]()

# Implementation Info

## MVP approach

Please see the [communications preferences MVP doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/product/communications-permissions-mvp-definition.md) for detailed documentation on the MVP requirements.

## Status

- **November 2020**: Initial meeting with VA Profile.
- **December 2020**: Clarifying technical details and timelines with VA Profile.
- **January 2021**: Backend integration begins; full definition of MVP outlined.
- **February 2021**: Backend integration continues as we wait for API access from Terry; Team meets with Terry to discuss governance and group filtering.
- **March 2021**: Design begins
- **April 2021**: Initial design wrapped; worked with VANotify and VEText to understand MVP notification preference needs
- **June 2021**: Desktop usability study complete ([research artifacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/discovery-and-research))
- **July 2021**: Development, design iterations
- **August 2021**: Development, design iterations, testing with partners
- **September 2021**: Development, Testing with partners, 
- **October 2021**: UAT planning and execution
- **November 2021**: Began phased launch (25%, 50%, 100%) Nov 3

## Product Decisions

- [UX specific decision doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/design/notifications-ux-decisions.md)

## How to Access and Test
- [Staging](https://staging.va.gov/profile/notifications)
- Testing documentation
     - [Notification settings test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences.md)
     - [Notification settings a11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences-a11y.md)

- [Production](https://va.gov/profile/notifications)

## Backend

Notification settings (communication permissions) come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).

### Error Handling
- [Error states](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/frontend#states)

## Screenshots

### Before
This is a new feature, no **before** state.

### After
<img width="628" alt="Screen Shot 2021-10-20 at 4 42 52 PM" src="https://user-images.githubusercontent.com/45603961/140571171-100fa36f-119e-4e53-83ee-116540ec3b08.png">

