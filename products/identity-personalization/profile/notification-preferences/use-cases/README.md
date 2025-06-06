# Notification settings use cases
**Last updated: June 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1747940089539/8f90eabb12750f7e358696b92a906f38ae130113?wid=0-1743526306164&outline=open)
- [Figma files](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=251-8520&t=FblEkQJLTxHQCY0H-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [See user list in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/default-send/qa-default-send.md)
- [User has no contact info on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-missing-contact-info.md#how-to-reproduce)
- 

</details>


## Current experience
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section. [See LOA1 account documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- This page allows users to opt in and out of text and email notifications on the VA.gov Profile.
   - Text notifications are managed through VeText.
   - Email notifications are managed through VA Notify.
   - If you have questions about how the integrations work or need to set up new integrations please speak to the respective teams. These use cases are ONLY for the VA.gov Profile experience
- As of June 2025, the notification settings page has notifications for the following topics:
   - Available by email and text
      - Health care appointments: Shows if user has health care
      - Prescription shipping notifications: Shows if the user has prescriptions on file
   - Available by email only
      - New benefit overpayment debt notification: Shows if user has debts
   - Available by text only
      - Appeal status updates: Shows for all users
      - Appeal hearing reminders: Shows for all users
      - Disability and pension deposit notifications: Shows if user has compensation or pension payments
 
## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account

<details><summary>User doesn't have email or US based mobile phone number on file</summary>

- **Use case:** If a user does not have an email or a US based mobile phone number on file they see a warning alert prompting them to add contact information. [The link directs the user to the edit-as-a-subtask pattern.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask)
- **Status code:** TBD
- **Content:**

Current
Header: We don’t have your contact information
To get started managing your notification settings, add an email address or phone number to your profile.
Link: Add an email address to your profile ›
Link: Add a mobile number to your profile ›

International phone number
Header: We don’t have your contact information
To get started managing your notification settings, add an email address or US based mobile phone number to your profile.
Link: Add an email address to your profile ›
Link: Add a US based mobile number to your profile ›

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20776&t=9qMroEtWj0VhgZue-1)
- [Link to code]

</details>

- [User needs to update setting for one or more notifications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/use-cases/update-settings.md)

- [User has partial contact info (email OR phone number)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-partial-contact-info.md)
	- This is only valid once we have multiple notification channels (e.g. text and email)
- ADD edit as a subtask flow to page
- ADD international phone number on file to use cases

## Edge cases
### Flags 
There are no flags associated with this feature.

### Validation
This feature has no validation use cases.

### System
- [Something has gone wrong and VA.gov can’t display any notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/use-cases/use-cases/system-cant-display-notification-settings.md)

## Flow diagrams
- [High-level user flow](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=1%3A12888&mode=design&t=beICgF9Ke3eKxb6t-1)

## Feature Flags 
- [documented in the FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/feature-flags.md)

---

<details><summary>Archive | Notification settings Use Cases, 2024</summary>
	
# Notification settings Use Cases
**Last updated: (feature flag link)**
For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Users
[see user list in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/default-send/qa-default-send.md)

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
#### User has contact info on file for existing notification channels
- [User needs to update setting for one or more notifications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/use-cases/update-settings.md)

#### User has partial or missing contact information
- [User has partial contact info (email OR phone number)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-partial-contact-info.md)
	- This is only valid once we have multiple notification channels (e.g. text and email)
- [User doesn’t have contact info on file for any existing notification channels](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/use-cases/user-missing-contact-info.md)

## Edge cases
### Flags 
There are no flags associated with this feature.

### Validation
This feature has no validation use cases.

### System
- [Something has gone wrong and VA.gov can’t display any notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/use-cases/use-cases/system-cant-display-notification-settings.md)

## Flow diagrams
- [High-level user flow](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=1%3A12888&mode=design&t=beICgF9Ke3eKxb6t-1)

## Feature Flags 
- [documented in the FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/feature-flags.md)

</details>
