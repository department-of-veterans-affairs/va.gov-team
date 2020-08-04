# Visit Intro - Proof of Concept Scope

#### [Target Release - Q3 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/release-plan/2020/q3-2020-target-launch.md)

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
