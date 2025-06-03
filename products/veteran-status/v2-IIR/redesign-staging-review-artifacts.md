# Veteran Status Card Redesign Staging Review Artifacts  

### Staging URL's
- https://staging.va.gov/profile
  - Includes a new Veteran Status Card profile hub card and link
- https://staging.va.gov/profile/military-information
  - Removes of the "Proof of Veteran Status" section
  - Adds "Access your Veteran Status Card" link
- https://staging.va.gov/profile/veteran-status-card
  - The new Veteran Status Card page
  - Includes a "Frequently asked questions" section with collapsible/expandable topics
  - Includes a "Print your Veteran Status Card (PDF)" link within the third expandable FAQ

### Test Users & Scenarios
- 

### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/95487 
  
### Accessibility Test Artifcat
- 

### Regression Test Plan
- 
  
### Test Plan
- 

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
- 

### Logging Silent Failures
-
