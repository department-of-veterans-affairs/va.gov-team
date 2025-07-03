
# Financial Management Team Goal Tracker  
_**Overview:** This tracker is designed to align sprint goals with quarterly priorities, providing a comprehensive view of goals achieved._ 

Current/prior sprint tickets & completion rates can be seen [here](https://github.com/orgs/department-of-veterans-affairs/projects/1514/views/2?sliceBy%5Bvalue%5D=Sprint+1).

---

## DRAFT Quarterly Priorities for FY25Q4 (July, August, September 2025)  
*Quarter Sprints include 12, 13, 14, 15, 16, 17, 18*
    
**Primary Goals (May shift based on stretch goal dependencies)**
| Priority ID | Description | S.Epic | Relevant Dates |  Notes | Dependency |  End of Quarter Status |
|---------------|---------------|---------------|---------------|---------------|---------------|---------------|
| QP1 | **Digital Debt Dispute (VBA):** Launch in Production |[#82003](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82003)  | Launch in Production June/July | UX-BE | **DMC** | |
| QP2 | **One Thing Per Page:** Launch in Production |[#106610](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106610)  | launch in early July | FE |  |  |
| QP3 | **Pay.gov Hosted Collection Page (HCP) for Copays:** Launch in Production |[ #110219](https://github.com/orgs/department-of-veterans-affairs/projects/1514/views/18?pane=issue&itemId=111610681&issue=department-of-veterans-affairs%7Cva.gov-team%7C110219)  |  | FE | **Pay.gov + HRC/VHA accounting** |  |
| QP4 | **Pay.gov Hosted Collection Page (HCP) for Overpayments:** Finalize design + engineering handover. Potential to launch-TBD |[#105733](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105733)  |  | FE | **Pay.gov + DMC for <Receivable ID> + accounting components** |  |
| QP5 | **Veteran Request for Hardship Suspension (VBA):** Initiate Design Prototyping & Development handover |[#106207](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106207)  |Finalize engineering handover by end of Sept in preparation for development in October  | Design -FE | **DMC** |  |
| QP6 | **Indirect Initiative Priority Work:** Complete all work listed in the Epic  | [#112855](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112855)|Wrap up and launch all efforts asap  | UX-FE-BE |  |  |

**Priorities by Discipline (LOE)**
| UX - Design Priorities | UX - Research Priorities | FE Priorities | BE Priorities |
|---------------|---------------|---------------|---------------|
|Zero silent failure launch alignment (Xsmall)|Digital dispute CANARY testing (small)|Digital dispute (small)|Digital dispute (small)|
|1TTP launch alignment (Xsmall)|Payment History Research PRELAUNCH USABILITY  (medium)|1TTP (medium)|Zero Silent Failure (?)|
|Payment history launch alignment/review implementation (Xsmall)|Pay.gov (small)|Payment History (Large)|Payment History (Large)|
|Pay.gov COPAY - finalize designs , eng handover, launch alignment (medium+)|One VA debt letter research (small)|Pay.gov COPAY (medium)|Pay.gov COPAY (medium+)|
|pay.govOVERPAYMENTS - finalize designs , eng handover, launch alignment (small+)| | |Reinstate emails (xsmall)|
|Hardship Suspension (medium)| | | |
|**UX - Design Dependencies**|**UX - Research Dependencies**|**FE Dependencies**|**BE Dependencies**|
|:white_large_square: Lighthouse|:white_large_square: Lighthouse|&#x2611; Lighthouse|&#x2611; Lighthouse|
|&#x2611; DMC/IDT|&#x2611; DMC/IDT|&#x2611; DMC/IDT|&#x2611; DMC/IDT|
|:white_large_square: VBS/Huron|:white_large_square: VBS/Huron|:white_large_square: VBS/Huron|:white_large_square: VBS/Huron|
|&#x2611; Pay.gov|&#x2611; Pay.gov|&#x2611; Pay.gov|&#x2611; Pay.gov|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [ ] VA PO approved end of quarter status of Quarterly Goals (0x/xx/25)

## Sprint Goals - Sprint: 12 [7/1/25 - 7/15/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Support Engineering team in addressing Staging Review feedback to ensure Digital Dispute is release-ready (Including canary testing with Veterans).| QP1 |--|--|--|
|UX: Complete Figma user flows for Hardship Suspension.| QP5 |--|--|--|
|UX: Refine and document the UX research process for studies to include use of Copilot (AI tool).| QPX |--|--|--|
|ENG: Complete existing front end Digital Dispute launch-blocking tickets from the Staging Review (10 pts).| QP1 |--|--|--|
|ENG: Create Digital Dispute multiple submission database schemas. | QP1 |--|--|--|
|ENG: Address upstream server VBA job submission errors.| QPX |--|--|--|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (06/30/25)
 - [X] VA PO & COR sent the Sprint Goals (06/30/25)
 - [X] VA PO approved the Sprint Goals (07/02/25)
 - [X] VA COR approved the Sprint Goals (07/02/25)
 
**_Delivery + Notes:_**
- [ ] All goals have been updated in the sprint chart
- [ ] Any Additional details about goals **not** completed will be documented here

---

## Quarterly Priorities for FY25Q3 (Apr, May, Jun 2025)  
*Quarter Sprints include 5, 6, 7, 8, 9, & 10*

<details>
    
</br> **Primary Goals (May shift based on stretch goal dependencies)**
    
| Priority ID | Description | S.Epic | Relevant Dates |  Notes |  End of Quarter Status |
|-------------|---------------|-----------------|---------------|  ---------------|   ---------------| 
| QP1 | **Zero Silent Failure Alignment:** Implement call back functionality and 3 email templates for asynchronous submission pattern|[#106206](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106206)  | Implement ASAP- before April 22, 2025 | **[UX+BE]** Tied to OCTO Silent Failure Initiative  | Work on this was paused for Digital Dispute and remainign items will be addressed in the Indirect Initiative Priority Work epic #112855 next quarter. |
| QP2 |  **One VA Debt Letter:** Launch in production *| [#84175](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84175) | Launch in Prodution Goal: ~~March~~ Early April 2025 | **[UX+FE+BE]** Legislative Requirement: Veterans Benefit Transition​ Act of 2018 ( year 7) |Launched on April 30, 2025  |
| QP3 |  **Update 5655 Wizard to new task flow:** Launch updates in production *| [#48133](https://github.com/orgs/department-of-veterans-affairs/projects/1514/views/6?pane=issue&itemId=88349041&issue=department-of-veterans-affairs%7Cva.gov-team%7C48133)|  | **[UX+FE]**  Dependent on CAIA team collaboration | Launched in production May 6, 2025    ||
| QP4  | **Digital Debt Dispute (VBA):** Target Launch in production *| [#82003](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82003) | Target Launch in Production ~~May 28, 25~~ - updated to end of June due to DMC bandwidth constraints |**[UX+FE+BE]**   | Due to launch blocking items the launch was delayed into the next sprint, but will launch in the first sprit of the next quarter. |
| QP5 | **One Thing Per Page** | [#106610](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106610)|Target launch end of quarter | **[UX+FE]** Plan to extract 1TTP from VHA Payment History work to expedite implementation | Partially Complete, UX has completed their portion and FE had to shift to Digital Dispute. This will finish development and release early next quarter. |
| QP6 | **Pay.gov Hosted Collection Page (HCP) for Overpayments:** Discovery & Design Prototyping *| [#105733](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105733)  |  |**[UX]**  | Complete for phase 1 - UX needs to review with ENG on the implimnetation verification. |
| QP7 | **Mobile App:** Collaborate with MFS (Mobile Feature Support) team to add overpayment debt information into mobile app experience |  [#106209](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106209) | complete initial discovery by end of quarter |**[UX]** MFS team responsible for implementation - FM team with expertise in finance space to collaborate closely with MFS | Complete, any additional support will be captured in the Indirect Initiative Priority Work epic #112855 next quarter.  |
| QP8 | **Veteran Request for Hardship Suspension (VBA):** Discovery & Design Prototyping * | [#106207](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106207) |  | **[UX]** | Incomplete - UX is finishing the last 2 tickets for design and user flow. |



**Stretch Goals (Known dependencies may impact)**
| Priority ID | Description | S.Epic | Relevant Dates |  Notes |  End of Quarter Status |
|-------------|---------------|-----------------|---------------|  ---------------| ---------------| 
| QP9 | **VHA Repayment Plan (10-323)**:  Discovery & Design Prototyping *| [#106208](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106208)|   |**[UX]**   ||
| QP10| **Payment History (VHA):** Progress development efforts and continue align with Lighthouse * | [#18859](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18859) | Goal to launch June 2025 or sooner | **[UX+FE+BE]** Tremendous User Value! Dependent on Lighthouse team collaboration to build API|   ||

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [ ] VA PO approved end of quarter status of Quarterly Goals (0x/xx/25)

## Sprint Goals - Sprint: 5 [3/26/25 - 4/8/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Complete the March Medallia Report| QPX |--|04/08/2025|Completed|
|UX: Discovery meeting with Domo Dashboard Users| FY25Q2 QP4 |--|04/07/25|Completed |
|UX: Finalize Medallia analytics data reports to run to inform satisfaction metrics| FY25Q2 QP4 |-- | 04/07/25 | Completed |
|ENG: Initial PR submitted for VA notify callback | QP1 |--|03/28/25|Completed|
|ENG: Address the “must” accessibility feedback for the One VA Debt Letter | QP2 |--|04/07/2025|Completed|
|ENG: Restart Digital Dispute work in preparation for Q3 priorities | QP3 |--|03/28/25|Completed|
|ENG: Updates to FSR based off Veteran feedback such as Removal of $70K limit to retirement funds | QPX |--|03/28/25|Completed|
|ENG: Continue Josh’s access to critical systems and onboarding tasks | QPX |--|04/01/25|Completed|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (03/24/25)
 - [X] VA PO & COR sent the Sprint Goals (03/24/25)
 - [X] VA PO approved the Sprint Goals (03/25/25)
 - [X] VA COR approved the Sprint Goals (03/25/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [ ] Any Additional details about goals **not** completed will be documented here

## Sprint Goals - Sprint: 6 [4/9/25 - 4/22/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Refine templates for Zero Silent Failure (Emails 1 & 2)| QP1 |--|4/22/25|Completed|
|UX: Create prototypes for Wizard & Digital Dispute Usability Study| QP3 QP4 |--|4/22/25|Completed|
|UX: Complete the Research plan step 1 for Wizard & Digital Dispute (Write guides) | QP3 QP4 |--|4/22/25|Completed|
|ENG: Complete dev work for One VA debt letter and collaborate with Platform on PR’s| QP2 |--|04/21/25|Completed|
|ENG: Complete the dev work for the Wizard new flow and be prepared for the release, pending CAIA Pages| QP3 |High priority bug ticket and new feature feedback work |-04/22/25|Incomplete|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (04/07/25)
 - [X] VA PO & COR sent the Sprint Goals (04/07/25)
 - [X] VA PO approved the Sprint Goals (04/09/25)
 - [X] VA COR approved the Sprint Goals (04/09/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [X] Any Additional details about goals **not** completed will be documented here
- ENG: Complete the dev work for the Wizard new flow and be prepared for the release, pending CAIA Pages
  - Work for a high priority bug fix (adding additional items issue #107612) and feedback from staging review for One Debt Letter took priority over this goal
  - The work is now scheduled to be completed next sprint

## Sprint Goals - Sprint: 7 [4/23/25 - 5/6/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Wizard & Digital Dispute Usability Study is submitted for approval by Platform. | QP3 QP4 |--|05/05/25|Completed|
|UX: Process of recruiting Veterans with Perigean for Wizard & Digital Dispute Usability Study begins. | QP3 QP4 |--|05/06/25|Completed|
|UX: Begin discovery process to understand Pay.gov ask, business needs, and constraints. | QP6 |--|05/05/25|Completed|
|ENG: Coordinate with DMC to meet to discuss zero silent failure email next steps. | QP1 |Blocked by DMC|--|Incomplete|
|ENG: Coordinate with Huron to meet to discuss zero silent failure email next steps. | QP1 |--|04/22/2025|Completed|
|ENG: Launch One VA Debt Letter into production | QP2 |--|04/28/2025|Completed|
|ENG: Launch Wizard into production | QP3 |--|05/06/25|Completed|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (04/21/25)
 - [X] VA PO & COR sent the Sprint Goals (04/22/25)
 - [X] VA PO approved the Sprint Goals (04/22/25)
 - [X] VA COR approved the Sprint Goals (04/22/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [X] Any Additional details about goals **not** completed will be documented here
- **ENG: Coordinate with DMC to meet to discuss zero silent failure email next steps.**
     - The DMC IDT team does not have the capacity to assist the team with this effort.
     - The Government PO is working with DMC IDT management to determine prioritization of this effort and others.

## Sprint Goals - Sprint: 8 [5/7/25 - 5/20/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Complete the monthly Medallia report | QPX |--|05/20/25|Completed|
|UX: Finish recruiting Veterans with Perigean for Wizard & Digital Dispute Usability Study and for internal pilot sessions | QP3 QP4 |--|05/13/25|Completed|
|UX: Determine UX limitations on pay.gov | QP6 |--|05/12/25|Completed|
|UX:  Launch Wizard & Digital Dispute Usability Study | QP3 QP4 |--|05/14/25|Completed|
|UX: Collaborate with Mobile Feature Support (MFS) Team | QP7 |--|05/20/25|Completed|
|ENG: Coordinate kickoff call with Pay.gov team to understand scope | QP6|--|05/12/25|Completed|
|ENG: Continue efforts on Digital Dispute | QP4 |--|05/20/25|Completed|
|ENG: Define remaining work on One thing per page effort |QP5|--|05/16/25|Completed|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (05/05/25)
 - [X] VA PO & COR sent the Sprint Goals (05/05/25)
 - [X] VA PO approved the Sprint Goals (05//06/25)
 - [X] VA COR approved the Sprint Goals (05/07/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [ ] Any Additional details about goals **not** completed will be documented here

## Sprint Goals - Sprint: 9 [5/21/25 - 6/3/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Complete R&S (Wizard) and Digital Dispute Study interviews and publish topline summary of early findings (before the full report). | QP3 QP4 |--|05/29/25|Completed|
|UX: Begin drafting the research plan for pay.gov study. | QP6 |--|06/02/25|Completed|
|UX: Refine Pay.gov user flows based on stakeholder feedback and tech guidelines. | QP6 |--|06/02/25|Completed|
|ENG: Implement the ability to use international phone numbers in the portal. | N/A |--|--|Incomplete|
|ENG: Complete at least 5 FE Digital Dispute tickets (66% of the remaining FE tickets for the initiative). | QP4 |--|06/03/25|Incomplete (3 of 5 tickets completed)|
|ENG: Define, request and begin setup for any provided credentials from pay.gov to be added to the portal environment. |QP6|--|06/03/25|FM team Completed initial steps)

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (05/19/25)
 - [X] VA PO & COR sent the Sprint Goals (05/20/25)
 - [X] VA PO approved the Sprint Goals (05//20/25)
 - [X] VA COR approved the Sprint Goals (05/20/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [X] Any Additional details about goals **not** completed will be documented here
  - **Goal "ENG: Complete at least 5 FE Digital Dispute tickets (66% of the remaining FE tickets for the initiative)."** Due to a change in approach mid-sprint from DMC (JSON to PDF), the scope of the tickets originally pulled into the sprint changed, causing additional ticket requirements and resulting in not all of the anticipated items being closed. These are currently in progress and expected to close early in Sprint 10.
  - **Goal "ENG: Define, request and begin setup for any provided credentials from pay.gov to be added to the portal environment."** Engineering requested and began the setup process; however no credentials were able to be provided from pay.gov this sprint. The team completed their portion. However, additional work will be needed once credentials are provided.
  -   **Goal "ENG: Implement the ability to use international phone numbers in the portal."** This work is currently blocked by the Authenticated Expereince Platform team. They reported they need to update the Front End form component before we can proceed with this work. 

## Sprint Goals - Sprint: 10 [6/4/25 - 6/17/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Complete the readout for R&S/Digital Dispute study |QP3 QP4|--|6/12/25|Completed|
|UX: Prepare the presentation & present the R&S/Digital Dispute study readout |QP3 QP4|--|6/12/25|Completed|
|UX: Complete the Monthly May Medallia report | QPX |--|6/17/25|Completed|
|UX: Make updates to the designs based off the Midpoint review feedback for 1TPP (One Thing Per Page) | QP5 |--|6/17/25|Completed|
|ENG: Complete the DD (Digital Dispute) PDF generation for submission functionality and review with UX to confirm design| QP4 |Test suite issues - see more information below.|6/18/25|Incomplete|
|ENG: Front End to complete the functionality of sending the Back End PDF’s for DD submissions| QP4 |The above ENG goal needs to be complete before this can take place.|6/18/25|Incomplete|
|ENG: Back End to create an endpoint that can receive a PDF blob and other relevant data from the front end allowing the acceptance of the DD PDF submissions | QP4 |--|6/12/25|Completed|
|ENG: Complete PSIRR (Privacy, Security, Infrastructure Readiness Review) Collab Cycle stage for DD | QP4 |--|6/17/25|Completed|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (06/3/25)
 - [X] VA PO & COR sent the Sprint Goals (06/3/25)
 - [X] VA PO approved the Sprint Goals (06/9/25)
 - [X] VA COR approved the Sprint Goals (06/9/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [X] Any Additional details about goals **not** completed will be documented here
  - For goal: ENG Complete the DD (Digital Dispute) PDF generation. We are dependent on a test suite to finish validation on this goal. The Cypress test suite for vets-website crashes both locally and in CI whenever code tries to import.

## Sprint Goals - Sprint: 11 [6/18/25 - 7/1/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Draft the design Ideation for Hardship suspension based off the 6/17 kickoff meeting. | QP8 |--|07/01/25|Completed|
|UX: Create initial mockups for the Pay.gov Authenticated Copay path. | QP6 |--|06/30/25|Completed|
|UX: Review staging implementation of DD with ENG prior to launch. | QP4 |--|06/25/25|Completed|
|ENG: Prepare the QA Artifacts for the Digital Debt Dispute staging review.| QP4 |--|06/23/25|Completed|
|ENG: Finish creating and run the E2E tests for validating the Digital Debt Dispute prior to launch.| QP4 |--|06/26/25|Completed|
|ENG: Implement any launch required updates based off of the UX research for Digital Debt Dispute. | QP4 |--|--|Incomplete|
|ENG: Launch Digital Debt Dispute. | QP4 |--|--|Incomplete|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals (06/16/25)
 - [X] VA PO & COR sent the Sprint Goals (06/16/25)
 - [X] VA PO approved the Sprint Goals (06/16/25)
 - [X] VA COR approved the Sprint Goals (06/17/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [X] Any Additional details about goals **not** completed will be documented here
- For this goal: "Implement any launch required updates based off of the UX research for Digital Debt Dispute," we did not complete all updates.
- For this goal:"ENG: Launch Digital Debt Dispute,"  the launch was delayed due to launch-blocking Staging Review feedback.
---

</details>

## Quarterly Priorities for FY25Q2 (Jan, Feb, Mar 2025)  
*Quarter Sprints include 1, 2, 3, & 4*

<details>
  
| Priority ID | Description | S.Epic |Status | Notes | Launch in Production Goal |   End of Quarter Status |
|-------------|---------------|-----------------|---------------|  ---------------|  ---------------|    ---------------| 
| QP1 | Establish One VA Debt Letter PDF in production| [#84175](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84175) | Discovery | Legislative Requirement:Veterans Benefit Transition​ Act of 2018 ( year 7) |  March 2025 |In Progress - The accessibility requirements for this effort were more complex than expected, requiring additional time and testing to meet required compliance. This work will continue and release in production in Q3.|
| QP2 | Launch Wizard updates in production| [#48133](https://github.com/orgs/department-of-veterans-affairs/projects/1514/views/6?pane=issue&itemId=88349041&issue=department-of-veterans-affairs%7Cva.gov-team%7C48133)| In progress |  Dependent on CAIA team collaboration |  March 2025|In Progress - CAIA has shifted development implementation plan. This work will continue and release in production in Q3.|
| QP3 | Payment History (VHA)  | [#18859](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18859) | TBD |  TBD |  June 2025 or sooner|In Progress - Contractual changes with the Lighthouse team caused delays in this work. |
| QP4 | CSAT / Medallia Work  | [#102194](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102194) | In Progress |  Collaborating with Contact Center Team |   N/A |Completed|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] VA PO approved end of quarter status of Quarterly Goals (05/15/25)

## Sprint Goals - Sprint: 1 [1/24/25 - 2/11/25]  
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
|UX: Mockup quick reference guide| QPX |--| 2/04/25| Complete |
|UX: Work with Contact Center to improve Medallia data| QP4 |--| 2/11/25 | Complete |
|UX: Complete the Feb Medallia Report| QP4 |--| 2/11/25 | Complete |
|ENG: The Digital Dispute process is live on staging| QPX |--| 2/04/25 | Complete |
|ENG: SharePoint errors have a more descriptive notification and are reported to ENG for analysis| QPX |--|2/07/25|Complete|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals
 - [X] VA PO & COR sent the Sprint Goals
 - [X] VA PO approved the Sprint Goals
 - [X] VA COR approved the Sprint Goals
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [ ] Any Additional details about goals **not** completed will be documented here



## Sprint Goals - Sprint: 2 [2/12/25-2/25/25] 
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
| UX: Define the path (PDF or HTML) version for the one VA Debt letter | QP1 |--|02/25/25|Completed|
| UX: Finalization of wizard content mockups and prototypes for research and studies | QP2 |Blocked by CAIA|02/20/25|Blocked|
| UX: Define UX practice process and vision for 2025 | N/A |--|2/25/25|Completed|
| UX: Complete one of the prior Medallia reports | QP4 |--|02/25/25|Completed|
| ENG: Have a clear path for one debt letter by define how the letter will be technically generated | QP1 |--|2/24/25|Completed|
| ENG: Have an “Alpha” version of the Wizard live on staging | QP2 | CAIA has shifted development implementation plan | 02/24/25 | Blocked |
| ENG: Harden the FSR – Have fewer issues and a higher confidence in data integrity by auditing parameters sent from frontend| N/A |--|2/24/25|Completed|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals
 - [X] VA PO & COR sent the Sprint Goals
 - [X] VA PO approved the Sprint Goals
 - [X] VA COR approved the Sprint Goals
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [X] Any Additional details about goals **not** completed will be documented here
- **ENG: Have an “Alpha” version of the Wizard live on staging**
  - Our front end team worked on implementing the initial (bare bones) version of the wizard based on a "sub task" design where veterans answer a series of questions to determine if the FSR was the appropriate for resolving their issue. The effort has been blocked pending additional guidance from the CAIA team since we may be continuing with an alternate approach.



## Sprint Goals - Sprint: 3 [ 2/26/25-3/11/25] 
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
| UX: Write VHA Payment History stakeholder and SME feedback survey and distribute for feedback | QP3 |--|3/7/25|Completed|
| UX: Complete the Monthly Medallia report| QP3 |--|3/11/25|Completed|
| UX: Create a Q3 2024 retrospective report for Custom Survey Medallia feedback | QP3 |--|3/11/25|Completed|
| ENG: Enable the feature flag for the activation of the one VA debt letter presentation button (Staging) | QP1 |--|2/19/25|Completed|
| ENG: Debts and copay data appear on the One VA debt letter (Staging) | QP1 |Awaiting PR approval|2/28/25|Blocked|
| ENG: Payment history feature work has begun development | QP3 |--|2/28/25|Completed|
| ENG: Veterans are presented with the correct contact information (phone number updates) | N/A |--|02/27/25|Completed|

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals
 - [X] VA PO & COR sent the Sprint Goals
 - [X] VA PO approved the Sprint Goals
 - [X] VA COR approved the Sprint Goals
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [ ] Any Additional details about goals **not** completed will be documented here
      



## Sprint Goals - Sprint: 4 [3/12/25-3/25/25]
| Sprint Goal | QP Goal  | Reason if Not Complete | Update Date | End of Sprint Status |
|--|--|--|--|--|
| UX: Analyze VHA Payment History stakeholder and SME feedback survey and share with Government PO |QP3|--|03/20/25|Completed|
| UX: Medallia, CSAT, and KPI discovery and alignment (part 2)|QP4|--|03/25/25| Completed
| UX: Create final retrospective report for Custom Survey Medallia feedback|QP4|--|03/25/25|Completed|
| UX: Improve FSR questions comprehension by providing improvements, based on Veteran feedback (mockups only to share with SMEs)|N/A|--|03/25/25|Completed|
| ENG: Complete the API integration to populate the Copay and debt data on the one VA Debt Letter | QP1 |--|03/17/25|Completed|
| ENG: Complete the analysis of the One debt letter accessibility and define the approach  | QP1 |--|03/25/25|Completed|
| ENG: Complete the Debt Resolve Page updates in staging and PR submitted  | N/A |--|03/24/25|Completed|
| ENG: Research and resolve all bugs that were moved into or discovered in the sprint | N/A |--|-03/25/25|Completed|
| ENG: Establish Silent Failure email communication for failed FSR submissions | N/A |--|03/24/25|Completed|
| ENG: Align with DMC IDT on technical requirements for Digital Debt Dispute initiative | N/A |--|03/12/25|Completed| 

**_Approvals:_** _(sent via email but approvals tracked here)_
 - [X] Ready to be sent for approvals
 - [X] VA PO & COR sent the Sprint Goals (03/10/25)
 - [X] VA PO approved the Sprint Goals (03/11/25)
 - [X] VA COR approved the Sprint Goals  (03/11/25)
 
**_Delivery + Notes:_**
- [X] All goals have been updated in the sprint chart
- [X] Any Additional details about goals **not** completed will be documented here

</details>
