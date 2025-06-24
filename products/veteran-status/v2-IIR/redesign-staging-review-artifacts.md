# Veteran Status Card Redesign Staging Review Artifacts  

### Staging URL's
- https://staging.va.gov/profile
  - Includes a new Veteran Status Card profile hub card and link
- https://staging.va.gov/profile/military-information
  - Removes the "Proof of Veteran Status" section
  - Adds "Access your Veteran Status Card" link
- https://staging.va.gov/profile/veteran-status-card
  - The new Veteran Status Card page
  - Includes a "Frequently asked questions" section with collapsible/expandable topics
  - Includes a "Print your Veteran Status Card (PDF)" link within the third expandable FAQ

### Test Users & Scenarios
[Login credentials for test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- LOA3 user that is eligible for the Veteran Status Card \- vets.gov.user+127@gmail.com 
- LOA3 user that is not eligible for the Veteran Status Card and receives the “You’re not eligible for a Veteran Status Card” error message \- vets.gov.user+32@gmail.com 
- LOA3 user who we need more information from to see if they are eligible for the Veteran Status Card and receives the error message “There’s a problem with your discharge status records”. \- vets.gov.user+57@gmail.com
- LOA3 user who is eligible for the Veteran Status Card but has no service history and receives the error message “There’s a problem with your discharge status records”. \- vets.gov.user+90@gmail.com 
- LOA3 user that receives a system error or error message \- vets.gov.user+41@gmail.com 
- LOA3 user that is eligible for the Veteran Status Card, but has no disability rating information. When this user views their Veteran Status Card the disability rating will not be displayed on the card. \- Judy.Morrison@id.me - [link to login credentials](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/0a32dce79d24712c1da04920177f334712c01b33/Administrative/vagov-users/CommunityCareUSERInfo.MD#staging-user-9997)
- LOA1 user will receive a message to “Verify your identity” \- Signup and create an account in Staging via idme and it will be LOA1. For example, you could do vagovtest+myloa1@gmail.com (you would need to control vagovtest@gmail.com to retrieve MFA code), but in general it just needs an email so you can go through idme.
- Test scenarios that were tested locally due to not having a test user or being able to force an error include:
  - A test user who is eligible for the Veteran Status Card and a 0% disability rating. The expected result is that users see a 0% disability rating on their card.
  - A test user who is eligible for the Veteran Status Card, but the PDF link isn't working. The expected result is that the user will see an error message "Something went wrong" in the How do I get my version of my Veteran Status Card" FAQ setion.
  - When the Veteran Status Card page is down for maintenance. The expected result is an error message that states "This application is down for maintenance".
- Profile hub page has a new Veteran Status Card box with the following link, "View your Veteran Status Card". This link will take a user to the Veteran Status Card page where they can find their Veteran Status Card or a respective error message telling them why they can't retrieve a Veteran Status Card. Test with any of the test users listed above. 
- Military Information page no longer displays the Veteran Status Card section, but will provide the following links for users: "Learn how to request your DD214 and other military records" and "Access your Veteran Status Card". The "Access your Veteran Status Card" link will take a user to the Veteran Status Card page. Test with any of the test users listed above. 

### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/95487 
  
### Accessibility Test Artifcat
- [Issue 110472](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110472)

### Regression Test Plan
- https://dsvavsp.testrail.io/index.php?/plans/view/6832
  
### Test Plan
- https://dsvavsp.testrail.io/index.php?/plans/view/6833

### Coverage for References
- https://dsvavsp.testrail.io/index.php?/milestones/view/2367
  - Functionality has been verified via test users for all user stories - 100%

### Summary (Defects) Reports
- https://dsvavsp.testrail.io/index.php?/milestones/view/2367
  - Test cases: 32, Passed: 30 (94%), Failed: 2 (6%)
  - The two defects that were found are outstanding
 
- Styling & Accessibility Defects discovered (these are not related to our test cases):
  - Error message should be in the warning alert (Ticket [link](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/524))
  - H1 styling for Veteran Status Card page and Military Information page (Ticket [link](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/523))
  - VoiceOver issue with the Veteran Status Card (Ticket [link](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/522))


### E2E Tests
- Our end-to-end tests perform required accessibility checks here `src/applications/personalization/profile/tests/e2e/profile-a11y.cypress.spec.js` and `src/applications/personalization/profile/tests/e2e/veteran-status-card/veteran-status-card.cypress.spec.js`.
- This includes tests for our new Veteran Status Card page and checks for initial loading of Veteran Status Card as well as vet verification alerts and system errors.

### Unit Test Coverage
Here are the percentages as of June 23, 2025:
- Lines = 100%
- Functions = 100%
- Statements = 100%
- Branches = 81.15%
  
Here are the percentages as of May 27, 2025:
- Lines = 99.01%
- Functions = 100%
- Statements = 99.03%
- Branches = 81.01%

### Endpoint Monitoring
- Playbook is linked here: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/vet-verification-status.md

### Logging Silent Failures
- There are no silent failures found related to the Mobile Veteran Status Card.
- Any scenario where an exception is raised or an error reported to StatsD is also returned to the end user in the mobile app.
