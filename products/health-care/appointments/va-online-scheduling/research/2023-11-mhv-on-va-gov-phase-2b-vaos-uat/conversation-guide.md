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
- Check your [screensharing setup] and share permissions for participants.
- When the participant is ready, begin the session with the following intro:

## Introduction (5 minutes)

- Thanks so much for joining today. My name is ____________, very nice to meet you. I'm here with my notetaker ______. Today we're going to ask for your feedback on the appointments section of VA.gov. Our discussion will help the team understand how to improve the site for Veterans in the future.

- Before we begin: Today we're going to ask you to login to VA.gov and test some features using your own account. We'll be asking you to share your screen, which means we'll be seeing your appointments, and potentially other data. We won't be using your personal health information for the study, and will redact it from any recordings or transcripts. Given that, do you feel comfortable proceeding?
   - If Yes, continue to next question
   - If No: I completely understand. We hope you'll join us for future studies. Do you have any questions or concerns for me before we end the session?

- Thank you, I appreciate that. Next, I have a few people on the team who are interested in listening in to our session as observers. They’re in the virtual waiting room right now. It’s completely fine if you choose to have the session without observers, so let me know what you’d prefer. Do you feel comfortable with having observers listen in on the session?

_(If the participant agrees, let observers join. Each observer should come off mute and introduce themselves, and then go back on mute with video off.)_

- There are a few things I'd like to mention:
    - There are no right or wrong answers, and I won’t be offended by any opinions you express. We just want to hear your opinions, so that we can improve the mobile website and make it work better for everyone.
    - There’s no expectation to provide any personal information. Please feel free to share your thoughts and experiences at the level that’s comfortable for you.
    - This entire session will take no more than 60 minutes. I will keep an eye on the time and try to keep us moving along so that we don’t go over. 
    - The format of the session is that we’ll talk together in the beginning, and then we will move to a part where I’ll ask you to login to your VA.gov account and share your screen. 
    - Finally, is it ok if I record the screen and the audio during our session today? Our team will use this as backup in case we need to refer to to make sure our notes are accurate. The recordings will be destroyed after we do this. 
    - **While we are so very grateful to have you here and get your feedback, the number one priority is making sure you feel comfortable in this session so if for any reason and at any time you want to stop the session, please let me know. You will not be penalized in any way if we need to stop. Just let me know at any point if you’re uncomfortable continuing, and we will end.**
- Does that all make sense, and sound okay to you?
- Great! Any questions before we continue?
- Ok, I'm going to hit the record button now. 

_Start recording._

- Is it ok if we record this session?

## Section 1: Warm-Up Questions (2 minutes)

Before we look at the site, I have a few questions first, as it would be great to learn more about you and how you use the VA for health and benefits.

- What type of device are you joining us on today? 
- How do you usually schedule and manage your VA appointments?
   - Do you ever use MyHealtheVet, VA.gov, (_if Cerner_) or My VA Health?

## Section 2: Screen share (5 minutes)

- During our session today, I am going to ask you to login to VA.gov so we can see how the appointments tool works for you. To do this I will neeed you to share your screen. I can walk you through how to start the screen share. 

_Help participant share screen_
_[iOS: Zoom screen share](https://depo-platform-documentation.scrollhelp.site/research-design/iphone-start-screen-share) \
[Android: Zoom screen share](https://depo-platform-documentation.scrollhelp.site/research-design/android-start-screen-share)

- Great, I’m seeing your screen.

## Section 3: UAT Tasks (30-45 min)

### Task 1: Log in (5-20 minutes)

Tasks to test:
- Log in to VA.gov
- Navigate to the Appointments tool from VA.gov.
- Navigate to the Appointments tool from MyVA.

---

Now, I'd like you to navigate to VA.gov.

PROMPT: From here, can you find your appointments?

_PAUSE When they have arrived on the appointments screen_

PROMPT: How was the process of logging in?

**Things to Note:**
- Note any challenges with logging in.
- What path did they take to the appointments tool?
- Did they hit My VA? Static Landing Page?

### Task : Appointments Tool First Impressions (5 minutes)

PROMPT: Tell me about this page. 
   - What are your first impressions? What can you do here? 

### Task : Navigate around the appointments tool

Tasks to test
- Navigate to their past appointments.
- Navigate to a details page.
- Navigate from a details page back to a list page using the back link.
- Navigate to their pending appointments.

---

Now, I am going to give you a series of tasks for you to do on the website. Please think out loud as you go, so I better understand what steps you are taking and why. If you find anything frustrating or confusing as part of this process, please feel free to share that feedback too. 

PROMPT: You are curious the last time you visited your provider, where would you go to find out the date of your last appointment?  Without activating anything, where do you think you’d find that? You can look/swipe around the screen, just don’t activate anything.

- Go ahead and use the website to complete the task. Once you’re there, stop and wait for the next instruction.
- Once they navigate to past appointments ask them to expand one of them.

PROMPT: How would you go back to your list of upcoming appointments?

**Things to Note:**

Observe as they navigate. Are the breadcrumbs accurate? Are they using the descriptive back button? Do they mentions using it as they think out loud?"

### Task : Print appointment list

Tasks to test: print an appointments list

-----

- PROMPT: Imagine you want to print the details for an upcoming appointment. Without activating anything, where do you think you’d find that?
- TASK 1: Go ahead and use the website to complete the task but don't actually print it. 
     *_If not successful: Help them navigate to where they need to go. Note where they have trouble._
- TASK 2: Navigate to a past appointment to do the same thing but again, you do not have to print anything.
- TASK 2: If you have a pending appointment, go ahead and do the same thing.

### Task : (Non-Cerner) Navigate to MyHealtheVet using the breadcrumb 
Tasks to test:
- Navigate to the Appointments tool from the MHV on VA.gov home page.
- Navigate to the MHV on VA.gov home page from the Appointments tool using the breadcrumb.

---

### Task : (Cerner) Navigate to MyHealtheVet using the breadcrumb 

Tasks to test:
- Navigate to My VA Health from the Appointments list.
- Navigate to My VA Health from the facility selection page.
- Navigate to My VA Health from MyVA.
- Navigate to My VA Health from VA.gov.

----

## Section 4: Mental Model Tasks (15 min)

### Task : Facility/Clinic Selection for Direct Scheduling(10 minutes)

PROMPT: Say you wanted to schedule an appointment at your VA facility. Without activating anything, how do you think you would do that from here? You can look/swipe around the screen, just don’t activate anything.

I won't be asking you to schedule an appointment today, but I would like you to use the website to start the task. I'll ask you to pause when I have questions, and I'll stop you before you schedule anything.

PAUSE on the facility selection page:
- How do you feel about selecting a facility here?
- If you could have any other information about this facility, what would it be?

If possible, continue to the clinic selection page:
- How do you feel about selecting a clinic here?
- If you could have any other information about this clinic, what would it be?

Thank you for sharing that. We'll stop here so we don't schedule this appointment. Could you return the appointments tool from here? 

### Task : Provider selection for community care (10 minutes)

Are you familiar with community care?

_IF YES:_
    - Tell me what you know about it. It helps us to hear about things in your own words to make sure we're using plain language when we describe them.
    - Have you ever scheduled an appointment through community care?

PROMPT: Say you wanted to make a community care appointment. Without activating anything, how do you think you would do that from here?
   - I won't be asking you to schedule an appointment today, but I would like you to use the website to start the task. I'll ask you to pause when I have questions, and I'll stop you before you schedule anything.

_Stop them on the provider list of the provider selection page._

- How was the process of selecting a provider here?
- If you could have any other information about this provider, what would it be?

Thank you for sharing that. We'll stop here so we don't schedule this appointment. Could you return the appointments tool from here? 

_IF NO:_
You likely won't be able to schedule community care appointments, but let's check. Could you try to schedule a podiatry appointment? I won't ask you to schedule the appointment, we'll just start the process.

## Section : Thank You and Closing (5 minutes)

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

## Emergency Exit Strategy

_If we need to exit the session for any reason, use the following:_

We have covered all the questions I have for you today. Thank you so much for your time and feedback.
