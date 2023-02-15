# Release Plan: Certificate of Eligibility

---

## Step 1: Development

Here are the features toggles:

| Toggle name | Description |
| ----------- | ----------- |
| COE Content | Toggle designed to release the breadcrumb navigation leading to the introduction page. |
| COE App | Toggle designed to release the form to users incrementally. |

## Step 2: Validation

Here is our checklist for enabling the feature toggle in production:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [] review the plan with your DEPO/OCTO representative.
  - [] review the release plan with your team.

## Step 3: Staged production rollout

### Rollback process

If the functionality needs to be rolled back out of production, we will do the following:
- Turn on the feature toggle, disabling functionality of the form and status app.
- Reach out to the sitewide content team (Randi is a POC), and request that they disable the introduction page and navigation breadcrumbs leading to the form.
- Document issues in production to be resolved using the bug template in Zenhub.
- Schedule a "war room" session with squad 2 from Benefits Team 1, including the head engineer (Robin), backend engineer (Eugene), and product manager (Sade). 
- Confirm that logging and monitoring are in place to catc hthe issue should it occur again. 
- Conduct a post-mortem on the incident. 
- Schedule a go/no-go meeting prior to re-release with the PO (Matt Self), head engineer (Robin), backend engineer (Eugene), and product manager (Sade).

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Date range or test duration: [1/19/2023 - 2/2/2023]
- Desired number of users: [11]
- Recruit method for production test users: [Internal recruit]
- Test method: [Moderated screenshare with LGY service SMEs and VA.gov engineer]
- How you'll give the test users access to the product in production w/o making it live on VA.gov: [Using a feature toggle set at 0%, we whitelisted Veteran volunteers to submit COE requests (VA employees as well as non-VA employee Veterans).]

#### Results

- Number of users: [11]
- [Bugs identified / fixed](https://docs.google.com/spreadsheets/d/1n2XFtonuaH9yIszPzOsYKj1eKPIuv3R9fEk8rG4pn0c/edit#gid=0)

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range: [2/2/2023-2/23/2023]
- We will make the product available in production while limiting the number of users who can find/access it with this method: [Feature toggle].
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?
  - Contact center calls < 2 calls
  - Sentry error rate < 5%
- Links to the dashboard(s) showing "success criteria" metrics: [Link to dashboards TBD]
- Who is monitoring the dashboard(s)?: [Eugene Lynch (github handle is @data-doge)]

### Stage A: Canary 5-10% of users

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: [3-5 business days]
- Percentage of Users (and roughly how many users do you expect this to be): 5-10%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [3-5 business days]

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [3-5 business days]
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

- Length of time: [1 week]
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- - Length of time: [1 week]
- Percentage of Users (and roughly how many users do you expect this to be): 100%

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
