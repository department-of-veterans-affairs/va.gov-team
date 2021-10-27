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
**Shane Elliott** | VA OCTO |Senior Information Technology Specialist
**William “Andy” Mccarty** | VA OCTO | Software Developer 
**Justin Wowk** | Government CIO (DocMe360) | Project Manager 
**Paras Shah** | Government CIO (DocMe360) | Advisor, VA Digital Notifications 


# Projects


### Current Uses
|**Use Case**|**Description**|
|--|--|
|[**Appointment Reminders**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20657)|Veterans receive appointment reminders and can confirm or cancel appointments via text message.|
|[**Community Care Appointment Communication**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20663)| Texts Veterans in a variety of scenarios around Community Care appointments
|[**Inactive Veterans**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/21356)| Sends text messages to Veterans who have not seen their Primary Care provider (PCP) in the last 18-24 months.
|[**Pharmacy Tracking**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20661)|Sends shipment tracking information text to veterans once their medication has shipped
|[**Surgery Notifications**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20660)|Text notifications for family members of veterans in surgery who are not able to wait in the VA facility due to social distancing restrictions
|[**Vaccine Outreach**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20658)|Allows administrators to proactively text a batch of veterans to schedule an appointment. This is related both to Covid Vaccines and Flu Vaccines.
|[**AVS**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20668)| Originally developed to generate a patient-friendly “after visit summary” for Veterans after a medical visit. In the past ten years the term “AVS” has come to cover a lot of applications of the underlying technology related to VistA.

### Future / Proposed Uses
|**Use Case**|**Description**|
|--|--|
|[**Pharmacy Refills**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20662)|Automates pharmacy refills
|[**IMH for BVA Hearings**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/21407)| Allowing BVA Hearing Officers to track Veteran attendance for appeals hearings.

### VEText Components
|**Use Case**|**Description**|
|--|--|
|[**Appointment Direct Scheduling**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/21542)|As a function of VEText, a text can be sent to a selected group of veterans to allow them to schedule appointments. 
|[**VEText Portal**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20765)|The UI that VA Health Center administrators interact with to initiate VEText messages. 
|[**I Am Here (IMH)**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20664)| Allows veterans to check in for medical appointments via text message.
|[**Open Slot Management (OSM)**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20655)|  As a function of VEText, OSM is a backend task that finds veterans waiting for appointments and offers a defined number of them a closer open appointment slot on a first come first serve basis. |

# Additional Documentation

- [Sharepoint](https://dvagov.sharepoint.com/sites/vhavetext/SitePages/VEText-Home-Page.aspx)
- [Zenhub Board](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/board?filterLogic=any&repos=133843125&showPRs=false)
- [Metrics](https://app.powerbigov.us/groups/me/apps/edb20dd9-adff-4cdb-9e08-35ecc7e2ea94/reports/8cc61e82-98c2-4835-8f88-f173cee9d9df/ReportSection99642ad0ac7c70206011?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
 - Slack: #notifications-vetext
