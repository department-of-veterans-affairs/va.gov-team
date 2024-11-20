# Release Plan: Appoint a Representative 1.0 (MVP)


### Development

Feature Toggle:
`find_a_representative_enabled`❓ will be disabled prior to staged rollout and will be enabled to an increasing % of users during the staged rollout. This will control visibility of both our Appoint a Representative product and it's related entry point on the CAIA landing page

### Validation

#### Platform Preparation
- [ ] All "launch blocking" items from Staging Review have been addressed
- [ ] Contact Center Review is complete
- [ ] Privacy, Security, IA Readiness Review is complete

#### Technical Preparation
- [ ] Enable backend feature flag `use_veteran_models_for_appoint`
- [ ] Enable backend feature flag `appoint_a_representative_enable_pdf` ❓
- [ ] Enable backend feature flag `appoint_a_representative_enable_api` ❓
- [ ] Any third party services ready for use (frontend or backend) ❓
- [ ] Any lingering issues that are needed to address prior to rollout?

#### Content Preparation
- [ ] The react widget has been added to the landing page
- [ ] Entry points are ready to be redirected to the landing page ❓

#### Go/No Go meeting **TBD**
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

- Rollout date range: TBD ❓
- Limited production access to the Appoint a Representative application AND the related entry point on our landing page will be controlled through the frontend feature toggle `appoint_a_representative_enable_frontend` ❓
- Errors will be tracked in Datadog and will trigger a Slack alert to our team channel #benefits-representation-management-notifications, to initiate our rollback process (detailed above)

❄️ Code Freeze: 12/20/2024 ❄️

## Staged Rollout Schedule
**Go/No Go meeting Friday January 3, 2025**
1. Stage A: 10% of users on 1/6 (Monday) 
2. Stage B: 50% of users on 1/8 (Wednesday)
3. Stage C: 100% of users on 1/13 (Monday) + launch best bets for an initial boost to visibility 
4. Stage D: Entry points and redirects on ❓ to increase visibility of the [Appoint a Representative indroduction page](=(https://www.va.gov/get-help-from-accredited-representative/appoint-rep/introduction) ❓

*** 

### Staged Rollout Metrics

The following metrics will be considered before advancing rollout to the next stage:

1. Errors in Sentry (or Datadog?) ❓
2. Other errors?

### Stage A Results (Jan 6-8, 2025)

1. Errors in Sentry: no errors on the fetching of rep information for search results, and the reporting of outdated information
3. Are console errors still happening on page click? not seeing any console errors, if there are they will be picked up with error monitoring (Sentry)
4. What changes (if any) need to be implemented before proceeding to the next rollout stage? nothing at this time, ready to move into Stage B

### Stage B Results (Jan 8-13, 2025)

1. Errors in Sentry: no errors on the fetching of rep information for search results, and the reporting of outdated information
2. Are console errors still happening on page click? not seeing any console errors, if there are they will be picked up with error monitoring (Sentry)
3. What changes (if any) need to be implemented before proceeding to the next rollout stage? nothing at this time, ready to move into Stage C

## Post Launch Metrics

_Link to DOMO dashboards TBD_

1. [Traffic for all Find a Rep pages](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240310&_u.date01=20240319&explorer-table.plotKeys=%5B%5D&explorer-table.filter=get-help-from-accredited-representative/)
2. [Traffic for just the search experience of Find a Rep](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240311&_u.date01=20240318&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22BW%22,%22www.va.gov~2Fget-help-from-accredited-representative~2Ffind-rep~2F%3F%22,0%5D%5D/) (only post-search URLs)
3. [User engagement](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p176188361/_u.date00=20240312&_u.date01=20240318&_.useg=user0ChHUWxaSUWm-5ocHKwm0Q,user_5CvEnKiSOmYYMHT8kTpQQ,builtin1&overview-dimensionSummary.selectedGroup=system&overview-dimensionSummary.selectedDimension=analytics.browser/) (segmented by Find a Rep users vs. all users of VA.gov)
4. [Event Tracking](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/_u.date00=20240311&_u.date01=20240413&_.useg=&_r.drilldown=analytics.pagePath:www.va.gov~2Fget-help-from-accredited-representative~2Ffind-rep~2F,analytics.eventCategory:Interactions&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=50&explorer-graphOptions.selected=analytics.nthDay/)

### 1-Week Results (Jan 13-19, 2025)

1. **Errors in Sentry**: no errors on the fetching of rep information for search results, and the reporting of outdated information
12. **Contact Center calls (MyVA411)**: none
13. **Feedback survey submmissions (Medallia)**: 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** nothing at this time

**OKRs:**


### 1-Month Results (Jan 13 - Feb 12, 2025)

1. **Errors in Sentry**: no errors on the fetching of rep information for search results, and the reporting of outdated information
3. **Contact Center calls (MyVA411)**: none
4. **Feedback survey submmissions (Medallia)**:

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?**  

**OKRs:**


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. **How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?**
2. **What qualitative feedback have you gathered from users or other stakeholders?** VBA and OGC request to allow users to sort or filter search results by VSO, CAIA content request to consolidate representative definitions into a single additional component.
3. **Which assumptions you listed in your product outline were/were not validated?**
4. **How might your product evolve now or in the future based on these results?** We will take in feature requests and feedback and consider everything comprehensively for a v3 version of Find a Representative (timeline TBD).
5. **What technical tasks are needed to clean up (i.e., removal of feature toggles)?** None that we're aware of, the feature toggle has already been removed.
