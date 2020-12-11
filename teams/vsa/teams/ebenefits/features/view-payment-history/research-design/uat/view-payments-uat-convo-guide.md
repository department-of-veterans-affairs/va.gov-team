# Conversation guide for user acceptability testing (UAT) for View Payment History / production environment
**VSA eBenefits Team | December 2020**

`James Adams, designer/researcher`

---


### Setup
- Slack [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel) will be used for real-time feedback from observers
- Sessions will be conducted remotely, setup will be tested 15 minutes prior to call-time; users will be required to share their screen
- [Associated Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/research-design/uat/view-payments-uat-research-plan.md)
- **Note:** These sessions will not be recorded

## Intro
Good morning/afternoon and thank you for joining us today.

I have a few things I need to mention before we start:
- The session should take about 15 minutes, but you can stop any point--just let me know. 
- If something is confusing, or you run into an issue or problem, please let us know; we are constantly looking for ways to improve our features and tools
- In this call you'll be seeing your live VA payment information. The feature we're testing is just view-only--nothing will be added or changed during this session.

## Screening

OK, let's get started.

You'll be using a new feature we moved from eBenefits to VA.gov: View Payment History. I have a few questions to make sure this tool will work for you:
- I need to confirm: do you receive C&P or EDU payments from VA?
  - If the user does not receive C&P or EDU payments from VA, end the session.
- Can you confirm for me that you have an ID.me account? And do you know your username and password? 
  - If not: Are these easy to get? Could get you them?
  - If the user can not remember or retrieve their login credentials, end the session.
- Do you know if you are identity verified?
  - You may need to ID verify before we can continue.
  - If the user does not want to ID verify, or cannot find info required to ID verify, end the session.
- During this call, I'll be helping you review your VA payments; 
  - If not end the session.

Today we're going to observe you reviewing your VA payments. We're not recording this session, but we'll be seeing dates, bank names and dollar amounts; account numbers will be masked. So, can you confirm that you indeed would like to do this, and are comfortable walking through the tool with me?
- If not: Explain this is neccesary for testing. If they are still unwilling (e.g. because of personal info), end the call.

OK, the last questions are about your computer and browser.
- Can you tell me what type of computer you are using today?
  - We ask because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
- Can you tell me which web browser you are using? Are you OK using Chrome?

OK, please share your screen, and we'll get started.

## UAT testing of 21-686c

- Please open a new tab in your browser, go to va.gov/view-change-dependents/add-remove-form-686c/introduction and sign in.
  - [ ] **UAT item:** After login, intro screen allows access.
  - [ ] **UAT item:** Confirm that they are LOA3. If they see a "Verify your identity" prompt. they are not LOA3, **end the session**.  
- Review the steps to add or remove a dependent. 
  - [ ] **UAT item:** Screen makes green add/remove button available.
  - [ ] **UAT item:** User clicks green button to enter form.
- Make selection(s) to add or remove dependents
  - [ ] **UAT item:** Checkboxes function, selection(s) made.
- Review Veteran Information
  - [ ] **UAT item:** Screen presents correct user data.
- Review contact information
  - [ ] **UAT item:** Address, phone and email are pre-filled.
  - [ ] **UAT item:** User makes any necessary corrections and proceeds.
- User completes required form fields for chosen workflow(s)
  - [ ] **UAT item:** Form fields function properly.
  - [ ] **UAT item:** required form fields display error states when left incomplete or are completed improperly.  
  - [ ] **UAT item:** Form advances correctly.
  - [ ] **UAT item:** User can backtrack through form as needed.
- User can locate and upload documentation required by particular workflows/situations.
  - [ ] **UAT item:** File finder window opens when upload documents button is clicked.
  - [ ] **UAT item:** User can locate and select file(s).
  - [ ] **UAT item:** Selected files are uploaded.  
- Review information enter in this form.
  - [ ] **UAT item:** Accordions are present and contain correct information.
  - [ ] **UAT item:** Edit function allows corrections.
- Review privacy statement and submit the form.
  - [ ] **UAT item:** Form submits and user is presented with confirmation screen.

## Wrap-up
That is the end of what we're testing. Do you have any questions or comments about the new 686?

[ We may need to let the participant know how processing will go, or what their next steps might be. We will get input from business on what info or guidance we can give the user. ] 

## Closing
Thank you so much for taking the time to run through the new 686! Your help is critical to or team's effort to improve Veterans' online experiences--and VA.gov in particular. Enjoy the rest of your day!

---
