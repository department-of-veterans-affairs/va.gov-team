
# Product Outline - 10-10EZR Health Benefits Update form
---

## Overview
Providing the 10-10EZR health benefits update form online experience allows the Veteran to quickly and easily submit updates to their personal information for the purpose of increasing or maintaining their health benefits, without having to call VA, mail in a paper form or visit a facility to provide the updated information.

**MVP**: Build a pre-filled 10-10EZR form online so that a Veteran can review and edit the pre-filled data, submitting successfully.
Target Delivery: Late November 2023

## Problem Statement

Veterans who want to provide updates to their personal information for increasing or maintaining their health benefits are burdened with the manual processes of calling VA, mailing in a paper form and/or visiting a facility. This is driven by the lack of an online experience and pathway to provide these updates at a more convenient time and place for the Veteran. For Veterans who must provide these updates annually, the burden is multiplied.

How might we provide an online experience where the Veteran can quickly and easily provide updates for their health benefits?

## Desired User Outcomes
- Veterans update their information online via methods and tools they already use (e.g. VA.Gov Profile, online forms)
- Veterans spend less time filling out paper forms, calling help desk, and talking to frontline staff to update their information
- Veterans no longer have to enter a minimum amount of information to change one piece of information

## Undesired User Outcomes
- Veterans do not know they can update their information online
- Veterans cannot find the places online that they can update their information
- Veterans think they must update all of their information in order to update one piece of information
- Veterans do not trust the VA with their personal (e.g. financial, dependent) information

## Desired Business Outcomes
- Reduction in paper 10-10EZR forms being processed
- Reduction in the number of help desk calls to update basic information
- Reduction in the time spent by frontline staff during pre-check-in updating Veteran information
- Veterans saving time by updating their information online

## Undesired Business Outcomes
- Veterans not knowing about the ability to update information online
- Veterans believing that they can _only_ update their information online
- Duplication of record changes (e.g. paper form and online) by Veterans due to confusion
- Inability to process online information changes the same way paper forms are processed

---
## Measuring Success

### Objective: Provide an effortless online experience for Veterans to update their information for health care benefits
#### **Key Result #1:** Increase % of Veterans who successfully update their health care benefits information online

- Data source
     - [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - [Google Analytics submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20231220&_u.date01=20231221&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22ezr--submission%22,0%5D%5D&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.rowCount=25&explorer-graphOptions.selected=analytics.nthDay&explorer-graphMode.mode=lineChart/)

**Note** Paper submissions are based on the average provided by HEC for volumes that are received by the HEC centralized processing center.  This does not include individual facilities, as there are no mechanisms in place to track them.
| Product KPI | Historical | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|Paper Submissions |15,000 (estimated) |4,000 (25%) | TBD |TBD |
|Online Submissions |NEW |11,000 (75%) | TBD |TBD |
|Submission Failures |NEW |None | TBD |TBD |
|Veteran Validation errors |NEW |None | TBD |TBD |


#### **Key Result #2:** Capture 75% of form submissions in a single session

- Data source
     - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - [Google Analytics PDF Downloads](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20231217&_u.date01=20231221&explorer-table.plotKeys=%5B%5D&explorer-graphOptions.selected=analytics.nthDay&explorer-graphMode.mode=lineChart&_r.drilldown=analytics.eventAction:PDF%20Downloaded%20-%20Download%20VA%20Form%2010-10EZR/)

| Product KPI | Historical  | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Single-session submissions |NEW |75% of submitted forms (8,250)| TBD |TBD |


#### **Key Result #3:** Reduce number of EZR form downloads from VA.gov

| Product KPI | Historical  | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|EZR PDF Downloads |avg 10,400 monthly |2,600 monthly (25%) | TBD |TBD |


---

## Assumptions
- Veterans will want to provide their updates for health benefits online
- This will constribute toward OCTO-CIO goals by providing another thing for Veterans to do online
- This will contribute to stakeholder relationships and business processes, as it should reduce the number of paper EZRs processed, the number of phone calls to update information, and the number of Veterans who need to update their information during pre-check in.

## Solution Approach
We are going to build a standalone EZR form online.  This will be an authenticated experience only, so the Veteran must have a VA.gov account **_and_** enrolled/registered for VA health care to complete and submit the form.
This solution was chosen as the easiest path to get the update capability online, while also meeting expectations from HEC stakeholders and the Paper Reduction Act team.
In future iterations, we plan to review for alternative locations and other systems that we can leverage where Veterans can provide an update to their information in one place, and that data cascades to all systems that are dependent on the update.  

**In-scope**:
- Build a standalone 10-10EZR form online
- Provide an authenticated experience only
- Check for enrolled or registered for VA health care
- Pre-fill all available fields with data from Enrollment System - Veteran info and Medicare/Medicaid Insurance only
- Include legal/regulatory verbiage on Review page (similar to 10-10EZ for copays, assignment of benefits, etc)
- Allow Veterans to print Confirmation page
- Enrollment system will trigger generic email confirming receipt of the form
- Skipping Household section if a Means test is already on record for the Veteran

 
**Out of scope**:
- Unauthenticated experience
- Integrating update capabilities with VA.gov Profile Page or MHV on VA.gov 
- Short Form flow
- Printing generated PDF of the completed form after submission with all data input
- Prefill on Dependents and Private Insurance - due to validation issue found with EZ (solution coming)

### Initiatives
- [EZR online epic #57417](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57417)
- Preceding page URL to the new 10-10EZR landing page
     - https://staging.va.gov/my-health/update-benefits-information-form-10-10ezr/introduction
- [EZR - V2 form Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/66837)
- [Original EZR Update Capabilities Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/MVP%2010-10EZR%20Standalone%20form%20-%20Initiative%20Brief.md)

--- 

## Launch Strategy
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/EZR%20Release%20Plan.md)

### Collaboration Cycle

- Collab Cycle ticket [#63773](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63773)
     - [N/A] Design Intent
     - [x] Content, Accessibility and IA - Kickoff 9/12/23 at 4p ET
     - [x] Midpoint - Scheduled 10/27/2023
     - [x] Research
     - [x] Contact Center guide
     - [x] Analytics
     - [x] Staging - Scheduled 11/17/2023
     - [x] Infrastructure, Privacy & Security

### Incident Response info
- The 1010EZR form is a new form on VA.gov
- Full form flow
- Dependent Backend systems
     - Enrollment System
- [1010EZR - Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr)
- Rollback & Fix plan (1-3 days to triage and implement fix)
     - In the event of a security vulnerability incident, we will:
          - Immediately - Turn off feature using feature toggle
          - Immediately - Triage incident
          - Day 1 - Assess viable solutions
          - Day 1-3 - Implement solution
          - Day 1-3 - Complete solution testing
          - Day 1 - Implement additional monitoring, if applicable
          - Day 1-3 - Turn on feature using feature toggle (starting with a small percentage)
          - Day 1-3 - Complete post-mortem document
          - Day 1-30 - Continue to monitor performance
          - Day 1-10 - Proceed with Release Plan
- Contacts:
     - Product Manager - Alex Seelig (alex.seelig@agile6.com), Heather Justice (heather.justice@adhocteam.us)
     - Product Owner - Patrick Bateman (patrick.bateman@va.gov)
     - Backend: Lihan Li (lihan@adhocteam.us)
     - Frontend: Matt Long (matt.long@adhocteam.us)

## Launch Dates
- *Target Launch Date*
  - 11/27/2023
- *Actual Launch Date* 
  - 12/20/2023
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - Evaluate: End of January 2024
  - Impact Review: February/March 2024

---

## Solution Narrative

### Current Status
- New form being built online
     - 12/20/2023 - EZR Form launched at 10% over the holiday week

#### Key deliverables

- Design documentation
   - [Proposed wireflows](https://www.sketch.com/s/912cab8e-d234-44dd-be1f-2bedb3f50b22/p/2243222A-201E-413F-8CC2-8A8C237726DC/canvas)
   - [Sketch Design and User Flow](https://www.sketch.com/s/912cab8e-d234-44dd-be1f-2bedb3f50b22/v/Mrk8ab/p/A0C657F6-3318-45A0-93CB-246BA8722E37/canvas?posX=-3289.158203125&posY=-10403.73046875&zoom=0.25)
   - [Content Source of Truth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/10-10EZR-application-content.md)
- [Research/Design folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research)
- [Technical documentation folder]
- How to access and test
    - [Staging env](https://staging.va.gov/my-health/update-benefits-information-form-10-10ezr/introduction)
    - [Testing documentation - TestRail](https://dsvavsp.testrail.io/index.php?/runs/view/4963&group_by=cases:section_id&group_order=asc)
    - [Test/Use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-1010EZR-Update-health-care-benefits.md)
    - [A11y test case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69253)
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/EZR%20Release%20Plan.md)
- [Production env](https://www.va.gov/my-health/update-benefits-information-form-10-10ezr/introduction)

### Key Decisions
- 8/15/2023 - After talking with our HEC Stakeholders and the PRA team (Paper Reduction Act) in [July's Stakeholder meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/Bi-weekly%20Stakeholder%20Mtg%20notes/2023-07-24%20PRA%20discussion%20on%20EZR%20with%20HEC%20stakeholders.md), and explaining our proposal to incorporate EZR updates within the VA.gov Profile page, it was communicated from PRA team to our PO, Patrick Bateman, that they would like us to stick closer to something like a standalone authenticated workflow.
- 8/29/2023 - Presentation to PO Patrick Bateman on proposed direction of a standalone form, using existing data from ES to display review pages for each section with a question asking whether the information displayed is up to date, or needs to be changed.  If up to date, the next section of data will be displayed.  If a change is needed, pages with editable fields, prefilled with existing data, will be shown, allowing the Veteran to make the updates as needed.  PO agreed with proposal. Next presentation to HEC Stakeholder team will be 9/13/2023.  In the meantime, we will continue with designs, content creation and frontend development.
- 9/1/2023 Key Decision Made to pivot our MVP scope that will reduce the timeline for Design and Frontend development.   
:bangbang: We are now targeting a Late November release :calendar: 
     - MVP: Build a pre-filled 10-10EZR form online so that a Veteran can review and edit the pre-filled data, submitting successfully.
     - In-Scope: 
          - Authenticated flow
          - Display all data fields with the applicable pre-filled data, if any (exception Dependents & Insurance)
          - Provide context/alert informing the Veteran that data has been pre-filled for them (existing on EZ)
          - Veteran name, DOB & SSN information will be displayed as read-only (existing on EZ)
          - Dependents and Insurance screens will utilize the multiple response pattern (existing in Dependents page on EZ)
          - Standard Review screen will be displayed at the end of the form (existing on EZ)
     - Out of Scope:
          - Read-only/Review-type pages in place of each section (in-line editing)
          - Read-only/Review-type pages in between each section (yes/no update questions)
          - Short-form flows (specifically for those with 50% or higher disability rating)
          - Unauthenticated flow

### Key Dates

- May 2023: Initial discovery
- August 2023: Kickoff with outline & begin design
- Sept: Design work ready
- Oct: Development complete
- Oct: Usability testing kickoff
- Nov: Complete QA
- Nov: Complete UAT
- Dec: Complete E2E testing
- Dec 20: Launched to 10% of users
- Jan: Complete phased launch
- Jan 11: Launch at 100%
---
   
## Screenshots

### Before

[Paper/Downloadable form](https://staging.va.gov/vaforms/medical/pdf/VA%20Form%2010-10EZR.pdf)

### After

TBD

---

#### Communications

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-ezr
- Slack channel: #1010-health-apps
- Product POCs: Alex Seelig, Heather Justice

</details>

#### Team Members

<details>
 
 - DEPO Lead: Patrick Bateman
 - PM: Alex Seelig
 - Engineering: Matt Long (FE), Lihan Li (BE), Joshua Drumm (BE)
 - QA: Fletcher Bonds
 - Research/Design: Hieu Vo
 
</details>


#### Stakeholders

<details>
 
- Health Enrollment Centers
     - Stacey Echols
     - Edward Horne
     - Simone Gully
     - Shana Watson
     - Jessica Soza
     - Bryan Burgan
     - Jennifer Mdoe
     - Ambroja Watson
     - Amanda Scully
 
</details>

#### Resources  

<details>
- VA Profile: VAPROFILEPM@va.gov
     - Slack Channel: #va-profile
     - [VA Profile Sharepoint](https://dvagov.sharepoint.com/sites/OITEPMOVAPROPUB) (must be on VA network)
     - [VA Profile SwaggerUI docs](https://dvagov.sharepoint.com/sites/OITEPMOVAPROPUB/SitePages/VA-Profile-SwaggerUI-Links.aspx?csf=1&web=1&e=1BdP8h) (must be on VA network)
     - Emily Gupta is part of this team and had been contacted in February 2023 regarding the EZR and some data that might be available.  While the communication did not offer any answers to our questions at the time, we were able to get the email contact (above) and VA Profile sharepoint site with some details.

- MyHealtheVet (MHV on VA.gov)
     - Lynne Johnson - Delivery Manager
     - Tom Anderson - Product Manager
     - Patrick Bateman - OCTO PO
     - Slack Channel: #mhv-on-vagov-portal-home

- Digital Health Pathway (not sure if these folks can help)
     - Abbie Burton - Product Manager
     - Stefany Holguin - OCTO PO

- MHV Secure Messaging and MHV Medica Records
     - Bryan Riley - Delivery/Product Manager
     - Leila Rassi - OCTO PO

</details>

---

