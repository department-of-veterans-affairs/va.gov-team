# Lighthouse Submission Remediation Plan

This document is to detail the steps to remediate lighthouse submissions where the claim was established, but the PDF was not populated in the eFolder in VBMS. 

To determine which submissions failed in this way, a sidekiq job called PollForm526Pdf was created to query a certain set of LH submissions to check for their corresponding PDFs. If a submission's PDF was NOT found, then the corresponding Form526JobStatus record for the submission will have the `status` of 'pdf_not_found'.

One script (development pending) will run this sidekiq job for a subset of recent LH submissions, and after at least 48 hours it will mark any job with the 'pdf_not_found' status. After that 48 hours, a different script (development pending) will simply query the Form526JobStatus table for that status (with the same date/time parameters).

Once we have a list of submissions from this script, we can employ the steps below

## Steps

1. Grab a submission from the list
2. Go to [Argo Production](https://argocd.vfs.va.gov/applications/vets-api-prod) and open a terminal on any pod (see [this section](https://argocd.vfs.va.gov/applications/vets-api-prod?) of TE SOP)
3. Open a rails console
   `bundle exec rails c -s`
4. Fetch the submission
   `submission = Form526Submission.find(<submission id>)`
5. 
