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
- LOA3 user that has a Veteran Status Card \- vets.gov.user+127@gmail.com | 475SsNrLgPv  
- LOA3 user that receives the “You’re not eligible for a Veteran Status Card” error message \- vets.gov.user+32@gmail.com | 134SsNrLgPv5   
- LOA3 user that receives the error message “There’s a problem with your discharge status records”. This is a test user that needs more research required. \-  [vets.gov.user+57@gmail.com](mailto:vets.gov.user+57@gmail.com) | 218SsNrLgPv5
- LOA3 user that receives  the error message “There’s a problem with your discharge status records”. This test user use is confirmed with no service history.\- vets.gov.user+90@gmail.com | 492SsNrLgPv5  
- LOA3 user that receives a system error or error message \- vets.gov.user+41@gmail.com | 109SsNrLgPv5    
- LOA1 user will receive a message to “Verify your identity” \- Signup and create an account in Staging via idme and it will be LOA1. For example, you could do vagovtest+myloa1@gmail.com (you would need to control vagovtest@gmail.com to retrieve MFA code), but in general it just needs an email so you can go through idme.



### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/95487 
  
### Accessibility Test Artifcat
- [Issue 110472](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110472)

### Regression Test Plan
- https://dsvavsp.testrail.io/index.php?/plans/view/6832
  
### Test Plan
- https://dsvavsp.testrail.io/index.php?/plans/view/6833

### Coverage for References
- 

### Summary (Defects) Reports
- 

### E2E Tests
- Our end-to-end tests perform required accessibility checks here `src/applications/personalization/profile/tests/e2e/profile-a11y.cypress.spec.js` and `src/applications/personalization/profile/tests/e2e/veteran-status-card/veteran-status-card.cypress.spec.js`.
- This includes tests for our new Veteran Status Card page and checks for initial loading of Veteran Status Card as well as vet verification alerts and system errors.

### Unit Test Coverage
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
