# Release Plan: Self-Service Authentication, ID.me

### Development

Feature Toggle/flag:
`TBD` will be disabled in Production prior to staged rollout and will be enabled to an increasing % of users in Production during the staged rollout. This will control visibility of the ID.me authentication method, for Accredited Representative Portal users.

### Validation

#### Platform Preparation
- [x] All "launch blocking" items from Staging Review have been addressed
- [x] All "should fix" items from QA have been addressed
- [ ] TBD

#### Technical Preparation
The following will take place right before Staged Rollout:
- [ ] TBD

#### VSO Engagement Preparation
- [ ] TBD - anything we need to do with reps?

Any uncovered issues or requirements that should be addressed prior to rollout?

#### Go/No Go meeting TBD
- [ ] review the release plan with your team.
- [ ] review the plan with your OCTO representative.
- [ ] isolated Production test? (TBD)

**Verdict:TBD**

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `TBD` 
   1. Submit a PR
2. Alert the team in [#benefits-accredited-rep-crew](https://dsva.slack.com/archives/C05SUUM4GAW) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***


## Staged Rollout Details
**Rollout date range: TBD**
- The following will be controlled through the frontend feature toggle `TBD`
   - ID.me authentication option
   - ID.me mentions on the Help page
- TBD: Errors will be tracked in Datadog and will trigger a Slack alert to our team channel TBD, to initiate our rollback process (detailed above)
- For every 10% of users, we expect roughly TBD sessions per day.

## Staged Rollout Schedule
**Go/No Go meeting TBD**
1. Stage A: 5% of users on TBD + implement Datadog monitoring in Production (Ticket TBD)
2. Stage B: 50% of users on TBD
3. Stage C: 100% of users TBD + announcement? TBD

*** 

### Staged Rollout Metrics

The following will be considered before advancing rollout to the next stage:

1. Errors in Datadog
2. Test with a user in Production to confirm the experience functioning as expected
3. Feedback from ARP users
4. TBD

### Stage A Results (Jan 8-13, 2025)

Errors in Datadog
1. 

What changes (if any) need to be implemented before proceeding to the next rollout stage?


### Stage B Results (Jan 13-23, 2025)

Datadog Endpoint activity 
1. 

What changes (if any) need to be implemented before proceeding to the next rollout stage?


## Post Launch Metrics

### 1-Week Results Post-Launch (Jan 23-30, 2025)

Datadog Endpoint activity 
1. 

### 1-Month Results Post Launch (Jan 23 - Feb 23, 2025)

Datadog Endpoint activity
1. 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  


## Post-Launch Questions

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
