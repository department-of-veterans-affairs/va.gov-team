# Introduction

VEText is a platform for sending SMS messages to Veterans. These messages can be either one way or interactive. It was developed to lower no-show rates for Veterans’ health appointments by a team at the VA Loma Linda Healthcare system and rolled out nationally in 2018. 

While its primary use case is operational messaging, VEText’s interaction with VistA opens it up to many potential applications across VA departments. It has grown into a complex rules engine with a backend portal, allowing for highly customizable administration of messaging including templates, reporting and workflow management by VA site staff. 

In 2020 the VEText team moved to the OCTO to give it a national scope, and is now managed and supported by OCTO staff and contractors.


================

# Team
The core development team (Shane, Robert & Andy) have worked together for 20 years on various applications in the VA Loma Linda Healthcare system until transitioning to OCTO. 

**Name** | **Organization** | **Title** | **Role**
---|---|---|---
**Shane Elliott** | VA OCTO | Senior Information Technology Specialist | Product Owner / Champion
**Robert Durkin** | VA OCTO | Software Developer | Lead on projects like AVS, VEText and other clinical applications
**William “Andy” Mccarty** | VA OCTO | Software Developer | Java / Middleware SQL / Jack of All Trades
**Paras Shah** | Government CIO (DocMe360) | Advisor, VA Digital Notifications | Product Manager for Notifications Ecosystem
**Justin Wowk** | Government CIO (DocMe360) | Project Manager | Process Management / BI / Analytics

================

# Projects


### Current Uses
|**Use Case**|**Description**|**Status**|
|--|--|--|
|[**Appointment Reminders**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20657)|Veterans receive appointment reminders and can confirm or cancel appointments via text message.|
|[**Community Care Appointment Communication**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20663)| Texts Veterans in a variety of scenarios around Community Care appointments
|[**Inactive Veterans**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/21356)| Sends text messages to Veterans who have not seen their Primary Care provider (PCP) in the last 18-24 months.
|[**Pharmacy Tracking**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20661)|Sends shipment tracking information text to veterans once their medication has shipped
|[**Surgery Notifications**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20660)|Text notifications for family members of veterans in surgery who are not able to wait in the VA facility due to social distancing restrictions
|[**Vaccine Outreach**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20658)|Allows administrators to proactively text a batch of veterans to schedule an appointment. This is related both to Covid Vaccines and Flu Vaccines.
|[**AVS**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20668)| Originally developed to generate a patient-friendly “after visit summary” for Veterans after a medical visit. In the past ten years the term “AVS” has come to cover a lot of applications of the underlying technology related to VistA.

### Future / Proposed Uses
|**Use Case**|**Description**|**Status**|
|--|--|--|
|[**Pharmacy Refills**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20662)|Automates pharmacy refills
|[**IMH for BVA Hearings**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/21407)| Allowing BVA Hearing Officers to track Veteran attendance for appeals hearings.

### VEText Components
|**Use Case**|**Description**|**Status**|
|--|--|--|
|[**Appointment Direct Scheduling**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/21542)|As a function of VEText, a text can be sent to a selected group of veterans to allow them to schedule appointments. 
|[**VEText Portal**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20765)|The UI that VA Health Center administrators interact with to initiate VEText messages. 
|[**I Am Here (IMH)**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20664)| Allows veterans to check in for medical appointments via text message.
|[**Open Slot Management (OSM)**](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/issues/department-of-veterans-affairs/va.gov-team/20655)|  As a function of VEText, OSM is a backend task that finds veterans waiting for appointments and offers a defined number of them a closer open appointment slot on a first come first serve basis. |


================

# Pain Points (02/21)

VEText is a victim of its own success. A talented close-knit team created a stable, versatile tool for one specific purpose. 

This tool was successful and showed potential so it was elevated to OCTO. Add that to the team’s unique domain knowledge of VA infrastructure, they now find themselves with an ever-growing list of potential applications of both the VEText tool and applications like AVS.

The team works quickly in shorthand with high fidelity, so it has adapted quickly without accompanying structure. 

The VEText team has incredible **momentum** but needs to build the **velocity** necessary to meet increasing demand.  

A few of the areas identified:

+ **Compromised developer bandwidth.** Time and energy is taken from development to triage support and feature requests, manually process data and field incoming requests for new applications.
+ **Lack of documentation.** Decisions are made across communication channels and verbally in meetings. There is no clear paper trail for product decisions or scope changes, or for future product development plans.
+ **Opaque development.** The product development team works in continuous releases in a git instance separate from existing OCTO development structures in the VA. This works well for the existing team but poses a barrier for any incoming developers, and the lack of redundancy poses a risk if any of the existing developers leave the project. 
+ **Reactive feature prioritization.** Development focus is determined by stakeholder needs on the fly. New uses or feature ideas are either identified by OCTO or surfaced through support channels without an overarching roadmap. As a result, feature requests from “Squeaky Wheels” among VA administrators are acted upon quickly, but consistent feedback channels that would provide a larger view of how veterans are interacting with the tools is lacking.
+ **Function over usability.** The speed at which the tool has been adopted has required prioritized feature development over usability concerns, causing common end user errors for both Veterans and staff. Focusing development on overall usability earlier in the process will reduce burden on users and the product team.
