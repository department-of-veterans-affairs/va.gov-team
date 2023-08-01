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
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile 

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
|[UAT go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62915)||
|[Go Live go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62928)||

## Migrating from Radio Button to Checkbox Component and Consuming Default Send

As we prepare to deploy these changes, there are other groups (VA Notify/VA Profile) that aren't fully prepared for the entire body of work to be deployed. AE Profile is going to deploy the improvements we can in order to pave the way for changes pending from those other teams. Namely, we'll be able to support email-as-a-channel before we have notifications available that utilize email. 

Our goals for this initial deployment is to leverage the new checkbox UI, utilize the default send information supplied by VA Profile, deploy our editing-as-a-subtask feature. The toggles in question 

<details><summary>**Toggle Details**</summary>
<p>

- `profile_use_notification_settings_checkboxes`
  - toggles the usage of radio buttons vs checkboxes as the input type that is used for every notification. Also consumes default send indicator boolean when turned on.

- `profile_use_field_editing_page` 
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile 

</p>
</details> 


## Phase I - UAT 



## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor analytics. If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggles previously mentioned. 

## Go Live
[Rollout Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62921) 

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
