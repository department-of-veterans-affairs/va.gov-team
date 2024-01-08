# [Discovery] Submission Polling

## 1. id Mappings
### _What does each id mean?_
#### _pertaining to [#72663](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/72663)_

The following describes the several different named "`id`"s that a "Form526Submission" (ActiveRecord database object) receives during its lifecycle.

1. `InProgressForm.id`: The id of the vets-api database record from the in_progress_forms table that holds user-entered data from vets-website.
2. `Form526Submission.saved_claim_id`: `SavedClaim` is another database record saved in the database **_before_** the Form526Submission record that has a foreign_key relationship by `SavedClaim`'s primary key (`id`). `SavedClaim` is used for vets-website to vets-api form validation using the json-schema library.
3. `Form526Submission.id`: Once the `InProgressForm` is submitted, and after a `SavedClaim` is created, the `Form526Submission` database record is created. 
4. `Form526Submission.submitted_claim_id`: the `claim_id` expected back in the response from the third-party service called to generate the Form526 pdf and submit to VBMS - a.k.a. the "VBMS Claim ID".
5. `job_id` (`Form526JobStatus.job_id`): `job_id` is used after submitting to the vets-api endpoint `/submit_all_claim` after the `Form526Submission` job is created and underway. `job_id` is used on the vets-website frontend to "poll" the `Form526JobStatus` table in the vets-api table. This is done through the endpoint `/submission_status` on vets-api, that returns a `Form526JobStatus` record, that has a foreign key relationship with the `Form526Submission` table's `id` column. The pertinant data that the `submission_status` endpoint needs to send back from the endpoint is the `Form526Submission`'s `submitted_claim_id`, which is known as `claim_id` to the `Form526JobStatus`.

Answers to the following questions:
1. Where is Form526Submission ID used?
2. Where is SavedClaim ID used? Is it relevant to the initial submission?
3. What is submitted_claim_id?
4. How important is the jId (job ID) that is returned in the initial submission process? Check the frontend polling mechanism
5. Which one is VBMS ID?
