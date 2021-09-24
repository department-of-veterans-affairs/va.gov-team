# Profile notification preferences UAT conversation guide

`draft`

### Project-specific setup

- Sign in to Zoom.
- We will be having users share their screens and testing the new notification preferences feature in profile. When the participant is ready, have them share their screen.
- When their screen is shared, send the link https://www.va.gov or have them go to www.va.gov. 
- **Note: We will not be recording these sessions**.

## Intro - 2 minutes

Thanks for joining us today! My name is Liz and I also have some colleagues on the line observing and taking notes. Today we're going to talk about the profile section of VA.gov. We've add a new notification settings feature and we want to make sure that it is all working properly in your account.

Before we start, a few things I want to mention:

- **This entire session should take less than 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- **If you have a mobile phone number in your profile, I'm going to ask you to remove it to test one piece of our functionality.** We can add it back at the end of the session.
- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your feedback helps us to figure out how we can improve the Veteran experience, and we will not be offended by any opinions you express.
- **We will be able to see your real information today.** This may include some healthcare information and some claims information. During any of the tasks if you feel uncomfortable sharing your screen with any of your information on it, feel free to stop screensharing and start again when you feel comfortable. 
- **If for any reason and at any time you want to stop the session, please let me know.** 

## Warm-up/Screener Questions - 3 minutes

OK, let's get started.

1. First, can you tell me a little bit about yourself? (If stuck, prompt to ask about service experience, where they live, their work).
2. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account? 

- If they do not know what that means, ask: Do you ever sign into any va websites, such as VA.gov or ebenefits, to access or apply for your benefits? (If yes: Can you talk me through how you do that?) 

3. Do you know your username and password? 
   - If not: Are these readily accessible? Could get them?
   - If the user can not remember or retrieve their login credentials, **end the session.**
4. Can you tell me what type of mobile device you are using today? 
   - If needed: I'm asking this question because sometimes the type of device can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
5. Can you tell me which web browser you are using? 
6. Do you currently or have you ever health care from the VA?
7. Today we are going to observe you interacting with the new tools on your computer. Would you feel comfortable sharing your screen with me at this time?  
   - If no: Explain this is necessary for testing. If they are still unwilling, **end the call.**

**Screenshare**

OK, please share your screen, and then we will get started. 


## Navigating to profile - 1 minute

- I'd like you to open a new tab in your browser, and go to https://www.va.gov/. 

- Once you are logged in, click on your name in the upper right-hand corner, select Profile. Let's check to see if you have a mobile number on file. If so, let's go ahead and remove it.
  - [ ] **UAT TASK:** Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**. 
  - [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**

## Notification settings with missing contact information - 2 minutes

- I'd like you to go ahead and click on notification settings

- User should see missing mobile number error
  - [ ] **UAT TASK:** Confirm correct error is showing
- Go ahead and click that link and add your number back
  - [ ] **UAT TASK:** Confirm alert link takes user to mobile section of contact information

## Post-Task Interview - X minutes

- Question 1
- Question 2
- Any questions for me? 

## Thank-You and Closing - X minutes

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans.

Thanks! Lastly, do you know any other Veterans, caregivers, or service members who might be willing to participate in a future user research session? 
    If Yes: Thank you! I'll have our team send you an email with a little blurb that you can pass along. 

Great, well thank you so much again, and enjoy the rest of your day!
