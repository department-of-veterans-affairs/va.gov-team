# Initiative Brief - 10-10EZ Self-Identifying Gender Identity (SIGI)

## Outcome Summary

Allow Veterans to self-disclose their preferred gender identity.

### Figma Link
| Purpose | Form | Figma Link |
|-----------------------------------------------------------|-----------------|-----------------| 
| Working file for SIGI | 10-10EZ | [Figma designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=0-68371) |

**Related/Associated product(s)**
- Product | [10-10EZ  product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)

## Problem
Veterans seeking healthcare do not have a means of indicating their gender identity, potentially influencing how and when they seek healthcare.  Including an option to allow Veterans to self-disclose their gender identity will give them a means of privately sharing this information with their healthcare team, ideally increasing the number of applicants.

## Desired User Outcomes
- Allow Veterans the option to disclose their gender identity
- Increase comfort/trust with VA healthcare

## Undesired User Outcomes
- Confusion as to whether a user is required to share their gender identity
- Incorrect marking of gender identity

## Desired Business Outcomes
- More transparency and understanding of a Veteran's gender identity and the ability to use that to improve healthcare

## Undesired Business Outcomes
- Confusion on why the gender identity is an option
- Additional support calls to correct gender identities.

---
## Measuring Success

### Objective: More health care applications submitted with Gender Identity indicated.

Data source - [10-10EZ Domo Dashboard](https://va-gov.domo.com/page/447193050)

**Key Result 1:** Increase gender identity information available 
| KPI / Metric | Baseline: 0 | Post-launch Week 1 | Post-launch Month 1 |
| ------------ | ------------- | ------------------ | ------------------- |
| Pct. Applications with Gender Identity | 0 | TBD | TBD
| Number of Applications with Gender Identity | 0 | TBD | TBD

---


## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The value risk is that Veterans may not want to self-disclose their gender identity and either abandon their application or experience frustration/confusion while completing it.
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that the incorrect gender identity may be selected.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - None
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Increase in application submissions.
  - Increase in gender identity information available


### Solution Summary
- In-scope:
     - A single question added to the 10-10EZ form that will allow a Veteran to select their gender identity.
- Out of scope:
     - Any clean-up / changes to the existing form.
--- 

## Launch Planning

### Incident Response Info
- The 1010EZ form is currently in production; we are only adding a new question, which will slightly change the flow of the application's questions.  There are no changes to the form's performance, architecture, API enpoints or security.
- Full application flow/ less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

### Important Links
- [Project epic #25410](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/25410)
- [10-10EZ Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Self%20Identifying%20Gender%20Identity%20(SIGI))
- User flows
- Product URL(s)
     - [va.gov/health-care/apply/application/introduction](https://staging.va.gov/health-care/apply/application/introduction)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-Self-identifying-Gender-Identity.md)
- Finalized design prototype or mockup
     - [Birth Sex sketch file](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/pa70avR) (This design was not implemented)
     - [Gender sketch file](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/KvjzaoV)
- Content brief
- Regression test plans
- TestRail 
     - [Test cases](https://dsvavsp.testrail.io/index.php?/suites/view/11&group_by=cases:section_id&group_order=asc&display_deleted_cases=0&group_id=6050)
     - [Test plans](https://dsvavsp.testrail.io/index.php?/plans/view/3565)
     - [Accessibility Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Self%20Identifying%20Gender%20Identity%20(SIGI)/QA/SIGI%20-%20Accessibility%20QA.md)
     - [Coverage for References (Cases) Report](https://dsvavsp.testrail.io/index.php?/reports/view/378)
     - [Summary (Defects) Report](https://dsvavsp.testrail.io/index.php?/reports/view/379)
- Technical diagrams (architecture diagram, sequence diagram)
     - [Technical Diagrams folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/engineering)
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Self%20Identifying%20Gender%20Identity%20(SIGI)/Release%20Plan.md)
- Product guide for contact center

### Timeline 
- TBD

#### Initiative Launch Dates
- *Target Launch Date*
  - TBD
- *Actual Launch Date* 
  - TBD

---

#### Communications
*Where will you discuss this initiative?*

<details>

- [Self Identifying Gender Identity #25410](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/25410)
- Team Name: 10-10 Health Apps team
- GitHub Label(s): sigi
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice, Mark Fallows

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Lauren Alexanderson, Patrick Bateman
 
</details>
