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
- [x] Phase I: Internal Testing and Review
    - [x] Internal Testing and Review
    - [x] Pre-release Testing
    - [x] Review Cases
    - [x] Canary
- [ ] Phase II: Staged Rollout 
    - [x] Stage A: 1%
    - [x] Stage B: 5%
    - [ ] Stage C: 10%
    - [ ] Stage D: 25%
    - [ ] Stage E: 50%
    - [ ] Stage F: Go live!
- [ ] Post-launch questions

< br >

## Notes
- This migration will make use of two flags: `disability_compensation_lighthouse_rated_disabilities_provider_background` and `disability_compensation_lighthouse_rated_disabilities_provider_foreground`
    - Representing the RD call in the submit flow and form flow, respectively
- LH v2 does not have a controller mapped on the vets-api side, will have to monitor the RD job instead
- 11/7 - LH will be making a change to the service their API calls, thus we will have to redo some tests

< br >

## Phase I: Internal Testing and Review

### Pre-release Testing
- [x] Complete pre-launch tasks: [ticket](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62666)
    - [x] Splitting feature flags + consider environment parity b/c LH sandbox might use a different data source from eVSS
    - [x] Additional metrics/logging calls in RD controller (InProgressForm swallows errors)
- [x] Request production credentials from Lighthouse via their production access form
    - Using shared credentials with Benefits Team 1
- [x] Complete manual testing with production credentials in Argo
- [x] Push credentials to K8 manifest and devops repositories
- [x] Create and execute a Testrail test plan
- [x] Complete Review

### Review Cases
- [x] Does the existing DataDog monitoring have sufficient coverage?
- [x] Has manual testing been completed in Argo with prod credentials?
- [x] Have a successful TestRail test plan been executed?
- [x] Confirm devops repository has references to correct environment variable paths
- [x] Confirm K8 manifest repository has references to correct environment variable paths
- [x] Do we have a point of contact on LH to coordinate with?
- [x] Has the team reviewed and timeboxed the release intervals?
- [x] Have PO(s) been made aware and approved of the plan? 

### Canary
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/63007
- Links to dashboard showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: Rated Disability]([https://vagov.ddog-gov.com/dashboard/ipg-v6d-c59/benefits---dbex---evss-to-lh-intent-to-file?from_ts=1690907664207&to_ts=1690911264207&live=true](https://vagov.ddog-gov.com/dashboard/rsy-rne-zut/benefits---dbex---evss-to-lh-rated-disability?refresh_mode=sliding&from_ts=1695655345477&to_ts=1695741745477&live=true))
    - Traffic is redirected to LH through the v0 (EVSS) controller
    - The expected behavior is that LH traffic should be **proportionate** to v0 traffic
    - v0 will act as a control as we progress through the rollout phases
- [x] Identify internal users from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)
- List identified user emails/Slack handles:
    - Robin Garrison, @Robin Garrison
    - Mike Richard @Mike Richard
        - 9/27
    - Rocio De Santiago @Rocio De Santiago - Coforma
- [x] Schedule a meeting or asynchronous time for controlled testing, note the scheduled date and time(s) below (to verify activity in DataDog)
    - If opting for a meeting:
        - [ ] Note the date, start, and end time:
    - If opting for asynchronous time:
        - [x] Note individual scheduled dates and times next to each identified user
        - [x] Note testing steps:
            1. Login to your va.gov account in prod
            2. Navigate to `va.gov/disability/file-disability-claim-form-21-526ez/start`
            3. Answer the questions as follows:
                "Are you on active duty right now?" > "No"
                "I'm filing a new claim"
                
                Alternatively, skip the form by navigating to the "If you know X form is right, click here"
            4. On the /introduction screen, select "Start the Disability Compensation Application"
            5. On the first `/veteran-information` screen, please note for us
                - The current time, date, and timezone
                - Whether you have an existing Intent to File (Info block will say "You already have an Intent to File")
                - The city your browser is making the request from
              
            6. Press ‘Continue’
            7. Under the “Step 1 of 5: Veteran Details” header, there should be a line with your Application ID number
                - Please note your Application ID for us
            8. Once the previous step is completed, let us know. We will then toggle the feature flag for your account to then use the Lighthouse API provider
            9. Close your browser and repeat steps 2-4
            10. On the first `/veteran-information` screen, please note the current time and date
        - [x] Record testing steps in TestRail
        - [x] Share testing steps with each user
- [x] Ensure that at least a portion of users can run through testing steps before setting Flipper active
- [x] Ensure at least one user covers the "legacy" case (EVSS generated RD, LH checked)
- [x] Set Flipper active for identified internal production users ([Flipper Dashboard](https://api.va.gov/flipper/features))
- [x] Ensure qualitatively that the feature works as intended for users
- [x] Ensure that the user activity is noticed and captured in the DataDog dashboard
- [x] Coordinate with Lighthouse point of contact to ensure activity is captured on their end
- Monitor Sentry and DataDog logs for any anomalies, record below, link to any tickets created to address
    - Note any anomalies here:
        - 9/14: Discrepancy between LH monitoring and our Dashboard. LH was recording ~100k hits a day, while we recorded roughly 20% of that
            - Confirmed discrepancy was potentially caused by other VA teams redirecting traffic to LH (~50%)
            - Confirmed incorrect (outdated) controller module path from pre-ITF release
        - 9/22: Discrepancy between other teams recorded traffic and traffic from LH (200k vs 100k)
            - Noting that vets-api does not have a v2 controller corresponding with the LH v2 release. Need to find another mode of recording
        - 9/25: Paused Canary and 1% rollout due to second PACT act deadline

<br>


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
Date Started: 10/2/23
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62318
Length of time: 1 week
Percentage of Users (and roughly how many users do you expect this to be): 1%
#### Results:  
- Anomalies:
    - No traffic capture on the LH side
        - Checked with AE team if they experienced similar issues - v2 traffic was not monitored on their end, and v2 doesn't seem to register on ours; figure out what method was used
    - 10/10 - Secondary rollout from 0.1% to 1%
        - 11am - progressed both RD flags to 0.1%
            - 11:42am - noted a spike in 502 and 503 errors
            - Rolled back to 0
            - Errors persisted until 12:08pm, total volume ~1400
            - 500* spike may be coincidental, will run again shortly to confirm
            - 12:55pm - Foreground flag running at 0.1% with no errors
            - 1:35pm - Background flag running at 0.1% with no erros
            - 2:05pm - 0.5% running on both flags with no errors
            - 3:00pm - 1% running, will update LH-side of dashboard
- Rollbacks:
    -     Rollback reason: No traffic capture on the LH side
            Date: 10/2/23
            Severity/Impact: Low - metrics only
            Ticket(s) created to address: N/A
            - [x] Has the issue been resolved?
              - Fixed on LH side

### Stage B: Moderate ramp up
#### Planning  
Date Started: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62319
Length of time: 
Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  
- Anomalies:
- Rollbacks:
  -     Rollback reason: Discrepancy between EVSS and LH decision text display
            Date: 10/16/23
            Severity/Impact: Low - known issue, non-blocking
            Ticket(s) created to address: N/A
            - [] Has the issue been resolved?
    - 11/7 - LH will be making a change to the service their API calls, thus we will have to redo some tests

### Stage C: Another moderate ramp up
#### Planning
Date Started: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62322
Length of time: 
Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  
- Anomalies:
- Rollbacks:

### Stage D: Final moderate ramp up
#### Planning  
Date Started: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62323
Length of time: 
Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results  
- Anomalies:
- Rollbacks:

### Stage E: High traffic
#### Planning
Date Started: 
ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62324
Length of time: 1 week
Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- Anomalies:
- Rollbacks:

### Stage F: Go Live!
Date Started: 
Percentage of Users (and roughly how many users do you expect this to be): 100% 
#### Results  
- Anomalies:
- Rollbacks:



## Post-launch Questions  
To be completed once you have gathered your initial set of data, as outlined above.   
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. Were there any metrics that could be considered useful post-rollout for auomated alerts?
3. What qualitative feedback have you gathered from users or other stakeholders, if any?  
4. Which of the assumptions you listed in your product outline were/were not validated?  
5. How might your product evolve now or in the future based on these results? 
6. What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?
