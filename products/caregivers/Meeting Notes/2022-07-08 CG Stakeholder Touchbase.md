## Jul 8, 2022 CG Stakeholder Touchbase - Submission Messaging

### Notes

><details>
>  
>  <Summary>Screenshot of suggested verbiage from CG team</Summary>
>  
>  ![image](https://user-images.githubusercontent.com/92328831/178042645-e63a687d-3fe9-464b-9cd8-7e40939f0c7e.png)>
>
</details> 

- Christian Del Rosario shares the suggested verbiage for the message to show after submitting the CG form
     - Using verbiage “Completing” instead of “Submitting”
     - Email is not required field - and cannot be required legally
          - Can Health apps team add some verbiage on the email field around how it could be useful for communication
     - 24hr period
          - Still being discussed on timeframe, but 24hrs is tentative
          - Visio walkthrough shared
               - 2 areas where 24hr could exceed
                    - Retries could exceed due to Mulesoft outage for multiple days
                    - Retries could exceed due to Salesforce/CARMA outage for multiple days
               - Plan to triage together when they happen
     - Download link for the application
          - This only appears on failures
          - CG Team wants to implement for successes as well
          - This should not be a significant effort for Health Apps team
     - Testing Schedule
          - ![image](https://user-images.githubusercontent.com/92328831/178043246-049ebf69-b3a8-49d9-9091-5d0cc6e8edd7.png)
          - Health Apps Team look at our schedules and outline our schedule of work for next week
               - Patrick has concern with deploying so close to 10/1
                    - Suggests at least a week earlier (9/9)
                    - Would like as much runway as possible before October
          - Suggested from CG team
               - Testing between 8/29 and 9/23
               - Prod 9/16 or 9/23 - pending applicant traffic
                    - 9/23 Code Freeze
               - Live Production test
                    - Can work with live applications or test applications that can be deleted later
- API for combined form and attachment - is this ready yet?
     - Under development (Per Ruman)
     - Once ready, we need documentation to call it
          - Ruman can provide this next week (7/15)
- One Payload with Data, Veteran ICN and attachments
     - Vets-api does not send the ICN today
     - Ranga says this is a bug and should be in the metadata
     - Would help with CG downstream process with MPI

>Per Paul Kuprionas (Salesforce)
>![image](https://user-images.githubusercontent.com/92328831/178042305-7e324615-6fe8-495e-8d6e-71894d2d4a13.png)
>
>This was what I found, and I remember it now - since vadotgov was not able to give us definitively the individual was a vet we decided to drop ICN and force a search in CARMA - but MPI is pushing back on that

- Online Health Apps team shared metrics
     - Created a ticket in the backlog to research the steady trend of errors where the Veteran is not found in MPI


### Notes from Tham
Meeting Notes and AI items from today’s call: Routine touchbase with the VA.gov Team and the CSP, SPS, and MuleSoft teams
- Not receiving message within 24 hours – 2 instances captured for catastrophic events;
1. Application goes to Mulesoft queue and if there is power cut
2. Queueing on Mulesoft Orchestrates and not able to retry or trying to create a subversion, CSP manual is not possible also.
     - **AI VA.gov** needs to make SOP of catastrophic failure and how to get it to CSP manually
     - **AI Mulesoft SPS** to look into if the deployment can be any earlier
     - **AI Ruman** to provide a how to connect to the new API document to Lihan for the VA.gov Queue by 7/15
     - **AI VA.gov team** to look into the Veteran not MPI Errors

