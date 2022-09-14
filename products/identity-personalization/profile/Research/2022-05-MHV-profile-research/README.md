# Project outline: MyHealtheVet/VA.gov profile transition research

Last updated May 5, 2022

### Communications

- **Github labels**: vsa-authenticated-exp
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp); [#va-profile](https://dsva.slack.com/channels/va-profile)

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |OCTO Lead| samara.strauss@va.gov |
|Sharon Kasimow |Product Manager| sharon.kasimow@gcio.com |
|Liz Lantz |Researcher| liz.lantz@adhocteam.us |

Additionally, we have consulted with the health apartment team as part of this work.

## Problem Statement

MyHealtheVet has its own profile, which is part of a larger Personal Information section. In support of the health apartment transition, we need to figure out which parts of the MHV Profile and Personal Information section need to roll into VA.gov and put together a strategy for how we might go about that work. 

## Research goals

Our ultimate goal is to come up with a strategy for how we should move forward with rolling the MHV profile into the VA.gov profile. In order to do this, we need to:

1. Evaluate the MHV profile and personal information section, noting similarities and differences with the VA.gov profile.
2. Work closely with the MHV profile team to understand the current status of profile work and transition planning.
3. Determine if we need to talk to other MHV stakeholders, and have discussions as necessary.
4. Understand the MHV coordinator role and how they use the MHV profile.
5. Understand how MHV users use the profile, and what they need from the VA.gov profile in order to make it work for them.

### Research questions
#### About the profile/Personal Information section
* What data do we already have in the VA.gov profile that is also part of the MHV profile?
* What data do we not already have in the VA.gov profile that should move over from MHV?
* What data do we not already have in the VA.gov profile that should *not* move over from MHV?
* Are there other sections of the “Personal Information” section of MHV that we need to account for in the profile?

#### For the VA.gov identity team
* Will we need to support the MHV credential after the health apartment transition?

#### For the VA.gov health apartment team
* What work has already been done on evaluating the MHV <> VA.gov profiles?
* What else should we consider as we think about how the VA.gov profile might change as it needs to support MHV users?

#### For MHV profile team
* What work is the MHV profile team already doing to start to get their profile data into VA Profile or other backends?
* What work has the MHV profile team already done to start planning for the eventual transition over to VA.gov? 
* Have they started talking about sunsetting the MHV profile?
* What does the MHV profile team know about how their users use the profile?
* Do they have analytics that we can look at? Here’s a list of questions we have that can be informed by analytics:

|Question|Metric|
|----|----|
| How many people visited the personal information sections of MHV in the last 12 months? | Pageviews for each page in the section,  and % of total  |
|  For “What is your relationship to VA” what % of profiles have values other than the auto checked “VA Patient” value? | % of null values compared to not null |
| usage for each optional field in My Profile | % of null values compared to not null | 
| How many users have changed any checkbox selections on the facilities section checkboxes in the last 12 months? | # of profiles with a last changed date for checkbox fields within the last 12 months |
| Is there any data about the MHV admin portal usage to help us understand how coordinators use this information? | tbd |


#### For MHV coordinators
* How do MHV coordinators data from the profile and personal information section?
* What are the expectations around what access MHV coordinators will have to VA.gov profile data once we fully make this transition?
* How can we make this transition less painful for them?

#### For MHV stakeholders
* What expectations do they have around the MHV —> VA.gov profile transition?

#### For MHV users
* How do they use their profiles? Are there fields that are regularly used and others that are not?
* How do they use the other sections under Personal Information in MHV?
* How can we make this transition less painful for them?


## Research deliverable
We plan to deliver a report on all of our findings, including high-level recommendations around how both MHV and VA.gov should handle the profile transition.

## Solution approach
In order for this research effort to be successful, we should do all of the following:

- An MHV profile/Personal Information section evaluation.
- Get analytics on MHV if we can.
- Talk to:
  - The MHV profile team.
  - MHV coordinators.
  - Other MHV stakeholders, if necessary.
  - MHV users.
  - The VA.gov identity team (re: the MHV credential).

## Timeline
Ideally, this research will start **in early March 2022**. We are proposing 4 - 5 sprints for this research, though this is subject to change depending on an initial planning sprint and early discussions. A potential timeline might be as follows:

In the first two sprints we’ll conduct the following activities to work toward [research goals 1-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/research-strategy.md#research-goals):
1. Audit of MHV’s personal information section and compare it to VA.gov’s Profile. 
2. Talk to the MHV teams (stakeholders, UX, data owners) to learn about:
	- the current status
	- any past research they’ve done
	- available analytics
	- their expectations and perspectives on the transition
	- other stakeholders we should to talk to
3. Talk to the health apartment team, to understand what they’ve done so far to evaluate the MHV profile, and other things they feel we need to consider for this work to be successful.
4. Talk the identity team, to understand if we’ll need to support the MHV login credential.
5. Begin synthesizing the data we’ve gathered so far.

In the second two sprints, we’ll conduct these activities to work toward [research goals 4 and 5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/mhv-profile-research/research-strategy.md#research-goals):
1. Interview Veterans who are MHV users.
2. Interview MHV coordinators.
3. Synthesize interview data
4. Start forming recommendations for a strategy based on all the data we gathered.

We’ll use time in the 5th sprint to finalize our report and recommendations.

## Research artifacts
- MHV user interview [research artifacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research/mhv-user-interviews)
- MHV coordinator interview [research artifacts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research/mhv-coordinator-interviews)
- [Meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research/meeting-notes)
