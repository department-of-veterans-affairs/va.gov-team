## Jul 29, 2022 CG Stakeholder Touchbase

### Notes

- New certificates loading into Prod
     - How many testing environments do we have?
          - Per Lihan - There are 2 testing environments and connect with MPI
               - Staging (to SQA)
               - Dev - more mock data (->INT)

- Deployment schedule
     - Online Health apps team will have everything ready by 8/29
     - Testing starting in VA.gov Dev & Carma UAT on 8/29-9/16
     - VA.gov PreProd (staging) and Carma Staging on 9/19-9/21
     - Production 9/22

- Retry windows
     - suggesting several minutes of retries, not hours.
     - Lihan provided a scenario of a failing deployment, and Satish said it should be resolved in 5 minutes
     - Outage windows (DTC oudowntimes) can be 1-2 hours at most

- Metrics review
- Submission Page Content
     - In the content revision, we outline that the CSP will respond via the email address provided
          - Will an email go to each person who provided an email address? (Veteran and Caregiver(s))
               - **ANSWER**: Yes, and email will go out to each email address provided
          - Is anyone contacted via phone or paper mail if there is no email address for that person?
               - **ANSWER**: Email is sent to any email addresses provided.  Anyone else on the application who did not provide an email address will be contacted via phone or paper mail.  It is not consistent between sites on whether these people will be contacted by a priority channel (example: strictly by phone, then paper mail, or vice versa).  "They will be contacted" but the CG team did not want to specify how.


#### Notes from Tham
Below is the Meeting Notes, action items marked in yellow;

- VA.gov testing environments - Staging and Dev
     - Both connect to MPI
     - DEV = lower
     - Staging = MPI ISQA
     - Dev = MPI INT
     - **AI Ranga and Ruman** to work with DTC to align the testing environments between Salesforce, VA.gov and MPI. Their Dev to our SIT so MPI environments line up
     - **AI Caitlin and Tham** to adjust schedule for 2 testing environments
- Release to prod
     - VA Notify go first whenever, VA.gov go second close to Mulesoft Queue, and no Salesforce to prod
 
- If catastrophic and VA.gov cannot submit
     - Retrieve the PDF of application. Email CSP in an encrypted email
     - **AI - Heather **to share Catastrophic plan when drafted
