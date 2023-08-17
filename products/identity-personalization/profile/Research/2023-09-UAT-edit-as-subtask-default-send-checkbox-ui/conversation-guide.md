# Conversation Guide: Profile multi-feature UAT, September 2023

### Project-specific setup
- Check participant information to see what types of login(s) credentials they may have (Login.gov, ID.me, DS Logon, MyHealtheVet).

## Introduction - 2 minutes
Thanks for joining us today! My name is Liz. I am a researcher and designer who works on improving the VA.gov website so Veterans can get what they need quickly and easily. 

We’ve invited you to participate today to get your help in testing some technical changes we’ve made to the website. The changes we have made aren’t something anyone can see on the screen, but with your help we will be able to check whether we’ve set everything up correctly.

Before we start, I wanted to go over a few details:
- **This session should take 30 minutes of your time or less.** It involves me asking you to complete a few small tasks. Because I want to make sure we don’t keep you beyond half an hour, I may prompt you with the next question to keep things moving.
- **We will be able to see your real information today.** This may include some healthcare information and some claims information. However, you have the choice to stop screensharing during any of the tasks, and start again when you feel comfortable. 
- **I’ll be asking you to make some updates to the mobile number in your VA.gov profile.** We can revert things back to the way they were at the start of the session if you don’t want to save any of the changes permanently.
- **You may end the session at any time, for any reason.** Just let me know.

I have some teammates who would like to observe our session and take notes for me, but only if you're comfortable with that. They'll be muted and off camera and you won't have to interact with them. Would you be okay with that, or do you prefer to keep the session just the two of us?

Do you have any questions for me before we begin?

 ## Screen questions - 3 minutes
1. Can you confirm for me that you have a username and password for VA.gov?
2. When you login at VA.gov, what is the type of login you tend to use (options are: Login.gov, ID.me, DS Logon, MyHealtheVet)
   - If participant has neither a Login.gov account nor an ID.me account, end the session.
3. 

## Share screen and login to LOA3 account (either Login.gov or ID.me) - 5 minutes
Great, thanks for providing that information. I think we're good to move ahead. For the next step, I'll have you share you screen so we can look at VA.gov together. 
_Once can see their screen:_ Could you now open a browser and go to VA.gov? 
_Once they arrive at VA.gov:_ Next, could you login using -------? (either Login.gov or ID.me)

## UAT Task 1: Add mobile number - 3 minutes

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
   *Should trigger error message*
4. Enter 123456789 to the field. (This is an invalid phone number)
   *Should trigger field validation*
5. Perfect, now delete that, and enter a valid phone number into the field, and then press cancel. 
   *Should trigger modal*
6. Press `yes, cancel changes` in the modal.
   *Should return user to notification settings page with alert displayed*
7. Alright, now click the link again to add the mobile number, and this time, enter a valid number and press cancel again. 
   *Should trigger modal*
8. And press `No, go back to editing` in the modal.
   *Should return user to form*
9. Now press save.
   *Should return user to notification settings page, with slim success alert and phone number displayed*

Does the phone number look accurate here?

Great, thank you! This has been helpful. Now we can move onto the next task.

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

----------------------------------------
## Optional Tasks
----------------------------------------

## Closing - 1 minute
Okay, that's everything we were hoping to cover today. Thank you for taking the time to help us improve the VA.gov website. Your feedback is so helpful to us as we continue to work on the site and make sure it works well for Veterans.

Lastly, Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!
