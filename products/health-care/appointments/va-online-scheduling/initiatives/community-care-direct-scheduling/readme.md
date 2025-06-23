# Veteran Self-Schedule Community Care (VSS CC) Initiative Brief 

- [Artifacts](#artifacts)
    - [Requirements Artifacts](#requirements-artifacts)
    - [Workflow Artifacts](#workflow-artifacts)
    - [Product Artifacts](#product-artifacts)
    - [Design Artifcats](#design-artifcats)
    - [Engineering Artifacts](#engineering-artifacts)
- [Research](#research)
    - [Current State](#current-state)
    - [Previous Research](#previous-research)
    - [Recent research](#recent-research)
- [Testing](#testing)
- [Releasing](#releasing)
- [Measuring Success](#measuring-success)
    - [Key Performance Indicators](#key-performance-indicators)
    - [Metrics to Capture](#metrics-to-capture)
    - [Metrics Dashboards](#metrics-dashboards)
- [Decision-Log](#decision-log)

## Overview

This initiative allows Veterans to directly schedule a community care appointment via VA.gov when they have indicated their preference for community care appointments is to self-schedule. This initiative came out of the [Cleland-Dole Act](https://www.congress.gov/117/bills/hr2617/BILLS-117hr2617enr.pdf), which addresses Veteran homelessness, access to care, community care, mental health, research, telehealth, prostate cancer, provider oversight and transparency, long-term care, rural health, benefits, information technology and more.
![image](https://github.com/user-attachments/assets/05fcfb40-f39a-4b21-8195-cef567619a41)

## Artifacts 

#### Requirements Artifacts
- [Business and legislative requirements tracker (SharePoint)](https://dvagov-my.sharepoint.com/:x:/g/personal/robert_meehan3_va_gov/EdTXJw53krNIt1qysxRDLwABl1cbCz0Hi4fYhzyxSoEVmA?e=8R3ypc)
- [EPS-VAOS Integration Vision Presentation](https://github.com/department-of-veterans-affairs/va.gov-team/files/14924023/VAOS.Discovery.Review.with.VAOS.03122024.Edited.1.1.pptx)
- [CC DVSS Process Flow](https://dvagov-my.sharepoint.com/:u:/g/personal/robert_meehan3_va_gov/EZ8ifg_TwetKmevHKDieolABMkHlo2Ovtt4NOrxB5Fb10Q?e=v4nRRy)
- [Original EPS-VAOS Schedule Overview](https://dvagov.sharepoint.com/:p:/s/HealthApartment/EaymMOj8IRVLgeceh1kS-OQB1K4Cnr39NJHeSSVmOrZ14g?e=zHH3UW)

#### Workflow Artifacts
- [Veteran Digital Self-Scheduling Process for staff and VEText (VDSS Process 031725.zip)](https://github.com/user-attachments/files/19322031/VDSS.Process.031725.zip)
- [Referral Coordination Process for staff (FINAL-RCI-Detailed-Process-Flow--June-11-2024-.pdf)](https://github.com/user-attachments/files/19322023/FINAL-RCI-Detailed-Process-Flow--June-11-2024-.pdf)

#### Product Artifacts
- [Initiative SharePoint Site](https://dvagov.sharepoint.com/:f:/s/HealthApartment/EsTqWKP_0G1PuMla1iiyr9kBfiuSpcQxUodT9n1WLqIj7g?e=p9TaHh)
- [MVP Scope Slack Canvas](https://dsva.slack.com/docs/T03FECE8V/F07NVM3B9NG)
- [CC VDSS SoPs](https://dvagov-my.sharepoint.com/:w:/g/personal/robert_meehan3_va_gov/ETsqC2BnBwJGiJuFsrBzdHABjHqlpcjoWh2TdN1lrKEB1g?e=aNMiDe)

#### Design Artifcats
- [MVP Wireframes](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=2490-44318&t=4E3sLy8lYzxyOpUL-1)
- [CC VSS After Consult Approval Workflow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717007634301/2e9fa61206c18e8cf196e2deb612eb0b577fb458)
- [CC VSS Referral to VA Notify Workflow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724857034587/50f5a6735d13d9273970da070a5573385dd7fb2c)
- [CC VSS VEText/VA Notify template content (in SharePoint)](https://dvagov.sharepoint.com/:w:/r/sites/HealthApartment/Shared%20Documents/Appointments/Projects/2024%20Community%20Care%20Digital%20Self-Scheduling/vetext/CC%20Veteran%20Self-Scheduling%20VeText%20Templates.docx?d=wd132b693833f4a28afedad8ea6a252f0&csf=1&web=1&e=ARQ1Ec)

#### Engineering Artifacts
- [Care Nav API Endpoints (SharePoint)](https://dvagov.sharepoint.com/:x:/s/HealthApartment/EVXEu66555xIs5UMghBrAvIBjUuwc-AMyLC_YsCmTJfQbg?e=Ec9AuH)
- [Wellhive API Docs](https://github.com/wellhive/api-docs)
- [External Referral Appointment Scheduling System](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/architecture/community-care-technical-documentation.md)

## Research 

#### Current State
- [Review Community Care Appointments service blueprint (Mural) - CX Catalog Team](https://www.figma.com/file/sCPsUDfgchOx8Dg0l3Uspb/Service-Blueprints?type=whiteboard&node-id=761-6444&t=Jf1WJ4OgStd1sByq-4)
- [Download Community Care Self-Scheduling Flow Map (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/files/15395579/Attachment.D.-.Community.Care.Veteran.Self-Scheduling.Flow.Map.pdf)
- [(VAOS) Application and HealthShare Referral Management (HSRM) Standard Operating Procedure [December 16, 2022]](https://github.com/user-attachments/files/16069320/CC.VAOS_HSRM_SOP_2022121622_v_Final.pdf)

#### Previous Research 
- CC Provider Selection Usability Study Research Findings
  - [Research findings from 2020-10 full report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md#findings-and-recommendations)
  - Key takeaways
    - All participants wanted the list of providers to be more personalized. **The top request was to be able to schedule with providers they have seen in the past, or a specific provider they had researched/heard about.**
    - **For both cases, appointment availability was top of mind.** Most participants wanted to know how soon they could see the provider, or if the provider was available on specific dates.
    - Participants liked knowing a provider’s distance, but **some wanted to see the provider list in alphabetical order so they could find someone who they already knew - either an existing provider, or one they had researched.**
    - **Most participants said they would spend time researching providers before reaching this step,** googling review sites to get a sense of the provider’s reputation.

#### Recent Research 
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

## Testing
### Stage testing
We need to figure out how to do stage testing with the following connected systems:
 - Vista/Oracle Health
 - Referrals (HSRM)
 - EPS
We need continuety with an ICN that has referrals in a stage system, that can then be scheduled in a stage EPS system, that can then be added to a stage Vista/OH site.

This is TBD.
### Prod testing
We need a patient that we can do a prod test with who has referrals that are within the pilot. We will need to prod test before launching.

This is TBD.
### Test rail
- [Test Cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/cc-direct-scheduling-test-cases.md)
- [QA Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/cc-direct-scheduling-qa-plan.md)

## Releasing
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/cc-direct-scheduling-release-plan.md)
           
## Measuring Success

#### Key performance indicators 

- **Satisfaction**: avg. CSAT score for all surveys completed from any CC scheduling workflow page or the CC confirmation page
- **Audience**: % of referrals where Veteran chose to begin to self schedule
    - Out of all approved referrals for Veterans who had a digital self-schedule preference, what % started the self-scheduling process 
- **Conversions**: % of referrals where Veteran finished the self schedule process
    - Out of all approved referrals for Veterans who had a digital self-schedule preference, what % finished the self-scheduling process (succes or failure)
- **Completions**: % of referrals where Veteran successfully self scheduled
    - Out of those who (1) indicated a digital self-schedule preferance and (2) started scheduling an appointment, what % got a success message back from the scheduling API
- **Failures**: % of referrals where Veteran failed to self schedule
    - Out of those who (1) indicated a digital self-schedule preferance and (2) started scheduling an appointment, what % got a failure message back from the scheduling API
- **Time to Complete**: avg. time to self schedule
    - Avg. time it took to finish self-scheduling after starting

#### Metrics to Capture

**NOTE: there are 2 use cases, one where the Veteran clicks on the SMS/Email link and the other where they go directly to VA.gov and start from there**
Current:
| Use Case | Metric No. | Metric | Description | Capture Method | Responsible |
|----- |----- | ------- | ------- | ----- | ----- | 
| All | 1 | Customer/Veteran Experience | CSAT from Medallia survey on CC confirmation page and CC scheduling workflow pages | Medallia | UAE |
| All | 2 | Number of approved CC referrals where Veteran has indicated a digital self-schedule preference | same | DataDog StatsD | UAE or VHA |
| SMS | 3 | Number who started the process | User clicked the link sent them via SMS/email | DataDog StatsD | UAE |
| VA.gov | 7 | Number who started the process | User clicked the "Schedule your appointment" link for a referral on the Referrals and Requests page | DataDog StatsD | UAE |
| VA.gov | 8 | Number who successfully scheduled an appointment | Successful calls to the CC scheduling API | DataDog StatsD | UAE |
| VA.gov | 9 | Number who received an error while scheduling | Failed calls to the CC schedulihng API | DataDog StatsD | UAE |
| VA.gov | 10 | Time to complete the process | Time between clicking "Schedule your appointment" and call to CC sheduling API | DataDog StatsD | UAE |

**Removed 4/7/25:** per decision noted [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97072#issuecomment-2784643713).
| Use Case | Metric No. | Metric | Description | Capture Method | Responsible |
|----- |----- | ------- | ------- | ----- | ----- | 
| SMS | 4 | Number who successfully scheduled an appointment | Successful calls to the CC scheduling API | DataDog StatsD | UAE |
| SMS | 5 | Number who received an error while scheduling | Failed calls to the CC scheduling API | DataDog StatsD | UAE |
| SMS | 6 | Time to complete the process | Time between clicking the link and call to CC scheduling API | DataDog StatsD | UAE |

#### Metrics Dashboards
- TBD

#### GitHub Project Filters
[GitHubProjectFiltersforCC.txt](https://github.com/user-attachments/files/18084585/GitHubProjectFiltersforCC.txt)

## Decision-Log
| Date | Decision | Notes / Reference |
|----- |----- | ------- |
| 3/4/25 | Pilot specialty type of care updated to optometry. | [Slack thread.](https://dsva.slack.com/archives/C06RMRJCLHH/p1741104235840649) |
| 4/7/25 | Metrics refined in the table above. | [GitHub ticket comment.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/97072#issuecomment-2784643713) |

