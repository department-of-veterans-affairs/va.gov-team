# Dependency verification usability testing conversation guide
**VSA eBenefits Team | May 2021**

`Candy Clark, researcher/designer`

---
### Setup
- Make sure modal will proc for both test users.
- Slack [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel) will be used for real-time feedback from observers
- Zoom Setup: Turn off "Play Entry/Exit Chimes", allow anyone to share screen, and make sure all observers are on mute.
- Sessions will be conducted remotely, setup will be tested 15 minutes prior to call-time; users will be required to share their screen
- **Note:** These sessions will be recorded
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/research-design/usability-testing-1/dependent-verifiy-usability-1-research-plan.md)

## Intro
Good morning/afternoon and thank you for joining us today. My name is `name` and I have a few colleagues on the line with us. They are here to help me out by observing and taking notes. We're part of a team with the Department of Veterans Affairs that's moving some features off the old eBenefits site and over to VA.gov. To do that, we really want to learn what Veterans need to improve their online experience, and how we can make VA.gov more useful. Today, we're looking at how you view and update your dependents.

There are a few things I need to mention before we start:
- The session should take about 30 minutes, but you can end it at any point--just let me know.
- If you have participated in a usability test before, this should be pretty similar. And, if you haven’t, it’s pretty simple. I will give you a little backstory and then ask you to complete a few tasks based on that scenario.
- I do want to stress that we are testing ourselves and not **you** in any way. There are no right or wrong answers and we'd like to hear exactly what you think about what we show you so we can make improvements to VA.gov.
- It really helps me understand what is working (or not) if you talk out loud as you are complete the tasks.
- Today we'll be working with an early version of a feature we're developing. Most things we're testing will work, but some might not. If we run into problems, I might switch us over to a less interactive prototype.
- This is a prototype, but it is not a live web page. None of your actions will affect your account or any VA information.
- We'd like to record this session. This gives us a record to use for note-taking. The recording will be stored on a private drive and deleted when we conclude our testing and note-taking. No personal identifying information will be transcribed.
- If yes, I'll ask "on the record" once the recording starts.
- (Start recording) OK now, do I have your permission to record this session?

## Warm-up
- Please tell me a little about yourself.  (Your service experience, where you live, general experiences with the VA...)
- Have you used eBenefits to make changes to your dependents?
  - What kind of changes did you make?
- How often do you visit the eBenefits site? How about VA.gov?

We'll be looking at two scenarios today -- both will involve dependents. Since this is just testing, we'll be using a test account with made-up data.

Now we're ready to start. (I'm going to turn off my video now. You can turn yours off or leave it on, whichever you prefer.) OK, now could you share your screen with us? There should be a green button at the bottom of your Zoom screen that says "Share Screen."
- **Just click that, select your screen, and hit share.**



## Scenario 1: Verify dependents
For the first task, I would like for you to imagine that you are on VA.gov to get some info about dependents benefits. You have two dependents - one spouse and one child.

### Task 1.1 / Sign-in / 5 minutes
User is given a link to the View Dependents page in the VA.gov staging environment and log in info for test user 108.
- Now I have put a link to the page we're starting on in the chat; **please click on it.** (Clicks on link to landing page)
- To be able to see dependents' information, you'll have to log in. I put the username and password in the chat -- **use these to sign-in.** For this scenario, your name is Morris.
- You're now on VA.gov and you want to know who the VA has listed as your dependents. **Find your list of dependents.**

>Note: User may see VA modal if they have not been to the staging environment before. If they cannot clear the modal, send a link to https://staging.va.gov. Have them clear the modal, then go back to the View Dependents URL.

### Task 1.2 / Review dependents / 5 minutes
Modal intercepts user.
- `observe reaction` If needed, prompt: Tell me what you are thinking here.
- Why do you think you're seeing this?
- Who is listed as your dependents?

#### Things to look for:
- Do users recognize they’ve been intercepted by a modal?
- Why do users think they are being asked to confirm their dependents?
- What is the users’ perception of what the modal is telling them and what options are available?
- What does the user expect to happen when they click the “verify this is correct” button?

### Task 1.3 / Confirm dependents / 2 minutes
For this scenario, your dependents should be Veronica Corningston and Quanily Ortiz.
- `observe reaction` If needed, prompt: Tell me what you are thinking here.
- What other information would you need to confirm these are your dependents or not?
- If the list of dependents is correct, what would you do next? Go ahead and do that.

#### Things to look for:
- Does the user use the “Verify dependents” button or try to bypass the modal in another way?
- What does the user expect to happen now?



## Scenario 2: Update dependents
OK! Thank you. Before we begin the next task, I need you to sign out of va.gov. Find your name (Morris) in the upper right, click on the drop-down, and select "sign out".

Let's go on to the next scenario. This time, you are going to be Gerald and you have 7 dependents, a spouse and 6 children. One of your kids, Carl, has finished school and you want to remove him from your benefits.

### Task 2.1 / Back to start / 2 minutes
User is again given the link to the starting page in the VA.gov staging environment and credentials for test user 50.
- If you can go back to the link in chat; **please click on it.** (Clicks on link to landing page)
- And, sign in with the username and password I just added to the chat.
- You are back on VA.gov. Remove Margie from your list of dependents.

#### Things to look for:
- Do users identify the “add or remove dependents” button as a way to make updates?
- Do users understand what could happen if their dependents are wrong?

### Task 2.2 / Make Changes to Dependents / 2 minutes
Modal intercepts user.
- `observe reaction`
- Why do you think you're seeing this now?
- How often do expect to see this?
- After user clicks “Make changes to dependents” button: This is where we run into a feature we haven’t prototyped yet. What would you expect to happen now?

#### Things to look for:
- Does the user use the “add or remove dependents” button or try to bypass the modal in another way?
- What do users expect will happen after they remove a dependent?

<!--
### Task 3A
Add Taylor to your dependents
- After user clicks “Add dependents to your VA benefits” action link: And this is the other feature that we haven’t prototyped out. What would you expect to happen here?

#### Things to look for:
* Note: The link for this will not work
* Does the user find the “add dependent” button?
* What do users expect will happen after they add a dependent? -->

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
