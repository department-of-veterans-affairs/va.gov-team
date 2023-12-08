[Labs & Tests Product Brief.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/12499969/Labs.Tests.Product.Brief.pdf)



# VA Mobile App Lab & Test Results Product Brief (Sprint 0)  as of 9/2022

## Problem Statement
For Veterans waiting for results, lab and test outcomes have high urgency and timeliness. Accessing this information on the web can be confusing and can become out of reach all together by login issues. Veterans want to easily see their lab and test results on the mobile app, where they can be notified and gain access to the right information quickly. 
Current Experience
There are two ways for Veterans to view their lab and test results digitally today:.
MHV Blue Button
Requires users to download a report pdf
Vets.gov team built this product in 2017. GH folder is here, but a lot of artifacts are missing.
MHV Labs and Test
Allows users to view their test results (no download)
Labs & Tests Current State

## Pain Points
Behind clunky login flow
Not responsive
There are assumed accessibility concerns  
Lots of click thrus to find, unclear where it lives in IA 
Not shareable in a secure way
Can’t filter/search
How are Veterans notified that their results are ready? 
Performance and data use 
Anecdotal  - heard in June 2022 research for RX for a participant that tricare app had better list of records than VA

## Assumptions and Level of Confidence

Delivering one piece of the Blue Button experience on it’s own is valuable and carries relatively low risk. 
We will need to set good expectations about what information the app will provide
Genetic test results are not available via this service
Self-entered data is out of scope, what are the implications?
The app will adhere to all business rules surrounding medical records (ex: holds on particular results). We will need to make sure we understand these. 

## Risks
Dependency on backend APIs that may or may not be already available 
Lighthouse data and blue button data may differ? 

## Business Goals
OCTO-DE objectives 
Increase the usage and throughput of VA services
Decrease the time Veterans spend waiting for an outcome
Increase the quality and reliability of VA services
OCTO-DE goals 
Veterans can manage their health services online
Logged-in users can easily track applications, claims, or appeals online
Logged-in users have a personalized experience, with relevant and time-saving features
Roadmap
I as a Veteran want to be able to view my VA lab results and test results via my mobile device. 


## Recommendation: 
   Leverage the Lighthouse API to prioritize viewing parsed data that is accessible over downloading the pdf.  If we decide a pdf is important for sharing or other purposes, it wouldn’t be difficult to do both in future iterations 

### V1
View results via structured data if possible
Download if not 

### V2 and beyond
Notifications - As a user, I want to be notified when my lab/test results are available so that I can check the outcome.
Search- As a user, I want to search for a particular lab/test result so that I don’t have to scroll through a long list of results. 
Share - As a user, I want to share my lab/test results so that I can inform others of my status. 

### Technical Approach
There are a two API options available to source data: 
MHV Blue Button
Would only be able to provide pdf, not structured text
Easy endpoint to plug into 
Can specify that we only want lab/tests 
Unsure if it’s accessible
Lighthouse API
Contains structured format of lab results  
Would require calling multiple endpoints- potential performance issues depending on design
Does not support pdf
Data is accessible and include translations 

### Requirements
The VA mobile app will display:
Results from VA ordered labs/tests only (no outside providers, self entered data)
Data from the LH api

### Out of Scope
Self entered data 

## Other Information

### Important Links

### Questions
Where does the data in labs & tests on MVH come from? 
LH api
What api is the health department team planning to use? 
Does the data differ between the two apis? 
Need more investigation
Can we get test data added? , might have to work with MHV, it’s a process 
Best way to test is to get Raf to take a look at them in prod, staging will always have mismatches 
Does the API allow us to pull data as a list or just as a single pdf dump of data?
Blue buttom comes back as one large data dump in a pdf
LH allows us to parse 
What do the users use this info? Do they just view it or download? 
Viewing will take priortiy
Technical discovery ticket w/ findings 

### Measuring success 
work in progress
Objective: Provide Veterans with easy, personalized access to their health records, starting with lab and test results. 

KR: Faster than blue button to view my records
KR: Higher completion rate vs. MHV homepage -> actual records 
KR: Fewer clicks than blue button to reach 
	
### Stakeholders
  SMEs
  Carnetta Scruggs, Management Analyst @ VHA; does the day to day planning and management for MHV
  Theresa Hancock, Director of VHIO which includes MHV, Carnetta’s boss and our main stakeholder 
  Barry Egbert, Solution Architect @ ByLight; engineering lead for the MHV contractor team
  Dave Mazik,  Product owners
  Chante - Crew Lead @ OCTO, liaison to call centers
  Neil Evans - Senior Advisor to CIO, physician 
  Who are the other “users” of this data?
 
David (Boomer) Rawlins is the Product Line Manager for the Health Data Product Line on MHV that Blue Button falls under
@Bain, Lichelle A. (BYLIGHT) is the analyst for the Health Records Product Line.
 
### Keep informed
  OCC leadership
  Nancy, Theresa, Neil
  OCTO leadership
  Charles, Chris, Lauren
  Platform team - collaboration cycle for backend
  Travis give Chelen heads up after we decide lighthouse vs. vets-api
  Consult/collaborate
  Apartment team - Tracey, Meg, Chris F. 

### Veteran feedback from MHV help desk:
I had a 41 year old Veteran today that was very confused by the Cell phone format of the Lab Tests. He originally was trying to pull it up under Health Records, But I redirected him to the lab/test section.

He does not like that when you pull it up on the phone you have to go to the menu/Track health/Labs and tests. He thinks this is very confusing to find it under track health as to him that should mean Tracking something like BP, etc. When we went into the Lab/test He was very upset since it did not have his test as it was saying Nothing found to display.

At that point he started to push the View more button which of course took him to see No Self Entered test.

I was able to redirect him back to the Lab/test page and explain that he needs to scroll past the Self Entered test to get to the VA Chemistry/Hematology results.

He believes if he is having issues and confusion with this a lot of Veterans must have the same issue.

One suggest that we came up with that may be an easy fix is to list the VA Chemistry/Hematology results first on the cell phone format, then the Self Entered tests. Is this something that can be sent or has been sent as a recommendation?


