# [Discovery] Submission Polling

## 1. id Mappings
### _What does each id mean?_
#### _pertaining to [#72663](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/72663)_

The following describes the several different named "`id`"s that a "Form526Submission" (ActiveRecord database object) receives during its lifecycle.

1. `InProgressForm.id`
2. `Form526Submission.id`
3. `Form526Submission.saved_claim_id`: `SavedClaim` is another ActiveRecord database object saved in the database **_before_** the Form526Submission object that has a foreign_key relationship by `SavedClaim`'s primary key (`id`).
4. `Form526Submission.submitted_claim_id`
5. `job_id`: not saved or associated with a Form526Submission anywhere

Answers to the following questions:
1. Where is Form526Submission ID used?
2. Where is SavedClaim ID used? Is it relevant to the initial submission?
3. What is submitted_claim_id?
4. How important is the jId (job ID) that is returned in the initial submission process? Check the frontend polling mechanism
5. Which one is VBMS ID?
