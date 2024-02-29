# Release Plan: Find a Representative 2.0


### Development

Feature Toggles:

1.  `find_a_representative_enable_api` will be enabled prior to staged rollout
2.  `find_a_representative_enable_frontend` will be disabled prior to staged rollout and will be enabled to an increasing % of users during the staged rollout. This will control visibility of both our Find a Rep product and it's related entry point on the CAIA landing page

### Validation

#### Platform Preparation
- [ ] Are all Collaboration Cycle touchpoints complete?

#### Technical Preparation
- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
- [x] Unit tests and E2E tests are complete
- [x] QA by Michael + ARM team
- [x] Mapbox is ready for use (frontend)
- [x] Address Validator in Lighthouse is ready for use (backend)
- [ ] Any lingering issues that are needed to address prior to rollout?

#### Content Preparation
- [x] New landing page content has been reviewed for accuracy and approved by stakeholders
- [x] The react widget has been added to the landing page
- [x] Entry points are ready to be redirected to the landing page

#### Data Consideration
- [x] Discuss the pros and cons with releasing our MVP, knowing that the data from OGC has inaccuracies

#### Go/No Go meeting 3/5/2024 at 12:30p ET
- [ ] review the plan with your DEPO/OCTO representative.
- [ ] review the release plan with your team.

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

- Rollout date range: 3/5-3/18/2024
- Limited production access will be controlled through the frontend feature toggle `find_a_representative_enable_frontend` 
- Errors will be tracked in Sentry and will trigger a Slack alert to our team channel [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM), to initiate our rollback process (detailed above)


## Staged Rollout Schedule
**Go/No Go meeting 3/5/2024 at 12:30p ET**
1. Stage A: 10% of users on 3/5 (Tuesday)
2. Stage B: 25% of users on 3/7 (Thursday)
3. Stage C: 50% of users on 3/11 (Monday)
4. Stage D: 100% of users on 3/12 - monitor for any issues through 3/18 EOD (Monday)

*** 

### Staged Rollout Metrics

The following metrics will be considered before advancing rollout to the next stage:

1. Errors in Sentry

### Stage A Results

1. Errors in Sentry:
3. Are console errors still happening on page click?  _suspected to be a Staging-specific issue, this will validate suspicions_
4. What changes (if any) need to be implemented before proceeding to the next rollout stage?

### Stage B Results

1. Errors in Sentry:
3. What changes (if any) need to be implemented before proceeding to the next rollout stage?

### Stage C Results

1. Errors in Sentry:
3. What changes (if any) need to be implemented before proceeding to the next rollout stage?

### Stage D Results

1. Errors in Sentry:
3. What changes (if any) need to be implemented before proceeding to the next rollout stage?

***


## Post Launch Metrics

_Links to Google Analytics and DOMO dashboards_


### 1-Week Results

- Bounce rate for `/find-rep`:
- Unique page views:
- Number of searches:
- Average number of searches per user:
- % of searches that do not return results:
- Errors logged in Sentry:
- Contact Center calls:
- Feedback survey submmissions:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?


### 1-Month Results

- Bounce rate for `/find-rep`:
- Unique page views:
- Number of searches:
- Average number of searches per user:
- % of searches that do not return results:
- Errors logged in Sentry:
- Contact Center calls:
- Feedback survey submmissions:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?


## Post-Launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders?
3. Which assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
5. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
