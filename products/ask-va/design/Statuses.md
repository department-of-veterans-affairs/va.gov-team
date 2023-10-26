# Ask VA statuses

Last updated by @tygindraux: October 26, 2023

This documents describes different Ask VA inquiry statuses and when they are assigned.

## Statuses and when they are displayed

We'll display these statuses and descriptive text in Ask VA when it moves to VA.gov. We've revised the [legacy statuses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Statuses.md#legacy-statuses-for-reference) using the [VA.gov content style guide](https://design.va.gov/content-style-guide/plain-language/use-active-voice). The triggers will remain the same.

|Status|Descriptive text|Trigger event|
|:--|:--|:--|
|`New`|We've received your question. We’ll review it soon.|The systems automatically sets the status to `New` when a question is submitted.|
|`In progress`|We're currently reviewing your question.|The system automatically sets the status to `In prgoress` after an agent has responded.|
|`Solved`|We answered your question. If you have an additional question, please submit a new question.|An agent manually changes the status to `Solved` when an inquiry: has been resolved, is a duplicate, or has insufficient details.|
|`Reopened`|We received your reply. We'll respond soon.|The system automatically sets the status to `Reopened` when a submitter replies to a `Solved` inquiry.|
|`Closed`|We closed your question.|The system automatically updates the status of `Solved` inquiries to `Closed` after 60 days of no activity.|
|Reference number not found|We didn't find any results for "A-20230710-306466”. Try checking your reference number again to make sure it’s correct.<br><br>If you receive this message again, you can submit a new inquiry with your original question. Include your original reference number and we'll work to get your question answered.|A submitter searches for an reference number that is not found in the system.|


Agents also assign a `Solved Reason` to `Solved` inquiries. This is hidden from submitters. Reasons are: 
Resolved
Duplicate
Insufficient Details 

Agents also enter a free-text response in the `Description` fields that explains how the inquiry is `Solved`.


## Legacy statuses for reference

This is the text that is currently displayed on ask.va.gov.

|Status|Descriptive text|
|:--|:--|
|`New`|We've received your question. We’ll review it soon.|
|`In progress`|We're currently reviewing your question.|
|`In progress`|We answered your question.|
|`Solved`|We answered your question. If you have an additional question, please submit a new question.|
|`Reopened`|We received your reply. We'll respond soon.|
|`Closed`|We closed your question.|
|Reference number not found|We didn't find any results for "A-20230710-306466”. Try checking your reference number again to make sure it’s correct.<br><br>If you receive this message again, you can submit a new inquiry with your original question. Include your original reference number and we'll work to get your question answered.|
