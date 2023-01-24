# Primary vs Secondary Clarification - Initiative Brief

## Problem

Veterans and their Caregivers are confused about the difference between a Primary and Secondary Caregiver, and about the process of including them while completing the application. This confusion is causing application abandonment. Abandoned applications can result in complaints on the form itself or simply a decrease in applications submitted successfully. Ultimately, this may result in caregivers not receiving the support and services they need.

Evidence of this problem includes:
- [Findings/observations from unrelated research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/1010cg-mvp/Sign-as-a%20Rep-Round3-Oct2021/Usability%20research/research-findings.md#additional-insights)
     - Users are unclear about the difference between a Primary and Secondary Caregiver, including difference in the requirements and benefits for each. 
     - Confusion may be created in part because the selection to apply for each is separated in the flow. The applicants would like the Primary and Secondary Caregiver definitions/requirements listed together, rather than on separate pages in the application
- Stakeholder input, documented in [the initial design ticket (from May 2021)](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/22372) indicates:
     - The applications being received (as of May 2021) list a higher than usual number of Secondary Caregivers.
     - They feel there is a lack of understanding what a Secondary Caregiver is
     - They feel there is a lack of understanding what the difference is between Primary and Secondary Caregivers
     - Confusion on how to complete the application when only adding a Secondary Caregiver
     - Confusion on whether they are required to have a Secondary Caregiver
- Data, such as 
     - Anecdotal evidence of duplicated applications, which cause additional review by CSC and Veterans are asked to re-apply
     - The overall abandonment rate for the 10-10CG is 32% over 4 months, compared to 23% for the 10-10EZ.  
          - We see a significant exit rate within the first Secondary Caregiver section, between the Identification (name, address) and the Contact info (Phone, email) pages. 
          - There is a monthly average of 550+ applications (31%) that start the Secondary Caregiver section, but then exit the application.  
          - This exit rate makes up about 12-13% of total applications started.

## Why is this work important to prioritize at this time/over other work?

This is important because 
- There is a potential to impact ~1,000 Veterans and their caregivers monthly, based on 1,300 average applications that include Secondary Caregivers, over a 4 month period.
- Eligibility was expanded October 1, 2022 to include Military Service from all eras. This doubled the number of submitted applications. The number of applications with Secondary Caregivers more than doubled from 1,186 applications in September to 2,343 applications in October.  

## OCTO-DE objective alignment
This change will help with increasing the accessibility, reliability and security of Veteran's digital services.  It will also help reduce the time it takes for Veterans to find and apply for VA services, by making the roles and benefits between the two types of Caregivers clear and easy to understand.

## Outcome Summary

Veterans and their Caregivers can quickly and easily submit the Caregiver application in a single session, while confidently listing the Caregivers in their intended hierarchy

## Desired User Outcomes
* Clear understanding of the Primary and Secondary Caregiver roles, benefits, and eligibility requirements
* Confidence in completing the form accurately
* Trusting that VA processes will provide expected results


## Desired Business Outcomes
* Reduced duplicate applications
* Reduced application abandonment
* Increased trust and satisfaction


|2022 Month|Total Applications|Total with Primary|Total with Secondary|% with Primary|% with Secondary|
|------------|------------|------------|------------|------------|------------|
|July|4,727|4,689|728| 99%|15%|
|August|5,613|5,564|970|99%|17%|
|September|6,961|6,911|1,186|99%|17%|
|October|14,658|14,553|2,340|99%|16%|
|November|6,571|6,522|1,094|99%|17%|

## Related 
- [10-10CG Form - product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
- [Primary vs Secondary - Transition document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Primary%20and%20Secondary%20Caregiver%20selection.md) from April 2022
- [Primary/Secondary Caregiver - Epic](https://app.zenhub.com/workspaces/vsa---10-10-team-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/37541)
- [Discovery ticket #35838](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/35838)



---
## Measuring Success

### Key Performance Indicators (KPIs)

### Objective: Update the 10-10CG to clarify the roles and benefits of the Primary and Secondary caregivers

#### **Key Result #1:** Reduce drop-off/exit rate within the Secondary Caregiver section on the application

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
Data source - [Datadog](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true)

| Product KPI | Baseline - July-Sept 2022 | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Section Exit rates | 13% | TBD | TBD|TBD|

#### **Key Result #2:** Increased Trust in VA services

Data source - Medallia survey results: October 2021 - September 2022
Data source - Contact Center feedback?

| Product KPI | Baseline out of 28 total A11 Surveys | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|General VA Trust - Rating 1 | 0% | TBD | TBD | TBD |
|General VA Trust - Rating 2 | 0% | TBD | TBD | TBD |
|General VA Trust - Rating 3 | 21% | TBD | TBD | TBD |
|General VA Trust - Rating 4 | 11%  | TBD | TBD | TBD |
|General VA Trust - Rating 5 | 18%  | TBD | TBD | TBD |


| Product KPI | Baseline out of 28 total A11 Surveys | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Trust in VA Commitment to Veterans - Rating 1 | 4% | TBD | TBD | TBD |
|Trust in VA Commitment to Veterans - Rating 2 | 7%  | TBD | TBD | TBD |
|Trust in VA Commitment to Veterans - Rating 3 | 0% | TBD | TBD | TBD |
|Trust in VA Commitment to Veterans - Rating 4 | 14%  | TBD | TBD | TBD |
|Trust in VA Commitment to Veterans - Rating 5 | 25%  | TBD | TBD | TBD |


### Objective: Update the 10-10CG to clarify the required information when changing or adding a Primary or Secondary caregivers

#### **Key Result #1:** Reduce duplicate applications (Pending CG Contact Center (CSP) get us this info)

| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |-------------- |
|Application duplicates | TBD  | TBD | TBD | TBD |


---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - There is a risk that the content changes will not be sufficient, and applicants will still have difficulty determining the difference between the Primary and Secondary Caregiver roles and benefits
  - There is a risk that the clarification will not improve the abandonment rate and/or duplicate applications
  - There is a risk that applicants will be overwhelmed by the amount of information displayed and will not read it, leading to continued inaccuracy or duplicative information.
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that, due to lack of clarity, applicants may not know how to complete the application accurately
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - There is a low risk of technical issues that would be due to this change.  The usual overall VA.gov risks are still applicable, which are focused on service reliability and performance.
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The risk/constraint is that the stakeholders will not have favorable feedback on the changes, and may not approve the updates.

### What're you building

In-Scope
- Update content for Primary and Secondary Caregiver roles and benefits

Out of Scope
- Adding questions
- Removing questions

#### Exploratory design
This table includes links to the individual design work products.

| Screens | Links  
| :--- | :--- | 
| Exploratory Mockup designs | [Sketch](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/p/79BDE8AC-21C9-4FEF-B0FB-DA6E0C3990DD) 
| Future progressive exploratory flow | [Sketch](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/a/qerZvg2) 
| Future progressive flow exploratory Mockup designs  | [Sketch](https://www.sketch.com/s/5a676881-7aa8-4054-9b6e-34d86ced43d8/p/FDA98FA9-757B-4193-B52F-6C07B035DA59) 


--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket #..
  - Design Intent
  - Research Review
  - IA Review
  - Midpoint Review
  - Staging Review
  - Privacy & Security
  - Contact Center guide review

### Incident Response Info
- The 1010CG form is currently in production
- We are updating content only. There are no changes to the form's performance, architecture, API endpoints or security.
- 1010CG [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

### Timeline 
- Initiative Kickoff: 
- Discovery: 
- Design: 
- Design Intent: 
- Finalized Design & Midpoint: 
- Usability/Research: 
- Development: 
- Staging: 
- ... 

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

Primary Caregiver question with additional info accordion open
- ![image](https://user-images.githubusercontent.com/92328831/194910647-26ace996-bd41-4f1c-a6fc-bd3cb9a24559.png)

Secondary Caregiver question with additional info accordion open
- ![image](https://user-images.githubusercontent.com/92328831/194910771-23cf51cf-1d29-44e8-83c7-f230caac321f.png)


### After

TBD

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010 primary/secondary
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice, Mark Fallows

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Katherine Lawyer, Mark Dewey
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
