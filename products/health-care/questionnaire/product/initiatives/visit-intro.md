
# Visit Intro Initiative (Proof of Concept)

### Product Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Target Release - Q3 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/2020/q3-2020-target-launch.md)
* Link to [research plan ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/research-plan.md) and [card sort](https://adhoc.optimalworkshop.com/optimalsort/j2b7m7j5/sort)
* Link to [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/conversation-guide.md)
* Link to [Design Screenshots/Prototype](https://app.mural.co/invitation/mural/vsa8243/1596490423105?sender=aricka0272&key=a3d9728b-bc26-42a8-96ca-d4879cd613e1)

## Epic User Story
As a Veteran, I want to provide my my care team with what is important to me to focus on for this visit.
 
## Features

### Workflow Diagram 
<img src="https://lh4.googleusercontent.com/mc82qg9BOcOue42kP_Z26dCtgiM2Yx2Iq9dgXglUs5SAwTQr-CQKMK9cTE7Kv6KggaRzjLxfuXnB23S7dwXPKZcxoQewdsOMDQI7tybOLEwnP4hyB3V_YslHb4t3e0_-cu3_7b5k" width="500">

 [Mural Workflow Diagram](https://app.mural.co/t/vsa8243/m/vsa8243/1596561661701/0afd94dfc8598b105524e87c8828b10dba98bbf2)
### Avoid having to repeat health history across the continuum of care

**Visit Reason (5G)**
> As a Veteran, I want to provide my care team with the reason for my visit so that they can prepare in advance if tests should be completed, noted stressors/triggers, or an acute concern should change my appointment date.

 1. [Reason for Visit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md) - can we pre-populated unauth (based on info we get with the trigger/link) and auth from CPRS/VAOS.  

**Whats Important to Me (5D)**

> As a Veteran, I want to provide my story and whats important to me so that I am able to collaborate and parter with my care team in my health goals

 2. [Health Conditions, Concerns or Important Information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md)
 5. [Questions I have for the visit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md).

**Continuity of Care (5A)**

> As a Veteran, I want to provide my current health status and updates to my medical history so that I do not have to feel I have to repeat the information to my nurse and provider in the same and subsequent visits.

 4. Demographics - Show patient demographics that is visible to the clinical care team. Is the va.gov Profile or MPI ?
 5. Clinical Note - Questionnaire is saved as a clinical note into appropriate folder in patient/encounter in CPRS.


### Do similar things the same way with seamless next steps
**Digital Front Door (4A)**

> As a Veteran, I use MHV and VA.gov to access all my health and benefits information with the VA, and want to be able to access my health questionnaires in a similar way,  so the workflow is consistent and convenient to my current experience.

 6. Questionnaire Trigger - VAOS/CPRS - association of facility/encounter to trigger questionnaire that applies.
 7. Landing page - for explaining/Get Started which should include login.
 8.  Review and Confirm Page-** show the completed form has been saved successfully and sent to clinic 
 9. Print PDF - of completed questionnaire 
 10. Forms List - Completed forms page to show the form that was completed and others that have not been
    completed or in progress 
 11. Save in Progress - Ability to save and come back later to submit the form 
 12. Canceled Appointment - Automatically remove the questionnaire from the form list 

**Do not require a Login  (4B)**

> As a Veteran, I want to have an easy and seamless experience in filling out questionnaires that do not require me to login as I often do not have access to my medical information given the current authentication process to verify my identity.

 16. Unauthenticated - No pre-populating - what CPRS data can we tie to the questionnaire link and then based on that information where can it go back in CPRS once quest. is submitted. ie. patient context at person or encounter level?
 17. Authenticated - Are we showing all 2 IDP or just ID.me?  Need to integrate with questionnaire flow to authorize for showing RFV and Demographics?

**Notifications (4C)** 

> As a Veteran, I want to be notified in advance of my health care visit that a questionnaire is needed to be completed, so that I don't have to fill it out in the waiting room and can complete when convenient and relevant for me.

 13. VAOS Appointment List - link for Veteran to select to launch the questionnaire for that encounter.
 14. Email Appointment Confirmation -  VAOS/CPRS - sends an email confirmation of appointment booked - show link to clipboard that is due for the visit.

**Notifications (4D)**

> As a Veteran, I want to be  notified in a similar or the same appointment reminder that I receive today, so that the questionnaire is in context of the visit I am planning to attend.

 15. Text Appointment Reminder - VeText - show link to clipboard that is due for the visit


---
| Initiative Name | Issue # | Design     | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
|[Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)| [#12102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12102) | D  |  U   | A | Q |Q3 2020| N |
| [Feature: This Visit Questions ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md)                               |   [#12110](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12110) | D  |  U   | A | Q |Q3 2020| N |
| [Feature: Authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/authentication.md)                             |      [#12114](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12114)  | D  |  U   | A | Q |Q3 2020| N |
| Feature: Notifications                       |                 | D  |  U   | A | Q |Q3 2020| N |
| Feature: VAOS- appt details and list                            |                | D  |  U   | A | Q |Q3 2020| N |
| Feature: Profile/MPI                          |                 | D  |  U   | A | Q |Q3 2020| N |
| [Feature: Questionnaires List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/questionnaires-list.md)                         |          [#12115](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12114)      | D  |  U   | A | Q |Q3 2020| N |
| Feature: PGD Data Integration                           |                 | D  |  U   | A | Q |Q3 2020| N |
