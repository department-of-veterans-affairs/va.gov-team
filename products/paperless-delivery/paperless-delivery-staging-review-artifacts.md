# Paperless Delivery Staging Review Artifacts  

### Staging URL
- TBD

### Test Users & scenarioes
- LOA1 user who should be prompted to verify their account - Signup and create an account in Staging via id.me and it will be LOA1. For example you could do vagovtest+myloa1@gmail.com (you would need to control vagovtest@gmail.com to retrieve MFA code) but in general it just needs an email so you can go through idme.
- Not signed in user who should be prompted to sign in with their verified account - no test user needed
- LOA3 user who is enrolled in healthcare 
- LOA3 user who is not enrolled in healthcare
- LOA3 user who doesn’t have a contact email on file
- LOA3 user who has opted-in to paperless delivery
- LOA3 user who has not opted-in to paperless delivery

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
