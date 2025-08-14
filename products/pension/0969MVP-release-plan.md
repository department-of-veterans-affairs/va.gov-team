
<!-- markdownlint-disable MD024 -->
# Release Plan: Income and Asset Statement (0969) MVP

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Staging testing |14 days|7| June 20-27, 2025 and July 8-15, 2025 |
|Phase 2: 10 submissions |2 days|10 users|  In the 8/21 - 8/28,2025 timeframe|
|Phase 3: 25% of users| 3 days| 25% users (auth users only) | In the 9/2 - 9/9,2025 timeframe|
|Phase 4: 100% of users| indefinite | 100% users (auth users only) | In the 9/10 - 9/17,2025 timeframe |
|Phase 5: Retire V0 (non alert version)| permanent | 100% users | TBD | 

Considerations
- Income and Asset statement paper form volume is typically ~40k per year, depending on online form adoption we expect somewhere in the ~500 to ~1500 submissions per month.

## Overview
As referenced in the [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/21P-0969-product-outline.md), the 21P-0969 is available to Veterans today through a paper form.  This initiative will bring the form online so that Veterans instructed to complete it can more efficiently populate their income and asset information through a streamlined digital experience.  This inititaive is the MVP initial digitization of the Income and Asset statement.  
 

### The release plan will need to consider the following use cases:
1. Applications In-Progress
   - Before full release:
      - Unauthenticated Users: As 0969 exists only as a paper form today, there will not be in-progress applications prior to launch start.  Upon launch start the applicant will access the online form experience when turned on for 100 percent of users or selected through the incremental toggle percentage setting.
      - Authenticated Users:  As 0969 exists only as a paper form today, there will not be in-progress applications prior to launch start.  Upon launch start the applicant will access the online form experience when turned on for 100 percent of users or selected through the incremental toggle percentage setting.
   - After 100% release:
      - Unauthenticated Users:  The applicant will access the online form experience
     - Authenticated Users: the applicant will access the online form experience
2. Applications Not Started
   - Before full release:
      - Unauthenticated Users: The applicant will access the online form experience when turned on for 100 percent of users or selected through the incremental toggle percentage setting.      Applicants not selected through the incremental toggle percentage settingwill be directed to the (PDF) paper form.
      - Authenticated Users: Users may be directed to fill out the updated version (v1) with alerts presented depending on the level of incremental traffic set for the updated version (v1) (25%/100%)
   - After 100% release
      - All applicants will access the online form experience.

| User Type | Flipper Status | Form in Progress |Version| Content Displayed|
|---|---|---|---|---|
| Authenticated Users | Enabled | No | online form  | digitized | online application |
| Authenticated Users | Enabled | Yes| online form  | digitized | online application |
| UnAuthenticated Users | Disabled | No | Paper Form PDF | not digitized | link to PDF |
| UnAuthenticated Users | Disabled | Yes | Paper Form PDF | not digitized | link to PDF |
| UnAuthenticated Users | Enabled | N/A | online form  | digitized | online application |
| Authenticated Users Post 100% Release| Enabled | Yes | online form | digitized | online application |
| UnAuthenticated Users Post 100% Release| Disabled | Yes | Paper Form PDF | not digitized | link to PDF |


### This release will include the following components:
1. Form fields (add new fields)
2. Form component (add new components)
3. Accessibility updates 
4. Info alerts
5. Toggle to enable form
6. Confirmation email sent to users confirming their application submission through VA.gov
---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| income_and_assets_form_enabled | Enable online form|



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
Analytics dashboard here: https://vagov.ddog-gov.com/dashboard/lists/manual/1944?q=team%3Abenefits&p=1

Rollback plan:
1. PM and Engineer monitor analytics for issues (failed submissions, traffic irregularies, unexpected errors).
2. Engineering disables flipper which hides v0 of the form.
   - Users with in-progress v1 sessions will finish out their v1 session. If they start a new session, they will be redirected to v0.
   - New users will be directed to v1 of the form.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Our VFS team was advised against testing in production due to the downstream actions that submission triggers. To migtigate the risk this poses, we will performed extensive testing in a staging environment.


### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: August 7-20, 2025
- How will you make the product available in production while limiting the number of users who can find/access it: Flipper
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
   - Submission volume:
    - Canary: 10 submissions
    - 25%/55%: >10 submissions
  - Error rate: <1% 
  
- Links to the dashboard(s) showing "success criteria" metrics:
  -  https://vagov.ddog-gov.com/dashboard/lists/manual/1944?q=team%3Abenefits&p=1
- Who is monitoring the dashboard(s)?: Product Manager (Matt Reilly) and Lead Engineer (Matt knight)


### Stage A: 10 Users

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 1-2 days
- Percentage of Users (and roughly how many users you expect this to be): 10% of daily submissions, 10 users

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Submission volume:
    - Canary: 10 submissions
    - 25%/100%: >10 submissions
  - Error rate: <1% 
- Was any downstream service affected by the change?: No
- Types of errors logged:
  -  
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 3 days
- Percentage of Users (and roughly how many users do you expect this to be): 25%

#### Results

- Number of unique users: 
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: No
- Types of errors logged:
   -  
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? none

rily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]


## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of unique users:
- Network traffic to back end server 
- Submission volume:
    - Canary: 10 submissions
    - 25%/100%: >10 submissions
  - Error rate: <1% 
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
 - Submission volume:
    - Canary: 10 submissions
    - 25%/100%: >10 submissions
  - Error rate: <1% 
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]
