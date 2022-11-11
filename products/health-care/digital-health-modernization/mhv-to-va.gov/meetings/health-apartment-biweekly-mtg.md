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


