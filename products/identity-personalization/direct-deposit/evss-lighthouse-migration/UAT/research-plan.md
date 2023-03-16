# Research Plan for Profile, Direct depost for compensation & pension EVSS > Lighthouse migration UAT, March 2023

## Background  
EVSS -- the VA backend that stores direct deposit for comp & pen, disability ratings, and more -- is being retired in favor of the Lighthouse platform. Lighthouse has been working hard to migrate data from EVSS to their platform, and they have successfully done so with direct deposit for comp & pen information. This means that we need to reintegrate the VA.gov profile to point to Lighthouse instead of EVSS.

* [Project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readme)
* [Direct deposit product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/direct-deposit)
* [Direct deposit management API](https://developer.va.gov/explore/benefits/docs/direct-deposit-management?version=current)
* [Use Cases and Outcomes](https://docs.google.com/spreadsheets/d/12gvlkGnwt206BBYY89gDIYG1AtD6j9uCYMr5x99Nzns/edit#gid=0)

### OCTO-DE Objectives 
The goals for the EVSS > Lighthouse migration are to limit service disruptions for Veterans and other users who receive comp & pen direct deposits or who need to change their direct deposit information for comp & pen purposes.

## Research Goals	
The primary goal of our UAT is to confirm that the Direct Deposit section of the Profile functions as intended for various user types:
- Users that are logged out see the sign in modal when arrive at the Direct Deposit section of the Profile. 
- LOI 1 and fiduciary users can only see Account Security section of the Profile.
- MHV users see Direct Deposit section of the Profile, and also see prompt to login with ID.me or Login.gov.
- Ineligible LOA3 users see Direct Deposit section of the Profile, and see messaging that they are not eligible for Direct Deposit for Comp & Pen.
- Eligible but not yet set up for Direct Deposit LOA3 users see Direct Deposit section of the Profile and see a prompt to set it up.
- Eligible and set up for Direct Deposit LOA3 users see Direct Deposit section of the Profile and when they edit and save new info, they receive a confirmation email.
- Eligible and set up for Direct Deposit LOA3 users that open the edit modal and click cancel will see modal close and previously-saved direct deposit information will still be saved.
- Eligible and set up for Direct Deposit LOA3 users that click to edit Direct Deposit information cannot submit the form with errors.
- Eligible and set up for Direct Deposit LOA3 users that click to edit Direct Deposit information will get an error if they input a bogus routing number.
- Eligible Login.gov user can see Direct Deposit section of the profile and can update Direct Deposit information.

### Outcome
Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles.

### Research questions
- Are Veterans and other users able to update Direct Deposit information?
- Are different user types seeing the correct information and messaging based on whether they are eligible for Comp & Pen Direct Deposit and whether they have the section of Profile set up?
- Are errors working correctly to protect Veterans and other users from entering incorrect Direct Deposit information?

### Hypothesis
- Veterans will see the correct messaging based on their logged in method and status (whether that is logged out, LOI, fiduciary, MHV, or LOA3 users).
- Veterans will see the correct messaging based on whether or not they are eligible for Direct Deposit for Comp & Pen.
- Veterans will be able to edit and save Direct Deposit information (or edit and cancel to retain previous Direct Deposit information).
- Veterans will be protected from submitting false Direct Deposit information through errors that prevent them from saving edits.

## Method	
While sharing their screen in a Zoom interview, participants will complete specific tasks as part of UAT to either demonstrate that Direct Deposit, Profile is functioning as expected for their user type.

### Location
Remote, via Zoom

### Research materials
Conversation Guide

## Recruitment


### Recruitment criteria

We will aim for at least 6 completed sessions to finalize UAT and launch this feature. 4 of these sessions will test out “updating” an address, and 2 of the sessions will test out “confirming” an address.

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
