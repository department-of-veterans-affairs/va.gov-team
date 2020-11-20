# Conversation Guide: Benefits Delivery at Discharge (BDD) UAT

### Project-specific setup

- Sign into VA.gov through DS Logon
- Whitelist their email address
- We will be having users share their screens (after they have logged on) and submitting a claim. When the participant is ready, pass presenter roles to them and have them share their screen.
- When their screen is shared, send the beta link https://www.va.gov/disability/how-to-file-claim/
- **Note: We will not be recording these sessions**.

## Intro - 2 minutes

Thanks for joining us today! My name is Christian and I also have some colleagues on the line observing and taking notes. Today we're going to talk about how to apply for a disability benefit with the VA, either before you have discharged from your military commitment (this is called BDD claim or Benefits Delivery at Discharge), or after you have discharged from the military (submitting a normal disability claim). 

Before we start, a few things I want to mention:

- **This entire session should take up to 60 minutes, depending the claims you will be submitting.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your honest insights help us to figure out how we can improve the veteran experience, and we will not be offended by any opinions you express.
- **If for any reason and at any time you want to stop the session, please let me know.** You will not be penalized in any way if we need to stop.

## Warm-up/Screener Questions - 3 minutes

OK,let's get started.

1. Have you heard of Benefits Delivery at Discharge (BDD) before today?
2. Next, I'd like to confirm: You are separating from the military between X-Y days? (answer depends on whether this is for 90-180 days before discharge (BDD claim) or 1-89 days (normal claim))

- **If no, the participant can not complete UAT**. Confirm/probe if they seem confused, but if they are sure they are not separating within the expected window, we can let them go.
3. Can you confirm for me that you have a DS Logon? 
4. Do you know your username and password? 
  - If not: Are these readily accessible? Could get them?
  - If the user can not remember or retrieve their login credentials, end the session.
5. Can you tell me what type of computer you are using today? 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed. 
6. Can you tell me which web browser you are using?
7. Today we are going to observe you interacting with the new tools on your computer. Would you feel comfortable sharing your screen with me at this time?  
  - If no: Explain this is necessary for testing. If they are still unwilling, end the call.
8. How did you get recruited to participate in this call?

**(Pass presenter rights).**

OK, please share your screen, and then we will get started.

## Testing BDD - 30-40 minutes

- I'd like you to open a new tab in your browser, and go to https://www.va.gov/disability/how-to-file-claim/ and scroll down to filing a claim.
  - [ ] **UAT TASK:** They are able to see the wizard and select information for BDD claim which includes NOT separating from service yet and a date within the expected time window.
  - [ ] **UAT TASK:** Confirm they can login.  
  - [ ] **UAT TASK:** Confirm when they login, they are presented with the first page of the BDD flow.
- Now we would like to go ahead and help guide you through entering in some of your personal information and validating that the information we already know about you is correct.
  - [ ] **UAT TASK:** Confirm: that your personal data is correct.
  - [ ] **UAT TASK:** Review: (or input): your miltary history.
  - [ ] **UAT TASK:** Choose: type of claim. A New Condition.
  - [ ] **UAT TASK:** Choose Did you serve in a combat zone after Sept. 11, 2001? Yes or No.
  - [ ] **UAT TASK:** Input: Dates for Reserves and National Guard Info.
  - [ ] **UAT TASK:** Choose: Are you currently activated on federal orders in the Reserves or the National Guard?  
  - [ ] **UAT TASK:** Choose: Do you have any new conditions you want to add to your claim? Yes. Add: Two or more Disabilities. Check: What if I don’t know the name of my condition? (dropdown link). 
  - [ ] **UAT TASK:** Choose: What caused this service-connected disability?
  - [ ] **UAT TASK:** Choose: Have you ever been a POW? Yes or No. (Yes: Add: dates. Choose: Which of your new conditions was caused or affected by your POW experience?)
  - [ ] **UAT TASK:** Choose: Would you like to learn more about additional benefits? Yes or No. (Yes: choose: Do you need help buying or modifying your home? No or Yes. Yes: Choose: Do you need help buying or modifying your car? Yes. Choose: Have you ever been granted an automobile allowance? No or Yes.)  
  - [ ] **UAT TASK:** Choose: Are you confined to your home or need help with everyday activities? Yes or No. 
  - [ ] **UAT TASK:** Choose: Does your disability prevent you from holding down a job that you could otherwise do? (This doesn’t include being retired.) No.
  - [ ] **UAT TASK:** Choose: Please tell us what you would like to do.
  - [ ] **UAT TASK:** Review: Based on what you told us, you may be eligible for these additional disability benefits.
  - [ ] **UAT TASK:** Review: Summary of disabilities
  - [ ] **UAT TASK:** Choose: Is there any evidence you’d like us to review as part of your claim? Yes: VA Medical Records. Private Medical Records. 
  Review: Which evidence type should I choose?
  - [ ] **UAT TASK:** Input: Please tell us where VA treated you for your disability.
  - [ ] **UAT TASK:** Choose: Do you want to upload your private medical records? No, please get my records from my doctor.  
  Review: Which should I choose? Check Patient Acknowledgement. Review: Read the full text.
  - [ ] **UAT TASK:** Input: Supporting evidence. 
  - [ ] **UAT TASK:** Review Supporting Evidence. 
  - [ ] **UAT TASK:** Review Contact Information.
  - [ ] **UAT TASK:** Review (or input): Bank Info (use 1-9 for Account and Routing number. Use Test for bank name. 
  - [ ] **UAT TASK:** Choose: Are you homeless or at risk of becoming homeless? No.
  - [ ] **UAT TASK:** Choose: Are you terminally ill? No 
  - [ ] **UAT TASK:** Choose: Are you currently a VA employee? No
  - [ ] **UAT TASK:** Chose: Do you want to apply using the Fully Developed Claim program? No.
  - [ ] **UAT TASK:** Review: Review Application. Accept privacy Policy. 
  - [ ] **UAT TASK:** Review: Review Submission Page
           
10 users 

## Post-Task Interview - 1 minutes

- Do you have any feedback on what we looked at today?
- Do you have any questions for me?

## Thank-You and Closing - 1 minutes

Well we really appreciate you taking the time to test these updates today. This helps us to make sure everything will work when we launch these updates for all service members on VA.gov.

As a thank you for your participation, we'd like to send you a $50 thank-you check. This will be sent by *****, and she'll work with you to figure out the right place to send it.

Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!
