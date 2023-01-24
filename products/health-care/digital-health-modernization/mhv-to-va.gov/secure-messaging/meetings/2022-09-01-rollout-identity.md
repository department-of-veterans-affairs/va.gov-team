# 2022-09-01 Initial Rollout Disussion with Identity Team

## Attendees
- John Rahagi
- Nich Sourtoros
- Joe Niquette
- Trevor Bosaw
- Patrick Vinograd
- Jasmine Yohannan
- Marci McGuire

## Agenda
- https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1661712489286/c91a6e23532cb566da5cad2e616c7c6a3e9d2056?sender=u71ad98f94f5263595f9a4390
- My Health Prototype - Mobile (unauth)
- My Health Prototype - Desktop
- Secure Messaging Prototype - Desktop
- Secure Messaging Prototype - Mobile
- Review roadmap; give high-level description of what we’ll need from them
	- Ability to handle more traffic & monitor performance & errors
	- Changes needed to handle additional traffic
	- Performance testing guidance
	- Performance & error monitoring
- Review timeline Mural & team’s presumed tasks
- Are there other team dependencies for their tasks?
- Lead time for requests
- Add/remove/update and adjust timing to best of their knowledge


## Notes
- Where would the flags be set?
	- We don't have this capability right now. 
	- The intent is that this would be stored on the backend
- John - question about the strategy
	- What we're solving for here
	- Two year roll out of the whole Health Apartment
	- Account creation - John's team has been working with Tracey to making sure Terms & Conditions are in place. 
	- They would need to sign terms and conditions 
	- Trevor - assuming that these phases is successful - is this something that other services might also do?
	- Patrick - a couple of years ago, the MyVA Team did a similar approach
	- Flags should be feature specific per Patrick
- First reactions - they just need to add the new flag, correct?  Not too much of a lift. 
- That would need to be exposed through an API
- Joe is curious as to who is doing what work exactly
- Joe doesn't mind them doing the flag stuff. 
- The part that he wants to be sure the secure messaging on VA.gov - per Patrick that would be the ByLight team who is doing the secure messaging front end.  They will be able to consume this flag in the vets api. 
- If this is just putting a flag in the accounts table
- They could pre-load and store in the user object so we just read from it. 
- Trevor - they can figure out the best way to do it.  It should be doable in a sprint easily.
- Our team will need to create an opt in/opt out page
- Joe - they already have a unified log in page, so they would already be logging in through VA.gov, so it could be a URL parameter.  Patrick's suspicion is that they would come back and say that they can't get it through the eauth proxy.  
- Joe - they already get URL params already
- As far as requesting the work, Nick will create the work.  They will talk through, write the tickets and let let John know when they have a timetable. 
- They should have this ready by sometime in November.
- Is there anything they need to discuss about terms and conditions?  John's goal is to be able to support account creation and T&C on VA.gov.  They are going to use the existing for the immediate term.
- Patrick - the sign in service is still hanging out there as a possibility.  The existing solution that Cerner has implemented is something they are able to support while they are testing the sign in service
- The apartment model is a big deal to have be successful on VA.gov
- If they did a production test of the sign in service with 10% of users and they aren't presented with terms & conditions and we create an MHV account, that would be an issue because they haven't seen the terms and conditions.  
- IAM is just calling sign up service.  They have their own sign up service and API.  That version is the top priority because of the apartment model.  #2 is they are going to directly interact with the sign up service.  There should never be a time where a MHV account could be created without seeing T&C.
- They are testing right now and everyone will know
- Terms & Conditions - regardless, the Identity team will have to have a little bit of iteration with the sign up service. 
- Create account (user provisioning in the MHV backend).  They have to do that before they can make secure messaging API calls for that user
- When somebody creates an account, MHV account creation is currently through MHV - so this would change so it's happening through VA.gov?  Yes.  For a net new user, that provisioning has to happen.  
- It's basically we don't have an internal record for this human, and then provisioning happens. 
- We are working with the MHV team to build V2 of the API we used to use.
- It's fuzzy whether the MHV team or the identity team owns the EVSS thing
- Joe - would love to make those things better.  It's up to John and Nick to make sure the right people are available.
