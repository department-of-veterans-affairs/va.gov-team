# After Visit Summary (AVS) Product Outline

## Overview and Problem Statement
Today, select Veterans and caregivers receive After Visit Summaries following their medical appointment. This group can receive printed copies as they leave their provider's office or they can access a PDF version on My HealtheVet. We now want to offer an AVS on VA.gov too. The new application will employ modern technology and user-centered design to ensure that the AVS is accessible, straightforward, and simple to use. Moving this product out of MyHealtheVet and into the VA.gov landscape will also provide a more seamless and consistent experience than was possible on two distinct web sites.

**What is an After Visit Summary?**
According to [Centers for Medicare & Medicaid Services Meaningful Use guidelines](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/13_Clinical_Summaries.pdf), "an after-visit summary...provides a patient with relevant and actionable information and instructions containing the patient name, provider’s office contact information, date and location of visit, an updated medication list, updated vitals, reason(s) for visit, procedures and other instructions based on clinical discussions that took place during the office visit, any updates to a problem list, immunizations or medications administered during visit, summary of topics covered/considered during visit, time and location of next appointment/testing if scheduled, or a recommended appointment time if not scheduled, list of other appointments and tests that the patient needs to schedule with contact information, recommended patient decision aids, laboratory and other diagnostic test orders, test/laboratory results (if received before 24 hours after visit), and symptoms."

### User Goals

#### Desired User Goals
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

## Solution Approach
- _What are you going to build now, and why have you decided to start here?_
  - We intially explored editing the HTML generated upon printing within the CPRS system to make the MHTL semantic and accessible. After starting the edits, we realized that they would impact the printed version and were more involved than initial estimated. As a result, we changed the MVP approach to generating JSON and connecting to the CPRS AVs system via endpoints created by the CPRS AVS team.
  - Apply VA design system styling.
- _Why this solution/approach over other solutions/approaches?_
  - We evaluated other technical solutions, including:
    - Editing the HTML already generated from the CPRS AVS system
    - Providing structure CCDA data
    - Using MHV APIs for Ongoing Care sections
    - Creating our own connections/APIs to VistA
  - We decided against these approaches due due to the resourcing available and early fall launch timelines. 

## MVP Requirements
#### In Scope 
- AVSs available for appointments occurring from the date that structured data creation released. Past appointment AVSs will not be available.
- Data and sections displayed will be similar to the printed PDF that the VA currently offers (minus the patient education articles, clinical graphs sections, and the Pocket VA medications and allergies).
- AVSs will only be available for appointments where a site batch prints or a provider prints an AVS within the CPRS AVS system.
- Only appointments at VA facilities will be possible to display.

#### Out of Scope
- Patient education articles, clinical graphs, and the Pocket VA medications and allergies sections will not be displayed in the MVP.
  - In order to pull in images that are part of patient education articles and clinical charts, a location to store the image files needs to be identified.
  - We also need to make sure the current Kramer Staywell licensing allows for imaging to be shared through a patient portal.
- Past appointment AVSs will not be shown.
- These AVSs will not follow the rest of MHV on VA.gov notes. It will require future work to create a consistent experience (UX and data continuity) with Cerner and other MHV on VA.gov sections.
- Community care and Cerner appointments will not have AVSs.

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
[Analytics Playbook](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/analytics-playbook)
- Ease of Use: VA.gov After Visit Summary traffic vs. MHV After Visit Summary traffic
- Trust/Satisfaction: Medallia score and VSignals feedback

**Baseline KPI Values**
- MHV AVS traffic before go-live
- Medallia score and VSignals feedback after go-live

**Objectives and Key results (OKRs)**
- Objective: Ensure users can find their After Visit Summary on VA.gov
  - Key result: Traffic to VA.gov After Visit Summary is equal or greater than previous MHV After Visit Summary metrics
- Objective: Ensure the After Visit Summary is intuitive and easy to use
  - Key result: Traffic to VA.gov After Visit Summary is equal or greater than previous MHV After Visit Summary metrics
- Objective: Ensure users are satisfied witht the After Visit Summary
  - Key result: Medallia scores equal to or greater than comparable satisfaction scores on MHV 
    - Open question: Since this released in January 2023, does MHV have satisfaction scores.
- Objective: Ensure product functions properly
  - Key result: 99% success rate for viewing the After Visit Summary
    - Open question: What % should be used here?

---

# Implementation Info

## Status
- For the MVP release, all stages of the collaboration cycle through the mispoint review are completed.

## Technical Decisions

## Product Decisions
- As of August 14, 2023:
  - Changing from editing the HTML to generating JSON
  - Cut the Pocket VA medications and allergies from scope.
- Prior to April 17 
  - We are building an HTML version of the AVS and not just giving Veterans access to a PDF.
  - Longer-term (non MVP goal): Data parity across MHV on VA.gov sections.
  - For the MVP, access AVS within the appointments section.
  - Longer-term information architecture location: AVSs will live within the Care Summaries and Notes (a subsection of Health History)

## Architecture

See the [AVS Engineering document](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/engineering#avs-engineering) for architectural information, incident response plan and dashboard links.

## Outstanding Questions

## Screenshots/Design

### Before
- [CPRS AVS Sample](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/AVS-Sample-White-Redacted.pdf)
- [CPRS AVS User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/After-Visit-Summary-User%20Guide-1.2.pdf)

### Designs
- [AVS-MVP-Happy-Path-UserFlow](https://user-images.githubusercontent.com/66287082/232537966-4330ee46-a1f0-4caf-a158-304b33e03b9f.jpg)

- [Hi-fi MVP for Development](https://www.sketch.com/s/05d5a740-4fc7-4380-8d83-e7acfbab201b)

- [Kickoff Mural (includes initial decisions, definition of success, and more)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677076638208/77cc850ded3dd4358451f0a42f7a96d9f49a1206?sender=u7c471a43344939c759cb1640)
- [WIP Sketch](https://www.sketch.com/s/05d5a740-4fc7-4380-8d83-e7acfbab201b)

### After

## Communications

<details>

- Github labels: my-health; my-health-APPOINTMENTS; AVS
- Slack channel: [#after-visit-summary](https://dsva.slack.com/archives/C04UBETRY8N)
- Product POCs: 
  - Lauren Alexanderson - OCTO Health Lead, [lauren.alexanderson@va.gov](mailto:lauren.alexanderson@va.gov)
  - Kay Lawyer - OCTO Product Lead, [katherine.lawyer@va.gov](mailto:katherine.lawyer@va.gov)
  - Kristen McConnell - OCTO UX Lead, [kristen.mcconnell@va.gov](mailto:kristen.mcconnell@va.gov)
  - Adrian Rollett - OCTO Engineering Lead, [adrian.rollett@va.gov](mailto:adrian.rollett@va.gov)
- [Super Epic](https://app.zenhub.com/workspaces/mhv-to-vagov-appointments-63d9ef2effd69b002641127b/issues/gh/department-of-veterans-affairs/va.gov-team/54140)

</details>

## Team Members

<details>
 
  - Lauren Alexanderson - OCTO Health Lead, [lauren.alexanderson@va.gov](mailto:lauren.alexanderson@va.gov)
  - Kay Lawyer - OCTO Product Lead, [katherine.lawyer@va.gov](mailto:katherine.lawyer@va.gov)
  - Kristen McConnell - OCTO UX Lead, [kristen.mcconnell@va.gov](mailto:kristen.mcconnell@va.gov)
  - Adrian Rollett - OCTO Engineering Lead, [adrian.rollett@va.gov](mailto:adrian.rollett@va.gov)
  - Rob Durkin - OCTO AVS (Clinical interface and Generation) Engineering Lead [robert.durkin@va.gov](mailto:robert.durkin@va.gov)
  - Nina Anusavice - UX Designer, [Nina.Anusavice@va.gov](mailto:Nina.Anusavice@va.gov)
</details>


## Stakeholders

<details>
 
- CPRS AVS
  - Shane Elliott
  - Rob Durkin
- MHV
  - Ro Weaver
  - Bresha Lipscomb (Appointments Product Owner)
- MHV on VA.gov
  - Kaitlin Fink
- Stakeholders
  - Dr. Maureen Layden (AVS Product Owner)
  - AVS Steering Committee (meets monthly)
  - Dr. Spahn
  - Dr. Layden
  - Dr. Nilesh Shah
  - Dr. Josephs
- Appointments on MHV on VA.gov (formerly VAOS)
  - Jeff Roof
  - Leah De La Costa
  - Peter Russo
</details>
