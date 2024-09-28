# AVS Release Plan

## Feature Toggles

| Toggle name | Description |
| ----------- | ----------- |
| [avs_enabled](https://api.va.gov/flipper/features/avs_enabled) | Enables the AVS API and web application |
| [va_online_scheduling_after_visit_summary](https://api.va.gov/flipper/features/va_online_scheduling_after_visit_summary) | Enables display of AVS links on past appointments |

## Production rollout

###  Rollback plan

The AVS team will monitor analytics. (RUM and APM) If a high error rate, broken AVS links or other issues are detected, the feature toggles will be disabled by an OCTO Health Engineer. No other actions are needed, since the application is read-only.

### Phase I: moderated production testing

#### Planning

- Desired date range or test duration: 1 day
- Desired number of users: 1
- How you'll recruit the right production test users: Work with Dr. Spahn (PBM)
- How you'll conduct the testing: Screenshare session using MHV production test user

#### Results

- Number of users: 1
- Number of bugs identified / fixed: 2/2
  - [missing production fwdproxy config application](https://dsva.slack.com/archives/CBU0KDSB1/p1719585755023589?thread_ts=1719527937.244899&cid=CBU0KDSB1)
  - Fixed [AVS SID validation](https://github.com/department-of-veterans-affairs/vets-api/pull/17334)
- Was any downstream service affected by the change?: no

### Phase II: Staged Rollout

#### Rollout Planning

- Desired date range: ~Aug 1 -> Sep 15
- How will you make the product available in production while limiting the number of users who can find/access it: use feature toggle to limit AVS to percentage of logged in users
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Monitor feedback for any issues or questions that come through
  - Monitor APM and RUM for any technical performance issues, errors and/or user confusion
- Links to the dashboard(s) showing "success criteria" metrics: https://vagov.ddog-gov.com/dashboard/afd-cht-fsb/vagov-after-visit-summary
- Who is monitoring the dashboard(s)?: AVS team

### Stage A: Canary


#### Planning

- Length of time: ~2 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 10% of logged in users, which will likely result in an AVS link being shown to 2-3% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2-3 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 50% of logged in users, which will likely result in an AVS link being shown to 10-15% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

Broader messaging to Veterans that this is available will occur after enabled for all users when the more targeted Medallia survey about AVS is available

- Length of time: 2-4 weeks
- Percentage of Users: 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
