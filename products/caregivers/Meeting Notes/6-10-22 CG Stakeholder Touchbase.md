## June 10, 2022 CG Stakeholder Touchbase

#### Action Items from 6/3
- VA.gov - Mulesoft Queueing : 
     - [ ] **(6/3) AI Dene to review verbiage and make recommendations - In Progress**
     - “Your application is en route to the VA Medical Center you designated in the application. All applicants that provided an email address on the application will receive an email confirmation once the application is received by the VA.”
- Issues identified during VA.gov review of statistics
     - [x] **(6/10) AI VA.gov to log body of the errors in the future to assist in error analysis - being merged today!**
     - [x] **(6/3) AI VA.gov will send the patterns/additional details of the failed messages from 5/2 -5 - completed**
     - [ ] **AI After receiving information from VA.gov, SPS and Mulesoft will discuss the errors with Mulesoft DTC team In Progress**
- From VA.gov Demo of Checkbox
     - [ ] **AI Va.gov team to let teams know when testing and release to prod can occur**
          - Design completed. Development in this sprint.  Testing to start 6/13-14
          - (6/10) Blocker due to design system change needed. Cannot deploy to production without this change
 - Review of Queueing Next Steps
     - [ ] **(6/3) VA.gov scope : change from 2 data payloads to 1**
- MuleSoft API Error/503 Errors
     - Yellow other errors - 
          - [ ] **(6/3) VA.gov to look into and provide more error to identify what the error is**
     - [ ] **(6/3) VA.gov to discuss sharing automated alerts to VA.gov with the SPS team. Use shared slack channel? See if it can be pointed to shared channel**
- VA.gov retry workflow proposal
     - [ ] **(6/3) AI VA.gov to share timeline**
     - Option: do not go through Central Mail. How would it route to CSCs? How long would it take
          - [ ] **(6/3) AI CSP and SPS to decide how this "ultimate failure" should play out**
     - [ ] **(6/3) AI Team to determine new messaging as a one size fits all**
     - [ ] **(6/3) Need to map out the whole process flow. And then discuss messaging**
     - [ ] **(6/3) Need to identify how to avoid duplicate**

#### Agenda
- Review Action Items
- Patrick requesting to SPS team to provide schema for any changes needed
     - VA.gov team can code against that
     - [ ] **(6/10) Heather to provide GH Link for team board for CG items
- Review of Queueing Next Steps
     - [ ] **(6/3) VA.gov scope : change from 2 data payloads to 1**
     - [ ] **VA.gov scope : Messaging changes review**
          - VA.gov team wants one unified message - All Good!
          - Pathway to get to CG team/CARMA is behind the scenes
               -  Concern for those users who call quick after submission, and we wouldn't have the record yet.
               -  Can our success message state "Please give us this amount of time for processing"?
               -  Matt B - Massive scrutiny, concerned of misinterpretation
                    -  constantly tested by other orgs
               -  CG Team does not want to convey msg that it is successful, potentially misinterpretation
               -  [ ] **(6/17) Discuss next week - Still looking for technical process, number of retries, etc to better inform messaging**
     - vets-api call will be async, and first call would go to mulesoft upon success response (within half a second)

- Review of Statistic/ Metrics Review
     - Added error breakdown as far back as September (Datadog implementation)
     - Did not include "Other errors" until we find out what they are (currently unclassified)
- Sign as a Representative Metrics Review
     - Check in next week after May numbers come out
- Central Mail
     - Patrick shares what he has found
     - Does process VHA forms
     - It is an option to process the rare instance of 1010CG forms, requirements will need to be outlined
     - Talk a bit more about how we want to address this

