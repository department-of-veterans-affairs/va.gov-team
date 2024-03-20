
<!-- markdownlint-disable MD024 -->
# Release Plan: 2024 21P-530EZ Online Form Updates

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Moderated production testing |2 days|TBD| March 20-26, 2024  |
|Phase 2: Canary production testing |3 hours|10 claims| March 27-28, 2024  |
|Phase 2A: 25% of users |7 days|25% of users (auth and non-auth)|Week of April 1|
|Phase 2B: 50% of users |7 days|50% of users (auth and non-auth)|Week of April 8|
|Phase 23: 75% of users |7 days|75% of users (auth and non-auth)|Week of April 15|
|Phase 2D: 100% of users| indefinite | 100% users (auth and non-auth) | Week of April 22 |
|Phase 3: Retire V1| permanent | 100% users (auth and non-auth) | TBD |

Considerations
- Form volume is typically 25 authenticated submissions and 30 unauthenticated submissions per day

## Overview
As outlined in the [intiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/burial-allowance/530-initiative-brief-2024-updates.md), the online 21P-530EZ for is out of alignment with the most recent version (or several versions) of the paper form. The updates associated with this release will add missing fields to the online form, remove depreciated fields, update form components, and address critical accessibility issues within the pages that are getting updated. Updates to the static pages that lead into the form flow may also be needed.

[Release plan user flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707410059042/66a7863edcd579a5bc8b4bd720f685a5d0724a49?wid=0-1707412077064)

### The release plan will need to consider the following use cases:
1. Applications In-Progress
   - Before full release:
      - Authenticated Users: Users will complete the old version (v1) of the form.
      - Unauthenticated Users: If the user maintains a single active session, they will complete the old version of the form. If they leave a session and start a new one, they may be directed to fill out the updated version (v2) of the form.
   - After 100% release:
      - Authenticated Users: If users are in an active session, they will complete the v1 version of the form. If they leave the active session, and log back in after full release, they will be taken back to the intro page of the form and see an info alert stating the form has been updated and they may need to fill out additional info. Their v1 data will appear in the v2 form.
      - Unauthenticated Users: If users are in an active session, they will complete the v1 version of the form. If they leave the active session and return, they will be taken back to the intro page of the form and see an info alert noting that updates have been made. They will start over with the new version of the form -- none of their v1 data will appear in v2 of the form.
2. Applications Not Started
   - Authenticated Users: Users will complete v2.
   - Unauthenticated Users: Users will complete v2.

| User Type | Flipper Status | Form in Progress | Visible Form | V2 Info Content Displayed | Data Migrated |
|---|---|---|---|---|---|
| Authenticated Users | Disabled | No | v1 Form | No | No |
| Authenticated Users | Disabled | Yes, v1 | v1 Form | No | No |
| Authenticated Users | Disabled | Yes, v2 | v2 Form | Yes | No |
| Authenticated Users | Enabled | No | v2 Form | No | Yes |
| Authenticated Users | Enabled | Yes, v1 | v2 Form | Yes | Yes |
| Authenticated Users | Enabled | Yes, v2 | v2 Form | Yes | No |
| No-Auth Users (Pre-100% Release) | N/A | No | v1 Form | No | No |
| No-Auth Users (Post-100% Release)| N/A | No | v2 Form | Yes | No |

### This release will include the following components:
1. Form field updates on some pages (add new fields, remove old fields)
2. Form component updates on the pages already receiving form field updates
3. Accessibility updates on the pages already receiving form field updates
4. Info alert on the form information page letting new users or in-progress users who were migrated to v2 know that the form has been updated.
5. Toggle for inforamtion page to show old vs new form instructions.
6. New confirmation email sent to users confirming their claim submission through VA.gov
---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| [FILL_IN] | [FILL_IN] |

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

### Define the Rollback process

Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible.

> Example
>
> - Our PM and PO will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the engineering team to get the FE engineer to disable the toggle.

[FILL_IN]: create your rollback plan

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: [FILL_IN]
- Desired number of users: [FILL_IN]
- How you'll recruit the right production test users: [FILL_IN]
- How you'll conduct the testing: [FILL_IN]
- How you'll give the test users access to the product in production w/o making it live on VA.gov: [FILL_IN]

#### Results

- Number of users: [FILL_IN]
- Number of bugs identified / fixed: [FILL_IN]/[FILL_IN]
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN]: Tickets of bugs/changes
- Was any downstream service affected by the change?: yes/no, [FILL_IN]
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: [FILL_IN]
- How will you make the product available in production while limiting the number of users who can find/access it: [FILL_IN].
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
  - [FILL_IN] : list
  - [FILL_IN] : of
  - [FILL_IN] : KPIs
- Links to the dashboard(s) showing "success criteria" metrics: [FILL_IN] with link to dashboards (example: Google Analytics dashboard)
- Who is monitoring the dashboard(s)?: [FILL_IN]

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): [FILL_IN]% (*Recommendation: select a percentage that targets ~500 users, or at most 10%*)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
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

- Length of time: [FILL_IN] (*minimum 2 hours*)
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

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): 75%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 100% of users

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
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
