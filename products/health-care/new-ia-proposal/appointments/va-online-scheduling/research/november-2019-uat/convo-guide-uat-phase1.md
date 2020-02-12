# Conversation Guide: User Acceptance Testing Phase I - View only
## VAOS MVP on VA.gov
### November 2019

- Link to give participant: www.va.gov/health-care/schedule-view-va-appointments/appointments

- [ ] *Make sure you are not showing your screen.*

- [ ] *Close other windows and turn off notifications.*

- [ ] *Confirm the participant is using Google Chrome, has downloaded Zoom, can share their screen.*

- [ ] *When the participant is ready, begin the session with the following introduction.*

## Intro - 5 minutes

**Thank you for joining us today! My name is {name}, and I also have some colleagues on the line observing. Today we're going to have you try out a new tool to help you view your VA health appointments.**

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
  - If no: Ok, unfortunately, we will need to end the session because we need you to have these accounts. 

- **Do you know your username and password?** 
  - If not: Are these readily accessible that you could get them? 
  
- **Have you signed into VA.gov before ?  ** 
  - If not: Are you willing to do that today? It may require you to go through some steps to authenticate.
  - If no: Ok, without having you sign in on VA.gov we will not be able to complete today's session. 
  
- **Did you sign into VA.gov before today?** 
  - If yes: Great, did you provide your email address to our Perigean team prior to today's session? 
  
  - If no: Ok, I'd like you to try to sign in now. You may be asked to provide an email address to authenticate. I'll need you to give me that email address, so I can ensure that you can see the tool we're testing today. 
  
  >> **MAKE SURE THE EMAIL IS ON THE WHITELIST OR ADD IT TO THE WHITELIST.** 

- **Can you tell me what type of computer and browser you are using today?** 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed. 

- **Today we are using zoom which will allow us to observe you interacting with the new tools on your computer. Have you used zoom before?** 
  - If no: Explain the screen sharing, & chat functions and how to find them. 
  

- **Can you confirm that you're now signed into VA.gov? ** 
  - If yes, are you comfortable sharing your screen with me at this time? 
  
  **(Pass presenter rights).**


## View screen

**Once they are logged in, post link to health tools in chat window.** www.va.gov/health-care/schedule-view-va-appointments/appointments 
  
- **I'd like you to open a new tab in your browswer, and go to the URL that I pasted in our chat:** www.va.gov/health-care/schedule-view-va-appointments/appointments
  - [ ] **UAT TASK:** *Confirm that USER does not see an error if they are registered for healthcare.*

- **Do you have any upcoming health appointments at the VA?**
  - If Veteran does NOT have appointments: 
  - [ ] **UAT TASK:** *Confirm that USER does not see any appointments listed.*
  
  - **END Session - go to bottom of screen & read THANK YOU TEXT** 
  
IF Veteran DOES have appointments: 
- **Please look at the individual appointment cards on this screen. Do you see all of the appointments you expected to see?** 
  - [ ] **UAT TASK:** *Validate that none of their appointments are missing.*
  
IF APPOINTMENTS ARE MISSING: PASTE https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/appointments. They should be able to auto login to MHV and see that. 
-   **I just pasted a new link in the chat. Would you go to a new tab and go to that link?** [pause while they do this] **Do you see all of your appointments listed here? ** 

FOR ANY APPOINTMENTS SHOWING: 
- **Please take a close look at some of the appointments listed on this page. Can you confirm if the details look correct?** 
- [ ] **UAT TASK:** *Validate appointment details are correct.*


## Wrap-up

Well we really appreciate you taking the time to step through these new tools with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans. Do you have any other questions before we wrap up? 

Thank you and enjoy your day! 










