<!-- markdownlint-disable MD024 -->
# Release Plan - New Landing Page with Today's VISTA Appointments

## Step 1: Development

You'll need to create a feature toggle (or two) or feature branch for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

**We created a feature branch**

## Step 2: Validation

- [X] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [X] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [X] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [X] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [X] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout?

**Yes**
- We are planning to rollout this feature to a pilot facility and then to additional facilities, as determined by OCTO. 
- We have built a utility into the application to be able to toggle a feature on for specific facilitiies.
- We will interview Veterans and staff to gather feedback and decide if adjustments are necessary before doing a staged rollout to all facilities. 
- Rollback plan consists of turning off the feature flag.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Desired date range or test duration: 1 day TBD
- Desired number of users: 1
- How you'll recruit the right production test users: Use Robert Tow's account
- How you'll conduct the testing: Zoom call with Robert Tow and the following  
- How you'll give the test users access to the product in production w/o making it live on VA.gov: turn on feature flag for a single facility and perform testing after hours

#### Results

- Number of users: 1
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

- Desired date range: January-December 2024
- How will you make the product available in production while limiting the number of users who can find/access it: feature flag will be enabled for certain facilities or clinics.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[use your KPIs to help guide this. It could be things like *abandonment rate < 20%*, *reported contact center calls < 2 calls*, *error rate < 5%*, etc.\]
    - Number of users who have completed Pre-Check-in: [FILL_IN]
    - Number of users who have completed eCheck-in: [FILL_IN]
    - Change in number of users who have completed Pre-Check-in: [FILL_IN]
    - Change in number of users who have completed eCheck-in: [FILL_IN]
- Links to the dashboard(s) showing "success criteria" metrics: 
  - [Power BI: Pre-Check-in Dashboard](https://app.powerbigov.us/groups/me/apps/741625e9-a049-4f8e-a424-d13c7a723da7/reports/3dd5c5a9-2f91-4330-b04c-0182e7f8129e/ReportSection0d9e69581e79924c6fbb)
  - [Power BI: eCheck-in Dashboard](https://app.powerbigov.us/groups/me/apps/741625e9-a049-4f8e-a424-d13c7a723da7/reports/3dd5c5a9-2f91-4330-b04c-0182e7f8129e/ReportSection)
  - [Google Analytics: Pre-Check-in Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.dateOption=last7days&_u.hasComparison=true/)  
  - [Google Analytics: eCheck-in Dashboard](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.dateOption=last7days&_u.hasComparison=true/)
- Who is monitoring the dashboard(s)?: Ben Brasso

*The KPIs and numbers are example values recommended by VSP but can be customized to your team's needs.*

### Stage A: Pilot

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time: 4 weeks 
- Percentage of Users (and roughly how many users do you expect this to be): 100% at specific facility(ies) TBD

#### Results

- Number of unique users: unlimited
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: Phased roll-out to additional facilities 

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 4 weeks
- Percentage of Users (and roughly how many users do you expect this to be): 100% at additional facility(ies) TBD

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]


## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Number of users who have completed Pre-Check-in: [FILL_IN]
- Number of users who have completed eCheck-in: [FILL_IN]
- Change in number of users who have completed Pre-Check-in: [FILL_IN]
- Change in number of users who have completed eCheck-in: [FILL_IN]
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of users who have completed Pre-Check-in: [FILL_IN]
- Number of users who have completed eCheck-in: [FILL_IN]
- Change in number of users who have completed Pre-Check-in: [FILL_IN]
- Change in number of users who have completed eCheck-in: [FILL_IN]
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
