# Document Uploads Polling Design

## Overview

As part of the ongoing work on the Lighthouse Document Upload migration, improving the veteran experience and limiting silent failures across the Form 526 submission, we've identified the need to surface the progress of documents as they make their way through the VA's systems. This will allows us to identify and address problems that prevent important documents from making it where they need to go and holding up a Veteran's Form 526 submission.

## Design Summary

* This system will only apply to the document uploads that occur after a Form 526 is successfully submitted. It will not track the "state" of other ancillary actions that occur (such as deleting an ITF or In Progress Form record)
* It will track documents across the entire submission lifecycle: VA.gov > Lighthouse > VBMS > BGS
* We will use the [document status endpoint](https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current) provided by Lighthouse for this purpose
* The design will include a dashboard, similar to the one [implemented by the Pensions team for Benefits Intake API](https://vagov.ddog-gov.com/dashboard/4d8-3fn-dbp/benefits-intake-form-submission-tracking?refresh_mode=sliding&view=spans&from_ts=1707501673093&to_ts=1707505273093&live=true).
* The desing will include an alert monitor(s) for catastrophic failures
* A DocumentUploadSubmission record will get created for every document successfully submitted to Lighthouse, using their provided requestId
* The polling will run on a periodic job

## Design

The following documents get uploaded to Lighthouse on Form 526 submission
* BDD Instructions - static file persisted in our repo
* Form 0781 (if the submission includes a PTSD claim) - PDF file generated at submission time and NOT persisted
* Form 0781a (if the submission includes a PTSD + assault claim) - PDF file generated at submission time and NOT persisted
* Any documents submitted by the veteran (has associated FormAttachment record) - document we saved on S3 when the veteran uploaded it.

Document Uploads are just one part of the "post-submission" actions that run when the initial Form 526 is submitted. There are other follow-on actions, such as deleting the ITF record for the submission, that


### Lighhtouse Status Endpoint

Lighthouse Benefits Documents API https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current

Upon uploading a document successfully to Lighthouse on the POST /documents endpoint, their API returns a requestId for the document we can use to track the status of the document as it passes through the rest of the VA system:

```
{
  "data": {
    "success": true,
    "requestId": 12345678
  }
}
```

I would persist this id in a new record, LighthouseDocumentUpload, with the following schema:

```
LighthouseDocumentUpload

id int
form_526_submission_id int FK
lighthouse_document_request_id string
status string (aasm) INDEXED
uploaded_at

Probably (remember this will be helpful for the dashboard)
type string (single table inheritance)

MAYBE NOT NECESSARY:
type string (single table inheritance)
s3_url (optional)
```

The endpoint Lighthouse has provided us takes an array of requestIds so we can query for document statuses in bulk. The response schema looks like this:


```
{
  "data": {
    "statuses": [
      {
        "requestId": 600000001,
        "time": {
          "startTime": 1502199000,
          "endTime": 1502199000
        },
        "status": "IN_PROGRESS",
        "steps": [
          {
            "name": "BENEFITS_GATEWAY_SERVICE",
            "nextStepName": "BENEFITS_GATEWAY_SERVICE",
            "description": "string",
            "status": "NOT_STARTED"
          }
        ],
        "error": {
          "detail": "string",
          "step": "BENEFITS_GATEWAY_SERVICE"
        }
      }
    ]
  }
}
```

Note we could potentially ask Lighthouse to make changes to this endpoint, if another team isn't already relying on its response schema. Also, this level of detail, with a dynamic 

### Parsing Algorithm WIP

The job that queries and parses the Lighthouse polling endpoint response will serve the same purpose as the [Benefits Intake Status Job that does this for pensions](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/benefits_intake_status_job.rb).

However, I've identified a number of issues with that specific algorithm that could cause performance problems at scale, including N + 1 queries, unecessary joins, unecessary queries, and undeterminitive querying, which I've avoided in the algorithm below.


```
<!-- Consider smaller batch size based one ndpoint limitations -->
LighthouseDocumentUpload.pending.find_each(batch_size: 1000) do |uploads|
  request_ids = uploads.pluck(:lighthouse_document_request_id)
  response = LighthouseDocumentUploadService.query_document_status(request_ids)

  <!-- Parse response, update aasm state accordingly -->
end
```

### State Machine

```
<!-- Maybe: -->
pending_upload_to_s3
failed_upload_to_s3

pending_upload_to_lighthouse
failed_upload_to_lighthouse

pending_upload_to_vbms
failed_upload_to_vbms

pending_upload_to_vbms
failed_upload_to_vbms
```

Log (for monitoring) in transition hook

### Future Improvements

Persisting the type of document generated could be beneficial in tracking the submission as a whole. For example, a periodic job could run that checks if a pending Form 526 Submission has a BDD instruction with a completed LighthouseDocumentUpload (required for the claim to proceed), or that every FormAttachment (Veteran-supplied document) has an associated LighthouseDocumentUpload 
