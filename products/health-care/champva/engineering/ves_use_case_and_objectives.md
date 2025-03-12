## VES API Integration

VES is a VA-owned API which allows for submitting CHAMPVA applications electronically.

PEGA is a separate document store which IVC-CHAMPVA is already integrated with.  Adding a new backend document store to our pipeline presents several design decisions which the team has been working through to produce the best overall product for Veterans.

### Integration approach

PEGA uploads currently act as our single endpoint for electronic form submissions, which makes for a very linear workflow.  Adding a new backend creates some complications such as error handling and data consistency between the services.

The overall approach is as follows:

- Receive a form submission
	- supporting documents are uploaded separately and stored temporarily until the final form submission in a transaction
	- when `submit` is called in `UploadsController` by a request from vets-website, find each supporting document for the transaction and compile them to prepare for submission to PEGA's intermediary S3 bucket
- Transform supporting documents
	- documents are converted to PDF for consistency and renamed to mask potential PII
- Construct the requested form
	- one parameter in `submit` takes in a form ID along with the JSON metadata used to populate that form
	- use `PdfFiller` to create and populate a new document with the supplied information
- Submit to PEGA
	- PEGA requires the completed form as well as any supporting documents, so all are uploaded
	- the final form and supporting documents are first transferred to an S3 bucket owned by PEGA
	- an additional metadata file containing the form name and all supporting document names is uploaded, signaling to PEGA that files are ready to be picked up
- Submit to VES
	- once we have successfully submitted to PEGA, VES is next
	- only the VA form data is required for this API - not supporting documents
	- a data converter utility constructs a new object modeled after the VES API schema, with some nuances compared to the data schema required by PEGA
	- the transformed JSON is submitted to VES

### Team Decisions

#### Error handling

[Associated ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102938)

As we're now required to upload to two separate backends, data consistency becomes an issue - we still need to address what happens when one service has information which the other does not.  To mitigate this as best we can, the backend engineers have decided on the following approach.

- Validate whether the data received *should* be accepted by VES
	- if there's a validation issue, return an error
- If it looks valid, submit to PEGA
	- if PEGA fails, return an error
- If PEGA upload is successful, submit to VES
	- if VES fails, manual intervention is required

Since PEGA is the more complicated backend and we expect more failures to occur uploading to it than to VES, we want to ensure the VES upload should succeed before we attempt the PEGA submission.  This is a simple validation of required fields on the incoming requests.  Submitting to PEGA after this initial validation provides flexibility to perform retriesshould the upload fail, and means we shouldn't continue to attempt a VES upload since we don't want the services getting out of sync.  With a successful PEGA submission, here we already expect the VES upload to succeed and so we perform it.  Since we expect VES to succeed more often than PEGA uploads, we can significantly reduce the occurrences of the services getting out of sync by performing the uploads in this order.

One issue lies with a successful PEGA submission but an unsuccessful VES submission.  In this case we expect manual intervention will be required.

#### Data mapping improvements

[Relevant ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102945)

Work in progress.

#### Database updates

[Relevant ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/102941)

VES API documentation introduces a field which we are currently not tracking, `application_uuid`, used to track updates to a given submission.  Internally they also require a `transaction_uuid`, which we have decided to repurpose from `form_uuid` field on our existing database model to populate.  `application_uuid` should be tracked and therefore will need to be added to our database model.

To assist with our retry logic, specifically with Sidekiq jobs which may run long after a failed transaction has occurred, we also want to add two fields: `ves_status` and `ves_data`.  `ves_status` is intended to reflect the state of a submission, i.e., success or fail, and `ves_data` will contain the JSON entity sent in the original request.  When our Sidekiq job runs and attempts to retry failed uploads at some later date, `ves_status` will help indicate whether a submission has failed and `ves_data` will allow us to reconstruct the original request for resubmission.

#### Looped uploads

PEGA submission logic includes automatic retried for failed uploads, which recreate the PDFs from all the original files and attempts to resubmit everything.  For VES, we don't expect to see similar failures but will likely reuse the retry logic regardless. 

A separate [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/105021) to refactor the retry logic in `UploadsController::handle_file_uploads` to a common method/utility will allow us to reuse the existing code without duplication.  This logic encapsulates:

- attempt a file upload
- if the upload fails, increment a counter and retry if `counter < max_attempts`
- otherwise, continue

#### Sidekiq job

Separate to this basic retry loop is a mechanism to verify files have been received by PEGA.  This is a Sidekiq job periodically loads all submission records from our database with a `nil` PEGA status, and will attempt to reupload the documents.  Emails are sent to PEGA for submissions which are still failing after a set number of days (7 by default).

For VES, this logic may be repurposed - since we're only executing a simple POST request to submit data, it is much simpler to attempt resubmissions given we will be storing the request parameters in a new `ves_data` column.  
