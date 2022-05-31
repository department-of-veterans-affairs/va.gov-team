## May 27, 2022 CG Stakeholder Touchbase

### Caregivers/Salesforce/CARMA team Agenda:
- Staff Transition
     - Aaron - Moving to a new project!
     - Sam - Replacing Aaron

- Intros!
     - Caitlin - PM from OIT
     - Becca - CG Support Program (health system specialist under Matt Brown)
     - Drew - Wk with Caitlin. OIT - gathering issues and any other things needed
     - Matt M - Dep Program manager with Accumen Solutions (SalesForce) since 2019!
     - Mili - Solution Architect with Salesforce since 2019
     - David W - Product Test Lead for CARMA
     - Matt Brown - Director, 
- Update from VA Notify
     - Caregiver team (OIT) is going to pursue working with them on the correspondence to the applicants after submission of the 10-10CG application
          - This is the communication being sent when an application is queued due to Salesforce timeouts
          - Verbiage indicates that the application is in a certain process 
>**We then went into discussing the vets-api research**
- Research on Vets-api
     - **Patrick** mentioned the research we completed, and that vets-api can do the queueing/call (instead of mulesoft)
     - Typically, a user hits submit, receives success message on va.gov
          - Form is saved to a local data store on va.gov, job is kicked off in a task manager that attempts to deliver it to the downstream service, such as CARMA
          - If the attempt, something goes wrong, we have existing logic to try again in 30 seconds, a minute, etc
          - At the end (example retried 10 times in 24 hours), the PDF is then sent to Central Mail API, which is routed to the correct office for manual processing
               - Central Mail has an API that can accept digital forms
               - We have a va.gov service that will take structured data from a web form, format into PDF, and route to Central mail, it is systematically sent to the correct office for a human person to process manually
     - Can we apply this functionality in this use-case
          - Could be supplemental with Mulesoft retries
          - Could be 1st attempt to deliver to CARMA, then subsequently to Mulesoft in a fail event
          - Other possible opportunities
     - **Caitlin** - OIT is leaning to Mulesoft, in conjunction with other products they are already working on
          - **Igor** - We are trying to solve a Timeout problem specifically, because this is a large transaction
               - Most of the time, the processing time doesn't take too long (~5 seconds)
               - Want to make sure the user is not blocked when it takes longer
               - We did some investigating on why it takes longer
                    - Not necessarily related to the load
                    - Some objects we are using are shared with other workstreams (such as the Whitehouse hotline)
                    - The amount of weight can vary with the objects and whether they are in use by the other workstreams
          - **Patrick** - (looking for clarify/confirmation of understanding) The system itself may have a concurrency issue due to shared objects being locked
               - Retries would be to check if the shared object is unlocked so the process can continue
                    - **Igor** confirmed this is correct understanding
               - Have concerns on the differential messages being sent to users about the system process. 
                    - Should show success message regardless of queueing
                    - We can review the messaging provided, but leaning to not showing any different message
                    - **Lauren** - states we should not indicate that the application is not yet received
          - **Matt Brown**
               - Frustrated on the turnover
               - Confirmed that va.gov team was involved (no)
               - We have viable path forward with mulesoft
               - **Mili** - says they want to go forward with the mulesoft solution and it is viable
                    - We can have convo about the messaging and va.gov team concerns
                    - **Patrick** reiterated that we shouldnt show diff messages
                    - If ultimate system failure - VA CG will contact the applicant and have them complete the paperform and sent it in??
                         - Patrick - We would want the PDF formatted and sent ourselves, without having to reach back out
          - **Patrick** - Would like to look at possibility to implement vets-api retries in the event Mulesoft fails
               - **Igor** - this would make sense
               - We can explore this a bit more so the logic works together properly
          - **Caitlin** - current process
               - MPI confirms and returns ICN of Veteran
               - MPI works with Salesforce - MPIE 2.0
               - Want to confirm there will not be any conflicts or issues with this
               - **Mili** - Does not think there are any reasons that there would be any negative impacts here

- Demo of Checkbox
     - Shows Veteran Address in static section above data boxes
     - Will be available to both Primary and Secondary
     - Defaulted to blank (no check or data)
     - If any data is changed, the box will uncheck itself
     - If box is checked again, it will clear any data and replace with veteran address
     -**Matt Brown** - Looks great!
     - Confirmed no change to payload information
     - Tested and Deployed ETA - 
          - Team will discuss internally

- VAMC Lighthouse API ETA - Looking for August
     - Need implementation ETA
     - Avoid manual list
     - Looking for us to schedule this together
          - Team will discuss internally

- Current Successful/Failed CG submissions metrics
     - Heather reviewed chart, showing increase in failures since Mulesoft implementation at the end of March
     - Noted there were a large number of Mulesoft API errors seen on 5/25
     - After meeting, Heather sent screenshots of API Failures chart in CARMA slack

- Sign as a Rep
     - Based on April's decrease of acceptable documents received, the Online Health Apps team suggests to wait for May metrics before deciding on 100% deployment   


<details>
     <Summary>Notes from Caitlin</Summary>
     
#### Notes
- New Items
     - **Staff Transition**
     - **Update from VA Notif**y
          - Researching Moving upstream to VA.gov infrastructure
               - VA.gov has done a bit of research. Seems feasible
               - Typically, form submissions on VA.gov -- User hits submit. Sees confirmation screen ("we got ur appli"). Form is saved to temp store on VA.gov. Job kicked off on task manager. Attempts to deliver to downstream service
                    - Logic built in task manager to try again on routine basis
                    - After repeated retries and still cannot submit application, written to PDF --> to central API --> sends to correct office for manual processing
                         - Central Mail API that accepts digital forms. Take structured data off web form and put into PDF and delivers (secure drive or email?)
               - Solve = time out problem due to large transaction. Create set of objects and relationships in Salesforce. Normally 5 secs. But, sometimes can take too long
                    - Cause: some of the objects are shared objects with other Modules in Salesforce. Need access to area locked by someone else (concurrency/shared object issue)
          - Scope for VA.gov
               - Issue with differential messages. As long as the data has been received, it should not matter to the Veteran.
               - AI Dene to review verbiage and make recommendations
                         - “Your application is en route to the VA Medical Center you designated in the application. All applicants that provided an email address on the application will receive an email confirmation once the application is received by the VA.”
     - **Next Steps**
     - **VAMC Update**
          - CARMA looking into connection with Lighthouse API for VAMC info (eg name, phone number, address, etc)
          - Would go to prod in ~August 2022
          - VA.gov Scope: look into changing VA.gov list of VAMC info for Veteran questions on 1010CG from manual CARMA list to the Lighthouse API
     - **VA.gov Review Statistics**
          - 41 application errors on Wednesday (5/25) 503 errors. Seems like MuleSoft was unavailable. May not be 100% failure rate
          - AI VA.gov to log body of the errors in the future to assist in error analysis
          - AI VA.gov will send the patterns/additional details of the failed messages from 5/25
          - AI After receiving information from VA.gov, SPS and MuleSoft will discuss the errors with MuleSoft DTC team
          - DECISION: VA.gov staff will use slack channel if any future issues occur
     - **MPIe 2.0**
          - Should not impact VA.gov 1010 CG. VA.gov passes us the ICN. Salesforce will change how we correlated with MPI
     - **Demo of Checkbox**
          - After Vet has entered info, goes to PC page. May live with Veteran. Give Caregivers the option to hit checkbox to have the Veteran address populate
          - Does NOT effect payload
          - Defaulted to blank
          - Will also appear on all other Caregiver pages
          - AI Va.gov team to let teams know when testing and release to prod can occur

</details>
