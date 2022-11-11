# Health Apartment Bi-Weekly Team Meetings

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
- Eric will send me the info from Lighthouse and Lichelle; Marci will use that as a basis for 

