# Release Plan (WIP)

## When to use this release plan

If you answer yes to any of the questions below, you'll need to create a release plan using this template.

Does the feature you are working on moderately or significantly affect the Veteran experience of the product?
- _YES_

Does the feature you are working on change the structure of the underlying data?
- _YES - links and promo content on the existing/current homepage is hard coded on the front end but will draws from Drupal as the source of truth in the redesigned experience_

Does the feature's backend or downstream interactions change? 
- _NO_

Is this a brand new experience for a Veteran?
- _NO_

The team should develop this plan in parallel with the development of the feature your team is creating.

## How to use this release plan

1. Create a release plan using this template in your feature documentation. Optionally, remove the extra text from the template.
2. Fill out all the details below.
3. Review the release plan with the team and your OCTO before [releasing your app to production](#step-3-production-rollout).

---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description | Issue
| ----------- | ----------- | ----------- |
| [_TBD_] | Controls opt-in modal display on live homepage | [#11653](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/department-of-veterans-affairs/va.gov-cms/11653)
|[_feature_homepage_v2: FEATURE_HOMEPAGE_V2_] | CMS feature flag/config setting controls the new homepage design deployment to Prod | [#10965](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10965)

## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Soft launch
Rather than a staged roll-out, the redesign will be "soft launched" in Production as a parallel page which Veterans and beneficiaries can visit via "opt in" from the existing VA.gov homepage. A similar method was used during the original launch of VA.gov but was managed using a preview subdomain which is not an option for this launch.

Two options were evaluated during a design, accessibility and implementation discussion

- a banner, allowing a user to move between the existing and new experiences
- a pop-up modal allowing a user to "opt in" to the new experience. The modal was determined to be the preferred approach.

<details>
<summary> Pros/cons for banners and modals </summary>

Banners
 - (+) avoid the risk of stacking modals
 - (-) could unintentionally introduce user distrust 
 - (-) would create an escape route preventing data and feedback collection
 - (+/-) banners are less prominent 
 - (-) banner blindness
Modal
 - (-) stacking risk presents usability and accessibility concerns 
 - (+) prominent display
 - (+) making it dismissible will manage annoyance factor and various user flows
</details>

**Expected behavior**

- The redesigned experience modal is presented only on the VA.gov homepage.
- A Veteran or beneficiary can interact with the modal to agree or decline to use the redesigned homepage.
- The modal offering the redesigned homepage experience displays only once within a user's session.
- Regardless of previous opt-in or decline, the modal will be presented during the user's next session (which includes the homepage).
- If the Veteran or beneficiary opts-in to the redesigned homepage experience, the redesigned page opens in the same window and tab.
- The Veteran or beneficiary can return to the current homepage by using the VA logo and/or back button. The breadcrumb may also be an option, depending on the page.
- Focus management and experience via keyboard, voice or screenreader will follow patterns established by other modals in use across VA.gov.

_Acceptable known risk: Veterans or beneficiaries who opt-in to the redesigned experience may not be able to easily return to the redesigned page after navigating to deeper content pages. The user may be able to return to the redesigned page using the back button. This user will have another opportunity to opt-in from the homepage during the next VA.gov session._

- This modal will use an existing pattern and the engineering team will conduct [Discovery for the soft launch modal](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-cms/issues/11587) to resolve any pending implementation questions. 

### Define the Rollback process

Even though your feature has been tested and ready, production is still a different environment than staging. You'll need to create a rollback plan if things go wrong. Usually, this is as simple as a feature toggle flip. Be as specific as possible.

> The opt-in modal will be governed by a feature toggle. We will monitor the deployment for unexpected behavior. By turning off the moda, we can prevent the redesigned user experience from being "advertised" or redirecting users to the page. 
> [Create flipper for exposing the modal on live homepage #11653](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11653)
> [VA-CMS Incident Response Procedure Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response.md)

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
