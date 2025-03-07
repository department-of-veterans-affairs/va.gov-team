# Release Plan: Accredited Representative Portal - Manage POA Requests v0


### Development

Feature Toggle:
We will whitelist Connecticut Veteran Affairs (DVA) representatives so they can gain access to the Accredited Rep Portal. This will control visibility of the portal overall.

#### Go/No Go meeting March 10, 2025
- [ ] Test the v0 flow in Production
- [ ] Review the release plan
- [ ] Determine a verdict

**Verdict:TBD**

#### Technical Preparation
- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
- [ ] Unit tests and E2E tests are complete
- [ ] QA by ARF team
- [ ] Any lingering issues that are needed to address prior to rollout?
- [ ] Whitelist email addresses for Connecticut Department of Veterans Affairs
- [ ] Completion of end to end testing

#### Platform Preparation
- [ ] All "launch blocking" items from Staging Review have been addressed
- [ ] All "should fix" items from QA have been addressed
- [ ] Privacy, Security, IA Readiness Review is complete

#### Launch Preparation
- [ ] Onboarding docs has been reviewed for accuracy and approved by stakeholders
- [ ] Conduct CT participant orientation
- [ ] Notifying stakeholders of launch
    - VBA - Martin Caraway and Kevin Schneider
    - VEO - Melissa Rebstock and Laurie Baker
    - GCLAWS - Randy Trexler
    - VES - Lisa K
    - OGC - Charlotte Price, Christa Shriber, Nate Kroes, and Jonathan Taylor






***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Remove pilot participants emails' from the whitelist
   1. Submit a PR
2. Alert the team in [#benefits-representative-facing](https://dsva.slack.com/archives/C05SUUM4GAW) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates (@benefits-arf-core, @benefits-arm-enablement)
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***

## Rollout Details

- Rollout date: March 11, 2025
- Limited production access will be controlled whitelisting email addresses of pilot participants
- Errors will be tracked in Datadog and will trigger a Slack alert to our team channel #benefits-representative-facing-notifications, to initiate our rollback process (detailed above)
- Veterans will be able to see CT participants and submit Form 21-22 digitally

*** 

### Staged Rollout Metrics

The following metrics will be considered before advancing rollout to the next pilot participant group:

1. Errors in Datadog
2. Google Analytics traffic to Manage POA Requests v0
3. Test with a user in Production to confirm the experience functioning as expected

### Stage A Results 

1. Errors in Datadog: 
2.  
3. 

## Post Launch Metrics

_Link to Datadog dashboards TBD_

1. [Traffic for all Accredited Rep Portal pages]( )
2. [User Engagement]( ) (segmented by accredited rep users vs. all users of VA.gov)
3. [Event Tracking]( )

### 1-Week Results (3/11-3/20)

1. **Errors in Datadog**: 
2. **Support emails**: 
3. **Feedback survey submmissions**: 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** 

**Landing Page and Product Page Traffic:**

**User Engagement:**

**Event Tracking:**

### 1-Month Results

1. **Errors in Datadog**: 
2. **Support emails**: 
3. **Feedback survey submmissions**: 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** 

**Landing Page and Product Page Traffic:**
    
**User Engagement:**

**Event Tracking:**


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?**
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?** 
