# DBEX Rated Disability Endpoint Migration Release Plan.md

## Overview:
#### Internal Testing and Review:
[ ] Complete pre-launch tasks: 
    - N/A
[ ] Request production credentials from Lighthouse via their production access form
[ ] Complete manual testing with production credentials in Argo
[ ] Push credentials to K8 manifest and devops repositories
[ ] Determine internal production test users for targeted runs
    - List users identified:
[ ] Create and execute a Testrail test plan
[ ] Complete Review

#### Canary
[ ] Schedule a meeting for controlled testing
[ ] Set Flipper active for identified internal production users
[ ] Ensure qualitatively that the feature works as intended for users
[ ] Ensure that the user activity is noticed and captured in the DataDog dashboard
[ ] Monitor Sentry and DataDog logs for any anomalies

#### Staged Rollout
- For each defined interval, monitor defined criteria in DataDog and Sentry
- Progress if the criteria is met for the given timebox
- Rollback if any of the rollback criteria are met
    [ ] 1%
    [ ] 5%
    [ ] 10%
    [ ] 25%
    [ ] 50%


## Phase I: Internal Testing and Review

### Review Cases
[ ] Does the existing DataDog monitoring have sufficient coverage?
[ ] Has manual testing been completed in Argo with prod credentials?
[ ] Have a successful TestRail test plan been executed?
[ ] Confirm devops repository has references to correct environment variable paths
[ ] Confirm K8 manifest repository has references to correct environment variable paths
[ ] Do we have a point of contact on LH to coordinate with?
[ ] Has the team reviewed and timeboxed the release intervals?
[ ] Have PO(s) been made aware and approved of the plan? 

### Pre-release Testing
- Identify a prod user and do a test run
- - Unable to complete due to a lack of internal users
- Manual testing
    - Conduct via Argo and LH prod credentials
    - Use to establish initial benchmarks
- Automated testing
- TestRail plan


## Phase II - Staged Rollout (also known as unmoderated production testing) 
### Planning
How will you make the product available in production while limiting the number of users who can find/access it: Flipper toggle 
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- Ensure relative traffic lines up between eVSS and LH to the given allotment in Flipper
- Ensure Sentry errors remain constant across batches
- Ensure DataDog HTTP status codes remain constant across batches
- Monitor for new Call Center complaints
- Monitor logs for any qualitative anomalies
- Monitor latency

Links to dashboard(s) showing "success criteria" metrics: <a href = "https://vagov.ddog-gov.com/dashboard/zc5-23v-wpq/benefits---dbex---evss-to-lh-rated-disability?from_ts=1690393863486&to_ts=1690397463486&live=true">Benefits DBex EVSS-to-LH: Rated Disability</a>

#### Rollback
- Rollback if any of the following is encountered
    - Qualitative anomalies that affect a significant number of users
    - Error logs above a certain threshold
        - Threshold:
    - High volume of 500 errors
    - High volume of Call Center complaints
    - Abnormally high latency
    - Traffic metrics deviate abnormally from the Flipper allotment
- Paste to the bottom of the current stage if a rollback to a previous stage needed to happen:

        Rollback reason:
            Date:
            Severity/Impact:
            Ticket(s) created to address:
            [ ] Has the issue been resolved?


### Stage A: Canary 
#### Planning  
Date: 
ZH Tracking: 

Length of time:
Percentage of Users (and roughly how many users do you expect this to be): Targeted users
#### Results:  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Highest Latency:
- Rollbacks:

### Stage A: Monitoring phase 
#### Planning  
Date: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62318

Length of time: 1 week
Percentage of Users (and roughly how many users do you expect this to be): 1%
#### Results:  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Highest Latency:
- Rollbacks:

### Stage B: Moderate ramp up
#### Planning  
Date: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62319

Length of time: 
Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Highest Latency:
- Rollbacks:

What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? 
### Stage C: Another moderate ramp up
#### Planning
Date: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62322

Length of time: 
Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Highest Latency:
- Rollbacks:

### Stage D: Final moderate ramp up
#### Planning  
Date: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62323

Length of time: 
Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Highest Latency:
- Rollbacks:

### Stage E: High traffic
#### Planning
Date: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62324

Length of time: 1 week
Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Highest Latency:
- Rollbacks:

### Stage F: Go Live!
Date: 

Percentage of Users (and roughly how many users do you expect this to be): 100% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Highest Latency:
- Rollbacks:



## Post-launch Questions  
To be completed once you have gathered your initial set of data, as outlined above.   
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?  
2. What qualitative feedback have you gathered from users or other stakeholders, if any?  
3. Which of the assumptions you listed in your product outline were/were not validated?  
4. How might your product evolve now or in the future based on these results? 

