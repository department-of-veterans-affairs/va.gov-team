# Conversation Guide

## Moderator logistics

*Use [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/) in Slack for real-time feedback from observers.*

*Before the session, send out the [observer instructions](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Research/Research%20Process%20and%20Templates/observer-instructions.md) to your observers (Slackbot will do this for you if you type "observer instructions" into #feedback-backchannel).*

*In the Attendees section, make sure everyone except the participant is on mute*

*When the participant is ready, begin the session with the following intro*


## Intro - 5 minutes

Thanks for joining us today! My name is Emily and I also have some colleagues on the line observing and taking notes. Today we're going to talk about the current “learn more” experience. There’s an existing way we show website users how to learn more about a specific question and we’re testing what’s the most effective for someone to learn more if they’re confused about a question. 

Before we start, a few things I want to mention:

- **This entire session should take about 1 hour.** I want to be sure not to keep you much longer, so I may occasionally prompt you with the next question or topic.

- **In this session, we want to hear your honest opinions.** We are not testing your ability. We just want to improve these tools to better meet Veteran's needs. I will not be offended by any opinions you express, and I welcome your feedback.
Also, any opinions and personal information that you share today will not be tied to your Veteran record. We want to design the VA.gov experience for you and everything that you share today will help us to do that.
- **If for any reason and at any time you want to stop the session, please let me know.** You will not be penalized in any way if we need to stop.
- **Are you comfortable if I record your screen and audio as we talk today?** We use the recordings to confirm that we have captured your opinions accurately.
- **Did you receive the checklist for our session from Shannon or Brian?** We will quickly run through that right now.

## Checklist
- **Are you using a computer or mobile phone during our session today?** Mac or Windows? iOS or Android?
	- If mobile for not just audio: Are you able to switch to a laptop or desktop computer?
	- If no: We have to end the session.
- **Do you have the latest version of Zoom (4.5.9) installed?** Check under Zoom > About.
- **Are you wearing headphones today?** If so, would it be possible for you to take them off and use your computer or mobile audio? I'm asking so that I can hear your screen reader during the session.
- **Would you mind setting your screen reader to its default speed?** We want to accurately hear and record what you’re experiencing on VA.gov. 
- **What browser are you using today?**
- **What screen reader are you using today?**
For how many years have you used this screenreader?
For how many years have you used a screenreader in general?
Do you regularly use your screenreader to navigate the internet?
Can you describe how you navigate a computer/the internet?
- **Are you using a screen magnifier today?**
- **Do you know your screen reader's verbosity setting?** High, medium, low? 

## Share your screen
* Okay. I'd like you to open a new browser window or tab.
* Now, please click the first link we sent you in the checklist labeled “Task 1”. 
* Before we get started, I'd like you to share your screen with me. In Zoom, can you select the Share button?
   * On this next screen, let's go with the default selection. Also, there is a checkbox that says "Share computer sound." Can you make sure that it's checked and select "Share"?
   * Confirm that the screen reader is audible.
   * Confirm that screen sharing works.
* Now, I'm going to start recording our session.

(If the participant is in the Zoom meeting, but cannot find the Share button, guide them with the following instructions:
* The participant should alt-tab until they are sure they are in the Zoom meeting window (announcement should be something like "Zoom Meeting ID:...")
* Tab forward until they hear "Share button". Press enter
* If this doesn't work, it's likely because the meeting toolbar auto-hid. To unhide the toolbar, the user needs to press "Alt", and try step 2 again.
* Their focus will move to a new window with sharing options. 
* They should tab forwards until they hear "Share Screen button". 
* Press enter
* At this point participant should be sharing screen.

*Start recording.*

## Warm Up Questions - 5-10 minutes
* Can you tell me a little bit about yourself? (If stuck, prompt to ask about service experience, where they live, their work)
	Can you describe how frequently you use the internet?
* Have you ever used VA services online? (Va.gov, ebenefits, My HealtheVet, Tricare?)
   * If yes: Can you tell me about your experience?

Today, we are going to be asking for your feedback about how to get more information about a question or topic when filling out a form online. Has there ever been a time when you needed some extra details about a question on an online form?


  

## First Task: Test the modal pattern in staging - 10 minutes [only need to test 1 modal]
* First, please click the link for task 1 (https://staging.va.gov/gi-bill-comparison-tool/).
   * We have a form here for our GI Bill comparison tool. 
* The purpose of this tool is to help Veterans compare costs at colleges and universities they are interested in, so they can estimate how to use their GI Bill benefits.
     * First, without making any selections, scan the page and describe what it’s asking you to do.
       * Before clicking anything, describe how would you go about getting more information about one of the questions if you needed it? 
       	* Why?
	* What do you expect to happen by doing that?
       * If they mentioned one of the Learn More links:
      	 * Go ahead and select it.
      * If no mention of “Learn more” link: Is there anywhere on this page you would go to get more information about one of the questions?
[If a more direct prompt needed: What do you think would happen if you clicked the Learn more links?]
	* Go ahead and select one.
	* Modal pops up
* Is this what you expected to find?
* Show me how you would use this information to fill out the question on the form.
	* Reads content in modal
* Closes modal
	* Makes selection on form
* How well were you able to remember what it said in the pop up when you made the selection on the form page?
* How do you feel about that additional information?
	* How did it affect your understanding of the question?
* Why do you think those “learn more” links are there?
  
* (Screen readers) On a scale from 1 - 10, where 10 is the easiest and 1 is the hardest, how would you rank getting more information about that question?

### Things to watch for:
* Can Veterans use screen readers to successfully read the learn more sections?
* Does the way it shows up on the screen reader disruptive?
* Is the modal implementation useful for helping the user answer the question?


## Second Task: Test the accordion pattern in Codepen - 10 minutes
* Back in the email that Shannon sent, please click on the second link: https://codepen.io/tpierce_402/full/PoYVKKa
  * What we’re going to look at next is a prototype of two other ways to get more information while filling out an online form. 
  * For sighted users: This page doesn’t look like the rest of VA.gov yet, and we are trying things out just to make sure they work correctly. We ask that you put any biases about the visuals away and pay close attention to the way the learn more button behaves. 

### Learn more pattern in the question:
  * First, without making any selections, scan first question on the page and describe what it’s asking you to do.
       * Before clicking anything, describe how would you go about getting more information about this question if you needed it? 
       	* Why?
	* What do you expect to happen by doing that?
       * If they mentioned one of the Learn More links:
      	 * Go ahead and select it.
* If no mention of “Learn more” link: Is there anywhere on this page you would go to get more information about one of the questions?
[If a more direct prompt needed: What do you think would happen if you clicked the Learn more links?]
	 * Go ahead and select it.
	* Accordion opens
* Is this what you expected to find?
* Show me how you would use this information to fill out the question on the form.
	* Reads content in accordion
	* Makes selection on form
* How well were you able to remember what it said when the additional information appeared?
* How do you feel about that additional information?
	* How did it affect your understanding of the question?
   * (Screen readers) On a scale from 1 - 10, where 10 is the hardest and 1 is the easiest, how would you rank getting more information about that question?

      
### Learn more pattern in an option for the answer:
Next, I’m going to ask you to scan the 2nd question and without making any selections, describe what it’s asking.

* Before clicking anything, describe how would you go about getting more information about one of the options to answer -- “private training like coding bootcamps”, if you needed it? 
* Why?
	* What do you expect to happen by doing that?
       * If they mentioned one of the Learn More links:
      	 * Go ahead and select it.
      * If no mention of “Learn more” link: Is there anywhere on this page you would go to get more information about one of the questions?
[If a more direct prompt needed: What do you think would happen if you clicked the Learn more links?]
 * Go ahead and select it.
	* Accordion opens
* Is this what you expected to find?
* Show me how you would use this information to fill out the question on the form.
	* Reads content in accordion
	* Makes selection on form
* How well were you able to remember what it said when the additional information appeared?
* How do you feel about that additional information?
	* How did it affect your understanding of the choices for this question?
	* How did it affect which answer you selected?
      * (Screen readers) On a scale from 1 - 10, where 10 is the hardest and 1 is the easiest, how would you rank getting more information about that answer?

### Learn more pattern in a tooltip:
Next, I’m going to ask you to scroll a little farther down the page until you get to a label that says “Javascript tooltip.” Please read the question underneath and without making any selections, describe what it’s asking. 

* Before clicking anything, describe how would you go about getting more information about this question, if you needed it? 
* Why?
	* What do you expect to happen by doing that?
       * If they mentioned one of the Learn More links:
      	 * Go ahead and select it.
      * If no mention of “Learn more” link: Is there anywhere on this page you would go to get more information about one of the questions?
[If a more direct prompt needed: What do you think would happen if you clicked the Learn more links?]
 * Go ahead and select it.
	* Tooltip appears
* Is this what you expected to find?
* Show me how you would use this information to fill out the question on the form.
	* Reads content in tooltip
	* Types selection into form
* How well were you able to remember what it said when the additional information appeared?
* How do you feel about that additional information?
	* How did it affect your understanding of the question?
	* How did it affect the answer you typed?

   * (Screen readers) On a scale from 1 - 10, where 10 is the hardest and 1 is the easiest, how would you rank getting more information about that question?
  
### Things to watch for:
* Can Veterans use screen readers to successfully read the learn more sections?
* Are people getting caught up on the fact that this page isn’t styled?
* Which pattern is the most effective/people’s preference?
* Does the additional info pattern work just as well for answers/options to form questions, in addition to form questions?
* Do people have trouble activating the tooltip?
* Do people have trouble remembering the content of the tooltip when answering the question?

*You can now stop sharing your screen*

Okay that wraps up the items we wanted to get your feedback on today. Do you have any questions or additional thoughts about the things we evaluated?

## Thank-You - 5 minutes

Well we really appreciate you taking the time to share your thoughts with us today. Your feedback is so helpful to us as we continue to work on the site and make sure it really works for Veterans.

As a thank you for your participation, we'd like to offer you a $50 thank-you gift. Perigean mail that gift to you.

[If no] Ok, we'll follow up with an email after this session to get the right email from you in writing.

Thanks! Lastly, would you like to share this feedback opportunity with other Veterans or Veteran groups you're a part of? If so, I can send you an email with a little blurb so you can easily connect folks to our team.

Great, well thank you so much again, and enjoy the rest of your day!
