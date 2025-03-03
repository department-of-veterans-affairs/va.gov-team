# How to Test EVSS Silent Failure Work Locally

## Testing upload success 
### When cst_send_evidence_submission_failure_emails is enabled
1. Make sure that you have SOCKS access, if you dont follow this [guide](products/claim-appeal-status/engineering/onboarding/socks-and-sentry-access.md)
2. Open an SSH tunnel in terminal by doing the following
   ```
      // Go into devops/utilities
      cd devops/utilities
      
      // If you havent added jq or awscli then brew install them
      brew install jq
      brew install awscli
      
      // Generate temporary credentials for AWS 
      // Replace the User Name with your AWS user name ex: Jim.Frank
      // Replace the MFA Code with the 6 digit code that you see on your MFA app for // AWS
      source ./issue_mfa.sh <User Name> <MFA Code>
      
      //Get a list of the current forward proxy instances in staging
      // NOTE: The private ip addresses will be used below and q key with the enter key  // lets you exit
      // EX: 
      // Instance ID		Private Ip	Name
      // i-00c543a63d6753411	10.247.35.112	dsva-vagov-staging-deployment-vagov-staging-fwdproxy-20240312-201722-asg
      
      ./ssm.sh fwdproxy staging
      
      // This command will create the ssh tunnel
      // Note: In the IP Address replace the . with -
      // EX:10.247.35.112 => 10-247-35-112
      ssh -L 4447:localhost:4431 ip-<IP Address>.us-gov-west-1.compute.internal
      // When it asks you "Are you sure you want to continue connecting?" type yes
      
      // If you have issues with the above command then run the socks command
      vtk socks on
      ```
3. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is disabled
    2. `cst_send_evidence_submission_failure_emails` is enabled
4. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
5. Update `app/sidekiq/evss/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
6. Run `vets-api` and `vets-website` locally
7. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
8. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that 1 record was added/updated to the evidence_submissions table
    1. The new records `upload_status` should be SUCCESS and there should be a `delete_date`

### When cst_send_evidence_submission_failure_emails is disabled
1. Make sure that you have SOCKS access, if you dont follow this [guide](products/claim-appeal-status/engineering/onboarding/socks-and-sentry-access.md)
2. Open an SSH tunnel in terminal by doing the following
   ```
      // Go into devops/utilities
      cd devops/utilities
      
      // If you havent added jq or awscli then brew install them
      brew install jq
      brew install awscli
      
      // Generate temporary credentials for AWS 
      // Replace the User Name with your AWS user name ex: Jim.Frank
      // Replace the MFA Code with the 6 digit code that you see on your MFA app for // AWS
      source ./issue_mfa.sh <User Name> <MFA Code>
      
      //Get a list of the current forward proxy instances in staging
      // NOTE: The private ip addresses will be used below and q key with the enter key  // lets you exit
      // EX: 
      // Instance ID		Private Ip	Name
      // i-00c543a63d6753411	10.247.35.112	dsva-vagov-staging-deployment-vagov-staging-fwdproxy-20240312-201722-asg
      
      ./ssm.sh fwdproxy staging
      
      // This command will create the ssh tunnel
      // Note: In the IP Address replace the . with -
      // EX:10.247.35.112 => 10-247-35-112
      ssh -L 4447:localhost:4431 ip-<IP Address>.us-gov-west-1.compute.internal
      // When it asks you "Are you sure you want to continue connecting?" type yes
      
      // If you have issues with the above command then run the socks command
      vtk socks on
      ```
3. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is disabled
    2. `cst_send_evidence_submission_failure_emails` is disabled
4. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
5. Update `app/sidekiq/evss/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
7. Run `vets-api` and `vets-website` locally
8. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
9. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that 0 records were added/updated to the evidence_submissions table

## Testing delete evidence submission record job runs when cst_send_evidence_submission_failure_emails is enabled
1. Follow steps 1-8 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/evss-testing-locally.md#when-cst_send_evidence_submission_failure_emails-is-enabled)
2. Open a rails console in the terminal
      1. Run `rails c` or `rails console` in a terminal
3. Run the following commands to change the record to have an earlier delete_date and run the delete evidence submission record cron job...
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

## Testing upload failures - error occurs in document_upload.rb
### When cst_send_evidence_submission_failure_emails is enabled
1. Make sure you do NOT have an open an SSH tunnel in terminal
2. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is disabled
    2. `cst_send_evidence_submission_failure_emails` is enabled
4. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
5. Update `app/sidekiq/evss/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
6. Run `vets-api` and `vets-website` locally
7. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
8. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that 1 record was added/updated to the evidence_submissions table
    1. The new records `upload_status` should be FAILED and there should be a `failed_date`, `error_message` and `template_metadata -> personalisation -> date_failed`
          - NOTE there will not be a `acknowledgment_date` populated for evss but for lh type 1 errors this field will be populated

### When cst_send_evidence_submission_failure_emails is disabled
1. Make sure you do NOT have an open an SSH tunnel in terminal
2. Change the following feature flags...
    1. `benefits_documents_use_lighthouse` is disabled
    2. `cst_send_evidence_submission_failure_emails` is disabled
    3. `cst_send_evidence_failure_emails` is enabled
4. Locally make sure your `settings.local.yml` in `vets-api` has a [vanotify section](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits-portfolio/benefits-management-tools/claim-status-tool/engineering/va-notify.md)
5. Update `app/sidekiq/evss/document_upload.rb` so that sidekiq retries are set to 0 for testing locally
6. Update `app/sidekiq/evss/failure_notification.rb`
    1. Set sidekiq retries to 0 for testing locally
    2. Update `notify_client.send_email()` and replace `recipient_identifier: { id_value: icn, id_type: 'ICN' }` with `email_address: 'YOUR_EMAIL',`
8. Run `vets-api` and `vets-website` locally
9. Go to the claim status tool, select a claim, navigate to the Files Tab and upload a file
10. Afterwards if you do `rails c` or `rails console` in a terminal and run `EvidenceSubmission.count` you should see that 0 records were added/updated to the evidence_submissions table and an email was sent to you for a failed document upload

## Testing document upload failure email job runs when cst_send_evidence_submission_failure_emails is enabled
1. Follow steps 1-8 [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/evss-testing-locally.md#when-cst_send_evidence_submission_failure_emails-is-enabled-1)
2. Update `app/sidekiq/lighthouse/evidence_submissions/failure_notification_email_job.rb` so that in `notify_client.send_email()` we replace `recipient_identifier: { id_value: icn, id_type: 'ICN' }` with `email_address: 'YOUR_EMAIL',`
3. Re-run `vets-api`
4. Open a rails console in the terminal
      1. Run `rails c` or `rails console` in a terminal
5. Run the following command to run the failure notification email job that sends a document upload failure email to a user
   ```
   // Run this command to run the failure notification email job that sends a document upload failure email to a user
   Lighthouse::EvidenceSubmissions::FailureNotificationEmailJob.perform_async
   ```
6. You'll see the record in the evidence_submission table now has a `va_notify_id` and `va_notify_date` and you should receive an document upload failure email

