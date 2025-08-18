# Paperless Delivery Staging Review Artifacts  

### Staging URL
- staging.va.gov/profile
  - Includes new Communication settings card 
- staging.va.gov/profile/paperless-delivery
  - The new Paperlress Delivery page
  - New profile nav when visiting any `/profile` page

### Test Users & scenarios
- All users should see the new Communication Settings box in the Profile Hub that links to both the existing Notification Settings page and the new Paperless Delivery Settings page. This can be tested with any LOA3 user.
- All users should be able to see and use the new side navigation component within any `/profile` page. This can be tested with any LOA3 user.
- All users should NOT be able to see any Paperless Delivery settings on the Notification Settings page. This can be tested with any LOA3 user.
- A user not signed in at all should be prompted to sign in with their verified account when trying to access the URL to the new Paperless Delivery page - no test user needed.
- LOA1 user should be prompted to verify their account when trying to access the URL to the new Paperless Delivery page - Signup and create an account in Staging via id.me and it will be LOA1. For example you could do vagovtest+myloa1@gmail.com (you would need to control vagovtest@gmail.com to retrieve MFA code) but in general it just needs an email so you can go through idme.
- LOA3 user who is enrolled in healthcare - should be able to see and use the 1095-B checkbox. Can see save alert when their changes have been saved. | ssoissoetesting+mhvcss4@gmail.com or vets.gov.user+12@gmail.com
- LOA3 user who is enrolled in healthcare but doesn’t have a contact email on file - should see missing email alert and be able to add one. Regardless of missing email, should still be able to see and use the 1095-B checkbox. | ssoissoetesting+mhvcss4@gmail.com or vets.gov.user+12@gmail.com (you can go to /contact-information and remove their contact email to test)
- LOA3 user who is not enrolled in healthcare - should see not available alert instead of the 1095-B checkbox. | vets.gov.user+78@gmail.com
- LOA3 user who is not enrolled in healthcare and doesn't have a contact email on file - should see not available alert instead of the 1095-B checkbox. Should also see missing email alert and be able to add one. | vets.gov.user+78@gmail.com (you can go to /contact-information and remove their contact email to test)

### List of known issues and bugs
- TBD

### Content & IA ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/106648
  
### Accessibility Test Artifact
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/117086

### Regression Test Plan
- The new Paperless Delivery page is a net new feature/product, future iterations will include a regression plan to ensure stable user experience. This is not applicable for this MVP product. If major issues arise during release, we will disable the feature toggle. However, our regression test plan for IA profile changes include:
   - Testing navigation to the Notifications Settings page via the Profile Hub with the feature toggle off and then on
   - Testing navigation to any profile pages via the new side navigation with the feature toggle off and then on
   - Testing the content on the Notification Settings page to make sure it doesn't include Paperless Delivery settings with the feature toggle off and then on

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

### Engineering & Security Checklist
- TBD
  
### Endpoint Monitoring Playbook
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/paperless-delivery.md

### Logging Silent Failures
- Silent Failures are not applicable to this work. A Veteran only selects or deselects a checkbox and we have appropriate error states accounted for.
