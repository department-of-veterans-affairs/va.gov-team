# Default Send 

## Table of Contents

- [Overview](#overview)
- [Important Artifcats](#important-artifacts)
- [Migrating from Radio Button to Checkbox Component and Consuming Default Send](#migrating-from-radio-button-to-checkbox-component-and-consuming-default-send)
- [Phase I - UAT](#phase-i---uat)
- [Phase II - Staged Rollout](#phase-ii---staged-rollout)
- [Go Live](#go-live)
- [Enabling Email as a Channel Notifications](#enabling-email-as-a-channel-notifications)

## Overview 
The default send work is comprised of several different pieces of functionality. 

We have 4 toggles this release plan is focused on. Our main deployment will be concerned with the first two toggles which control the checkboxes and the editing-as-a-subtask feature. The other two will be discussed in the [Enabling Email as a Channel Notifications](#enabling-email-as-a-channel-notifications) section of this document. 

<details><summary>Toggle Details</summary>
<p>

- `profile_use_notification_settings_checkboxes`
  - toggles the usage of radio buttons vs checkboxes as the input type that is used for every notification. Also consumes default send indicator boolean when turned on.

- `profile_use_field_editing_page` 
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile AND the `profile_show_email_notification_settings` is turned ON

- `profile_show_email_notification_settings`
  - toggles display of ALL email based notification checkboxes

- `profile_show_mhv_notification_settings`
  - toggles display of ALL MHV notifications
  - the MHV notifications all happen to be email based, so this is similar to the above, but will allow any future email notifications to be toggled separately
  - RX refill shipment notification (needs combined with Prescription shipment and tracking updates via VA Profile)
  - VA Appointment Reminders (needs to be combined with Appointment Reminders via VA Profile)
  - Secure messaging alert
  - Medical images and reports available
  - Biweekly MHV newsletter (in turn the General VA Updates and Information group is hidden since this notification is the only one in the group) 

</p>
</details> 

## Important Artifacts 
|Artifact|Date Completed|
|---|:-:|
|Analytics Dashboard||
|QA Testing||
|UAT Testing| |
|UAT go/no-go conversation||
|Go Live go/no-go conversation||

## Migrating from Radio Button to Checkbox Component and Consuming Default Send

<details><summary>Toggle Details</summary>
<p>

- `profile_use_notification_settings_checkboxes`
  - toggles the usage of radio buttons vs checkboxes as the input type that is used for every notification. Also consumes default send indicator boolean when turned on.

- `profile_use_field_editing_page` 
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile AND the `profile_show_email_notification_settings` is turned ON

</p>
</details> 


## Phase I - UAT 

## Phase II - Staged Rollout 

## Go Live


## Enabling Email as a Channel Notifications



<details><summary>Toggle Details</summary>
<p>

- `profile_show_email_notification_settings`
  - toggles display of ALL email based notification checkboxes

- `profile_show_mhv_notification_settings`
  - toggles display of ALL MHV notifications
  - the MHV notifications all happen to be email based, so this is similar to the above, but will allow any future email notifications to be toggled separately
  - RX refill shipment notification (needs combined with Prescription shipment and tracking updates via VA Profile)
  - VA Appointment Reminders (needs to be combined with Appointment Reminders via VA Profile)
  - Secure messaging alert
  - Medical images and reports available
  - Biweekly MHV newsletter (in turn the General VA Updates and Information group is hidden since this notification is the only one in the group) 

</p>
</details> 
