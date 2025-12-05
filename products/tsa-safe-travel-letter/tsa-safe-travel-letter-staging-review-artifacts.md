# TSA Safe Travel Letter Staging Review Artifacts  

### Staging URL
- https://staging.va.gov/records/download-va-letters/letters

### Test Users & scenarios
[Link to passwords](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
- User who has all letters, including TSA letter - +54
    - Should see all letters in the accordion, TSA letter loads slowly at the bottom of the list (20 - 30 seconds). If it errors out, refresh and try again.
    - Open accordion item for TSA letter. Again, this will take some time. Once populated, click download link - we do not generate this PDF, we simply show whatever is in the Veteran's efolder. 
- User who has no letters - +44
    - Shouldn't see any letters populate. No long loading indicators either. Should only see the "You don't have any benefit letters..." content.
- User who has some letters, no TSA letter - +38
    - Should see some letters in the accordion. The TSA letter loading indicator will still appear but no TSA letter will show up. 
- User who doesn't have a valid address on file - +260
    - Should not be able to see any letters even if they have them. (Don't add an address because once added, you can't remove it.)

### List of known issues and bugs
- The latency for the endpoints we are using are very slow, hence the slow load times. We are looking to move over to some newly released Lighthouse endpoints but we don't know for sure if the latency will be faster. 

### Content & IA Epic
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/118713
  
### Accessibility Test Artifact
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/126545

### Regression Test Plan
- Our TSA Safe Travel Letter is behind a feature toggle. We have already tested the following scenarios with the feature toggle off and on to ensure there are no other unintended consequences to the letters page. If major issues arise during release, we will disable the feature toggle.
     - Loading letters page with a user who has all letters
     - Loading letters page with a user who has no letters
     - Loading letters page with a user who have some letters
     - Loading letters page with a user who has no address
     - Opening each letter accordion item
     - Clicking each download link in each accordion item

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
- https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/letters/tests/01-tsa-letter.cypress.spec.js

### Unit Test Coverage
<img width="647" height="124" alt="Screenshot 2025-12-04 at 00 04 41" src="https://github.com/user-attachments/assets/37271c0f-38c6-4313-8756-1ba4710b8bd6" />

### Engineering & Security Checklist
- https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/CVE%20-%20TSA%20Safe%20Travel%20Letter%20-%2010102025.md
  
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
