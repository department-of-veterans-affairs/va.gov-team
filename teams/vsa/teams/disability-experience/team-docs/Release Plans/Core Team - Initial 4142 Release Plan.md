# Release Plan: 4142 Paper Sync - MVP 

## Purpose
The purpose of this release plan is to document and align the delivery teams and stakeholders on what will be delivered and when. This release plan is specifically for the 4142 Paper Sync MVP (first release). 
It is not intended to include the next generation of enhancements to the 4142 product.

## Feature description
The required changes to support sending the new 4142 form include the following 2 changes. 

- User must be presented with a new set of verbiage and ackowledge they agree to the terms before continuing
- User must provide the disabilites being claimed in their disability claim, that they were treated for at each Private Medical Facility they want the VA to get their records from (that goes on the 4142 paper form)

For users filling out for the first time, this additional verbiage is just shown in-place of the old, on a new page.
For returning users who have an in-progress form in which they have already filled out the 4142, these users will be redirected back to the begining of the 4142 flow, and also shown an alert informing them of the change, why they were brought back to this location in the flow, and giving them the option to re-authorize with the additional verbiage, and add the required treatments recived data to their previously provided private medical facilites entries. 

## Project goals
Create a new 4142 online form that will match the newest paper version of the PDF form. 
The data in the online form will be used in the generation of the new (2024) 4142 PDF that will be sent to Central Mail (and eventually the eFolder further downstream) after a successful submit.

---

## Step 1: Development

You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Description |
| ----------- | ----------- |
| disability_526_form4142_use_2024_template |  Enables the use of the 2024 template for form 4142 in disability 526 application |
| disability_526_form4142_validate_schema | Enables the use of schema validation for form 4142 in disability 526 applications |
| disability_526_form4142_use_2024_frontend | Enables the 2024 version of form 4142 in the disability 526 submission frontend workflow (maps to disability526Enable2024Form4142 in vets-website) |


## Step 2: Validation

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed that day. 
TODO: It seems we'll probably release to 100% due to the migration strategy we want to follow (see [thread](https://dsva.slack.com/archives/C05QMQHQHKK/p1754490552235209))

To test in staging, let's record videos to validate this functionality:

    Feature Toggle = Disabled and User is working on form --> Feature Toggle = Enabled: 
    Feature Toggle = Enabled and User is working on form --> Feature Toggle = Disabled: 
    Feature Toggle = Disabled and User saved form for later --> Feature Toggle = Enabled; User starts form again: 
    Feature Toggle = Enabled and User saved form for later --> Feature Toggle = Disabled; User starts form again: 
    Feature Toggle = Enabled and User saved form for later while on different page then the 4142 authorization page--> Feature Toggle = Disabled; User starts form again: 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

TODO: Work in progress: with how the migration FE logic is, we believe our implementation would only ever redirect/run 1 time per user/IPF (which is what is desired). BECAUSE the trigger, to cause it to run the migration, is a mismatch between the incoming IPF metadata.version. And once it does run, the version is updated.
IE incoming IPF is version 10, it sees there is this migration (11), it senses mismatch, applies this migration/logic, which sets the new IPF version to (11). If they go away and come back, this will not run because it will already be version 11.

### Do I need a staged rollout? -> TODO: Perhaps not. 

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

### Stage A: Canary - 1% of users
*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

The recommended progression is 1% → 25% → 100%. However, VFS teams have flexibility to add more increments to mitigate risk.

#### Planning

- Length of time: [FILL_IN] (*minimum 2 hours*)
- Percentage of Users (and roughly how many users do you expect this to be): [FILL_IN]% (*Recommendation: 1% of users*)

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

### Stage C: 50% of users (optional)

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

### Stage D: 75% of users (optional)

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
2. What qualitative feedback have you gathered from users or other stakeholders?
3. Which assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
5. What technical tasks are needed to clean up (i.e., removal of feature toggles)?

## Removal of feature toggles after rollout

Scenarios to consider: 
1. They saved the form on the authorization page prior to this release, and they don't login during the progressive rollout:
2. They saved the form on the authorization page during the rollout (they were NOT part of the initial percent it was rolled out to)
3. They saved the form on the authorization page during the rollout (they were part of the percent it was rolled out to) 
   
## Success criteria
- Support 100% of 526 users in the ability to submit a 4142 that is the new 2024 version
  - This includes all new users completing the form for the first time
  - This also includes users who had in-progress forms and who are returning to complete their application AFTER having already filled out the form 4142 sections previously 


## Resource materials
- [4142 Paper Sync Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/114741)
- [Story Mapping Board] ???
- [Figma 4142 redesigns] ??? 
- [Final - 4142 PS Field Mapping.md] ???
- [Final - 4142 PS New SubURL.md] ???
- [Architecture] TBD - Kyle
- Datadog log TBD - Kyle
- Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) (pre-production) 
- Product Guide ??? 
- [4142 Paper Sync Staging Test Plan] TBD - Kyle
- [Release calendar] TBD - Kyle


## New capabilities and changes
### Changes to the 4142 include:


### Additions to the 4142 include:



### Additional functionality:


## Production release plan


## Risks

  
**Risk:** In trying to release the new version of the form, we inadvertently negatively affect the existing version.

**Mitigation:** By having monitors that count the old version of the form submitted, and new, we will catch any dip or anomaly in old submissions. Additionally our unit testing, and end to end testing both test not only the new flow, but also that the old flow is unaffected.


 
**Risk:** Form is not being filled out correctly, or not getting where it needs to.

**Mitigation:** Post release monitoring and validation/tracing is designed to mitigate this risk.



**Risk:** Users are confused by the UI/UX form or flow.

**Mitigation:**



**Risk:** A bug in new code prevents the overall submission of the 526ez submission.

**Mitigation:** End to end testing covers most of this risk. Our dashboards also cover overall submissions numbers, and evaluation will be done with each roll-out increment to ensure error-rate and submission numbers are not anomalous. 


## Release Day Steps 



### Post release monitoring



