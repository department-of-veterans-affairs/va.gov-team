# 2012-12-14 Notification Preferences Discussion

## Attendees
- Samara Strauss
- Lauren Alexanderson
- Liz Lantz
- Carnetta Scruggs
- Patty Henry
- Marci McGuire

## Notes

Focus is starting with established notifications we'd talked with in previous conversations

### Challenges
- Preferences are stored in MHV back-end that is not connected to VA Profile.  VA Profile is where the VA notification preferences are stored and what powers our notifications preferences tool on VA.gov
- This is a little different from other tools where the back end is NOT changing.
- Decisions on how and when  we want to move preferences given that the tools are moving one by one
### Carnetta
- Thought that some of the challenge was that we have some similar things already in VA.gov profile
	- Samara - we already have refill shipment email notification
	- Vettext already supports a text notification
	- Samara thinks this will be navigable
- Carnetta has new information that adds another layer since they last met
	- MHV handles prescriptions shipped form CMOT only
	- Vettext handles prescriptions shipped from the local VA only; not the same at all.
	- MHV would have to point users to one place for vettext 
	- Samara things we already discussed this and we want to make sure that it is understood
	- Carnetta - or do we want to change it? 
		- If I'm a Veteran and they select email, why should they care where it's shipped from
		- Instead of from the Veteran saying "if it's local veteran center, do this, and if it's CMOS, do that"
		- Samara does think this is something to add to the challenges, and will have to be resolved in terms of who is sending what and from where
		- Carnetta - they held up the implementation of local prescription tracking
		- They'll need VA.gov profile to change the profile to change to say
- Samara - main point of discussion - is it possible for MHV to integrate its profile with the VA Profile back end?
	- Carnetta - her thought is yes, they can do this.  "As soon as possible" are not words they use.  We'd have to probably do it in Increment 10.
	- VA Profile already has their preferences
	- Carnetta has already worked with the developers and there is no blocker to sending the data back and forth
	- The first step is that if there is a field needed, Carnetta has to put in a request.
	- Samara - question is, "if this is possible, when do you have folks who can do this?"
	- Carnetta - if it involves a developer to invoke an API, then we are talking about resource constraints.  They would have to get on the API-type developers' list.
	- Lauren - her concern was also related to API developer being available.
	- Carnetta - Barry asked for us to mature our API management gateway for all our APIs.  API developer is Muzam and one more, and after increment 9, they will be busy.  Lauren, we need to look at our resources at ByLight.  There's no reason we can't do that.  They've already done testing with VA profile.  One thing is resource constraints.  Another is priority.  
	- Carnetta - UCD wants to notifications to be set to yes by default when they create a MHV account.
	- Samara - Maybe VA Profile would do the first part of the work, and then they would work with Carnetta's team.  She doesn't know if a developer is needed immediately.  It would probably require some meetings, discussions, and being available in that way
	- Lauren - how long does it usually take to get on VA Profile's road map and getting them to do that work?
	- Lauren - PI starts in March.  We can talk to Matt Bain, Greg Kirk of we need to bring in API developers to support Muzam for API work for that PI, we can plan long-term for something like that.
	- Lauren - the question I have is, Secure Messaging is going to. move to Phase 0; medical records probably in the next PI.  Things are going to start moving, and if this goes much past 2023 calendar year, then it becomes like, is it worth us to divert resources to integrate with VA Profile?  If we don't need a ByLight dev until PI 10 or 11,  that's probably feasible.
	- Lauren - it's probably worth us submitting the request to at least get an estimate of when they could do the work.  It's probably worth us + Carnetta having a conversation with VA Profile.  
	- Samara - while the end goal is to having VA profile storing the preferences and the preferences powering the preferences on the front end.  Moving to actual notifications is a separate thing.  The preferences could be stored in VA profile to start, and then moved to VA Notify.  We could figure out how to do this incrementally.
	- Carnetta - I know this meeting is about notifications, but I'd like to talk about contact information, appointments.  There was a request to reduce all the appointment reminders into one notification and have that sent by VA Notify.    
	- Carnetta - I'm getting lost - we want to get where we can create an account in VA.gov without the user coming to MHV for anything.  In order to do that, they need the contact information and email address.  She would hope that drives the priority.  MHV doesn't even share contact information.  The email address is specific to MHV
	- Lauren - if we're going to integrate with MHV, let's go whole hog so we get contact info, email, etc. and they aren't distinct and stored in different systems.  As we unite our teams, we want to also tell Veterans that updating in one place updates it in all places.  We should probably start the conversation with VA profile.  In order of operations, I'm not entirely sure when they would be able to do that work.  
	- Carnetta - let's identify what we need to ask for that they don't have.  I think this needs to be a project.  I don't know if VA.gov needs to have that on their page.
	- Samara - we already integrate our contact info with VA Profile, so if you integrate your contact info with them, that would not require extra work from us.  Notifications aside, we already know that doesn't exist in VA Profile. 
	- Samara = Liz did an audit earlier this year, and they already have most of the fields that are in MHV.  We could have specific conversations about specific fields that need to be added.
	- Carnetta - it's an existing user story that a Veteran put one email address in MHV and a different one in VA.gov - we can't just change one to match the other.  
	- Samara - you could start that at any time. That's a good question for them -- how do you reconcile?  She suspects they've run into this issue with other partners they've worked with.  
	- Carnetta is surprised that they would work with VA Profile vs. VA.gov profile (Samara).  How are you going to educate them?  
	- Samara - that would be done in MHV.  The question here is what's stored in the backend vs. the front end?
	- Carnetta - right but how - when you go to VA.gov profile, how are you going to let them know that the email address is being shared with MHV?  
	- Samara - that still seems like a VA Profile conversation.  The change is where the data is stored and being populated from.  You really have to be figuring out how you're going to communicate that
	- We want the Veteran to choose which email address
	- Samara - that's happening in MHV, not VA.gov.  VA.gov is already integrated with VA.gov.    I really do see this as a backend issue with VA profile and how we reconcile back-end inconsistencies
	- The conversation should be had internally within MHV
	- With regard to notification preferences, that is 
	- Next step is filling out that intake for for VA Profile
	- Lauren agrees
	- Carnetta - last time I left, we had a list of things in MHV and we were going to compare what was in VA Profile
	- Samara - we could set up another call and go through the intake request together.
	- Samara - the only things they show that is controlled through VA.gov profile is shipment notifications
	- Carnetta believes they did an intake form.  Let's make sure what MHV already asked for that they build and we never used it, or do we focus on putting in the intake for notification
	- Lauren - we should find out what MHV has already asked VA Profile to do, then a priority meeting between OCTO/OCC on when this can be done, and how it might affect other elements of the roadmap.  If it does, them we can talk with Matt and Greg .  The place we're in is verifying information before we put in a new request.
	- Samara - from what I'm hearing, I do think the profile intake form for notification preferences is worth sending, but if Carnetta has already asked for it, that is something they should confirm.
	- Samara - who do you normally work with on VA Profile?
	- Samara - we could pull those folks in.
	- Carnetta - we can start over, it will be me unless Teresa Hancock hands this off to Bresha.
	- Samara - we can meet with them and talk about how we want to work with them and how to actually submit the request.
	- Who was taking minutes or notes?
	- Samara will also share her list of notes we were looking at earlier.
