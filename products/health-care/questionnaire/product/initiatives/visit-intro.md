
# Visit Intro Initiative (Proof of Concept)

### Product Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Target Release - Q3 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/2020/q3-2020-target-launch.md)
* Link to [research plan ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/research-plan.md) and [card sort](https://adhoc.optimalworkshop.com/optimalsort/j2b7m7j5/sort)
* Link to [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/conversation-guide.md)
* Link to [Design Screenshots/Prototype](https://app.mural.co/invitation/mural/vsa8243/1596490423105?sender=aricka0272&key=a3d9728b-bc26-42a8-96ca-d4879cd613e1)

## Epic User Story
As a Veteran, I want to provide my my care team with what is important to me to focus on for this visit.

**Clinician Use Case Example:** 
You are a primary care clinician seeing patients in your office. You glance at the intake form of your last patient of the day and notice that she is a 38-year-old woman with left-sided neck pain for 1 week. She is a patient whom you have never met before. You have 15 minutes for her visit.

-   **How can you elicit the patient's full agenda for the visit in 1 minute or less?**
-   **How can you elicit a patient-centered description of her neck pain?**
-   **How can you obtain the personal and emotional context of her neck pain?**
-   **How can you determine other environmental or social factors not related to her neck pain that may impact her care?**
-   **How can you determine if her neck pain is her only concern or reason for her visit?**


## Solution Approach
The patient interview is the primary way of obtaining comprehensive information about the patient in order to provide effective patient-centered care.  An approach used to obtain information from the patient, usually starting with determining the patients chief complaint, also known as the reason for the healthcare visit, and then delving further into tan exploration of the patients specific complaint and problem.  A comprehensive patient interview includes inquiring about the patients medical, medication, social, a personal, and family history, as well as a thorough review of systems and physical examinations. 

The first impression you make on your patient will weigh on the rest of the patient interview as well as affect your relationship with the patient. Building a good rapport sets the tone for the interview an allows the patient to feel comfortable with you thereby making the lines of communication more open and honest. Patients may sometimes withhold information if they feel uncomfortable or anxious about sharing their complaints because of a lack of feeling respected, feeling as though their words are not being heard, or quite simply not knowing who you are and what your role is in their care. [the patient interview](http://samples.jbpub.com/9781449652722/9781449645106_CH01_001_036.pdf) 

Start with open-ended question “How can I help you today?” brings focus to the purpose of the visit, enabling patients to discuss anything relevant to their health, and emphasizes the physician’s role as a helper. It is the preferred initial statement for initial and follow-up visits.

- Numerous studies document the need to improve physician-patient communication. Patients report that physicians are not sufficiently attentive to their concerns, and patients often do not understand what they are told. When interviewed immediately after office visits, patients recall only one-half or less of important information given to them. [Physicians Ask Patients to Explain Reason for Visit, Then Interrupt](https://www.legalreader.com/physicians-ask-patients-explain-reason-visit-interrupt/)


## Features

### Workflow Diagram 
<img src="https://lh4.googleusercontent.com/mc82qg9BOcOue42kP_Z26dCtgiM2Yx2Iq9dgXglUs5SAwTQr-CQKMK9cTE7Kv6KggaRzjLxfuXnB23S7dwXPKZcxoQewdsOMDQI7tybOLEwnP4hyB3V_YslHb4t3e0_-cu3_7b5k" width="500">

 [Mural Workflow Diagram](https://app.mural.co/t/vsa8243/m/vsa8243/1596561661701/0afd94dfc8598b105524e87c8828b10dba98bbf2)
### Avoid having to repeat health history across the continuum of care

**Visit Reason (5G)**
> As a Veteran, I want to provide my care team with the reason for my visit so that they know why Im coming in for care and so I can prepare in advance if tests should be completed, noted stressors/triggers/concerns, or an acute concern should change my appointment date.

 1. [Reason for Visit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md) - can we pre-populated unauth (based on info we get with the trigger/link) and auth from CPRS/VAOS.  
 

**Whats Important to Me (5D)**

> As a Veteran, I want to provide my story and whats important to me so that I am able to collaborate and parter with my care team in my health goals

 2. [Health Conditions, Concerns or Important Information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md)
 3. [Questions I have for the visit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md).

**Continuity of Care (5A)**

> As a Veteran, I want to provide my current health status and updates to my medical history so that I do not have to feel I have to repeat the information to my nurse and provider in the same and subsequent visits.

 4. Demographics - Show patient demographics that is visible to the clinical care team. Is the va.gov Profile or MPI ?
 5. Clinical Note - Questionnaire is saved as a clinical note into appropriate folder in patient/encounter in CPRS.


### Do similar things the same way with seamless next steps
**Digital Front Door (4A)**

> As a Veteran, I use MHV and VA.gov to access all my health and benefits information with the VA, and want to be able to access my health questionnaires in a similar way,  so the workflow is consistent and convenient to my current experience.

 6. Appointment details from scheduling solution so we can show the veteran appt. date, time, facility, and any other details about the visit the questionniare is associated with.  Current strategy is looking into VAMF to read Vista scheduling tables and writing our own backend service to retrieve.
 7. Questionnaire Trigger - VAOS/CPRS - association of facility/encounter to trigger questionnaire that applies.
 8. Landing page - for explaining/Get Started which should include login.
 9. Review and Confirm Page-** show the completed form has been saved successfully and sent to clinic 
 10. Print PDF - of completed questionnaire  
 11. Forms List - Completed forms page to show the form that was completed and others that have not been
    completed or in progress 
 12. Save in Progress - Ability to save and come back later to submit the form 
 13. Confirmation page showing the veteran they have sumbitted the questionnaire successfully
 14. Canceled Appointment - Automatically remove the questionnaire from the form list and consider all other status of appointments if additional workflows need considered.
 15. Creat Feature flags to show and hide questionnaires workflow on va.gov

**Do not require a Login  (4B)**

> As a Veteran, I want to have an easy and seamless experience in filling out questionnaires that do not require me to login as I often do not have access to my medical information given the current authentication process to verify my identity.

 16. Unauthenticated - No pre-populating - what CPRS data can we tie to the questionnaire link and then based on that information where can it go back in CPRS once quest. is submitted. ie. patient context at person or encounter level?
 17. Authenticated - Are we showing all 2 IDP or just ID.me?  Need to integrate with questionnaire flow to authorize for showing RFV and Demographics?

**Notifications (4C)** 

> As a Veteran, I want to be notified in advance of my health care visit that a questionnaire is needed to be completed, so that I don't have to fill it out in the waiting room and can complete when convenient and relevant for me.

 18. VAOS Appointment List - link for Veteran to select to launch the questionnaire for that encounter.
 19. Email Appointment Confirmation -  VAOS/CPRS - sends an email confirmation of appointment booked - show link to clipboard that is due for the visit.

**Notifications (4D)**

> As a Veteran, I want to be  notified in a similar or the same appointment reminder that I receive today, so that the questionnaire is in context of the visit I am planning to attend.

 20. Text Appointment Reminder - VeText - show link to clipboard that is due for the visit


---
## Issue Tracking 

| Initiative/Feature Name | Issue # | Design     | User Testing | Accessibility  | QA - Test Case  | Launch    | Notes 
| ---------------------------------------------------| ---------- | -------------   | ---------    | ---------      | ---------       | --------- | ----- | 
|[Visit Intro Initiative (Proof of Concept)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/visit-intro.md)| [#12102](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12102) | D  |  U   | A | Q |Q3 2020| N |
| [Feature: This Visit Questions ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/this-visit.md)   |   [#12110](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12110) | D  |  U   | A | Q |Q3 2020| N |
| [Feature: Authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/authentication.md)                             |      [#12114](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12114)  | D  |  U   | A | Q |Q3 2020| N |
| [Feature: Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/notifications.md)    |    [#12165](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12165) | D  |  U   | A | Q |Q3 2020| N |
| [Feature: VAOS- Appt Details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/vaos-appt-details.md)   |      [#12169](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12169) | D  |  U   | A | Q |Q3 2020| N |
| [Feature: VAOS- Appt List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/vaos-appt-list.md)                         |      [#12171](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12171)           | D  |  U   | A | Q |Q3 2020| N |
| [Feature: Veteran Demographic Information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/demographics.md)                          |   [#12170](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12170)             | D  |  U   | A | Q |Q3 2020| N |
| [Feature: Questionnaires List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/questionnaires-list.md)                         |          [#12115](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12114)      | D  |  U   | A | Q |Q3 2020| N |
| [Feature: PGD Data Integration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/features/pgd.md)                             |    [#12172](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12172)             | D  |  U   | A | Q |Q3 2020| N |


