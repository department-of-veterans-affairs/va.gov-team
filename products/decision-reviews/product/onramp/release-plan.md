<!-- markdownlint-disable MD024 -->
# Release Plan

## Step 0: Resolve all launch blockers

### Coordinate with owners of incoming links

- [ ] Document the steps in this plan for requesting a scheduled update
- [ ] Document the steps required in case a rollback is needed.

### Determine whether we plan to do UAT (user acceptance testing post-launch)

- [ ] If no, update release plan accordingly.
- [ ] If yes, coordinate with enablement to plan UAT

### Board/OAR (+ OGC Benefits) approval

- [ ] Determine relative size of userbase for new (edge case?) scenarios
- [ ] Assess the case for launching with the existing fidelity
  - [ ] Potentially with "legal diclaimer language"
  - [ ] Refine success metrics to be tracked post-launch
- [ ] Obtain approval for launch

## Step 1: Development

There is no feature toggle.
* The app is registered in the content-build repository in its registry.json file, which has a vagovprod flag currently set to false, meaning it does not deploy to production.
* When we are ready to officially launch the app, we'll set this value to true, merge in the code, and wait for a content-build deployment, which happens daily at 10am ET.

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling the feature toggle in production, we need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Validate in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work with any downstream or dependent systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

1. Roll out to audience (accomplished by update to public-facing Drupal pages owned by centralized Content)
2. Track success metrics against benchmarks starting with the first week's worth of data and refining as more data comes in.
3. If negative anomalous data detected, rollback and investigate.

### Rollback

To roll the onramp back, we would need the owners of the public-facing pages to revert or temporarily remove any links to the onramp

### DECISION POINT: Will we do moderated production testing (User Acceptance Testing, or UAT)?

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

### Results Tracking (Post-Launch)

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
