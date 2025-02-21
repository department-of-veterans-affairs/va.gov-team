# Decision Reviews Form Submission Storage

## Background

When a form is submitted, the content of the form is sent to the downstream providers and not retained locally. This results in difficulty with validation or remediation as form submissions occasionally fail for various reasons (e.g. temporary network outages, service outages, invalid form data, etc.) and typically requires the submitter to resubmit the form.

To improve this process and enhance our ability to monitor the status of form submissions, we can securely store the submission data in our database. PSEC guidance states that this information can be retained for 60 days after confirmation of acceptance by the downstream provider.

## Storage

When a Veteran submits a Decision Review form (i.e. 20-0995 Supplemental Claim, 20-0996 Higher Level Review, 10182 Notice of Disagreement), the submission is securely stored in our database. Periodic jobs are used to check form status and to schedule the deletion of forms that have been accepted by the downstream provider. Once the retention period has passed, we delete the records from the database to be compliant with PSEC guidance.

### Implementation Details
Historically, the `SavedClaim` model is used to persist form data. For the Decision Review forms, we have created three models that extend SavedClaim:
* [SavedClaim::HigherLevelReview](https://github.com/department-of-veterans-affairs/vets-api/blob/6f0cc7f516e5f4b6b14d0b0a19f86b2ccfdec753/app/models/saved_claim/higher_level_review.rb)
* [SavedClaim::NoticeOfDisagreement](https://github.com/department-of-veterans-affairs/vets-api/blob/6f0cc7f516e5f4b6b14d0b0a19f86b2ccfdec753/app/models/saved_claim/notice_of_disagreement.rb)
* [SavedClaim::SupplementalClaim](https://github.com/department-of-veterans-affairs/vets-api/blob/6f0cc7f516e5f4b6b14d0b0a19f86b2ccfdec753/app/models/saved_claim/supplemental_claim.rb)

These models are populated via the respective DecisionReview controllers or model method:
* [HigherLevelReviewController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v2/higher_level_reviews_controller.rb#L28)
* [AppealSubmission](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/appeal_submission.rb#L64) for Notice of Disagreements
* [SupplementalClaimsController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/controllers/decision_reviews/v1/supplemental_claims_controller.rb#L104)

Once these records are stored, scheduled jobs fetch the latest form and attachment statuses to update the `metadata` column:
* [DecisionReviews::HlrStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/hlr_status_updater_job.rb)
* [DecisionReview::NodStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/nod_status_updater_job.rb)
* [DecisionReview::ScStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/sc_status_updater_job.rb)

See [DecisionReviews::SavedClaimStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/saved_claim_status_updater_job.rb) for the inherited base class.

When a form has moved to the final success state (`complete`) along with all of the associated evidence (`vbms`), a timestamp is set (`delete_date`) to schedule the future deletion of the record.

Another scheduled job [DecisionReviews::DeleteSavedClaimRecordsJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/decision_reviews/app/sidekiq/decision_reviews/delete_saved_claim_records_job.rb) checks for any records that has a `delete_date` in the past and deletes them from the database.

See [periodic_jobs.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/b8d7d9a6ef77b5145accea229ecb71e8f80c7b99/lib/periodic_jobs.rb#L223-L229) for the job schedule.

## Monitoring

StatsD metrics are emitted for specific events:
* number of records being updated
* a record current status
* a record newly scheduled for deletion
* number of records deleted
* errors during processing

These metrics are used in Datadog dashboards for monitoring the health of the form storage process.

Dashboards:
- https://vagov.ddog-gov.com/dashboard/fps-2wj-ceb

## Additional Information
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/84329
