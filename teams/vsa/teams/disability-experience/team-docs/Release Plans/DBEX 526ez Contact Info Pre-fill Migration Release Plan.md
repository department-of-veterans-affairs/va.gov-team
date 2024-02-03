# NOTE: THIS DOC IS NOT IN ITS FINAL FORM. PLEASE DISREGARD WHILE YOU SEE THIS NOTE!!!

# DBEX 526ez Contact Info Pre-fill Migration Release Plan

### NOTE:

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


## Overview Checklist
- Notes
- [x] Phase I: Internal Testing and Review
    - [x] Internal Testing and Review
    - [x] Pre-release Testing
    - [x] Review Cases
- [ ] Phase II: Staged Rollout
    - [ ] Canary
    - [ ] Stage A: 10%
    - [ ] Stage B: 50%
    - [ ] Stage C: Go live!
- [ ] Post-launch questions

## Notes
- Since this change is relatively low-risk (compared to previous migrations) AND because some aspects of monitoring depends on a larger sample size, the rollout will be staged in fewer/larger increments. Planning on 3 days for 10%, and 3 days for 50%, before moving to full deployment

- Potential Risks:
  - In the in-progress part, the prefill wouldn't be prefilled and we wouldn't know there's an error because it gets swallowed before that point. We could see this on our dashboard (we're tracking this one.) Users might not know something has failed. We'd have to look at our dashboard to see if there was a failure and what caused it. Data is our only mitigation right now. 

<br>

## Phase I: Internal Testing and Review

### Pre-release Testing
- [x] Complete pre-launch tasks: N/A
- [x] Create and execute a Testrail test plan
    - Pre-test link: https://dsvavsp.testrail.io/index.php?/cases/view/58765
    - Canary link: https://dsvavsp.testrail.io/index.php?/cases/view/58766
- [ ] Complete Review Case below

### Review Cases
- [x] Does the existing DataDog monitoring have sufficient coverage?
- [x] Have a successful TestRail test plan been executed?
- [ ] Has the team reviewed and timeboxed the release intervals?
- [ ] Have PO(s) been made aware and approved of the plan? 

### Canary
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/74216
- Links to dashboard showing "success criteria" metrics: [Benefits - DBex - EVSS-to-VAProfile: 526ez Contact Info Pre-fill](https://vagov.ddog-gov.com/dashboard/qv6-xpd-7xg/benefits---dbex---evss-to-vaprofile-526ez-contact-info-pre-fill?refresh_mode=weekly&view=spans&from_ts=1706515200000&to_ts=1706830979116&live=true)
- [ ] Identify internal users from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/team-veterans.md)
- List identified user emails/Slack handles (below list TBD):
    - Robin Garrison, @Robin Garrison
    - Rocio De Santiago @Rocio De Santiago - Coforma
- [ ] Schedule a meeting or asynchronous time for controlled testing, note the scheduled date and time(s) below (to verify activity in DataDog)
    - If opting for a meeting:
        - [ ] Note the date, start, and end time:
    - If opting for asynchronous time:
        - [ ] Note individual scheduled dates and times next to each identified user
        - [ ] Note testing steps
            - [ ] Make sure your testing steps include recording useful information and when to record them. At a minimum , this is usually:
                - Their current time, date, and timezone
                - Whether they have an existing submission, ITF, RDs, etc.
                - The city your browser is making the request from (useful for helping to identify them in qualitative logs)
                - An example recording step would be:
                    10. On the first `/veteran-information` screen, please note the current time and date
        - [ ] Record testing steps in TestRail
        - [ ] Share testing steps with each user
- [ ] Ensure that at least a portion of users can run through testing steps before setting Flipper active
- [ ] ?Ensure at least one user covers the "legacy" case (NOTE: Ideally, I want to run them all through the before and after the switch is on. But if asynchronous testing is all I can get, then ON only it is...)
- [ ] Set Flipper active for identified internal production users ([Flipper Dashboard](https://api.va.gov/flipper/features))
- [ ] Ensure qualitatively that the feature works as intended for users
- [ ] Ensure that the user activity is noticed and captured in the DataDog dashboard
- [ ] 👉 **If any of the phone, email or mailing address info was present for the OFF case, but missing for the ON case, then STOP. Investigate this before proceeding any further!**
- Monitor Sentry and DataDog logs for any anomalies, record below, link to any tickets created to address
    - Note any anomalies here:


<br>

## Phase II - Staged Rollout (also known as unmoderated production testing)
### Metrics
How will you make the product available in production while limiting the number of users who can find/access it: [Flipper Dashboard](https://api.va.gov/flipper/features)
<br>
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- Ensure [Sentry](http://sentry.vfs.va.gov/organizations/vsp/dashboard/7/?environment=production) errors remain constant across batches
- Monitor DataDog for any potential issues
- Monitor for new Call Center complaints (#vsp-contact-center-support)
- Monitor logs for any qualitative anomalies
- Monitor latency

Links to dashboard(s) showing "success criteria" metrics: [Benefits - DBex - EVSS-to-VAProfile: 526ez Contact Info Pre-fill](https://vagov.ddog-gov.com/dashboard/qv6-xpd-7xg/benefits---dbex---evss-to-vaprofile-526ez-contact-info-pre-fill?refresh_mode=weekly&view=spans&from_ts=1706515200000&to_ts=1706830979116&live=true)
- Ensure the ALL lines generally line up between the Flag OFF vs. Flag ON graph for a given day of the week and time of day
- Ensure the percentage distributions for missing phone, email and mailing address information between the OFF and ON graphs generally match up for a given timeframe
    - In a perfect world, the percentages should not vary much at all between OFF and ON.
    - However, since we are effectively removing a supplemental source, chances are pretty good that these percentages will go UP to some degree
    - Therefore, we must agree upon an "acceptable percentage increase" for these missing data. Below are the current rates in production (column 1) and the threshold values currently set in the dashboard for each (column 2). If any of these exceed the "ACCEPTABLE" limit, their corresponding widget on the dashboard will turn red.


        |                |CURRENT % missing over 1 wk    |ACCEPTABLE % limit           |
        |----------------|-------------------------------|-----------------------------|
        |primary phone   | 12.52%                        | 15%                         |
        |email address   | 8.67%                         | 10%                         |
        |mailing address | .053%                         | .5%                         |

#### Rollback
- Rollback if any of the following is encountered
    - Qualitative anomalies that affect a significant number of users
    - Any new severe or widespread errors identified
    - High volume of 500 errors
    - High volume of Call Center complaints
    - Abnormally high latency
    - Traffic metrics deviate abnormally from the Flipper allotment
- In most cases, a face-value assessment and follow-up ticket should be created
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
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/75270
- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 10%
#### Results:  
- Anomalies
- Rollbacks:
    -       Rollback reason: 
            Date: 
            Severity/Impact: 
            Ticket(s) created to address:
            - [ ] Has the issue been resolved?
            - 

<br>


### Stage B: Moderate ramp up
#### Planning  
- Date Started:
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/75271
- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results:  
- Anomalies:
- Rollbacks:


<br>


### Stage C: Go Live!
- Date Started: 
- Percentage of Users (and roughly how many users do you expect this to be): 100%
- ZH Tracking: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/75272
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
