# Notifications Feature Outline  

> _The purpose of this document is for designers, PMs, and engineers to track and maintain the various use cases that exist for a given product to align early on use cases and edge cases and and is best maintained alongside the product outline. Each user story, feature desciption, and design docs will be reviewed by the team before sprint grooming to brainstorm all use cases/edge cases early on._

## Product Documentation
[Questionnaires Product Outline ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md)
- [Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)

## High Level User Story/ies

### Unmet Need
**Notifications (4C)**

> 4C- As a Veteran, I want to be notified in advance of my health care visit that a questionnaire is needed to be completed, so that I don't have to fill it out in the waiting room and can complete when convenient and relevant for me.

> 4D - As a Veteran, I want to be notified in a similar or the same appointment reminder that I receive today, so that the questionnaire is in context of the visit I am planning to attend.


> As a Veteran, ...

* **Use Case:** 

* **Description:**

14.  Email Appointment Confirmation - VAOS/CPRS - sends an email confirmation of appointment booked - show link to clipboard that is due for the visit.
15.  Text Appointment Reminder - VeText - show link to clipboard that is due for the visit
Email Appointment Reminders - show a link (not form specific) to the questionnaire manager letting them know they have a clipboard to complete
Send a notification if the clipboard is not completed within 2 days of the appt. maybe even Save in progress message to come back and complete
Need to determine the time frame for appointments too far out and when we send a notification they have a questionnarie.


## Product Features
[Form to fill out for VeText and VANotify](https://app.smartsheet.com/b/form/2fe7e01103d44ae58706e72e12647c08)



## Mockup
[Mockups draft](https://zpl.io/aNepDW9)

# Technical Documentation 
[Notification tech feasability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/engineering/questionnaire-trigger/notification.md)
[Trigger tech feasability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/engineering/questionnaire-trigger/trigger.md)

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
|[Feature Outline- Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/notifications.md) | [#12165](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12170) |  -   | - | - |Q3 2020| N |

* Instructions to access in Staging
_Note: credentials should be stored in sensitive repos only_
