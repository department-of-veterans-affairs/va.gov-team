
<!-- markdownlint-disable MD024 -->
# Release Plan: 526 Toxic Exposure

# Purpose
The purpose of this document is to describe and align development teams and stakeholders on what will be delivered and when. It describes the features, enhancements, and fixes that will be included in each Toxic Exposure (TE) release along with identified timelines. It is a living document and serves as a communication tool for keeping stakeholders informed about the progress of TE.

# Background
In 2022, The Sergeant First Class Heath Robinson Promise to Address Comprehensive Toxics (PACT) Act was signed into law. The PACT Act is a new law that expands VA health care and benefits for Veterans exposed to burn pits and other toxic substances. This law helps the VA provide generations of Veterans—and their survivors— with the care and benefits they’ve earned and deserve.

The PACT Act 
* Expands and extends eligibility for VA health care for Veterans with toxic exposures and Veterans of the Vietnam, Gulf War, and post-9/11 eras
* Adds 20+ more presumptive conditions for burn pits, Agent Orange, and other toxic exposures
* Adds more presumptive-exposure locations for Agent Orange and radiation
* Requires VA to provide a toxic exposure screening to every Veteran enrolled in VA health care
* Helps us improve research, staff education, and treatment related to toxic exposures

Today, while Veterans can file disability compensation for conditions believed to be caused by toxic exposure on the paper version of the 21-526ez, they’re not able to file a TE claim at va.gov. This creates an unnecessary burden for the Veteran, who may have mental, physical, or other environmental challenges or disabilities that prevent or otherwise make it difficult for them to file a claim using the paper version of the 526 form.

# Overview
To make it easy for Veterans to file disability compensation claims resulting from the PACT Act via va.gov, we are adding a toxic exposure section to the 21-526ez Veterans Disability Compensation and Related Compensation Benefits form on VA.gov. This change brings the digital form at VA.gov into parity with the 526ez paper form on these exposure questions, and will enable Veterans to specify aspects of their service history that might qualify them for disability benefits related to toxic exposure.

Veterans will be able to complete the paper form equivalent of Section IV; questions 15a-15e 
- 15a: "Are you claiming any conditions related to toxic exposures?
- 15b: "Did you serve in any of the following gulf war hazard locations?"
- 15c: "Did you serve in any of the following Herbicide locations?"
- 15d: "Have you been exposed to any of the following?" and;
- 15e: "If you were exposed multiple times, please provide all additional dates and locations of potential exposure."

## Success Criteria

[relative to form 526]: #

- Bring the online 526 form into compliance by being up to date with the 2022 paper form
- Reduce the number of letters sent to Veterans with requests for more information
- Reduce the amount of time to determine if the applicant is eligible for presumptive service connection based on toxic exposure
- Mantain or reduce abandonment rates

[relative to form EVSS to Lighthouse]: #

- Successfully migrate 526 submission infrastructure off EVSS
- Reduce or maintain existing submission errors
- Maintain % of submissions that use normal path
- Maintain or reduce uses of backup and failsafe path


## New Capabilities and Changes
In addition to adding TE sections to the digital form, this release also includes the following changes:

1. Migration of the EVSS submit endpoint to Lighthouse
2. Migration of the /generatePDF endpoint to Lighthouse for the backup submission path 
3. User Interface notifications for Veterans who have an IPF
4. A new checkbox and loop pattern for the Veteran-facing form logic
5. Transformation of the vets-website JSON data structure to be compatible with Lighthouse
6. Implementation of a Flipper feature flag that controls access to the TE feature
7. Handling of multiple exposures data to populate on the PDF in 15e
8. Implementation of updated logic for the new Lighthouse /submit endpoint


## Risks & Challenges
1. DBEX teams have developed this solution with the assumption that Lighthouse's Submit endpoint will be used for the production deployment of TE. If the Lighthouse /submit endpoint isn’t available by the end of June, DBEX teams will not re-pipe the TE solution to use EVSS async Submit endpoint. VA’s expectation is that TE solution is complete and ready by end of June. TE will leverage LH’s Submit endpoint when it's released into production.
2. The target delivery date, while identified, is variable depending on Lighthouse availability and any other time sensitive, urgent work that needs to be done. Prioritizing urgent work will impact the delivery target date.

## Use Cases
There are two use cases that we are considering for this release. For each, we plan to follow an incremental release strategy using established traffic percentages to route Veterans to the 526 form. We plan to use Flipper to control availabity for each use case.

### 1. New Applications
- Veterans who begin a new 526 form will be directed to complete the 2022 version of the 526 form, including the new Toxic Exposure section. These Veterans do not have an IPF, and may or may not have a previous Intent To File (ITF).

### 2. Veterans With an In Progress Form
- Veterans who have a 526 form in progress will be directed to resume their application without disruption from new features. Unlike New Applications, these Veterans do have an IPF and an ITF.

## Timelines and Key Components
See Appendix below for full milestone breakdown.

| Phase | Milestone | Target Dates | Status | Notes |
|---|---|---|---|---|
|1 |Gulf War exposures|May 21, 2024|Complete | On Track|
|2 |Herbicide & Hazards|July 3 2024*|In Progress | Delay by 5103 FDC update 5/16/24 and addressing bugs in submit endpoint functionality |
|3 |Launch Preparation| July 3 2024*|Planned  | Original date of 6/18 shifted by 1 sprint due to FDC update and identitified need to complete 1.1 UI / UX changes prior to staging review |
|4 |Migrate /getPDF functionality to LH| TBD*   | In Progress  |Pending fixes from LH, workaround implemented ([reference thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1714679140110029?thread_ts=1714674824.962009&cid=C02CQP3RFFX)). Team 2 owning this migration, delayed for Code Yellow.|
|5 |Migrate submit functionality to LH|June 2024| In Progress  |Lighthouse Submit available in LH staging environment 6/6/24|
|6 |New TE Applications - release 1.0|July 27 2024*| Not Started| Dependent on submit migration completion| 
|7 |Veterans with an IPF - release 1.1|Targeting 14+ days after new applications|Not Started| |

*Dates may vary
# Release Process
## Feature Flags

| Phase | Description | Flipper Status - Percentage | Visible Form | Notes |
|---|---|---|---|---|
|4 | Submit |Off - 0% | 2022 | When adding canary users for testing, we need to add their `user_account` id or their `user_uuid` to the flipper feature page. This is because the backend does not have access to their email address when determining if the feature is on for them or not
we need to check if the frontend can use this as well, or if we need to also add their email address|
|5 | GetPDF | N/A | 2022 | GenPDF pre-launch and Canarying are a dependency for Submit, however both will share a rollout
|6 | New TE Applications |On | 2022 | Per ToT 5/16: This will be combined with Submit; ToT: 5/23 this will be based on the presence of an IPF |
|7 | Veterans with an IPF |Off | 2022 |



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
  
## Proposed Release Plan for 1.0 (Veterans without existing IPF)
### Prerequisites:
Approvals for launch:
- [ ] Development for release 1.0 and 1.1 are complete, and ability to distinguish between Veteran states to be selected for exposure to the 2022 526ez form using feature flag disability_526_toxic_exposure
- [ ] OCTO PO - Emily Theis
- [ ] Approval for PDFs - **need team name
- [ ] DBEX Teams approve validation rake task results
- [ ] Monitoring configured by DBEX teams
- [ ] vets-api Deployed, Toggled Off
- [ ] vets-website Deployed
- [ ] Benchmark data for Veteran claim selection and monitoring during the release

### Release assumptions before kickoff:
-  DBEX team 1 will handle enabling/disabling the feature flag for the release.
-  DBEX teams 1 and 2 will both be available to troubleshoot any errors that arise. 
-  If a claim fails both the primary and backup submission processes, the teams will research root cause, repair claim in production, and re-trigger primary submission. The teams will do whatever it takes to prevent a Veteran from needing to recomplete their claim.
-  Once a Veteran is selected for the 2022 526ez form they cannot be de-selected.

#### Day 0:
 - 11am EDT <individual> Toggles Feature ON for all Users
 - Noon EDT <individual> Toggle Feature OFF for all Users

#### Day 0-A:
 - Monitor submissions over next ? days. 
   - Daily task: <individual> executes production script to generate PDF for any claim submitted using TE flow
   - <individual> Send PDF bundle to ??? Team (in S3?) 
   - <individuals> Manually remediate any claim that was not accepted by Claims or Benefits Intake API
   - <team> Fix defects

#### Day 1: 
- <individual> Toggle on for 25% of Users
#### Days 1-6: 
- Repeat monitoring tasks for 20 claims daily

#### Day 7: 
- <individual> Toggle on for 50% of Users
#### Day 7-13: 
- Repeat monitoring tasks for 20 claims daily

#### Day 14: 
- <individual> Toggle on at 100%

### Remediation Steps:
 - If a claim fails Primary submission, passes Backup submission, no further effort required
 - If a claim fails both Primary and Backup submission processes, team researches root cause, <individual> repairs claim in production and re-triggers primary submission

## Proposed Release Plan for 1.0

Steps TBD


# Appendix

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
         
## Post-Release To Do List
1. add TE pages to Google analytics in Domo - [submitted GH issue to analytics team](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86588)
2. look at the count of successful claim submissions
3. Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal. Additionally, examine identified anomalous activity for any endpoint rollouts.

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
 - [ ] End to end test from 526ez to VBMS with the 2022 PDF, regression testing column 2 filled and 15A checked, 15B and 15E are populated, adding 15C and 15D are populated.
 - [ ] Handling of 2 forms - new feature flag for IPF claims
 - [ ] UI/UX updates for IPF claims
 
 

#### Milestone: Migrate /submit endpoint and /generatePDF endpoint
**Estimated Duration**: Sprint 33 (6/5 - 6/18/24) - Sprint 35 (7/3-7/16/24)*      
**Actual Delivery Date**:            
**Environment**: Production          
**Building Blocks:**      
- [X] Schedule weekly Lighthouse touchpoints through release.
- [X] Migrate Lighthouse synchronous /submit endpoint & release.*
     - [X] [Submit release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/DBEX%20Submit%20Migration%20Release%20Plan.md)    
     - [X] Submit dashboard           
- [ ] Revisit submit transformation & make any needed changes
- [ ] Migrate Lighthouse generatePDF endpoint and release with submit endpoint
- [ ] Schedule staging review


#### Milestone: A Veteran filing a new claim can complete section 4 of the 526ez paper form online, and receives a copy of the 2022 PDF upon claim submission with column 2 and questions 15A-15E populated appropriately.
**Estimated Duration**: Sprint 36 (7/17 - 7/30/24)*    
**Actual Delivery Date**:          
**Environment**: Release 1.0 - Production  
**Building Blocks:**    
 - [ ] Staging review.
     - [X] Product guide updated.
     - [X] TestRail updated
 - [ ] Bug Bash.
 - [ ] Security review.
 - [ ] Contact center review.
 - [ ] Rollback plan in place.
 - [ ] Submit & generatePDF release will update Veterans to using the 2022 PDF with Toxic Exposure questions.
 - [ ] Post-launch toggle cleanup

#### Milestone: A Veteran filing with a 2019 In Progress Form claim can complete section 4 of the 526ez paper form online, and receives a copy of the 2022 PDF upon claim submission with column 2 and questions 15A-15E populated appropriately.
**Estimated Duration**: Sprint 37 (7/31 - 8/13/24)*    
**Actual Delivery Date**:          
**Environment**: Release 1.1 - Production    
**Building Blocks:**    
- [ ] Veterans with the form526 2019 In Progress Form will be selected for the 2022 form 526 and Toxic Exposure questions
- [ ] OMB component update
- [ ] Toxic Exposure post-release research planning
- [ ] Post-launch toggle cleanup

 
