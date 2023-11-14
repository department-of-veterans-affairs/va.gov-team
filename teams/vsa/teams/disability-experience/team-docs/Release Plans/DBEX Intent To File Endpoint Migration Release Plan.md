# DBEX Intent To File Endpoint Migration Release Plan

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
- [x] Phase I: Internal Testing and Review
    - [x] Internal Testing and Review
    - [x] Pre-release Testing
    - [x] Review Cases
    - [x] Canary
- [ ] Phase II: Staged Rollout 
    - [x] Stage A: 0.5%
    - [x] Stage B: 5%
    - [x] Stage C: 10%
    - [x] Stage D: 25%
    - [x] Stage E: 50%
    - [x] Stage F: Go live!
- [ ] Post-launch questions


## Phase I: Internal Testing and Review

### Pre-release Testing
- [x] Complete pre-launch tasks: N/A
- [x] Request production credentials from Lighthouse via their production access form
- [x] Complete manual testing with production credentials in Argo
- [x] Push credentials to K8 manifest and devops repositories
- [x] Create and execute a Testrail test plan
    - Link: https://dsvavsp.testrail.io/index.php?/cases/view/43193
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
- Links to dashboard showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: Intent to File](https://vagov.ddog-gov.com/dashboard/ipg-v6d-c59/benefits---dbex---evss-to-lh-intent-to-file?from_ts=1690907664207&to_ts=1690911264207&live=true)
    - Traffic is redirected to LH through the v0 (EVSS) controller
    - The expected behavior is that LH traffic should be **proportionate** to v0 traffic
    - v0 will act as a control as we progress through the rollout phases
- [x] Identify internal users from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)
- List identified user emails/Slack handles:
    - Robin Garrison, @Robin Garrison
        - EVSS: Aug 17, 2023 9:47AM CT, Has existing ITF, Wichita KS
        - LH: Aug 17, 2023 10:07AM CT
        - 2nd Test EVSS: Aug 17, 2023 @ 3:09PM CT, Has existing ITF
        - 2nd Test LH: N/A
        - 3rd Test EVSS: N/A
        - 3rd Test LH: 8/22/2023 @ 9:57AM CT (VERIFIED)
    - Mike Richard @Mike Richard
        - EVSS: Encountered issue, can't proceed
        - LH: Encountered same issue, 8/22/23 @ 1:33 PM CT, No existing Intent to File, Austin Texas (VERIFIED)
            - Noting that a successful POST was called, despite a 404 for GET
            - Post was verified in VBMS by Lighthouse
    - Rocio De Santiago @Rocio De Santiago - Coforma
        - EVSS: N/A
        - LH: Aug 22, 12:34PM CST, Has existing ITF, St Louis, MO (VERIFIED)
        - Feedback: The prod was wrong, it's supposed to be `va.gov/disability/file-disability-claim-form-21-526ez/start`
        - Feedback: The app ID only showed up after answering more questions and it showed up at the bottom instead of under the header
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
- [x] Ensure at least one user covers the "legacy" case (EVSS generated ITF, LH checked)
- [x] Set Flipper active for identified internal production users ([Flipper Dashboard](https://api.va.gov/flipper/features))
- [x] Ensure qualitatively that the feature works as intended for users
- [x] Ensure that the user activity is noticed and captured in the DataDog dashboard
- [x] Coordinate with Lighthouse point of contact to ensure activity is captured on their end
- Monitor Sentry and DataDog logs for any anomalies, record below, link to any tickets created to address
    - Note any anomalies here:
        - 8/17: Discrepancy between LH monitoring (no activity) and our Dashboard. Additionally, activity picked up on our dashboard did not match the expected use case
            - Our activity picked up submit calls for `form_0966`, while related to ITF, is not necessary to monitor
            - Determined that v1 controller is not helpful to monitor, dashboard updated
        - 8/17: Veteran encounters "We need more information for your application" issue
            - Communicated that this is being investigated, long-term fix in progress
            - Informed Veteran to use the helpdesk number listed in the issue message as a short-term fix
        - 8/18: Confirmed via second test that ITF calls are still going to EVSS, despite feature flag
            - Confirmed flag works when set for all users in staging, however still cannot set for a single user in staging
            - Posted an inquiry in #vfs-evss-service-migration on how other teams set this up
            - Issue caused by a missing `current_user` in our Flipper flag call. Fix PR merged 08/21

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
- Date Started: 8/23
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov--team/62957
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 0.5%
#### Results:  
- Anomalies
    - 8/24: Traffic increased to 1% due to needing more cases to observe
    - 8/24: Noted discrepancy between LH 404s and POSTs called
        - Normal behavior, the GET went to EVSS while the POST was called through LH
    - 8/25: Noted 404s on the LH side that were not duplicated on the v0 side
        - Confirmed that the 404 was captured on both sides, but simply did not show up in the v0/EVSS graph, investigating why this might have happened
- Rollbacks:

<br>


### Stage B: Moderate ramp up
#### Planning  
- Date Started: 8/30
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/63660
- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  
- Anomalies:
- Rollbacks:

<br>


### Stage C: Another moderate ramp up
#### Planning
- Date Started: 9/5
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64555
- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  
- Anomalies:
- Rollbacks:

<br>


### Stage D: Final moderate ramp up
#### Planning  
- Date Started: 9/8
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64556
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results  
- Anomalies:
    - 9/11: Small jump in 500 errors, and small number of 401s noted Saturday evening (9/9). These affected both systems
        - Confirmed this was due to an outage: https://dsva.slack.com/archives/C04KW0B46N5/p1694455040993379?thread_ts=1694440762.541849&cid=C04KW0B46N5
        - LH looking into ways to monitor and address in the future
- Rollbacks:

<br>


### Stage E: High traffic
#### Planning
- Date Started: 9/18
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64589
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- Anomalies
- Rollbacks:

<br>


### Stage F: Go Live!
- Date Started: 10/2
- Percentage of Users (and roughly how many users do you expect this to be): 100% 
#### Results  
- Anomalies:
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
