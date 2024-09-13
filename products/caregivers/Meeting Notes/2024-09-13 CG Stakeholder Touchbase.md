# September 13, 2024 | Va.gov Touchbase: Meeting with VA.gov, CSP, SPS, and MuleSoft Team

## Notes
###  Facilities
- Ranga: CARMA list of facilities is managed manually
     - Integrating with API does not seem feasible for how CARMA is set up
     - To change the framework would be a heavy lift
- Mitch: How can we get access to static list in CARMA?
     - Could query Salesforce maybe
     - List has not been changed/updated in quite sometime
     - CARMA sends to LH API to update CG facilities
- Mitch: Ok so if VA.gov pulls from LH API, then should match up
     - Ranga: Will need to check to see how the property is being sourced (in LH)
- AI - Ranga will try to reach out to LH contact, keeping Mitch (and team) in the loop

### County issue
- County is used to calculate stipend rates (Ranga)
     - Concern that county entered could cause mismatch issues for these auto calculations
- example: Connecticut has a diff set of counties just this year! 
- Ranga - would prefer we reference the same set of values (Backlog items for CARMA to do this too)
     - Probably will reference VA Profile as the source data
- 10-10 team is looking at short term & long term solutions

### Retry Queue (VARD question)
- When CARMA is not available, the app is retried and ingested with CARMA create date, not VA.gov date
     - Do we/Could we have an attribute of submission date/time from VA.gov
          - May send it already and it is not referenced properly
          - Need to see if we are not sending, how we can
     - Ranga - Story in next sprint on consuming it if we do not send today
          - If we do not send, need to coordinate with CARMA team to send (Schema update needed)

---
## Drew's Notes

### Previous meeting Action Items
- 1010CG Duplicate Requests – continuation from 7/26 topic
     - [ ] **AI SPS:**  If possible, as another occurrence happens, contact Heather/Mitch ASAP
     - Logging in place to capture issue
- Team:  OAuth Updates
     - Was tested in DEV - waiting for Staging Environment
     - [ ] AI Venkata: Work with Rama next week (9/16) to test in Staging - will send results to CARMA team
- Potential issue with online 10-10CG application: SCG#2 being added without SCG#1 (forced input of a SCG#2 once a SCG#1 is added and then removed (backtracked via the "no" selection) ex: CD-1683326
     - Primary and Secondary Entered; put in 2nd, Secondary CG and then remove CG #1 -->  issue with Secondary CG button? -->  system keeps information entered even with trying to remove 2nd, Secondary CG
     - AI Heather:  Tech folks and Heather to look into issue
          - In review to take out CG data

### New Meeting Topics (09/13/24)

* Heather/Mitch:  Facilities Updates
    * How we can make sure that the data we send will match up with what is expected in CARMA to avoid submission failures.
    * The reason we ask is because we ran into an issue with the 10-10EZ where the Enrollment system could not accept all the facilities we pulled from the Lighthouse facilities API, because the Enrollment system updates their facilities list once per month.  We had to implement a solution to perform a comparison between Lighthouse facilities API and Enrollment system facilities, and remove any that did not match up.
    * CARMA has noted some accounts to determine if there is VAMC or other facility type available for use (CARMA_FACILITY_FILTER)
            * Would CARMA be able to accept station ID (3 digit)
            * Station ID sent would match in CARMA -
    * AI Heather:  Once in staging, will let group know
    * Per Heather on 9/11:  We would like to learn a bit more about how the facilities go from VA.gov to CARMA and how we can avoid mismatch failures with the new changes to the form
        * Static list transitioned to updated API Lighthouse list of facilities
        * How does CARMA get list of updated facilities? - Ranga reviewing on call with team
        * AI Drew:  find the Lighthouse POC for Ranga
* Ramesh/Drew:  County/Country Issue
    * While checking on another issue, Kaavya wanted to see why the County is entered as 'United States' on the physical address?
    * Ramesh à  We are seeing so many submissions with a country value in county field is because the form does not have a country field separately and people are misreading county as country looks like
    * Possible solution/prevention for this issue?
    * Per Heather:  Conversation being held today (long term solution) as well as a quick, short term solution
    * AI Heather:  Updates as they come in to be shared with this group
* Waleed:  VARD Question - created not submitted date
    * Current State - ingest 1010 from retry queue (retries for certain amt of time)
    * US for next Sprint to correct dates (W-031007)
    * Is there attribute to ingest/use (i.e. submission date/time) that is sent from VA.gov?
        * AI Heather:  Looking into field(s) that could be potentially be used
