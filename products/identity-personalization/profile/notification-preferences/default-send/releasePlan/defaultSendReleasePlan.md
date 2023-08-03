# Default Send 

## Table of Contents

- [Overview](#overview)
- [Important Artifcats](#important-artifacts)
- [Migrating from Radio Button to Checkbox Component and Consuming Default Send](#migrating-from-radio-button-to-checkbox-component-and-consuming-default-send)
- [Phase I - UAT](#phase-i---uat)
- [Phase II - Staged Rollout](#phase-ii---staged-rollout)
- [Go Live](#go-live)
- [Post Launch Questions](#post-launch-questions)


## Overview 
The default send work is comprised of several different pieces of functionality. 

We have 4 toggles this release plan is focused on. Our main deployment will be concerned with the first two toggles which control the checkboxes and the editing-as-a-subtask feature. The other two will be discussed in the [Enabling Email as a Channel Notifications](#enabling-email-as-a-channel-notifications) section of this document. 

**<details><summary>All Toggles</summary>**
<p>

- `profile_use_notification_settings_checkboxes`
  - toggles the usage of radio buttons vs checkboxes as the input type that is used for every notification. Also consumes default send indicator boolean when turned on.

- `profile_use_field_editing_page` 
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile 

</p>
</details> 

## Important Artifacts 

- [Email as a channel epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61101)
- [Editing as a subtask epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49319)
- Analytics Dashboard
- QA Testing


## Migrating from Radio Button to Checkbox Component and Consuming Default Send

As we prepare to deploy these changes, there are other groups (VA Notify/VA Profile) that aren't fully prepared for the entire body of work to be deployed. AE Profile is going to deploy the improvements we can in order to pave the way for changes pending from those other teams. Namely, we'll be able to support email-as-a-channel before we have notifications available that utilize email. 

Our goals for this initial deployment:
- leverage the new checkbox UI
- Utilize the default send information supplied by VA Profile/VA Notify
- Deploy our editing-as-a-subtask feature

The toggles used for this:
**<details><summary> Toggle Details </summary>**
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
|UAT Go/No-go Convo|[Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62915)|
|Desired Date Range or Test Duration|1 week|
|Desired Number of Users|TBD|
|How you'll recruit the right production test users|We will recruit users via Perigean|
|How you'll conduct the testing|We will conduct UAT over Zoom to ensure the different features work correctly|
|How you'll give the test users access to the product in production w/o making it live on VA.gov|The feature will be behind a feature flag|
|Link to Research plan for UAT|[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/b440b37ccc0450785856cdd8bd2d10e3f3aae727/products/identity-personalization/profile/notification-preferences/default-send/UAT/UATdefaultSendResearchPlan.md) <br>[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/b440b37ccc0450785856cdd8bd2d10e3f3aae727/products/identity-personalization/profile/notification-preferences/default-send/UAT/UATdefaultSendConversationGuide.md)|


### Results 
|UAT|Result|
|---|---|
|Number of Users||
|Number of Bugs Identified/Fixed||
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?||


## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor analytics. If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggles previously mentioned. 

### Planning
**Launch Go/No-go:** 
- [Launch go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62928)

**Desired date range:** _TBD_
- [Launch Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62921) 

**Phased rollout:** 
|Launch % |Time Frame | Planned Date Range|
|---|---|---|
| Launch to 25% | 1 week |  | 
| Launch to 50% | 1 week |  | 
| Launch to 100% | 1 week | |


**What metrics-based criteria will you look at before advancing rollout to the next stage?:**
[Success metrics on project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/README.md#measuring-success)


## Go Live

### Planning 
|Launch % |Desired Date | _Actual Date_ | 
|-------|-----------|-----------|
| Launch to 25% |  |  |
| Launch to 50% |  | |
| Launch to 100% |  |  |

### 1-week results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?||
|Types of errors logged:||
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?||
|If yes, what:||


### 1-month results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?||
|Types of errors logged:||
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?||
|If yes, what:||

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?

