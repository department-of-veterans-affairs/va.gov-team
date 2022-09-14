Participant #:

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
  
 ## Connected Apps - 5 min
 
- Great. Let's go back to the profile. Now, can you scroll back up to the navigation on the left and click on 'Connected Apps'. 
  - [ ] **UAT TASK:** Connected apps page shows up and appears to be formatted correctly. 
  - [ ] **UAT TASK:** The correct page is showing for if a Veteran has connected apps vs no connected apps. (Will most likely have no connected apps)
  - [ ] **UAT TASK:** If there is an error retrieving apps, the correct error is returned.
  
### If they DON'T have connected apps
- Can you click on the link that says 'Apple Health'?
  - [ ] **UAT TASK:** Link goes to the Apple Health page.
  
- Great, let's go back to the profile. Can you click on the link that says 'iBlueButton'?
  - [ ] **UAT TASK:** Link goes to the iBlueButton page.
  
- Great, let's go back to the profile. Can you click on the link that says 'MyLinks'?
  - [ ] **UAT TASK:** Link goes to the MyLinks page.
  
- Great, let's go back to the profile. Can you click on 'How do I connect a third-party app to my profile'?
  - [ ] **UAT TASK:** FAQ opens and appears to be formatted correctly. 
  
- Can you click on the 'frequently asked questions' link in the blue box?
  - [ ] **UAT TASK:** Links to the FAQ page. 
  
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
  - [ ] **UAT TASK:** Mobile menu appears and is operating correctly.
  
- Go ahead and scroll through this page.
  - [ ] **UAT TASK:** Mobile menu is sticky. 

## Post-Task Interview - 1 minutes

  - Do you have any feedback on what we looked at today?
  - Do you have any questions for me?

## Thank-You and Closing - 1 minutes

Well we really appreciate you taking the time to test these updates today. This helps us to make sure everything will work when we launch these updates for all veterans on VA.gov.

As a thank you for your participation, we'd like to send you a $50 thank-you check. This will be sent by Shannon, and she'll work with you to figure out the right place to send it.

Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!

