### Product outline: Notification settings

Last Updated: 11/10/2025 — Updated with current show/hide logic, feature toggles, and environment behavior. Also clarifies contact info gating and permanently hidden items/groups.

### Table of Contents
- [POCs](#pocs)
- [Overview](#overview)
- [What to Know](#what-to-know)
- [Currently supported notifications](#currently-supported-notifications)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Projects](#projects)
- [How to Access and Test](#how-to-access-and-test)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)



### POCs

- Slack channel: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp) [#va-profile](https://dsva.slack.com/channels/va-profile) [#va-notify-public](https://dsva.slack.com/archives/C010R6AUPHT)


#### Roles

Please refer to the profile product outline for the current VA.gov profile team: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles.

We partner with `VANotify` and `VA Profile` on this work:
- VANotify: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify
- VA Profile external integrations: https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations


### Overview

The VA is ramping up digital communications (text and email). Veterans need to opt in/out of communications and choose preferred channels. The VA.gov Profile supports notification settings, powered by the `VA Profile` backend and implemented in close partnership with `VANotify` (which manages all notifications).

Key behavior that impacts what a user sees:
- The same code path is used in both production and staging. Differences between environments come from feature toggle values and from whether the user has the required contact info on file (email and/or a domestic mobile number).
- The Notification Settings page (`/profile/notifications`) fetches the user’s communication preferences from the VA Profile API. The UI renders settings only if the contact info gates are satisfied and there are no API errors.

More information on the VANotify platform: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify


### What to Know

This section of profile allows users to:

- Manage text notification preferences.  
- Add or update the mobile phone number where notifications will be sent.
- Manage email notification preferences.
- Add or update contact email where notifications will be sent.

Data from `VA Profile` API:

- Notification types or Groups (e.g., Healthcare, Board of Appeals) = `Communication Group` in VA Profile.
- Notification permissions (e.g., appointment reminder, claim update) = `Communication Item` in VA Profile.
- Channels (text/email) = `Channel` in VA Profile.
- Default send value (boolean) indicates whether a `Communication Item` sends by default prior to explicit opt-in.
- User settings values are `null | true | false`.

Show/hide logic that controls visibility in the UI:
- Feature toggles (LaunchDarkly via `/v0/feature_toggles`) determine whether some items are available to show.
- Contact info gating: an item only shows if the user has contact info for at least one of the item’s available channels.
  - Text requires a domestic mobile number on file (international numbers disable text channel).
  - Email requires an email address on file.
- Some groups and items are permanently filtered out on this page regardless of toggles.
- API errors or initialization needs will block the settings UI and show appropriate alerts.

Feature toggles that may affect notification visibility:
- `profileShowMhvNotificationSettingsEmailAppointmentReminders`
- `profileShowMhvNotificationSettingsEmailRxShipment`
- `profileShowMhvNotificationSettingsNewSecureMessaging`
- `profileShowMhvNotificationSettingsMedicalImages`
- `profileShowNewHealthCareCopayBillNotificationSetting`
- `profileShowQuickSubmitNotificationSetting` (note: the `QuickSubmit` group is always filtered out; see below)

Global email-present gate:
- The UI derives a `showEmail` flag as true if any of the above email-capable items are toggled on. If `showEmail` is true, the page proceeds when the user has either an email OR a domestic mobile. If `showEmail` is false, the page specifically requires a domestic mobile number to proceed.

Permanently filtered groups (never show on this page):
- `GENERAL` group
- `QUICK_SUBMIT` group
- `PAPERLESS_DELIVERY` group

Permanently blocked items:
- `RX_REFILL`
- `VA_APPOINTMENT_REMINDERS`
- `BIWEEKLY_MHV_NEWSLETTER` (no longer migrating to this page)
- `QUICK_SUBMIT`

International phone handling:
- If the user’s saved mobile is international (country not USA), the text channel is disabled. The page shows an informational expandable alert explaining that text notifications will not be sent to international numbers and offers a path to update the phone number.


### Currently supported notifications

Notes in this table reflect what the UI can show when gates are satisfied. Actual user visibility is subject to feature toggles and contact info on file.

<html>
<body>
<!--StartFragment--><google-sheets-html-origin>

Notification Group | Item | Description | Notes | Channel | In Production
-- | -- | -- | -- | :-: | :-:
Your health care | Appointment reminders |  | Email variant controlled by `profileShowMhvNotificationSettingsEmailAppointmentReminders` | Text | Yes
Your health care | Appointment reminders |  | Controlled by `profileShowMhvNotificationSettingsEmailAppointmentReminders` | Email | Yes
Your health care | Prescription shipment and tracking updates |  | Only with specific facilities; email variant controlled by `profileShowMhvNotificationSettingsEmailRxShipment` | Text | Yes
Your health care | Prescription shipment and tracking updates |  | Controlled by `profileShowMhvNotificationSettingsEmailRxShipment` | Email | Yes
Your health care | Medical images and reports |  | MHV migration item; controlled by `profileShowMhvNotificationSettingsMedicalImages` | Email | Yes
Board of Veterans' Appeals | Appeals hearing reminder |  |  | Text | Yes
Board of Veterans' Appeals | Appeals status updates |  |  | Text | Yes
Payments | Disability and Pension Deposit Notification |  | Requires VANotify support prior to enablement | Text | Yes
Payments | New benefit overpayment debt notification | See naming convention ticket |  | Email | Yes
Payments | New health care copay bill | See naming convention ticket | Controlled by `profileShowNewHealthCareCopayBillNotificationSetting` | Email | No
QuickSubmit | QuickSubmit | A notification and preference around a platform called "QuickSubmit" | This should NEVER display in the profile; group and item are filtered out regardless of toggles | Email | No

<!--EndFragment-->
</body>
</html>

Reference workbook: https://github.com/user-attachments/files/16515452/Copy.of.notification.preferences.workbook.002.xlsx


### User Outcomes

#### Desired user outcomes

- As a Veteran, I want to see which communications I am eligible to receive.
- As a Veteran, I want to select where and how I receive those communications (for example, emails for claim updates; texts for appointment reminders).
- As a Veteran, I want to keep my contact information updated in one place and have it used consistently across VA systems.


### Business Outcomes

#### Desired business outcomes

- Allow Veterans to set and manage communication preferences from their VA.gov profile.
- Ensure updates are saved/accessed across the VA via the `VA Profile` backend.
- Maintain a sustainable, scalable infrastructure for notification settings.


### Measuring Success

We are not currently maintaining OKRs/KPIs for notification settings on this page. We maintain a SharePoint document with notification metrics.

For previous OKRs/KPIs:
- Notification settings MVP project outline: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/product/mvp-project-outline.md#measuring-success


### Projects

For a list of current and past projects, see Profile outline: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#projects


### How to Access and Test

- Staging: https://staging.va.gov/profile/notifications
- Production: https://va.gov/profile/notifications

Testing documentation:
- Notification settings test/use cases & users (sensitive): https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences.md
- Notification settings a11y test cases (sensitive): https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-notification-preferences-a11y.md

How to compare prod vs staging:
1. In each environment, fetch `/v0/feature_toggles` and record values for:
   - `profileShowMhvNotificationSettingsEmailAppointmentReminders`
   - `profileShowMhvNotificationSettingsEmailRxShipment`
   - `profileShowMhvNotificationSettingsNewSecureMessaging`
   - `profileShowMhvNotificationSettingsMedicalImages`
   - `profileShowNewHealthCareCopayBillNotificationSetting`
   - `profileShowQuickSubmitNotificationSetting` (expect no UI effect)
2. Check the user’s contact info on file:
   - Email present?
   - Domestic mobile number present? If international, text is disabled.
3. Visit `/profile/notifications` and confirm resulting groups/items shown match the gating rules above.


### Backend

#### Services

- Notification settings come from `VA Profile`: https://depo-platform-documentation.scrollhelp.site/developer-docs/external-integrations
- Notifications are managed in partnership with `VANotify`: https://depo-platform-documentation.scrollhelp.site/developer-docs/VANotify.1885634900.html
- Backend documentation (sensitive): https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/backend_documentation.md

#### Error Handling

- If the `VA Profile` communication preferences API returns an error, the page shows an error alert instead of settings.
- Initialization: the UI is wrapped with a VA Profile service ID initializer. If the user must initialize a VA Profile ID, that flow is completed before rendering settings.
- Downtime: the page is wrapped in a downtime notification for the relevant VA Profile service. If downtime is reported, an appropriate message is shown.


### Frontend

- Frontend documentation on the notification settings UI: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/display-notes.md
- Frontend documentation (sensitive): https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/frontend_documentation.md
- Feature flag documentation: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/feature-flags.md

Implementation details and show/hide logic:
- Primary container: `NotificationSettings.jsx` renders the page, fetches preferences, and applies gating.
- Core logic helpers: `useNotificationSettingsUtils.js` determine visibility by:
  - Checking feature toggles listed above.
  - Filtering out permanently hidden groups/items.
  - Verifying channel-specific contact info availability.
- Constants file defines group IDs, item IDs, channel IDs, and `BLOCKED_MHV_NOTIFICATION_IDS` (which includes `RX_REFILL`, `VA_APPOINTMENT_REMINDERS`, `BIWEEKLY_MHV_NEWSLETTER`, `QUICK_SUBMIT`).
- Channels are keyed as `TEXT = '1'`, `EMAIL = '2'`.
- International mobile numbers disable the text channel and trigger an informational expandable alert.

Files of interest (reference):
- `components/notification-settings/NotificationSettings.jsx`
- `hooks/useNotificationSettingsUtils.js`
- `constants.js`
- `mocks/endpoints/feature-toggles/index.js`


### Design and UX

- Notification preferences (Figma): https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A1&mode=design&t=y8vih7OCF5PGBczD-1
- Use cases: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/README.md
