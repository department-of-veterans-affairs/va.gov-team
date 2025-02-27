# 1095-B MVP Staging Review Artifacts  

### Staging URL
- https://staging.va.gov/download-your-irs-1095-b (Drupal page with dynamic content that has been made available in Staging for testing purposes)

### Test Users & scenarioes
-  LOA3 user who has a 1095-B form - vets.gov.user+54@gmail.com | 242SsNrLgPv5
-  LOA3 user who does not have a 1095-B form - vets.gov.user+7@gmail.com | 177SsNrLgPv5
-  LOA3 user who has a corrected 1095-B form - vets.gov.user+67@gmail.com | 339SsNrLgPv5
-  LOA1 user who should be prompted to verify their account - Signup and create an account in Staging via id.me and it will be LOA1. For example you could do vagovtest+myloa1@gmail.com (you would need to control vagovtest@gmail.com to retrieve MFA code) but in general it just needs an email so you can go through idme.
-  Not signed in user who should be prompted to sign in with their verified account - no test user needed

### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/101744
  
### Accessibility Test Artifcat
- [Issue 103891](https://github.com/department-of-veterans-affairs/va.gov-team/issues/103891)
   - We identified two issues that we are currently  working to resolve but will not be resolved for the Staging Review

### Regression Test Plan
- 

### Test Plan
- 

### Coverage for References
- 

### Summary (Defects) Reports
- 

### E2E Tests
- Our end-to-end tests perform the required accessibility check and live here: `vets-website/src/applications/static-pages/download-1095b/tests/01-1095b-authed.cypress.spec.js`

### Code Coverage
- 

### Endpoint Monitoring Playbook
- 

### Logging Silent Failures
- 
