
<!-- markdownlint-disable MD024 -->
# Release Plan: 526 Toxic Exposure

## Release Plan Overview [DRAFT]

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: TBD |TBD|TBD| TBD
|Phase 2: TBD |TBD|TBD| TBD
|Phase 3: TBD |TBD|TBD| TBD
|Phase 4: TBD |TBD|TBD| TBD
|Phase 5: TBD |TBD|TBD| TBD

Considerations
- Lighthouse synchronous /submit enpoint is still in development. LH team is targeting early June for Staging release.

## Overview
We are adding a toxic exposure section to the 526 ez disability benefits claim form, allowing Veterans to specify some aspects of their service history that might qualify them for additional disability benefits related to toxic exposure. This brings the digital form into parity with the paper 526 ez form on these exposure questions.

[Release plan user flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707410059042/66a7863edcd579a5bc8b4bd720f685a5d0724a49?wid=0-1707412077064)

### The release plan will need to consider the following use cases:
1. New applications
- Authenticated Users will be directed to fill out the 2022 version of the 526 form. Veterans may be directed to fill out the 2022 526ez depending on the level of incremental traffic set for the form (10%/25%/50%/75%/100%).


2. In Progress Forms
- Authenticated Users will be directed to fill out the 2022 version of the 526 form. Veterans may be directed to fill out the 2022 526ez depending on the level of incremental traffic set for the form (10%/25%/50%/75%/100%).

TBD
| User Type | Flipper Status | Form in Progress | Visible Form | V2 Info Content Displayed | Data Migrated |
|---|---|---|---|---|---|
| Authenticated Users | Disabled | No | v1 Form | No | No |
| Authenticated Users | Disabled | Yes, v1 | v1 Form | No | No |
| Authenticated Users | Disabled | Yes, v2 | v2 Form | Yes | No |
| Authenticated Users | Enabled | No | v2 Form | No | Yes |
| Authenticated Users | Enabled | Yes, v1 | v2 Form | Yes | Yes |
| Authenticated Users | Enabled | Yes, v2 | v2 Form | Yes | No |

### This release will include the following capabilities:
1. Implement Section IV of the 2022 paper form 526 including
2. 15a claiming conditions related to 
3. 15b gulf war
4. 15c herbicide
5. 15d hazards pages
6. 15e overflow (an attached page)

### This release will include the following changes:
1. migrate the submit endpoint
2. update JSON schema on FE and BE
3. Update pages on 526 to include TE questions
4. Implement new checkbox and loop pattern
5. transform the data to be accepted in the Lighthouse format
6. handle multiple exposures data
7. /generate PDF migration for the backup submission path
8. end to end testing of section 4 questions and display on PDF
9. Implement toxic exposure feature flag
10. UI changes for IPF notifications
11. implement updated logic for the new LH sync submit endpoint


---
## Release Steps for TE
 
1. Canary launch for LH Submit endpoint (also repeat for LH generatePDF)
2. Staggered live prod release of Submit for N Veterans
3. Monitor DD for errors & issues
4. if this goes well...
5. enable FF for TE for Veterans without an IPF
7. test in staging env before it goes to prod in daily deploy
8. let 10 records come through
9. turn it off, and inspect the data to ensure it's working
10. if it works
11. we continue incremental plan for the staggered release
12. 20%, 30%, 40%, etc.

POST
1. add TE pages to Google analytics in Domo (can we do this sooner?)
2. look at the count of sucessfull claim submissions




## Step 1: Development

[use this section to name the pieces of code we are touching and new capabilities we're delivering]

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the TE feature toggles here. (TBD)

| Toggle name | Description |
| ----------- | ----------- |
| burial_form_enabled | Enable the burial form |
| burial_form_v2 | vets-website v2 toggle |
| va_burial_v2 | vets-api v2 toggle |

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

Our PM and PO will monitor analytics. If something goes wrong, the engineering team will be on standby to disable the flippers and fall back to v1 of the form.

Rollback plan:
1. PM and PO monitor analytics for issues (failed submissions, traffic irregularies, unexpected errors).
2. Engineering disables flipper which hides v2 of the form.
   - Users with in-progress v2 sessions will finish out their v2 session. If they start a new session, they will be redirected to v1.
   - New users will be directed to v1 of the form.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Our VFS team was advised against testing in production due to the downstream actions that submitting an application for burial benefits triggers. To migtigate the risk this poses, we will be doing extensive E2E testing in a staging environment.

#### Planning

- Desired date range or test duration: April 3-12, 2024
- Desired number of users: 6 full submissions of the min, max, and overflow scenarios outlined in [this sheet](https://docs.google.com/spreadsheets/d/1qFzoRny9uDHegSh1CemWP_FhL606ki54Z-Go-04jOUA/edit?usp=sharing) (scenarios tab)
- How you'll recruit the right production test users: VFS team members, OCTO stakeholders, and VBA stakeholders will test
- How you'll conduct the testing: using test users and validating the staging form payload submissions with downstream stakeholders
- How you'll give the test users access to the product in production w/o making it live on VA.gov: N/A

#### Results

- Number of users: 6
- Number of bugs identified / fixed: See [this sheet](https://docs.google.com/spreadsheets/d/1pKE5rvUgoJe0vkh06W4EVCKL5ygXxgajCRa3nVTLARQ/edit?usp=sharing). Several issues were identified as Platform-level issues that are outside the scope of our team to fix. We will work with the Platform Team to fix.
- Was any downstream service affected by the change?: Yes, as part of this form update, we also migrated the form payload from the depreciated Central Mail API to the Benefits Intake API.
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: April 15 - May 10, 2024
- How will you make the product available in production while limiting the number of users who can find/access it: Flipper
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Abandonment rate:
  - Submission volume:
    - Canary: 10 submissions
    - 25%/50%/75%: >10 submissions
  - Error rate: <1%
  - Pageviews
- Links to the dashboard(s) showing "success criteria" metrics:
  - Domo Dashboard request submitted
  - [DataDog v2 submission dashboard](https://vagov.ddog-gov.com/logs?query=%40message_content%3A%22Lighthouse%3A%3ASubmitBenefitsIntakeClaim%20job%20starting%22%20%40named_tags.source%3Aburials-v2%20&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.benefits_intake_uuid%2C%40payload.claim_id%2C%40named_tags.request_id&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=hot&stream_sort=time%2Casc&viz=stream&from_ts=1713934800000&to_ts=1714747320000&live=false)
  - [Pageviews](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240418&_u.date01=20240507&explorer-table.filter=~2Fburials-and-memorials-v2~2Fapplication~2F530~2Fintroduction&explorer-table.plotKeys=%5B%5D/)
- Who is monitoring the dashboard(s)?: Product Manager (Laura Steele) and OCTO PO (Emily Theis)


### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 10 submissions (estimated 4 hours)
- Percentage of Users (and roughly how many users do you expect this to be): 20% of daily submission, 10-15 users

#### Results

- Number of unique users: 10
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: No
- Types of errors logged:
  -  Selected Tribal Land Does not populate the pdf #81372
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days (actual: 7)
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: 40
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: No
- Types of errors logged:
   - Facility name not appearing in overflow #81791 
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? none

### Stage C: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days (actual: 7 days)
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: No
- Types of errors logged:
   - Date stamp format did not include time zone (UTC) and date stamp should stamp date the claim was submitted rather than the date the pdf was generated #82382
   - Broken link for form pdf within the react widget on the form intro page #82383
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? none

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

- Length of time: 2 days
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

- Number of unique users:
- Error rate:
- Abandonment rate:
- Time to complete:
- Sessions to complete
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

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?

## Open Quesdtions for Post MVP
2. Open Questions: If users are in an active session, they will complete the v1 version of the form.
3. should we separate the MVP release and the IPF release on this page?
4. is there a specfic DD dashboard we could use to monitor the product performance of the release
5. Do we need to re-pipe LH to EVSS before the release? What is the decision on that?
