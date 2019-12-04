## Recommendations for testing	
	
- Need results of performance testing and functional testing & known outstanding issues when moving forward / need an acceptance criteria before putting it in front of users	
- What was tested for functional testing, edge cases?	
- Team's assumptions	
- Need test accounts set up in the back end systems for each connected environment	
- Need enviornment mapping from Vets.gov to MHV/EBN systems and their associated DBs, and URLs - should be accessible in one place
   - Testing repo? waffle? 
- POCs for MVI to add new records / edit records / etc	
- Need Accounts set up for DS Logon/EVSS, DS Logon/MHV, MHV, ID.me - ensure that all accounts work for all features	
- Need POCs that can set up these accounts manually for product, and MVI setup. 	
- Need a way to test production without going live (we call it the dark domain in eben), allows us to test with live accounts but use cookies to access non public site, then swap them	
- Need a long list of Veterans willing to help with their own accounts - most testing in production will be only as expansive as the Veterans who are testing… risk always there	
  - Will never be able to test all edge cases within production once log in is established
- For submitting anything in production, cleanup will need to happen on those Veterans testing. Or we need an agreement that we can request removal of those items in the DB when submitted for test purposes.	

### Accounts	
- Need at least 50 DS Logon accounts	
- Need at least 50 MHV accounts	
- Need at least 100 ID.me accounts	
- These all need to be set up across all backends, with MVI, VADIR, BIRLS, CORP, ESR, VISTA, etc, etc	
- Need Fresh accounts at least every 6 months	

### Concerns
- Need NSOC, URLS, and ISA much earlier if they are taking a month+ 
- Tracking of defects between products and platform. Need metrics, ways to report to stakeholders...
	- Github is only manual reporting... someone will have to count how many there are
- What are we using to track defects? Github does not provide reporting or lists, or anything if we're asked about defects	
  - Suggestion, use a separate board for testing. Can use labels to filter across products, production, testing, etc

### Testing	
- Negative testing - when services are down, how are we handling that	
- Consistent test account tracking. Know what is in all test accounts at all times. IF a change is made to that account, it is logged
- What are the regression boundaries? 
 

