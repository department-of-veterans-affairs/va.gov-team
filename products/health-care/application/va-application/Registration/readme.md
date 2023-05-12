# Initiative Brief - 10-10EZ Registration Path

## Outcome Summary
Provide Active Duty Service Members and Veterans who want to register for VA health care, but do not want to or are unable/ineligible to enroll.

**Related/Associated Product(s) and Resources
- [10-10EZ Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Epic - Registration Path #43221](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43221)
- [VHA Directive (amended January 10, 2023)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Registration/Registration%20and%20Enrollment%20directive%20-%201601A_01(1)_D_2020-07-07.pdf)
     - Definitions:
          - **Registration**: Adding a Veteran or Patient into ES or the VA's electronic health record for the purpose of receiving services at a VA medical facility.  Registration in ES must be completed prior to enrollment.
          - **Veteran**: A person who Served in the active military, naval, or air service and was discharged or released from service under conditions other than dishonorable.



## Problem
There is an interest from the HEC (Health Eligibilty Center) and VEO (Veteran Experience Office) stakeholders to include a registration-only pathway for the online 10-10EZ application.

**_We need more information on why Registration is used as opposed to enrollment, and what benefit is being provided/problem is being solved**_

## Desired User Outcomes
- Provide Active-Duty Service members and Veterans the ability to register for VA medical care without enrolling in VA Health Care
- 

## Undesired User Outcomes
- Confusion between what it means to register vs. enroll, and whether the online application should be used for one or the other.

## Desired Business Outcomes
TBD

## Undesired Business Outcomes
TBD

---

## Measuring Success
### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

The team implemented an event tag on the Discharge Date field within the 10-10EZ form on August 8th, 2022.
- Data can be tracked on this [GA Dashboard](https://analytics.google.com/analytics/web/?authuser=0#/dashboard/gSXa5lOYRyuXpauKyXSYug/a50123418w177519031p184624291/) and [Direct event page](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20220801&_u.date01=20220811&explorer-segmentExplorer.segmentId=analytics.eventLabel&explorer-table.advFilter=%5B%5B0,%22analytics.eventLabel%22,%22PT%22,%22hca-future%22,0%5D%5D&explorer-table.plotKeys=%5B%5D&explorer-table.secSegmentId=analytics.pagePath&explorer-table.rowCount=25/)

|Event|1 Month of Data (Aug 8-Sep 8)|2 Months of Data|3 Months of Data|
|--------------------|-------------------|--------------|---------------|
|Future Discharge Date on submitted applications| 1,059 | TBD | TBD |
|Total successfully submitted applications| 11,860 | TBD | TBD |
|Percentage of Future Discharge dates| 8.93% | TBD | TBD |

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
- Veteran that only wants to be seen for service-connected condition and doesn't want to enroll in VA healthcare.
- HUD-VASH, some Veterans who might not be eligible because of character of discharge, but can be seen.
- Mental health evaluation/services within a year of separation (OTH MENTAL HEALTH).
- Employees (Veterans and non-Veterans)
- Humanitarian cases

### Outstanding questions
- What benefit does "registering" provide?
- Confirm - this is for both Active Duty Service Members **and** Veterans?
- Can a Veteran in good health with no service-connected disabilties or injuries be eligible for VA Health Care or at least obtain care at a VA medical facility?
     - Does their discharge character impact whether they can receive this care?
- How do Service Members/Veterans know if they need to complete the 10-10EZ for "Registration Only"?
     - Do they understand why/what scenario they are in that calls for the Reg Only pathway, especially as opposed to enrollment? 
- What are the current volumes of monthly registration vs enrollment applications?
     - What are the volumes of registration approvals, follow-ups (if any) and denials?
     - What are the top 3-5 scenarios/use cases with the most registration-only applications?

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
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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
  
- Office/Department: OCto, VES, VEO, HEC
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

