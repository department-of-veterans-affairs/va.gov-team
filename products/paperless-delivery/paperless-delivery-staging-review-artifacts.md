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
All of these test cases require that the user is signed in and has LOA3 access.
#### Navigate from profile homepage
  - As a Veteran, I want to view my paperless delivery settings, so that I can view my options.

  - Preconditions
    - User has navigated to `va.gov/profile`

  - Acceptance Criteria
    - Given I’m on the profile page
    - When I click the `Update paperless delivery settings` link under communication settings
    - Then I am navigated to the paperless delivery page

#### Navigate using side navigation
  - As a Veteran, I want to view my paperless delivery settings, so that I can view my options.

  - Preconditions
    - User has navigated to `va.gov/profile/personal-information`

  - Acceptance Criteria
    - Given I’m on the personal information page
    - When I click the `Paperless delivery` link in the side navigation
    - Then I am navigated to the paperless delivery page

#### Enroll in paperless delivery
  - As a Veteran, I want to enroll in paperless delivery, so that I stop receiving paper mail.

  - Preconditions
    - User has navigated to `va.gov/profile/paperless-delivery`

  - Acceptance Criteria
    - Given I’m on the paperless delivery page
    - When I select the `1095-B Proof of Health Care` checkbox
    - Then a loading button appears, receives focus and disappears when the update completes
    - And a confirmation alert indicates the selection was updated
    - And the checkbox is now checked

#### Unenroll from paperless delivery
  - As a Veteran, I want to update my paperless delivery settings, so that I receive paper mail.

  - Preconditions
    - User has navigated to `va.gov/profile/paperless-delivery`
    - The 1095-B Proof of Health care checkbox is checked

  - Acceptance Criteria
    - Given I’m on the paperless delivery page
    - When I select the `1095-B Proof of Health Care` checkbox
    - Then a loading button appears, receives focus and disappears when the update completes
    - And a confirmation alert indicates the selection was updated
    - And the checkbox is now unchecked

#### Email notifications
  - As a Veteran without a contact email address in my profile, I want to be prompted to add an email address, so that I can receive paperless delivery email notifications.

  - Preconditions
    - User has navigated to `va.gov/profile/paperless-delivery`
    - User does not have a contact email address in profile

  - Acceptance Criteria
    - Given I'm on the paperless delivery page
    - Then an alert is displayed prompting me to add an email address

#### Unavailable
  - As a Veteran not enrolled in benefits that offer paperless delivery, I want to be made aware if paperless delivery is not available to me, so that I can understand why I don't see any documents to choose.

  - Preconditions
    - User has navigated to `va.gov/profile/paperless-delivery`
    - User is not enrolled in any benefits that offer paperless delivery options

  - Acceptance Criteria
    - Given I'm on the paperless delivery page
    - Then an alert is displayed informing me that I'm not enrolled in any benefits that offer paperless delivery

#### Add email address
  - As a Veteran without a contact email address in my profile, I want to add my contact email address, so that I can receive paperless delivery notifications.

  - Preconditions
    - User has navigated to `va.gov/profile/paperless-delivery`
    - User does not have a contact email address in profile
  
  - Acceptance Criteria
    - Given I'm on the paperless delivery page
    - When I click the `Add your email address to your profile` link
    - Then the Add your contact email address page is displayed
    - And an input exists to enter my email address
    - When I enter a valid email address and click the Save to profile button
    - Then a loading button appears and receives focus
    - Then I’m navigated back to the paperless delivery page
    - And an alert confirms my email address was saved
    - And my email address is displayed

#### Update existing email address
  - As a Veteran with a contact email address in my profile, I want to update my contact email address, so that I can receive paperless delivery notifications at the correct email address.

  - Preconditions
    - User has navigated to `va.gov/profile/paperless-delivery`
    - User has a contact email address in profile
  
  - Acceptance Criteria
    - Given I'm on the paperless delivery page
    - When I click the `Update your email address` link
    - Then the Update your contact email address page is displayed
    - And an input shows my current email address
    - When I enter a new valid email address and click the Save to profile button
    - Then a loading button appears and receives focus
    - Then I’m navigated back to the paperless delivery page
    - And an alert confirms my email address was saved
    - And my updated email address is displayed

### Coverage for References
- Functionality has been verified via test users for all user stories - 100%

### Summary (Defects) Reports
- No defects were found

### E2E Tests
- https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile/tests/e2e/paperless-delivery

### Unit Test Coverage
- As of August 19, 2025:
<img width="654" height="88" alt="Screenshot 2025-08-19 at 09 54 39" src="https://github.com/user-attachments/assets/2337d27b-4bf7-413c-925a-4f522c746aad" />


### Engineering & Security Checklist
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/iir-paperless-delivery-08192025.md
  
### Endpoint Monitoring Playbook
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/paperless-delivery.md

### Logging Silent Failures
- Silent Failures are not applicable to this work. A Veteran only selects or deselects a checkbox and we have appropriate error states accounted for.
