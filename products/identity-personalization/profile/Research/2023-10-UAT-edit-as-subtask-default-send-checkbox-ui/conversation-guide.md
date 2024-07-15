# Conversation Guide: Profile multi-feature UAT, October 2023

## Project-specific setup
- Add participant to feature flipper:
  -  `profile_use_field_editing_page`
  -  `profile_use_notification_settings_checkboxes`
  -  `profile_use_hub_page`

## Introduction - 2 minutes
Thanks for joining us today! My name is Liz. I am a researcher and designer who works on improving the VA.gov website so Veterans can get what they need quickly and easily. 

We’ve invited you to participate today to get your help in testing some changes we’ll be making to the website. I'm giving you access to the changes for today's session, and will remove them once we're done. If you come back to these parts of the website later today, they'll be different than what you see in this session.

Before we start, I wanted to go over a few details:
- **This session should take 30 minutes of your time or less.** It involves me asking you to complete a few small tasks. Because I want to make sure we don’t keep you beyond half an hour, I may prompt you with the next question to keep things moving.
- **We need you to log into your VA.gov account today.** Can you confirm with me you have your login information available and are able to log in?
- **We will be able to see your real information today.** This may include some healthcare information and some claims information. However, you have the choice to stop screensharing any time, and start again when you feel comfortable. 
- **I’ll be asking you to make some updates to your mobile phone number and notification settings in your VA.gov profile.** We can set things back to the way they were at the start of the session if you don’t want to save any of the changes permanently.  You should get some email confirmations about the changes made to your mobile number.
- **You may end the session at any time, for any reason.** Just let me know.

I have some teammates who would like to observe our session and take notes for me, but only if you're comfortable with that. They'll be muted and off camera and you won't have to interact with them. Would you be okay with that, or do you prefer to keep the session just the two of us?

Do you have any questions for me before we begin?

 ## Share screen and login to LOA3 account (either Login.gov or ID.me) - 5 minutes
Great, I think we're good to move ahead. For the next step, I'll have you share you screen so we can look at VA.gov together. 
_Once can see their screen:_ Could you now open a browser and go to VA.gov? 
_Once they arrive at VA.gov:_ Thank you - now I’ll have you log into the website.

## UAT Task 1: Add mobile number - 4 minutes

The first thing we’re going to do is check to see if you have a mobile number in your profile. Let’s go to the Contact information section of your profile. (Guide user if needed)

- *If there is a phone number, have them remove it.*

Great, now let’s go over to the notification settings section of profile. 
- *User should see the alert prompting them to add a mobile number*

Some of these next things may feel a little tedious but this will help us be sure we’ve set everything up correctly on the website. 
1. Please go ahead and click the link to add your mobile phone number.
   *Should take user to sub-task page*
2. Alright, don’t enter anything, and please hit cancel.
   *Should take user back to notification settings page with alert*
3. Now click the link again, and this time, hit save without entering any data.
   *Should trigger field validation error message*
4. Enter 123456789 to the field and hit save. (This is an invalid phone number)
   *Should update field validation to include "at least 10 digits"*
5. Perfect, now delete that, and enter a valid phone number into the field, and then press cancel. 
   *Should trigger modal*
6. Press `yes, cancel changes` in the modal.
   *Should return user to notification settings page with alert displayed*
7. Alright, now click the link again to add the mobile number, and this time, enter 8887776666 and press cancel again. 
   *Should trigger modal*
8. And press `No, go back to editing` in the modal.
   *Should return user to form*
9. Now press save.
   *Should return user to notification settings page, with slim success alert and phone number displayed*

Let’s look at this page, is that what you entered? Great, thank you! This has been helpful. Now we can add back your actual phone number.

- [ ] **UAT TASK:** Confirm the link takes the user to the sub-task flow
- [ ] **UAT TASK:** Confirm the cancel button takes the user back to the alert
- [ ] **UAT TASK:** Confirm saving without data triggers the correct error message
- [ ] **UAT TASK:** Confirm invalid number entry triggers the field validation message
- [ ] **UAT TASK:** Confirm modal warning is triggered when data is entered, and cancel is pressed
- [ ] **UAT TASK:** Confirm the cancel button in the modal takes the user back to the alert
- [ ] **UAT TASK:** Confirm the return to editing button in the modal takes the user back to editing
- [ ] **UAT TASK:** Confirm valid number save redirects person to notification settings page
- [ ] **UAT TASK:** Confirm success message is correctly displayed on the notification settings page
- [ ] **UAT TASK:** Confirm phone number is correctly displayed on the notification settings page
- [ ] **Usability notes:** Did the user experience any usability hurdles or provide UX feedback?

## UAT Task 2: Update mobile number - 2 minutes

1. Please go ahead and click the link to update your mobile phone number.
   *Should take user to sub-task page*
2. Now I'm going to have you update the number to `1234567890` and press save.
   *Should trigger non-US area code slim alert message*
3. Thank you. Now add your actual mobile number, and then save it. 
   *Should take user back to notification settings page with success alert*

Does the page correctly show the change you made?

Do you want to keep this number in your profile? If not, let’s remove it. 

**Facilitator note:** *Take user through steps of removing the number from contact info page if needed, and then get them back to the notification settings page*

- [ ] **UAT TASK:** Confirm update link takes user to sub-task page
- [ ] **UAT TASK:** Confirm non-US area code displayed as expected
- [ ] **UAT TASK:** Confirm phone number is correctly displayed on the notification settings page after saving
- [ ] **Usability notes:** Does the participant mention anything about removing the mobile number from the sub-task page?

## UAT Task 3: Update notification settings - 3 minutes

*Should be on notification settings page*

As a last step, we’d like to make sure updates to the settings on this page work. 
Have you ever made updates to any of these notifications on the page before?

Ok, thank you. 
1. Go ahead and change the setting for each checkbox. If it’s checked, uncheck it, and if it’s not checked, go ahead and check it. We’ll change everything back to the way it was when you’re done.

Thank you, that was very helpful for our team. Now I just want to be sure we leave your account in the state that you want it - go ahead and check the box for any notifications that you do still want to receive, and uncheck the box for those you do not want to receive.

- [ ] **UAT TASK:** Confirm the success message displays for each notification
- [ ] **UAT TASK:** Confirm phone number is correctly displayed on the notification settings page
- [ ] **Usability notes:** Does the participant make any comments on the UX or encounter any usability hurdles?

----------------------------------------
## Optional Task 1: Review authenticated menu - 5 minutes

Since we have a little extra time, there are 2 more things I’d like to get your feedback on.  Can you click on your name in the heading?  I’d like to hear your impressions of the items in that menu.

**Note to facilitator:** If needed, ask “What do you think about seeing links to dependents and letters in this menu?”

Don’t click on anything yet. Where do you expect each link to take you?

Go ahead and click on dependents.  How does this page line up with what you expected?

And now click on letters. How does this page line up with what you expected?

#### Things to watch for
- [ ] What were the participants impressions of the menu items? 
- [ ] How did the dependents page align with what they expected?
- [ ] How did the letters page align with what they expected?


----------------------------------------

## Closing - 1 minute
Okay, that's everything we were hoping to cover today. Thank you for taking the time to help us improve the VA.gov website. Your feedback is so helpful to us as we continue to work on the site and make sure it works well for Veterans.

Lastly, Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!

## Post-session task
- Remove participant from feature flipper:
  -  `profile_use_field_editing_page`
  -  `profile_use_notification_settings_checkboxes`
  -  `profile_use_hub_page`
