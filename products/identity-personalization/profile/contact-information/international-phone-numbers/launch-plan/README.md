# International Phone Number Release Plan 

**Updated 7/2/2025**


## Table of Contents


## Important Artifacts 
- Epic
- Data Dog Dashboard
- QA Testing
- Figma Designs
- [Launch Go/No-go conversation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113482)
- [Launch Tracking Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/113480)


## Phase I - UAT

For this release we will not perform UAT testing with Veterans. We will however be able to perform QA testing and can repeate the same testing in Production with LOA3 verified personal accounts. As these features are user agnostic (ie. you do not have to be a veteran to access this functionality in the Profile) we can confirm the feature performance in Prod. 

## Staged Release 
### Rollback Plan: 
Tech Lead, Design Lead, PM, and PO will monitor DataDog analytics. If the team notices a spike in errors, the team will disable the feature.

### Planning 

#### Desired Date Range 
VA Profile will be available in staging by 7/28/2025
![image](https://github.com/user-attachments/assets/66f9f92a-c4f3-4fbc-943e-5d4318e9c1b9)

We should QA and UAT no later than 8/4-8/8/2025

#### What metrics-based criteria will you look at before advancing rollout to the next stage?:

We'll monitor using our [DataDog dashboard](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1713204398696&to_ts=1713290798696&live=true)

## Go Live 

### Planning 
|Launch % |Desired Date | _Actual Date_ | 
|-------|-----------|-----------|
| Launch to 25% |  8/13/2025  |  |
| Launch to 50% |  8/14/2025 |  |
| Launch to 100% |  8/15/2025 |  |

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

