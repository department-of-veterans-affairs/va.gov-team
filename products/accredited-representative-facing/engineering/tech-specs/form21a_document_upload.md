# Form 21a Document Upload - Engineering Design Document

This document outlines the design for documents uploaded on the Form 21a that are then sent to the GCLAWS Documents API. The goal is to allow users to upload multiple documents to a Form 21a application and have these documents uploaded to the GCLAWS Documents API.

Form 21a is currently being developed from [this](https://www.va.gov/vaforms/va/pdf/va21a.pdf) pdf form to a web form within the [Accredited Representative Portal](https://www.va.gov/representative) . This form allows users to add documents to their application so we need to make sure that users are able to add document upload to the various background questions and that this information is submitted to GCLAWS so that OGC has access to them.

- Author(s): Peri-Ann McLaren
- Reviewer(s):
- Created date: 7/16/2025
- Linear project link:
- Status: Draft Form 21a Document Upload - 🟨
## A. Introduction

1. Summary of the problem ("tl;dr")
    1. Problem description:
         - Users filling out a Form 21a application should be able to upload documents to the form and submit these to GCLAWS to OGC has access to them. Currently the document upload does not work.
    2. Why is this worth solving?
         - Users need the ability to upload documents to the form 21a.
2. Whats in scope?
    - Documents on the Form 21a are saved within vets-api.
    - Documents on the Form 21a are uploaded to the GCLAWS Documents API
    - Once a document on the Form 21a has been successfully uploaded to GCLAWS we remove the upload from the vets-api system.

4. Areas that are out of scope:
   - We will not be showing that an upload failed on the Form 21a application.
   - We will not be showing that an upload failed on the Form 21a main page.
   - There are no silent failures - will address in v5
      - If a document upload fails we keep track of it and will retry it 2x.
      - After failing 3x we will send an email to a user.
      - We remove these attempted uploads from our system after a certain number of days.


## B. Solutions

1. Proposed solution (vets-website):
    1. Summary:
       - The 21a form uses the platform abstraction `fileInputUI` and `fileInputSchema` from `platform/forms-system` to handle file uploads.
       - The upload field is configured in `/src/applications/accreditation/21a/pages/helpers/backgroundInformationDetailsPageSchema.js`:
        ```js
        [documentsKey]: {
          ...fileInputUI({
            title: 'Provide any relevant documents',
            required: () => false,
            hint: 'You may add .pdf, .doc, .jpg, or .txt documents under 25MB. Please name documents with clear, descriptive names.',
            name: `${path}-file-input`,
            fileUploadUrl: url,
          }),
          warnings: {
            'ui:field': 'BasicArrayField',
            'ui:title': 'Document upload warnings',
          },
        },
        ```
        - The upload URL is dynamically set to `/accredited_representative_portal/v0/form21a/${path}`.
        - The actual upload logic is handled by the platform, which uploads each file individually and manages confirmation codes.
        - See also: [platform/forms-system/src/js/web-component-patterns.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/web-component-patterns.js)
        - Reference: `/src/applications/accreditation/21a/pages/helpers/backgroundInformationDetailsPageSchema.js`
        - **About the `warnings` field:** This field is used to display any warnings related to the uploaded documents (e.g., unsupported file type, size too large, or virus scan issues) in a user-friendly way. It leverages the `BasicArrayField` UI component to show a list of warnings.

    2. Investigation : [Link to Investigration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/investigations/21a.md)
    3. Pros:
    4. Cons:
    5. Questions:
         1. How will we distinguish between the files - We will need to take the file type from GCLAWS and pass it in from the frontend to the backend and have the backend store that 
         2. What will the frontend use to be able to call the backend to get the file id
    6. Tickets:
       *** NOTE: We will need to implement the below for each document upload within the form.
        1. Set up the document upload component using `fileInputUI` and `fileInputSchema` from `platform/forms-system`. Configure the upload field in `/src/applications/accreditation/21a/pages/helpers/backgroundInformationDetailsPageSchema.js`.
        2. Connect vets-website to vets-api, make sure it can send the doc type and make sure vets-website receives a confirmation code. call the new controller. app/controllers/form21a_controller.rb 
        3. We will need to update the schema file with 
2. Proposed solution (vets-api):
    1. Summary:
       - Uploaded files are handled via the `FormAttachment` model.
       - Encrypted file content is saved via the `file_data` attribute.
       - Files are uniquely identified by a `guid`, which is returned as the `confirmationCode` to the frontend.
       - Some uploaders are based on `FormAttachment` and add custom logic for specific use cases. For example, `DecisionReviewEvidenceAttachment` is a specialized subclass that adds extra behavior for decision review evidence uploads.
       - AWS S3 is used for storage; uploaders like `EVSSClaimDocumentUploader` and `HCAAttachmentUploader` configure access using credentials from `Settings.<namespace>.s3`.
       - Retention and cleanup are managed by `DeleteAttachmentJob`, which periodically removes old, unreferenced files:

        ```ruby
        FormAttachment.where('created_at < ?', 2.month.ago)
                      .where(type: ATTACHMENT_CLASSES)
                      .where.not(guid: uuids_to_keep)
                      .find_each(&:destroy!)
        ```

       - The job preserves attachments referenced in active Save-In-Progress forms by scanning:

        ```ruby
        InProgressForm.data_and_metadata[:formData]
        ```

       - Files unused after 2 months are deleted, aligning with VA’s 60-day retention policy per Section 3.2 of the EBA data policy.

    2. Investigation : [Link to Investigration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/investigations/21a.md)
    3. Pros:
    4. Cons:
    5. Tickets:
        1. Create a form21a_document_uploads table (gclaws_document_type, form_attachment_id, save_in_progress_id, user_account_id, gclaws_upload_status)
        2. s3 bucket configuration
        3. Create a new endpoint to handle form uploads for 21a. Will include creating a new route a and a new controller app/controllers/form21a_controller.rb . It will take the document, add a record in form_attachments, add a record in form21a_document_uploads, store it in an s3 bucket, update in_progress_forms record form_data to have the form21a_document_uploads_id and store the application and return a form21a_document_uploads_id to the frontend.
        4. Create a New Uploader: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/investigations/21a.md#1-create-a-new-uploader
        5. Make sure GCLAWs returns an application id when we send the form 21a
        6. 
        7. 
3. Proposed solution (vets-api to GCLAWS):
    1. Summary:
    2. Investigation : [Link to Investigration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/investigations/21a.md)
    3. Pros:
    4. Cons:
    5. Tickets:
        1. Create a method that runs after the form has been posted to GCLAWS and posts the documents
               - On submit we will post the FORM 21a to GCLAWs, then we will take the id from the post response call and update the         form21a_document_uploads table to have an application id.
               - Use the form21a_document_uploads_ids to get the files from the s3 bucket - create an array of the files
               - Create a sidekiq job that will go through each doc and post it to GCLAWS Document API. (job should run 3x (2 retries)
        2. Create a sidekiq job that will go through each doc and post it to GCLAWS Document API. (job should run 3x (2 retries)
               - params : form21a_document_uploads_id, application_id
               - write a query that gets the necessary info for submitting to GCLAWS (uses form21a_document_uploads, form attachments)
               - will pass the following to GCLAWS Document API - FileDetails (file contents s3 bucke), FileType (1: PDF, 2: DOCX), ApplicationId (id that we get from GCLAWS Form 21a Post call), DocumentType (comes from form21a_document_uploads.gclaws_document_type), OriginalFileName (comes from form_attachments.file_data)
               - if successful we delete the record from form21a_document_uploads
               - if not successful after 3 attempts, we add a log message, delete the record from form21a_document_uploads and add a todo message saying to add work to handle silent failures

## C. Design and Architecture Once Solution is Selected

1. Architectural changes (diagram if applicable):
2. Data model changes (explain models/fields being added):
3. UI changes (list new and existing Storybook components or mocks):

## D. Work

1. Work estimates and timelines:
2. Specific tasks with time estimates and potential assignees:

## E. Deliberation

1. Discussion (elements of the solution that need to be discussed further to reach a consensus):
2. Questions (aspects of the problem that need team input):
