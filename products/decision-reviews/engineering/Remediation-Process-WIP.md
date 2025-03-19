# [WIP] Remediating Errors

## Current Triaging Process
There are a few ways we catch errors that occur on our forms:

### Monitoring the Alert Notifications Slack channel
#### General Process
1. Click on the alert in Slack channel
2. “Pin” the time in DataDog so that the timeframe is locked in
    - May need adjustments depending on the query used for the alert (e.g. if it looks at the last 4 hours, it might not exactly set the timeframe to those 4 hours)
3. View dashboards and/or logs (pinned timeframe will help isolate the event/request that triggered the alert)
    - If there’s any concern around data loss (i.e. evidence that didn’t get submitted), cross-check with queries in the database
      - We usually have a `user_uuid` in the DD log that we can use to look up `AppealSubmission` and `InProgressForm` records
        - If we suspect there should be evidence uploads (i.e. it’s indicated in the form data sent to Lighthouse, though sometimes Veterans will choose to send in later) and InProgressForm is not available, we’ll want to see if we can find a `SavedClaim` record where the original form data is stored (which contains references to the evidence uploads)
      - If they still have an `InProgressForm`, their form data is still available for the Veteran to resubmit on their own. 
          - \*\* We usually just leave these alone at this point because the Veteran can take action to try and resubmit, but not sure if that’s how we want to continue to handle this scenario \*\*
    - Can also follow-up by looking for additional logging of the user’s activity and check if they successfully resubmitted later on by filtering logs with the `user_uuid` and seeing if they got a 200 response to the controller for the form they tried to submit
    - Errors related to jobs (e.g. the evidence upload job, 4142 submit job) can be investigated using the @named_tag.jid or @payload.jid as a filter depending on the structure of the job log

#### Notes
- 503s/504s are usually transient. If there are a lot of them happening at one time, there may be a bug in our code if we’ve released something recently or there’s an outage, so check on activity in platform support/other DSVA slack channel(s) and statuses of other systems like Lighthouse.


For more details on our processes for triaging alerts, we have some available in our [Monitoring Handbook](Monitoring%20Handbook.md#how-to-triage-alerts)

### Checking on Downstream Form errors
#### Database Query
```rb
start_date = Date.new(2024, 9, 1) # Date that represents how far back in the past you want to query records for
# Choose which form you want to query for of the 3 options below
AppealsApi::<HigherLevelReview | SupplementalClaim | NoticeOfDisagreement>.where(status: 'error')
                                                                          .where('created_at > ?', start_date)
                                                                          .order(created_at: :desc)
```

#### Notes
- These errors don’t happen frequently, but so far, they are the “Unidentified Mail” error, which we can’t resolve through our current manual processes (i.e. resubmitting). Veterans should be able to print out the form and mail it in themselves if needed, but we should be able to more easily resolve these errors with less work for the Veteran once we release features that allow them to get a copy of the PDF / print version of their form data on the confirmation page.

### Checking on Downstream Evidence errors
#### Database Query
```rb
start_date = Date.new(2024, 9, 1) # Date that represents how far back in the past you want to query records for
AppealsApi::EvidenceSubmission.joins(:upload_submission)
                              .where(upload_submission: { status: 'error' })
                              .where('appeals_api_evidence_submissions.created_at > ?', start_date)
                              .order(created_at: :desc)
```

#### Verifying file upload in S3
You can use the guid on the AppealsApi::EvidenceSubmission to look up the AppealSubmissionUpload to get the S3 uuid
```rb
es = AppealsApi::EvidenceSubmission.last
asu = AppealSubmissionUpload.where(lighthouse_upload_id: es.guid)
s3_uuid = asu.decision_review_evidence_attachment_guid)
```

You can also join the AppealSubmissionUpload directly to the AppealsApi::EvidenceSubmission when querying for errors, but it's a little messy (tentative, needs validation in prod console)
```rb
AppealsApi::EvidenceSubmission.joins(:upload_submission)
                            .where(upload_submission: { status: 'error' })
                            .joins("INNER JOIN appeal_submission_uploads ON appeal_submission_uploads.lighthouse_upload_id = CAST(appeals_api_evidence_submissions.guid as VARCHAR)")
                            .where('appeals_api_evidence_submissions.created_at > ?', start_date)
                            .order(created_at: :desc)
                            .map {|es| [es.guid, es.upload_submission.detail, es.appeal_submission_upload.decision_review_evidence_attachment_guid] }
```

1. Log into AWS on Citrix/AVD
2. Navigate to the S3 bucket
    - Both SC and NOD uploads live in a bucket that is named after NOD — you can just search for “notice-of-disagreement” in the bar and it should populate the buckets from all the different environments. The folder inside of that bucket called ‘decision_review’ is where you’ll want to look for these evidence uploads.
3. Search for the file using the `decision_review_evidence_attachment_guid` (without any quotes wrapping it)
    - If found, click on the result and drill in until you get to the file details where there will be options to “open” in a new tab or download it. Since you’re on Citrix/AVD you should be able to view it even if there’s PII.
    - If not found, then ?
4. Download and/or open the file in a new tab
   - Use the error detail from `VBADocuments::UploadSubmission#detail` as a reference for figuring out what went wrong
     - e.g. if the error detail was that they had all blank images, check if all the pages are blank or not and if not, note it as an example for chatting with Lighthouse/EMMS/downstream teams on improving downstream validation
     - `AppealsApi::EvidenceSubmission` belongs_to `upload_submission` so you can look it up that way if you have the EvidenceSubmission record

### Checking 4142 job errors
#### DataDog Log Query
```
@payload.form_id:4142 @payload.parent_form_id:"20-0995" env:eks-prod @message_content:"Supplemental Claim Form4142 Queued Job Errored"
```
#### Verifying if job was successful on retry
In the logs that are returned from the query above, there should be a `jid` (job id) under `@named_tags` that you can use to filter and see if there was a “Supplemental Claim 4142 submitted” log that was output during a later retry. 

There are a couple of approaches that vary in loading time:
- You can filter by `@named_tags.jid` using 1 job id and limiting the timeframe to the day listed in the timestamp. This is usually a pretty fast query.
- You can filter by multiple job ids by connecting them with an OR and widening the timeframe to fit all the timestamps for those logs. This is a longer query to run, so you may need to batch them if there are a lot of job ids to check. For example: `@named_tags.jid:(jobid1 OR jobid2 OR jobid3)`
- *Note: Make sure to select “Online Archives” from the dropdown if the logs you need to look at are from >1 month ago.*

---

## Current Remediation Process [WIP]
*“The general guidance is that if the error occurred within 2 weeks, we can manually resubmit or have the contact center reach out. If it's been more than 2 weeks, then we need to work with BVA or VBA to notify the Veteran.”*

Key:
- **[??]** = Open question
- **[TEMP]** = Current process, but only meant to be a temporary measure
- **[TBD]** = Unconfirmed process/idea, subject to change

### HLR / SC / NOD Form error (VA.gov <> Lighthouse)
- Has it been more than 2 weeks since they tried submitting?
  - Yes
    - Remediation with VBA/BVA?
  - No
    - Is the InProgressForm still available?
      - Yes
        - Reach out to Veteran to ask them to resubmit
          - [??] If part of their data reached LH already, do we need to let downstream teams know that there will be a duplicate when the Veteran resubmits?
      - No
        - Is there a SavedClaim with the original form data?
          - Yes
            - **[TBD]** Our team manually submits form data to Lighthouse?
              - **[??]** What is the process to submit form data (from a SavedClaim) to Lighthouse on their behalf?
          - No
            - **[TBD]** Remediation with VBA/BVA?

### HLR / SC / NOD Form error (downstream of Lighthouse)
- No current process other than having VBA/BVA remediate
  - One option could be reaching out to the Veteran and have them mail it in? (Automated email and/or link to PDF on confirmation page could satisfy this error case) 
    - **[??]** How do we make sure the form is dated correctly? (i.e. How do we account for the delay between when they submitted on VA.gov and when submit through mail?)
   
### Evidence upload to Lighthouse error (Sidekiq job error)
- Has it been more than 2 weeks since they tried submitting?
  - Yes
    - **[TBD]** Remediation with VBA/BVA?
  - No
    - Is there a way for us to tie the evidence back to its form submission? (via SavedClaim?)
      - Yes
        - **[??]** Our job retries should be handling any transient errors but if needed, should we re-run the job and upload to Lighthouse ourselves?
      - No
        - Do we know what the filename is? 
          - (Not sure if this is necessary, even if we don’t know, we might be able to ask them to mail in all the evidence they wanted to include)
          - **[TBD]** Ask Veteran to mail in evidence
         
### Evidence error (downstream)
- Has it been more than 2 weeks since they tried submitting?
  - Yes
    - **[TBD]** Remediation with VBA/BVA?
  - No
    - Do we have the file upload available in S3 and is it valid to send downstream? (i.e. not all blank, not password protected, etc)?
      - Yes
        - **[??]** Can we try to re-upload on our own? Will we encounter the same error? Do we need to talk to downstream teams about adjusting validation logic?
        - Currently we are still defaulting to reaching out to the Veteran even if their upload should have made it through 
          - **[??]** Should we contact downstream teams to force it through? (This has happened recently where Shaun handled the manual process)
      - No
        - **[TEMP]** Have Contact Center reach out to the Veteran and ask them to mail it
          - *Incoming feature to automate this email notification to the Veteran*
         
### [Temporary Process] - Working with Contact Center for Remediations

As we work to develop a feature to automatically email a Veteran when there is an error with their submission that occurs downstream, we are leaning on the Contact Center to help us reach out to Veterans to let them know that we have discovered an issue with their form and/or evidence submission and ask them to mail it in. 

To start the process, you can send a message to `@Kimberley Monroe-Daniels` in `#vsp-contact-center-support` on DSVA Slack and let her know how many Veterans you'll need to reach out to. Then in Citrix/AVD, you can send an **encrypted** email from your VA account to her VA email with all the data she'll need (see below). Slack threads for examples/context: [1](https://dsva.slack.com/archives/CNCEXNXK4/p1725554752348139), [2](https://dsva.slack.com/archives/CNCEXNXK4/p1725911149052749), [3](https://dsva.slack.com/archives/CNCEXNXK4/p1726597104617239).
 

#### Data to send to Contact Center
- Veteran/Submission Info
  - Veteran ICN
  - Date of submission (be mindful of UTC timestamps vs. timezones; you can check their form data for a timezone if needed)
  - If evidence error, provide the Obfuscated/masked filename (first 3 letters, last 2 letters, file extension and special characters like underscores are also okay — basically follow what 526 did for their obfuscation)
- Mailing/Fax Info
  - For **Notice of Disagreement** submission:

    > Board of Veterans’ Appeals \
    > PO Box 27063 \
    > Washington, D.C. 20038
    > 
    > You can also fax it to 844-678-8979.

  - For **Supplemental Claim** submission:

    > Department of Veterans Affairs \
    > Claims Intake Center \
    > PO Box 4444 \
    > Janesville, WI 53547-4444

- Email Content (Just an example, can be modified as needed)

  > Unfortunately, we were unable to process and attach a piece of evidence to your [Supplemental Claim / Notice of Disagreement] that you submitted on [Date of Submission]. The PDF filename(s) of the evidence we could not process are listed below. They may be masked to hide possible sensitive information, but you should be able to identify which piece(s) of evidence we are referring to: \
  > \
  > [Masked filename(s), minus first 3 and last 2 letters].pdf \
  > \
  > We want to make sure that your submission is evaluated with all of the evidence you intended to include, so we are requesting that you mail the evidence to: [insert mailing address for appropriate form] or you can fax it to: [fax number for appropriate form]. 



