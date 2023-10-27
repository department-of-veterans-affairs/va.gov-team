# After Visit Summary

[Epic #6672](https://app.zenhub.com/workspaces/va-mobile-epics-636d76f8c818bf0010e50a41/issues/department-of-veterans-affairs/va-mobile-app/6672)

## Web Summary/Overview

**Overview** 

Today, select Veterans and caregivers receive After Visit Summaries following their medical appointment.  This group can receive printed copies as they leave their provider's office or they can access a PDF version on My HealtheVet.  

**What is an After Visit Summary?** According to [Centers for Medicare & Medicaid Services Meaningful Use guidelines](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/13_Clinical_Summaries.pdf) , "an after-visit summary...provides a patient with relevant and actionable information and instructions containing the patient name, provider’s office contact information, date and location of visit, an updated medication list, updated vitals, reason(s) for visit, procedures and other instructions based on clinical discussions that took place during the office visit, any updates to a problem list, immunizations or medications administered during visit, summary of topics covered/considered during visit, time and location of next appointment/testing if scheduled, or a recommended appointment time if not scheduled, list of other appointments and tests that the patient needs to schedule with contact information, recommended patient decision aids, laboratory and other diagnostic test orders, test/laboratory results (if received before 24 hours after visit), and symptoms."


After Visit Summaries (AVS) serve many purposes*, including:

- Promote patient-center, outpatient care
- Summarize medications, appointments, tests, patient education material and other instructions
- Enhance communication
- Engage patients in their care
- Improve recall of medical instructions
- Meet electronic health record Meaningful Use criteria


**Desired User Goals**

- As a Veteran or caregiver, **I want access to a summary of what was discussed and decided at my appointment.**
- As a Veteran who utilizes assistive technology, such as a screen reader, I am able to easily review my After Visit Summary.

**Web MVP**

- AVSs available for appointments occurring from the date that structured data creation released. Past appointment AVSs will not be available.
- Data and sections displayed will be similar to the printed PDF that the VA currently offers (minus the patient education articles, clinical graphs sections, and the Pocket VA medications and allergies).
- AVSs will only be available for appointments where a site batch prints or a provider prints an AVS within the CPRS AVS system.
- Only appointments at VA facilities will be possible to display.

**Not in Scope**

- Patient education articles, clinical graphs, and the Pocket VA medications and allergies sections will not be displayed in the MVP.
- Past appointment AVSs will not be shown.
- These AVSs will not follow the rest of MHV on VA.gov notes. It will require future work to create a consistent experience (UX and data continuity) with Cerner and other MHV on VA.gov sections.
- Community care and Cerner appointments will not have AVSs.


**Web Experience Appointment List View MVP**

1) User Selects Past appointments
2) Opens an appointment from the list
3) If available, the user will be presented with an "View after-visit summary" link on the details page if avail


![Screenshot 2023-09-22 at 1 46 16 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/35aa9556-bbd3-4b43-969a-ff5f2150eb58)
<img width="950" alt="Screenshot 2023-09-22 at 1 59 19 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/90273080/c71dd6f7-829d-4b86-8941-1327ab8da6a5">


The After Visit Summary 4 expandable categories with information

- Your appointment on {date}
- Your treament plan from this appointment
- Your health information as of this appointment
- More Information 

Link to Figma view [here](https://www.figma.com/file/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?type=design&node-id=2-3&mode=design&t=CkXU8UDyBOdO1LRb-0)


## Mobile Opportunity

**Veteran task to be done**

Veterans are able to use the VA: Health and Benefits app, to **review their after visit summary care notes from their physician(s)**

**MVP - Follow web MVP experience**

1) Veteran should be able to easily find and review AVS with EASE on the app
  - Add link to past appointments
    - **Risk** - Veterans may not easily find AVS; Veteran will have to know to look at past appt detail
  - Selecting link will redirect user to Web AVS page
    -  **Potential Risk** - Users may need to login again in order to see the AVS screen from the link 

Engineering
- BackEnd
  - Exposing the AVS link (API is avail and also part of Vets-API) 

- FrontEnd
  - UI screen changes to include link on appt past details screen 

- UX/Content/Accessibility
  -  Handling of link (i.e show/hide as AVS is not avail for all appts) 
  
- QA Testing/Validation

**Future State**

3) Add Notes section on the app for Veteran's to easily locate avail AVS on the app
4) Incorporate Alert/Push Notification
5) Download/Print PDF


## Questions

1. Decision was made to build an HTML version of the AVS and not giving Veterans access to a PDF; is there an opportunity for an API version to provide a PDF format?
   Answer:  Web has created a web page to view after visit summary. Web also looked into that (accessible PDF) for web. When evaluating a way to tackle that, we realized that we would be impacting the printed version currently handed out to Veterans too  
3. Web MVP AVS will live on the appointments details; with future iteration to include on the Care Summary & Notes section of web.   Does mobile have to follow suit or explore how to best fit this feature on the app (taking into account the amount of information; if the summary can not be in PDF format)


## Assumptions

 - AVS API is available and can be consumed by mobile
 - Appointment team support will be avail; to support mobile
 - Test account/data will be avail
 - Veterans will be able to easily navigate and review ASV summary w/out overload
   
## Risks

- The after summary details can be a lot of detail.  Identifying the best way for mobile to present the information that would not be a congnitive overload for Veterans.
- Findability; burying the AVS details in past appointmens, Veterans may not discover the information unless they 'know' to look there.
  

## Roadmap

- Web is planning to deliver the feature in October (recommendation that mobile development should be contigent on web release)
- Mobile Q4
   - Discovery/Research learnings/Comparative analysis
   - Requirement/Design exploration & documentation
   - Implementation/Development Q1 '24 (Step 3-4)

## Measuring success

- **Objective:** Ensure users can easily find their After Visit Summary report on the mobile app
    - 	What % of users completed the task of reviewing AVS w/in X period of time
    - 	How long does it take for a Veteran to complete the task
    - % of Veterans that review appointment details on the app are also accessing their AVS

- **Objective:** Veterns have found and are using the feature 
  - How often are users accessing their AVS (is this a 1 time event, are they reviewing multiple times, etc)
  - How many times has AVS been successfully retrieved in the past X days (total events)


- **Objective:** Ensure product feature functions properly
	- Service Success rate (% how often user successfully retrieve AVS info w/out a service error)
        - Service Failure rate (% how often users receive a failed error message when calling the AVS api; and info not returned)  

## Stakeholders

**Mobile:**

- Rachel Han - Mobile Product Owner
- Ryan Thurlwell - Mobile Product/Design Lead


**Web:** 

- Kay Lawyer - OCTO Product Lead, katherine.lawyer@va.gov
- Kristen McConnell - OCTO UX Lead, kristen.mcconnell@va.gov
- Adrian Rollett - OCTO Engineering Lead, adrian.rollett@va.gov
- Jeff Roof - Appointments, Product Manager (Ad Hoc)
- Leah De La Costa - Appointments, Product Manager (Ad Hoc)
- Peter Russo (Appointments, Design Lead (Ad Hoc)

## Important Links

<details>

<summary>Resources</summary>

* [Web Product Brief Readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/README.md)
* [AVS User Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/After-Visit-Summary-User%20Guide-1.2.pdf)
* [CPRS AVS Example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0eebafe247417bf1249b8b1917a69d180ccf69fe/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/AVS-Sample-White-Redacted.pdf)

**Research**
* [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research)
* [Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research/2023-04-MVP-Usability/AVS-MVP-Usability-Test-Findings.pdf)

**Engineering**
* [Data Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/engineering/data_available.md)
* [Engineering backlog ticket](https://app.zenhub.com/workspaces/appointments---productdesign-5fff340c2d80a4000fb6f69c/issues/gh/department-of-veterans-affairs/va.gov-team/63692) - Add AVS Link to appointment response for past appointments

**Designs**
* [Figma- Spec Details page link](https://www.figma.com/file/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?type=design&node-id=2012-34945&mode=design&t=66GNkrlCieU3UUTf-0)
* [Figma-After-visit summary details page](https://www.figma.com/file/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?type=design&node-id=2-3&mode=design&t=fGbyK9EG5T15NKov-0)

</details>
