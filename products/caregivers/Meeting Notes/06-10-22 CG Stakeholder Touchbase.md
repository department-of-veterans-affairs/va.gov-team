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

#### Notes
- Reviewed Action Items
- Patrick requesting to SPS team to provide schema for any changes needed
     - VA.gov team can code against that
     - [ ] **(6/10) Heather to provide GH Link for team board for CG items
- Review of Queueing Next Steps
     - [ ] **(6/3) VA.gov scope : change from 2 data payloads to 1**
     - [ ] VA.gov scope : Messaging changes review
          - VA.gov team wants one unified message - All Good!
          - Pathway to get to CG team/CARMA is behind the scenes
               -  Concern for those users who call quick after submission, and we wouldn't have the record yet.
               -  Can our success message state "Please give us this amount of time for processing"?
               -  Matt B - Massive scrutiny, concerned of misinterpretation
                    -  constantly tested by other orgs
               -  CG Team does not want to convey msg that it is successful, potentially misinterpretation
               -  [ ] **(6/10) Discuss on 6/17 - Still looking for technical process, number of retries, etc to better inform messaging**
               -  [ ] **(6/10) Discuss on 6/24 - Content for messaging with Dene'**
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
     - Should talk a bit more about how we want to address this

<details>
     <summary>Notes from Caitlin</summary>
     
**Notes**
 
Action Items from Last Week
- Issues identified during VA.gov review of statistics
     - [ ] **AI VA.gov to log body of the errors in the future to assist in error analysis - In Progress. VA.gov looking into setting up. VA.gov to share git hub page about error**
          - The ability to log the errors will release to prod today.
          - VA.gov sent Github link in the slide deck for submission errors in last week's PPT
     - [ ] **AI After receiving information from VA.gov, SPS and MuleSoft will discuss the errors with MuleSoft DTC team In Progress**
          - SPS has sent information to MuleSoft DTC. May seem like Salesforce downtime. Team still investigating
          - For the downtime on 6/11, VA.gov will post the offline message from ~12pm-12:05pm ET
 

- From VA.gov Demo of Checkbox - Check a box saying I Live in the Same Place as the Veteran. Reuse Address. UI Only Change
     - [ ] **AI Va.gov team to let teams know when testing and release to prod can occur**
          - Design completed. In this sprint, ending 6/14. Testing dates on 6/13-6/14
               - Blocker: Issue that is blocking the release to prod, but can test. Select component for state recognizes user input but not programmatic change of the value. Looks like state not selected even though has a value
                    - Conduct front end testing on VA.gov side only.
 

- Sign as a Representative - Flag to Send when Rep Signs in Place of Veteran (no UI side changes)
     - [ ] **AI Ramesh to confirm that if VA.gov goes into prod before us it will not break the current functionality (changes at the Mule layer to send to Salesforce layer? Will it break the current Mule flow?)**
          - Recommendation for future: CARMA/SPS maintain a schema so that VA.gov can code against
     - Ranga to send schema. VA.gov to agree to schema so that CARMA can code to schema - **Completed**
     - [ ] VA.gov notify when it can be in Staging testing environment, and release to prod date - In Progress
 

CARMA/VA.gov Access to Backlog Items

- [x] **Heather to give CARMA OIT and SPS access to backlog. OIT and SPS to enter VA.gov US into the backlog. Load supporting docs (technical and Visio). The refine with the whole team**
 

**Agenda**
- Review Action Items
- Review of Queueing Next Steps
     - SPS and CSP updated the Visio flow
     - Centralize Mail Portal - Patrick spoke with team. Thought processing digital 1010CG if VA.gov retries fail is SUPER possible for ultimate failures on VA.gov side
     - [ ] **AI Patrick to look into if VA.gov can store PII PHI**
     - Next Steps:
          - Meeting on 6/17 will focus purely on the technical discussion. Then, discuss messaging
 

- Review of Statistic/ Metrics Review
     - Breakdown for the reason for the errors - VA.gov to include going forward
     - [x] **AI VA.gov to share GitHub page about errors**
          - Errors display based on what the user is seeing/the cause of the issue
- Planned Downtime (Processing and messaging)
     - VA.gov has verbiage for planned outage "We're making some updates to this [application]. We're sorry its not working right now and we hope to be finished by [end of time]. Please check back soon"
     - VA.gov already gets MPI downtime messages. OIT and SPS to share just in case
          - [ ] **AI SPS and OIT to discuss if:**
               - Do we want any changes to the message
               - Should they automatically put the message and take down the 1010CG if MPI is planned to be down
     
     </details>
