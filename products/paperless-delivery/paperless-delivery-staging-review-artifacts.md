# Paperless Delivery Staging Review Artifacts  

### Staging URL
- TBD

### Test Users & scenarioes
-  LOA3 user who has a 1095-B form - vets.gov.user+54@gmail.com | 242SsNrLgPv5
-  LOA3 user who does not have a 1095-B form - vets.gov.user+7@gmail.com | 177SsNrLgPv5
-  LOA3 user who has a corrected 1095-B form - vets.gov.user+67@gmail.com | 339SsNrLgPv5
-  LOA1 user who should be prompted to verify their account - Signup and create an account in Staging via id.me and it will be LOA1. For example you could do vagovtest+myloa1@gmail.com (you would need to control vagovtest@gmail.com to retrieve MFA code) but in general it just needs an email so you can go through idme.
-  Not signed in user who should be prompted to sign in with their verified account - no test user needed

### CAIA intake ticket
- TBD
  
### Accessibility Test Artifcat
- TBD

### Regression Test Plan
- This is a net new feature/product, future  iterations will include a regression plan to ensure stable user experience. This is not applicable for this MVP product. If major issues arise during release, we will disable the feature toggle.

### Test Plan
- TBD

### Coverage for References
- TBD

### Summary (Defects) Reports
- TBD

### E2E Tests
- TBD

### Unit Test Coverage
- TBD

### Endpoint Monitoring Playbook
- TBD

### Logging Silent Failures
- Silent Failures are not applicable to this work. A Veteran only selects or deselects a checkbox and we have appropriate error states accounted for.
