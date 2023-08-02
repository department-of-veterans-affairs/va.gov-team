# Initiative Brief - EZ(R) Update Capabilities
- [EZ(R) update capabilities epic #57417](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57417)

## Outcome Summary

Ability for a Veteran to update some of their information online–namely contact, demographic, financial, dependent, and health insurance.
Related/Associated product(s)
10-10EZR PDF
VA.Gov Profile

Product | Link to product outline



**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem

--Veterans need to update their information and currently can only do it via phone, at a facility, or by printing and mailing 10-10EZR form (a couple of exceptions are on VA.Gov Profile)
--We believe this impacts at least hundreds of thousands of Veterans per year based on the number of paper 10-10EZRs processed 
--Veterans affected are trying to change their contact information–how VA gets in touch with them; and/or insurance, dependent, or financial information which impacts how much they have to pay for their VA healthcare
--This furthers OCTO-CIO’s mission of trying to bring more common “paper” functionality online, allowing Veterans to do more things online
--This initiative has the bonus effect of helping reduce workload frontline staff and HEC who currently have to update this information prior to an appointment, or process these paper forms. The ability for Veterans online should reduce pre check-in changes and paper EZR forms.


## Desired User Outcomes
- TBD

## Undesired User Outcomes
- TBD

## Desired Business Outcomes
- TBD

## Undesired Business Outcomes
- TBD

---
## Measuring Success

### Objective: TBD.

#### **Key Result #1:** TBD.

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | Historical (range?) | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------------- |-------------- |-------------- |
|TBD (metric?) |TBD |TBD | TBD |TBD |
|TBD (metric?) |TBD |TBD | TBD |TBD |
|TBD (metric?) |TBD |TBD | TBD |TBD |



#### **Key Result #2:** Increase application submissions by 5%, and submissions within a single session by 5%
This is based on a third of current exit rates converting to successful submissions

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | Historical (range?) | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|TBD (metric?) |TBD |TBD | TBD |TBD |




---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - TBD
- **Usability Risks** (can people figure out how to use it):
  - v

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - TBD
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - TBD


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


### Key Dates

- May 2023: Initial discovery
- TBD: Kickoff with outline & begin design
- TBD: Design work ready
- TBD: Usability testing kickoff
- TBD: Finalize designs, development
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

- MyHealteVet
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
