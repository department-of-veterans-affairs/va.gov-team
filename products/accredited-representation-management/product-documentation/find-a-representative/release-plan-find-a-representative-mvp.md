# Release Plan: Find a Representative MVP


### Development

Feature Toggles:

1.  `find_a_representative_enable_api` will be enabled prior to staged rollout
2.  `find_a_representative_enable_frontend` will be disabled prior to staged rollout and will be enabled to an increasing % of users during the staged rollout. This will control visibility of both our Find a Rep product and it's related entry point on the CAIA landing page

### Validation

#### Technical Preparation
- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
- [ ] Tests by Holden (end to end) and Colin (unit tests)
- [ ] QA by Michael + ARM team
- [ ] Mapbox is ready for use (frontend)
- [ ] Address Validator in Lighthouse is ready for use (backend)

#### Content Preparation
- [ ] New landing page content has been reviewed for accuracy and approved by stakeholders
- [ ] The react widget has been added to the landing page
- [ ] Entry points have been redirected to the landing page

#### Go/No Go meeting on 12/11 at 2p ET (11a PT)
- [ ] review the plan with your DEPO/OCTO representative.
- [ ] review the release plan with your team.

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `find_a_representative_enable_frontend`
   1. Submit a PR
2. Alert the team in [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM) that the rollback process has been initiated
   1. Comment on the initial Slack alert thread, also sending the message to the channel (checkbox)
   2. Tag relevant teammates (Holden, Jonathan, Colin, Lindsay, Michael, Janelle, Zach, Lesley, Alex, Steve)
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***


## Staged Rollout Details

- Rollout date range: 12/12-12/18
- Limited production access will be controlled through the frontend feature toggle `find_a_representative` 
- Lindsay will monitor metrics (detailed below) for relevant insights
- Errors will trigger a Slack alert to our team channel [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM), to initiate our rollback process (detailed above)


## Staged Rollout Schedule
**Go/No Go meeting on 12/11 at 2p ET (11a PT)**
1. Stage A: 10% of users on 12/12
2. Stage B: 25% of users on 12/13
3. Stage C: 50% of users from 12/14-12/17
4. Stage `D: 100% of users on 12/18

**:snowflake: Code freeze: 12/22/2023 - 1/2/2024 :snowflake:**

*** 

### Staged Rollout Metrics

_Links to dashboard(s)_

The following metrics will be considered before advancing rollout to the next stage:

1. Bounce rate for `/find-rep`
2. Unique page views
3. Number of searches
4. Average number of searches per user 
5. % of searches that do not return results 
6. Errors in Sentry
7. Errors in DataDog


### Stage A Results

- Bounce rate for `/find-rep`:
- Unique page views:
- Number of searches:
- Average number of searches per user:
- % of searches that do not return results:
- Errors logged in Sentry:
- Errors logged in DataDog:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

***


## Post Launch Metrics

_Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal._


### 1-Week Results

- Bounce rate for `/find-rep`:
- Unique page views:
- Number of searches:
- Average number of searches per user:
- % of searches that do not return results:
- Errors logged in Sentry:
- Errors logged in DataDog:
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
- Errors logged in DataDog:
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
