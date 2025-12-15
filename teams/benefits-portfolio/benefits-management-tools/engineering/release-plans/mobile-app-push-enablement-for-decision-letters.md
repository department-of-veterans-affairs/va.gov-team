<!-- markdownlint-disable MD024 -->
# VANotify Mobile App Push Enablement for Decision Letters Release Plan

For more details, see this [addendum](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-management-tools/engineering/release-plans/mobile-app-push-enablement-for-decision-letters-addendum.md)

## Step 1: Development

Development was done behind a feature flag, following the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

| Toggle name | Description |
| ----------- | ----------- |
| [event_bus_gateway_emails_enabled](https://api.va.gov/flipper/features/event_bus_gateway_emails_enabled) | When enabled, vets-api opens an endpoint to Event Bus Gateway for sending notification emails. |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work with any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

- This change does not add substantial new functionality to VA.gov
- This change does not impact user flows through tasks
- This change does not affect traffic to backend services

### Rollback process

Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible.

Our PM and PO will monitor analytics, e.g. DataDog. If they notice a spike in errors, they will alert the team to disable the feature flipper.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: ___
- Desired number of users: ___
- How you'll recruit the right production test users: ___
- How you'll conduct the testing: ___
- How you'll give the test users access to the product in production w/o making it live on VA.gov: ___

#### Results

- Number of users: ___
- Number of bugs identified / fixed: ___
- Was any downstream service affected by the change?: ___
- Types of errors logged: ___
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: ___
- If yes, what: ___

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has ___ stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: ___
- How will you make the product available in production while limiting the number of users who can find/access it: ___
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - DataDog error rate below 5%
  - Click through rate above xx%
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: ___

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 4 hours / 150-200 users
- Percentage of Users (and roughly how many users do you expect this to be): 2% of Kafka messages

#### Results

- Number of unique users: ___
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] 31.4% click through rate
- Was any downstream service affected by the change?: __
- Types of errors logged: ___
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? ___

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 25% of Kafka messages

#### Results

- Ran on ____ from 8am - 4pm ET and again from ___
- Number of unique users: ___
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] 52.0% click through rate overall
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
    - [ ] 40.7% click through rate overall
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
    - [ ] 38.2% click through rate overall
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
- Was any downstream service affected by the change?: ___
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? 

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
