# Visit Intro Initiative - Proof of Concept

## Product Reference Links
* [Questionnaires Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/product-outline.md#healthcare-experience---questionnaires-product-outline)
* [Target Release - Q3 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/2020/q3-2020-target-launch.md)
* Link to [research plan ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/research-plan.md) and [card sort](https://adhoc.optimalworkshop.com/optimalsort/j2b7m7j5/sort)
* Link to [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/research/veteran-prioritization/conversation-guide.md)
* Link to [Design Screenshots/Prototyp](https://app.mural.co/invitation/mural/vsa8243/1596490423105?sender=aricka0272&key=a3d9728b-bc26-42a8-96ca-d4879cd613e1)


<img src="https://lh4.googleusercontent.com/mc82qg9BOcOue42kP_Z26dCtgiM2Yx2Iq9dgXglUs5SAwTQr-CQKMK9cTE7Kv6KggaRzjLxfuXnB23S7dwXPKZcxoQewdsOMDQI7tybOLEwnP4hyB3V_YslHb4t3e0_-cu3_7b5k" width="500">

- [Mural Workflow Diagram](https://app.mural.co/t/vsa8243/m/vsa8243/1596561661701/0afd94dfc8598b105524e87c8828b10dba98bbf2)

## Feature Workflows in Scope 

 1. **VAOS Appointment List** - link for Veteran to select to launch the questionnaire for that encounter.
 2. **Questionnaire Trigger** - VAOS/CPRS - association of facility/encounter to trigger questionnaire that applies.
 3. **Email Appointment Confirmation** -  VAOS/CPRS - sends an email confirmation of appointment booked - show link to clipboard that is due for the visit.
 4. **Text Appointment Reminder -** VeText - show link to clipboard that is due for the visit 
 5. **Landing page** for explaining/Get Started which should include login. 
 6. **Unauthenticated** - No pre-populating - what CPRS data can we tie to the questionnaire link and then based on that information where can it go back in CPRS once quest. is submitted. ie. patient context at person or encounter level?
 7. **Authenticated** - Are we showing all 2 IDP or just ID.me?  Need to integrate with questionnaire flow to authorize for showing RFV and Demographics? 
 8. **Demographics** Show patient demographics that is visible to the clinical care team. Is the va.gov Profile or MPI ?
 9. [**This Visit Questions**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/product/initiatives/this-visit.md)
	 - **Reason for Visit** - can we pre-populated unauth (based on info we get with the trigger/link) and auth from CPRS/VAOS.  
	 - **Concern or Important Information** 
	 - **Questions I have for the visit.** 
 10. **Review and Confirm Page-** show the completed form has been saved successfully and sent to clinic
 11. **Print PDF** of completed questionnaire
 12. **Forms List** - Completed forms page to show the form that was completed and others that have not been completed or in progress
 13. **Save in Progress** - Ability to save and come back later to submit the form 
 14. **Canceled Appointment** - Automatically remove the questionnaire from the form list 
 15. **Clinical Note** - Questionnaire is saved as a clinical note into appropriate folder in patient/encounter in CPRS.
