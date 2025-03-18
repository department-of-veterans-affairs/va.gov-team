# Release Plan: Appoint a Representative 2.0 (digital submission pilot)

Feature Toggle/flag:
`appoint_a_representative_enable_v2_features` will be disabled prior to staged rollout and will be enabled as part of the 2.0 rollout. 

This feature toggle is setup for authenticated users and we can also enable early access in Production to individual users, via email address.

#### Go/No Go Meeting
- [x] Test the 2.0 flow in Production
- [x] Review the release plan
- [ ] Determine a verdict

On March 14, 2025 we had a Go/No Go call with ARF and Lighthouse to test the flow in Production. The following issues were found:
1. Limitations on medical authorizations are not apperaing correctly in ARP (https://github.com/department-of-veterans-affairs/va.gov-team/issues/104435). **LAUNCH BLOCKING**
2. The Confirmation and Decline email notifications are not being sent in Production (https://github.com/department-of-veterans-affairs/va.gov-team/issues/105296).
3. The Accept email notification was not sent in Production (Lighthouse is working to resolve).
4. The POA request moved to established, but was still appearing as pending in ARP due to the email failure (Lighthouse is working to resolve).

The team is awaiting the medical authorization fix to deploy to Production before gathering again for another Go/No Go Production test.

**Verdict:TBD**

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
- [x] Enable digital submissions for Connecticut Department of Veterans Affairs in Production [#101542](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101542)
- [x] Enable Appoint v2 email notifications in VA Notify Production [#101050](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101050)
- [x] Email notification for POA acceptance is ready in Production (Confirm with Lighthouse)

#### Rollout date: March 18, 2025 @ 1pm ET
1. Stage A: 100% of users on March 11 (Tuesday) + implement Datadog monitoring in Production [#99975](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99975)

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

### Staged Rollout Metrics

The following will be considered before advancing rollout to the next stage:

1. Errors in Datadog
2. Google Analytics traffic to Appoint a Representative
3. Test with a user in Production to confirm the experience functioning as expected

### Stage A Results (TBD)

Errors in Datadog ([representation-management dashboard](https://vagov.ddog-gov.com/apm/entity/service%3Arepresentation-management?compareVersionEnd=0&compareVersionPaused=false&compareVersionStart=0&dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&errors=qson%3A%28data%3A%28issueSort%3AFIRST_SEEN%29%2Cversion%3A%210%29&fromUser=false&groupMapByOperation=null&logs=qson%3A%28data%3A%28indexes%3A%5B%5D%29%2Cversion%3A%210%29&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1736351702936&end=1736366102936&paused=false))

1. 

Google Analytics traffic to Appoint a Representative ([GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw))

1. 

How did testing in Production go?

## Post Launch Metrics

### 1-Week Results Post-Launch (TBD)

Datadog Endpoint activity ([representation-management dashboard](https://vagov.ddog-gov.com/apm/entity/service%3Arepresentation-management?compareVersionEnd=0&compareVersionPaused=false&compareVersionStart=0&dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&errors=qson%3A%28data%3A%28issueSort%3AFIRST_SEEN%29%2Cversion%3A%210%29&fromUser=false&groupMapByOperation=null&logs=qson%3A%28data%3A%28indexes%3A%5B%5D%29%2Cversion%3A%210%29&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1736351702936&end=1736366102936&paused=false))

1. 

Google Analytics traffic to Appoint a Representative ([GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw))

1. 

### 1-Month Results Post Launch (TBD)

1. Errors in Datadog:
2. Google Analytics traffic to Appoint a Representative
12. Contact Center calls (MyVA411): 
13. Feedback survey submmissions (Medallia): 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  

**OKRs:**


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
   1. [Remove unnecessary Appoint MVP feature flags](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99680)
