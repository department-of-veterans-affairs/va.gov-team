# EVSS > Lighthouse Document Submission Migration: Submit Uploads

## Overview

As the Form526 workflow migrates from using EVSS as its primary integrated external service to the Lighthouse API, one of the critical subworkflows we need to port is document uploads.

Document uploads are submitted alongside Form526 applications as supplemental evidence for claims. These end up in the veteran's eFolder. In Lighthouse, these documents will be submitted to the `services/benefits-documents/v1/documents` endpoint documented [here](https://dev-developer.va.gov/explore/api/benefits-documents/docs?version=current)

We're fortunate to have had the mobile team already do some of [the heavy lifting](https://github.com/department-of-veterans-affairs/vets-api/pull/13090/files) for this port by building a client to interact with that endpoint. However, much of the other elements included in that PR relate to the mobile Benefits Claims tool and do not suit our use case. Thus, we need to leverage what we can from that work while updating our own upload flow to use Lighthouse instead of EVSS.


**Note: the following report concerns only the final submission of Form 526 attachments in the [EVSS::DisabilityCompensationForm:SubmitUploads worker](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/evss/disability_compensation_form/submit_uploads.rb). This is the last step of the attachement submission process; additional work needs to be done to migrate the code where attachemnts are originally submitted by the user and saved to S3.**


## Exisitng Uploads System Overview

The overall document upload flow for Form526 can be summarized thusly:

1. A veteran uploads required supplemental attachments while completing the form, as PDFs or other allowed file types.
2. We store these attachments in S3 via the [CarrierWave Ruby file management library](https://github.com/carrierwaveuploader/carrierwave)
3. When the veteran completes and submits Form526, a batch of jobs in enequeued which bundles forms data and attachments and submits them to the VA.
4. One of these jobs, [`EVSS::DisabilityCompensationForm::SubmitUploads`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/evss/disability_compensation_form/submit_uploads.rb) retrieves the veteran-uploaded attachments and submits them to EVSS.

## EVSS::DisabilityCompensationForm::SubmitUploads: Technical Overivew

* [`Form526Submission`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form526_submission.rb) is the model that encapsulates and tracks the final submission of Form 526.
* [`Form526Submission.perform_ancillary_job`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form526_submission.rb#L297) bundles together the actions needed to deliver the submission to the VA.
* One of these actions is [`submit_uploads`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form526_submission.rb#L297), which loops through attachments nested in the Form526Submission's `form_json` field and enqueues a series of delayed `EVSS::DisabilityCompensationForm::SubmitUploads` jobs:

```ruby
def submit_uploads
    # Put uploads on a one minute delay because of shared workload with EVSS
    uploads = form[FORM_526_UPLOADS]
    delay = 60.seconds
    uploads.each do |upload|
      EVSS::DisabilityCompensationForm::SubmitUploads.perform_in(delay, id, upload)
      delay += 15.seconds
    end
  end
```

The [`EVSS::DisabilityCompensationForm::SubmitUploads`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/evss/disability_compensation_form/submit_uploads.rb) worker is where we need to update logic to submit the uploads to the veteran's eFolder via Lighthouse instead of EVSS.

To summarize what that does:

1. Looks up the `SupportingEvidenceAttachment` that was saved when the veteran uploaded the file attachment.
2. Retrieves from S3 and reads in the file body data via CarrierWave
3. Builds a `EVSSClaimDocument` object to store the document metadata
4. Validates the file has data in it.
5. Initalizes the `EVSS::DocumentsService` client that interacts with the EVSS API.
6. Uploads the file with the file body and associated meta data via that service.

We can follow the same pattern for Lighthouse using the work the mobile team has already done in a similar manner, which accounts for the metadata in `LighthouseDocument` that the Lighthouse API expects:

```ruby
def upload_lighthouse_claim(upload_data, guid, user)
  lighthouse_attachment = LighthouseSupportingEvidenceAttachment.find_by(guid:)
  file_body = lighthouse_attachment&.get_file&.read

  raise ArgumentError, "supporting evidence attachment with guid #{guid} has no file data" if file_body.nil?

  file_number = BenefitsDocuments::Service.new(user).file_number || user.ssn

  lighthouse_document = LighthouseDocument.new(
    document_type: upload_data['attachmentId'],
    claim_id: submission.submitted_claim_id,
    file_number:,
    file_name: lighthouse_attachment.converted_filename || upload_data['name'],
    tracked_item_id: nil
  )

  Lighthouse::DocumentUpload.perform_async(user.icn, lighthouse_document.to_serializable_hash)
end
```

### Attachment Uploads Architecture Quick Reference

List of objects/models/services relevant to this workflow and what they do:

* [`EVSSClaimDocument`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/evss_claim_document.rb) - a temporary (non-Active Record) object that wraps file attachment metadata/validation/file type conversion/normalization behavior.
* [`SupportingEvidenceAttachment`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/supporting_evidence_attachment.rb) - subclasses the `FormAttachment` superclass; stores metadata on a file a user has uploaded for later use when we submit that file to EVSS.
* [`SupportingEvidenceAttachmentUploader`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/uploaders/supporting_evidence_attachment_uploader.rb#L28) - confusingly named because it both uploads and retrieves attachments from S3, this is the part of the uploads code that leverages the [CarrierWave Ruby file management library](https://github.com/carrierwaveuploader/carrierwave) via its superclass, [`EVSSClaimDocumentUploaderBase`](EVSSClaimDocumentUploaderBase )

* [`EVSS::DocumentsService`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/documents_service.rb) - the EVSS client that submits the upload. Subclass of `BaseService`` which is a standard base API wrapper
