 
## Overview
Our team aims to create patterns for the authenticated experience that can be shared with USWDS and other federal agencies.

## Problem Statement
{{to do}}

How might we update existing, or create new patterns to improve Veteran authenticated experiences? 
 
## Desired User Outcomes
- Veterans are able to more fully complete their VA.gov profiles
- Users providing personal data in an application that is then later used to complete additional applications

## Undesired User Outcomes
- 

## Desired Business Outcomes
- 6 - 8 VA reusable patterns for personalized, authenticated experiences are created
- Patterns are as easy as possible to implement across products and teams
- Documentation for personalization patterns ready for integration into both https://design.va.gov and https://designsystem.digital.gov

## Undesired Business Outcomes
- Less than 4 patterns are delivered
- Patterns are not sufficient quality to be adopted by existing VA.gov applications retroactively (e.g. code and patterns/flows do not easily replace/adapt to existing code and patterns/flow)
- Patterns are not sufficiently account for the value in (and build on) existing in-production solutions on VA.gov
- Patterns are not meet sufficient quality measures to be integrated into the USWDS


---
## Measuring Success


### Key Performance Indicators (KPIs)
Once fully adopted by VA teams, we expect these to be indicators of success:
- A 15% or greater theoretical reduction in VA custom code by end of project overall and/or measurable performance improvement
- 5% or greater theoretical increase in the percentage of users with completed profiles on VA.gov
- {{need a KPI to hit for increase in prefill usage}}

### Objectives and Key results (OKRs)
  - Lines of custom code removed from VA.gov (essentially replacing existing instances of current patterns with finalized versions)
  - Authenticated users using stored personal data to complete applications to benefits and services
  - Users providing personal data in an application that is then later used to complete additional applications
  - 4-6 patterns are created and presented to USWDS for consideration

---

## Assumptions
Based on existing research and priorities from OCTO/VADS we have identified several potential candidate patterns. These include:
- Prefill Form Data
- Maintain accurate data within their profile
- Service History
- Auto Save Alert
- Make Descisions based on personalized form flows
- Information mismatch handling
- Stay informed of request status
- Know when there's a personal notification
- Help users sign in with less friction
- Navigate as an authenticated user

## Solution Approach

### Prefill Form Data
We believe this is a good pattern to begin with as there are many forms already using this pattern as a 'component' within VADS > forms (https://design.va.gov/components/form/prefill) and we that this would be a useful pattern to contribute up to USWDS as many other agencies have authenticated forms. We believe this pattern should consist of: 
- one or more visual indications that form data has been prefilled, including but not limited to:
- page-level alerts
- inline alerts
- additional info component
- address/details component
- input styling
- directions to update profile data 

### Maintain accurate data within their profile
We believe that creating improved personal profile maintenance interfaces will help improve and maintain data quality within user profiles. This pattern will tie in closely with the prefill form pattern and knowing where and how to update out of date information when forms are prefilled. As such we believe this is a good second pattern to work with and should consist of:
- consistent presentation of profile fields across all VA products
- directions to update profile data 
- page-level alerts
- inline alerts

### Service History
Service History is a preexisting VADS component that we believe would be a good candidate for adoption by USWDS, as many other agencies require information about a user's service history, including the IRS and State Dept. While we think that some parts of this pattern may become obsolete once prefill is fully adopted, we believe that it is still a useful pattern for unauthenticated users and those agencies who have not yet integrated with DOD, VA or ID.me to verify/validate service history.

### Auto Save Alert
Autosave is a preexisting VADS component (https://design.va.gov/components/form/autosave) that we believe would be a good candidate for adoption by USWDS given the many, many forms that exist on other agency websites. As this already exists we thought it would be a 'quick win' we could slide in among other pattern work.

### Make Descisions based on personalized form flows
We believe that creating a pattern for personalized form flows will significantly reduce time and cognitive load for users when filling out authenticated forms, allowing them to prefill known information or skip sections based on previously entered information. We believe this pattern will consist of:
- page-level alerts
- inline alerts
- address/detail components
- progress/status bars

### Information mismatch handling

### Stay informed of request status

### Know when there's a personal notification

### Help users sign in with less friction

### Navigate as an authenticated user

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

### Initiatives
- Prefill Form Data (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/17)
- Maintain accurate data within their profile
- Service History
- Auto Save Alert
- Make Descisions based on personalized form flows
- Information mismatch handling
- Stay informed of request status
- Know when there's a personal notification
- Help users sign in with less friction
- Navigate as an authenticated user

--- 

## Launch Strategy
n/a

## Launch Dates
n/a

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
