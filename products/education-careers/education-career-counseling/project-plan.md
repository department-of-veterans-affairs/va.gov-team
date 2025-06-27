# Project Plan 

## Chapter 36

#### **Objective** 

This document is meant to serve as a planning doc for the work the IIR team is doing to enhance the Chapter 36 application experience by bringing this product into alignment with the modern VA digital standards, in sync with the latest paper format, and in compliance with the necessary monitoring, so that the team can address any real-time issues as Veterans use this product. IIR will track our work here so it is easy for the team to stay up to date with the progress that is being made. All tickets related to this project are…- [EPIC Link](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=2663136070&issue=department-of-veterans-affairs%7Cva-iir%7C1240) .

#### **Problem Statement**

There are many online VA forms, which the VA needs to keep in compliance and in sync with one another so that they are all uniform.  It is imperative that this form is brought up to current VA v3 component and accessibility standards to match the VA forms that are currently in compliance, and also for the benefit of the users.

#### **Veteran Goals**

- Veterans and their dependents seeking free educational and career guidance, planning, and resources 

#### **Risks**

* Not be in sync with the stakeholders for their paper form version  
* Not be up to par with accessibility requirements so that all users can have a seamless experience  
* Create a UX that actual users are not happy with (not weed out ineligible applicants prior to submission if we don’t have sub-task format or decision tree)

#### **Product Notes / Discussion:**

- 5/15 Notes:   
  - We have 3 separate initiatives  
    - Building the actual form  
      - FE / BE: Project plan is in progress  
        - FE Plan \- 80% complete \- Pending Cpt 31 Staging review \- NO TICKETS NEEDED ATM  
        - BE Plan \- In Progress \-  Slotted for Sprint 19; Ticket in Refined and Ready  
    - Removing wizard from the interstitial page \- Create Epic  
      - Dev tickets don’t exist  
      - Mike to create dev tickets  
    - ~~Updating Content on Eligibility Page Create Epic to track timeline whether it is IIR or CIA \- even if it doesn’t have tickets.~~  
      - ~~Currently negotiating whether IIR does this work with CIA~~  
      - ~~In the event IIR does this work; Mike to create tickets. If not, pause initiative~~  
  - ~~Decision to separate Interstitial and Eligibility work into separate epics; with the goal of surfacing and communicating dependencies~~   
  -   
  - 

#### **Success Metrics**

*Use this section to document how you plan to measure the success of this project. What metrics do we care about? Will these metrics tie back to the problem statements? Do these metrics tie back to OCTO OKRs?*

- 

#### **Project Priorities**

*Use this section to document the project priorities. We can’t do everything at once so what are the most important priorities?*

- [ ] [Engineering Project Plan](https://docs.google.com/document/d/1rFL28t8NtHtwzKbp7PGmY0UdtrhS95dAqb-hP9eiYQ8/edit?tab=t.0)  
- [x] ~~Get UX mocks for new Interstitial page created~~  
- [ ] Schedule Staging Review via Collab Cycle  
- [x] ~~create a click through prototype~~  
- [x] ~~Sync with CAIA office hrs/slack to seek feedback on Sub-Task format prior to collab cycle~~  
      - [x] ~~Talk with Jeff around Sub-task format and next steps (do we move forward, or do away with this and just place qualifying context in the content as suggested by Mikki)~~  
- [x] ~~Zero Silent Failure work (stages 2-5) to add claim in-progress emails, update confirmation email, and update the confirmation page. Silent failure flow~~

- [ ] Lock pre-filled bio data from editing to prevent claimants from changing their name, DOB, or ssn on their application. This info should be changed at the profile level

- [ ] Understand complete user experience on VA.gov and identify areas for improvement. Example: Prefill military history.

- [ ] PCPG Form Updates: Update the form to align to the latest version of the pdf and v3 design system components. VA.gov is generating the Nov 2015 pdf and the most recent version is Jun 2023\. See full list of form pdf versions here.

      - [ ] Updated designs and flows have gone through midpoint review of the Collaboration Cycle. CAIA Intake ticket and Collab Cycle ticket.  
              
- [ ] Determine if a product guide should be created for the Call Center before form updates are made or after. Currently no guide exists, and guides are typically created as part of the collaboration cycle when new forms are launched or updated.

- [ ] Implement redirects to complete form number change. It was changed from 28 to 25 in 2023 and then to 27 in 2024\. Redirects were implemented for the change from 28 to 25, but not for the change from 25 to 27\. Backend code also needs to be renamed.

#### **Engineering Project Plan**

**Note: This is a draft plan and may require additions when we finally complete Chapter 31 and move on to Chapter 36\.**

*FE Non-dependent tickets that can be started or worked on in parallel by multiple engineers (following \#1667)*

* ***Set up initial Chapter 36 form app \[FE\] [\#1667](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108615004&issue=department-of-veterans-affairs%7Cva-iir%7C1667)***  
* Create Introduction Page Container as rendered in the designs \[FE\] [\#1668](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108615839&issue=department-of-veterans-affairs%7Cva-iir%7C1668)  
* Set up progress bar version with text \[FE\] [\#1778](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=115149626&issue=department-of-veterans-affairs%7Cva-iir%7C1778)  
* **Create draft version of the data contract \[FE\] [1779](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=115150054&issue=department-of-veterans-affairs%7Cva-iir%7C1779)**  
* \[SPIKE\] Claimant Info Chapter: How to add and use new info card design and discover dependencies \[FE\] [\#1669](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108617492&issue=department-of-veterans-affairs%7Cva-iir%7C1669)  
* Claimant Info Chapter: Create Mailing Address and Contact Information pages \[FE\] [\#1670](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108618447&issue=department-of-veterans-affairs%7Cva-iir%7C1670)  
* Claimant Info Chapter: Create Training and Tell Us Who You Are pages \[FE\] [\#1671](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108620462&issue=department-of-veterans-affairs%7Cva-iir%7C1671)  
* Vet/SM Info Chapter: Create Vet/SM Info and Mailing Address pages \[FE\] [\#1672](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108621369&issue=department-of-veterans-affairs%7Cva-iir%7C1672)  
* Vet/SM Info Chapter: Create Contact Information and Training pages \[FE\] [\#1674](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108627235&issue=department-of-veterans-affairs%7Cva-iir%7C1674)  
* Military History Chapter: Create Dependent Spouse or Child Active Duty Status page \[FE\] [\#1675](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108628985&issue=department-of-veterans-affairs%7Cva-iir%7C1675)  
* Military History Chapter: Create Dependent Spouse or Child, Current Service Period and Most Recent Service Period pages \[FE\] [\#1676](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108629488&issue=department-of-veterans-affairs%7Cva-iir%7C1676)  
* Military History Chapter: Create Vet/ SM Active Duty Status, Current Service Period, and Most Recent Service Period pages \[FE\] [\#1677](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108629976&issue=department-of-veterans-affairs%7Cva-iir%7C1677)


*BE Non-dependent tickets that can be started or worked on in parallel by multiple engineers*

*FE Dependent tickets that are connected to those above or to completeness of the form (multiple engineers if coordinated)*

* Claimant Info and Vet/SM Info Chapters: Add conditionality and text fields to Training pages \[FE\]  
* Claimant Info Chapter: Add conditionality to Tell Us Who You Are page \[FE\]  
* Military History Chapter: Add conditionality to connect prior chapter pages to Military History Chapter pages \[FE\]  
* Military History Chapter: Add conditionality to determine whether Current Service or Most Recent Service pages will display \[FE\]  
* Set up save-in-progress functionality \[FE\] [\#1673](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=108621887&issue=department-of-veterans-affairs%7Cva-iir%7C1673)  
  * This might be dependent but probably best placed here.  
* Design a cutover notice for the old site \[UX\]   
* Add cutover notice to the old site \[FE\]   
* Create submit and transformer functions \[FE/BE Support\]   
  * Although maybe not a hard dependency, this may be dependent on completing form page and conditionality tickets for fuller testing on staging.  
  * Also may have cross dependency on \#1481  
* Create Confirmation Page Container as rendered in the designs \[FE\]  
  * Unclear at the beginning if this has dependencies on our form page, submit, and schema tickets.  
  * Let’s save this towards the end.  
* Create E2E tests for our Chapter 36 form \[FE\]   
  * Dependent on the form being complete.  
  * **This may need to be broken up into multiple tickets (recommended by Nick based on prior E2E tickets, could be best to break up).**  
* Create form config tests \[FE\]   
  * Dependent on the config being complete/mostly complete  
* Create container tests \[FE\]   
  * Dependent on the Introduction and Confirmation pages being complete  
* Create pages directory tests \[FE\]   
* Final testing review in prep for Staging Review \[FE\]   
  * Dependent on all previous unit testing tickets being complete  
* Check Review Page \[FE\]   
  * Dependent on us completely the form page and conditionality tickets.  
  * Should be done towards the end of main form completion.  
* Delete old app from vets-website  
* Delete old SIP data \[BE\] 

*BE Dependent tickets that are connected to those above or to completeness of the form (multiple engineers if coordinated)*

#### **Estimated Timeline**

| IIR Team Sprint Schedule |  |  |
| ----- | :---- | :---- |
| *Current Sprint*  |  | *UX determining feasibility for benefit recommendation*  |
| *Next Sprint* | *6/21 \- 7/4* | *Create project plan and tickets* |
| *Following Sprint* | *7/5 \- 7/18* | *Complete Goal 1* |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

**Resources**

* [The way to manual submit a form](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/remediation.md#manual-upload-process-with-vba-ofo) (as was needed in the case of [1495: Ch. 31 Potential Zero Silent Failure: Issue sending "Action Needed" Email for VR\&E](https://github.com/department-of-veterans-affairs/va-iir/issues/1495))
