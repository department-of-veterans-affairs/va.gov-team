---
title: "Conversation Guide for [CDS Platform, CDS Console, 2025-11-01]"
author: "Liz Blasi"
date_created: "2026-01-22"
last_modified: "2026-01-22"
tags:
  - "Patient Details"
  - "CDS Console"
  - "Oracle Health use cases"
  - "Oracle Health PowerChart"
description: "Converstation guide for Console Patient Details Testing."
---
# Conversation Guide for Patient Details User Testing - Oracle Health Users

## Moderator logistics 📋✅
### 2-3 days before the session

`List and complete any project-specific setup tasks for this study below:`

- [X] Dry run

### Day of the session

> [!TIP]
> - Create a DM group in Slack for real-time feedback from observers.
> - Mute your Slack notifications.
> - Send out the Notetaker and Observer Guide

### Notetaker and Silent Obeserver Guide
- Be a silent observer. If you have a question for the participant, ask the facilitator via a Slack DM and they'll accommodate it if appropriate.
- If you can notetake, please do! It helps researchers a lot to see what you captured. There’s a note taking template in this Mural with screenshots. If you find it easier to write your notes or use a word doc, that's fine too! If you take running notes, please be sure to make a clear reference to the screen in question or the scenario being mentioned.
- Write what you hear and see as much as possible. For some it can be easier to write in first person, as it is said, so that you don't need to paraphrase anything. Try to capture what they said without adding your own interpretation of what they meant. E.g. "I'm not sure about this checkbox" does not equal "Doesn't understand checkbox."
- Share your notes back with the facilitator via Slack if taken outside of the mural. Do not include ANY PII in this chat.
- For design testing, try to write down things that aren't said—for instance, when someone misunderstood some copy or clicked the wrong element. It helps us figure out what needs to be revisited.
- Share a few raw impressions with the facilitator via Slack or in the notetaking document after the interview is done, if possible. It helps with synthesis!

**Protecting PII**
- It's important to protect the privacy of our VHA staff participants AND any Veterans. 
- Do not include the participants name or other identifiers -- such as a very specific title that can be easy to identify them with in your notes. Instead, use a general role description, such as "primary care provider" and "also works in informatics"
- In the event a participant needs to share their screen or a tool with an actual patient (since test patients don't always work to show how the tool functions), stop the recording before they share. DO NOT RECORD THE PARTICIPANT'S SCREEN IF THEY ARE SHOWING A REAL PATIENT.


### Starting the session

> [!TIP]
> - In the Attendees section, make sure everyone except the participant is on mute.
> - In the Participant "more" menu, make sure "Play Join and Leave Sound" is unchecked
> - Check your [screensharing setup] and share permissions for participants.
> - When the participant is ready, begin the session with the following intro*

# Intro - 5 minutes

Thanks for joining us today! My name is **[NAME]** and **[NOTETAKER NAME]** & **[NOTETAKER NAME]** is/are here to help with note taking and observing the session. Is that OK?
> [!TIP]
> - Then, ask the notetaker and observers to **give a brief, camera-on introduction, like their first name and position with VA.gov.** (This is meant to humanize the interaction of observation for the participant.)
> - Once complete, ask the notetaker and observers to turn off their cameras for the remainder of the session to save bandwidth

Today we're going to talk about: **Over the course of the hour, we will have  general discussion about your typical workflow within PowerChart, and then review a design prototype and gathering your input on what data will be the most helpful for your clinical decision making, and then wrap-up with a few final questions.**

Before we start, I have a few things that I want to go over with you:

- **This entire session should take about 60 minutes.** I want to make sure I leave some space for your questions too, so I may occasionally prompt you with the next question or topic.
  
- **In this session, we want to hear your honest opinions.** There are no right or wrong answers; we are not testing your knowledge or abilities. I welcome any and all of your feedback, and I won't be offended by any opinions you express.
  
- **Your participation in this session is completely voluntary.** You do not have to participate if you don't want to. Your responses will remain confidential and your anonymity protected. If you would like to stop the session or do not want to answer a question for any reason at any time, that's no problem. Please let me know.
       
- **You'll be interacting with a prototype today.** This is a demo tool that may not function exactly the way you expect. Some areas of the prototype will be clickable, and some will not. 
  
- **Are you comfortable if I record my screen and audio as we talk today?** We use the recordings to confirm that we have captured your opinions accurately. After we complete the analysis, the recordings are destroyed, and none of your comments will be attributed to you directly. We either report findings out in groups (i.e., 5 out of 10 participants said this), or if we want to quote you directly, we use a general role, like primary care physiciant or give you a participant ID, like P7. A general role or care setting helps provide a lens for the quote.
  
   - **Knowing that, are you comfortable if I record my screen and audio as we talk today?**

   <mark>**[Record answer here]**</mark>
     
   - If yes: **Once I start recording, I am going to confirm that you are okay with me recording this session once more.**

➡️ **Start recording.**

> [!TIP]
> After you start the recording, click the Show captions (CC) button to enable transcription for the recording.

- **I have started recording.** I'd like to confirm: Are you comfortable if I record my screen and the audio as we talk today?

 <mark>**[Record answer here]**</mark>
 
# Intro

We are the Clinical Decision Support Collaborative (CDSC) 

* Our mission is to enable teams to develop and deploy modern, scalable applications more quickly and securely, while providing clinicians with an improved user experience as they provide clinical care.
* The Clinical Decision Support Collaborative makes tools to help clinicians make decisions within their workflows, like medical calculators.

# Additional Context if Needed

* The Clinical Decision Support Collaborative (CDSC) seeks to maximize clinicians’ and veterans’ abilities to collaboratively achieve veteran health goals, providing clinicians with context-relevant, patient-specific information to enhance decision-making within the clinical workflow.
* While many clinical decision support capabilities are available directly within CPRS or Oracle Health, the CDS Program focuses on opportunities for clinical decision support that are not provided within the Electronic Health Record (EHR).
* The program serves clinicians by creating a suite of context-aware, standards based Clinical Decision Support (CDS) tools that provide a common, cohesive user experience and integrate with CPRS as well as Oracle Health.
* During COVID-19 the Clinical Decision Support Collaborative was formed to build tools like Covid Patient Manager to help clinicians make decisions when triaging patients as well as tools like MedPic that allows clinicians to get a sense of medications that a patient is on and whether or not they have been refilling their medications in a timely way - helping to have a view into medication compliance. Since then we have developed applications like My WorkWeek - helping clinicians have a  comprehensive view of their schedule and potential open slots for appointments. As well as Task Manager - an application that helps teams work across tasks and patients.
* We also have developed the CDS Console - the home for where all of these applications live as well as information about the patient is viewable. We have the ability to sync to whatever patient is being looked at in the EHR - which is super cool! 
* We also have done work to build out CDS Hooks (Clinical Decision Support at the point of care) at VA and are working to get them into production within the Federal EHR OH environment - currently we are in production within the VistA environment within the CDS Console itself. 
* We are in the early days of integrating into Oracle Health. Our hope is by end of 2026 the CDS Console, and ideally CDS Hooks also will be live in Oracle Health. As a part of preparing for the initial integration path, to prepare, we want to share a bit about our tools and planned integration pattern.
* Are you familiar with Clinical Decision Support Console? 
* Have you used it before?
* Do you have any questions?

# Section 1: 'Day in the Life' in PowerChart - 20 min

## As-is workflow in PowerChart - 10 min

Now I’d like to learn more about your typical workflow with PowerChart.

* When you first log in, where do you usually start your day within PowerChart?
* What are the different ways you access a patient’s chart?
* How many patient charts do you tend to keep open at once?
* When you have multiple charts open, how do you usually switch/navigate between them?
* Shift handoff - what does this look like? During shift handoff, what typically happens? How do you review what you’re inheriting for the day? As your shift wraps up, what does your end-of-day process look like?
* How do you know what tasks, or follow-ups you are responsible for? 
* How do you get a sense of the appointments that are on your schedule?
* Before seeing a patient, or a cohort of patients, what kind of prep work do you normally do?
* How do you approach pre-charting? In practice, what does that usually entail?
* After a patient visit, what activities usually follow for you?
* When you’re adding a note to a chart or placing orders, how do you like to structure that part of your workflow?
* Which applications or tools are you using most frequently throughout a typical day?

## Navigation - 3 min
* In what ways does PowerChart’s navigation support or disrupt natural clinical workflows (e.g., handoff, med reconciliation, order entry)?
* How are you typically navigating between a Patient's chart and the Organizer?

## Workflow - 3 min
* How do you adapt PowerChart to fit your workflow? Are there any tools, shortcuts, or workarounds you rely on?
* How does navigating through Patient Details in PowerChart influence clinical decision-making?

## Multi-patient Safeguards - 3 min
* Beyond the use of tabs, what safeguards does PowerChart provide to clearly signal context switching and help prevent documentation errors across patient charts? 
* Have you run into any challenges with switching between patient charts?

# Section 2 - Patient Details Enhancements - 20 min

## Bridge - 1 min
* Now that you’ve shared your typical workflow, we’d like to get your feedback on potential enhancement ideas. I’ll be sharing a prototype of the CDS Console and will ask for your initial impressions on what you see, and how this information compares to your typical workflow.

I’ll share the prototype link in the chat, have you pull that up on your screen, and provide an example scenario to consider as you are viewing the prototype. [Share prototype with participant]

## Prototype Intro - Moderator Controls:
Next we’re going to look at a prototype of the [Patient Details prototype: https://www.figma.com/proto/YhERBZMWoqvwRgDUo6OgCx/User-Testing-Prototypes?page-id=2196%3A2&node-id=3004-21735&viewport=306%2C-3091%2C0.3&t=oFfZAfXPCZmhSQDA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3004%3A21735]. There are a few things I’d like you to keep in mind: 

- I’ll describe a scenario and then give you a set of tasks to complete using the prototype.
- This is a prototype and not the real application. [Non-coded interactive prototype: It closely matches the real application, but some things may not work as expected.] You may see placeholder information that doesn't match your own situation exactly and that's ok.
- I'm going to share my screen and you can tell me what to do, what to click, where to scroll. 
- There are questions that will ask to input information. When we get to these points, you can tell me what you would input, and then we'll move on. 
- As you're going through the prototype, please think aloud. I'd like you to say whatever comes into your mind. I'm interested in what's grabbing your attention on the screen, what questions you have, and your general thoughts as you review a page. 
- If at any point you feel uncomfortable or confused, please let me know. We are testing the designs and gathering feedback and not testing you. We’re here to support and learn from you. 
- If you have any questions as we go along, please feel free to ask me. I may not be able to answer them right away since we’re interested in how people would navigate this application without a helper around. But if you still have any questions when we’re done, I’ll try to answer them then.
- And please feel free to be as honest as possible – it won’t hurt our feelings. 

`[Describe clinical scenario and pull up prototype and share screen]`

## Prototype Intro - Participant Controls:
Next we’re going to look at a prototype of the application. There are a few things I’d like you to keep in mind: 
- I’ll describe a scenario and then give you a set of tasks to complete using the prototype.
- This is a prototype and not the real application. It closely matches the real application, but some things may not work as expected. Non-coded interactive prototype: It closely matches the real site, but some things may not work as expected. You may see placeholder information that doesn't match your own situation exactly and that's ok.
- I'm going to send you a link to the prototype in the chat and ask you to open the prototype and share your screen so I can follow along as you go. Does this sound okay to you? [If participant is uncomfortable - Alternatively, I can share my screen and you can tell me where to click and what to do. Switch to moderator controls prototype intro]. 
- [Send link to prototype in chat, confirm has it open]
- Before you share your screen, please close down any open windows that contain patient information so we don't accidentally record Veteran PII.
- Can you share your screen now? (MS Teams) You can share your screen by clicking on the green "Share screen" button in the top bar. Then, select on the option that has the website open. Let me know if you need any help with this. 
- Before we continue, I have some more information for you. 
- As you're going through the prototype, please think aloud. I'd like you to say whatever comes into your mind. I'm interested in what's grabbing your attention on the screen, what questions you have, and your general thoughts as you review this application. 
- If at any point you feel uncomfortable or confused, please let me know. We are testing the application and gathering feedback and not testing you. We’re here to support and learn from you. 
- If you have any questions as we go along, please feel free to ask me. I may not be able to answer them right away since we’re interested in how people would navigate this website without a helper around. But if you still have any questions when we’re done, I’ll try to answer them then.
- And please feel free to be as honest as possible – it won’t hurt our feelings. 

`[Describe clinical scenario and pull up prototype and share screen]`

> [!NOTE]
> ### Obejectives:
> Gather initial feedback on patient details enhancements
> Validate patient details enhancements on the Console and identify where the concepts can improve to support clinician efficiency and task flows.
> Gather value assessment in how Patient Details fits into workflow and aids in clinical decision making.

> [!NOTE]
> ### Key Outcomes:
> Gather navigation input related to how clinicians transition from Patient Details to individual CDS apps for task completion.
> Collect evidence to prioritize which patient detail enhancements on the Console (‘partial views’) should be considered for the Platform roadmap

## Scenario - 1 min
* Imagine that you are seeing one of your patients as part of a routine visit. 
* First, you open the Patient List in PowerChart Organizer, and selects Sheba Harris, and opens the patient’s chart. Initially, you arrive on the Provider view. Then, you visit the Clinical Decision Support Console.
* As this is a patient you are familiar with, you know she is in her late 50s, has major depression, hypertension, and obesity. As such, you continue to monitor specific labs and vitals closely to determine if additional interventions are needed. During the encounter, you open up the Clinical Decision Support Console via the Table of Contents, and arrive here. [*You are currently with the patient.]

## Initial Impressions - 2 min
* Given your workflow today, how do you imagine this fitting into your workflow? What's going through your mind as you review this information?

# Patient Details Enhancements - 15 min

## For each areas
* What are your initial impressions?
* What information/data would you expect to see?
* What would you do next to care for this patient?

## First Task: Labs and Vitals - 2 minutes

- [ ] Review Labs and Vitals
- [ ] What are your initial impressions?
- [ ] What is missing, if anything?
- [ ] What information and details would best support your clinical decision making?
- [ ] What actions would you want to take from here?
- [ ] What information and details would you expect to see based on your role?

> [!NOTE]
> ### Things to watch for:
> - Desired data
> - What's missing?
> - What's useful?

## Second Task: Key Conditions - 2 minutes

- [ ] Review Labs and Vitals
- [ ] What are your initial impressions?
- [ ] What is missing, if anything?
- [ ] What information would you expect or like to see?
- [ ] What actions would you want to take from here?

> [!NOTE]
> ### Things to watch for:
> - Desired data
> - What's missing?
> - What's useful?

## Third Task: Medications - 2 minutes

- [ ] Review Medications
- [ ] What are your initial impressions?
- [ ] What is missing, if anything?
- [ ] What information would you expect or like to see? Imagine that based on their X score and the patient's high LDL you and your patient decide it's best to start on a statin. 
- [ ] What actions would you want to take from here?
- [ ] What order do you expect to see the medications in (alphabetical, fill date ascending or descending, grouped by class, etc)?
- [ ] What details are important to aid in clinical decision making and why?

> [!NOTE]
> ### Things to watch for:
> - Desired data
> - What's missing?
> - What's useful?

## Fourth Task: Appointments - 2 minutes

- [ ] Review Appointments
- [ ] What are your initial impressions?
- [ ] What is missing, if anything?
- [ ] What information and details are relevant regarding past appointments, how many past appointments would you expect to see, and why? For upcoming appointments, past?
- [ ] What actions would you want to take from here?
- [ ] Given your patient is on other medications that impact blood sugar, you want to monitor them closely and see them back in 2 months. Imagine you want to schedule a follow up with the patient - how would you go about doing that?
- [ ] What details are important to aid in clinical decision making and why?

## Fifth Task: Tasks - 2 minutes

- [ ] Review Tasks
- [ ] What would you expect to drive what tasks show up here? (i.e. - due date, what is assigned to them, something else?)
- [ ] Would you expect to see tasks here that don't pertain to your team? Why or why not?

## Order of Information - 2 minutes

- [ ] What order would you expect to see this data in, to best support your workflow?

## Preferences - 2 minutes

- [ ] Would your preferences change whether you were viewing this data before, during, or after encounter? How might you expect the experience to be different?


> [!NOTE]
> ### Things to watch for:
> - Desired data
> - What's missing?
> - What's useful?


# Section 3: ICN and Workflow Integration - 10 minutes

* Lastly, we’d like to touch on patient identifiers, and we are curious about your familiarity with the ICN as an identifier.
* Are you familiar with ICN?
* If so, how do you use it today?
* How do you the experience you just walked through fitting in with their current workflow?
* If you could change one thing about how the CDS Console fits into your daily workflow, what would it be?

## Thank-You and Closing - 5 minutes

* Is there anything else that we should consider for improving the CDS Console experience across EHRs? 
* What features or applications would you like to see in the future to help your workflow?
* Would you be open to future sessions related to this experience, or future session related to other CDS apps, as we continue to refine the experience?
* Do you have any questions for us? If not, this concludes our session today.
* Thank You - Your feedback will help us continually improve the overall CDS Console experience to better support your workflow across EHRs.

Have a great day and thank you again!


# Emergency Exit 🚨

In the rare case of an emergency during a session, be prepared with an [emergency exit strategy](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html#ResearchSafetyandEmergencyExitStrategies-Sampleexitstrategies). <mark>**Plan to include here at least one option, so its easy to find during a session. Take some time to practice so it feels more comfortable.**</mark>

---


