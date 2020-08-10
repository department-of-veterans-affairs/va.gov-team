# Demographics Feature  Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Documentation
[Questionnaires Product Outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
- [Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)
- [Feature - Demographics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographcs.md)

## High Level User Story/ies

**Continuity of Care (5A)**

> As a Veteran, I want to provide my current health status and updates to my medical history so that I do not have to feel I have to repeat the information to my nurse and provider in the same and subsequent visits.

* **Use Case:** Veterans need the ability to see the demographic information that is on record to ensure accuracy and be able to verbally with the care team or through a digital edit experience update for the most up to date information.  
  - This provides the care team with the ability to call the correct contact numbers if they have followups on the questionnarire answeres the veteran provided.
  - To alway ensure 3 patient identifiers are visable on screens where health information is shown this display also ensures the Veteran is logged into the correct account when filling out a questionairre. 

* **Description:** Demographics - Show patient demographics that is visible to the clinical care team and the veteran in their profifle. 

---

Display from Profile or MPI?? Need to determine the differences and where to pull from.
- read only for now.
- Name, DOB, Gender
- vcontact (phone)
- address


## Out of scope 
- Ability to edit the demograhpics and populate the update back into the source system
- Ability to show the veteran that demographics have changed SLT 
- Ability to display a Preferred Name and populate the update back into the source system
- Abiliy to display a Preferred contact number and populate the update back into the source system

## Hypothesis 

- Veterans believe that by filling out pre visit intake questionnaires they will not have to repeat their information as much as it will now be in their record.
- The Clinical Care team wants Veterans to provide pre-visit intake questionaires and screeners so they don't have to use so much time on data entry/asking questions.

## OKR's

Personal Experience
- Increase the employee care team satisfaction by spending less time transferring veteran-provided data from one medium (paper, iPads) to the electronic health record system

Collaboration 
- Decrease in the time to complete Clinical Reminders - Baseline estimation is 15-20 mins and is currently one of the biggest complaints by nursing

Seamless Journey
- Increase faster access to care and more timely delivery of services
- Increase in accuracy of health information available to the Care team

---
## Issue Tracking 

| Initiative/Feature Name | Issue # | Design     | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
|[Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)| [#12102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12102) | D  |  U   | A | Q |Q3 2020| N |
|[Frontend] Display Demographics | [#12257](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12257) | D  |  U   | A | Q |Q3 2020| N |
|[BE] Interface for Demographics | [#12262](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12262) | D  |  U   | A | Q |Q3 2020| N |
|[UI] UX Design Demographics | [#12259](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12259) | D  |  U   | A | Q |Q3 2020| N |
* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_
