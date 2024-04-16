# Ch33 Direct Deposit Migration to CorpDB

**Updated: 4/16/2024**  `Draft`

## Table of Contents

- [Overview](#overview)
- [Important Artifcats](#important-artifacts)
- [Phase I - UAT](#phase-i---uat)
- [Phase II - Staged Rollout](#phase-ii---staged-rollout)
- [Go Live](#go-live)
- [Post Launch Questions](#post-launch-questions)


## Overview 
The Ch33 work is deployed behind several toggles. 

We have one toggle for enabling the unified form.

We have another toggle that blocks the entire page.

We will need to use BOTH of these toggles to control the release. 

## Important Artifacts 

- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76202)
- [DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1713204398696&to_ts=1713290798696&live=true) < must have PIV
- [QA Testing Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76720)
- [Figma designs](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=239-9210&mode=design&t=Der1Z3wg7PdKHdIS-0)
- [QA Testing GH Page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/ch33-bdn-corpdb-migration/qa) ,
- [QA Spreadsheet](https://docs.google.com/spreadsheets/d/1rOD8w0YNTlfbefVK7t2RsWoYK_ui1gTkVhCXlJE5VDg/edit#gid=0)


## Phase I - UAT 

### Planning

|Planning Item/Question|Response|
|---|---|
|UAT Go/No-go Convo|[Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80802)|
|Desired Date Range or Test Duration|Start 4/29, see [research plan for more details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/research-plan.md)|
|Desired Number of Users|s|
|How you'll recruit the right production test users|We will recruit users via Perigean|
|How you'll conduct the testing|We will conduct UAT over Zoom to ensure the different features work correctly|
|How you'll give the test users access to the product in production w/o making it live on VA.gov|The feature will be behind a feature flag|
|Link to Research plan for UAT|[Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/research-plan.md) <br>[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2024-04-direct-deposit-ch33-UAT/conversation-guide.md)|


### Results 
|UAT|Result|
|---|---|
|Number of Users|  |
|Number of Bugs Identified/Fixed|  |
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?|  |


## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor DataDog analytics. If the team notices a spike in errors, the team will disable the feature. 

### Planning
**Launch Go/No-go:** 
- [Launch go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80858)

**Desired date range:** 10/25/2023
- [Launch Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80859) 

**What metrics-based criteria will you look at before advancing rollout to the next stage?:**
- We'll monitor using our [DataDog dashboard](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1713204398696&to_ts=1713290798696&live=true)

## Go Live

### Planning 
|Launch % |Desired Date | _Actual Date_ | 
|-------|-----------|-----------|
| Launch to 10% | 5/1/2024 9AM |  |
| Launch to 25% | 5/1/2024 2PM |  |
| Launch to 50% | 5/2/2024 |  |
| Launch to 100% | 5/3/2024 |  |

### 1-week results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?||
|Types of errors logged:| )|
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?||
|If yes, what:||


### 1-month results at 100%
||Results|
|---|---|
|Number of unique users:||
|Any issues with VA handling/processing?| |
|Types of errors logged:|  |
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?| |
|If yes, what:||

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?

