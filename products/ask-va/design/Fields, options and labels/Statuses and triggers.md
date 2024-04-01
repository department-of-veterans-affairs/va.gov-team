# Ask VA tatuses and triggers

_Ask VA VA.gov Team_

Last updated by @tygindraux: January 31, 2024

This documents describes different Ask VA inquiry statuses and when they are assigned.

**Jump to:**
- [Statuses and when they are displayed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Statuses.md#statuses-and-when-they-are-displayed)
- [Future work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Statuses.md#future-work)
- [Legacy statuses for reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Statuses.md#legacy-statuses-for-reference)

## Statuses and when they are displayed

For Phase 1 on VA.gov, we'll display these statuses and descriptions. We revised the [legacy descriptions](#legacy-statuses-for-reference) using the [VA.gov content style guide](https://design.va.gov/content-style-guide/plain-language/use-active-voice). Due to the complexity of updating the status names without revisiting the trigger events, our VEO partners and our team agreed to keep the statuses as is for Phase 1.

|Status|Descriptive text|Trigger event|
|:--|:--|:--|
|`New`|We received your question. We’ll review it soon.|The system automatically sets the status to `New` when a question is submitted.|
|`In progress`|We're reviewing your question.|The system automatically sets the status to `In progress` when an agent is assigned. Even if the inquiry is re-routed, it will stay `In progress` until it moves to `Solved`.|
|`Solved`|We either answered your question or didn't have enough information to answer your question. If you need more help, ask a new question.|An agent manually changes the status to `Solved` when an inquiry: has been resolved, is a duplicate, or has insufficient details. `Solved` can also mean an agent has replied asking for more information, so the conversation may not be over.|
|`Reopened`|We received your reply. We'll respond soon.|The system automatically sets the status to `Reopened` when a submitter replies to a `Solved` inquiry.|
|`Closed`|This isn't shown to submitters.|The system automatically updates the status of `Solved` inquiries to `Closed` after 60 days of no activity. This only applies to business inquiries, and happens so they will be removed from their dashboard.|
|`Question not found`|We didn't find any questions with reference number "A-20230710-306466." Check your reference number and try again.<br><br>If it still doesn't work, ask the same question again and include your original reference number.|A submitter searches for an reference number that is not found in the system.|

## Future work

- Review statuses and their descriptions with Veterans and other submitters.
- Develop a different workflow for how things are `Solved` that allows for more granular states and is more clear for the submitter.
- Consider a feature that allows the _submitter_ to indicate when their question has been solved, instead of the agent.

## Legacy statuses for reference

This is the text that is currently displayed on ask.va.gov. This descriptive text will be retired when we move to VA.gov, but the triggers and statuses will remain the same.

|Status|Descriptive text|Trigger event|
|:--|:--|:--|
|`New`|Your inquiry is currently in queue to be reviewed.|The system automatically sets the status to `New` when a question is submitted.|
|`In progress`|Your inquiry is currently being reviewed by an agent.|The system automatically sets the status to `In progress` when an agent is assigned. Even if the inquiry is re-routed, it will stay `In progress` until it moves to `Solved`.|
|`Solved`|Your inquiry has been closed. If you have additional questions please open a new inquiry.|An agent manually changes the status to `Solved` when an inquiry: has been resolved, is a duplicate, or has insufficient details. `Solved` can also mean an agent has replied asking for more information, so the conversation may not be over.|
|`Reopened`|Your reply to this inquiry has been received, and the inquiry is currently being reviewed by an agent.|The system automatically sets the status to `Reopened` when a submitter replies to a `Solved` inquiry.|
|`Closed`|Closed|The system automatically updates the status of `Solved` inquiries to `Closed` after 60 days of no activity.|
|Reference number not found|No Results found. We could not locate an inquiry that matches your ID.  Please check the number and re-enter.  If you receive this message again, you can submit a new inquiry with your original question.  Include your old inquiry number for reference and we'll work to get your question fully answered.|A submitter searches for an reference number that is not found in the system.|
