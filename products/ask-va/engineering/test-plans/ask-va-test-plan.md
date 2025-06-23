## Ask VA VA.Gov - Test Plan

### Objectives 
- Validate that the Form and Dashboard inputs and functions work correctly
- Confirm that Ask VA Form and Dashboard integrate properly with the backend [CRM and other APIs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/integration), 
- Ensure that Ask VA provides a smooth user experience with appropriate accessibility expectations.

### Scope
The Ask VA will own items 1, 2, and 3 while supporting items 4 and 6 where applicable.
![image (1)](https://github.com/user-attachments/assets/cab44943-c3bf-45aa-bf4f-5e420d62378a)



### Approach
Testing will first be done when VA Staging is pointed to the CRM QA environment and then repeated when VA Staging is pointed to the CRM PRE-PROD environment.
##### Unit and Integration Testing
- Run tests using the testing framework for the repo.
- Ensure all tests pass, that the coverage requirement of 80% for the repo is met and fix any identified issues.
- In addition to unit tests, an Ask Va.gov developer will run a core set of Cypress tests at the build pipeline level. 
##### Manual Testing
- Once changes have been pushed to the VA Staging environment, an Ask VA VA.gov team member will manually test the feature to validate it meets requirements.
- The team member will note any bugs or usability issues and prioritize fixes.
- The feature will be retested after making fixes.
##### Regression Testing
- Once the feature(s) have been validated, an Ask VA VA.gov team member will then conduct manual regression tests following the test scripts, and which functionality has been impacted by the new change.
- On production, the Ask VA.Gov team will run a larger automated test suite at least once per week. This is done to provide confidence for regression testing without significantly extending development time for a developer to run the test suite in the build pipeline.


### Manual Test scripts 
 The following test scripts cover 50+ user scenarios that validate Ask VA's inputs, field and queue rules across Ask VA Form and Dashboard. 
- [FORM - Manual testing scenarios/scripts](https://docs.google.com/spreadsheets/d/1u55VrMylaNxEtxDkeIGLZ00H6nQUOHWiNCnTw1zvtnY/edit?usp=sharing)
- [DASHBOARD - Manual testing scenarios/scripts](https://docs.google.com/spreadsheets/d/1zaHVKCu9pOa0nXT8tvE4ZVO7Uzq-qaZ2h4KYtRwhfE4/edit?usp=sharing)

The number and content of the scripts will be updated as Ask VA VA.gov evolves. Of these test scripts, a core set have been identified which serve as the basis of smoke and pipeline level tests:
##### Form - Confirming users can submit inquiries 

- `2a` An Unauthenticated User, who is the Veteran, asking a question in the `Life insurance` category
- `3a` An Authenticated User, who is the Veteran, asking a question in the `Health care` category
- `5i` An Authenticated User, who is a business submitter, asking a question in the `Education benefits and work study` category

##### Dashboard - Validating that inquiries and responses are accessible
Unauthenticated user
- `1j` An Unauthenticated User, who is a submitter, checking status in the Check the status of your question question
Inbox page
- `5k` An Authenticated User, who is a submitter and has no business questions, checking for responses on the inbox
- `6k` `7k` An Authenticated User, who is a submitter and does have business questions, checking for responses on the inbox
Question details
- `10m` An Authenticated User, who is a submitter, checking response details
- `11m` An Authenticated User, who is a submitter, replying to a question
- `12n`An Unauthenticated user, replying to an inquiry response via email


### Integration and Automated Testing 

##### Cypress
- [Cypress tests folder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/ask-va/tests/e2e/fixtures/flows)
- Cypress tests are based on the manual test scripts. 
- Once a feature is tested, a new automated script will be written to account for new functionality.

##### Insomnia
The team will leverage Insomnia to send a collection of requests to the CRM APIs. The APIs will return a response body that includes a new field containing QueueID to ensure that the right Category, Topic, and Subtopic are routed to the correct queue.
- Inquiries will be drafted based on the AVA Testing Framework excel shared by the CRM team. Each inquiry will require a Category, Topic, and Subtopic which will route to a unique Queue.
- Additional notes such as what mocked user information will be based ( name, email, etc) and documented
