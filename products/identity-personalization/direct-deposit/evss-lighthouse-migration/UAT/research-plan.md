# Research Plan for Profile, Direct depost for compensation & pension EVSS > Lighthouse migration UAT, March 2023

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
- LOI 1 and fiduciary users can only see Account Security section of the Profile.
- MHV users see Direct Deposit section of the Profile, and also see prompt to login with ID.me or Login.gov.
- Ineligible LOA3 users see Direct Deposit section of the Profile, and see messaging that they are not eligible for direct deposit for Comp & Pen.
- Eligible but not yet set up for direct deposit LOA3 users see Direct Deposit section of the Profile and see a prompt to set it up.
- Eligible and set up for direct deposit LOA3 users see Direct Deposit section of the Profile and when they edit and save new info, they receive a confirmation email.
- Eligible and set up for direct deposit LOA3 users that open the edit modal and click cancel will see modal close and previously-saved direct deposit information will still be saved.
- Eligible and set up for direct deposit LOA3 users that click to edit Direct Deposit information cannot submit the form with errors.
- Eligible and set up for direct deposit LOA3 users that click to edit Direct Deposit information will get an error if they input a bogus routing number.
- Eligible Login.gov user can see Direct Deposit section of the profile and can update direct deposit information.

### Outcome
Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles.

### Research questions
- Are Veterans and other users able to update direct deposit information?
- Are different user types seeing the correct information and messaging based on whether they are eligible for Comp & Pen direct deposit and whether they have the section of Profile set up?
- Are errors working correctly to protect Veterans and other users from entering incorrect direct deposit information?

### Hypothesis
- Veterans will see the correct messaging based on their logged in method and status (whether that is logged out, LOI, fiduciary, MHV, or LOA3 users).
- Veterans will see the correct messaging based on whether or not they are eligible for direct deposit for Comp & Pen.
- Veterans will be able to edit and save direct deposit information (or edit and cancel to retain previous Direct Deposit information).
- Veterans will be protected from submitting false direct deposit information through errors that prevent them from saving edits.

## Method	
While sharing their screen in remote (Zoom) interviews, participants will complete specific tasks as part of UAT to either demonstrate that Direct Deposit, Profile is functioning as expected for their user type.

### Location
Remote via Zoom

### Research materials
Conversation Guide

## Recruitment
Perigean will perform recruiting for a total of 

### Recruitment criteria
We will aim for at least 5 completed sessions for each user type:
* LOA1 user
* Fiduciary user
* MHV user
* LOA3 user that is not eligible for direct deposit for comp & pen
* LOA3 user that is eligible for direct deposit for comp & pen but hasn't set it up yet
* LOA3 user that is eligible for direct deposit for comp & pen and has set it up
* 

The following use cases will not be specifically recruited for, and we'll roll in their testing as part of testing with other user types:
* 

#### Primary criteria (must-haves)

**All participants**

- must be LOA3 (identity verified) on VA.gov.
- must be able to screenshare via Zoom.
- must be comfortable providing the email address they use to sign into VA.gov.

## Timeline
When will the thing you are testing be finalized? 
- September 2022 (tentative)

### Research sessions
What dates do you plan to do research? 
- TBD

### Length of sessions
1 hour-long session for all 6 participants 

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Christina Gednalske, christina.gednalske@adhocteam.us
- Research guide writing and task development (usually but not always same as moderator): Christina Gednalske
- Participant recruiting & screening:	Christina Gednalske
- Observers/Participants:	
  -  <samara.strauss@va.gov>
	-   <liz.lantz@adhocteam.us>
	-   <sharon.kasimow@gcio.com>
	-   <adam.whitlock@adhocteam.us>
	-   <tom.harrison@adhocteam.us> - Tom will correct/manage BAI flags if not displaying correctly on production accounts
	-   **Note:** If Tom is not permitted to manage BAI flag on his own, we’ll need someone from VA Profile standing by in case assistance is needed
