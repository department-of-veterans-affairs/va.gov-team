## Address Save Failure Codes

Updated 12/23/20

**MVI200** - When MPI is having connection issues that don't allow us to finish an MPI lookup call.

**MVI202** - Duplicate ID
- PROBLEM: For the profile, we've seen people who we think might have duplicate IDs or other ID issues be able to get to the VA.gov profile (where address information is) but not be able to view their address information (because if you have more than one ID, we can't determine you are who you say you are, so we don't show you personalized data). 

- NOTE:  Not everyone is blocked from logging in to VA.gov if they have a duplicate ID. The duplicate ID blocking happens through our SSOe, but right now (as of 12/23/20), we are only putting 30% of traffic through the SSOe version of the build. That means 70% of traffic still goes through the old version of login, which does allow people with duplicate IDs to sign in. Currently, there is no set date for the 100% transition to the SSO version, but it will be a phased approach. The dates and releases will ultimately be up to Christine Dillman and Cory Trimm.

- NOTE: A big difference with the SSOe authentication, is that during auth we get a response containing the users MPI record (without SSOe we don’t have that info), so we can run that validation before logging them in.   When not using SSOe we have to lookup that information later (after the user has already logged in), so I think it would be up to the individual apps to decide whether or not the user can see/access feature X if there are multiple IDs in their record

**MVI 207** - Means ID isn't active and it should continue to fail.
- NOTE: An ID is "not active" or deprecated if the owning system tells MPI its not active. It could have been a duplicate and kept another one open but not deprecated one.  For example, an ID could have been created by mistake.

**MVI 209** - PCE (Potentially Catastrophic Error) Means two or more persons data might have become commingled within one ID.  
- EXAMPLE: David and Ben both ended up on same ID.  It now shows David's address and Ben's phone number.  
- SOLUTION: The owning system of that ID needs to get data separated out and good IDs established for both individuals

**ADDR301** - Trying to create an address but that user already has an active address with the POU (purpose of use), when we would have expected an edit/update. 
- NOTE: VA.gov thinks the user does not have an address on file so we are making a POST call when we should make a PUT. See ticket #17625. 
