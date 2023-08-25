# DBEX Rated Disability Endpoint Migration Release Plan

#### NOTE:
Pros of splitting rated disabilities release
less points of failure on initial release
easier to monitor one migration at a time
Cons of spilitting rated disabilities release
potential juggling of two different failing data providers (EVSS + Lighthouse)
potential differing data results between the frontend website vs. the submit background job 

The Lighthouse team has communicated the following:

- Lighthouse staging (staging-api.va.gov) is not intended for consumers / application developers. Its intended use is for Lighthouse developers and API providers on the Lighthouse platform to test, debug, and prepare releases for sandbox (sandbox-api.va.gov) and production (api.va.gov).
- Lighthouse staging is unstable and often configured in ways that would hinder consumer use. It has no guarantee of availability and has inconsistent continuity of data across Lighthouse APIs.
- Lighthouse does not currently offer an end-to-end integration environment for consumers to test with live backend systems (e.g., BGS).

The lack of a viable end-to-end testing environment introduces several risks, not limited to:
- Integration Issues
    - Integration issues may go undetected, leading to improper communication and functioning of the various parts of the system.
- Missing/Incomplete Functionality
    - If each component is not thoroughly tested in conjunction with others, critical features may be overlooked or not fully validated.
- Data Flow Problems
    - Not being able to ensure that data flows seamlessly through the entire system may lead to undetected data discrepancies.
- Performance Bottlenecks
    - Unable to identify performance bottlenecks across the entire system.
- UX Problems
    - Issues related to usability, navigation, and user interactions might persist, leading to poor user satisfaction.
- Increased failure rates for Veterans
    - Due to unvetted use cases, actual Veterans are likely to encounter issues that will be confusing and jarring. These issues will have to be resolved as they are discovered. If failure rates reach high enough volumes, these users will not be rescuable.

Lighthouse has been made aware of these risks. Our focus for this test plan will be to raise our baseline confidence as much as we can with thorough testing and mock data in the preparation phase, followed by close monitoring and prompt incident responses during the rollout phase.


## Overview Checklist
- [ ] Phase I: Internal Testing and Review
    - [ ] Internal Testing and Review
    - [ ] Pre-release Testing
    - [ ] Review Cases
    - [ ] Canary
- [ ] Phase II: Staged Rollout 
    - [ ] Stage A: 1%
    - [ ] Stage B: 5%
    - [ ] Stage C: 10%
    - [ ] Stage D: 25%
    - [ ] Stage E: 50%
    - [ ] Stage F: Go live!
- [ ] Post-launch questions


## Phase I: Internal Testing and Review

### Pre-release Testing
- [ ] Complete pre-launch tasks: [ticket](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62666)
    - [ ] Splitting feature flags + consider environment parity b/c LH sandbox might use a different data source from eVSS
    - [ ] Additional metrics/logging calls in RD controller (InProgressForm swallows errors)
- [ ] Request production credentials from Lighthouse via their production access form
- [ ] Complete manual testing with production credentials in Argo
- [ ] Push credentials to K8 manifest and devops repositories
- [ ] Create and execute a Testrail test plan
- [ ] Complete Review

### Review Cases
- [ ] Does the existing DataDog monitoring have sufficient coverage?
- [ ] Has manual testing been completed in Argo with prod credentials?
- [ ] Have a successful TestRail test plan been executed?
- [ ] Confirm devops repository has references to correct environment variable paths
- [ ] Confirm K8 manifest repository has references to correct environment variable paths
- [ ] Do we have a point of contact on LH to coordinate with?
- [ ] Has the team reviewed and timeboxed the release intervals?
- [ ] Have PO(s) been made aware and approved of the plan? 

### Canary
- [ ] Identify internal users from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)
- List identified user emails/Slack handles:
    - John Doe
- [ ] Schedule a meeting for controlled testing
- [ ] Set Flipper active for identified internal production users
- [ ] Ensure qualitatively that the feature works as intended for users
- [ ] Ensure that the user activity is noticed and captured in the DataDog dashboard
- [ ] Monitor Sentry and DataDog logs for any anomalies


## Phase II: Staged Rollout (also known as unmoderated production testing)
### Metrics
How will you make the product available in production while limiting the number of users who can find/access it: Flipper toggle 
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- Ensure relative traffic lines up between eVSS and LH to the given allotment in Flipper
- Ensure Sentry errors remain constant across batches
- Ensure DataDog-reported HTTP status codes remain constant across batches
- Monitor for new Call Center complaints
- Monitor logs for any qualitative anomalies
- Monitor latency

Links to dashboard(s) showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: Rated Disability](https://vagov.ddog-gov.com/dashboard/zc5-23v-wpq/benefits---dbex---evss-to-lh-rated-disability?from_ts=1690393863486&to_ts=1690397463486&live=true)

#### Rollback
- Rollback if any of the following is encountered
    - Qualitative anomalies that affect a significant number of users
    - Any new severe or widespread errors identified
    - 429 error indicating rate limit has been reached
    - High volume of 500 errors
    - High volume of Call Center complaints
    - Abnormally high latency
    - Traffic metrics deviate abnormally from the Flipper allotment
- In most cases, a face-value assessment and follow-up ticket should be created
- In the case of a 429, email api@va.gov with your va.gov email and attach a screenshot of the error. Include a brief explanation and a request to increase the rate limit
- Paste to the bottom of the current stage if a rollback to a previous stage needed to happen:

        Rollback reason:
            Date:
            Severity/Impact:
            Ticket(s) created to address:
            - [ ] Has the issue been resolved?


### Stage A: Monitoring phase
#### Planning  
Date Started: 
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
Date Started: 
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

### Stage C: Another moderate ramp up
#### Planning
Date Started: 
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
Date Started: 
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
Date Started: 
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
Date Started: 
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
5. What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?
