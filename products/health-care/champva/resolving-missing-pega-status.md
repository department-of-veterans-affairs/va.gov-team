# Resolving Missing Pega Status Issues

## Understanding the Issue:

The "Missing Pega Status" dashboard widget indicates that certain forms haven't been processed by the Pega system. This can lead to delays and potential errors in the form processing workflow.

> [!TIP]
> Most of the time, missing statuses automatically resolve after Pega has ingested the submission and our [sidekiq job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/ivc_champva/app/jobs/ivc_champva/missing_form_status_job.rb) re-runs

## Resolving the Issue:

### Current Procedure
This is the current procedure as of November 2025.

1. Wait an hour or two and see if the missing status resolves on its own.  This is [common scenario 2](#common-scenarios) which happens most of the time.
2. Notify the DOCMP team in the `DOCMP PEGA and VA.GOV Sync` Teams channel that we have missing statuses.  This may be [common scenario 1](#common-scenarios), in which case the DOCMP team is typically able to identify submissions that were not ingested and reprocess them.
    1. DOCMP team needs at a minimum the `form_uuid` in order to reprocess these records, but also benefit from having the `created_at` timestamp.  When the `MissingFormStatusJob` sidekiq job runs, it publishes a metric (`ivc_champva.form_missing_status`) for each form batch with a new tag called `key` - this key is a concatenation of the "`form_uuid`_`s3_status`_`created_at`" fields.  S3 status is useful in determining whether we successfully sent the file to S3; a value other than [200] here indicates the problem may be on our end.
   2. Additionally, this job also logs (given the flipper toggle `champva_missing_status_verbose_logging` is enabled) these fields and more, but only if there are fewer than 10 files missing status (to prevent spamming the logs every 15 minutes - 10 was chosen arbitrarily).  All relevant logs here are prefixed with `"IVC Forms MissingFormStatusJob"` for easy querying in DataDog.
4. If Pega is unable to ingest a submission because it failed to upload to S3, [create an incident ticket](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/ivc-forms-monitoring-playbook.md#best-practices#general-datadog-alerts-500-status-status-other-than-a-200) to investigate why.
5. If a missing status is still being reported after Pega has ingested a submission, something went wrong and we need to manually clear the status in our database.  [Create an incident ticket](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/ivc-forms-monitoring-playbook.md#best-practices#general-datadog-alerts-500-status-status-other-than-a-200) to investigate what happened.  If a cause has been determined, documented, and approved by product manager(s), the missing status may be [manually cleared](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md#to-clear-a-missing-status)

### Old Procedure
This procedure was followed until November 2025.  It requires Rails console acces in the production environment.

1. Wait an hour or two and see if the missing status resolves on its own.  This is what typically happens.
2. Gather information about the submission in question using the `MissingStatusCleanup` utility
    - Using the guide [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md), search for submissions with missing Pega statuses
3. Check the [production Pega instance](https://pega.docmp.vaec.va.gov/prweb/PRAuth/app/daper) (you must be on the VA Network) for a submission with the same name/email as the flagged submssion. If no records match, this may be [common scenario 1](#common-scenarios).
    - Notify the DOCMP team in the `DOCMP PEGA and VA.GOV Sync` Teams channel and provide them the submission details as output by the `MissingStatusCleanup` [utility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md).
4. If a cause has been determined, documented, and approved by product manager(s), the missing status may be [manually cleared](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md#to-clear-a-missing-status)

## Additional Considerations:

* Root Cause Analysis: While manually updating the pega_status resolves the immediate issue, it's important to investigate the underlying cause of the missing statuses. This could involve checking the Pega system's configuration, network connectivity, or data integrity.

* Monitoring and Alerting: Ensure that appropriate monitoring and alerting mechanisms are in place to detect and notify teams of future missing status issues.

* Documentation: Document the steps involved in resolving missing Pega status issues for future reference.

By following these steps and addressing the root cause, you can effectively resolve missing Pega status issues and maintain the health of the form processing system.

## Common scenarios

| |Scenario|Notes|
|-|-|-|
|1 |Missing Pega status reported but all documents show an S3 status of '200' in our database for this submission|When this happens, it can sometimes indicate that the files in S3 were not picked up by Pega's lambda function. This can usually be resolved by having the DOCMP team manually re-trigger the job|
|2 |Missing Pega status reported but checking the [production Pega instance](https://pega.docmp.vaec.va.gov/prweb/PRAuth/app/daper) shows the files were actually imported|Alerts from this scenario will typically self-resolve after our [sidekiq job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/ivc_champva/app/jobs/ivc_champva/missing_form_status_job.rb) that queries the Pega reporting API runs.|
