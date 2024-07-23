 
## Overview
Our team aims to create patterns for the authenticated experience that can be shared with USWDS and other federal agencies.

## Problem Statement
How might we update existing, or create new patterns to improve Veteran authenticated experiences in a way that is adaptable by USWDS and other federal agencies? 
 
## Desired User Outcomes
- Veterans are able to more fully complete their VA.gov profiles
- Users providing personal data in an application that is then later used to complete additional applications

## Undesired User Outcomes
- Veterans have a more difficult time filling out user profiles and other forms
- Users are confused about where their profile data lives and is used.

## Desired Business Outcomes
- 6 - 8 VA reusable patterns for personalized, authenticated experiences are created
- Patterns are as easy as possible to implement across products and teams
- Documentation for personalization patterns ready for integration into **both** https://design.va.gov and https://designsystem.digital.gov

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
We gathered as a team to prioritize patterns identified above based on the following factors:
- It's related to the authenticated experience.
- It solves a VA specific problem.
- It is sufficiently abstract-able to be reusable.
- It meets sufficient quality measures to be integrated into the USWDS
- It is portable to USWDS and would be useful to other agencies.
- It would benefit existing applications.
- Dependencies on other teams.
- Dependencies on other patterns.
- Existing work already in progress.

The final ordering is shown below, with items in the darkest teal (top right) corner being the first ones to tackle and moving outward to the left as the project continues on.
![image](https://github.com/user-attachments/assets/782e9b03-f34a-46cb-bc8f-cddbcb796976)


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
We believe that alerting users to mismatched data when filling out forms will improve the quality of profile data and help reduct frustration and mistrust with users. As with other pattern prospects, we believe this could be a widely used pattern within other agencies authenticated form experiences.

### Stay informed of request status
We believe that creating a pattern for how users are informed of the status of their requests, whther helpdesk or form submission related, is an extremely valuable pattern, however we acknowledge that this is also a very broad idea that will be more difficult to implement. We do believe that creating a pattern for a notification dashboard or similar is useful to other agencies with authenticated form submissions and helpdesks.

### Know when there's a personal notification
We believe that creating a pattern for personal and timely notifications, is an extremely valuable pattern, however we acknowledge that this is also a very broad idea that will be more difficult to implement. We believe that this pattern may tie in closely with the previous request status pattern and may have ready to adopt patterns found in other agencies using USWDS.

### Help users sign in with less friction
Currently there are many methods a user can authenticate on VA.gov including buttons, modals, inline links on pages, etc. We believe this could be improved by creating a pattern that could include guidance and components for how users authenticate on VA.gov and other federal agency sites using ID.me and login.gov. 

### Navigate as an authenticated user
We believe this pattern could consist of a common 'user menu' including content, design and placement across the VA common header that could provide some guidance to other federal agencies via USWDS components for how and when to include a user or utility menu within the header.

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

### Initiatives
- Prefill Form Data (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/17)
- Maintain accurate data within their profile (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/22)
- Service History (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/27)
- Auto Save Alert (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/24)
- Make Descisions based on personalized form flows (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/25)
- Information mismatch handling (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/30)
- Stay informed of request status (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/21)
- Know when there's a personal notification (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/19)
- Help users sign in with less friction (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/20)
- Navigate as an authenticated user (https://github.com/department-of-veterans-affairs/tmf-auth-exp-design-patterns/issues/23)

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
