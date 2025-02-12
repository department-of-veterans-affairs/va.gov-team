### Description
<!--What is this ticket trying to accomplish? Be specific about where the scope starts and ends. What business objective are we trying to meet? Specify what should or shouldn't change for the end user.-->
## Step 1: Development


| Toggle name | Description |
| ----------- | ----------- |
| veteranOnboardingShowWelcomeMessageToNewUsers | Display a Welcome msg for new LOA1 users |
| veteranOnboardingContactInfoFlow | You're Missing Contact Info Prompt |


## Production rollout

We will be using a staged rollout with this deployment.

### Define the Rollback process

> - Our PM will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to get the FE engineer to disable the toggle.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: [02/03/25 - 02/05/25]
- Desired number of users: [5-10]
- How you'll give the test users access to the product in production w/o making it live on VA.gov: [Internal testing with mock test user accounts and/or authenticated veterans employed by VA]

#### Results

- Number of users: [5]
- Number of bugs identified / fixed: [1]/[1]
  - [FILL_IN] : [Bug Ticket](https://github.com/department-of-veterans-affairs/va-iir/issues/1419)

- Was any downstream service affected by the change?: yes/no, [No]
- Types of errors logged: [404 when accessing staging directly]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [No]: yes/no

### Phase II: Staged Rollout (also known as unmoderated production testing)


### Stage A: Canary

#### Planning

- Length of time: [Overnight - 15+hrs] 
- Percentage of Users: 10% 

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

#### Planning

- Length of time: [4hrs] 
- Percentage of Users: 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

#### Planning

- Length of time: [4hrs] 
- Percentage of Users: 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users


#### Planning

- Length of time: [Overnight - 15+hrs]
- Percentage of Users: 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: [Indefinitely] 
- Percentage of Users: 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

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
