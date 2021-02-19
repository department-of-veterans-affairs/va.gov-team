# Document Uploads
## Overview
### Objective
Create a document upload workflow that abstracts away the process of uploading, verifying, and converting a document. 

### Background
Although VA.gov is moving many forms online the site often needs supporting scanned documents or the ability to send PDFs of our forms to other systems within the VA. 

## Contacts
### VA:
VA Business Owner: N/A
### DSVA: 
- Product Owner: 
### Ad Hoc:
- Sprint Team: 
- Product Manager: 
### EVSS:
 - Michael Walker (Insignia / EVSS Sustainment): ([Michael.Walker10@va.gov](mailto:Michael.Walker10@va.gov))

## Keywords
Document Upload, EVSS documents, upload attachments, attachment upload, attach files

### Current Status
- Claims Status and 526EZ (Disability Compensation) utilize document upload support and are ultimately sent to the EVSS document upload service
- Some other applications leverage document upload support but ultimately send documents to non-EVSS APIs
  - Pensions/Burials, HCA, Preneed, VICv2

More information on the current design (specific to endpoints that utilize the EVSS documents service) can be found [here](./document_upload_workflow.md)

## Testing
Testing this feature is somewhat difficult because it's isn't a standalone feature but rather a part of larger forms / applications. Several upload pages can be found in the 526 v2 form flow, which you can find out how to test [here](/Products/Disability/Disability%20526EZ/21-526EZ.md).

## Error Handling
Please see [upload processing section](./document_upload_workflow.md#syncronous-pre-upload-processing) of the engineering design doc

## API Calls & Dependencies
Document uploads for specific applications / form typically have separate `vets-api` endpoints:
- Claim Status: `claim_attachments`
- HCA v2: `hca_attachments`
- Preneed: `preneed_attachments`
- VICv2: `profile_photo_attachments`, `supporting_documentation_attachments`
- 526: `upload_supporting_evidence`

With the exception of the upstream service that documents are ultimately submitted to (e.g., for Claims Status that would be the EVSS Documents Service), the dependencies and call flow are basically the same. I.e., uploads are submitted to vets-api, which processes & validates them and stores them in S3. At some later point, these documents can be retrieved and submitted to whatever service needs them.

Here's a sample diagram:
![Document Upload Sequence Diagram](./file_upload_sequence.png "Document Upload Sequence Diagram")

## Open Issues & Future Work
[Future Work Ideas](./document_upload_workflow.md#future-work)

Currently, bugs are not being tracked centrally but rather within the applications that each individual file uploader is embedded.

## Monitoring & Service Level Objectives
**Availability:** Should not exceed 5% 5xx error rates (as a percent of all requests) for more than 5 consecutive minutes [Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L6)

**Latency:**
  - `claim_documents`, `claim_attachments`: Percent of requests served in under 10 seconds should not drop to or below 95% for more than 5 consecutive minutes [Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L24)
  - All others: Percent of requests served in under 2 seconds should not drop to or below 95% for more than 5 consecutive minutes [Link](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L15)

**Incident Response:** Each critical availability / latency issue (per above) should be acknowledged within 15 minutes of a triggered alert [Link](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21)

