# 10-10EZ Registration Path - Initiative Brief

## Outcome Summary
If the insurance page is updated then Veterans will be able to navigate the pages (increased accessibility), understand what information is being asked for and add/view/edit/delete multiple policies easily.

**Related/Associated Product(s) and Resources
- [10-10EZ Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Epic - Insurance Page Updates #90159](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90159)
- [Mural - Multiple Response board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699485613760/d40578dbce4f0433d792988db24e4dec8d5b4fd1?wid=0-1723041889608&sender=u5ad49c107baa41137f271007)
- [Figma Designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=5139-31117&t=OPU0WiRwHdRsMtZb-0)


## Problem
The existing Insurance page uses an old deprecated wizard list-and-loop pattern that has accessibility concerns.  Also, there has been feedback from Veterans that they do not understand why they are being asked to provide their insurance information.

## Desired User Outcomes
- Provide Veterans an accessible form
- Provide Veterans the information they need to clearly understand what is being asked, and make informed decisions on the data input they are including.

## Undesired User Outcomes
- Confusion continuing on why they are being asked to provide insurance information.
- Confusion and/or frustration on how the form flow moves through the section and how multiple policies are displayed to them

## Desired Business Outcomes
- Receive accurate and complete insurance information from Veterans within the 10-10EZ form

## Undesired Business Outcomes
- Receive online enrollment applications with inaccurate, missing or incomplete information
- Receive complaints from Veterans that the form is confusing or hard to fill out and submit

---

## Measuring Success
### Key Performance Indicators (KPIs)
#### Objective
Veterans will be able to complete the Insurance section without confusion or dropping from the page or form.

- Source: TBD

**Key Result** Insurance Section page exits do not increase after the updates.

|Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)|
|-------| --------- | --------- | --------- |
|Insurance page exits| TBD | TBD | TBD |
|Submissions| 13k paper | TBD | TBD |


### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Applicants will not understand the information being provided
  - Applicants will be confused with the page flow, especially if entering more than one insurance policy


- **Usability Risks** (can people figure out how to use it):
  - Applicants will not understand how to edit or delete policy information within the form


- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
**In Scope:**
- Add new Info pages
- Separate the "Do you have insurance" question onto it's own page
- Add multi-response pattern, similar to current behavior in Dependents section.

**Out of Scope:**
- Changing the schema in any way
- Changing other page behavior or content

--- 

## Launch Planning

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [TBD - Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

- Before providing answer
     - ![image](https://github.com/user-attachments/assets/d5c323c9-8b2c-4bd4-aece-a6ce12c503e7)

- After selecting Yes
     - ![image](https://github.com/user-attachments/assets/b9b3e78c-c9c3-42ea-94b1-656c93832a69)



### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-team
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO, VES, VEO, HEC
- Contact(s): Patrick Bateman, Lois Lewis, Joshua Faulkner, Bryan Burgan
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

