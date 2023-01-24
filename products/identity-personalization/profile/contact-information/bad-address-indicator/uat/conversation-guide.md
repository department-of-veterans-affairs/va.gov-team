Conversation Guide for Bad Address Indicator UAT (Internal)
============================================

-   _Make sure VA Profile team has turned on feature for user's account_
-   _Discuss if session should be recorded_

Intro - 2 minutes
-----------------

As you know, we’ll be trying out this new feature that helps Veterans update incorrect contact information. The purpose of our session today is to make sure the feature is working as expected in your account and that you're able to interact with it as intended.

-   **This should take about 10 minutes or less**. 

-   **We will be able to see some of your real information today**. 

Login and share screen - 1 minute
----------------------------------------

-   OK, go ahead and log in to va.gov and then share your screen once you've logged in. <https://www.va.gov/>. _Send link to va.gov via chat if needed_

_Participant shares screen_

_Start recording_

---------------------------------------------------------------

## Task #1: Review Personal information page and alert - 1 minute


**Task goal: Make sure the alert is easy to find and understand, and quickly prompts participants to take action and update their information.**

-   Ok, now we'll go through this step by step.
-   First, please go to your Profile. 

#### UAT
- [ ] **UAT TASK:** _Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, end the session._
- [ ] **UAT TASK:** Confirm the Profile lands on the Personal information section and is showing the BAI alert accurately.

---------------------------------------------------------------

Task #2: Navigate to Contact information page / Mailing address field - 1 minute
---------------------------------------------------------

**Task goal: Make sure the participant can easily navigate to the Mailing address field in Contact information using the link.**
-   Go ahead and select the link to review your mailing address.

#### UAT
- [ ] **UAT TASK:** Confirm the link functions as intended and brings the user to the Mailing address field.
- [ ] **UAT TASK:** Confirm the alert is displayed in the Mailing address field as expected.

---------------------------------------------------------------

Task #3
---------------------------------------------------------

### _OPTION 1:_ Update Mailing address - 2 minutes

**Task goal: Make sure the participant can easily UPDATE their mailing address.**

- Now we'll pretend you're reviewing your mailing address and your zip code is incorrect like the alert says, so you need to make a change to your zip code.
- Go ahead and select edit.
- Then make a small change to your zip code.
- Then select Update.

#### UAT
- [ ] **UAT TASK:** Confirm an update can be made and saved without an error message.
- [ ] **UAT TASK:** Confirm the success message appears when an update is made.
- [ ] **UAT TASK:** Confirm the BAI alert disappears when an update is made.
- [ ] **UAT TASK:** Confirm the BAI flag is properly cleared in VA Profile when an update is made.

### _OPTION 2:_ Confirm Mailing address - 2 minutes

**Task goal: Make sure the participant can easily CONFIRM a mailing address.**

- Ok, we'll imagine that you came to this page and found this alert, but when you checked your mailing address you didn't find any errors - everything was correct. 
- So I’ll have you confirm that your address is correct.
- Go ahead and select edit.
- And without changing anything, select Update.

#### UAT
- [ ] **UAT TASK:** Confirm the address can be confirmed and saved without an error message.
- [ ] **UAT TASK:** Confirm the success message appears when an address is confirmed.
- [ ] **UAT TASK:** Confirm the BAI alert disappears when an address is confirmed.
- [ ] **UAT TASK:** Confirm the BAI flag is properly cleared in VA Profile when an address is confirmed.

---------------------------------------------------------------

## Task 4: Reset Address (If UPDATING address) and Closing - 2 minutes
-   That’s everything we needed to go through.
-   Let's make sure all of your information is correct, since we made one small change to your zip code. 
	-   Could you please take a moment to double check your zip code and change it back if it's incorrect?
  	-   Does everything seem correct here?
-   Great! That's everything. Thank you so much!

_Go to next participant_
