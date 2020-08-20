# This Visit Feature  Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Documentation
[Questionnaires Product Outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
- [Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)
* Link to [Design Screenshots/Prototype](https://app.mural.co/invitation/mural/vsa8243/1596490423105?sender=aricka0272&key=a3d9728b-bc26-42a8-96ca-d4879cd613e1)

## High Level User Story/ies
As a Veteran, I want to provide my my care team with what is important to me to focus on for this visit.


Use these data elements for UI mockup in User testing as Proof of Concept Q3 priorities. 

[WIP Content for the below Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/design/proof-of-concept/content-v1.md) 
* **Description:** 

## Product Features

1. **Reason For Visit**
    - free text (small size)
    - This field comes from Call Center, Reg Clerk, or VAOS asking the patient why they are needing an appointment.  
    - show this pre-populated or blank (ideally we will pull from the above and ask the Veteran if they want to add any more detail or change all together) 
    - [VAOS screen shot for example content](https://drive.google.com/file/d/1c-Ih1vlmavEpUwz5BdeyaJ44KYdHxWcE/view?usp=sharing) 
    - Examples:  “What can I do for you today?” or “Tell me what brings you in today.” 
    - Scientists have found that physicians only spend, on average, 11 seconds listening to their patients describe the reason for their visit before interrupting them, according to a study that was recently published in the [Journal of General Internal Medicine.](https://www.legalreader.com/physicians-ask-patients-explain-reason-visit-interrupt/)
2. **Primary Areas of Concern** 
    - this label and description need to be carefully worded so that the Veteran understands that the care team want to know what Acute/Chronic conditions are affecting them the most right now and what impact that is having on their every day lives.  This field coudl also be used to state any generic areas of importance the Veteran wants their care team to know is going on.  See [Initiative Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/README.MD)from Sharon for examples
   - text box (Large size ie. 500 characters)
   - example "Tell me how you're feeling right now"
   - consider deisgn for warning the veteran that the form may not be reviewd until appt. day and any urgent infoamtion shoudl be called in. 
3. **Questions you want to discuss with your care team.**
    - this should also have very clear description and maybe examples to the veteran knows what kind of things they can put here. 
    - free text
    - these should be individually entered and maybe prioritzed?
    - See [SHEP-Patient Experience Examples](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/feature-documentation/clinical-reminders/shep/pre-visit-checklist.docx)


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

 1. Need a strategy for Natural language processing to read key words that are sensitive or urgent attention by the care team (ie. depressed/suicide) and these questionnaires need to be flagged and sent for clinican review instead of waiting until day of appt. to be reviewed. 
    

## OKR's



---
## Issue Tracking 

| Initiative/Feature Name | Issue # | Design     | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
| [Feature: This Visit Questions ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/this-visit.md)   |   [#12110](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12110) | D  |  U   | A | Q |Q3 2020| N |
| [Collab] Usability Testing Prep Questionnaires MVP Priorities  |   [#11838](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11838) |  |   | A |  || |
* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_









