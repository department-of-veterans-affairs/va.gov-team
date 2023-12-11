# Default Send 

**Updated: 12/5/2023** Stats

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

We have 2 toggles this release plan is focused on which control the checkboxes and the editing-as-a-subtask feature. The checkboxes incorporates consuming the default send logic from VA Profile/VA Notify.

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
- [Analytics Dashboard](https://analytics.google.com/analytics/web/?authuser=3#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/) see the Notification Checkbox clicks
- [QA Testing Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62629), [QA Testing GH Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/QA/qaPlan.md) , [QA Spreadsheet](https://docs.google.com/spreadsheets/d/1-oSUr_kFqyptbSI6jRC3O7wqk3TNDOwaWedmO3eh7FA/edit#gid=1459792507)


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
|Desired Number of Users|Recruit 7 with minimum 5 completed sessions|
|How you'll recruit the right production test users|We will recruit users via Perigean|
|How you'll conduct the testing|We will conduct UAT over Zoom to ensure the different features work correctly|
|How you'll give the test users access to the product in production w/o making it live on VA.gov|The feature will be behind a feature flag|
|Link to Research plan for UAT|[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-09-UAT-edit-as-subtask-default-send-checkbox-ui/research-plan.md) <br>[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-09-UAT-edit-as-subtask-default-send-checkbox-ui/conversation-guide.md)|


### Results 
|UAT|Result|
|---|---|
|Number of Users| 6 + pilot participant |
|Number of Bugs Identified/Fixed| 0 bugs found |
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?| No changes |


## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor analytics. If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggles previously mentioned. 

### Planning
**Launch Go/No-go:** 
- [Launch go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62928)

**Desired date range:** 10/25/2023
- [Launch Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62921) 

**What metrics-based criteria will you look at before advancing rollout to the next stage?:**
- [Success metrics on Default Send project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/README.md#measuring-success)
- [Success metrics on editing-as-subtask inititive brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/editing-as-a-subtask/mobile-phone-edit-flow)

## Go Live

### Planning 
|Launch % |Desired Date | _Actual Date_ | 
|-------|-----------|-----------|
| Launch to 25% | 10/25/2023 | 10/25/2023 |
| Launch to 50% | 11/1/2023 | 10/31/2023 |
| Launch to 100% | 11/8/2023 | 11/7/2023 |

### 1-week results at 100%
||Results|
|---|---|
|Number of unique users:|Edit as a subtask:958  Default Send:8,479|
|Any issues with VA handling/processing?|Nothing abnormal|
|Types of errors logged:| standard errors we've seen prior to launch (really only changed the UI so nothing else changed)|
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?|none|
|If yes, what:||


### 1-month results at 100%
||Results|
|---|---|
|Number of unique users:|35,717|
|Any issues with VA handling/processing?| No, 99.79% successful saves |
|Types of errors logged:| NA |
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?| No|
|If yes, what:||

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?

