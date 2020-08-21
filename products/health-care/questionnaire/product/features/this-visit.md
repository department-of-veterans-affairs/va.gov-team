


# This Visit Feature  Outline

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature description, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Documentation
[Questionnaires Product Outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
- [Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)


## High Level User Story/ies

### Avoid having to repeat health history across the continuum of care

> **Visit Reason (5G)**  As a Veteran, I want to provide my care team with the reason for my visit so that they know why Im coming in for care and so I can prepare in advance if tests should be completed, noted stressors/triggers/concerns, or an acute concern should change my appointment date.

> **Whats Important to Me (5D)**  As a Veteran, I want to provide my story and whats important to me so that I am able to collaborate and parter with my care team in my health goals

> **Continuity of Care (5A)**  As a Veteran, I want to provide my current health status and updates to my medical history so that I do not have to feel I have to repeat the information to my nurse and provider in the same and subsequent visits.

* **User Story:** As a Veteran, I want to provide my my care team with what is important to me to focus on during this visit.
* **Use Case(s):**  
A challenge for many physicians as they don't have time to review and discuss so making these important areas prominent and the focus is important.
	- Scientists have found that physicians only spend, on average, 11 seconds listening to their patients describe the reason for their visit before interrupting them, according to a study that was recently published in the [Journal of General Internal Medicine.](https://www.legalreader.com/physicians-ask-patients-explain-reason-visit-interrupt/)
- Understanding what is really bringing them in that day and what ongoing concerns they have.   For example,  major triggers/life events (ie. lost wife or my left foot hurt)
	- When the call center schedules the appt and enters a vague or unclear booking reason (ie."patient preference")  its hard for the triage nurse/care team to know the main concern and why they are coming in, they could have potentially done certain things prior to the visit. 
		- ie. "pain urination" can order a UA and already collected data vs. then to send to lab and wait for tests
		- if they have an immediate issues ie. chest pain - then they can potentially call in advance to make a different appointment ie. the emergency room or urgent care.
		- 	Acute and Chronic problems affecting them and knowing which ones the Veteran is concerned about so the Dr.s keep asking them until exhaust the list. (This is due to the chronic problem list in the electronic health record is never kept up to date across providers and facilities).

- Social History (social, behavioral, and family)

	- 	Many Veterans have multiple physiological/social problems which are the focus for every visit - so knowing which ones are prominent and affecting them the most to improve health outcomes.
	-  Many Veterans are disadvantaged and have significant financial and family problems so understanding their limitations or blockers to healthy living due to living environment and finances can impact willingness or ability to seek additional treatment
	- Understanding situations like "wife passed away 2 months ago" or noticing triggers to topics/situations ie. alcohol or substance use so the care team can offer resources to help. 


## Product Features

### Reason For Visit (RFV)
Veterans need the ability to review the reason for their visit to ensure accuracy and provide additional updates to the primary purpose of the appointment. This ensures their care team is prepared in advance of the appointment to discuss the health issue, make pre-appt. recommendations for the veteran, and feel like they start the visit already knowing the veterans main concern.  
  
  - Examples of what a Provider will say :  _“What can I do for you today?”_ or _“Tell me what brings you in today.”_ 
  - **Booking Note:** The first place a RFV can be documented is in the Staff Scheduling solution (ie. CPRS/Vista) where the Call center or Reg Clerk will ask the patient the reason they want an appointment.  This is typically a codified list.  (Need Scheduling or API fields for example). In addition, there is a corresponding free text box available for the clerk to enter a description in the patients words what is going on. 
  - **Reason for Visit:** The second place a RFV can be documented is by the Veteran via VAOS (see. [VAOS screen shot for example content](https://drive.google.com/file/d/1c-Ih1vlmavEpUwz5BdeyaJ44KYdHxWcE/view?usp=sharing).)  This is typically a codified list and a corresponding free text box available for the Veteran to enter a description in their words what is going on to focus "Please provide any additional details you'd like to share with your provider about this appointment.  
 - [ ] Display a the codified RFV field in a display only text for reference. This field will populate from the booked appointment Booking Note (link here for technical implementation)
	 - [ ] If no codified RFV field is available then this field should not be available.
	 - [ ] See UI for Label of the field
 - [ ] Display a free text field (~100-250 characters) for additional description of the RFV.
	 - [ ] This field should pre-populate from the Booking Note if available and allow the user to edit the description
	 - [ ] See UI for Label of the field
	 - [ ] A description should be viewable in the screen to tell the user where the pre-populated information came from.  
		 - [ ] Question - Can this description be hidden if the field is not pre-populated from the booking note?
		 - [ ] Question - Does this field exist in the PGD or are we creating a new data field ?
		 - [ ] Can we pre-populated unauth (based on info we get with the trigger/link) and auth from CPRS/VAOS.

		

### Primary Areas of Concern 
Veterans need the ability to state what the main areas of their everyday life that is impacting their health and wellness so that the care team can adjust the discussion and treatment plan to focus on their priorities.  This section might or might not be related to the RFV and instead can be social or chronic condition focused. ie. quit smoking, family divorce, working too much to eat healthy, diabetes making feet swell and can't walk each day. .etc 
	
   - Provide ability to document the main areas of important health and social factors that are impacting everyday life so that the care team can prioritize what to discuss for the visit
	 - Example of what a Provider might say    - example _"Tell me how you're feeling right now"_
	 - See [SHEP-Patient Experience Examples](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/feature-documentation/clinical-reminders/shep/pre-visit-checklist.docx)
 - [ ] Display a free text field (~500 characters) 
 - [ ] See UI for Label of the field
	 - _The label and description need to be carefully worded so that the Veteran understands that the care team want to know what Acute/Chronic conditions are affecting them the most right now and what impact that is having on their every day lives.  This field could also be used to state any generic areas of importance the Veteran wants their care team to know is going on. (ie. a bio or small journal entry)_
 - [ ] This will be a new field that is not captured in the EHR or MHV today and will not be pre-populated via any interface.  The potential intended purpose of this field could be a cross encounter view and allow the veteran to continue to update their primary area of concern with each visit questionnaire.  
	 - [ ] Question- how will this be stored as a new data element in PGD?
 - [ ] Consider a UI message warning the user that the form may not be reviewed until appt. day and any urgent information should be called in. See [Out of Scope #1](fff) for areas to improve this feature at a later time.
	 - _This is important as the veteran may enter a sensitive or harmful verbiage in the text box and the form may not be viewed by VA staff or the care team for days or weeks.  ie. suicide or harming themself or emergency type symptoms._

### Questions you want to discuss with your care team
 Veterans need the ability to capture questions they want to ask their provider during their visit.  This will help users have a place to keep a running list of specific things to address with the care team.  
   
   - Example: Medication Refill Request, When to schedule followup appt., Symptoms that they are experiencing, Services the VA provides for assistance
    
> “Certain areas I need to talk about - jotted notes down as I have memory issues and I don't want to forget any” - _from Veteran feedback_ 

 - [ ] Display a free text field (~100 characters) 
 - [ ] Provide the ability for the user to add as many individual question as they want 
 - [ ] Consider a UI where these could be individually prioritized?

## Mockup
<img src="https://lh4.googleusercontent.com/zlblIROvEa51aOraK-TobcY0to-Es1LG6B48sgTG3mdgmsCWmEQAWnApmbWv1uSaIEeAefpK_E1gggZlX-mM3M1MtC6WXtNPhnMY5Syzr8H9WmNCKfS6KBvT_YNoWKncUOLCdIHO" width="400">

- [9/21/2020 Mockups Zeplin](https://zpl.io/VOOek8j) 
- [WIP Content for Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/design/proof-of-concept/content-v1.md) 

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

 1. Need a strategy for Natural language processing to read key words that are sensitive or urgent attention by the care team (ie. depressed/suicide) and these questionnaires need to be flagged and sent for clinician review instead of waiting until day of appt. to be reviewed. 
    

## OKR's

-TBD


## Issue Tracking 

| Initiative/Feature Name | Issue # | Design     | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
| [Feature: This Visit Questions ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/this-visit.md)   |   [#12110](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12110) |[#12280](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/12280)   |  |  | |Q3 2020|  |
| [Collab] Usability Testing Prep Questionnaires MVP Priorities  |   [#11838](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11838) |  |   ||  || Closed|
* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_




