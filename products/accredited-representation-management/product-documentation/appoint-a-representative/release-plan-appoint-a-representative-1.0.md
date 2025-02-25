# Release Plan: Appoint a Representative 1.0 (MVP)


### Development

Feature Toggle/flag:
`appoint_a_representative_enable_frontend` will be disabled prior to staged rollout and will be enabled to an increasing % of users during the staged rollout. This will control visibility of both our Appoint a Representative product and it's related entry point on the CAIA landing page

### Validation

#### Platform Preparation
- [x] All "launch blocking" items from Staging Review have been addressed
- [x] All "should fix" items from QA have been addressed
- [ ] ~Contact Center Review is complete~ Ok to release without full Contact Center approval ([Slack reference](https://dsva.slack.com/archives/CNCEXNXK4/p1735929825732069?thread_ts=1735929310.311269&cid=CNCEXNXK4)).
- [x] Privacy, Security, IA Readiness Review is complete

#### Content Preparation
- [x] The react widget has been added to the landing page
- [x] Entry points to our landing page are ready to be added to the "About VA Form" pages for the [21-22](https://www.va.gov/find-forms/about-form-21-22/) and [21-22a](https://www.va.gov/find-forms/about-form-21-22a) 

#### Technical Preparation
The following will take place right before Staged Rollout:
- [x] Wrap the landing page react widget in the frontend feature toggle `appoint_a_representative_enable_frontend`
- [x] Wrap the product in the frontend feature toggle `appoint_a_representative_enable_frontend` [#99874](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99874)
- [x] Enable the application in Production [#99874](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99874)
- [x] Enable backend feature flag `use_veteran_models_for_appoint` to use the legacy tables (since the Accreditation API is not yet available) [#96246](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96246)
- [x] Enable backend feature flag `appoint_a_representative_enable_pdf` to allow for searching for representatives in Appoint, generating the PDF, and sending the email notification. [#96246](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96246)

Any uncovered issues or requirements that should be addressed prior to rollout?

#### Go/No Go meeting Friday January 3, 2025
- [x] review the release plan with your team.
- [x] review the plan with your OCTO representative.

**Verdict:Conditional Go**
- We will be ready to enter Stage A (5%) when most remaining issues in Sprint 11 are completed.
- We will be ready to enter Stage B (50%) after significant open issues are resolved.

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
**Rollout date range: January 6-23, 2025**
- Limited production access to the Appoint a Representative application AND the related entry point on our landing page will be controlled through the frontend feature toggle `appoint_a_representative_enable_frontend`
- Errors will be tracked in Datadog and will trigger a Slack alert to our team channel #benefits-representation-management-notifications, to initiate our rollback process (detailed above)
- For every 10% of users, we expect roughly 70 sessions per day.

## Staged Rollout Schedule
**Go/No Go meeting Friday January 3, 2025**
1. Stage A: 5% of users on 1/8 (Wednesday) + implement Datadog monitoring in Production [#92287](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92287)
2. Stage B: 50% of users on 1/13 (Monday)
3. Stage C: 100% of users on 1/23 (Thursday) + launch best bets for an initial boost to visibility + publish entry points

*** 

### Staged Rollout Metrics

The following will be considered before advancing rollout to the next stage:

1. Errors in Datadog
2. Google Analytics traffic to Appoint a Representative
3. Test with a user in Production to confirm the experience functioning as expected

### Stage A Results (Jan 8-13, 2025)

Errors in Datadog ([representation-management dashboard](https://vagov.ddog-gov.com/apm/entity/service%3Arepresentation-management?compareVersionEnd=0&compareVersionPaused=false&compareVersionStart=0&dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&errors=qson%3A%28data%3A%28issueSort%3AFIRST_SEEN%29%2Cversion%3A%210%29&fromUser=false&groupMapByOperation=null&logs=qson%3A%28data%3A%28indexes%3A%5B%5D%29%2Cversion%3A%210%29&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1736351702936&end=1736366102936&paused=false))
1. 0 errors with our endpoints

Google Analytics traffic to Appoint a Representative ([GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw))
1. 61 sessions to /appoint-rep/introduction (29 referred from our landing page, 8 referred from Bing)
2. 10 sessions to /appoint-rep/confirmation aka the Download page
3. 9 sessions to /appoint-rep/next-steps

What changes (if any) need to be implemented before proceeding to the next rollout stage?
1. [Add Organization address validation to Trexler File process job](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96247)
2. [Datadog Monitoring | Appoint a Representative MVP](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92287)
3. [VA Notify email confirmation is not being sent](https://github.com/department-of-veterans-affairs/va.gov-team/issues/100645)
4. [2122 PDF generation is checking consent limit boxes when the user says allow everything](https://github.com/department-of-veterans-affairs/va.gov-team/issues/100739)
5. [Medical authorizations not updating when selecting "some" then correcting to "all"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/100627)

### Stage B Results (Jan 13-23, 2025)

Datadog Endpoint activity ([representation-management dashboard](https://vagov.ddog-gov.com/apm/entity/service%3Arepresentation-management?compareVersionEnd=0&compareVersionPaused=false&compareVersionStart=0&dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&errors=qson%3A%28data%3A%28issueSort%3AFIRST_SEEN%29%2Cversion%3A%210%29&fromUser=false&groupMapByOperation=null&logs=qson%3A%28data%3A%28indexes%3A%5B%5D%29%2Cversion%3A%210%29&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&traces=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&start=1736351702936&end=1736366102936&paused=false))
1. 277 requests to our endpoint for returning representatives in search results
3. 98 requests to our endpoint for 21-22 PDF generation
4. 25 requests to our endpoint for 21-22a PDF generation
   1. 20 errors
6. 73 requests to our endpoint for sending the "Next Steps" email notification

Google Analytics traffic to Appoint a Representative ([GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw))
1. 605 sessions to /appoint-rep/introduction (majority referred from our landing page)
2. 237 sessions to /appoint-rep/representative-select
3. 98 sessions to /appoint-rep/representative-contact
4. 70 sessions to /appoint-rep/confirmation aka the Download page
5. 70 sessions to /appoint-rep/next-steps

What changes (if any) need to be implemented before proceeding to the next rollout stage?
1. [Missing rep phone number causes 21-22a PDF generation error](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101149)
2. [Organizations in Appoint rep search (Production) do not match OGC's accreditation site](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101221)

## Post Launch Metrics

### 1-Week Results Post-Launch (Jan 23-30, 2025)

Datadog Endpoint activity ([Appoint a Representative Datadog dashboard](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=true&refresh_mode=monthly&from_ts=1735718400000&to_ts=1737609578840&live=true))
1. 0 errors
2. 554 requests to our endpoint for returning representatives in search results
3. 243 requests to our endpoint for 21-22 PDF generation
4. 14 requests to our endpoint for 21-22a PDF generation
6. 157 requests to our endpoint for sending the "Next Steps" email notification

Google Analytics traffic to Appoint a Representative ([GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw))
1. 1,158 sessions to /appoint-rep/introduction (majority referred from our landing page, but there is also some traffic from the "About VA Form" pages)
2. 480 sessions to /appoint-rep/representative-select
3. 226 sessions to /appoint-rep/representative-contact
4. 165 sessions to /appoint-rep/confirmation aka the Download page
5. 138 sessions to /appoint-rep/next-steps

### 1-Month Results Post Launch (Jan 23 - Feb 23, 2025)

Datadog Endpoint activity ([Appoint a Representative Datadog dashboard](https://vagov.ddog-gov.com/dashboard/iiz-nnm-2em/arm-appoint-a-representative?fromUser=true&refresh_mode=monthly&from_ts=1735718400000&to_ts=1737609578840&live=true))
1. 0 errors
2. 2k requests to our endpoint for returning representatives in search results
3. 895 requests to our endpoint for 21-22 PDF generation
4. 66 requests to our endpoint for 21-22a PDF generation
6. 660 requests to our endpoint for sending the "Next Steps" email notification

Google Analytics traffic to Appoint a Representative ([GA4 explore report](https://analytics.google.com/analytics/web/?pli=1#/analysis/p419143770/edit/s8Td-mYMQoKwisXggjlrqw))
1. 4,592 sessions to /appoint-rep/introduction (majority referred from our landing page, but there is also some traffic from the "About VA Form" pages)
2. 1,936 sessions to /appoint-rep/representative-select
3. 934 sessions to /appoint-rep/representative-contact
4. 683 sessions to /appoint-rep/confirmation aka the Download page
5. 598 sessions to /appoint-rep/next-steps

Contact Center calls (MyVA411): None

Feedback survey submmissions (Medallia): General VA frustration or searching for a representative. There was one Appoint-specific comment, indicating the user was looking to submit their 21-22 online but could not.

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  
Already emerging from research, as well as the Feedback survey submission: rethink how to inform users when the path ends in PDF generation (not online submission).

## Post-Launch Questions

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?**
   1. [Remove unnecessary Appoint MVP feature flags](https://github.com/department-of-veterans-affairs/va.gov-team/issues/99680)
