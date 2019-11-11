# Conversation Guide Template: Direct Deposit UAT

### Project-specific setup

- Sign in to GTM.
- We will be having users share their screens and testing the direct deposit feature. When the participant is ready, pass presenter roles to them and have them share their screen.
- When their screen is shared, send the beta link https://www.va.gov/profile-beta.
- **Note: We will not be recording these sessions**.

## Intro - 2 minutes

Thanks for joining us today! My name is Arthur and I also have some colleagues on the line observing and taking notes. Today we're going to talk about direct deposit at the VA. 

Before we start, a few things I want to mention:

- **This entire session should take about 10 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your honest insights help us to figure out how we can improve the veteran experience, and we will not be offended by any opinions you express.
- **If for any reason and at any time you want to stop the session, please let me know.** You will not be penalized in any way if we need to stop.

## Warm-up/Screener Questions - 3 minutes

OK,let's get started.

1. First, can you tell me a little bit about yourself? (If stuck, prompt to ask about service experience, where they live, their work).
2. Next, I'd like to confirm: do you receive disability compensation or pension payments from the VA?
- **If no, the participant can not complete UAT**. Confirm/probe if they seem confused, but if they are sure they do not receive compensation or pension payments, end the session.
3. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account? 
4. Do you know your username and password? 
  - If not: Are these readily accessible? Could get them?
  - If the user can not remember or retrieve their login credentials, end the session.
5. Can you tell me what type of computer you are using today? 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed. 
6. Can you tell me which web browser you are using?
7. Today we are going to observe you interacting with the new tools on your computer. Would you feel comfortable sharing your screen with me at this time?  
  - If no: Explain this is necesary for testing. If they are still unwilling, end the call.

**(Pass presenter rights).**

OK, please share your screen, and then we will get started.

## Testing direct deposit - 5 minutes

- I'd like you to open a new tab in your browswer, and go to https://www.va.gov/profile-beta and login.
  - [ ] **UAT TASK:** After login, link goes to profile.
  - [ ] **UAT TASK:** Confirm that they are LOA3. You'll know that they are because they'll see the profile. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**.  
- Now please click the "Direct Deposit Information" link you see at the top of the page. 
  - [ ] **UAT TASK:** Direct deposit link shows up.
  - [ ] **UAT TASK:** Direct deposit link jumps down to the direct deposit section.
- (If applicable — skip if they already have 2FA) It looks like you need to set up 2FA. Let's do that before we continue (walk them through how to set up 2FA).
  - [ ] **UAT TASK:** If they don't have 2FA, they are prompted to add it.
  - [ ] **UAT TASK:** After they add 2FA, the direct deposit feature shows in the profile.
- So now we're looking at the direct deposit feature. First, can you click "How do I change my direct deposit information for GI Bill and other education benefits?". 
  - [ ] **UAT TASK:** FAQ opens up and appears to be formatted correctly.
- Next, can you click "Go to eBenefits to change your information
  - [ ] **UAT TASK:** Link goes to eBenefits.
- Let's got back to the profile. Now, can you click "Find out how to change your information by mail or phone."
  - [ ] **UAT TASK:** Link goes to content page.
- Let's got back to the profile. Now, can you click "What’s my bank’s routing number?
  - [ ] **UAT TASK:** FAQ opens up and appears to be formatted correctly.
- OK, now please take a look at the direct deposit information. Is it correct?
  - [ ] **UAT TASK:** Direct deposit information has shown up in their profile.
  - [ ] **UAT TASK:** User confirms direct deposit info is correct. (**Note**: If the info is incorrect, there may be nothing wrong and it may be because they need to update it, but we should keep an eye out. If it is incorrect for multiple participants, there may be an issue with our connection to the backend.)
- Next, please click any of the Edit links you see.
  - [ ] **UAT TASK:** Direct deposit form opens and appears to be formatted correctly.
- Without filling anything out, please click Update while the form is still blank.
  - [ ] **UAT TASK:** Required errors are returned.
- Now click Cancel.
  - [ ] **UAT TASK:** Form closes.
- Please open the form again and add your direct deposit information, even if it is already correct in your profile. Then click "Update."
  - [ ] **UAT TASK:** Form closes, and the direct deposit information shows in the profile.

## Post-Task Interview - 1 minutes

- Do you have any feedback on what we looked at today?
- Do you have any questions for me?

## Thank-You and Closing - 1 minutes

Well we really appreciate you taking the time to test these updates today. This helps us to make sure everything will work when we launch these updates for all veterans on VA.gov.

As a thank you for your participation, we'd like to send you a $50 thank-you check. This will be sent by Shannon, and she'll work with you to figure out the right place to send it.

Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!
