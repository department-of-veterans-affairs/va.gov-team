# Toxic Exposure (TERA) - MVP
- Epic [#73669](https://github.com/department-of-veterans-affairs/va.gov-team/issues/73669)

## Resources
- TERA = Toxic Exposure Risk Activity
- [Original TERA draft with sticky notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/Archive/TERA%20Draft%202023_10-10EZ.pdf)
- [Most recent TERA draft shared 1/23/2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/TERA%20draft%201-23-2024%20VA%20Form%2010-10EZ.pdf)
- [Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699473497914/86412743291c286587ff315e52549e98e06ba534?fromVisitorModal=true&sender=u5ad49c107baa41137f271007)
- [Figma page](https://www.figma.com/file/UljiHam46o5DItC5iDgmPd/10-10EZ?type=design&node-id=450-19244&mode=design&t=GyO36RKAPEFgXEna-0)
- [Sitewide PACT wizard](https://staging.va.gov/pact-act-eligibility/service-period-1) tool for reference
---

## Outcome Summary
* Provide a place on the 10-10EZ health care application for Veterans to identify whether they have experienced exposure to toxic materials during their active duty.  This can help Veterans who may not qualify for VA health care or those that have a low Priority Group (7 or 8) get into a Priority Group 6 and receive additional care.

**Related/Associated product(s)**
- 10-10EZ Veteran health care application | [Link to product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

## Problem
* Veterans do not currently have a place to identify any Toxic Exposure during the health care application process
* Veterans who may qualify for VA health care or a higher priority group, due to Toxic Exposure, currently do not have a way to identify this within the health enrollment process
* Providing a place for Veterans to identify Toxic Exposure during the health care application process will open up additional qualifying factors for VA health care



## Desired User Outcomes
- Unqualified Veterans may now qualify for VA health care by providing this information
- More Veterans applying for VA health care
- Veterans whose disability rating and priority group is reduced due to improved health may still qualify for at least Priority Group 6 due to Toxic Exposure


## Undesired User Outcomes
- Confusion on what is considered "toxic exposure"
- Confusion on how to fill out the information
- Overwhelmed by the questions
- Confusion

## Desired Business Outcomes
- Higher awareness of affected Veterans with toxic exposures
- Qualifying more Veterans for VA health care

## Undesired Business Outcomes
- Veterans feel burdened or overwhelmed by the questions and input fields

---
## Measuring Success

### Objective: Update the 10-10EZ, so Veterans have the opportunity to provide Toxic Exposure details while applying for VA health care.

#### **Key Result #1:** 50% of Veterans who visit this page will answer Yes to provide TERA information

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------------- |-------------- |-------------- |
|Veterans who answered Yes to providing TERA info |N/A| 50% | TBD | TBD |


#### **Key Result #2:** 75% of Veterans who said Yes to providing TERA information will provide info in at least one TERA question

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050)

| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------------- |-------------- |-------------- |
|Veterans answer Yes to Cleanup or Response |N/A| TBD | TBD | TBD |
|Veterans answer Yes to Service in Gulf War |N/A| TBD | TBD | TBD |
|Veterans answer Yes to Combat Operations |N/A| TBD | TBD | TBD |
|Veterans answer Yes to Agent Orange |N/A| TBD | TBD | TBD |
|Total Veterans that provided an answer to at least one question |N/A| 75% | TBD | TBD |

#### **Key Result #4:** 50% of Veterans who apply for VA health care now qualify for Priority Group 6 with TERA criteria, who may otherwise would have a lower Priority Group or not qualify at all

#### **Key Result #5:** Veterans understand what is being asked of them and why, feeling comfortable in providing the information.
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - RISK: Veterans will answer NO to the "Do you want to provide info regarding Toxic Exposure" question
  - RISK: Veterans who provided their Toxic Exposure details while filing their disability claim(s) may feel this is duplicative, becoming annoyed that we don't already have this info
- **Usability Risks** (can people figure out how to use it):
  - RISK: Veterans will be overwhelmed by the questions and details being asked
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - RISK: Downstream API/Data availability and reliability (Enrollment system)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - RISK: HEC Staff will not have visibility into the Veteran's input within their workflow (Enrollment system) until June 2024

### What're you building
#### In-Scope
- Add Toxic Exposure questions, per request from HEC Stakeholders (directive)
- Remove Items from checkbox list, per request from HEC Stakeholders - to avoid duplicative questions
- Allow free form input field, restricting to Alphanumeric values only
- Adding info and alerts to Introduction page and Confirmation page

#### Out-of-Scope
- Changing other parts of the form
- 

--- 

## Launch Planning
### Collaboration Cycle

- Content engagement [ticket #74254](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74254)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/10-10EZ%20TERA%20Release%20Plan.md)
* [Test results from VES team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/VES%206.8.2_OTST%20Demo%20scenarios_Test%20Result_20240228.docx)
* [Test Cases from 10-10 team](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-1010EZ-Toxic%20Exposure%20(TERA)%20MVP.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - March 5, 2024
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
N/A - Questions are new on the existing 10-10EZ form
- Draft version of the 10-10EZ Paper form
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/9807c008-8925-44a9-81f0-9f0de2e2375d)


### After
- Update made to the additional info page
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/6d56cf5f-b706-4cce-b985-0e0f17df4aed)

- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/e928d3bc-c21f-4538-9791-58de77ed1e6f)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/bd3cfa82-0a75-4f89-b13a-c57b455e1a73)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/2b159e07-4f58-47d4-bc4c-1b8618256b2d)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/45588366-320c-460b-9937-8d4473a3d169)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/16ed53cc-35f6-4c13-9bce-2918523c2871)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/67d4ede6-f748-44fb-8634-317baf46defc)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/a14cbb91-be54-4b27-ad6f-d616acf3b21a)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/5f8b9b75-cfc9-4c1e-948d-fb006472f9eb)
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/e636f8ca-4db8-4793-8825-4dccf04f9bba)











---

#### Communications

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): toxic-exposure
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Kristen McConnell
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
