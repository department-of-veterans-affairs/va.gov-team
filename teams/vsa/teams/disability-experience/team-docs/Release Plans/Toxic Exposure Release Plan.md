
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
- 15e: "If you were exposed multuiple times, please provide all additional dates and locations of potential exposure."

## Success Criteria to consider monitoring:

[relative to form 526]: #

- Bring the online 526 form into compliance by being up to date with the 2022 paper form
- Reduce the number of letters sent to Veterans with requests for more information
- Reduce the amount of time to determine if the applicant is elegible for presumptive service connection based on toxic exposure
- Mantain or reduce abandonment rates

[relative to form EVSS to Lighthouse]: #

- Sucessfully migrate 526 submission infrastructure off EVSS
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
10. Implementation of updated logic for the new Lighthouse /submit endpoint


## Risks & Challenges
1. DBEX teams have developed this solution with the assumption that Lighthouse's Submit endpoint will be used for the production deployment of TE. If the Lighthouse /submit endpoint isn’t available by the end of June, DBEX teams will not re-pipe the TE solution to use EVSS async Submit endpoint. VA’s expectation is that TE solution is complete and ready by end of June. TE will leverage LH’s Submit endpoint when it's released into production.

## Use Cases
There are two use cases that we are considering for this release. For each, we plan to follow an incremental release strategy using established traffic percentages to incrementally route Veterans to the 526 form. We plan to use Flipper to control availabity for each use case. As Flipper controls access to the new form (via a conditional flag) the moment a Veteran starts a new claim, Veterans with an active session will not be directed to the new form.

### 1. New Applications
- Veterans who begin a new 526 form will be directed to complete the 2022 version of the 526 form, including the new Toxic Exposure section. These Veterans will not have an IPF, and may or may not have a previous Intent To File (ITF). Exact traffic targets have yet to be determined.

### 2. Veterans With an In Progress Form
- Veterans who have a 526 form in progress will be directed to complete the 2022 version of the 526 form, including the new Toxic Exposure section. Unlike New Applications, these Veterans will have an IPF and an ITF. Exact traffic targets have yet to be determined. 


## Timelines and Key Components

[DBEX Toxic Exposure Timeline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/Toxic%20Exposure%20Delivery%20Plan.md) for reference

| Phase | Milestone | Target Dates | Resolution Dates | Notes |
|---|---|---|---|---|
|1 |Gulf War exposures|May 21, 2024|   | On Track|
|2 |Herbicide & Hazards|June 04 2024|
|3 |Launch Preparation|June 18 2024|
|4 |Migrate /getPDF functionality to LH|   |   |Pending fixes from LH|
|5 |Migrate submit functionality to LH|early June 2024|   |Pending LH implementation (est. staging early June)|
|6 |New TE Applications|June 27 - 27 2024|
|7 |Veterans with an IPF|TBD||

# Release Process

## Feature Flags

| Phase | Description | Flipper Status - Percentage | Visible Form |
|---|---|---|---|
|4 | Submit |Off - 0% | 2022 |
|5 | GetPDF |Off - 0% | 2022 |
|7 | Veterans with an IPF |Off| 2022 |

## Rollouts 
#### Submit: 
- [ ] LH Implementation
- [x] Planning
 - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/DBEX%20Submit%20Migration%20Release%20Plan.md
- [ ] Internal Testing and Review
- [ ] Pre-release Testing
- [ ] Canary
- [ ] Staged Rollout
 - Rollbacks:  
#### GetPDF (GeneratePDF):
- [ ] LH Implementation
- [ ] Planning
 - [Link]
- [ ] Internal Testing and Review
- [ ] Pre-release Testing
- [ ] Canary
- [ ] Staged Rollout
 - Rollbacks:  

#### Post-Release:
1. add TE pages to Google analytics in Domo (can we do this sooner?)
2. look at the count of sucessfull claim submissions
3. Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal. Additionally, examine identified anomalous activity for any endpoint rollouts.

#### Monitor Success Criteria:
 - Bring the online 526 form into compliance by being up to date with the 2022 paper form
 - Reduce the number of letters sent to Veterans with requests for more information
 - Reduce the amount of time to determine if the applicant is elegible for presumptive service connection based on toxic exposure
 - Mantain or reduce abandonment rates
 - Sucessfully migrate 526 submission infrastructure off EVSS
 - Reduce or maintain existing submission errors
 - Maintain % of submissions that use normal path
 - Maintain or reduce uses of backup and failsafe path

 - 
