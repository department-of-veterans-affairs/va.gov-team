# Patient Generated Data (PGD) Feature Outline  

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Documentation
[Questionnaires Product Outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
- [Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)

## High Level User Story/ies

### Unmet Need


**Continuity of Care (5A)**

> As a Veteran, I want to provide my current health status and updates to my medical history so that I do not have to feel I have to repeat the information to my nurse and provider in the same and subsequent visits.

 5.  Questionnaire is saved as a clinical note or discrete data so the clinical care team can easily view in preparation, during, or after the visit. 

> As a Veteran, ...
> As an administrator of the MAP PGD, I need to understand what data fields will be captured by the Clipboard application, and how those data fields will be mapped to FHIR Questionnaire/Questionnaire Response Resources so I can confirm compliance with FHIR and PGD specifications. Additionally, I need to know if any discreet data being captured should also be stored in other relevant FHIR Resources in PGD.

* **Use Case:** 


## Product Features

### FHIR Mapping to GetCare Questionnaire - see tech documentation below for MAP fields used for reference
1. **reason** - What is the reason for this appointment? 
   - Questionnaire field = Are there any additional details you'd like to share with your provider about this appointment?
2. **otherConcerns** - Do you have other concerns or life issues to discuss? 
   - Questionnaire field = Are there any other concerns or changes in your life that are affecting you or your health? 
3. **talkingPoints** -  What do I want to talk about at this appointment?
   - Questionnaire field = Do you have a question you want to ask your provider?  Please enter your most important quesition first. 
   - **??? see mockup this field can have multiple questions entered seperately so is that possible with the GetCare mapping to 1 field as we would need 1-many of our questions mapped to their single.** 

## Mockup
<img src="https://lh4.googleusercontent.com/SqKG7LYfCH1t3OvNWQIu1PtZAjFMtTsGYavm_qJdZKOydbaJ69SNRr7Zj9CHce-zExeCH2_zL5CAx0flntQfmG80NKO-GN_5NDnZWKBYUiLFmhdf06gAwrX-vZUxltjqXKELJHbK" width="500">

# Technical Documentation 
- [va.gov Clipboard System Design Document (SDD)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/engineering/MAP/Clipboard_vagov_sdd.md)
- [Clipboard Fhir Mapping v1.0.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/data/Clipboard%20Fhir%20Mapping%20v1.0.xlsx)

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

 1. 

## OKR's

---
## Issue Tracking 

| Initiative/Feature Name | Issue # | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- |  ---------    | ---------      | ---------       | --------- | ----- | 
|[Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)| [#12102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12102) |  -   | - | - |Q3 2020| N |
|[Feature Outline- Patient Generated Data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/pgd.md) | [#12172](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12170) |  -   | - | - |Q3 2020| N |
|BE- Spike for VAMF using smart-fhir-PGD | [#12406](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12406) |  -   | - | - |Q4 2020| N |


* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_
