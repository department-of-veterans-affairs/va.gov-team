# CC Direct Scheduling initiative brief 

## Initiative quick links 

### Requirements

- **[Business and legislative requirements tracker (SharePoint)](https://dvagov-my.sharepoint.com/:x:/g/personal/robert_meehan3_va_gov/EdTXJw53krNIt1qysxRDLwABl1cbCz0Hi4fYhzyxSoEVmA?e=8R3ypc)**
- **[CC DVSS Process Flow](https://dvagov-my.sharepoint.com/:u:/g/personal/robert_meehan3_va_gov/EZ8ifg_TwetKmevHKDieolABMkHlo2Ovtt4NOrxB5Fb10Q?e=v4nRRy)**

### Other artifacts 

- [Initiative SharePoint Site](https://dvagov.sharepoint.com/:f:/s/HealthApartment/EsTqWKP_0G1PuMla1iiyr9kBfiuSpcQxUodT9n1WLqIj7g?e=p9TaHh)
- [MVP Scope Slack Canvas](https://dsva.slack.com/docs/T03FECE8V/F07NVM3B9NG)
- [Care Nav API Endpoints (SharePoint)](https://dvagov.sharepoint.com/:x:/s/HealthApartment/EVXEu66555xIs5UMghBrAvIBjUuwc-AMyLC_YsCmTJfQbg?e=Ec9AuH)
- [Figma designs](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=2490-44318&t=4E3sLy8lYzxyOpUL-1)
- [User and data flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/r/1675718737504?folderUuid=30f4b508-9720-4ebf-8105-40700da3c6aa)
- [Requesting access to referrals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/functionality/referral/access-to-planatir.md)

## Overview

### Cleland-Dole Act

**What:** Addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology and more.

**More information:** [Cleland Dole Act PDF](https://www.congress.gov/117/bills/hr2617/BILLS-117hr2617enr.pdf)<br>
Text - H.R.2617 - 117th Congress (2021-2022): Consolidated Appropriations Act, 2023 | Congress.gov | Library of Congress (Section 121, 125, 132, 133)


### CC scheduling current state

- [Review Community Care Appointments service blueprint (Mural) - CX Catalog Team](https://www.figma.com/file/sCPsUDfgchOx8Dg0l3Uspb/Service-Blueprints?type=whiteboard&node-id=761-6444&t=Jf1WJ4OgStd1sByq-4)
- [Download Community Care Self-Scheduling Flow Map (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/files/15395579/Attachment.D.-.Community.Care.Veteran.Self-Scheduling.Flow.Map.pdf)
- [(VAOS) Application and HealthShare Referral Management (HSRM) Standard Operating Procedure [December 16, 2022]](https://github.com/user-attachments/files/16069320/CC.VAOS_HSRM_SOP_2022121622_v_Final.pdf)

### CC direct scheduling end state

- [Download the EPS-VAOS Integration Vision Presentation](https://github.com/department-of-veterans-affairs/va.gov-team/files/14924023/VAOS.Discovery.Review.with.VAOS.03122024.Edited.1.1.pptx)<br><br>

**High-level**

<img width="980" alt="Screenshot 2024-04-08 at 11 34 25 AM" src="https://github.com/user-attachments/assets/236a4371-1a2c-441b-929a-f83173c6267c"><br><br>

**Sequence diagram**<br><br>

<img width="1000" alt="Frame 1" src="https://github.com/user-attachments/assets/e638d073-6daf-4f99-80ee-1fc2a044d9f4"><br><br>

**End-to-end data flow**

- [Review the CC DVSS end-to-end data flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717007634301/2e9fa61206c18e8cf196e2deb612eb0b577fb458?sender=u37bb983bd3fc3cc00c7d3286)<br><br>

<img width="996" alt="Screenshot 2024-04-08 at 11 34 25 AM" src="https://github.com/user-attachments/assets/9459b789-49f2-4127-9aaf-d1aa306c39d8"><br><br>

**Referrals-to-notifications-to-VA.gov data flow**

- [Review the Community Care VSS referral to VA Notify data flow in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724857034587/50f5a6735d13d9273970da070a5573385dd7fb2c?sender=u37bb983bd3fc3cc00c7d3286)<br><br>

<img width="996" alt="Screenshot 2024-04-08 at 11 34 25 AM" src="https://github.com/user-attachments/assets/156fc85e-cb01-41dc-8f36-13785257b4aa">

## Research findings

### Previous research 

#### CC provider selection usability study research findings

*[Research findings from 2020-10 full report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md#findings-and-recommendations)*

##### Key takeaways

- All participants wanted the list of providers to be more personalized. **The top request was to be able to schedule with providers they have seen in the past, or a specific provider they had researched/heard about.**
- **For both cases, appointment availability was top of mind.** Most participants wanted to know how soon they could see the provider, or if the provider was available on specific dates.
- Participants liked knowing a provider’s distance, but **some wanted to see the provider list in alphabetical order so they could find someone who they already knew - either an existing provider, or one they had researched.**
- **Most participants said they would spend time researching providers before reaching this step,** googling review sites to get a sense of the provider’s reputation.

### Recent research 

#### Community care self-scheduling - usability and concept testing research findings 

- [2024-06 Research Findings - Community Care Self-Scheduling Findings Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/research/2024-06%20Community%20Care%20Self-Scheduling%20-%20Usability%20and%20Concept%20Testing/research-findings.md)

## Outcomes

### Self-Scheduling and Community Care Self-scheduling Pilot Program
- Self-scheduling appointments
- Allows Veterans seeking for primary care, specialty care, and mental health care under the Veterans
- Community Care Program to self-schedule, modify, and cancel appointments directly online
- Allows VA to expand capabilities of an existing appointment self-scheduling technology or purchase a new appointment self-scheduling technology

## Measuring success

### Key performance indicators (KPIs)

#### Feature 
- Downtime % | baseline
- Customer satisfaction score avg. | baseline

#### Transactions 
- Appointments scheduled | baseline
- Errors when attempting to schedule | baseline
- Latency of error | baseline

#### Usage 
- Audience reach | baseline
- Conversion rate % | baseline
- Error failure rate % | baseline

## Schedule
- [EPS-VAOS Schedule Overview in SharePoint](https://dvagov.sharepoint.com/:p:/s/HealthApartment/EaymMOj8IRVLgeceh1kS-OQB1K4Cnr39NJHeSSVmOrZ14g?e=zHH3UW)
