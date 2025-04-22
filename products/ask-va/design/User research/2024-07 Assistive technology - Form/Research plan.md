# Research plan for Ask VA: Assistive Tech – Form

Ask VA VA.gov Team

Last updated by @tygindraux: August 12, 2024

**Jump ahead to:**
- [Background](#background)
- [Research goals](#research-goals)
- [Methodology](#methodology)
- [Recruitment](#recruitment)
- [Timeline](#timeline)
- [Research sessions](#research-sessions)
- [Team roles](#team-roles)
- [Approved by](#approved-by)

## Background

Ask VA (AVA) is an online portal that allows Veterans, caregivers and others to submit questions to VA and receive a secure response. Currently, AVA resides within a stand-alone Microsoft portal that is inconsistent with VA design standards, is not mobile-friendly, and has accessibility issues. 

We need to move AVA to VA.gov. It should be mobile friendly, accessible and easy to submit an issue and receive updates and information that results in a final resolution. Ultimately, we want AVA to feel part of a cohesive and user-centered approach to support. This [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/ask-va-phase-1-product-outline.md) includes more details about the scope of Phase 1 of our work.

### OCTO priorities

This research supports the following OCTO FY24 priority:

* Better experiences: Our digital experiences are the best way to access VA health care and benefits.

### Veteran journey

Ask VA can support Veterans, their family members, and other submitters at many stages of the Veteran journey. They may use Ask VA when they’re separating up until aging.

## Research goals

The key goal of this study is to:

* Identify any barriers that could prevent Veterans who use assistive technology from asking a question through Ask VA

### Outcome

This research will help us document and prioritize any bugs or usability issues before we launch on VA.gov.

### Research questions

* Are any headers, labels or links lacking description or clarity?
* Can Veterans interact with all elements using only their keyboards?
* Are click targets, hover states and labels of controls always available and clear?
* Are Veterans still oriented and able to use the form when magnified?
* Is it clear that information is pre-filled? Is it clear how to update pre-filled information?
* Can Veterans understand their progress through the form without visual cues?
* Should the progress bar heading be the first element in focus within the form?
* Are there any inconsistencies during the journey that present confusion?
* Do Veterans who use assistive technology feel they can ask a question without the support of another person?
* Does Ask VA need to change or evolve to offer an equitable experience? If so, how?

### Hypotheses

1. Veterans will think headers, labels and links are descriptive and clear.
2. Veterans will be able to interact with all elements using only their keyboards or other devices.
3. Veterans will be oriented and still able to use the form when magnified.
4. Veterans will understand that information has been pre-filled from 'their' account and know how to update it.
5. Veterans will understand their progress in the form with or without visual cues.
6. Sign in will be a barrier for some Veterans using a screen reader or magnification.

## Methodology

We will run a moderated usability study remotely on Zoom. We will mock the sign in process, so participants don't have to sign in but we can test the authenticated experience.

### Research materials

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Form/Conversation%20guide.md)
* [Staging link](https://staging.va.gov/contact-us/ask-va-too/)
* [How to create a new test user account](https://app.zenhub.com/workspaces/ask-va-647a476551689d06655cc815/issues/gh/department-of-veterans-affairs/ask-va/1218)
* [List of test user accounts created for this study](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/ask-va/test-user-accounts.md)
	
## Recruitment	

### Recruitment approach

We will work with Perigean to recruit Veterans for this research.

We're available for a kickoff call with Perigean during the following times:
- Wednesday, July 31 at 3-5pm EST
- Thursday, Aug 1 at 9-11am EST or 3:30-5pm EST
- Friday, Aug 2 at 12-3pm EST

We request that Perigean:
- shares a link or screenshot of the recruitment survey for this study, so we can review it before it goes out to participants
- if we're facing issues with no-shows or cancellations, we'll ask that you call remaining participant to remind them about the session, one day in advance.

### Recruitment criteria

We will recruit 12 Veterans for:
- **minimum** of 3 sessions with screen reader users
- **minimum** of 2 sessions with alternative navigation users
- **minimum** of 1 session with a screen magnification user

For more details about our criteria, refer to our [Recruitment ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/603).

#### Cohort 1: Screen reader users

We will recruit 6 Veterans who use screen readers to complete a **minimum** of 3 sessions. They should be daily users of screen readers. 3 people should have 1-4 years of experience and 3 people should have 5+ years of experience.

We'd like to recruit people who use a mix of different screen readers, such as, [NVDA, JAWS, VoiceOver (Apple) and Talkback (Android)](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u#Testingyourprototypewithassistivetechnologyusers-Screenreaders).

|# of participants|Criteria|Level|
|:--|:--|:--|
|Exactly 6|Are Veterans|Primary|
|Exactly 6|Are willing to join from a desktop or mobile device using a screen reader|Primary|
|Exactly 6|Daily use of screen readers to access websites or applications|Primary|
|Exactly 3|Have 1-4 years of experience using a screen reader|Primary|
|Exactly 3|Have 5+ years of experience using a screen reader|Primary|
|At least 3|Are over 55 years old|Secondary|
|At least 3|Identify as Black, Asian, Hispanic or Native|Secondary|
|At least 2|Identify as a gender other than male|Secondary|

#### Cohort 2: Alternative navigation users

We will recruit 4 Veterans who use alternative navigation to complete a **minimum** of 2 sessions. They should be daily users of alternative navigation tools.

We'd like to recruit people who use a mix of [switch systems, Dragon, Voice Control (Apple), One-handed keyboards, a head mouse, or a sip and puff device](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u#Testingyourprototypewithassistivetechnologyusers-Alternativenavigation).

|# of participants|Criteria|Level|
|:--|:--|:--|
|Exactly 4|Are Veterans|Primary|
|Exactly 4|Are willing to join from a desktop or mobile device using an alternative navigation tool|Primary|
|Exactly 4|Daily use of alternative navigation tools to access websites or applications|Primary|
|At least 2|Are over 55 years old|Secondary|
|At least 2|Identify as Black, Asian, Hispanic or Native|Secondary|
|At least 1|Identify as a gender other than male|Secondary|

#### Cohort 3: Screen magnification users

We will recruit 2 Veterans who use screen magnification to complete a **minimum** of 1 session. They should state that they always use screen magnification on VA.gov.

We'd like to recruit people who use a mix of different screen magnification software, such as, [ZoomText, ZoomText Fusion, Magnifier (Windows) and Zoom (Apple)](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u#Testingyourprototypewithassistivetechnologyusers-Screenmagnification).

|# of participants|Criteria|Level|
|:--|:--|:--|
|Exactly 2|Are Veterans|Primary|
|Exactly 2|Are willing to join from a desktop or mobile device using screen magnification software|Primary|
|Exactly 2|Always use screen magnification on VA.gov|Primary|
|At least 1|Are over 55 years old|Secondary|
|At least 1|Identify as Black, Asian, Hispanic or Native|Secondary|
|At least 1|Identify as a gender other than male|Secondary|

### Screener questions

#### Experience with VA

1. Have you contacted the VA online or over the phone in the past year?
    - Yes
    - No
2. Have you signed into VA.gov in the past year?
    - Yes
    - No
3. Have you ever used [ask.va.gov](https://ask.va.gov/)?
    - Yes
    - No

#### Screen readers

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
5. Can you join the Zoom session from your mobile or desktop device using your screen reader?
    - Yes
    - No
    - This question doesn't apply to me
6. Please list the name of the screen reader you will use during the session.
    - Open text box

#### Alternative navigation

1. Do you need to use alternative navigation tools to access websites or applications? For example, switch systems, Dragon, Voice Control or a sip and puff device.
    - Yes
    - No 
2. If you answered yes, which alternative navigation tool do you use? Please select all that apply.
    - Switch systems
    - Dragon
    - Voice Control (Mac)
    - Siri (iPhone, iPad)
    - One-handed keyboard
    - Head mouse
    - Sip and puff device
    - Pointer device on mobile (mouse, joystick)
    - Other (Please specify): ________________
    - This question doesn't apply to me
3. How frequently do you use an alternative navigation tool? Your best guess is okay.
    - Daily
    - Once a week
    - Once a month
    - Never
4. Can you join the Zoom session from your mobile or desktop device using your alternative navigation tool?
    - Yes
    - No
    - This question doesn't apply to me
5. Please list the name of the alternative navigation tool you will use during the session.
    - Open text box

#### Screen magnification

1. Do you consistently need to resize fonts or use a magnification setting to see your screen when you are using your mobile or desktop device?
    - Yes
    - No
2. If you answered yes, which screen magnification tool do you use?
   - Open text box
3. If you answered yes, how frequently do you use screen magnification on VA.gov?
   - Always
   - Sometimes
   - Rarely
   - Never
4. Can you join the Zoom session from your mobile or desktop device using the screen magnification tool you need to see your screen?
   - Yes
   - No
   - This question doesn't apply to me

## Timeline

|Date|Milestone|
|:--|:--|
|July 30, 2024|Research Review|
|July 31 - Aug 1, 2024|Pilot sessions or reviews with CAIA|
|August 13 - 20, 2024|Research sessions|
|August 22 - 29, 2024|Synthesis|
|August 30, 2024|Share findings|

### Pilot sessions

We will have 3 pilot sessions and/or asynchronous reviews with CAIA.

Here is our [CAIA research support ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87480).

**Pilot 1: Desktop with screen reader**
- Pilot participant: Jamie, CAIA (Tyler will add to pilot sessions herself)
- Date and time of pilot session: August 1, 2024 at 12:00pm EST

**Pilot 2: Mobile with screen reader**
- Pilot participant: Riley, CAIA (Tyler will add to pilot sessions herself)
- Date and time of pilot session: August 1, 2024 at 2:00pm EST

**Pilot 3: Desktop with alternative navigation: MacOS Voice Command**
- Pilot participant: Jamie, CAIA (Tyler will add to pilot sessions herself)
- Date and time of pilot session: August 2, 2024 at 3:00pm EST

## Research sessions

- **Length of sessions varies:**
   - 1.5 hours: Screen reader or alternative navigation tool
   - 1 hour: Screen magnification
- Buffer between sessions: 30 minutes
- Maximum sessions per day: 2 sessions

### Availability

We will provide 24 time slots, with the aim to book 12 sessions. We have provided 1.5 hour sessions, but for screen magnification users, please only book 1 hour.

|Date|Timeslots (EST)|
|:--|:--|
|Tuesday, Aug 13|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Wednesday, Aug 14|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Thursday, Aug 15|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Friday, Aug 16|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Monday, Aug 19|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Tuesday, Aug 20|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|

We will also provide one day for overflow. This should only be booked if we don't reach our targets.

|Date|Timeslots (EST)|
|:--|:--|
|Wednesday, Aug 21|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
	
## Team roles

* Moderators: Tyler Gindraux (tyler@bluetiger.digital), Thomas Michaud (thomas.michaud@oddball.io)
* Research guide writing and task development: Tyler Gindraux
* Participant recruiting & screening: Perigean
* Project point of contact: Tyler Gindraux
* Participant(s) for pilot test: CAIA
* Accessibility specialists: Sara Smith, Jamie Klenetsky Fay, Riley Orr
* Notetakers: Tyler will add notetakers to the invites herself.
* Observers: Tyler will add observers to the invites herself.

Sessions will be limited to no more than 5 people, including 1 participant, 1 moderator, 1 accessibility specialist, 1 notetaker and 1 observer.

## Approved by:

- Becky Phung, PO on July 11, 2024
- Shane Strassberg, VA Research Ops on July 30, 2024
