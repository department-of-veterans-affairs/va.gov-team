# Release Plan: Self-Service Authentication, ID.me

Feature Toggle/flag:
`accredited_representative_portal_id_me` will control visibility of the ID.me authentication method, for Accredited Representative Portal users. This will be disabled in Production prior to release. The following will be controlled through the feature toggle:
1. ID.me authentication option
2. ID.me mentions on the Help page

### Preparation
- [ ] All "launch blocking" items from Staging Review have been addressed - Our past Architecture Intent has been deemed sufficient and we are approved to skip Staging Review for this release ([Slack confirmation](https://dsva.slack.com/archives/C05SUUM4GAW/p1763569907879669?thread_ts=1761249327.341629&cid=C05SUUM4GAW)) 
- [x] Contact Center Review has been submitted
- [x] The following ID.me user scenarios have been tested
   - [x] Authenticated with ID.me, but not authorized (tested with vets.gov.user+133@gmail.com)
   - [x] Authenticated with ID.me and authorized (tested with vets.gov.user+0@gmail.com)

Any other issues or requirements that should be addressed prior to rollout?

### Go/No Go meeting 
Asynchronous Go/No Go on Wednesday, November 19 ([Slack thread](https://dsva.slack.com/archives/C05SUUM4GAW/p1763573743867439))

- [ ] review the release plan with your team.
- [ ] review the plan with your OCTO representative.

**Verdict:TBD**

## Release Details (November 20, 2025)

- [ ] Enable in Production to 100% of users
- [ ] Confirm the release to Production, with a test user
- [ ] Communicate release to ARP pilot users via Teams/Email, including Wounded Warrior Project (who expressed interest in ID.me)

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the feature toggle `accredited_representative_portal_id_me` 
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

## Post Launch Metrics

### 1-Week Results Post-Launch 

Datadog Endpoint activity 
1. 

### 1-Month Results Post Launch

Datadog Endpoint activity
1. 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  


## Post-Launch Questions

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
