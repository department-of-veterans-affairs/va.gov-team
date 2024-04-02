# Release Plan: Find a Representative 2.0


### Development

Feature Toggle:
`find_a_representative_enabled` will be disabled prior to staged rollout and will be enabled to an increasing % of users during the staged rollout. This will control visibility of both our Find a Rep product and it's related entry point on the CAIA landing page

### Validation

#### Platform Preparation
- [x] Are all Collaboration Cycle touchpoints complete?

#### Technical Preparation
- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
- [x] Unit tests and E2E tests are complete
- [x] QA by Michael + ARM team
- [x] Mapbox is ready for use (frontend)
- [x] Address Validator in Lighthouse is ready for use (backend)
- [x] Any lingering issues that are needed to address prior to rollout?

#### Content Preparation
- [x] New landing page content has been reviewed for accuracy and approved by stakeholders
- [x] The react widget has been added to the landing page
- [x] Entry points are ready to be redirected to the landing page

#### Data Consideration
- [x] Discuss the pros and cons with releasing our MVP, knowing that the data from OGC has inaccuracies

#### Go/No Go meeting 3/5/2024 at 12:30p ET
- [x] review the plan with your DEPO/OCTO representative.
- [x] review the release plan with your team.

**Verdict: "Conditional Go" after we're able to resolve the open issue with the csrfToken.**

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `find_a_representative_enable_frontend`
   1. Submit a PR
2. Alert the team in [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates (@benefits-arm-core, Jennifer, Lesley, Alex, Sam, Steve)
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***


## Staged Rollout Details

- Rollout date range: 3/11-3/20
- Limited production access will be controlled through the frontend feature toggle `find_a_representative_enabled` 
- Errors will be tracked in Sentry and will trigger a Slack alert to our team channel [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM), to initiate our rollback process (detailed above)


## Staged Rollout Schedule
**Go/No Go meeting 3/5/2024 at 12:30p ET**
1. Stage A: 10% of users on 3/11 (Monday)
2. Stage B: 100% of users on 3/13 (Wednesday) + launch best bets for an initial boost to visibility
3. Stage C: Implement redirects on 3/18 (Monday) for an added boost to visibility
4. Stage D: Begin entry point work on 3/20 (Wednesday) so pages point directly to the [Accredited Rep landing page]([url](https://www.va.gov/get-help-from-accredited-representative/))

*** 

### Staged Rollout Metrics

The following metrics will be considered before advancing rollout to the next stage:

1. Errors in Sentry
2. User reports of outdated information

### Stage A Results (3/11-3/13)

1. Errors in Sentry: no errors on the fetching of rep information for search results, and the reporting of outdated information
3. Are console errors still happening on page click? not seeing any console errors, if there are they will be picked up with error monitoring (Sentry)
4. What changes (if any) need to be implemented before proceeding to the next rollout stage? nothing at this time, ready to move into Stage B

### Stage B Results (3/13-3/18)

1. Errors in Sentry: no errors on the fetching of rep information for search results, and the reporting of outdated information
2. Are console errors still happening on page click? not seeing any console errors, if there are they will be picked up with error monitoring (Sentry)
3. What changes (if any) need to be implemented before proceeding to the next rollout stage? nothing at this time, ready to move into Stage C

### Stage C Results (3/18-3/20)

1. Errors in Sentry: no errors on the fetching of rep information for search results, and the reporting of outdated information
2. Are console errors still happening on page click? not seeing any console errors, if there are they will be picked up with error monitoring (Sentry)
3. What changes (if any) need to be implemented before proceeding to the next rollout stage? nothing at this time, ready to move into Stage D

## Post Launch Metrics

_Links to Google Analytics and DOMO dashboards TBD_

1. [Traffic for all Find a Rep pages](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240310&_u.date01=20240319&explorer-table.plotKeys=%5B%5D&explorer-table.filter=get-help-from-accredited-representative/)
2. [Traffic for just the search experience of Find a Rep](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240311&_u.date01=20240318&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.pagePath%22,%22BW%22,%22www.va.gov~2Fget-help-from-accredited-representative~2Ffind-rep~2F%3F%22,0%5D%5D/) (only post-search URLs)
3. [User engagement](https://analytics.google.com/analytics/web/#/report/visitors-overview/a50123418w177519031p176188361/_u.date00=20240312&_u.date01=20240318&_.useg=user0ChHUWxaSUWm-5ocHKwm0Q,user_5CvEnKiSOmYYMHT8kTpQQ,builtin1&overview-dimensionSummary.selectedGroup=system&overview-dimensionSummary.selectedDimension=analytics.browser/) (segmented by Find a Rep users vs. all users of VA.gov)

### 1-Week Results (3/11-3/20)

1. **Errors in Sentry**: no errors on the fetching of rep information for search results, and the reporting of outdated information
3. **User reports of outdated information**: 1 report for a representative's phone number and address on 3/12/2024
12. **Contact Center calls (MyVA411)**: none
13. **Feedback survey submmissions (Medallia)**: 1 submission for the Find a Rep product page on 3/20/2024 -- submitter indicated "no" to the question "Were you able to do your task today?" and for "What task were you trying to do today?" they said "Find a representative."  They also gave a "1" for their overall satisfaction with the site. 

**What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?** nothing at this time

**Landing page and product page traffic:**
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/4fa293c9-3daa-452d-9157-1a71d3cbcd86)

**Search experience traffic on product page:**
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/84a5b6fd-74cc-4d88-8b14-eb642a61bb7a)

**User engagement:**
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/8aa58f91-3874-4482-bf25-94c215561e52)

**Navigation to the landing page:**
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/44e34dbe-b250-4d00-8982-c97dc3e7ef44)

**Navigation to the product page:**
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/142453186/94794ab9-5851-4230-abe1-c03165716719)


### 1-Month Results (3/11-4/20)

1. Errors in Sentry:
3. User reports of outdated information:
4. Unique Pageviews:
5. Average Time on Page:
6. Entrances: 
7. Bounce Rate:
8. % Exit:
9. Number of searches:
10. Average number of searches per user:
11. % of searches that do not return results:
12. Contact Center calls (MyVA411):
13. Feedback survey submmissions (Medallia):

What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders?
3. Which assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
5. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
