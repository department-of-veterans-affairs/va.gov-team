# 10-10EZ Registration Path - Initiative Brief

## Outcome Summary
Provide a pathway for Active Duty Service Members and Veterans who want to register for VA health care, but do not want to or are unable/ineligible to enroll.

**Related/Associated Product(s) and Resources
- [10-10EZ Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Epic - Registration Path #43221](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43221)
- [Mural - Discovery board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684348883203/49fc4ff1bf31f3cabe200663708c1002645b447f?sender=u5ad49c107baa41137f271007)
- [Figma Designs](https://www.figma.com/file/UljiHam46o5DItC5iDgmPd/10-10EZ?type=design&node-id=86-36817&mode=design&t=CC8P8lyEeGsdJei8-0)
- [VHA Directive (amended January 10, 2023)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Registration/Registration%20and%20Enrollment%20directive%20-%201601A_01(1)_D_2020-07-07.pdf)
     - Definitions:
          - **Registration**: Adding a Veteran or Patient into ES or the VA's electronic health record for the purpose of receiving services at a VA medical facility.  Registration in ES must be completed prior to enrollment.
          - **Veteran**: A person who Served in the active military, naval, or air service and was discharged or released from service under conditions other than dishonorable.
- Stakeholder request:
     - >Desired Functionality:** The online form will be a short form to collect the Veterans information Name, SSN, DOB, Address, Phone Number, Military Service Dates and Reason for Registration Only. This information will feed into VES and place the Veteran in a Registration Only status if they do not wish to enroll. If the Veteran is already known to the system we will capture and update existing information if it is different.
       >
     - >Capture and retain a 1010EZ Registration application when received online.
       >
     - >Create service to receive online form data from VA.gov for Veterans who do not wish to enroll and provide that data to VistA/Millennium. In alignment with PACT Act, COMPACT, SERVICE Act and 38 CFR 17.37 this enables Veterans to request an appointment and register for those not wishing to enroll.

### MVP scope - to implement prior to Enrollment system development
- Decided as a team and shared with PO on 4/8/2024 with verbal approval, confirmed on 4/17/2024 with written approval
>     - Patrick Bateman
>          - thanks @Heather Justice. this looks great, no questions.
- Shared with HEC Stakeholders on 4/10/2024, receiving verbal excitment and approvals
- For Veterans with 40% or lower disability rating, we will prompt them within the application asking whether they want to seek care for their service-connected disability/injury only or enroll in VA health care for full benefits.  If they choose service-connected care only, we will display an on-screen message directing them to call, download the PDF form and mail in or visit a facility to register for Service-connected care.
     - Priority of contact methods confirmed with HEC stakeholders on 4/10/2024 (#1 call, #2 mail, #3 visit in-person at facility)
     - The Veteran will have the option to go back within the application and make a different selection to proceed through the application for VA health care enrollment


## Problem
There is an interest from the HEC (Health Eligibilty Center) and VEO (Veteran Experience Office) stakeholders to include a registration-only pathway for the online 10-10EZ application.

## Desired User Outcomes
- Provide Veterans the ability to register for and receive VA medical care without enrolling in VA Health Care

## Undesired User Outcomes
- Confusion between what it means to register vs. enroll, and whether the online application should be used for one or the other.

## Desired Business Outcomes
- Receive online form data from VA.gov for Veterans who do not wish to enroll to enable faster processing

## Undesired Business Outcomes
- Receive online enrollment applications from VA.gov for Veterans who are eligible to register but not eligible to enroll

---

## Measuring Success
### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

#### Objective
Provide a pathway for Veterans to Register for health care when they are unable or do not want to apply for VA health care benefits package.

- Source: TBD

**Key Result** Introduce Registration application submissions online to reach 5% of overall submissions.

|Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)|
|-------| --------- | --------- | --------- |
|Submissions to Enroll| TBD | TBD | TBD |
|Submissions to Register| 13k paper | TBD | TBD |

#### Objective
....
- Source: TBD

**Key Result** Key Result: Reduce rejected applications due to ineligibility to enroll, but eligible to register.
|Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)|
|-------| --------- | --------- | --------- |
|Decrease in decllines/rejections due to ineligible to ENROLL| TBD | TBD | TBD |

#### Objective
....
- Source: TBD

**Key Result**
|Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)|
|-------| --------- | --------- | --------- |
|TBD| TBD | TBD | TBD |


## Discovery
### Registration Use Cases
These are the following confirmed use cases for registration over enrollment. 

- Veteran who is already enrolled/registered in one facility and wants/needs to change facilities.
- Active duty service member with TRICARE.
- Active duty service member getting a Comp & Pen Exam.
- Active duty service member getting care where there is a sharing agreement in place between the DoD and VA.
- Active duty service member getting VA care within a "Military Treatment Facility."
- Registration of collaterals (family members, ex: SAVE Lives Act).
- Active duty transitioning out with a future discharge date (up to 365 days).
- Veterans requesting an eligibility assessment
- Veterans requesting an clinical evaluation PP (Presumptive Psychosis) and/or MST (Military Sexual Trauma)
- Veterans requesting an care or treatment pursuant to a special treatment authority
- **Veteran that only wants to be seen for service-connected condition and doesn't want to enroll in VA healthcare - MVP!!**
- HUD-VASH, some Veterans who might not be eligible because of character of discharge, but can be seen.
- Mental health evaluation/services within a year of separation (OTH MENTAL HEALTH).
- Employees (Veterans and non-Veterans)
- Humanitarian cases


### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Applicants will not understand the difference between Enrollment and Registration, and which applies to them


- **Usability Risks** (can people figure out how to use it):
  - Applicants will not understand the difference between Enrollment and Registration, and which applies to them


- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
**MVP - In Scope:**
- Reorganized pages for authenticated and unauthenticated user flows to bring forward Compensation and Registration decision sooner within the application
- Target audience for Veterans with 40% or lower service-connected disability rating
- Create an alert with details on how to register for VA health care

**MVP - Out of Scope:**
- Target audience outside of Veterans with 40% or lower service-connected disability rating
- Passing any "Registration" data through to Enrollment system
- Changing the schema in any way
- Prefill
- Systematic decisions or prompting based on any other criteria other than disability rating (such as having private insurance)



#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Content (CAIA) ticket - #67133](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67133)

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

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/832db1cf-edb7-47ef-b3ce-7c30bd1b9bda)

Section I
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/6de52b4d-93a6-403b-8707-a7929a6afeb2)

Section II
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/449cc0e4-46e2-4637-a004-c01e9ec48340)

Section III
- ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92328831/5615ee52-9018-4680-85ee-4c1959c88bc4)


### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): 1010-team
- Slack channel: #1010-health-apps
- Product POCs: 

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO, VES, VEO, HEC
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

