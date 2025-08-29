	# Research Plan for [VA Flagship Mobile Team, VAHB Mobile App, August, 2025]

## Background 🏗️
Briefly describe the background of your product. 
	
The [VA Mobile App](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/archive/2021/Product-Outline.md) team recently resolved SSO issues that had previously prevented Veterans from accessing VA.gov within a web view while maintaining their authenticated state. 

This technical improvement creates a new opportunity to integrate the Forms feature into the mobile app, functionality that is not currently available. 

As part of the MVP, the app introduces the form 21-4138, a widely used form, in the mobile app so Veterans can: 
1. Complete VA forms in a secure web view from a mobile device; and
2. Check status of these forms in the mobile app


### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

This research supports the following OCTO priorities: 

Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
  
- Key Result 1: Improve satisfaction with our web and mobile products by 5 points.



### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

The research covers broad spectrum of VA services, and applies at ALL stages of the Veteran journey. From serving through death.


## Research Goals 🥅	
The key objective of this study is to evaluate the usability of completing a VA form in a webview from the VA Health and Benefits app. 
Additionally, the research aims to uncover the following:
1. Understand if Veterans using screen reader or screen magnifier technology can find and interact with forms from the app.
2. Identify if Veterans using screen reader or screen magnifier technology can fill out a form from the app on their own.
3. Identify any usability issues Veterans using screen reader or screen magnifier technology may experience when interacting with forms on the mobile app.
4. Identify if Veterans using screen reader or screen magnifier technology can start a form and come back to it at a later time to complete.

  
### Outcome
The results of the study will help us determine if Veterans are able to fill out and complete forms from the mobile app and to identify any pain points. This will inform future form development on the app.


### Research questions
**Research goal #1: Understand if Veterans using screen reader or screen magnifier technology can find and interact with forms from the app.**

1. How easily can Veterans locate the forms section within the mobile app?
2. What steps do Veterans take to start a new form from within the app?
3. Are there any points of confusion or difficulty when Veterans attempt to start a new form?

**Research goal #2: Identify if Veterans using screen reader or screen magnifier technology can fill out a form from the app on their own.**

4. Can Veterans independently complete all required fields in a form using the mobile app?
5. Do Veterans understand the instructions and language used in the forms?
6. How do Veterans interpret the status of the form once the form is submitted?

**Research goal #3: Identify any usability issues Veterans using screen reader or screen magnifier technology may experience when interacting with forms on the mobile app.**

7. What challenges, if any, do Veterans encounter while entering information into the forms?
8. What, if any, technical or design barriers prevent Veterans from successfully interacting with forms?
9. How do Veterans feel about the overall experience of using forms in the mobile app?

**Research goal #4: Identify if Veterans using screen reader or screen magnifier technology can start a form and come back to it at a later time to complete.**

10. Can Veterans locate and resume a form they previously started in the mobile app?
11. Do Veterans encounter any challenges or confusion when attempting to access and complete a saved or in-progress form?
12. What steps do Veterans take to find and finish a form they started earlier?
13. Are there any barriers that prevent Veterans from successfully submitting a previously started form through the app?

### Hypotheses

**Research goal #1: Understand if Veterans using screen reader or screen magnifier technology can find and interact with forms from the app.**

1. Veterans using a screen reader or screen magnifer will be able to easily locate the forms section within the mobile app without extensive guidance.
2. Veterans will be able to follow the intended navigation steps to start a new form from within the app.
3. Some Veterans may experience confusion or difficulty due to unclear labeling or navigation options related to forms.

**Research goal #2: Identify if Veterans using screen reader or screen magnifier technology can fill out a form from the app on their own.**

4. Most Veterans using a screen reader or screen magnifer will be able to independently complete all required fields in a form using the mobile app.
5. The instructions and language used in the forms will be clear and understandable to Veterans.
6. Some Veterans may experience confusion interpretting the status of the form after submission.

**Research goal #3: Identify any usability issues Veterans using screen reader or screen magnifier technology may experience when interacting with forms on the mobile app.**

7. Veterans using a screen reader or screen magnifer may encounter difficulty entering information into forms from their mobile device.
8. Technical or design barriers, such as small touch targets or required page scrolling, may add additional frustration for Veterans using a screen reader or screen magnifer when completing forms from a mobile device.
9. Veterans using a screen reader or screen magnifer will have mixed feelings about the overall experience, with some expressing frustration regarding usability issues and others finding the process straightforward.

**Research goal #4: Identify if Veterans using screen reader or screen magnifier technology can start a form and come back to it at a later time to complete.**

10. Veterans using a screen reader or screen magnifer will be able to locate and resume a form they previously started within the mobile app.
11. Barriers such as difficulty finding saved forms or unclear resumption instructions will prevent some Veterans from successfully submitting a previously started form.
  
## Methodology  🛠️

This study will use **remote moderated usability testing** to observe Veterans completing a form flow from within the mobile app. Participants will complete tasks while sharing their screen via Zoom on their mobile device. We will be using a **GitHub Codespace** to simulate the environment.

During the usability testing the following flow will test both:
- Filling out a new Form 21-4138 through the in-app webview.
- Continuing an in-progress form from the mobile app through to submission.
  

### Location

- [X] **Remote**
- [ ] **In-person**


## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/research/Forms%20MVP%20Research/Conversation-guide.md)
- [Link to prototype](https://testflight.apple.com/join/RrO0Cw2q)
- *Instructions to access prototype (must access from your mobile device):
  1. Use the link provided to install test flight on your mobile device.
  2. Once you've installed it (or if you already have it installed), select step 2 "view in test flight" from your mobile device.
  3. Under App Informaton at the bottom of the screen, select "Previous builds"
  4. Select the VA Health and Benefits mobile app version: 2.55.1
  5. Select 'Install' button next to correct build number 2871 (may have to select Load more builds to find version).
  6. It can take a few minutes to download.
  7. Once downloaded select "next".
  8. Select "start testing from the Share feedback screen.
  9. In order to test the prototype our developer needs to launch codespace during your session. Please ping researcher developer Ken Li to run codespace during your prototype (slack K_li). 
	
## Recruitment 🎯	

### Recruitment approach
We would like Pergean's support in recruiting eligibile participants for the study. Targeting 12 participants for recruiting, aiming for 8 completed sessions minimum.

### Recruitment criteria
- Must have interacted with the mobile app at least once
- 3 to 4 Veterans from rural areas
- 3 to 4 Veterans over the age of 55
- 4-6 of each AT group mentioned below:

Screen reader (mobile, beginner and advanced)
Magnification

We will recruit 12 Veterans for:
- **minimum** of 4 sessions with screen reader users
- **minimum** of 4 sessions with screen magnification users

#### Cohort 1: Screen reader users

We will recruit 6 Veterans who use screen readers to complete a **minimum** of 4 sessions. They should be daily users of screen readers. 3 people should have 1-4 years of experience and 3 people should have 5+ years of experience.

We'd like to recruit people who use a mix of different screen readers, such as, [NVDA, JAWS, VoiceOver (Apple) and Talkback (Android)](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u#Testingyourprototypewithassistivetechnologyusers-Screenreaders).

|# of participants|Criteria|Level|
|:--|:--|:--|
|Exactly 4|Are Veterans|Primary|
|Exactly 4|Are willing to join from a mobile device using a screen reader|Primary|
|Exactly 4|Daily use of screen readers to access websites or applications|Primary|
|Exactly 3|Have 1-4 years of experience using a screen reader|Primary|
|Exactly 3|Have 5+ years of experience using a screen reader|Primary|
|At least 3|Are over 55 years old|Secondary|
|At least 3|Identify as Black, Asian, Hispanic or Native|Secondary|
|At least 2|Identify as a gender other than male|Secondary|

#### Cohort 2: Screen magnification users

We will recruit 6 Veterans who use screen magnification to complete a **minimum** of 4 session. They should state that they always use screen magnification on VA.gov or while using the VA Health & Benefits mobile app.

We'd like to recruit people who use a mix of different screen magnification software, such as, [ZoomText, ZoomText Fusion, Magnifier (Windows) and Zoom (Apple)](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u#Testingyourprototypewithassistivetechnologyusers-Screenmagnification).

|# of participants|Criteria|Level|
|:--|:--|:--|
|Exactly 4|Are Veterans|Primary|
|Exactly 4|Are willing to join from a mobile device using screen magnification software|Primary|
|Exactly 4|Always use screen magnification on VA.gov|Primary|
|At least 1|Are over 55 years old|Secondary|
|At least 1|Identify as Black, Asian, Hispanic or Native|Secondary|
|At least 1|Identify as a gender other than male|Secondary|

Please make sure that ALL participants are willing to complete the session on the device they specify during the screener questions and:
During the session:
- Are willing to share their screen.
- Have a working microphone on their device.


### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **[8]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[8]**

### Screening Question
1. Are you able to join the session from a smartphone or tablet?
   
- Yes would qualify them for the study
- No would disqualify them


2. What device will you use to join the session?
   
- Mobile phone – Android
- Mobile phone – iPhone
- Tablet – Android
- Tablet – iPad

If Android, pleae request their email where an invitation to the testing link will be sent. 

3. Are you willing to download the test flight app, the va mobile app, and the zoom mobile app to complete the session?
   
- Yes would qualify them for the study
- No would disqualify them

4. Have you ever used the VHB app before? If so, describe how often you use the app and what you primarily use the app for.
- Yes would qualify them for the study
- No would disqualify them

#### Screen reader users, please also ask the following screener questions.

1. Do you need to use a screen reader to access websites or applications? For example, VoiceOver, TalkBack, or JAWS.
    - Yes
    - No
2. If you answered yes, which screen reader do you use? Please select all that apply.
    - JAWS
    - NVDA
    - VoiceOver (iPhone, iPad, Mac)
    - TalkBack (Android)
    - Narrator (Windows)
    - Other (Please specify): ________________
    - This question doesn't apply to me
3. How long have you been using a screen reader? Your best guess is okay.
    - 0 - 1 years
    - 2 - 4 years
    - 5+ years
    - Never used
4. How frequently do you use a screen reader? Your best guess is okay.
    - Daily
    - Once a week
    - Once a month
    - Never
5. Can you join the Zoom session from your mobile device using your screen reader?
    - Yes
    - No
    - This question doesn't apply to me
6. Please list the name of the screen reader you will use during the session.
    - Open text box

#### Screen magnification users, please also ask the following screener questions.


1. Do you consistently need to resize fonts or use a magnification setting to see your screen when you are using your mobile device?
    - Yes
    - No
2. If you answered yes, which screen magnification tool do you use?
   - Open text box
3. How long have you been using a screen magnification tool? Your best guess is okay.
    - 0 - 1 years
    - 2 - 4 years
    - 5+ years
    - Never used
4. How frequently do you use screen magnification on VA.gov?
   - Always
   - Sometimes
   - Rarely
   - Never
5. Can you join the Zoom session from your mobile or desktop device using the screen magnification tool you need to see your screen?
   - Yes
   - No
   - This question doesn't apply to me


## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required for each operating system and AT targeted. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[ADE Team Member]**
- `Date and time of pilot session:` **[Pending]** 

### Research sessions
- `Planned dates of research:` **[10/22-10/29/25]**

### Length of sessions
- `Session length: **120 minutes**
- `Maximum Sessions per day: **2 sessions**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**

- `[10/22, Monday, 10:00 AM-7:00 PM] EST'
- '[10/23, Tuesday, 10:00 AM-7:00 PM] EST`
- `[10/24, Wednesday, 10:00 AM-7:00 PM] EST'
- '[10/25. Thursday, 10:00 AM-7:00 PM] EST`
- '[10/26, Friday, 10:00 AM-4:00 PM] EST`
- '[10/29, Monday, 10:00 AM-7:00 PM] EST'

  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **[Christine Julian]**	
- `Research guide writing and task development (usually but not always same as moderator):` **[Christine Julian and Kira Evsanaa]**		
- `Participant recruiting & screening:`	**[Perigean]**	
- `Project point of contact:` **[Christine Julian]**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[ADE Team]**	
- `Note-takers:` **[Jonathan Post]** ***or*** **[Maria Kravets]**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Ken Li]**
- **[Brenda Barraza]**
- **[Becca Tupaj]**

## Approvals ✅
- `Reviewed by [Ryan Thurlwell, Team Lead] on [x]`
- `Reviewed by [Shane Strassberg, OCTO Research-Ops Lead] on [x]`
- 'Reviewed by [ADE Team] on [x]'
