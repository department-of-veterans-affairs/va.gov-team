# Research plan for Ask VA: Assistive Tech – Dashboard

Ask VA VA.gov Team

Last updated by @tygindraux: September 13, 2024

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

* Identify any barriers that could prevent Veterans who use assistive technology from reviewing past questions, reading a reply from VA or replying to VA through Ask VA

### Outcome

This research will help us document and prioritize any bugs or usability issues before we launch on VA.gov.

### Research questions

* Are any headers, labels or links lacking description or clarity?
* Can Veterans interact with all elements using only their keyboards?
* Are click targets, hover states and labels of controls always available and clear?
* Are Veterans still oriented and able to use the dashboard when magnified?
* Are there any inconsistencies during the journey that present confusion?
* Do Veterans who use assistive technology feel they can read a reply from VA or reply to VA without the support of another person?
* Does Ask VA need to change or evolve to offer an equitable experience? If so, how?
* Are statuses clear or do they require more description? If so, just for screen reader users or for everyone?
* Do accordions add unnecessary complexity? Would it be easier to read a plain text conversation that’s not hidden in accordions?

### Hypotheses

1. Veterans will think headers, labels and links are descriptive and clear.
2. Veterans will be able to interact with all elements using only their keyboards or other devices.
3. Veterans will be oriented and still able to use the dashboard when magnified.
4. Veteran's who use screen readers will find it difficult to know how many cards are under the "Your question" section, including when they filter by category and/or status.
5. Veterans will not have difficulty navigating between pages of cards on the dashboard with their assistive technology.
6. Veterans will find it difficult to understand what each status means without more description, regardless of which assistive technology they use.

## Methodology

We will run a moderated usability study remotely on Zoom. We will mock the sign in process, so participants don't have to sign in but we can test the authenticated experience.

### Research materials

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/07-2024%20Assistive%20tech/Dashboard/Conversation%20guide.md)
* [Staging link](https://staging.va.gov/contact-us/ask-va-too/)
* [How to create a new test user account](https://app.zenhub.com/workspaces/ask-va-647a476551689d06655cc815/issues/gh/department-of-veterans-affairs/ask-va/1218)
* [List of test user accounts created for this study](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/ask-va/test-user-accounts.md)
	
## Recruitment	

### Recruitment approach

We will work with Perigean to recruit Veterans for this research.

We request that Perigean:
- shares a link or screenshot of the recruitment survey for this study, so we can review it before it goes out to participants
- if we're facing issues with no-shows or cancellations, we'll ask that you call remaining participant to remind them about the session, one day in advance.

### Recruitment criteria

We will recruit 12 Veterans for:
- **minimum** of 3 sessions with screen reader users
- **minimum** of 2 sessions with alternative navigation users
- **minimum** of 1 session with a screen magnification user

For more details about our criteria, refer to our [Recruitment ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/627).

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

#### Screen reader users

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

#### Alternative navigation users

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
3. How long have you been using an alternative navigation tool? Your best guess is okay.
    - 0 - 1 years
    - 2 - 4 years
    - 5+ years
    - Never used
4. How frequently do you use an alternative navigation tool? Your best guess is okay.
    - Daily
    - Once a week
    - Once a month
    - Never
5. Can you join the Zoom session from your mobile or desktop device using your alternative navigation tool?
    - Yes
    - No
    - This question doesn't apply to me
6. Please list the name of the alternative navigation tool you will use during the session.
    - Open text box

#### Screen magnification users

1. Do you consistently need to resize fonts or use a magnification setting to see your screen when you are using your mobile or desktop device?
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

## Timeline

|Date|Milestone|
|:--|:--|
|September 3, 2024|Research Review|
|September 10 - 11, 2024|Pilot sessions with CAIA|
|September 17 - 24, 2024|Research sessions|
|September 26 - October 3, 2024|Synthesis|
|October 4, 2024|Share findings|

### Pilot sessions

We will have 2 pilot sessions and/or asynchronous reviews with CAIA. Tyler will set up pilot sessions herself (Perigean does not need to schedule.)

Here is our [CAIA research support ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92003).

**Pilot 1: TTS (Mac Voice Control) on desktop**
- Pilot participant: Jamie
- [CAIA a11y Research - PILOT: Ask VA - Desktop Pilot - Dashboard #92028](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92028)
- Date and time of pilot session: September 11th at 11am-12pm EST

**Pilot 2: Screen reader on mobile**
- Pilot participant: SK
- [CAIA a11y Research - PILOT: Ask VA - Mobile Pilot - Dashboard #92024](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92024)
- Date and time of pilot session: September 11th at 2-3pm EST

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
|Tuesday, Sept 17|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Wednesday, Sept 18|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Wednesday, Sept 19|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Friday, Sept 20|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Monday, Sept 23|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
|Tuesday, Sept 24|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|

We will also provide one day for overflow. This should only be booked if we don't reach our targets.

|Date|Timeslots (EST)|
|:--|:--|
|Wednesday, Sept 25|9-10:30am, 11-12:30pm, 1-2:30pm, 3-4:30pm|
	
## Team roles

* Moderators: Tyler Gindraux (tyler@bluetiger.digital), Thomas Michaud (thomas.michaud@oddball.io)
* Research guide writing and task development: Tyler Gindraux
* Participant recruiting & screening: Perigean
* Project point of contact: Tyler Gindraux
* Participant(s) for pilot test: CAIA
* Accessibility specialist: Sara, Jamie, SK
* Notetakers: Tyler will add notetakers to the invites herself.
* Observers: Tyler will add observers to the invites herself.

Sessions will be limited to no more than 5 people, including 1 participant, 1 moderator, 1 accessibility specialist, 1 notetaker and 1 observer.

## Approved by:

- Becky Phung, PO on July 29, 2024
- Shane Strassberg, VA Research Ops on September 4, 2024
