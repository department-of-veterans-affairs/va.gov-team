# Notification settings use cases
**Last updated: June 2025**

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
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section. [See LOA1 account documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- This page allows users to opt in and out of text and email notifications on the VA.gov Profile.
   - The page is supported by VA Profile, VEText, and VA Notifiy. If you need to set up new integrations please speak to the respective teams. These use cases are ONLY for the VA.gov Profile experience.
- Text notifications require a US based phone number to send.
- [Link to current notification settings options.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences#currently-we-support-the-following-notifications)
 
## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account

<details><summary>User doesn't have email or US based mobile phone number on file</summary>

- **Use case:** If a user does not have an email or a US based mobile phone number on file they see a warning alert prompting them to add contact information. The link directs the user to the edit-as-a-subtask pattern.
- **Status code:** TBD
- **Content:**

Header: We don’t have your contact information

To get started managing your notification settings, add an email address or US based mobile phone number to your profile.

Link: Add an email address to your profile ›

Link: Add a US based mobile number to your profile ›

- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20776&t=9qMroEtWj0VhgZue-1)
- [Link to code]

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


<details><summary>User edits a notification setting</summary>

- **Use case:** The form is an auto-save form, so it doesn’t have an update or cancel button. An alert appears under the section header in cases of success or errors, depending on the outcome of the data. A loading indicator displays while the setting is updated.
- **Status code:** TBD
- **Format:** [Slim alert component](https://design.va.gov/components/alert/#examples---slim-alert)
- Links to designs
   - [Save success](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2526-20116&t=4wWGU4X6ceXpQzN5-1)
   - [Save error](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2526-21899&t=4wWGU4X6ceXpQzN5-1)
- [Link to code]
- **Content:** See designs

</details>


<details><summary>Edit-as-a-subtask flow</summary>

- **Use case:** If a user edits their email or mobile phone number from the Notification settings page, they will launch the edit-as-a-subtask flow. The flow is a single question flow that updates their contact information then directs the user back to the page. [Link to product documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask)
- **Status code:** TBD
- **Format:** See designs
- [Links to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20829&t=4wWGU4X6ceXpQzN5-1)
- [Link to code]
- **Content:** See designs

</details>


## Edge cases
### Validation
This feature has no validation use cases.

### Flags 
There are no flags with this feature.

### Errors

<details><summary>Backend system down</summary>

- **Use case:** Cannot connect to the back end.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?m=auto&node-id=2553-20750&t=4wWGU4X6ceXpQzN5-1)
- [Link to code]
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.	

</details>

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
