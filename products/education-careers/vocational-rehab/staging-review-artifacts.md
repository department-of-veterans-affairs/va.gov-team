# Chapter 31 Staging Review Artifacts  

### Staging URL
(https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/start)
### Test Users & scenarioes
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+54@gmail.com | 242SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+7@gmail.com | 177SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+150@gmail.com | 284SsNrLgPv5


### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/75169
  
### Accessibility Test Artifact

- https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1684161597392/5c1f8869cf5d03b792c8b82cf19b39dc26c486c2

### Regression Test Plan
- With this form update, we had to build a net new form.  Therefore, there were no changes made to the current form where we would need to regression test.  But, we have tested the new form build with the existing API endpoint and the new API endpoint with success.

### Test Plan
- We will be enabling feature toggle `xxx` for 100% of users. At release we will manually verify and document all aspects of the product including the following test scenarios. All of these have been verified in Staging.
   - As a Veteran, I want to hace a positive experience when completing the online form. - happy path, successful submission of application.
   - As a Veteran, I don't want to encounter a failed submission, but if that were to happen, I would want to be notified if an alternate submission was not successful.
   - As a Veteran, I would want the online form to be accessibility friendly.

### Coverage for References
- Functionality has been verified via test users for all user stories - 100% 

### Summary (Defects) Reports
- N/A

### E2E Tests
- Our end-to-end tests perform the required accessibility check and live here: `xxx`

### Unit Test Coverage
- We have met the 80% minimum requirement. Here are the percentages:
    - Lines = %
    - Functions = %
    - Statements = %
    - Branches = %
 
### Endpoint Monitoring
- Playbook is linked here: 

### Logging Silent Failures
- 
