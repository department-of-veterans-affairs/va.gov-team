# 10-10EZ Veteran health care application Toxic Exposure questions - Release Plan 
- Last updated: 04/04/2024


## Step 1: Development


Feature toggle

| Toggle name | Description |
| ----------- | ----------- |
| ezr_prod_enabled | Toggle to enable 100% of users to see the 10-10EZR |
| ezr_tera_enabled | Toggle to enable users to see the newly added TERA questions |
.
## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
  - [x] [Link to Test cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/TERA%20Question%20Feature%20Documents/TERA%20Questions%20Release%20Plan.md)
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
   - [x] Confirm with Ramya Venkataraman (ramya.venkataraman@va.gov) and team on End to End testing
   - [x] [Link to confirmation of successful transmission/processing](**Need to add documentation**)
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to (scheduled for 4/8):
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

- PM and Data Analyst will monitor analytics. If they see a spike in errors or unexpected behavior, they will contact the Engineering team to disable the toggle and begin triage.
- PM and Engineering will contact the VES Sustainment team for additional triage


### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration:
     - **Post-Launch (After 4/10)**
- Desired number of users:
     - **TBD** participants
- How you'll recruit the right production test users:
     - Perigean recruiting
- How you'll conduct the testing:
     - Moderated
- How you'll give the test participants access to the product in production w/o making it live on VA.gov:
     - It will be live

#### Results

- Number of users: 
- Number of bugs identified / fixed: 
- Was any downstream service affected by the change?: 
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? 

### Phase II: Staged Rollout (also known as unmoderated production testing)

This rollout will not be phased.  We will deliver this change at 100% on 4/10/2024

#### Rollout Planning

- Desired date range:
     - 04/10/2024
- How will you make the product available in production while limiting the number of users who can find/access it:
     - We will run a test with a couple Production test users on 4/9/2024 prior to launching at 100%
     - We will not limit the number of users on rollout
- What metrics-based criteria will you be monitoring to determine success?:  Errors accessing the new pages, Errors submitting to Enrollment System with the new data, Errors within the application as a whole.

>## Measuring Success
>
>### Objective: Update the 10-10EZR, so that Veterans have the opportunity to provide Toxic Exposure information.
>
>#### **Key Result #1:** 70% of Veterans who visit this page will answer Yes to provide TERA information
>
>Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
>
>| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
>|------------- |---------|-------------- |-------------- |-------------- |
>|Veterans who answered Yes to providing TERA info |N/A| 70% | TBD | TBD |
>
>
>#### **Key Result #2:** 75% of Veterans who said Yes to providing TERA information will provide info in at least one TERA question
>
>Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
>
>| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
>|------------- |---------|-------------- |-------------- |-------------- |
>|Veterans answer Yes to Cleanup or Response |N/A| 10% | TBD | TBD |
>|Veterans answer Yes to Service in Gulf War |N/A| 10% | TBD | TBD |
>|Veterans answer Yes to Combat Operations |N/A| 70% | TBD | TBD |
>|Veterans answer Yes to Agent Orange |N/A| 10% | TBD | TBD |
>|Total Veterans that provided an answer to at least one question |N/A| 75% | TBD | TBD |
>
- Links to the dashboard(s) showing "success criteria" metrics:
     - Data source - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - Data source for errors - [Sentry Logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- Who is monitoring the dashboard(s)?:
     - Product Manager - Alex Seelig
     - Data Analyst - Luis Simauchi

- Length of time:
     - 04/11/24
- Percentage of Users (and roughly how many users do you expect this to be):
     - 100% of all Veterans
     - about 50 submissions per day


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
