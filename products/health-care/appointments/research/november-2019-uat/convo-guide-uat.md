# Conversation Guide: User Acceptance Testing
## VAOS MVP on VA.gov
### November 2019

- Link to give participant: www.va.gov/health-care/schedule-view-va-appointments/appointments

- [ ] *Make sure you are not showing your screen.*

- [ ] *Close other windows and turn off notifications.*

- [ ] *Confirm the participant is using Google Chrome, has downloaded Zoom, can share their screen.*

- [ ] *When the participant is ready, begin the session with the following introduction.*

## Intro - 5 minutes

Thank you for joining us today! My name is {name}, and I also have some colleagues on the line observing. Today we're going to have you try out a new tool to help you view [and schedule] your VA health appointments

Before we start, there are a few things I'd like to mention:

- We aren’t trying to sell or promote any product or service to you.   
- During this session, we’ll ask you to sign in to va.gov with your ID.me, MHV, or DSLogon username and password and access the new tools. We will not be able to see or record your password. Then we'll ask you to share your screen with us and click on several links. 
- When your account is on the screen, we will ask you to confirm that you're seeing your correct information. This will help us to make sure everything's working the way it should. Please know that we are not recording today's session, so your personally identifiable information will not be shared. 
- We will be asking you to interact with the new tools, but nothing we do today will change anything about your account or your benefits. 
- There are no right or wrong answers. I won’t be offended by any opinions you express. 
- This entire session should take about 30 minutes. I want to be sure not to keep you much longer, so I may occasionally interrupt you to move on to the next question.
- If for any reason and at any time you want to stop the session, please let me know. 

Does that all make sense, and sound okay to you?

Great! Any questions before we get started?

## Login

- To start, can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account? 

- Do you know your username and password? 
  - If not: Are these readily accessible that you could get them? 

- Can you tell me what type of computer you are using today? 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed. 

- Today we are using zoom which will allow us to observe you interacting with the new tools on your computer. Have you used zoom before? 
  - If no: Explain the screen sharing, & chat functions and how to find them. 
  
- Would you feel comfortable sharing your screen with me at this time?  

**(Pass presenter rights).**

- I'd like you to open a new tab in your browswer, and go to the URL that I pasted in our chat: www.va.gov/health-care/schedule-view-va-appointments/appointments

- Please click the login in the upper right corner. 

- Please select your preferred login tool and login now. 
  - If there is a problem: Do you have any other login options? 
  - If no: End session. 

## 

-----
From here below is old personalization guide - working on updating. 
**Once they are logged in, post link to beta tools in chat window.** www.va.gov/health-care/schedule-view-va-appointments/appointments 
  
- I just posted a link in the zoom chat. Can you navigate to that and click on the link? 

- This screen explains the new tools that we'll be interacting with today. When you click on the button at the bottom of the screen, it will turn on the new features. As promised, at the end of today's session, we will turn them off again, and your account will be returned to normal. I'll give you a minute to read this screen. Please let me know when you are done. 

- Do you have any questions for me before we turn on the new features? 

- Please go ahead and click on the button. 
  - [ ] **UAT TASK:** *Confirm that user is redirected to their dashboard from beta screen.*


## Dashboard 

- We have created this screen, which should be your new home for managing benefits. Things that might show up on this page now include: 
  - Vets.gov Applications in progress 
  - Claims & Appeals 
  - Secure messages with your doctor 
  - Prescriptions to refill. 

- If you do not use some of these features, they will not show up for you. Take a moment to look through this page. Based on the list of features I just described, is everything that you think should be here shown here? 
  - If not: What is missing? 
  - If user mentions something we don't have yet: We are working to add new features to this home screen. Is that one that would be helpful to you? 

### Applications in Progress

- I want to make sure that a new application that you start shows up on your home screen. We will get rid of this application before the end of today's session, so it will not affect your account. Please navigate to **Explore and Apply for Benefits**, go down to **Health Care**, and click **"Apply Now"**. Then click on the blue button. At the bottom of the screen, please click **"Finish this application later"**. 

- Now I'd like you to click that word **"home"** in the top of the screen.
  - [ ] **UAT TASK:** *Confirm that home redirects user to dashboard.* 

- Can you confirm for me that this is the application you just started? 
  - [ ] **UAT TASK:** *Confirm that the newly-started application shows up on the dashboard.*

- Please click on **"Continue your application."**

- Does this look like the screen where you saved your application? 
  - [ ] **UAT TASK:** *Confirm that the application opens on the correct screen.*

- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*)

- Now I'd like you to delete the application you just started. Please click on delete & confirm. 
  - [ ] **UAT TASK:** *Confirm that the application disappears from the dashboard.*

### Claims & Appeals Widget
*Follow this section if the user has a claim or appeal. Otherwise, skip.*

- Your home screen shows that you have a claim/appeal. Can you click on **"View Claim/Appeal"** for me? 

- Can you confirm that what you see on this screen looks correct? 
  - [ ] **UAT TASK:** *Confirm that clicking button takes user to corresponding claim or appeal.*

- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*)

- Can you click **"View all claims and appeals"** for me? 
  - [ ] **UAT TASK:** *Confirm that user is taken to vets.gov/track-claims/your-claims.*
  
- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*)  

### Secure Messages Widget
*Follow this section if the user has secure messages enabled on Vets.gov. Otherwise, skip.*

- Your home screen shows that you use the secure messaging feature on Vets.gov. Can you click on **"View all secure messages"** for me?
  - [ ] **UAT TASK:** *Confirm that user is taken to vets.gov/health-care/messaging/inbox. If there are new messages, confirm that these show up on the dashboard too.*

- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*)  

### Prescription Widget
*Follow this section if the user has prescriptions enabled on Vets.gov. Otherwise, skip.*

- Your home screen shows that you use the prescriptions feature on Vets.gov. 

- *If user has new package*: Can you click on **"Track package"** for me?
  - [ ] **UAT TASK:** *Confirm that user is taken to the **Track Package** tab within the prescriptions tool.*
   
- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*) 

- *If user has prescriptions listed:* Can you click on **"View prescription"** for me?
  - [ ] **UAT TASK:** *Confirm that user is taken to the **"Prescription details"** tab for the prescription within the prescriptions tool.* 

- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*) 

- Can you click on **"View all prescriptions"** for me?
  - [ ] **UAT TASK:** *Confirm that user is taken to vets.gov/health-care/prescriptions.*  

- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*) 

## Profile

- Next we're going to take a look at your profile. I'd like you to scroll to the bottom of the screen and click on the button that says **"View Profile"**. 
  - [ ] **UAT TASK:** *Confirm that user is taken to their profile and that everything loads correctly.*  

- This screen includes all of your contact information, personal information, and military service history. I'd like you to scroll through this page and tell me if anything is missing. 
  - [ ] **UAT TASK:** *Confirm that user's information shows up. Have user confirm what should and should not be there.*  
  - [ ] **UAT TASK:** *Confirm that help desk information shows for users near their military and personal information.*  
  
- *If contact information is missing or incorrect:*. I'd like you to try to update your contact information by clicking on edit. Please make any changes and then click **Save**. 
  - [ ] **UAT TASK:** *Confirm that user is able to click edit and make changes to contact information.*
  - [ ] **UAT TASK:** *Confirm that user's updates show correctly after hitting Save.*  
  
- *If nothing is incorrect or missing, have them add an alternate phone number or add their residential address. Something to make a change and see if we can save it that won't significantly affect their account if something goes wrong.* 

- Please navigate back to your home screen. (*See if user remembers how to do it before prompting.*) 

## Account

- Next we're going to look at your account. This is where you manage your security settings and your email and password for your Vets.gov account. I'd like you to scroll to the bottom and click on the link **"Go to account settings"**. 
  - [ ] **UAT TASK:** *Confirm that this link takes them to their account.*
  
- It looks like your account has/has not been verified. Does that sound right to you? 
  - [ ] **UAT TASK:** *Confirm that check box appears if verified or prompts them to do so if not.*
  
- It looks like you have/have not set up 2 factor authentication. Does that sound right to you? 
 - [ ] **UAT TASK:** *Confirm that check box appears if 2FA or prompts them to do so if not.*
 
- It looks like you have/have not accepted terms and conditions for the health care tools on this site. Does that sound right to you? 
 - [ ] **UAT TASK:** *Confirm that confirmation of T&C shows if they have and prompts them to do so if not.*
 
 - Is there anything else on this page that looks out of place or incorrect? 
 
 ## Navigation
- The last tasks I'm going to ask you to do are to test the navigation. Please go to the top right of the screen where you see your name, and click on the arrow, then click on **Profile**. 
  - [ ] **UAT TASK:** *Confirm that this takes user to their profile page.*
  
- Now click on the **Vets.gov logo** at the top of the screen. 
  - [ ] **UAT TASK:** *Confirm that this takes user to their dashboard.*

- Now go back to the top right of the screen where you saw your name before, click on the down arrow, and then click on **Account**. 
  - [ ] **UAT TASK:** *Confirm that this takes user to their account page.*
  
- Before we wrap up and turn off the test features, do you have any questions for me? 

- Ok, I'd like you to scroll down and click on the link that says **"Turn off beta tools"**. Now click **"Yes, turn off"**. 

- Now please click on the Vets.gov logo one more time. 
   - [ ] **UAT TASK:** *Confirm that user is back to Vets.gov home page.*
   
- Now please click on your name in the upper right one more time. 
  - [ ] **UAT TASK:** *Confirm that the account is the only thing they see.*

## Wrap-up

Well we really appreciate you taking the time to step through these new tools with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans. Do you have any other questions before we wrap up? 

As a thank you for your participation, we'd like to offer you a $25 gift either as an Amazon Gift Card or through Paypal. Do you have a preference?

Great, is it ok for us to send that gift to the same address we used to communicate with you about scheduling this test? 

**If no:** Ok, we'll follow up with an email after this session to get the right email from you in writing.

Thank you and enjoy your day! 










