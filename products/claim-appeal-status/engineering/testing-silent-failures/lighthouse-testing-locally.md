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
    1. The new records `upload_status` should be IN_PROGRESS

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
8. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that no records werw added/updated to the evidence_submissions table

## Testing document upload status polling job when cst_send_evidence_submission_failure_emails is enabled
1. Follow steps 1-8 [here]()
2. Open a rails console in the terminal
      1. Run `rails c` or `rails console` in a terminal
3. Run the following commands to change the record upload_status run the document upload status polling job...
   ```
    // Find your evidence submission passing in your claim id and tracked item id if necessary
   es = EvidenceSubmission.find_by(claim_id: <YOUR_CLAIM_ID>, tracked_item_id: <YOUR_TRACKED_ITEM_ID>)
   es //run this to see the current evidence submission id

   // Check the current upload_status
   es.upload_status
   
   // Run this command to run the document upload status polling job that updates the records upload_status
   Lighthouse::EvidenceSubmissions::EvidenceSubmissionDocumentUploadPollingJob.perform_async
   
   // Run this to verify that the record is upload_status has changed
   EvidenceSubmission.where(id: <YOUR_EVIDENCE_SUBMISSION_ID>).upload_status // should return SUCCESS
   ```

