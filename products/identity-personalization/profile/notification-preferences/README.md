# Product outline: Notification settings

**Last Updated: 7/12/2024** removed references to the MHV newsletter as that is no longer migrating to the notification settings page

## Table of Contents
- [POCs](#pocs)
- [Overview](#overview)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Projects](#projects)
- [How to access and test](#how-to-access-and-test)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)



### POCs

- Slack channel: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp) [#va-profile](https://dsva.slack.com/channels/va-profile) [#va-notify-public](https://dsva.slack.com/archives/C010R6AUPHT)

 
 ### Roles

[Please refer to the profile product outline for the current VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

We partner with [VANotify ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify)and VA Profile on this work. 

## Overview

The VA is ramping up their digital communications efforts, specifically through text and email. As a result, veterans need to be able to opt in or out of communications and customize through which channels they prefer to be contacted. To meet these organizational and user needs, the VA.gov profile supports notification settings, which are powered by the [VA Profile backend](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations). This section is also managed in close partnership with [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html), which manages all notifications.

More information on the VANotify platform can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify).

### What to Know

This section of profile allows users to:

- Manage text notification preferences.  
- Add or update the mobile phone number where notifications will be sent.
- Manage email notification preferences
- Add or update Contact Email where notifications will be sent

The following data will come through VA Profile's API

- Notification types or Groups (Healthcare, Board of Appeals, etc)  = Communication Group in VA Profile
- Notification permissions (appointment reminder, claim update, etc) = Communication Item in VA Profile
- Channels (text/email), groups (e.g. health care) = Channel in VA Profile
- Default Send Value (T/F boolean if the Communication Item automatically sends without an initial Opt In by the User) 
- User settings (null, true, false)  

#### **Currently we support the following notifications:**

<html>
<body>
<!--StartFragment--><google-sheets-html-origin>

Notification Group | Item | Description | Notes | Channel | In Production
-- | -- | -- | -- | :-: | :-:
Your health care | Appointment reminders |   |   | Text | Yes
Your health care | Appointment reminders |   |   | Email | Yes
Your health care | Prescription shipment and tracking updates |   | This is available only with specific facilities | Text | Yes
Your health care | Prescription shipment and tracking updates |   | This is available only with specific facilities | Email | Yes
Your health care | Medical images and reports |   | MHV Migration Item | Email | Yes
Board of Veterans' Appeals | Appeals hearing reminder |   |   | Text | Yes
Board of Veterans' Appeals | Appeals status updates |   |   | Text | Yes
Payments | Disability and Pension Deposit Notification |   | Requires VA Notify Support prior to enablement | Text | Yes
Payments | New benefit overpayment debt notification | [Caia naming convention ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83243)   |  | Email | Yes
Payments | New health care copay bill | [Caia naming convention ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83243) | | Email | No
QuickSubmit | QuickSubmit | A notification and preference around a platform called "QuickSubmit" | This should NEVER display in the profile and is behind a gate | Email | No

<!--EndFragment-->
</body>
</html>

[notification.preferences.workbook.002.xlsx](https://github.com/user-attachments/files/16515452/Copy.of.notification.preferences.workbook.002.xlsx)


## User Outcomes

### Desired user outcomes

- As a veteran, I want to be able to see what types of communications I am eligible to receive.
- As a veteran, I want to be able to select where and how I receive those communication (eg. receive emails for claim updates; receive texts for appointment reminders).
- As a veteran, I only want to have to keep this information updated in one place.

## Business Outcomes

### Desired business outcomes

- Allow veterans to set and manage communication preferences from their VA.gov profile.
- Allow any updates veterans make to their permissions to be saved/accessed across the VA (through VA Profile backend).
- Set up an infrastructure for this functionality that is sustainable and allows us to scale easily over time.

## Measuring success

We are not currently maintaining OKRs or KPIs for notification settings in this page. We maintain a sharepoint document w/our notification metrics. 

For previous OKRs/KPIs:

- [Notification settings MVP project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/product/mvp-project-outline.md#measuring-success)

## Projects

[For a list of current and past projects, please refer to the Profile section outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#projects).


## How to Access and Test
- [Staging](https://staging.va.gov/profile/notifications)
- Testing documentation
     - [Notification settings test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences.md)
     - [Notification settings a11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences-a11y.md)
- [Production](https://va.gov/profile/notifications)

## Backend

### Services

- Notification settings come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations).
- This section is also managed in close partnership with [VANotify](https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html), which manages all notifications.
- [Backend Documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/backend_documentation.md)

### Error Handling

## Frontend

- [Frontend documentation on how the notification settings UI works](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/display-notes.md)
- [Frontend Documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/frontend_documentation.md)
- [Feature flag documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/feature-flags.md)

## Design and UX
- [Notification preferences](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A1&mode=design&t=y8vih7OCF5PGBczD-1)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/README.md)


