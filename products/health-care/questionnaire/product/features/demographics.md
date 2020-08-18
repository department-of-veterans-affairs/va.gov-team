


  

[Feature: Veteran Demographic Information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographics.md)



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
  - This provides the care team with the ability to call the correct contact numbers if they have followups on the questionnaire answered the veteran provided.
  - To alway ensure 3 patient identifiers are visible on screens where health information is shown this display also ensures the Veteran is logged into the correct account when filling out a questionnaire. 

* **Description:** Demographics - Show patient demographics that is visible to the clinical care team and the veteran in their profile. 

## Product Features

 1. The first step after starting a questionnaire is to review demographics page.
See Appt. Details Feature Outline for display of fields on the Demographics page.
 2. Display demographics from ***[Authentication API- Mark]***
	- Display should be in a read only view mode
	- Patient full name - First Last 
	- DOB
	- Gender
	- address
	- contact (phone)
 3. Display verbiage if any information is incorrect how the Veteran can update. 
	- Can we add a link to open in a new browser window for them to update the profile page?
 4. All subsequent pages in the questionnaire must show 3 patient identifiers on the screen.
	- is this part of the va.gov framework? 
	- Name, DOB, Gender
	- Is this a re-usable framework component

## Mockup
<img src="https://lh6.googleusercontent.com/pexq2Qk38z3CjdxUbdU63euJGfrhwG9UPZ-upRmk6jMZ7nvuUapVxyOg-J6NR37Gw1cNrJXM3aAjzqzlauJGrP95pX_q80rMbNm1E6hm3zozMbnKQiO6OHvQDjr-A7txzZ3oIXd0" width="500">

## Accessibility Checklist

<details> 

 <summary> Run axe checks using the Chrome or Firefox browser plugin (expand)</summary>
 
 - [ ] Ensure no heading levels are skipped.
 - [ ] Ensure all buttons and labeled inputs use semantic HTML elements.
 - [ ] Ensure all buttons, labeled elements and images are identified using HTML semantic markers or ARIA roles.
 - [ ] Ensure form fields have clearly defined boundaries or outlines.
 - [ ] Ensure form fields do not use placeholder text. 
 - [ ] Ensure form fields have highly visible and specific error states.

</details>

<details> 

 <summary> Test for color contrast and color blindness issues (expand) </summary>

 - [ ] All text has appropriate contrast. 

</details>

<details> 

 <summary> Zoom layouts to 400% at 1280px width (expand)</summary> 

 - [ ] Ensure readability and usability are supported when zoomed up to 400% at 1280px browser width
 - [ ] Ensure no content gets focused offscreen or is hidden from view.
 
</details>

<details> 

 <summary> Test with 1 or 2 screen readers (expand)</summary> 
 
 - [ ] Ensure the page includes a skip navigation link. 
 - [ ] Ensure all links are properly descriptive. 
 - [ ] Ensure screen reader users can hear the text equivalent for each image conveying information.
 - [ ] Ensure screen reader users can hear the text equivalent for each image button. 
 - [ ] Ensure screen reader users can hear labels and instructions for inputs. 
 - [ ] Ensure purely decorative images are not announced by the screenreader. 
 
</details>

<details> 

 <summary>Navigate using the keyboard only (expand)</summary> 
 
 - [ ] Ensure all links (navigation, text and/or image), form controls and page functions can be reached with the tab key in a logical order. 
 - [ ] Ensure all links (navigation, text and/or image), form controls and page functions can be triggered with the spacebar, enter key, or arrow keys.
 - [ ] Ensure all interactive elements can be reached with the tab key in a logical order 
 - [ ] Ensure all interactive elements can be triggered with the spacebar, enter key, or arrow keys.
 - [ ] Ensure focus is always visible and appears in logical order.
 - [ ] Ensure each interactive element has visible focus state which appears in logical order.
</details>

## Out of scope 

 1. Ability to edit the demographics and populate the update back into
    the source system
 2. Ability to show the veteran that demographics have changed SLT 
 3. Ability to display a Preferred Name and populate the update back into the source system
 4. Ability to display a Preferred contact number and populate the update back into the source system

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

| Initiative/Feature Name | Issue # | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- |  ---------    | ---------      | ---------       | --------- | ----- | 
|[Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)| [#12102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12102) |  U   | A | Q |Q3 2020| N |
|[Feature Outline- Display Demographics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographics.md) | [#12170](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12170) |  U   | A | Q |Q3 2020| N |
|[Frontend] Display Demographics | [#12257](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12257) |    U   | A | Q |Q3 2020| N |
|[BE] Interface for Demographics | [#12262](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12262) |    U   | A | Q |Q3 2020|  ON HOLD MIGHT NOT BE NEEDED |
|[UI] UX Design Demographics | [#12259](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12259) |    U   | A | Q |Q3 2020| N |
* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_
