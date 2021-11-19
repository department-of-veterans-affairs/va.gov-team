# Product brief for the VEText Program

## Background

Each year, more than 9 million VA health care appointments go unutilized due to missed appointments (no-shows).  To increase access to health care for all Veterans, the Department of Veterans Affairs (DVA) developed VEText – an interactive text messaging solution – to remind Veterans of an upcoming appointment.  

In early 2018, VEText was selected by the Office of Veterans’ Access to Care (OVAC) as the official SMS appointment reminder system for all VA Medical Centers (VAMCs) and Community-Based Outpatient Centers (CBOCs).  

In 2020, the VEText Program became a part of the Office of the VA Chief Technology Officer’s (OCTO) portfolio.  In addition to appointment reminders, VEText powers digital notifications for several health care (and a few non-healthcare) use cases.      

- [User Groups](#user-groups)
- [Team](#team)
- [Projects](#projects)
- [Additional Documentation](#additional-documentation)

## User Groups

All VEText initiatives aim to improve the experience for these groups

-   **Veterans & their caregivers** 
    
-   **VA Facilities Staff**

## Solution Approach

VEText is a platform for sending SMS messages built upon a complex rules engine.

## Team

### VEText Team

**Federal Employees**
**Name** | **Role** 
---|---
**Shane Elliott** | VA Product Owner
**Robert Durkin** | VA Lead Engineer
**William “Andy” Mccarty** | VA Engineer


**Product Operations & Support Team (POST)**
**Name** | **Role** 
---|---
**Paras Shah** | Product Strategist
**Lindsay Insco** | Product Support Lead
**Justin Wowk** | Customer Success Manager
**David Benson** | Training Lead
**Crystal Jones** | Data Analyst
**David Benson** | Training Lead
**Vera Livshin** | Technical Writer
**Chance Cusack** | Help Desk Lead
**Misti Carpenter** | Help Desk Support 

## Projects

### Current Uses
|**Use Case**|**Description**|**Metrics**|
--|--|--
|[**VHA Health Care Appointment Reminders (non-PHI and PHI)**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20657)|Sends appointment reminder (via SMS) to Veterans for their upcoming VHA health care appointment.  Veterans can confirm or cancel appointment.|[**Metrics**](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/bf6248a7-ae15-49f3-893b-73b65f38a7fd/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)|
|[**Open Slot Management (OSM)**](TBD)|Allows Veterans meeting certain criteria (e.g. Veterans waiting for an appointment greater than 30 days, service-connected, new patient, etc.) to reschedule their VA health care appointment (via SMS) for an earlier slot.|[**Metrics**](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/79ef30b9-53d5-4463-b7d3-df086fdf64b9/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)|
|[**Pharmacy Shipment Notifications**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20661)|Sends shipment notification (via SMS) regarding their mail-order prescription - with a tracking link - from their local facility.|[**Metrics**](TBD)|
|[**OR Surgery Notifications**](TBD)|Allows VA staff to send updates (via SMS) to a Veteran's family members (or identified recipients).|[**Metrics**](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/93b7c5a4-ea6f-4e43-aa96-0334fe0ceb28/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)|
|[**I Am Here (IMH) for VHA Facilities**](TBD)|Allows Veterans to notify VA staff that they have arrived at the VAMC (or CBOC) and check-in to their VHA health care appointment (via SMS).  Using the VEText portal, VA staff can keep track of Veterans and trigger a notification (via SMS) to let them know it is time to come into the clinic for their VHA health care appointment.|[**Metrics**](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/8cc61e82-98c2-4835-8f88-f173cee9d9df/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)|
|[**Clinic Cancellation Tool**](TBD)|Allows VA staff (with appropriate VistA menu option) to cancel appointments in a clinic and automatcially notify Veterans of the cancellations (via SMS).|[**Metrics**](TBD)|
|[**Board of Veteran's Appeal (BVA) Hearing Reminder**](TBD)|Sends appointment reminder (via SMS) to Veterans for their upcoming BVA hearing.|[**Metrics**](TBD)|
|[**Community Care (CC) - Self-Scheduling Retrieval**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20663)|Sends a text message to Veterans - who have opted-in for self-scheduling - to collect their community care appointment information.  VA staff can review the responses in the VEText portal.  |[**Metrics**](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/918e5fbe-5011-46df-8494-036f23d01500/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)|
|[**Community Care (CC) - Appointment Reminders**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20663)|Sends appointment reminder (via SMS) to Veterans for their upcoming community care health care appointment.|[**Metrics**](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/5c0859e0-fffa-4c9d-8df1-dfa50b179685/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)|
|[**Community Care (CC) - Post Appointment Notifications**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20663)|Sends a SMS one-day after the Veteran's scheduled community care appointment to confirm whether (or not) they attended their appointment.  VA staff can review the responses in the VEText portal.|[**Metrics**](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/56dcdd09-ecf3-4bf3-8c0a-914d70d59313/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)|

### Other Initiatives
- VEText + VA National Rideshare for COVID-19 Vaccine Appointments
- Artificial Intelligence (AI)/Machine Learning (ML) Autoresponder 
- Ad Hoc Mass Messaging Solution [on-hold; pending VA Privacy guidance]
    - COVID-19 Informational Messages
    - Flu Shot Reminders
    - Women’s Health Messages
    - Veteran Retention Messages (for PC & MH)
    - Telehealth Check-In
    - Mental Health/High-Risk Check-In
    - Blood Pressure Check
    - Emergency/Vulnerable Patient Follow-UpNotifications (i.e. adverse weather)
- COVID-19 Keep Me Informed (KMI) Emails
- Mobile Push Notification Service
    - VA Flagship Mobile App - VA Healthcare Appointment Reminders
- VEText API Service

### Upcoming Features / Backlog
- Check-in/Pre-Regristration Integration
- BVA Appointment Reminders - 2-way Notifications
- Community Care (CC) - Follow-up with RTC/Community Care Department
- Pharmacy - Refill (via SMS)
- I Am Here (IMH) for BVA Facilities
- Emergency/Vulnerable Veterans Follow-Up (i.e. adverse weather/fire, etc.)
- Community Care (CC) - Post-Appointment Survey
- Direct Scheduling for VHA Health Care Appointments
- VA Consult/Return to Clinic (RTC) Follow-Up Message
- I Am Here (IMH) for VBA Facilities

To view our backlog, visit our [Zenhub Board](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/board?filterLogic=any&repos=133843125&showPRs=false).

## Stakeholders & VA Business Lines/Partners

### Stakeholders
- Office of the VA CTO (OCTO) - Charles Worthington, Lauren Alexanderson, and Chris Johnston

### VA Business Lines/Parnters
- Office of Veterans Access to Care - Jeff Lowe and Erica Williams
- Office of Community Care - Dr. Mary Beckett
- VANotify - Beverly Nelson
- Pharmacy SMEs - Dr. Ronald Major, Dr. Anne Bailey, and Dr. Susan Rising

## Integrations and VA Security & Compliance 

### Integrations
- VistA
- Coporate Data Warehouse (CDW)
- BVA Caseflow
- Master Patient Index (MPI)
- VA Profile (includes end-to-end integration with VA.gov for preferences)
- VETS API
- Twilio SMS API
- VA Notify
- Cerner API (Sandbox API)

### VA Security & Compliance
- 3-year Authority to Operate (ATO) - renewed in OCT 2021
- VA Office of General Counsel (OGC) Approved PHI Workflow and Messages
- VA OI&T Supported
- Single Sign-On Internal (SSOi)

## Additional Documentation and Information
- [Sharepoint](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Home-Page.aspx)
- [Zenhub Board](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/board?filterLogic=any&repos=133843125&showPRs=false)
- [Metrics](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/8cc61e82-98c2-4835-8f88-f173cee9d9df/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
 - Slack: #notifications-vetext
 - VEText Email Group:  VEText@va.gov
 - ServiceNow Assignment Group:  VA VEText Admin
 - [VASI](https://vac21appvem200.va.gov/SAXT/ip/getpage_common.aspx?ReportFile=System_and_Application_Domain_Defs&ReportName=System&DDID=24491&StyleSheet=%5CStylesheets%5CSystem.xsl&url=stype%253d1%2526sname%253dVAC21DBSVEM200.va.gov%2526encyn%253dVEAR_SA%2526wrkID%253d0)
 - [Monitoring Service Registry](https://vaww.msr.va.gov/DashboardItem?ID=838)



