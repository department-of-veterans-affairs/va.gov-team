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
| 4: Migrate /getPDF and /submit to LH |              | In Progress |Pending fixes from LH, workaround implemented ([reference thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1714679140110029?thread_ts=1714674824.962009&cid=C02CQP3RFFX)). Team 2 owning this migration, delayed for Code Yellow. Lighthouse Submit available in LH staging environment 6/6/24, pending LH production release                                                              |
| 5: New forms                         | Aug 1, 2024  | Not started |Dependent on submit migration completion                                                              |
| 6: Vets with an IPF                  | Aug 15, 2024 | Not started |Targeting 14-21 days after new forms                                                              |

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

### 1. New Forms
1. Veterans who begin a new 526 form will be directed to complete the 2022 version of the 526 form, including the new Toxic Exposure section. These Veterans do not have an IPF, and may or may not have a previous Intent To File (ITF).
- Before full release:
  - Authenticated users may be directed to fill out the 2022 form version of the form depending on the level of incremental traffic set for the 2022 form (25%/50%/75%/100%). Veterans who are not directed by the feature flag to complete the 2022 version of the form will complete the 2019 version. Veterans that are directed to the 2022 form version who leave the active session and return will be taken back to the 2022 form version. Veterans on the 2022 form version will see an alert on the Review and Submit screen notifying them of the new toxic exposure questions.
- After 100% release:
  - All authenticated users who begin a new 526 form will be directed to the 2022 form version and will see an alert on the Review and Submit screen notifying them of the new toxic exposure questions. Veterans who leave the active session and return will be taken back to the 2022 form version.

### 2. Veterans With an In Progress Form
- Before full release
  - Authenticated users who resume an in progress 526 form may be directed to fill out the 2022 form version of the form depending on the level of incremental traffic set for the 2022 form (25%/50%/75%/100%). Veterans who are not directed by the feature flag to complete the 2022 version of the form will complete the 2019 version. Veterans that are directed to the 2022 form version who leave the active session and return will be taken back to the 2022 form version. Veterans on the 2022 form version will see an alert on the Review and Submit screen notifying them of the new toxic exposure questions. 
- After 100% release
  - All authenticated users who resume an in progress 526 form will be directed to the 2022 form version and will see an alert on the Review and Submit screen notifying them of the new toxic exposure questions. Veterans who leave the active session and return will be taken back to the 2022 form version.

| Phase                                | Flipper Status | Form in Progress | Visible Form | TE Alert Displayed |
|--------------------------------------|----------------|------------------|--------------|--------------------|
| 5: New forms                         | Disabled       | No               | 2019         | No                 |
| 5: New forms                         | Enabled        | No               | 2022         | Yes                |
| 5: All New Forms (after 100%)        | N/A            | No               | 2022         | Yes                |
| 6: Vets with an IPF                  | Disabled       | Yes, 2019        | 2019         | No                 |
| 6: Vets with an IPF                  | Enabled        | Yes, 2019        | 2022         | Yes                |
| 6: All Vets with an IPF (after 100%) | N/A            | Yes, 2019              | 2022         | Yes                |

---

## Step 1: Development
You'll need to create a feature toggle (or two) for any moderately or significantly changing feature. Follow the [best practices for creating feature toggles](https://depo-platform-documentation.scrollhelp.site/developer-docs/feature-toggles).

List the features toggles here.

| Toggle name | toggleValue | Description |
| ----------- | ----------- | ----------- |
| startedFormVersion | 1.0 | Enable the 2022 form when form is created |
| startedFormVersion | 1.1 | Enable the 2022 form when in progress form is retrieved |

## Step 2: Validation

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependent systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production Rollout

### Do I need a staged rollout?

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
DBEX teams T-REX and Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering team will be on standby to disable the flippers and fall back to 2019 of the form.

Rollback plan:
1. PM and PO monitor analytics for issues (failed submissions, traffic irregularies, unexpected errors).
2. Engineering disables flipper which hides the 2022 form version.
   - Users with in-progress 2022 sessions will finish out their 2022 session.
   - New users will be directed to the 2019 form version.

## 1.0 New Forms
### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
Due to the need to test against the production lightouse /submit endpoint, we'll be testing this feature in production behind a feature flag. To mitigate the risks of downstream actions that occur as a result of submitting an application for disability compensation, we'll work with our VBA stakeholders to delete the submission records in VBMS.

#### Planning
- Desired date range or test duration: Aug 2, 2024
- Desired number of users: 6 full submissions of the min, max, and overflow scenarios outlined in [this sheet](https://docs.google.com/spreadsheets/d/1qFzoRny9uDHegSh1CemWP_FhL606ki54Z-Go-04jOUA/edit?usp=sharing) (scenarios tab)
- How you'll recruit the right production test users: VFS team members, OCTO stakeholders, and VBA stakeholders will test
- How you'll conduct the testing: using test users and validating the staging form payload submissions with downstream stakeholders
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Flipper

#### Results
- Number of users:
- Number of bugs identified / fixed:
- Was any downstream service affected by the change?:
- Types of errors logged:
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes/no
- If yes, what: [FILL_IN] with ticket numbers

### Phase II: Staged Rollout (also known as unmoderated production testing)
We recommend that the rollout plan has five stages, each increasing the number of Veterans. This plan is a strongly recommended guideline but should only be deviated for precise reasons.

#### Rollout Planning
- Desired date range: Aug 5 - Aug 23
- How will you make the product available in production while limiting the number of users who can find/access it: Flipper
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:
  - Abandonment rate: The same or less than we have currently [Metric TBD]
  - Submission volume: 21-526ez has ~7500 submissions per week. Over 15 days we're expecting ~15,000
    - Canary: 12 submissions
    - 5%/10%/25%/50%/75%: >10 submissions
  - Error rate: <1%
  - Pageviews
- Links to the dashboard(s) showing "success criteria" metrics:
  - Domo Dashboard request submitted
  - [DataDog v2 submission dashboard](https://vagov.ddog-gov.com/logs?query=%40message_content%3A%22Lighthouse%3A%3ASubmitBenefitsIntakeClaim%20job%20starting%22%20%40named_tags.source%3Aburials-v2%20&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.benefits_intake_uuid%2C%40payload.claim_id%2C%40named_tags.request_id&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=hot&stream_sort=time%2Casc&viz=stream&from_ts=1713934800000&to_ts=1714747320000&live=false)
  - [Pageviews](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/report/content-pages/a50123418w177519031p176188361/_u.date00=20240418&_u.date01=20240507&explorer-table.filter=~2Fburials-and-memorials-v2~2Fapplication~2F530~2Fintroduction&explorer-table.plotKeys=%5B%5D/)
- Who is monitoring the dashboard(s)?: Product Manager (Laura Steele) and OCTO PO (Emily Theis)
#### Prerequisites:
Approvals & to do's for launch:
- [ ] Development for release 1.0 and 1.1 are complete, and ability to distinguish between Veteran states to be selected for exposure to the 2022 526ez form using feature flag disability_526_toxic_exposure
- [ ] OCTO PO - Emily Theis
- [ ] Approval for PDFs - **need team name
- [ ] DBEX Teams approve validation rake task results
- [ ] Monitoring configured by DBEX teams
- [ ] vets-api Deployed, Toggled Off
- [ ] vets-website Deployed
- [X] Benchmark data for Veteran claim selection and monitoring during the release      
- [X] [Troubleshooting SOP documented](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/TREX/DEBUG/SOP-Toxic-Exposure-Lighthouse-Form526-Submission-Troubleshooting.md)     

#### Release assumptions before kickoff:
- DBEX team 1 will handle enabling/disabling the feature flag for the release.
- DBEX teams 1 and 2 will both be available to troubleshoot any errors that arise. 
  - If a claim fails both the primary and backup submission processes, the teams will research root cause, repair claim in production, and re-trigger primary submission. The teams will do whatever it takes to prevent a Veteran from needing to recomplete their claim.
- Once a Veteran is selected for the 2022 526ez form they cannot be de-selected.

### Stage A: Canary 5% of users
*Test a small Veteran population to ensure any obvious bugs/edge cases are found.*

#### Planning
- Length of time: 2 hours
- Percentage of Users (and roughly how many users do you expect this to be): 5% of users, ~12 users/submissions

#### Results
- Number of unique users: 
- Metrics at this stage (per your "success criteria"): [FILL_IN] a list that includes KPIs listed in the [Rollout Planning](#rollout-planning) section
- Was any downstream service affected by the change?: 
- Types of errors logged:
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?

### Stage B: 10% of users
*Test a larger user population to ensure larger usage patterns expose no issues.*

#### Planning
- Length of time: 3 days (actual: )
- Percentage of Users (and roughly how many users do you expect this to be): 10% of users, 885


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

 
