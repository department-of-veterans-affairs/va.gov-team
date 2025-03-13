# How to Test Lighthouse Silent Failure Work Locally

## Testing upload success 
### When cst_send_evidence_submission_failure_emails is enabled
1. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is enabled
    2. `cst_synchronous_evidence_uploads` is disabled
    3. `cst_send_evidence_submission_failure_emails` is enabled
2. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
3. Update `app/sidekiq/lighthouse/evidence_submissions/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
4. Update `lib/lighthouse/benefits_claims/service.rb` with an icn of a user in staging `EX: @icn = '1012830712V627751' // icn for user 19`
5. Update `lib/lighthouse/benefits_documents/configuration.rb` to the participantId of the staging user that you are using ( you can get this from argo or ask someone with argo access to get this for you) `EX: participantId: 600_073_191,`
6. Run `vets-api` and `vets-website` locally
7. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
8. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that 1 record was added/updated to the evidence_submissions table
    1. The new records `upload_status` should be QUEUED

### When cst_send_evidence_submission_failure_emails is disabled
1. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is enabled
    2. `cst_synchronous_evidence_uploads` is disabled
    3. `cst_send_evidence_submission_failure_emails` is disabled
2. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
3. Update `app/sidekiq/lighthouse/evidence_submissions/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
4. Update `lib/lighthouse/benefits_claims/service.rb` with an icn of a user in staging `EX: @icn = '1012830712V627751' // icn for user 19`
5. Update `lib/lighthouse/benefits_documents/configuration.rb` to the participantId of the staging user that you are using ( you can get this from argo or ask someone with argo access to get this for you) `EX: participantId: 600_073_191,`
6. Run `vets-api` and `vets-website` locally
7. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
8. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that no records were added/updated to the evidence_submissions table

## Testing document upload status polling job when cst_send_evidence_submission_failure_emails is enabled
1. Follow steps 1-8 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/lighthouse-testing-locally.md#when-cst_send_evidence_submission_failure_emails-is-enabled)
2. Open a rails console in the terminal
      1. Run `rails c` or `rails console` in a terminal
3. Run the following commands run the document upload status polling job...
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
4. The record should have a `delete_date` and `upload_status` of SUCCESS

## Testing delete evidence submission record job runs when cst_send_evidence_submission_failure_emails is enabled
1. Follow steps 1-8 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/lighthouse-testing-locally.md#when-cst_send_evidence_submission_failure_emails-is-enabled) to create an evidence submission record with an upload_status IN_PROGRESS
2. Follow steps 1-4 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/lighthouse-testing-locally.md#testing-document-upload-status-polling-job-when-cst_send_evidence_submission_failure_emails-is-enabled) to update the upload_status to SUCCESS and add a delete_date
3. Open a rails console in the terminal
      1. Run `rails c` or `rails console` in a terminal
4. Run the following commands to change the record to have an earlier delete_date and run the delete evidence submission record cron job...
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
5. Your record should now be deleted

## Testing upload failure
### Testing upload failures - error occurs in document_upload.rb, when cst_send_evidence_submission_failure_emails is enabled
1. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is enabled
    2. `cst_synchronous_evidence_uploads` is disabled
    3. `cst_send_evidence_failure_emails` is enabled
    4. `cst_send_evidence_submission_failure_emails` is enabled
2. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
3. Update `app/sidekiq/lighthouse/evidence_submissions/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
4. Update `app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb` so that in notify_client.send_email() we replace recipient_identifier: { id_value: icn, id_type: 'ICN' } with email_address: 'YOUR_EMAIL',
5. Update `lib/lighthouse/benefits_claims/service.rb` with an icn of a user in staging `EX: @icn = '1012830712V627751' // icn for user 19`
6. Make sure `lib/lighthouse/benefits_documents/configuration.rb` is NOT updated to have a participantId --> this is how we will generate an error
7. Run `vets-api` and `vets-website` locally
8. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
9. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that 1 record was added/updated to the evidence_submissions table
        1. The new records `upload_status` should be FAILED and it should have a `failed_date`, `error_message` and `template_metadata -> personalisation -> date_failed`

### Testing upload failures - lighthouse returns a FAILED upload_status, when cst_send_evidence_submission_failure_emails is enabled
1. Follow steps 1-8 to add a record with an IN_PROGRESS upload_status [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/lighthouse-testing-locally.md#when-cst_send_evidence_submission_failure_emails-is-enabled)
2. Update `lib/lighthouse/benefits_documents/upload_status_updater.rb` and comment out the logic for lines 64-66. Add the line `process_failure` - this will make it so we set the record upload_status to FAILED regardless of what Lighthouse returns.
        1. NOTE: You could also do a update in rails console and just change the necessary fields so that the record is FAILED
3. Re-run `vets-api` and `vets-website` locally
4. Run the polling job to update the upload_status by following steps 1-3 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/lighthouse-testing-locally.md#testing-document-upload-status-polling-job-when-cst_send_evidence_submission_failure_emails-is-enabled)
        1. NOTE: you will see an `upload_status` of FAILED
6. Afterwards do `rails c` or `rails console` in a terminal 
        1. The new records `upload_status` should be FAILED and it should have an `acknowledgment_date`, `failed_date`, `error_message` and `template_metadata -> personalisation -> date_failed`

### When cst_send_evidence_submission_failure_emails is disabled
1. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is enabled
    2. `cst_synchronous_evidence_uploads` is disabled
    3. `cst_send_evidence_failure_emails` is enabled
    4. `cst_send_evidence_submission_failure_emails` is disabled
2. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
3. Update `app/sidekiq/lighthouse/evidence_submissions/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
4. Update `app/sidekiq/lighthouse/failure_notification.rb`
    1. Update sidekiq retries to be set to 0 for testing locally
    2. Update notify_client.send_email() and replace `recipient_identifier: { id_value: icn, id_type: 'ICN' }` with `email_address: 'YOUR_EMAIL',`
5. Update `lib/lighthouse/benefits_claims/service.rb` with an icn of a user in staging `EX: @icn = '1012830712V627751' // icn for user 19`
6. Make sure `lib/lighthouse/benefits_documents/configuration.rb` is NOT updated to have a participantId --> this is how we will generate an error
7. Run `vets-api` and `vets-website` locally
8. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
9. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that no records were added/updated to the evidence_submissions table and you should be sent a document upload failure email

## Testing document upload failure email job runs when cst_send_evidence_submission_failure_emails is enabled
1. For a type 1 error Follow steps 1-8 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/lighthouse-testing-locally.md#type-1-error-when-cst_send_evidence_submission_failure_emails-is-enabled) OR For a type 2 error follow steps 1-8 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/lighthouse-testing-locally.md#type-2-error-when-cst_send_evidence_submission_failure_emails-is-enabled)
2. Update `app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb` so that in `notify_client.send_email()` we replace `recipient_identifier: { id_value: icn, id_type: 'ICN' }` with `email_address: 'YOUR_EMAIL',`
3. Re-run `vets-api`
4. Open a rails console in the terminal
        1. Run `rails c` or `rails console` in a terminal
5. Run the following command to run the failure notification email job that sends a document upload failure email to a user
   ```
   // Run this command to run the failure notification email job that sends a document upload failure email to a user
   Lighthouse::EvidenceSubmissions::FailureNotificationEmailJob.perform_async
   ```
6. You'll see the record in the evidence_submission table now has a `va_notify_id` and `va_notify_date` and you should receive a document upload failure email
