<!-- markdownlint-disable MD024 -->
# VANotify Mobile App Push Enablement for Decision Letters Release Plan

For more details, see this [addendum](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-management-tools/engineering/release-plans/mobile-app-push-enablement-for-decision-letters-addendum.md)

## Step 1: Development

Development was done behind a feature flag, following the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles-guide).

| Toggle name | Description |
| ----------- | ----------- |
| [va_notify_push_notifications](https://api.va.gov/flipper/features/va_notify_push_notifications) | When enabled, va-notify will lazily initialize a new Client that allows for the send_push method to be called |
| [event_bus_gateway_push_notifications](https://api.va.gov/flipper/features/event_bus_gateway_push_notifications) | When enabled, for each non-filtered event, eventbus-gateway will call the new vets-api endpoint send_notifications which will asyncronousy send emails and push notifications |
| [event_bus_gateway_letter_ready_push_notifications](https://api.va.gov/flipper/features/event_bus_gateway_letter_ready_push_notifications) | Flag that will be used for the progressive rollout, it can be enabled for a specifc user or a percentage of actors. We will be using the icn as the determining feature |


## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day.

Before enabling your feature toggle in production, you'll need to:

- [x] Testing of all permutations of the feature flags. Confirm no regression in the send_email endpoint as well as correct push notifications sent. Test results documented in [#122588](https://github.com/department-of-veterans-affairs/va.gov-team/issues/122588)
- [x] Confirm that logging has not changed and that existing Dashboards are working
- [x] Implement dashboard or add to existing dashboard to track push notifications
- [ ] Previously the eventbus-gateway sign-on token was scoped only to the `send_email` endpoint.  Confirm that the identity team has updated the config in production to accept both the `send_email` and `send_notifications` endpoints
- [ ] Similar to above the eventbus-gateway vsp-infra-application-manifests configuration for `tokenScope` must be updated to accept both `send_email` and `send_notifications`
- [ ] Confirm that VANotify has, in production, created the preferences for "Benefits Claims and Decision Reviews"
- [ ] Confirm that VANotify has populated the preference retroactively to all users
- [ ] Confirm "What's new" content has been published (Planned for release 2/10)
- [ ] Testing of progressive rollout of "What's new" and preference is complete
- [x] Confirm the Mobile App team has completed any desired testing
- [x] Confirm the Mobile App team has deployed their analytics update (Planned for release on 1/13/26)
- [ ] Confirm VetText has completed a production deployment of push template (Planned for release on 1/19/26)
- [x] Gather details for single user test
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
    - [ ] review the plan with your DEPO/OCTO representative.
    - [ ] review the release plan with your team.

## Step 3: Production rollout

We will be performing a progressive rollout to be able to minimize the production impact of any issues.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: February 11, 2026
- Desired number of users: 1
- How you'll recruit the right production test users: Liana Fleming has identified a veteran who is willing to assist.
- How you'll conduct the testing: We will manually trigger the Event Bus Gateway to send a POST request to vets-api with the recruit's participant ID.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Gateway will not be connected to the production Kafka topic at this time, so our manual testing will be the only push notificatio being sent. We will also set the `event_bus_gateway_letter_ready_push_notifications` to only be enabled for the recruit's icn.

#### Results

- Number of users: ___
- Number of bugs identified / fixed: ___
- Was any downstream service affected by the change?: ___
- Types of errors logged: ___
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges?: ___
- If yes, what: ___

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range: February 11, 2026 - February 25, 2026
- How will you make the product available in production while limiting the number of users who can find/access it: By using the feature flag `event_bus_gateway_letter_ready_push_notifications` and the `enable_percentage_of_actors` feature to enable it for a percentages of users by icn.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?
    - [ ] DataDog error rate below 5%
    - [ ] Click through rate above xx%
- Links to the dashboard(s) showing "success criteria" metrics:
    - [DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/wvx-g6k-u6c/bmt---eventbus-gateway-cloned?fromUser=false&refresh_mode=sliding&from_ts=1766512554238&to_ts=1767117354238&live=true)
    - [Google Analytics Report](https://analytics.google.com/analytics/web/?authuser=2#/analysis/a50123418p265787033/edit/eiPeenxHRBqHVePhF1M3ow?restoreUserState=true)
- Who is monitoring the dashboard(s)?: BMT3 (Liana Fleming)


### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 4 hours / 150-200 users
- Percentage of Users (and roughly how many users do you expect this to be): 2% of icns

#### Results

- Number of unique users: ___
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] xx.x% click through rate (if we can determine this)
    - [ ] No increase in email sending errors
- Was any downstream service affected by the change?: __
- Types of errors logged: ___
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? ___

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 25% of ICNs

#### Results

- Ran on ____ from 8am - 4pm ET and again from ___
- Number of unique users: ___
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] xx.x% click through rate overall
    - [ ] No increase in email sending errors
- Was any downstream service affected by the change?: ___
- Types of errors logged: ___
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? ___

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: ___
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] xx.x% click through rate overall
    - [ ] No increase in email sending errors
- Was any downstream service affected by the change?: ___
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? ___

### Stage D: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: ____
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] xx.x% click through rate overall
    - [ ] No increase in email sending errors
- Was any downstream service affected by the change?: __
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? ___

### Stage E: 100% of users

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users:
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] xx.x% click through rate overall
    - [ ] No increase in email sending errors
- Was any downstream service affected by the change?: ___
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Rollback process

Rollback will be done by disabling feature flags. To disable all push notifications we will set `event_bus_gateway_letter_ready_push_notifications` to 0%.  This will ensure that all push notifications are stopped. To be thorough we can also disable the other feature flags mentioned above.

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
