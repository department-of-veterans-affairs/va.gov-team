
<!-- markdownlint-disable MD024 -->
# Release Plan: 2024 21P-527EZ Intent to File V1 Updates

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Staging testing |14 days|7| July 1-10, 2025 and July 22-24, 2025 |
|Phase 2: 50% of users |7 days|50% of users (auth users only)|  Aug 7, 2025|
|Phase 2B: 100% of users| indefinite | 100% users (auth users only) | Aug 14, 2025|
|Phase 3: Retire V0| permanent | 100% users (auth users only) | TBD | 

Considerations
- Pension form volume is typically ~200 per week, with ~180 authenticated submissions and ~20 unauthenticated submissions 

## Overview
As outlined in the [intiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/burial-allowance/530-initiative-brief-2024-updates.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/ITF-product-brief.md)), VA has the concept of an Intent to File (ITF), which enables Veterans to establish a potential start date for benefit payments up to a year before they submit their claim. It is especially helpful for Veterans who expect to take some time to gather evidence to complete and submit a benefit claim, and want to maximize their opportunity for back pay. By providing an intuitive experience that provides a series of alerts that enable Veterans to undertand the purpose and benefits of intent to file, and next steps if the system fails to generate ITF, the Veteran will benefit from claity that enhances their trust in VA systems.


### The release plan will need to consider the following use cases:
1. Applications In-Progress
   - Before full release:
      - Unauthenticated Users: Intent to File alert functionality is not available to unauthenticated users.
      - Authenticated Users: If the user maintains a single active session, they will complete the legacy, back-end only version of the Intent to File experience. If they leave a session and start a new one, they may be directed to the updated version (v1) with alerts presented about ITF, depending on the level of incremental traffic set for the legacy form (50%/100%).
   - After 100% release:
      - Unauthenticated Users:  Intent to File functionality is not available to unauthenticated users.
     - Authenticated Users: If the user maintains a single active session, they will complete the legacy, back-end only version of the Intent to File experience.        If they leave a session and start a new one, they may be directed to the updated version (v1) with alerts presented about ITF. 
2. Applications Not Started
   - Before full release:
      - Unauthenticated Users: Intent to File functionality is not available to unauthenticated users.
      - Authenticated Users: Users may be directed to fill out the updated version (v1) with alerts presented depending on the level of incremental traffic set for the updated version (v1) (50%/100%)
   - After 100% release
      - Authenticated Users: Users will complete the v1 experience.

| User Type | Flipper Status | Form in Progress | ITF Version| V1 Info Content Displayed|
|---|---|---|---|---|
| Authenticated Users | Disabled | No | v0 | No | No |
| Authenticated Users | Disabled | Yes, v0 | v0 Form | No | No |
| Authenticated Users | Disabled | Yes, v1 | v1 Form | Yes | No |
| Authenticated Users | Enabled | No | v1  | No | Yes |
| Authenticated Users | Enabled | Yes, v0 | v1 | Yes | Yes |
| No-Auth Users (Pre-100% Release) | N/A | No | v0 | No | No |
| No-Auth Users (Post-100% Release)| N/A | No | v1 | Yes | No |

### This release will include the following components:
1. Form component updates 
2. Info alerts on the form information page letting new users know the purpose and benefit of ITF and next steps when there is a system issue.
3. Toggle for inforamtion page to show old vs new form instructions.
---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| pension_itf_show_alert | Enable ITF V1 alerts|
| intent_to_file_synchronous_enabled |Toggle Synchrounous ITF V1 |



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
<!--
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
-->

### Define the Rollback process

Our PM and Engineer will monitor analytics. If something goes wrong, the engineering team will be on standby to disable the flippers and fall back to v1 of the form.

Rollback plan:
1. PM and Engineer monitor analytics for issues (failed submissions, traffic irregularies, unexpected errors).
2. Engineering disables flipper which hides v0 of the form.
   - Users with in-progress v1 sessions will finish out their v1 session. If they start a new session, they will be redirected to v0.
   - New users will be directed to v1 of the form.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Our VFS team was advised against testing in production due to the downstream actions that submitting an application for burial benefits triggers. To migtigate the risk this poses, we will performed extensive testing in a staging environment.

Completed staging test plan   
[ITFV1 Test Plan.xlsx](https://github.com/user-attachments/files/21530941/ITFV1.Test.Plan.xlsx)

[ITFV1 Regression Test Plan (1).xlsx](https://github.com/user-attachments/files/21530943/ITFV1.Regression.Test.Plan.1.xlsx)

Downstream validation examples of ITFs confirmed in downstream system VBMS:




<img width="1411" height="752" alt="ITFSuccessVBMS1" src="https://github.com/user-attachments/assets/6029609b-9c00-4ed4-b341-13c9f7ef35bf" />



<img width="1105" height="687" alt="ITFSuccessVBMS2" src="https://github.com/user-attachments/assets/c2c658cc-ef1b-4b3a-9b30-8fe8b4a3ae9d" />





### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: August 7-20, 2025
- How will you make the product available in production while limiting the number of users who can find/access it: Flipper
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
   - Network traffic to back end server 
  - Error rate: <1%
  - Pageviews
  - Abandonment rate
- Links to the dashboard(s) showing "success criteria" metrics:
  - [[DataDog v2 submission dashboard](https://vagov.ddog-gov.com/logs?query=%40message_content%3A%22Lighthouse%3A%3ASubmitBenefitsIntakeClaim%20job%20starting%22%20%40named_tags.source%3Aburials-v2%20&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.benefits_intake_uuid%2C%40payload.claim_id%2C%40named_tags.request_id&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=hot&stream_sort=time%2Casc&viz=stream&from_ts=1713934800000&to_ts=1714747320000&live=false)](https://vagov.ddog-gov.com/dashboard/r39-ere-8pf/benefits-pension-527-itf?fromUser=fal[…]sliding&from_ts=1753963604159&to_ts=1753967204159&live=true)
- Who is monitoring the dashboard(s)?: Product Manager (Matt Reilly) and Lead Engineer (Matt knight)


### Stage A: 50% of Users

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 50% of daily submissions, approximately 90 users

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: No
- Types of errors logged:
  -  Selected Tribal Land Does not populate the pdf #81372
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage B: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 7 days (actual: 7)
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: No
- Types of errors logged:
   - Facility name not appearing in overflow #81791 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? none

rily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]


## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users:
- Network traffic to back end server 
  - Error rate: <1%
  - Pageviews
  - Abandonment rate
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Error rate:
- Abandonment rate:
- Time to complete:
- Sessions to complete
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]
