# Potential Email Solutions

### [Background](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/product-decisions.md#silent-failures)
Before launching, we have found that silent failures for 686 applicaiton submissions are sub-optimal and while other online forms have the same issue, we can do better for the Veteran.

### Problem Statememt
We need a solution for the Vetean to be clearly and explicitly communicated with respect to their application's status while in flight from submission before it gets taken in by an approving mechanic so that action can be taken and submission applications are not lost.

### Option 1
Communicate success and failure to the Veteran's email using GovDelivery.

First version:
For failures, it might simply be a note saying that something is wrong and that should look for their draft, or reapply.  This would be triggered from an exhaustion in job retries - After retrying `n` number of times, Sidekiq will call the `sidekiq_retries_exhausted` hook on a Worker if you've defined it.

For success, we can see pretty quickly that the payload has been sent.

**Steps for implementation and testing:**
1. Vets api: Create app/mailers class in mailer folder following this example: https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/mailers/hca_submission_failure_mailer.rb
2. Add Veteran's email to `veteran_hash` in controller, see this example: https://github.com/department-of-veterans-affairs/vets-api/pull/4515/files#diff-4b4a92bc85af3056adf6b351d25ef693R31
3. Define `sidekiq_retries_exhausted` in 686 job: https://github.com/department-of-veterans-affairs/vets-api/pull/4515/files#diff-cd123f9cd41ecb581b570aa90c80050d
4. Fire mailer created in step 1 (assume we have access to veteran hash in the exhausted block) 
Example: https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/health_care_application.rb#L164 
Another example: https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/workers/evss/disability_compensation_form/submit_form8940.rb#L16 

### Option 2
Per the Messaging Team in #notifications-engine, we have spoken to Clarice, and hasve a meeting set to chat with Paras Shah to learn more about what email and texting optins they might have.

**Potential email drafts:**
(Success)
"Hello VeteranFirstName VeteranLastName,

Your recent submission for a change to your dependency claims has been successfully received.  While this email to does not approve or deny any benefit, we wanted to let you know that the submission was sent successfully and you can track the progress of your claim in the Claim Status Tool located at this url: https://va.gov/claim-status-tool-link-inserted-here

In the event that you require more information, please contact the VA help Desk at this number: 800-CALL-4-VA-HELP

(Failure)
"Hello VeteranFirstName VeteranLastName,

We are writing to inform you that for some reason, your submission was not successfully received into the VA system after several tries.  Please check for a saved draft or retry your application submission again.  

For more information, please contact the VA help Desk at this number: 800-CALL-4-VA-HELP
