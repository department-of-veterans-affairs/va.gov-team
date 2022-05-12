# Initiative Brief - 10-10EZ Adding Medicare Claim # field

## Outcome Summary

The paper version of the 10-10EZ includes a field for Veterans to enter a Medicare Claim Number, if they are currently enrolled in Medicare-Part A.
- Compliance with current paper version questions
- Request needed information up-front, allowing field offices to process documentation appropriately

#### Additional Information
- Claim number is 11 digits and made up only of numbers and uppercase letters (no special characters)
- What is the claim number used for? - VA uses the claim number to create and Explanation of Benefits, known as Medicare Remittance Advice, outlining what Medicare would have paid VA if Medicare would not prohibited by law from paying for health care services provided by the VA to eligible Veterans. The MRA is used by VA to create a secondary bill to those carriers that require an EOB from Medicare prior to making payment.


**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem

- In an effort to provide appropriate VA health care to veterans, we have been requested to add the Medicare Claim Number field to our Online application. This field is already present on the paper form.

## Desired User Outcomes
- Applicants will be able to provide their Medicare details up-front

## Undesired User Outcomes
- Applicants will be confused by the new field
- Applicants will be hesitant to provide their Medicare claim number, fearing they may be rejected coverage
Applicants will not have this information handy, and quit the application process

## Desired Business Outcomes
- Applicants will provide their Medicare Claim number
- Reduction in follow-up questions and information requests to Veterans

## Undesired Business Outcomes
- The Medicare claim number field will cause confusion for applicants
- The drop-off/exit rates will not decrease
- Application submissions will not increase

---
## Measuring Success

### Objective: Update the 10-10EZ, so that Veterans who are enrolled in Medicare can provide their details up-front.

**Key Result #1:** Compliance with paper 10-10EZ provided at VA Facilities

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050?userId=228456075)

| Product KPI | 12mo Baseline | Target | Post-Launch |
|------------- |---------|-------|-------------- |
|Medicare Claim # field | N/A | 100% | TBD|


**Key Result #2:** Reduce follow-up requests for additional information

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050?userId=228456075)

| Product KPI | 12mo Baseline | Target | Post-Launch |
|------------- |---------|-------|-------------- |
|Follow-up requests for Medicare info | TBD|TBD | TBD|

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The Value risk is that some applicants may find the Medicare Claim number field confusing or unnecessary.
     - Some applicants may find the Medicare Claim number field intrusive
- **Usability Risks** (can people figure out how to use it):
  - The Usability Risk is similar to Value risk, in that adding the field could cause confusion, causing more drop-offs.

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - None
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The positive impacts to the organization will be an increase in completed applications with Medicare Claim numbers provided.


### Solution Summary

- In-Scope
     - Addition of the Medicare Claim number field, as it appears on the paper form
- Out-of-Scope
     - Any additional Medicare details/questions
--- 

## Launch Planning
### Collaboration Cycle

Collab Cycle not applicable for this change

### Incident Response info
- The 1010EZ form is currently in production; we are only adding a field on an existing page (Medicare effective date page)
- Full application flow/ less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

---
## Key deliverables

- [Design/Content documentation - Sketch file](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/v/dmwVkj/a/ygw2kK8/)
- Research/Design folder
- Technical documentation
- How to access and test
    - [Staging env](https://staging.va.gov/health-care/apply/application/introduction)
    - QA Ticket [#]()
    - Testing documentation - TestRail
    -  Test/use cases & users
    - a11y test case documentation ticket [#]()
- Release plan ticket [#]()
- [Production env](https://www.va.gov/health-care/apply/application/introduction)


### Key Dates

- May 2022: Design work finalized
- ???? 2022: Development work finalized
- ???? 2022: Complete QA?
- ???? 2022: Launched to ???% of users


---
   
## Screenshots

### Before

- Medicare Effective Date question page, without the Medicare Claim Number field.

![image](https://user-images.githubusercontent.com/92328831/167704104-33f50a1a-9f68-4a0f-a806-551db508fbde.png)


### After

TBD
---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-ez
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice & Mark Fallows


</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson

 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
