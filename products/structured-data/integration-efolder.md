# eFolder / VBMS
​
## Timeline
* 2020 Feb 4 - awaiting connection info via email to Keith

## Background

The goal of the eFolder API is to allow unstructured documents to be directly uploaded to a Veteran's eFolder, instead of being sent to Central Mail for processing.

## Useful links
* [VBMS Web Services Guide doc](https://drive.google.com/open?id=1fBq4dP1m86IoAkhyM7mK9IJTid3fYaJG)
* [connect_vbms gem](https://github.com/department-of-veterans-affairs/connect_vbms)
* [good connect_vbms example code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/rakelib/vbms.rake)
* [caseflow](https://github.com/department-of-veterans-affairs/caseflow) and [caseflow-efolder](https://github.com/department-of-veterans-affairs/caseflow-efolder) projects also implement connect_vbms
​
## Contacts
| name | role | contact info | notes |
|------|------|--------------|-------|
| ​Kristin Morelli | ? | dsva slack | contact for VBMS access |
| Andrew Cummings | ? | lighthouse slack | resource for form JSON schema (not familiar with ruby/ruby gem) |
| Peter Karman | ? | ? | (caseflow team) has experience with this, may be a good contact|


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
