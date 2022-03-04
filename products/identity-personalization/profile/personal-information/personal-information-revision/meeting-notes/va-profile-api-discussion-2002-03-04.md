# 2022-03-04 Meeting with VA Gov re: API

## Attendees
- Barbie Flowers
- Samara Strauss
- Takenya Hill
- Ian McEwan
- Tom Harrison
- Sudip Khadka
- Maria Harmon
- Marci McGuire

## Goal of Call
- Discuss impact of pivoting to MPI as the ADS (Authoritative Data Source)
- Timeline of when we'll be in an environment with MPI available so VA.gov Profile team can start testing

## Notes
- Call is recorded
- Ian started building the interfaces.  
- Biggest changes is that we will have to remove the dates
- High level - MPI is the Authoritative Data Source now and VA Profile will be the pass through
- We are going to have to probably remove the source date and effective start date 
- POSTS and GETS, no PUTS
- Basic structure will be the same
- The sub bios will remain the same
- The URL may change slightly. 
- VA Profile will still provide the reference data - they have different terminology - those will all change
- Tom & Adam had discussed hard-coding them into the front-end
- There will be a good place to get what those codes will be
- Differences between MPI on who is to provide custom names
  - Gender identity: will not be able to have open text (Maria will confirm)
  - Pronoun: MPI does not have prefer not to answer
- VA.gov is going to hard-code the values that VA Profile have, which will be derived from MPI.  Reference data will provide info on what that means to MPI
- VA.gov has 100% control over the display text
- Caveat - if those codes somehow change an we're not aware of it, that could be a problem.
- Effective end date - there is a way to do that - "soft delete" this will still be possible
- If it's open text field we cannot remove that - Josh believes we can do that regardless. They will track that down to make sure.  Josh does not believe there is a technical limitation.
- There has been some confusion on our end (VA.gov Profile) about the ability to remove things because we believed there was a constraint
- Internally, we've discussed internally.  It's not that someone can't remove everything; it's that they can blank everything out and save it blank.
- VA Profile will leave that there until we tell them otherwise
- Maria believes that they do not want people to be able to remove preferred name entirely.  That is something that should be confirmed with MPI.  
- Josh - unless there is a technical requirement that it cannot be done, VA Profile is planning to build in the ability to use the end date functionality to support the Veteran, no different than the other fields.
- VA Profile supports removal, but if VA.gov cannot support the removal we just don't.
- Maria posted a note from Lexi: "We will not be pursuing deletion of a preferred name once entered.  Modification of an entry is allowed."
- CPS ID created by the IAM has been requested to be used as the identiy for an LOA2.  We will pass that CSP ID in the OAM format.  They have the maps of what those IDs are.  
- Timeline impact
  - Tom thinks that the schedule will slip a bit based on the changes that need to be made
  - Two key dates are when it will be in the integration environment and when it will be QA
  - Current schedule puts the build at about 4/4, but they will review and let us know.

  ![image](https://user-images.githubusercontent.com/73354907/156790831-2cfa0b6f-df8e-4b23-9787-0b9e97f518a7.png)

	
## Action Items
- VA Profile will providing updated specs with these changes to VA.gov next week
- VA Profile will be mapping a REST to SOAP interface where SOAP interface is effectively a message in HL7
- Josh Lindsey will send mapping of the two CSP IDs they have
  - ID.ME
  `<id root="2.16.840.1.113883.4.349" extension="12345^PN^200IDME^USDVA^A"/>`
  - Login.gov
  `<id root="2.16.840.1.113883.4.349" extension="12345^PN^200VLGN^USDVA^A"/>`
- VA.gov Profile to confirm that everyone this is exposed to is authenticated through Login.gov or ID.ME
- Josh Lindsey will provide updated dates for integration and QA
		
# Post-Call Internal Discussion

## Attendees
- Samara Strauss
- Tom Harrison
- Marci McGuire

## Notes
- Now that MPI is the authoritative data source, VA Profile is not.
- Does it make more sense to work directly with MPI vs. VA Profile?
- Tom's initial concern is that there could be debugging issues because there are now two layers and there could also be a delay in receiving a response back
- Going with MPI might be better, but SOAP is more cumbersome and slower
- It would be prudent to at least have a discussion with MPI, and if they can give him a better look at their API, he could give a better answer as to how it impacts his work
- Samara will reach out to Danny Reid
- Going against MPI simplifies things

## Action Items
- Tom will talk with MPI and do some technical discovery - possibly next sprint
- If we have to basically start over with MPI, that's a no-go
- Samara will contact MPI to see if we can have a conversation

