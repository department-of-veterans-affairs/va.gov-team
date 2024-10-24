# Ask VA Form & Dashboard - Testing Plan (VA.gov)

Jump to: 
- [1. Scope and Objectives](#1-Scope-and-Objectives)
- [2. Testing Types](#2-Testing-Types)
- [3. Test Cases](#3-Test-Cases)
- [4. Testing Team](#4-Testing-Team)
- [5. Execute Testing](#5-Execute-Testing)
- [6. Bug Tracking and Fixing](#6-Bug-Tracking-and-Fixing) Note: We moved this section to [this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/testing/Manual%20QA%20process.md).
- [7. Pre-Launch Checklist](#7-Pre-Launch-Checklist)

## 1. Scope and Objectives
- **Scope:** Ask VA form and dashboard covering all steps and fields, validation rules, usability and data submission. View our scope in [Ask VA variation points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/testing/ask-va-variation-points.md).
- **Objectives:** Ensure the form functions correctly, validates input, integrates properly with the backend, [CRM and other APIs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/integration), and provides a smooth user experience with appropriate accessibility expectations.

Reference Docs: 
- [Dress Rehearsal (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/test-plans/Test%20Dress%20Rehearsal.md)
- [Visual Flow of Testing (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724077180667/e055a7b6a2eb7bd0bd586ce7f4b6130d4343e524?sender=u44efa807e992cacf10cf3697)
- [Differences between Categories (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Similarities%20and%20differences%20between%20categories.md)
- [Form Flows (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708479170047/8ebb517a213e05ebc500087f5661a993a41392e8?sender=uc2a4f18a27ff336484232897)
- [Testing Approach Doc (Word doc)](https://dvagov-my.sharepoint.com/:w:/g/personal/shelby_carl_va_gov/EXQdtcz1ksFKpTiRiE8kkhABaZZlCNK0RTt3L7n77L-eqQ?e=2rAX87) - PIV access Required
- [Ask VA variation points (GitHub)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/testing/ask-va-variation-points.md)
- [Timeline (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715100136735/fdff4d9758a1e62c69c5962faa45c587b83c9e12?wid=0-1717520164261)
- [AVA Test Doc Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/test-plans/Ask.VA.Gov%20Test%20Doc%20Guide.MD)
 
## 2. Testing Types
- **Unit Testing:** Test individual components and functions.
- **Integration Testing:** Ensure different components work together.
- **E2E Automated Testing (Cypress):** Simulate user interactions and validate the form’s behavior. This includes mocking a user passing ICN to test flow.
- **Manual Testing:** Perform exploratory testing to catch issues not covered by automated tests.
- **Accessibility Testing:** Using appropriate tooling - inspect all pages.

## 3. Test Cases
**Unit Testing: Minimum of 80% test code coverage** 
- Test Cases: Each form field, page UI, and validation rules.
- Example: Test email field validation (e.g., valid email format, empty input).

### Integration Testing
**Decision:** Initial automated tests will be run locally in order to prevent blocking the pipeline. _Once Authenticated Health - I am the Vet - Myself_ passes, we’ll promote it to the build pipeline. 

- Test Cases: Interaction between form steps, form data persistence between steps, and backend integration.
- Example: Test backend calls, and ensure data is correctly saved and retrieved.

The team will leverage Insomnia to send a collection of requests to the CRM APIs. The APIs will return a response body that includes a new field containing QueueID to ensure that the right Category, Topic, and Subtopic are routed to the correct queue.

Drafting Insomnia Batch: 
- Inquiries will be drafted based on the Ava Testing Framework excel. Each inquiry will require a Category, Topic, and Subtopic which will route to a unique Queue.
- Additional notes such as what mocked user information will be based ( name, email, etc) and documented

For Formal Testing: We will cover 137 flows of potential inquiry mapping. CRM will provide the list. Flows are based on category, topic, and subtopic, as well as other conditional routing rules like State of residence. 

### E2E Automated Testing (Cypress)
**Test Cases:** We'll test the full user journey, from submitting the Ask VA form to checking for responses in either the dashboard (authenticated) or the `Check the status of your question` search (unauthenticated). We'll test edge cases and typical user flows for both authenticated and unauthenticated users.

- User journey for submitting the form
    - User fills out About Yourself page, validates input, moves to Your Contact Information.
    - User navigates back to About Yourself, checks if data persists.
    - User completes the form and submits, verifies successful submission.
      
- User journey for checking responses (authenticated)
    - Authenticated user views the submission in the dashboard
       - Pending submission
       - Completed submission
         
- User journey for checking responses (unauthenticated)
    - Unauthenticated user checks inquiry ID on intro page in `Check the status of your question` search
      
Our first priority test case is: An authenticated submits an inquiry in the `Health care` category. They answer `Myself` to **Who is your question about?** and `I'm the Veteran` to **What is your relationship to the Veteran?**.

See our current test code [in this GitHub folder](https://github.com/department-of-veterans-affairs/ask-va/tree/cypress-tests/cypress/cypress/e2e/1-getting-started/flows).

### Confirmed Automated UI Test Coverage for Start of Testing:
A QA resource from the Collaboration Cycle Team confirmed the following test cases as sufficient for our release.

Form submission
- An Unauthenticated User, who is the Veteran, asking a question in the `Life insurance` category
- An Authenticated User, who is the Veteran, asking a question in the `Health care` category
- An Unauthenticated User, who is the veteran, asking a question in the `Health care` category
- An Authenticated User, who is a business submitter, asking a question in the `Education benefits and work study` category

Checking responses (dashboard)
- An Unauthenticated User, Who is a submitter, checking status in the `Check the status of your question` question
- An Authenticated User, who is a submitter, checking for responses on the dashboard

### Manual Testing
- Scope: 
- Test Cases: Usability, unexpected user behavior, error conditions, and edge cases to catch discrepancies in testing.

**Manual Test Cases:**
Initial cases will be drafted here:  - [Testing Approach Doc](https://dvagov-my.sharepoint.com/:w:/g/personal/shelby_carl_va_gov/EXQdtcz1ksFKpTiRiE8kkhABaZZlCNK0RTt3L7n77L-eqQ?e=2rAX87) - PIV access Required


**Manual Accessibility Testing - aka Man QA **
Manual QA was done via Assistive Tech Studies and/or done individually on the page level by a teammate. 
- Example: Navigate the form with the keyboard, visually inspect the form, and verify form responsiveness on different devices.
  - **Required tools:** JAWS (to gain access [see Slack](https://dsva.slack.com/archives/C0552U2L30S/p1715866016698579) ) 
  - **References:**  [Prototype Figma workspace](https://www.figma.com/design/nI0nYMdLamogjKq9t5atj8/Ask-VA-Prototype-R4-(Staging)?node-id=2001-79334)

| [Accessibility Accommodation](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u) | Potential Tools |
| --------------------------- |-----------------|
| **Magnification Devices** | [ZoomText, ZoomText Fusion, Magnifier (Windows), Zoom](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u) |
| **Alternative methods of navigation** | [Mix of Switch system, Dragon NaturallySpeaking, Voice Control (Apple), One-handed keyboards, Head mouse, Sip and puff device](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u) |
| **Screen Readers** | [Mix of NVDA, JAWS, VoiceOver (Apple), Talkback (Android)](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u) |

The research plan can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Accessibility%20audit%20plan.md) in github.  

### RPA Testing
Scope: Confirming that the 2 Robotic Process Automation (RPA) Bots in production still function. 

Context: The RPA bots are scraping the CRM Agent for the Category and Topics: 
 - Compensation Category
 - Status of Claim Topic 

The AVA team will coordinate with a representative from the RPA to test in staging that the bots are unaffected pre launch. 
 
Note: It is expected that our update will not break these bots with the inscope changes to AVA, but this should be a watch out to monitor for future releases as well.

## 4. Testing Team
- VA.gov Team: FE Unit tests, BE (Vets API) Unit tests, integration testing, accessibility testing, manual testing, and automated E2E testing.
- CRM Team - business line: E2E testing facilitation.

- Roles and responsibilities for end-to-end (E2E) testing are as follows:
   - Testing for AVA VA.gov's web-facing, public UI will be owned by the AVA VA.gov team, guided by their test plan.
   - Testing for CRM's web-facing, public UI will be owned by the CRM team, guided by their test plan.
   - Testing steps that reference CRM's agent UI to verify queue routing will be intiated by the AVA VA.gov team and will be verified with support from the CRM team as needed.
   - Testing steps that reference CRM's agent UI to reply to an inquiry will be owned by the CRM team as needed, this includes making changes to a inquiry status or drafting a response to an inquiry.
   - Testing steps that reference CRM's agent UI to reroute an inquiry will be owned and executed by the CRM team as needed.
   - Testing of the CRM APIs/contracts will be performed by the CRM team.
   - Testing of the AVA VA.gov APIs/facade/middleware will be performed by the AVA VA.gov team.

## 5. Execute Testing
### Unit Testing
- Execution:
   - Run tests using the testing framework for the repo.
   - Ensure all tests pass, we meet the coverage requirement of 80% for the repo and fix any identified issues.

### Integration Testing
- Execution:
   - Execute integration tests to ensure seamless interaction between form steps and backend.
   - Fix integration issues.
   - **Expectation:** CRM team will build a new field into the response to return the routed queue name to facilitate integration testing in an automated fashion. 
   - Team will execute 120 tests associated with the Category, Topic, and SubTopic permutations.
   - The AVA team will submit collections (12 requests per collection) and 10 collections (120 total) to the CRM API
   - The CRM API will return a response body containing the new QueueID. Together the teams will confirm that the correct Category, Topic, and Subtopic are routed to the correct queue. 


### E2E Automated Testing (Cypress)
- Execution:
   - Run Cypress test suite.
   - Analyze test results and fix any identified issues.
   - Re-run tests after fixes to confirm resolution.
   - Can we toggle off a test in a higher environment? 

### Manual QA Testing
- Execution: 
   - Conduct manual tests following the test cases and form flows.
   - Note any bugs or usability issues and prioritize fixes.
   - Retest after making fixes.

## 6. Bug Tracking and Fixing
We moved this section to [this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/testing/Manual%20QA%20process.md). 

## 7. Pre-Launch Checklist
Final Review: Ensure all critical issues are resolved.
