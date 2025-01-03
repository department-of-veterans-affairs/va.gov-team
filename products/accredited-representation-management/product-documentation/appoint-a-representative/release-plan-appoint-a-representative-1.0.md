# Release Plan: Appoint a Representative 1.0 (MVP)


### Development

Feature Toggle/flag:
`appoint_a_representative_enable_frontend` will be disabled prior to staged rollout and will be enabled to an increasing % of users during the staged rollout. This will control visibility of both our Appoint a Representative product and it's related entry point on the CAIA landing page

### Validation

#### Platform Preparation
- [x] All "launch blocking" items from Staging Review have been addressed
- [ ] ~Contact Center Review is complete~ Ok to release without full Contact Center approval ([Slack reference](https://dsva.slack.com/archives/CNCEXNXK4/p1735929825732069?thread_ts=1735929310.311269&cid=CNCEXNXK4)).
- [ ] Privacy, Security, IA Readiness Review is complete

#### Content Preparation
- [x] The react widget has been added to the landing page
- [x] Entry points to our landing page are ready to be added to the "About VA Form" pages for the [21-22](https://www.va.gov/find-forms/about-form-21-22/) and [21-22a](https://www.va.gov/find-forms/about-form-21-22a) 

#### Technical Preparation
The following will take place right before Staged Rollout:
- [ ] Wrap the landing page react widget in the frontend feature toggle `appoint_a_representative_enable_frontend`
- [ ] Wrap the product in the frontend feature toggle `appoint_a_representative_enable_frontend` [#99874](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99874)
- [ ] Enable the application in Production [#99874](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99874)
- [ ] Enable backend feature flag `use_veteran_models_for_appoint` to use the legacy tables (since the Accreditation API is not yet available) [#96246](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96246)
- [ ] Enable backend feature flag `appoint_a_representative_enable_pdf` to allow for searching for representatives in Appoint, generating the PDF, and sending the email notification. [#96246](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96246)

Any uncovered issues or requirements that should be addressed prior to rollout?

#### Go/No Go meeting Friday January 3, 2025
- [ ] review the release plan with your team.
- [ ] review the plan with your OCTO representative.

**Verdict:🔮**

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `appoint_a_representative_enable_frontend` 
   1. Submit a PR
2. Alert the team in [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates (@benefits-arm-core, @benefits-arm-enablement, @benefits-arm-vba)
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***


## Staged Rollout Details
**Rollout date range: January 6-13, 2025**
- Limited production access to the Appoint a Representative application AND the related entry point on our landing page will be controlled through the frontend feature toggle `appoint_a_representative_enable_frontend`
- Errors will be tracked in Datadog and will trigger a Slack alert to our team channel #benefits-representation-management-notifications, to initiate our rollback process (detailed above)

## Staged Rollout Schedule
**Go/No Go meeting Friday January 3, 2025**
1. Stage A: 10% of users on 1/6 (Monday) + implement Datadog monitoring in Production [#92287](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92287)
2. Stage B: 50% of users on 1/8 (Wednesday)
3. Stage C: 100% of users on 1/13 (Monday) + launch best bets for an initial boost to visibility + publish entry points

*** 

### Staged Rollout Metrics

The following metrics will be considered before advancing rollout to the next stage:

1. Errors in Datadog

### Stage A Results (Jan 6-8, 2025)

1. Errors in Datadog
4. What changes (if any) need to be implemented before proceeding to the next rollout stage? nothing at this time, ready to move into Stage B

### Stage B Results (Jan 8-13, 2025)

1. Errors in Datadog
3. What changes (if any) need to be implemented before proceeding to the next rollout stage? nothing at this time, ready to move into Stage C

## Post Launch Metrics

_Link to DOMO dashboards TBD_

### 1-Week Results (Jan 13-19, 2025)

1. **Errors in Datadog**: 
12. **Contact Center calls (MyVA411)**: 
13. **Feedback survey submmissions (Medallia)**: 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** 

**OKRs:**


### 1-Month Results (Jan 13 - Feb 12, 2025)

1. **Errors in Datadog**: 
12. **Contact Center calls (MyVA411)**: 
13. **Feedback survey submmissions (Medallia)**: 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  

**OKRs:**


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?** 
