# Lighthouse Post-Submission Missing PDF Remediation Plan

This document is to detail the steps to remediate lighthouse submissions where the claim was established, but the PDF was not populated in the eFolder in VBMS. 

To determine which submissions failed in this way, a sidekiq job called PollForm526Pdf was created to query a certain set of LH submissions to check for their corresponding PDFs. If a submission's PDF was NOT found after 48+ hours, then the corresponding Form526JobStatus record for the submission will have the `status` of 'pdf_not_found'.

## Scripts

The following scripts can be used to manually initiate the polling job, and report on their results:

- [initiate_polling_job](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/batch_remediation/lighthouse_submission/initiate_polling_job.rb)
   - runs a PollForm526Pdf sidekiq job for each Lighthouse submission within a specified timeframe (modify the `start_end` and `end_date` parameters to reflect the desired interval).
   - the actual call to the job is commented out by default for safety's sake. You can run it like this to determine exactly how many jobs your specified timeframe will be initiating.
   - to run it "for real", uncomment the call to `Lighthouse::PollForm526Pdf.perform_async(sub.id)`
   - any job that runs for more than 48+ hours will be marked with the 'pdf_not_found' status.
   - the specified start and end date range, along with the submission ids that were passed to the job, will be generated in `/tmp/PollForm526Pdf-run-[TIMESTAMP].txt` on the Argo pod. BE SURE TO COPY/PASTE ITS CONTENTS LOCALLY ASAP, since these pods are ephemeral
- [find_pdf_failures](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/batch_remediation/lighthouse_submission/find_pdf_failures.rb)
   - queries the Form526JobStatus table for the 'pdf_not_found' status (between the specified `start_end` and `end_date` parameters)
   - generates a list of the submission IDs for which no PDFs were found in `/tmp/PollForm526Pdf-report-[TIMESTAMP].txt`. BE SURE TO COPY/PASTE ITS CONTENTS LOCALLY ASAP, since these pods are ephemeral
   - remember to run this report at least 48+ hours after running `initiate_polling_job` above

NOTE ABOUT THE 48+ HOUR LIMIT: according to the behavior observed during staging testing, the 48+ hour limit is not triggered _exactly_ 48+ hours after the job is initiated. Rather, the limit is checked at the _next retry attempt_ of the exponential backoff. This effectively means that the job will not be updated until **50 hours after the submission**.

Once we have a list of submissions via the `find_pdf_failures` script, these can be used by existing remediation scripts employed by DBEX-CARBS and/or used as reference when contacting Lighthouse about the failures. Additionally, there is a story ([#85624](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/85624)) in the works (as of 2024-07-10) to further automate the PollForm526Pdf job into the ancillary document upload flow of the primary submission path.

## Manual Remediation Steps (IN PROGRESS)

A stretch goal in creating this remediation plan was to create an additional script that would read the output file of the `find_pdf_failures` script, and attempt to regenerate the PDF and upload it to VBMS. Due to some technical challenges in uploading documents, this script was not created. The steps below were developed to incorporate into this script, up to and including the final upload step (which tested semi-successfully). So- buyer beware. The below is informational only, and should not necessarily be used to attempt a remediation

1. Grab a submission from the list
2. Go to [Argo Production](https://argocd.vfs.va.gov/applications/vets-api-prod) and open a terminal on any pod (see [this section]([https://argocd.vfs.va.gov/applications/vets-api-prod?](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/TREX/DEBUG/SOP-Toxic-Exposure-Lighthouse-Form526-Submission-Troubleshooting.md#1-how-to-check-a-form526submission-record)) of TE SOP)
3. Open a rails console
   `bundle exec rails c -s`
4. Run the script below to generate the PDF
   ```
   submission = Form526Submission.find([SUBMISSION ID from #1])
   user_account = UserAccount.find_by(id: submission.user_account_id) ||
                         Account.lookup_by_user_uuid(submission.user_uuid)
   icn = user_account.icn
   transform_service = EVSS::DisabilityCompensationForm::Form526ToLighthouseTransform.new
   body = transform_service.transform(submission.form['form526'])
   service = BenefitsClaims::Service.new(icn)
   raw_response = service.submit526(body, nil, nil, { generate_pdf: 'true'})
   ```
5. Write PDF to temp directory
   ```
   content = raw_response.body
   fname = "/#{Common::FileHelpers.random_file_path}.pdf"
   File.binwrite(fname, content)
   ```
5. Upload PDF
   ```
   claim_id = submission.submitted_claim_id
   require './lib/lighthouse/benefits_documents/service'
   # docs_service requires a user with a participant_id :-(
   user = OpenStruct.new({
                            participant_id: submission.auth_headers['va_eauth_pnid'],
                            icn:
                          })
   docs_service = BenefitsDocuments::Service.new(user)
   mime_type = MimeMagic.by_path(fpath).type
   tempfile = Tempfile.new(fpath)
   tempfile.binmode
   tempfile.write(content)
   tempfile.rewind
   action_file = ActionDispatch::Http::UploadedFile.new(
    tempfile: tempfile,
    type: mime_type,
    filename: "#{fname}.pdf"
   )
   params = {
    file: action_file,
    file_params: {
      claim_id: claim_id,
      document_type: 'L122'
    }
   }
   docs_service.send(:submit_document, params[:file], params[:file_params], nil)
   ```
   This final bit was an attempt to use the WorkerService to upload instead
   ```
   client = BenefitsDocuments::WorkerService.new
   document_data = docs_service.send(:build_lh_doc, params[:file], params[:file_params])
   document_data.file_name="#{fname}.pdf"
   document_hash=document_data.to_serializable_hash
   document = LighthouseDocument.new document_hash
   client.upload_document(action_file.read, document)
   ```
