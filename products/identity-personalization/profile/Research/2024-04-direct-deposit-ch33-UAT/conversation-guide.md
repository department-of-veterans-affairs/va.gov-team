# Conversation Guide: Direct deposit payment instruction consolidation UAT, April TBD, 2024

### Project-specific setup

- Check participant information to see what login credential they reported having (`Login.gov` or `ID.me`).

## Introduction - 2 minutes

Thanks for joining me today! My name is Pam. I am a researcher and designer who works on improving the VA.gov website so Veterans can get what they need quickly and easily.

The team I work with has made some updates to the backend system that helps run the direct deposit portion of each person’s account profile. I’m meeting with people like yourself to help me test these updates to make sure they are working as expected. 

Before we start, I wanted to go over a few details:

- **This session should take 30 minutes of your time or less.** It involves me asking you to complete a few small tasks. Because I want to make sure we don’t keep you beyond 30 minutes, I may prompt you with the next question to keep things moving.
- **While we won’t be recording this session, we will be able to see some of your real information today.** This may include some healthcare information and some claims information. However, you have the choice to stop screen sharing during any of the tasks, and start again when you feel comfortable.
- **You will need your direct deposit information today.** I will ask you to re-enter your direct deposit information in order to make sure the system is doing what it’s supposed to, but we will not be making any changes to your account.
- **You may end the session at any time, for any reason.** Just give me a heads-up. You will still be compensated for your time.

I have some teammates who would like to observe our session and take notes for me, but only if you're comfortable with that. They'll be muted and off camera and you won't have to interact with them. Would you be okay with that, or do you prefer to keep the session just the two of us?

Do you have any questions for me before we begin?

## Set-up questions - 3 minutes

1. My notes indicate that you receive direct deposit payments for:
	- [ ] just compensation & pension – NOT education benefits 
	- [ ] just education benefits – NOT compensation & pension
	- [ ] both education benefits AND compensation & pension
	 Is that correct? 
2. I also have in my notes that you use `Login.gov` or `ID.me` to log into VA.gov, is that correct? 
    - If participant has neither a `Login.gov` nor an `ID.me` account, end the session.
3. We're going to be looking at the direct deposit section of the website together and I'll need you to re-enter your direct deposit info to confirm everything is working as expected . Do you have your bank information handy? _If not, give them some time to get it together_.

## Context

The team I work with has made some updates to the backend system that helps run the direct deposit part of each person’s account profile. 

I’m meeting with people like yourself to help me test these updates to make sure our back-end systems are working and showing the correct information for everyone

This will involve trying to make some edits to your bank account information – however, none of the edits we try to make will actually save, so your bank account information will remain the same.

## Share screen and navigate to VA.gov - 5 minutes

For the next step, I'll have you share you screen so we can look at VA.gov together. 

_Once their screen is visible:_ Next, let’s open a browser and go to VA.gov. 

_Once they arrive at VA.gov:_ Go ahead and log in.

- [ ] Participant logs in with `Login.gov`  
- [ ] Participant logs in with `ID.me` 

## UAT Task #1: Confirm LOA3 account - 2 minutes

Alright, we’re just going to pause and make sure we’re seeing the right information on the screen (an identity-verified account).

- [ ]  Participant has `LOA3` account


**End the session if:**
```
- There is a "Verify your identity" prompt (means they are not LOA3).
```

## UAT Task #2: Confirm `read-only` Direct Deposit with LOA3 account - 2 minutes

_Once LOA3 account is confirmed:_ Next, let’s go look at your Direct Deposit settings. While we’re in read-only mode, can you confirm the following payment information is correct?

The participant confirms the following:
- [ ] bank name is correct
- [ ] last 4 digits of the account number is correct
- [ ] account type is correct

**End the session if:**
```
- There is a message saying they are *not* eligible for direct deposit- they might not receive any kind of payment. 
- There is a prompt to set up direct deposit- they might receive disability compensation via check instead.
```

## UAT Task #3: Confirm API data via dev tool widget - 2 minutes

_After confirming bank info with participant:_ Next, we’re going to double-check this same information on the back-end of this page. I’d like to direct your attention to a little tool we’ve temporarily added to this page for the purposes of this testing session.

**NOTE TO SELF // NEEDS UPDATING:** `describe what the dev tool widget looks like and what the participant needs to do to make the contents visible.`

Can you confirm whether the information shown in this little tool matches the information already on the screen? 

- [ ] The participant confirms the dev tool widget is displaying the same information as the website (and their records).

Again, this little tool is only available during our testing today, it won’t show up in your account again. Thanks for helping us peek under the hood to make sure things are working correctly!

## UAT Task #4: Cancel edit of direct deposit form - 2 minutes

Next, I'll have you click to `edit` your direct deposit info. Now click `cancel`, and let's see what happens.

- [ ]  When the participant clicks `edit` and then `cancel`, their direct deposit info remains the same.


## UAT Task #5: Edit and try to save blank form - 3 minutes

For the next few tasks, I need your help testing the system to make sure some safeguards are working correctly to prevent submission errors.

Let’s click `edit` again (the form should be blank when you open it). Instead of entering new info, try to `save` the blank form. 

We should see an error message and not be able to submit the form.

- [ ]  When the participant tries to `save` a bank form, they are unable to submit the form, and their direct deposit info remains the same.

## UAT Task #6: Edit and try to save with an invalid routing number - 3 minutes

Okay, go ahead and click edit again, and this time I will have you enter an **invalid routing number**.

Let’s fill the form out in order:
- whatever type of account you are currently using
- `18 12 34 567` as the invalid routing number
- whatever your account number is

Click `save` and we should see the system prevent us from putting in a routing account number that doesn’t exist.

- [ ] When the participant clicks `save`, they cannot submit the form due to the invalid routing number.

## UAT Task #7: Edit and try to save with short account number - 3 minutes

This task is similar to the last one, but instead of trying to save an invalid routing number, we’re going to try and save a **bank account number that’s too short**.

Let’s fill the form out in order:
- `Checking` as the type of account
- `25 60 74 974` as the routing number
- `1234` for the short account number 

Click `save` and we should see the system prevent us from putting in an account number that is too short.

- [ ] When the participant clicks `save`, they cannot submit the form due to the account number being ***under*** the character limit.

## UAT Task #8: Edit and try to save with long account number - 3 minutes

This task is similar to the last one, but instead of trying to save an account number that’s too short, we’re going to try and save an **account number that’s too long**.

Let’s fill the form out in order:
- `Checking` as the type of account
- `25 60 74 974` as the routing number
- `12 34 56 78 90 12 34 56 78` for the long account number 

Click `save` and we should see the system prevent us from putting in an account number that is too long.

- [ ] When the participant clicks `save`, they cannot submit the form due to the account number being ***over*** the character limit.

## UAT Task #9: Edit, re-enter direct deposit information, and click save for email notification - 10 minutes

As the last task for this part, I want to make sure that re-entering and saving your existing bank information triggers a confirmation email. 

Let’s click `edit` again, and this time, re-enter your own bank information.  If it makes you feel more comfortable, you can pause sharing your screen. 

Once all your information is in the form, click `save`.

_Once that step is complete_: That action should cause a confirmation email to get sent to your email address. Can you check and see if you've received a conformation email? (_Nothing has been changed, the email just just confirming that your information has been resaved_)

- [ ] The participant receives a confirmation email after saving their information.

## Closing - 1 minute

Alright, that's everything we wanted help testing with today. Thank you for taking the time to help us improve the VA.gov website. 

Thank you for spending time with us as we continue to work on the website and make sure it works well for Veterans.

Lastly, Perigean will be sending you a thank you note with a little blurb that you can pass along to other Veterans you may know to provide them the chance to participate in future research studies.

Thank you so much again, and enjoy the rest of your day!
