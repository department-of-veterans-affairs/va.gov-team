# Conversation Guide: User Acceptance Testing for eBenefits IAM - logging in to eBenefits with partner services
Logging in with DS Logon, ID.me and MHV credentials. The script is identical but the different scenarios have the users logging in with the various credentials, and the users are either Veterans or dependents. The spreadsheet here https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/benefit-letters/New%20CSP%20Pilot%20Test_V1%20(2).xlsm includes all the login scenarios to test and the expected outcomes by login type
### April 2020

- Link to give participant: https://eauth.va.gov/accessva/?cspSelectFor=ebenefits 

- [ ] *Make sure you are not showing your screen.*

- [ ] *Close other windows and turn off notifications.*

- [ ] *Identify the browser the participant is using, has downloaded Zoom, can share their screen.*

- [ ] *When the participant is ready, begin the session with the following introduction.*

## Intro - 5 minutes

**Thank you for joining us today! My name is {name}, and I also have some colleagues on the line observing. Today we're going to have you try to log in to eBenefits and navigate to a few different features in that tool. **

**Before we start, there are a few things I'd like to mention:**

- We aren’t trying to sell or promote any product or service to you. 
- If anything looks weird or out of place during in this session, please mention it. Your feedback will help us make improvements. 
- During this session, we’ll ask you to sign in to eBenefits on va.gov with {will depend on the scenario} and access the new tools. We will not be able to see or record your password. We'll ask you to share your screen with us and click on several links. 
- When your account is on the screen, we will ask you to confirm that you're seeing your correct information. This will help us to make sure everything's working the way it should. Please know that we are not recording today's session, so your personally identifiable information will not be shared. 
- There are no right or wrong answers. I won’t be offended by any opinions you express. 
- This entire session should take no more than 30 minutes. I want to be respectful of your time. 
- If for any reason and at any time you want to stop the session, please let me know. 

Does that all make sense, and sound okay to you?

Great! Any questions before we get started?

## Login

- **(Scenario A1) To start, can you confirm for me that you are a Veteran with an existing DS Logon Premium account and that you are receiving payments from the VA for at least one rated disability **
  - If no: Ok, unfortunately, we will need to end the session because we need you to have these accounts. 

- **Do you know your DS Logon username and password?** 
  - If not: Are these readily accessible that you could get them? 
  
- **Can you tell me what type of computer and browser you are using today?** 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.

- **Today we are using zoom which will allow us to observe you interacting with a new landing page for accessing eBenefits and navigating through eBenefits. Have you used zoom before?** 
  - If no: Explain the screen sharing, & chat functions and how to find them. 
  
- **Please share your screen with us using the green "share" button in Zoom** 

## Login with DS Logon

**Once they are logged in, post link to AccessVA: https://eauth.va.gov/accessva/?cspSelectFor=ebenefits**
  
- **I'd like you to open a new tab in your browswer, and go to the URL that I pasted in our chat:** 

  - [ ] **UAT TASK:** *Confirm that USER does not see an error if they see the eBenefits VA Partner options page with DS Logon, ID.me and MHV choices displayed*

- **Please choose to sign in with a DS Logon credential** 
- [ ] **UAT TASK:** *Validate that the eBenefits page displays with the checkbox at the bottom and the DS Logon user name and password boxes are displayed*

- **Complete the Authentication process - enter your username and password**
- [ ] **UAT TASK:** *Validate that the user can log in with their DS Logon credentials*

- **Return to eBenefits Dashboard and click Disabilities.**
  **Great, now let's check that the correct disability rating information is here and it's what you expected to see?**
- [ ] **UAT TASK:** *The correct disability rating information is displayed*

- **Let's go look a the Direct Deposit information now.  Navigate to Manage -> Contacts and Direct Deposit -> Direct Deposit and Contact Information Update.** 
  **Do you see the correct account information and Contact Information?**
- [ ] **UAT TASK:** *Contact information page is displayed reflecting your registered information*

- **Next, let's look at your VA letters. Navigate to the Letters feature (Manage -> Documents and Records -> VA Letters).**

  **Do these letter options seem correct to you?**
- [ ] **UAT TASK:** *List of available letters is displayed, including the Benefit Summary Letter*

- **Now generate the Benefit Summary Letter**
**Does the summary letter represent all your VA benefits?**
- [ ] **UAT TASK:** *Letter is displayed including Veteran content*

- **One last task to complete - please navigate to the My Documents page (Dashboard -> My Documents)**
**Do these documents look like documents you have submitted to the VA?**
- [ ] **UAT TASK:** *Veteran documents uploaded to efolder are displayed*

## Wrap-up

Well we really appreciate you taking the time to step through the new landing page and clicking through eBenefits with us  today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans. Do you have any other questions before we wrap up? 

Thank you and enjoy your day! 
