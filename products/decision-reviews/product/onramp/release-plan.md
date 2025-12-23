<!-- markdownlint-disable MD024 -->
# Release Plan

## Step 0: Resolve all launch blockers

### Prepare entry points for launch

Per [IA Design for Onramp: Entry Points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/benefits-portfolio/onramp-decision-review-disability-options.md#entry-points-):

**Please note:** The Governance Team requires preview links of updated entry points as a part of staging review in the Collaboration Cycle. It may be a launch-blocking issue. The Centralized Content and IA team will be adding a link to the entry pages, as noted below, and this needs to requested a minimum of one week before the staging review cutoff (four days prior to scheduled review). **Two weeks of advanced knowledge is preferred when possible.** Please communicate the staging review date as soon as it is scheduled to your main Content and IA contact. 

#### Required entry points

1. **VA decision reviews and appeals**
  - Entry page URL: https://www.va.gov/decision-reviews/
  - Placement description: Add a link to the tool under More information and resources
  - Link details
    - Link label: Link and content TBD by content
    - Link destination: va.gov/decision-reviews/explore-disability-claim-options/
  - Notes:
    - Who will update: Content will add the link and any related content
    - When will this entry point go live: at launch

2. **Decision reviews hub side navigation**
   - Placement description: Add a link to the tool under More resources
   - Link details
    - Link label: Explore disability claim decision review options
    - Link destination: va.gov/decision-reviews/explore-disability-claim-options/
  - Notes:
    - Who will update: IA will add the link
    - When will this entry point go live: at launch

#### Additional key entry points

1. **Crosslinks within DR hub**
  - Placement description: Add a link to the tool as appropriate and determined by content to the following pages
    - [Supplemental claims](https://www.va.gov/decision-reviews/supplemental-claim/)
    - [Higher-level reviews](https://www.va.gov/decision-reviews/higher-level-review/)
    - [Board appeals](https://www.va.gov/decision-reviews/board-appeal/)
    - [DR R&S page](https://www.va.gov/resources/choosing-a-decision-review-option/)
  - Link details
    - Link label: TBD by content
    - Link destination: va.gov/decision-reviews/explore-disability-claim-options/
  - Notes:
    - Who will update: Content will update post launch
    - When will this entry point go live: post launch

#### <a name="launch"></a>Launch coordination <br>
*Communication when preparing for launch is critical to ensuring all supporting content, links, and messaging are implemented in a timely manner to ensure a good experience. Missing any of these steps can result in findability challenges, incorrect or misleading information, duplicate content, etc. *

| Key task | Responsibility | When to complete | Additional info |
| --- | --- | --- | --- |
| Staging review | DR | TBD | OCTO to prepare entry point preview link -- Product team to link to IA spec |
| Communicate launch date | DR | Once scheduled | Allows OCTO to plan for content updates as needed |

### Align on the success metrics we plan to track

- [ ] Three GA synthetic analytics already defined and benchmarks
- [ ] Success metrics suggested by Veteran pain point research
- [ ] Other qualitative and quantitative CSAT signals (Contact Center, Medallia, etc.)

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

To roll the onramp back, we would need coordinate with centralized Content & IA.

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
