
# Questionnaire Manager Feature Outline  

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature description, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Documentation
[Questionnaires Product Outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
- [Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)

## High Level User Story/ies

### Unmet Need
### Do similar things the same way with seamless next steps
> **Digital Front Door (4A)**  As a Veteran, I use MHV and VA.gov to access all my health and benefits information with the VA, and want to be able to access my health questionnaires in a similar way, so the workflow is consistent and convenient to my current experience.

### Provide updates when convenient and relevant with the device and location of choice
> As a Veteran, I want the flexibility to decide  **how far in advance of an appt.**  with my care team to update health information, so I can  **take the time needed to throughly prepare by locating and completing**  all information needed.

> As a Veteran, I need the ability to view, start, and update questionnaires that my care team has requested for an upcoming visit so that I can provide updates ahead of my visit. 

* **Use Case:** Veterans need the ability to manage their questionnaire list on va.gov in addition to receiving a notification to complete the form. 

## Product Features

 1.  Display Visit Intro landing page to kick off the form and let the Veteran know expectations
	 - [ ] Use the standard intro form landing page with Save For later Message Box.
	 - [ ] Display expanded verbiage for Urgent or sensitive information to contact emergency, crisis line, or 911
	 - [ ] Display verbiage for agreement on who will see the information entered in the form
	 - [ ] Display Appointment information
		 - [ ] Facility Name
		 - [ ] Facility Address/Contact numbers
		 - [ ] Appt. Type/Name
		 - [ ] Appt. Time
	 - [ ] Display Next Steps? 
	 - [ ] - UX ? - do we want the additional steps to expect in the form on this page? 
	 - [ ] - UX ? - do we show this page when they select the questionnaire from the list view?
2. Display Review Form before submitting Questionnaire
	 - [ ] Use the standard Forms Library Review Page with accordion content areas with in line edit
	 - [ ] Display a button to Save and Send Questionnaire
	 - [ ] Display a button to Save for Later 
	 - [ ] Display simplified verbiage for Urgent or sensitive information to contact emergency, crisis line, or 911
3. Display a Confirmation that shows successful submission of questionnaire form
	- UX - is this a separate page or is it part of the Worklist page with a dynamic confirm message at the top of the screen (is this dictated by forms library or can we decide?)
4. Display a list of Questionnaires that have been sent to the Veteran for an appt.
	- [ ] Name of Questionnaire - there will be multiple
	- [ ] Status
		- [ ] Sent/Completed
		- [ ] In progress
		- [ ] Not Started
		- [ ] Canceled
	- [ ] Ability to select a Questionnaire to start the workflow 
	- [ ] For Sent/Completed Questionnaires provide the ability to Print the form 
	- [ ] For In progress or Not Started provide the ability to see due date of appt/questionnaire
	- [ ] Questionnaires that have are in progress will leverage the Save in Progress feature of the forms library providing the ability to save data until the user selects to complete and send the questionnaire. 
	- [ ] When an Appt. has been canceled the questionnaire should have a canceled status - What all do we need to show to the user about the questionnaire that is not being used now? 
5.  Clipboard Feature Flag #12402
 - [ ] Provide the ability to have a flipper flag that makes the questionnaire available/viewable in staging and prod.
https://user-images.githubusercontent.com/1793923/90675376-5fad8d00-e228-11ea-95d2-9c31a309fd01.gif

## Mockup
<img src="insertimage embedded" width="500">

# Technical Documentation 

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


## OKR's


---
## Issue Tracking 

| Initiative/Feature Name | Issue # | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- |  ---------    | ---------      | ---------       | --------- | ----- | 
|[Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)| [#12102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12102) |  -   | - | - |Q3 2020| N |
|[Feature Outline- Questionnaire Manager](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/questionnaire-manager.md) | [#12115](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12170) |  -   | - | - |Q3 2020| N |

