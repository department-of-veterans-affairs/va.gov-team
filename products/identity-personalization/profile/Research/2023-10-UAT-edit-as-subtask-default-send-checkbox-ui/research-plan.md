# Research Plan: Profile multi-feature UAT, October 2023

## Background  
Over the last 3 months, we’ve worked on improvements related to our notification settings feature, and how users update profile information while in the middle of another task.  They’re closely related, and will be part of the same release so we are conducting UAT on all 3 features at once. 

### Features to be tested
- Default send ([project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/default-send/README.md))
  - VA Notify added a `default send` flag to indicate whether or not a person is automatically opted-in to a notification via another action. 
  - We’ve made an update to leverage this flag in our notification settings feature and want to validate the data is being sent correctly
- User interface update
  - Since we have the `default send` flag available to us, we were able to simplify our UI and use checkbox inputs instead of radio buttons. 
  - This update doesn’t have a dedicated project outline
- Edit as a sub-task ([project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/mobile-phone-edit-flow/README.md))
  - Previous rounds of research highlighted an opportunity to improve how we asked users to add or update contact information as part of a task. 
  - We’ve created a new flow for this that can be used in any part of profile, and are initially launching it within the notification settings feature.

## Research Goals	
The primary goal of our UAT is to confirm that 3 updates to the Profile function as intended for users who sign in with ID.me and/or login.gov.  Specifically, this research will be looking to validate the following scenarios are completed as expected for LOA3 users:
- User adds a mobile phone number to profile from the notification settings page
- User updates a mobile phone number to profile from the notification settings page
- The  `default send` value is returned correctly based on user interaction in the notification API
  - Note: if we aren’t able to recruit participants to validate this, we can use internal team member production accounts to validate for UAT. 

A detailed list of test cases is available in [Google Sheets](https://docs.google.com/spreadsheets/d/1-oSUr_kFqyptbSI6jRC3O7wqk3TNDOwaWedmO3eh7FA/edit#gid=1459792507)

As a secondary goal, and as time allows, we’ll ask for feedback on the updates we made to the authenticated menu.

### Outcome
Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles.



### Research questions
- Does our edit as a sub-task flow function as expected when users add or update their mobile number?
- Can users successfully update notification settings with the checkbox UI?
- Does the notification API return the correct default send value before and after user interaction?

### Hypothesis
- Our edit as a sub-task flow will work as expected
- Notification settings default send data will be sent as expected
- User can successfully update their notification settings as expected
## Method	
While sharing their screen in remote (Zoom) interviews, participants will complete specific tasks as part of UAT to either demonstrate that the VA.gov profile is functioning as expected.

### Location
Remote via Zoom

### Research materials
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Research/2023-10-UAT-edit-as-subtask-default-send-checkbox-ui/conversation-guide.md)

## Recruitment
Perigean will perform recruiting for 7 participants for a total of 5 completed sessions. ~

Before recruitment begins, a recruiting meeting to touchbase is needed~. 

### Recruitment criteria
We will aim for at least **5 completed sessions** and recruit 7 participants to reach that goal.

### Primary criteria (must-haves)

**All participants**
- Must have a smartphone, desktop, laptop, or tablet and are willing to complete their interview with that device. 
* Have an identify-verified VA.gov or My HealtheVet account.
* Be willing to log into their above mentioned account and share their screen over Zoom in a web browser window on their device (please include device info in the tracker information)
* Provide the email that they use to log in to VA.gov prior to the session (please include this email address in the tracker information)
* Have a working microphone on their device
* Have Zoom downloaded to their device prior to the session

**Some participants**
- At least 3 must be able to join the session from a mobile device
- At least 3 must be able to join the session from a desktop or laptop computer
- At least 3 must have never previously updated notification settings in their VA.gov profile account

### Additional screener questions

**Verification level screener question**
We’d like you to review parts of the VA website that require you to log in to an identity-verified account. **Do you have an identify-verified account on VA.gov?**
You can check on this by logging into VA.gov and going to VA.gov/profile. If you see a prompt to verify your identity when you get to your profile page, your identity is **not** yet verified.
Response options: yes or no.
- Answering "yes" qualifies the participant
- Answering "no" disqualifies the participant

**Login method screener question**
Do you have a working login and password for any of the following VA.gov login methods? (Select 1-4 options). **You will need your login credentials for the research session, so please make sure your credentials work before answering this question.**
Response options (checkbox): DS Logon, MyHealtheVet, Login.gov, ID.me, None of the above
- If participant answers **only** DS Logon or MyHealtheVet, they are disqualified.
- If participant's answer includes either (or both) Login.gov or ID.me, they are qualified.
- If participant answers None of the above, they are disqualified.

**What email address(es) do you use to login to VA.gov?**
This is a fill in the blank question, no character limit, and is not qualifying or disqualifying.

**Device screener question**
We’d like to make sure the website works well on a variety of devices. Please check the devices you have available to you that you could use to join the interview. **The device will need to have Zoom downloaded and a working microphone.**

Response options: Desktop/laptop, tablet, smartphone

**Note:** This should be used to satisfy the device criteria under “Some participants”

**Previous experience managing notification settings screener question**
Have you ever used VA.gov to opt in or out of text notifications from VA?  Examples include notifications for appointment reminders, prescription shipments, and Board of Veterans’ Appeals hearing reminders.
 
Response options (radio button):  Yes, No, I’m not sure

**Note:** Answer should be No to satisfy criteria for never having managed notification settings on VA.gov
## Timeline 
**This timeline is dependent on staging review timing**
### Prepare
When will the thing you are testing be finalized? September 12

**We would like to request a kick off meeting with Perigean to be sure we’re aligned on recruitment criteria.**  Availability for a kickoff is as follows:
- 10/10, anytime between 10:30am-4pm EST
- 10/11 between 11am-12pm, or 3pm-4:30pm

Date and name of a mock participant for a pilot session:
- Pilot participant name: Rocio De Santiago
- Pilot participant email: [rocio@coforma.io](mailto:rocio@coforma.io)
- Date and time of pilot session: 10/11/23, 10:30am EST

### Research sessions
What dates do you plan to do research? 
- October 18-20

### Length of sessions
Sessions will be 30 minutes with 30 minutes in between sessions. Please schedule no more than 5 sessions per day.

### Availability

| Date  | Times (Eastern) |
|-------|-----------------|
| 10/18 | 10am-3:30pm     |
| 10/19 | 7:30am-4:45pm   |
| 10/20 | 10am-3pm        |

## Team Roles	
- Moderator: Liz Lantz <liz.lantz@adhocteam.us>
- Research guide writing and task development (usually but not always same as moderator): Liz Lantz
- Participant recruiting & screening: Perigean
- Note-taker: Team
- Observers/Participants:
  - pamela.drouin@a1msolutions.com
  - <travis.cahill@agile6.com>
  - <adam.whitlock@adhocteam.us>
  - <adrian.brewster@agile6.com>
  - <liz.lantz@adhocteam.us>
  - <samara.strauss@va.gov>
  - <tom.harrison@adhocteam.us>
