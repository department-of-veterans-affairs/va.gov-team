# 526 Backup Submission Process Discovery
This document details the findings for ticket [#63779](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/63779) EVSS Migration - 526 Submit - Form526BackupSubmissionProcess Discovery.

The goal of this story was to
1.  get a more thorough understanding of the backup submission process
2.  come up with some strategies to safely migrate the process

## Questions
### Will we need to call out to our transformation service at all for migration to work?
Yes! The backup submission process uses POST calls to a `getPDF` endpoint to generate the 526 PDF itself before sending it on to VBMS. It sends the full JSON request to the endpoint, similar to (or identical to) the `submit` endpoint. That JSON is different than the EVSS JSON, and so requires a callout to the transformation service to put it in the proper format. 

Story to migrate `getPDF` TBD

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
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/3965574b-7b20-4323-b56a-46cbb40631eb)
The claim is passed into the `create_submission` method to begin creating the submission record. Form4142 information is added to the JSON.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/0c138cd7-0b9c-4ae7-a738-15b463234b7e)
Further data translation begins, to ultimately get the JSON into a form that EVSS will understand
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/4de941f9-641e-4b06-a0df-1f28edebe89e)
If it exists, the banking information is added to the JSON- calling out to the EVSS PPIU API if needed
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/9beb8b4f-07e8-4aba-bc41-d98f17f9db4e)
Other translation methods add service pay, service info, veteran info, treatments and disabilities to the JSON. Ancillary form information and flashes are added to the JSON, as well as BIRLS ids. This "final" JSON is saved to the submission record, and the submission service is started
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/92405130/83c9d49b-019e-4e3a-9d5b-e1093060f3b6)
