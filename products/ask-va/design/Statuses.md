# Ask VA statuses

Last updated by @tygindraux: October 26, 2023

This documents describes different Ask VA inquiry statuses and when they are assigned.

## Statuses and when they are displayed

We'll display these statuses and descriptive text in Ask VA when it moves to VA.gov. We've revised the [legacy statuses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Statuses.md#legacy-statuses-for-reference) using the [VA.gov content style guide](https://design.va.gov/content-style-guide/plain-language/use-active-voice). The triggers will remain the same.

|Status|Descriptive text|Trigger event|
|:--|:--|:--|
|`New`|We've received your question. We’ll review it soon.|The systems automatically sets the status to `New` when a question is submitted.|
|`In progress`|We're currently reviewing your question.|The system automatically sets the status to `In progress` **after an agent has responded.***|
|`Solved`|We answered your question. If you have an additional question, please submit a new question.|An agent manually changes the status to `Solved` when an inquiry: has been resolved, is a duplicate, or has insufficient details.|
|`Reopened`|We received your reply. We'll respond soon.|The system automatically sets the status to `Reopened` when a submitter replies to a `Solved` inquiry.|
|`Closed`|We closed your question due to inactivity.|The system automatically updates the status of `Solved` inquiries to `Closed` after 60 days of no activity.|
|Reference number not found|We didn't find any results for "A-20230710-306466”. Try checking your reference number again to make sure it’s correct.<br><br>If you receive this message again, you can submit a new inquiry with your original question. Include your original reference number and we'll work to get your question answered.|A submitter searches for an reference number that is not found in the system.|

***The difference between `In progress` and `Solved` could be confusing:**
- Both statuses happen **after** an agent has responded
- But `In progress` might imply that the agent is **working** on a reply (especially given the description, see legacy description: Your inquiry is currently being reviewed by an agent.)
- How much time elapses between `In progress` and `Solved`? `In progress` is automatic but `Solved` is manual. Does an agent change the status right away?

## Legacy statuses for reference

This is the text that is currently displayed on ask.va.gov. This descriptive text will be retired when we move to VA.gov, but the triggers and statuses will remain the same.

|Status|Descriptive text|Trigger event|
|:--|:--|:--|
|`New`|Your inquiry is currently in queue to be reviewed.|The systems automatically sets the status to `New` when a question is submitted.|
|`In progress`|Your inquiry is currently being reviewed by an agent.|The system automatically sets the status to `In progress` after an agent has responded.|
|`Solved`|Your inquiry has been closed. If you have additional questions please open a new inquiry.|An agent manually changes the status to `Solved` when an inquiry: has been resolved, is a duplicate, or has insufficient details.|
|`Reopened`|Your reply to this inquiry has been received, and the inquiry is currently being reviewed by an agent.|The system automatically sets the status to `Reopened` when a submitter replies to a `Solved` inquiry.|
|`Closed`|Closed|The system automatically updates the status of `Solved` inquiries to `Closed` after 60 days of no activity.|
|Reference number not found|No Results found. We could not locate an inquiry that matches your ID.  Please check the number and re-enter.  If you receive this message again, you can submit a new inquiry with your original question.  Include your old inquiry number for reference and we'll work to get your question fully answered.|A submitter searches for an reference number that is not found in the system.|
