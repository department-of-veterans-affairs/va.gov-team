# Conversation Guide: My VA UAT

### Project-specific setup

- Sign in to Zoom.
- We will be having users share their screens and testing the new profile. When the participant is ready, have them share their screen.
- When their screen is shared, send the link https://www.va.gov or have them go to www.va.gov. 
- **Note: We will not be recording these sessions**.

## Intro - 2 minutes

Thanks for joining us today! My name is Tressa and I also have some colleagues on the line observing and taking notes. Today we're going to talk about the My VA page on VA.gov. We've just built this page and we want to make sure that it is all working properly in your account and that all of your information is showing up correctly.

Before we start, a few things I want to mention:

- **This entire session should take less than 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- **We will not be updating or changing any of your information today.** We are just testing the functionality of this page, and I will occasionally ask you to add something to a field, but we will not be saving any of these changes. 
- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your honest insights help us to figure out how we can improve the veteran experience, and we will not be offended by any opinions you express.
- **If for any reason and at any time you want to stop the session, please let me know.** 

## Warm-up/Screener Questions - 3 minutes

OK,let's get started.

1. First, can you tell me a little bit about yourself? (If stuck, prompt to ask about service experience, where they live, their work).
2. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account?  
3. Do you know your username and password? 
  - If not: Are these readily accessible? Could get them?
  - If the user can not remember or retrieve their login credentials, end the session.
4. Can you tell me what type of computer you are using today? 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
5. Can you tell me which web browser you are using? 
6. Do you currently have a disability rating from the VA?
7. Do you currently or have you ever recieved benefits from the VA?
  - Do you currently recieve health care benefits from the VA?
8. Do you have any active claims or appeals at the VA?
9. Today we are going to observe you interacting with the new tools on your computer. Would you feel comfortable sharing your screen with me at this time?  
  - If no: Explain this is necessary for testing. If they are still unwilling, end the call.

**Screenshare**

OK, please share your screen, and then we will get started. 


## Navigating to My VA - ~1 minute

- I'd like you to open a new tab in your browser, and go to https://www.va.gov/ and login.

- Click on 'My VA' in the main navigation. 
  - [ ] **UAT TASK:** Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**. 
  - [ ] **UAT TASK:** The user's name and military badge will be on the top left.
  - [ ] **UAT TASK:** If a user has disability rating, it should show in the nametag.
  - [ ] **UAT TASK:** Navigation has loaded properly and is showing all appropriate sections.
  - [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**

## Personal and Contact Information - 5 min
