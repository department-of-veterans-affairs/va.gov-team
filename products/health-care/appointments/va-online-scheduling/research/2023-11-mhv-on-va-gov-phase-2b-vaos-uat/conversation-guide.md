# Conversation Guide - MHV on VA.gov UAT

## Moderator logistics

### 2-3 days before the session:

- Review VA Platform's [Research Checklist](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Checklist.1958773011.html#ResearchChecklist-5.Conductsessions).
- Complete any project-specific setup tasks for this study

### Day of the session:

- Use [#feedback-backchannel](https://dsva.slack.com/messages/C40B45NJK/details/) in Slack for real-time feedback from observers.
- Mute your Slack notifications.
- Send out the [observer instructions](https://depo-platform-documentation.scrollhelp.site/research-design/Observer-guidelines.1622311177.html) to your observers (Slackbot will do this for you if you type "observer instructions" into [#feedback-backchannel](https://dsva.slack.com/channels/feedback-backchannel)).

### Starting the session:

- In the Attendees section, make sure everyone except the participant is on mute.
- In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
- Check your screensharing setup and share permissions for participants.
- When the participant is ready, begin the session with the following intro:

## Introduction (5 minutes)

- Thanks so much for joining today. My name is ____________, very nice to meet you. I'm here with my notetaker ______.
- Today I'm going to ask you to test out the appointments section of VA.gov. Our discussion will help the team understand how to improve the site for Veterans in the future.
- During the session, I'll ask you to login to VA.gov and test some features using your own account. We'll be asking you to share your screen, which means we'll be seeing your appointments, and potentially other health information. We won't be using your personal health information for the study, and will redact it from any notes we take.
- Given that, do you feel comfortable proceeding?
   - If Yes, continue to next question
   - If No: I completely understand. We won't be able to continue this session today but I do hope you'll join us for future studies. Do you have any questions or concerns for me before we end the session?

- Thank you, I appreciate that. Next, I have a few people on the team who are interested in listening in to our session as observers. They're in the Zoom waiting room. It's completely fine if you choose to have the session without observers, so let me know what you'd prefer. Do you feel comfortable with having observers listen in on the session?

_(If the participant agrees, let observers join.)_

- Okay, I've let the observers in. Could the observers come on camera for a second and give a quick intro?

- Before we begin, I want to give you some background on how today's session will go. Please stop me if you have any questions:
    - I'm going to ask you to test out some features on MyHealtheVet and ask how they work for you. This will involve sharing your device's screen, which we'll run through in a minute.
    - There are no right or wrong answers, and I won’t be offended by any opinions you express. We're testing the appointments tool, not you.
    - There's no expectation to provide any personal information that you don't want to. Please feel free to share your thoughts and experiences at the level that’s comfortable for you.
    - This entire session will take no more than 60 minutes. I'll keep an eye on the time and try to keep us moving along so that we don’t go over. 
    - Finally, we would like to record the session. We check these to make sure our notes are accurate. The recordings will be destroyed after we've completed the study.
       - Given that, is it ok if I record the screen and the audio during our session today?
          - If NO: Not a problem, I may just stop you at points to confirm what I've seen. 
    - While we are so very grateful to have you here and get your feedback, the number one priority is making sure you feel comfortable in this session so if for any reason and at any time you want to stop the session, please let me know. You will not be penalized in any way if we need to stop. Just let me know at any point if you’re uncomfortable continuing, and we will end.
 
- Do you have any questions about that?
   - If NO and Recording OK: Great! I'm going to hit the record button now.
   - If NO and Recording NOT OKAY: Great! Let's get started with a few questions.

_Start recording._

- Is it ok if we record this session?

## Section 1: Warm-Up Questions (2 minutes)

Before we look at the site, I have a few questions. 

- What type of device are you joining us on today? 
- How do you usually schedule and manage your VA appointments?
   - Do you ever use MyHealtheVet, VA.gov, (_if Cerner_) or My VA Health?

## Section 2: Screen share (5 minutes)

Next, I am going to ask you to give us your feedback on the appointments tool on VA.gov.

To do this I will neeed you to share your screen. Can I help walk you through how to start the screen share?

_Help participant share screen:_
- [iOS: Zoom screen share](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-start-screen-share)
- [Android: Zoom screen share](https://depo-platform-documentation.scrollhelp.site/research-design/android-start-screen-share)

_If successful_
- Great, I’m seeing your screen.

## Section 3: UAT Tasks (30-45 min)

### Task 1: Log in (5-20 minutes)

```
Tasks to test:
- Log in to VA.gov
- Navigate to the Appointments tool from VA.gov.
- Navigate to the Appointments tool from MyVA.
```

---

Next I'm going to ask you to do some tasks that will help us see how the appointments tool is functioning. Please think out loud as you work through these. This helps me understand what steps you are taking and why. If you find anything frustrating or confusing as part of this process, please feel free to share that feedback too. 

PROMPT: First, I'd like you to navigate to VA.gov.

PROMPT: From here, I'd like you to find your appointments.
- And just a reminder from here on, if, as we're looking at this, there's anything you don't want to share with us, let me know.

_NOTE: Take note of the path they take to the appointments tool. In the last task, you'll ask them to return to any others they missed._

_PAUSE When they have arrived on the appointments screen. Take note of whether they have upcoming appointments_

PROMPT: Let's pause here for a moment. How was the process of logging in?

### Task 2: Appointments tool first impressions (5 minutes)

PROMPT: Tell me about this page. 
   - What can you do here? 

### Task 3: Navigate around the appointments tool

```
Tasks to test:
- Navigate to their past appointments.
- Navigate to their pending appointments.
- Navigate to a details page.
   - Navigate from a details page back to a list page using the back link.
```
---

PROMPT: Explore this tool. While you do, tell me about the information it provides.

_Once all tasks are complete, ask the following._

QUESTION: How is the appointments page working for you? Were there any challenges? Is anything working well?

_Use the following prompts only if they don't discover the features while exploring the pages_

- How would you review appointments you had earlier in the year?
- How would you review appointments you've requested but that haven't been scheduled yet?
- How would you go back to your list of [appointments/requests]?

### Task 4: Print appointment list

```Tasks to test: print an appointments list```

-----

PROMPT: How would you print your list of upcoming appointments? 

PROMPT: How would you print your list of past appointments? 
    - Note that you don't need to physically print anything.

QUESTION: How is printing your lists working for you? Were there any challenges? Is anything working well?
    - Note that you don't need to physically print anything.

### Task 5: (Non-Cerner) Navigate to MyHealtheVet

```
Tasks to test:
- Navigate to the Appointments tool from the MHV on VA.gov home page.
- Navigate to the MHV on VA.gov home page from the Appointments tool using the breadcrumb.
```

---

PROMPT: How would you go to MyHealtheVet from here?

_If they don't choose the breadcrumb_

PROMPT: Are there any other ways on this page?

PROMPT: Tell me about this page. How would you return to the appointments tool from here?

PROMPT: Return to your appointments list.

QUESTION: How is navigating to MyHealtheVet working for you? Were there any challenges? Is anything working well?

### Task 6 (CERNER ONLY): Navigate to MyVAHealth

```
Tasks to test:
- Navigate to My VA Health from the Appointments list.
- Navigate to My VA Health from MyVA.
```

----

PROMPT: Return to the appointments tool.

PROMPT: Tell me about the alert at the top of this page.

PROMPT: Given the information here, what do you think My VA Health is?

PROMPT: Review your appointments in My VA Health.

### Task 7: Checklist

I'm just going pause for a moment to make sure we looked at everything so far.

_Check that they completed all tasks. Redirect if needed_

All participants:
- [ ] Log in to VA.gov
- [ ] Navigate to the Appointments tool from VA.gov.
- [ ] Navigate to the Appointments tool from MyVA.
- [ ] Navigate to the Appointments tool from the MHV on VA.gov home page.
- [ ] Navigate to their past appointments.
- [ ] Navigate to a details page.
- [ ] Navigate from a details page back to a list page using the back link.
- [ ] Navigate to their pending appointments.
- [ ] Print any appointments list.
- [ ] Navigate to the MHV on VA.gov home page from the Appointments tool using the breadcrumb.

Cerner participants:
- [ ] Navigate to My VA Health from the Appointments list.
- [ ] Navigate to My VA Health from the facility selection page.
- [ ] Navigate to My VA Health from MyVA.

_Once all are completed, go to next section_

## Section 4: Mental Model Tasks (15 min)
_If there's not enough time, skip to wrap up_

### Task 8: Navigate to VA facility selection page

PROMPT: Since we have time, I want to look at one more thing. Could you return to the appointments list from here?

_Once on the appointments page_

PROMPT: Say you wanted to schedule an appointment at your VA facility. How do you think you would do that from here? 

_Once they find the Start scheduling link_

PROMPT: I won't be asking you to schedule an appointment today, but I would like to ask you about some things at the beginning of the process. I'll ask you to pause when I have questions, and I'll stop you before you schedule anything. 
   - Does that make sense? If so, are you comfortable continuing?

_If yes_

PROMPT: Given that, please start the process of scheduling a Primary care appointment.

_Note: Mental health may also be an option that brings up direct scheduling._

_PAUSE on the facility selection page:_
- How do you feel about selecting a facility here?
- Is anything confusing?
- What, if anything, is helpful?
- What else would be helpful?

### Task 9 (CERNER ONLY): Navigate to My VA Health from facility selection

PROMPT: How would you schedule an appointment at [Cerner facility]?

### Task 10 Navigate to clinic selection page

_Ask them to continue to the clinic selection page if not blocked by errors etc:_
- How do you feel about selecting a clinic here?
- Is anything confusing?
- What, if anything, is helpful?
- What else would be helpful?

Thank you for sharing that. We'll stop here so we don't schedule this appointment. Could you return the appointments tool from here? 

### Task 11 (CC eligible only): Provider selection for community care (10 minutes)

PROMPT: Return to your appointments list.

Are you familiar with community care?

_IF YES:_
    - Tell me what you know about it.
    - Have you ever scheduled an appointment through community care?

PROMPT: Say you wanted to make a community care appointment. How would you do that from here?
   - I won't be asking you to schedule an appointment today, but I would like you to use the website to start the task. I'll ask you to pause when I have questions, and I'll stop you before you schedule anything.

_Stop them on the provider list of the provider selection page._

- How was the process of selecting a provider here?
- If you could have any other information about this provider, what would it be?

Thank you for sharing that. We'll stop here so we don't schedule this appointment. Could you return the appointments tool from here? 

_IF NO:_
You likely won't be able to schedule community care appointments, but let's check. Could you try to schedule a podiatry appointment? I won't ask you to schedule the appointment, we'll just start the process.

## Section 3: Thank You and Closing (5 minutes)

PROMPT: Ok, we are finished with the website today. You can stop sharing your screen, and feel free to close any windows you opened in the process. 

### Wrap up questions

- What did you like or dislike about the session today?

- If you wanted to share your thoughts or feedback with the VA, how would you do it?
    - Have you ever done this before?
    - If so, how and when?
    - Where would you share feedback on issues with online tools like the website or the mobile website?
 
- Anything else you wanted to share?

Well we really appreciate you taking the time to share your thoughts with us. Your feedback is so helpful to us as we continue to work on the website and improve it for Veterans.

Thank you so much again, and enjoy the rest of your day!

## Backup plans

If they don't want to show their private information, they can turn off screen share and talk us through the navigation process.

If that doesn't work, we can open a staging user and share our screen, but this should be a last resort since it doesn't give us great data about how this works in their context.

## Emergency Exit Strategy

_If we need to exit the session for any reason, use the following:_

We have covered all the questions I have for you today. Thank you so much for your time and feedback.
