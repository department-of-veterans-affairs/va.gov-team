
# Product Outline - 10-10EZR Health Benefits Update form
- Preceding page URL to the new 10-10EZR landing page
     - https://staging.va.gov/health-care/update-health-information/
- [EZ(R) update capabilities epic #57417](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57417)
---

## Overview
Providing the 10-10EZR health benefits update form online experience allows the Veteran to quickly and easily submit updates to their personal information for the purpose of increasing or maintaining their health benefits, without having to call VA, mail in a paper form or visit a facility to provide the updated information.

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
     - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - Google Analytics Dashboard - TBD (NEW)

| Product KPI | Historical | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|Paper Submissions |TBD |TBD | TBD |TBD |
|Online Submissions |NEW |TBD | TBD |TBD |
|Submission Failures |NEW |TBD | TBD |TBD |
|Veteran Validation errors |NEW |TBD | TBD |TBD |


#### **Key Result #2:** Increase number of form submissions in a single session

- Data source
     - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - Google Analytics Dashboard

| Product KPI | Historical  | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Single-session submissions |NEW |75% of submitted forms | TBD |TBD |


---

## Assumptions
- Veterans will want to provide their updates for health benefits online
- This will constribute toward OCTO-CIO goals by providing another thing for Veterans to do online
- This will contribute to stakeholder relationships and business processes, as it should reduce the number of paper EZRs processed, the number of phone calls to update information, and the number of Veterans who need to update their information during pre-check in.

## Solution Approach
We are going to build a standalone EZR form online.  This will be an authenticated experience only, so the Veteran must have a VA.gov account **_and_** enrolled/registered for VA health care to complete and submit the form.
This solution was chosen as the easiest path to get the update capability online, while also meeting expectations from HEC stakeholders and the Paper Reduction Act team.
In future iterations, we plan to review for alternative locations and other systems that we can leverage where Veterans can provide an update to their information in one place, and that data cascades to all systems that is dependent on the update.  

**In-scope**:
- Build a standalone 10-10EZR form online
- Provide an authenticated experience only
- Check for enrolled or registered for VA health care
- Pre-fill all available fields with data from Enrollment System
- Include legal/regulatory verbiage on Review page (similar to 10-10EZ for copays, assignment of benefits, etc)
- Allow Veterans to print Confirmation page

 
**Out of scope**:
- Unauthenticated experience
- Integrating update capabilities with VA.gov Profile Page or MHV on VA.gov 
- Short Form flow

### Initiatives
- [EZ(R) update capabilities epic #57417](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57417)
- Preceding page URL to the new 10-10EZR landing page
     - https://staging.va.gov/health-care/update-health-information/
- [Original EZR Update Capabilities Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/EZ(R)%20Update%20Capabilities/ReadMe.md) 
--- 

## Launch Strategy
- TBD [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

### Collaboration Cycle

- Collab Cycle ticket [#TBD]
     - [ ] Design Intent
     - [ ] Content and IA
     - [ ] Research
     - [ ] Midpoint
     - [ ] Contact Center guide
     - [ ] Analytics
     - [ ] Staging
     - [ ] Privacy & Security

### Incident Response info
- The 1010EZ form is currently in production; we are only changing **TBD**
- Full application flow/ less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

#### Key deliverables

- Design documentation
   - [Proposed wireflows]
   - [Sketch Design and User Flow]
- [Research/Design folder]
- [Prototype]
- [Technical documentation folder]
- How to access and test
    - [Staging env](https://staging.va.gov/health-care/apply/application/introduction)
    - Testing documentation - TestRail
    - [Test/Use cases & users]
    - A11y test case documentation
- Release plan
- [Production env](https://www.va.gov/health-care/apply/application/introduction)

### Key Decisions
- 8/15/2023 - After talking with our HEC Stakeholders and the PRA team (Paper Reduction Act) in [July's Stakeholder meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/Bi-weekly%20Stakeholder%20Mtg%20notes/2023-07-24%20PRA%20discussion%20on%20EZR%20with%20HEC%20stakeholders.md), and explaining our proposal to incorporate EZR updates within the VA.gov Profile page, it was communicated from PRA team to our PO, Patrick Bateman, that they would like us to stick closer to something like a standalone authenticated workflow.  

### Key Dates

- May 2023: Initial discovery
- August 2023: Kickoff with outline & begin design
- TBD: Design work ready
- TBD: Development
- TBD: Usability testing kickoff
- TBD: Complete QA
- TBD: Complete UAT
- TBD: Launched to ???% of users
---
   
## Screenshots

### Before

TBD

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
 - Engineering: 
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
     - Jennifer Mdoe
     - Ambroja Watson
     - Amanda Scully
 
</details>

#### Resources  
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

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
