# Evidence Requests Pattern Release Plan

| Toggle name | Description |
| ----------- | ----------- |
| [`cst_friendly_evidence_requests`](https://api.va.gov/flipper/features/cst_friendly_evidence_requests) | When enabled, CST overrides tracked items' display names and descriptions to be more human-readable. |

#### Rollout Planning

- Desired date range: July 10, 2025
- How will you make the product available in production while limiting the number of users who can find/access it:
  - We will leverage the existing feature flipper to control the percentage of users who should be able to access.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - DataDog error rate for evidence uploads below 5%
- Links to the dashboard(s) showing "success criteria" metrics: https://vagov.ddog-gov.com/dashboard/pgu-2vh-4as
- Who is monitoring the dashboard(s)?: BMT2 Team

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: 25% of users

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 4 days
- Percentage of Users: 25%

#### Results

- Number of unique users:
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
- Was any downstream service affected by the change?:
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Stage B: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 1 day
- Percentage of Users: 50%

#### Results

- Number of unique users:
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
- Was any downstream service affected by the change?:
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Stage C: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 1 day
- Percentage of Users: 75%

#### Results

- Number of unique users: 4994
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
- Was any downstream service affected by the change?:
- Types of errors logged: 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Stage D: 100% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 1 day
- Percentage of Users: 100%

#### Results

- Number of unique users:
- Metrics at this stage (per your "success criteria"):
    - [ ] DataDog errors < 5%
- Was any downstream service affected by the change?:
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
