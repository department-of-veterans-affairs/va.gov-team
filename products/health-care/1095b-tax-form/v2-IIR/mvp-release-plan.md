
# 1095-B MVP Release Plan

## Step 1: Development

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| TBD | TBD |

## Step 2: Validation

Before enabling your feature toggle in production, you'll need to:

- [X] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [X] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [X] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [X] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [X] review the plan with your DEPO/OCTO representative.
  - [X] review the release plan with your team.

## Step 3: Production rollout

### Define the Rollback process

Developer and Product Manager will monitor analytics and logging at each rollout phase. If there is a spike in errors or unexpected behavior, they will disable the feature flag for all users. 

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Planning

- Turn the feature flag on for Mike King in production
  - Confirm he can see his 1095-B
- Find two more OCTO Veterans we can test in production with
  - Confirm they can see their 1095-B

#### Results

- Number of users: 3
- Number of bugs identified / fixed: 
  - TBD
- Was any downstream service affected by the change?: 
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? 

### Phase II: Staged Rollout (also known as unmoderated production testing)

We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning

- Desired date range: March 12th - 14th
- How will you make the product available in production while limiting the number of users who can find/access it: we will be turning on the feature flag for a percentage of users and increasing every day.
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Number of download clicks:
  - Percentage of download errors:
- Who is monitoring the dashboard(s)?: Kris Pethtel & Megan Commons

### Stage A: Canary

#### Planning

- Length of time: March 12
- Percentage of Users: 10% of users

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Number of download clicks:
  - Percentage of download errors:
- Was any downstream service affected by the change?: 
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage B: 50% of users

#### Planning

- Length of time: March 13
- Percentage of Users (and roughly how many users do you expect this to be): 50%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Number of download clicks:
  - Percentage of download errors:
- Was any downstream service affected by the change?: 
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage C: 100% of users

#### Planning

- Length of time: March 14
- Percentage of Users (and roughly how many users do you expect this to be): 100%

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - Number of download clicks:
  - Percentage of download errors:
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

## Post Launch metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results post 100% rollout

- Number of download clicks:
- Percentage of download errors:
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results post 100% rollout

- Number of download clicks:
- Percentage of download errors:
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders?
1. Which assumptions you listed in your product outline were/were not validated?
1. How might your product evolve now or in the future based on these results?
1. What technical tasks are needed to clean up (i.e., removal of feature toggles)?
