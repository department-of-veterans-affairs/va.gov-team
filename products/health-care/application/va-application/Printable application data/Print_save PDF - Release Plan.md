# Print_save PDF - Release Plan 

---

## Step 1: Development

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| hca_download_completed_pdf | Enables downloading a filled out 10-10EZ Form Pdf upon submission |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process
- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the Engineering team to disable the toggle and begin triage.
- PM and Engineering will contact the VES Sustainment team for additional triage

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
- No moderated testing will be done for this feature

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range: 4/22/2025 - 4/25/2025
- How will you make the product available in production while limiting the number of users who can find/access it: We will use the feature toggle to limit the exposure to a percentage of users
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Successful link access and actions (printing/saving)
  - Error rates above zero
- Links to the dashboard(s) showing "success criteria" metrics: [Datadog action tracking](https://vagov.ddog-gov.com/notebook/12606?cell_id=b043htjf&tpl_var_action.name=%2A) and [Datadog Service tracking](https://vagov.ddog-gov.com/apm/resource/healthcare-application/rack.request/fed2018843dbdd46?query=env%3Aeks-staging%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23download_pdf%22%20service%3Ahealthcare-application&env=eks-prod&fromUser=false&start=1744641831958&end=1745246631958&paused=false)
- Who is monitoring the dashboard(s)?: Heather Justice - PM, Brandon Cooper - Engineer, Luis Simauchi - Data Analyst

### Stage A: Canary
- We will begin testing at 25% of users (see below)

### Stage B: 25% of users

#### Planning

- Length of time: 4/22/2025 - 1 day
- Percentage of Users (and roughly how many users do you expect this to be): 25% (approximately 35 users per day)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

#### Planning

- Length of time: 4/23/2025-4/24/2025 - 2 days
- Percentage of Users (and roughly how many users do you expect this to be): 50% (approximately 70 users per day)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users
- Will we move from 50% to 100% of users, skipping this step

### Stage E: 100% of users

#### Planning

- Length of time: 4/25/2025
- Percentage of Users (and roughly how many users do you expect this to be): 100% (approximately 140 users per day)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

### 1-week results

- Data source
     - [Datadog action tracking](https://vagov.ddog-gov.com/notebook/12606?cell_id=b043htjf&tpl_var_action.name=%2A)
     - [Datadog Service tracking](https://vagov.ddog-gov.com/apm/resource/healthcare-application/rack.request/fed2018843dbdd46?query=env%3Aeks-staging%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23download_pdf%22%20service%3Ahealthcare-application&env=eks-prod&fromUser=false&start=1744641831958&end=1745246631958&paused=false)
#### Objective: Veterans will find that they want to print and/or save their completed application for future reference
- Result #1: At least 25% of submissions will show the Veteran selecting to print/save their completed form
- Result #2: There will be zero errors experienced when Veterans select to print/save their completed form

| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |------------- |
|Print/save application button |NEW | 4k monthly (25% of submissions) |TBD |TBD |
|Errors when print/save|NEW | 0 errors |TBD |TBD |

- Number of unique users: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Data source
     - [Datadog action tracking](https://vagov.ddog-gov.com/notebook/12606?cell_id=b043htjf&tpl_var_action.name=%2A)
     - [Datadog Service tracking](https://vagov.ddog-gov.com/apm/resource/healthcare-application/rack.request/fed2018843dbdd46?query=env%3Aeks-staging%20operation_name%3Arack.request%20resource_name%3A%22V0%3A%3AHealthCareApplicationsController%23download_pdf%22%20service%3Ahealthcare-application&env=eks-prod&fromUser=false&start=1744641831958&end=1745246631958&paused=false)
#### Objective: Veterans will find that they want to print and/or save their completed application for future reference
- Result #1: At least 25% of submissions will show the Veteran selecting to print/save their completed form
- Result #2: There will be zero errors experienced when Veterans select to print/save their completed form

| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |------------- |
|Print/save application button |NEW | 4k monthly (25% of submissions) |TBD |TBD |
|Errors when print/save|NEW | 0 errors |TBD |TBD |

- Number of unique users: [FILL_IN]
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
