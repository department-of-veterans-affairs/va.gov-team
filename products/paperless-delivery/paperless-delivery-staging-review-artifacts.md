# Paperless Delivery Staging Review Artifacts  

### Staging URL
- TBD

### Test Users & scenarioes
All users should see the new Communication Settings box in the Profile Hub and a link to the new Paperless Delivery Settings page. That can be tested with any user.
- LOA1 user who should be prompted to verify their account - Signup and create an account in Staging via id.me and it will be LOA1. For example you could do vagovtest+myloa1@gmail.com (you would need to control vagovtest@gmail.com to retrieve MFA code) but in general it just needs an email so you can go through idme.
- Not signed in user who should be prompted to sign in with their verified account - no test user needed
- LOA3 user who is enrolled in healthcare | vets.gov.user+1@gmail.com	
- LOA3 user who is not enrolled in healthcare | vets.gov.user+78@gmail.com
- LOA3 user who doesn’t have a contact email on file | vets.gov.user+78@gmail.com	(you can also go to /contact-information on any test user and remove their contact email)
- LOA3 user who has opted-in to paperless delivery | TBD but let's use vets.gov.user+1@gmail.com if we  can
- LOA3 user who has not opted-in to paperless delivery | TBD but let's use vets.gov.user+66@gmail.com	if we can because this users is also enrolled in healthcare

### Content & IA ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/106648
  
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
