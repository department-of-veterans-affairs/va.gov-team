# How to Test Lighthouse Silent Failure Work Locally

## Upload success when `cst_send_evidence_submission_failure_emails` is enabled
### Testing uploading a file in the CST
1. Make sure you have ArgoCD Access
    1. If you dont have access you can go to [this](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&projects=&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D) link and create a github ticket to get access
2. Make sure you have SOCKS ACCESS
    1. If you dont have access you can go to [this](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/onboarding/socks-and-sentry-access.md#how-to-get-socks-access)
    2. Make sure to Open an SSH tunnel after getting SOCKS access details in the link above
3. Go to [ArgoCD](https://argocd.vfs.va.gov ) and login
4. Search for the project `vets-api-staging`
5. Selected a pod with `vets-api-web` and select `Exec`
6. A new screen will open up with a terminal, type in `bundle exec rails c` (this will load the rails console)
7. 14. Run `EvidenceSubmission.count` and note how many records there are
8. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is enabled
    2. `cst_synchronous_evidence_uploads` is disabled
    3. `cst_send_evidence_submission_failure_emails` is enabled
9. Go to Staging and log into a user that has a claim.
10. Select a claim from the claim status tool list, navigate to the Files Tab and upload a file
11. Afterwards go back to [ArgoCD](https://argocd.vfs.va.gov ) and login
12. Search for the project `vets-api-staging`
13. Selected a pod with `vets-api-web` and select `Exec`
14. A new screen will open up with a terminal, type in `bundle exec rails c` (this will load the rails console)
15. Run `EvidenceSubmission.count` you should see the additional record added to your count
    1. To find your specific record you can do `EvidenceSubmission.last` OR `EvidenceSubmission.where(claim_id: <YOUR_CLAIM_ID)` OR `EvidenceSubmission.where(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)`
    2. The new records `upload_status` should be **IN_PROGRESS**

### Testing the lighthouse document upload status polling job
1. Perform steps 1-14 noted in the [Testing uploading a file in the CST]()
2. Within the ArgoCD terminal using rails console run the following commands to run the lighthouse document upload status polling job...
    1. NOTE: If you dont run this manually it is set up to run hourly
    ```
    // Find your evidence submission passing in your claim id and tracked item id if necessary
    es = EvidenceSubmission.find_by(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)
    es //run this to see the current evidence submission id
    
    // Check the current upload_status
    es.upload_status
    
    // Check the current delete_date
    es.delete_date
    
    // Run this command to run the document upload status polling job that updates the records upload_status
    Lighthouse::EvidenceSubmissions::EvidenceSubmissionDocumentUploadPollingJob.perform_async
    
    // Run this to verify that the records is upload_status has changed
    EvidenceSubmission.where(id: <YOUR_EVIDENCE_SUBMISSION_ID>).upload_status // should return SUCCESS
    
    // Should also see that there is now a delete_date
    EvidenceSubmission.where(id: <YOUR_EVIDENCE_SUBMISSION_ID>).delete_date // should NOT be nil
    ```
3. The record should have a `delete_date` and `upload_status` of **SUCCESS**

### Testing the delete evidence submission record job 
1. Perform steps 1-2 noted in the [Testing the lighthouse document upload status polling job]()
2. Run the following commands to change the record to have an earlier delete_date and run the delete evidence submission record cron job...
    1. NOTE: If you dont run this manually it is set up to run daily
    ```
    // Find your evidence submission passing in your claim id and tracked item id if necessary
    es = EvidenceSubmission.find_by(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)
    es //run this to see the current  evidence submission id
    
    // Check the current delete_date
    es.delete_date
    
    // Update the delete_date to be a date that has passed. If you do the current date it wont be picked up until the date is in the past.
    es.update(delete_date: "<NEW_DATE>")
    
    // Run this command to run the delete evidence submission record job that deletes records
    Lighthouse::EvidenceSubmissions::DeleteEvidenceSubmissionRecordsJob.perform_async

    // Run this to verify that the record is deleted, nothing should come up
    EvidenceSubmission.where(id: <YOUR_EVIDENCE_SUBMISSION_ID>) // should return 0 results
    ```
3. Your record should now be deleted

### EVSS - Upload failure for type 1 when cst_send_evidence_submission_failure_emails is enabled


