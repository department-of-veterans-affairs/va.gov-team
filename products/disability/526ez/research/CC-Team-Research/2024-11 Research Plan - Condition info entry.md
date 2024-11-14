Condition information entry 

Research Plan 

Last updated Nov 5, 2024


## **Background**

The conditions page on the 526EZ form is where Veterans input new conditions for disability benefits claims. This is a crucial step in the claims process, as it allows Veterans to describe the medical conditions they are seeking compensation for.

While recent improvements have been made to the autocomplete component on this page, we are now broadening our scope to holistically examine the entire conditions entry experience. This includes not only the initial condition entry, but also the subsequent questions about condition causes that follow.

A key focus of this exploration is updating the page from the deprecated single-page multiple response pattern to the recommended [multi-page variation](https://design.va.gov/patterns/ask-users-for/multiple-responses). In addition to the multi-step flow, we are also exploring changes to the order and phrasing of the cause-related questions that follow the initial condition entry. In this new approach, referred to as the _condition-by-condition_ approach, Veterans would complete all questions about one condition before moving on to the next, rather than the current state, referred to as the _conditions-first approach_, listing all conditions upfront and then answering additional questions about each condition. 


### **OCTO Priorities**

_Which_[ _OCTO priorities_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) _does this research support? Work with your VA lead and product manager as needed._

This research supports OCTO object 1 and relates to Key results 1 and 2.

Objective 1: Our digital experiences are the best way to access VA health care and benefits.

Key Result 1: CSAT for our web products have increased by 5 points.

Key Result 2: Number of transactions processed using our products have increased by 25%.


### **Veteran Journey**

_Where does your product fit into the_[ _Veteran journey_](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)_? Are there moments that matter?_

This work fits into the “Taking care of myself” stage of the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf), and within that stage, the “Managing primary care and chronic health issues” phase. 


## **Research Goals**

_What are you trying to learn from this research?_

Evaluate the usability of the new multi-step conditions information entry flow

- Assess how Veterans navigate through the different flows

- Understand if the condition-by-condition approach reduces cognitive load and context-switching

- Evaluate the effectiveness of separating condition name entry from laterality selection, especially for AT users

- Evaluate the overall effectiveness of collecting all condition details before moving to the next condition

Evaluate the new condition date question

- Assess Veterans' understanding and interpretation of when conditions started or worsened

- Understand Veterans' ability to provide accurate timing information

Understand cause attribution and documentation

- Evaluate how Veterans interpret and answer questions about condition causes

_Pro tip: Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies._


### **Outcome**

_How will this research advance your product to the next phase in the design process? What will you do with your learnings?_

The insights from this research will directly inform the next phase of development for the conditions entry experience on VA.gov. The key outcomes will be:

1. Validating the usability and effectiveness of the proposed condition-by-condition flow. If successful, we will move forward with implementing this new approach.

2. Identifying any challenges or improvements needed for the new condition date and laterality questions, to ensure Veterans can provide accurate information.

3. Understanding how Veterans interpret and respond to the cause-related questions, to inform clearer language, context, and supplementary guidance.

Overall, these research findings will drive the design, development, and testing of an enhanced conditions entry experience and guide future improvements. 


### **Research questions**

Goal 1: Evaluate the usability of the new multi-step conditions information entry flow

How do Veterans navigate through the condition-by-condition approach compared to the current conditions-first approach?

- How do Veterans navigate through the condition-by-condition approach compared to the current conditions-first approach?

- What differences, if any, emerge in Veterans' focus and attention when entering one condition at a time versus multiple conditions?

- How does separating laterality (right/left/bilateral) into its own question affect:

  - Veterans' ability to find conditions in the autosuggest list?

  - The experience for assistive technology users?

  - The natural flow of information entry?

- How do Veterans perceive the trade-off between potentially longer form completion time versus reduced cognitive load?

- What impact, if any,  does the new flow have on the completeness and accuracy of Veterans' condition information?

- What impact does the increased number of pages have on Veterans' form completion experience?

Goal 2: Evaluate new condition timing questions

- How do Veterans interpret the question about when their condition started or worsened?

- What challenges do Veterans face when trying to recall or determine this date?

- What resources, if any, do Veterans consult to verify dates?

Goal 3: Understand cause attribution and documentation

- How do Veterans connect their conditions to service-related causes?

- What information do Veterans use to determine cause-condition relationships?

- How clear are the questions about condition causes?

- What additional context or guidance would help Veterans provide better cause information?


### **Hypothesis**

What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis

The condition-by-condition approach to condition entry will result in more complete and accurate information by:

- Reducing cognitive load through focused, single-condition entry

- Improving data quality through consistent pattern repetition and improve learnability

- Making it easier to find conditions by simplifying the autosuggest list

- Providing a more intuitive flow for specifying condition details like laterality

The new condition date question will present challenges for Veterans in terms of recall accuracy, but the separate step will help them focus on providing the best possible timing information.


## **Methodology**

_Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design._

- We will conduct moderated usability testing with at least 6 Veterans (ideal 8) who use assistive technology and are familiar with the disability benefits application process. 

- Sessions will be remote Zoom sessions for approximately 60  minutes for screen magnifier users / alternate navigation users and 90 for screen reader users 

- Participants will be asked to complete tasks related to entering their medical conditions on the conditions page. We want Veterans to use their actual conditions so they can better answer the cause questions. 

- We will screen for Veterans who have filed for disability in the past or who plan to file for disability in the future. 

- We will use staging for testing. We will circumvent log-in so users can go directly to the conditions page

- Sessions will be conducted remotely using Zoom. 


### **Research materials**

_Note: your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request._

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

For moderated usability tests:

1. \[Link to conversation guide]\(url goes here)

2. \[Link to mock-ups of what we will test in staging]\(https\://www\.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/(526ez)-Condition-information-entry?node-id=324-9662\&node-type=canvas\&t=GDUqm69UjZoNKgNM-0)


## **Recruitment**

We will work with Perigean to recruit Veterans for this research.

We request that Perigean:

- shares a link or screenshot of the recruitment survey for this study, so we can review it before it goes out to participants

- Call participants to:

  -  remind them about the session, one day in advance.

  - Confirm participant will use the AT they indicated, during the session


### **Recruitment approach**

Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?

We will recruit 12 Veterans for:

- minimum of 3 sessions with screen reader users

- minimum of 2 sessions with alternative navigation users

- minimum of 1 session with a screen magnification user

We would like to request a kickoff call with Perigean. Requested date/time: TBD 


### **Recruitment criteria**

**Primary criteria (must-haves)** What demographics, experience, and scenarios do you need participants to meet to effectively run your study?

**Overall**

- All participants are receiving disability compensation from the VA for at least 3 conditions


#### **Cohort 1: Screen reader users**

- We will recruit 6 Veterans who use screen readers devices EVERY TIME they use the internet to complete a **minimum** of 3 sessions. 

- 6 Participants who use screen readers

  - 3 Beginner or intermediate screen reader users

  - 3 Experienced screen reader users

- Mix of NVDA, JAWS, VoiceOver (Apple), Talkback (Android)

**Cohort 2: Alternative navigation** 

- 4 Veterans who use Dragon or any other software for alternative navigation  EVERY TIME they use the internet to complete a **minimum** of 2 sessions 

**Cohort 3: Low vision - magnification users**

- 2 Veterans who use magnification devices EVERY TIME they use the internet for a **minimum** of 1 session

  - Mix of ZoomText, ZoomText Fusion, Magnifier (Windows)

**Secondary criteria (nice-to-haves)** What criteria would strengthen your results?

- We’d like a mix of genders, age, race/ethnicity, and education  

- Gender

  - Attempt At least 3 Veterans who identify as a gender other than male 

- Age

  - At least 4 55+ 

- Race/ethnicity

  - Attempt at least 6 that do not identify as White/Caucasian 

- Education 

  - Attempt at least 4 with no degree 


### Screener questions

**General: Disability compensation** 

1. Have you ever filed a claim for disability compensation with the VA in the past?

- Yes \[Recruit for all] 

- No \[Remove] 

2\. Do you have at least 3 conditions you are receiving disability compensation for?

- Yes \[Recruit for all] 

- No \[Remove] 

3\. What conditions are you receiving disability compensation for? 

\[Text input] 

**Screener Questions: Cohorts 1: Screen reader users**

1. Do you use a screen reader to access digital content on your devices every time you use the internet? 

   - Yes

   - No \[remove] 

   - I prefer not to answer

2. If you answered Yes to the previous question, which screen reader(s) do you use? \[Recruit 4, a mix] (Select all that apply) 

   - JAWS

   - NVDA

   - VoiceOver (iOS/macOS)

   - TalkBack (Android)

   - Narrator (Windows)

   - Other (Please specify): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3. We want to make sure our website works for people with various levels of experience with screen readers. Please rate your experience level using a screen reader: 

   - Beginner \[Recruit mix of beginner and intermediate] 

   - Intermediate \[Recruit mix of beginner and intermediate] 

   - Advanced \[Recruit 2] 

   - I don't use screen readers

4. How frequently do you use a screen reader?

   - Daily \[recruit 4]

   - Several times a week

   - Occasionally

   - Rarely

   - Never

5. Are you willing and able to participate in a usability test using your screen reader via Zoom

   - Yes

   - No \[Remove]

6. Have you used Zoom before for video conferencing and have it downloaded onto your computer and/or phone?

   - Yes

   - No \[Remove]


#### **Cohort 2: Alternative navigation users**

1. Do you need to use alternative navigation tools to navigate websites or applications? For example, switch systems, Dragon, Voice Control or a sip and puff device.

   - Yes

   - No

2. If you answered yes, which alternative navigation tool do you use? Please select all that apply. \[recruit 4, does **not** need to be a mix]

   - Switch systems

   - Dragon 

   - Voice Control (Mac)

   - Siri (iPhone, iPad)

   - One-handed keyboard

   - Head mouse

   - Sip and puff device

   - Pointer device on mobile (mouse, joystick)

   - Other (Please specify): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

   - This question doesn't apply to me

3. How frequently do you use an alternative navigation tool? Your best guess is okay.

   - Daily \[recruit 4]

   - Several times a week

   - Occasionally

   - Rarely

   - Never

4. Please list the name of the alternative navigation tool you will use during the session.

   - Open text box

5. Have you used Zoom before for video conferencing and have it downloaded onto your computer and/or phone?

   - Yes

   - No \[Remove]

6. Can you join the Zoom session from your mobile or desktop device using your alternative navigation tool?

   - Yes \[recruit 4] 

   - No

   - This question doesn't apply to me

**Cohort 3: Low vision - magnification users**

1. Do you use a screen magnifier or magnification software when using your mobile or desktop device?

   1. No \[Remove]

   2. Yes (Please select all that apply): \[Recruit 4, a mix] 

2. If you answered yes, which magnification tool do you use? Please select all that apply

   1. ZoomText

   2. ZoomText Fusion

   3. Windows Magnifier

   4. Android Magnification

   5. Other screen magnifier (Please specify): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

   6. I prefer not to answer

3. If you answered Yes, how frequently do you use screen magnification?

   1. Daily \[recruit 4]

   2. Several times a week

   3. Occasionally

   4. Rarely

   5. Never

4. Have you used Zoom before for video conferencing and have it downloaded onto your computer and/or phone?

   1. Yes

   2. No \[Remove]

   3. Not applicable 

5. Can you join the Zoom session from your mobile or desktop device using the tools you need to see your screen? 

   1. Yes

   2. No \[remove] 

   3. Does not apply


## **Timeline**

Please submit artifacts for[ Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.


### **Prepare**

_When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a_[ _Midpoint review_](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html)_._

**November 25th, 2024**

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.

1. Pilot participant email: _someone from CAIA, hopefully 11/25. Scheduling is in-progress_

2. Date and time of pilot session: 


### **Research sessions**

1. Planned dates of research: **December 3rd - December 13th 2024**


### **Length of sessions**

1. Session length: _(e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)_: 

   1. **90 minutes for screen reader sessions,** **60 minutes for all others**

2. Buffer time between sessions: _(30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)_ 

   1. **1 hour**

3. Maximum Sessions per day: _(We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)_

   1.  **2 sessions**


### **Availability**

When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. _Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S._

Please request enough dates and at **_least double the amount of time slots for the number of requested participants_**. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; **_12 time slots for 6 participants_**). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

|                         |                           |
| ----------------------- | ------------------------- |
| **Date**                | **Availability**          |
| Tuesday, Dec 3, 2024    | 8AM PST - 5PM PST         |
| Wednesday, Dec 4, 2024  | 8AM PST - 10:30AM PST     |
|                         | 12:00PM PST - 5:00PM PST  |
| Friday, Dec 6, 2024     | 8AM PST - 5PM PST         |
| Monday, Dec 9, 2024     | 8AM PST - 5PM PST         |
| Tuesday, Dec 10, 2024   | 8AM PST - 5PM PST         |
| Wednesday, Dec 11, 2024 | 8AM PST - 1PM PST         |
|                         | 2PM PST - 5PM PST         |
| Thursday, Dec 12, 2024  | 8AM PST - 5PM PST         |
| Friday Dec 13, 2024     | 8AM PST - 12PM PST        |


## **Team Roles**

**Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.

**Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Send emails only for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

1. Moderator: Sudeepti Bhatnagar

2. Research guide writing and task development (usually but not always same as moderator): Sudeepti Bhatnagar

3. Participant recruiting & screening: Sudeepti Bhatnagar

4. Project point of contact: Sudeepti Bhatnagar

5. Participant(s) for pilot test: TBD 

6. Accessibility specialist (for sessions where support for assistive technology may be needed): TBD 

7. Note-takers: TBD

8. Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.
