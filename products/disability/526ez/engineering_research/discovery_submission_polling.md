# [Discovery] Submission Polling

## 1. id Mappings
### _What does each id mean?_
#### _pertaining to [#72663](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/72663)_

The following describes the several different named "`id`"s that a "Form526Submission" (ActiveRecord database object) receives during its lifecycle.

1. `InProgressForm.id`: The id of the vets-api database record from the in_progress_forms table that holds user-entered data from vets-website. This data gets transformed into a different data structure for further processing.
2. `Form526Submission.saved_claim_id`: `SavedClaim` is another database record saved in the database **_before_** the Form526Submission record that has a foreign_key relationship by `SavedClaim`'s primary key (`id`). `SavedClaim` is used for vets-website to vets-api form validation using the json-schema library. `SavedClaim`.id is used in a lot of Form526 logging paths.
3. `Form526Submission.id`: Once the `InProgressForm` is submitted, and after a `SavedClaim` is created, the `Form526Submission` database record is created. 
4. `Form526Submission.submitted_claim_id`: the `claim_id` expected back in the response from the third-party service called to generate the Form526 pdf and submit to VBMS - a.k.a. the "VBMS Claim ID".
5. `job_id` (`Form526JobStatus.job_id`): `job_id` is used after submitting to the vets-api endpoint `/submit_all_claim` after the `Form526Submission` job is created and underway. `job_id` is used on the vets-website frontend to "poll" the `Form526JobStatus` table in the vets-api database. This is done through the endpoint `/submission_status` on vets-api, that returns a serilaized version of `Form526JobStatus` record - serialized by `Form526JobStatusSerializer` - that has a foreign key relationship with the `Form526Submission` table's `id` column. The pertinant data that the `submission_status` endpoint needs to send back from the endpoint is the `Form526Submission`'s `submitted_claim_id`, which is known as `claim_id` to the `Form526JobStatus`.
6. `Form526Submission.user_uuid`: the unique identifier of the user that submitted the Form526. `user_uuid` is used as a key to delete the `InProgressForm` and the `IntentToFile`  in the `submit_form526_cleanup#perform` method. This "cleanup" method is called at the same time as the ancillary jobs. This one column in the database can be one of several different "uuid"s that a user is given on the platform: idme, login.gov, or vets-api's `UserAccount` table. The lookup for retrieving a user's `Account` can be done [with this method](https://github.com/department-of-veterans-affairs/vets-api/blob/b5a360486a210d9a370191a5508491887037fac7/app/models/account.rb#L52).

Answers to the following questions:
1. Where is Form526Submission ID used? `Form526Submission.id`, or better known in the code as `submission.id` is, used in the subsequent ancillary jobs after a VBMS CLAIM ID is established.
2. Where is SavedClaim ID used? Is it relevant to the initial submission?
   `saved_claim_id` is only used for logging mechanisms in the vets-api ecosystem. It is not pertinent to any of the `Form526Submission` tasks.
4. What is submitted_claim_id?
   `submitted_claim_id` is the VBMS CLAIM ID that is retrieved by EVSS after submitions to VBMS.
6. How important is the jId (job ID) that is returned in the initial submission process? Check the frontend polling mechanism.
   The `job_id` is very important for the frontend to receive from the vets-api `/submit_all_claims` endpoint. It is used for the frontend polling mechanism to receive the status of the Form526 submission job, and eventually displays the VBMS CLAIM ID to the user.
8. Which one is VBMS ID? `submitted_claim_id`

## Take aways
1. **VBMS CLAIM ID** Synonymous declarations/names: `Form526Submission.submitted_claim_id` = `Form526JobStatus.submission.submitted_claim_id` = `Form526JobStatusSerializer.claim_id` = `EVSS::DisabilityCompensationForm::FormSubmitResponse.claim_id`
