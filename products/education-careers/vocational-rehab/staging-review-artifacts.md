# Chapter 31 Staging Review Artifacts  

### Staging URL
You can find our form on staging at https://staging.va.gov/temporary/apply-vre-form-28-1900. Please note, this is only a temporary URL for staging. We'll be using the same URL as the current form on production when we release this new form app (i.e., https://www.va.gov/careers-employment/vocational-rehabilitation/).  Cutting over from the current form to the new form is part of our deployment process. We added an alert to the current form, which has been live on production for about 30 days and will remain in place for at least 60 days before we release our new form, letting veterans know about the cutover so they have time to complete their save-in-progress work.

### Test Users & scenarioes
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+54@gmail.com | 242SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+7@gmail.com | 177SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+150@gmail.com | 284SsNrLgPv5
-  LOA3 user who does have a current Save In Progress VR&E application - vets.gov.user+0@gmail.com | 369SsNrLgPv5

-  All users should receive errors when trying to move to next page without required fields or if fields fail validation. Otherwise, users should see a success message after filling out all required fields and submitting the form.

### Known Issues
- [VBMS Uploader is using wrong pdf form - BE](https://github.com/department-of-veterans-affairs/va-iir/issues/1803)
     - [PR for this Bug](https://github.com/department-of-veterans-affairs/vets-api/pull/22881)
- [Additional Cypress Testing](https://github.com/department-of-veterans-affairs/va-iir/issues/1808)
- [Update transformForSubmit function to modify all three telephone inputs to remove dashes](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=117281433&issue=department-of-veterans-affairs%7Cva-iir%7C1809)

### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/75169
  
### Accessibility Test Artifact

- [Accessibility Test Artifact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112905)

### Regression Test Plan
- With this form update, we had to build a net new form.  Therefore, there were no changes made to the current form where we would need to regression test.  But, we have tested the new form build with the existing API endpoint and the new API endpoint with success.

### Test Plan
- All new vets-website apps and form apps use a value in content-build called vagovprod that gets turned from false to true to display on va.gov. At release we will manually verify and document all aspects of the product including the following test scenarios. All of these have been verified in Staging.
   - As a Veteran, I want to have a positive experience when completing the online form. - happy path, successful submission of application.
   - As a Veteran, I don't want to encounter a failed submission, but if that were to happen, I would want to be notified if an alternate submission was not successful.
   - As a Veteran, I would want the online form to be accessibility friendly.

### Coverage for References
- Functionality has been verified via test users for all user stories - 100% 

### Summary (Defects) Reports
- N/A

### E2E Tests
- Our end-to-end tests live here: [Ch31 E2E Tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/new-28-1900/tests/e2e). The axe checks are not yet implemented, and are covered in [this ticket](https://github.com/department-of-veterans-affairs/va-iir/issues/1808).

### Unit Test Coverage
- We have met the 80% minimum requirement. Here are the percentages:
    - Lines = 95.65%
    - Functions = 95%
    - Statements = 95.86%
    - Branches = 88.57%

<img alt="Unit test coverage" src="https://github.com/user-attachments/assets/fa839022-956d-4cb5-a5f9-8939aac071fb" />

 
### Endpoint Monitoring
- Playbook is linked here: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/b95f85ecde584a9fcaecb2e0c2d1b560f8651c2a/teams/benefits/playbooks/vre-form-28-1900.md

### Logging Silent Failures
- [Silent Failure Logging Potential](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/vre/submit1900_job.rb#L18): Statsd metrics can be found on the app [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/94e-cku-2aq). This includes the "Sidekiq job (Submit1900Job) queues, dequeues, and errors)", "Errors by status", and the multiple alert widgets there.
  - This Job kicks off a Monitor that inhereits from ZeroSilentFailures::Monitor and implements the [logging of silent failures](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/vre/monitor.rb#L20).
- This product makes use of VA Notify to send action needed emails [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim/veteran_readiness_employment_claim.rb#L299), [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim/veteran_readiness_employment_claim.rb#L317), and [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim/veteran_readiness_employment_claim.rb#L347). All of these VA Notify implementations have logic in place to make sure the email sends properly and if it does not, it logs an error. We have a widget on the Dashboard that tracks these logs.
