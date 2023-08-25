# Research Plan: Direct deposit for compensation & pension EVSS > Lighthouse migration UAT, July 2023

## Background  
EVSS -- the VA backend that stores direct deposit for comp & pen, disability ratings, and more -- is being retired in favor of the Lighthouse platform. Lighthouse has been working hard to migrate data from EVSS to their platform, and they have successfully done so with direct deposit for comp & pen information. This means that we need to reintegrate the VA.gov profile to point to Lighthouse instead of EVSS.

* [Project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readme)
* [Direct deposit product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/direct-deposit)
* [Direct deposit management API](https://developer.va.gov/explore/benefits/docs/direct-deposit-management?version=current)
* [Use cases and outcomes](https://docs.google.com/spreadsheets/d/12gvlkGnwt206BBYY89gDIYG1AtD6j9uCYMr5x99Nzns/edit#gid=0)

### OCTO-DE Objectives 
The goals for the EVSS > Lighthouse migration are to limit service disruptions for Veterans and other users who receive comp & pen direct deposits or who need to change their direct deposit information for comp & pen purposes.

### Veteran Journey 
Since Veterans can receive compensation and disability any time after establishing benefits with VA, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

## Research Goals	
The primary goal of our UAT is to confirm that the Direct Deposit section of the Profile functions as intended for users who sign in with ID.me and/or login.gov and who have direct deposit set up with their bank information. This includes validating that MHV and DSLogon behavior hasn't changed.

Specifically, this research will be looking to validate the following use cases:
- Users see direct deposit section of the profile and receive comp & pen payments can edit and save their bank info.
- Users who save direct deposit for comp & pen information receive a confirmation email.
- Users that open the edit modal and click cancel will see modal close and previously-saved direct deposit information will still be saved.
- Users that click to edit direct deposit information cannot submit the form with errors.
- Users that click to edit direct deposit information will get an error if they input a bogus routing number.

### Outcome
Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles.

### Research questions
- Are eligible users able to successfully view and save their bank information?
- When users update their direct deposit information, do they receive a confirmation email?
- Are users able to open the edit modal, click cancel, and see the previously-saved directly deposit information still saved in their Profile?
- Are users prevented from submitting the direct deposit form with errors or a bogus routing number?

### Hypothesis
Direct Deposit will function as expected, answering affirmatively to all four research questions.

## Method	
While sharing their screen in remote (Zoom) interviews, participants will complete specific tasks as part of UAT to either demonstrate that Direct Deposit, Profile is functioning as expected.

### Location
Remote via Zoom

### Research materials
[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/conversation-guide.md)

## Recruitment
Perigean will perform recruiting for 7 participants for a total of 5 completed sessions. ~Before recruitment begins, a recruiting meeting to touchbase is needed~. **As part of recruitment, selected participants must be notified that we will be looking at the Direct Deposit section of the site, and they will need their direct deposit information readily available so they can enter it at the end of the session.**

### Recruitment criteria
We will aim for at least **5 completed sessions** with the following user type:
LOA3 (ID.me or Login.gov) user that is eligible for direct deposit for comp & pen and has set it up.

**To get at least 5 completed sessions, we'll recruit 7 participants.**

### Primary criteria (must-haves)

**All participants**
- Must be able to screenshare via Zoom
- Must have a disability rating (which means they receive some disability compensation, likely through direct deposit)

**Some participants**
- 3 must be able to login to VA.gov with a verified ID.me
- 2 must be able to login to VA.gov with a verified Login.gov

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

**Do you currently get disability compensation payments from the VA via direct deposit?**
**Note:** We ask this question because we’ll be asking you to confirm your direct deposit payments are set up correctly.

## Timeline 

### Prepare
When will the thing you are testing be finalized? July 25, 2022 (tentative)

Date and name of a mock participant for a pilot session:
- Pilot participant name: TBD
- Pilot participant email: TBD
- Date and time of pilot session: (either Monday, July 31 or Tuesday, August 1)

### Research sessions
What dates do you plan to do research? 
- 8/2 - 8/4

### Length of sessions
Sessions will be 30 minutes with 30 minutes in between sessions. Please schedule no more than 5 sessions per day.

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| 8/2/2023 | 9am - any time |	
| 8/3/2023 | 9am - any time |
| 8/4/2023 | 9am - 3pm |

## Team Roles	
- Moderator: Pam Drouin, pamela.drouin@a1msolutions.com
- Research guide writing and task development (usually but not always same as moderator): Pam Drouin
- Participant recruiting & screening: Perigean
- Note-taker: Team
- Observers/Participants:
  -  <travis.cahill@agile6.com>
  -  <adam.whitlock@adhocteam.us>
  -  <adrian.brewster@agile6.com>
  -  <liz.lantz@adhocteam.us>
  -  <samara.strauss@va.gov>
  -  <tom.harrison@adhocteam.us>
