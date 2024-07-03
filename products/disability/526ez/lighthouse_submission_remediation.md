# Lighthouse Submission Remediation Plan

This document is to detail the steps to remediate lighthouse submissions where the claim was established, but the PDF was not populated in the eFolder in VBMS. 

To determine which submissions failed in this way, a sidekiq job called PollForm526Pdf was created to query a certain set of LH submissions to check for their corresponding PDFs. If a submission's PDF was NOT found, then the corresponding Form526JobStatus record for the submission will have the `status` of 'pdf_not_found'.

## Scripts

The following scripts can be used to initiate the polling job, and report on their results:

- [initiate_polling_job](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/batch_remediation/lighthouse_submission/initiate_polling_job.rb) will run the PollForm526Pdf sidekiq job for a subset of recent LH submissions (between the specified `start_end` and `end_date`). Any job that runs for more than 48 hours will be marked with the 'pdf_not_found' status. 
- [find_pdf_failures](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/batch_remediation/lighthouse_submission/find_pdf_failures.rb) will query the Form526JobStatus table for the 'pdf_not_found' status (again, between the specified `start_end` and `end_date` parameters) and output a list of the submission ids in question.

Once we have a list of submissions from this script, we can employ the steps below:

## Steps

1. Grab a submission from the list
2. Go to [Argo Production](https://argocd.vfs.va.gov/applications/vets-api-prod) and open a terminal on any pod (see [this section](https://argocd.vfs.va.gov/applications/vets-api-prod?) of TE SOP)
3. Open a rails console
   `bundle exec rails c -s`
4. Fetch the submission
   `submission = Form526Submission.find(<submission id>)`
5. 
