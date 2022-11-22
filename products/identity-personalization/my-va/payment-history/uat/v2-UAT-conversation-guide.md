# Conversation Guide for My VA Payment Information v2 UAT

- [ ] Make sure feature is turned on for user
- [ ] Review whether or not the participant roster states the participant has VA debt and/or payments
- [ ] Start a thread in #feedback-backchannel
- [ ] Turn on closed captions in the session so that Zoom generates a transcript of the recording

## Starting the session
- _Keep observers in waiting room to ask participant if they still consent to having observers in the session. Tell them to have their camera on with full name displayed for a brief introduction to particpant when they are admitted to the session._
- _When the participant is ready, begin the session with the following intro._

## Intro - 2 minutes

- Thanks for joining us today! My name is Angela and I'm a designer for VA. Today we're going to talk about a new feature on VA.gov that will help Veterans get their recent details about VA payments and debts.

- Before we start, a few things I want to mention:

- **I also have some other colleagues in the waiting room who would like to observe and take notes.** Are you okay with letting them in for this session?
	- _If participant does not consent, ask the observers to kindly leave the Zoom via Slack._
	- _If participant consents, let other observers into room and allow a short pause to say hello._ Here are some other members from our website team - please go ahead and introduce yourselves.
	- _Observers introduce their name and role_
	- Thank you observers! Please turn off your cameras to save bandwidth.
- **This entire session should take about 45 minutes.** I want to be sure not to keep you any longer, so I may occasionally prompt you with the next question or topic to keep us on schedule.
- **In this session, we want to hear your honest opinions.** We are not testing your ability; we are testing our work so you cannot say or do anything wrong here. I will not be offended by any opinions you express, and I welcome your feedback. As you go through the site, it'll be really helpful if you can think out loud as much as possible.

- **We will be looking at your real account info in VA.gov today.** This means we will be able to see some of your personal information which may include benefit payments and debt information. If at any point you are uncomfortable, feel free to stop sharing your screen.
- **If for any reason and at any time you want to stop the session, please let me know.**
- **Are you comfortable if I record my screen and audio as we talk today?** We use the recordings to confirm that we have captured your opinions accurately. The recordings are destroyed after we complete analysis, and none of your comments will be attributed to you directly.
  - If yes: **Once I start recording, I am going to confirm that you are ok with me recording this session once more.**

*Start recording.*

- **I have started recording**. I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

## Warm-up Questions - 5 minutes

**Task goal: Confirm they qualify for the study, learn how they receive information from VA about financial things, and how that's meeting their needs.**

- Before we look at the website, I'd like to get a little background information from you:

- As part of the scheduling for this session, we asked if you had either received payments from VA or incurred education, compensation, pension, or health care-related debt. Can you tell me how you got info from VA about updates on those payments or debts?
  
- You mentioned that you receive updates on your payments or debts via *insert what the participant said*. What information about your payments and debts is included? Was that helpful? Was anything missing?
  
- How do you manage your VA finances? Online, by mail, etc?

- Let's talk about the website - how do you use VA.gov? *If they use it:* Do you ever visit My VA when you are logged in?

- Do you know your username and password to log in to VA.gov?
	* If not: Are these readily accessible? Could get them?
	* If the user can not remember or retrieve their login credentials, **end the session.** Without login credentials, we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.
	
- Today we are going to observe you interacting with the new feature on your computer. Are you comfortable sharing your screen with me once you log in?
	* If no: Explain this is necessary for testing. If they are still unwilling, **end the call.** I completely understand. However if you're not comfortable sharing your screen for the session, we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.
	
- Great! Thanks for confirming all of that. Let’s move on to the website.

## 1. Review outstanding debts section - 10 minutes

- Please open a new tab in your browser, and go to https://www.va.gov/.

- Once you are logged in, you can share your screen with me. Let me know if you need any help doing that.

- Please click on My VA. Okay let's take a look at this page. You can scroll up and down it if you'd like.

- Explain to me what you think this page is for and what's jumping out to you on it.

- [ ] **UAT TASK:** Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**. I see that your identity isn't yet verified. Because of that we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.
- [ ] **UAT TASK:** Confirm the outstanding debts and benefit payments sections are showing for all users
- [ ] **Usability**: Do they notice the outstanding debts section? Scanning through the page, do they mention that those amounts seem to be due and payments seem to have been paid to them?

- Okay, let’s look at the section that says "Outstanding debts."

- Does everything related to your outstanding debts seem right to you?

- *If the user has had debt in the past or currently has debt, ask:* Would you expect to see a link to your past debt letters here? Is that something you might reference once a debt is paid off?

- Is anything confusing to you about this section? Is there anything you expect to see that you don't?

- [ ] **UAT TASK**: Confirm debt and copay cards accurately reflect data or “You don't have any outstanding debts to show” message and Learn about VA debt link is displaying.
- [ ] **Usability**: Do screen magnification, low vision users, and screen reader user struggle with anything here? Observe if they're able to easily find the debt info and view all information about it at once, and if any secondary links seem hard to see or access.
- [ ] **Usability**: Are users interested in seeing a link to past debt letters on My VA? How useful is that info once a debt is paid off?
- [ ] **Usability**: Do users find anything confusing about this section?

## 2. Confirm all outstanding debts links - 5-7 minutes

- Let’s review the links in this section. Please tell me what links are in this section.

- Thank you. Now I’ll have you click on each one to make sure it goes to the right place.

- [ ] **UAT TASK**: Confirm Learn more about VA debt link is showing only for users who do not have outstanding debt and is behaving as expected
- [ ] **UAT TASK**: Confirm Manage VA debt and Manage VA bills links are behaving as expected
- [ ] **Usability**: How easy is it for magnification users, low visions users, and screen reader users to use the links? Observe if they struggle to find the link on the right column of the page.

## 3. Review benefit payments section - 5-7 minutes

- Okay, let’s look at the section that says "Benefit payments."

- Does everything related to your payment seem right to you?

- Can you explain to me what the content in this section is telling you?

- Is anything confusing to you about it? Is there anything you expect to see that you don't?

- [ ] **UAT TASK**: Confirm that if the user has recurring payments, the most recent is showing.
- [ ] **UAT TASK**: Confirm that if the user has never received payments, text shows that says "You do not have any recent payments to show" and only the direct deposit link is showing.
- [ ] **UAT TASK**: Confirm that if the user does not receive recurring payments, text shows that says "You do not have any recent payments to show" and direct deposit and payment history links are showing.
- [ ] **Usability**: Do screen magnification, low vision users, and screen reader user struggle with anything here? Observe if they're able to easily find the debt info and view all information about it at once, and if any secondary links seem hard to see or access.
- [ ] **Usability**: Do users find anything confusing about this section?

## 4. Confirm all benefit payment links - 5-7 minutes

- Let’s review the links in this section. Please tell me what links are in this section.

- Thank you. Now I’ll have you click on each one to make sure it goes to the right place.

- [ ] **UAT TASK**: Confirm the "Review your payment history" link within payment card is behaving as expected
- [ ] **UAT TASK**: Confirm the "Review your payment history" secondary link that shows for users without a recent payment card is behaving as expected
- [ ] **UAT TASK**: Confirm the "Manage your direct deposit information" secondary link that shows for all users is behaving as expected
- [ ] **Usability**: How easy is it for magnification users, low visions users, and screen reader users to use the links? Observe if they struggle to find the link on the right column of the page.

## Post-Task Interview - 5 minutes
- Thank you so much! That concludes our session for today. This has been so helpful for our team. Do you have any feedback on what we looked at in this session or questions for me?

## Thank-You and Closing - 1 minute
- Well, we really appreciate you taking the time to test these updates today. This helps us to make sure everything will work when we launch these updates for all veterans on VA.gov.  I hope you enjoy the rest of your day!
