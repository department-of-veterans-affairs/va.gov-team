# Initiative Brief - 10-10EZ American Indian question

- **READ THIS FIRST** At the time of this Initiative Brief writing, the design and development has been done, with only content changes remaining.  The initiative was placed on hold until the Enrollment system was ready to receive the data from this question.  On 5/10/2022, we were given the approval to publish this in production, as the Enrollment system is now ready to receive it.  We will need to perform QA to ensure there are no issues, once the content is updated.

## Outcome Summary

The paper version of the 10-10EZ includes a question for Veterans to indicate whether they are of American Indian or Alaska Native descent.  
- Help applicants identify their American Indian/Alaska Native heritage so they can apply for appropriate VA health care
- Help VA identify applicants who qualify for VA benefits, and may not need to pay for care and/or services from VA.

### Definition of "Indian"
>**INDIAN:** The term “Indians” or “Indian”, unless otherwise designated, means any person who is a member of an Indian tribe, as defined in subsection 25 U.S.C. 1603(d) except that, for the purpose of sections 1612 and 1613 of this title, such terms shall mean any individual who (A) irrespective of whether he or she lives on or near a reservation, is a member of a tribe, band, or other organized group of Indians, including those tribes, bands, or groups terminated since 1940 and those recognized now or in the future by the State in which they reside, or who is a descendant, in the first or second degree, of any such member, or
>(B)is an Eskimo or Aleut or other Alaska Native, or (C) is considered by the Secretary of the Interior to be an Indian for any purpose, or (D)is determined to be an Indian under regulations promulgated by the Secretary.

**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem

- In an effort to provide appropriate VA health care to veterans, the American Indian/Alaskan Native question needs to be added to the Online 10-10EZ form.  This question is already present on the paper form.

## Desired User Outcomes
- Applicants will be able to identify themselves as American Indian or Alaska native
- More applicants identifying as American Indian/Alaska Native will be eligible for care/services and may not have to pay for them

## Undesired User Outcomes
- Applicants will be confused by the new question
- Applicants will be hesitant to identify their American Indian/Alaska Native heritage without understanding what the information is going to be used for

## Desired Business Outcomes
- Applicants will identify their American Indian/Alaska Native heritage, qualifying for applicable benefits
- More applications will be submitted, with more applicants understanding their eligibility under this additional category

## Undesired Business Outcomes
- The American Indian/Alaska Native question will cause confusion for applicants
- The drop-off/exit rates will not decrease
- Application submissions will not increase

---
## Measuring Success

### Objective: Update the 10-10EZ, so it is inclusive and easy for American Indian/Alaska Native applicants to identify their heritage, and complete the application without having to exit the application.

**Key Result #1:** Increase application submissions by 2%

Data source - [Domo Dashboard](https://va-gov.domo.com/page/447193050?userId=228456075)

| Product KPI | 12mo Baseline | Target | Post-Launch |
|------------- |---------|-------|-------------- |
|Application Submissions | 14% (114k)  | 16% | TBD|


---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The Value risk is that some applicants may find the American Indian/Alaska Native question confusing or complicated.
     - Some applicants may find the American Indian/Alaska Native question intrusive
- **Usability Risks** (can people figure out how to use it):
  - The Usability Risk is similar to Value risk, in that adding the question could cause confusion, causing more drop-offs.

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - None
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The positive impacts to the organization will be an increase in completed applications with those identifying as American Indian/Alaska Native


### Solution Summary

- In-Scope
     - Addition of the American Indian/Alaska Native question, as it appears on the paper form
- Out-of-Scope
     - Addition of a drop-down list of tribes to select, once the applicant identifies as American Indian/Alaska Native
--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket [#32765](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/32765)
- Design Intent ticket [#34581](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/34581)
- Content ticket [#]()
- Midpoint ticket [#]()
- Contact Center guide ticket [#33525](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/33525)
- Analytics ticket [#33528](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/33528)
- Staging ticket [#]()
- Privacy & Security ticket [#]()

### Incident Response info
- The 1010EZ form is currently in production; we are only adding a new question, which will slightly change the flow of the application's questions
- Full application flow/ less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

---
## Key deliverables

- [Design/Content documentation - Sketch file](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/618DA1BF-EBAA-40AD-B635-80DD0E78FFB7)
- Research/Design folder)
- Technical documentation
- How to access and test
    - [Staging env](https://staging.va.gov/health-care/apply/application/introduction)
    - QA Ticket [#34326](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/34326)
    - Testing documentation - [TestRail](https://dsvavsp.testrail.io/index.php?/suites/view/11&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
    -  [Test/use cases & users](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/American%20Indian%20question/product/american-indian-question%20Use%20Cases.md)
    - a11y test case documentation ticket [#33524](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/33524)
- Release plan ticket [#33514](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/33514)
- [Production env](https://www.va.gov/health-care/apply/application/introduction)


### Key Dates

- May 2022: Design work finalized
- ???? 2022: Development work finalized
- ???? 2022: Complete QA?
- ???? 2022: Launched to ???% of users


---
   
## Screenshots

### Before

Not Applicable - This is an additional question being placed after the Race, Ethnicity, Origin question

### After

TBD
---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): American Indian
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

