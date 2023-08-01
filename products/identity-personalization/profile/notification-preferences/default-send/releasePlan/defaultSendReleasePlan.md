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

<details><summary>All Toggles</summary>
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
|[Email as a channel epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61101)| |
|[Editing as a subtask epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49319)||
|Analytics Dashboard||
|QA Testing||



## Migrating from Radio Button to Checkbox Component and Consuming Default Send

As we prepare to deploy these changes, there are other groups (VA Notify/VA Profile) that aren't fully prepared for the entire body of work to be deployed. AE Profile is going to deploy the improvements we can in order to pave the way for changes pending from those other teams. Namely, we'll be able to support email-as-a-channel before we have notifications available that utilize email. 

Our goals for this initial deployment:
- leverage the new checkbox UI
- Utilize the default send information supplied by VA Profile/VA Notify
- Deploy our editing-as-a-subtask feature

The toggles used for this:
<details><summary> Toggle Details </summary>
<p>

- `profile_use_notification_settings_checkboxes`
  - toggles the usage of radio buttons vs checkboxes as the input type that is used for every notification. Also consumes default send indicator boolean when turned on.

- `profile_use_field_editing_page` 
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile 

</p>
</details> 


## Phase I - UAT 

### Planning
|Planning Item/Question|Response|
|---|---|
|[UAT Go/No-go Convo/Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62915)||
|Desired Date Range or Test Duration|1 week|
|Desired Number of Users|TBD|
|How you'll recruit the right production test users|We will recruit users via Perigean|
|How you'll conduct the testing|We will conduct UAT over Zoom to ensure the different features work correctly|
|How you'll give the test users access to the product in production w/o making it live on VA.gov|The feature will be behind a feature flag|
|Link to Research plan for UAT|[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/b440b37ccc0450785856cdd8bd2d10e3f3aae727/products/identity-personalization/profile/notification-preferences/default-send/UAT/UATdefaultSendResearchPlan.md) <br>[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/b440b37ccc0450785856cdd8bd2d10e3f3aae727/products/identity-personalization/profile/notification-preferences/default-send/UAT/UATdefaultSendConversationGuide.md)|

### Results 
|UAT Results|Details|
|---|---|
|Number of Users||
|Number of Bugs Identified/Fixed||
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?||



## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor analytics. If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggles previously mentioned. 

## Go Live
[Rollout Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62921) 

|[Go Live go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62928)||

## Enabling Email as a Channel Notifications

As VA Notify and VA Profile work through the notifications that will use email as a channel, we'll enable each of those notifications. A separate release plan will likely be needed and those would be controlled by the below toggles.  

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
