# Ask VA Statuses and triggers

_Ask VA VA.gov Team_

Last updated by @tygindraux: April 28, 2025

This documents describes different Ask VA inquiry statuses and when they are assigned.

**Jump to:**
- [Statuses and when they are displayed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Statuses%20and%20triggers.md#statuses-and-when-they-are-displayed)
- [Future work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Statuses%20and%20triggers.md#future-work)
- [Legacy statuses for reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Statuses%20and%20triggers.md#legacy-statuses-for-reference)

## Statuses and when they are displayed

We currently display these statuses and descriptions on VA.gov. However, the CRM still displays [legacy status names](#legacy-statuses-for-reference).

|CRM status|VA.gov status|Descriptive text|Trigger event|
|:--|:--|:--|:--|
|`New`|`In progress`|We're reviewing your question.|The system automatically sets the status to `New` when a question is submitted. However, on the submitter front-end, this will display as `In progress`.|
|`In progress`|`In progress`|We're reviewing your question.|The system automatically sets the status to `In progress` when an agent is assigned. Even if the inquiry is re-routed, it will stay `In progress` until it moves to `Replied`.|
|`Solved`|`Replied`|We either answered your question or didn't have enough information to answer your question. If you need more help, reply or ask a new question.|An agent manually changes the status to `Solved` when an inquiry has been resolved, is a duplicate, or has insufficient details. On the submitter front-end, this will display as `Replied`. However, if an agent has replied but has not manually `Solved` the question, it will remain `In progress` until they do so. |
|`Reopened`|`Reopened`|We received your reply. We'll respond soon.|The system automatically sets the status to `Reopened` when a submitter replies to a `Solved` inquiry.|
|`Closed`|`Closed`|We closed this question after 60 days without any updates.|This isn't shown in the dashbaord but it is shown if someone 'Check[s] the status of their question.' The system automatically updates the status of `Solved` business inquiries to `Closed` after 60 days of no activity. This only applies to business inquiries, and happens so they will be removed from their dashboard. Personal and unauthenticated inquiries are never set to `Closed`.|
|Question not found|We didn't find any questions with reference number "A-20230710-306466." Check your reference number and try again.<br><br>If it still doesn't work, ask the same question again and include your original reference number.|A submitter searches for an reference number that is not found in the system.|

## Legacy statuses for reference

These labels were displayed on ask.va.gov.

|Status|Descriptive text|Trigger event|
|:--|:--|:--|
|`New`|Your inquiry is currently in queue to be reviewed.|The system automatically sets the status to `New` when a question is submitted.|
|`In progress`|Your inquiry is currently being reviewed by an agent.|The system automatically sets the status to `In progress` when an agent is assigned. Even if the inquiry is re-routed, it will stay `In progress` until it moves to `Solved`.|
|`Solved`|Your inquiry has been closed. If you have additional questions please open a new inquiry.|An agent manually changes the status to `Solved` when an inquiry: has been resolved, is a duplicate, or has insufficient details. `Solved` can also mean an agent has replied asking for more information, so the conversation may not be over.|
|`Reopened`|Your reply to this inquiry has been received, and the inquiry is currently being reviewed by an agent.|The system automatically sets the status to `Reopened` when a submitter replies to a `Solved` inquiry.|
|`Closed`|Closed|The system automatically updates the status of `Solved` inquiries to `Closed` after 60 days of no activity.|
|Reference number not found|No Results found. We could not locate an inquiry that matches your ID.  Please check the number and re-enter.  If you receive this message again, you can submit a new inquiry with your original question.  Include your old inquiry number for reference and we'll work to get your question fully answered.|A submitter searches for an reference number that is not found in the system.|
