
# DBEX PPIU/Direct Deposit Service Endpoint Migration Release Plan

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
    - [ ] Internal Testing and Review
    - [ ] Pre-release Testing
    - [ ] Review Cases
- [ ] Phase II: Staged Rollout
    - [ ] Canary
    - [ ] Stage A: 1%
    - [ ] Stage B: 5%
    - [ ] Stage C: 10%
    - [ ] Stage D: 25%
    - [ ] Stage E: 50%
    - [ ] Stage F: Go live!
- [ ] Post-launch questions

## Notes

- Potential Risks:
  - If LH breaks or our implementation is wrong, the user might not be able to submit because the translate action happens on the controller side. We would see it right away because we'd see user feedback right away because they wouldn't be able to submit. This is going to be part 2 of our dashboard (the #submit_all_claim dashboard would see that it's failed, and we could look to see if it's the direct_deposit call that's failing.) We'd see it right away because it's part of the foreground controller level rather than in a background job or prefill, etc. Mitigation would depend on the issue. Our only mitigation is our dashboards to see if a controller-level submission is failing. The code doesn't have any exception handling. 
  - In the in-progress part, the prefill wouldn't be prefilled and we wouldn't know there's an error because it gets swallowed before that point. We could see this on our dashboard (we're tracking this one.) Users might not know something has failed. We'd have to look at our dashboard to see if there was a failure and what caused it. Data is our only mitigation right now. 

TODO:
  - Create dashboard graph that shows submit_all_claim HTTP errors with PPIU failure log grouped by request id
<br>

## Phase I: Internal Testing and Review

### Pre-release Testing
- [x] Complete pre-launch tasks: N/A
- [x] Inform Lighthouse about increased traffic for the direct deposit endpoint
- [ ] Complete manual testing with production credentials in Argo and ensure that our provider and factory are working
- [ ] Confirm K8 manifest repository has references to correct environment variable paths in AWS Parameter Store (dsvagovcloud)
- [ ] Create and execute a Testrail test plan
    - Pre-test link: https://dsvavsp.testrail.io/index.php?/cases/view/52565
    - Canary link: https://dsvavsp.testrail.io/index.php?/cases/view/52579
- [ ] Complete Review Case below

### Review Cases
- [ ] Does the existing DataDog monitoring have sufficient coverage?
- [ ] Have a successful TestRail test plan been executed?
- [ ] Do we have a point of contact on LH to coordinate with?
- [ ] Has the team reviewed and timeboxed the release intervals?
- [ ] Have PO(s) been made aware and approved of the plan? 

### Canary
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/69391
- Links to dashboard showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: PPIU/Direct Deposit](https://vagov.ddog-gov.com/dashboard/pfj-tf3-mb4?refresh_mode=sliding&from_ts=1700158863442&to_ts=1700162463442&live=true)
- [ ] Identify internal users from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)
- List identified user emails/Slack handles (below list TBD):
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
- Ensure [Sentry](http://sentry.vfs.va.gov/organizations/vsp/dashboard/7/?environment=production) errors remain constant across batches
- Monitor DataDog for any potential issues
- Monitor for new Call Center complaints (#vsp-contact-center-support)
- Monitor logs for any qualitative anomalies
- Monitor latency

Links to dashboard(s) showing "success criteria" metrics: [Benefits DBex EVSS-to-LH: PPIU/Direct Deposit](https://vagov.ddog-gov.com/dashboard/pfj-tf3-mb4?refresh_mode=sliding&from_ts=1700158863442&to_ts=1700162463442&live=true)

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
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 0.5%
#### Results:  
- Anomalies
- Rollbacks:

<br>


### Stage B: Moderate ramp up
#### Planning  
- Date Started:
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/63660
- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  
- Anomalies:
- Rollbacks:

<br>


### Stage C: Another moderate ramp up
#### Planning
- Date Started:
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64555
- Length of time:
- Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  
- Anomalies:
- Rollbacks:

<br>


### Stage D: Final moderate ramp up
#### Planning  
- Date Started:
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64556
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results  
- Anomalies:
- Rollbacks:

<br>


### Stage E: High traffic
#### Planning
- Date Started:
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/64589
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
2. What qualitative feedback have you gathered from users or other stakeholders, if any?  
3. Which of the assumptions you listed in your product outline were/were not validated?  
4. How might your product evolve now or in the future based on these results? 
5. What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?
