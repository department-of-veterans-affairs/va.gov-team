# Initiative Brief - 10-10EZR - MVP - Standalone form
- [10-10EZR MVP epic #57417](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57417)

## Outcome Summary - 

Ability for a Veteran to update some of their information online – specifically contact, demographic, financial, dependent, and health insurance.


**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)
- [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

## Problem

- Veterans need to update their information and currently can only do it via phone, at a facility, or by printing and mailing 10-10EZR form (a couple of exceptions are on VA.Gov Profile)
- We believe this impacts at least hundreds of thousands of Veterans per year based on the number of paper 10-10EZRs processed 
- Veterans affected are trying to change their contact information – how VA gets in touch with them; and/or insurance, dependent, or financial information which impacts how much they have to pay for their VA healthcare

- This furthers OCTO-CIO’s mission of trying to bring more common “paper” functionality online, allowing Veterans to do more things online

- This initiative has the bonus effect of helping reduce workload frontline staff and HEC who currently have to update this information prior to an appointment, or process these paper forms. The ability for Veterans online should reduce pre check-in changes and paper EZR forms.


## Desired User Outcomes
- Veterans update their information online via methods and tools they already use (e.g. VA.Gov Profile, online forms)
- Veterans spend less time filling out paper forms, calling help desk, and talking to frontline staff to update basic information
- Veterans no longer have to enter a minimum amount of information to change one piece of information

## Undesired User Outcomes
- Veterans do not know they can update their information online
- Veterans cannot find the places online that they can update their information
- Veterans think they must update all of their information in order to update one piece of information
- Veterans do not trust the VA with their personal (e.g. financial, dependent) information
- Veterans do not trust the VA.Gov profile enough to enter personal information into it

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

### Objective: Provide an effortless Veteran information health care benefit update process
#### **Key Result #1:** Increase % of Veterans who successfully update their health care benefits information online

- Data source
     - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - Google Analytics Dashboard

| Product KPI | Historical (range?) | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|Submissions |NEW |TBD | TBD |TBD |
|Submission Failures |NEW |TBD | TBD |TBD |
|Veteran Validation errors |NEW |TBD | TBD |TBD |


#### **Key Result #2:** Increase number of form submissions in a single session

- Data source
     - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
     - Google Analytics Dashboard

| Product KPI | Historical (range?) | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Single-session submissions |NEW |TBD | TBD |TBD |




---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - Will Veterans use this? Will Veterans who need to update their information want to do so online, or will they only want to do so via phone, mail, and in person?
  - Will enough Veterans use this to justify the expenditure?

- **Usability Risks** (can people figure out how to use it):
  - Will Veterans know that they can now update their information online?
  - Knowing they can update their information online, will Veterans choose to do this, or will they continue paper/phone/in person? Note: We believe this to be the largest risk for this initiative. We will work with both the groups who currently work to update this information, as well as other projects who have brought paper functionality online to do our best to notify Veterans that they can now update their information online. We believe that if this initiative is not successful it will be due in large part to our inability to reach Veterans who would want to update this information online. 

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Can we set up an API with VES to send and receive EZR information?
  - What required fields will be needed by VES to update a Veteran’s information akin to a paper EZR?
  - Will online information changes behave the same as a paper EZR change?
  - What are the downstream effects of changing this information? How is this information used to process a Veteran into a Priority Group? Is there anything we need to do to ensure this process works?
  - What external systems (e.g. IRS, SSA) does VES interface with to make determinations of a Veteran’s information? Do we need to do anything with these third-party applications?
  - Will having this information online (e.g. in the va.gov profile) impact site performance?

- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - This should help OCTO-CIO by providing another thing for Veterans to do online
  - This should help stakeholder relationships as it should reduce the number of paper EZRs processed, the number of phone calls to update information, and the number of Veterans who need to update their information during pre check in.


### Solution Summary

- In-Scope
     - TBD
- Out-of-Scope
     - TBD
--- 

## Launch Planning
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

---
## Key deliverables

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
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-ezr
- Slack channel: #1010-health-apps
- Product POCs: Alex Seelig

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman
 
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



**Overview**
_There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.
Examples:
Product: On-site Search
Initiatives: Type-ahead, Search Landing Page, Surfacing Other Search Tools
Product: VA.gov Profile
Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences
Product: Disability Claims
Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)_
