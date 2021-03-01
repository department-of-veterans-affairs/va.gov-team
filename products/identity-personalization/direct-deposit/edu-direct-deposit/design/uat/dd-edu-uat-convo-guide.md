# Conversation guide for user acceptance testing (UAT) of Direct Deposit for Educational Payments (DD-EDU) feature
**VSA AuthdExp/eBenefits Teams | March 2021**

`James Adams, designer | Slack: @Jim Adams | GH: Sporeboy`

---

### Setup
- Slack [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel) will be used for real-time feedback from observers
- Sessions will be conducted remotely, setup will be tested 15 minutes prior to call-time; users will be required to share their screen
- [Associated Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/design/uat/dd-edu-uat-research-plan.md)
- **Note:** These sessions will not recorded

## Intro
Good morning/afternoon and thank you for joining us today.

I have a few things I need to mention before we start:
- The session should only take about 10 to 15 minutes, but we can stop any point--just let me know. 
- If something is confusing, or you run into an issue or problem, please let us know; we are constantly looking for ways to improve our features and tools
- In this call you'll be entering or reviewing personal information.
- We will be using a live VA form--you could use this to change your direction deposit information. You are not obligated to complete this form--it won't be sent to VA to until you go all the way through and click the update button.

## Screening

OK, let's get started.

Today we're going to observe you navigating to the direct deposit feature. This feature now displays your direct deposit bank information to you, and allows you to change it if you need to. I have a few questions to make sure this form is right for you:
- I need to confirm: are you a Veteran, service member or dependent? And do you receive educational payments from VA?
  - If "no," end the session.
- Can you confirm for me that you have an ID.me (etc.) account? And do you know your username and password? 
  - If not: Are these easy to get? Could get you them?
  - If the user can not remember or retrieve their login credentials, they must complete the form unauthenticated.
- During this call, I'll be helping you navigate a form that can change your direct deposit information. So, can you confirm that you indeed would like to do this, and are comfortable walking through the form on the call?
  - If not end the session.

So today we're going to observe you navigating to the direct deposit feature. There, we'll ask you to review your bank information and re-enter it. If you choose, you can turn off video for this. We're not recording this session, but we need to see your screen as you go to the form. The form **does** ask for personal financial information. Are you comfortable sharing your screen? Would you like to turn off video while you re-enter your bank info? Do you have your bank information handy? You need your routing and account number.
- If not: Explain this is neccessary for testing. If they are still unwilling (e.g. because of personal info), end the call.
- Allow user to retrieve bank info

To help with any possible questions or concern you have, I may be able to offer real-time assistance with this direct deposit form.

OK, a question or two about your computer and browser.
- Can you tell me what type of computer you are using today?
  - We ask because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
- Can you tell me which web browser you are using? Are you OK using Chrome?

OK, please share your screen, and we'll get started.

## UAT testing of 28-8832

- Please open a new tab in your browser, go to [VA.gov]("https://www.va.gov/").
- To view this feature, you'll need to log in. Click on the blue button at the top right (Sign in).
  - [ ] **UAT item:** After login, intro screen allows access.
- Click on your name at the top right. Then click on "Profile."
- Look at the links to the left; click on "Direct deposit information."
  - [ ] **UAT item:**  User navigates to Direct deposit screen.
- Review the information on the Direct deposit information screen. Does this look correct?
  - [ ] **UAT item:** User confirms payment type(s) are correct (EDU, C&P, both)
  - [ ] **UAT item:** User confirms bank info looks accurate
- Next, we'll need to check the Edit feature. To do this we'll nee you to re-enter your bank info.
- Click on the Edit link to the right of your bank info. 
  - [ ] **UAT item:** Unpopulated form opens.   
- Review/enter your bank information.
  - [ ] **UAT item:** (Authenticated) Screen accepts user input
- If eveything looks good, click the update button. Now click to continue.
  - [ ] **UAT item:** Confimation modal shows
  - [ ] **UAT item:** Success messgae shows
- User selects applicant description.
  - [ ] **UAT item:** Selections branch workflow properly
  - [ ] **UAT item:** User can backtrack through form as needed.
- Please review/enter your bank information once more.
  - [ ] **UAT item:** User confirms bank info looks accurate

## Wrap-up
That is the end of what we're testing. Do you have any questions or comments about the form or the direct deposit process?

Note: We may need to let the participant know how processing will go, or what their next steps might be. We will get input from business on what info or guidance we can give the user. 

## Closing
Thank you so much for taking the time to run through the new direct deposit feature! Your help is critical to or team's effort to improve Veterans' online experiences--and VA.gov in particular. Enjoy the rest of your day!

---
