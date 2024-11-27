# Release Plan NOD Confirmation Page Updates 

## Release Plan Overview

| Phase | Duration | Users | Dates |
|---|---|---|---|
|Phase 1: Production release testing |indefinite | 100% users | November 27, 2024  |
|Phase 2D: 100% of users| indefinite | 100% users (auth and non-auth) |December 9, 2024|


## Overview
The NOD confirmation page has been updated to show all of the submitted form data to enable Veterans who print the page to see the choices and data they submitted to the VA. These changes are behind a feature toggle nod_confirmation_update


## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| nod_confirmation_update | This toggle enables the NOD Conf page updates |

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

Our PM and PO will monitor analytics.

Rollback plan:
1. PM and FE Engineering will monitor contact center feedback channels for any potential issues/feedback 
2. If there is any unexpected issue, Engineering will disable the flipper which hides the page updates.
3. Communication will be sent to the VA Product Owner and Decision Review team.
4. The Decision Review team team will priortize enhancements to the content of the confirmation page in coordination with the VA PO (Amy Lai)
5. Engineering will re-enable the flipper


### Phase I: Full production release
This is a full production release. The updated confirmation page will be available for 100% of users

#### Immediate Rollout Planning

- Desired date: November 27, 2024
- How will you make the product available in production while limiting the number of users who can find/access it: Immediate release available to all users via toggle
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Contact Center calls due to inability to print confirmation or inaccurate confirmation details <3 calls
  - Pageviews
- Links to the dashboard(s) showing "success criteria" metrics:
  - [DataDog Form submission dashboard]()
  - [Pageviews]()
- Who is monitoring the dashboard(s)?: Product Manager (Maurice DeBeary) 



#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE] yes | no | N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]



## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.


### 1-month results

- Number of unique users: [FILL_IN]
- Post-launch KPI 1 actual: Less than 3 contact center calls regarding the confirmation page
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
