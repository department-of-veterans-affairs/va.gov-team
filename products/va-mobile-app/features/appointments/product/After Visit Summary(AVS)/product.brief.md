# After Visit Summary

[Epic #6672](https://app.zenhub.com/workspaces/va-mobile-epics-636d76f8c818bf0010e50a41/issues/department-of-veterans-affairs/va-mobile-app/6672)

## Web Summary/Overview

**Overview** 

Today, select Veterans and caregivers receive After Visit Summaries following their medical appointment.  This group can receive printed copies as they leave their provider's office or they can access a PDF version on My HealtheVet.  

**What is an After Visit Summary?** According to [Centers for Medicare & Medicaid Services Meaningful Use guidelines](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/13_Clinical_Summaries.pdf) , "an after-visit summary...provides a patient with relevant and actionable information and instructions containing the patient name, provider’s office contact information, date and location of visit, an updated medication list, updated vitals, reason(s) for visit, procedures and other instructions based on clinical discussions that took place during the office visit, any updates to a problem list, immunizations or medications administered during visit, summary of topics covered/considered during visit, time and location of next appointment/testing if scheduled, or a recommended appointment time if not scheduled, list of other appointments and tests that the patient needs to schedule with contact information, recommended patient decision aids, laboratory and other diagnostic test orders, test/laboratory results (if received before 24 hours after visit), and symptoms."

**Desired User Goals**

- As a Veteran or caregiver, I want access to a summary of what was discussed and decided at my appointment.
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

**Resources**

* [Product Brief Readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/README.md))

**Research**
* [Research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research)
* [Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/research/2023-04-MVP-Usability/AVS-MVP-Usability-Test-Findings.pdf)

**Engineering**
* [Data Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/avs/engineering/data_available.md)
* [Engineering backlog ticket](https://app.zenhub.com/workspaces/appointments---productdesign-5fff340c2d80a4000fb6f69c/issues/gh/department-of-veterans-affairs/va.gov-team/63692) - Add AVS Link to appointment response for past appointments

**Designs**
* [Figma- Spec Details page link](https://www.figma.com/file/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?type=design&node-id=2012-34945&mode=design&t=66GNkrlCieU3UUTf-0)
* [Figma-After-visit summary details page](https://www.figma.com/file/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?type=design&node-id=2-3&mode=design&t=fGbyK9EG5T15NKov-0)


## Mobile Intent/Goals


**Veteran task to be done**

Veterans are able to use the VA: Health and Benefits app, to easilty access a summary of what was discussed and decided at their appointment.

- Veterans are able to review after summary list for a given appointment in which AVS is available



**Questions**


**Assumptions and Level of Confidence**

 
**Risks**


**Roadmap**


**Technical Approach**


**Measuring success**

- Objective: Ensure users can easily find their After Visit Summary report on the mobile app
- Objective: Ensure product feature functions properly
	

**Stakeholders**

Mobile:

- Rachel Han - Mobile Product Owner
- Ryan Thurlwell - Mobile Product/Design Lead


Web: 

- Kay Lawyer - OCTO Product Lead, katherine.lawyer@va.gov
- Kristen McConnell - OCTO UX Lead, kristen.mcconnell@va.gov
- Adrian Rollett - OCTO Engineering Lead, adrian.rollett@va.gov
- Nina Anusavice - UX Designer, Nina.Anusavice@va.gov
- Jeff Roof - Appointments, Product Manager (Ad Hoc)
- Leah De La Costa - Appointments, Product Manager (Ad Hoc)
- Peter Russo (Appointments, Design Lead (Ad Hoc)

**Important Links**

