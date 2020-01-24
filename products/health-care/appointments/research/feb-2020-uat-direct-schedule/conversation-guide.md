# Conversation Guide: User Acceptance Testing Phase 4 - Create self-scheduled appointment
## VAOS MVP on VA.gov
### January-February 2020

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

- **Today we are using [Zoom / GoToMeeting] which will allow us to observe you interacting with the new tools on your computer. Have you used zoom before?** 
  - If no: Explain the screen sharing, & chat functions and how to find them. 
  
- **Can you confirm that you're now signed into VA.gov?** 
  - If yes, are you comfortable sharing your screen with me at this time? 
  
  **Ask participant to share their screen using the green 'share' button in Zoom.**


## Schedule New CC Appointment

**Once they are logged in, post link to health tools in chat window.** www.va.gov/health-care/schedule-view-va-appointments/appointments
  
- **I'd like you to open a new tab in your browswer, and go to the URL that I pasted in our chat:** www.va.gov/health-care/schedule-view-va-appointments/appointments
  - If chat not working, ask participant to go to 'Schedule and view your appointments' in the 'Health Care' card on va.gov. Then, add `/appointments` to the end of the URL
  - [ ] **UAT TASK:** *Confirm that USER does not see an error if they are enrolled in healthcare & registered to a system.*

- **Please take a close look at the appointments listed on this page. Can you confirm that the details look correct?** 
- [ ] **UAT TASK:** *Validate appointment details are correct.*

- **Do you need to schedule any new  appointments with your primary VA care provider today?**
  - If yes: great, let's go ahead and schedule one together now. Going through the scheduling process together will let us know if the tool we're testing works correctly.
  - If not: that's OK; we'll walk through the process of scheduling an appointment in order to make sure that everything works correctly. Then we'll stop just short of submitting the appointment so that we don't book you an appointment you don't need.

- **Are you OK with going through this process together today?**
  - IF yes: great, let's get started scheduling an appointment
  - If not: That's fine. Since we need to go through the scheduling process in order to test the tool today, we'll need to end the session [Go to wrap up].
  
- **Please schedule a new appointment**
  - [ ] **UAT TASK:** *Confirm user can find & click the 'schedule a new appointment' button*
  
- **Now, please choose primary care**
  
- **[If applicable] Now, choose the VA Care option**
  - [ ] **UAT TASK:** *Confirm participant sees VA / CC Choice Page if eligible for CC*
  
- **Next, choose the VA healthcare system and facility where you'd like to be seen**
  - [ ] **UAT TASK:** Ensure the list of systems and facilities is correct for the veteran
  
- **Now, please select one of the clinics you've been to before at your chosen facility
  - [ ] **UAT TASK:** Ensure that the list of clinics accurately reflects the clinics at facility that veteran has been to before
  - [ ] **UAT TASK:** Ensure the available clinic data is displayed correctly
  
- **Next, choose the preferred date of your appointment. We'll use this information to show you dates and times that are available close to your preferred date.**

- **Next, choose when you'd like to be seen**
  - [ ] **UAT TASK:** *Confirm participant is able to advance calendar to next chunk of months*
  - [ ] **UAT TASK:** *Confirm participant is able to select a date and time*
  - [ ] **UAT TASK:** *Confirm dates shown in calendar correspond to the preferred date entered on previous page*
    
- **Now, please enter the reason for your appointment**
  - [ ] **UAT TASK:** *Confirm 'reason' textarea is hidden by default and expands on selection of any reason*
  
- **Next, please choose the type of appointment you'd like to schedule.**
  
- **Lastly, please enter your preferred contact information**
  - [ ] **UAT TASK:** *Confirm that the prefilled email and phone are correct*
  
**Now, please review the information you entered for your appointment and, if you need the appointment, submit it**
  - [ ] **UAT TASK** *Confirm data is complete & matches what was entered in the form*
  - [ ] **UAT TASK** *Confirm that the appointment was scheduled successfully*
  
**Great, now let's check that the appointment matches what you entered. Can you please look at this confirmation page and check that it matches the information you expected to see?**
  - [ ] **UAT TASK** *Confirm that the confirmation page is accurate and complete*

**Let's make sure that this new appointment is showing for you in your appointments list by clicking the 'view appointments button'**
  - [ ] **UAT TASK** *Confirm that user is navigated to the list page correctly*
  - [ ] **UAT TASK** *Confirm that the dashboard / list page shows the new appointment*

## Wrap-up

Well we really appreciate you taking the time to step through these new tools with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans. Do you have any other questions before we wrap up? 

Thank you and enjoy your day! 
