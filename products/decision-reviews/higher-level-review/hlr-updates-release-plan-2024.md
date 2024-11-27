# Release Plan Higher Level Review Updates Fall 2024

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Staging testing |2 days|N/A| November 11-18, 2024  |
|Phase 2: Canary production testing |3 days|10 claims| December 4-6, 2024  |
|Phase 2A: 25% of users |7 days|25% of users (auth users only)|December 9, 2024|
|Phase 2B: 50% of users |4 days|50% of users (auth users only)|December 16, 2024|
|Phase 23: 75% of users |4 days|75% of users (auth users only)|December 20, 2024|
|Phase 2D: 100% of users| indefinite | 100% users (auth and non-auth) |December 26, 2024|


## Overview
The HLR paper form was updated this year with new isntructions and content to adapt more plain language. Our stakeholders had content suggestions and feedback which this fall 2024 release implements. Updates were made to the following:
- Update content on information page (Introduction)
- Update content in homelessness question (Section 1: Veteran information)
- Update "Issues for review" content (Section 2: Issues for review)
- Update content on the Request an informal conference page (Section 3: Informal conference)
- New page for person to contact (Section 3: Informal conference)
- Update to "Review application" content (Section 3: Review application) 


## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| bhlr_updateed_contnet | This toggle enables the fall HLR updates |

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] review the plan with your DEPO/OCTO representative.
  - [x] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

Our PM and PO will monitor analytics. If something goes wrong, the engineering team will be on standby to disable the flippers and fall back to v1 of the form.

Rollback plan:
1. PM and Engineering will monitor analytics for issues (failed submissions, significant user experience challenges, unexpected errors).
2. If there is a spike in errors or unexpected behavior, Engineering disables flipper which hides all updates to the form.
3. Communication will be sent to the VA Product Owner, Decision Review team, and LH team.
4. The Decision Review team team will priortize bug fixes in coordination with the VA PO (Amy Lai)
5. The Decision Review team and PO will conduct a go/no-go before re-releasing to production


### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Our VFS team was advised against testing in production due to the downstream actions that submitting an application triggers. To migtigate the risk this poses, we will be doing testing in a staging environment.

#### Planning
<!--- Desired date range or test duration: September 2-6, 2024 -->

- Desired test date: September 3, 2024
- Desired number of users: [N/A]
- How you'll recruit the right production test users: Internal team and VA audiences
- How you'll conduct the testing: Using test users and validating the staging form updates via testrails
- How you'll give the test users access to the product in production w/o making it live on VA.gov: We are conducting the testing in staging

#### Results
- Number of users: [FILL_IN]
- Number of bugs identified / fixed: [FILL_IN]
- Was any downstream service affected by the change?: [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: November 11 - December 9, 2024
- How will you make the product available in production while limiting the number of users who can find/access it: Feature toggle
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Abandonment rate: TBD
  - Contact Center calls due to inability to complete the form caused by errors <2 calls (reach out in advance to inform them of the HLR form updates release)
  - Submission volume:
    - Canary: 10 submissions
    - 25%/50%/75%: >10 submissions
  - Error rate: <1%
  - Pageviews
- Links to the dashboard(s) showing "success criteria" metrics:
  - Domo Dashboard request submitted
  - [DataDog Form submission dashboard]()
  - [Pageviews]()
- Who is monitoring the dashboard(s)?: Product Manager (Maurice DeBeary) and Engineering (Derek Fong, Molly T-M)


### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 1%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE] yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE] yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE] yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 75% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: Till infinity and beyond!
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
