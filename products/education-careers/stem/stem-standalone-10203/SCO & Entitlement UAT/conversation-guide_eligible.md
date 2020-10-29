# STEM Standalone 10203 - UAT Conversation Guide

# STEM UAT Testing Script
October 26-November 6, 2020

## Moderator logistics
1. In the Attendees section, make sure everyone except the participant is on mute
1. Check your screensharing setup: 
   1. Close all additional screens, programs and windows that might interfere with the participant's experience while controlling your computer screen
   1. Clear all pre-fill data in your browser in advance of the session in case you need to use your browser and grant control. 
1. The webex facilitator locks the webex meeting when all participants are in attendance and ready to get started. 

*When the participant is ready and all required attendees (UX, BA, Development, Facilitator) are present,  begin the session with the following intro*

### Project-specific setup

## Introduction
Thanks for joining us today! My name is [NAME] and I also have some colleagues on the line observing and taking notes. The purpose of today's session is for us to observe you submitting an application for the VA's STEM Scholarship using the 22-10203 form on VA.gov. The Edith Nourse Rogers STEM Scholarship provides up to nine months of additional Post-9/11 GI Bill benefits (to a maximum of $30,000) to qualifying Veterans and Fry Scholars seeking an undergraduate STEM degree or who have earned a STEM degree and are seeking a teaching certification.

Before we get started, I want to begin by thanking you for your willingness to participate in this session. Your participation allows us to ensure that other veterans who will be using this form in the future will have a good experience.

A few more things I want to highlight:
•	** There are a few other individuals on the line observing.**  They are watching for any errors or unexpected behavior that may arise in the system during the application process.
•	** This entire session should take no more than 45 minutes.** 
•	** In this session, we want to hear your honest opinions.**  We will not be offended by any opinions you express, and we welcome your feedback.
•	** If for any reason and at any time you want to stop the session, please let me know.** 

## Script for Signed In participants
### First Task: Webex Sharing & Accessing the Application - 5 minutes
1.	The facilitator asks the participant to navigate to the following link (share in the chat) and share their screen: https://staging.va.gov/education/how-to-apply/
2. Request that the participant sign in to VA.gov by clicking the blue "Sign in" button in the top right corner of the screen. As they sign in, let them know that you will need the email address they use to sign in in order to grant them access to the features we're testing today. 
5. After the applicant is signed in, have them scroll down to the "How do I apply" section and click the green "Find your education benefits form" button.
6.	The applicant should select the "Applying to extend my Post-9/11 or Fry Scholarship benefits using the Edith Nourse Rogers STEM Scholarship" radio button
7.	The applicant should select the "Yes" radio button in response to the following question "Based on the eligibility requirements above, do you want to apply for this scholarship?" followed by selecting the green "Apply now" button.

#### Things to watch for:
1.	The individual needs to be signed in on VA.gov prior to accessing the wizard in order to see the expected functionality in the application.
2.	Confirm that after clicking "Apply now" the applicant is routed to va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203/introduction
4.	The applicant will continue through the application and pre-fill information should be included as available on the "Applicant information" screen.

### Second Task: Start & Complete the application
1.	On the application introduction screen, confirm that NO variation of the following alert appears at the top of the application (eligible participants should NOT see this message):
"You may not be eligible....Months you have left to use: XX months, XX days" (seen here: https://bahdigital.invisionapp.com/share/JHIAE4UVKA4#/screens/296040759)
2. The applicant should scroll to the bottom of the screen and click the button to begin their application.
3.	The applicant will continue through the application and pre-fill information will be included as available on the "Applicant Information" screen. 

#### Things to watch for:
1. Pages to review "entitlement" information: Introduction screen, Chapter 3
2. Confirm that the following page does NOT appear: "Program Details: Rogers STEM Scholarship eligibility summary" (Chapter 3) where remaining entitlement is displayed in the "Your remaining education benefits" alert.
3. On the direct deposit screen, applicants who do not want to impact any current payments they are receiving can select "I don't want to use direct deposit"

### Third Task: Review & Submit Application
1.	On the Application Review screen, have the applicant expand each accordion to ensure that the content matches their entries. You may want them to update their responses on this screen to see that all updates occur as expected. 
2.	When the applicant has confirmed everything is as expected, ask them to submit their application
3.	Capture their confirmation number so that it can be passed along to Education Services for review.
4. Have them stop sharing their screen and check their email to see if they received confirmation of their submission. 

#### Things to watch for:
- Does the user see the eligibility alerts? 
- Does prefill data populate correctly? 
- Does the form data populate “Review application” correctly?  
- Does the form submit? If not, be sure to capture any errors. If yes, be sure to capture the confirmation number

### Post-Task Interview - X minutes
- How did you think that went?
- Was there anything that was unclear as you were filling in the application? 
- What would you expect would happen next? 
- Any questions for me?

### Thank-You and Closing - X minutes
We really appreciate you taking the time to do this today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for other Veterans.
