# Introduction #

VEText is a platform for sending SMS messages to Veterans. These messages can be either one way or interactive. It was developed to lower no-show rates for Veterans’ health appointments by a team at the VA Loma Linda Healthcare system and rolled out nationally in 2018. 

While its primary use case is operational messaging, VEText’s interaction with VistA opens it up to many potential applications across VA departments. It has grown into a complex rules engine with a backend portal, allowing for highly customizable administration of messaging including templates, reporting and workflow management by VA site staff. 

In 2020 the VEText team moved to the OCTO to give it a national scope, and is now managed and supported by OCTO staff and contractors.


================

#Active Uses of the VEText Team#

‘VEText’ within the OCTO has come to encompass more than just the VEText tool itself, as the team are subject matter experts on VHA databases and their work touches many projects beyond the VEText tool. A notable example of this is AVS which is currently being upgraded and enhanced. 
*Use Case*|*Description*|*Status*
*Open Slot Management (OSM)*|Is used to reduce long wait times at VA clinics. It finds veterans waiting for appointments and offers a defined number of them an open appointment slot on a first come first serve basis. It’s configurable based on a variety of parameters to ensure appointment slots do not go unused. It can be turned on for certain clinics or specific clinical service groups (“stop codes”) within a facility.|Active for two years, was shut down due to Covid, but reopened in Oct & currently in use by 10 hospitals
**|Below this line, hasn’t been verified with the team|
*Appointment Reminders*|Sends reminders to vets who have been identified by NIRMO as likely to miss their appointments. Gives them the option to cancel.|
*Vaccine Outreach*|To facilitate both flu & covid vaccine rollout, allows administrators to proactively text a batch of veterans to schedule an appointment. Covid outreach uses OSM.|
*Surgery Notifications*|Notifications for family members of veterans in surgery who are not able to wait in the VA facility due to social distancing restrictions|
*Appointment Reminders*|Veterans receive appointment reminders and can confirm or cancel appointments via text|
*Direct Scheduling*|Veterans can schedule appointments via text message. Sites have to decide what patients they send the appointments to by cohort etc. then upload them to sharepoint and include information there. VEText team (Andy) has to manually add them to a batch|Deployed Nationwide
*Pharmacy Tracking*||Pilot in Asheville, Eastern Colorado next.
*Pharmacy Refills*|Automates pharmacy refills - pilot program is using local pharmacies and only fills controlled substances with plans to roll out to more in the future (Asheville is not using CMOP(‘local pharmacy’ instead). This project requires budget support (AWS credits - some sites paying ‘out of pocket’)|
*Community Care*|If a veteran chooses to self-schedule a community appointment, and the consult is not in a scheduled or completed status 14 days from the date outreach occurs, VEText will send a text reminder requesting the appointment information. Veterans can respond to the VEText message with the community appointment date and time.|
*I Am Here (IMH) (Patient Tracking)*|To enable social distancing during COVID-19, allows veterans to check in for medical appointments via text message. This also optionally links to a pre-visit covid screener.|80% of facilities use today
*BVA Notices*|The Board of Veterans Appeals wants to use to schedule hearings|Unreleased
*Clipboard Integration with AVS*|The clipboard team needs 3 questions added to the Pre Visit Summary intake questionnaire, and Rob’s comprehensive knowledge of VistA and EMRs can speed this process considerably.|Pre-planning (ideally rolling out sometime in March)
*AVS*|AVS was originally developed to generate a patient-friendly “after visit summary” for Veterans after a medical visit. In the past ten years the term “AVS” has come to cover a lot of applications of the underlying technology including a pre-visit summary and other documents that need to be auto-generated related to patient care and saved in VistA. Recently brought under the CTO portfolio, and needs to be updated.|100 sites using AVS, some mandated some on case-by-case. Many additional uses for technology identified.


================

#Team#
The core development team (Shane, Robert & Andy) have worked together for 20 years on various applications in the VA Loma Linda Healthcare system until transitioning to OCTO. 

*Name*|*Organization*|*Title*|*Role*
*Shane Elliott*|VA OCTO|Senior Information Technology Specialist|Product Owner / Champion
*Robert Durkin*|VA OCTO|Software Developer|Lead on projects like AVS, VEText and other clinical applications
*William “Andy” Mccarty*|VA OCTO|Software Developer|Java / Middleware SQL / Jack of All Trades
*Paras Shah*|Government CIO (DocMe360)|Advisor, VA Digital Notifications|Product Manager for Notifications Ecosystem
*Justin Wowk*|Government CIO (DocMe360)|Project Manager|Process Management / BI / Analytics


================

#Pain Points#

VEText is a victim of its own success. A talented close-knit team created a stable, versatile tool for one specific purpose. 

This tool was successful and showed potential so it was elevated to OCTO. Add that to the team’s unique domain knowledge of VA infrastructure, they now find themselves with an ever-growing list of potential applications of both the VEText tool and applications like AVS.

The team works quickly in shorthand with high fidelity, so it has adapted quickly without accompanying structure. 

The VEText team has incredible *momentum* but needs to build the *velocity* necessary to meet increasing demand.  

A few of the areas identified:

+ *Compromised developer bandwidth.* Time and energy is taken from development to triage support and feature requests, manually process data and field incoming requests for new applications.
+ *Lack of documentation.* Decisions are made across communication channels and verbally in meetings. There is no clear paper trail for product decisions or scope changes, or for future product development plans.
+ *Opaque development.* The product development team works in continuous releases in a git instance separate from existing OCTO development structures in the VA. This works well for the existing team but poses a barrier for any incoming developers, and the lack of redundancy poses a risk if any of the existing developers leave the project. 
+ *Reactive feature prioritization.* Development focus is determined by stakeholder needs on the fly. New uses or feature ideas are either identified by OCTO or surfaced through support channels without an overarching roadmap. As a result, feature requests from “Squeaky Wheels” among VA administrators are acted upon quickly, but consistent feedback channels that would provide a larger view of how veterans are interacting with the tools is lacking.
+ *Function over usability.* The speed at which the tool has been adopted has required prioritized feature development over usability concerns, causing common end user errors for both Veterans and staff. Focusing development on overall usability earlier in the process will reduce burden on users and the product team.
