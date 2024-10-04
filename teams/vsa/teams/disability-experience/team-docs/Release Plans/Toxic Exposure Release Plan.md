# 



<!-- markdownlint-disable MD024 -->
# Release Plan: 526 Toxic Exposure

# Purpose
The purpose of this document is to describe and align development teams and stakeholders on what will be delivered and when. It describes the features, enhancements, and fixes that will be included in each Toxic Exposure (TE) release along with identified timelines. It is a living document and serves as a communication tool for keeping stakeholders informed about the progress of TE.

<details>
<summary><h2>Background<h2></summary>

 # Background
In 2022, The Sergeant First Class Heath Robinson Promise to Address Comprehensive Toxics (PACT) Act was signed into law. The PACT Act is a new law that expands VA health care and benefits for Veterans exposed to burn pits and other toxic substances. This law helps the VA provide generations of Veterans—and their survivors— with the care and benefits they’ve earned and deserve.

The PACT Act 
* Expands and extends eligibility for VA health care for Veterans with toxic exposures and Veterans of the Vietnam, Gulf War, and post-9/11 eras
* Adds 20+ more presumptive conditions for burn pits, Agent Orange, and other toxic exposures
* Adds more presumptive-exposure locations for Agent Orange and radiation
* Requires VA to provide a toxic exposure screening to every Veteran enrolled in VA health care
* Helps us improve research, staff education, and treatment related to toxic exposures

Today, while Veterans can file disability compensation for conditions believed to be caused by toxic exposure on the paper version of the 21-526ez, they’re not able to file a TE claim at va.gov. This creates an unnecessary burden for the Veteran, who may have mental, physical, or other environmental challenges or disabilities that prevent or otherwise make it difficult for them to file a claim using the paper version of the 526 form.

 ## Overview
To make it easy for Veterans to file disability compensation claims resulting from the PACT Act via va.gov, we are adding a toxic exposure section to the 21-526ez Veterans Disability Compensation and Related Compensation Benefits form on VA.gov. This change brings the digital form at VA.gov into parity with the 526ez paper form on these exposure questions, and will enable Veterans to specify aspects of their service history that might qualify them for disability benefits related to toxic exposure.

Veterans will be able to complete the paper form equivalent of Section IV; questions 15a-15e 
- 15a: "Are you claiming any conditions related to toxic exposures?
- 15b: "Did you serve in any of the following gulf war hazard locations?"
- 15c: "Did you serve in any of the following Herbicide locations?"
- 15d: "Have you been exposed to any of the following?" and;
- 15e: "If you were exposed multiple times, please provide all additional dates and locations of potential exposure."
</details>

## Phases and Key Components
See Appendix below for full milestone breakdown.

| Phase                                | Target Date  | Status      | Notes                                                        |
|--------------------------------------|--------------|-------------|--------------------------------------------------------------|
| 1: Gulf war exposures                | May 21, 2024 | Complete    |                                                              |
| 2: Herbicides and hazards            | July 3, 2024 | Complete    | Delayed by 5103 FDC update 5/16/24 & bugs in submit endpoint |
| 3: Launch preparation                | Jul 22, 2024 | In Progress | Original date of 6/18 shifted due to FDC update and identitified need to complete 1.1 UI / UX changes prior to staging review                                                             |
| 4: Migrate /getPDF and /submit to LH |              | In Progress |Pending fixes from LH, workaround implemented ([reference thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1714679140110029?thread_ts=1714674824.962009&cid=C02CQP3RFFX)). Team 2 owning /getPDF migration, /getPDF and /submit and TE all behind the same FF. Delayed for Code Yellow(?) Awaiting validation issue fixes from LH. Currently testing E2E.                                                              |
| 5: Rollout: New forms (1.0)                         | Aug 28 - Sept 18 | Ready. No launch blockers. |                                                               |
| 6: Rollout Vets with an IPF (1.1)                  | Sept 19 - Oct 1 | Not started |Exact dates may change                                                              |

*Dates may vary

## Success Criteria
- Bring the online 526 form into compliance by being up to date with the 2022 paper form
- Mantain or reduce abandonment rates
- Successfully migrate 526 submission infrastructure off EVSS
- Reduce or maintain existing submission errors
- Maintain % of submissions that use normal path
- Maintain or reduce uses of backup and failsafe path

## New Capabilities and Changes
1. Migration of the EVSS /submit endpoint to Lighthouse
2. Migration of the /generatePDF endpoint to Lighthouse for the backup submission path 
3. User Interface alerts about the new TE section
4. A new checkbox and loop pattern for the Veteran-facing form logic
5. Transformation of the vets-website JSON data structure to be compatible with Lighthouse
6. Implementation of a Flipper feature flag that controls access to the TE feature
7. Handling of multiple exposures data to populate on the PDF in 15e
8. Implementation of updated logic for the new Lighthouse /submit endpoint
9. Implementation of a new form data property startedFormVersion

## Risks & Challenges
1. DBEX teams have developed this solution with the assumption that Lighthouse's /submit endpoint will be used for the production deployment of TE. If the Lighthouse /submit endpoint isn’t available by the end of June, DBEX teams will not re-pipe the TE solution to use EVSS async Submit endpoint. VA’s expectation is that TE solution is complete and ready by end of June, with leeway provided for any bugs that come up. TE will leverage LH’s Submit endpoint when it's released into production.
2. The target delivery date, while identified, is variable depending on Lighthouse availability and any other time sensitive, urgent work that needs to be done. Prioritizing urgent work will impact the delivery target date.

## Use Cases
There are two use cases that we are considering for this release. For each, we plan to follow an incremental release strategy using established traffic percentages to route Veterans to the 526 form. We plan to use Flipper to control availabity for each use case. In the 2019 form version, the toxic exposure section is not available to the Veteran. In 2022 form version, the toxic exposure section is available to the Veteran.

### 1. New Forms (1.0)
1. Veterans who begin a new 526 form will be directed to complete the 2022 version of the 526 form, including the new Toxic Exposure section. These Veterans do not have an IPF, and may or may not have a previous Intent To File (ITF).
- Before full release:
  - Authenticated users may be directed to fill out the 2022 form version of the form depending on the level of incremental traffic set for the 2022 form (25%/50%/75%/100%). Veterans who are not directed by the feature flag to complete the 2022 version of the form will complete the 2019 version. Veterans that are directed to the 2022 form version who leave the active session and return will be taken back to the 2022 form version.
- After 100% release:
  - All authenticated users who begin a new 526 form will be directed to the 2022 form version. Veterans who leave the active session and return will be taken back to the 2022 form version.

### 2. Veterans With an In Progress Form (1.1)
- Before full release
  - After we've reached the 100% incremental release for 1.0, authenticated users who resume an in progress 526 form may be directed to fill out the 2022 form version of the form depending on the level of incremental traffic set for the 2022 form (25%/50%/75%/100%). Veterans who are not directed by the feature flag to complete the 2022 version of the form will complete the 2019 version. Veterans that are directed to the 2022 form version who leave the active session and return will be taken back to the 2022 form version. Veterans on the 2022 form version will see an alert on the Review and Submit screen notifying them of the new toxic exposure questions. 
- After 100% release
  - All authenticated users who resume an in progress 526 form will be directed to the 2022 form version and will see an alert on the Review and Submit screen notifying them of the new toxic exposure questions. Veterans who leave the active session and return will be taken back to the 2022 form version.

| Phase                                | Flipper Status | Form in Progress | Visible Form | TE Alert Displayed |
|--------------------------------------|----------------|------------------|--------------|--------------------|
| 5: New forms                         | Disabled       | No               | 2019         | No                 |
| 5: New forms                         | Enabled        | No               | 2022         | No                |
| 5: All New Forms (after 100%)        | N/A            | No               | 2022         | No                |
| 6: Vets with an IPF                  | Disabled       | Yes, 2019        | 2019         | No                 |
| 6: Vets with an IPF                  | Enabled        | Yes, 2019        | 2022         | Yes                |
| 6: All Vets with an IPF (after 100%) | N/A            | Yes, 2019              | 2022         | Yes                |

---

## Step 1: Development
You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | Feature | Description |
| ----------- | ----------- | ----------- |
| disability_526_toxic_exposure | 1.0 | Enable the 2022 form when form is created |
| disability_526_toxic_exposure_ipf | 1.1 | Enable the 2022 form when in progress form is retrieved |

## Step 2: Validation

- [x] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) (pre-production).
- [x] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [x] Work any downstream or dependent systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
    - [ ] review the release plan with your team and signoff
    - [ ] review the plan with your DEPO/OCTO representative and signoff
    - [ ] Review the generated 526 pdf to determine if any issues are launch blocking

## Step 3: Production Rollout

### Do I need a staged rollout?
Toxic Exposure will be a staged rollout using the following traffic percentages for each stage: 5%/10%/25%/50%/75%/100%.

### Measuring Success Criteria
To determine if we should proceed to the next stage, the following criteria should be met
To understand the feasibility of proceeding to the next phase of the staged rollout, disability benefits Team 1 established will be looking at the following:

- Sum of established submissions is roughly equivalent to the target count of submissions within the established time frame (in DataDog [/submit dashboard](https://vagov.ddog-gov.com/dashboard/mqg-msb-htb/benefits---dbex---evss-to-lh-submit?fromUser=false&refresh_mode=paused&from_ts=1696167523150&to_ts=1698347918000&live=false))
- The claim record is complete in VBMS (requires VBA help)
- The generated pdf exists in the Veteran's eFolder (requires VBA help)
- The information in the generated pdf is correct, i.e. it matches the submission record in VBMS (requires VBA help)
- Count of 202 responses from LH matches the count of submission records in Vets-api database. This indicates a successful pdf generation for the submission and a claimId. When these numbers match it means success. Note: There's up to a 48 hour delay in pdf generation, and while a 202 response from Lighthouse indicates the service was reached, it's not an indicator that the pdf was generated, so we'll need to wait up to 48 hours for confirmation. Because of this lagging indicator, we'll want to allow up to a 48 hour waiting period during moderated production testing and canary testing to ensure success. (in DataDog [/submit dashboard](https://vagov.ddog-gov.com/dashboard/mqg-msb-htb/benefits---dbex---evss-to-lh-submit?fromUser=false&refresh_mode=paused&from_ts=1696167523150&to_ts=1698347918000&live=false))
- Downstream services we'll be watching
    - Lighthouse /ppiu (direct deposit) (GET) (in DataDog [/ppiu dashboard](https://vagov.ddog-gov.com/dashboard/pfj-tf3-mb4/benefits---disability---526---evss-to-lh-ppiu-direct-deposit?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1724774364174&to_ts=1724776164174&live=true))
    - VA Profile (GET) (we know people we can reach out to if we suspect issues)
    - VBMS (we'll keep an eye on the OIT channel and we'll know based on the VBA review of the submitted claims in VBMS)
    - Lighthouse /brd (in DataDog [/brd dashboard](https://vagov.ddog-gov.com/dashboard/n5i-sba-u52/benefits---disability---526---evss-to-lh-brd?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1724171481851&to_ts=1724776281851&live=true))
    - Lighthouse /submit (synchronous) (in DataDog [/submit dashboard](https://vagov.ddog-gov.com/dashboard/mqg-msb-htb/benefits---dbex---evss-to-lh-submit?fromUser=false&refresh_mode=paused&from_ts=1696167523150&to_ts=1698347918000&live=false))
    - Lighthouse /generatePdf (in DataDog [/submit dashboard](https://vagov.ddog-gov.com/dashboard/mqg-msb-htb/benefits---dbex---evss-to-lh-submit?fromUser=false&refresh_mode=paused&from_ts=1696167523150&to_ts=1698347918000&live=false))
    - vetsApi database (in DataDog [form526 SQL performance dashboard (not ours)](https://vagov.ddog-gov.com/account/login?next=/dashboard/2xv-ax9-6sj/benefits---form526-sql-performance?fromUser%3Dfalse%26refresh_mode%3Dsliding%26view%3Dspans%26from_ts%3D1722189972798%26to_ts%3D1722362772798%26live%3Dtrue))

### Questions/needs and Answers
- Better understand how error responses differ between Lighthouse and VBMS (will be captured in this [ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/90125) for retryable and non-retryable errors)
- For a submission workload, determine with more specificity how to segment out which service(s) are failing (We can review logs in ApiProviderFactory in DD)
- How to compare the generated pdf and the structured data of the submission. (We will need a VSR or OCTO employee with appropriate access.) 
- When GETs don't process, is it because of the service or because of us? 
- How can we determine Vets-api database is performing as required? (Monitor in DataDog [form526 SQL performance dashboard](https://vagov.ddog-gov.com/account/login?next=/dashboard/2xv-ax9-6sj/benefits---form526-sql-performance?fromUser%3Dfalse%26refresh_mode%3Dsliding%26view%3Dspans%26from_ts%3D1722189972798%26to_ts%3D1722362772798%26live%3Dtrue))
- Will the Vets-api database be overwhelmed by read/write requests given that the 526 submission and Lighthouse use the same DB (monitor in DataDog [form526 SQL performance dashboard](https://vagov.ddog-gov.com/account/login?next=/dashboard/2xv-ax9-6sj/benefits---form526-sql-performance?fromUser%3Dfalse%26refresh_mode%3Dsliding%26view%3Dspans%26from_ts%3D1722189972798%26to_ts%3D1722362772798%26live%3Dtrue))
- What is the baseline level of performance for Vets-api database that we should know beforehand? (we could ask Platform -- 1. What is a typical CPU spike during a traffic rush?
2. What is the redundancy strategy for the database? (availability zones, replicas, load balanced, connections?) 
3. What is the strategy for scaling the database? How long does it take?")
- What are the Lighthouse error types and codes? (will be captured in this [ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/90125) for retryable and non-retryable errors)


### Define the Rollback process
DBEX teams T-REX and Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which would prevent any Veterans starting a new form from receiving the 2022 version of the form. In the event catasrophically wrong with the user filling out the form, our failsafe rollback would be to take them off the 2022 path by removing the startedFormVersion key from the Veteran's formData. This would require manipulating form data in the database. This would also drop completed TE form data from the Veteran's 2022 form, but the TE form data would still exist in the database.

## 1.0 New Forms
### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Due to the need to test against the production lightouse /submit endpoint, we'll be testing this feature in production behind a feature flag. To mitigate the risks of downstream actions that occur as a result of submitting an application for disability compensation, we'll work with our VBA stakeholders to delete the submission records in VBMS.

#### Planning
- Desired date range or test duration: Aug 16, 2024
- Desired number of users: 6 full submissions of the min, max, and overflow scenarios outlined in TestRail
- How you'll recruit the right production test users: VFS team members, OCTO stakeholders, and VBA stakeholders will test, could be ann (internal) Veteran
- Submitting 6 full submissions could be done by less than 6 people
- How you'll conduct the testing: using test users and validating the form payload submissions (Argo) with downstream stakeholders
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Flipper [disability_526_toxic_exposure]

#### Results
- Number of users: 6
- Number of bugs identified / fixed: 61
    - Identified a need for 2 new test cases (review & submit and BDD)
    - Not a bug, but we identified a need for a flag to block generating new ITFs and preventing EP400 workloads
- Was any downstream service affected by the change?: no
- Types of errors logged:
- Backend:
 - When Validating against the dataset we used for Moderated Production Testing, we logged 61 (2.3% error rate) validation errors in of four categories when calling LH /validate.
    - Treatments/treated disabiliity names
    - Separation location
    - Mailing address
    - Direct deposit
- Frontend:
  - Missing validations such as service period start and end dates (know

- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: no
- Nothing launch blocking, although missing FE validations might be something we have to consider


### Phase II: Staged Rollout (also known as unmoderated production testing)
We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollback plan:
1. PM, Disability teams 1 & 2, OCTO PO monitor analytics for issues (failed submissions, traffic irregularities, unexpected errors).
2. Engineering disables flipper [disability_526_toxic_exposure] which hides the 2022 form version.
   - Users with in-progress 2022 sessions will finish out their 2022 session.
   - New users will be directed to the 2019 form version.
   - When identified issues are 2x "normal", consider removing the startedFormVersion key from the Veteran's formData (see below for details)
        - Refer to [troubleshooting SOP document for details](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/TREX/DEBUG/SOP-Toxic-Exposure-Lighthouse-Form526-Submission-Troubleshooting.md) on how remediate form data

#### Rollout Planning
- Desired date range: Aug 28 - Oct 1
- How will you make the product available in production while limiting the number of users who can find/access it: Flipper
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - % of [normal](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/bi4-785-p5z), [backup](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/6ek-k9t-7d7), failsafe (come back to this) path rates are the same or less than what we have currently
  - Submission volume: 21-526ez has ~7500 submissions per week. Over 15 days we're expecting ~15,000
    - Stage A: Canary: (come back to this)
    - 5%/10%/25%/50%/75%/100%:
  - Error rate: <1% (dependent on current metrics above, compare this to normal error rate - come back)
- Links to the dashboard(s) showing "success criteria" metrics:
  - Domo Dashboard request submitted
- Who is monitoring the dashboard(s)?: PM, Disability teams 1 & 2, OCTO PO (Emily Theis) monitor analytics for issues (failed submissions, traffic irregularities, unexpected errors)

#### Prerequisites:
Approvals & to do's for launch:
- [x] Development for release 1.0 and 1.1 are complete, and the ability to give certain Veterans access to 2022 form based on the toggle state
- [ ] DBEX Teams approve [Validation Rake Task](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/88063) results
- [x] Monitoring configured by DBEX teams
- [X] Benchmark data for Veteran claim selection and monitoring during the release      
- [X] [Troubleshooting SOP documented](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/TREX/DEBUG/SOP-Toxic-Exposure-Lighthouse-Form526-Submission-Troubleshooting.md)

#### Release assumptions before kickoff:
- DBEX team 1 will handle enabling/disabling the feature flag for the release.
- DBEX teams 1 and 2 will both be available to troubleshoot any errors that arise. 
  - If a claim fails both the primary and backup submission processes, the teams will research root cause, repair claim in production, and re-trigger primary submission if possible. The teams will do whatever it takes to prevent a Veteran from needing to recomplete their claim.
- Remediation steps are dependent on the type of error
- Once a Veteran is selected for the 2022 526ez form they cannot be de-selected.


### Stage A: Canary 5% of users
*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning
- Length of time: 3 days (Aug 28- 30)
- Percentage of Users (and roughly how many users do you expect this to be): 5% of users, ~106 submissions

#### Steps
- Create a Teams channel for the DBEX, VBA, and OCTO teams to use on Wednesday Aug 28th
- At 9am PDT on Wednesday Aug 28th, Aurora to turn the TE flag on in production for 5% of traffic
- Monitor the EVSS > LH DD Dashboard for anomalies
- If anomalies are found that exceed our established thresholds or are otherwise concerning, turn the flag off in Production
Otherwise:
- Monitor the EVSS > LH DD Dashboard for the count of submissions
- When 50 submissions are received, turn the flag off
- Validate submission data, the claim in VBMS, and generated pdf in partnership with OCTO and VBA.
- For any issues found, create tickets to remediate and prioritize as required based on the severity of the issue
- After submissions have been validated, work with OCTO and VBA to determine timing of turning traffic back on
- If no anomalies within the agreed time box, decide with OCTO to raise traffic percentage to 10%

#### Results
- Number of unique users: 
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service (VBMS, LH /brd, /ppiu (GET) (direct deposit), /submit (synchronous), /generatePdf, VA Profile (GET),  affected by the change?:
- VBMS: what does a response from VBMS look like vs LH errors?
- we need a way to segment out which service is failing
- bad data for VSRs, - ensure the claim record is complete, pdf is fully filled out and exists. we should be able to compare the claims we created for Jesse G vs Canary users. We would need VSRs to look at this as we don't have acces. AI: identify someone who can look at this (emily?)
- for GETs - not processing these - is it bc of the service or because of us?
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

Other considerations:
- Vets-api database performance
    - are there any issues with this? is it operating as expected?
    - Why? - the LH sync endpoint and our submission process pull from the same DB
    - What is the performance today? - needed to establish baseline
 - need to know error types from LH

- Number (count) of 202s from LH should match the count of submission records in our DB vets-api-DB - this indicates that the pdf was generated for the submission and that it has a submitted claim ID. If these match, then at a HL we are good! - there will be a 48 hour delay in the pdf. Count of 202s from LH is a good indicator, but won't tell us if the pdf is actually generated. During Canary, while the Flipper is OFF there would be ample time for the pdf to be generated so Monday morning we should see pdfs in the eFolder.



### Stage B: 10% of users
*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning
- Length of time: 7 days (Aug 20-26)
- Percentage of Users (and roughly how many users do you expect this to be): 10% of users, ~428 submissions

#### Results

- Number of unique users: **1858**
- Metrics at this stage (per your "success criteria"): a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
  - % of normal, backup, failsafe path rates: **90%, 10%, 0%**
  - Submission volume:
  - Error rate: 
- Was any downstream service affected by the change?: Yes, LH has several tickets now to fix some errors in both the VBMS claim establishment service and the pdf generation service. Some are resolved, some are still a mystery. Details below.
- Types of errors logged:
  - Validation: Direct Deposit Account number length
    - fixed by LH
  - Bad Request: Unicode
    - fixed by LH
  - Bad Request: MethodArgumentNotValid treatment detail length
    - fixed by LH
  - Invalid Date: XX's going through the frontend
    - fixed by T-REX
  - Unprocessible Entity: SeparationLocationCode
    - fixed by LH
  - Unprocessable Entity: Maximum number of EP codes
    - this is a known issue. backup path picks these up
  - Unprocessable Entity: Claim not established. A duplicate claim for this EP code already exists in CorpDB. Please use a different EP code modifier.
    - still a mystery. [working with LH to figure this out](https://dsva.slack.com/archives/C02CQP3RFFX/p1726263770523399)
  - failures with ```validate_pdf``` in ```app/app/uploaders/validate_pdf.rb```
    - [working with LH to figure this out](https://dsva.slack.com/archives/C02CQP3RFFX/p1726526799461849)
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - [#92417](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/92417): invalid date issue - bug was found in that the frontend (va.gov) is sending dates with "XX" in them which will not parse anywhere
    - this is already fixed and deployed
  - [#93079](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/93079): bug was found from needing to have "unique" multiple exposures in the request to LH

### Stage C: 25% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 7 days (Aug 27 - Sept 2)
- Percentage of Users (and roughly how many users do you expect this to be): 25%, 1071 submissions

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage D: 50% of users

*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning

- Length of time: 2 days (Sept. 3-4)
- Percentage of Users (and roughly how many users do you expect this to be): 50%, 1071 submissions

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage E: 75% of users

#### Planning

- Length of time: 5 days (Sept. 5-9)
- Percentage of Users (and roughly how many users do you expect this to be): 75%, 1605 submissions

#### Results

- Number of unique users: [FILL_IN]
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: [PICK_ONE]: yes | no |  N/A
- Types of errors logged: [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? [FILL_IN]

### Stage F: 100% of users

#### Planning

- Length of time: 1 days (Sep 10)
- Percentage of Users (and roughly how many users do you expect this to be): 100%, 2141 submissions

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

   
---
#### Day 0:
- 11am EDT <individual> Toggles Feature ON for all Users*
- Noon EDT <individual> Toggle Feature OFF for all Users
- Try to meet threshold volume: **44 submissions**
- Average time to meet threshold volume: **26.5 minutes**
- Determine if composite error volume deviates significantly from **5 `400` and/or `500` errors** once threshold is met

#### Day 0-A:
- Monitor submissions over next 21 days. 
  - Daily task: <individual> executes production script to generate PDF for any claim submitted using TE flow
  - <individual> Send PDF bundle to ??? Team (in S3?) 
  - <individuals> Manually remediate any claim that was not accepted by Claims or Benefits Intake API
  - <team> Fix defects

#### Day 1: 
- <individual> Toggle on for 10% of Users
#### Days 1-6: 
- Repeat monitoring tasks for 20 claims daily

#### Day 7: 
- <individual> Toggle on for 25% of Users
#### Day 7-13: 
- Repeat monitoring tasks for 20 claims daily

#### Day 14: 
- <individual> Toggle on at 50%

#### Day 21: 
- <individual> Toggle on at 100%

### Remediation Steps:
- If a claim fails Primary submission, passes Backup submission, no further effort required
- If a claim fails both Primary and Backup submission processes, team researches root cause, <individual> repairs claim in production and re-triggers primary submission

## Proposed Release Plan for 1.1

#### Day 1: 
- <individual> Toggle on for 10% of Users
#### Days 1-6: 
- Repeat monitoring tasks for 20 claims daily

#### Day 7: 
- <individual> Toggle on for 25% of Users
#### Day 7-13: 
- Repeat monitoring tasks for 20 claims daily

#### Day 14: 
- <individual> Toggle on at 50%
- 
#### Day 21: 
- <individual> Toggle on at 100%


#### Monitor Success Criteria:
- Bring the online 526 form into compliance by being up to date with the 2022 paper form
- Reduce the number of letters sent to Veterans with requests for more information
- Reduce the amount of time to determine if the applicant is elegible for presumptive service connection based on toxic exposure
- Mantain or reduce abandonment rates
- Sucessfully migrate 526 submission infrastructure off EVSS
- Reduce or maintain existing submission errors
  - [526 Submit Endpoint Dashboard - DataDog](https://vagov.ddog-gov.com/dashboard/mqg-msb-htb/benefits---dbex---evss-to-lh-submit?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714318822569&to_ts=1716910822569&live=false&tile_focus=6719002960639492)
- Maintain % of submissions that use normal path
- Maintain or reduce uses of backup and failsafe path
  - [526 Claim Submission Dasboard - DataDog](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/benefits---form-526-disability-compensation?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1716306296076&to_ts=1716911096076&live=true)        
  
#### Benchmark data for 1.0 and 1.1 releases
- Benchmark of user submissions to start the release:
  - 1 month traffic volume based on `submit_form_526` job activity (more accurate error volume):
    - 71810 total volume
    - 381 `40*` errors 
    - 7932 `50*` errors
    - 1384 unknowns
    - Submission threshold for errors: 8.63 submissions
    - Submission threshold for errors with unknowns: 7.40 submissions
  - 1 month traffic volume based on submit controller activity (more accurate traffic volume): 
    - 72708
    - 251 `40*` errors 
    - 177 `50*` errors
    - Submission threshold for errors: 169.88 submissions
  - Composite: **8.74 submissions**
- Acceptable threshold of primary submission failures: **5 failures/44 submissions**
- Time on average to reach threshold volume: **26.5 minutes**

# Appendix

## Post-Release To Do List
1. add TE pages to Google analytics in Domo - [submitted GH issue to analytics team](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86588)
2. look at the count of successful claim submissions
3. Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal. Additionally, examine identified anomalous activity for any endpoint rollouts.      


## Relevant Links
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/Toxic%20Exposure%20Release%20Plan.md)
- [Design documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/toxic-exposure.md)
- Meeting recording of technical approach and [diagrams in Slack](https://dsva.slack.com/archives/C04KW0B46N5/p1715293181014539?thread_ts=1715293137.064459&cid=C04KW0B46N5):
  - https://us06web.zoom.us/rec/share/4yzenPINHF8djrgx6x2XjepUbrC0QHgo3J6PPu9miRpeCp1HnJHqS9THVmFZmeYz.5j45fksUTFgqtqME
    Passcode: p=va8uL0
- Meeting recordings between teams 1 and 2 for handling the feature flag:
  - https://coformaco.zoom.us/rec/share/NXjIziBXAebZD2adg4QWApak5QJafqu3t26I2-9edjT7CqNajGJ5kNv1DN_qRdJG.tYRlVFcgHcoVMvKH
    Passcode: &=h7HiKH
  - https://coformaco.zoom.us/rec/share/ug_3WYVuIdRWWdoLGuqTS78KmoQgkc461TbGCFGiwzagx69pzj8-yWVpqfBJW1c8.2OpcBzNGjnkT5VIr
    Passcode: S3!v9guG         
- Meeting recording with Ligthhouse to discuss progress of synchronous submit endpoint:       
  - https://us06web.zoom.us/rec/share/1R3KWDbfwI9MG9Ghgm1bXwbv63uyd61SYjItE8YDaCN_cv6OeQIeHb0v1fWTN8aw.4c20SnZ2xyuqD8Yi       
    Passcode: d%Y&6hfh
- Meeting recording with Teams 1 & 2 to discuss delivery plan:
  - https://us06web.zoom.us/rec/share/SMoqdUKyXnKpzKqU7FPr0lUrjclqAFkO3N4or8sfdX9V49KqcZ2bgYvsp64yk-Jt.U_e1OwIUDgTtd0JA
    Passcode: $3CazkrD
         

## Delivery Milestones
### Planned Delivery Timeline MVP Release April 2024 - August 2024
This delivery plan is segmented into pieces of functionality that are available to view in staging as a cohesive end to end user experience. Based on the way the data is structured, it has been broken out to segment the different questions of column 4 of the 526ez as key milestones.  

Sprints noted with an asterisk (*) will have flexible delivery completion, depending on the availability of the Lighthouse /submit endpoint. The official production release to users cannot occur without the /submit endpoint available in the production environment.


#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked.
**Estimated Duration**: Sprint 28 (3/27 - 4/9/24) - Sprint 30 (4/24 - 5/7/24)   
**Actual Delivery Date**: Sprint 30 (4/24 - 5/7/24)     
**Environment**: Staging    
**Building Blocks:**    
- [X] JSON Schema refactored
- [X] Data transformation to save the Toxic Exposure data, capture the Toxic Exposure flag from the conditions array, and transform the Toxic Exposure data into the Lighthouse structure for the disabilities array.
- [X] End to end test from 526ez to VBMS with the 2022 PDF, with column 2 filled and 15A checked.


#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked; Gulf War 1990 and 9/11 pages data is populated in 15B and 15E.
**Estimated Duration**: Sprint 29 (4/10 - 4/23/24) - Sprint 31 (5/8 - 5/21/24)        
**Actual Delivery Date**: Sprint 31 (5/8 - 5/21/24)       
**Environment**: Staging    
**Building Blocks:**     
- [X] Create the summary page for Gulf War 1990 questions.
- [X] Add “none of these locations” to the Gulf War 1990 questions. 
- [X] Implement checkbox and loop for Gulf War and 9/11 summary pages.
- [X] Add “I’m not sure” to the Gulf War 1990 pages.
- [X] Heading content and URL changes.
- [X] Transform service on the first of each location in 15B and put these behind the Toxic Exposure feature flag.
- [X] Handle multiple exposure durations 15B.
- [X] End to end test from 526ez to VBMS with the 2022 PDF, regression testing column 2 filled and 15A checked, adding 15B and 15E are populated.

#### Milestone: A Veteran can link their conditions to Toxic Exposure, and receive a 2022 PDF with column 2 and checkbox for 15A is checked; Gulf War 1990 and 9/11 pages data is populated in 15B and 15E; herbicide & hazards pages data is populated in 15 C, D, E.
**Estimated Duration**: Sprint 31 (5/8 - 5/21/24) - Sprint 35 (7/3 - 7/16/24)*     
**Actual Delivery Date**:      
**Environment**: Staging    
**Building Blocks:**   
- [X] Create herbicide pages.
- [X] Create hazard pages.
- [X] Transform service on the first of each hazard in 15C and put these behind the Toxic Exposure feature flag.
- [X] Transform service on the first of each hazard in 15D and put these  behind the Toxic Exposure feature flag.
- [X] Handle multiple exposure locations 15C.
- [X] Handle multiple exposure locations 15D.
- [X] Discovery on async document status upload for form 526 after claim is established.
- [X] Consolidate Submit and Toxic Exposure feature flags.     
- [X] End to end test from 526ez to VBMS with the 2022 PDF, regression testing column 2 filled and 15A checked, 15B and 15E are populated, adding 15C and 15D are populated.
- [X] Handling of 2 forms - new feature flag for IPF claims
- [X] UI/UX updates for IPF claims
 

#### Milestone: Migrate /submit endpoint and /generatePDF endpoint
**Estimated Duration**: Sprint 33 (6/5 - 6/18/24) - Sprint 36 (7/17 - 7/30/24)*      
**Actual Delivery Date**:            
**Environment**: Production          
**Building Blocks:**      
- [X] Schedule weekly Lighthouse touchpoints through release.
- [X] Migrate Lighthouse synchronous /submit endpoint & release.*
  - [X] [Submit release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/DBEX%20Submit%20Migration%20Release%20Plan.md)    
  - [X] Submit dashboard           
- [X] Revisit submit transformation & make any needed changes
- [ ] Migrate Lighthouse generatePDF endpoint and release with submit endpoint

#### Milestone: A Veteran filing a new claim can complete section 4 of the 526ez paper form online, and VBMS receives a copy of the 2022 PDF upon claim submission with column 2 and questions 15A-15E populated appropriately.
**Estimated Duration**: Sprint 37 (7/31/24 - 8/13/24)*    
**Actual Delivery Date**:          
**Environment**: Release 1.0 - Production  
**Building Blocks:**    
- [ ] Schedule Staging review.
  - [X] Product guide updated.
  - [X] TestRail updated
- [ ] Bug Bash.
- [ ] Security review.
- [ ] Contact center review.
- [ ] Rollback plan in place.
- [ ] Submit & generatePDF release will update Veterans to using the 2022 PDF with Toxic Exposure questions.
- [ ] Fix any launch-blocking issues
  
#### Milestone: A Veteran filing with a 2019 In Progress Form claim can complete section 4 of the 526ez paper form online, and VBMS receives a copy of the 2022 PDF upon claim submission with column 2 and questions 15A-15E populated appropriately.
**Estimated Duration**: Sprint 38 (8/14/24 - 8/27/24)*    
**Actual Delivery Date**:          
**Environment**: Release 1.1 - Production    
**Building Blocks:**    
- [ ] Veterans with the form526 2019 In Progress Form will be selected for the 2022 form 526 and Toxic Exposure questions
- [ ] OMB component update
- [ ] Toxic Exposure post-release research planning
- [ ] Post-launch toggle cleanup

 
