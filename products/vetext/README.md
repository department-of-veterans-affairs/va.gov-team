# VEText
VEText is a platform for sending SMS messages to Veterans. These messages can be either one way or interactive. It was developed to lower no-show rates for Veterans’ health appointments by a team at the VA Loma Linda Healthcare system and rolled out nationally in 2018. 

While its primary use case is operational messaging, VEText’s interaction with VistA opens it up to many potential applications across VA departments. It has grown into a complex rules engine with a backend portal, allowing for highly customizable administration of messaging including templates, reporting and workflow management by VA site staff. 

In 2020 the VEText team moved to the OCTO to give it a national scope, and is now managed and supported by OCTO staff and contractors.

- [Objectives](#objectives)
- [Team](#team)
- [Projects](#projects)
- [Additional Documentation](#additional-documentation)

## North Star
When a Veteran interacts with the VA, they receive clear communication to make the best use of their time and benefits.

## User Groups

All VEText initiatives aim to improve the experience for these groups

-   **Veterans & their caregivers** - any person who needs to communicate with the VA to utilize or manage an existing Veteran’s benefits.
    
-   **VA Facilities Staff** - any employee of VA services, commonly VHA administrators
 
## Solution Approach

A platform for sending SMS messages built upon a complex rules engine.

# Objectives

#### 1: How might we make the communication process between VA administrators and Veterans easier?

**Objective**:
Launch new applications of the VEText portal based on direct needs and input from VA administrators

**Key Results**:
Run successful pilot programs  
 - Number of new pilot programs launched
 -  Adoption rate for successful programs outside of the initial pilot
   programs
----
#### 2: How might we reduce missed or no-show healthcare appointments?
**Objective**:
Optimize use of VHA appointment slots.

**Key Results**:
Enable veterans to take an active role in scheduling their healthcare
 - Decrease number of appointments missed vs control
 - Increase number of appointments rescheduled vs control
 - Decreased wait times for VHA health appointments
----

#### 3: How might we better track veterans’ appointments outside of the VA ecosystem?

**Objective**:
Increase accuracy of “Community Care” reporting

**Key Results**:
Giving veterans a simple way to provide updates about their status.
 - Increase number of community care appointments captured vs control
-----
#### 4: How might we help veterans retain their VHA benefits?

**Objective**:
Reduce the number of Veterans who lose their benefits after 24 months of inactivity

**Key Results**:
Allow easy scheduling of primary care appointments
 - Increase number of veterans who retain benefits vs control
---
#### 5: How might we increase transparency into prescription tracking & renewals?

**Objective**:
Improve visibility into prescription shipping

**Key Results**:
Help veterans receive their medications.
 - Reduce support volume for VHA pharmacies vs control
 - Increase number of prescriptions renewed through automation tools
---
#### 6: How might we give veterans access to available vaccine appointments?

**Objective**:
Get veterans vaccinated (both flu & COVID-19) 

**Key Results**:
More veterans receiving vaccinations 
 - Increase percentage of veterans receiving recurring vaccinations YOY
 - Increase percentage of veterans receiving non-recurring vaccinations

---
#### 7. How might we reduce the number of people in the VA on a given day?

**Objective**:
Give Veterans & their caregivers more notification options for appointments and procedures.

**Key Results**:
Fewer veterans and caregivers in waiting rooms
 - Increase % Veterans
 - Increases satisfaction among caregivers (survey based) 


# Team
The core development team (Shane, Robert & Andy) have worked together for 20 years on various applications in the VA Loma Linda Healthcare system until transitioning to OCTO. 

**Name** | **Organization** | **Title** 
---|---|---
**Robert Durkin** | VA OCTO | Software Developer 
**Shane Elliott** | VA OCTO | Senior Information Technology Specialist
**William “Andy” Mccarty** | VA OCTO | Software Developer 
**Allison Schulhof** | Oddball | Program Manager 
**Justin Wowk** | Oddball (DocMe360) | Product Manager
**Lindsay Sprinkle** | Oddball | Product Manager 
**Katie Roach** | Oddball | Delivery Manager 
**Lee DeBoom** | Oddball | Engineering Lead 
**Chris Horton** | Oddball | Senior Product Manager
**Jeremy Britt** | Oddball | 
**Ari Hicks** | Oddball (Fearless) | Content Strategist 
**Jonathan Esteban** | Oddball | Data Analyst 
**Zach Epstein** | Oddball (The So Company) | Tier 1 Helpdesk 
**Richard "Chance" Cusack** | Oddball (The So Company) | Tier 2 Helpdesk 
**Ambes Debretson** | Oddball (DocMe360) | Tier 3 Helpdesk
**James Clarey** | Oddball | Tier 3 Helpdesk
**Peter Olabowale** | Oddball (Fearless) | Site Reliability Engineer 
**Nicholas Henning** | Oddball | Production Support Engineer


# Projects


### Current Uses
|**Use Case**|**Description**|
|--|--|
|[**Appointment Reminders**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Wiki/gen_appointments.aspx)|Sends reminders to Veterans of upcoming appointments via text messaging and provides a quick and easy way to confirm or cancel appointments. New in 2024: support for Federal EHR sites.|
|[**Open Slot Management**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Open-Slot-Management-Tab.aspx)|Allows Veterans meeting certain criteria to reschedule their VA health care appointment (via SMS) for an earlier slot. Reduces wait time, missed, and cancelled appointments and allows for more efficient appointment management for administrators and VA Health Centers.|
|[**Community Care Appointment Communication**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Community-Care-Appointment-Reminders.aspx)| Texts Veterans in a variety of scenarios around Community Care appointments
|[**Pharmacy Tracking**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Pharmacy-Notifications.aspx)|Sends shipment tracking information text to veterans once their medication has shipped
|[**Surgery Notifications**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Wiki/gen_surgery.aspx#surgery-notifications-tab)|Text notifications for family members of veterans in surgery who are not able to wait in the VA facility due to social distancing restrictions
|[**Vaccine Outreach**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/COVID-19-Vaccine-Outreach.aspx)|Allows administrators to proactively text a batch of veterans to schedule an appointment. This is related both to Covid Vaccines and Flu Vaccines.
|[**Emergency Management Notifications**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Emergency-Management-User-Guide.aspx)|Allows administrators to proactively text a batch of veterans to schedule an appointment. This is related both to Covid Vaccines and Flu Vaccines.
|[**Patient Tracking**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Wiki/pt_home.aspx)|Patient Tracking is a tool to assist facilities during the check-in process with physical distancing for face-to-face appointments.|
|[**Clinic Cancellations**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Clinic-Cancellations.aspx)|VEText allows cancelling appointments by clinic and notifying all affected Veterans by text message of the cancellations. Useful when a clinic needs to cancel all or part of its schedule, such as inclement weather or a clinician is unavailable.|
|[**Attempt to Schedule**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Direct-Care-Attempt-to-Schedule.aspx)|Sends text message to Veteran asking them to call a number to schedule their appointment.


### Future / Proposed Uses
|**Use Case**|**Description**|
|--|--|

|[**Appointment Reminder Rescheduling**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/gh/department-of-veterans-affairs/va.gov-team/49201)|When Veteran's recieve an appointment reminder, they will have a new option to communicate their desire to reschedule vs. cancel.

### VEText Components
|**Use Case**|**Description**|
|--|--|
|[**VEText VistA EHR Portal**](https://portal.vetext.va.gov)|The UI that VA Health Center administrators interact with to initiate VEText messages for VistA EHR facilities. 
|[**VEText Federal EHR Portal**](https://ng.vetext.va.gov/)|The UI that VA Health Center administrators interact with to initiate VEText messages for Federal EHR facilities. 

# Additional Documentation

- [VEText VistA EHR Sharepoint](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Home-Page.aspx)
- [VEText Federal EHR Sharepoint](https://dvagov.sharepoint.com/sites/vhavetext/federalehr)
- [Zenhub Board](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/board?filterLogic=any&repos=133843125&showPRs=false)
- [VEText VistA EHR Metrics](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/8cc61e82-98c2-4835-8f88-f173cee9d9df/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
- [VEText Federal EHR Metrics](https://app.powerbigov.us/groups/me/apps/59791a0e-e620-4ca2-a3ee-eaafe35f94d4/reports/b61e4526-6e30-4849-b729-c4191d9cd695/ReportSection?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
 - Slack: #notifications-vetext
