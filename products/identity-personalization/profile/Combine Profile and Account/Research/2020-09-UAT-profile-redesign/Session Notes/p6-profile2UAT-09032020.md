Participant #: 6

Note Taker:

Date:


# Conversation Guide: Profile UAT

### Project-specific setup

- Sign in to Zoom.
- We will be having users share their screens and testing the new profile. When the participant is ready, have them share their screen.
- When their screen is shared, send the link https://www.va.gov or have them go to www.va.gov. 
- **Note: We will not be recording these sessions**.

## Intro - 2 minutes

Thanks for joining us today! My name is Tressa and I also have some colleagues on the line observing and taking notes. Today we're going to talk about the profile page on VA.gov. We've just built this page and we want to make sure that it is all working properly in your account and that all of your information is showing up correctly.

Before we start, a few things I want to mention:

- **This entire session should take less than 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- **We will not be updating or changing any of your information today.** We are just testing the functionality of this page, and I will occasionally ask you to add something to a field, but we will not be saving any of these changes. 
- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your honest insights help us to figure out how we can improve the veteran experience, and we will not be offended by any opinions you express.
- **If for any reason and at any time you want to stop the session, please let me know.** 

## Warm-up/Screener Questions - 3 minutes

OK,let's get started.

1. First, can you tell me a little bit about yourself? (If stuck, prompt to ask about service experience, where they live, their work).
2. Do you currently receive disability compensation or pension payments from the VA?
  - If not: Do you know if you are eligible to recieve disability compensation or pension payments from the VA?
3. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account? 
4. Do you know your username and password? tessasnodgrass@gmail.com
  - If not: Are these readily accessible? Could get them?
  - If the user can not remember or retrieve their login credentials, end the session.
5. Can you tell me what type of computer you are using today? hp windows laptop
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed. 
6. Have to ever connected a third-party application to your VA.gov account, like Apple health or any other applications? No
7. Can you tell me which web browser you are using? chrome
8. Today we are going to observe you interacting with the new tools on your computer. Would you feel comfortable sharing your screen with me at this time?  
  - If no: Explain this is necessary for testing. If they are still unwilling, end the call.

**Screenshare**

OK, please share your screen, and then we will get started. 

## Navigating to the profile - only do one option per participant. 3 minutes

- I'd like you to open a new tab in your browser, and go to https://www.va.gov/ and login.

[Go through this flow with ~3 participants]

- Click on your name in the upper right-hand corner, select profile.
  - [x] **UAT TASK:** Confirm that they are LOA3. You'll know that they are because they'll see the profile. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**. 
  - [x] **UAT TASK:** The user's name and military badge will be on the top left.
  - [x] **UAT TASK:** Navigation has loaded properly and is showing all sections.
  - [x] **UAT TASK:** If a user has or is eligible for disability compensation or pension payments  - Direct deposit should shows in the navigation.
  - [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**

[Go through this flow with ~3 participants]

- In the 'Records' box in the lower right-hand corner, click on 'Change your address'. If they are LOA3, have them click on 'Go to your VA.gov profile'. 
  - [ ] **UAT TASK:** Confirm that they are LOA3. You'll know that they are because they'll see a green button that says 'Go to your VA.gov profile' . If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**.
- Click on 'Go to your VA.gov profile'. 
  - [ ] **UAT TASK:** Personal and Contact Information page shows up. (link works correctly)
  - [ ] **UAT TASK:** The user's name and military badge will be on the top left.
  - [ ] **UAT TASK:** Navigation has loaded properly and is showing all sections.
  - [ ] **UAT TASK:** If a user has or is eligible for disability compensation or pension payments  - Direct deposit should shows in the navigation.
  - [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**

[Go through this flow with ~3 participants]

- In the 'Disability' box in the top right, click on 'View your payment history'. Scroll down to 'What should I do if I need to change my direct deposit or contact information?', and then click the link that says 'Change your information online'. Scroll down to  'How can I change my VA direct deposit information online?' and click on the green button that says'Go to your profile'.
  - [ ] **UAT TASK:** Confirm that they are LOA3. You'll know that they are because they'll see a green button that says 'Go to your profile' . If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**.
  - [ ] **UAT TASK:** Personal and Contact Information page shows up. (link works correctly)
  - [ ] **UAT TASK:** The user's name and military badge will be on the top left.
  - [ ] **UAT TASK:** Navigation has loaded properly and is showing all sections.
  - [ ] **UAT TASK:** If a user has or is eligible for disability compensation or pension payments  - Direct deposit should shows in the navigation.
  - [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**
  
## Personal and Contact Information - 5 min

- So now we are looking at your profile. Does all of this information look correct?
  - [x] **UAT TASK:** Personal and contact information has been pulled in correctly

- Go ahead and click on 'How do I update my personal information?'
  - [x] **UAT TASK:** FAQ opens up and appears to be formatted correctly.
   
- Next, please click any of the Edit links you see.
  - [x] **UAT TASK:** Edit form opens and appears to be formatted correctly.
  
- With this form still open, click on another Edit link.
  - [x] **UAT TASK:** Required errors are returned.

- Click 'Ok'. Without changing anything in the form, click 'Update'.
  - [x] **UAT TASK:** Address saves, edit form closes.
  - [ ] **UAT TASK:** If it takes too long to save, the correct messaging is displayed.
  - [ ] **UAT TASK:** If the address cannot be saved, the required error is returned.
  - [ ] **UAT TASK:** If the address needs to be validated, the correct flow is delivered.
  
- Click 'Edit' on the same or different section. Click 'Delete'. Just a reminder, we won't actually delete it.
  - [x] **UAT TASK:** Correct alert is returned.
 
- Click 'Cancel' on the modal. Add any letter to any field - don't worry we won't change any of your information. Click 'Cancel'.
  - [x] **UAT TASK:** Correct alert is returned.

- Click 'Cancel' on the alert. This did not update or change your information in any way.
  - [x] **UAT TASK:** Form closes.
  
- If the participant has any empty fields: Please click on the link 'Please add your...'
  - [x] **UAT TASK:** Edit form opens and is formatted correctly.
  
- Click 'Cancel'. 
  - [x] **UAT TASK:** Form closes.
- Next, click on 'How will you use my contact information?'
  - [x] **UAT TASK:** FAQ opens up and appears to be formatted correctly.

- Next, scroll to the 'Contact email address' section. Click on the link 'Update email address on ...'.
  - [x] **UAT TASK:** Link goes to the website where they manage their information
 
 ## Military Information - 2 min
 
- Great. Let's go back to the profile. Now, can you scroll back up to the navigation on the left and click on 'Military information'. Does this information look correct?
  - [x] **UAT TASK:** Military Information page shows up and appears to be formatted correctly. 
  - [x] **UAT TASK:** The user's service information is pulled in correctly.
  - [ ] **UAT TASK:** If there is an issue, the correct error is returned.

- Next, will you click on 'What if my military service information doesn't look right?'
  - [x] **UAT TASK:** FAQ opens up and appears to be formatted correctly.
  
 ## Direct Deposit Information SKIP THIS SECTION IF THEY DO NOT HAVE DISABILITY OR PENSION PAYMENTS - 5 min
 
- Great. Now, can you click on 'Direct Deposit Information' in the left hand navigation. 

- (If applicable — skip if they already have 2FA) It looks like you need to set up 2FA. Let's do that before we continue (walk them through how to set up 2FA).
  - [ ] **UAT TASK:** If they don't have 2FA, they are prompted to add it.
  - [ ] **UAT TASK:** After they add 2FA, the direct deposit feature shows in the profile.

- Does this information look correct?
  - [x] **UAT TASK:** Direct Deposit Information page shows up and appears to be formatted correctly.
  
- Can you click on 'Edit'?
  - [x] **UAT TASK:** Edit form opens and is formatted correctly.
  
- OK, now click on 'Where can I find these numbers'?
  - [x] **UAT TASK:** FAQ opens up and appears to be formatted correctly.
  
- Next, without adding anything, click 'Update' while the form is blank.
  - [x] **UAT TASK:** Correct errors are returned.
 
- Next, add a 1 to the Routing Number field. Click out of the field. Click 'Cancel'.
  - [x] **UAT TASK:** Correct alert is returned.
  
- Click 'Cancel'. 
  - [x] **UAT TASK:** Form closes.
 
- For this next task I'm going to ask you to open the form again and add your direct deposit information and click 'update', even if it is already correct in your profile.  If you would feel more comfortable, you can stop screensharing while you add and save this information. 
  - [x] **UAT TASK:** Form closes, and the direct deposit information shows in the profile.
 
- Click View Payment History.
  - [x] **UAT TASK:** Link goes to eBenefits.
 
- Next, scroll down to the Education Benefits section. Can you click 'Go to eBenefits to change your information'?
  - [x] **UAT TASK:** Link goes to eBenefits.
  
- Next, click on 'Find out how to change your information by mail or phone'.
  - [x] **UAT TASK:** Link goes to Change your VA Direct Deposit Information.
  
 ## Account Security - 2 min
 
- Great. Now, can you scroll back up to the navigation on the left and click on 'Account Security'. 
  - [x] **UAT TASK:** Account Security page shows up and appears to be formatted correctly. 
  - [x] **UAT TASK:** Identity Verification is checked with correct messaging.
  - [x] **UAT TASK:** 2FA shows correct messaging depending on status.
  - [x] **UAT TASK:** Terms and Conditions shows correct messaging depending on status.
  - [x] **UAT TASK:** Sign in email is showing correct messaging.
  
- (ONLY IF APPLICABLE) Can you click on 'View terms and conditions for medical information'? 
  - [ ] **UAT TASK:** Link goes to Terms and Conditions page.
  
- Let's go back to the profile. Can you click on 'Update sign in email address on ...'?
  - [x] **UAT TASK:** Link goes to the website where they manage their information.
  
- Let's go back to the profile. Can you click on the 'Go to the VA.gov FAQs' link in the blue box?
  - [x] **UAT TASK:** Link goes to the FAQ page.
  
 ## Connected Apps - 5 min
 
- Great. Let's go back to the profile. Now, can you scroll back up to the navigation on the left and click on 'Connected Apps'. 
  - [x] **UAT TASK:** Connected apps page shows up and appears to be formatted correctly.  - same alert, Mark greenburg is digging in
  - [x] **UAT TASK:** The correct page is showing for if a Veteran has connected apps vs no connected apps. (Will most likely have no connected apps)
  - [ ] **UAT TASK:** If there is an error retrieving apps, the correct error is returned.
  
### If they DON'T have connected apps
- Can you click on the link that says 'Apple Health'?
  - [x] **UAT TASK:** Link goes to the Apple Health page.
  
- Great, let's go back to the profile. Can you click on the link that says 'iBlueButton'?
  - [x] **UAT TASK:** Link goes to the iBlueButton page.
  
- Great, let's go back to the profile. Can you click on the link that says 'MyLinks'?
  - [x] **UAT TASK:** Link goes to the MyLinks page.
  
- Great, let's go back to the profile. Can you click on 'How do I connect a third-party app to my profile'?
  - [x] **UAT TASK:** FAQ opens and appears to be formatted correctly. 
  
- Can you click on the 'frequently asked questions' link in the blue box?
  - [x] **UAT TASK:** Links to the FAQ page. 
  
### If they DO have connected apps
- Can you click on the link that says 'Learn about Apple Health'?
  - [ ] **UAT TASK:** FAQ opens and appears to be formatted correctly. 
  
- Next, click on 'Disconnect' next to (App). 
  - [ ] **UAT TASK:** 'Are you sure' modal opens and appears to be formatted correctly. 

- Click 'Disconnect'. 
  - [ ] **UAT TASK:** Correct alert is returned.
  - [ ] **UAT TASK:** If a user has no more connected apps, the page state changes to reflect that.
  - [ ] **UAT TASK:** If a user has other connected apps, the page stays the same to reflect that.
  
- Can you click on 'What other third-party apps can I connect to my profile'?
  - [ ] **UAT TASK:** FAQ opens and appears to be formatted correctly.
  
- Can you click on 'How do I connect a third-party app to my profile'?
  - [ ] **UAT TASK:** FAQ opens and appears to be formatted correctly.
  
- Can you click on 'What should I do if my records are wrong or out of date in a connected app'?
  - [ ] **UAT TASK:** FAQ opens and appears to be formatted correctly.
  
- Can you click on 'What should I do if I no longer trust a connected app'?
  - [ ] **UAT TASK:** FAQ opens and appears to be formatted correctly.
  
- Can you click on the 'frequently asked questions' link in the blue box?
  - [ ] **UAT TASK:** Links to the FAQ page. 
  
### Adding an app (only for Veterans who already have a connected app)

- Could you walk me through how you added an app? 
  - [ ] **UAT TASK:** Double check that the timestamp on the app is for when it was connected. 

## If time allows

- Can you take your browser window and make it the size of a phone?  Now in this view can you go to the personal and contact information page?
  - [x] **UAT TASK:** Mobile menu appears and is operating correctly.
  
- Go ahead and scroll through this page.
  - [x] **UAT TASK:** Mobile menu is sticky. 

## Post-Task Interview - 1 minutes

  - Do you have any feedback on what we looked at today?
  - Do you have any questions for me?

## Thank-You and Closing - 1 minutes

Well we really appreciate you taking the time to test these updates today. This helps us to make sure everything will work when we launch these updates for all veterans on VA.gov.

As a thank you for your participation, we'd like to send you a $50 thank-you check. This will be sent by Shannon, and she'll work with you to figure out the right place to send it.

Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!
