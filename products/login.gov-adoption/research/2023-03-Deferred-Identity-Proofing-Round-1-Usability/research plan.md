# Research Plan: Deferred Identity Proofing (Round 1: Usability)
*Login.gov Adoption Team, Legacy Credential Migration, February 2023*

Last updated by @tygindraux: March 9, 2023

## Background

There are currently multiple ways to sign in and access VA services. These sign in options don't all meet required security standards and also create user frustration and confusion. We need to migrate Veterans from legacy credential service providers (DS Logon and My HealtheVet) to Login.gov. During [discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/discovery/2022-10-Login.gov-Adoption-Discovery-Research), we defined different pathways for the migration.

This initiative focuses on one migration pathway: moving select DS Logon users to Login.gov and allowing them to defer identity proofing to a later date, while still maintaining the same access to VA services that they had with their Premium DS Logon credential. In this case, Veterans will receive an IAL1 Login.gov account which works “as normal” for VA services, but can’t be used by other government services until it’s upgraded to IAL2. In order to upgrade to an IAL2 Login.gov account, Veterans will have the option of identity proofing at a later date. The [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/products/legacy%20CSP%20migrations) has more details on this product.

We will run a few rounds of testing to review the effectiveness and usability of this deferred identity proofing user flow. Following Round 1, we will include follow-up testing to address any issues that surface. We will also include at least one round of accessibility testing with blind and low vision users. The [research overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research) has more details on what is upcoming.

### Research this builds on

* [2022-10-Research-LoginGovFieldResearch #185](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/185)
* [2022-07 MHV transition to Login.gov as a single sign-on #157](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/157)
* [2022-07 Login Self-Service Tool #156](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/156)
* [2022-03 Sign-In Accessibility #93](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/93)

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

This research will validate and refine a user flow that lets Veterans migrate from DS Logon to Login.gov through deferred identity proofing. We are aiming to test two different flows; each with an alternate trigger. We will aim to make a decision about whether to move forward with one or both potential triggers, based on findings.

We will aim to find solutions to any issues that are surfaced through testing. If we uncover issues within the Login.gov flow, we will make recommendations to our partners at Login.gov.

This research will inform a built prototype(s), which we will use for accessibility testing with blind and low vision users in the next round of testing.

### Research questions

Review whether Veterans can migrate their accounts from DS Logon to Login.gov (IAL1) without issue:

* Are Veterans motivated to set up a Login.gov account when initially prompted, why or why not?
* Are Veterans more or less motivated when prompted via email or via a (surprise) modal after sign-in?
* How confident do Veterans feel about their ability to set up a Login.gov account when initially prompted?
* Can Veterans successfully initiate the account setup flow?
* Can Veterans successfully create their account, including verifying their email address and setting up multi-factor authentication?
* Can Veterans successfully return back to the VA after setting up their account?
* Do Veterans understand they are now signed into Login.gov?
* Do Veterans have concerns about their data or information now that they use a different sign in method?
* Do Veterans have concerns about their ability to continue accessing VA services, now that they have a new login method?

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
* Veterans who receive an email will be more motivated to set up a Login.gov account than those who see a modal pop-up; because they won't be interrupted while completing another VA task.
* Veterans will be able to set up an IAL1 Login.gov account, which is less risky and burdensome than setting up an IAL2 Login.gov account.
* Most Veterans will be able to set up one multi-factor authentication method without issue.
* Most Veterans will choose to set up text or voice message as their multi-factor authentication method.
* Veterans will be motivated to continue to use their Login.gov account moving forward if they understand they should stop using their DS Logon account.
* Veterans will be motivated to upgrade to an IAL2 account through identity proofing if they understand what an IAL2 account will let them do (access other government websites).
* Veterans will decide and be able to navigate to contact information on the Login.gov or VA.gov websites if they encounter an issue during account creation.

## Methodology
This usability study will be conducted remotely on Zoom. We will test on desktop.

We will test two prototypes. In half the sessions, we'll test Prototype #1 and in the other half we'll test Prototype #2. Both flows are nearly identical, but each has an alternative start:

- Prototype #1: After signing in to VA.gov, a modal pops up asking Veteran to set up a Login.gov account.
- Prototype #2: Veteran receives an email asking them to sign in to VA.gov to start Login.gov account set up.

### Research materials

- [Conversation guide #1: Modal after sign in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/2023-02-Grandfathering-Migration-Round-1-Usability/conversation%20guide%20%231.md)
- [Conversation guide #2: Email ask to sign in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/2023-02-Grandfathering-Migration-Round-1-Usability/conversation%20guide%20%232.md)
- [Prototype #1: Modal after sign in](https://www.figma.com/proto/8vobVoSl1UqLnXsni3rcvO/Login.gov-Migration%3A-Grandfathering-IAL1-Flow?node-id=41%3A1311&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=41%3A1311) 
- [Prototype #2: Email ask to sign in](https://www.figma.com/proto/8vobVoSl1UqLnXsni3rcvO/Login.gov-Migration%3A-Grandfathering-IAL1-Flow?node-id=241%3A1369&scaling=min-zoom&page-id=241%3A1368&starting-point-node-id=234%3A1848) 
	
## Recruitment	

Before defining our recruitment strategy, we reviewed:
* [Perigean Recruitment Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md)
* [Inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md)
* [Introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md)
* [Recruitment checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing)

### Recruitment approach

We will use Perigean to recruit Veterans for this moderated study, aiming for maximum variation sampling (MVS). Doing sequential rounds of research will not only let us iterate on the product, it will help us reach (or get closer to) MVS, as we'll aim to fill underrepresented gaps with each subsequent round.

We've submitted a [Recruitment Request: 2023-03-Deferred-Identity-Proofing-Round-1-Usability #233](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/233).

We have also written a document with [Extra Information for Perigean](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/2023-02-Grandfathering-Migration-Round-1-Usability/for%20perigean.md).

### Recruitment criteria

We need to recruit 15 Veterans for this study in order to achieve 10 completed sessions.

**Primary criteria (must-haves)**

All participants:
* Must be Veterans
* Must have a computer and be willing to complete their sessions on this device (Note: In subsequent rounds, we will include and favour mobile testing)
* Must be willing to share a web browser window on their computer
* Must have a working microphone on their computer
* Must have Zoom downloaded to their computer prior to the session and know how to share their screen
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
|March 8|Submit prototype for Midpoint Review|
|March 8|Submit artifacts for Research Review|
|March 9|Ready documentation is ready (feedback incorporated)|
|March 17|Prototypes are ready (feedback incorporated)|
|March 20|Pilot session at 12:00pm EST|
|March 27 - April 6|Research sessions|
|April 10-12|Analysis|
|April 13-19|Share findings|

### Pilot session

* Pilot participant name: Jesse James
* Pilot participant email: jesse.james@themostudio.com
* Date and time of pilot session: March 20-21 (Still confirming a time)

### Research sessions

#### Length of sessions

* Session length: 1 hour
* Buffer time between sessions: 1 hour
* Maximum sessions per day: 4 sessions

#### Availability

We’re providing the following time slots (30 total) with the aim to book 15 sessions.

Note: The moderator assigned to each session is subject to change, please refer to Tyler Gindraux (tyler@bluetiger.digital) as moderator on all sessions and she will assign Carolyn to sessions where applicable.

|Slot|Date|Time (EST)|
|:--|:--|:--|
|1|Monday, March 27th|12-1pm|
|2|Monday, March 27th|3-4pm|
|3|Tuesday, March 28th|9-10am|
|4|Tuesday, March 28th|11am-12pm|
|5|Tuesday, March 28th|1-2pm|
|6|Tuesday, March 28th|3-4pm|
|7|Wednesday, March 29th|10-11am|
|8|Wednesday, March 29th|2-3pm|
|9|Thursday, March 30th|8-9am|
|10|Thursday, March 30th|11am-12pm|
|11|Thursday, March 30th|1-2pm|
|12|Thursday, March 30th|3-4pm|
|13|Friday, March 31st|8-9am|
|14|Friday, March 31st|10-11am|
|15|Friday, March 31st|12-1pm|
|16|Friday, March 31st|2-3pm|
|17|Monday, April 3rd|12-1pm|
|18|Monday, April 3rd|3-4pm|
|19|Monday, April 3rd|5-6pm|
|20|Monday, April 3rd|7-8pm|
|21|Tuesday, April 4th|12-1pm|
|22|Tuesday, April 4th|1-2pm|
|23|Tuesday, April 4th|3-4pm|
|24|Tuesday, April 4th|7-8pm|
|25|Wednesday, April 5th|12-1pm|
|26|Wednesday, April 5th|4-5pm|
|27|Wednesday, April 5th|6-7pm|
|28|Thursday, April 6th|10-11am|
|29|Thursday, April 6th|2-3pm|
|30|Thursday, April 6th|4-5pm|

## Team Roles

Please list the people who will be serving in each role.

* Project point of contact: Tyler Gindraux (Phone: 843-593-1835) | Email: tyler@bluetiger.digital)
* Moderator: Tyler Gindraux, Carolyn Williams
* Research guide writing and task development: Tyler Gindraux
* Participant recruiting & screening: Perigean
* Participant(s) for pilot test: Jesse James
* Accessibility specialist:
* Notetakers: Carl Dickerson (carl@themostudio.com), Sofia Kirkman (sofia@themostudio.com)
* Observers: John Rahaghi (john.rahaghi@va.gov), Porta Antiporta (porta@themostudio.com), Jay Tanner (jtanner@pluribusdigital.com), Elizabeth Koch (elizabeth@bluetiger.digital), Anthony Levin-Decanini (anthony@themostudio.com), Steve Dickson (sdickson@greenthreadsllc.com), Ksenia Coulter (kcoulter@pluribusdigital.com), Melissa Miller (mmiller@pluribusdigital.com), Jesse James (jesse.james@themostudio.com), Clayton Zook (clayton.zook@oddball.io), Amanda Porter (ajohnson@clarityinnovates.com), Charlye Tran (charlye@bluetiger.digital)

Each session will include no more than 6 total attendees per session: 1 Veteran participant, 1 moderator, 1-2 notetaker(s), 1-2 observer(s).

## Reviewers

This plan has been reviewed by:
* John Rahaghi, OCTO
* Login.gov Adoption Team
* Clayton Zook, Researcher, Core/Surge Identity Product Team
