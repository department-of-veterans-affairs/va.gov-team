# MHV on VA.gov Medical Records Product Outline

Last Updated: May 6. 2025

### Communications

- **Github labels**: my-health; mhv-to-va.gov-MR
- **Slack channel**: [#mhv-medical-records](https://dsva.slack.com/channels/mhv-medical-records)

### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Lauren Alexanderson |OCTO Portfolio Director|lauren.alexanderson@va.gov|
|Marci McGuire |OCTO Product Lead| marci.mcguire@va.gov |
|Robyn Singleton | OCTO Health Measurement and Data Design Lead | robyn.singleton@va.gov |
|Mark Dewey | OCTO Engineering Lead | mark.dewey@va.gov |
|Adrian Rollet | OCTO Engineering Lead | adrian.rollet@va.gov |
|Bresha Lipscomb | VA Product Owner | bresha.lipscomb@va.gov |
|Bryan Riley | ByLight Delivery Mgr | bryan.riley@va.gov |
|Lichelle Bain | ByLight Product Manager | lichelle.bain@va.gov |
|Danielle Thierry| Content and IA | danielle.thierry@va.gov |
|Martha Wilkes |OCTO Accessibility Strategist | martha.wilkes@va.gov |
|Alexia Wunder | By Light Design Lead | alexia.wunder@va.gov |
|Robert (Bobby) Bailey  | By Light UX Senior Accessibility and Operations | robert.bailey1@va.gov |
|Mike Moyer | ByLight Lead Developer | michael.moyer@va.gov |
|Anne Costello| ByLight Lead Researcher | anne.costello@bylight.com |


## Overview
Medical Records on VA.gov will provide Veterans with the same ability to view their VA health care data providers as on the standalone MyHealtheVet (MHV) health portal. 

The new tool will employ modern technology and user-centered design to ensure that the tool is accessible, intuitive, and simple to use.  Moving this product out of the standalone health portal and into the VA.gov landscape will also provide a more seamless and consistent experience than was possible on two distinct web sites.  Integrating data from Oracle Health will also make the multi-year rollout of Oracle Health seamless to Veterans, giving them access to their health records regardless of their facility's rollout status, and without requiring the Veteran to know which system their facility is on.

The development and release of each discrete application (also referred to as domains) was completed sequentially for the private beta (trusted users) release, which was referred to as Phase 0. A small group of ~150 Veterans were invited via email to try out the new experience and share feedback by emailing a dedicated mailbox.  The domains are:

  - Allergies
  - Vaccines
  - Lab and Test Results, consisting of:
    -  Chemistry/Hematology
    -  Microbiology
    -  Cytology
    -  Surgical pathology
    -  Electron microscopy
    -  Radiology images & Reports
  - Care Summaries and Notes, consisting of:
    - VA progress notes
    - Admission & sdischarge Summaries
    - After Visit Summaries
  - Health Conditions
  - Vital signs
  - Downloadable Reports 
    - Blue Button Report (customizable, and in addition to health data, includes demographic information and, optional, a brief military history from the Department of Defense.
    - Continuity of Care Document (CCD), previously referred to as VA Health Summary, a file in standardized CCDA XML format that can be imported into other electronic health record (EHR) systems.
    - Self-entered health data, data that was entered on My HealtheVet portal prior to June 2025, after which the ability to enter that data will be retired.  Going forward, patient-reported data will be collected during health visits, and will be accessible from a new Share My Health Data tool managed by Veterans Health Information Exchange (VHIE), or by making a request at local Release of Information (ROI) office.

All medical records applications entered Phase 1 (public beta) simultaneously in Dec 2024.  Links on the existing My HealtheVet portal were added to invite users to try out the new medical records experience.  By mid-March 2025, medical records will be made available to 1% of users.  Once Oracle data has been inttegrated into all domains, Medical Records will be made available to all users.

## Problem Statement
Medical Records on MyHealtheVet was researched and developed 20 years ago and remains largely unchanged from UI, IA, accessibility, and technology perspectives.  Some of the rationale and decisions that drove the original medical records design may no longer be valid or timely today, and therefore should be re-examined and challenged where appropriate. 

VA is also in the midst of replacing its interally built clinicial portal with a Oracle Health's PowerChart, and migrating patient health data from the VA's VistA database into Oracle's Millenium database.  This rollout will happen one facility at a time over several years, during which time health data for unconverted facilities will remain in VistA.

This project will also integrate health data from Millineum with VistA data so that Veterans can see either, or both, regardless of the system their health facility/facilties are on.

## Opportunities
How might we leverage user-centered design strategies, modern tech, and VA.gov design system and components to create a more intutive, user-friendly, and performant medical records experience that gives Veterans seamless visibility of their health data derived from VistA or Millenium?
 
## User Outcomes
### Desired User Outcomes

- Users have a medical records application whose function is more consistent with their mental models
- Users are able to perform most, if not all, of the functions provided in a typical medical records application
- Users no longer need to move between two different web sites (VA.gov and MHV) to perform various health care-related tasks
- User confidence and satisfaction increase as a result of a more consistent, reliable, and performant application
- Users who utilize assistive technology such as screen readers are able to easily use medical records
- Users will be able to access their health records without needing to know if their facility has been converted to Oracle Health.

### Undesired User Outcomes

- Users are confused as to why medical records is no longer part of MyHealtheVet
- Users have difficulty finding the new medical records application on VA.gov
- Users are not be able to perform some of the tasks they were able to perform with the MyHealtheVet medical records application
- Users do not have the same level of control over their data as they did in the MyHealtheVet medical records application
- Users have to log into VA.gov to use medical records after accessing it from MHV

## Business Outcomes
### Desired Business Outcomes

- Support receives fewer support requests related to medical records
- Users have an equal or better experience with the reports generated from the new tool
- VA health care providers have an equal or better experience with the data generated from the new tool
- The VA's reputation for its ability to understand users' needs improves
- The VA's reputation for its ability to leverage modern technology improves

## Undesired Business Outcomes
- Support receives more support requests related to users' inability to locate or use the new tool
- The new tool does not perform as well as the old one, and users become frustrated and lose confidence in the VA
- Health care providers encounter difficulty with the medical records generated from the new tool

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of Use                                                      | Service Completion      | Trust/Satisfaction | Health            |
|----------|------------------------------------------------------------------|-------------------------|--------------------|-------------------|
| KPI      | VA.gov medical records traffic vs. MHV medical records traffic |                         |                    |                   |
| KPI      |                                                                  | Report generation completion rate |                    |                   |
| KPI      |                                                                  |                         | Medallia score     |                   |
| KPI      |                                                                  |                         |                    | Report generation errors |

#### Baseline KPI Values
- MHV medical records traffic just before go-live
- VA.gov report generation completion rate after go-live
- Medallia score after go-live
- Number of report generation errors

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Ensure users are finding medical records on VA.gov
  - Key result: Traffic to VA.gov medical records is equal or greater than previous MHV medical records metrics

- Objective: Ensure the medical records tool is intutive and easy to use
  - Key result: Report generation rate is equal or greater than MHV medical records report generation rate

- Objective: Ensure users are satisfied with the new tool
  - Key result: Medallia scores equal to or greater than comparable satisfaction scores on MHV

- Objective: Ensure product functions properly
  - Key result: 99% success rate upon generating a report

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
  - We will build a tool on VA.gov that has functional parity with the tool on MHV.com.  We have decided to start there because we are replacing an existing tool
- *Why this solution / approach over other solutions / approaches?*
  - Adding additional functionality will increase an already-lengthy timeline for the overall MHV to VA.gov move.  Decreasing functionality would likely cause dissatisfaction among users.
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
Medications: Medications will be combined with RX refill to create one medications section that will include a view of all of your meds, plus a view where you can refill/renew va meds.

Appointments: Appointments and After Visit Summaries will be found in “Appointments” section of MHV on VA.gov 

- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - This solution will be developed and released in multiple groupings.  Each grouping will have it's own Collaboration Cycle ticket.  The groupings are expected to be:
  --Vaccines
  --Lab and Test Results, consisting of Chemistry/Hematology, Microbiology, Pathology results, Radiology images & Reports
  --Care Summaries and Notes, consisting of VA Notes, Admission & Discharge Summaries, After Visit Summaries (linked from Appointments)
  --Health Conditions, Vitals, and Allergies
  --Downloadable Reports
  

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan -- TBD](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Phase 0 Launch Dates*
  - October 2023 - Allergies - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/allergies/rollout_checklist.md)
  - December 2023 - Vaccines - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/vaccines/rollout_checklist.md)
  - February 2024 - Care Summaries/Notes - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/care-summaries-notes/rollout-checklist.md)
  - May 2024 - Health Conditions - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/health-conditions/rollout_checklist.md)
  - Feb 2024 - Vitals - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/vitals/rollout_checklist.md)
  - Sep 2024 - Lab and Test Results - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/labs-and-test-results/rollout_checklist.md)
  - Dec 2024 - Blue Button/Self Entered - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/blue-button/rollout_checklist.md)
  - Dec 2024 - Continuity of Care Document - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/ccd/rollout_checklist.md)---

## Solution Narrative

### Current Status

   
## Screenshots

### Before

### After

---

## Stakeholders

<details>
 
- Labs and tests – Thomas Haugen (Chief, Pathology & Laboratory Medicine)
- Display: Leanne Walls & Theresa (Terry) Webber
- Lab Enforcer: Group who audits VA facilities including MHV (but not sure who) so we need to make sure that anything dealing with labs goes through this group.
- VA Immunizations/ NCP – Stephanie Spohr
- Appointments – Dawn Smith (OVAC)
- Pharmacy – Dr. Eric Spahn, Dr. Maureen Layden, Margo Kabel (Pharmacy Benefits Management – Medication Information Management)
- Flagship mobile app – Chris Johnston
- CCD – Glen Crandall, Maria Swall
- Clinical Informatics – Kellie Condon, Jonathan Nebeker
- HIMS – Erinn Dean
- Privacy – Stephania Griffin, Peggy Pugh
- PHR Policy Workgroup – Dr. Christine Erickson (Lead)
- Records product on MHV – Theresa Hancock, Bresha Lipscomb, Carnetta Scruggs, Lichelle Bain, Rich Beaudoin, Bobby Bailey, Barry Egbert, new SME for medical records to be hired in Sept-Oct
- MHV Health Data Product Line / Blue Button – David (Boomer) Rawlins
- APIs – Dave Mazik
- OCTO DHP Team (Digital Health Platform) – Stefany Holguin
- OCTO leadership – Charles Worthington, Chris Johnston, Lauren Alexanderson
- Contact centers – Chante Lantos-Swett
 
</details>



