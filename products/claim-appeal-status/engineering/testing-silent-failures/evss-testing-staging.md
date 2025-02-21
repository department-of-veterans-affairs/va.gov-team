# How to Test EVSS Silent Failure Work in Staging

## Upload success when cst_send_evidence_submission_failure_emails is enabled
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
7. Run `EvidenceSubmission.count` and note how many records there are
8. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is disabled
    2. `cst_send_evidence_submission_failure_emails` is enabled
9. Go to Staging and log into a user that has a claim.
10. Select a claim from the claim status tool list,navigate to the Files Tab and upload a file
11. Afterwards go back to [ArgoCD](https://argocd.vfs.va.gov ) and login
12. Search for the project `vets-api-staging`
13. Selected a pod with `vets-api-web` and select `Exec`
14. A new screen will open up with a terminal, type in `bundle exec rails c` (this will load the rails console)
15. Run `EvidenceSubmission.count` you should see the additional record added to your count
    1. To find your specific record you can do `EvidenceSubmission.last` OR `EvidenceSubmission.where(claim_id: <YOUR_CLAIM_ID)` OR `EvidenceSubmission.where(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)`
    2. The new records `upload_status` should be **SUCCESS** and there should be a `delete_date`

### Testing the delete evidence submission record job 
1. Perform steps 1-14 noted in the [Testing uploading a file in the CST](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/evss-testing-staging.md#testing-uploading-a-file-in-the-cst)
2. Within the ArgoCD terminal using rails console run the following commands to change the record to have an earlier delete_date and run the delete evidence submission record cron job...
    1. NOTE: If you dont run this manually it is set up to run daily
    ```
    // Find your evidence submission passing in your claim id and tracked item id if necessary
    es = EvidenceSubmission.find_by(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)
    es //run this to see the current  evidence submission id

    // Check the current delete_date
    es.delete_date

    // Update the delete_date to be a date that has passed. If you do the current date it wont be picked up until the date is in the past.
    es.update(delete_date: "<NEW_DATE>")

    // Run this command to run the delete evidence submission record job that deletes records or wait for 24 hours for the job to run automatically
    Lighthouse::EvidenceSubmissions::DeleteEvidenceSubmissionRecordsJob.perform_async

    // Run this to verify that the record is deleted, nothing should come up
    EvidenceSubmission.where(id: <YOUR_EVIDENCE_SUBMISSION_ID>) // should return 0 results
    ```
18. Your record should now be deleted

## Upload failure for type 1 and 2 when cst_send_evidence_submission_failure_emails is enabled
### Testing uploading a file in the CST
1. Perform steps 1-14 noted in the [Testing uploading a file in the CST](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/evss-testing-staging.md#testing-uploading-a-file-in-the-cst)
2. Create an ID.me Account in Staging, instructions [here](products/claim-appeal-status/engineering/onboarding/create-idme-staging-account.md)

### Testing the document upload failure email job runs
1. Perform steps 1-2 noted in the [Testing uploading a file in the CST](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/evss-testing-staging.md#testing-uploading-a-file-in-the-cst-1)
2. Within the ArgoCD terminal using rails console run the following commands to change the record to a failure and run the document upload failure email cron job...
   1. NOTE: If you dont run this manually it is set up to run daily
   ```
   // Find your evidence submission passing in your claim id and tracked item id if necessary
   es = EvidenceSubmission.find_by(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)

   // Create a new personalisation with a date_failed
   new_personalisation = JSON.parse(es.template_metadata)['personalisation']
   new_personalisation['date_failed'] = "<YOUR_DESIRED_DATE>" // Example: "February 12, 2025 4:47 p.m. EST"
   
   // Update your evidence submission record template_metadata with a new personalisation
   es.update(template_metadata: { personalisation: new_personalisation }.to_json)
   
   // Update your evidence submission record from a successful record to a failed record
   // Set the acknowledgement_date and failed_date to a date that you want (if your hoping to run the failure email job next consider
   // setting the failed_date to es.created_at date so that the job will process your record
   es.update(upload_status: 'FAILED', delete_date: nil, acknowledgement_date: <DESIRED_DATE>, failed_date: <DESIRED_DATE>, error_message: 'EVSS::DocumentUpload document upload failure')

   // After the update check each field to make sure it is updated correctly
   ```
3. You should now have a record with a FAILED upload_status, a nil delete_date, an acknowledgement_date, a failed_date, an error_message and a template_metadata -> personalisation -> date_failed
4. Within the ArgoCD terminal using rails console run the following commands to update the User Account ID on a record and to run the document upload failure email cron job...
    1. NOTE: If you dont run this manually it is set up to run daily
    ```
    // If you have an ICN in staging, look up your account id using your icn and update the evidence submission record with your account id
    // This will make it so that when we run the failure email cron job, you will receive the email
    account_id = UserAccount.find_by(icn: "<YOUR_ICN>").id
    es.update(user_account_id: account_id)
    
    // Run this command to run the failure notification email job that sends a document upload failure email to a user or wait for     // 24 hours for the job to run automatically
    Lighthouse::EvidenceSubmissions::FailureNotificationEmailJob.perform_async
    
    // Look up your evidence submission record and you should see your record now has a va_notify_id and and a va_notify_date
    ```
5. If you changed the User Account ID of the evidence submission record then you should expect to receive a document upload failure notification email
