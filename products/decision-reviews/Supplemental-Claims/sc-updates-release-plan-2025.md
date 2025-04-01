# Release Plan Supplemental Claims Updates Spring 2025

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 0: Staging testing |5 days|N/A| March 10-14, 2025  |
|Phase 1: Canary production testing |2 days|5% of users - 10 claims min.| March 17, 2024  |
|Phase 2: 25% of users |5 days|25% of users |March 19, 2024|
|Phase 3: 100% of users| indefinite | 100% users |March 24, 2024|


## Overview
The current digital experience of VA 21-0995 doesn't include new questions asked on the updated paper form. The questions include an option to give updates on living situation, and for Veterans with conditions related to Military Sexual Trauma (MST) an option to include a notification in their medical files for their Veteran Health Administration (VHA) providers. There are also new required fields such as selection of Treatment facilities, and the option to not include a date for VA health visits after 2005. Notable changes include:

- Add housing risk page
- Update living situation page
- Add other housing risk page
- Update point of contact page
- Add treatment facility page
- Update supporting evidence page
- Update 5103 notice checkbox
- Add MST question page
- Add VHA notification page
- Update limiting consent question 
- Update review and submit page


## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| sc_new_form | This toggle enables the spring SC updates |

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

Our PM and PO will monitor analytics. If something goes wrong, the engineering team will be on standby to disable the flippers and fall back to prior version of the form.

Rollback plan:
1. PM and Engineering will monitor analytics for issues (failed submissions, significant user experience challenges, unexpected errors).
2. If there is a spike in errors or unexpected behavior, Engineering disables flipper which hides all updates to the form.
3. Communication will be sent to the VA Product Owner, Decision Review team, and LH team.
4. The Decision Review team team will priortize bug fixes in coordination with the VA PO (Amy Lai)
5. The Decision Review team and PO will conduct a go/no-go before re-releasing to production


### Stage I: moderated production testing (also known as User Acceptance Testing, or UAT)
Our VFS team was advised against testing in production due to the downstream actions that submitting an application triggers. To migtigate the risk this poses, we will be doing testing in a staging environment.

#### Planning
<!--- Desired date range or test duration: March 10-14, 2025 -->

- Desired test date: March 11, 2024
- Desired number of users: N/A
- How you'll recruit the right production test users: Internal team and VA audiences
- How you'll conduct the testing: Using test users and validating the staging submission, and successful downstream submission
- How you'll give the test users access to the product in production w/o making it live on VA.gov: We are conducting the testing in staging

#### Results
- Number of users: N/A
- Number of bugs identified / fixed: N/A
- Was any downstream service affected by the change?: N/A
- Types of errors logged: N/A
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: Yes/No.
- If yes, what: [FILL_IN] with ticket numbers

### Stage II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: March
- How will you make the product available in production while limiting the number of users who can find/access it: Feature toggle
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Abandonment rate: TBD
  - Contact Center calls due to inability to complete the form caused by errors <2 calls (reach out in advance to inform them of the SC form updates release)
  - Submission volume:
    - Canary: 20 submissions
    - 25%/50%/75%/100%: >1k submissions
  - Error rate: <1%
  - Pageviews: TBD
- Links to the dashboard(s) showing "success criteria" metrics:
  - Domo Dashboard request submitted
  - [DataDog Form submission dashboard]()
  - [Pageviews]()
- Who is monitoring the dashboard(s)?: Product Manager (Maurice DeBeary) and Engineering (Derek Fong, Molly T-M)


### Phase 1: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 5%

#### Results

- Number of unique users: 612 submissions (not entirely all using new form)
- Metrics at this stage (per your "success criteria"): 0 calls from contact center, ~30 submissions on new form
- Was any downstream service affected by the change?: N/A
- Types of errors logged: 0 form failures, 1 evidence failure due to blank images within file
- What changes (if any) are necessary based on the logs, feedback on user challenges, or VA challenges? None

### Phase 2: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 4 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: N/A
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: N/A
- Types of errors logged: N/A
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? N/A



### Phase 3: 100% of users

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
