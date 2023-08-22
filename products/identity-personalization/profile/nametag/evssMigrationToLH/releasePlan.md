# EVSS > LH Disabilities Rating API Migration

**Updated:** 08/15/2023

## Table of Contents

- [Overview](#overview)
- [Important Artifcats](#important-artifacts)
- [Phase I - UAT](#phase-i---uat)
- [Phase II - Staged Rollout](#phase-ii---staged-rollout)
- [Go Live](#go-live)
- [Post Launch Questions](#post-launch-questions)


## Overview 

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag)
[Inititve Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/evssMigrationToLH/inititiveBrief.md) 


## Important Artifacts 

- [EVSS>LH Disabilities Rating Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59866)
- [Analytics Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/)
- QA Testing > this is a read only item it either displays or doesn there isn't a lot of comprehensive testing we can do given that this endpoint is using mocked data only in Staging. 


**<details><summary> Toggle Details </summary>**
<p>

  `profile_lighthouse_rating_info`

</p>
</details> 


## Phase I - UAT 

The API will have UAT completed by [insert the proper benefits team name]

## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor analytics. If the team notices a spike in errors, they will contact the engineering team to get the team engineers to disable the toggle(s) previously mentioned. 

### Planning
**Launch Go/No-go:** 
- [Launch go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63199)

**Desired date range:** _TBD_
- [Launch Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63159) 

**What metrics-based criteria will you look at before advancing rollout to the next stage?:**
[Success metrics on project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/README.md#measuring-success)


## Go Live

### Planning 
|Launch % |Desired Date | _Actual Date_ | 
|-------|-----------|-----------|
| Launch to 10% | 08/21/2023 |  |
| Launch to 25% | 08/28/2023 | |
| Launch to 50% | 09/04/2023 |  |
| Launch to 100% | 09/11/2023 |  |

## Launch 
### Stage B: 10% of users

#### Results

|Question|Response|
|---|---|
|Number of unique users:| [FILL_IN]
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/README.md#kpimetrics)|
|Was any downstream service affected by the change?:| pick one: yes/no/N/A |
|Types of errors logged:| [FILL_IN]|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| [FILL_IN]|

---
### Stage C: 25% of users

#### Results

|Question|Response|
|---|---|
|Number of unique users:| [FILL_IN]
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/README.md#kpimetrics)|
|Was any downstream service affected by the change?:| pick one: yes/no/N/A |
|Types of errors logged:| [FILL_IN]|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| [FILL_IN]|

---
### Stage D: 50% of users

#### Results

|Question|Response|
|---|---|
|Number of unique users:| [FILL_IN]
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/README.md#kpimetrics)|
|Was any downstream service affected by the change?:| pick one: yes/no/N/A |
|Types of errors logged:| [FILL_IN]|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| [FILL_IN]|

### Stage E: 100% of users

#### Results

|Question|Response|
|---|---|
|Number of unique users:| [FILL_IN]
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/README.md#kpimetrics)|
|Was any downstream service affected by the change?:| pick one: yes/no/N/A |
|Types of errors logged:| [FILL_IN]|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| [FILL_IN]|


## Post Launch Metrics 
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


