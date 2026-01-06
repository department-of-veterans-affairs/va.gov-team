# Decision Review Sidekiq Jobs

## Overview
Decision Reviews relies on several sidekiq jobs to handle evidence attachments, secondary forms, and form/evidence status updates.

All of the sidekiq jobs for Decision Reviews are located in the vets-api repo here: https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/decision_reviews/app/sidekiq/decision_reviews

### Unscheduled:

These jobs are triggered when there is a specific action (i.e. form submission)

* [DecisionReviews::SubmitUpload](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/submit_upload.rb) is used to handle evidence submission for attachments associated with either a Supplemental Claim or Notice of Disagreement.

* [DecisionReviews::Form4142Submit](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/form4142_submit.rb) is used to generate a secondary form if the option is selected on the main Supplemental Claim submission.

### Scheduled:

The primary purpose of these jobs are to check for the latest LH statuses for submitted forms and evidence attachments, and also notifying the Veteran when there are any errors so they can send the documentation via mail.

[HlrStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/hlr_status_updater_job.rb), [NodStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/nod_status_updater_job.rb), and [ScStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/sc_status_updater_job.rb) are used to update the `metadata` and `delete_date` columns for `SavedClaim` records. See [Form Submission Storage](form-submission-storage.md) for more details.

[FailureNotificationEmailJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/failure_notification_email_job.rb) sends emails to the Veteran using VANotify for any form or evidence errors that occur after submission.

[DeleteSavedClaimRecordsJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/delete_saved_claim_records_job.rb) is used to delete Decision Reviews `SavedClaim` records that have been successfully processed by downstream services and have passed the allowed retention period.

[DeleteSecondaryAppealFormsJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/delete_secondary_appeal_forms_job.rb) is used to delete `SecondaryAppealForm` records that have been successfully processed by downstream services and have passed the allowed retention period.

These jobs are scheduled to run as defined in https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/periodic_jobs.rb
