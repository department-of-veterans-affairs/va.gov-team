# Authenticated Menu - Add Dependents and Letters 

**Updated:** 8/28/2023

## Table of Contents

- [Overview](#overview)
- [Important Artifcats](#important-artifacts)
- [Phase I - UAT](#phase-i---uat)
- [Phase II - Staged Rollout](#phase-ii---staged-rollout)
- [Go Live](#go-live)
- [Post Launch Questions](#post-launch-questions)


## Overview 
From our [research this year ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-06-add-dependents-records-discovery/summary.md)we've noticed a trend of users searching for Letters and Dependents from the profile (and across the broader va.gov website). 

We're looking for a low stakes, low development way to reduce the number of users searching for letters and dependents from the profile and across the broader VA.gov site. Adding Letters and Dependents to the "personalized menu" is potentially a great way to do exactly that. 

**<details><summary>Toggle</summary>**
<p>

`show_authenticated_menu_enhancements` [created using this ticket](https://github.com/department-of-veterans-affairs/vets-api/pull/13658)

</p>
</details> 

## Important Artifacts 

- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62186)
- Analytics Dashboard
- ~~QA Testing~~ we're not completing formal QA testing. We've confirmed the links work in staging and direct users to the correct locations. 
- ~~UAT Testing~~ we'll use analytics to monitor, we're not spending resources to run a full UAT study
  

## Phase I - UAT 

We're not running UAT for this initiative, we're going to [use metrics to monitor and ensure success.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/authenticated-menu/add-dependents-letter#measuring-success)


## Phase II - Staged Rollout 

### Rollback Plan:
PM and PO will monitor analytics. If the team notices a spike in errors, they will contact the engineering team to get the FE engineer to disable the toggles previously mentioned. 

### Planning
**Launch Go/No-go:** 
- [Launch go/no-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64424)

**Desired date range:** _TBD_
- [Launch Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64430) 

**What metrics-based criteria will you look at before advancing rollout to the next stage?:**
<br>
[Metrics from our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/authenticated-menu/add-dependents-letter#measuring-success)

## Go Live

### Planning 
|Launch % |Time Frame |Desired Date | _Actual Date_ | 
|-------|:-:|-----------|-----------|
| Launch to 50% | 2 days | 09/18/2023 |  |
| Launch to 100% | n/a | 09/20/2023 |  |



### Launch to 50%
#### Results

|Question|Response|
|---|---|
|Number of unique users:| |
|Metrics at this stage (per your "success criteria"):| [See Measuring Success in our project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/authenticated-menu/add-dependents-letter#measuring-success)|
|Was any downstream service affected by the change?:|  |
|Types of errors logged:| |
|What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?|  |



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

