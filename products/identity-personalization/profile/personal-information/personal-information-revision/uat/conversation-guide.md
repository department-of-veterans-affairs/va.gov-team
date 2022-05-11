# Conversation Guide: Profile Personal Information UAT

- Make sure dev team has turned on feature for user
- Post in #feedback-backchannel
- Mute Slack notifications

## Intro - 2 minutes
Thanks for joining us today! My name is Christina, and I also have a note taker with me. We're working on a new section of the Profile on the VA.gov website that helps Veterans update their personal information. The purpose of our session today is to make sure the feature is working as expected in your account and that you're able to interact with it as intended.

Before we start, a few things I want to mention:

- There are a couple of members from the website team who would like to observe the session and hear your feedback live. Are you comfortable with them joining the session? No pressure either way.

- **This entire session should take about 30 minutes.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.

- **In this session, we want to hear your honest opinions.** If you find something we show you to be confusing, we want to hear about it. Your feedback helps us figure out how we can improve the Veteran experience, and we will not be offended by any opinions you express. We're testing our work, not you, so you can't do or say anything wrong here.

- **We will be able to see some of your real information today.** During any of the tasks if you feel uncomfortable sharing your screen with any of your information on it, feel free to stop screensharing and start again when you feel comfortable.

- **If for any reason and at any time you want to stop the session, please let me know.**

- **Are you comfortable if I record my screen and audio as we talk today?** I will stop the recording while you are logging into the site so we don't record your personal information. We use the recordings to confirm that we have captured your opinions accurately. The recordings are destroyed after we complete analysis, and none of your comments will be attributed to you directly.
	- _If yes:_ **Once I start recording, I am going to confirm that you are ok with me recording this session once more.**

_Start recording._

- **I have started recording.** I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

## Warm-up Questions (Optional) - 3 minutes

_Confirm they qualify for the study._

- As part of the scheduling for this session, we asked if you have an identity verified account on VA.gov. According to the information I received, you do have an identity verified account. Is that correct?

- Can you confirm for me that you have a DS Logon, MyHealtheVet, or ID.me account?
	- _If they do not know what that means, ask:_ Do you ever sign into any VA websites, such as VA.gov, My HealtheVet, or ebenefits, to access or apply for your benefits?
		- _If no:_ I’m not sure we can proceed if that’s the case. Have you ever had to enter a username and password to access your VA benefits online or anything like that?
			- _If still no, end the session:_ Without that account access, we won’t be able to test this feature with you today, so I’m going to end the session. Thank you so much for your willingness to participate. 

- Do you know your username and password?
	- _If not:_ Are these readily accessible? Could you get them?
	- _If the user can not remember or retrieve their login credentials, end the session:_ Without login credentials, we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.

- Ok, so today we’re going to observe you interacting with the new feature. Would you feel comfortable sharing your screen with me at this time? You can do that by clicking the green button on the bottom of the Zoom window that says "Share Screen." It will then ask you which window you'd like to share and you can share either just your web browser where you'll be looking at the page we're testing or your entire desktop/background.
	- _If no, explain this is necessary for testing. If they are still unwilling, end the call._ I completely understand. However if you're not comfortable sharing your screen for the session, we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.

Great! Thanks for confirming all of that. 

OK, let’s move on to the website. Please share your screen and then we will get started.

## 1. Review Personal information section - 5-7 minutes

- I'd like you to open a new tab in your browser, and go to https://www.va.gov/. Once you are logged in, please go to your Profile by clicking on your name in the top right corner. 
- Let’s review the Personal information section that appears here.

	- [ ] **UAT TASK:** _Confirm that they are LOA3. If they are not, they'll see a "Verify your identity" prompt. If they are not LOA3, end the session._ I see that your identity isn't yet verified. Because of that we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.
	- [ ] **UAT TASK:** _If records can't be matched and an error appears, end the session._ I see that the system is unable to match your records. Because of that we aren't able to test this feature with you today so I'm going to end the call. Thank you so much for your willingness to participate; it is greatly appreciated.

If they are LOA3:
- Why do you think the VA asks for this information? Without clicking on anything right now, if you were trying to learn more about the information included here, where would you look / where do you think that would be on this page?
- Is this information required? Why does this seem that way?


	- [ ] **UAT TASK:** Confirm the Profile lands on the Personal information section is showing all information accurately.
		- [ ] **UAT TASK:** Confirm user's non-editable personal information being pulled in correctly from the database.
		- [ ] **UAT TASK:** If there is nothing in an editable field, confirm it is showing the correct text.
	- [ ] **Usability/Content/IA:** Does the user find anything confusing about the information shown?
	- [ ] **Usability/Content/IA:** Does the user understand how to update this information?
	- [ ] **Usability/Content/IA:** Does the user understand why this information is included?
	- [ ] **Usability/Content/IA:** Is the user able to find more about why this information is included? (Via hint text / FAQs)
	- [ ] **Usability/Content/IA:** Does the user understand that this information is not required?

## 2. Update information - Preferred name - 5 minutes

- Now let’s look at each editable section, starting with Preferred name. I’ll have you go ahead and click on that section to make sure it works how it should.

- _If not already specifically addressed:_ So we just talked about why the VA might ask about this specific information. How would you learn more about this at this point?
	- _If needed:_ Did you see the sentence in gray under the Preferred name title of the section? 
	- How does or doesn’t this information answer your questions or clarify this?
	
- Ok, now I’d like you to go ahead and type in your Preferred name and save your entry.
	- _If needed:_ You can just enter [YOUR FIRST NAME] so we can make sure this functions as intended.
	
- Is there anything about that process that is confusing?


	- [ ] **UAT TASK:** Confirm Preferred name is displaying correctly.
	- [ ] **UAT TASK:** Confirm Preferred name edit state opens as expected.
	- [ ] **UAT TASK:** Confirm an update can be made and saved without an error message.
	- [ ] **UAT TASK:** Confirm the success message appears when an update is made.
	- [ ] **Usability:** How easy is it for participants to update this information? Observe if they struggle to understand how to enter or save the information.
	- [ ] **Usability/Content:** How easy is it for participants to use the hint text to learn more about Preferred name? Observe if they do not notice this text, have difficulty reading it, or are confused about the information included.

## 3. Gender identity - 5 minutes

- Now let’s look at the Gender identity section. I’ll have you go ahead and click on that section to make sure it works how it should.

- Earlier we talked about why the VA might ask about this information. How would you find out more about this?
	- _If needed:_ Did you see the sentence with the dotted line below it? Can you click on that?
	- How does or doesn’t this information answer your questions or clarify this?

- Is this something that you would update? 
	- Could you tell me more about why you would (or would not) enter information here?

- Ok, now I’ll have you go ahead and click on **Prefer not to answer** so we can make sure this functions as intended. And of course if you’d like to choose a different selection you are welcome to.

- Is there anything about this process that is confusing?


	- [ ] **UAT TASK:** Confirm Gender identity field is displayed as it should be.
	- [ ] **UAT TASK:** Confirm Gender identity edit state opens as expected.
	- [ ] **UAT TASK:** Confirm radio buttons function as expected.
	- [ ] **UAT TASK:** Confirm FAQ dropdown functions as expected.
	- [ ] **UAT TASK:** Confirm selection can be made and saved.
	- [ ] **UAT TASK:** Confirm the success message appears when an update is made.
	- [ ] **Usability:** How easy is it for participants to select and save their options? Observe if they struggle to understand how to update or are confused about if only one selection or multiple selections can be made.
	- [ ] **Usability/Content:** How easy is it for participants to learn more about Gender identity? Observe if they struggle to 1) understand how to learn more/notice the FAQs, 2) to use the FAQ dropdown functions, or 3) if they are confused about the information included.

## 4. FAQs - 3 minutes

- Ok, there’s one more thing I’d like you to try out. On the top of the page just under Personal information, please take a look at those two phrases with the dotted lines underneath them. _(“How to update your legal name” and “how to fix an error in your name or date of birth”)_

- Did you notice those before?

- Please go ahead and click on the first one and read the content.

- What did you expect to happen when you clicked that?

- Is there anything unclear about the content? Ok, you can go ahead and close that and click on the second phrase.

- Take a look at this information.

- And the same for this one, is there anything unclear about this content? 

- Ok, thank you. You can go ahead and close that as well.


	- [ ] **UAT TASK:** Confirm both FAQs and information contained are displayed as they should be.
	- [ ] **UAT TASK:** Confirm FAQs open and close as expected.
	- [ ] **UAT TASK:** Confirm radio buttons function as expected.
	- [ ] **Usability:** Do users understand how to open and close the FAQs?
	- [ ] **Usability:** Do users understand the information in the FAQs?
	- [ ] **Usability (helpful for experimental design system component and overall placement):** Do participants notice the FAQs before they are pointed out?

_Note: Usability questions/tasks here are helpful in moving the additional info FAQ component (when used as hint text) along in the experimental design system_

## Post-Task Interview - 2-3 minutes

Thank you so much! That was everything on the page I wanted to try out with you today. This has been so helpful for our team. 

Do you have any feedback on what we looked at in this session or questions for me?

## Thank-You and Closing - 1 minute

Great, again thank you so much! That concludes our session for today. We really appreciate you taking the time to test these updates. This helps us to make sure everything will work when we launch them for all Veterans on VA.gov. 

Have a great rest of your day!
