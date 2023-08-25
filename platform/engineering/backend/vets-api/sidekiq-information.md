## Sidekiq Job Development and Information

### Objective
The objective of this document is for anyone to be able to write a sidekiq job, test it locally, and use it via the rails console (either locally or in staging/prod environments).

### Where are the sidekiq admin web UIs?
http://localhost:3000/sidekiq

https://staging-api.va.gov/sidekiq

https://api.va.gov/sidekiq

### What is a Sidekiq Job?
A sidekiq job is a chunk of code that is queued and ran out of a queue. There are multiple queues with varying priorities. This is arbitrary and any number of queues can be established, but here we have `low` `default` and `high`. If you do not specify a queue, it is thrown into the default queue. This is where most are in vets-api. 

### When to use sidekiq jobs

Sidekiq jobs can be used in production code for queuing tasks and other things that need to be retryable and queue-able. Things that need to be scheduled, also make good candidates for sidekiq jobs as you can run jobs on a schedule. Some examples of things that are sidekiq jobs:

 - Some Form Submissions
 - Evidence Submissions
 - Running a report every Monday (scheduled)
 - Administrative tasks that are ran manually via rails console on as-needed basis

Sidekiq jobs can:
 - be scheduled
 - take arguments
 - be retried a set number of times
 - batched together, or strung together logically
 - enforce throttling/rate-limiting

Sidekiq jobs need to:

 - have arguments that are serializable to json
 - NOT have named arguments, they are not supported (but you can use an options hash if you want to)
   - IE you can do `def perform(options={})` and pass `perform(one: 1, two: 2)`, having `options` then accessible and set to `{one: 1, two: 2}`
   - you cannot do `def perform(one:, two:)`
 - be idempotent (can be re-ran any number of times without negative affects)
   - we don't follow this in a lot of places... but we should
 - not have PII or sensitive data, in the args

### Examples (from our code)
Some are in [lib/sidekiq](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/sidekiq), most are in [app/workers](https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/workers)

[526 EVSS Jobs](https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/workers/evss)

[Job that uploads evidence files for appeals](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/decision_review/submit_upload.rb)


[Job to submit a form4142 for a decision review](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/decision_review/form4142_submit.rb)
```ruby
# frozen_string_literal: true

require 'decision_review_v1/utilities/constants' 
require 'decision_review_v1/service' 

module DecisionReview
  class Form4142Submit
    include Sidekiq::Worker

    STATSD_KEY_PREFIX = 'worker.decision_review.form4142_submit'

    sidekiq_options retry: 3

    def decrypt_form(encrypted_payload)
      JSON.parse(KmsEncrypted::Box.new.decrypt(encrypted_payload))
    end

    def perform(appeal_submission_id, encrypted_payload, submitted_appeal_uuid)
      decision_review_service.process_form4142_submission(appeal_submission_id:,
                                                          rejiggered_payload: decrypt_form(encrypted_payload))
      StatsD.increment("#{STATSD_KEY_PREFIX}.success")
    rescue => e
      StatsD.increment("#{STATSD_KEY_PREFIX}.error")
      ::Rails.logger.error({
                             error_message: e.message,
                             form_id: DecisionReviewV1::FORM4142_ID,
                             parent_form_id: DecisionReviewV1::SUPP_CLAIM_FORM_ID,
                             message: 'Supplemental Claim Form4142 Queued Job Errored',
                             appeal_submission_id:,
                             lighthouse_submission: {
                               id: submitted_appeal_uuid
                             }
                           })
      raise e
    end

    private

    def decision_review_service
      DecisionReviewV1::Service.new
    end
  end
end

```

`include Sidekiq::Worker` is how you know this is a sidekiq job, and will usually be in any sidekiq job class you are making.
The `perform` method is the most basic and required thing in the sidekiq job. That is the `chunk` of work this job does. 
Since the data needed for this job is not stored in the database, it is passed in as an encrypted string (since you are not supposed to have PII in the args in plain-text)



### Examples of More Admin type jobs and example usages
[NonBreakeredForm526BackgroundLoader, a sidekiq class used to take a 526 submission, and upload a PDF, zipped, representation of it to S3](https://github.com/department-of-veterans-affairs/vets-api/blob/84bd1d89b98194fb261908e2134c7f1fa099813e/lib/sidekiq/form526_backup_submission_process/processor.rb#L416C46-L416C46)

```ruby
    class NonBreakeredForm526BackgroundLoader
      extend ActiveSupport::Concern
      include Sidekiq::Worker
      sidekiq_options retry: false
      def perform(id)
        NonBreakeredProcessor.new(id, get_upload_location_on_instantiation: false,
                                      ignore_expiration: true).upload_pdf_submission_to_s3
      end
    end
```

This can be ran in the rails console like so:
```ruby
Sidekiq::Form526BackupSubmissionProcess::NonBreakeredForm526BackgroundLoader.perform(1234)
```
This would queue this job, for submission with ID 1234


## Walkthrough, building a real job, from scratch

This is an actual use-case and need, for weekly stats on 526 claims, that the VBA people are interested in. 

The "code" or work we want the job to do is not super relevant for this excersise, it is more going to be focused on sidekiq-ifying it, but I will provide it here anyways. 

```ruby
sdate = 7.days.ago.beginning_of_week.beginning_of_day
edate = Date.today.beginning_of_week.beginning_of_day
total = Form526Submission.where('created_at BETWEEN ? AND ?', sdate, edate); nil
total_count = total.count
exhausted = total.where(submitted_claim_id: nil).size;nil
no_ids = total.where(submitted_claim_id: nil).where(backup_submitted_claim_id: nil);nil
totally_failed_ids = no_ids.map(&:form526_job_statuses).select {|jss| jss.any?{|js| js.job_class == 'BackupSubmission' && js.status == "exhausted"}}.map {|e| e.first.form526_submission_id}
still_pending = no_ids.pluck(:id) - totally_failed_ids
```
Currently when ran manually this is used to output it. 

```ruby
puts <<EOF

#{sdate} - #{edate}

Total Submissions: #{total_count}

Total Number of auto-establish Failures: #{exhausted}

   Successful Backup Submissions: #{exhausted - no_ids.count}

   Failed Backup Attempts: #{totally_failed_ids.count}

   Still Pending/Attempting Submission: #{still_pending.size}

   Submission IDs Pending: #{still_pending}
EOF

```

To get this code into sidekiq we can add a file with it in a new sidekiq class.

It already looks like there is a file/job/class that does this type of admin reporting task at [app/workers/evss/failed_claims_report.rb](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/evss/failed_claims_report.rb)

We can make a file next to that one, as `app/workers/evss/weekly_backup_submission_report.rb`

```ruby
# frozen_string_literal: true

module EVSS
  class WeeklyBackupSubmissionReport
    include Sidekiq::Worker

  end
end
```

Next add a perform method, and our code. 
```ruby
# frozen_string_literal: true

module EVSS
  class WeeklyBackupSubmissionReport
    include Sidekiq::Worker

    def perform(emails)
      sdate = 7.days.ago.beginning_of_week.beginning_of_day
      edate = Time.zone.today.beginning_of_week.beginning_of_day
      total = Form526Submission.where('created_at BETWEEN ? AND ?', sdate, edate)
      total_count = total.count
      exhausted = total.where(submitted_claim_id: nil).size
      no_ids = total.where(submitted_claim_id: nil).where(backup_submitted_claim_id: nil)
      totally_failed_ids = no_ids.map(&:form526_job_statuses).select do |jss|
                             jss.any? do |js|
                               js.job_class == 'BackupSubmission' && js.status == 'exhausted'
                             end
                           end.map { |e| e.first.form526_submission_id }
      still_pending = no_ids.pluck(:id) - totally_failed_ids
      %(
        #{sdate} - #{edate}

        Total Submissions: #{total_count}

        Total Number of auto-establish Failures: #{exhausted}

          Successful Backup Submissions: #{exhausted - no_ids.count}

          Failed Backup Attempts: #{totally_failed_ids.count}

          Still Pending/Attempting Submission: #{still_pending.size}

          Submission IDs Pending: #{still_pending}
      )
    end
  end
end
```

Next add some email stuff.
```ruby
# frozen_string_literal: true

module EVSS
  class WeeklyErrorReportMailer < ApplicationMailer
    def build(recipients:, body:)
      mail(
        to: recipients,
        subject: 'Weekly 526 Error Report',
        content_type: 'text/html',
        body:
      )
    end
  end

  class WeeklyBackupSubmissionReport
    include Sidekiq::Worker

    def perform(recipients, start_date = 7.days.ago.beginning_of_week.beginning_of_day,
                end_date = Time.zone.today.beginning_of_week.beginning_of_day)
      total = Form526Submission.where('created_at BETWEEN ? AND ?', start_date, end_date)
      total_count = total.count
      exhausted = total.where(submitted_claim_id: nil).size
      no_ids = total.where(submitted_claim_id: nil).where(backup_submitted_claim_id: nil)
      totally_failed_ids = no_ids.map(&:form526_job_statuses).select do |jss|
                             jss.any? do |js|
                               js.job_class == 'BackupSubmission' && js.status == 'exhausted'
                             end
                           end.map { |e| e.first.form526_submission_id }
      still_pending = no_ids.pluck(:id) - totally_failed_ids
      body = ["#{start_date} - #{end_date}"]
      body << %(Total Submissions: #{total_count})
      body << %(Total Number of auto-establish Failures: #{exhausted})
      body << %(Successful Backup Submissions: #{exhausted - no_ids.count})
      body << %(Failed Backup Attempts: #{totally_failed_ids.count})
      body << %(Still Pending/Attempting Submission: #{still_pending.size})
      body << %(Submission IDs Pending: #{still_pending})
      WeeklyErrorReportMailer.build(emails, body.join('<br>')).deliver_now
    end
  end
end
```

Testing it out.
```ruby
irb(main):003:0> EVSS::WeeklyBackupSubmissionReport.perform_async("kyle.soskin@adhocteam.us")
=> "b917cf2c2decb95e9782d544"
```
It gives back a JID (jobid), so we know it was able to queue the job. 

If we want to actually run it, and see what it does, we can do the following: 

```
(base) [~/misc/va.gov/vets-api (ksoskin/adding_email_526_reporting)]$ bin/rails c
irb(main):004:0> require 'sidekiq/testing'
irb(main):005:0> EVSS::WeeklyBackupSubmissionReport.perform_async("kyle.soskin@adhocteam.us")
=> "e3903ea6b2cc060baffe9fb5"
irb(main):006:0> EVSS::WeeklyBackupSubmissionReport.drain
2023-08-03 09:56:21.392687 D [27413:59660 log_subscriber.rb:126] ActiveRecord::Base --    (0.8ms)  SELECT COUNT(*) FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00')
2023-08-03 09:56:21.395424 D [27413:59660 log_subscriber.rb:126] ActiveRecord::Base --    (0.5ms)  SELECT COUNT(*) FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00') AND "form526_submissions"."submitted_claim_id" IS NULL
2023-08-03 09:56:21.396587 D [27413:59660 log_subscriber.rb:126] ActiveRecord::Base --   Form526Submission Load (0.4ms)  SELECT "form526_submissions".* FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00') AND "form526_submissions"."submitted_claim_id" IS NULL AND "form526_submissions"."backup_submitted_claim_id" IS NULL
2023-08-03 09:56:21.397500 D [27413:59660 log_subscriber.rb:126] ActiveRecord::Base --    (0.3ms)  SELECT COUNT(*) FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00') AND "form526_submissions"."submitted_claim_id" IS NULL AND "form526_submissions"."backup_submitted_claim_id" IS NULL
/Users/kylesoskin/misc/va.gov/vets-api/app/workers/evss/weekly_backup_submission_report.rb:37:in `perform': undefined local variable or method `emails' for #<EVSS::WeeklyBackupSubmissionReport:0x0000000123002188 @jid="e3903ea6b2cc060baffe9fb5", @bid=nil> (NameError)

      WeeklyErrorReportMailer.build(emails, body.join('<br>')).deliver_now
                                    ^^^^^^
```

We can require sidekiq testing tools, which allows us to call `drain` on the worker class, which executes all queued jobs of that class in the queue currently, syncronously. So we see the logs and errors in the irb/console.

We can see I misnamed a variable here. 

Changing the variable, and adding a logging line

```ruby
# frozen_string_literal: true

module EVSS
  class WeeklyErrorReportMailer < ApplicationMailer
    def build(recipients:, body:)
      mail(
        to: recipients,
        subject: 'Weekly 526 Error Report',
        content_type: 'text/html',
        body:
      )
    end
  end

  class WeeklyBackupSubmissionReport
    include Sidekiq::Worker

    def perform(recipients, start_date = 7.days.ago.beginning_of_week.beginning_of_day,
                end_date = Time.zone.today.beginning_of_week.beginning_of_day)
      Rails.logger.info("Sending Weekly Backup Submission Report for #{start_date} - #{end_date}, to #{recipients}")
      total = Form526Submission.where('created_at BETWEEN ? AND ?', start_date, end_date)
      total_count = total.count
      exhausted = total.where(submitted_claim_id: nil).size
      no_ids = total.where(submitted_claim_id: nil).where(backup_submitted_claim_id: nil)
      totally_failed_ids = no_ids.map(&:form526_job_statuses).select do |jss|
                             jss.any? do |js|
                               js.job_class == 'BackupSubmission' && js.status == 'exhausted'
                             end
                           end.map { |e| e.first.form526_submission_id }
      still_pending = no_ids.pluck(:id) - totally_failed_ids
      body = ["#{start_date} - #{end_date}"]
      body << %(Total Submissions: #{total_count})
      body << %(Total Number of auto-establish Failures: #{exhausted})
      body << %(Successful Backup Submissions: #{exhausted - no_ids.count})
      body << %(Failed Backup Attempts: #{totally_failed_ids.count})
      body << %(Still Pending/Attempting Submission: #{still_pending.size})
      body << %(Submission IDs Pending: #{still_pending})
      body = body.join('<br>')
      WeeklyErrorReportMailer.build(recipients:, body:).deliver_now
    end
  end
end
```

Now it works (up to the point of sending the email, because I do not have that configured locally, but testing in staging or if I setup email locally, it should probably work)
```ruby
irb(main):002:0> EVSS::WeeklyBackupSubmissionReport.perform_async("kyle.soskin@adhocteam.us") 
=> "8264f49c83a62ee93cc4e149"
irb(main):003:0> EVSS::WeeklyBackupSubmissionReport.drain
2023-08-03 10:00:59.646174 I [29167:59660 weekly_backup_submission_report.rb:20] Rails -- Sending Weekly Backup Submission Report for 2023-07-24 00:00:00 UTC - 2023-07-31 00:00:00 UTC, to kyle.soskin@adhocteam.us
2023-08-03 10:01:00.026949 D [29167:59660 log_subscriber.rb:126] ActiveRecord::Base --    (0.9ms)  SELECT COUNT(*) FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00')
2023-08-03 10:01:00.030217 D [29167:59660 log_subscriber.rb:126] ActiveRecord::Base --    (0.5ms)  SELECT COUNT(*) FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00') AND "form526_submissions"."submitted_claim_id" IS NULL
2023-08-03 10:01:00.031857 D [29167:59660 log_subscriber.rb:126] ActiveRecord::Base --   Form526Submission Load (0.7ms)  SELECT "form526_submissions".* FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00') AND "form526_submissions"."submitted_claim_id" IS NULL AND "form526_submissions"."backup_submitted_claim_id" IS NULL
2023-08-03 10:01:00.034009 D [29167:59660 log_subscriber.rb:126] ActiveRecord::Base --    (0.6ms)  SELECT COUNT(*) FROM "form526_submissions" WHERE (created_at BETWEEN '2023-07-24 00:00:00' AND '2023-07-31 00:00:00') AND "form526_submissions"."submitted_claim_id" IS NULL AND "form526_submissions"."backup_submitted_claim_id" IS NULL
2023-08-03 10:01:00.266031 D [29167:59660 log_subscriber.rb:126] ActionMailer::Base -- EVSS::WeeklyErrorReportMailer#build: processed outbound mail in 229.4ms
2023-08-03 10:01:00.298107 I [29167:59660 log_subscriber.rb:126] ActionMailer::Base -- Delivered mail 64cbb31c432fb_71efe90c17429@Kyle-Soskin-MacBook-Pro.local.mail (31.8ms)
2023-08-03 10:01:00.298343 D [29167:59660 log_subscriber.rb:126] ActionMailer::Base -- Date: Thu, 03 Aug 2023 10:01:00 -0400
From: stage.va-notifications@public.govdelivery.com
To: kyle.soskin@adhocteam.us
Message-ID: <64cbb31c432fb_71efe90c17429@Kyle-Soskin-MacBook-Pro.local.mail>
Subject: Weekly 526 Error Report
Mime-Version: 1.0
Content-Type: text/html;
 charset=UTF-8
Content-Transfer-Encoding: 7bit

2023-07-24 00:00:00 UTC - 2023-07-31 00:00:00 UTC<br>Total Submissions: 0<br>Total Number of auto-establish Failures: 0<br>Successful Backup Submissions: 0<br>Failed Backup Attempts: 0<br>Still Pending/Attempting Submission: 0<br>Submission IDs Pending: []
/Users/kylesoskin/.rbenv/versions/3.2.2/lib/ruby/3.2.0/socket.rb:1217:in `__connect_nonblock': Connection refused - connect(2) for 127.0.0.1:25 (Errno::ECONNREFUSED)
```

I would now add test cases and [make a PR.](https://github.com/department-of-veterans-affairs/vets-api/pull/13412)

### Batching

Batching can be used to group related jobs together, and/or force related jobs to perform in a certain order.
For example, [here](https://github.com/department-of-veterans-affairs/vets-api/blob/3678ce92445d97b73dae8af9efe14650ec6e3aff/app/models/form526_submission.rb#L87) is a `Sidekiq::Batch` used for the 526 submission process:

```ruby
def start_evss_submission_job
    workflow_batch = Sidekiq::Batch.new
    workflow_batch.on(
      :success,
      'Form526Submission#perform_ancillary_jobs_handler',
      'submission_id' => id,
      # Call get_first_name while the temporary User record still exists
      'first_name' => get_first_name
    )
    job_ids = workflow_batch.jobs do
      EVSS::DisabilityCompensationForm::SubmitForm526AllClaim.perform_async(id)
    end

    job_ids.first
  end
```

It uses a `callback` to say "on success of all jobs in the batch, do the ancillary_jobs". Then loads a single job into the batch (the `SubmitForm526AllClaim` job).

This is a useful tool for adding logic to your batching processes.

### Rate-limiting

The most helpful documentation for this is in the [official sidekiq enterprise documentation.](https://github.com/sidekiq/sidekiq/wiki/Ent-Rate-Limiting)

Here is an example I have used recently (this is a staging example, so you can copy/past to staging and mess with it/experiement.

```ruby
ids = Form526Submission.last(1000).pluck(:id)
batch = Sidekiq::Batch.new
limitter = Sidekiq::Limiter.concurrent('Form526BackupSubmission', 32, wait_timeout: 120, lock_timeout: 60)
ids.each do |id|
    batch.jobs do
      limitter.within_limit do
          Sidekiq::Form526BackupSubmissionProcess::NonBreakeredForm526BackgroundLoader.perform_async(id)
      end
    end
end
```

This is making a limiter in sidekiq (named `Form526BackupSubmission`). Within this limiter, at most 32 jobs can be running at 1 time conccurently. 

Keep in mind being queued, and running, is different. `wait_timeout` is how long a queued job will wait, before erroring, after being queued. `lock_timeout` is the longest any 1 job can hold a lock. 

Meaning, if a job that is executing and hangs for some reason, after `lock_timeout` seconds, it will release the lock allowing another job to take it's position (it will continue to run though). 
