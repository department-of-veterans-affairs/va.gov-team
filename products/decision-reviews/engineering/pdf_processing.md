# Decision Reviews PDF Processing Overview

## Background

As part of the form submission process, Veterans can include and upload evidence attachments. Evidence attachments have a specific set of requirements to be accepted by downstream services (e.g EMMS).

PDF validation is done by an API request to Lighthouse (see [DecisionReview::PdfValidation::Service](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/decision_review/utilities/pdf_validation/service.rb)).

PDF validation requirements are set in [PDFUtilities::PDFValidator](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/pdf_utilities/pdf_validator.rb).

## PDF Processing/Decryption

Evidence attachment files are uploaded to S3 for storage. Before they can be uploaded to S3, any encrypted PDF files must be decrypted before being sent to downstream services.
As the existing PDF decryption library (`PDFTK`) does not support newer encryption methods (e.g. AES-128), Decision Reviews elected to use `HexaPDF` to decrypt PDFs (see [Common::PdfHelpers](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/pdf_helpers.rb)).

The long term plan is to use `HexaPDF` to replace `PDFTK` as the primary PDF decryption library in vets-api.

### Implementation Details
[DecisionReviewEvidenceAttachment](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/decision_review_evidence_attachment.rb) uses [DecisionReviewEvidenceAttachmentUploader](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/uploaders/decision_review_evidence_attachment_uploader.rb) to configure the details of the upload to S3 using CarrierWave.

Decryption and uploading is done in [FormAttachment](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form_attachment.rb#L16), in the `set_file_data!` method which is called by `save_attachment_to_cloud!`. `set_file_data!` decrypts the PDF using `PDFTK` if a password is passed in as a parameter.

[DecisionReviewEvidencesController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/decision_review_evidences_controller.rb#L22) overrides `save_attachment_to_cloud!` to perform the decryption using `HexaPDF` instead.

## Monitoring

Evidence uploads to S3 are monitored via Datadog dashboards.

Dashboards:
- [NOD Dashboard](https://vagov.ddog-gov.com/dashboard/tvp-imf-tb7/benefits---notice-of-disagreement)
- [SC Dashboard](https://vagov.ddog-gov.com/dashboard/uc7-8ai-6c3/benefits-supplemental-claims)

Example datadog query: 
[Query](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20service%3Avets-api%20%40payload.action%3A%22Evidence%20upload%20to%20s3%22&agg_m=count&agg_m_source=base&agg_q=%40payload.encrypted%2C%40payload.is_success&agg_q_source=base%2Cbase&agg_t=count&cols=host%2Cservice%2C%40payload.encrypted&fromUser=true&messageDisplay=inline&refresh_mode=sliding&saved-view-id=1716&sort=time&sort_m=%2C&sort_m_source=%2C&sort_t=%2C&spanID=1050277886811829619&storage=hot&stream_sort=desc&top_n=10%2C10&top_o=top%2Ctop&view=spans&viz=query_table&x_missing=true%2Ctrue&from_ts=1720544408783&to_ts=1721149208783&live=true)
`env:eks-prod service:vets-api @payload.action:"Evidence upload to s3"`

## Additional Information
- PDF decryption issue: https://gist.github.com/CorySohrakoffUSDS/a8c4784f4a08eb2bed562c7324746839
