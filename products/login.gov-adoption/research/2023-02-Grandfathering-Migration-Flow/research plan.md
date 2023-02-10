# Research Plan: Login.gov Adoption Team, Legacy Credential Migration

*Grandfathering Migration Flow Usability Test Round 1, February 2023*

## Background

There are currently multiple ways to sign in and access VA services. These sign in options don't all meet required security standards and also create user frustration and confusion. We need to migrate Veterans from legacy credential service providers (DS Logon and My HealtheVet) to Login.gov. During [discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/discovery/2022-10-Login.gov-Adoption-Discovery-Research), we defined different pathways for the migration.

This initiative focuses on one migration pathway: moving select DS Logon users to Login.gov without the need to reverify their identities through “grandfathering” or deferred identity proofing. In this case, Veterans will receive an IAL1 Login.gov account which works “as normal” for VA services, but can’t be used by other government services until it’s upgraded to IAL2. In order to upgrade to an IAL2 Login.gov account, Veterans will have the option of identity proofing at a later date.

We will run a few rounds of testing to review the effectiveness and usability of this grandfathering user flow. Following Round 1, we will include follow-up testing to address any issues that surface. We will also include at least one round of accessibility testing with blind and low vision users. This [Research overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research) has more details on what is upcoming.

### OCTO Objectives 

* Veterans can manage their health services online.
* Veterans and their families trust the security accuracy and relevancy of VA.gov.

### Veteran Journey

Signing to securely access VA services can happen at any stage in the [Veteran’s journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf). With this migration pathway, however, we're particularly focused on the stages that occur later on in the journey. Other migration initiatives will focus on reaching Veterans who are just getting out and starting up, aiming to ensure Veterans proactively set up Login.gov (instead of another credential service provider) from the start.

This initiative is focused on Veterans who have set up a DS Logon account already. In order for Veterans to not lose access to their information and benefits when DS Logon is sunset by the VA, we need to ensure there is a clear and technically-feasible pathway for their migration.

These stages include:
* Taking care of myself
* Putting down roots
* Retiring
* Aging

## Research Goals	

The key goals of this study are to:

* Review whether Veterans can migrate their accounts from DS Logon to Login.gov (IAL1) without issue.
* Review whether Veterans understand the type of account they've set up and its limitations.
* Review whether Veterans know where to get help or what they will do if they encounter an issue during or after account setup.

### Outcome

This research will validate and refine a user flow that lets Veterans migrate from DS Logon to Login.gov through grandfathering. We are aiming to test two different flows; each with an alternate trigger. We will aim to make a decision about whether to move forward with one or both potential triggers, based on findings.

We will aim to find solutions to any issues that are surfaced through testing. If we uncover issues within the Login.gov flow, we will make recommendations to our partners at Login.gov.

This research will inform a built prototype(s), which we will use for accessibility testing with blind and low vision users in the next round of testing.

### Research questions

Review whether Veterans can migrate their accounts from DS Logon to Login.gov (IAL1) without issue:

* Are Veterans motivated to set up a Login.gov account when initially prompted, why or why not?
* [If we are prepared to test an alternate flow, with a different trigger] Are Veterans more or less motivated by the alternate flow?
* How confident do Veterans feel about their ability to set up a Login.gov account when initially prompted?
* Can Veterans successfully initiate the account setup flow?
* Can Veterans successfully create their account, including verifying their email address and setting up multi-factor authentication?
* Can Veterans successfully return back to the VA after setting up their account?
* Do Veterans understand they are now signed into Login.gov?
* Do Veterans have concerns about their data or information now that they use a different sign in method?
* Do Vetetans have concerns about their ability to continue accessing VA services, now that they have a new login method?

Review whether Veterans understand what type of account they have set up with Login.gov and its limitations:

* Do Veterans understand why they're being asked to set up a Login.gov account?
* Do Veterans understand the type of Login.gov account they are being asked to set up?
* Do Veterans understand that they should now stop using DS Logon and use Login.gov to sign in moving forward?
* Are Veterans motivated to upgrade to an IAL2 Login.gov account at a later date, why or why not?

Review whether Veterans know where to get help or what they will do if they encounter an issue during or after account setup.

* What will Veterans do first if they encounter an issue?
* Do Veterans know where or how to get help if they encounter an issue?

### Hypotheses

* Veterans will be motivated to set up a Login.gov account if they understand they will no longer be able to use DS Logon at some point in the future.
* Veterans will be able to set up an IAL1 Login.gov account, which is less risky and burdensome than setting up an IAL2 Login.gov account.
* Most Veterans will be able to set up one multi-factor authentication method without issue.
* Most Veterans will choose to set up text or voice message as their multi-factor authentication method.
* Veterans will be motivated to continue to use their Login.gov account moving forward if they understand they should stop using their DS Logon account.
* Veterans will be motivated to upgrade to an IAL2 account through identity proofing if they understand what an IAL2 account will let them do (access other government websites).
* Veterans will decide and be able to navigate to contact information on the Login.gov or VA.gov websites if they encounter an issue during account creation.

## Methodology
This usability study will be conducted remotely on Zoom. We will test on both mobile and desktop.

### Research materials

- [Need to add link to conversation guide](url)
- [Need to add link to Sketch prototype](url)
	
## Recruitment	

Before defining our recruitment strategy, we reviewed:
* [Perigean Recruitment Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md)
* [Inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md)
* [Introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md)
* [Recruitment checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing)

### Recruitment approach

We will use Perigean to recruit Veterans for this moderated study, aiming for maximum variation sampling (MVS). Doing sequential rounds of research will not only let us iterate on the product, it will help us reach (or get closer to) MVS, as we'll aim to fill underrepresented gaps with each subsequent round.

We've submitted a [Recruitment Request: Grandfathering Migration Flow Usability Test (Round 1) #233](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/233).

### Recruitment criteria

We need to recruit 15 Veterans for this study in order to achieve 10 completed sessions.

**Primary criteria (must-haves)**

All participants:
* Must be Veterans
* Must have a computer, tablet or smartphone and be willing to complete their sessions on one of those devices
* Must be willing to share a web browser window on their device
* Must have a working microphone on their device
* Must have Zoom downloaded to their device prior to the session and know how to share their screen
* Must have signed into a VA application (including VA.gov, My HealtheVet or eBenefits) in the last 6 months
* Must use DS Logon (as their credential service provider) to sign in to the VA. If Veterans aren’t sure what this means or what they use, this can be confirmed by asking them to sign into VA.gov and confirming how they logged in.

**At least** 13 participants:
* Must not have a Login.gov or ID.me account set up.

**At most** 2 participants:
* Must have a Login.gov account set up, but not use it to sign in to the VA. For example, they use Login.gov to sign in to TSA Pre-check or USAJobs, but, when they sign in to VA.gov, they use DS Logon.

Demographic goals:
* At least 50% of people must be over 55
* At least 50% of people must have an identified cognitive disability
* At least 30% of people must identify as Black, Hispanic, or Native
* At least 30% of people must be without a degree or professional certificate
* At least 30% of people must live in a rural or remote area
* At least 20% of people must identify as other than male
* At least 20% of people must be non-native English speakers
* At least 20% of people must identify as gay, lesbian, bisexual, or transgender

### Screener questions

In addition to demographic and device questions, we’ve provided the following screener questions:

* Have you signed in to VA.gov, My HealtheVet or eBenefits in the last 6 months? [answer must be yes to qualify.]
* Do you use DS Logon to sign in to the VA? [answer must be yes to qualify.]
* Do you have a Login.gov or ID.me account? [answer must be no to qualify, except for at **most** one participant can answer yes.]

## Timeline

|Date|Milestone|
|:--|:--|
|Before February 21|Submit prototype for Midpoint Review|
|Before February 27|Submit artifacts for Research Review|
|Before March 3|Prototype is ready|
|March 6-10|Pilot session [Need to update with details]|
|March 13-22|Research sessions|
|March 22-24|Analysis|
|March 27-29|Share findings|

### Pilot session

* Pilot participant email: [Need to update with details]
* Date and time of pilot session: March 6-10 [Need to update with details]

### Research sessions

#### Length of sessions

* Session length: 1 hour
* Buffer time between sessions: 1 hour
* Maximum sessions per day: 4 sessions

#### Availability

We’re providing the following time slots (30 total) with the aim to book 15 sessions:

|Date|Time slots (EST)|Number of options per day|
|:--|:--|:--|
|Monday, March 13th|10-11am, 12-1pm, 3-4pm, 5-6pm|4 options|
|Tuesday, March 14th|9-10am, 11am-12pm, 1-2pm, 3-4pm|4 options|
|Wednesday, March 15th|8-9am, 10-11am, 12pm-1pm, 5-6pm|4 options|
|Thursday, March 16th|8-9am, 1-2pm, 3-4pm, 5-6pm|4 options|
|Friday, March 17th|8-9am, 10-11am, 12-1pm, 2-3pm|4 options|
|Monday, March 13th|10-11am, 12-1pm, 3-4pm|3 options|
|Tuesday, March 14th|9-10am, 11am-12pm, 1-2pm, 3-4pm|4 options|
|Wednesday, March 15th|8-9am, 10-11am, 12pm-1pm|3 options|

## Team Roles

Please list the people who will be serving in each role.

* Moderator: Tyler Gindraux (Phone: 843-593-1835) | Email: tyler@bluetiger.digital)	
* Research guide writing and task development: Tyler Gindraux
* Participant recruiting & screening: Perigean
* Project point of contact: Elizabeth Koch (elizabeth@bluetiger.digital)
* Participant(s) for pilot test: [Need to update with details]
* Accessibility specialist: [Need to update with details]
* Note-takers: Carolyn Williams (carolyn@themostudio.com), Carl Dickerson (carl@themostudio.com)
* Observers: John Rahaghi (john.rahaghi@va.gov), Porta Antiporta (porta@themostudio.com), Jay Tanner (jtanner@pluribusdigital.com), Elizabeth Koch (elizabeth@bluetiger.digital), Anthony Levin-Decanini (anthony@themostudio.com), Steve Dickson (sdickson@greenthreadsllc.com), Carolyn Williams (carolyn@themostudio.com), Carl Dickerson (carl@themostudio.com), Sofia Kirkman (sofia@themostudio.com), Ksenia Coulter (kcoulter@pluribusdigital.com), Melissa Miller (mmiller@pluribusdigital.com)
* Other observers (where space permits): Clayton Zook (clayton.zook@oddball.io), Amanda Porter (ajohnson@clarityinnovates.com), Charlye Tran (charlye@bluetiger.digital)

Each session will include no more than 6 total attendees per session: 1 Veteran participant, 1 moderator, 1-2 notetaker(s), 1-2 observer(s).
