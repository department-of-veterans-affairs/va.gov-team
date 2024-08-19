# AVS
VEText is a platform for sending SMS messages to Veterans. These messages can be either one way or interactive. It was developed to lower no-show rates for Veterans’ health appointments by a team at the VA Loma Linda Healthcare system and rolled out nationally in 2018. 

While its primary use case is operational messaging, VEText’s interaction with VistA opens it up to many potential applications across VA departments. It has grown into a complex rules engine with a backend portal, allowing for highly customizable administration of messaging including templates, reporting and workflow management by VA site staff. 

In 2020 the VEText team moved to the OCTO to give it a national scope, and is now managed and supported by OCTO staff and contractors.

- [Objectives](#objectives)
- [Team](#team)
- [Projects](#projects)
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

### AVS Components
|**Use Case**|**Description**|
|--|--|
|[**After Visit Summary (AVS)**]|The AVS is provided to the patient after a healthcare visit. The document is a web-based interface launched from the CPRS Tools menu and is automatically populated with data from CPRS. AVS summarizes important information from the appointment, such as the diagnosis, treatment plan, and any prescribed medications. The AVS may also include follow-up instructions, recommended lifestyle changes, and contact information for further questions. The AVS serves as a reference for the patient to understand their care plan and manage their health after the visit. The following information is included in a typical AVS.
|[**Pre-Visit Summary**|A PVS is provided to the patient before a healthcare visit. It typically includes information such as the purpose of the upcoming appointment, any necessary preparations (such as fasting or bringing in medical records), and a list of topics or concerns the patient may want to discuss with the healthcare provider.The PVS helps the patient prepare for their visit, ensuring they have all the necessary information and questions ready to ask, leading to a more efficient and effective consultation. 
|[**Discharge Visit Summary**]|A DVS is provided to a patient upon discharge from a hospital or inpatient care facility. It contains essential information about the patient's hospital stay, including diagnosis, treatments administered, medications prescribed, and any follow-up care instructions. The DVS also outlines any lifestyle or dietary recommendations, as well as contact information for healthcare providers in case of questions or emergencies.The DVS serves as a comprehensive guide to help the patient transition safely from hospital care to home or another care setting, ensuring continuity of care and reducing the risk of readmission.

# Additional Documentation

- [VEText VistA EHR Sharepoint](https://dvagov.sharepoint.com/sites/vhaavs)
- [Zenhub Board](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/board?filterLogic=any&repos=133843125&showPRs=false)
- [AVS Metrics](https://app.powerbigov.us/Redirect?action=OpenApp&appId=2f89b4c0-fd10-4583-988b-9beec7aed02f&ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)
 - Slack: [#after-visit-summary](https://dsva.slack.com/archives/C04UBETRY8N)
