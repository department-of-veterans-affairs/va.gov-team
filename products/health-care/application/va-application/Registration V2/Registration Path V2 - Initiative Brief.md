# 10-10EZ Registration Path V2 - Initiative Brief
### NOTE
- As of March 7th, 2024, the team has **descoped** the Registration pathway feature work.
     - Reached out to the HOME team, who manages the [Registry](https://www.publichealth.va.gov/exposures/burnpits/registry.asp) Exam questionnaire and registry, and found that they no longer need an online solution to register Veterans into the system for purposes of putting them on the Registry.
          - Since August 2024, Veterans are automatically added to the Registery and would need to intentionally opt-out
          - The backlog of registry questionnaires have been reduced from 150k to just 53
          - There is no further need to create a registration path online for Veterans to register (AKA "get in the system") to get a registry exam and be added to the registry
     - Product Owner (Patrick Bateman) would like the team to put this feature in the backlog, and is reaching out to other VA.gov teams to consider making the Registration path as part of other products (such as making an appointment)
          - If a Veteran wants to make an appointment online, they must be registered with a facility, which also would mean they are already "in the system".  The Registration path can would allow a Veteran new to VA to "get in the system" and register with a facility, then immediately be directed through the appointment process.  It could be all one step, rather than separate forms and processes.

## Outcome Summary
Provide an online option for Veterans who want to register for VA health care with their preferred facility, but do not want to or are unable/ineligible to enroll.

**Related/Associated Product(s) and Resources
- [10-10EZ Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [MVP Registration Only - Experiment Proposal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Registration/Reg%20Only%20experiment%20proposal.md)
- [Epic - Registration Path V2 #103257](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103257)
- [Registration 2.0 Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1739463026996/c99d187206065abafe18dfebb1f2acc4ac6a973b)
- [Figma file](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=7548-50929&p=f&t=wvcvy5fiYaOtWbYE-0)
- Start of  & super rough [prototype](https://www.figma.com/proto/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=8088-389264&t=wvcvy5fiYaOtWbYE-0&scaling=scale-down&content-scaling=fixed&page-id=7548%3A50929&starting-point-node-id=8088%3A389264)
- [VES Swagger Doc](https://dev.ves.va.gov/ves-registration-svc/swagger-ui/index.html) (as of 2/14/2025) - Must be on VA network to access
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


## Problem
- There is an interest from the HEC (Health Eligibilty Center) and VEO (Veteran Experience Office) stakeholders to include a registration-only pathway for the online 10-10EZ application.
- The MVP experiment showed more than 25% of Veterans, who were asked whether they would like to enroll or register, chose register. Of those Veterans who chose register, 75% of them went on to access the PDF version of the form, find a facility, or search through other VA health related pages.  This indicates that Veterans want to know more about registration and how it may differ from enrollment.
- Veterans do not have an option online to register to get specific service-related care (as opposed to the full health benefits package covering all care).
- This limitation also stops Veterans from being known in the Enrollment System, which is needed for C&P exams, toxic exposure exams, mental health services, etc.
     - When a Veteran visits a facility without having yet applied or registered for health care, they are not yet known and must be registered at that time.  This not only enters the Veteran into the system, but also registers them at the facility as a patient.
     - A Veteran always has the option to enroll in VA health care after registration.

## Desired User Outcomes
- Provide Veterans the ability to register for and receive VA medical care without enrolling in VA Health Care

## Undesired User Outcomes
- Confusion between what it means to register vs. enroll

## Desired Business Outcomes
- Receive online form data from VA.gov for Veterans who do not wish to enroll to enable faster processing

## Undesired Business Outcomes
- Receive online enrollment applications from VA.gov for Veterans who are eligible to register but not eligible to enroll

---

## Measuring Success - UPDATE

### Average user activity
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
**V2 - In Scope:**
- ..

**V2 - Out of Scope:**
- Target audience outside of Veterans with 40% or lower service-connected disability rating
- Passing any "Registration" data through to Enrollment system
- Changing the schema in any way
- Prefill
- Systematic decisions or prompting based on any other criteria other than disability rating (such as having private insurance)

--- 

## Launch Planning
### Collaboration Cycle
- Kickoff ticket
   - [ ] PO & Platform sync
   - [ ] Design Intent
   - [ ]  Research Review
   - [ ]  Architecture Intent review
   - [ ]  IA Review
   - [ ]  Midpoint Review
   - [ ]  Staging Review
   - [ ]  Privacy & Security
   - [ ]  Contact Center guide review



### Incident Response info - UPDATE WITH NEW API STUFF FROM VES
- The 1010EZ form is currently in production; we are only changing the content and flow of the application's questions.  The information being sent after submission to the Enrollment System remains unchanged.
- There are no new endpoints implemented with this change
- This change applies to the full application flow, as well as the Short Form flow (more than 50% disability rating) 
- We will use the following 1010EZ applications for any latency or errors being logged
     - [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)
     - [Datadog Real User Monitoring dashboard](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3A9d5155fd-8623-4bc9-8580-ad8ec2cdd7fa&from_ts=1687971959215&to_ts=1688058359215&live=true)
     - [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/)
- If there are any errors or issues found as a result of this change, we will disable the code by switching off the feature toggle which will result in the change being reverted to its previous state prior to release.  We will then begin triaging the root cause and determining a solution.
     - Timeline for triage and solution implementation will be fast-tracked to complete within 1-3 days.
- Main POCs:
     - Heather Justice (heather.justice@adhocteam.us) - Product Manager
     - TBD - Engineering
     - Patrick Bateman (patrick.bateman@adhocteam.us) - Product Owner


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
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO, VES, VEO, HEC
- Contact(s): Patrick Bateman, Lois Lewis, Joshua Faulkner, Shawn Edwards
 
</details>


