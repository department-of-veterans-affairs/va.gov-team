# EVSS > LH Disabilities Rating API Migration

**Updated:** 11/14/2023 answered post launch questions

## Table of Contents

- [Overview](#overview)
- [Important Artifcats](#important-artifacts)
- [Phase I - UAT](#phase-i---uat)
- [Phase II - Staged Rollout](#phase-ii---staged-rollout)
- [Go Live](#go-live)
- [Post Launch Questions](#post-launch-questions)


## Overview 

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag) <br>
[Inititve Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/nametag/evssMigrationToLH) 


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
[Success metrics on project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/README.md#kpimetrics)


## Go Live

### Planning 
|Launch % |Desired Date | _Actual Date_ | 
|-------|-----------|-----------|
| Launch to 10% | 08/30/2023 |[08/30/2023](https://dsva.slack.com/archives/C04KXPXL4/p1693403074394949)  |
| Launch to 25% | 09/06/2023 |[ 9/6/2023](https://dsva.slack.com/archives/C909ZG2BB/p1694177868315429?thread_ts=1693489197.759069&cid=C909ZG2BB) |
| Launch to 50% | 09/13/2023 | [9/12/2023](https://dsva.slack.com/archives/C04KXPXL4/p1694533587958499?thread_ts=1693403074.394949&cid=C04KXPXL4) |
| Launch to 100% | 09/20/2023 | [9/19/2023](https://dsva.slack.com/archives/C909ZG2BB/p1695134367780099?thread_ts=1695134342.109399&cid=C909ZG2BB) |

## Launch 
### Stage A: 10% of users

#### Results

|Question|Response|
|---|---|
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/evssMigrationToLH/README.md#measuring-success)|
|Was any downstream service affected by the change?:| pick one: No |
|Types of errors logged:| We saw an increase in 403 errors, [Tom worked on ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65067) ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/bb78fae5-233d-44cc-8bef-ab184337c07d)|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| [#65067](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65067) resolved some of the extra errors we were seeing |

---
### Stage B: 25% of users

#### Results

|Question|Response|
|---|---|
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/evssMigrationToLH/README.md#measuring-success)|
|Was any downstream service affected by the change?:| pick one: No |
|Types of errors logged:| ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/8a7fd4e7-afd2-415a-b023-3b7b20c5380c)|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| None |

---
### Stage C: 50% of users

#### Results

|Question|Response|
|---|---|
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/evssMigrationToLH/README.md#measuring-success)|
|Was any downstream service affected by the change?:| pick one: yes/no/N/A |
|Types of errors logged:| ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/a09a16d3-c542-4c6c-bec5-21627a469cf5)
|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| None|

### Stage D: 100% of users

#### Results

|Question|Response|
|---|---|
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/nametag/evssMigrationToLH/README.md#measuring-success)|
|Was any downstream service affected by the change?:| pick one: yes/no/N/A |
|Types of errors logged:| ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/488d038e-2386-4870-bcc9-151bc52ba8d2)
|
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?| None |


## Post Launch Metrics 
### 1-week results at 100%
||Results|
|---|---|
|Any issues with VA handling/processing?|No|
|Types of errors logged:|![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/08720c88-e88b-485a-a804-5c7c35843b33)
|
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?|No|
|If yes, what:||


### 1-month results at 100%
||Results|
|---|---|
|Any issues with VA handling/processing?|No|
|Types of errors logged:|![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/49697f47-93b6-4e94-8ed3-9a2c4a7ed056)|
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?| No|
|If yes, what:| While not a UX change per-se we're going to explore [#65019](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65019) as a way to reduce unecessary traffic to the BE, right now we check for a disability rating on ALL users when, in some cases we know even before sending the query to the BE the user will not have a rating (eg. LOA1, non-veteran users etc), we can reduce noise/traffic and lower the number of false positive errors |

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"? - things are looking great! We've not seen a dip in the statistics with the migration to the new endpoint
2. What qualitative feedback have you gathered from users or other stakeholders, if any? - none
3. Which of the assumptions you listed in your product outline were/were not validated? - n/a this was a migration so it wasn't really a new build where we'd have assumptions to check 
4. How might your product evolve now or in the future based on these results? - not really applicable as again this was a migration to a new endpoint


