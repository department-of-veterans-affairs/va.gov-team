# Email and text notifications use cases

Last updated: January 2026  
* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1747940089539/8f90eabb12750f7e358696b92a906f38ae130113?sender=u36b374887f74c9a3de2d0750)  
* [Figma files](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5287-31767&t=Y7ciBgHhovEVpZWc-1)  
* Product documentation  
  * [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences)  
  * [API to Display notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/display-notes.md)
  * [UX governance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/profile-architecture-design-content-standards.md#email-and-text-notifications)

<details><summary>Archive | How to reproduce in staging</summary>

* [See user list in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/default-send/qa-default-send.md)  
* [User has no contact info on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-missing-contact-info.md#how-to-reproduce)  
* [User has incomplete contact information on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-partial-contact-info.md#how-to-reproduce)  
* [User wants to update notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/update-settings.md#how-to-reproduce)  
* [Feature flags, documented in the FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/feature-flags.md)  
* [VA.gov can’t display any notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/system-cant-display-notification-settings.md#how-to-reproduce)

</details>

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [User doesn't have an email or US based mobile phone on file](#user-doesn't-have-an-email-or-us-based-mobile-phone-on-file)

- [User has incomplete contact information on file](#user-has-incomplete-contact-information-on-file)

- [User has an email and US based mobile phone on file](#user-has-an-email-and-us-based-mobile-phone-on-file)

- [Shared profile editing interactions](#shared-profile-editing-interactions)

[Edge cases](#edge-cases)

[Flags](#flags)

- [Email and text notifications show/hide flags](#email-and-text-notifications-show/hide-flags)

- [Profile shared flags](#profile-shared-flags)

[Errors](#errors)

- [Profile shared errors](#profile-shared-errors)

# Overview

**The Email and text notifications page allows teams to add a way for users to opt in or out of emails from VA Notify and texts from VEText.** The page has an underlying technology structure that allows new sections to be added through the VA Profile API.

**No other methods of notifications are supported on this page at this time.** If you have a notification setting that does not fit within this structure please reach out to the team to discuss.

For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.

# Use cases

## User doesn't have an email or US based mobile phone on file

* **Description:** When a user does not have a **contact email** or a US based **mobile phone number** on file they see an alert prompting them to add contact information. The link directs the user to the edit-as-a-subtask pattern.  
* **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)  
* [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5289-12350&t=Y7ciBgHhovEVpZWc-1)

## User has incomplete contact information on file

* **Description:** If a user has a missing **contact email** or US based **mobile phone number**, we show:  
  * The information on file with a link to update, which prompts the edit-as-a-subtask flow.  
  * A link prompting the user to add the missing information, which prompts the edit-as-a-subtask flow.  
  * Notifications related to the missing information are hidden, and instead, the user sees an [expandable alert](https://design.va.gov/components/alert/alert-expandable/#default-informational) explaining which notifications are not visible. The alert is dynamic and populates based on what the user is qualified for.  
* **Format:** See designs  
* Links to designs  
  * [No email on file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5289-8071&t=Y7ciBgHhovEVpZWc-1)  
  * [No mobile phone number on file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5289-8018&t=Y7ciBgHhovEVpZWc-1)  
  * [No US based mobile phone number on file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5294-15539&t=Y7ciBgHhovEVpZWc-1)

## User has an email and US based mobile phone on file

* **Description:** When a user has both a **contact email** and US based **mobile phone number** on file, we show:  
  * The information on file with a link to edit, which prompts the edit-as-a-subtask flow.  
  * All available email and text notifications. Users can select or unselect a checkbox for each option.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5289-11704&t=Y7ciBgHhovEVpZWc-1)

## Shared profile editing interactions

There are several shared editing interactions that are used in profile. The linked documentation includes the following:

* Save in progress  
* Saving information: Success  
* Saving information: Error  
* Edit-as-a-subtask flow

[Profile shared editing information use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-interactions)

# Edge cases

## Flags

### Email and text notifications show/hide flags

#### User does not have health care

* **Description:** The Health care section only shows if the user has any facilities associated with their account. i.e. the user has to have health care for the section to display.  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5300-8490&t=Y7ciBgHhovEVpZWc-1)

#### User has health care, but not a supported facility for Prescription shipping updates

* **Description:** **Prescription shipping updates** only shows for select facility IDs. Since not all facilities send shipment notifications.  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Email-and-text-notifications?m=auto&node-id=5300-9237&t=Y7ciBgHhovEVpZWc-1)

### Profile shared flags

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## Errors

### Profile shared errors

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)



---



<details><summary>Archive | Notification settings use cases, July 2025</summary>
	
# Notification settings use cases
**Last updated: July 2025** Added shared profile use cases.

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1747940089539/8f90eabb12750f7e358696b92a906f38ae130113?wid=0-1743526306164&outline=open)
- [Figma files](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=251-8520&t=FblEkQJLTxHQCY0H-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [See user list in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/notification_settings/default-send/qa-default-send.md)
- [User has no contact info on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-missing-contact-info.md#how-to-reproduce)
- [User has incomplete contact information on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-partial-contact-info.md#how-to-reproduce)
- [User wants to update notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/update-settings.md#how-to-reproduce)
- [Feature flags, documented in the FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/frontend/feature-flags.md)
- [VA.gov can’t display any notification settings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/system-cant-display-notification-settings.md#how-to-reproduce)

</details>


## Current experience
- This page allows users to opt in and out of text and email notifications on the VA.gov Profile.
   - The page is supported by VA Profile, VEText, and VA Notifiy. If you need to set up new integrations please speak to the respective teams. These use cases are ONLY for the VA.gov Profile experience.
- Text notifications require a US based phone number to send.
- [Link to current notification settings options.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences#currently-we-support-the-following-notifications)
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.

 
## Common use cases
### User logs in with LOA3 account

<details><summary>User doesn't have email or US based mobile phone number on file</summary>

- **Use case:** If a user does not have an email or a US based mobile phone number on file they see a warning alert prompting them to add contact information. The link directs the user to the edit-as-a-subtask pattern.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20776&t=9qMroEtWj0VhgZue-1)
- [Link to code]
- **Content:**

Header: We don’t have your contact information

To get started managing your notification settings, add an email address or US based mobile phone number to your profile.

Link: Add an email address to your profile ›

Link: Add a US based mobile number to your profile ›

</details>


<details><summary>User has incomplete contact information on file</summary>

- **Use case:** If a user has a missing email or mobile phone number, we show:
   - The information on file with a link to edit, which prompts the edit-as-a-subtask flow.
   - A link prompting the user to add the missing information, which prompts the edit-as-a-subtask flow.
   - Notifications related to the missing information are hidden, and instead, the user sees an [expandable alert](https://design.va.gov/components/alert/alert-expandable/#default-informational) explaining which notifications are not visible.
- **Status code:** TBD
- **Format:** See designs
- Links to designs
   - [No email on file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20789&t=jPNC2z23oWW0ILj9-1)
   - [No mobile phone number on file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20816&t=jPNC2z23oWW0ILj9-1)
   - [No US based mobile phone number on file](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=4442-14814&t=PzTdwd7r6Zf79Ebr-1)
- [Link to code]
- **Content:** See designs

</details>


<details><summary>User has an email and US based mobile phone number on file</summary>

- **Use case:** If a user has both an email and US based mobile phone number on file, we show:
   - The information on file with a link to edit, which prompts the edit-as-a-subtask flow.
   - All available email and text notifications. What notifications show/hide change based on the users benefits. Users can select or unselect a checkbox for each option.
- **Status code:** TBD
- **Format:** See designs
- [Links to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20854&t=4wWGU4X6ceXpQzN5-1)
- [Link to code]
- **Content:** See designs

</details>

[Profile shared editing information use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)

[Edit as a sub-task shared use case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)


## Edge cases
### Validation
This feature has no validation use cases.


### Flags 
[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors

[System error: Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

</details>

















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
