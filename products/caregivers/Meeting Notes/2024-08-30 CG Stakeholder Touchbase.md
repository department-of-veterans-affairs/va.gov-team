# Aug 30, 2024 | Va.gov Touchbase: Meeting with VA.gov, CSP, SPS, and MuleSoft Team.

## Notes

* Gaspare brought up that SCG 1 and 2 issues
    * Weird thing happened. 
    * If enter primary, enter secondary, select yes to add additional, then go back to remove SCG1, it retains the info on additional CG
    * Then the user can move forward through the form, but does not allow to remove the additional secondary CG
    * Ideal function: application will either remove all secondary CGs when No is selected (after going back through the form). Or additional secondary is moved up to first secondary CG
         * Heather: I think removing all CGs when NO is selected, is the proper way to handle the data.
* County field - folks are adding Country (we thought this may happen)
    * Looking for additional validation so that they don’t type in US, USA, United States
    * Quick fix: Even if we stop them from adding those, maybe edit error message?
    * Long term: County validation?
* Facilities validation
    * Preloaded data - CARMA facility filter value (Facilities that have Caregiver "accounts")
    * Facility ID = Station ID? (3 digits) - used to identify the right facility
    * CARMA may look into using LH Facilities API
    * Once ready in lower levels to do some testing, we can schedule a meeting for engineers to talk through it and perform testing with facilities and see how they match up (especially for “new” facilities)
 
---
## Drew's Notes

### Previous meeting Action Items
- 1010CG Duplicate Requests – continuation from 7/26 topic
     - [ ] **AI SPS:**  If possible, as another occurrence happens, contact Heather/Mitch ASAP
     - Logging in place to capture issue
- Team:  OAuth Updates
     - AI Srini and Ranga:  Work on Mule to Salesforce connection (authentication updates)
     - Testing On Hold until Rama back from PTO
     - Was tested in DEV - waiting for Staging Environment
     - [ ] **AI Venkata**: Work with Rama next week (9/2) to test in Staging
 

### New Meeting Topics (08/16/24)

- Gaspare:  Issues to Review
     - Potential issue with online 10-10CG application: SCG#2 being added without SCG#1 (forced input of a SCG#2 once a SCG#1 is added and then removed (backtracked via the "no" selection) ex: CD-1683326
          - Primary and Secondary Entered; put in 2nd, Secondary CG and then remove CG #1 -->  issue with Secondary CG button? -->  system keeps information entered even with trying to remove 2nd, Secondary CG
          - [ ] **AI Heather:**  Tech folks and Heather to look into issue
- Validation Rule Request: Staff are reporting that users are incorrectly entering "Country" in the "County" field causing increase in ROCs (Could we discuss simple validation rules to address this?)
     - Users entering COUNTRY (e.g. USA or Canada) in the county field
     - Is there a simple validation rule(s) that can be entered to prevent/validate entry?
     - [ ] **AI Heather:**  Deep dive see if rules can be applied to prevent entering COUNTRY into county field
- Heather:  Facilities Updates
     - How we can make sure that the data we send will match up with what is expected in CARMA to avoid submission failures.
          - The reason we ask is because we ran into an issue with the 10-10EZ where the Enrollment system could not accept all the facilities we pulled from the Lighthouse facilities API, because the Enrollment system updates their facilities list once per month.  We had to implement a solution to perform a comparison between Lighthouse facilities API and Enrollment system facilities, and remove any that did not match up.
          - CARMA has noted some accounts to determine if there is VAMC or other facility type available for use (CARMA_FACILITY_FILTER)
               - Would CARMA be able to accept station ID (3 digit)
               - Station ID sent would match in CARMA -
                    - Existing ID would be accepted by CARMA
          - Facilities API
          - [ ] **AI Drew:**  Add to next meeting with facilities engineers online to walk thru this issue
     - [ ] **AI Heather:**  Once in staging, will let group know
 
