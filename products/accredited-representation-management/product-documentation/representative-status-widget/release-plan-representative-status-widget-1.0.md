# Release Plan: Representative Status Widget 1.0

#### Platform Preparation
- [x] Are all Collaboration Cycle touchpoints complete?

#### Technical Preparation
- [x] Internal team QA
- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
- [x] Unit tests and E2E tests are complete
- [x] Launch-blocking issues from Staging Review are resolved
- [ ] Any other issues that are needed to address prior to rollout? - not launch-blocking, but would like to setup [Datadog monitoring for the POA endpoint](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82963)

#### Go/No Go meeting 5/13 at 1:35p ET
- [x] Review the release plan with the core team, VA enablement, and VBA stakeholders
- [x] Decide Go or No Go

**Verdict: Go**

***

## Staged Rollout Details

- Rollout date range: 5/13-5/20
- Feature Toggle: `representative_status_enabled` will be disabled in Production prior to staged rollout and will be enabled to an increasing % of users during the rollout. This will control visibility of the Representative Status Widget on our [Find a Representative page](https://www.va.gov/get-help-from-accredited-representative/find-rep/).
- Errors will be tracked in Sentry and Datadog, and will trigger a Slack alert to our team channel #benefits-representation-management-notifications, to initiate our rollback process (detailed above)


## Staged Rollout Schedule
**Go/No Go meeting 5/13 at 1:35p ET**
1. Stage A: 10% of users on 5/13 (Monday)
2. Stage B: 50% of users on 5/15 (Wednesday)
3. Stage C: 100% of users on 5/20 (Monday)
4. Stage D: Add the Representative Status Widget to the [Accredited Rep landing page](https://www.va.gov/get-help-from-accredited-representative/)

*** 

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `representative_status_enabled`
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

The following metrics will be considered before advancing rollout to the next stage:

1. Errors in Sentry
2. Errors in Datadog

#### Stage A Results (5/13-5/15) - 10% of users

1. **Errors in Sentry**: None
2. **Errors in Datadog**: None
3. **What changes (if any) need to be implemented before proceeding to the next rollout stage?**
   1. There was an environment check preventing the Widget from displaying in Production.  This was removed and after remaining at 10% for a bit, we're ready to bump to 50%.
   2. Set up a warning notification due to 7 non-200 responses in the last 4 hours. 15 or above will trigger an alert notification.  All notifications routed to Slack channel #benefits-representation-management-notifications.

#### Stage B Results (5/15-5/20) - 50% of users

1. **Errors in Sentry**: None
2. **Errors in Datadog**: Some 404 and 422 errors from the backend, staying close with Lighthouse.
3. **What changes (if any) need to be implemented before proceeding to the next rollout stage?** None.

## Post Launch Metrics

_Link to DOMO dashboards TBD_

1. [Traffic for all Find a Rep pages](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240310&_u.date01=20240319&explorer-table.plotKeys=%5B%5D&explorer-table.filter=get-help-from-accredited-representative/)
2. [Traffic for just the search experience of Find a Rep](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240311&_u.date01=20240318&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22BW%22,%22www.va.gov~2Fget-help-from-accredited-representative~2Ffind-rep~2F%3F%22,0%5D%5D/) (only post-search URLs)
3. [User engagement](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p176188361/_u.date00=20240312&_u.date01=20240318&_.useg=user0ChHUWxaSUWm-5ocHKwm0Q,user_5CvEnKiSOmYYMHT8kTpQQ,builtin1&overview-dimensionSummary.selectedGroup=system&overview-dimensionSummary.selectedDimension=analytics.browser/) (segmented by Find a Rep users vs. all users of VA.gov)
4. [Event Tracking](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20240311&_u.date01=20240413&_.useg=&_r.drilldown=analytics.pagePath:www.va.gov~2Fget-help-from-accredited-representative~2Ffind-rep~2F,analytics.eventCategory:Interactions&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-graphOptions.selected=analytics.nthDay/)

### 1-Day Results (5/21)

**Statuses from [Datadog](https://vagov.ddog-gov.com/logs?query=%40payload.controller%3A%22RepresentationManagement%3A%3AV0%3A%3APowerOfAttorneyController%22&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1716302570635&to_ts=1716316970635&live=true)**:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/eaa14cc1-3d8e-4043-879d-984ae73d2bf8)

**Statuses from Lighthouse**:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/608c75bf-e0b9-4639-b20a-9911cbfffba8)

### 1-Week Results (5/20-5/27)

**Statuses from [Datadog](https://vagov.ddog-gov.com/logs?query=%40payload.controller%3A%22RepresentationManagement%3A%3AV0%3A%3APowerOfAttorneyController%22&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1716302570635&to_ts=1716316970635&live=true)**:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/e8f38e79-38a4-45e0-aa08-2da3cc9a79b5)

**Statuses from Lighthouse**:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/594b20c7-a3dd-4edc-91a9-2ee26db6109e)

**Contact Center calls (MyVA411)**: None

**Feedback survey submmissions (Medallia)**:  
- Out of [12,661 users interacting with the landing page](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p176188361/_u.date00=20240520&_u.date01=20240527&_.useg=user0ChHUWxaSUWm-5ocHKwm0Q,user_5CvEnKiSOmYYMHT8kTpQQ,builtin1&overview-dimensionSummary.selectedGroup=system&overview-dimensionSummary.selectedDimension=analytics.browser/), there were 2 survey submissions:
   - 1 indicated they were able to do their task.
   - 1 left a response "The screen changed to the survey so fast" that seems unrelated to our product.  This was accompanied by a 4 rating of the VA.gov experience.
- Out of [5,900 users interacting with the Find a Representative page](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p176188361/_u.date00=20240520&_u.date01=20240527&_.useg=user0ChHUWxaSUWm-5ocHKwm0Q,user_5CvEnKiSOmYYMHT8kTpQQ,builtin1&overview-dimensionSummary.selectedGroup=system&overview-dimensionSummary.selectedDimension=analytics.browser/), there were 2 survey submissions:
   - 2 indicated they were unable to do their task with the comments:
      - "Find a vso for PAC. Web site not user friendly."
      - "disability benefits"

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** The team is looking into the scenarios behind the error statuses that are being received from the Lighthouse Benefits Claims API.  From there, we will consider improving our error messaging to better guide this subset of users.

### 1-Month Results (5/20-6/20)

**Statuses from [Datadog](https://vagov.ddog-gov.com/logs?query=%40payload.controller%3A%22RepresentationManagement%3A%3AV0%3A%3APowerOfAttorneyController%22&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=hot&stream_sort=desc&viz=stream&from_ts=1716302570635&to_ts=1716316970635&live=true)**:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/2790b0fc-b55b-43ac-b3e0-4814bee84b49)

**Contact Center calls (MyVA411)**: 
- Two inquiries were related to the Representative Status Widget
   - One user received our error message and hypothesized that their representation status couldn't be shown because they got married and have a new last name, but their profile on VA.gov was still showing their maiden name.
   - One user was a previous VSO represenative that changed to become a claims agent and was no longer accredited as a VSO representative.  They had submitted submitted paperwork to OGC, but no update since.  They provided their contact information hoping someone would follow up to help them no longer be listed as an accredited VSO representative.   _This feedback is more related to Find a Representative, than the Representative Status Widget_

**Feedback survey submmissions (Medallia)**:  

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** 
We will associate the `422` status with the "No representative" state to better inform that subest of users.  We will also update the phone number in the error state to a number users can call to inquire about representation -- 1-800-827-1000, which is more helpful than the MyVA411 number.


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** We are working on carrying this experience over to the Profile.
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?** 
