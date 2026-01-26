# Release Plan: Intent to File

Feature Toggle/flag:
`accredited_representative_portal_intent_to_file` will control visibility of the Intent to File feature, for Accredited Representative Portal users. This will be disabled in Production prior to release.

### Preparation
- [x] Contact Center Review has been submitted
- [x] The following user flows have been tested
   - Successful ITF submission
      -    [x] Veteran pathway
      -    [x] non-Veteran pathway
   -  Various ITF statuses
      -    [x] User does not have POA for the claimant
      -    [x] Existing ITF is found
      -    [x] Can't check ITF status
   - [x] Failed Submission
- [x] Any "launch blocking" findings from Team QA have been addressed.
- [x] The feature flag `accredited_representative_portal_skip_itf_check`has been set to `Off` to ensure the experience is checking for exsiting ITFs.
- [x] Datadog monitoring is set up to track submission attempts, successes and errors.

Any other issues or requirements that should be addressed prior to rollout?

### Go/No Go meeting on January 21, 2026
Synchronous Go/No Go (Placeholder)

- [x] review the release plan with your team.
- [x] review the plan with your OCTO representative.
- [x] Finalize the release date

**Verdict: Go**

## Release Details (January 26, 2026)

- [x] Enable in Production to 100% of users
- [x] Confirm the release to Production, with a test user
- [x] Communicate release to ARP pilot users via Teams/Email

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the feature toggle `accredited_representative_portal_intent_to_file` 
   1. Submit a PR
2. Alert the team in [#benefits-accredited-rep-crew](https://dsva.slack.com/archives/C05SUUM4GAW) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates
3. Create a ticket to document ( [Ref.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems#instructions-for-creating-a-new-postmortem) for current Postmortem process):
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***

## Post Launch Metrics

### 1-Week Results Post-Launch 


### 1-Month Results Post Launch

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  


## Post-Launch Questions

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
