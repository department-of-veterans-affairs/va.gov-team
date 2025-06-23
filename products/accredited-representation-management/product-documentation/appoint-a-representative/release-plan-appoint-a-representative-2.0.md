# Release Plan: Appoint a Representative 2.0 (Online Submission)

Feature Toggle/flag:
`appoint_a_representative_enable_v2_features` will be disabled prior to staged rollout and will be enabled as part of the 2.0 rollout. 

This feature toggle is setup for authenticated users and we can also enable early access in Production to individual users, via email address.

#### Go/No Go Meeting
- [x] Test the 2.0 flow in Production
- [x] Review the release plan
- [x] Determine a verdict

On March 14, 2025 we had a Go/No Go call with ARF and Lighthouse to test the flow in Production. The following issues were found:
1. Limitations on medical authorizations are not apperaing correctly in ARP (https://github.com/department-of-veterans-affairs/va.gov-team/issues/104435). **LAUNCH BLOCKING**
2. The Confirmation and Decline email notifications are not being sent in Production (https://github.com/department-of-veterans-affairs/va.gov-team/issues/105296).
3. The Accept email notification was not sent in Production (Lighthouse is working to resolve).
4. The POA request moved to established, but was still appearing as pending in ARP due to the email failure (Lighthouse is working to resolve).

The team is awaiting the medical authorization fix to deploy to Production before gathering again for another Go/No Go Production test.

On March 24, 2025 we had a second Go/No Go call with ARF and Lighthouse to retest the flow in Production. The issues found above have all been resolved and the team has agreed to "Go", after ARF confirms with the Connecticut Department of Veterans Affiars (the first VSO to accept online submission).

**Verdict: Ready to release on March 25, 2025**

# Staged Rollout Details

- Limited production access to the v2 features of Appoint a Representative will be controlled through the frontend feature toggle `appoint_a_representative_enable_v2_features`
- Errors will be tracked in Datadog and will trigger a Slack alert to our team channel #benefits-representation-management-notifications, to initiate our rollback process (detailed below)

#### Platform Preparation
- [x] All "launch blocking" items from Staging Review have been addressed
- [x] All "Before release" items have been addressed
- [x] Contact Center Review is submitted 
- [x] Privacy, Security, IA Readiness Review is complete

#### Technical Preparation
The following will take place right before Staged Rollout:
- [x] Enable online submissions for Connecticut Department of Veterans Affairs in Production [#101542](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101542)
- [x] Enable Appoint v2 email notifications in VA Notify Production [#101050](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101050)
- [x] Email notification for POA acceptance is ready in Production (Confirm with Lighthouse)

#### Rollout date: March 25, 2025
1. Stage A: 100% of users on March 25, 2025 + implement Datadog monitoring in Production [#99975](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99975)

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `appoint_a_representative_enable_v2_features` 
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

## Post Launch Metrics

### 1-Week Results Post-Launch (March 25 - April 1, 2025)

Datadog Endpoint activity ([ARM: Appoint a Representative dashboard](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=true&refresh_mode=paused&from_ts=1742886000000&to_ts=1745856376191&live=false))

1. 1 online submission, but this was our Production test after turning this version on for all users.

Traffic to Appoint a Representative ([VA.gov Forms KPIs Domo Dashboard](https://va-gov.domo.com/page/447193050))

1. 3 users have seen the `/submission-method page`, a new page that was introduced as part of this 2.0 release.

### 1-Month Results Post Launch (March 25 - April 25, 2025)

Datadog Endpoint activity ([ARM: Appoint a Representative dashboard](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=true&refresh_mode=paused&from_ts=1742886000000&to_ts=1745856376191&live=false))

1. Online submissions: 5 
2. Errors in Datadog:0

Traffic to Appoint a Representative ([VA.gov Forms KPIs Domo Dashboard](https://va-gov.domo.com/page/447193050))

1. 11 users have seen the `/submission-method page`, a new page that was introduced as part of this 2.0 release.

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  The team is thinking about how to open up online submission to more organizations/representatives, to increase the online submission activity.

## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
   1. [Remove unnecessary Appoint MVP feature flags](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99680)
