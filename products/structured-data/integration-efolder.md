# eFolder / VBMS
​
## Timeline
* 2020 Feb 7 - approval for access granted from VBMS CI&D
* 2020 Feb 4 - awaiting client integration package from Patrick Soisson
* 2020 Jan 16 - email request for access

## Background

The goal of the eFolder API is to allow unstructured documents to be directly uploaded to a Veteran's eFolder, instead of being sent to Central Mail for processing.

## Useful links
* [Old business context on eFolder](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/ead0fe129bfee6b8e7eaae59d7f4f681a37dec15/Products/Identity/eFolder#requirements-and-constraints)
* [VBMS Web Services Guide doc - v4.0 Oct 2018](https://drive.google.com/open?id=1fBq4dP1m86IoAkhyM7mK9IJTid3fYaJG)
* [connect_vbms gem](https://github.com/department-of-veterans-affairs/connect_vbms)
* gem works with v4 of the eDocumentService VBMS API
* [good connect_vbms example code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/rakelib/vbms.rake)
* [caseflow](https://github.com/department-of-veterans-affairs/caseflow) and [caseflow-efolder](https://github.com/department-of-veterans-affairs/caseflow-efolder) projects also implement connect_vbms
* Do not use `EVSS::DocumentService` in vets-api, **EVSS is DEPRECATED**
* related docs on Central Mail:
    https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/services/vba_documents/UnderstandingDocumentProcessing.md
* https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/eFolder
* https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/efolder

## Notes
* Do we need to date stamp eFolder uploads, or is this already done by the gem?
* the Vets-API currently uses EVSS to upload documents to VBMS

## Pseudocode
1. upload all docs to eFolder, including key/value metadata, get a GUID
2. submit info to claims API to establish the claim
3. BPD efolder_upload: pass GUID, key/value metadata map, FormUpload data structure

​
## Contacts
| name | role | contact info | notes |
|------|------|--------------|-------|
| ​Kristin Morelli | ? | dsva slack | contact for VBMS access |
| Andrew Cummings | ? | lighthouse slack | resource for form JSON schema (not familiar with ruby/ruby gem) |
| Peter Karman | ? | ? | (caseflow team) has experience with this, may be a good contact |
| Andrew Fichter | PO Lighthouse | | |
| Prod Ops | | | need to coordinate production access |


## connect_vbms gem
[connect_vbms gem](https://github.com/department-of-veterans-affairs/connect_vbms) is currently used by several projects to interact with VBMS eFolder SOAP services.

Uploading a document with gem is done in two phases: First, a call to `initializeUpload` (with metadata) to receive a token, which is then used in the second call to `uploadDocument` to actually perform the upload.

The required metadata in the first call is a SHA1 hash of the content, the name and type of the file, the Veteran's file number (ssn?), the VA receive date, and so on. TODO: determine and document required/optional fields.

### initializeUpload Signature:

```ruby
def initialize(
  content_hash:,
  filename:,
  file_number:,
  va_receive_date:,
  doc_type:,
  source:,
  subject:,
  new_mail:)
```

Example:

```ruby
request = VBMS::Requests::InitializeUpload.new(
  content_hash: "1a1389d7934dc6444ce6471beb9fcf16ff57221f",
  filename: "test1.pdf",
  file_number: "123456789",
  va_receive_date: Time.now,
  doc_type: "foo",
  source: "Connect VBMS test",
  subject: "head",
  new_mail: true)
end
```

The `uploadDocument` Signature:

```ruby
def initialize(upload_token:, filepath:)
```

Example:

```ruby
request = VBMS::Requests::UploadDocument.new(
    upload_token: 'aa41cbe3-8c3a-4767-b96a-a677430663cf',
    filepath: '/path/to/test1.pdf'
)
```
