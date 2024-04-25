# Release Plan: Representative Status Widget 1.0


### Development

Feature Toggle:
`TBD` will be disabled prior to staged rollout and will be enabled to an increasing % of users during the staged rollout. This will control visibility of the Representative Status Widget on our [Find a Representative page](https://www.va.gov/get-help-from-accredited-representative/find-rep/).

### Validation

#### Platform Preparation
- [ ] Are all Collaboration Cycle touchpoints complete?

#### Technical Preparation
- [x] Internal team QA
- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
- [x] Unit tests and E2E tests are complete
- [ ] Any lingering issues that are needed to address prior to rollout?

#### Go/No Go meeting TBD
- [ ] review the plan with your DEPO/OCTO representative.
- [ ] review the release plan with your team.

**Verdict: TBD**

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `TBD`
   1. Submit a PR
2. Alert the team in [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates (@benefits-arm-core, @benefits-arm-enablement)
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***


## Staged Rollout Details

- Rollout date range: 5/6-5/13
- Limited production access will be controlled through the frontend feature toggle `TBD` 
- Errors will be tracked in Sentry and Datadog, and will trigger a Slack alert to our team channel #benefits-representation-management-notifications, to initiate our rollback process (detailed above)


## Staged Rollout Schedule
**Go/No Go meeting TBD**
1. Stage A: 10% of users on 5/6 (Monday)
2. Stage B: 50% of users on 5/8 (Wednesday)
3. Stage C: 100% of users on 5/13 (Monday)
4. Stage D: Add the Representative Status Widget to the [Accredited Rep landing page](https://www.va.gov/get-help-from-accredited-representative/)

*** 

### Staged Rollout Metrics

The following metrics will be considered before advancing rollout to the next stage:

1. Errors in Sentry
2. Errors in Datadog

### Stage A Results (5/6-5/8)

1. **Errors in Sentry**:
2. **Errors in Datadog**:
3. **What changes (if any) need to be implemented before proceeding to the next rollout stage?** 

### Stage B Results (5/8-5/13)

1. **Errors in Sentry**:
2. **Errors in Datadog**:
3. **What changes (if any) need to be implemented before proceeding to the next rollout stage?** 

## Post Launch Metrics

_Link to DOMO dashboards TBD_

1. [Traffic for all Find a Rep pages](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240310&_u.date01=20240319&explorer-table.plotKeys=%5B%5D&explorer-table.filter=get-help-from-accredited-representative/)
2. [Traffic for just the search experience of Find a Rep](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240311&_u.date01=20240318&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22BW%22,%22www.va.gov~2Fget-help-from-accredited-representative~2Ffind-rep~2F%3F%22,0%5D%5D/) (only post-search URLs)
3. [User engagement](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p176188361/_u.date00=20240312&_u.date01=20240318&_.useg=user0ChHUWxaSUWm-5ocHKwm0Q,user_5CvEnKiSOmYYMHT8kTpQQ,builtin1&overview-dimensionSummary.selectedGroup=system&overview-dimensionSummary.selectedDimension=analytics.browser/) (segmented by Find a Rep users vs. all users of VA.gov)
4. [Event Tracking](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20240311&_u.date01=20240413&_.useg=&_r.drilldown=analytics.pagePath:www.va.gov~2Fget-help-from-accredited-representative~2Ffind-rep~2F,analytics.eventCategory:Interactions&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-graphOptions.selected=analytics.nthDay/)

### 1-Week Results (5/13-5/20)

1. **Errors in Sentry**:
2. **Errors in Datadog**:
3. **Contact Center calls (MyVA411)**: 
4. **Feedback survey submmissions (Medallia)**:  

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** 

### 1-Month Results (5/13-6/13)

1. **Errors in Sentry**:
2. **Errors in Datadog**:
3. **Contact Center calls (MyVA411)**: 
4. **Feedback survey submmissions (Medallia)**:

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** 


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** 
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** 
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?** Remove content above the status card.
