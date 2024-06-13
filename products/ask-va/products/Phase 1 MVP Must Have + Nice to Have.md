# Phase 1 MVP - Front-End Redesign

Last updated by @beckyphung on October 30, 2023

**Jump to:**
- [Inquiry form](#inquiry-form)
- [Medallia](#medallia)
- [Dashboard](#dashboard)
- [Profile](#profile)
- [Notify](#notify)
- [Assumptions/Risks](#assumptionsrisks)

## Inquiry form

|Feature or task|Must have|Nice to have|Not in scope|
|:--|:--:|:--:|:--:|
|Bring AVA inquiry form to a page on VA.gov|x|||
|Bring AVA up to VA.gov design standards (front-end updates)|x|||
|Update topics and categories based on content style guide (without changing functionality and output). See detailed scope [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/category-topic-subtopic-scope-for-phase-1.md).|x|||
|Update form questions based on content style guide (without changing functionality and output)|x|||
|Update UI to reflect the VA Design System|x|||
|Make it mobile-friendly|x|||
|Make it desktop-friendly|x|||
|Conduct initial research with submitters to test form sequence, design and content with Sketch prototype|||x|
|Conduct research with submitters to usability and accessibility with coded prototype in staging (dependency on engineering)|x|||
|Additional iterative research based on findings||x||
|508 Compliant (Acceptance criteria: Go through collab cycle)|x|||
|When inquiry data is collected on VA.gov, the implementation will send this data to Dynamics CRM for the agents to work on the inquiry|x|||
|Understand current routing rules|x|||
|Removal of fields||x||
|Update link to new Ask VA from existing VA.gov pages and other VA applications refer users to Ask VA|x|||
|Add new Ask VA link to pages that currently don’t contain Ask VA link but have their category in the Ask VA form||x||
|Add new Ask VA link to pages that currently don’t contain Ask VA link and don’t have their category in Ask VA|||x|

## Medallia

|Feature or task|Must have|Nice to have|Not in scope|
|:--|:--:|:--:|:--:|
|Ensure new AVA on VA.gov has a feedback survey|x|||
|Ensure new AVA on VA.gov has an intercept survey|x|||
|Make sure existing AVA has implemented the feedback survey for at least 1 month before going live||x||
|Make sure existing AVA has implemented the intercept survey for at least 1 month before going live||x||
|Ensure we receive PRA Approval both surveys|x|||

## Dashboard

|Feature or task|Must have|Nice to have|Not in scope|
|:--|:--:|:--:|:--:|
|Bringing the existing AVA Dashboard up to VA.gov design standards on a page in VA.gov using the card component|x|||
|Sunset the existing AVA Dashboard|||x|
|Changing the content provided in the existing AVA Dashboard when we go live with new AVA Dashboard on VA.gov page|x|||
|Review designs with School Certifying Officials (SCOs)|x|||
|Be able to filter/sort the inquiries|x|||
|Be able to view replies to inquiries from agents (current functionality)|x|||
|Be able to separate (and hide) business and personal inquiries|x|||
|NEW: Be able to view archived inquiries|||x|
|NEW: Be able to search submitter questions (replies, response)|||x|
|NEW: Notification in card UI when you have a new reply|x|||
|NEW: Be able to view conversation (question and replies) on one page|x|||

## Profile

|Feature or task|Must have|Nice to have|Not in scope|
|:--|:--:|:--:|:--:|
|Pull submitter’s data from VA Profile to pre-fill information for a section of AVA|x|||
|Submitters are able to click a button to go to VA Profile to update their information and then return to the same spot on AVA||x||
|Submitters should able to temporarily update the fields in AVA but this should NOT update information in VA Profile|x|||
|Sunset the existing AVA Profile: No migration of data, no comparison between this and VA Profile)|x|||

## Notify

|Feature or task|Must have|Nice to have|Not in scope|
|:--|:--:|:--:|:--:|
|Submitters get email notifications through VA Notify - triggered by Dynamics|||x|
|Submitters being able to respond on email notifications coming from VA Notify|||x|
|Onsite notifications on My VA|||x|
|Text notifications|||x|

## Assumptions/Risks

What risks do we see that could impact are must-have deliverables?

### 1. Dependency on CRM Team
- API Layer that both exposes data to us (dashboard) and receives data from us (inquiry submission) + additional time for AVA Engineering team to implement.
- If the API layer cannot be done by CRM Team - we would need a Dynamics instance and time to ramp up.

Impact: `HIGH`

Without this work, we would not be able to send the data collected in the new AVA back to Dynamics for routing. It would prevent us from launching our MVP.

### 2. Alignment between Sitewide Content and the business lines on content updates

Impact: `LOW`

Without this alignment, we may have to stick with the names of categories and topics currently present which may not be easy and intuitive for the Veterans. This is a low risk because it would not prevent us from launching our MVP.
