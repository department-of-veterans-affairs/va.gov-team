# VEText
VEText is a platform for sending SMS messages to Veterans. These messages can be either one way or interactive. It was developed to lower no-show rates for Veterans’ health appointments by a team at the VA Loma Linda Healthcare system and rolled out nationally in 2018. 

While its primary use case is operational messaging, VEText’s interaction with VistA opens it up to many potential applications across VA departments. It has grown into a complex rules engine with a backend portal, allowing for highly customizable administration of messaging including templates, reporting and workflow management by VA site staff. 

In 2020 the VEText team moved to the OCTO to give it a national scope, and is now managed and supported by OCTO staff and contractors.

- [Objectives](#objectives)
- [Team](#team)
- [Projects](#projects)
- [VEText Wiki Documentation](#vetext-wiki-documentation)
- [Additional Documentation](#additional-documentation)

## North Star
Provide Veterans with clear, actionable, timely messages related to their health care and benefits via the channel of their choice (push, SMS, email).

## User Groups

All VEText initiatives aim to improve the experience for these groups

-   **Veterans & their caregivers** - any person who needs to communicate with the VA to utilize or manage an existing Veteran’s benefits.
    
-   **VA Facilities Staff** - any employee of VA services, commonly VHA administrators
 
## Solution Approach

A platform for sending SMS messages built upon a complex rules engine.

# Objectives

The following are VEText's Objectives and Key Results (OKRs), as aligned with OCTO & Health Portfolio OKRs.

<table><tbody><tr><td><strong>OCTO &amp; Health Portfolio OKRs</strong></td><td><strong>VEText OKRs</strong></td></tr><tr><td>Our digital experiences are the best way to access VA health care and benefits</td><td><ul><li>VEText Oracle Health appointment reminder functionality is adopted by all 5 VA Oracle Health sites</li><li>VEText VistA is transitioned to AWS</li></ul></td></tr><tr><td>Our platforms are the best way to deliver products at VA</td><td><ul><li>VEText Oracle Health product achieves the elite DORA level</li><li>VEText opt-out rate is decreased by 1%</li><li>VEText average response rate is increased by 1%</li></ul></td></tr><tr><td>Our people are empowered with the knowledge and resources they need to make sustained impact</td><td><ul><li>VEText VistA achieves a 100% adoption of OSM by Primary Care clinics</li><li>Thorough documentation has been compiled for VEText OH (mirroring format of VEText VistA)</li></ul></td></tr><tr><td>Reduce the time Veterans and their care teams spend on each VA transaction</td><td><ul><li>VEText Oracle Health is performant for users upon rollout<ul><li>Average error rate &lt; .3%</li><li>Average latency &lt; 6s p95</li></ul></li></ul></td></tr></tbody></table>

*   **VEText VistA**: Current VistA-based VEText platform
*   **VEText Oracle Health (VEText OH)**: New Oracle Health VEText platform

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
**Michael Kimball** | Oddball | Senior Software Engineer Team Lead
**Greg Henley** | Oddball | Senior Software Engineer
**Michael Olasin** | Oddball | Software Engineer
**Marian Lumba** | Oddball | Software Engineer
**Sarit Das** | Oddball | Software Engineer
**Chris Horton** | Oddball | Senior Product Manager
**Jeremy Britt** | Oddball | Senior DevOps Engineer
**Andrew Fattorusso** | Oddball | DevOps Engineer
**Steven Venner** | Oddball | DevOps Engineer
**Jamie Ramsay** | Oddball | Senior UX Designer/Researcher
**Ari Hicks** | Oddball (Fearless) | Content Strategist 
**Jonathan Esteban** | Oddball | Senior Data UX Analyst 
**Zach Epstein** | Oddball (The So Company) | Tier 1 Helpdesk 
**Richard "Chance" Cusack** | Oddball (The So Company) | Tier 2 Helpdesk
**Gerson Reyes**  | Oddball | ATO Specialist
**Ambes Debretson** | Oddball (DocMe360) | Tier 3 Helpdesk Support Engineer
**James Clarey** | Oddball | Tier 3 Helpdesk Support Engineer

# Projects

### Current Uses
|**Use Case**|**Description**|
|--|--|
|[**Appointment Reminders**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Wiki/gen_appointments.aspx)|Sends reminders to Veterans of upcoming appointments via text messaging and provides a quick and easy way to confirm or cancel appointments. New in 2024: support for Federal EHR sites.|
|[**Open Slot Management**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Open-Slot-Management-Tab.aspx)|Allows Veterans meeting certain criteria to reschedule their VA health care appointment (via SMS) for an earlier slot. Reduces wait time, missed, and cancelled appointments and allows for more efficient appointment management for administrators and VA Health Centers.|
|[**Community Care Appointment Communication**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Community-Care-Appointment-Reminders.aspx)| Texts Veterans in a variety of scenarios around Community Care appointments
|[**Pharmacy Tracking**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Pharmacy-Notifications.aspx)|Sends shipment tracking information text to veterans once their medication has shipped
|[**Pharmacy Window Pickup**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Window-Pickup-Notifications-For-Prescriptions.aspx)|Sends text to veterans once their medication is available to be picked up from the local facility
|[**Surgery Notifications**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Wiki/gen_surgery.aspx#surgery-notifications-tab)|Text notifications for family members of veterans in surgery who are not able to wait in the VA facility due to social distancing restrictions
|[**Vaccine Outreach**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/COVID-19-Vaccine-Outreach.aspx)|Allows administrators to proactively text a batch of veterans to schedule an appointment. This is related both to Covid Vaccines and Flu Vaccines.
|[**Emergency Management Notifications**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Emergency-Management-User-Guide.aspx)|Allows administrators to proactively text a batch of veterans to schedule an appointment. This is related both to Covid Vaccines and Flu Vaccines.
|[**Patient Tracking**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Wiki/pt_home.aspx)|Patient Tracking is a tool to assist facilities during the check-in process with physical distancing for face-to-face appointments.|
|[**Clinic Cancellations**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Clinic-Cancellations.aspx)|VEText allows cancelling appointments by clinic and notifying all affected Veterans by text message of the cancellations. Useful when a clinic needs to cancel all or part of its schedule, such as inclement weather or a clinician is unavailable.|
|[**Attempt to Schedule**](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/Direct-Care-Attempt-to-Schedule.aspx)|Sends text message to Veteran asking them to call a number to schedule their appointment.


### Future / Proposed Uses
|**Use Case**|**Description**|
|--|--|

|[**Appointment Reminder Rescheduling**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/gh/department-of-veterans-affairs/va.gov-team/49201)| When Veteran's recieve an appointment reminder, they will have a new option to communicate their desire to reschedule vs. cancel.

### VEText Components
|**Use Case**|**Description**|
|--|--|
|[**VEText VistA EHR Portal**](https://portal.vetext.va.gov)|The UI that VA Health Center administrators interact with to initiate VEText messages for VistA EHR facilities. 
|[**VEText Federal EHR Portal**](https://ng.vetext.va.gov/)|The UI that VA Health Center administrators interact with to initiate VEText messages for Federal EHR facilities. 

# VEText Wiki Documentation

The [VEText Documentation Wiki](https://github.com/department-of-veterans-affairs/vetext/wiki/) is an internal hub for development and product documentation. 

# Additional Documentation

- [VEText VistA EHR Sharepoint](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Home-Page.aspx)
- [VEText Federal EHR Sharepoint](https://dvagov.sharepoint.com/sites/vhavetext/federalehr)
- [Zenhub Board](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/board?filterLogic=any&repos=133843125&showPRs=false)
- [VEText VistA EHR Metrics](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/8cc61e82-98c2-4835-8f88-f173cee9d9df/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
- [VEText Federal EHR Metrics](https://app.powerbigov.us/groups/me/apps/59791a0e-e620-4ca2-a3ee-eaafe35f94d4/reports/b61e4526-6e30-4849-b729-c4191d9cd695/ReportSection?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
 - Slack: [#notifications-vetext](https://dsva.slack.com/archives/C01D2T36XLL)
