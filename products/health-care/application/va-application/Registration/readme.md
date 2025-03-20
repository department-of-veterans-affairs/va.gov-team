# 10-10EZ Registration Path - Initiative Brief
### NOTE
- As of March 7th, 2024, the team has **descoped** the Registration pathway feature work.
     - Reached out to the HOME team, who manages the Registry Exam questionnaire and registry, and found that they no longer need an online solution to register Veterans into the system for purposes of putting them on the Registry.
          - Since August 2024, Veterans are automatically added to the Registery and would need to intentionally opt-out
          - The backlog of registry questionnaires have been reduced from 150k to just 53
          - There is no further need to create a registration path online for Veterans to register (AKA "get in the system") to get a registry exam and be added to the registry
     - Product Owner (Patrick Bateman) would like the team to put this feature in the backlog, and is reaching out to other VA.gov teams to consider making the Registration path as part of other products (such as making an appointment)
          - If a Veteran wants to make an appointment online, they must be registered with a facility, which also would mean they are already "in the system".  The Registration path can would allow a Veteran new to VA to "get in the system" and register with a facility, then immediately be directed through the appointment process.  It could be all one step, rather than separate forms and processes.

## Outcome Summary
Provide guidance for Active Duty Service Members and Veterans who want to register for VA health care, but do not want to or are unable/ineligible to enroll.

**Related/Associated Product(s) and Resources
- [10-10EZ Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Registration Only - Experiment Proposal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Registration/Reg%20Only%20experiment%20proposal.md)
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

### MVP scope - Experiment to implement prior to Enrollment system development
- For Veterans with 40% or lower disability rating, we will prompt them within the application asking whether they want to seek care for their service-connected disability/injury only or enroll in VA health care for full benefits.  If they choose service-connected care only, we will display an on-screen message directing them to call, download the PDF form and mail in or visit a facility to register for Service-connected care.
     - Priority of contact methods confirmed with HEC stakeholders on 4/10/2024 (#1 call, #2 mail, #3 visit in-person at facility)
     - The Veteran will have the option to go back within the application and make a different selection to proceed through the application for VA health care enrollment
     - This experiment will be run for 90 days, resulting in a determination on whether a Registration Only pathway is needed within the online form.

- Decided as a team and shared with PO on 4/8/2024 with verbal approval, confirmed on 4/17/2024 with written approval
>- Patrick Bateman
>     - thanks @Heather Justice. this looks great, no questions.
- Shared design with HEC Stakeholders on 4/10/2024, receiving verbal excitment and approvals
- Shared Experiment parameters with HEC stakeholders on 8/14/2024, receiving verbal interest and approvals

#### Decision made on 8/28/2024
- CAIA (Content) suggested to provide an "I'm not sure" option, along with the radio options to "Register for connected service care" or "Enroll in the full benefits package".
- When demo'd to PO, concern was brought up that the "I'm not sure" option would direct users through the application and submit.
     - This pathway is the same as the "enroll in full benefits package" option, duplicative action which is not advisable
- The team came together to discuss the "I'm not sure" option, and how best to present it to Veterans
- DECISION MADE
     - Remove "I'm not sure" as a radio button option
     - Add some hint or other type of text on the screen to guide Veterans to select the "Enroll in full benefits package" option if they are not sure.
     - UX team will discuss with CAIA on proper content
     - We will not launch Reg Only into production until after these changes are made to the current development (in QA)

### Post Experiment
- Based on the results, we see that 28% of Veterans have shown interest in the registration pathway, which was right in line with our assumption.  However, we also saw that more than 70% of those Veterans dropped from the Registration page, and subsequently visited other health related and facility pages.
     - This indicates to us that there does seem to be an interest in registering (not enrolling), and that Veterans are seeking more information.
**NOTE**
- As of March 7th, the team has descoped the Registration pathway feature work.
     - Reached out to the HOME team, who manages the Registry Exam questionnaire and registry, and found that they no longer need an online solution to register Veterans into the system for purposes of putting them on the Registry.
          - Since August 2024, Veterans are automatically added to the Registery and would need to intentionally opt-out
          - The backlog of registry questionnaires have been reduced from 150k to just 53
          - There is no further need to create a registration path online for Veterans to register (AKA "get in the system") to get a registry exam and be added to the registry
     - Product Owner (Patrick Bateman) would like the team to put this feature in the backlog, and is reaching out to other VA.gov teams to consider making the Registration path as part of other products (such as making an appointment)
          - If a Veteran wants to make an appointment online, they must be registered with a facility, which also would mean they are already "in the system".  The Registration path can would allow a Veteran new to VA to "get in the system" and register with a facility, then immediately be directed through the appointment process.  It could be all one step, rather than separate forms and processes.


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
### Timetable
- The experiment will run for 3 months (90 days)
- The target volumes are based on current average traffic to the 10-10EZ, in conjunction with volumes we received from 2019-2023 of registered Veterans obtaining service-connected care only
     - The forecast of 250 registration selections is based on approximately one-third of monthly service-connected care only registration volumes (850-900)
     - The number of 'Back' button clicks, form exits and download link clicks are estimations derived to support our hypothesis.

### Weekly Average user activity
- Source Data
     - [GA4 Authenticated](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Xpk8PijJQpCkXPUsBezQbQ) and [GA4 Unauthenticated ](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/rsa8M9z3TwiggRM6G6fCRw)
     - [Datadog](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=true&refresh_mode=paused&from_ts=1727928000000&to_ts=1730260740000&live=false)
     - [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1_P5Gd5yOGte5oya5HtdEdYebeauOuwHt4tasiMHzDPE/edit?gid=0#gid=0) (this will be moved to GitHub once experiment is complete)

|Timeblock|# of application starts|# of selection page views|# of accordion clicks|# of Registration selection|# of 'Back' button clicks|# of form exits after Registration selection|# of clicks to download 10-10EZ form|% Register vs Enroll|% Exits after Reg|
|---------|---------------|-------------|----------|---------------|---------------|----------|----------|----------|----------|
| Historical Weekly Avg | 4,500 | 2,750 |62 | N/A | 50 |12 | 2 |2%|19%|
| 3-month Weekly Avg | 2,968 | 142 | 58 | 47 |5 | 34 | 0 |33%|72%|

### Monthly Totals and Average user activity
|Timeblock|# of application starts|# of selection page views|# of accordion clicks|# of Registration selection|# of 'Back' button clicks|# of form exits after Registration selection|# of clicks to download 10-10EZ form|% Register vs Enroll|% Exits after Reg|
|---------|---------------|-------------|----------|---------------|---------------|----------|----------|----------|----------|
|Target Monthly Average | 18,000 | 11,000 |N/A |250 | 200 |50 | 10 |29% | 20% |
|Month 1| 11,872 | 567 | 234 | 188 |20 | 135 | 0 |33%|72%|
|Month 2| x | x | x | x |x | x | x |x | x |
|Month 3| x | x | x | x |x | x | x |x | x |
|Experiment Monthly Average |3,957 | 189 | 78 | 63 |7 | 45 | 0 |33% | 72% |
|3-month Total | x | x | x | x |x | x | x |x | x |

### Monthly totals of users who selected Registration, went back to the question, selected Enroll and moved forward through the form
|Month|# of users on Question Page|# of users on Reg page|# of users back to Question page|# of users select Enroll and move to next page|% of users changed Path|
|---------|---------------|-------------|----------|---------------|---------------|
|Monthly Target|850 |250 |200 |200 |80% |
|October|832|99|56|42|21%|
|November| x |x |x |x |x |
|December| x |x |x |x |x |

## Research questions/Supplemental Metrics
- Is there enough interest in registering for service connected care only?
- Is there significant redirection - do Veterans frequently go back after seeing the alert to call or download a paper form?
- How many of these complete the application (after seeing the registration alert) all they way to the confirmation page?
- If Veterans are exiting the form when they reach the Registration information page, where are they going/what are they doing?
     - Are they leaving VA.gov?
     - Are they searching for a facility?
     - Are they looking for another way/more information to get health care without enrolling?
     - Are they looking for more information on what "Register" means?


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


--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Content (CAIA) ticket - #67133](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67133)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [TBD - Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Experiment Launch Dates
- *Actual Experiment Launch Date* 
  - 10/6/2024
- *Actual Experiment End Date*
  - 12/31/2024

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

- New Enrollment/Registration question page
     - ![image](https://github.com/user-attachments/assets/0a25f3a2-881c-4f17-8b5f-74d19d4fd4a1)

- Additional Info expanded
     - ![image](https://github.com/user-attachments/assets/a3ae620e-7a38-4d5a-8686-837a7b573ea5)

- Registration Info page
     - ![image](https://github.com/user-attachments/assets/9dbfad9a-f6d3-4792-93ec-7953ed50731a)


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

