# Overview
1. A user is filling out a form and as part of the form they want to upload a file.
2. The front end (vets-website) posts a file to the API (vets-api)
* we validate that the is not too large on both the front and back end
* we validate that the file contents match the file extension
* we validate that the pdf is not password-protected,  if it is passsord protcected we look to see if the password was provided as a parameter and attempt to make a new pdf without the password.  
3. The api uploads the file to S3 and responds with a GUID
4. The GUID is saved as part of the form. 
5. Later, user submits the form. 
6. Once the form is sumitted, which includes the guid of the file, a  sidekiq job is enqueued to get the file from S3 and send it on to EVSS. It has retries set up because EVSS has frequent downtime. 

We use `pdftk`, a Linux dependency to get info about pdf's, like if it's encrypted or the dimensions of the page.
We use [carrierwave](https://github.com/carrierwaveuploader/carrierwave) validate and upload to s3.
we use [Sidekiq](https://github.com/mperham/sidekiq) for background jobs


# Controller 
api.va.gov - [apidoc](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/uploadSupportingEvidence post )

[code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/upload_supporting_evidences_controller.rb)

````json
{
  "file_data": "filename.pdf",
  "password": "My Password"
}
````


Response
````json
{
  "data": {
    "attributes": {
      "guid": "3c05b2f0-0715-4298-965d-f733465ed80a"
  },
  "id": "11",
  "type": "supporting_evidence_attachments"
  }
}
````

# model 
https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/supporting_evidence_attachment.rb
https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/uploaders/supporting_evidence_attachment_uploader.rb

# Job

https://github.com/department-of-veterans-affairs/vets-api/blob/main/app/workers/evss/disability_compensation_form/submit_uploads.rb

# Front end code
https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/claims-status/components/AddFilesForm.jsx

