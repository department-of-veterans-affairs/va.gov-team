# Chapter 31 Staging Review Artifacts  

### Staging URL
([https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/start](https://staging.va.gov/temporary/apply-vre-form-28-1900/introduction ))
### Test Users & scenarioes
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+54@gmail.com | 242SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+7@gmail.com | 177SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+150@gmail.com | 284SsNrLgPv5
-  LOA3 user who does have a current Save In Progress VR&E application - vets.gov.user+0@gmail.com | 369SsNrLgPv5

-  All users should receive errors when trying to move to next page without required fields or if fields fail validation. Otherwise, users should see a success message after filling out all required fields and submitting the form.

### Known Issues
- [VBMS Uploader is using wrong pdf form - BE](https://github.com/department-of-veterans-affairs/va-iir/issues/1803)
     - [PR for this Bug](https://github.com/department-of-veterans-affairs/vets-api/pull/22881)


### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/75169
  
### Accessibility Test Artifact

- [Accessibility Test Artifact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112905)

### Regression Test Plan
- With this form update, we had to build a net new form.  Therefore, there were no changes made to the current form where we would need to regression test.  But, we have tested the new form build with the existing API endpoint and the new API endpoint with success.

### Test Plan
- All new vets-website apps and form apps use a value in content-build called vagovprod that gets turned from false to true to display on va.gov. At release we will manually verify and document all aspects of the product including the following test scenarios. All of these have been verified in Staging.
   - As a Veteran, I want to hace a positive experience when completing the online form. - happy path, successful submission of application.
   - As a Veteran, I don't want to encounter a failed submission, but if that were to happen, I would want to be notified if an alternate submission was not successful.
   - As a Veteran, I would want the online form to be accessibility friendly.

### Coverage for References
- Functionality has been verified via test users for all user stories - 100% 

### Summary (Defects) Reports
- N/A

### E2E Tests
- Our end-to-end tests perform the required accessibility check and live here: `[Ch31 E2E Tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/new-28-1900/tests/e2e)`

### Unit Test Coverage
- We have met the 80% minimum requirement. Here are the percentages:
    - Lines = 95.55%
    - Functions = 94.59%
    - Statements = 95.74%
    - Branches = 88.57%
- <img alt="Unit test coverage" src="https://github.com/user-attachments/assets/fa839022-956d-4cb5-a5f9-8939aac071fb" />

 
### Endpoint Monitoring
- Playbook is linked here: 

### Logging Silent Failures
- 
