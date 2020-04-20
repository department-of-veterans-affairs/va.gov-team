# UAT Plan for SSO-Login, SSOe, March 26, 2020

[Per VSP guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#what-is-uat), during typical user acceptance testing (UAT), actual users test the service/tool/feature to make sure it can handle required tasks in real-world scenarios in the production environment, athough [there are times when UAT may be conducted with a non-Veteran audience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#recruiting). Because SSOe is mostly comprised of back-end development work (there is only one UI element, a modal, that will be part of the SSOe launch), we have decided to move forward with UAT with a non-Veteran audience. 

That being said, we are leveraging prior research done with Veterans around logon that made us aware of some instance SSOe must account for, especially for assistive device users. 

### What product & team is this UAT for?
- SSO-Login Team
- Outbound and Inbound SSOe (single sign-on from VA.gov to other VA sites, from other sites to VA.gov) 

### Product Background
VA.gov aims to provide a unified digital portal with access to all VA services. In certain instances, however, Veterans are directed out of the VA.gov platform in order to message their healthcare provider (MHV), check on the status of benefits claims (eBenefits), or access health tools that have moved to My VA Health (Cerner). When users need to navigate between multiple platforms to access benefits and tools, they are in many cases asked to re-authenticate each time. This results in a fragmented experience that may discourage users from interacting with the VA online. The goal of SSOe is seamless navigation for any user redirected between health tools or benefits housed on multiple platforms.

### Purpose 
**Make sure SSOe works in production.**

## UAT Testing Flows

The 4 flows below chart out how users could test both outbound and inbound SSOe with one type of credential. Ideally, each flow should have two testers go through it, one in Chrome and one in Safari. This would make for a total of 8 moderated UAT sessions run by the SSOe team. 

### Flow 1: ID.me

Complete the following test cases: 
- [C318, ID.me,  LOA3 Sign in to VA.gov](https://dsvavsp.testrail.io/index.php?/cases/view/318&group_by=cases:section_id&group_order=asc&group_id=60)
- [C351, ID.me LOA3 VA.gov Modal UX](https://dsvavsp.testrail.io/index.php?/cases/view/351&group_by=cases:section_id&group_order=asc&group_id=60)
- [C320, ID.me LOA3 View claims/appeals](https://dsvavsp.testrail.io/index.php?/cases/view/320&group_by=cases:section_id&group_order=asc&group_id=60)
- [C321, ID.me LOA3 Navigate to MHV in new tab](https://dsvavsp.testrail.io/index.php?/cases/view/321&group_by=cases:section_id&group_order=asc&group_id=60)
- [C322, ID.me LOA3 Navigate to MHV via My Health](https://dsvavsp.testrail.io/index.php?/cases/view/322&group_by=cases:section_id&group_order=asc&group_id=60)
- [C323, ID.me LOA3 Navigate to eBenefits](https://dsvavsp.testrail.io/index.php?/cases/view/323&group_by=cases:section_id&group_order=asc&group_id=60)
- [C361, ID.me LOA3 Inbound session from MHV](https://dsvavsp.testrail.io/index.php?/cases/view/361&group_by=cases:section_id&group_order=asc&group_id=68)

### Flow 2: MHV Basic

Complete the following test cases: 
- Link test cases (WIP) 

### Flow 3: MHV Premium

Complete the following test cases: 
- Link test cases (WIP)

### Flow 4: DS Logon

Complete the following test cases: 
- Link test cases (WIP)


## Output
- UAT testing summary (results of each moderated session, noting passes and fails)
- Tickets for any fixes that need to be implemented for SSOe to launch


## Things to Consider
In addition to ensuring SSOe is usable and achieves its stated goals, we may ask the following:
- Do our testers find the SSOe redirects to be confusing or otherwise detremential to their experience? 

## Method
- User acceptance testing
- Remote moderated, via Zoom. Will ask testers to share their screens.
- Testing from VA.gov 
- This type of testing will allow us to observe a variety of users experiencing SSOe with different credentials & see how testers outside of our team react to SSOe in real-time

## Participants and Recruitment
#### Participant criteria
- 4-8 participants across DSVA, Ad Hoc, and potentially other contractors
- Participants must have CAG access 
- Must have their own MHV, ID.me, or DS Logon account

#### What is your recruitment strategy?
- Will put out a call on Slack across DSVA and Ad Hoc, seeking users who have their own accounts to test with in production

## Timeline
#### Dates
- We are seeking to launch SSOe to 1% of users on 5/6/20, meaning we need to have testing completed by Friday 5/1/20

#### Stimuli for testting
- Production environment

#### Length of Sessions
- About 30 minutes, maximum of 45 minutes 

#### Availability
- Pending completion of SSOe work dates can be set 

#### Pilot
Test cases run by SSO-Login team with test credentials will serve as pilot 

### Team Roles
Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker

Moderator: Alexis James, Patrick Vinograd, Bridget Hapner, Eric Buckley, Dan Hinze may all serve as moderators 

Research guide writing and task development (usually but not always same as moderator): Bridget Hapner

Participant recruiting & screening: Bridget Hapner

Project point of contact: Alexis James

Participant(s) for pilot test: N/A

Note-takers: SSO-Login team may all serve as note-takers, a note taker will be designated prior to each session

Observers: N/A

