# VA Disability Benefits Experience Sprint Tracker

_**Overview:** This tracker is designed to track sprint goals with completed work, providing a comprehensive view of goals achieved._


# Sprint 5 Goals \[05/21/25 - 06/03/25] - Sprint Spam Musubi 🍣 

\*Includes Memorial Day Holiday


## Disability Teams 1 and 2

Main Sprint Goal:

Progress the rollout of 0781 form release, while continuing to address the staging review findings and work on outstanding tech debt items including latest epic of frontend date improvements.


### 0781 Form Updates (super-epic)

0781 progressive rollout

Goals:

- We want to get the release out to 100% of Veterans who are starting a new 526 + 0781.

- HCD: We want to spotcheck 0781 to be able to identify any urgent pain points and issues.

|                                                                                 |                                                                                        |                            |                 |                          |
| ------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------: | :------------------------: | :-------------: | :----------------------: |
| **Sprint Goal**                                                                 |                                **GitHub Ticket Number**                                | **Reason if Not Complete** | **Update Date** | **End of Sprint Status** |
| \[0781 PS] Vets-json-schema to match the final version of our schema            |  [103147](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103147) |                            |                 |                          |
| Add missing headings to Step 4 of 6: Supporting Evidence - development          | [109932](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109932)  |                            |                 |                          |
| Staging Review finding: Inaccurate link to download lay/witness statement - ENG | [108117](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108117)  |                            |                 |                          |
| 0781 rollout                                                                    | [110089](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110089)  |                            |                 |                          |
| \[0781 Monitoring] Conduct Discovery on GA4 and Datadog Offerings               |  [110229](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110229) |                            |                 |                          |
| \[0781 Monitoring] Request/Analyze MyVA411 Data                                 |  [110225](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110225) |                            |                 |                          |


### Bug fixes and tech debt

Goal: Begin frontend date handling improvements

|                                             |                                                                                                                                                                                  |                            |                 |                          |
| ------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------: | :-------------: | :----------------------: |
| **Sprint Goal**                             |                                                                             **GitHub Ticket Number**                                                                             | **Reason if Not Complete** | **Update Date** | **End of Sprint Status** |
| Phase 1 Fix TE invalid date format          |                                               [110031](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110031)                                              |                            |                 |                          |
| Phase 1 unit +integration tests             |                                               [110032](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110032)                                              |                            |                 |                          |
| Phase 2 create centralized utility(Stretch) | [11024](https://github.com/orgs/department-of-veterans-affairs/projects/1660/views/14?pane=issue\&itemId=111360128\&issue=department-of-veterans-affairs%7Cva.gov-team%7C110024) |                            |                 |                          |


### 526 Tech Debt

Goal: Work on outstanding tech debt 

|                                                                                             |                                                                                        |                            |                 |                          |
| ------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------: | :------------------------: | :-------------: | :----------------------: |
| **Sprint Goal**                                                                             |                                **GitHub Ticket Number**                                | **Reason if Not Complete** | **Update Date** | **End of Sprint Status** |
| 526 Cypress test investigation and fix (Stretch)                                            | [109736](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109736)  |                            |                 |                          |
| Automated axe e2e tests - 526EZ: heading-order issue with SaveInProgressIntro on intro page | [106879](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106879)  |                            |                 |                          |
| Resolve 10 errors from CodeQL scanning                                                      | [#109395](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109395) |                            |                 |                          |
| Switch Datadog to generic initialization code (Stretch)                                     | [#109254](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109254) |                            |                 |                          |


### 526 HCD

Goals:

- Determine what is needed to get submission status information into myVA for veterans.

- Develop a catalog of what analytics capabilities we currently have.

|                                                                       |                                                                                       |                            |                 |                          |
| --------------------------------------------------------------------- | :-----------------------------------------------------------------------------------: | :------------------------: | :-------------: | :----------------------: |
| **Sprint Goal**                                                       |                                **GitHub Ticket Number**                               | **Reason if Not Complete** | **Update Date** | **End of Sprint Status** |
| Design Exploration for MyVA Submission Status                         | [107771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/107771) |                            |                 |                          |
| Begin Audit for existing Analytics sources \[includes funnel metrics] | [110228](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110228) |                            |                 |                          |


##

## Conditions Team

### Conditions Taxonomy and Classification

|                                                                   |                                                                                                |                            |                 |                          |
| :---------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :------------------------: | :-------------: | :----------------------: |
|                          **Sprint Goal**                          |                                    **GitHub Ticket Number**                                    | **Reason if Not Complete** | **Update Date** | **End of Sprint Status** |
| **Machine Learning Classifier*** Goal: Define architecture needs. |                                                                                                |                            |                 |                          |
|               Create scaffolding for new classifier               | [758](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/758) |                            |                 |                          |
|           Discovery on AI Team's ML Classification model          | [767](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/767) |                            |                 |                          |
|                          **Other issues**                         |                                                                                                |                            |                 |                          |
|     Deploy updated classification code mappings (5 new terms)     | [766](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/766) |                            |                 |                          |


### Conditions Submission Improvements

**Prepare for usability testing**

Goals: 

- Draft conversation guide

- Iterate on research plan based on feedback

|                                                                                                           |                                                                                                |                            |                 |                          |
| --------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------: | :------------------------: | :-------------: | :----------------------: |
| **Sprint Goal**                                                                                           |                                    **GitHub Ticket Number**                                    | **Reason if Not Complete** | **Update Date** | **End of Sprint Status** |
| Multi-step conditions submission: Draft Conversation Guide                                                | [770](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/770) |                            |                 |                          |
| Iterate on research plan based on feedback                                                                | [771](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/771) |                            |                 |                          |
| **Prepare prototypes for usability testing**- Deploy updated prototypes and update status of known issues |                                                                                                |                            |                 |                          |
| Deploy updated edit flows for Mango and Kiwi prototypes                                                   | [768](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/768) |                            |                 |                          |
| **Other**                                                                                                 |                                                                                                |                            |                 |                          |
| Technical discovery to understand focus issue on conditions follow up questions                           | [765](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/765) |                            |                 |                          |

_Approvals:_ _(sent via email but approvals tracked here)_
- [x]  ~~Ready to be sent for approvals (05/20/25)~~
- [x]  ~~VA PO & COR sent the Sprint Goals (05/20/25)~~
- [x]  ~~VA PO approved the Sprint Goals (05/20/25)~~
- [x]  ~~VA COR approved the Sprint Goals (05/20/25)~~
- [ ]  VA PO approved the Sprint Review
- [ ]   VA COR approved the Sprint Review

_Delivery + Notes:_
- [ ] All goals have been updated in the sprint chart
- [ ] Any Additional details about goals not completed will be documented here




# Sprint 4 Goals \[05/07/25 - 05/20/25]

## Base Teams

### 0781 Form Updates

|                                                                                                                                                                  |                          |                  |                                       |                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------: | :--------------: | :-----------------------------------: | :-------------------------------------: |
|                                                                          **Sprint Goal**                                                                         | **GitHub Ticket Number** | **Updated Date** |               **Notes**               |         **End of Sprint Status**        |
|                                           0781 Form Progressive Rollout: Update 0781 Traumatic Events Phrasing #108785                                           |          108785          |                  |                                       |                  Closed                 |
|                            0781 Form Progressive Rollout: Update 0781 Destructive Action Prompts Bullet Styling + Lead In text #108799                           |          108799          |                  | Completed and waiting platform review |               In Progress               |
|                         0781 Form Progressive Rollout: \[0781 PS] add 0781 Reporting metrics to dashboard, ensure working in prod #106932                        |          106932          |                  |                                       |                  Closed                 |
|                     0781 Prioritize Staging Review Tickets: Staging Review finding: Missing legend and multiple H3s on several pages #108126                     |          108126          |                  |                                       |                  Closed                 |
|             0781 Prioritize Staging Review Tickets: Staging Review finding: Missing focus management when providing details about conditions #108130             |          108130          |                  |                                       |                  Closed                 |
|                                               0781 Prioritize Staging Review Tickets: No auth error message #108841                                              |          108841          |                  |                                       |                  Closed                 |
|                                          0781 Prioritize Staging Review Tickets: Fix lack of auth error message #108842                                          |          108842          |                  |                                       | PR open, only pending content approval  |
|                          0781 Finalize Content ChangesStaging Review finding: 526 Parenthetical Text — Supporting Evidence Intro #108124                         |          108124          |                  |                                       |                  Closed                 |
|                                  0781 Finalize Content ChangesStaging Review finding: 0781 Explanatory text readability #108120                                  |          108120          |                  |                                       |                  Closed                 |
|                         0781 Finalize Content ChangesStaging Review finding: 0781 Types of Traumatic Events — Language Refinement #108122                        |          108122          |                  |                                       |                  Closed                 |
|                          0781 Finalize Content ChangesStaging Review finding: 0781 Behavior Changes Intro — Language Refinement #108123                          |          108123          |                  |                                       |                  Closed                 |
|                                 0781 Finalize Content ChangesStaging Review finding: Fix spacing of "add an event" button #108116                                |          108116          |                  |                                       |                  Closed                 |
| 0781 Finalize Content ChangesCollaboration Cycle for \[Disability Benefits Experience Team 2, Disability Comp Application (21-526 EZ), Updated 0781 Flow] #80848 |           80848          |                  |                                       |                  Closed                 |
|                                             0781 Finalize Content Changes\[0781 PS] In-Progress Form Handling #103911                                            |          103911          |                  |                                       |                  Closed                 |
|                                                         0781 IPF Alert Notification Finalization #109025                                                         |          109025          |                  |                                       |                  Closed                 |


### 4142 Form Updates

|                                                                    |                          |                  |           |                                               |
| :----------------------------------------------------------------: | :----------------------: | :--------------: | :-------: | --------------------------------------------- |
|                           **Sprint Goal**                          | **GitHub Ticket Number** | **Updated Date** | **Notes** | **End of Sprint Status**                      |
| 4142 PS: Draft product/design brief and outline next steps #108559 |          108559          |                  |           | Closed                                        |
|     Staging Review finding: 4142 No Auth Error Message #108119     |          108119          |                  |           | Default ticket. Will close once 108842 closes |


### 526 Tech Debt

|                                                                                                |                          |                  |           |                          |
| :--------------------------------------------------------------------------------------------: | :----------------------: | :--------------: | :-------: | :----------------------: |
|                                         **Sprint Goal**                                        | **GitHub Ticket Number** | **Updated Date** | **Notes** | **End of Sprint Status** |
|                     Tech Debt: VA Notification email investigation #108885                     |          108885          |                  |           |          Closed          |
|                  Tech Debt: 526 'XX' Data Issue - Discovery (Frontend) #108295                 |          108295          |                  |           |          Closed          |
|                        Tech Debt: 526 'XX' Data Issue (Backend) #108294                        |          108294          |                  |           |          Closed          |
|                     Tech Debt: Fix special chars converting to '?' #108835                     |          108835          |                  |           |          Closed          |
|                         Tech Debt: Watermark removal discovery #108832                         |          108832          |                  |           |          Closed          |
| Tech Debt: Update form526 IPF expiration date to 1 year from creation, not last update #107727 |          107727          |                  |           |          Closed          |


## Conditions Team

### Conditions Taxonomy and Classification

|                                                                                      |                                                                                                |                  |           |                          |
| :----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :--------------: | :-------: | ------------------------ |
|                                    **Sprint Goal**                                   |                                    **GitHub Ticket Number**                                    | **Updated Date** | **Notes** | **End of Sprint Status** |
|            Conditions: Set up local dev environment for new engineers #752           | [752](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/752) |                  |           | Closed                   |
| Conditions: Investigate the steps required to create a new endpoint in vets-api #755 | [755](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/755) |                  |           | Closed                   |


### Conditions Submission improvements

|                                                                                                                                                                             |                                                                                                 |                  |           |                          |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: | :--------------: | :-------: | ------------------------ |
|                                                                               **Sprint Goal**                                                                               |                                     **GitHub Ticket Number**                                    | **Updated Date** | **Notes** | **End of Sprint Status** |
|                                    Conditions Submission Improvements: Set up local dev for the front-end prototypes Kiwi and Mango #756                                    |  [756](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/756) |                  |           | Closed                   |
| Introduce new team to upcoming research for multi-step condition submission[ #751](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/751) | [#751](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/751) |                  |           | Closed                   |

_Approvals:_ _(sent via email but approvals tracked here)_

- [x]  ~~Ready to be sent for approvals (05/05/25)~~

- [x]  ~~VA PO & COR sent the Sprint Goals (05/05/25)~~

- [x]  ~~VA PO approved the Sprint Goals (05/07/25)~~

- [x]  ~~VA COR approved the Sprint Goals (05/07/25)~~

- [x]  ~~VA PO approved the Sprint Review (05/20/25)~~

- [x]   ~~VA COR approved the Sprint Review (05/20/25)~~

_Delivery + Notes:_

- [x] ~~All goals have been updated in the sprint chart~~

- [x] ~~Any Additional details about goals not completed will be documented here~~


## **Sprint Goals - Sprint: 3 \[04/23/25 - 05/06/25]**

|                                                                                                                                                      |                          |                            |                                                                                                                                                                     |                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------: | :------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------: |
|                                                                    **Sprint Goal**                                                                   | **GitHub Ticket Number** | **Updated Date** |                                                                           **Notes**                                                                           | **End of Sprint Status** |
|                                                         Onboarding: Team forming and norming                                                         |            n/a           |                          |                                                                                                                                                                     |        In Progress       |
|                                                       Onboarding: Formulate team DACI structure                                                      |            n/a           |                          |                                                                                                                                                                     |        In Progress       |
|              Onboarding: Continue new team member onboarding, clearance paperwork, and interim clearance receipt with COR for Processing             |            n/a           |                         |                                                                                                                                                                     |        In Progress       |
|                                  Onboarding: Ensure all team members have completed all security paperwork/trainings                                 |            n/a           |                          |                                                                                                                                                                     |        In Progress       |
|                                           Onboarding: Correct any document issues and re-transmit as needed                                          |            n/a           |                         |                                                                                                                                                                     |        In Progress       |
|                                     Onboarding: Continue to work with COR to ensure no delays in staff onboarding                                    |            n/a           |                          |                                                                                                                                                                     |        In Progress       |
|                                                     Onboarding: Continue to update onboarding doc                                                    |            n/a           |                         |                                                                                                                                                                     |        In Progress       |
|     Onboarding: Continue Disability Benefits context sharing with new team members / daily knowledge sharing sessions / daily transition meetings    |            n/a           |                         |                                                                                                                                                                     |        In Progress       |
|                       Onboarding: Audit existing documentation and communication channels and plan a strategy for the new crew                       |            n/a           |                            |                                                                                                                                                                     |        In Progress       |
|       Onboarding: As team members are cleared, introduce new teams to key partners across the VA (Enabling team, Platform ToT, VBA, AI Office…)      |            n/a           |                            |                                                                                                                                                                     |        In Progress       |
| Onboarding: Collaborate with the enabling team to develop a series of workshops to align on a product vision and strategy for the crew and each team |            n/a           |                            |                                                                                                                                                                     |        In Progress       |
|                         Onboarding: Develop a project brief for all team members to align on contract goals and deliverables                         |            n/a           |                            |                                                                                                                                                                     |        In Progress       |
|                 Staging Review finding: Incorrect label announced for behavioral change description textareas: github ticket #108127                 |          108127          |                            |                                                                                                                                                                     |         Completed        |
|                                     Staging Review finding: Focus lost in page transition: github ticket #108125                                     |          108125          |                            |                                                                                                                                                                     |         Completed        |
|                            Staging Review finding: Missing legend and multiple H3s on several pages: github ticket #108126                           |          108126          |                            |                                                                                                                                                                     |         Completed        |
|                                   \[0781 PS] A11Y issue - Missing label for \\\<va-select\\>: github ticket #107716                                  |          107716          |                            |                                                                                                                                                                     |         Completed        |
|                              \[0781 PS] Test - PDF generations for private and VA medical centers: github ticket #108344                             |          108344          |                            |                                                                                                                                                                     |         Completed        |
|                              \[0781 PS] Test - the old flow still works and produces the old PDF: github ticket #104697                              |          104697          |                            |                                                                                                                                                                     |         Completed        |
|                                       Adding scheduled job for 0781 stats (with flipper): github ticket #21814                                       |           21814          |                            |                                                                                                                                                                     |         Completed        |
|                                    \[0781 PS] Test - Metrics for both success of old claims: github ticket #108345                                   |          108345          |                            |                                                                                                                                                                     |         Completed        |
|                                                        Release 0781 1%: github ticket #108441                                                        |          108441          |                            |                                                                                                                                                                     |         Completed        |
|                                              0781 Post Release monitoring for 1%: github ticket #108442                                              |          108442          |                            |                                                                                                                                                                     |         Completed        |
|                                   0781 (Design): Refine and finalize notification messaging, github ticket #103911                                   |          103911          |                            |                                                                                                                                                                     |        In Progress       |
|                                    0781 (Design): Staging Review finding: 0781 Explanatory text readabilty #108120                                   |          108120          |                            | content has been drafted, content is now being reviewed and finalized; future tickets will be broken down into drafting content, finalizing content, implementation |        In Progress       |
|                     0781 (Design): Staging Review finding: 0781 Destructive Action Prompt — Bullet Styling + Lead in Text #108128                    |          108128          |                            | content has been drafted, content is now being reviewed and finalized; future tickets will be broken down into drafting content, finalizing content, implementation |        In Progress       |
|                          0781 (Design): Staging Review finding: 0781 Types of Traumatic Events — Language Refinement #108122                         |          108122          |                            | content has been drafted, content is now being reviewed and finalized; future tickets will be broken down into drafting content, finalizing content, implementation |        In Progress       |
|                               0781 (Design): Staging Review finding: 0781 Traumatic Events — Content Refinement #108121                              |          108121          |                            | content has been drafted, content is now being reviewed and finalized; future tickets will be broken down into drafting content, finalizing content, implementation |        In Progress       |
|                           0781 (Design): Staging Review finding: 526 Parenthetical Text — Supporting Evidence Intro #108124                          |          108124          |                            | content has been drafted, content is now being reviewed and finalized; future tickets will be broken down into drafting content, finalizing content, implementation |        In Progress       |
|                           0781 (Design): Staging Review finding: 0781 Behavior Changes Intro — Language Refinement #108123                           |          108123          |                            |                                                               found to be a duplicate of ticket 108121                                                              |          Closed          |
|                          0781 (Design): Staging Review finding: 0781 Destructive Action Prompt — Content Refinement #108129                          |          108129          |                            |                                                               found to be a duplicate of ticket 108128                                                              |          Closed          |
|           Conditions: Introduce new team members to the ML classification initiative, follow up on architectural intent, github ticket #750          |            750           |                            |                                                                                                                                                                     |         Completed        |
|                Conditions: \[stretch] Introduce new team to upcoming research for multi-step condition submission, github ticket #751                |            751           |                            |                                                           stretch goal that was not completed in Sprint 3                                                           |       Not Completed      |
|                             4142 Form (Design): Consolidate brief and outline potential next steps, github ticket #102051                            |          102051          |                            |                                         this ticket was converted to a super epic ticket under the direction of Shannon Ford                                        |        In Progress       |

_Approvals:_ _(sent via email but approvals tracked here)_
- [x] ~~Ready to be sent for approvals (04/29/25)~~
- [x] ~~VA PO & COR sent the Sprint Goals (04/29/25)~~
- [x] ~~VA PO approved the Sprint Goals (04/29/25)~~
- [x] ~~VA COR approved the Sprint Goals (04/29/25)~~
- [x] ~~VA PO approved the Sprint Review (05/09/25)~~
- [x] ~~VA COR approved the Sprint Review (05/15/25)~~

_Delivery + Notes:_
- [x] ~~All goals have been updated in the sprint chart~~
- [x] ~~Any Additional details about goals not completed will be documented here~~
