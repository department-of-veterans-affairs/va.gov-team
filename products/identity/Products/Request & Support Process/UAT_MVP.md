
## Description
Scope of this UAT is to validate that the requirements for the SlackBot have been met.

Reference: [Identity SlackBot Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Identity-Slackbot-documentation.md)  

### Overall intended functionality is:
- Teams within the VA are able to request help for specific issues.
  - Authentication
  - PR reviews
  - Data pulls
  - Other 
- A user is able to track the status of their request through a GitHub ticket.

### Out of Scope for these tests:
- The support process is not part of this round of user acceptance test (which should be tested at a later time).
- Slack and GitHub integration is not supported
- SiS support.


| Test Case Description | Expected Results | Actual Results | Pass/Fail |Comments
| ------ | ------ | ------ | ------ | ------ |
| As a developer in the VA, I need help with an authentication issue.  I can go to the vsp-identity SlackBot and type /identity-support, I should be able to request help. | Developer is able to complete the form and a GitHub issue is created. |  |  |  |
| As a developer, I want to check on the status of my authentication request so I click on the GitHub issue link in the Slack response. | Developer is able to visit the GitHub issue and see any status updates. |  |  |  |
| As a developer in the VA, I need help with a PR review.  I can go to the vsp-identity SlackBot and type /identity-support, I should be able to request help. | Developer is able to complete the form and a GitHub issue is created. |  |  |  |
| As a developer, I want to check on the status of my PR review so I click on the GitHub issue link in the Slack response. | Developer is able to visit the GitHub issue and see any status updates. |  |  |  |
| As a requester of data in the VA, I need help with a data pull.  I can go to the vsp-identity SlackBot and type /identity-support, I should be able to request help. | Requester is able to complete the form and I should see a Slack post with the form data as a threaded response. |  |  |  |
| As a requester of data, I want to check on the status of my data pull so I revisit the Slack thread that was created upon my ticket submission. | Requester is able to return to the Slack thread and see any status updates. |  |  |  |
| As a developer in the VA, I need help with an issue that is not related to authentication, a pr review or a data pull.  I can go to the vsp-identity SlackBot and type /identity-support, I should be able to request help. | Developer is able to complete the form and a GitHub issue is created. |  |  |  |
| As a developer, I want to check on the status of my "other" issue so I click on the GitHub issue link in the Slack response. | Developer is able to visit the GitHub issue and see any status updates. |  |  |  |


### Open Questions
- If people have additional questions or context they want to add to an issue, where should they address that?  GitHub or the Slack thread?
- What should happen when a ticket is closed?  Does the user get notified in Slack or is the ticket simply closed (and by whom)?
