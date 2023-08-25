## Jul 22, 2022 CG Stakeholder Touchbase

### Notes

- Prod issue
     - Explanation of issue CD-1130430
          - Applicant filling out with Primary CG, however data is coming in as Secondary CG.  
          - Becca requested more info from Ops team from last 30 days
     - Date & Time provided for one example (**6/2/2022 12:04PM EST**)
     - Health Apps team requesting if CARMA team/Ramesh can provide request body without PII
          - Health Apps team can review and set up a catch if it happens again
     - CARMA team/Ramesh will compare raw data with PDF generated
          - So far, per email from Ramesh, Data & PDF show secondary CG only
          - Requesting more examples

- Catastrophic Failure SOP
     - Health Apps team requesting average MuleSoft downtimes since implementation
     - Health Apps team provided link to SOP in deck with metrics

- ICN Implementation
     - This is feasible and Lihan is working on this now!

- Vets-api retries
     - Health Apps team is targeting end of August to complete
     - This includes the single async call

- Caregiver Same Address checkbox released to 100% on Thursday!

- MPI Validation errors
     - Today, when the Veteran cannot be validated in MPI, the applicant receives an error message
     - The application is not submitted and the applicant must print and mail it.
     - This scenario has potential for us to solve without the print & mail process
          - VA.gov sends the application,  potentially append an indicator “Not validated” (for example)
               - Allowing for those applications to have extra attention
     - **CG team response**: Concerns raised about sending invalid applications, creating additional burden on support teams.
          - Health Apps team has a ticket in the backlog to dive into any details on whether the MPI errors are seen for actual Veterans or erroneous entries.

### **Notes from Tham**
- ISSUE: When someone applies as a Primary Caregiver, it is being sent as a Secondary Caregiver (caregiver moving from Primary slot to Secondary)
     - WHERE: In Prod
     - Application Received:  6/2/2022 12:04 PM
- Need specific information like - Date and Time, when the data came across (should be within 30 days)
     - [ ] AI Ramesh - Ramesh will continue to review the examples provided by Becca. Ramesh will compare to what we received FROM Mulesoft
     - [ ] AI Rebecca - continue to send examples from the field
 
- Heather is working on the SOP for 2 catastrophic failure instances and she needs the below information;
     - Mulesoft downtime numbers to outline the retry intervals before determining a "catastrophic failure".
          - The average downtime that MuleSoft has experienced since implementation
          - The peak downtime that MuleSoft has experienced since implementation
     - Action Item: Mulesoft DTC team to provide with the numbers/comments
 
- stage.vapi.va.gov downtime, getting 503s when trying to submit applications
     - Ramesh and Lihan confirmed on slack message – this issue is resolved  7/22 - 12:30PM
 
- Veteran ICN
     - Looking into from VA.gov  -- Lihan is working on it, Feasible

- AI -David to begin making testing plan
     - Do we do testing in prod?
     - How do we do load testing?
     - How do we do negative testing?
     - dev.va.gov (lowest, least stable)
     - staging.va.gov (non-prod)
     - va.gov (prod)
          - Scheduling to make testing on Oct 1st
