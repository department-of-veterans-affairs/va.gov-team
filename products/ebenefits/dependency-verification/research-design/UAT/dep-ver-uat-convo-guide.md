# Conversation guide for user acceptance testing (UAT) of Dependency Verification Modal (dep-ver) feature
**eBenefits Teams | September 2021**

`Candy Clark, designer`

---

### Setup
- Slack [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel) will be used for real-time feedback from observers
- Sessions will be conducted remotely, setup will be tested 15 minutes prior to call-time; users will be required to share their screen
- [Associated Research Plan]()
- **Note:** These sessions will **not** recorded

## Intro
Good morning/afternoon and thank you for joining us today.

I have a few things I need to mention before we start:
- The session should only take about 15 to 20 minutes. I want to be respectful of your time. 
- If something is confusing, or you run into an issue or problem, please let us know; we are constantly looking for ways to improve our features and tools
- In this call you'll be entering or reviewing personal information. 
- If you want to stop the session at any time, please let me know. 
- We will be using a live VA form--you could use this to change your dependent information. You are not obligated to complete this form--it won't be sent to VA to until you go all the way through and click the update button.

## Screening

OK, let's get started.

Today we're going to observe you using a new feature to confirm your dependents. I have a few questions to make sure this form is right for you:
- I need to confirm: are you a Veteran, service member or dependent? And do you receive disability payments from VA?
  - If "no," end the session.
- Can you confirm that you have an ID.me (or other type of) account? And do you know your username and password? 
  - If not: Are these easy to get? Could get you them?
  - If the user can not remember or retrieve their login credentials, they must complete the form unauthenticated.
- During this call, I'll be helping you navigate a form that can view your dependents. So, can you confirm that you indeed would like to do this, and are comfortable walking through the form on the call?
  - If not end the session.

So today we're going to observe you navigating to the view dependents feature. There, we'll ask you to review your dependent information and confirm it. If you choose, you can turn off video for this. We're not recording this session, but we need to see your screen as you go to the form. Are you comfortable sharing your screen? Would you like to turn off video while you view your dependent info? 
- If not: Explain this is necessary for testing. If they are still unwilling (e.g. because of personal info), end the call.

OK, a question or two about your computer and browser.
- Can you tell me what type of computer you are using today?
  - We ask because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
- Can you tell me which web browser you are using? Are you OK using Chrome?

OK, please share your screen, and we'll get started.

## UAT testing of dependency verification modal

- Please open a new tab in your browser, go to [VA.gov]("https://www.va.gov/").
- To view this feature, you'll need to log in. Click on the blue button at the top right (Sign in).
<!--  - [ ] **UAT item:** After login, intro screen allows access. -->
- Click on "VA Benefits and Health Care" in the blue bar. Then click on "Disability" and finally "View all in disability."
- Look at the links down the page; click on "Add or remove a dependent"
<!--   - [ ] **UAT item:**  Add or remove a dependent link appears on page
  - [ ] **UAT item:**  User navigates to View or change your dependents screen -->
- Click on the green button that says "View your current dependents."
   - [ ] **UAT item:** "Please make sure your dependents are correct" modal appears on screen
- Review the information on the screen. Does this look correct?
<!--  - [ ] **UAT item:** User confirms dependents are correct. -->
- Do you need to make changes to your dependents?
  - If no - Click on the "Verify this is correct" button
      - [ ] **UAT item:** User navigates to "Your VA dependents" page
      - [ ] **UAT item:** "Thank you for verifying your dependents" alert is displayed.
  - If yes - Click on the "Change dependents" button
      - [ ] **UAT item:** User navigates to "Your VA dependents" page
      - [ ] **UAT item:** "Please make changes to your dependents" alert is displayed.
 <!--  - Click on the "Add or remove a dependent" button
      - [ ] **UAT item:** User navigates to "Add or remove dependts form 21-686c -->

## Wrap-up
Well that's the end of what we're testing. Do you have any questions or comments about the form or the dependent verification process?

Note: We may need to let the participant know how processing will go, or what their next steps might be. We will get input from business on what info or guidance we can give the user. 

## Closing
Thank you so much for taking the time to run through the new dependent verification feature! Your help is critical to or team's effort to improve Veterans' online experiences--and VA.gov in particular. Enjoy the rest of your day!

---
