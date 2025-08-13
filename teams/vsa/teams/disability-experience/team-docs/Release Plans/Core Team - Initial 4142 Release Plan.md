# Release Plan: 4142 Paper Sync - MVP 

## Purpose
This release plan documents and aligns delivery teams and stakeholders on the scope, delivery timeline, and process for the 4142 Paper Sync MVP (first release).  
It does **not** cover future enhancements to the 4142 product.

## Feature description
The MVP introduces two primary changes to support sending the updated 4142 form:

1. **Updated authorization terms** — Users must review new verbiage and acknowledge agreement before proceeding.  
2. **Additional medical facility details** — Users must list the disabilities they are claiming that were treated at each private medical facility from which the VA will request records.
   
## New capabilities and changes
### Changes to the 4142 include:
- Updated user-facing verbiage to match the 2024 paper form requirements.
- Replacement of old authorization terms with the new 2024 version for first-time users.
- Updated redirect logic so returning users with in-progress forms containing old 4142 data are taken back to the 4142 choice page.

### Additions to the 4142 include:
- New requirement for users to list the disabilities they are claiming that were treated at each private medical facility.
- Display of a returning-user alert explaining the reason for redirection and instructing the user to re-authorize under the new terms.
- Schema validation updates to ensure new required data is captured before submission.

### Additional functionality:
- Feature toggles controlling 2024 template usage, schema validation, and updated frontend workflow (disability_526_form4142_use_2024_template, disability_526_form4142_validate_schema, disability_526_form4142_use_2024_frontend).
- OnFormLoaded logic to detect old 4142 authorization data and trigger redirect/alert flow.
- Updated backend form-to-PDF generation to match the 2024 4142 paper format for submission to Central Mail.

**User experience changes:**

- **First-time users**: See the new authorization terms in place of the old terms, on a new page.
- **Returning users with an in-progress form**:
  - Redirected to the start of the 4142 flow.
  - Shown an alert explaining why they were redirected.
  - Given the option to re-authorize with the updated terms and add required treatment details to existing facility entries.

## Project goals
- Create a new online 4142 form aligned with the latest paper version (2024).  
- Ensure online form data is used to generate the updated 4142 PDF, which will be sent to Central Mail (and later to the eFolder) after a successful submission.

---

## Step 1: Development


| Toggle name | Description |
| ----------- | ----------- |
| disability_526_form4142_use_2024_template |  Enables 2024 template for form 4142 in disability 526 application |
| disability_526_form4142_validate_schema | Enables schema validation for form 4142 in disability 526 applications |
| disability_526_form4142_use_2024_frontend | Enables the 2024 form 4142 in the disability 526 submission frontend workflow (maps to disability526Enable2024Form4142 in vets-website) |

We will keep these as three separate toggles. 

## Step 2: Validation

**Staging release plan:**
- Release under the three Flipper flags.
- Use `OnFormLoaded` to detect whether data needs updating.
- Test scenarios:
  1. Form saved on the authorization page prior to release; user logs in after rollout.
  2. Form saved on the authorization page during rollout, user **not** in initial rollout group.
  3. Form saved on the authorization page during rollout, user **in** initial rollout group.

**Testing in staging:**
Record videos validating the following:
Feature Toggle = Disabled; User working on form → Toggle Enabled
Feature Toggle = Enabled; User working on form → Toggle Disabled
Feature Toggle = Disabled; User saved form → Toggle Enabled; User resumes form
Feature Toggle = Enabled; User saved form → Toggle Disabled; User resumes form
Feature Toggle = Enabled; User saved form (different page) → Toggle Disabled; User resumes form

**Pre-production checklist:**
- [ ] Follow [QA best practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Validate in staging wherever possible.
- [ ] Coordinate with dependent systems to ensure readiness.
- [ ] Hold a go/no-go meeting with:
  - [ ] DEPO/OCTO representative.
  - [ ] Full delivery team.
  - [ ] Review release plan and readiness checklist.

---

## Step 3: Production rollout

Testing will occur in staging, followed by mod-prod testing, then full release.

**Target release date:** September 1

### Do I need a staged rollout? -> No.

**Yes**, a staged rollout is required unless you can confidently answer "yes" to all of the following:

- This change does not add substantial new functionality to VA.gov
- This change does not impact user flows through tasks 
- This change does not affect traffic to backend services

#### Exceptions

Currently, [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are the primary tool VSP provides for facilitating staged rollout. If feature toggles don't work for your use case, you can request an exception from staged rollout in Staging Review.

| Feature type | Possible with feature toggles? |
| --- | --- |
| New feature in existing application | Yes |
| New application | Yes |
| Static content changes | Doable but tricky |
| URL redirects | No |

DEPO VSP / OCTO leads can approve other exceptions to this requirement.

---

### Rollback Plan
If issues arise in production:
- PM and Engineering Lead monitor Datadog dashboards for:
  - Submission error spikes.
  - Abnormal abandonment rates.
- If triggered, Engineering Lead disables all toggles immediately.
- PM notifies stakeholders and logs incident.

---

### Phase I: Moderated Production Testing (UAT)
**Planning:**
- **Timeline:** After August 22 Staging Review, before September 1 release.
- **Users:** 1 mod-prod tester.
- **Recruitment:** Internal testers with prior 4142 submissions.
- **Method:** Enable toggles for tester ID only, with Production Tester flag active (this `disability_compensation_production_tester` flag stops mail automation from being triggered, blocks submissions from going down the Backup path, prevents ITFs from being generated, and prevents 4142 workflow from being triggered)

**Results:** *(to be filled post-test)*

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

---

### Phase II: Rollout
**Plan:**  
- Aug 23 – Sept 1, enable via Flippers in stages.
- Access limitation method: Flipper flags enabled for specific user IDs during mod-prod UAT; then toggled on for all users.
- **Success criteria:**
  - Submission error rate < 5% for 526 with 4142 attached.
  - No increase in abandonment rate (±3% baseline).
  - Returning-user reauthorization completion ≥ 90%.
  - No significant increase in related contact center calls.
- Links to the dashboard(s) showing "success criteria" metrics:
  - Dashboard link: [TBD – Datadog dashboard URL]
- Monitored by: PM, Engineering lead

### Stage A: Canary - 1% of users
_(We will skip this stage — going to 100% after mod-prod testing)_ 

### Stage E: 100% of users

#### Planning

- Length of time: Ongoing
- Percentage of Users: 100% (All Veterans in 526 flow who opt for 4142 flow

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
- Compare submission volumes and error rates to baseline.
- Monitor returning-user alert impressions vs. completions.
- Confirm no anomalies in private medical facility data.
- Any issues with VA handling/processing?:  [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no |  N/A
- If yes, what: [FILL_IN]

### 1-month results

- Number of unique users: [FILL_IN]
- Validate sustained KPI performance.
- Confirm toggles can be safely removed.
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
- After 1-month KPI validation and no major regressions, remove all three toggles in vets-api and vets-website.
- Update documentation to reflect the 2024 form as the permanent version.
   

## Production release plan
- Deploy behind the disability_526_form4142_use_2024_template, disability_526_form4142_validate_schema, and disability_526_form4142_use_2024_frontend toggles.
- Conduct staging QA including returning-user flows, new-user flows, and redirect behavior.
- Enable toggles for a single mod-prod UAT user to confirm alert behavior and form submission success.
- On approval, enable toggles for 100% of users in production.
- Monitor Datadog dashboards for error spikes and submission anomalies for 48 hours post-release.

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| New form negatively impacts old form | Monitor submission counts for both old and new forms; thorough unit/E2E tests. |
| Form filled incorrectly or lost downstream | Post-release monitoring and data tracing. |
| User confusion in UI/UX | Clear alert messaging; staging validation with internal testers. |
| Bug blocks overall 526EZ submission | E2E coverage; monitor submissions; rollback plan in place. |

---
## Release Day Steps

### Pre-release (day before or morning of release)
- [ ] Confirm all code for the 4142 Paper Sync MVP has been merged to `main` and deployed to production behind feature toggles.
- [ ] Verify Datadog dashboards and monitoring alerts are active for:
  - 526 submission volume
  - 4142 submission error rates
  - Returning-user redirect impressions/completions
- [ ] Confirm with QA that staging tests have passed for:
  - New user flow (no alert shown, sees new terms)
  - Returning user with old 4142 (alert shown, redirected, reauthorization works)
  - Returning user with new 4142 (no alert, flow continues normally)

---

### Step 1 – Enable for Mod-Prod UAT User(s)
- [ ] Turn on all three toggles for designated mod-prod tester(s) only:
  - `disability_526_form4142_use_2024_template`
  - `disability_526_form4142_validate_schema`
  - `disability_526_form4142_use_2024_frontend`
- [ ] Confirm:
  - Alert displays for returning users with old 4142
  - Redirect logic functions correctly
  - Schema validation prevents incomplete submissions
  - Updated PDF is generated successfully (stop-submission flag on to prevent downstream send)
- [ ] Document results in the “Phase I: UAT Results” section of the release plan

---

### Step 2 – Enable for 100% of Users
- [ ] At agreed release time, enable all three toggles for all users
- [ ] PM/Engineering lead to monitor Datadog dashboards in real time for:
  - Submission error spikes (>5% deviation from baseline triggers rollback)
  - Drop in submission volume
  - Abnormal increase in abandonment rate
- [ ] Keep heightened monitoring for first 48 hours

---

### Rollback Process
- [ ] If error rate spike or major regression is detected:
  - Engineering lead to immediately disable all three toggles in production
  - PM to notify stakeholders and document incident
  - Debug and patch before attempting re-release

---

### Post-release monitoring (1 week)
- [ ] Review KPI metrics against baseline
- [ ] Confirm no increase in VA call center cases related to 4142 flow
- [ ] Decide if toggles can be safely removed after 1 month

## Success criteria
- Support 100% of 526 users in the ability to submit a 4142 that is the new 2024 version
  - This includes all new users completing the form for the first time
  - This also includes users who had in-progress forms and who are returning to complete their application AFTER having already filled out the form 4142 sections previously 


## Resource materials
- [4142 Paper Sync Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/114741)
- [Story Mapping Board] ???
- [Figma 4142 redesigns](https://www.figma.com/design/gvWPL7Z8llEy0tg6bEZbms/Initiative-%E2%80%A2-4142-Paper-Sync?node-id=4139-15800) Ruben
- [Updated screenshots in 526 Form Flow Mural] TBD - Liz?
- [Updated pages in 526 Source of Truth Figma] TBD - Ruben?
- [Final - 4142 PS Field Mapping.md] ???
- [Final - 4142 PS New SubURL.md] ???
- [Architecture] TBD - Kyle
- Datadog log TBD - Kyle
- Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) (pre-production) 
- Product Guide ??? 
- [4142 Paper Sync Staging Test Plan] TBD - Kyle
- [Release calendar] TBD - Kyle

