
<!-- markdownlint-disable MD024 -->
# Feature Summary
When veterans currently view an appointment online they can only see the clinic name for the appointment, but not the clinic location.  This feature will add the clinic location, if available, to the appointment details so the veteran knows where to go for the appointment.

---

## Step 1: Development

| Toggle name | Description |
| ----------- | ----------- |
| [va_online_scheduling_physical_location](https://api.va.gov/flipper/features/va_online_scheduling_physical_location) | Toggle to display the physical location of an appointment. |

| Github Tasks |
| ----------- |
| [Display the Clinic Location information to the user on the appointment details page #69444](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69444) |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. However, the code will not enabled until the feature toggle is turned on.

Before enabling your feature toggle in production, the following tasks need to be completed:

- [X] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [X] Validate the new feature in Staging.
- [X] Communicate changes to those who are affected by the feature.
- [X] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [X] review the plan with your DEPO/OCTO representative.
  - [X] review the release plan with your team.

## Step 3: Production rollout

The physical location wil be rolled out in 3 phases.  The first phase will be for 25% of users for a period of two weeks.  If successful, then the percentage of users will be increased to 50% for one week and then enabled for all users.

- [X] Approved by OCTO lead:  
  >- Name:  Kay Lawyer
  >- Date:  03/15/2024

### Define the Rollback process

Once the feature flag is enabled, DataDog will be monitored for spikes in error rates.  Medallia feedback will also be monitored for comments related to the new feature.  In the event issues are reported through either of these monitoring methods, the feature toggle will be disabled.

- [X] Responsible for monitoring DataDog: Jeff Roof, AJ Magdub  
- [X] Responsible for monitoring Medallia: Peter Russo, Leah De La Costa
- [X] Responsible for performing rollback: Jeff Roof

### Rollout Plan Summary

- Desired date range or test duration: *3 weeks total*
- How you'll recruit the right production test users: *Solicit staff veterans to validate feature during Phase I rollout.*
- How you'll conduct the testing: *Asyncronously, providing instructions and asking veterans to check their appointments and report any issues they see.*
- How you'll give the test users access to the product in production: *Enable the feature flag for these named users.*

### Stage I: 25% of users

*Test a nominal user population to ensure moderate usage patterns expose no issues.*

#### Planning

- Length of time: *3 days*
- Percentage of Users: 25%
- Approximate Number of Users: 35,000-40,000

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage II: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: *4 days*
- Percentage of Users: 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage III: 100% of users

#### Planning

- Length of time: *1 week*
- Percentage of Users: 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

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
