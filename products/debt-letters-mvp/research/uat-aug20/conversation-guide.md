# Debt Letters MVP UAT Conversation Guide

### Project-specific setup

- Sign in to Zoom.
- We will be having users share their screens and testing the new profile. When the participant is ready, have them share their screen.
- When their screen is shared, send the link https://www.va.gov/manage-va-debt/your-debt/ or have them go to www.va.gov. 
- **Note: We will not be recording these sessions**.


## Intro - 2 minutes

Thanks for joining us today! My name is ___ and I also have some colleagues on the line observing and taking notes. Today we're going to talk about a tool that allows veterans to access their VA debt letters online. We've just built this tool and we want to make sure that it is all working properly in your account and that all of your information is showing up correctly.

Before we start, a few things I want to mention:

- **This entire session should take less than 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- **We will not be updating or changing any of your information today.** We are just testing the functionality of this page, and I will occasionally ask you to add something to a field, but we will not be saving any of these changes. 
- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your honest insights help us to figure out how we can improve the veteran experience, and we will not be offended by any opinions you express.
- **If for any reason and at any time you want to stop the session, please let me know.** 

## Warm-up/Screener Questions - 3 minutes

Alright, let’s get started! 

1. Do you currently have a VA debt?
   - If yes: Can you tell me which type of VA debt you have? 
   - If no: Have you ever had a VA debt?

2. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account? 

3. Do you know your username and password? 
   - If no: Are these readily accessible? Could you get them?
   - If the user can not remember or retrieve their login credentials, let them know that this is necessary for the test and proceed to the [closing statements](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#thank-you-and-closing---1-minutes).

4. Can you tell me what type of computer you are using today? 
   - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.

5. Can you tell me which web browser you are using?

6. Today we are going to observe you interacting with the new tool on your computer. Would you feel comfortable sharing your screen with me?
   - If yes: Thank you! Please share your screen, and we can get started.   
   - If no: Explain this is necessary for testing. If they are still unwilling, proceed to the [closing statements](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#thank-you-and-closing---1-minutes) and end the session.

## Navigating to the tool - 3 minutes 

I’m going to paste a link in the Zoom chat. This link will be the way we access the tool today. Please open the link in a new tab in your browser. 

https://www.va.gov/manage-va-debt/your-debt/

Under the alert that reads, “Please sign in to manage your VA debt”, select the button “Sign in or create an account” 
- Please sign in with your DS Logon, MyHealtheVet, or ID.me account. 

## If the participant has never had a VA debt - 1 minute
 - [ ] **UAT Task:** The correct empty state is shown.

[[Proceed to post-task interview](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#post-task-interview---1-minutes)] 

## If the participant has a current VA debt - 5 -10 minutes depending on the number of debts

In order to make sure your information is showing properly, we’re going to compare the information shown on this page with your records. We’ll start with the information under ‘Your current debts’

 - [ ] **UAT Task:** The correct number of debts is shown under the ‘Your current debts’ section.

 - [ ] **UAT Task:** The correct debt type is shown in the debt card(s).
 
 - [ ] **UAT Task:** The correct date the debt was received is shown in the debt card(s). 

 - [ ] **UAT Task:** The correct amount owed is shown in the debt card(s).

 - [ ] **UAT Task:** The correct “Why might I have this debt” content is shown in the debt card(s).

[[Run through UAT for downloading letters](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#if-the-participant-has-letters-available---3---12-minutes)]

## If the participant doesn’t have a current debt, but they have resolved debts - 3 minutes

 - [ ] **UAT Task:** The correct empty state is shown under the ‘Your current debts’ section.

[[Run through UAT for downloading letters](https://github.com/department-of-veterans-affairs/va.gov-team/new/master/products/debt-letters-mvp/research/uat-aug20#if-the-participant-has-letters-available---3---12-minutes)]

## If the participant has letters available - 3 - 12 minutes

(**Note to moderator:** The least common letters we’ll see are the _debt increase letter_ and the _third demand letter_. Please test these downloads as you see them in sessions until reaching the desired participant count)

Great! We’re going to take a look at the table of debt letter(s) on this screen and make sure they match the letter(s) you’re able to download. We’re going to verify that the information in the table is correct, and then take a look at the letters themselves. 

 - [ ] **UAT Task:** The correct number of letters are shown under the ‘Your debt letters’ section.
 
 - [ ] **UAT Task:** The correct date is matched to the debt letter type for each debt letter

 - [ ] **UAT Task:** The table’s dates are shown in reverse-chronological order

### Run through downloading the first demand letter until ~3 participants have done this task - 3 minutes

Go ahead and download the first demand letter in the table. 

 - [ ] **UAT Task:** The letter downloads to the user’s computer

Please open the downloaded letter. 

 - [ ] **UAT Task:** The opened letter matches the letter information in the table.

### Run through downloading the second demand letter until ~3 participants have done this task - 3 minutes

Go ahead and download the second demand letter in the table. 

 - [ ] **UAT Task:** The letter downloads to the user’s computer

Please open the downloaded letter.

 - [ ] **UAT Task:** The opened letter matches the letter information in the table.

### Run through downloading the third demand letter until ~3 participants have done this task - 3 minutes

Go ahead and download the third demand letter in the table. 

 - [ ] **UAT Task:** The letter downloads to the user’s computer.

Please open the downloaded letter. 

 - [ ] **UAT Task:** The opened letter matches the letter information in the table.

### Run through downloading the debt increase letter until ~3 participants have done this task - 3 minutes

Go ahead and download the debt increase letter.

 - [ ] **UAT Task:** The letter downloads to the user’s computer. 

Please open the downloaded letter. 

- [ ] **UAT Task:** The opened letter matches the letter information in the table.

[Proceed to post-task interview] 

## Post-Task Interview - 1 minutes

Great! We’ve finished comparing the information shown on the screen with your records. 
 
- Do you have any feedback on what we looked at today?

- Do you have any questions for me?

## Thank-You and Closing - 1 minutes

We really appreciate you taking the time to test these updates today! This helps us to make sure everything will work as expected when we launch this tool for all veterans on VA.gov.

As a thank you for your participation, we'd like to send you a $50 thank-you check. This will be sent by Shannon, and she'll work with you to figure out the right place to send it.

Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!
 
