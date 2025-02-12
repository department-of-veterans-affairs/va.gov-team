# Research Plan for Identity Experience, sign-in page credential deprecation
## Background
We want to use the unified sign in page and the sign in modal to help encourage folks to make the transition from the MHV and DSL legacy credentials that are being sunset. Our design exploration especially includes de-emphasizing the legacy credentials, and adding content about how to transition to one of the modern credential options (Login.gov and IDme). We'll also test an interstitial that could be used to escalate communications, to focus of the interstitial testing will be proposed content and flow.
- [product info](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/usip-legacy-logins)

### Related research

- [2023-04 Proactive CSP Migration](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/280)
- [2023-02-Grandfathering-Migration-Round-1-Usability #235](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/235)
- [2022-07 MHV transition to Login.gov as a single sign-on #157](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/157)

## OCTO Identity Crew Objectives
- Objective 1: Create a smooth transition for Veterans from legacy to modern sign-in credentials
  - KR1: The number of users who have a MHV credential and neither ID.me or Login.gov is reduced to less than 500K by Oct 31, 2024 and to less than 100K by Jan 31, 2025
      - Baseline: 1.1M users in January 2024; 900K users in July 2024.
   - KR2: Sign-ins to VA web/mobile properties with the MHC credential are reduced to less than 1M per month by Oct 31, 2024 and to less than 200K per month by Jan 31, 2025
      - Baseline: 1.53M July '24 logins to VA.gov and the VA mobile app.
KR3: Retire the MHV in the targeted timeframe (last day available is January 31,
- Objective 2 Improve the Veteran sign-in experience. 
   - Retiring the MHV credential is only one of the improvements we intend to make to the sign in experience in the coming months. Changes in these metrics will likely capture work related to and separate from the transition.
   - KR1: Improve CSAT score from roughly 1.7 in FY24 rating to date to at least 2.2 by the end of Q2 FY2025 (March 2025).
   - KR2: [In progress: determining a KR for how we've impacted contact center support calls]

## Veteran Journey
Securely accessing VA online services can happen at any stage in the Veteran journey. The updated Sign-in page and modal will apply to everyone who signs into VA online and uses the authenticated experience.

## Research Goals
- Test newly created sign in or create an account modal with updated language to inform veterans of upcoming changes to CSPs
- Test preliminary interstitial content that provides more in-depth information about the MHV deprecation as part of the communications strategy 
- Test the usability of a prototype for the sign in page and/or sign in modal
- Explore veterans thinking around certain terms and phrases relating to sign in and credential migration
messaging

## Outcome
Uncover areas for improvement with our design and content by allowing veterans to interact with our prototype. This will allow us to update the UI and content in a way that better encourages veterans to stop using a deprecated credential and to instead use a modern credential. We expect to find both immediate next steps and to uncover insights for future work.

## Research questions
- Is our messaging clear enough to encourage veterans to make the transition and begin using the other CSPs? 
- Do folks understand the content around credential deprecation and whether that applies to them and what does that mean going forward?
- Do veterans understand the differences between MHV as a credential versus a site?
- Do veterans still sign in with a deprecated credential if they choose to do so and bypass our attempt to steer them to Login.gov or ID.me?
- Do veterans understand the language updates we plan to use to describe the benefits of a modern credential? 
- What are veterans’ sentiments around the deprecation?
- When would a veteran actually transition to Login.gov/ID.me?
- Are there any other gotchas or pain points that come up?


## Hypothesis
- H1: Based on the content updates, veterans will understand that MHV as a credential will be going away soon.
- H2: Veterans will be confused as to what will happen with the MHV site.
- H3: Veterans will continue to use their MHV credential when they sign into VA.gov. 
- H4: MHV credential users will not create a new modern credential if they are visiting VA.gov to complete a specific task.
- H5: Veterans will wait until the last minute to transition to Login.gov/ID.me.
- H6: Veterans will feel ambivalent about the messaging around credentials deprecation.


## Methodology
Remote usability testing will evaluate the prototype with participants. We’ll use Perigean’s Zoom account for these remote sessions

## Research materials
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-08%20Credential%20deprecation/2024-08%20Credential%20deprecation%20conversation%20guide.md)
- [Prototype](https://www.figma.com/proto/skWgD0gHYGlKSoLdH097OX/USiP-and-sign-in-modal---deemphasize-DSL%2FMHV?node-id=65-42645&t=pCsS806Lgd3tIEHz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=65%3A42645&show-proto-sidebar=1)

## Recruitment
### Recruitment approach
- We will use Perigean to recruit Veterans for this moderated study.
- Under represented groups this research will target as participants
  - Assistive Tech users (screen zoom, and screen reader in particular)
  - mobile users
  - cognitive disabilities
recruitment checker in google sheets - link to be added

### Recruitment criteria
Note: [recruitement ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/663) will superceed anything listed here

- 14 Veterans for at least 10 completed sessions
- Baseline criteria (must-haves)
  - Must have a computer or mobile phone and be willing to complete their sessions on this device
  - Must be willing to share a web browser window on the Zoom call
  - Must have a working microphone
  - Must have Zoom downloaded to their computer or phone prior to the session and know how to share their screen
- In addition our primary product criteria includes:
  - Must be Veterans
  - Preference to participants who’ve signed in using MHV sign in credential in the last 6 months, for any reason. (at least 8)
- Our primary diversity and inclusion criteria:
7 of mobile users
3 of cognitive disabilities

### Screener questions
1. How do you sign into VA.gov most often?
   - Response options: a. Login.gov, red button, b. ID.me, green button, c. My HealtheVet, blue button, d. DS Login, blue button, e. don't remember or not applicable
   - at least 8 must answer option C. Others must answer C or E (note: we'd also take 1 or 2 participants who answer D if not enough valid responses)
2. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
   - Response options: yes or no
   - recruit at least 3 "yes" responses

## Timeline
- Recruiting: Sept 4-10th
- Pilot: Mid Sept
- Sessions: Sept 11-20th

### Prepare

- Pilot participant email:
- Date and time of pilot session:


### Length of sessions
- Session length: **45-minute** sessions 
- Session buffer: **30-minute breaks** in between
- Max sessions per day: 4

  
### Availability
- **Sept 11-20**
- please hold Sept 19th/20th in case of needed make ups sessions, to the extent possible.

Team Availability | Time (EST)
------------------|--------------
Mon | 10am - Noon, 1 - 6 pm
Tue | 10am - Noon, 1 - 2 pm
Wed | 10am - Noon, 1 - 6 pm
Thur| 10am - Noon, 1 - 6 pm
Fri | 10am - Noon, 1 - 5 pm

Pilot Session | Time (EST)
--------------|----------
Sept TBD | TBD

	
## Team Roles	
- Moderators: Megan Driscoll
- Research guide writing and task development: Charly Tran, Clayton Zook, Megan Driscoll
- Participant recruiting & screening: Perigean
- Project point of contact: Clayton Zook, Megan Driscoll
- Participant(s) for pilot test: TBD
- Accessibility specialist (for sessions where support for assistive technology may be needed): tbd
- Note-takers: Joelle Wells, Alex Garcia, Lisa Lindsey
- Observers: Samara Strauss
- Team member emails:
megan@bluetiger.digital
clayton.zook@oddball.io
alexander.garcia@oddball.io
joelle.wells@oddball.io
parker.baranowski@oddball.io
lisa.lindsey@oddball.io
samara.strauss@va.gov
thomas.black2@va.gov
