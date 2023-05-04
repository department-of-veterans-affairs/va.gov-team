# Research Plan for Identity, Proactive CSP Migration, 2023-04
 

## Background
There are currently multiple ways to sign in and access VA services. These Credential Service Providers (CSPs) don't meet required security standards and having so many choices creates user frustration and confusion. We need to migrate Veterans from legacy credential service providers (DS Logon and My HealtheVet) to Login.gov as a first choice or ID.me. During discovery research, the LGA team defined different pathways for the migration.

The pathway this research focuses on is promoting Organic Adoption of login.gov - specifically in encouraging veterans to migrate to a modern CSP now, ahead of sunsetting.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/products/login.gov) 

### Out of scope for this research
- Support for account creation or proofing
   - potential VA integrations with login.gov account creation process
   - potential VA work to help veterans through the current login.gov (or ID.me) account creation process
- Pathway for Grandfathering accounts from legacy CSP
   - binding to login.gov verified accounts based off legacy proofing
- Pathway(s) for adoption of login.gov for those who are creating an VA account for the first time  

### Previous related research

- [2023-02-Grandfathering-Migration-Round-1-Usability #235](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/235)
- [2022-10 Research LoginGov Field Research #185](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/185)
- [2022-07 MHV transition to Login.gov as a single sign-on #157](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/157)
- [2022-07 Login Self-Service Tool #156](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/156)
- [2022-03 Sign-In Accessibility #93](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/93)


### OCTO Objectives 

- Veterans and their families can apply for all benefits online
- Veterans can manage their health services online
- Veterans and their families trust the security accuracy and relevancy of VA.gov
- Decrease: Call center volume, wait time, and time to resolution

### Veteran Journey

Securely accessing VA digital services can happen at any stage in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf).
This initiative focuses on Veterans who are using either DS Logon or MHV as their CSP. To help Veterans keep access to their information and benefits as VA prepares to sunset legacy CSPs, this study seeks ways to encourage veterans and others with accounts to proceed with migration before being forced to.


## Research Goals

- Test the usability of a [modal prototype](https://www.figma.com/proto/8vobVoSl1UqLnXsni3rcvO/Login.gov-Adoption%3A-Design-Flows?node-id=1375-5590&scaling=scale-down&page-id=944%3A3979) that encourages veterans to signup for a login.gov account
- Identify which terms are most understandable and resonates most when describing identity concepts like verified (ID prooded) account and authentication.
- Find out best ways to encourage more veterans to migrate CSPs now, even before sunsetting of legacy accounts(s)


### Outcome

We hope to learn the best words or phrases to use so that veterans and others accessing va.gov understand the difference between their current CSP and the CSP we are asking them to migrate to. 

Previous Identity research found that after sign in, veterans tend to close a modal without closely looking at it. But since it is a tool we can leverage to encourage migration for some veterans, this research will also validate a modal prototype’s wording to learn if it resonates with veterans. We’ll also explore if there is a better time or place to present the modal than right at sign in.

From both of these we’ll gain understanding about how to encourage va.gov legacy account holders to migrate to one of the modern CSPs early but on their own timeline, before they encounter stress of possible disruption of service.


### Research questions

- Is the modal useful in encouraging organic adoption of a modern CSP?
- Would any changes make the modal more helpful or more encouraging?
- What word or phrase will best convey to veterans the concept of “ID proof” or “verified account”?
- How might we encourage more veterans to migrate their CSP now, on their own, before sunsetting forces it?


### Hypotheses

- Veterans will have a term or phrase for concepts like “verified account” that we can use to better speak to the process.
- Most veterans will not understand how CSPs are different from their account
- Some veterans will be motivated to migrate from a legacy CSP with some encouragement, like the modal prototype
- Most veterans will choose to ignore the modal their first time seeing it
- Veterans will be more likely to choose not to set up a Login.gov account from their mobile device
- Veterans will choose to continue to use their current (legacy) credential unless they are given a deadline or told that their credential is going away soon


## Methodology	

Remote usability testing will evaluate the modal prototype with participants who access VA.gov via mobile devices. We will not ask veterans to use their mobile devices for these sessions, since the prototype will be more of a guided tour. This will be paired with interview questions to evaluate the use of words and phrases to best convey account and sign in concepts to veterans. 
We’ll use Perigean’s Zoom account for these remote sessions


### Research materials 

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0e986a82fb2358cc50ce6c6f8d933913c645aacb/products/identity/Research/2023-04%20Organic%20LIG%20Adoption/2023-04%20Organic%20LIG%20Adoption%20conversation%20guide.md)
- [modal prototype](https://www.figma.com/proto/8vobVoSl1UqLnXsni3rcvO/Login.gov-Adoption%3A-Design-Flows?node-id=1375-5590&scaling=scale-down&page-id=944%3A3979)


## Recruitment	


### Recruitment approach

We will ustilize the Perigean recruitment team to recruit Veterans for this moderated study. Since this study builds on previous research looking at the same or substantially similar topics, this research will consider any gaps in the representation from previous research and aim to target undermet diversity goals from the larger body Identity work.

Under represented groups from recent Identity research includes:
- Mobile users
- Cognitive disability
- Immigrant origin
- Other than honorable discharge
- Expat
- LGBTQ+
- Assistive Tech

See also
- [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing)
- [Identity body of research recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1Vpw9r2P50yQLC-8SAu1M91KnMxdCm0ImF82RzMvAW-k/edit#gid=1468815489)

### Recruitment criteria

15 Veterans for at least 10 completed sessions

**Primary criteria (must-haves)**

All participants:
- Must have a computer and be willing to complete their sessions on this device (Note: In subsequent rounds, we will include and favour mobile testing)
- Must be willing to share a web browser window on their computer
- Must have a working microphone on their computer
- Must have Zoom downloaded to their computer prior to the session and know how to share their screen

In addition our Primary criteria includes
- Must be Veterans
- Must have signed into a VA application (including VA.gov, My HealtheVet, eBenefits, or VA mobile app) in the last 6 months (_see screener q's below_)
- Must sign into VA applications using either the DSLogon or My HealtheVet login methods (_see screener q's below_)
- Must NOT log into VA applications using Login.gov or ID.me credentials (_see screener q's below_)

Our primary diversity and inclusion criteria:
- Cognitive Disability - 5 participants
- LGBTQ+ - 2 participants
- Immigrant origin - 2 participants


### Screener questions

Include in the email to participants:

- Prior to selecting a date/time for your session, please visit the [VA.gov sign in page](https://www.va.gov/?next=loginModal) to determine which method you use to sign in to VA.gov.

Screener questions:
- Do you ever access and manage your VA benefits and health care from a mobile phone?
   - [1. yes, 2. no - answer must be yes to qualify]
- Have you signed in to VA.gov, My HealtheVet, eBenefits, or the VA mobile app in the last 6 months?
   - [1. yes, 2. no - answer must be yes to qualify]
- Do you sign in to the VA online with Login.gov? 
   - [1. yes, 2. no - answer must be no to qualify]
- Do you sign in to the VA online with ID.me
   - [1. yes, 2. no - answer must be no to qualify]


## Timeline
- Recruiting: April 17 - 21
- Pilot: TBD; week of April 17 -21
- Sessions: April 24 - May 5
- See also [planned timeline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Research/2023-04%20Proactive%20LIG%20Migration)


### Prepare

- Before recruitment starts, I would like to request a kickoff call with Perigean to align on recruitment criteria and terminology for screener questions. Available times listed in the recruitment ticket

- The prototype went through [Midpoint review](https://app.zenhub.com/workspaces/collaboration-cycle-reviews-61d89e9e5f4c120011a0ad37/issues/gh/department-of-veterans-affairs/va.gov-team/54326) on Apr 14, 2023

- Pilot Session details are TBD:
   - Pilot participant email:
   - Date and time of pilot session:


### Research sessions
- Planned dates of research: 2023 April TBD
- Session length: **60-minute** sessions 
- Session buffer: **60-minute breaks** in between
- Max sessions per day: 4


### Availability
**April 24 - May 5**

Team Availability | Time (EST)
------------------|--------------
Mon | 8am - Noon, 2 - 7 pm
Tue | 8am - Noon, 2 - 7 pm
Wed | 8am - 3pm,  4 - 7 pm
Thur| 8am - Noon, 2 - 7 pm
Fri | 8am - Noon, 1 - 5 pm

Pilot Session | Time (EST)
--------------|----------
TBD | TBD 


	
## Team Roles	
- Moderator: Clayton Zook (410-541-6768), Amanda Porter, Charlye Tran
- Research guide writing and task development (usually but not always same as moderator): Clayton Zook
- Participant recruiting & screening: Perigean
- Project point of contact: Clayton Zook
- Participant(s) for pilot test: TBD 
- Accessibility specialist (for sessions where support for assistive technology may be needed):	N/A
- Note-takers: Clayton Zook, Amanda Porter, Charlye Tran
- Observers: Tom Black, Matt Conway, Mike King, Amber Parsley, Tyler Gindraux, Carl Dickerson, Sofia Kirkman, Carolyn Williams
- Team member emails:
   - clayton.zook@oddball.io
   - ajohnson@clarityinnovates.com
   - charlye@bluetiger.digital
   - tyler@bluetiger.digital
   - thomas.black2@va.gov
   - mconway@clarityinnovates.com
   - Mike.King@oddball.io
   - aparsley@clarityinnovates.com
   - carl@themostudio.com
   - sofia@themostudio.com
   - carolyn@themostudio.com

## Reviewers
This plan has been reviewed by:
Identity, Core/Surge UX team (Amanda Porter, Charlye Tran)
Identity, Login.gov Adoption Team UX researcher (Tyler Gindraux)
VA PO for Identity, Core/Surge UX team - Tom Black
