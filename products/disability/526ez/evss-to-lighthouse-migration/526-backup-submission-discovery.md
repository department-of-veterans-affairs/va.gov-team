# 526 Backup Submission Process Discovery
This document details the findings for ticket [#63779](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/63779) EVSS Migration - 526 Submit - Form526BackupSubmissionProcess Discovery.

The goal of this story was to
1.  get a more thorough understanding of the backup submission process
2.  come up with some strategies to safely migrate the process

## Questions
### Will we need to call out to our transformation service at all for migration to work?
Yes! The backup submission process uses POST calls to a `getPDF` endpoint to generate the 526 PDF itself before sending it on to VBMS. It sends the full JSON request to the endpoint, similar to (or identical to) the `submit` endpoint. That JSON is different than the EVSS JSON, and so requires a callout to the transformation service to put it in the proper format. 

Story to migrate `getPDF`: https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/62170

### Are the LH and EVSS getPDF endpoints getting from the same datasource/database?
This question was asked out of a misunderstanding that `getPDF` was a GET endpoint that simply took a submission or claim id and returned a PDF stream. The LH API documentation said as much, but as it turned out they were (are) in the process of updating it to be a POST call that was "id-agnostic". This update is still in progress at this time (see this [thread](https://dsva.slack.com/archives/C02CQP3RFFX/p1693267337721269))

### Does this need to be released to release the submit endpoint?
No!  If an LH-bound submission fails and goes to the backend submission process, there is nothing to stop it from being safely "submitted" there via the EVSS getPDF endpoint because the request saved to the submission record is already in the EVSS format by default. In short, it gets to its ultimate destination regardless

### Does the submit endpoint need to be migrated before Toxic Exposure is released?
Yes. We can't open the front end to toxic exposure and then have to roll back on submit. EVSS will never process these, and so they'll have to remain as dead submissions or otherwise be in limbo until some workaround is scrapped together.

## The Submission Workflow
One of the outputs of this ticket was to create a diagram of the backup submission process. On a previous discovery ticket for 526 submission, I'd begun a [Lucid diagram](https://lucid.app/lucidchart/b93a0b4d-c62b-49b0-8efc-c7e9e4a05d1c/edit?invitationId=inv_a7c98577-e6f5-4ec2-897b-3b0f6212b08d&page=0_0#) of the initial workflow, but had run out of time. I've now updated that diagram with all phases of the submission workflow- at varying degrees of detail (unfortunately, I ran out of time again). And because that process is long and somewhat unwieldy to navigate, I've provided a high-level summary of it below with screenshots.

### Initial Submission
Initial 526 submission begins with the front-end posting to the `submit_all_claims` endpoint on vets-api, and a claim is saved to the database from the submitted JSON
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/99f65c83-2e7d-4b6a-a921-514632fccc61)

The claim is passed into the `create_submission` method to begin creating the submission record. Form4142 information is added to the JSON.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/0c138cd7-0b9c-4ae7-a738-15b463234b7e)

Further data translation begins, to ultimately get the JSON into a form that EVSS will understand
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/4de941f9-641e-4b06-a0df-1f28edebe89e)

If it exists, the banking information is added to the JSON- calling out to the EVSS PPIU API if needed
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/9beb8b4f-07e8-4aba-bc41-d98f17f9db4e)

Other translation methods add service pay, service info, veteran info, treatments and disabilities to the JSON. Ancillary form information and flashes are added to the JSON, as well as BIRLS ids. This "final" JSON is saved to the submission record, and the submission service is started...
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/83c9d49b-019e-4e3a-9d5b-e1093060f3b6)

### Submission Service
Technically, the service is initiated asynchronously from the Submission _Model_, where it is put in a batch. An event handler is set up so that once the actual submission service is successful, processing returns to the model to handle the ancillary file submissions.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/9f71ad21-390c-4b47-8ff8-48c48a3ccfb1)

The submission service starts. If successful, the JSON is submitted to the EVSS submit endpoint
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/ec5a847f-68be-4729-ab1b-9e640a5e2f59)

If there's an error, the submission is essentially put into retryable vs non-retryable buckets (via the job status), to be processed by the Backup Submission Process.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/2e15d87c-7842-4637-ac86-a8ce7c1f885d)

### Ancillary Job Processing
If successful, however, it's back up to the submission model's event handler to finish processing all the ancillary files

Supplemental files are retrieved from AWS via the SubmitUploads and uploaded via the EVSS document service
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/2ea51ad9-3735-4dc8-9340-983a2ff7d022)

spoiler alert: the backup submission process fetches files from AWS the same way- through the SupportingEvidenceAttachment model, a hybrid beast that is part database table and part uploader
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/56ef3179-8276-419d-a4ba-2ac740b1b9c6)

Form 4142 is uploaded directly to Central Mail
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/1b5d5217-8f0b-417f-ac34-100fad37feae)

Forms 0871 and 8940 are uploaded to VBMS, as well as the BDD supplemental (if it applies). The `get_docs` methods on these jobs are used by the backup submission process as well
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/37f40b96-960a-4bb7-a2a2-71d3ba81684d)

### Backup Submission Process
When the backup submission is initialized, the Form526BackgroundLoader will begin gathering all the docs, zip them up and upload them to S3. The gather_docs method sets a flag at the processor level when complete so that any other consumers (namely the process method) won't need to redundantly pull them
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/d60288ad-e080-48f6-9e89-07d16728753d)

When gather_docs grabs the 526 PDF itself, it does so by POSTing the submissions JSON to the EVSS API's `getPDF` endpoint, which returns a stream of PDF content used to generate the 526 PDF
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/aba1a66e-751a-4ec5-8916-cf88b8ceab8d)

And as previously mentioned, it calls the `get_docs` on the SupportingEvidenceAttachment model to gather the supplemental docs
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/0a0a7519-5ec8-4196-bd23-bf7068e21ffa)

Other forms are gathered accordingly...
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/b9fb4147-eba5-49de-8228-c5ecbcfd707f)

Finally, once all the docs have been gathered, they are submitted (one way or another) to the Lighthouse API's PUT `getPDF` endpoint
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/6614071c-f7bf-481a-957a-d1508b8a1162)

### Miscellany 

Full diagram as SVG
![526 Submission Workflow - full](https://user-images.githubusercontent.com/92405130/268407152-5922ae45-fc78-44f4-b08c-1d5a599fea01.svg)

Simplified diagram as SVG
![526 Submission Workflow - simplified](https://user-images.githubusercontent.com/92405130/271063823-a6e5a374-d685-4623-91d6-75c0fbd29303.svg)
