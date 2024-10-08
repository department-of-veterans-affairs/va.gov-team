# Registration Only - Release Plan

## Step 1: Development

| Toggle name | Description |
| ----------- | ----------- |
| hca_reg_only_enabled | Enables the registration-only path for the Health Care Application |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [x] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [x] Confirm everyone agrees and is a GO for launch
  - [x] review the plan with your DEPO/OCTO representative.
  - [x] review the release plan with your team.

## Step 3: Production rollout
### Scope of the Registration Only path Experiment
- The goal of this experiment is to determine whether there is a Veteran experience use case/need for a registration pathway on the online 10-10EZ
- The experiment will run for 3 months (90 days)
- The expected outcome is Veterans will have further understanding of registration vs enrollment and will be more likely to choose enrollment in full health benefits.
     - If there is enough interest in Registration pathway online after month 1 to indicate a trend, then we will run a research session to gain feedback on a previously designed user flow, content and presentation.
          - We will be looking for over one-third of viewers are selecting the Registration option
     - If there is enough interest in Registration pathway online overall after 3 months, then we will consider how to integrate Registration process in the form as well as with VES to accept the data (not currently set up to receive this from VA.gov).
          - We will be looking for over one-third of viewers are selecting the Registration option
     - If there is not enough interest in Registration pathway online, we will consider removing the experiment from the form.
          - We will be looking for less than one-third of viewers are selecting the Registration option.

### Define the Rollback process

- We will utilize the feature toggle to manage the visibility in the production environment.  This will help mitigate any issues that may result from the new feature.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- We will not be running UAT on this feature

### Phase II: Staged Rollout (also known as unmoderated production testing)

#### Rollout Planning

- Desired date range:
     - 10/3/2024 - 12/31/2024 - This will be a 3-month long experiment
- How will you make the product available in production while limiting the number of users who can find/access it:
     - We will use the feature toggle to limit the traffic of users.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: 
  - Form errors : We want to ensure there is are no errors occuring in the form, caused by this feature
  - Number of Info Accordion clicks: this is a new feature, unsure of expectations
  - Number of Register selections (Reg Info page views) :  Expecting about 1/3 of total traffic to select Register option
  - Number of Page Exits : Expecting about 20% of Register selections to leave the form on Register Info page
  - Number of "Back" button clicks on Reg Info page: Expecting 80% of Register selections to click the "BacK" button on the Register info page
- Links to the dashboard(s) showing "success criteria" metrics: 
  - [GA4 Authenticated path exploration](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Xpk8PijJQpCkXPUsBezQbQ)
  - [GA4 Unauthenticated path exploration](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/rsa8M9z3TwiggRM6G6fCRw)
- Who is monitoring the dashboard(s)?:
     - Product Manager (Heather Justice), Data Analyst (Luis Simauchi)

### Stage A: Canary

*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning

- Length of time:
     - 10/3/2024-10/7/2024 
- Percentage of Users (and roughly how many users do you expect this to be):
     - 10%, about 60 authenticated users

#### Results

- Number of unique users: 19 users
- Metrics at this stage (per your "success criteria"): 17 views of the question page, no errors, one "back" button selection
- Was any downstream service affected by the change?: NO
- Types of errors logged: N/A
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? N/A

### Stage B: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time:
     - 10/7/2024-10/9/2024 
- Percentage of Users (and roughly how many users do you expect this to be):
     - 50%, about 300 authenticated users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 100% of users

#### Planning

- Length of time: 10/9/2024 - 12/31/2024
- Percentage of Users (and roughly how many users do you expect this to be): 100%, 250 users will select Registration per month (~700 total users for 3 months)

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

### 1-week results
- The target volumes are based on current average traffic to the 10-10EZ, in conjunction with volumes we received from 2019-2023 of registered Veterans obtaining service-connected care only
     - The forecast of 62 registration selections is based on approximately one-third of weekly service-connected care only registration volumes (212-225)
     - The number of 'Back' button clicks, form exits and download link clicks are estimations derived to support our hypothesis.

Weekly average ([monthly averages](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Registration#targets) divided by 4)
|Timeblock|# of application starts|# of accordion clicks|# of selection page views|# of Registration selection|# of 'Back' button clicks|# of form exits after Registration selection|# of clicks to download 10-10EZ form|
|---------|---------------|-------------|----------|---------------|---------------|----------|----------|
| Historical Weekly Average | 4500 | N/A | 2750 | 62 | 50 |12 | 2 |
| 1-week Total | x | x | x | x |x | x | x |

- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results
- The target volumes are based on current average traffic to the 10-10EZ, in conjunction with volumes we received from 2019-2023 of registered Veterans obtaining service-connected care only
     - The forecast of 250 registration selections is based on approximately one-third of monthly service-connected care only registration volumes (850-900)
     - The number of 'Back' button clicks, form exits and download link clicks are estimations derived to support our hypothesis.

|Timeblock|# of application starts|# of accordion clicks|# of selection page views|# of Registration selection|# of 'Back' button clicks|# of form exits after Registration selection|# of clicks to download 10-10EZ form|
|---------|---------------|-------------|----------|---------------|---------------|----------|----------|
|Historical Monthly Average | 18000 | N/A | 11000 |250 | 200 |50 | 10 |
|Month 1| x | x | x | x |x | x | x |
|Month 2| x | x | x | x |x | x | x |
|Month 3| x | x | x | x |x | x | x |
|Experiment Monthly Average | x | x | x | x |x | x | x |
|3-month Total | x | x | x | x |x | x | x |

- Any issues with VA handling/processing?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders?
3. Which assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
5. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
