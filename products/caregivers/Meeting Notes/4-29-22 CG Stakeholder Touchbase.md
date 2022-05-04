## Apr 29, 2022 CG Stakeholder Touchbase

### Notes:
- Metrics for Sign as a Representative
     - Matt Brown Assoc Director - wait for next month metrics, if hanging around 60%, then could probably increase to 100%
     - Dene thinks that 60% is good, but want to be mindful of processors 
     - Is 60% good enough for processing?
 
- Mulesoft resilient queuing design proposal and front-end changes needed to support
     - Met internally - This is only in INITIAL DESIGN discussions
     - Came up with some ideas on process we would like to have happen (2 POVs)
          - POV 1 - go asynch (let applicant know that it was queued, then something)
               - Worried that having to wait  (more than 10 sec) is not a good user exp.
               - Analysis shows majority of requests do not take too long (8 seconds)
                    - Some take 60, 30, etc
          - **POV 2 - Try to go synch, and if fails go async**
               - Would know right away if app is processed or not
               - Analysis shows majority of requests do not take too long (8 seconds)
               - If Synch doesn't work, will queue and display message that app is taking longer than normal to process & will notify via email or phone call?
               - If not processed, system will resubmit
               - Then notify user of submission success
          - May need to change how we interact with va.gov
               - Current has user print with "Sorry we couldn't process"
               - Future will show msg to queue, and when processed will recv email or phone call (whichever info is provided)
               - Application data and attachment sent in one message?
                    - Today case number is tied to attachment
                    - Future should be whole payload (structured data and attachment) - one call instead of 2
                    - Response will be sent back to va.gov
               - 2% failure rate in the last 110k applications
                    - 1600 did not have an email (Veteran or CG)
          - Marla is wondering about when an application is submitted a second time to add a secondary CG, how is this reconciled if the other app is still in progress
               - Still queued as separate applications
               - No changes to the flow, just changing the holding bucket, so the user does not need to stay on the page wondering what is going on

          - VA Notify for the notification?
               - They should, rather than use system based notifications
               - Also can manage how users want to be notified
               - Lauren will connect Paul & team with Beverly (PO at VANotify)


<Details>
     <Summary>Notes from Caitlin</Summary>
     
- What will it take to deliver to 100% applicants for VA.gov?
     - Wait to see what next month shows. Then go from there
     - If still around 60, then maybe up to 100
- MuleSoft Queuing
     - Might take more than 10 sec
     - Ranga did analysis. Found most requests do not take too long (8 sec - 30 sec)
     - **Changes to VA.gov
          - Give response it was successful OR timeout
          - Need new message if timeout
          - Instead of 2 payloads, put the attachment and info into 1 payload (eg 1 call)
          - Reduce 90 sec wait time to 50 sec**
     - 2% failure rate in current time period - does actually succeed but it tells the user that it did not work
          - 110k total through va.gov
          - 1,600 did NOT include an email. Should we require an email? Matt B to decide
          - If no email then they could call CSL   OR put at top of medical center queue
     - Would it get confused if there was already an app
     - VA Notify - should we use for email messages? AI Paul to look into. AI Lauren to send POCs so that we can look into (Beverly Nelson)
     - AI - Caitlin to send Visio for VA.gov team review
     - AI - After the schedule has been drafted, OIT to share with VA.gov team for MuleSoft queueing. VA.gov team to then review for any constraints
     - AI - Caitlin to send sample of VA.gov PPTs. Va.gov team to review and email fail/success percentage

</Details>
     
### Action Items
- [ ] Caitlin will send the proposed workflow for the next phase of MuleSoft
- [ ] 10-10 team will regroup internally to discuss the proposal and our impacts, possible timeline, and constraints
- [ ] Heather to provide Datadog metrics on applications and failures via email (and in each meeting following)
- [ ] Lauren will help to connect the Salesforce team with Beverly Nelson & VA Notify team
