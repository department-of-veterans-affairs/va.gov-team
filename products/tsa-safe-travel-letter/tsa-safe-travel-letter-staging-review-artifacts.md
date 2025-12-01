# TSA Safe Travel Letter Staging Review Artifacts  

### Staging URL
- https://staging.va.gov/records/download-va-letters/letters

### Test Users & scenarios
[Link to passwords for test user +54 and ??](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- User who has all letters, including TSA letter - +54
    - Should see all letters in the accordion, TSA letter loads slowly last.
- User who has no letters - +44
    - Does the no letter copy take forever to populate since it still needs to determine TSA slowly?
- User who has some letters, no TSA letter - +38
   - Should see a smaller list of letters, should see loading icon below list for TSA but then nothing populates after it disappears.
- User who doesn't have a valid address on file - +78
    - Should not be able to see any letters even if they have them
- User who has a system down message - +12
- User who has an error notification on the whole page - +9

### List of known issues and bugs
- TBD

### Content & IA Epic
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/118713
  
### Accessibility Test Artifact
- TBD

### Regression Test Plan
- Our TSA Safe Travel Letter is behind a feature toggle. If major issues arise during release, we will disable the feature toggle.

### Test Plan
#### Download letter
  - As a Veteran, I want to view my TSA Safe Travel Letter, so that I can enroll in TSA PreCheck for free.

    - Preconditions
      - User is LOA3
      - User has navigated to `va.gov/records/download-va-letters/letters`
      - User has the TSA Safe Travel letter in their Efolder

    - Acceptance Criteria
      - Given I'm on the Letters page
      - When I scroll down the page to the Letters accordion
      - Then I click on the TSA accordion item
      - And I click the download letter link
      - And I'm prompted to save the letter 

### Ineligible
  - As a Veteran, I want to know if I'm eligible for the TSA Safe Travel Letter, so that I can download it.

    - Preconditions
      - User is LOA3
      - User has navigated to `va.gov/records/download-va-letters/letters`
      - User does not have the TSA Safe Travel letter in their Efolder

    - Acceptance criteria
      - Given I'm on the Letters page
      - When I scroll down the page to the Letters accordion
      - Then no accordion item exists for the TSA letter


### Coverage for References
- Functionality has been verified via test users for all user stories - 100%

### Summary (Defects) Reports
- No defects were found

### E2E Tests
- TBD

### Unit Test Coverage
- TBD

### Engineering & Security Checklist
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/CVE%20-%20TSA%20Safe%20Travel%20Letter%20-%2010102025.md (NEEDS TO BE UPDATED BEFORE STAGING REVIEW)
  
### Endpoint Monitoring Playbook
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/tsa-safe-travel-letter.md

### Logging Silent Failures
- Silent Failures are not applicable to this work.

### Product Outline
- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tsa-safe-travel-letter/tsa-safe-travel-letter-product-outline.md

### User Flows
- Current state - N/A because this hasn't existed before
- [Updated state](https://www.figma.com/design/fp7Q9hc1uTh71o7yn60O5g/TSA-Precheck?node-id=92-1733&t=Dsgz14n7nd8du28p-0)
- [Link to Figma design references](https://www.figma.com/design/fp7Q9hc1uTh71o7yn60O5g/TSA-Precheck?node-id=23-4433&t=Dsgz14n7nd8du28p-0)
