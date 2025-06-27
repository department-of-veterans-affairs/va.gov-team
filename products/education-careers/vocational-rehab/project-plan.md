# Project Plan 

## Chapter 31

#### **Objective** 

This document is meant to serve as a planning doc for the work the IIR team is doing to enhance the Chapter 31 application experience by bringing this product into alignment with the modern VA digital standards, in sync with the latest paper format, and in compliance with the necessary monitoring, so that the team can address any real-time issues as Veterans use this product. IIR will track our work here so it is easy for the team to stay up to date with the progress that is being made. All tickets related to this project are…- [EPIC Link](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=2663133454&issue=department-of-veterans-affairs%7Cva-iir%7C1239) .

#### **Problem Statement**

There are many online VA forms, which the VA needs to keep in compliance and in sync with one another so that they are all uniform.  It is imperative that this form is brought up to current VA v3 component and accessibility standards to match the VA forms that are currently in compliance, and also for the benefit of the users.

#### **Veteran Goals**

- Service members or Veterans that have a service-connected disability seeking job training, education, employment accommodations, resume development, and job-seeking skills coaching

#### **Risks**

* Not be in sync with the stakeholders for their paper form version  
* Not be up to par with accessibility requirements so that all users can have a seamless experience  
* Create a UX that actual users are not happy with (not weed out *ineligible* applicants prior to submission if we don’t have sub-task format *or* decision tree)

#### **Success Metrics**

*Use this section to document how you plan to measure the success of this project. What metrics do we care about? Will these metrics tie back to the problem statements? Do these metrics tie back to OCTO OKRs?*

- 

#### **Project Priorities**

*Use this section to document the project priorities. We can’t do everything at once so what are the most important priorities?*  
[Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74141)

- [ ] [FE Engineering Project Plan](https://docs.google.com/document/d/1uWtl2pVooX2qTtlOe-HoUiKer-Q0i8QuUOUAOK3xAZM/edit?usp=sharing)  
- [x] ~~Get UX mocks for new Interstitial page created~~  
- [x] ~~Schedule Staging Review via Collab Cycle~~  
- [x] ~~create a click through prototype~~  
- [x] ~~Sync with CAIA office hrs/slack to seek feedback on Sub-Task format prior to collab cycle~~  
      - [x] ~~Talk with Jeff around Sub-task format and next steps (do we move forward, or do away with this and just place qualifying context in the content as suggested by Mikki)~~  
- [x] ~~Zero Silent Failure work (phases 2-5) to add claim in-progress emails, update confirmation email, and update the confirmation page. Silent failure flow.~~  
        
- [x] ~~Lock pre-filled bio data from editing to prevent claimants from changing their name, DOB, or ssn on their application. This info should be changed at the profile level.~~  
        
- [ ] VRE Form Updates: Update the form to align with the latest version of the PDF and v3 design system components. VA.gov is generating the Nov 2019 PDF, and the most recent version is Apr 2024\. See full list of form pdf versions here.  
        
      - [x] ~~Updated designs and flows have gone through midpoint review of the Collaboration Cycle. CAIA Intake ticket and Collab Cycle ticket.~~

      

      - [x] ~~Note: Regarding the ZSF initiative, there have been ongoing talks about requiring email addresses to alert claimants about silent failures. If your team picks up this work and the decision is to require emails, make sure you make the VR\&E SMEs aware of this change for homeless claimants.  ~~  
      - [x] ~~Before the ZSF initiative, the SMEs agreed not to require email if claimants did not have a mailing address.~~

      

- [ ] Once the form is updated, update the form payload being sent to the RES system to add the new fields for international phone number and comms preferences. Test with the RES team.  
        
- [ ] Confirm if email address and/or phone should be required on the VRE form for homeless Veterans. New wireframes do not require it, but the live form does.  
      - [ ] [Ian Hilton](mailto:ian@oddball.io)to address this:  
            •  Looking at the Figma design (which has gone through collab cycle and CAIA review) and phone is not required in the design.  
            • That said, it is a required field in the extant form so…  
            

May 20, 2025 \- Wednesday Meeting Topics

- [x] ~~Staging Review Scheduled \- How to determine date to pick~~  
- [ ] Privacy / Security Review   
      - [ ] Ticket Exists \- (add number)  
- [ ] Analytics  
      - [ ] Review  
      - [ ] Implementation  
            - [ ] Data Dog Engineering Monitoring / Logging \- probably not already in place if not \- need a ticket  
            - [x] ~~FE GA \- Likely baked in \- confirm this \- if available we should be good to go~~  
                  - [x] ~~Confirm existing GA \- before launch~~  
      - [ ] Measurements  
            - [ ] Successful Submissions  
            - [ ] Page Views  
            - [ ] Saved / Abandoned Submissions  
            - [ ] Errors  
                  - [ ] What GA is currently giving us…  
                        - [ ] 

| /careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/start | 17 | 12 |  |
| :---- | ----- | ----- | ----- |
| 2 | /careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/introduction | 6 | 9 |
| 3 | /careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/review-and-submit | 4 | 1 |
| 4 | /careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/veteran-contact-information | 2 | 4 |
| 5 | /careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/ | 1 | 1 |
| 6 | /careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/communication-preferences |  |  |

      - [ ] Privacy Policy Before and After effects  
            - [ ] Track numbers for how we reduced the amount of submissions w/out privacy policy consent (would need to collect before and after numbers for this), thereby impacting VA stakeholders' workload;   
            - [ ] how modernizing the form helped more users reach form completion (just a hypothesis); any other data points that could inform form usage and potential future iterations, etc.  
      - [ ] ~~An analytics setup would require making sure the workings are in place in both Google Analytics plus any event trackers in the code. Can we include this work? \- Duplicate see above~~  
- [x] ~~BE Tickets in planning doc \- not currently represented \- are there any? Get them in there?~~  
      - [x] ~~All exist in the BL \- View FE work as they are tethered~~  
- [x] ~~Break out Epics  \- Ideas \- TBD \- not there yet, will reorganize in Sprint 19 as needed~~  
      - [x] ~~Collab Cycle Feedback tickets for above checkpoints \- Probably not going to do this~~  
      - [x] ~~Launch Prep / Post Launch Tickets~~  
            - [x] ~~Create Launch Epic~~  
            - [x] ~~Create Post Launch Epic~~

# Create new VR\&E form app with updated components: Engineering Project Plan

**Note: not yet inclusive of Staging Review work/tickets, Eligibility Page tickets (if we’re including), and BE is not included overall.**

**Non-dependent tickets that can be started or worked on in parallel by multiple engineers**

* ~~Create Introduction Page Container as rendered in the designs \[FE\]~~ [\#1472](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1472&pane=issue&itemId=99591057&issue=department-of-veterans-affairs%7Cva-iir%7C1472)  
* ~~\[SPIKE\] How to deprecate old form application \[FE\] [\#1473](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1473&pane=issue&itemId=99591856&issue=department-of-veterans-affairs%7Cva-iir%7C1473)~~  
  * ~~This may be cancelled if we are not responsible for deprecating old form, but may be required if we have to release new form.~~  
  * **~~This would produce additional implementation tickets.~~**  
* ~~\[SPIKE\] Do we need to maintain the current pre-application wizard and orientation app? \[FE\]~~ [\#1474](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1474&pane=issue&itemId=99592153&issue=department-of-veterans-affairs%7Cva-iir%7C1474)  
  * ~~This may be canceled if these features are no longer required for the new form app version.~~  
  * ~~This would produce additional implementation tickets.~~  
  * **~~(seems like we’re canceling this after feedback from Ian)~~**  
* ~~Create Your Information Pages \[FE\]~~ [\#1475](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1475&pane=issue&itemId=99592389&issue=department-of-veterans-affairs%7Cva-iir%7C1475)  
* ~~Create Contact Information Pages: First Mailing Address and Final Contact Info Pages \[FE\] [\#1476](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1476&pane=issue&itemId=99592623&issue=department-of-veterans-affairs%7Cva-iir%7C1476)~~  
* ~~Create Contact Information Pages: Moving and Moving Address Pages \[FE\] [\#1567](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=103563601&issue=department-of-veterans-affairs%7Cva-iir%7C1567)~~  
* ~~Set up save-in-progress functionality \[FE\] [\#1478](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1478&pane=issue&itemId=99593111&issue=department-of-veterans-affairs%7Cva-iir%7C1478)~~  
  * ~~This might be dependent but probably best placed here.~~  
* ~~Get initial additions to form on staging and discussion with design \[FE\] [\#1506](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=101601964&issue=department-of-veterans-affairs%7Cva-iir%7C1506)~~  
* ~~Set up Code Owners for top level application directory \[FE\] [\#1512](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=101856138&issue=department-of-veterans-affairs%7Cva-iir%7C1512)~~  
* ~~\[SPIKE\] Could we change the progress bar format to counters (aka "bubbles") when no other form uses that design yet \[FE\] [\#1587](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/47?sliceBy%5Bvalue%5D=john-rodriguez-adhocteam&pane=issue&itemId=103900886&issue=department-of-veterans-affairs%7Cva-iir%7C1587)~~  
* ~~\[SPIKE\] Unit testing strategy and tickets \[FE\] [\#1624](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/47?sliceBy%5Bvalue%5D=john-rodriguez-adhocteam&pane=issue&itemId=105924501&issue=department-of-veterans-affairs%7Cva-iir%7C1624)~~

**Dependent tickets that are connected to those above or to completeness of the form (multiple engineers if coordinated)**

* ~~Add conditionality to education field \[FE\] [\#1586](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/47?sliceBy%5Bvalue%5D=john-rodriguez-adhocteam&pane=issue&itemId=103898648&issue=department-of-veterans-affairs%7Cva-iir%7C1586)~~  
  * ~~Dependent on \#1475~~  
* ~~Create address checkboxes and conditionality \[FE\] [\#1568](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=103564735&issue=department-of-veterans-affairs%7Cva-iir%7C1568)~~  
  * ~~Dependent on \#1476 and \#1567.~~  
* ~~Set up conditionality between Contact Information fields and pages \[FE\] [\#1477](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1477&pane=issue&itemId=99592883&issue=department-of-veterans-affairs%7Cva-iir%7C1477)~~  
  * ~~Dependent on \#1476 and \#1567.~~  
* ~~Create submit and transformer functions \[FE/BE Support\] [\#1480](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1480&pane=issue&itemId=99593686&issue=department-of-veterans-affairs%7Cva-iir%7C1480)~~  
  * ~~Although maybe not a hard dependency, this may be dependent on completing form page and conditionality tickets for fuller testing on staging.~~  
  * ~~Also may have cross dependency on \#1481~~  
* **~~CANCELLED~~** ~~Create vets-json-schema for our VR\&E form \[FE\] [\#1481](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1481&pane=issue&itemId=99593830&issue=department-of-veterans-affairs%7Cva-iir%7C1481)~~  
* ~~Create Confirmation Page Container as rendered in the designs \[FE\] [\#1482](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1482&pane=issue&itemId=99594133&issue=department-of-veterans-affairs%7Cva-iir%7C1482)~~  
  * ~~Unclear at the beginning if this has dependencies on our form page, submit, and schema tickets.~~  
  * ~~Let’s save this towards the end.~~  
* ~~Create pages directory tests \[FE\] [\#1632](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=106933279&issue=department-of-veterans-affairs%7Cva-iir%7C1632)~~

  ---

* ~~Create E2E tests for our VR\&E form \[FE\] [\#1483](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1483&pane=issue&itemId=99594305&issue=department-of-veterans-affairs%7Cva-iir%7C1483)~~  
  * ~~Dependent on the form being complete.~~  
  * **~~This may need to be broken up into multiple tickets (recommended by Nick based on prior E2E tickets, could be best to break up).~~**  
* ~~Create form config tests \[FE\] [\#1630](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=106931407&issue=department-of-veterans-affairs%7Cva-iir%7C1630)~~  
  * ~~Dependent on the config being complete/mostly complete~~

---

**SPRINT 19**

* ~~Create container tests \[FE\] [\#1631](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=106932583&issue=department-of-veterans-affairs%7Cva-iir%7C1631)~~  
  * ~~Dependent on the Introduction and Confirmation pages being complete~~  
* ~~Add cutover notice to the old site \[FE\] [\#1646](https://github.com/department-of-veterans-affairs/va-iir/issues/1646) PRIORITY~~  
* ~~Update education field to match old form and remove education field number page \[FE\] [\#1714](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=111414412&issue=department-of-veterans-affairs%7Cva-iir%7C1714)~~  
* ~~Pre-Submit Privacy Statement/Checkbox \[FE\] [\#1722](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=111758553&issue=department-of-veterans-affairs%7Cva-iir%7C1722)~~  
* ~~Save-in-progress \[BE\] [\#1721](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=111757676&issue=department-of-veterans-affairs%7Cva-iir%7C1721)~~  
* ~~\[BE\] Update endpoint to handle new VR\&E form data and validations [\#1552](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=103345279&issue=department-of-veterans-affairs%7Cva-iir%7C1552)~~  
    
  ---

  **SPRINT 20**  
* ~~Final testing review in prep for Staging Review \[FE\] [\#1633](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=106934119&issue=department-of-veterans-affairs%7Cva-iir%7C1633)~~  
  * ~~Dependent on all previous unit testing tickets being complete~~  
  * ~~Also dependent on \#1631~~  
* **~~PLACEHOLDER \- Nick create SIP followup ticket~~** ~~\#1768~~  
* ~~Check Review Page \[FE\] [\#1479](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1479&pane=issue&itemId=99593379&issue=department-of-veterans-affairs%7Cva-iir%7C1479)~~  
  * ~~Dependent on us completely the form page and conditionality tickets.~~  
  * ~~Should be done towards the end of main form completion.~~  
* Old and New Form Testing w/ Updated API \[FE/BE\] \#[1724](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=111768739&issue=department-of-veterans-affairs%7Cva-iir%7C1724)  
  * Dependent on FE work with submitting Payload correctly  
* ~~Design a cutover notice for the old site \[UX\] [\#1645](https://github.com/department-of-veterans-affairs/va-iir/issues/1645)~~  
* Setup Validations for new form payload \[BE\] [\#1748](https://github.com/department-of-veterans-affairs/va-iir/issues/1748)

  **SPRINT 21**

* \[FE\] Readiness Review [\#1753](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=113226631&issue=department-of-veterans-affairs%7Cva-iir%7C1753)  
* \[BE\] Readiness Review [\#1752](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=113226407&issue=department-of-veterans-affairs%7Cva-iir%7C1752)  
* ~~\[Product\] Readiness Review [\#1754](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=113227259&issue=department-of-veterans-affairs%7Cva-iir%7C1754)~~  
* \[FE\] Staging Review [\#1755](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=113228117&issue=department-of-veterans-affairs%7Cva-iir%7C1755)  
* \[BE\] Staging Review [\#1756](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=113228248&issue=department-of-veterans-affairs%7Cva-iir%7C1756)  
* ~~\[Product\] Staging Review [\#1757](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?pane=issue&itemId=113228373&issue=department-of-veterans-affairs%7Cva-iir%7C1757)~~

---

**Pre-Launch**

* Chapter 31 Release Rollback Strategy \[Optional\] \[FE\]\[BE\] \#[1681](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?filterQuery=-label%3Aepic+-status%3Adone+-sprint%3A%40previous+product%3A+chapter+31&pane=issue&itemId=108911576&issue=department-of-veterans-affairs%7Cva-iir%7C1681)  
  * Completed

**Launch**

* Point VR\&E URL to new app \[FE\] [\#1484](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?filterQuery=1484&pane=issue&itemId=99594450&issue=department-of-veterans-affairs%7Cva-iir%7C1484)  
  * Based on our decision to keep the same URL, we’ll change registry.json and the two apps’ manifests. This will put the new app in production at the URL that once pointed to the old app.

**Post Launch**

* Delete old app from vets-website [\#1652](https://github.com/department-of-veterans-affairs/va-iir/issues/1652)  
* Delete old SIP data \[BE\] [\#1653](https://github.com/department-of-veterans-affairs/va-iir/issues/1653)  
* Schema cleanup: Remove v1 schema validations in VR\&E \#[1684](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/24?filterQuery=-label%3Aepic+-status%3Adone+-sprint%3A%40previous+product%3A+chapter+31&pane=issue&itemId=109327344&issue=department-of-veterans-affairs%7Cva-iir%7C1684)  
* Implement endpoint updates and validations in new API \[BE\] [\#1749](https://github.com/department-of-veterans-affairs/va-iir/issues/1749)  
* Remove old API code \[BE\] [\#1750](https://github.com/department-of-veterans-affairs/va-iir/issues/1750)

#### **Order of Releases**

*Use this section to plan the order of releases. Is the scope of work for each release too big? Too small? What order makes the most sense?*

#### **Estimated Timeline**
* Cutoff Notice deploy June 1st, 2025
* Staging Review Code Freeze June 25th, 2025
* Staging Review July 1st, 2025
* Product Launch Aug 4th, 2025
    
**Resources**

* [The way to manual submit a form](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/remediation.md#manual-upload-process-with-vba-ofo) (as was needed in the case of [1495: Ch. 31 Potential Zero Silent Failure: Issue sending "Action Needed" Email for VR\&E](https://github.com/department-of-veterans-affairs/va-iir/issues/1495))  
* 

