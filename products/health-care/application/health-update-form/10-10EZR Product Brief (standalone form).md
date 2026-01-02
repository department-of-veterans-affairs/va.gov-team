
# Product Outline - 10-10EZR Health Benefits Update form
- [Zero Silent Failure Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Form/Error%20Monitoring%20playbook/10-10EZR%20Zero%20Silent%20Failure%20Checklist.MD)
- [10-10EZR downloadable PDF from VA.gov](https://staging.va.gov/forms/10-10ezr/)
---

## Problem Statement

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
<details>
<summary>**Key Result #1:** Increase % of Veterans who successfully update their health care benefits information online</summary>

- Data source
     - [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - [Google Analytics submissions](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20231220&_u.date01=20231221&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22ezr--submission%22,0%5D%5D&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.rowCount=25&explorer-graphOptions.selected=analytics.nthDay&explorer-graphMode.mode=lineChart/)

| Month    | Started | Submitted | % start to submit |
| -------- | ------- | --------- | ----------------- |
| Dec 2023 | 77      | 32        | 41.56%            |
| Jan 2024 | 302     | 184       | 60.93%            |
| Feb 2024 | 295     | 209       | 70.85%            |
| Mar 2024 | 412     | 270       | 65.53%            |
| Apr 2024 | 1347    | 880       | 65.33%            |
| May 2024 | 6,938   | 4,598     | 66.27%            |
| Jun 2024 | 5,930   | 4,310     | 72.68%            |
| Jul 2024 | 5,253   | 4,378     | 83.34%            |
| Aug 2024 | 4,886   | 4,276     | 87.52%            |
| Sep 2024 | 4,921   | 4,329     | 87.97%            |
| Oct 2024 | 6,270   | 5,213     | 83.14%            |
| Nov 2024 | 5,137   | 4,696     | 91.42%            |
| Dec 2024 | 5,097   | 4,549     | 89.25%            |
| Jan 2025 | 5,674   | 5,478     | 96.55%            |
| Feb 2025 | 4,493   | 4,220     | 93.92%            |
| Mar 2025 | 4,696   | 4,674     | 99.53%            |
| Apr 2025 | 4,765   | 4,607     | 96.68%            |
| May 2025 | 4,549   | 4,389     | 96.48%            |
| Jun 2025 | 5,482   | 5,169     | 94.29%            |
| Jul 2025 | 5,235   | 5,202     | 99.37%            |
| Aug 2025 | 5,335   | 5,159     | 96.70%            |
| Sep 2025 | 5,113   | 5,105     | 99.84%            |
| Oct 2025 | 5,023   | 4,815     | 95.86%            |
| Nov 2025 | 4,874   | 4,459     | 91.49%            |
| Dec 2025 | TBD   | TBD     | TBD             |

</details>

<details>
     <summary>**Key Result #2:** Capture 75% of form submissions in a single session</summary>

- Data source
     - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - [Google Analytics PDF Downloads](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20231217&_u.date01=20231221&explorer-table.plotKeys=%5B%5D&explorer-graphOptions.selected=analytics.nthDay&explorer-graphMode.mode=lineChart&_r.drilldown=analytics.eventAction:PDF%20Downloaded%20-%20Download%20VA%20Form%2010-10EZR/)

| 2024 Average sessions to submit | Jan  | Feb  | Mar  | Apr  | May  | Jun  | Jul  | Aug  | Sep  | Oct  | Nov  | Dec  |
| ------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 10-10 EZR - Average | 1.17 | 1.09 | 1.11 | 1.15 | 1.17 | 1.16 | 1.23 | 1.17 | 1.17 | 1.20 | 1.17 | 1.18 |

| 2025 Average sessions to submit | Jan  | Feb  | Mar  | Apr  | May  | Jun  | Jul  | Aug  | Sep  | Oct  | Nov  | Dec  |
| ------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 10-10 EZR - Average | 1.19 | 1.17 | 1.19| 1.19| 1.17 | 1.18 | 1.16 | 1.17 | 1.18 | 1.19 | 1.19 | TBD |

</details>

<details>
     <Summary>**Key Result #3:** Reduce number of EZR form downloads from VA.gov</Summary>

| Product KPI | Historical Monthly avg | Target Monthly avg | June 2024-Dec 2024 Monthly avg |Jan 2025-Dec 2025 Monthly avg |
|------------- |---------|-------|-------------- |-------------- |
|EZR PDF Downloads | 10,400  |2,600 (25%) | 2,215 (21%) |1,832 (18%) |

</details>

---

## Assumptions
- Veterans will want to provide their updates for health benefits online
- This will constribute toward OCTO-CIO goals by providing another thing for Veterans to do online
- This will contribute to stakeholder relationships and business processes, as it should reduce the number of paper EZRs processed, the number of phone calls to update information, and the number of Veterans who need to update their information during pre-check in.

## Solution Approach
We built a standalone EZR form online.  This is an authenticated experience only, so the Veteran must have a VA.gov account **_and_** enrolled/registered for VA health care to complete and submit the form.
- This solution was chosen as the easiest path to get the update capability online, while also meeting expectations from HEC stakeholders and the Paper Reduction Act team.
- In future iterations, we plan to review for alternative locations and other systems that we can leverage where Veterans can provide an update to their information in one place, and that data cascades to all systems that are dependent on the update.  

**In-scope**:
- Build a standalone 10-10EZR form online
- Provide an authenticated experience only
- Check for enrolled or registered for VA health care
- Pre-fill all available fields with data from Enrollment System, VA Profile
- Include legal/regulatory verbiage on Review page (similar to 10-10EZ for copays, assignment of benefits, etc)
- Allow Veterans to print Confirmation page and PDF copy of their submitted form
- Enrollment system will trigger generic email confirming receipt of the form
- Submission failures will trigger an email to the Veteran & alert the team in Slack
- Skipping Household section if a Means test is already on record for the Veteran

 
**Out of scope**:
- Unauthenticated experience
- Integrating update capabilities with VA.gov Profile Page or MHV on VA.gov (possible future work, starting with Emergency Contact & Next of Kin)
- Short Form flow


### Initiatives Launch Dates
- 12/20/2023: EZR Form launched at 10% over the holiday week
- 04/11/2024: Full launch at 100%
- 03/05/2024: Launched Toxic Exposure questions added to form
- 06/20?/2024: Launched aility to upload documents with submission
- 10/21/2024: Update "Need Help" section with new Accredited Representative content (replacing VSO content)
- 10/15/2024: Launched Updates to Submission failure and In-progress email templates within VA Notify (aligning with CAIA and VAN templates)
- 12/04/2024: Launched Toxic Exposure improvements (question branching logic and content updates)




---

## Solution Narrative

### Current Status
- New form being built online
     - 12/20/2023 - EZR Form launched at 10% over the holiday week
     - 04/11/2024 - Full launch at 100%

### [Zero Silent Failures Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/10-10EZR%20Zero%20Silent%20Failure%20Checklist.MD)

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
- April: Complete phased launch at 100%

---
   
## Screenshots

### Before

[Paper/Downloadable form](https://staging.va.gov/vaforms/medical/pdf/VA%20Form%2010-10EZR.pdf)

### After

<img width="542" height="795" alt="image" src="https://github.com/user-attachments/assets/4502d7f1-9eff-468e-90c9-365a16e6a25e" />


---

#### Communications

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-ezr
- Slack channel: #1010-health-apps
- Product POCs: Alex S, Heather J

</details>

#### Team Members

<details>
 
 - DEPO Lead: Patrick B
 - PM: Alex S
 - Engineering: Matt L (FE), Lihan L (BE), Joshua D (BE)
 - QA: Fletcher B
 - Research/Design: Hieu V
 
</details>


#### Stakeholders

<details>
 
- Health Enrollment Centers
     - Stacey E
     - Edward H
     - Simone G
     - Shana W
     - Jessica S
     - Bryan B
     - Jennifer M
     - Ambroja W
     - Amanda S
 
</details>

#### Resources  

<details>
- VA Profile: VAPROFILEPM@va.gov
     - Slack Channel: #va-profile
     - [VA Profile Sharepoint](https://dvagov.sharepoint.com/sites/OITEPMOVAPROPUB) (must be on VA network)
     - [VA Profile SwaggerUI docs](https://dvagov.sharepoint.com/sites/OITEPMOVAPROPUB/SitePages/VA-Profile-SwaggerUI-Links.aspx?csf=1&web=1&e=1BdP8h) (must be on VA network)
     - Emily G is part of this team and had been contacted in February 2023 regarding the EZR and some data that might be available.  While the communication did not offer any answers to our questions at the time, we were able to get the email contact (above) and VA Profile sharepoint site with some details.

- MyHealtheVet (MHV on VA.gov)
     - Lynne J - Delivery Manager
     - Tom A - Product Manager
     - Patrick B - OCTO PO
     - Slack Channel: #mhv-on-vagov-portal-home

- Digital Health Pathway (not sure if these folks can help)
     - Abbie B - Product Manager
     - Stefany H - OCTO PO

- MHV Secure Messaging and MHV Medica Records
     - Bryan R - Delivery/Product Manager
     - Leila R - OCTO PO

</details>

---

