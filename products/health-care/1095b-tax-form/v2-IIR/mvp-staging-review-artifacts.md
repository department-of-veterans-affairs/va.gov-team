# 1095-B MVP Staging Review Artifacts  

### Staging URL
- https://staging.va.gov/records/download-your-irs-1095-b (Drupal page with dynamic content that has been made available in Staging for testing purposes)

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
   - We identified two issues that we are currently working to resolve; however, they will not be resolved prior to Staging Review.

### Regression Test Plan
- This is a net new feature/product, future  iterations will include a regression plan to ensure stable user experience. This is not applicable for this MVP product. If major issues arise during release, we will disable the feature toggle.

### Test Plan
- We will be enabling feature toggle `show_digital_form_1095b` for X% of users, increasing to 100%. At each stage of release we will manually verify and document all aspects of the product including the following test scenarios. All of these have been verified in Staging.
   - As a Veteran I want to be able to view and download my 1095-B form online so that I can file my taxes. - happy path, download links appear
   - As a Veteran who uses a screen reader, I want to be able to know what info is on my 1095-B so that I can file taxes appropriately. - happy path, text file available.
   - As a Veteran I want to know if I don’t have a 2024 1095-B so that I can take the appropriate actions. - user does not have a 1095-B in the database and receives alert instead of download links.
   - As a Veteran I want to know if I am unable to download my 1095-B files so that I can take the appropriate actions to resolve. - user encounters an error when trying to download their files and receives alert.
   - As a Veteran I want my 1095-B form to be secure so that my information is protected - user needs to be verified, not just signed into va.gov and they see a verification alert.

### Coverage for References
- Functionality has been verified via staging test users for all user stories - 100% 

### Summary (Defects) Reports
- N/A

### E2E Tests
- Our end-to-end tests perform the required accessibility check and live here: `vets-website/src/applications/static-pages/download-1095b/tests/01-1095b-authed.cypress.spec.js`

### Unit Test Coverage
- 

### Endpoint Monitoring
- We are currently in the middle of setting these up. We will have monitors and alerts for: 1) backend nightly job failures 2) PDF/TXT download failures 3) missing blank form for the prior year.

### Logging Silent Failures
- Silent Failures are not applicable to this work. A Veteran only signs in and downloads a document.
