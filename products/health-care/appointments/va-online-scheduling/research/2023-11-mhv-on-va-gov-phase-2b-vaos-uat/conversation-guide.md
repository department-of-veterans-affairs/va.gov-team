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
- Today I'm going to ask you to help test out the appointments tool on VA.gov. Your feedback will help our team understand how to improve the site for Veterans in the future.
- During the session, I'll ask you to login to VA.gov and test some features using your own account. I'll be asking you to share your screen, which means we'll be seeing your appointments, and potentially other health information. We will not use your personal health information for the study, and will redact it from any notes we take.
- Given that, do you feel comfortable proceeding?
   - If Yes, continue to next question
   - If No: I completely understand. We won't be able to continue this session today but I do hope you'll join us for future studies. Do you have any questions or concerns for me before we end the session?

- Thank you, I appreciate that. Next, I have a few people on the team who are interested in listening in to our session as observers. They're in the Zoom waiting room. It's completely fine if you choose to have the session without observers, so let me know what you'd prefer. Do you feel comfortable with having observers listen in on the session?

_(If the participant agrees, let observers join.)_

- Okay, I've let the observers in. Could the observers come on camera for a second and give a quick intro?

- Before we begin, I want to give you some background on how today's session will go. Please stop me if you have any questions:
    - You will be testing out features that currently exist on VA.gov, using your current account.
    - I'll ask you to complete tasks and give feedback on the tool you'll be testing.
    - There are no right or wrong answers, and I won’t be offended by any opinions you express. We're testing the appointments tool, not you.
    - There is no expectation to provide any personal information that you don't want to. Please feel free to share your thoughts and experiences at the level that’s comfortable for you.
    - My priority is making sure you feel comfortable during this session, so if for any reason and at any time you want to stop the session, please let me know. You will not be penalized in any way if we need to stop.
    - This entire session will take no more than 60 minutes. I'll keep an eye on the time and try to keep us moving along so that we don’t go over. 
    - Finally, I would like to record the session. We use recordings to make sure our notes are accurate. The recordings will be destroyed after we've completed the study.
       - Given that, is it ok if I record the screen and the audio during our session today?
          - If NO: Not a problem, I may just stop you at points to confirm what I've seen.
    - Do you have any questions about anything before we start?
       - If NO and Recording OK: Great! I'm going to hit the record button now.
       - If NO and Recording NOT OKAY: Great! Let's get started with a few questions.

_Start recording._

- Just to confirm on the record, do I have your permission to record the session today?

## Section 1: Warm-Up Questions (2 minutes)

Before we look at the appointments tool, I have a couple of questions. 

- What type of device are you using right now? 
- How do you usually schedule and manage your VA appointments?
   - Do you ever use MyHealtheVet, VA.gov, (_if Cerner_) or My VA Health?

## Section 2: Screen share (5 minutes)

Next, I will need you to share your screen so I can see how you use the tool. Can I help walk you through how to start the screen share?

_Help participant share screen:_
- [iOS: Zoom screen share](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-start-screen-share)
- [Android: Zoom screen share](https://depo-platform-documentation.scrollhelp.site/research-design/android-start-screen-share)

_If successful_
- Great, I’m seeing your screen.

## Section 3: UAT Tasks (30-45 min)

### Task 1: Navigate to appts tool (5-20 minutes)

```
Tasks to test:
- Log in to VA.gov
- Navigate to the Appointments tool from VA.gov home page (via static landing page).
- Navigate to the Appointments tool from MyVA.
```

---

So I'm going to ask you to do some tasks that will help us see how the appointments tool is functioning. Please think out loud as you work through these. This helps me understand what steps you are taking and why. If you find anything frustrating or confusing as part of this process, please feel free to share that feedback. 

PROMPT: First, I'd like you to go to the website "VA.gov".

PROMPT: From here, I'd like you to find your appointments.
- And just a reminder from here on, if there's anything you don't want to share with us, let me know.

_NOTE: Take note of the path they take to the appointments tool. In the last task, you'll ask them to return to any others they missed._

_PAUSE When they arrive on the appointments screen. Take note of whether they have upcoming appointments_

PROMPT: Let's pause here for a moment. How was the process of logging in?

### Task 2: Navigate around the appointments tool

```
Tasks to test:
- Navigate to their past appointments.
- Navigate to their pending appointments.
- Navigate to a details page.
- Navigate from a details page back to a list page using the back link.
```
---

PROMPT: Explore your appointments. While you do, please describe what you're seeing. I'm interested in your first impressions.

_Use the following prompts only if they don't discover the features while exploring the pages_

- How would you review appointments you had earlier in the year?
- How would you review appointments you've requested but that haven't been scheduled yet?
- How would you go back to your list of [appointments/requests]?

_Once all tasks are complete, ask the following._

QUESTION: How is the appointments tool working for you? 
- Were there any challenges?
- Is anything working well for you?

### Task 3: Print appointment list

```Tasks to test: print an appointments list```

-----

PROMPT: How would you print your list of [appointments|requests]? 
- Note: You don't need to physically print anything.

PROMPT: You don't need to physically print anything. Could you just look at this preview of the printout and let me know your thoughts? 
- You can hit cancel when you're done.

QUESTION: How is the print feature working for you? 
- Were there any challenges?
- Is anything working well?

### Task 4: Navigate to MyHealtheVet Home Page

```
Task checklist:
- Navigate to the Appointments tool from the MHV on VA.gov home page.
- Navigate to the MHV on VA.gov home page from the Appointments tool using the breadcrumb.
- Navigate to MHV on VA.gov home page using the navbar button
- Navigate back to Appointments tool from MHV on VA.gov home page
```

---

PROMPT: From your appointment list, can you see a way to access other MyHealtheVet tools, like your messages or prescriptions?

_If they don't find the breadcrumb_

PROMPT: Are there any other ways to get there from the appointments page?

PROMPT: Go ahead and click that link to MyHealtheVet

_From the MHV on VA.gov portal_

PROMPT: Tell me about this page. 

PROMPT: Could you return to the appointments tool from here?

QUESTION: How did navigating around MyHealtheVet working for you? 
- Were there any challenges?
- Is anything working well?

### Task 5 (CERNER ONLY): Navigate to My VA Health

```
Tasks to test:
- Navigate to My VA Health from the Appointments tool.
- Navigate to My VA Health from MyVA.
- Navigate back to Appointments tool from My VA Health.
```
----

PROMPT: Could you return to the appointments tool?

_Once on the appointments home page_

PROMPT: Could you review your appointments at [Cerner facility]?

If needed:
- PROMPT: Tell me about the alert at the top of this page.
- PROMPT: Given the information here, what do you think My VA Health is?
- PROMPT: Click the link Go to My VA Health

PROMPT: Can you return to your VA.gov appointments list from here?

QUESTION: How did viewing your [Cerner facility] appointments work for you? 
 - Were there any challenges?
 - Is anything working well?

### Task 6: Checklist

I'm just going pause for a moment to make sure we looked at everything so far.

_Check that they completed all tasks. Redirect to a previous task if needed._

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

### Task 7: Review VA facility selection page

PROMPT: Since we have time, I want to look at one more thing. Could you return to your appointments list from here?

_Once on the appointments page_

PROMPT: Say you wanted to schedule an appointment. How would you do that from here? 

_Once they find the Start scheduling link_

PROMPT: I won't be asking you to schedule an appointment today, but I would like to ask you about some things at the beginning of the process. I'll pause you at certain points, and I'll stop you before you schedule anything. 
   - Does that make sense?
   - If yes, are you comfortable continuing?

_If YES_

PROMPT: Please start the process of scheduling a Primary care appointment.

_Note: Mental health may also be an option that brings up direct scheduling._

_PAUSE on the facility selection page:_
- Tell me about this page.
- If you were scheduling an appointment, which of these might you choose to schedule at?
    - Why?
- Is anything confusing?
- What, if anything, is helpful?
- What else would be helpful to have here, if anything? 

### Task 8 (CERNER ONLY): Navigate to My VA Health from facility selection

PROMPT: How would you schedule an appointment at [Cerner facility]?

QUESTION: How did scheduling your [Cerner facility] appointments work for you? 
 - Were there any challenges?
 - Is anything working well?


### Task 9: Review clinic selection page

_Ask them to continue to the clinic selection page if not blocked by errors etc:_

- Tell me about this page
- If you were scheduling an appointment, which of these might you choose to schedule at?
  - Why? 
- Is anything confusing?
- What, if anything, is helpful?
- What else would be helpful to have here, if anything?

Thank you for sharing that. We'll stop here so we don't schedule this appointment. Could you return the appointments tool from here? 

### Task 10 (CC eligible only): Review provider selection (10 minutes)

PROMPT: Return to your appointments list.

_Once on list_

PROMPt: Could you try to schedule a podiatry appointment? 
   - I won't be asking you to schedule an appointment today, but I would like you to use the website to start the task. I'll ask you to pause when I have questions, and I'll stop you before you schedule anything.

_Stop them on the provider list of the provider selection page._

PROMPT: Please add a provider. 

- Tell me about the list.
- If you were scheduling an appointment, which of these might you choose to schedule with?
    - Why?
- Is anything confusing in the list?
- What, if anything, is helpful?
- What else would be helpful to have here, if anything?
 
PROMPT: Thank you for sharing that. We'll stop here so we don't schedule this appointment. Could you return the appointments tool from here? 

## Section 3: Thank You and Closing (5 minutes)

PROMPT: Ok, we are finished with the website today. You can stop sharing your screen, and feel free to close any windows you opened in the process. 

### Wrap up questions

- What did you like or dislike about the session today?
 
- Is there anything else you want to share?

Well we really appreciate you taking the time to share your thoughts with us. Your feedback is so helpful to us as we continue to work on the website and improve it for Veterans.

Thank you so much again, and enjoy the rest of your day!

## Emergency Exit Strategy

_If we need to exit the session for any reason, use the following:_

We have covered all the questions I have for you today. Thank you so much for your time and feedback.
