
<!-- markdownlint-disable MD024 -->
# 10-10D Extended Release Plan v2

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| form1010d_extended | If enabled shows the digital form experience for form 10-10D Extended (IVC CHAMPVA) |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

PM and PO will monitor analytics. If they see a spike in errors or unexpected behavior, they will work with the team to get the FE engineer to disable the toggle and identify the issue.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: 6/18-7/17
- Desired number of users: 15+
- How you'll recruit the right production test users: Perigean
- How you'll conduct the testing: User/Usability Interviews
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Staging

#### Results

- Number of users: 18
- Number of bugs identified / fixed: 
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN]: Tickets of bugs/changes
- Was any downstream service affected by the change?: yes/no, No
- Types of errors logged: N/A
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? No
- If yes, what: N/A

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: TBD
- How will you make the product available in production while limiting the number of users who can find/access it: Feature Toggle
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - Upload error rate < 5%
  - Zero silent failures
  - Callback error rate < 1%
- Links to the dashboard(s) showing "success criteria" metrics: [ivc-champva-forms](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms?fromUser=false&refresh_mode=weekly&from_ts=1734391252265&to_ts=1734709253529&live=true) will be monitored by the team **(TO BE UPDATED WHEN 10-10D EXTENDED DASBHOARD IS LIVE)** with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: IVC Forms Team

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

**As this form is replacing a currently live form, we had to be a bit creative with our launch plan.**

### GOALS
When we drafted this launch plan, we wanted to accomplish a few goals:
- Still perform a “proper” phased launch to help control for issues with the 10-10d extended form
- Never block users from completing the 10-10d. If we were to take 10-10d original offline, and still give the extended form a phased launch, large portions of users would not be able to start a 10-10d until the buckets (25%, 50%, etc) caught them
- Don’t erase users progress. If we did a hard cutover, any user who started the form and saved their progress would lose it during the cutover

### LIMITATIONS
Due to the structure of the extended form (as an entirely new app instead of building off the existing 1010d form) we can’t use the approaches some other teams have used for their rollouts, such as a train approach. This has left us with three choices:
- the phased launch with two urls discussed here
- a hard cutover with a phased launch and users losing access to 1010d
- a hard cutover with no phased launch which obviously carries a lot of risk for a form with this much volume.

### PROPOSED LAUNCH PLAN
Content/IA has given us the green light for our current rollout plan. Tentative launch dates below:
- If a user starts but does not finish the 1010d original at any point in this phased launch, we will store that record and when they return they will continue with the 1010d original
- 12/1 1010d extended goes up for canary at a new url, 1010d original is still available to all other users at the old url
- 12/3 1010d extended goes to 25% at it's new url, 1010d original is still available to the other 75% of users at the old url
- 12/5 1010d extended goes to 50% at its new url, 1010d original is still available to the other 50% of users at the old url
- 12/8 1010d extended goes to 75% at its new url, 1010d original is still available to the other 25% of users at the old url
- 12/10 1010d extended fully replaces 1010d original, still at its new url, but 'new' visitors cannot access the 1010d original
   - for the standard 60 days that we save forms in progress, users who have an in progress 1010d original will continue the in progress 1010d original if they return
- 60 days after 12/10, the 1010d extended will fully replace the 1010d original at the old url. no one will be able to access 1010d original

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 24 hours, >0 submits
- Percentage of Users (and roughly how many users do you expect this to be): 1-5%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: Monitor at least 7 days and review any findings
- Percentage of Users (and roughly how many users do you expect this to be): 100%

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
