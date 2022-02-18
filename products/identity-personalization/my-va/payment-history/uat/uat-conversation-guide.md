# Conversation Guide for My VA Payment Information UAT

- [ ] Make sure dev team has turned on feature for user
- [ ] Review whether or not the participant roster states the participant has VA debt
- [ ] Start a thread for observers in _#feedback-backchannel_

## Intro - 2 minutes
Thanks for joining us today! My name is Angela and I also have some colleagues on the line observing and taking notes. We've add a new  feature to help Veterans access their most recent payment and debt information and we want to make sure that it is all working properly in your account.

Before we start, a few things I want to mention:

* **This entire session should take about 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
* **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your feedback helps us to figure out how we can improve the Veteran experience, and we will not be offended by any opinions you express.
* **We will be able to see your real information today.** This may include some healthcare information and some claims information. During any of the tasks if you feel uncomfortable sharing your screen with any of your information on it, feel free to stop screensharing and start again when you feel comfortable.
* **If for any reason and at any time you want to stop the session, please let me know.**

*Action item: Decide if we want to record since we’re also going through some usability tasks.*

* **Are you comfortable if I record my screen and audio as we talk today?** I will stop the recording once you are logged into the site so we don't record your personal information. We use the recordings to confirm that we have captured your opinions accurately. The recordings are destroyed after we complete analysis, and none of your comments will be attributed to you directly.
	* If yes: **Once I start recording, I am going to confirm that you are ok with me recording this session once more.**

*Start recording.*

* **I have started recording**. I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

## Warm-up Questions (Optional) - 3 minutes
**Task goal: Confirm they qualify for the study, learn how they receive information from VA about financial things, and how that's meeting their needs.**

1. As part of the scheduling for this session, we asked if you had either received payments from VA or incurred education, compensation or pension debt.  According to the info I got, you ( receive payments and/or have debt). Is that correct?
2. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account?
* If they do not know what that means, ask: Do you ever sign into any va websites, such as VA.gov or ebenefits, to access or apply for your benefits? (If yes: Can you talk me through how you do that?)

3. Do you know your username and password?
	* If not: Are these readily accessible? Could get them?
	* If the user can not remember or retrieve their login credentials, **end the session.**
4. Today we are going to observe you interacting with the new feature on your computer. Would you feel comfortable sharing your screen with me at this time?
	* If no: Explain this is necessary for testing. If they are still unwilling, **end the call.**
	
Great! Thanks for confirming all of that. Let’s move on to the website.

OK, please share your screen, and then we will get started.

## 1. Confirm payment feature - X minutes
I'd like you to open a new tab in your browser, and go to https://www.va.gov/.

Once you are logged in, click on My VA. Let’s review the payment feature. Take a look at the section that says “benefit payments and debts” 

Does everything related to your payment look right to you?

- [ ] **UAT TASK:** Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**.
- [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**
- [ ] **UAT TASK:** Confirm the payment section is showing
- [ ] **UAT TASK:** Confirm the payment section is showing
- [ ] **UAT TASK**: Confirm payment card accurately reflects data or “You haven’t received a payment in the last 30 days” message is displaying.
- [ ] **Usability**: Do screen magnification users struggle with anything here?
- [ ] **Usability**: Anything confusing here?


## 2. Confirm  debt feature - X minutes
Does everything related to your debt look right to you?
What are your thoughts on the debt information shown here?
*If user has debt, and they don’t mention, ask:* How meaningful is it to see the total number of debts?

- [ ] **UAT TASK**: Confirm debt alert reflects accurate count or “Your total VA debt balance is $0” message is displaying.
- [ ] -**Usability**: What do they think about the debt information?
- [ ]  **Usability**: What do they think about the number of outstanding debts?

## 3. Confirm all links - X minutes
Let’s review the links in this section.  Please read them to me.

Thank you. Now I’ll have you click on each one to make sure it goes to the right place.

- [ ] **UAT TASK**: Confirm direct deposit link is showing.
- [ ]  **UAT TASK**: Confirm Learn more about VA debt link is showing only for users who do not have outstanding debt.
- [ ] **UAT TASK**: Confirm View payment history link is showing for users who do not have a recent payment
- [ ] **UAT TASK**: Confirm links are behaving as expected
- [ ] **Usability**:  How easy is it for magnification users to use the links?
- [ ] **Usability**:  How did Veteran expectations match up with where the links took them?

## Post-Task Interview - X minutes
Thank you so much! That was everything I wanted you to review today. This has been really helpful for our team. Do you have any feedback on what we looked at today?
* I have one more question for you - imagine you wanted to get the latest information about your medical co-pays. Show me where you’d find that here.
 *Action item*: confirm we want to include something about co-pays in UAT

* Do you have any questions for me?


## Thank-You and Closing - 1 minute
Well, we really appreciate you taking the time to test these updates today. This helps us to make sure everything will work when we launch these updates for all veterans on VA.gov.  I hope you enjoy the rest of your day!
