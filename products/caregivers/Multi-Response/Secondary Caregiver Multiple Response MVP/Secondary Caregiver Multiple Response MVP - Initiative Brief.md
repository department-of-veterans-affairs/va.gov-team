# Initiative Outline - Secondary Caregiver Multiple Response MVP

#### [Epic for 10-10CG Secondary Caregiver Multiple Response MVP](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92337)

---

## Overview
* Veterans and their Caregivers 

## Problems to solve
- There is an existing issue where the 10-10CG form allowed an applicant to fill out the Secondary Caregivers (both Secondary and Additional Secondary), then goes back through the form to select "NO" to adding Secondary Caregivers, but the data still includes the _Additional Secondary Caregiver_ information.
     - Ideally, the information for both Secondary Caregivers should be removed.

 
## Desired User Outcomes
- Applicants will be able to see the secondary caregivers they entered in one place
- Applicants will be able to edit and remove secondary caregivers easily from one screen
- Applicants will be more confident in the information they have entered

## Undesired User Outcomes
- Applicants have difficulty navigating the secondary caregivers being displayed
- Applicants will not know what to do when presented with the caregiver cards on the screen

## Desired Business Outcomes
- ...

## Undesired Business Outcomes
- ...

---
## Measuring Success


### Key Performance Indicators (KPIs)

- User feedback (Medallia)
- TBD


#### Baseline KPI Values
- Number of online Caregiver applications filled out per month: TBD

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: 
  - Key result: TBD
 
|Invalid/Duplicate/Created in error| Monthly Average Baseline (Jan-Dec 2023)| Target | 1 Month after launch|
|--------|-----------------------|----------|--------------------|
|Total Apps (rounded) | 384 | TBD | TBD |
|Total Online Apps (rounded) | 222 | TBD | TBD |



  - Key result: TBD

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - ...

- **Usability Risks** (can people figure out how to use it):
  - ...

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - ...
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA stakeholder End-to-End testing

### What're you building
- Incorporate the Multiple Response pattern into the 10-10CG for the secondary caregivers, which can include up to two caregivers.
--- 

### Outstanding Questions
- What's next after MVP?

---

## Launch Planning
### Collaboration Cycle

- Kickoff ticket
  - [ ] Design Intent
  - [ ] Research Review
  - [ ] IA Review
  - [ ] Midpoint Review
  - [ ] Staging Review
  - [ ] Privacy & Security
  - [ ] Contact Center guide review

### Incident Response Info
- The 1010CG form is currently in production
- We are not calling any new APIs
- ...
- 1010CG [Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative - template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd


## Screenshots

### Before
![image](https://github.com/user-attachments/assets/049a68b9-947a-4e4d-b534-2ded6b7eec38)

![image](https://github.com/user-attachments/assets/a8735082-bfaf-4fd6-ad56-343e7a48c222)

![image](https://github.com/user-attachments/assets/55ca4947-8fbc-4e2d-9c5d-cd694e1da7d9)

![image](https://github.com/user-attachments/assets/d61608e1-cf2b-4866-aa11-f41eccb4e7c8)


### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): cg-multi-response
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Lois Lewis
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

