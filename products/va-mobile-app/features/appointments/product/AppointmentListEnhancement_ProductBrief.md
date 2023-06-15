Epic: [5136](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5136)


### Problem Statement

As a Veteran, I would like to be able to easily identify specific information about my appointments when reviewing my appointment list and details, so that I can prepare for my appointment accordingly.  

**Current Challenges**



* Missing and confusing appointment information makes the list difficult for Veterans to prepare for their appointments
    * In past research studies, Veterans expressed that missing and or inconsistent appointment details such as type of care, clinic name, physical location, and provider information make it difficult for them to understand their appointments. 
    * Inconsistent or missing information &  instructions for video appointments 

**Current Mobile**



* During the Appointments V2 integration, we noticed some inconsistencies on how we display or do not display information on the appointment  list/detail views. Some highlights, to name a few
    * Inconsistencies when displaying info such as type of care, reason for care, 
    * What info is avail for CC vs VA appts etc 
    * Missing info/instructions for video appts 

**Desired Outcomes**



* Veterans are able to easily scan their upcoming & past appt list and details
* Veterans have all the key information that they need in order to prepare or reconcile their appointment(s) 
* Veterans can feel confident when reviewing appointment list & details whether be on the web, mobile or check in that the information they are seeing is consistent (web & mobile alignment)


### Assumptions and Level of Confidence



1. When key details are missing and Veterans do not have enough information about their appointment, they are having to spend time reaching out to the facility to seek the information they need.  Providing the key information, will save the veteran time and allow them to plan accordingly


### Risks



* Engineering
* Research Risks
* UX Risks
    * External team support if needed
    * Potential site-wide content support needed
* Product Risks


### Solution Approach



* Complete an content audit of appt list and detail view (Step 1/2)
    * Identify what info we expect to be displayed based on X criteria (leveraging VAOS list/detail design for reference) 
    * **Who:** UX, Content, Product
* Update appointment list view  (Step 3)
    * Ensure we are providing key information for all appt types (in person, video visit, call, community care, etc)
    * **Who: **UX, Content, Engineering, QA
* Update appointment details
    * **Who: **UX, Content, Engineering, QA


---


### Measuring success 

	What metrics can we watch to see if our efforts are reaching the desired outcomes?


### Stakeholders



* Appointment team - 
    * Product: Kay Lawyer, Leah De La Costa, Jeff Roof,
    * Design: Peter Russo


### Open Questions



* What do we need to learn before moving forward?


### Important Links

[Appointment List Usability Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2022-09-appts-list-usability/research-findings.md)

[2023 Appointment List Screen Reader Usability Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2023-02-appt-list-usability-screenreader/research-findings.md#recommendations)

[VAOS current Staging Figma designs](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=54-11449&t=RKmy2E1MrdwEmmD5-0)

[VAOS Redesign](https://www.figma.com/file/RcDljBwThbwVDkNrDH2xiA/Appointment-Details-Redesign?type=design&node-id=1212-35309&t=T6Gx8zZVE4PyugtX-0) - Redesign work in process, but shows the direction Appointment team is headed 

[Check In List/Details Aligned with VAOS](https://www.sketch.com/s/aa8d5fd0-7da2-4771-8b56-230d6308f71c)


---
