# Research Plan: Direct deposit for compensation & pension EVSS > Lighthouse migration UAT, March 2023

## Background  
EVSS -- the VA backend that stores direct deposit for comp & pen, disability ratings, and more -- is being retired in favor of the Lighthouse platform. Lighthouse has been working hard to migrate data from EVSS to their platform, and they have successfully done so with direct deposit for comp & pen information. This means that we need to reintegrate the VA.gov profile to point to Lighthouse instead of EVSS.

* [Project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readme)
* [Direct deposit product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/direct-deposit)
* [Direct deposit management API](https://developer.va.gov/explore/benefits/docs/direct-deposit-management?version=current)
* [Use cases and outcomes](https://docs.google.com/spreadsheets/d/12gvlkGnwt206BBYY89gDIYG1AtD6j9uCYMr5x99Nzns/edit#gid=0)

### OCTO-DE Objectives 
The goals for the EVSS > Lighthouse migration are to limit service disruptions for Veterans and other users who receive comp & pen direct deposits or who need to change their direct deposit information for comp & pen purposes.

## Research Goals	
The primary goal of our UAT is to confirm that the Direct Deposit section of the Profile functions as intended for various user types:
- Users that are logged out see the sign in modal when arrive at the Direct Deposit section of the Profile. 
- MHV and DS Logon users see Direct Deposit section of the Profile, and also see prompt to login with ID.me or Login.gov.
- Ineligible LOA3 users see Direct Deposit section of the Profile, and see messaging that they are not eligible for direct deposit for comp & pen.
- Eligible but not yet set up for direct deposit LOA3 users see Direct Deposit section of the Profile and see a prompt to set it up.
- Eligible and set up for direct deposit LOA3 users see Direct Deposit section of the Profile and when they edit and save new info, they receive a confirmation email.
- Eligible and set up for direct deposit LOA3 users that open the edit modal and click cancel will see modal close and previously-saved direct deposit information will still be saved.
- Eligible and set up for direct deposit LOA3 users that click to edit direct deposit information cannot submit the form with errors.
- Eligible and set up for direct deposit LOA3 users that click to edit direct deposit information will get an error if they input a bogus routing number.
- Eligible Login.gov user can see Direct Deposit section of the Profile and can update direct deposit information.

### Outcome
Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles.

### Research questions
- Are Veterans and other users able to update direct deposit information?
- Are different user types seeing the correct information and messaging based on whether they are eligible for comp & pen direct deposit and whether they have the Direct Deposit section of Profile set up?
- Are errors working correctly to protect Veterans and other users from entering incorrect direct deposit information?

### Hypothesis
- Veterans will see the correct messaging based on their logged in method and status (whether that is logged out, MHV, DS Login, Login.gov or ID.me).
- Veterans will see the correct messaging based on whether or not they are eligible for direct deposit for comp & pen.
- Veterans will be able to edit and save direct deposit information (or edit and cancel to retain previous direct deposit information).
- Veterans will be protected from submitting false direct deposit information through errors that prevent them from saving edits.

## Method	
While sharing their screen in remote (Zoom) interviews, participants will complete specific tasks as part of UAT to either demonstrate that Direct Deposit, Profile is functioning as expected for their user type.

### Location
Remote via Zoom

### Research materials
[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/conversation-guide.md)

## Recruitment
Perigean will perform recruiting for a total of 18 participants.

### Recruitment criteria
We will aim for at least **5 completed sessions** for each user type:
* LOA3 (ID.me or Login.gov) user that is not eligible for direct deposit for comp & pen (LOA3 user A)
* LOA3 (ID.me or Login.gov) user that is eligible for direct deposit for comp & pen but hasn't set it up yet (LOA3 user B)
* LOA3 (ID.me or Login.gov) user that is eligible for direct deposit for comp & pen and has set it up (LOA3 user C)

**To get at least 5 completed sessions for each of the above user types, we'll recruit 6 of each for a total of 18 users.**

The following use cases will not be specifically recruited for, and we'll roll in their testing as part of testing with other user types:
* Logged out user
* MHV user
* DS Logon user

### Primary criteria (must-haves)

**All participants**
- Must be able to screenshare via Zoom
- Must be able to login to VA.gov with either ID.me or Login.gov

### Additional screener questions

**Verification level screener question**

We’d like you to review parts of the VA website that require you to log in to an identity-verified account. **Do you have an identify-verified account on VA.gov?**
You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you log in, your identity is **not** yet verified.
Response options: yes or no.
- Answering "yes" qualifies the participant
- Answering "no" disqualifies the participant

**Login method screener question**

Do you have a working login and password for any of the following VA.gov login methods? (Select 1-4 options). **You will need your login credentials for the research session, so please make sure your credentials work before answering this question.**
Response options: DS Logon, MyHealtheVet, Login.gov, ID.me, None of the above
- If participant answers **only** DS Logon or MyHealtheVet, they are disqualified.
- If participant's answer includes either (or both) Login.gov or ID.me, they are qualified.

### Research sessions
What dates do you plan to do research? 
- Tentative: April 2023

### Length of sessions
1 hour-long session for all participants 

## Team Roles	
- Moderator: Florence McCafferty, florence.mccafferty@agile6.com
- Research guide writing and task development (usually but not always same as moderator): Florence McCafferty
- Participant recruiting & screening: Perigean
- Note-taker: Perigean
- Observers/Participants:
  -  <adam.whitlock@adhocteam.us>
  -  <berni.xiong@agile6.com>
  -  <liz.lantz@adhocteam.us>
  -  <samara.strauss@va.gov>
  -  <tom.harrison@adhocteam.us>
