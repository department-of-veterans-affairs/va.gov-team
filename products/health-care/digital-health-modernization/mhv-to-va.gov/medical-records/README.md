# My Health Medical Records Product Outline

Last Updated: Dec 5, 2023

### Communications

- **Github labels**: my-health; mhv-to-va.gov-MR
- **Slack channel**: [#mhv-medical-records](https://dsva.slack.com/channels/mhv-medical-records)

### Roles  
  
|Name|Role|Email|
|----|----|-----|
|Lauren Alexanderson |OCTO Lead|lauren.alexanderson@va.gov|
|Marci McGuire |OCTO Product Manager| marci.mcguire@va.gov |
|Bresha Lipscomb | VA Product Owner | bresha.lipscomb@va.gov |
|Bryan Riley | ByLight Delivery Mgr | bryan.riley@va.gov |
|Mikki Northuis|Content and IA | mikki.northuis@va.gov |
|Martha Wilkes |OCTO Accessibility Strategist | martha.wilkes@va.gov |
|Coulton Bunney |OCTO Design Lead| coulton.bunney@va.gov |
|Kaitlin Fink |OCTO Design Lead| kaitlin.fink@va.gov |
|Alexia Wunder | By Light Design Lead | alexia.wunder@va.gov |
|Mike Moyer | ByLight Lead Developer | michael.moyer@va.gov |
|Alexia Wunder| ByLight Lead Designer | alexia.wunder@bylight.com |
|Anne Costello| ByLight Lead Researcher | anne.costello@bylight.com |


## Overview
Medical Records on VA.gov will provide Veterans with the same ability to view their VA health care data providers as on MyHealtheVet (MHV) today The new application will employ modern technology and user-centered design to ensure that the tool is accessible, straightforward, and simple to use.  Moving this product out of MyHealtheVet and into the VA.gov landscape will also provide a more seamless and consistent experience than was possible on two distinct web sites.

The development and release of functionality will occur in five 'phases' to align with the release strategy of all MHV products.  After gaining approval via the collaboration cycle, each 'domain' of Medical Records will enter into Phase 0 one at a time.  After all domains are in Phase 0, they will then deploy together to Phases 1-4.
  - Vaccines
  - Lab and Test Results, consisting of:
    -  Chemistry/Hematology,
    -  Microbiology,
    -  Pathology results,
    -  Cardiology images and reports,
    -  Radiology images & Reports
  - Care Summaries and Notes, consisting of:
    - VA Notes,
    - Admission & Discharge Summaries,
    - After Visit Summaries
  - Health Conditions, Vitals, and Allergies
  - Downloadable Reports (consolidation of all domains into a single report)

## Problem Statement
Medical Records on MyHealtheVet was researched and developed 20 years ago and remains largely unchanged from UI, IA, accessibility, and technology perspectives.  Furthermore, some of the rationale and decisions that drove the original medical records design may no longer be valid or timely today, and therefore should be re-examined and challenged where appropriate.

## Opportunities
How might we leverage user-centered design strategies, modern tech, and VA.gov design system and components to create a more intutive, user-friendly, and performant medical records experience than exists today?
 
## User Outcomes
### Desired User Outcomes

- Users have a medical records application whose function is more consistent with their mental models
- Users are able to perform most, if not all, of the functions provided in a typical medical records application
- Users no longer need to move between two different web sites (VA.gov and MHV) to perform various health care-related tasks
- User confidence and satisfaction increase as a result of a more consistent, reliable, and performant application
- Users who utilize assistive technology such as screen readers are able to easily use medical records

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

Appointments: Appointments will be found in “appointments” section of My Health

- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - This solution will be developed and released in multiple groupings.  Each grouping will have it's own Collaboration Cycle ticket.  The groupings are expected to be:
  --Vaccines
  --Lab and Test Results, consisting of Chemistry/Hematology, Microbiology, Pathology results, Cardiology images and reports, Radiology images & Reports
  --Care Summaries and Notes, consisting of VA Notes, Admission & Discharge Summaries, After Visit Summaries
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
- *Phase 0 Launch Date*
  - October 2023 - Allergies - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/allergies/rollout_checklist.md)
  - December 2023 - Vaccines - [Go No/Go Rollout Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/vaccines/rollout_checklist.md)
  - December 2023 - Care Summaries/Notes

---

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



