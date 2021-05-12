# Conversation guide for user acceptability testing (UAT) for VA Form-28-1900 (Chapter 31) / production environment
**VSA eBenefits Team | February 2021**

`James Adams, designer/researcher`

---

### Setup
- Slack will be used for real-time feedback from observers
- Sessions will be conducted remotely, setup will be tested 15 minutes prior to call-time; users will be required to share their screen
- [Associated Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/research-design/uat/ch31-uat-research-plan.md)
- **Note:** These sessions will not be recorded

## Intro
Good morning/afternoon and thank you for joining us today.

I have a few things I need to mention before we start:
- The session should take about 20 to 30 minutes for the form itself, but it could take longer if you decide to go thorought the orientation portion; in either case, you can stop any point--just let me know. 
- If find that something is confusing, or you run into an issue or problem, please let us know; we are constantly looking for ways to improve our features and tools
- We will be using a live VA form--the 28-1900. You are not obligated to complete this form--it won't be sent to VA to until you go all the way through and click the submit button.
- We'll come back ot this in a moment, but in this call you'll be entering or reviewing personal information.

## Screening
OK, let's get started.

You'll be using a new feature we have on VA.gov: VA form 28-1900. This is the one you use to apply for Chapter 31 benefits--Veteran Readiness and Employment assistance. I have a few questions to make sure this form is right for you:
- I need to confirm: are you a Veteran, service member or dependent?
  - If the user is not one of the above, end the session.
- Do you (or your sponsor) have a disability rating?
  - If the user is not one of the above, end the session.
- We'll need to log into VA.gov to complete the form.
  - Can you confirm for me that you have an ID.me account? And do you know your username and password? 
  - If not: Are these easy to get? Could get you them?
  - If the user can not remember or retrieve their login credentials, end the session.
- During this call, I'll be helping you submit a form to apply for CH31 benefits. So, can you confirm that you indeed would like to do this, and are comfortable walking through the form with me?
  - If not end the session.

Today we're going to observe you completing VA Form 28-1900. We're not recording this session, but we need to see your screen as you move through the form. The form **does** ask for (or shows) personal identifying information. Are you comfortable sharing your screen at this time?
- If not: Explain this is neccessary for testing. If they are still unwilling (e.g. because of personal info), end the call.

To help with any possible questions or concern you have, I may be able to offer real-time assistance with this online form.

OK, last questions:
- Can you tell me what type of computer you are using today?
  - We ask because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
- Can you tell me which web browser you are using? Are you OK using Chrome?

OK, please share your screen, and we'll get started.

## UAT testing of 28-1900

`Revised to remove unauthenticated and video tasks`

- Please open a new tab in your browser, go to [CH31 landing page link](https://www.va.gov/careers-employment/vocational-rehabilitation/how-to-apply/).
- To complete this form, we'll need you to log in?
  - [ ] **UAT item:** After login, intro screen allows access
- (If login fails for any reason) It seems there's a problem logging-in; you'll need to log in to be able to see the form.
  - If the user can not log in, end the session
- Review the information on the intro screen. Is this the right form for you?
  - [ ] **UAT item:** User navigates wizard to reveal orientation (optional)
  - [ ] **UAT item:** User clicks form link to advance straight to the form intro screen
- Review the VR&E orientation. Does this provide a better understanding of VR&E benefits?
  - [ ] **UAT item:** User navigates orientation to form button (optional)
  - [ ] **UAT item:** User clicks form link to advance straight to the form intro screen
- Review the steps to apply for CH31 benefits. 
  - [ ] **UAT item:** User clicks green button to enter form  
- Review/enter claimant information.
  - [ ] **UAT item:** Screen presents correct user data
- Review/enter contact information.
  - [ ] **UAT item:** Address, phone and email are pre-filled
  - [ ] **UAT item:** User makes any necessary corrections and proceeds
- User selects applicant description.
  - [ ] **UAT item:** Selections branch form-flow properly
  - [ ] **UAT item:** User can backtrack through form as needed
- Review information enter in this form.
  - [ ] **UAT item:** Accordions are present and contain correct information.
  - [ ] **UAT item:** Edit function allows corrections
- Review privacy statement and submit the form.
  - [ ] **UAT item:** Form submits and user is presented with confirmation screen

## Wrap-up
That is the end of what we're testing. Do you have any questions or comments about the form or the process?

(We may need to let the participant know how processing will go, or what their next steps might be. We will get input from business on what info or guidance we can give the user.) 

## Closing
Thank you so much for taking the time to run through the new 1900! Your help is critical to or team's effort to improve Veterans' online experiences--and VA.gov in particular. Enjoy the rest of your day!

---
