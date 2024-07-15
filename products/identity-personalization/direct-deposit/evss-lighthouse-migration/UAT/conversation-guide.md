# Conversation Guide: Direct deposit for compensation & pension EVSS > Lighthouse migration UAT, July 2023

### Project-specific setup
- Check participant information to see what types of login(s) credentials they may have (Login.gov, ID.me, DS Logon, MyHealtheVet).

## Introduction - 2 minutes
Thanks for joining us today! My name is Pam. I am a researcher and designer who works on improving the VA.gov website so Veterans can get what they need quickly and easily. 

What I hope to do today is get your help in testing some technical changes we’ve made to the website. The changes we have made aren’t something anyone can see on the screen, but with your help we will be able to check whether we’ve set everything up correctly.

Before we start, I wanted to go over a few details:
- **This session should take 30 minutes of your time or less.** It involves me asking you to complete a few small tasks. Because I want to make sure we don’t keep you beyond half an hour, I may prompt you with the next question to keep things moving.
- **You will need your direct deposit information today.** I will ask you to re-enter your direct deposit information in order to make sure the system is doing what it’s supposed to, but we will not be making any changes to your account.
- **We will be able to see your real information today.** This may include some healthcare information and some claims information. However, you have the choice to stop screensharing during any of the tasks, and start again when you feel comfortable. 
- **You may end the session at any time, for any reason.** Just let me know.

I have some teammates who would like to observe our session and take notes for me, but only if you're comfortable with that. They'll be muted and off camera and you won't have to interact with them. Would you be okay with that, or do you prefer to keep the session just the two of us?

Do you have any questions for me before we begin?

 ## Screen questions - 3 minutes
 1. Can you confirm for me that you have a username and password for VA.gov?
 2. When you login at VA.gov, what is the type of login you tend to use (options are: Login.gov, ID.me, DS Logon, MyHealtheVet)
	- If participant has neither a Login.gov account nor an ID.me account, end the session.
 3. Besides that, do you have logins for any of the other options?
 4. Lastly, we're going to be looking at the direct deposit section of the website together and I'll need you to re-enter your direct deposit info. Do you  have your bank information handy to make this as quick and easy as possible? _If not, give them some time to get it together_.
 
## Share screen and login to LOA3 account (either Login.gov or ID.me) - 5 minutes
Great, thanks for providing that information. I think we're good to move ahead. For the next step, I'll have you share you screen so we can look at VA.gov together. 
_Once can see their screen:_ Could you now open a browser and go to VA.gov? 
_Once they arrive at VA.gov:_ Next, could you login using -------? (either Login.gov or ID.me)

## UAT Task #1: Review Direct Deposit with LOA3 account - 2 minutes
_Next, go to the Direct Deposit section of Profile_

- [ ] **UAT TASK:** Confirm that they are LOA3. If they are not, they should see a "Verify your identity" prompt. If they are not LOA3, end the session.
- [ ] **UAT TASK:** Confirm that their direct deposit information is visible in the Profile (read-only view).
	* If see messaging that they are not eligible for direct deposit, then they likely do not receive disability compensation from the VA. If this is the case, end the session.
	* If see prompt to set up direct deposit, then they likely receive disability compensation via check, as opposed to direct deposit. If that's the case, move to optional task 6.
- [ ] **UAT TASK:** Confirm that their direct deposit information is correct in the Profile (read-only view).


## UAT Task #2: Cancel an edit to direct deposit info - 2 minutes
Next, I'll have you click to edit your direct deposit info. Now click cancel, and let's see what happens. 

- [ ] **UAT TASK:** When user clicks edit and cancel, their direct deposit info remains the same.

## UAT Task #3: Edit and try to save with errors - 3 minutes
Now I'll have you do the same first action again, click edit. But this time, click save.

- [ ] **UAT TASK:** When user clicks save, they cannot submit the form due to error(s).

## UAT Task #4: Edit and try to save with fake routing number - 3 minutes
Okay, go ahead and click edit again, and this time I will have you enter some information. For routing number, I want you to add a number that's fake, like 12345678. Then, for the rest of the form, please add your own correct information. If it makes you more comfortable, you can pause the screenshare while you do this step. Click save and let's see what happens.

- [ ] **UAT TASK:** When user clicks save, they cannot submit the form due to the bogus routing number.

## UAT Task #5: Edit, add direct deposit information, and click save - 10 minutes

As the last task for this part, I want you to click edit again, and this time I want you to enter your own information in all the fields. Again, if it makes you feel more comfortable, you can pause your screenshare. Once all your information is in the form, click save.

_Once that step is complete_: That action should cause a confirmation email to get sent to your email address. Can you check and see if you've received a conformation email? (_Nothing has been changed, the email just just confirming that your information has been resaved_)

- [ ] **UAT TASK:** When user clicks edit and save, they receive a confirmation email.

**If out of time, end session**
If time allows (and user has other VA logins), can move on to optional tasks below.
 
----------------------------------------
## Optional Tasks
_Ask the participant to complete these tasks if they stated at the beginning of the session that they have additional accounts on VA.gov.

## UAT Task #6: Switch to Login.gov or ID.me - 10 minutes
Okay now I'll have you log out of your VA.gov account and I want you to try to login using your ------ account (Login.gov or ID.me).

Now, navigate once again to the Direct Deposit section of your Profile and let's see what's there. 

- [ ] **UAT TASK:** Confirm that this account is also LOA3. If they are not, they should see a "Verify your identity" prompt.
- [ ] **UAT TASK:** Confirm that their direct deposit information is visible in the Profile (read-only view).

## UAT Task #7: MHV or DS Logon user - 10 minutes
Okay now I'll have you log out of your VA.gov account and I want you to try to login using your ------ account (MyHealtheVet or DS Logon).

Now, navigate once again to the Direct Deposit section of your Profile and let's see what's there. 

- [ ] **UAT TASK:** User sees the Direct Deposit section of Profile and a prompt to sign in using ID.me or Login.gov.

----------------------------------------

## Closing - 1 minute
Okay, that's everything we were hoping to cover today. Thank you for taking the time to help us improve the VA.gov website. Your feedback is so helpful to us as we continue to work on the site and make sure it works well for Veterans.

Lastly, Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!
