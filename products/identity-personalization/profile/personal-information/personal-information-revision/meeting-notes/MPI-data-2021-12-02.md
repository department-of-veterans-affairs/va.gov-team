# Meeting Notes - MPI Data Dec 1, 2021

## Attendees
- Linda Reimonenq - will be collecting the requirements
- Jeffrey Kemple - Project Manager
- Lihan Li - Back End engineer
- Marci McGuire
- Damien - high-level technical approach
Danny Reed - enterprise level architect

## Background
- Samara will be leading this work for VA.gov
- Jeff has not worked with us on any integrations.  Typically they go through the lifecycle of the process on the MPI side

## Lifecycle
- Steps are fairly uniform; not dependent on the specific type of integration
- In general all start with a service request (SR), which has already been approve
- Kickoff
- Analysis
  - Business flow
- Integration specifications document (IRSD)
  - Captures the business requirements, flows, etc via activity diagrams that shows end-to-end process
  - Usually takes a couple of weeks
  - Linda will work with us to gather the info
  - We will meet again in a week or so
- Design and Development
  - Done in parallel
  - May be opportunities to short-circuit with existing service
  - Produce an integration system design document (what to how) - details the exchange of information
  - Danny Reed will approve
  - Will request a sample message via email of what our transaction looks like; make sure everything looks good on paper
  - Dev environment
  - Test
    - Dev testing - developers agree everything works
    - SQA - controlled environment
    - Pre-production environment / UAT environment
  - Production


## Misc Discussion
- Does this lifecycle apply to requesting data that we already knows exists in MPI?
- First thing they need from us is effectively is what we need from MPI and what we plan to write back to MPI


## Technical
- Two different interfaces - one is IAM/SSO centric.  It connects to MPI to expose identity traits. 
- In the SAML assertion that is exposed in the SSO implementation
- What is the sweet spot so we're not double-hitting their services so the user can provide the data that they want?
	
## Housekeeping
- What's the customer want date/target production date - as soon as we can get into the back end we probably only have 1-2 more months of work left
- Samara's goal for launch was end of March 2022
- Per Danny, that's reasonable.  The business processes are pretty straightforward
- Normally on integrations like that, we have a weekly call to review progress, discuss concerns.
- We will meet at this time slot; will start as 1 hour then drop to 30 min (Wed at 3 ET)


## Helpful next steps from us
- We will retrieve data from the API
- We want the user to be able to update that
- There is also update capabilities
  - With updates - with Cory and Cody, they need to have some way to tie that update to something; some instance that they know of.  Part of the design discussions is - do we tie it to a new reference to VA.gov or the CSP?
- How quickly we do this is really up to us and our timelines; it's really more about identifying the technical implementation that we're both going to be OK with.
- We'll be leveraging services that already existing.  They normally allot 90-120 days for that type of implementation


## Technical Requirements
- Preferred name, gender identity, 
- Business reason - came in via the LGBTQ health services offices in VHA.  People are showing up to appointments and being addressed incorrectly.  They wanted this to be available in VA.gov so people could provide their info and that would go into MPI
- Danny - Does that profile happen with every log in?  Or does something have to happen
- Lihan - they have to go to the profile page to activate the API.  It will read if they go to the profile page. They have to change something to update something.
- We would trigger the read based on them going to the profile page
- Danny - do we store that in a cache table, or would it initiate a new request each time?
  - Lihan - we could cache and destroy the cache when they make a change
- How is that cache stored today?  A user UUID and accounts table that has several identifiers - once someone logs in, an account is created and the same account will be used for the same user.  
- If that person logs out and back in, does it create a new account?  Lihan is not sure.  If the ICN changes, it should change the account table ICN.  The account UID always stays the same. If they store something in the VA Profile cache, then log out and back in, the same cache is used.  The VA Profile is not updated because the UID did not change.  Time to live for cached data is a day.
- Danny - Probably best to create a VA Profile ID vs. keying off the VSP that was used to login.
- MPI has ID.me reference correlated so they know this ICN is associated with various accounts.  The question in Danny's mind is - do we associate with the account they authenticated with OR do we have a "filtered" view and they come in as VA.gov with that VA profile identifier?
- Danny hesitates to not map something to the CSP
- Are we talking about the VA.gov profile or the thing that is doing contact info, which is VA Profile?  Danny we DON'T want to use that.
- VA.gov Profile is just a front end connecting to a bunch of back-ends.  If you are talking strictly about backend, VA Profile is ONE back end, but not the only back end.  We already connect to MPI.  Our profile doesn't store anything; we just have read/write access to the back ends.  
- Cache is stored for 24 hours.  That leads Danny to believe that we shouldn't be doing anything with the VA.gov profile.  We should be associating with the CSP that they authenticated with.
- People can log in through DS Logon, MyHealtheVet, ID.me, and soon to be Login.gov
- If they're not identity-verified, they can't really see or edit anything in their profile.
- If they come in through DS Login, it would be the DS Logon, MHV would be MHV and so on
- Linda - if they authenticate with DS Logon, then come back with MHV, will that cause a problem?  Danny - it's a problem we have today.
- It will flow up to the enterprise.  If they come in through a different way next time, that primary view will be there.  Everything would go to the correlation and promote to the primary view.
- Jeff  - so a pronoun update would be executed through 1302


## Questions
- Character limit on fields
  - Preferred Name (25 char)
  - Sex assigned at birth
  - Gender identity
  - Sexual orientation
- Can we return a value that is not already in the MPI validation list?
  - We need to look at the data dictionary
  - We cannot override their enterprise requirement
  - We will have to map the values in the UI to values in the MPI database
  - Other with free text is not a problem
  - Linda will pull that from the existing requirements
  - We'll exchange specifics before next week's call. If we have stuff we can provide, send to them.
- Are these fields required?  I understand that if the user selects something, saves, then later decides they don't want to answer, they can't nullify the field, but CAN change to "choose not to answer".   My question is, should the new fields be flagged as required from the day this updated page launches?
- API specs? 




