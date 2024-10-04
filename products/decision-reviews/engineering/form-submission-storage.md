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

These models are populated via the respective DecisionReviewV1 controllers:
* [HigherLevelReviewController](https://github.com/department-of-veterans-affairs/vets-api/blob/6f0cc7f516e5f4b6b14d0b0a19f86b2ccfdec753/app/controllers/v1/higher_level_reviews_controller.rb#L28)
* [NoticeOfDisagreementsController](https://github.com/department-of-veterans-affairs/vets-api/blob/6f0cc7f516e5f4b6b14d0b0a19f86b2ccfdec753/app/controllers/v1/notice_of_disagreements_controller.rb#L27)
* [SupplementalClaimsController](https://github.com/department-of-veterans-affairs/vets-api/blob/6f0cc7f516e5f4b6b14d0b0a19f86b2ccfdec753/app/controllers/v1/supplemental_claims_controller.rb#L110)

Once these records are stored, several hourly jobs fetch the latest form status and update the `metadata` column:
* [DecisionReview::SavedClaimHlrStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/decision_review/saved_claim_hlr_status_updater_job.rb)
* [DecisionReview::SavedClaimNodStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/decision_review/saved_claim_nod_status_updater_job.rb)
* [DecisionReview::SavedClaimScStatusUpdaterJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/decision_review/saved_claim_sc_status_updater_job.rb)

When a form has moved to the final success state (`complete`), a timestamp is set (`delete_date`) to schedule the future deletion of the record.

Another scheduled job [DecisionReview::DeleteSavedClaimRecordsJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/decision_review/delete_saved_claim_records_job.rb) checks for any records that has a `delete_date` in the past and deletes them from the database.

See [periodic_jobs.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/5a4b2c45172907ee2bf68788eb8c6f9338e7d405/lib/periodic_jobs.rb#L177-L183) for the job schedule.

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
