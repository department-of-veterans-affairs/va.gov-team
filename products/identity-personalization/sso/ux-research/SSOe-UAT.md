# UAT Plan for SSO-Login, SSOe, March 26, 2020

[Per VSP guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#what-is-uat), during typical user acceptance testing (UAT), actual users test the service/tool/feature to make sure it can handle required tasks in real-world scenarios in the production environment, athough [there are times when UAT may be conducted with a non-Veteran audience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md#recruiting). Because SSOe is mostly comprised of back-end development work (there is only one UI element, a modal, that will be part of the SSOe launch), we have decided to move forward with UAT with a non-Veteran audience. 

That being said, we are leveraging prior research done with Veterans around logon that made us aware of some instance SSOe must account for, especially for assistive device users. 

### What product & team is this UAT for?
- SSO-Login Team
- Outbound and Inbound SSOe (single sign-on from VA.gov to other VA sites, from other sites to VA.gov) 

### Product Background
VA.gov aims to provide a unified digital portal with access to all VA services. In certain instances, however, Veterans are directed out of the VA.gov platform in order to message their healthcare provider (MHV), check on the status of benefits claims (eBenefits), or access health tools that have moved to My VA Health (Cerner). When users need to navigate between multiple platforms to access benefits and tools, they are in many cases asked to re-authenticate each time. This results in a fragmented experience that may discourage users from interacting with the VA online. The goal of SSOe is seamless navigation for any user redirected between health tools or benefits housed on multiple platforms.

### Purpose 
Make sure SSOe works in production.

## Output
- UAT testing summary
- Anything that is found that could be improved in the future, but is not detremential to SSOe launch will be documented for future consideration

## UAT Testing Flows
- Sign in with every account type (MHV Premium, MHV Basic, ID.me LOA3, DS Logon) 
- View and dismiss SSOe comms modal 
- Navigate from VA.gov to other VA sites (MHV, eBenefits)
- Navigate from VA sites to VA.gov (MHV, eBenefits)

## Things to Consider
In addition to ensuring SSOe is usable and achieves its stated goals, we may ask the following:
- Do our testers find the SSOe redirects to be confusing or otherwise detremential to their experience? 

### Method
- User acceptance testing
- Remote moderated, via Zoom
- Testing from VA.gov.
- This type of testing will allow us to observe how testers outside of our team react to SSOe as its happening. 

### Participants and Recruitment
#### Participant criteria
- 4-6 participants across DSVA, Ad Hoc, and other contractors
- Participants must have CAG access 
- The SSO-Login team will provide test accounts, testers won't need to enter any personal information 

#### What is your recruitment strategy?
WIP

### Timeline
#### Dates
WIP

#### Stimuli for testting
WIP

#### Length of Sessions
WIP

#### Availability
WIP

#### Pilot
WIP

### Team Roles
Please list the people who will be serving in each role. Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker

Moderator: Bridget Hapner

Research guide writing and task development (usually but not always same as moderator): Bridget Hapner

Participant recruiting & screening: TBD

Project point of contact: Bridget Hapner

Participant(s) for pilot test: TBD

Note-takers: Alexis James, Ambika Roos

Observers: TBD

