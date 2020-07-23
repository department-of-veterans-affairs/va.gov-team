# Potential Email Solutions (WIP)
`eBenefits Team | July 2020`

### [Background](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/product-decisions.md#silent-failures)
Before launching, we have found that silent failures for 686 applicaiton submissions are sub-optimal and while other online forms have the same issue, we can do better for the Veteran.

### Problem Statememt
We need a solution for the Vetean to be clearly and explicitly communicated with respect to their application's status while in flight from submission before it gets taken in by an approving mechanic so that action can be taken and submission applications are not lost.

## Considerations
- We are going to want the Veterans email for this to work but we should not assume that what they enter in the form is legit as it could be mistyped and not verified.  IF possible, we shoudl strive to attain the veteran's email from their profile as that is most likely far more correct.  It also covers the notion that in the event that the person filling it out for someone else, the actual owner would be informed of action being taken on their behalf for whatever effect. 
- [Service Level Objectives for GovDelivery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/external-service-monitoring/service-documents/govdelivery-slo.md)
- [Notes from HCA meeting on GovDelivery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/2018-notifications-work/HCA%20MVP/Meeting%20Notes/GovDelivery_3-6-18.md)
  - TMS stands for Targeted Messaging System
  - Analytics seem unclear at this time

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
5. Review this previously used PR for Direct Deposit's email implementation: https://github.com/department-of-veterans-affairs/vets-api/pull/3101

### Option 2
Per the Messaging Team in #notifications-engine, we have spoken to Clarice, and have a meeting set to chat with Paras Shah to learn more about what email and texting options they might have.

UPDATE: Had a very nice meeting with Paras and members of his team.  They introduced us to VANotify and talked about next stesps or requirements to start using their service, which also does SMS messaging (text) to mobile devices with a networked phone number.  This may prove especially useful once we get "View your VA payment history" a little further along; payment notifications as they happen, or are exposed to Veterans, would be a great benefit as they would then be able to make more informed financial decisions.

This messaging team is still being onboarded to some extent so we may go with Option 1 for now for Dependency Claims.

---------

**Potential email drafts:**  
(Success)  

_Subject line: Your application to add or remove dependents was successfully transmitted and received_  

_Hello VeteranFirstName VeteranLastName,_. 

_Your recent submission for a change to your dependency claims has been successfully received.  While this email to does not approve or deny any benefit, we wanted to let you know that the submission was sent successfully and that you can track the progress of your claim in the Claim Status Tool located at this url: https://www.va.gov/claim-or-appeal-status/_

_In the event that you require more information, please contact the VA help Desk at this number: 800-827-1000_

(Failure)    

_Subject line: We can't process your application to add or remove dependents_. 

_"Hello VeteranFirstName VeteranLastName,_  

_You recently submitted an application to add or remove dependents from your VA benefits (VA Form 28-686c/674) on VA.gov.
We’re sorry. Your application didn’t go through because of a technical problem on our end. You'll need to go back and apply again: https://va.gov/view-change-dependents/add-remove-form-686c/._. 

_Because of the issue, we won't be able to retrieve your application. If you have general questions about adding or removing dependents, you can call our toll-free hotline at 800-827-1000. We’re here Monday through Friday, 8:00 am to 9:00 pm ET._. 

_Note: This is an automated message, and sent from an unmonitored email account._  

