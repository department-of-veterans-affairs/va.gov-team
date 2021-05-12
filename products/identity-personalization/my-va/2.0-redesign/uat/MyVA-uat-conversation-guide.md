# Conversation Guide: My VA UAT

### Project-specific setup

- Sign in to Zoom.
- We will be having users share their screens and testing the new profile. When the participant is ready, have them share their screen.
- When their screen is shared, send the link https://www.va.gov or have them go to www.va.gov. 
- **Note: We will not be recording these sessions**.

## Intro - 2 minutes

Thanks for joining us today! My name is Tressa and I also have some colleagues on the line observing and taking notes. Today we're going to talk about the My VA page on VA.gov. We've just built this page and we want to make sure that it is all working properly in your account and that all of your information is showing up correctly.

Before we start, a few things I want to mention:

- **This entire session should take less than 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.
- **We will not be updating or changing any of your information today.** We are just testing the functionality of this page, and I will occasionally ask you to add something to a field, but we will not be saving any of these changes. 
- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your honest insights help us to figure out how we can improve the veteran experience, and we will not be offended by any opinions you express.
- **We will be able to see your real information today.** During any of the tasks if you feel uncomfortable sharing your screen with any of your information on it, feel free to stop screensharing and start again when you feel comfortable. 
- **If for any reason and at any time you want to stop the session, please let me know.** 

## Warm-up/Screener Questions - 3 minutes

OK,let's get started.

1. First, can you tell me a little bit about yourself? (If stuck, prompt to ask about service experience, where they live, their work).
2. Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account?  
3. Do you know your username and password? 
  - If not: Are these readily accessible? Could get them?
  - If the user can not remember or retrieve their login credentials, **end the session.**
4. Can you tell me what type of computer you are using today? 
  - If needed: I'm asking this question because sometimes the type of computer can affect your experience with the tools. Knowing which one you are using will help our developers make adjustments if needed.
5. Can you tell me which web browser you are using? 
6. Do you currently have a disability rating from the VA?
7. Do you currently or have you ever recieved benefits from the VA?
  - Do you currently recieve health care benefits from the VA?
  - If no: Have you ever applied for VA health care?
  - Do you currently recieve any education benefits from the VA?
8. Do you have any active claims or appeals at the VA?
9. Today we are going to observe you interacting with the new tools on your computer. Would you feel comfortable sharing your screen with me at this time?  
  - If no: Explain this is necessary for testing. If they are still unwilling, **end the call.**

**Screenshare**

OK, please share your screen, and then we will get started. 


## Navigating to My VA - 2 minutes

- I'd like you to open a new tab in your browser, and go to https://www.va.gov/. 

[Go through this flow with ~5 participants]

- Once you are logged in, click on your name in the upper right-hand corner, select My VA. We're now on your My VA page, does all of this information look correct?
  - [ ] **UAT TASK:** Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**. 
  - [ ] **UAT TASK:** The user's name and military badge will be on the top left.
  - [ ] **UAT TASK:** If a user has disability rating, it should show in the nametag.
  - [ ] **UAT TASK:** If a user's disability rating isn't loading, it should show the correct link.
  - [ ] **UAT TASK:** If a section is loading, the proper messaging is shown.
  - [ ] **UAT TASK:** If a section can't be loaded, the correct error is showing.
  - [ ] **UAT TASK:** Navigation has loaded properly and is showing all appropriate sections.
  - [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**

[Go through this flow with ~5 participants]
- Withouth logging in, click on 'My VA' in the main navigation. This will prompt you to log in. We're now on your My VA page, does all of this information look correct?
  - [ ] **UAT TASK:** Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, **end the session**. 
  - [ ] **UAT TASK:** The user's name and military badge will be on the top left.
  - [ ] **UAT TASK:** If a user has disability rating, it should show in the nametag.
  - [ ] **UAT TASK:** If a user's disability rating isn't loading, it should show the correct link.
  - [ ] **UAT TASK:** If a section is loading, the proper messaging is shown.
  - [ ] **UAT TASK:** If a section can't be loaded, the correct error is showing.
  - [ ] **UAT TASK:** Navigation has loaded properly and is showing all appropriate sections.
  - [ ] **UAT TASK:** If records can't be matched, the correct error is showing. **end the session**

*If a user has a disability rating*
- So we are now on your My VA dashboard. Go ahead and click on your disability rating.
  - [ ] **UAT TASK:** The link will take the user to their speicifc disability rating overview page.

- Great. Let's go back to your My VA page.

## Claims & appeals - 3 min 

*if a user does NOT have claims & appeals*
  - [ ] **UAT TASK:** The claims and appeals section does not show.

*if a user has claims & appeals*
- Great. Let's take a look at the claims and appeals section. Does this information look correct?
  - [ ] **UAT TASK:** The claims and appeals information is being pulled in correctly.
  - [ ] **UAT TASK:** If a user has no updates in the last 30 days, the correct messaging is displayed.
  - [ ] **UAT TASK:** If there is an error connecting to the claims or appeals API, the correct error is showing.

*if a user has an active claims or appeal*

- Is the claim/appeal in the grey box your most recent claim/appeal?
  - [ ] **UAT TASK:** The correct claim/appeal is showing.

- Go ahead and click 'View details'. 
  - [ ] **UAT TASK:** Takes user to specific claim breakdown.
 
- Okay great, let's head back to your My VA page. Go ahead and click 'Manage all claims and appeals'. 
  - [ ] **UAT TASK:** Takes user to claims tool page.

## Health care - 5 min 

*if a user does NOT have health care*
  - [ ] **UAT TASK:** The health care section does not show.
  - [ ] **UAT TASK:** The health care blurb shows in 'Apply for VA benefits' section.

*if a user HAS health care*
- Great. Let's take a look at the health care section. Does this information look correct?
  - [ ] **UAT TASK:** The health care information is being pulled in correctly.
  - [ ] **UAT TASK:** If there is an error connecting to the health care information, the correct error is showing.

### Appointments

*if a user has upcoming appointments*

- Is the appointment in the grey box your next appointment?
  - [ ] **UAT TASK:** The appointment information is being pulled in correctly.

- Go ahead and click 'Schedule and view your appointments'. 
  - [ ] **UAT TASK:** Takes user to appointment overview page. 
  - [ ] **UAT TASK:** If there is an error connecting to the appointment information, the correct error is showing.

- Okay great, let's head back to your My VA page. 

*if a user has no upcoming appointments in the next 30 days*

- Is it correct that you have no appointments in the next 30 days?
  - [ ] **UAT TASK:** The appointment information is being pulled in correctly.
  - [ ] **UAT TASK:** The correct messaging is displayed.
  - [ ] **UAT TASK:** If there is an error connecting to the appointment information, the correct error is showing.

- Go ahead and click 'Schedule and view your appointments'. 
  - [ ] **UAT TASK:** Takes user to appointment overview page. 
 
- Okay great, let's head back to your My VA page.

*if a user has NO upcoming appointments*

- Do you know if you have any appointments scheduled with a VA facility? 
  - [ ] **UAT TASK:** The appointment information is being pulled in correctly.

- Go ahead and click 'Schedule and view your appointments'. 
  - [ ] **UAT TASK:** Takes user to appointment overview page.
  - [ ] **UAT TASK:** The correct information is displayed. 

- Okay great, let's head back to your My VA page.

### Messages

- Next, let's take a look at the messages portion. Does this information look correct ot you?
  - [ ] **UAT TASK:** The messages information is being pulled in correctly.
  - [ ] **UAT TASK:** The correct number of messages is showing (if applicable).
  - [ ] **UAT TASK:** If there is an error pulling in messages, the correct link is displayed.

- If you feel comfortable with going to your secure messages tool with everyone here, go ahead and click 'Send a secure message to your health care team'. If you'd prefer, feel free to stop screensharing.
  - [ ] **UAT TASK:** Takes user MHV secure messaging. 
  - [ ] **UAT TASK:** Takes to correct MHV account. 

- Okay great, let's head back to your My VA page.

### Other links

- Go ahead and click on 'Refill and track your prescriptions'. 
  - [ ] **UAT TASK:** Takes user to MHV prescriptions page.

- Okay great, let's head back to your My VA page. Now if you could click on 'Get your lab and test results'. 
  - [ ] **UAT TASK:** Takes user to va.gov lab and test results page.

- And let's go back to your My VA page. Now if you could click on 'Get your VA medical records'. 
  - [ ] **UAT TASK:** Takes user to va.gov medical records page.

## Apply for VA benefits - 2 min 

- Great! Let's move on to the 'Apply for VA benefits' section. Go ahead and click on the 'What benefits does VA offer?' dropdown.
  - [ ] **UAT TASK:** Dropdown works correctly.

- We're going to test each of these links, so if you could just start from the top and click through them each that would be great.
  - [ ] **UAT TASK:** All benefit links go to the correct page.

### Applications in progress

- Okay next, we'll take a look at the 'Applications in progress' section. Does this look correct to you?
  - [ ] **UAT TASK:** Applications in progress information is being pulled in correctly.
  - [ ] **UAT TASK:** If a user has no applications in progress, the correct messaging is displayed.

*if a user has applications in progress*

- Go ahead and click on 'Continue your application'.
  - [ ] **UAT TASK:** Links to application in progress


- Okay great, let's head back to your My VA page.

### Benefits you might be interested in

- Let's look at the 'Benefits you might be interested in' section.
  - [ ] **UAT TASK:** Benefits you might be interested in is displaying correctly depending on what benefits the user has.

*if a user has no health care*

- Go ahead and click on 'Learn how to apply for VA health care'.
  - [ ] **UAT TASK:** Links to the learn how to apply for VA health care page.

*All users*

- Go ahead and click on 'Learn how to file a VA disability claim'.
  - [ ] **UAT TASK:** Links to the learn how to file a claim page.

*If a user does NOT receive education payments*

- Go ahead and click on 'Learn how apply for VA education benefits'.
  - [ ] **UAT TASK:** Links to the learn how to apply for a education benefits page.

## Post-Task Interview - 1 minutes

  - Do you have any feedback on what we looked at today?
  - Do you have any questions for me?

## Thank-You and Closing - 1 minutes

Well we really appreciate you taking the time to test these updates today. This helps us to make sure everything will work when we launch these updates for all veterans on VA.gov.


Any questions before we sign off?

Great, well thank you so much again, and enjoy the rest of your day!
