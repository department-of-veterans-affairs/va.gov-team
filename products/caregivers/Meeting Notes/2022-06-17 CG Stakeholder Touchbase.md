## June 17, 2022 CG Stakeholder Touchbase

#### Action Items from 6/10 (did not review during 6/17 meeting)
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
     - Centralize Mail Portal - Patrick spoke with team. Thought processing digital 1010CG if VA.gov retries fail is SUPER possible for ultimate failures on VA.gov side
     - [ ] **AI Patrick to look into if VA.gov can store PII PHI**
- MuleSoft API Error/503 Errors
     - Yellow other errors
          - [ ] **(6/3) VA.gov to look into and provide more error to identify what the error is**
     - [ ] **(6/3) VA.gov to discuss sharing automated alerts to VA.gov with the SPS team. Use shared slack channel? See if it can be pointed to shared channel**
- VA.gov retry workflow proposal
     - [ ] **(6/3) AI VA.gov to share timeline**
     - Option: do not go through Central Mail. How would it route to CSCs? How long would it take
          - [ ] **(6/3) AI CSP and SPS to decide how this "ultimate failure" should play out**
     - [ ] **(6/3) AI Team to determine new messaging as a one size fits all**
     - [ ] **(6/3) Need to map out the whole process flow. And then discuss messaging**
          - [ ] **(6/10) Discuss on 6/17 - Still looking for technical process, number of retries, etc to better inform messaging**
          - [ ] **(6/10) Discuss on 6/24 - Content for messaging with Dene'**
     - [ ] **(6/3) Need to identify how to avoid duplicate**


#### Notes
- Due to staff outages and other conflicts, technical queuing discussion is moved to next week.
- **Production issue** - Release of POA flag caused all applications to fail after 4:30pm ET
     - Maintenance notice was posted, then taken back down after reverting code change back
     - **Observation from Mili**:
          - VA.gov was not calling Mulesoft
     - **Finding**: VA.gov team did not test the change in lower environment
          - Staging environment currently connects to 
          - This needs to be updated to connect to the Mulesoft testing environment
               - Planning to do this on VA.gov side
          - 2 sides to testing
               - Internal local testing - no connections needed
               - End to End testing 
                    - To be done when any changes to payload or flows are made (not just UI)
               - **Question**: Are you all able to do backend testing without mule?
                    - So end to end only needs to happen in staging?
                         - **Mili**: User _**must exist in MPI**_ for proper testing to receive ICN and everything
                    - **Igor**: We don't have to use real data in staging.  As long as the data that Va.gov has in our environment matches what is in the Mulesoft environment.  
                         - NOTE: We can share the test user data we will be using
                         - Lihan Concern: If we connect to Mulesoft staging, there is a potential security issue since their environment contains real people data.
                         - May be able to switch to UAT
     - **Finding**: Backend code did not allow the call to go through
          - This is how we identified that BE changes are needed
          - **Lihan** looking for the correct test server address - posted in shared slack
     - Need to look at adjusting or creating alerts with shorter threshold time periods
          - Currently at 25% failures for the month
          - Need to look at an alert within a shorter time - [#43084 ticket created](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43084)




<details>
     <summary>Notes from Caitlin</summary>
     
**Notes**
 
**Production Issue**
- Why occurred?
     - POA flag on backend. Did not test in a lower environment. 124 failed apps
     - [ ] **(6/17) AI Lihan - Slack channel that VA.gov has for error did not go off. Lihan to adjust to ensure that it will ping (was set to 25% failure/mnth. Can we set for 100% failure in XX min)**
          - [ ] **(6/17) AI David to work Lihan to discuss the pings needed - 1 for critical crashes where a bunch fail in an hour, and 1 for weird oops that keep cropping up**
     - [ ] **(6/17) AI Heather to add SPS and OIT teams to the slack channel.**
     - [ ] **(6/17) AI Tham and David to set up end to end testing for VA.gov and Mulesoft and Salesforce**
          - David and Tham to reach out to Lihan in slack. Lihan is not sure which server to use (go through MPI SQAi --> Mulesoft --> CARMA staging)
                    - David to make testing policy and procedure
                         - How to test between 2 teams
          - VA.gov Staging (all fake. No PII/PHI needed) --> Preprod. Can test in dev. VA.gov staging is not working
                    - MPI preprod can have PII/PHI AND fake people
                    - Last time VA.gov staging was trying to connect to MPI SQA
          - Mulesoft can set up way where additional individuals can be used, but identities must exist in MPI Preprod
     - Has front end end-to-end testing. Did not have backend. Backend did not allow the attribute to be added

- Next Steps for Checkbox
     - Depends on what change needs to be done to test/setting up the testing
     - Lihan to connect staging to Mulesoft/Salesforce
     - 3 days for VA.gov write code
     - David to facilitate testing in Slack the week of July 5th

  
     </details>
