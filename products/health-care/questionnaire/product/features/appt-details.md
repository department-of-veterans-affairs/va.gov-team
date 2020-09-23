# Appointment Details Feature Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Documentation
[Questionnaires Product Outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
- [Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)

## High Level User Story/ies

### Do similar things the same way with seamless next steps
**Digital Front Door (4A)**

> As a Veteran, I use MHV and VA.gov to access all my health and benefits information with the VA, and want to be able to access my health questionnaires in a similar way, so the workflow is consistent and convenient to my current experience.

> As a Veteran, ...

* **Use Case:** Veterans need the ability 

* **Description:** Authentication 

## Product Features

Status of Appointment
Encounter for Appointment to match our questionnaire to the clipbaord

5. **Form Type** 
- [ ] Display Appointment information
		 - [ ] Facility Name
		 - [ ] Facility Address/Contact numbers
		 - [ ] Appt. Type/Name 
         - [ ] We need to know the appt. type ie. New Patient, Established Patient, Followup, Adult Physical..etc. and then the appt. header should be specific to the appt. type.  These names are super cryptic so the idea is that we could have a mapping to allow for a display as in patient friendly speak. 
		 - [ ] Appt. Time
    - Primary Care Questionnaire Title
    - [See Loma Linda example for content](https://dsva.slack.com/files/U5HMZDQSK/F016MHJ9MMJ/605-10318183-9694-3200611-140444-pvs_1_.pdf) 
6.  Questionnaire Trigger - VAOS/CPRS - association of facility/encounter to trigger questionnaire that applies.



## Mockup
<img src="insertimage embedded" width="500">

# Technical Documentation 

- [Notes with VetText team for Technical Implementation Options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/vetext-meeting-sept18.md) 

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/assets/clipboard-VEText.jpg" width="500">

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
- When moving to Cerner EHR will need to consider Provider Name as an appt. detail to add to the form 

## OKR's


---
## Issue Tracking 

| Initiative/Feature Name | Issue # | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- |  ---------    | ---------      | ---------       | --------- | ----- | 
|[Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)| [#12102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12102) |  -   | - | - |Q3 2020| N |
|[Feature Outline- Apptointment Details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/authentication.md) | [#12169](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12169) |  -   | - | - |Q3 2020| N |
* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_
