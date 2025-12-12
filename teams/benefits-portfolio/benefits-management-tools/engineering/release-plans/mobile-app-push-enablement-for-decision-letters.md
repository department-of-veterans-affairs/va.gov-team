<!-- markdownlint-disable MD024 -->
## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| [event_bus_gateway_emails_enabled](https://api.va.gov/flipper/features/event_bus_gateway_emails_enabled) | When enabled, vets-api opens an endpoint to Event Bus Gateway for sending notification emails. |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [X] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [X] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

- This change does not add substantial new functionality to VA.gov
- This change does not impact user flows through tasks
- This change does not affect traffic to backend services

*Example*: a change to a page's text content **could skip** staged rollout

*Example*: a minor visual redesign to a page that doesn't affect user flows **could skip** staged rollout

*Example*: adding a new field to an existing form **could skip** staged rollout

*Example*: a new feature on an existing application that creates new backend traffic **needs staged rollout**

*Example*: a significant change to how users navigate an existing form **needs staged rollout**

*Example*: a feature that will route significantly more users (and therefore more backend traffic) to an existing application **needs staged rollout**

#### Exceptions

Currently, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | Yes |
| Static content changes | Doable but tricky |
| URL redirects | No |

DEPO VSP / OCTO leads can approve other exceptions to this requirement.

### Define the Rollback process

Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible.

Our PM and PO will monitor analytics, e.g. DataDog. If they notice a spike in errors, they will alert the team to disable the feature flipper.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: June 16, 2025
- Desired number of users: 1
- How you'll recruit the right production test users: We have already contacted Robin Garrison, who has agreed to let us use his participant ID.
- How you'll conduct the testing: We will manually trigger the Event Bus Gateway to send a POST request to vets-api with Robin Garrison's participant ID.
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Gateway will **not** be connected to the production Kafka topic at this time, so our manual testing will be the only email being sent.

#### Results

- Number of users: 1
- Number of bugs identified / fixed: 0
- Was any downstream service affected by the change?: no
- Types of errors logged: None
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: no
- If yes, what: N/A

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: June 17, 2025 - June 27, 2025
- How will you make the product available in production while limiting the number of users who can find/access it: Gateway will **not** be connected to the full production Kafka topic at this time, but rather a series of iteratively-larger subsets of messages.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - DataDog error rate below 5%
  - Click through rate above xx%
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: Ian Donovan

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 4 hours / 150-200 users
- Percentage of Users (and roughly how many users do you expect this to be): 2% of Kafka messages

#### Results

- Number of unique users: 200
- Metrics at this stage (per your "success criteria"):
    - [x] DataDog errors < 5%
    - [x] 31.4% click through rate
- Was any downstream service affected by the change?: no
- Types of errors logged: Some VA Notify delivery errors that are out of scope for this work, but we are ensuring we maintain awareness of
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? No changes are absolutely required; we have some thoughts around additional logging we can add and potentially retrying some of the errors, but no blockers identified.

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 25% of Kafka messages

#### Results

- Ran on 6/18 from 8am - 4pm ET and again from 6/20 @ 1:30pm ET through 6/22 8am ET
- Number of unique users: 3702
- Metrics at this stage (per your "success criteria"):
    - [x] DataDog errors < 5%
    - [x] 52.0% click through rate overall
- Was any downstream service affected by the change?: No
- Types of errors logged: Some VA Notify delivery errors that are out of scope for this work, but we are ensuring we maintain awareness of
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? Nothing new

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: 4994
- Metrics at this stage (per your "success criteria"):
    - [x] DataDog errors < 5%
    - [x] 40.7% click through rate overall
- Was any downstream service affected by the change?: no
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? n/a

### Stage D: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: 8123
- Metrics at this stage (per your "success criteria"):
    - [x] DataDog errors < 5%
    - [x] 38.2% click through rate overall
- Was any downstream service affected by the change?: no
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? n/a

### Stage E: 100% of users

#### Planning

- Length of time: 8 hours (one day)
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
    - [ ] xx.x% click through rate overall
- Was any downstream service affected by the change?: no
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
