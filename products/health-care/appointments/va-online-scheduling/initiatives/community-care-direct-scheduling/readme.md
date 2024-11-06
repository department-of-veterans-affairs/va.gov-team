# Veteran Self-Scheduling Community Care (VSS CC) Initiative Brief 

## Overview

This initiative allows Veterans to directly schedule a community care appointment via VA.gov when they have indicated their preference for community care appointments is to self-schedule. This initiative came out of the [Cleland-Dole Act](https://www.congress.gov/117/bills/hr2617/BILLS-117hr2617enr.pdf), which addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology and more.
![image](https://github.com/user-attachments/assets/05fcfb40-f39a-4b21-8195-cef567619a41)

## Artifacts 

#### Requirements Artifacts
- [Business and legislative requirements tracker (SharePoint)](https://dvagov-my.sharepoint.com/:x:/g/personal/robert_meehan3_va_gov/EdTXJw53krNIt1qysxRDLwABl1cbCz0Hi4fYhzyxSoEVmA?e=8R3ypc) (mapping business requirements to Pilot Program Reqs tab)
- [EPS-VAOS Integration Vision Presentation](https://github.com/department-of-veterans-affairs/va.gov-team/files/14924023/VAOS.Discovery.Review.with.VAOS.03122024.Edited.1.1.pptx)<br><br>
- [CC DVSS Process Flow](https://dvagov-my.sharepoint.com/:u:/g/personal/robert_meehan3_va_gov/EZ8ifg_TwetKmevHKDieolABMkHlo2Ovtt4NOrxB5Fb10Q?e=v4nRRy)
- [Original EPS-VAOS Schedule Overview](https://dvagov.sharepoint.com/:p:/s/HealthApartment/EaymMOj8IRVLgeceh1kS-OQB1K4Cnr39NJHeSSVmOrZ14g?e=zHH3UW)

#### Product Artifacts
- [Initiative SharePoint Site](https://dvagov.sharepoint.com/:f:/s/HealthApartment/EsTqWKP_0G1PuMla1iiyr9kBfiuSpcQxUodT9n1WLqIj7g?e=p9TaHh)
- [MVP Scope Slack Canvas](https://dsva.slack.com/docs/T03FECE8V/F07NVM3B9NG)
- [CC VDSS SoPs](https://dvagov-my.sharepoint.com/:w:/g/personal/robert_meehan3_va_gov/ETsqC2BnBwJGiJuFsrBzdHABjHqlpcjoWh2TdN1lrKEB1g?e=aNMiDe)

#### Design Artifcats
- [MVP Wireframes](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=2490-44318&t=4E3sLy8lYzxyOpUL-1)
- [CC VSS After Consult Approval Workflow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717007634301/2e9fa61206c18e8cf196e2deb612eb0b577fb458)
- [CC VSS Referral to VA Notify Workflow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724857034587/50f5a6735d13d9273970da070a5573385dd7fb2c)

#### Engineering Artifacts
- [Care Nav API Endpoints (SharePoint)](https://dvagov.sharepoint.com/:x:/s/HealthApartment/EVXEu66555xIs5UMghBrAvIBjUuwc-AMyLC_YsCmTJfQbg?e=Ec9AuH)
- [Wellhive API Docs](https://github.com/wellhive/api-docs)
- [External Referral Appointment Scheduling System](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/architecture/community-care-technical-documentation.md)

## Research 

### Current State
- [Review Community Care Appointments service blueprint (Mural) - CX Catalog Team](https://www.figma.com/file/sCPsUDfgchOx8Dg0l3Uspb/Service-Blueprints?type=whiteboard&node-id=761-6444&t=Jf1WJ4OgStd1sByq-4)
- [Download Community Care Self-Scheduling Flow Map (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/files/15395579/Attachment.D.-.Community.Care.Veteran.Self-Scheduling.Flow.Map.pdf)
- [(VAOS) Application and HealthShare Referral Management (HSRM) Standard Operating Procedure [December 16, 2022]](https://github.com/user-attachments/files/16069320/CC.VAOS_HSRM_SOP_2022121622_v_Final.pdf)

### Previous Research 
- CC Provider Selection Usability Study Research Findings
  - [Research findings from 2020-10 full report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md#findings-and-recommendations)
  - Key takeaways
    - All participants wanted the list of providers to be more personalized. **The top request was to be able to schedule with providers they have seen in the past, or a specific provider they had researched/heard about.**
    - **For both cases, appointment availability was top of mind.** Most participants wanted to know how soon they could see the provider, or if the provider was available on specific dates.
    - Participants liked knowing a provider’s distance, but **some wanted to see the provider list in alphabetical order so they could find someone who they already knew - either an existing provider, or one they had researched.**
    - **Most participants said they would spend time researching providers before reaching this step,** googling review sites to get a sense of the provider’s reputation.

### Recent research 
- Community Care Self-Scheduling - Usability and Concept Testing Research Findings 
  - [2024-06 Research Findings - Community Care Self-Scheduling Findings Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/research/2024-06%20Community%20Care%20Self-Scheduling%20-%20Usability%20and%20Concept%20Testing/research-findings.md)
  - Key Findings
      - Referrals
          - One third of participants, without moderator prompts, identified the process or document received when VA has approved care by a community care provider as a “referral,” while others used different terms such as consult, request, authorization, or were not sure what term to use.
          - Before concept testing, participants expected to find new referrals in Appointments on va.gov or within My HealtheVet, with more participants indicating they’d look in My HealtheVet.
          - Before concept testing, participants weren’t confident in where they expected to find past referrals, but mentioned both Appointments and Medical Records.
          - Slightly less than half of participants were able to find a link to navigate to review all of their referrals in the prototype, but the majority of participants were able to identify where to look for older referrals.
      - Self-Scheduling User Flow
          - The majority of participants were able to easily start the scheduling process from the Appointments list task card, while 2 participants selected the incorrect link.
          - The majority of participants noticed the expiration date of the referral and found the presence of this information helpful, but many found the expiration date used in the prototype (e.g., 310 days) and wording to be confusing or misleading.
          - Participants were able to easily navigate the scheduling process and complete all tasks, but did run into challenges at two points. In addition, many participants offered unprompted positive feedback around the tool.
          - Participants understood the information on the referral introduction page as a whole, but had some questions and suggestions for additional information. All participants were able to easily find the "schedule appointment" call to action.
          - The filter pattern did not present any usability concerns, but our results lacked conclusive evidence that Veterans would use the feature prior to prompting them to use it. Though participants said the filters met overall expectations, some called out specific filters as confusing or missing.
          - Of the four participants we had time to ask, all four understood the "online scheduling" filter and found it beneficial. However, participants also expected to find providers that didn’t offer online scheduling and told us they would call and schedule with those providers, if needed.
          - Participants knew how to cancel their appointments in the prototype and understood there was no reason to take an additional step to call. Although 1 participant still said they’d call the office after canceling to make sure it had worked.
      - Expectations for VA Staff Follow-Up
          - The majority of participants said they would expect VA to contact them if they haven't self-scheduled their appointment within a certain amount of time.
           
## Measuring success

### Key performance indicators (KPIs)

**NOTE: there are 2 use cases, one where the Veteran clicks on the SMS/Email link and the other where they go directly to VA.gov and start from there**

- Veteran satisfaction
- Number of authorized CC referrals where Veteran has indicated a digital self-schedule preference
- % of Veterans who successfully and unsuccessfully scheduled a community care appointment who (1) have a digitial self-schedule preferance and (2) started scheduling an appointment
  - via SMS push
  - via VA.gov directly
- Time to schedule a community care appointment, once started
  - via SMS push
  - via VA.gov directly

### Metrics to Capture

| Use Case | Metric | Description | Capture Method | Responsible |
|----- |----- | ------- | ----- | ----- | 
| All | Customer/Veteran Experience | CSAT from Medallia survey on CC confirmation page and CC scheduling workflow pages | Medallia | UAE |
| All | Number of authorized CC referrals where Veteran has indicated a digital self-schedule preference | same | DataDog StatsD | UAE (we could do this if we are doing the other StatsD work) |
| SMS | Number who started the process | User clicked the link sent them via SMS/email | DataDog StatsD | UAE |
| SMS | Number who successfully scheduled an appointment | Successful calls to the CC scheduling API | DataDog StatsD | UAE |
| SMS | Number who received an error while scheduling | Failed calls to the CC schedulihng API | DataDog StatsD | UAE |
| SMS | Time to complete the process | Time between clicking the link and call to CC scheduling API  | DataDog StatsD | UAE |
| VA.gov | Number who started the process | User clicked the "Schedule your appointment" link for a referral on the Referrals and Requests page | DataDog StatsD | UAE |
| VA.gov | Number who successfully scheduled an appointment | Successful calls to the CC scheduling API | DataDog StatsD | UAE |
| VA.gov | Number who received an error while scheduling | Failed calls to the CC schedulihng API | DataDog StatsD | UAE |
| VA.gov | Time to complete the process | Time between clicking "Schedule your appointment" and call to CC sheduling API | DataDog StatsD | UAE |

### OLD KPIs
| KPIs | Source |
|----- | ------- |
| Number of scheduled VDSS appointments via VA.gov | VAOS backend service |
| Number of scheduled appointments in EPS | Appointments submitted to EPS from vets-api |
| Customer/Veteran Experience | CSAT from Medallia a11 survey on confirmation page and responses from feedback button usage on scheduling workflow pages on VA.gov | 
| Total number of authorized CC PT referrals | New referrals received from VAOS backend service that are unfiltered based on patient scheduling preference |
| Time between Veteran choosing VDSS to when they Self-Schedule | Time from referral authorization, received from VAOS backend service, to booked appointment in EPS |
| Number of error detections between referral authorization and booked appointment in EPS | Error detections by type between referral authorization, received from VAOS backend service, to booked appointment in EPS |    

### Metrics Dashboards
- TBD


