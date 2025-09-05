# Your VA Benefit Letters and Documents Release Plan

| Toggle name                                                                                              | Description                                                         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`cst_show_document_upload_status`](https://api.va.gov/flipper/features/cst_show_document_upload_status) | Enables ability to show upload status from EvidenceSubmission table |

[DataDog Dashboard](#) // TODO: Link Datadog Dashboard

#### Rollout Planning

- Desired date range: TBD
- How will you make the product available in production while limiting the number of users who can find/access it:
  - We will leverage the existing feature flipper to control the percentage of users who should be able to access.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - TBD
- Links to the dashboard(s) showing "success criteria" metrics:
  - TBD
- Who is monitoring the dashboard(s)?:
  - BMT2 Team

_The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs._

### Stage A: 25% of users

_Test a small Veteran population to ensure any obvious bugs/edge cases are found._

25% seems like a safe starting point since we aren't modifying any underlying data, and we are just providing a new experience in the way Veterans view these pages in the Claim Status Tool.

#### Planning

- Length of time: TBD
- Percentage of Users: 25%

#### Results

- Number of unique users: TBD
- Metrics at this stage (per your "success criteria"):
  - TBD
- Was any downstream service affected by the change?:
  - TBD
- Types of errors logged:
  - TBD
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - TBD

### Stage B: 50% of users

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: TBD
- Percentage of Users: 50%

#### Results

- Number of unique users: TBD
- Metrics at this stage (per your "success criteria"):
  - TBD
- Was any downstream service affected by the change?:
  - TBD
- Types of errors logged:
  - TBD
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - TBD

### Stage C: 75% of users

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: TBD
- Percentage of Users: 75%

#### Results

- Number of unique users: TBD
- Metrics at this stage (per your "success criteria"):
  - TBD
- Was any downstream service affected by the change?:
  - TBD
- Types of errors logged:
  - TBD
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - TBD

### Stage D: 100% of users

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: TBD
- Percentage of Users: 100%

#### Results

- Number of unique users: TBD
- Metrics at this stage (per your "success criteria"):
  - TBD
- Was any downstream service affected by the change?:
  - TBD
- Types of errors logged:
  - TBD
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - TBD

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: [FILL_IN]
- Post-launch KPI 2 actual: [FILL_IN]
- Post-launch KPI 3 actual: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
