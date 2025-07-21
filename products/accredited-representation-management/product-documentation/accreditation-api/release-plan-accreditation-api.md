# Release Plan: Accreditation API Integration

Feature Toggle/flag:
`find_a_representative_use_accredited_models` will be disabled prior to staged rollout and will be enabled as part of the rollout. 

#### Preparing for Release
- [ ] The integration has been sufficiently tested in Staging
- [ ] Privacy, Security, IA Readiness Review is completed/closed - https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/4234

#### Go/No Go Meeting TBD
- [ ] Review the release plan
- [ ] Address any open questions or concerns 
- [ ] Determine a verdict

**Verdict:TBD**

# Staged Rollout Details

#### Rollout dates: May 22 - June 2, 2025
1. Stage A: 25% of users - TBD
2. Stage B: 50% of users - TBD
4. Stage C: 100% of users - TBD

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the feature toggle `find_a_representative_use_accredited_models` 
   1. Submit a PR
2. Alert the team in [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates (@benefits-arm-core, @benefits-ar-enablement)
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***

## Staged Rollout Metrics
### Stage A


### Stage B 

## Post Launch Metrics

### 1-Week Results Post-Launch (June 2-9, 2025)


### 1-Month Results Post Launch (June 2 - July 2, 2025)
