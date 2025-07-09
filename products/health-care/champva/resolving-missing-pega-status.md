# Resolving Missing Pega Status Issues

## Understanding the Issue:

The "Missing Pega Status" dashboard widget indicates that certain forms haven't been processed by the Pega system. This can lead to delays and potential errors in the form processing workflow.

## Resolving the Issue:

1. Gather information about the submission in question using the `MissingStatusCleanup` utility (see [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md) for detailed commands)
    - Access a Vets-API Pod:
        * Open a web browser and navigate to [Argo CD](https://argocd.vfs.va.gov/applications/vets-api-prod?resource=) to get access to a running instance of the backend
        * Select a pod with a name beginning with `vets-api-web-` and start a console session in it
    - Using the guide [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md), search for submissions with missing Pega statuses
2. Check the [production Pega instance](https://pega.docmp.vaec.va.gov/prweb/PRAuth/app/daper) (you must be on the VA Network) for a submission with the same name/email as the flagged submssion. If no records match, this may be [common scenario 1](#common-scenarios).
    - Notify the DOCMP team in the appropriate Teams chat on the VA network and provide them the submission details as output by the `MissingStatusCleanup` [utility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md).
3. If a cause has been determined, documented, and approved by product manager(s), the missing status may be [manually cleared](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md#to-clear-a-missing-status)

> [!TIP]
> If the cause is determined to be on the DOCMP side, missing statuses should automatically resolve after Pega has ingested the submission and our [sidekiq job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/ivc_champva/app/jobs/ivc_champva/missing_form_status_job.rb) re-runs

## Additional Considerations:

* Root Cause Analysis: While manually updating the pega_status resolves the immediate issue, it's important to investigate the underlying cause of the missing statuses. This could involve checking the Pega system's configuration, network connectivity, or data integrity.

* Monitoring and Alerting: Ensure that appropriate monitoring and alerting mechanisms are in place to detect and notify teams of future missing status issues.

* Documentation: Document the steps involved in resolving missing Pega status issues for future reference.

By following these steps and addressing the root cause, you can effectively resolve missing Pega status issues and maintain the health of the form processing system.

## Common scenarios

| |Scenario|Notes|
|-|-|-|
|1 |Missing Pega status reported but all documents show an S3 status of '200' in our database for this submission|When this happens, it can sometimes indicate that the files in S3 were not picked up by Pega's lambda function. This can usually be resolved by having the DOCMP team manually re-trigger the job|
|2 |Missing Pega status reported but checking the production Pega instance (https://pega.docmp.vaec.va.gov/prweb/PRAuth/app/daper) shows the files were actually imported|Alerts from this scenario will typically self-resolve after our [sidekiq job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/ivc_champva/app/jobs/ivc_champva/missing_form_status_job.rb) that queries the Pega reporting API runs.|
