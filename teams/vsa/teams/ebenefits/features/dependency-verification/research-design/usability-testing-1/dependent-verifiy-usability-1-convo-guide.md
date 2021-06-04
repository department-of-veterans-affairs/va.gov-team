# Dependency verification usability testing conversation guide
**VSA eBenefits Team | May 2021**

`Candy Clark, researcher/designer`

---
### Setup
* Slack [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel) will be used for real-time feedback from observers
* Before the session, send out the [observer instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/during-research/howto-observer-instructions.md) to your observers (Slackbot will do this for you if you type "observer instructions" into [\#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel)).
* In the Attendees section, make sure everyone except the participant is on mute
* In the Audio section, click the drop-down arrow and make sure "Play Entry/Exit Chimes" is unchecked
* Sessions will be conducted remotely, setup will be tested 15 minutes prior to call-time; users will be required to share their screen
* **Note:** These sessions will be recorded
* [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/dependency-verification/research-design/usability-testing-1/dependent-verifiy-usability-1-research-plan.md) 

## Intro
Good morning/afternoon and thank you for joining us today. My name is (Give your name) and I have a few colleagues on the line with us. They are here to help me out by observing and taking notes. We're part of a team with the Department of Veterans Affairs that's moving some features off the old eBenefits site and over to VA.gov. To do that, we really want to learn what Veterans need to improve their online experience, and how we can make VA.gov more useful. Today, we're looking at how you view and update your dependents.

There are a few things I need to mention before we start:
* The session should take about 30 minutes, but you can end it at any point--just let me know. 
* We have quite a few things to cover, so to respect your time, I may occasionally break-in to move us to the next item on the list.
* If you have participated in a usability test before, this should be pretty similar. And, if you haven’t, it’s pretty simple. I will give you a little backstory and then ask you to complete a few tasks based on that scenario.
* I do want to stress that we are testing ourselves and not **you** in any way. There are no right or wrong answers. We'd like to hear exactly what you think about what we show you so we can make improvements to VA.gov.
* Please say what's on your mind--good and bad. Any problem you have or confusion you experience is significant and helps us identify areas where we need to improve. I will not be offended by any opinions you express.
* Today we'll be working with an early version of a feature we're developing. Most things we're testing will work, but some might not. This is not a live web page, so none of your actions will affect your account or any VA information.
* We'd like to record this session. This gives us a record to use for note-taking. The recording will be stored on a private drive and deleted when we conclude our testing and note-taking. No personal identifying information will be transcribed.
* If yes, I'll ask "on the record" once the recording starts.
* (Start recording) OK now, do I have your permission to record this session?

## Warm-up
* Would you tell us a little bit about yourself? Your service experience, where you live, general experiences with the VA...
* Have you used eBenefits to make changes to your dependents?
* (If user has disability rating) Would you mind telling us what your disability rating is?
* How often do you visit the eBenefits site? How about VA.gov?

We'll be looking at two scenarios today -- both will involve dependents. Since this is just testing, so we'll be using a test account with made-up data. 

* Now we're ready to start. OK, now could you share your screen with us? There should be a green button at the bottom of your Zoom screen that says "Share Screen." 
* **Just click that, select your screen, and hit share.**

## Verify dependents scenario 
For the first task, imagine that you have three dependents -- a spouse and two children (We'll need to confirm static info in staging). You're on VA.gov to get some info about dependents benefits.

### Task 1 / Sign-in / 5 minutes 
User is given a link to a starting page in the VA.gov staging environment. 
* Now I have a link in chat to the page we're starting on; **please click on it.** (Clicks on link to landing page)
* To be able to see dependents information, you'll have to log in. I put the username and password in the chat -- **use these to sign-in.** For this scenario, you're (supply username).
* Find the View Dependents button and **click on it.**

### Task 2 / Review dependents / 5 minutes 
Modal intercepts user.
* Describe what you're seeing.
* Why do you think you're seeing this? 
* Who are listed as your dependents?

#### Things to look for:
* Do users recognize they’ve been intercepted by a modal?
* Why do users think they are being asked to confirm their dependents?
* What is the users’ perception of what the modal is telling them and what options are available?
* What does the user expect to happen when they click the “verify this is correct” button?

### Task 3 / Confirm dependents / 2 minutes
User verify dependents are correct.
* What other information would you need to confirm these are your dependents or not?
* If the list of dependents is correct, what would you do next? Go ahead and do that.

And now you've come to this page. What do you see here?

#### Things to look for:
* Does the user use the “Verify dependents” button or try to bypass the modal in another way?
* What does the user expect to happen now?

## Update dependents scenario
OK! Thank you. Now we'll go on to the next scenario.

This time, imagine that some time has passed, maybe a year or so. During the past year, you’ve had some life changes -- one child turned 18 and aged-out, and you adopted another child. It's been a while, but now you're back on VA.gov.

### Task 1A / Back to start / 2 minutes 
User is again given the link to the starting page in the VA.gov staging environment. 
* If you can go back to the link in chat; **please click on it.** (Clicks on link to landing page)

`Made changes to here -- JA`

#### Things to look for:
* Do users identify the “add or remove dependents” button as a way to make updates?
* Do users understand what could happen if their dependents are wrong?

### Task 2A / Review dependents / 2 minutes
Modal intercepts user.
* Why do you think you're seeing this now?
* How often do expect to see this?
* After user clicks “Remove dependent” link: This is where we run into a feature we haven’t prototyped yet. What would you expect to happen now?
 
#### Things to look for:
* Note: The link for this will not work
* Does the user use the “add or remove dependents” button or try to bypass the modal in another way?
* Does the user find the “remove dependent” link?
* What do users expect will happen after they remove a dependent? 

### Task 3A
Add Taylor to your dependents
* After user clicks “Add dependents to your VA benefits” action link: And this is the other feature that we haven’t prototyped out. What would you expect to happen here?

#### Things to look for:
* Note: The link for this will not work
* Does the user find the “add dependent” button?
* What do users expect will happen after they add a dependent? 

## Final thoughts
* If this were an actual application, what would expect to happen next?
* What on the site would you do/look at next?
* Did you notice any differences between the “Verify” and “Update” screens? 
* How could we make things more clear?

---

## Wrap-up
Looks like we covered everything on my list. (ALT) Looks like we're at (time), so we'll need to leave it here. Is there anything else you'd like us to know--something we didn't cover about the screens we looked at, or VA.gov in general?

## Closing
Thank you so much for taking the time to talk with us! Your feedback is critical to our team's effort to improve Veterans' online experiences--and VA.gov in particular. Enjoy the rest of your day!

---
