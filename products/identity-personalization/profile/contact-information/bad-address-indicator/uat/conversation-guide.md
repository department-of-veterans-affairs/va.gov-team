Conversation Guide for Bad Address Indicator UAT (Internal)
============================================

-   _Make sure VA Profile team has turned on feature for user's account_

Intro - 2 minutes
-----------------

Thanks for joining us today! As you know, we’ll be trying out this new feature that helps Veterans update incorrect contact information. The purpose of our session today is to make sure the feature is working as expected in your account and that you're able to interact with it as intended.

-   **This should take about 10 minutes or less**. I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.

-   **We will be able to see some of your real information today**. During any of the tasks if you feel uncomfortable sharing your screen with any of your information on it, feel free to stop screensharing and start again when you feel comfortable.

-   **Are you comfortable if I record my screen and audio as we talk today?** We use the recordings to confirm that we have captured your opinions accurately. The recordings are destroyed after we complete analysis, and none of your comments will be attributed to you directly.

	-   _If yes:_ Once I start recording, I am going to confirm that you are ok with me recording this session once more.

_Start recording._

-   **I have started recording**. I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

Login and share screen - 1 minute
----------------------------------------

-   OK, go ahead and open a new tab in your browser, and go to <https://www.va.gov/>. _Send link to va.gov via chat if needed_
-   And go ahead and log in.
- Great, now that you're logged in, could you please share your screen?

_Participant shares screen_

---------------------------------------------------------------

## Task #1: Review Personal information page and alert - 1 minute


**Task goal: Make sure the alert is easy to find and understand, and quickly prompts participants to take action and update their information.**

-   Ok, great. Now we'll go through this step by step.
-   First, please go to your Profile. 

#### UAT
- [ ] **UAT TASK:** _Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, end the session._
- [ ] **UAT TASK:** Confirm the Profile lands on the Personal information section and is showing the BAI alert accurately.

---------------------------------------------------------------

Task #2: Navigate to Contact information page - 1 minute
---------------------------------------------------------

**Task goal: Make sure the participant can easily navigate to the Contact information using the link.**
-   Go ahead and select the link to review your mailing address.

#### UAT and Usability
- [ ] **UAT TASK:** Confirm the link functions as intended.
- [ ] **UAT TASK:** Confirm the alert is displayed on the Contact information page as expected.

---------------------------------------------------------------

Task #3: Navigate to Mailing address field - 1 minute
---------------------------------------------------------

**Task goal: Make sure the participant can easily navigate to the Mailing address field using the jump link.**

- Now please select the link to review and update your address.

#### UAT and Usability
- [ ] **UAT TASK:** Confirm the jump link functions as intended and brings the user to the Mailing address section.

---------------------------------------------------------------

Task #4
---------------------------------------------------------

### OPTION 1: Update Mailing address - 2 minutes

**Task goal: Make sure the participant can easily UPDATE their mailing address.**

- Now we'll pretend you're reviewing your mailing address and your zip code is incorrect like the alert says, so you need to make a change to your zip code.
- Go ahead and select edit.
- Then make a small change to your zip code
- Then select Update.

#### UAT
- [ ] **UAT TASK:** Confirm an update can be made and saved without an error message.
- [ ] **UAT TASK:** Confirm the success message appears when an update is made.
- [ ] **UAT TASK:** Confirm the BAI alert disappears when an update is made.
- [ ] **UAT TASK:** Confirm the BAI flag is properly cleared in VA Profile when an update is made.

### OPTION 2: Confirm Mailing address - 2 minutes

**Task goal: Make sure the participant can easily CONFIRM a mailing address.**

- Ok, we'll imagine that you came to this page and found this alert, but when you checked your mailing address you didn't find any errors - everything was correct. 
- First of all, could you select the question with the dotted line to view more about what to do if your address is correct?
- Ok, go ahead and close that.
- Next, I’ll have you confirm that your address is correct.
- Go ahead and select edit.
- And without changing anything, select Update.

#### UAT
- [ ] **UAT TASK:** Confirm the FAQ dropdown functions as expected.
- [ ] **UAT TASK:** Confirm the address can be confirmed and saved without an error message.
- [ ] **UAT TASK:** Confirm the success message appears when an address is confirmed.
- [ ] **UAT TASK:** Confirm the BAI alert disappears when an address is confirmed.
- [ ] **UAT TASK:** Confirm the BAI flag is properly cleared in VA Profile when an address is confirmed.

---------------------------------------------------------------

## Task 5: Reset Address (If UPDATING address) and Closing - 2 minutes
-   That’s everything I wanted to get your feedback on.
-   Lastly, let's make sure all of your information is correct, since we made one small change to your zip code. 
	-   Could you please take a moment to double check your zip code and change it back if it's incorrect?
  	-   Does everything seem correct here?
-   Great! That's everything I wanted to get your feedback on. Do you have any questions or thoughts for me on what we've reviewed?

Great, thank you so much!
