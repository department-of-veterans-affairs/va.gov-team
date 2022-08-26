# Research Plan for Profile, Bad address indicator (BAI) UAT, September 2022

## Background  
When mail is sent to a Veteran and then returned to the VA, the address is marked as "bad" in VA Profile. The address may very well be a real, valid address, but the returned mail implies that it is no longer the right address for the veteran for whom the mail was intended. Currently, 300K veterans have the bad address indicator flag on their mailing address in VA Profile.

This effort aims to encourage Veterans with flagged addresses to view and update or confirm their information.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information/bad-address-indicator).

### OCTO-DE Objectives 
We're implementing alerts to indicate the Mailing address is bad and encourage Veterans to update their information. The addition of bad address indicator alerts should help fulfill our north star objective to increase the quality and reliability of VA services by allowing Veterans to view and update their information.

These additions also address the following [OCTO-DE goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

-   Logged-in users can update their personal information easily and instantly
-   Logged-in users have a personalized experience, with relevant and time-saving features



## Research Goals	
The primary goal of our UAT is to confirm that the BAI functionality works as expected and users can update or confirm their mailing address to remove the bad address flag.  
- We would like to validate that included links and jumplinks function as intended.
- We would like to validate that the FAQ dropdown functions as intended.
- We would like to validate that the bad address flag is removed from the user's account as expected when an address is updated AND confirmed.
- We would like to validate that the alerts disappear as expected when an address is updated or confirmed.
- We would like to validate that no major usability hurdles have been introduced during the iterations that have occurred, especially with the changes we made to the alert design.
- _(not confirmed) We would like to test the alerts with a screen reader user to validate that the information is presented in line with their mental model and they are able to act on it as intended._

### Outcome
Based on the outcome of this research study, we will either release this work to production, or make updates to correct any bugs or significant usability hurdles.

### Research questions
- Does the functionality work as expected?
- Are Veterans able to update or confirm their mailing address and clear all alerts without any usability hurdles?

### Hypothesis
- Veterans will be able to easily follow the links and jump links to the Mailing address section. 
- Veterans will be able to easily take action to update or confirm their address and clear the alerts.
- Veterans will be able to easily use the FAQ to learn more about confirming their address.
- Veterans will not encounter any bugs in the Contact information section while updating or confirming their address.
- _(not confirmed) Screen reader users will feel that the information is presented in line with their mental model, and is easily understood and acted upon._

## Method	
We'll have participants go through a list of specific tasks for UAT and ask follow-up questions to get feedback on our usability-related questions. We will test this feature in production internally and work with VA Profile to trigger a bad address flag for participants' accounts.

### Location
Remote, via Zoom

### Research materials
Conversation guide

## Recruitment	
We will be conducting this research study internally without recruitment from Perigean. We will use production accounts for 6 members of the Profile team, onto which VA Profile will have placed the Bad address indicator flag.

_Note: considering including screen reader user as well_

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
	-   <tom.harrison@adhocteam.us>
