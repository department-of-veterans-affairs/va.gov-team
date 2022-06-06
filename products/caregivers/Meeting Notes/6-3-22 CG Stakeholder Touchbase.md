## June 3, 2022 CG Stakeholder Touchbase

#### Action Items from Last Week
- VA.gov - Mulesoft Queueing : AI Dene to review verbiage and make recommendations - In Progress
     - “Your application is en route to the VA Medical Center you designated in the application. All applicants that provided an email address on the application will receive an email confirmation once the application is received by the VA.”
- Issues identified during VA.gov review of statistics
     - **AI VA.gov to log body of the errors in the future to assist in error analysis - In Progress. VA.gov looking into setting up**
     - **AI VA.gov will send the patterns/additional details of the failed messages from 5/2 -5 - completed**
     - **AI After receiving information from VA.gov, SPS and Mulesoft will discuss the errors with Mulesoft DTC team In Progress**
- From VA.gov Demo of Checkbox
     - **AI Va.gov team to let teams know when testing and release to prod can occur**
          - Design completed. In this sprint, ending 6/14. Testing dates TBD
 

#### Agenda
- Review Action Items
- Review of Queueing Next Steps
     - VA.gov scope : change from 2 data payloads to 1
- Review of Statistic/ Metrics Review
     - Breakdown for the reason for the errors - VA.gov to include going forward
     - **AI VA.gov to share github page about errors**
          - Errors display based on what the user is seeing/the cause of the issue
- Sign as a Representative Metrics Review
     - There are no other flags that indicate if it is POA or sign as a rep
     - VA.gov was going to add a flag to the payload (T/F). Not added yet. If Veteran signed would be (F).
          - VA.gov to schedule for next sprint. Not in prod yet. Possibly next sprint (6/15-6/28). Can deploy the next day. Deploy to staging and then deploys to prod the next day (do not wait till end of sprint).
               - VA.gov to email timeline
               - **Ranga to send scheme. VA.gov to agree to schema so that CARMA can code to schema, notify when it can be in Staging testing environment, and release to prod date**
               - It is required in app to sign as rep and upload document
               - **AI Igor to confirm that if VA.gov goes into prod before us it will not break the current functionality**
          - Send email when it is completed and when it will be in prod
- Planned Downtime (Processing and messaging)
     - VA.gov has verbiage for planned outage "We're making some updates to this [application]. We're sorry its not working right now and we hope to be finished by [end of time]. Please check back soon"
     - OIT/SPS to send email and slack message
     - VA.gov already gets MPI downtime messages. OIT and SPS to share just in case
          - **AI SPS and OIT to discuss if:**
               - Do we want any changes to the message
               - Should they automatically put the message and take down the 1010CG if MPI is planned to be down
- MuleSoft API Error/503 Errors
     - Sum of Errors -32 successful and 60 errors
     - AI SPS to review slide to identify issues
     - Yellow other errors - **VA.gov to look into and provide more error to identify what the error is**
     - **VA.gov to discuss sharing automated alerts to VA.gov with the SPS team. Use shared slack channel? See if it can be pointed to shared channel**
- VA.gov retry workflow proposal
     - Dependent on receiving Mulesoft message of "we caught it"
     - User will not wait - VA.gov will say "got it" to applicant
     - Want to implement within the next few sprints
     - **AI VA.gov to share timeline**
     - Option: do not go through Central Mail. How would it route to CSCs? How long would it take
          - **AI CSP and SPS to decide how this "ultimate failure" should play out**
     - Retry: 30 sec, 5 min, 10 min, 1 hr, 24 hr, 72 hr
     - Every third person is failing
     - **AI Team to determine new messaging as a one size fits all**
     - **Need to map out the whole process flow. And then discuss messaging**
     - **Need to identify how to avoid duplicate**
