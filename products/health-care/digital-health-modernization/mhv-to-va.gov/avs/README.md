# After Visit Summary (AVS) Product Outline

## Communications
- [Super Epic](https://app.zenhub.com/workspaces/mhv-to-vagov-appointments-63d9ef2effd69b002641127b/issues/gh/department-of-veterans-affairs/va.gov-team/54140)
  - Github labels: my-health; my-health-APPOINTMENTS; AVS
- Slack channel: [#after-visit-summary](https://dsva.slack.com/archives/C04UBETRY8N)
- [Kickoff Mural (includes initial decisions, definition of success, and more)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677076638208/77cc850ded3dd4358451f0a42f7a96d9f49a1206?sender=u7c471a43344939c759cb1640)

### Team
- Lauren Alexanderson - OCTO Lead, [lauren.alexanderson@va.gov](mailto:lauren.alexanderson@va.gov)
- Kristen McConnell - OCTO UX Lead, [kristen.mcconnell@va.gov](mailto:kristen.mcconnell@va.gov)
- Adrian Rollett - OCTO Engineering Lead, [adrian.rollett@va.gov](mailto:adrian.rollett@va.gov)

## The Problem
Today, select Veterans and caregivers receive After Visit Symmaries following their medical appointment. This group can receive a printed copies as they are leaving the provider's office or they can access them on My HealtheVet. Within the MHV on VA.gov work, we now want to offer AVSs on VA.gov too. The new application will employ modern technology and user-centered design to ensure that the AVS is accessible, straightforward, and simple to use. Moving this product out of MyHealtheVet and into the VA.gov landscape will also provide a more seamless and consistent experience than was possible on two distinct web sites.

**What is an After Visit Summary?**
According to [Centers for Medicare & Medicaid Services Meaningful Use guidelines](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/13_Clinical_Summaries.pdf), "an after-visit summary...provides a patient with relevant and actionable information and instructions containing the patient name, provider’s office contact information, date and location of visit, an updated medication list, updated vitals, reason(s) for visit, procedures and other instructions based on clinical discussions that took place during the office visit, any updates to a problem list, immunizations or medications administered during visit, summary of topics covered/considered during visit, time and location of next appointment/testing if scheduled, or a recommended appointment time if not scheduled, list of other appointments and tests that the patient needs to schedule with contact information, recommended patient decision aids, laboratory and other diagnostic test orders, test/laboratory results (if received before 24 hours after visit), and symptoms."

### User Goals
- As a Veteran or caregiver, I want access to a summary of what was discussed and decided at my appointment.
- As a Veteran who utilizes assistive technology, such as a screen reader, I am able to easily review my After Visit Summary.

### Business Goals

#### Desired Business Outcomes
- Meet VA Directive (Request out to get the directive, so we can add a link), which requires VA provide an After Visit Summary to Veterans.
- Meet OIG requirement
- Users have an equal or better experience with After Visit Summaries on VA.gov

#### Undesired Business Outcomes
- Support receives more support requests related to users' inability to locate or use the new tool
- The new tool does not perform as well as the old one, and users become frustrated and lose confidence in the VA

## Requirements
#### In Scope 
- AVSs available for appointments occurring on or after launch date. Past appointment After Visit Summaries will not be available.
- Data and sections displayed will be similar to the printed PDF that the VA currently offers (minus the patient education articles and clinical graphs sections).
- AVsS will only be available for appointments where a site batch prints or a provider prints an AVS within the CPRS AVS system.
- Only appointments at VA facilities will be possible to display.

#### Out of Scope
- Patient education articles and clinical graphs will not be displayed in the MVP.
- Past appointment AVSs will not be shown.
- These AVSs will not follow the rest of MHV on VA.gov notes. It will require future work to create a consistent experience (UX and data continuity) with Cerner and other MHV on VA.gov sections.
- Community care and Cerner appointments will not have AVSs.

## Solution Approach
- MVP
  - Make edits to the HTML generates upon printing within the CPRS AVS system, so the HTML is semantic and accessible.
  - Apply VA design system styling.
  - Finalize a plan on where to access the AVS HTML version. Mongo and TIU Notes (in Vista) have been discussed.

## Value Propositions
After Visit Summaries (AVS) serve many purposes*, including:
-	Promote patient-center, outpatient care
-	Summarize medications, appointments, tests, patient education material and other instructions
-	Enhance communication
-	Engage patients in their care
-	Improve recall of medical instructions
-	Meet electronic health record Meaningful Use criteria
Within the VA today, Veterans can be handed a printed AVS when leaving their appointment, providers can review an AVS with them during their appointment, and Veterans can view a PDF version of AVS on My HealtheVet. Now, we want to create an AVS experience on VA.gov. 

*Purpose copied from [AVS User Guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/After-Visit-Summary-User%20Guide-1.2.pdf)

## KPIs
(Analytics Playbook)[https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/analytics-playbook]

---

# Implementation Info

## Status

## Technical Decisions

## Product Decisions

## Screenshots

### Before
- [CPRS AVS Sample](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/AVS-Sample-White-Redacted.pdf)
- [CPRS AVS User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/After-Visit-Summary-User%20Guide-1.2.pdf)


### After

## Partners, SMES, and Stakeholders
- Patrick Bateman
- Kay Laywer
- Mark Dewey
- Stephen Barrs 
- Shane Elliott
- Rob Durkin
- Ro Weaver (and MHV AVS group)
- Bresha Lipscomb
- Coulton Bunney
