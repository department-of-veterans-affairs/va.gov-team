Initiative Brief for adding TERA and Military History questions to the online 10-10EZR
# Toxic Exposure (TERA) for EZR - MVP
- Epic [#[75209](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/gh/department-of-veterans-affairs/va.gov-team/75209 )] 

## Resources
- TERA = Toxic Exposure Risk Activity
- [Updated EZR with TERA](github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Toxic%20Exposure/TERA%20draft%202-22-2024%20VA%20Form%2010-10EZR_PACT%20Act%20-%20Sec%20103%20revisions_JAN%202024.pdf)
- [Figma page]([https://](https://www.figma.com/file/tggcJk382w9yQ0ElwKfh3N/10-10EZR?type=design&node-id=1405-60260&mode=design))
- [Sitewide PACT wizard](https://staging.va.gov/pact-act-eligibility/service-period-1) tool for reference
---

## Outcome Summary
* Allow Veterans to provide and update the answers to their Toxic Exposure Risk Assessment (TERA) on the online 10-10EZR. This will make it so that Veterans can answer questions about whether they were exposed to toxic materials and situations while in the service. It will allow Veterans who were not previously eligible for healthcare to re-submit for (and in many cases receive) care, and will give others a higher Priority Group (from PG 7 and 8 to PG 6) and receive additional care.  

## Related/Associated product(s)
- 10-10EZR Veteran health care application 
- [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/10-10EZR%20Product%20Brief%20(standalone%20form).md )]  
- [Link to Epic](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/gh/department-of-veterans-affairs/va.gov-team/57417 )


## Problem
* Veterans who applied for healthcare before PACT Act 103 (March 5, 2024) do not currently have a place online to provide information relating to their toxic exposure while serving.
*Veterans who have already submitted their TERA information do not have a place online to update their answers.

## Desired User Outcomes
- Unqualified Veterans may now qualify for VA health care by providing this information
- Veterans whose disability rating and priority group is reduced due to improved health may still qualify for at least Priority Group 6 due to Toxic Exposure

## Desired User Outcomes
- Unqualified Veterans may now qualify for VA health care by providing this information
- Veterans whose disability rating and priority group is reduced due to improved health may still qualify for at least Priority Group 6 due to Toxic Exposure

## Undesired User Outcomes
- Confusion on what is considered "toxic exposure"
- Confusion on how to fill out the information
- Overwhelmed by the questions
- Answering questions they have already answered

## Desired Business Outcomes
- Higher awareness of affected Veterans with toxic exposures
- Qualifying more Veterans for VA health care
- Raising the Priority Group of Veterans already enrolled in case
- VA having a more accurate assessment of who was in Toxic Exposure situations

## Undesired Business Outcomes
- Veterans feel burdened or overwhelmed by the questions and input fields and provide inaccurate information 
- Veterans feel burdened or overwhelmed by the questions and input fields and do not complete the EZR
- Not every Veteran who was in a Toxic Exposure situation answers the TERA questions

---
## Measuring Success

### Objective: Update the 10-10EZR, so that Veterans have the opportunity to answer the TERA questions online.

#### **Key Result #1:** 70% of Veterans who visit this page will answer Yes to provide TERA information

Data source - [Domo Dashboard]??

| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------------- |-------------- |-------------- |
|Veterans who answered Yes to providing TERA info |N/A| 70% | TBD | TBD |


#### **Key Result #2:** 75% of Veterans who said Yes to providing TERA information will provide info in at least one TERA question

Data source - [Domo Dashboard]

| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------------- |-------------- |-------------- |
|Veterans answer Yes to Cleanup or Response |N/A| 10% | TBD | TBD |
|Veterans answer Yes to Service in Gulf War |N/A| 10% | TBD | TBD |
|Veterans answer Yes to Combat Operations |N/A| 70% | TBD | TBD |
|Veterans answer Yes to Agent Orange |N/A| 10% | TBD | TBD |
|Total Veterans that provided an answer to at least one question |N/A| 75%| TBD | TBD |

#### **Key Result #4:** 25% of Veterans who apply for VA health care now qualify for Priority Group 6 with TERA criteria, who previously had a lower Priority Group 

| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------------- |-------------- |-------------- |
|Previously Enrolled Veterans with highed PG |N/A| 25% | TBD | TBD |

#### **Key Result #5:** 50% of Veterans who previously applied for VA health care and were ineligible are now eligible for VA health care.

| Product KPI | Historical |Target | Post-Launch 1 month|Post-Launch 3 months|
|------------- |---------|-------------- |-------------- |-------------- |
|Previously denied Veterans now eligible for health care |N/A| 50% | TBD | TBD |

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - RISK: Veterans will answer NO to the "Do you want to provide info regarding Toxic Exposure?" question.
  - RISK: Veterans who provided their Toxic Exposure details while filing their disability claim(s) may feel this is duplicative, becoming annoyed that VA does not already have this information on file.
- **Usability Risks** (can people figure out how to use it):
  - RISK: Veterans will be overwhelmed by the questions and details being asked
  RISDK: Veterans will not understand the questions being asked (e.g. what is Agent Orange?)
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - RISK: Downstream API/Data availability and reliability (Enrollment system)
    -RISK: EZR cannot properly handle the information entered
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
    - RISK: HEC Staff will not have visibility into the Veteran's input within their workflow (Enrollment System) until June 2024 
    
    -RISK: Veterans do not receive judgements on their TERA information in a timely manner

### What're you building
#### In-Scope
- Add Toxic Exposure questions, per request from HEC Stakeholders (directive)
- Allow free form input field, restricting to Alphanumeric values only
- Add a Military Information section to the EZR that only contains the TERA Questions
- Adding info and alerts to Static Page, Introduction page, Review Page, and Confirmation page

#### Out-of-Scope
- Changing other parts of the form
- Adding a Veteran’s Military History to the EZR
- Allowing a Veteran to attach supporting documents to the EZR

--- 

## Launch Planning
### Collaboration Cycle

- Content engagement [ticket #74254](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74254) (For EZ which will carry over into EZR)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative]
* [Test results from VES team]
* [Test Cases from 10-10EZR team]

#### Initiative Launch Dates
- *Target Launch Date*
  - April 10, 2024
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
N/A - Questions are new on the existing 10-10EZR online form
- Currently on the 10-10EZR Paper form
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/9807c008-8925-44a9-81f0-9f0de2e2375d)


### After
- Update made to the additional info page


---

#### Communications

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): toxic-exposure
- Slack channel: 1010-health-apps
- Product POCs: Alex Seelig

</details>


#### Stakeholders

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Kristen McConnell
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

