# Conversation Guide: User Acceptance Testing Phase 2 - Cancel appts / requests; create VA appointment request
## VAOS MVP on VA.gov
### December 2019

- Link to give participant: www.va.gov/health-care/schedule-view-va-appointments/appointments
  - Alternatively: ask participant to navigate to www.va.gov and click on 'Schedule and view your appointments' in the 'Health Care' card. Then, add `/appointments` to the end of the URL

- [ ] *Make sure you are not showing your screen.*

- [ ] *Close other windows and turn off notifications.*

- [ ] *Confirm you are logged into va.gov and have admin access to [feature flipper UI](https://api.va.gov/flipper/features/va_online_scheduling) in case new email needs to be added on the fly*

- [ ] *Confirm the participant is using Google Chrome, has downloaded Zoom, can share their screen.*

- [ ] *When the participant is ready, begin the session with the following introduction.*

## Intro - 5 minutes

**Thank you for joining us today! My name is {name}, and I also have some colleagues on the line observing. Today we're going to have you try out a new tool to help you view and schedule your VA health appointments.**

**Before we start, there are a few things I'd like to mention:**

- We aren’t trying to sell or promote any product or service to you. 
- If anything looks weird or out of place during in this session, please mention it. Your feedback will help us make improvements. 
- During this session, we’ll ask you to sign in to va.gov with your ID.me or MHV Premium username and password and access the new tools. We will not be able to see or record your password. Then we'll ask you to share your screen with us and click on several links. 
- When your account is on the screen, we will ask you to confirm that you're seeing your correct information. This will help us to make sure everything's working the way it should. Please know that we are not recording today's session, so your personally identifiable information will not be shared. 
- There are no right or wrong answers. I won’t be offended by any opinions you express. 
- This entire session should take no more than 30 minutes. I want to be respectful of your time. 
- If for any reason and at any time you want to stop the session, please let me know. 

Does that all make sense, and sound okay to you?

Great! Any questions before we get started?

## Login

- **To start, can you confirm for me that you have a MHV Premium or ID.me account?**
  - If no: Do you have a DS Logon Premium account? 
    - Yes: use the DS Logon Premium account to log in
    - No: Ok, unfortunately, we will need to end the session because we need you to have these accounts. 

- **Do you know your username and password?** 
  - If not: Are these readily accessible that you could get them? 
  
- **Have you signed into VA.gov before?** 
  - If Yes: great, did you provide the email you use to sign into VA.gov to the perigean team before today's session?
  - If not: Are you willing to do that today? It may require you to go through some steps to authenticate.
    - Yes: Great; You may be asked to provide an email address to authenticate. I'll need that email address so I can ensure that you can see the tool we're testing today. 
    - No: Ok, without having you sign in on VA.gov we will not be able to complete today's session. 
  
  >> **MAKE SURE THE EMAIL IS ON THE WHITELIST OR ADD IT TO THE WHITELIST.** 

- **Can you tell me what type of computer and browser you are using today?** 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.

- **Today we are using zoom which will allow us to observe you interacting with the new tools on your computer. Have you used zoom before?** 
  - If no: Explain the screen sharing, & chat functions and how to find them. 
  
- **Can you confirm that you're now signed into VA.gov?** 
  - If yes, are you comfortable sharing your screen with me at this time? 
  
  **Ask participant to share their screen using the green 'share' button in Zoom.**


## Schedule New Appointment

**Once they are logged in, post link to health tools in chat window.** www.va.gov/health-care/schedule-view-va-appointments/appointments
  
- **I'd like you to open a new tab in your browswer, and go to the URL that I pasted in our chat:** www.va.gov/health-care/schedule-view-va-appointments/appointments
  - If chat not working, ask participant to go to 'Schedule and view your appointments' in the 'Health Care' card on va.gov. Then, add `/appointments` to the end of the URL
  - [ ] **UAT TASK:** *Confirm that USER does not see an error if they are enrolled in healthcare & registered to a system.*

- **Please take a close look at some of the appointments listed on this page. Can you confirm if the details look correct?** 
- [ ] **UAT TASK:** *Validate appointment details are correct.*

- **Do you need to make any new healthcare appointments with the VA?**
  - If yes: great, let's go ahead and schedule one together now. Going through the scheduling process together will let us know if the tool we're testing works correctly.
  - If not: that's OK; we would like to schedule one for a kind of appointment that you're used to. After we schedule the appointment, we'll quickly cancel it together. This will let us test that the tool works correctly. This won't affect your ability to schedule other appointments in the future.

- **Are you OK with going through the scheduling process together today?**
  - IF yes: great, let's get started scheduling an appointment
  - If not: That's fine. Since we need to go through the scheduling process in order to test the tool today, we'll need to end the session [Go to wrap up].
  
- **Please schedule a new appointment**
  - [ ] **UAT TASK:** *Confirm user can find & click the 'schedule a new appointment' button*
  
- **Now, please choose a type of care**
  - [ ] **UAT TASK:** *Confirm user can select any type of care*
  - [ ] **UAT TASK:** *Confirm follow-up page shows if user selects 'sleep medicine'*
  - [ ] **UAT TASK:** *Confirm 'not available' modal shows if user selects 'podiatry'*
  
- **Now, choose where you'd like to have this appointment**
  - [ ] **UAT TASK:** *Confirm participant sees an accurate list of systems and facilities depending on registration*
  - [ ] **UAT TASK** *Confirm participant is able to continue after selecting a facility. If at limit, confirm outstanding request.*
  
- **Next, choose when you'd like to be seen**
  - [ ] **UAT TASK:** *Confirm participant is able to advance calendar to next chunk of months*
  - [ ] **UAT TASK:** *Confirm participant is able to select up to three preferred times*
  - [ ] **UAT TASK:** *Confirm participant is able to select AM or PM for each preferred time*
  
- **Now, please choose the reason for this appointment**
  - [ ] **UAT TASK:** *Confirm 'additional info' textarea is hidden by default and shows once user selects a reason for appointment*
  
- **Now, please choose how you'd like to be seen**
  - [ ] **UAT TASK:** *Confirm 'additional info' textarea is hidden by default and shows once user selects a reason for appointment*
  
- **Lastly, please enter your preferred contact information**
  - [ ] **UAT TASK:** *Confirm that the prefilled email and phone are correct*
  
**Now, please review the information you entered for your appointment and submit the request**
  - [ ] **UAT TASK** *Confirm data is complete & matches what was entered in the form*
  - [ ] **UAT TASK** *Confirm that the request submission is successful*
  
**Great, now let's check that the request matches what you entered. Can you please look at this confirmation page and check that it matches the information you expected to see?**
  - [ ] **UAT TASK** *Confirm that the confirmation page is accurate and complete*

**Let's make sure that this new appointment request is showing for you in your appointments list by clicking the 'view appointments button'**
  - [ ] **UAT TASK** *Confirm that user is navigated to the list page correctly*
  - [ ] **UAT TASK** *Confirm that the dashboard / list page shows the new request*
 
 ## Cancel Pending Appointment
**Looking at this list, are there any confirmed or pending appointments that you need to cancel?**
- If yes: Great, let's cancel it now
  - [ ] **UAT TASK:** *Confirm user can cancel successfully or that user gets correct error message about calling in*
- If not: OK, let's make another appointment and then come back to cancel it
  - Take user through creating a new appointment request for a different type of care, then repeat cancel attempt on the new request


## Wrap-up

Well we really appreciate you taking the time to step through these new tools with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans. Do you have any other questions before we wrap up? 

Thank you and enjoy your day! 
