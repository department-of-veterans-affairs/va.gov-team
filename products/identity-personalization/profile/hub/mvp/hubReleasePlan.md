# Hub MVP Release Plan

**Updated:** 1/29/2023 

## Table of Contents

- [Overview](#overview)
- [Important Artifcats](#important-artifacts)
- [Phase I - UAT](#phase-i---uat)
- [Phase II - Staged Rollout](#phase-ii---staged-rollout)
- [Go Live](#go-live)
- [Post Launch Questions](#post-launch-questions)


## Overview 


**<details><summary>Related Toggles</summary>**
<p>

- `profile_use_hub_page`
  - Use a hub style page as the root page for the profile application

</p>
</details> 

## Important Artifacts 

- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/hub/readme.md)
- [Usability Testing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research/2023-09-profile-hub-usability) 
- [Analytics Dashboard for Search](https://va-gov.domo.com/page/1834995012/kpis/details/203579416)
     - for the hub our goal is "Objective #1: Reduce searches from within profile for items in the profile"
- [QA Testing Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69415)
- [QA Spreadsheet](https://docs.google.com/spreadsheets/d/1NfYZh4LFTVw8ZFbiv9AVkLipvxdzwwD7lKv3t7V8QMo/edit#gid=0)



## Phase I - UAT 

### Planning

|Planning Item/Question|Response|
|---|---|
|UAT Go/No-go Convo|[Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68248)|
|Desired Date Range or Test Duration|1 day|
|Desired Number of Users| internal UAT |
|How you'll recruit the right production test users| Since its FE UI we can test internally |
|How you'll conduct the testing| We'll run through our QA testing for UAT |
|How you'll give the test users access to the product in production w/o making it live on VA.gov|The feature will be behind a feature flag|
|Link to Research plan for UAT|n/a we're running internal UAT reusing our QA testing|


### Results 
|UAT|Result|
|---|---|
|Number of Users|  |
|Number of Bugs Identified/Fixed| |
|Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges?| |


## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor analytics. If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggle(s) previously mentioned. 

### Planning
**Launch Go/No-go:** 
- [Launch go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68249)

**Desired date range:** _TBD_
- [Launch Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68251) 

**What metrics-based criteria will you look at before advancing rollout to the next stage?:**
- [Success metrics on project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/hub/mvp#measuring-success)
- [AE Sandbox for monitoring](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/DRqBrmiyTD6l8L75rei0fw/a50123418w177519031p176188361/_u.date00=20231119&_u.date01=20231128/)


## Go Live

For metrics see the product outline as each phase has metrics tracked there. 

### Planning 
Since this is a cosmetic shift without complex logic unique to individual users. We s
|Launch % |Desired Date | _Actual Date_ | 
|-------|-----------|-----------|
| Launch to 100% | 12/19/2023 | 12/19/2023 |

### results at 100%
[see metrics on the mvp page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/hub/mvp#measuring-success)

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated? 
4. How might your product evolve now or in the future based on these results?


