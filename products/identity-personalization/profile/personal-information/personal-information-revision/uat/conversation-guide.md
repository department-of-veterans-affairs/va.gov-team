# Conversation Guide: Profile Personal Information UAT

- Make sure dev team has turned on feature for user
- Post in #feedback-backchannel

## Intro - 2 minutes
Thanks for joining us today! My name is Christina and I also have some colleagues on the line observing and taking notes. We're working on a new section of the Profile on the VA.gov website that helps Veterans update their personal information. The purpose of our session today is to make sure the feature is working as expected in your account and that you're able to interact with it as intended.

Before we start, a few things I want to mention:

- **This entire session should take about 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.

- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your feedback helps us to figure out how we can improve the Veteran experience, and we will not be offended by any opinions you express. We're testing our work, not you, so you can't do or say anything wrong here.

- **We will be able to see some of your real information today. **During any of the tasks if you feel uncomfortable sharing your screen with any of your information on it, feel free to stop screensharing and start again when you feel comfortable

- **If for any reason and at any time you want to stop the session, please let me know.**

- **Are you comfortable if I record my screen and audio as we talk today?** I will stop the recording once you are logged (should this be “while you are logging in”?) into the site so we don't record your personal information. We use the recordings to confirm that we have captured your opinions accurately. The recordings are destroyed after we complete analysis, and none of your comments will be attributed to you directly.
	- If yes: **Once I start recording, I am going to confirm that you are ok with me recording this session once more.**

Start recording.

- **I have started recording.** I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

## Warm-up Questions (Optional) - 3 minutes

_Confirm they qualify for the study._

- As part of the scheduling for this session, we asked if you have an identity verified account on VA.gov. According to the info I got, you do have an identity verified account. Is that correct?

- Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account?
	- If they do not know what that means, ask: Do you ever sign into any VA websites, such as VA.gov or ebenefits, to access or apply for your benefits?
		- (If yes:) Can you talk me through how you do that?
		- What about if no?

- Do you know your username and password?
	- (If not:) Are these readily accessible? Could you get them?
	- (If the user can not remember or retrieve their login credentials, end the session.) Without login credentials, we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.

- Today we are going to observe you interacting with the new feature on your computer. Would you feel comfortable sharing your screen with me at this time? You can do that by clicking the green button on the bottom of the Zoom window that says "Share Screen." It will then ask you which window you'd like to share and you can share either just your web browser where you'll be looking at the page we're testing or your entire desktop.
	- (If no: Explain this is necessary for testing. If they are still unwilling, end the call.) I completely understand. However if you're not comfortable sharing your screen for the session, we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.

Great! Thanks for confirming all of that. 

OK, let’s move on to the website. Please share your screen and then we will get started.

## Review Personal information section - 5-7 minutes

- I'd like you to open a new tab in your browser, and go to https://www.va.gov/. Once you are logged in, please go to your Profile (by clicking on your name in the top right corner). 
- Let’s review the Personal information section that appears here.

	- [ ] UAT TASK: Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, end the session. _I see that your identity isn't yet verified. Because of that we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated. _
	- [ ] UAT TASK: If records can't be matched and an error appears, end the session. _I see that the system is unable to match your records. Because of that we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated._

If they are LOA3:
- What are your thoughts on the information shown here? 
- What, if anything, do you find confusing about this?
- Why do you think the VA asks for this information? Without clicking on anything right now, if you were trying to find more information about this, where would you look / where do you think that would be on this page?
- Is this information required? Why does this seem that way?


	- [ ] UAT TASK: Confirm the Profile lands on the Personal information section is showing all information accurately
		- [ ] UAT TASK: Confirm user's non-editable personal information being pulled in correctly from the database
		- [ ] UAT TASK: If there is nothing in an editable field, confirm it is showing the correct text
	- [ ] Usability/Content/IA: Does the participant find anything confusing about the information shown?
	- [ ] Usability/Content/IA: Does the user understand how to update this information?
	- [ ] Usability/Content/IA: Does the user understand why this information is included?
