
# DBEX Benefits Reference Data Endpoint Migration Release Plan

### NOTE:
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
- Notes
- [ ] Phase I: Internal Testing and Review
    - [x] Internal Testing and Review
    - [x] Pre-release Testing
    - [x] Review Cases
    - [ ] Canary
- [ ] Phase II: Staged Rollout 
    - [ ] Stage A: 1%
    - [ ] Stage B: 5%
    - [ ] Stage C: 10%
    - [ ] Stage D: 25%
    - [ ] Stage E: 50%
    - [ ] Stage F: Go live!
- [ ] Post-launch questions

## Notes
- Branden Winn is no longer the PM for BRD, contact Joseph Justice if any verification of metrics is needed
- To Canary, theoretically only need to have Veteran users navigate to https://www.va.gov/disability/file-disability-claim-form-21-526ez/review-veteran-details/separation-location, albeit via normal form flow
- BRD logging displays an unusual pattern when looking at provider level logs
    - Logs occur in 2s, at seemingly regular intervals, indicating they may be called or passed through a job
    - "thread: puma srv tp" is a common term in the provider level logs
- Due to the amount of certainty in the origin of some of these logs, start by turning the flag on in staging and verifying a couple green runs with staging users
- BRD flag is no longer appearing 3/15
    - It was certainly toggleable before... unless I'm crazy

<br>

## Phase I: Internal Testing and Review

### Pre-release Testing
- [x] Complete pre-launch tasks: N/A
- [x] Request production credentials from Lighthouse via their production access form
- [x] Complete manual testing with production credentials in Argo
- [ ] Create and execute a Testrail test plan
    - Link:
- [x] Complete Review

### Review Cases
- [x] Does the existing DataDog monitoring have sufficient coverage?
- [x] Has manual testing been completed in Argo with prod credentials?
- [ ] Have a successful TestRail test plan been executed?
- [x] Do we have a point of contact on LH to coordinate with?
    - No longer Branden Wynn, Joseph Justice is the new point of contact
- [x] Has the team reviewed and timeboxed the release intervals?
- [x] Have PO(s) been made aware and approved of the plan? 

### Canary
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/76274
- Links to dashboard showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: BRD](https://vagov.ddog-gov.com/dashboard/n5i-sba-u52/benefits---dbex---evss-to-lh-brd?query=service%3Avets-api%20%40name%3A%22V0%3A%3ADisabilityCompensationFormsController%22%20env%3Aeks-prod%20%40payload.action%3Aseparation_locations%20AND%20%40http.status_code%3A200&fromUser=false&index=%2A&panelFrom=1710792000000&panelTo=1710799200000&panelType=logs&refresh_mode=sliding&view=spans&from_ts=1710335132681&to_ts=1710939932681&live=true)
- [x] Identify internal users from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)
- List identified user emails/Slack handles:
    - Robin Garrison, @Robin Garrison
    - Rocio De Santiago @Rocio De Santiago - Coforma
- [ ] Schedule a meeting or asynchronous time for controlled testing, note the scheduled date and time(s) below (to verify activity in DataDog)
    - If opting for a meeting:
        - [ ] Note the date, start, and end time:
    - If opting for asynchronous time:
        - [ ] Note individual scheduled dates and times next to each identified user
        - [ ] Note testing steps:
- [ ] Ensure that at least a portion of users can run through testing steps before setting Flipper active
- [ ] Ensure at least one user covers the "legacy" case (EVSS generated ITF, LH checked)
- [ ] Set Flipper active for identified internal production users ([Flipper Dashboard](https://api.va.gov/flipper/features))
- [ ] Ensure qualitatively that the feature works as intended for users
- [ ] Ensure that the user activity is noticed and captured in the DataDog dashboard
- [ ] Coordinate with Lighthouse point of contact to ensure activity is captured on their end
- Monitor Sentry and DataDog logs for any anomalies, record below, link to any tickets created to address
    - Note any anomalies here:

<br>

## Phase II - Staged Rollout (also known as unmoderated production testing)
### Metrics
How will you make the product available in production while limiting the number of users who can find/access it: [Flipper Dashboard](https://api.va.gov/flipper/features)
<br>
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- Ensure relative traffic lines up between eVSS and LH to the given allotment in Flipper
- Ensure Sentry errors remain constant across batches
- Ensure DataDog-reported HTTP status codes remain constant across batches
- Monitor for new Call Center complaints
- Monitor logs for any qualitative anomalies
- Monitor latency

Links to dashboard(s) showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: Intent to File](https://vagov.ddog-gov.com/dashboard/ipg-v6d-c59/benefits---dbex---evss-to-lh-intent-to-file?from_ts=1690907664207&to_ts=1690911264207&live=true)
    - Traffic is redirected to LH through the v0 (EVSS) controller
    - The expected behavior is that LH traffic should be **proportionate** to v0 traffic
    - v0 will act as a control as we progress through the rollout phases

#### Rollback
- Rollback if any of the following is encountered
    - Qualitative anomalies that affect a significant number of users
    - Any new severe or widespread errors identified
    - 429 error indicating rate limit has been reached
    - Volume of 404s do not match up with number of POST request (should be seeing 1 POST per GET 404)
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
<br>

### Stage A: Monitoring phase 
#### Planning  
- Date Started: 
- ZH Tracking: 
#### Results:  
- Anomalies
- Rollbacks:


<br>


### Stage B: Moderate ramp up
#### Planning  
- Date Started: 
- ZH Tracking: 
- Length of time:
- Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  
- Anomalies:
- Rollbacks:

<br>


### Stage C: Another moderate ramp up
#### Planning
- Date Started: 
- ZH Tracking: 
- Length of time:
- Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  
- Anomalies:
- Rollbacks:

<br>


### Stage D: Final moderate ramp up
#### Planning  
- Date Started: 
- ZH Tracking: 
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results  
- Anomalies:
- Rollbacks:

<br>


### Stage E: High traffic
#### Planning
- Date Started: 
- ZH Tracking: 
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- Anomalies
- Rollbacks:

<br>


### Stage F: Go Live!
- Date Started:
- Percentage of Users (and roughly how many users do you expect this to be): 100% 
#### Results  
- Anomalies
- Rollbacks:
   
<br>


## Post-launch Questions  
To be completed once you have gathered your initial set of data, as outlined above.   
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. Were there any metrics that could be considered useful post-rollout for auomated alerts?
3. What qualitative feedback have you gathered from users or other stakeholders, if any?  
4. Which of the assumptions you listed in your product outline were/were not validated?  
5. How might your product evolve now or in the future based on these results? 
6. What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?
