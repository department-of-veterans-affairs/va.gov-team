# State of 526 Error Handling and Fallback Summary (June 2023)
## Purpose
Identify how we are currently handling errors in the 526ez applications, with a specific focus on silent form submission failures.  Offer high level best-practices for error handling in our applications and identify loose ends.  This document is for discovery and should not be considered exhaustive.


## TL;DR
### Takeaways:
 - Conventions for new in-code error handling are; FE == use Sentry, BE == use Rails.logger.
 - Datadog is most likely going to be the future, and it tends to be easier to grok than Sentry.
 - Our biggest problem is that sometimes Vet form submissions get lost.  We now have a failover solution that manually delivers the PDFs if electronic submissions fail.  
 - These are the known [bugs](https://app.zenhub.com/workspaces/526ez-bugs-and-defects-646e4436ff6787001ac4771a/board) and [KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489) that we have inherited.
### Recommended next steps:
 - [Notate this flow with visual groupings by error handling solution(s)](https://app.mural.co/t/coforma8350/m/coforma8350/1686317911061/2ff3d4b4c2d9d84eaa61e9eda95a533041f137da?sender=uf9a509d178428eccea215628)
 - [Investigate these bugs](https://app.zenhub.com/workspaces/526ez-bugs-and-defects-646e4436ff6787001ac4771a/board), e.g. commonly returned EVSS API errors
 - Adding automatic retries to Manual PDF delivery failover worker is very low hanging fruit with a potentially huge payoff.
 - Add the ability to manually retry our failover solution.


## What we have
### FE (vets-website)
Our front-end error handling is apparently simple.  We have a Sentry module that exposes methods for setting tags and logging.  

<img width="809" alt="Screen Shot 2023-07-06 at 3 19 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/758095ed-d644-47b1-ba7a-fc4350e7425e">

To make it even easier, at the top level of the what appears to be our FE app, we have some catch all sentry logging:
`src/applications/disability-benefits/all-claims/Form526EZApp.jsx`
  
<img width="719" alt="Screen Shot 2023-07-06 at 3 19 54 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/42e2f634-df77-4efa-b5ca-73d8e44b4ed5">

Further thought / research / need will likely determine if this is sufficient, but given the severity of our BE issue where submissions are dropped, this data feels sufficient for now.  TL;DR - looks fine, not too worried about it.

EVSS API validation errors are an api issue, and the FE data is transformed before being sent. 

[UPDATE: this document outlines the EVSS validations run on form submissions](https://drive.google.com/drive/folders/1Vjkle-URBLGTJtXQb8ZVsbIiCpagy1GD)

### BE (vets-api)
Logging is a bit more convoluted on the backend. There are a few different paradigms, as well as the aforementioned ‘big bug’, which is lost submissions.  However, we do have a few current best practices that we can follow as we iterate.
 - We catch errors, log relevant info, and report only salient information to the front end.
 - `Rails.logger` is our preferred method of logging.  It’s a clear API that provides `.error`, and `.info`, and `.debug` logging levels.  
   - Here is an example of how we can (and should) pass additional context into `Rails.logger`
     - app/workers/decision_review/submit_upload.rb:47
     - <img width="758" alt="Screen Shot 2023-07-06 at 3 20 41 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/01f11b28-43f2-4219-bb6d-8b241f5aba6e">

 - Our error logging uses a temporary log file as a middle man between our application and our various Dev facing dashboards.  Exactly how it works and why it’s done this way is the domain of DevOps, and for now should be considered out of scope. 
 - More is More.  Log anything important.  Job completion, Job offloading, 3rd party API calls and payloads, suppressed errors, etc.  
 - We have middleware in place that automatically logs errors from the EVSS API. This should be kept in mind when generating logs around EVSS API communication, however developers should not assume that this middleware is sufficient for their use case.

#### Ways we Log on the BE

We have four apparent paradigms, which is actually all logging to the same place, a temp log file on the server instance.  That logfile is then scrapped and the data is propagated to Sentry, Datadog, Grafana, and who knows what else.  However, that is happening under the hood.  Here is what you will actually see in the code:
 - `Rails.logger`… vs `SentryLogging`
 - `SentryLogging` uses rails_logger under the hood, so just skip the middleman and use `Rails.logger`…
 - Raven Gem
 - This appears to just be a wrapper for Sentry.  More investigation is required, but don’t use it unless you have a good reason.  This also appears to logging directly to sentry, skipping the logs, which would break our preferred convention, however I’m not sure of this.  Since we are deprecating Raven, it seems out of scope to dig further.
 - EVSS Middleware
 - This requires a bit more investigation, but seems primarily responsible for logging error responses from the EVSS API.  This also writes to our temp log file under the hood.
 - Submission Failover logging
 - `vets-api/app/models/form526_submission.rb` is the entry point for all of our submission and failover code.  
 - TODO: This is the place to start for gaining a deeper understanding of how our submission / failover works.
 - Our failover has logging peppered throughout it, which again writes to the temp log file for scraping.

#### The difference between logging and error raising

**LOGGING**: We log bits of context that we explicitly want to track.  This can include the beginning and end of 3rd party interactions, successful actions, job queuing and more.  We Log data to our local rails logs which are in turn reported to Datadog, Sentry, and Grafana.  (possibly more)

**ERROR RAISING**:  If an error occurs in the rails application (BE) it will be caught in Sentry.  Sentry receives log data, but its primary value (relative to datadog) is as a catch-all for errors. Ideally, in user facing interactions we catch errors, log relevant information, and then report back to the front end without raising an error.  However, if an error occurs in a non-user facing interaction, e.g. a 526 form submission to EVSS, then we can log the failure, but we should also raise that error.  There is forthcoming work to improve the way we raise errors, e.g. using Sentry tags.

#### How we handle 526 form submission failures

These were previously silent failures.  We now have a stopgap (aka our failover solution)  in place that is far better (~600 failures per week to ~1 per week), however our goal is a 100% success rate.  

The failover will kick in once the submission delivery worker (encapsulated here) fails.  We have two distinct failure states, defined as `retryable` and `non_retryable`.  
 - `retryable` are ones that, if you keep trying, may have a chance at succeeding. Such as network issues (timeout errors, downstream services temporarily down or unreachable, etc).
   - If the error we get back is retryable, we retry (up to 14 times, or until it is successful). If we exhaust all 14, then backup path.
 - `non_retryable` errors are errors that we know, no matter how many times we retry the submission, it will never succeed (without direct human interaction or changes in further downstream services).  Examples of this would be a "fraud-lock" on the veterans account, or the further backend systems having a mismatching SSN, or file number for the veteran vs what we are providing.
   - If we get a `non_retryable` error, we just bail right away, stop trying, and go the backup path right away. We know it will not succeed, so instead of wasting a day trying, just send it now, essentially.

**NOTE:**
We never generate our own 526 form. We either submit the DATA from the submission, to EVSS, who turns that data into a call to downstream systems to establish the claim directly in the backend system (the normal regular functionality), or we use that same data to ask EVSS to generate a 526 PDF for us.-*Unlike the other forms, we do not ever generate a 526 paper form ourselves (vets-api)**

In either failure case, we attempt to run the following-*Failover** logic:

  1. Generate support documentation PDFs.  [Our API owns this PDF generation, and this is the most relevant section of that code.](https://github.com/department-of-veterans-affairs/vets-api/blob/16e68a67c69df4c280ec1c5523d96cd25f74301b/lib/sidekiq/form526_backup_submission_process/processor.rb#L75)
   - <img width="594" alt="Screen Shot 2023-07-06 at 3 21 00 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/9451b95c-2acb-41b4-9669-4f6b97d2ef2d">

  2. We also need to submit the actual 526 form itself. EVSS already has logic to PDF-ify this, so in the event of a failure we will request this PDF from them.  [This is documented along with other 3rd party communications here.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)
   - <img width="630" alt="Screen Shot 2023-07-06 at 3 21 47 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/5a23df9a-9e4c-425e-b27c-5b8694ebd7f2">
  
  3. Once we have these PDFS, we send them to Lighthouse, specifically the Benefits Claims Intake API, [via this a new worker](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/sidekiq/form526_backup_submission_process/submit.rb)
   - <img width="701" alt="Screen Shot 2023-07-06 at 3 22 08 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/198b0248-3cb4-473b-a664-71a1af7b656e">

  4. If the Backup worker fails, we log the failure, [as seen here](https://vagov.ddog-gov.com/logs?query=%22FORM526%20BACKUP%20SUMBISSION%20FAILURE.%20In[…]=stream&from_ts=1684334801686&to_ts=1686926801686&live=true)
   - <img width="713" alt="Screen Shot 2023-07-06 at 3 22 31 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/7f950e82-9aea-412d-a192-be0be9bcc8cc">
   - <img width="714" alt="Screen Shot 2023-07-06 at 3 23 01 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/dd8d547e-81f3-4c6d-92b4-d5ddb7ed724f">

In the event of the last case, where all submission has failed, there is no immediate alerting.  However, we do include this information in a weekly report to the VA.  These failures are not differentiated from other, historical failures, and they will simply and in line, like the other 40,000 or so claims that have failed over the years, to be batch/bulk re-established, via whatever method the VA decides upon.

A potential area of improvement would be allowing us to reprocess these manually via our submission logic (basically reattempt the BACKUP submission)... and adding a retry to the backup job may resolve some of these. This has not been added yet.

### Action items for ongoing error handling
 - Use good form for logging.  Follow the convention of using `Sentry` with tags on the front end and `Rails.logger` on the back end.
 - We should have a standard (style guide?) for what we log, how we log it, tag it, etc.  Right now it’s up to the developer to decide how much or how little context to pass to the `Rails.logger`
 - Syntactic anomalies aside, we are using two drastically different approaches to error logging in our BE, i.e. Feature level logging vs Middleware level logging.  We might consider moving in one direction or the other for external API calls.

### Action items for ongoing Failover improvement
Improving on submission failover is a high priority.  Previously we had an issue where submissions were failing on a Sidekiq worker with no retrying, and little or no logging.  We currently have a failover solution that needs documentation, however it could be summarized as -*“If we fail X retries of this job fail, then make a PDF out of this information and email it to the appropriate entity.”**
Action Items:
 - Identify systemic issues e.g. some services are not available at certain times of day.
   - These are mostly subsystems of EVSS and beyond our control.
   - This may correspond to some of the contemporaneous failure spikes [documented here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60152).  
 - Document our current failover solution. [This will require digging through some code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form526_submission.rb).
 - Investigate EVSS validation failures that could be prevented by FE validations.
   - [This thread in Slack](https://dsva.slack.com/archives/C1VBAHWQL/p1686785454385369) provides some relevant context on EVSS form validations and specifically how / where we can go about asking what validations exist and possibly getting them changed.
 - Synthesize the following smattering of existing issues into actionable ticket work.
   - Happy path failures (Sidekiq retries / pre-failover)
     - [DataDog 1](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/form-526-disability-compensation?from_ts=1685984856415&to_ts=1686589656415&live=true)
     - [DataDog 2](https://vagov.ddog-gov.com/logs?query=service%3Avets-api%20%22Form526%20Exhausted%22%2[…]c3%3A56&from_ts=1685985062267&to_ts=1686589862267&live=true)
   - Sad path messages (Manual PDF creation)
     - [DataDog 3](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/form-526-disability-compensation?from_ts=1685984856415&to_ts=1686589656415&live=true)
 - [Investigate documented bugs, primarily from the EVSS Error Middleware](https://app.zenhub.com/workspaces/526ez-bugs-and-defects-646e4436ff6787001ac4771a/board)
   - TODO: This is the place to start for debugging lost form submissions.
   - [This document is potentially relevant, as we are seeing grouping of failures](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60152)
   - Look at common bugs e.g. “the 15001 error” and see if there could be a dummy simple solution 

## Misc Tips
 - To see the full lifecycle of a form submission, search DataDog by the forms submission_id
   - E.G. `service:vets-api @named_tags.dd.env:eks-prod @payload.submission_id:1982049`
   - TODO: Where does `submission_id` come from?
 - The classname `Sidekiq/EVSS::DisabilityCompensationForm::SubmitForm526AllClaim` can be searched in sentry to see all of the relevant logs
 - Most of the new error reporting we do will be manually added to code in the application layer.  Keep in mind that we also have middleware logging responses from EVSS.

## Resources
### Slack threads:
 - [Thomas -> Kyle: “how do we look up 526EZ errors in logs?”](https://dsva.slack.com/archives/C053U7BUT27/p1686588415725609)
 - [Sam (via Kyle) -> Carbs: “some additional locations in the code for KPI consideration”](https://dsva.slack.com/archives/C053U7BUT27/p1686836358577259)
 - [Seth -> Team: “I have some questions about EVSS API validations”](https://dsva.slack.com/archives/C1VBAHWQL/p1686785454385369)

### Documentation:
 - [Our Bug Board with errors related EVSS API failures](https://app.zenhub.com/workspaces/526ez-bugs-and-defects-646e4436ff6787001ac4771a/board)
 - [Git issue describing contemporaneous groupings of form submission failures](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60152)
 - [Kyles KPIs for 526 error handling](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)
 - [Most relevant code for 526 submissions and failover](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/form526_submission.rb)
