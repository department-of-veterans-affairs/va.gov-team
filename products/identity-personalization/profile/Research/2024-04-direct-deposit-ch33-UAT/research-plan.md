# Research Plan: Direct deposit payment instruction consolidation UAT, April 2024

## Background  

VBA is migrating many educational benefits from the legacy system to a newer payment/management system, starting with the largest EDU portfolio: Chapter 33 education benefits. This migration will affect the VA.gov Profile because veterans who receive education *and* compensation and pension benefits have two separate payment information options for each benefit. However, due to this migration, there can only be ONE set of payment instructions. Payment instructions for both types of benefits must be identical.

* [Project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/ch33-bdn-corpdb-migration)

### OCTO-DE Objectives 

Objective #1: Work collaboratively across the health and benefits portfolios on high-priority FY2024 initiatives.  
- KR: At least 50% of our initiatives should support the major initiatives in the health and benefits portfolio.

Our team is dedicated to supporting this migration initiative on VA.gov Profile while limiting service disruptions for Veterans and other users who need to view or change their direct deposit information. 

### Veteran Journey 
Since Veterans can receive direct deposit payments for education benefits and/or compensation & disability any time after establishing benefits with VA, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

## Research Goals	
The primary goal of our UAT is to confirm that the Direct Deposit section of the Profile functions as intended for users who sign in with `ID.me` or `Login.gov` and who have direct deposit set up with their bank information. 

Specifically, this research will be looking to validate the following use cases:
- Participants view and edit the correct direct deposit information in their account for all three user scenarios, and receive email confirmations:
	- Veterans with education benefits and compensation & pension
	- Veterans with just education benefits
	- Veterans with just compensation & pension
- We are able to confirm that the information being returned from the API matches what is being populated for users on the screen.
- We are able to confirm that the following safeguards in place are working correctly:
	- invalid routing/account numbers cannot be saved
	- numbers over/under the character limit are unable to be saved

### Outcome
Based on the outcome of this research study, we will correct any bugs or significant usability hurdles and launch this work to veterans.

### Research questions
- Is the API showing us the correct flags for direct deposit?
- Are eligible participants able to successfully view and save their bank information?
	- Are users able to open the edit modal, click cancel, and see the previously-saved directly deposit information still saved in their Profile?
- When participants update their direct deposit information, do they receive the correct confirmation email?
- Are participants prevented from submitting the direct deposit form with errors or an invalid routing/account numbers?
- What expectations and impressions do participants have on the current iteration of the Account Security page?

### Hypothesis
Direct Deposit will function as expected, answering affirmatively to all direct deposit research questions.

## Method	
While sharing their screen in remote (Zoom) interviews, participants will complete specific tasks as part of UAT to either demonstrate that Direct Deposit, Profile is functioning as expected.

### Location
Remote via Zoom

### Research materials
[Conversation Guide]()

## Recruitment
Perigean will recruit 1 pilot participant before we meet with the rest of the participants. Perigean will also recruit 9 participants for a total of 6 completed sessions. 

**We would like to request a recruitment kickoff with Perigean. We’re able to source a first pilot participant, but we need a second participant to complete the pilot portion of our UAT.**

### Recruitment criteria
We will aim for recruiting 9 participants for a total of **6 completed sessions** segmented in the following manner:
- Recruit 3 veterans for a total of 2 completed sessions who receive direct deposit payments for **both** Post-9/11 GUI Bill (Chapter 33) education benefits **and** compensation & pension benefits
- Recruit 3 veterans for a total of 2 completed sessions who receive direct deposit payments for **only** compensation & pension benefits
- Recruit 3 veterans for a total of 2 completed sessions who receive direct deposit payments for **only** Post-9/11 GUI Bill (Chapter 33) education benefits

**As part of recruitment, selected participants must be notified that we will be looking at the Direct Deposit section of the site, and they will need their direct deposit information readily available so they can enter it at the end of the session.**

We will need participants’ login emails ahead of time to grant their account access to the feature we are testing.

### Primary criteria (must-haves)

**All participants**
- Must be able to screen share via Zoom
- Must have an identity-verified account
	- Roughly 50% of participants must use `ID.me` as their VA.gov credential
	- Roughly 50% of participants must use `Login.gov` as their VA.gov credential

**Some participants**
- 33% of participants must receive direct deposit payments for **both** Post-9/11 GUI Bill (Chapter 33) education benefits **and** compensation & pension benefits
- 33% of participants must receive direct deposit payments for **only** compensation & pension benefits
- 33% of participants must receive direct deposit payments for **only** Post-9/11 GUI Bill (Chapter 33) education benefits

### Additional screener questions

#### Verification level
We’d like you to review parts of the VA website that require you to log in to an identity-verified account. Do you have an identity-verified account on VA.gov? (You can check on this by logging into VA.gov and going to VA.gov/profile. If you see a prompt to verify your identity when you get to your profile page, your identity is **not** yet verified.)

Response options (yes or no).
- Answering "yes" qualifies the participant
- Answering "no" disqualifies the participant

#### Login method
Do you have a working login and password for any of the following VA.gov login methods? (Select 1-4 options). **You will need your login credentials for the research session, so please make sure your credentials work before answering this question.**

Response options (radio button):  `ID.me`, `Login.gov`, `MyHealtheVet`, `DS Logon`, and `None of the above`
- Answering `MyHealtheVet`, `DS Logon`, or `None of the above` disqualifies the participant.
- Answering either `ID.me` or `Login.gov` qualifies the participant.

#### Email address

**What email address do you use to login to VA.gov?**
This is a fill in the blank question, no character limit, and is not qualifying or disqualifying. 

#### Direct deposit

Do you currently receive direct deposit payments for any of the following benefits?

Response options (radio button):
- *both* Post-9/11 GI Bill (Chapter 33) education benefits *and* compensation & pension
- *just* compensation & pension (*not* Post-9/11 GI Bill (Chapter 33) education benefits)
- *just* Post-9/11 GI Bill (Chapter 33) education benefits (*not* compensation & pension)

Note: We ask this question because we’ll be asking you to confirm your direct deposit payments are set up correctly.

## Timeline 

### Research sessions

When will the feature you are testing be finalized? April 17, 2024

What dates do you plan to do research? 
- We would like to begin UAT on Monday, April 29th.
- We will conduct two pilot sessions to prepare our UAT (see next section).

### Pilot sessions

The first pilot session will help test **compensation & pension benefits** before April 29th. Date and name of a participant:
- Pilot participant name: Shane Strassberg
- Pilot participant email: shane.strassberg@va.gov
- Date and time for this pilot session: TBD

The second pilot session will help test **post-9/11 GI Bill (Chapter 33) education benefits** on Monday, April 29th. Date and name of a participant: **TBD with Perigean**
- We need help from Perigean to find a pilot participant that meets the following criteria:
	- Must use `ID.me` OR `Login.gov` as their VA.gov credential
	- Must receive direct deposit payments for *just education benefits* (not compensation & pension)
- Date and time for this second pilot session: **TBD with Perigean**
	- Availability: Monday, April 29th from 9:30am - 11:30am

### Length of sessions
Sessions will be 30 minutes with 1 hour in between sessions. Please schedule no more than 5 sessions per day.

### Availability

| Date                           | Times (Eastern)       |
| ------------------------------ | --------------------- |
| Monday, 4/29 (pilot date only) | 9:30am - 11:30am      |
| Tuesday, 4/30                  | 9:30am - 1pm; 2pm-5pm |
| Wednesday, 5/1                 | 9:30am - 1pm; 2pm-5pm |
| Thursday, 5/2                 | 9:30am - 1pm          |

## Team Roles	
- Moderator: Pam Drouin, pamela.drouin@a1msolutions.com
- Research guide writing and task development: Pam Drouin
- Participant recruiting & screening: Perigean
- Note-taker: Team
- Observers/Participants:
  - <travis.cahill@agile6.com>
  - <chante.lantosswett@va.gov>
  - <adam.whitlock@adhocteam.us>
  - <liz.lantz@adhocteam.us>
  - <Alexandria.parker@agile6.com>
  - <tom.harrison@adhocteam.us>
