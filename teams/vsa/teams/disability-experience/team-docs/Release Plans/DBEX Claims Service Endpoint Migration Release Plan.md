
# DBEX Claims Service Endpoint Migration Release Plan

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
- [x] Phase I: Internal Testing and Review
    - [x] Internal Testing and Review
    - [x] Pre-release Testing
    - [x] Review Cases
    - [x] Canary
- [ ] Phase II: Staged Rollout 
    - [x] Stage A: 1%
    - [x] Stage B: 5%
    - [x] Stage C: 10%
    - [x] Stage D: 25%
    - [ ] Stage E: 50%
    - [ ] Stage F: Go live!
- [ ] Post-launch questions

## Notes
- We can differentiate traffic to EVSS/LH through Factory-level logs, in case controller activity is not usable 
- `app/models/concerns/form526_claim_fast_tracking_concern.rb` > flag is in `open_claims`
    - Makes a call to `BenefitsClaims::Service` `get_claims`
    - Claims controller exists: `modules/claims_api/app/controllers/claims_api/v2/veterans/claims_controller.rb`
    - Supposedly EVSS as well? `app/controllers/v0/evss_claims_controller.rb`
- Since other teams have completed migrations to LH for this API, sill expedite the early ramp-up of this rollout. Planning on 3 days for 1% and 5%, and then progerssing to 25% 

<br>

## Phase I: Internal Testing and Review

### Pre-release Testing
- [ ] Complete pre-launch tasks: N/A
- [ ] Request production credentials from Lighthouse via their production access form
- [ ] Complete manual testing with production credentials in Argo
- [ ] Push credentials to K8 manifest and devops repositories
- [ ] Create and execute a Testrail test plan
    - Link:
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
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/63007
- Links to dashboard showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: Intent to File](https://vagov.ddog-gov.com/dashboard/ipg-v6d-c59/benefits---dbex---evss-to-lh-intent-to-file?from_ts=1690907664207&to_ts=1690911264207&live=true)
    - Traffic is redirected to LH through the v0 (EVSS) controller
    - The expected behavior is that LH traffic should be **proportionate** to v0 traffic
    - v0 will act as a control as we progress through the rollout phases
- [ ] Identify internal users from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)
- List identified user emails/Slack handles:
    - Robin Garrison, @Robin Garrison
    - Mike Richard @Mike Richard
    - Rocio De Santiago @Rocio De Santiago - Coforma
- [ ] Schedule a meeting or asynchronous time for controlled testing, note the scheduled date and time(s) below (to verify activity in DataDog)
    - If opting for a meeting:
        - [ ] Note the date, start, and end time:
    - If opting for asynchronous time:
        - [ ] Note individual scheduled dates and times next to each identified user
        - [ ] Note testing steps:
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
        - [ ] Record testing steps in TestRail
        - [ ] Share testing steps with each user
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
- Date Started: 1/4/2024
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/71254
- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 1%
#### Results:  
- Anomalies
- Rollbacks:
    -       Rollback reason: Window of no traffic recorded, slightly higher overall error rate than expected based on EVSS side
            Date: 1/5/24
            Severity/Impact: Low
            Ticket(s) created to address:
            - [ ] Has the issue been resolved?

<br>


### Stage B: Moderate ramp up
#### Planning  
- Date Started: 1/12/24
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/63660
- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  
- Anomalies:
    - Noting a drop in activity on 1/14, checking if there was maintenance or an outage
    It appears that activity wasn't entirely blocked as a few requests made it through
- Rollbacks:

<br>


### Stage C: Another moderate ramp up
#### Planning
- Date Started: Skipped
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64555
- Length of time:
- Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  
- Anomalies:
- Rollbacks:

<br>


### Stage D: Final moderate ramp up
#### Planning  
- Date Started: 1/16/24
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64556
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results  
- Anomalies:
- Rollbacks:

<br>


### Stage E: High traffic
#### Planning
- Date Started: 1/25
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64589
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- Anomalies
- Rollbacks:

<br>


### Stage F: Go Live!
- Date Started: 1/29
- Percentage of Users (and roughly how many users do you expect this to be): 100% 
#### Results  
- Anomalies
- Rollbacks:
    -       Rollback reason: Sudden drop in activity on both sides of the migration over the weekend. No increase in error activity
            Date: 1/5/24
            Severity/Impact: Low
            Ticket(s) created to address:
            - [x] Has the issue been resolved?
                - Data appeared skewed due to the duplicate submission surge, no issues. Due to this rollback, a small amount of EVSS activity will appear on 2/5 until 12:48 pm ET

    -     Rollback reason: EE team request until the end of the week, also addressing some spikes in potential noise
            Date: 4/2/24
            Severity/Impact: Low
            Ticket(s) created to address:
            - [ ] Has the issue been resolved?

<br>


## Post-launch Questions  
To be completed once you have gathered your initial set of data, as outlined above.   
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. Were there any metrics that could be considered useful post-rollout for auomated alerts?
3. What qualitative feedback have you gathered from users or other stakeholders, if any?  
4. Which of the assumptions you listed in your product outline were/were not validated?  
5. How might your product evolve now or in the future based on these results? 
6. What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?
