# CTO Health Team Weekly Team Meetings
**Note**: Team meetings were initially held bi-weekly initially, then changed to weekly in 2023 so the other day could be used for Sprint Planning/Retro and Backlog Refinement.

## 2023-05-11 Team Meeting

### Attendees 

## Discussion 

### Theme/Goal/Main Activity for the Team

## 2023-04-27 Team Meeting

### Attendees 
- Lauren Alexanderson
	- API integrations and Pharmacy
- Patrick Bateman
	- MHV on VA.gov landing page bumped up to 10%
- Coulton Bunney
	- Working with Kay on initial medications requirements for Phase 0
	- Usability research plan for med records, running 2 sessions, one with a prototype so can test with assistive tech users
- Daniel Cloud
	- Looking at lower environment access/what does the call center need in order to train people on new landing page
- Robyn Singleton
	- Medical Records usability test has been submitted to the research repo
	- Anticipated data collection 5/9 - 5/16 
- Martha Wilkes
	- Providing support where needed
- Mikki Northuis
	- Cerner migration - working with appointments and unified check in
	- Wayfinding research meeting with Robyn, hoping to get started soon
	- Thinking of the general transition experience (communications, user flows, messaging placement, etc)
- Jenny Wang
	- Finalizing findings/recommendations for medications, will share with Lauren and then the broader audience
- Stephen Barrs
	- Architecture design around accessible PDFs
	- Check in app, aligning directory structure 
- Sara Smith	
	- Secure messaging accessibility	
- Kay Lawyer
	- Same as Coulton and Jenny, working to get appointments app through phase 1
- Leila Rassi
	- Getting ready for the Secure Messaging launch
- Florence McCafferty
- Jonathan Nelson
	- Contnuing with research synthesis, adding demographics to the report, will share out	 

## Discussion 

### Meeting Gut Check
- Meeting initially started when the group was much smaller - the team size has grown and does thismeeting still meet the group's needs?
	- Consensus was this meetiing would be better utilized for cross team collaboration give the number of products in flight and all in different phases
- Changes to meeting
	- Soliticit topics in slack at the beginning of the week. Lynne to consolidate/review (topics still needed?)/prioritize topics and send out agenda on Slack day of meeting
	- Elminiate the stand up portion of the meeting
### Team Structure
- Carlos, Angela, futre IA resource will work across several teams involved with the patient portal, looking across workstreams 
- Carlos, Marci, OCTO engineers collaborate on Cerner integrations
- Angela: In partnership with Leila and Martha, establish as an accessibility provider across all patient portal teams. It’s important for teams to think about accessibility first, build it in from the beginning.
- IA will work closely with Mikki as the apps move over to MHV on VA.gov
- Rest of team - Portal home experience and vonnecting the rest to VA.gov. Includes notifications, preferences, how do we build pathways in from the health hub, header, etc and when we do that.

### Notifications and Preferences Scope/Expectations
- MHV on VA.gov team will need to work with Kristin, Kay and My Va team on notifications and preferences
- Patrick and Ryan have done some initial thinking on how to do N/P, but the team will beed to define the notifications and app level N/P experience. 
- Notifications and Preferences are 2 separate things with their own scope of work
- Preferences spreadsheet - Kay will set up cross team meeting to review https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/General/Preferences%20and%20Notifications/MHV%20and%20New%20Profile%20and%20Preferences.xlsx?d=wd9e64dc034eb48d7ae03abb11b731c78&csf=1&web=1&e=4koCHd&isSPOFile=1
- Team is empowered to reach out or scheudle discussions with other teams as needed. This includes the va profile or va.gov profile team.
- Research question for the team to answer: How do preferences fit into VA.gov? Where do preferences live - va.gov, MHV on va.gov, application level?
- Question to answer: When preference set at patient portal level (MHV on va.gov), will they persist to other systems, and if so, how does it get there? where does data live, who do we need to work wih to expose in other systems where staff veterans need to see it.
- VA profile = backend service, the data available to pull from, the database
- Va.gov profile = the front end, the place on VA.gov where users manage stuff about themselves
- MHV preferences include profile information (ex. Name) but also application specific information (ex. I prefer to see...) - need to decide during research and design if profile/preference will be designed as it is in MHV classic.
	- Potential to distinguish application preferences (how I want the app to work) from notification prefences (what I want to be notified about) from profile (user information)

## 2023-04-06 Team Meeting

### Attendees

- Lauren Alexanderson
- Patrick Bateman
- Coulton Bunney
- Daniel Cloud
- Cara Frissell
- Kristen McConnel
- Martha Wilkes
- Mikki Northuis
- Jenny Wang
- Ryan Thurlwell
- Stephen Barrs
- Sara Smith	
- Kay Lawyer
- Leila Rassi

### Updates

- Lauren
	- Disruptive behavior flag
	- RX flag
	- SM into phase 0
- Kristen
	- Working with VAOS on user flows
- Carlos
	- Onboarding
- Coulton
	- Clinical review of lab & test results with Dr. Josephs
- Martha/Sara
	- Working on MR to prepare for Midpoint Review
	- PDF
	- SM with Alex & Mark 
- Mikki
	- Met with appointments
- Patrick
	- Aligning on-screen notifications
- Jenny
	- Working on journey map with Medications team
	- Next meeting next Thursday
- Stephen
	- Looking at PDF accessibility issues
	- Wanted to POC a thing, but haven't had time
	- Strategy for getting Cerner-based appointments
- Kay
	- Working with Kristen to get VAOS flows in place
	- Medications stuff with Jenny
- Leila
	- Secure Messaging - Phase 0
	- Research triage solutions 
- Marci


## Discussion 

### MHV API documentation
- Lauren has asked Barry to document the MHV APIs 
- Stephen is making requests for people to get access to things
- Validating impact of account creation API on apps & phases
- Jason Boire said that Carnetta cleared 6 months to do the account creation API
- The API is supposed to create an "underground" 
- This has been held up by the Terms and Conditions
- MHV will not allow a user to authenticate unless they agree to T&C
- We have tried to surface a unified T&C
- Lauren was done that the account experience API would be done in Jan, but for Phase 0 we didn't really care.  Phase 1 and 2, if we don't have that account creation API
- Daniel - there is an account creation API
- Lauren will start [a thread in the channel](https://dsva.slack.com/archives/C04DRS3L9NV/p1680806464294609).  If we put a sign on MHV to the app, if this isn't set up, a Veteran won't be able to access their data if they don't have an MHV account
- Coulton - does the lack of this lead to the problem of people having to log in again?
- Lauren - this assumes that at some point, someone is not going to start on MHV.  They are going to create an ID.me account.  If you go to MHV in that scenario, it will not direct you to MHV APIs for that data

## Does anyone have anything specific to ask of the mobile team?
- MHV on VA.gov has threaded messages, and mobile works differently.
- Mobile team is looking into using the new threading part of the messaging API
- Vaccines and the data being displayed are pulling from two different APIs
- Mobile is pulling from Lighthouse Health for vaccinations and MHV is pulling from the FHIR, and will not be pulling from Lighthouse
- Nobody seems to know what is being displayed on which platform
- Ryan is going to write down what mobile displays vs. what MHV on VA.gov displays
- API documenation - this is what we want to get to for the MHV APIs: https://developer.va.gov/explore
- Table to show which field comes from X data source
- Do we think this is the place to connect the lab type to the source data?
- Do we know anyone who has authority to do direct queries against the source databases?  That way we could compare the records to what we are seeing and try to deduce what fields is coming from which source(s).

### Disruptive behavior flag
- Patrick - pre-fetching data when the application loads - has that been embarked on anywhere?

## 2023-03-30 Team Meeting

## Attendees

- Lauren Alexanderson
- Patrick Bateman
- Mikki Northuis
- Kristen McConnell
- Leila Rassi
- Mark Dewey
- Martha Wilkes
- Jonathan Nelson
- Coulton Bunney
- Daniel Cloud
- Robyn Singleton

## Updates

- Daniel
	- Put up the PR for the newsletter sign up.
- Coulton
	- Focused on MR - have time with Dr. Josephs to review some of the designs
	- Hopeful there won't be a ton of changes since they haven't strayed too far from the existing.
	- Jenny has started some research discovery on Medications
	- Hoping to learn about pre-visit summary and existing functionality
	- Goal is to get to low-fi design by end of April
	- Working with SM to get ready for accessibility and staging review
- Kristen
	- Will be in pre-visit summary meeting 
	- Will be writing up documentation on after visit summary
	- New to OCTO engineer (Adrien) with whom she met earlier
- Robyn
	- Continuing with research
	- Noticed they got no non-MHV users; going t o work with Perigean on that
- Martha
	- Accessibility feedback from the team
- Patrick
	- Launched landing page
	- Briefed the coordinators
	- Quietly obsessing on what to deliver next
- Jonathan
	- Data collection for usability
	- Needs to circle back around on Preferences and see where Kay is re: the spreadsheet
- Lauren
	- Trying to connect some dots with the Veterans experience product line 
	- Getting Terry access to systems
- Leila
	- Getting ready to launch SM
	- Talked with Coulton about some opportunities for improvement on how we 
	- Discussion with Patty on renaming triage groups
- Mark
	- Working on SM stuff with Coulton
	- Chasing down a bug in the accordion


## Other Discussion Topics

- Why we can't incorporate the new landing page into SM phase 0
	- SM will be a standalone, no breadcrumb
	- Leila prefers leaving the process as-is; wants to make sure users can understand how to send a message
- Is there a smaller piece of landing page reminders that we might be able to deliver sooner rather than later?
	- Does the notion of a notification for one thing seem feasible?
	- Kristen - we need to consider notifications in MyVA vs. these 
	- Marci - is it possible users might overlook other notifications if they thing the ones we are showing initially are the only ones
	- Coulton - prefers we try to prove out some use cases; wants to learn as fast as we can.
	- Patrick - may not have patience to wait for Auth; we may be able to dip a toe in to gather data to inform a larger strategy
- Right to access/when can we pre-fetch data on behalf of the Veteran - is this in writing (policy)?
	- There is "right to access" data vs. data you have to have an official request to get.
	- VA logs that request.  Veteran used to have to fill out a form; they now log the BB request.
	- Might warrant another conversation with Stephanie Griffith
	- VA has some type of responsibility of getting you the data or telling you why they can't get it to you.
	- We have to make sure that when they make those requests that it is being logged
	- It may be in the Terms and Conditions what constitutes a request
	- Is the act of moving data from VistA to eVault also related to the right to access?
	- Can we run a query against the system and let it sit in the wings and wait for the user to request it?
	- Is the act of fetching that data an access request, and if so, are we logging that as a request?
- Who are the stakeholders for the details about a previous appointment?  Is this a different concept from AVS? 
	- AVS is messy; Veterans don't know to ask for After Visit Summary.  What's the most valuable thing we could do incrementally?
		- Lauren is up for an AVS MVP.  We shouldn't try to design an AVS that goes around Maureen and Eric
		- It is 50-75% of what the current AVS is
		- Kristen proposes that an engineer gets a view next
- Secure Messaging Staging Review
	- They have to have done the self-assessment for SM yet, which is a predecessor to Staging Review
	- The ByLight team is a ways from being able to do their accessibility review
	- Martha brought up the idea of doing a swarm on it
	- They are concerned that an assessment at this point may reflect where they currently are (some of their changes are not on Staging yet)
	- When would the accessibility swarm happen?
	- Sara Smith sent a list of accessibility issues, but Mark is not sure how far this has been distributed
	- Swarm concept started  because Sara has this all to review on her own
	- The long list was from a 30 minute review; there are some basic things in the code.
	- Preventing duplicate work
	- Mark and Oleskii work on the accordion fix
	- Push up any reviews that they have done
	- If there are concerns with them running the tests, maybe someone can walk them through it.
	- Not sure what the timeline is, but we want to make sure it can be done efficiently


## 2023-03-23 Team Meeting

### Attendees

- Lauren Alexanderson
- Leila Rassi
- Patrick Bateman
- Coulton Bunney
- Robyn Singleton
- Martha Wilkes
- Jonathan Nelson
- Daniel Cloud
- Mark Dewey
- Jenny Wang
- Kristen McConnell
- Mikki Northuis
- Sara Smith
- Stephen Barrs
- Ryan Thurlwell
- Marci McGuire

### Updates

- Robyn 
	- We've done four research sessions - CodePen prototype is working
	- Liaising with Perigian to find some additional blind/low vision
- Lauren
	- Addressing concern with Google Analytics in auth space
	- According to Federal CIO, we are expected to use GA and have to be careful we are stripping any PII
	- Do all due diligence to instrument in a way that will not pass along private info
	- Last minute accessibility stuff 
- Martha
	- Talking with Center of Practice; they are worried about SM, team  to have a swarm session to really exercise SM from an accessibility perspective
- Coulton
	- SM accessibility
	- Blue Button vs. VA Health Summary
	- MR accessibility
- Jonathan
	- Research sessions
	- Preferences - meeting tomorrow
- Daniel
	- CodePen
	- Reviewing content PRs
	- Deep links
- Patrick
	- Deep links
	- Waiting on Theresa to confirm she sent info to Contact Center
	- Landing page notifications
- Mark
	- SM accessibility
	- Supporting landing
- Jenny
	- Working on medications work
	- Getting convo guides ready; working with Kay
	- Research starts next week
- Kristen
	- After visit summary
	- Talked through appointment phases with Kay
	- Will be in preferences call tomorrow
- Leila
	- SM accessibility
	- Keeping launch on time for Phase 0
	- Looking ahead to get processes in place for launches
- Mikki
	- Phased rollout plan
	- Walked through appointments again this week
	- Identified need for messaging in each of the tools come Phase 2 with a link to the Cerner Portal
	- Pulled Marci into Phased Mural and spreadsheet
	- Walking through SM with several people tomorrow
- Sara
	- Have all the MR intake tickets from Lexi
	- Accessibility testing with me tomorrow
	- Swarm 
- Stephen
	- Help out using Prod account to test
	- Push on getting access to Cerner appointments
	- Working with 
- Ryan
	- Notifications 
	- Secure messages
- Marci
	- Sent updated landing page documentation to Contact Center
	- Sent to Theresa, Carnetta, Patti, Gwen, Treva this morning; waiting for confirmation that Theresa is sending to Clinical Contact Centers
	- Fleshing out rollout beyond IA

### Other Topics

- Patrick
	- Idea:  when you're online and you get a notification - he believes that they are not configurable.  You can dismiss, but can't make it go away permanently
	- Ryan - how is this different from mobile?  Patrick - we're not sending those out (pull vs push)
		- Mikki seconds the mention of the word "notifications" and we need to handle similarly to the mobile team
	- Mikki - do we have an inventory of what those notifications will be?
		- Appointments
		- Cancelled appts
		- Refills
		- [Not a complete list yet]
	- Patrick - "onscreen reminder" is not a notification
	- We may do design and research spring/summer, maybe implement in the fall
	- Coulton - it's directing you to the part of the app that most needs your attention.  Do appointments fall into the list of "what's new in your record"
	- Ryan - if you get an email, would that also be in onscreen notifications
	- If someone is on the portal should it show there too? Consensus is yes. All avenues should be consistent
	- Patrick - there is a distinction between the notifications that annoy us vs. an onscreen reminder.  To Coulton's point - should it be used in a different way?
	- Should we have onscreen reminders for each section?  Initially it will be just one section
	- Ryan - from an MVP, it's fine to be super rigid, that's fine.  If they are helpful, stitching them into other things that Veterans use (push vs. pull) - it should be unified data, but for MVP that's fine.
- Lauren - onboarding Craig and other new people
	- Helping new people learn about this new project and not be disruptive
- Marci
	- I want to make sure we're being respectful of our stakeholders in not only how we interact with them but also in the way that we document our findings. 
	- Let's make sure we are taking a "seek to learn" approach while doing discovery and documenting our findings.  
	- Our default should be to assume good intent when we are learning the rationale behind the way something works.   
	- If we're interviewing someone who doesn't remember exactly why something is the way it is, it's fine to document that more discovery is needed to understand, but we shouldn't assume that nobody knows the reasoning behind it. 
	- If that particular person isn't sure, it's OK to ask them if they are aware of any documentation, or if there's someone else who may recall. 
	- At the end of the day, we are all on the same team.
- Landing Page
	- Submit to 508 Office - Marci (in Staging)
	- Coulton - testing SM will be a little more complex; setting up users.  Leila already has it on the list.


## 2023-03-09 Health Apartment Team Meeting


### Updates

- Lauren
	- Good meetings, insights into some EHRM ideas
	- Plans of attack for each of the apps; better way forward
- Jonathan
	- Went over preference research yesterday
	- Will be attending pilot session t his afternoon
- Robyn
	- Data collection begin next Wed
	- Four folks have screen readers
	- Will try to have Angela Fowler there to help troubleshoot
	- Piloting with Angela today
	- Will confirm
- Joni
	- Still catching up and getting up to speed
	- Transition meeting with Mikki is Tuesday
- Patrick
	- Code got merged in
	- Phases doc finalized and shared out with leadership
	- Set up to do call
	- Kickoff for AVS tomorrow
- Daniel
	- Put up a draft PR for newsletter sign up
	- Looking into making sure that it will actually work
	- Copied from another location; hopefully good to go
	- Can do the two 
- Kay
	- Working on appointment list - may need to convene with Patrick
	- Had a few blockers with getting data in staging
	- Lauren and Kay chatted with Medication
- Sara
	- Worked on landing page QA review
	- Worked with Joel on Staging review questions
	- MHV meetings
- Mikki
	- Meeting with appointments crew tomorrow to talk about phased rollout plan
	- Started working on Medical Records


Research with Cerner Patients

- There is some confusion currently with people who 
- Current recruitment criteria are leaving out Cerner patients
- What do we need to 
- Lauren - people came across the new home page, and even though My VA has been around for a while, and that means nothing to some folks, and they thought we left "Health" off the link.  In modals now, if you're authenticated, they have the option to go to My VA Health for health are, else go to MHV.  
- We have introduced some confusion in the transition period for people who are at My VA Health.  This is more for the landing page wayfinding research and not the home page.  How are we going to get people to My VA Health during the transition?  We don't want to pick where they should go.  We don't need to immediately change anything or do anything with the research, but need to consider the wayfinding
- Patrick - has there been any research with "dual" patients?  That number will grow, so it's not an edge case.  At one point
- Kay - how are we defining a Cerner patient?  If you have Cerner care. It could also mean you did a virtual consult at a Cerner facility five years ago.
- Lauren - that's one of the reason we want to always give people the option.  We don't want to drive you to Cerner if you need MHV stuff.   That was a decision that was made by Charles, Neil, etc. to drive people to MHV


Launch Punch List

- MHV Coordinator briefing
- Danielle and Coulton will meet with the coordinators
- Danielle is sending out email to Coordinators and Champions
- Explainer content for resources page - screen shot for Contact Center doc
	- We won't have that for Staging that is fine
- Outstanding
- Privacy/security review - submitted; probably a non-issue
  Submitted, unknown status
  Usability study
- Content for landing page
  Danielle coordinating
  Resources page
  Draft in preview
  Outstanding PRs
  Explainer text and link #55234
- Nice to haves:
  A11y
- Newsletter sign up #54502
- Datadog custom actions #54506
  Contact center documentation (waiting for explainer text/link)
- HRC
- Clinical contact centers (via Theresa)
1. Done
	- Finalize phases document
	- Staging review
	- Accessibility review
	- MHV Coordinator call briefing scheduling
	- MHV Coordinator/Champion email sent
	- PRs
	- Cerner
	- No facilities
	- Datadog
	- My Health —> My HealtheVet link text
	- Spotlight links


Testing

- In the last day, a change was made so that a user NOT registered a facility will automatically be redirected to the "classic" MHV
- Kay Lawyer suggested using the Judy account - will get the credentials over to Robyn.




Saved Chat Text


14:09:02 From Lauren Alexanderson to Everyone:
	Jonathan: Has that list of folks you’re talking to including Kristen McConnell/Kay Lawyer?
14:09:43 From Jonathan Nelson to Everyone:
	Kay but not Kristen! I can certainly sync with her though.
14:10:43 From Sara Smith to Everyone:
	Sorry, not feeling 100% so keeping camera off, due to coughing. :(
14:12:14 From Robyn Singleton to Everyone:
	Anything you discussed that should inform our convo guide?
14:12:18 From Robyn Singleton to Everyone:
	^Patric
14:13:01 From Patrick to Everyone:
	I went back and forth on this — I feel l like we’re already overburdening this study. But certainly can discuss more here.
14:13:08 From Lauren Alexanderson to Everyone:
	When did you have time to cook up secrets with Ryan?
14:13:11 From Lauren Alexanderson to Everyone:
	;)
14:13:29 From Patrick to Everyone:
	It was a very productive Monday.
14:13:41 From Lauren Alexanderson to Everyone:
	lol
14:14:33 From Robyn Singleton to Everyone:
	Current notifications-related questions: Are there specific statuses or notifications that you would want to see immediately after signing in? (For example, being notified that you have an unread message or need to refill a prescription.)
	
	If yes: What are they?
	If no: Why not?
	Where would you expect that information (the specific statuses or notfications) to pop up?
	
	When you have been notified of changes to VA.gov, where have you received that information?
14:14:47 From Robyn Singleton to Everyone:
	Anything you should suggest changing there?
14:16:44 From Patrick to Everyone:
	Only incredibly minor thing I would suggest changing is the words “pop up” to “appear” (or something similar) in the follow up question. But as far as covering the subject matter, I think this is plenty.
14:16:56 From Robyn Singleton to Everyone:
	Gotcha
14:17:59 From Kay Lawyer to Everyone:
	Will you be defining to the participants what "notifications" mean? Or leave it open and they will tell you?
14:21:03 From Robyn Singleton to Everyone:
	The second - gonna feel out how that word is. Can adapt the guide if people are confused by the question.
14:21:21 From Lauren Alexanderson to Everyone:
	On the last question, I’m wondering if people will think about “changes to va.gov” meaning technical changes, versus "a change to your benefits”
14:21:47 From Robyn Singleton to Everyone:
	Mmm, good point.
14:23:58 From Lauren Alexanderson to Everyone:
	When you have received notifications about your VA benefits in the past, where have you received that information?

## 2023-03-09 Health Apartment Team Meeting

### Updates

- Patrick
	- Shepherding users through Prod testing
	- Writing up phases doc
	- Swirl around launch
  
- Robyn
	- Research plan mostly finished
	- Putting together conversation guide
	- Goal is to get them in by EOD today to have interviews scheduled on the 22nd

- Sara
	- No updates

- Kristin
	- Discussed some data in AVS vs. other 

- Daniel
	- UI tweaks PR merge
	- Looking at access and DataDog

- Mark
	- Working on disabling the new landing page for Cerner patients and getting some DataDog stuff.  
	- A couple of PRs waiting on PW team

- Jonathan
	- Preferences discovery
	- Reviewing Liz's info and doc from Coulton

- Coulton
	- Medical Records - working with ByLight designers, getting ready for design intent and work toward midpoint review

- Mikki
	- Met work Leila and Danielle to finalize the stages for Secure Messaging phases
	- Will share out today
	- Will loop back with the appointments crew to see where things are 

- Jenny
	- Synced with Coulton on Meds 

- Danielle
	- Secure Messaging and Landing page - content on the page and comms for Phase 0
	- Working with Comms team to schedule time to present to MHV coordinators
	- Medical REcords - reviewing content team's questions re: data fields
	- Working with identity team around the broader identity content
	- Prescriptions - starting to look at it from overall content perspective

- Lauren
	- Hand-holding and anxiety maint
	- Preparing for meetings next week
  
- Marci
	- Staging issues
	- Prep for Staging Review

### Discussion Topics

- Patrick
	- Working with Identity team to see if it's possible to know if a user has an active MHV account. 
	- Current state is that it would take someone someplace else if they did not have a MHV account
	- Might be useful to know if the user has a MHV account before we offer them the opportunity to use a tool that they don't know how to use.

#### Staging Review Round up 

- Open items
	- Accessibility tests
	- IA artifacts
	- Content artifacts
	- Mark is working on some toggles
	- PR for the MyHealtheVet

### Launch

- MHV Coordinator briefing
- Danielle and Coulton will meet with the coordinators
- Danielle is sending out email to Coordinators and Champions
- Explainer content for resources page - screen shot for Contact Center doc
	- We won't have that for Staging that is fine

### Other

- In the Spotlight  links -- are we doing that before Staging?  It's in Liferay (MHV's CMS and backend) - they are used as newsletter and unauth content.  Not meant to be evergreen content
- Danielle can reach out to MHV's content person
- Phases doc that Theresa and Treva wanted to see - does Lauren want to spend some 1-1 Lauren time with that?

## 2023-03-02 
Meeting cancelled due to PI Planning.

## 2023-02-24 Health Apartment Team Meeting

### Standup/Updates related to work tracks
- Coulton
	- Working with ByLight Team
	- Trying to get some questions answered re: Health Records
	- Making sure anything needed for landing page is done

- Jonathan
	- Got the downloadable report designs completed
	- Adding rationale to decision log re: MVP functionality of downloadable reports

- Robyn
	- Getting caught up
	- Starting to formulate plan for research

- Leila
	- Met with ByLight team POs, reviewed everything for Secure Messaging Phase 0
	- Piecing together logistics of trusted users; about halfway where they want to be
	- Getting ready for PI planning

- Sara
	- Will be helping with accessibility

- Kristin O
	- IA who will be working on authenticated experience
	- Getting knowledge from Mikki
	- Learning about appointment space

- Daniel
	- Trying to get isolated app info from Platform - issue with CI check script

- Mark
	- Got feature toggle into staging
	- Enabling for this team - let Mark know your email if you want to access it on staging

- Patrick
	- Coordinating on getting scaffolding up
	- Coordinating on here to launch to production

- Stephen
	- Working on check-in, which will eventually be part of this
	- Looked at MHV on Prod for AVS and finally found it

- Kristin M
	- Getting up to speed on AVS
	- Meeting with people at OCTO
	- Looking at plans with Kay for moving appointments

- Marci
	- Updated downloadable reports requirements
	- Created a PI planning Mural and scheduled prep meeting with team yesterday
	- Continuing to add stories for Q2


### Other Topics

- Patrick: 
	- AVS will be delivered outside of the ByLight team working on Medical Records and will likely exist before Medical Records is done, but users will be able to get to it 
- Coulton - made sure the ByLight team didn't need to account that in their PI planning.
- Patrick - Authenticated landing page - Mar 16 staging review?
	- Marci will point Daniel & Mark to the new QA artifact reqs to see if that's feasible.
	- Artifacts have to be completed four business days before staging review (Mar 10)
	- Are there other tasks that there aren't tickets for?  Patrick doesn't think so
	- What tests do we need to run?
	- CAIA - accessibility tickets would go to that team
	- Bryan
- Patrick - can we borrow some trusted users to test the authenticated landing page.  Leila will get with him offline

## Health Portal Home Team Meeting 2023-02-16

### Standup/Updates related to work tracks

- Coulton :
	- Handing off last domains of medical records. BB/Health summary; Demographics and DOD infoG
	- Get BL ready for PI planning
- Patrick
	- Auth LP work -
- Mikki
	- Presented tree test y-day and next week
	- Had some discussions around secondary nav.
	- Planning to pick up the phased rollout mural to clarify what needs to happen in each space
- Stephen
	- Authentication for PHR FHIR API find a way to do this in a way that is performant. How do we get access quicker. what do we have to do longer term
	- Working with Mark on how to engage engineers on this effort and add benefit v/s taking up time, What does success look like.
- Mark
  	- All of what Stephen said
	- Patrick tossed him a dev ticket around ft toggle and restricting users based on identity provider
- Daniel
  	- Scaffolding work on PRs. Last one was merged just a few mins ago.
	- Collecting real links and putting them in
	- Feature flag work

- Jonathan
  	- Working with Coulton on dl report / BB and HS
	- Talking thru that on design sync.
	- Let Jonathan know if LP design work is needed
- Martha
  	- Trying to solve the login.gov accessibility issues
	- VEO is spinning up some research around blinded veterans
	- Accessibility of login at VA has been escalated to CIO
	
- Kristen
  	- I"m new here! Thanks for sending me all the things.
	- Advising Check in team on unified appt experience
	- Learning about VAOS and provider based scheduling
  
- Leila
  	- Looking at plans for the next PI
	- Launching first iteration on navigation
	- Looking forward to meeting new people soon.
  
  ## Other topics
- PL:Feature flag dev convo for home page
- Mark focus on the site level toggle
- Daniel - focus on within my health
- Per link or per section?
- Product level feature toggles, feature level feature toggles
- Stephen: please name the toggles consistently
- Patrick to start a notoriously long thread in slack
  - Phase 0
  - Design is good for phase 0
  - Good to have Sara a11y review interstitial
  - Coulton to get her involved
- Leila to work with comms
- Set up go-no-go
- How might we best use auth / health / un auth to do way finding research?
- what are the most important things that we want to learn in each of these spaces?
- Top priority:
  - Auth experience to look at learning natural behaviors of how visitors come to va.gov to access auth tools and tasks. (bookmark, start on home page, google search, how easy is it to find those things?)
  - Gaining understanding btw home page, health home, health care benefit hub, auth home, mhv on va.gov
  - Robyn to lead that.
  - Work happening on the header of va.gov and design mandates from OMB that Dave Conlon is working on.
  - How does sign in, vs. my va, vs. mhv work together today?
- Unauth state of the patient portal
- Global notifications
- Getting assistive tech research in way finding, get SM and MR


## Health Portal Home Team Meeting 2023-02-02

### Updates

- Jonathan
  - MHV App migration - labs and tests, now on health conditions list

- Coulton
  - Medical records - requirements, briefs, looking at designs
  - Goal is to hand off those designs to ByLight next Wednesday at 1:00 PM

- Ryan
  - Finished Notes mockups
  - Haven't started another, but happy to scrub in on any stragglers

- Martha
   - No updates for this team

- Stephen
  - Digging through repos, met with an MHV API dev to discuss architecture
  - Identified places where we need to flesh out architecture diagrams
  - Also worked on stuff related to Check-in

- Mark
  - Similar to Stephen's update
  - Spike stuff on feature toggles

- Patrick
  - Light gentle cat herding

- Daniel
  - Getting repos updated
  - Looking at static page stuff to get set up to build landing page

- Eric 
  - Working with SM team to debug issues with Vets API and intermittent bugs
  - Setting up new work laptop

- Mikki
  - IA presentation planning
  - Will present to us today
  - Landing page decisions

- Jenny
  - Helping on Medical Records

- Jasmine
  - Organizing documentation

- Marci
  - Wrapping up no-so-brief on downloadable reports (Blue Button and My VA Health Summary)

- Lauren
  - Thanks for updates in yesterdays's meeting
  - "Master Plan" for VA Leadership for this whole effort, including timelines for each phase
  - Prep for meeting with Intermountain

### My Health IA Tree Test Presentation (Mikki)
- 2nd test focused on My Health
- Feedback from Lauren: Mikki - when you give this to broader group beyond us, we may need to explain that sometimes we need to put something in the IA of a tree jack test that may not be in the IA. I can see some folks getting hung up on why we put something in the IA.
- Anything above 70% is considered a pass
- Findings details are in Mikki's slide deck
- Lauren - next piece of this is throwing in a more qualitative way
- Lauren related comments: 
  - Met with Office of Community Care, and there are a lot of medical things that a user may need to download.  Medical Records is a big umbrella.  Do we have Download medical records/download CCB with other things to download.
  - How to disseminate this to the ByLight team - share at a Wed design review meeting so that the stakeholders and ByLight are all there.
  - Question is how to best present it to the stakeholder group who may not be familiar with tree tests
  - We're taking a very different tack with records

### Parking Lot
- How and when do we want to get things rolling for landing page engineering implementation?
  - Patrick can get with Daniel / Mark / Stephen and anyone else interested async
- For Lauren to answer: soft retirement of MHV appointment list via landing page launch, or not?
  - Do the appointment links link to VAOS or to MHV? 
    - Decision - Lauren - this will herald the soft retirement of VAOS


## 2023-01-19 Health Apartment Team Meeting

## Attendees
- Stephen Barrs
- Mikki Northuis
- Eric Voshall
- Danielle Thierry
- Jonathan Nelson
- Lean Bannon
- Martha Wilkes
- Ryan Thurlwell
- Patrick Bateman
- Leila Rassi
- Marci McGuire

## Agenda
Track-specific updates from each team member
  * MHV app migrations
  * Where will health apartment live?
  * Cerner data integration
  * Support Identity changes

Tech chat - OR - Design & Research Strategy Discussion

## Track-Specific Updates
- Lauren
	- New team members from OCTO
	- Migrations
		- Major concern on appointments is having a clear track back to MHV during the transition.  We'll need to design that as part of the plan to shut off the MHV version
		- Records - trying to keep that ball rolling as fast as possible.  Figure out a plan to figure out Low Fi mocks ASAP.   Meeting with Ryan after this meeting.  Once Coulton is back, perhaps Ryan can help. 
	- Where will Health Apt Live
		- That will be the next priority after Medical Records
		- Alicia is scheduling a meeting for Jan 30 or 31 to discuss building the apartment
	- Cerner integration
		- Met with Cerner, and is working with COP (Cory Trim) on how to integrate them. Lauren is working to get access to GH, ZH and limited access to Slack and start to cross walk with them the data we will need from Cerner.
		- Lauren, Stephen, Mark Dewey, Shane Elliot, Leila will be meeting with Intermountain (Gov only meeting)
- Mikki
	- Dec tree tests are closed out.  
	- Looking for time to synthesize
	- Deep dive - will close out soon
- Jonathan
	- MHV migration - met with ByLight team to handoff Immunizations assets
	- Getting organized to dig into Labs & Tests
- Danielle
	- Comms charter & elevator pitch from big meeting - next step is getting folks from other groups joined
	- Putting together a comms & content matrix to clear up any confusion 
	- Working with Carnetta on functionality around unified Terms & Conditions
	- Secure messaging content
	- Patient safety work
	- Shift in approach - where content, IA and accessibility feedback can be obtained at the same time.  Considering combined office hours
- Stephen
	- Digging into VA Profile API to map data there to existing Blue Button demographic info
	- Shared how he is doing the mapping to verify that is what we are looking for.
	- Will do pre-work before Intermountain meeting
- Martha
	- Nothing for this team
	- Working with Danielle on interstitial convo guide
	- Reshuffling folks; concerns about this team not having its own accessibility folks
	- Shared support concern - 5 accessibility people to two. 
- Eric
	- Questions from Lexi & Bobby about PDF functionality
	- Been diving into any PDF generation patterns & examples
	- Reached out to the PHR team about immunization dosage - currently not available via PHR, but doing some digging about if it can be
	- Collect docs to handoff to Daniel
- Leila 
	- Working on setting up infrastructure for Phase 0 on getting feedback
	- Needs to talk with Marci and Jonathan about next designs
	- Housekeeping on meetings
- Leah
	- Meeting strategy
	  
## Other meeting topics
- None

## Action Items
- Marci check to see if Daniel is on this meeting,  if not ask Alicia to add



## 2022-12-15

### Standup/Updates related to work tracks
- Jonathan
	- MHV app migration
		- Coming up with flows for MR experience overall 
	- Taking a shot at a low-fi health history landing page
- Joni
	- IA feedback for Secure Messaging phase 0 --have come up with some short term workarounds that are scalable.  It's in a Google doc but she will share out
- Jenny
	- User flow work for Medical Records
	- Will help out with writing brief for Clinical Notes
- Jasmine
	- Working on comms info from Tue, transferring to the working doc
- Mikki
	- Waiting for Perigean to start sending recruiting emails for tree tests
	- Health Portal IA work
- Leila
	- Looking over research readouts
	- Preparing to present some of the work to the CTO team this afternoon
- Eric
	- Met with Marci and Patrick to prep for readout on Mon; meeting again with Patrick this afternoon
	- Very interesting meeting with Shane Elliot around Pharmacy Dispensary info
		- Were discussing the Lighthouse API and how everyone hates CDW
		- Shane mentioned the Lighthouse Clinical API for real-time data from VistA
		- Dave Mazik earlier said that API was off the table
		- Shane is going to meet with with Dave
		- Authorization mechanism was a blocker, but Shane said that they have an alternative auth mechanism that would work for us
- Robyn
	- Brief for Immunizations
	- Prep for Monday's presentation
- Lauryn
	- App migrations - intersting convo with Neil Meridith
	- Secure Messaging - keeps hearing people saying "January", thought we were doing February.  We need to be sure that they are shooting for February. 
	- Pushing Matt Dingee to work with Lexi to get some feedback from Matt on how to make the components she is created good and able to be added to design system
	- Where the HA will live - been working with Mikki
	- Cerner data integration - BCG meeting on Friday - if you couldn't attend, Lauren can share recording.
	- Teresa, Dr. Joseph, Neil Evans and she are going through all the requirements ever given to Cerner for their patient portal to determine what is still needed, what needs to be addressed since the portal will be around until Oct 2024
	- Identity - trying to keep that ball moving
- Mark
	- Unified appointment app thing
		- Stephen and Mark have been trying to settle on whether we are plugging into the various existing apps or are we going to be building something new that the existing apps will have to plug into.  
		- There are pros/cons to both; just ironing out which looks/feels better right now
- Patrick
	- Erick, Marci and he synced up yesterday to get prepped for tech

### Clarification on Ad Hoc/VAOS roles in integrating appointments into HA
- We are going to build the "shell" auth page.
- What will happen from the front end, once we have the shell, we will have SM, VAOS, MR, it will start to be a place we put stuff. 
- The health apps team plus contract app teams would be responsible for any app changes - URL, left nav, secondary nav, etc.  They are already working n the various systems they need to integrate with.  That back end should eventually talk to Cerner and then add get  your travel submission, after visit summary
- This team will probably play a role in working with Health Apps in saying "this is what we came up with" and they will say,  "we can do this"
- Tree tests with Mikki might be interesting in how Veterans look for paths to old appointments 


### How often do we need/want to sync up with the Mobile team?
- Lauren had a thought - they're going to be a lot of meetings coming out of Tue re
- There's an internal OCTO cross-team meeting.  Rachael and Chris come to that for Mobile and we want to make sure
- Robyn - there are larger ongoing syncs, and then an immediate need to meet about immunizations so we know what they are doing. 
- Would a monthly sync with as-needed check-ins be enough? And we set up more as needed ad-hoc?
- Mikki - they had a bi-weekly half hour stand-up style meeting and synced on functionality, terminology, etc.  it worked pretty 
- Let's have a first meeting and then we'll decide on frequency

### Research goals for second tree test
- Want to explore what are the deeper needs within the structure that we need to think about?
- Have talked about potentially talked about doing a tree test
- What other questions do we need to answer?  
- Already on the list:
	- After visit summary
	- Prescriptions lists (old lists)
	- Health history vs. medical records
	- Vaccine vs. immunization
	- Clinical notes - appt/hosp notes vs lab result notes
	- Clinical note (doctor's notes that he dictates to himself) vs. after visit summary (new dx, new rx, next appointment, insructions)
	- How do we meet up the notes to an appointment.  We might have to do some digging into how we affiliate a clinical note with an appointment
	- Some ideas flagged in generative research
	- Medical supplies - ability on VA.gov to order hearing aid batteries.  Group who organizes those would also like to let Veterans order CPAP machines and supplies, prosthetic socks.  This time likely not to do this, but the big questions is when, and we should plan for this in the future and how that fits into the IA
	- Lauren also recommends we include something around finding past medical records (i.e. the eVault)
	- Any other thoughts, please slack to Mikki
	- We can include questions to be answered in the domain briefs and add the answers when we have them
	- Since we have not yet done a deep dive on this whole Health Apartment and how Veterans think about where things are found
	- Any particular areas we haven't explored 
		- Caregivers and delegates
		- CCDA for sharing
		- What specific uses cases for sharing data
	- Timing on delegates - up to John Rahagi; hopefully before Jan 2024

## Next steps from Tuesday
- Mural board - combine similar items, fill in gaps, get consensus from the stakeholders
- Come up with a strategy of who in this group needs to be in which things and when and Danielle and Jasmine function as one team with Gwen and ??? 
- Lauren had to give a presentation on the roadmap to the Under secretary of health.  Leila and Lauren will probably have to do more presentations. 
- How do we make sure everyone is included, but keep momentum going?
- Do we want EVERYONE on those design review meetings?
- Do we want a separate meeting for folks not already attending?
- Let's compile a list of existing meetings - also check with Bryan - they are going to have separate meeting
	- Start a running dialog of meetings we are going to have
	- Hypothesis of who should be at those
- A document that we can share out in a place where people can comment but not change
	
	
## Senate Veterans Affairs Committee (SVAC) in Congress Records Request for Information
- When a site moves to Cerner, their PAMPI+ data is supposed to move into Millenium, and their eVault (med history, clinical notes) were supposed to move to Healthy Intent.  
- We also thought Veterans would have access to their health history from MHV from Oct 2020 (their rollout date) and prior
- MHV record thing is NOT true.  Unless you took the action of downloading your Blue Button record from ALL time (that action writes to eVault).  If you did not do that, we do not have your health history in MHV any more.  If it has not been moved, then we may not have your health history at all.  
- We need to think about which systems have which data.  We were all under the impression that Cerner had moved all the health history data to Healthy Intent but that did not happen.  
- The action of generating a Blue Button report generates the eVault record.  If they do not do that, we are not allowed to do that on your behalf from a legal and privacy statement.  
- Whatever we do in records we must always have to have a pathway for patients to access their eVault
- ETA on finding out if that data is recoverable?  Cerner is looking into it.  Some Veterans are reporting that Healthy Intent migrated everything correctly, but that is not universally true
- Thing to figure out - for the Veterans who have moved, we will need to have that connection to Healthy Intent anyway because for the past two years, they have been writing clinical notes, etc. in Healthy Intent.



## 2022-12-01 

### Standup/Updates related to work tracks

- MHV app migrations
	- Jonathan - timeline for MR design work
		- How does that line up with bringing in the ByLight team
		- Target of getting most domains built in VA.gov and online by October 2023
		- Me: One struggle is how the APIs may impact the design, and another is how we will do concept testing
			- Timing and October timeline for having Medical Records in VA.gov and possibly Cerner data integrated we want to work backward from that.
			- Do we know what the hard handoff date will be to start building Medical Records?  
			- We have all these applications - and would love to have them in Phase 1 or Phase 2.  Ambitious, but we also have to balance that we are at the stage where everyone is asking about this.
			- Secure messaging is going to go out first 
			- Records and Appointments will have a better chance of Integrating with Cerner data sooner.
			- We can potentially
		- Robyn: While Jonathan and Bobby are - the documentation around the data can be happening
		- Do we have a best guess of when development needs to start for this to be completed by October
	- Robyn - presentations
	- Jasmine - communications plan
- Health apartment live?
		- Jenny - trying to finish the research plan for the IIA tree testing
		- Mikki - research plan for tree test
- Cerner data integration
	- Several meeting coming up with Intermountain
- Support Identity changes
	- Blocked
	- Lauren - they have been in discussion with Shawn Hidenbrook about where the service for the terms & conditions will live.  Originally mobile team owned that, but since we are scaling, it will probably be re-homed.  Will matter less for Phase 0, but will matter for everything else.


## Other Topics

- Appointments
	- VAOS - is transitioning to the new backend service, and new stuff will be added to that including ability to submit travel claims.  Charles W has asked Lauren to start talking to the team where the MHV appointments feature fits into the rollout.  This is a little different.  In this case, Appointments already lives on VA.gov.  At some point, we need to identify the plan for transitioning the MHV appointment features and pointing to the VA.gov appointment.  We probably shouldn't have that discussion now; both appointment teams are not here to defend themselves.  We d
- Leila return
	- Lauren will stay involved and divide and conquer with Leila
	- She's been dealing with a family health emergency
	- First day back will be PI planning
	- She will go to Secure Messaging and Medical Records
		- Help her along, and what she needs to do 
	- Lauren will go to Account Experience
- PI planning
	- Want to make sure we are in sync
- Testing approach for Medical Records domains; related timeline and Perigean contracts considerations
		- We can do as much testing as we want but Lauren will confirm
- API-constrained design (existing API) and design-driven API design (new API) and how each of those scenarios may play out with regard to timeline
- Presentation next Monday
	- Robyn - they were asked to present generative research next Monday.  Yesterday's presentation was nice because it was a more holistic

## 2022-11-21

### Discussion Notes
- Today we will continue with Jonathan's strategy rather than our normal agenda
- VA Profile has a lot of what's in the demographics.  We don't want to have a separate section where people are updating their demographics that is separate from VA Profile
- Check-in workflow - insurance file in VistA, need to talk to those teams about what they already have so we don't duplicate.
- Samara has done a lot of work with the MHV team in the past; mapping the fields MHV Profile has vs. the fields the VA Profile team has.   We would need to coordinate with VA Profile team to get those added.
- MHV Health Information Car is sort of tied into Profile and Insurance.  Per Lauren this definitely needs to be pulled. This need to be in the backlog
- DoD information - don't need to look at DoD team - how much is being pulled into MHV from DoD now?  Per Bobby Bailey, not much
- Point of the Cerner go-live is to give Veterans the "whole of life" picture.  
- Health applications team in OCTO - in order to present Veterans with a holistic past view in the future, we will need to pull that from the same place as VAOS. We also need to explore where that will be shown -- appointments or medical records?  New service VAOS will be pulling from which will be the canonical source of truth
- This year the VAOS team is hyper-focused on appointments for the Health Apartment.  We will need to dovetail with them on what needs to appear on a BB report.
- Dr. Spahn said that it's good for allergies and medications need to show up together
- It's policy on MHV side that we display allergies when we display medications.  
- Doesn't flag prescriptions as something they are allergic to - this might be a nice feature if it flagged a medication that someone had a reaction to
- Can a Veteran remove an allergy they have self-entered?  Bobby believes so.
- Lauren and Eric talked to Dr. Spahn and some others last week and asked them if they would disambiguate a history list from current meds
	- Medication list could be meds you are on
	- Meds in your treatment plan
	- Actionable, fillable, renewable list
	- They talked about the possibility of integrating with retail pharmacies so that that data could be brought in for Community Care info, and possibly even allow you to refill them from VA.gov (stretch goal)
	- We have to understand how many jobs there are to be done, and what can be done in various views.
	- We have to be very clear to disambiguate current/past medications - or I am taking this, I'm not taking this as prescribed, I'm not taking this
	- A memo/note field would be helpful for Veterans to note what they took a particular medication for
	- Vitals are mainly self-entered today.  Lauren - would love to pull that from the visit if we can
	- On Pharmacy side of MHV have share vitals sent to. PGHD to keep track of what's shared - we're not sure if that's part but Shane Elliot and Rob Dirkin would know, as well if we can't get that directly 
	- Vitals could be an opportunity to in
	- Neil Evans said that the way VistA is set up, bits of data are not associated with a particular appointment
	- Bobby will look at an after-visit summary
	- Let's look at VistA before we start exploring other sources. If it's coming 

- Initially we said that we would go domain by domain and learn from the Mobile app team, and Jonathan wants to confirm that approach still makes sense 
- Lauren - hypotheis is that we probably do want to make sure we have all the domains covered, but she's coming back to the grouping that the Veterans came up with as well as the jobs to be done by some of those groupings.  Part of her would like to return to some of that data to help information what we group, and how we structure conceptual wire frames
- Other thoughts - Marci - talked with Jonathan on Friday and think that the domains are going to be the domains regardless of how we group them, and we can be figuring out what a given domain looks like concurrently with figuring out how they will hook into each other
- Lab and test results correspond  to - I'm checking to stay on top of my health care.  Not necessarily a to-do except to follow up 
- The whole section around demographics - do we (Apt team) have to even develop that at all - may already be covered.  Do we point them over there, or do we pull in a view?
- Are these view only? Our hypothesis is that they would want to view vs. just download
- Bobby - have we done a content inventory?  Jen has.  Under each domain, she did.  Has she identified the overlaps? Not yet, but there are overlaps.  
- Is there an exercise where go through every domain and look at the PHI, the API, map Cerner data, then we can decide if we want to show it in multiple places.
- We do want to be thinking about the webbing between those things
- Lauren is a little wary of going to our design meeting until we get out of the "squiggle" part of our discovery.  We want to come to that presentation with some very clear "what's next".  
- We certainly don't want to do that right before Thanksgiving. 
- We need to show that we have very clear findings from the interviews, data mapping
- If we go into the presentation where we know all that we will have a much more seamless way forward
- We need to have enough info to go into PI planning with what we're doing.  Next week could be a good solid week of work
- Maybe we create a super-short research plan then divide and conquer


### Chat Transcript

- Lexi Wunder to Everyone (2:10 PM)The MHV Health Information Card is sort of tied into Profile and Insurance. Do we think this needs to be considered here too?
- Lauren Alexanderson to Everyone (2:11 PM)
	- Yes definitely should be pulled
	- Opportunity for redesign
	- Including understanding use of the health information card
	- (I def see the value of it)
- Lauren Alexanderson to Everyone (2:19 PM)
- Spah
- *spahn
- Allergies / Meds are the place where I think PGHD gets funky.
- Lexi Wunder to Everyone (2:23 PM)
	- Self-entered allergies show up on the Health Info Card (I don’t believe clinician-entered allergies show up).
- Jenny Wang to Everyone (2:23 PM)
	- Bobby, which policy is it?
- Lauren Alexanderson to Everyone (2:23 PM)
	- That seems risky too though - if only some of your allergies show
	- Are we only interested in medication history or medications?
	- 
- Danielle Thierry to Everyone (2:30 PM)
	- I have to drop for my 2:30. Thanks!
- Lauren Alexanderson to Everyone (2:30 PM)
	- Thanks danielle
	- Would love to pull that from the visit if we can
- Jenny Wang to Everyone (2:36 PM)
	- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/assets/AVS-Sample-White-Redacted.pdf
	- this is a sample of AVS
	- Vitals are on there
- Jonathan Nelson to Everyone (2:36 PM)
	- Thanks, Jenny
- Bobby Bailey to Everyone (2:37 PM)
	- Awesome Jenny! Yes, I just asked and we do have vitals in AVS.
- Lauren Alexanderson to Everyone (2:37 PM)
	- Nicccce
	- Lauren Alexanderson to Everyone (2:39 PM)
		- “What is included in this domain and what isn’t”
	- Bobby Bailey to Everyone (2:39 PM)
		- I am assuming that data is the same that BB is pulling.
	- Lauren Alexanderson to Everyone (2:39 PM)
		- Esp for mvp


## 2022-11-17
- Medical Records research findings (Robyn)
- Pharmacy integrations we discussed with Eric Spahn (and the Amazon Alexa play)

### Standup

Eric
- Medical records API meetings

Marci
- Rollout gates
- User interviews
- Attending/monitoring API progress

Jonathan
- Looked over Robin's Readout

Mikki
- Refining IA 
- Working w/Jenny on research plan
- Labeling with Danielle
- Meeting on integrated appointment experience
- Design working coming up from the MyHealth and Health Hub side

Robyn
- Analying data and prepping for research readout
- OOO yesterday

Lauren
- Identity - outstanding question to validate whether the SSO service and T&C is actually a blocker for Phase 0 watch
- Cerner data integration - more meetings upcoming with Intermountain
- Good meetings this week with Eric Spahn and VetText team who have done some good integrations with pharmacy dispensaries 
- Lots of discussions about where the HA will live; tree tests

Jasmine
- Continuing on Communication plan

Martha
- Really nice review of the current MHV from Tiffany

Bobby - No updates

Leah
- Pitching in a little bit between Coulton & Leila

### Parking lot 
Robyn
- Wanted to confirm that Alicia will schedule the 
- Does she need to schedule the review with other OCTO teams? No, but she should reach out to the people Lauren listed eaelier.  Alicia will schedule. 
- Lauren will schedule the OCTO OCC Meeting.

Eric
- Any update on Healthy Intent people we can talk to ?  Not yet, but Lauren will follow up
- Did Lauren see the email about CDW? Yes, she's not surprised.  Curious how the convo w/Dave will go.  We'll figure out the 
- Did Eric go to meeting with Paras and team? Yes.  Are dispensaries a possible data source? Eric needs to find out more; convo wasn't focused on that.  Eric to follow up.  Problem is that the VA may prescribe an brand name and Veteran gets generic, but they dont get that data back.  We may be able ot integrate with Cerner's pharmacy package to get that level of data.  Paras said they have an integration with the dispensaries already for Vet-Text.  In theory, dispensary data could be a really good source of Cerner and VA medication data.

### Generative research readout - Robyn Singleton
#### High level findings
- Purpose was to understand how participants use or would like to use their personal health records
- How they use terminology for reports found on MHV
- Terms participants use for medical records
- 24 sessions scheduled, 15 conducted
- Reviewed Mural notes and grouped liked items
- Participants did a reviewed card sort
- Robyn reviewed the transcripts and notes
- Identified recurring patterns and outliers
- Wrote notes
- Drew from multiple interviews to create composite narratives (use cases).  Not all-encompassing - purpose is to provide storied context.
- Not all results are being presented today. Use cases and categories only.  Full report will be fleshed out tomorrow.  [PDF of this presentation](https://dsva.slack.com/files/U038DEY7X3J/F04BCPY2ACD/medical_records_generative_research__use_cases___conceptual_categories.pdf) is in the medical records Slack channel. 
- Look at the results as a way of thinking of medical records, not how everyone thinks about medical records.
- Please see [the PDF](https://dsva.slack.com/files/U038DEY7X3J/F04BCPY2ACD/medical_records_generative_research__use_cases___conceptual_categories.pdf) and full report for details.  
- There is a [related Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1668528750423/ac42daff994a721566d92e639e606d8ddc9b5fc9?sender=u71ad98f94f5263595f9a4390) that shows the way information was anchored

#### Questions, Comments about findings
- A lot of the way MHV supplies data is via download - was there interest in being able to just view?  Yes, there was.  They described viewing, even if the PDF opens in another tab.  Folks who didn't want to download the whole BB report would sometimes screen shot and create their own "custom" view
- Did anything invalidate the domain by domain approach and job to be done approach?  The way we talked about it, evaluating and clustering domains makes sense.  Going one by one by one probably does not make sense.  Jonathan is going to facilitate the strategy session tomorrow.
- What is Robyn's take on participants who wanted to include medications in "About me". Did they mention current medications or everything?  Older Veterans wanted to see all meds.  Younger were more interested in what was immediately relevant.  It would be interested to see 
- Yeah I remember a p mentioning that they referenced that old list to see the name of something they used to take but no longer, but wanted to bring up to their provider b/c they liked the old one better or something
- Me to Everyone (2:46 PM)
- Lauren - I remember a similar comment in one I attended
- They said if there was a med that actually worked for them, they wanted to ask for it again
- Lauren Alexanderson to Everyone (2:46 PM)
- I’d def recommend elevating that “time’ element in here
- People wanted information segmented by condition.  Some were segmented by hospital visit vs. popping in for an hour.
- Anything surprising?  Hadn't really thought about medical records this deeply. but probably the way people thought about "About Me"
- Demographics or insurance info would be a place outside of the apartment
- The other thing we need to connect dots on this and the unified apartment experience (make, view, cancel, check in, get beneficiary travel, after visit summary).  We'e going to get in a space where medical records and appointments overlap.
- Anything that contradicted the proposed IA options? Robyn would have to re-look at them.   Jonathan agreed that logically they made sense.  Maybe where there's an opportunity is the differences - would people look at medical records. 
- Marci mentioned that she talked to Jonathan about whether people would think to look for info about a current condition in Medical History
- People mostly talked about sorting things in reverse chronological order (newest first)
- Samara has talked about having a notification center and Lauren has wondered if we expand that from new secure message or new lab result - could we think about it as an action center, maybe group things by what they want to take action on.

## 2022-11-14 

### Standup
- Eric
	- Met with PMB team this morning who very strongly recommended against using CDW/Lighthouse.
	- Setting up a meeting with David Mazik
- Marci
	- Attended meeting with Lauren & Eric to talk to pharmacy SMEs about CDW/Lighthouse data
	- Attended two Secure Messaging research sessions
	- Mikki
		- Got a rundown on everything from Coulton
		- Will be working with Jenny on IA stuff
	- Jonathan
		- Robyn and Jonathan are synching on the strategy workshop later this week
	- Robyn
		- Working on research synthesis
		- Starting writing up results in GitHub
		- Out on Wednesday
	- Lauren
		- Leila is here this week, off next week, here again
		- We will ease her into the work
		- Next ByLight planning is Dec 6-8
		- We will probably want to divide and conquer on that
		- Had a very fortuitous meeting with PBM about CDW data
		- There is a discussion about forcing a decision on how to get data; has to be a better way
		- Dec 13 there will be an OCTO/OCC Apartment Strategy meeting.  Ro Weaver has set the agenda and 
		- I got the OK to join in DC.
	- Danielle
		-  Mostly covered by Mikki
		- Continuing to look into handling content/working with Content team on Secure 

- Mobile App has a study going on
- New product manager Rachel Hahn - will be back in the spring to take over the mobile app
- Make sure we are syncing up.  Once we launch secure messaging with the API that support threading, making sure they are aware and determine when to switch over.

### Quick update to bring Leila up to speed
- Secure messaging update - they are doing another usability study to make sure the patterns and flows make sense to users, content and styling of the content
- API for secure messaging is being built to support message threading
- Eric has seen a few PRs for secure messaging, folder retrieval.  
- Medical Records update
	- Robyn has been working with Jonathan on generative research
	- Jenny and Coulton did a lot of internal interviews 
	- Mikki - trying to answer the question of where the Health Apartment lives on VA.gov
- Danielle: Robyn and Jonathan - we have "content briefs" for different topics to help guide teams who are working across products/channels on a similar topic. I'd love to connect you with on your research findings to help inform one on medical records.

### Backlog grooming
- Issue for the strategy session workshop - Robyn and Jonathan
- Leading up to the new PI plan - fairly soon - what we want to put in to make sure it's captured for Records and Access stuff for the next PI.
- Add issue under MyHealth IA 
	- Tree test
	- Mikki and Jenny will be working on that

### Other topics
- Dec 13 meeting
- VIA/VDIF All the data things discussion

## 2022-11-10 

- Issues assigned to Coulton need to be re-assigned. 

### Questions for Patrick:

- Is it true that users need to accept T&C if they are not identity verified - are we showing them anything for which they need to accept T&C?
	- There's been at least six different email threads about T&C and sign in
	- Carnetta was saying that  her concern that there is a need for us to log a T&C if they have a type of account that is not identify verified.
	- Patrick - he agrees it's confusing.  What we had in the past was only shown to users if they were identity verified.  T&C was the pre-req to creating an account.  
	- T&C is a pre-req to creating an account and we only create accounts for identity verified accounts.
	- You can have an LOA1 account, but you can only save in progress forms; you can't see any health data.
	- Patrick agrees that it's worth investigating Carnetta's concern
	- Phase 0 is going to be a known friend of the band.  This is probably not a hangup for Feb.
	- What thing is the unverified user going to do that requires T&C??
- Cerner Healthy Intent concerns
	- Third possible option for data
	- Thoughts, perceptions of risk
	- Lauren is working on getting the right people for us to talk with
	- Premise is that in theory, ALL Veteran data was sent over to Healty Intent.  It's not just the sites.  There should be a copy of everything. 
	- Can we treat Healthy Intent like CDW effectively at this point, and how complete is it to his knowledge
	- We don't know if the data is regularly updated
	- It might be worth a follow up conversation with Stephania Griffin - she mentioned some kind of eVault data that is NOT available in the Cerner portal -- what data is not available and can that cause some legal concerns that we're not 
	- Lauren doesn't think the evault data is part of the Cerner data.
	- Charles would like to know the pros/cons of Cerner.  Oracle's APIs are not as performant as we'd hoped.
- Summary with the PHR team
	- Eric asked for LOE to FHIR-ize 
	- Sounded like, boiled down, they can provide the data in a way that looks like FHIR but does not strictly conform to the FHIR spec
	- One concern was the immunization string vs. code
	- When they pull an update, they wipe and rewrite, so they can't reliably link an encounter with a doctor and an immunization because the unique IDs would change each time with each refresh
	- Concerns about linking practitioner data - there are required fields in FHIR that they don't have
	- They can get us a FHIR like format for display
	- Data model represents the bare minimum to display this information to the user
	- Search but not read, write, modify
	- Are the limitations based on their LOE or the data itself? 
	- Mobile team also had issues with the immunization issues -- trying to parse out the fields
	- There is Blue Button data that is not in Lighthouse
	- Lighthouse is adding data on a need basis.  Stuff that could be available, other things may be available in CDW 
	- If Lighthouse can't/won't support some fields and PHR gets put into Cerner, where do we get the data that Cerner doesn't support?
	- Does the end result need to be a combination of things?  Probably.  
	- Question that keeps coming up for Lauren is do we need to use Lighthouse for this set of data because it will eventually combine both things, and we use PHR for eVault and notes? 
	- We have a lot of opportunity with the Intermountain integration and they have solved a lot of problems we need to solve. If there is anything that Cerner has done for Intermountain that we can use.
	- Lauren assumes they have a strategy for how they are handling clinical notes.
- Changes the identity team has made to the identity workflow
	- When we integrated SSOE, the benefit was you go to VA.gov and you're already logged in.  They realized there wasn't much sense in using the old user API
	- If users don't already have an MHV account, they would send them to MHV. 
	- The code for the T&C is suppressed if the user signs in with SSOE, but now the identify team has been running day long alternate sign in service in Prod.   Users are being presented with 2-3 year old terms & conditions
	- When we get to the point where we want to intentionally do account creation, that old code won't be useful anyway.
	- The things to do:
		- Clarify what Carnetta's asking for
		- Eric & Patrick can work on an FE PR
		- They will coordinate with the identity to so they can review the changes
		- In Carnetta''s absence who else can we talk to?  Haritha perhaps.  Patrick will look.
- Martha wants us to keep performance on our radar.  We know one API takes 30 seconds to run.  Once the data is in eVault retrieving and rendering would be 
- Lighthouse sounds more promising to Patrick

### Misc discussion
- GitHub - Lauren believes that now we have to use  VA email - we believe it has to be verified. 

- Healthy Intent - is there anyone else we can reach out to?

- Intermountain - Lauren Petula
	- We are basically going to be doing what Intermountain is doing.  Laura is the person we have to work through to identify who we need to talk to in the Healthy Intent.

- Research readout - We will probably have findings that impact the IA.  We need to work together to integrate that into the IA

Outputs: readout, strategy session, documenting that includes the problematic terms, etc. that can be circulating


### Action Items
Take a stab at --
- Checklist for each phase at a pretty detailed level
  - User flows through the application
  - User  can go from MHV to SM, etc.
  - Technically true
  - design true
  - Research
  - Talked with the coordinators (training)
  - What level of communication has been done at VA
  - This would be in addition to the collaboration cycle

<hr>

## 2022-11-07

- Coulton and Jenny just met about the interviews and synthesizing the information
  - Plan is to divide up the notes and reach out to Lexi, Bobby, and Arienne
- Jasmine 
  - Had alignment meeting today; Coulton got to talk about medical records
- Martha
  - How soon can someone start looking at that from an accessibility person
  - We have shared service people


<hr>

## 2022-11-03

Agenda:


2:00 - 2:15 - Standup
  * What did you complete since last standup?
- Coulton - SM testing
  * What are you working on today?
  * Any blockers?

2:15 - 2:30 Track-specific updates from each team member
  * MHV app migrations
- 5 completed interviews, only one no-show
- Did some prelim early day patterns - can
- Medical Records interviews
- Organize a communication strategy
  * Where will health apartment live?  
	- Got off a good call; Mikki has put together a potential IA
	- Goal is by next Tue to come up with another tree that can be tested
  * Cerner data integration
- Meeting with some ByLight folks getting a LOE to convert API to FHIR focusing on immunizations first
- Been going through the Lighthouse health API data with the domains Lichelle sent over
- Mike Moyer put out a PR for secure messaging
- Memo was signed last night so it's "for real real" now
	- Finalizing a list of people who will be voluntold to attend a weekly meeting with OEHIM and defining requirements for a task order
		- Will also include two people from DocMeet 360 who know how to Cerner integrations
  * Support Identity changes
- Danielle - has been working on identity related content for other teams, talking about continuing to hone the language on the count to use.
- Getting to a good place with single T&C.  Neal and Charles just need to approve.  Working with John Rahagi on the sign up service


2:30 - 3:00 (we’ll decide week to week as topics arise)
- Leila starting on the 14th
- Jenny's work - prototypes
- Coverage plan aspect  while Coulton is out; flesh out offline
	- Providing support on Medical Records - IA work and Pharmacy discovery work which may be able to wait
	- Would be helpful to understand what is the next thing coming up in each bucket and how we are staffing those things
	- He's most worried about - what it looks like after Medical Records research is done
	- Doing some of the IA testing with Medical Records
	- Pharmacy research -should we finalize the research plan now?
	- Lauren's concerns
		- When he talked to Eric Sphan, we hypothesized that there's going to need to be a very close relationship, or the same product or affiliated in some way. 
		- When we start on the Medications for Medical Records we also need to start on the Pharmacy
	- Coulton doesn't think you can talk and work with Dr. Spahn twice; we just need to think of it as one thing
		- Do we push off Medical Records to the last domain?  Lauren thinks so
			- In a similar vein, past appointments also become part of your medical records.
	- Robyn - we've been batting around different ways to move forward
		- Jonathan - how we've been talking about it:
			- Can we create a story around what the Veteran needs to do within the domains
				- Even if we do it domain by domain, the initial concepts have to be more holistic
			- Robyn and Jonathan are going to sync up and dig in a little more
		- Robyn
			- We have 13 domains, and those don't really map onto what people are trying do 
			- How do those domains cluster
			- Having that organized in a certain way
			- Identify use cases - how people want to use their medical records
			- Concrete steps
				- Start with the lowest-hanging fruit cluster of ideas
				- We're starting to understand the data related to what they are trying to do
	- Summary:
		- One of the leading hypotheses is that people aren't thinking about "I want to get my pathology results"
			- As a user I want to show someone that I'm vaccinated
			- As a patient changing health care provider, I want to download my data to share with that new provider
			- As a person with a health condition, I want to see my latest labs and care plans
		- How do the use cases affect  the design work?
			- We aren't going to take a perfectly domain by domain approach
				- Lab & pathology & radiology results
				- Desired output by end of December?
				- Outcome-driven design
				- You've designed an experience to allow users 
				- Cross-linking
		- Lauren doesn't want it to feel like we're handing it off.  We want them to understand as much as we can this shift in thinking.
		- Handoff/transition docs
			- User flows
			- Wireframes
			- Screen designs
			- Prototype
			- Front-end spec
				- This field gets data from x and does y and sends data to z
			- Architecture hypotheses
				- The sooner we can bring the ByLight team, it would be a good thing
				- Let them be part of the "squiggle"
			- As ByLight is putting the thing together, we need to have a set of tasks that need to be completed
				- If they want to change things, we're not arguing about pixels, we're arguing about how the change better accomplish the goal
			- We need to create a set of use cases and a set of lo fi/mocks/data/architecture to support
				- How the data comes in
				- At that point we would feel  good getting them involved
			- What is some of the work that goes into that outcome 
			- That will feed back into the IA for the health apartment
			- Output of the work is not hi-fidelity.  
				- They don't want to be doing spec work
				- The prototype testing has created some confusion in what the ByLight team can/can't change
		- Lauren still doesn't want us to shy away from continuous research, especially as it relates the groupings and IA
- Can I take over stakeholder interviews/requirements?
- Prelim findings for SM
- Early days


### Chat

Lauren Alexanderson to Everyone (2:12 PM) <br>
Qq - any adjustments to how we are doing the notes there? I looked at the mural earlier and realized I dumped a bunch of tickets in there.<br>
Relative to other sessions<br>
Robyn Singleton to Everyone (2:12 PM)<br>
No worries! I’m going to start organizing them as we go - so no worries if things are looking a little disorganized. For the most part, it seems like folks have been organizing their stickies under the larger categories<br>
Eric Voshall to Everyone (2:12 PM)<br>
forgot to mention: i am also working on getting a meeting scheduled with Dr Spahn to go over his concerns with CDW/Medications/Lighthouse and am also trying to get the MHV test user login issues resolved<br>
Lauren Alexanderson to Everyone (2:13 PM)<br>
Yeah I think I did that, but maybe too much?<br>
Robyn Singleton to Everyone (2:13 PM)<br>
It’s okay :)<br>
Mikki Northuis to Everyone (2:25 PM)<br>
brb<br>
Lauren Alexanderson to Everyone (2:26 PM)<br>
You’re reading my mind<br>
Coulton to Everyone (2:31 PM)<br>
I'll be out for 10 weeks<br>
Me to Everyone (2:31 PM)<br>
Thx Coulton!<br>
Danielle Thierry to Everyone (2:32 PM)<br>
I have to jump off for another meeting.<br>
Me to Everyone (2:32 PM)<br>
Thx Danielle!<br>
Lauren Alexanderson to Everyone (2:32 PM)<br>
Thanks Danielle<br>
And when things show up<br>
i.e. 72 hours vs more than that<br>
Me to Everyone (2:37 PM)<br>
Lauren 100%<br>
Eric Voshall to Everyone (2:37 PM)<br>
“idea-batting-around” has an undeniable charm to it<br>
Lauren Alexanderson to Everyone (2:39 PM)<br>
And in theory we have some architectural hypothesis of how we data-deliver on that outcome<br>
(Since we’re making up words/phrases)<br>
Jenny Wang to Everyone (2:40 PM)<br>
Hmm, then I wonder what the generative research will be like for each domain (the original plan) since everything overlap<br>
Jonathan Nelson to Everyone (2:43 PM)<br>
That makes sense, Lauren<br>
Lauren Alexanderson to Everyone (2:45 PM)<br>
So if we got to a place where we have a hypothesis of what the tasks are (and possibly the groupings)<br>
Robyn Singleton to Everyone (2:45 PM)<br>
I think that’s very doable<br>
Jonathan Nelson to Everyone (2:45 PM)<br>
Well said, Coulton<br>
Lauren Alexanderson to Everyone (2:45 PM)<br>
And some lo fi mocks / data architecture to support it<br>
Lauren Alexanderson to Everyone (2:53 PM)<br>
Which may cause us to shift thinking about unauthorized tools pages<br>
Lauren Alexanderson to Everyone (2:56 PM)<br>
Has anyone brought up community care so far? I have been on one to date and it didn’t come up for them<br>
Jonathan Nelson to Everyone (2:56 PM)<br>
And how the “past” condition can become “current” conditions again<br>
Lauren Alexanderson to Everyone (2:56 PM)<br>
I wonder if community care data “breaks” any of these groupings (or not)<br>
Coulton to Everyone (2:58 PM)<br>
this one about a category of information that is asked about at every single visit. (Vitals, Demographics, allergies) is interesting to me.<br>
Lauren Alexanderson to Everyone (3:00 PM)<br>
On the one call I was on the person only gets care in va so that p seemed to assume that everything was shared across all other systems (which is sometimes true and sometimes not)<br>

<hr>

## 2022-10-31

- Eric is meeting with Adam Foster at Lighthouse later
- Also got a document from Lichelle 
- 
- Jenny is doing Medical/Pharmacy research
- Robyn had first interview today
- Danielle - no updates; recovering from being sick.  Mikki and Danielle went through next steps doc & 
- Mikki & Danielle went through next steps and met with Lauren
- Jasmine - no big updates; just working on things in ZenHub
- Coulton - thinking about potential IA; sitting in on a ton of interviews
- Jonathan - Taking notes, facilitating at least one session tomorrow
- Robyn - https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/2022-10-generative-research-interviews
- Lauren - Lauren and Coulton had a good call with Patty re: Triage work.  Have we already gotten the Mural.  
- Mikki pulled together some next step notes.  Mikki will give those to me so we can start adding them to sprints. 
	- Mikki went through the big sections and order of operations
	- They bucketed out big items
	- Things highlighted with asterisks are top priorities.  The numbers don't necessarily indicate priority order
- Lauren - getting all of this added into our sprint planning and backlog
	- Teams that are building out the apps are MHV
	- We will be laying the foundation
	- To make the maximum use of Coulton's time, it will be Mikki, Coulton, Danielle, Jenny on High/Mid level planning and strategy noodling.  
	- They will put together the bones of a tree test.  Robyn's priority will be medical records, but advise/support on the formulation  that tree test, also help Jenny set up a tree test and get that feedback. 
	- Concurrent we should revisit what we have for the MyHealth home page so we can evaluate the entry points - what are all the different ways someone could find their way into the HA from an unauth or auth state.
	- Some of what Meg did may still be valid, but if not, we want to be sure we aren't putting anything invalid in front of users
	- Best-guess timeline at this point. 
	- Lauren is hoping that #1 can be done as much as possible over the next two weeks
	- #2 - See what we can get done with user flows and entry points, would like to target December for #3
- Eric - sent a message to Barry sometime last week to get clarification on what he thinks the turnound time for introducing a FIER interface,  Suggested reaching out to Boomer, Dave Rollins to talk about getting something added to PI to exploring that.
	- Is that something Eric should do?  We should let Bresha and Teresa know about it and we reach out to the ByLight owners. Bresha probably won't care.  Lauren and Coulton meet with them tomorrow and can put that in the agenda then agenda 

### Action items
- Eric will send me the info from Lighthouse and Lichelle; Marci will use that as a basis for a comparison matrix

<br>

## 2022-10-27

Track-specific updates from each team member

  *   MHV app migrations
- Eric, Robyn, 

  *   Where will health apartment live?
- Mikki and Coulton and Lauren are meeting to discuss what they came up with last week on next steps for IA and Design Research

  *   Cerner data integration
- Eric - did some Cerner work.  Lighthouse is integrating Cerner, but they don't have a complete data set. 
- They were thinking that PHR makes the most sense right now from a continuity standpoint, but that brings in the issue of the Cerner integration - who will do that  
- We should absolutely assume we use FHIR standard
	- We should meet with Patrick, Andy Ficther with Lighthouse, Barry Egbert and do the pros/cons
	- Lauren thinks that it might be a huge lift for PHR
	- We may make a decision domain by domain
- Discussion 

  *   Support Identity changes

5 second polling approach - something Eric discovered

Coulton set in on  a meeting that Anne with ByLight put together for the triage group naming conventions - there's a Mural board for that.

Coulton has started to look ahead on Pharmacy discovery; trying to get a plan together before he goes on leave Nov 15

Jenny has been working on Pharmacy & Medication 

There's discussions going on in the background about KPIs for Secure Messaging.  We may need to have more robust KPIs than they do. 

Strategically, there's an intersting question about expanding Lighthouse and make that the source of truth, and PHR, which is also not a source of truth.
- Generally, Lighthouse is not intended to be a program that builds APIs; they are more of a gateway.
- Does Lighthouse even want to own the API long-term
- Ultimate home for data should probably be in the EHR systems
- Probably value to having an API that creates data for the purposes of the patient portal, and it's fed by those 
- Lighthouse has a gateway using Kong
- For scheduling, they call a service in vetsapi, and that can connect to the other systems and creates a single endpoint
- Do we need to copy/paste the scheduling pattern for the other applications in the portal, or do we take a different approach

- Action items
	- Jonathan has a design decisions - is it linked in the main decision log?
	- Coordinate a technical discussion around the API comparison
		- What is the lift for each to change 
		- Prescriptions - get data from CDW, but they are doing their processing, hasn't 
		- Compare/Contrast about what might be the best data source for each domain
		- Coulton is most concerned about Medications
		- Also, it could be helpful to learn about the lighthouse clinical health API as a source for medications
		- We will still need PHR/Lighthouse to access VistA
	- Lauren has heard rumors that there was an effort to try to do a big migration of health history data into Cerner so you have all their history, even if you don't have their current info.  Most updated version would be in VistA, but past stuff would be in Cerner.  In that case, Cerner could be an authoritative data source for some things. 
	- For scheduling, they call a service in vetsapi, and that can connect to the other systems and creates a single endpoint
	- Do we need to copy/paste the scheduling pattern for the other applications in the portal, or do we take a different approach
	- If Lighthouse is going to be a gateway, should MHV or the core team be the ones to create that service?
	- Lighthouse could host it, but they don't need to create it.
	- Could Lighthouse's health API basically become PHR v2? -- Patrick, either in Spirit or hand it over to Lighthouse? 
	- Would PHR be starting from the ground up? 
		- Within their eVault, they have it broken down into a reasonable data model but on the website, all you can do is jam it into a PDF.
	- PHR and Lighthouse team should talk about where it might belong - they will not come with the same question.  We could have the meeting and discuss it, but Lauren would want to prepare me that the decision would need to be made at the CTO level with 
		- Meet with Barry, meet with Lighthouse but don't ask questions about where this.
	- EAS is owned by OIT
	- MHV created a view for appointments, but never owned appointments
	- Lauren is very open to a recommendation from this team based on talking to Barry, based on talking to Lighthouse.  
	- We need something that lays out the requirements and a recommendation based on those requirements.
	- This decision is not going to be made over night.  This could be a risk to the timelines, especially if we think PHR will do the work.  We'll need to get into the next PI for them to start the API
	- It would probably make sense for PHR to create the same type of thing Lighthouse is doing
	- Next steps - we have a game plan to test designs.  Eric and Jonathan in then next tech/design sync
	- What might the process look like?  An output from the next sync could be documenting these things as we move forward.  That would 
	- Robyn wants to make sure we are building off information and not spinning our wheels.  How might we control our risk?
	- Based on some of the research Eric read, the search my record feature is lackluster in MHV.  Is there baseline of what we would want people to filter or search by?
	- Lighthouse documentation is pretty clear on what they allow filtering on by endpoint
	- A big one is whether we can actually make a responsive experience for viewing records.  For example, if it takes 30 seconds to load records then that's no acceptable.
	- What searching & filtering look like is something that should come out of the user interviews Robyn is about to start.  
	- The goal is to get understanding
	- the 30 seconds is for pulling data on a refresh - once it’s refreshed and stored in evault, the data should be available much quicker
	- We will probably have to do this domain by domain because we don't have the time to start digging into each of them.
	- Appointments and Records are our best opportunities for making a better experience than exists on MHV
	- We have Dr. Evans want to see significant change over MHV.  If we find we need PHR to make massive changes then we should lay that out and prepare the team to make those changes.   The sooner we start that, the better. 
	- We don't want design to get too far ahead of technical discovery, but we can't let the API constrain our designs either.

<br>

## 2022-10-25

- Jonathan is working on a Mural for immunizations. 
- Robyn and Jonathan did their pilots, tested out both versions of the Veterans Guide and another for people who can't do the Optimal Workshop. 
- They are tweaking the guide and will also test it to see what it looks like on a smart phone.
- Eric made some edits based on Patrick's feedback on the discovery doc.  Sent out an invitation for tomorrow at 11:00. 
- Coulton shared the Medical Records discovery with Bresha.  Still trying to find time to get that in front of Teresa or leadership team.  She didn't have any feedback, but is eager to to share this out.
- Coulton is trying to streamline meetings across Secure Messaging and Medical Records. 
- Coulton sent out a Slack about the Wed OCC check ins and how they start integrating Medical Records into that meeting
- As soon as possible, if we can get every possible interaction for Medical Records, that will make everything go much smoother for Medical Records. 
	- There's a ZenHub issue for that already.  They can start with a rougher back-of-the-napkin and then refine. 
	- There's a plan to shift different categories from the AdHoc team to the ByLight team.  Keeping it high level and identify how the user is expected to flow.
	- As Lexi's team gets to the finer details, they can layer that on.  Coulton doesn't want us to get too far into the details too soon and limiting ourselves.
- Mapping out legacy will be important to know we're going to hit roadblocks

<br>

## 2022-10-24
2:00 - 2:15 - Standup
  *   What did you complete since last standup?
  *   What are you working on today?
  *   Any blockers?

2:15  - Until - Sprint Planning
  *   Point work ahead of meeting
  *   Commit to work for next two weeks

Sprint Retro
https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1666625206866?sender=u71ad98f94f5263595f9a4390&key=88b16c9c-16e4-40e9-87a1-51d24866735a
  *   What went well?
  *   What didn’t go well?
  *   What changes can we make?

Parking Lot
When I create the next epics for Medical Records, do you want those split out by domain (e.g., a technical discovery, generative research, lo-fi design, etc. for immunizations, then the same epics repeated for lab results, etc.)? Yes

How IA work will intersect w/ concept or low-fi development in coming weeks. Specifically, how should Jonathan be coordinating with you all? If work were Venn diagram, who is doing what and what is shared?

Mikki: @Robyn I think that decisions doc will be the first step in making sure we are all clear on how we are moving forward, and then yes, we will need to work in more detail in how those decisions impact the individual workstreams

Notes
- Kevin Hoffman book about planning meetings
- Questions for Mobile - model for refreshing

Coulton will start being more involved with Mikki on IA

Communication around this project; needs to be led by Connected Care but we can help with the messaging.  Reinforce positive

Coordinators are afraid they are going away. 

Teresa might be able to give some better talking points.  We're not being blamed because they're not working on legacy.  

Lauren gave Bill & Chris some feedback about what the ByLight team could be doing.  It was productive. 

Stub Ticket

Don't do the Mural until we have a better sense of when things are going to happen

The CTO team sent a list of 10 priority initiatives, and this work is one of them.  The sitewide team, platform, etc. also have work to do -- content API, etc.  

Connected Care and other teams may need something else to respond to & represented for the work other teams will be needed.

Takeaways
- Lauren feels like there are a lot of meetings in the Apt space.  Wants to make sure everyone is in the meetings they need to be in
- Strategy for communication key takeaways and decisions
- Lesson learned for Medical Records - where the data is coming from.
- Mobile app
	- Chat with the VA Mobile team about how the app works.  
- How can we divide and conquer on different tracks and make progress?
	- MR
	- Cerner data
	- API
	- Overlap - content API, mobile app, etc.
- MHV partners need support to become more familiar with design systems. 
	- MHV has an interstitial that has a lot of different components. 
	- Do they know where to go to use the components

<br>

## 2022-10-20

Eric
- Screen sharing is disabled in Zoom for Thu meetings
- Got info from Barry, will be adding that to a document
- Left nav card  - Olekssi has put together  a left Nav in React
- Robyn asked for some overview info  about left nav and what we mean by dynamic there

Robyn
- All the Secure Messaging 
- Generative Research meetings have been slotted, invites should come out soon
- You list the observers in the request and then Perigean uses that to invite people
- Marci will do a Slack sign up for each interview - 2 observers per interview.  Add spots for facilitator, note taker, and the zoom links for each.
- Note taking - Jonathan taking notes or facilitating some of the interviews

Jonathan
- Accessibility team is auditing MHV
- Dug into the research readout that Coulton shared unofficially with us
- Starting putting together a Mural with post it notes so he can quickly reference the research. 
- Trying to support Robyn with the generative research
- Questions:
	- Q for Robyn: What is Jonathan's role in the data collection in the generative research?
		- Robyn's goal is to have quick turnaround on research
		- Robyn can have Pergiean recruit people every week so they can work iteratively until a hi-fi the first of Dec.
	- Q for Eric:  One of the tickets is to dig into the technical aspects with Eric before he starts the wireframes
		- Eric has mostly been working with the Medical Records because it's the most complex
Questions
- Eric - is the ultimate plan to sunset MHV?
	- Jonathan referred to the deck Lauren put together
	- Left nav conversation - in the Tue meeting with OCTO he was finding out a lot of info around the left nav. 
		- Option A - Drupal nav no customization or dynamic data
		- Option B - Build the custom nav with React and then you own it and have to maintain it.

Action Items
- Requirements traceability matrix from PMI - send to Jonathan and Robyn
- Eric and Jonathan will set up a weekly meeting
- I might work on doing a design spec based on the API
