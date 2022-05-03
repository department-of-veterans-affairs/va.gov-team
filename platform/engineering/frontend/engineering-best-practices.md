# Engineering Best Practices

Here is a brief list of Veteran Services Platform (VSP) recommended engineering best practices when working to add new features to the VSP.  

### Tickets/Issues/User stories

- Refine tickets until they are atomic (guideline: no larger than a week's worth of effort).
- Use epics to tether together common bodies of atomic work.
- Always use the GitHub issue template:
  - include background that provides context, resources, links, images, and/or POCs
  - identify clear, concise, achievable acceptance criteria
  - when applicable, identify risks that could impact delivery, resources, quality, etc.
- Use tickets as a forum to discuss and capture implementation ideas, questions, patterns, access, etc.
  - in particular when implementation path is not clear, favor discussion prior to submitting a PR 
- When applicable, use tickets to collaborate and gain consensus on API contracts.
- Subscribe relevant VSP team members for visibility and agile support.
- Maintain accurate ticket status details (i.e. pipelines, assignees, blockers, etc.).

### Pull requests

- Post/update code in a PR frequently (multiple times per week, no less than once a week), be it work-in-progress, or a PR ready for review.
- Favor multiple, smaller, focused PR's over large PR's. The main branch of `vets-website` and `vets-api` is deployed [every weekday](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/site-structure/environments/).
- Always use the GitHub pull request template:
  - include background that provides context and a summary of why the PR is necessary, and what you've done in the PR
  - if applicable, include resources, links, images, and/or POCs
  - in the _Definition of Done_ section add tasks that relate what was completed in the PR to the originating issue's _Acceptance Criteria_
- When applicable, include screenshots (i.e. new API endpoint docs, new UI, etc.).
- Feel free to request reviews for a work-in-progress PR, and then use GitHub's [re-request review feature](https://github.blog/changelog/2019-02-21-re-request-review-on-a-pull-request/) to get final PR approvals.
- Identify work-in-progress PR's by adding _WIP_ to the title, or using GitHub's [draft pull request feature](https://github.blog/2019-02-14-introducing-draft-pull-requests/).

### Process

- Ensure comprehensive test coverage is in place for all code additions/updates.
- Hook into/add monitoring and alerting for your service.
- Capture relevant analytics for the feature.
- Add documentation to support your code and service (Yard docs, product docs, POC's, etc.).
- If integrating a new external API, at the onset, request VPS DevOps team to make connections between respective Vets-API & external API environments (i.e. staging to staging, etc.).

### Backend development

- Discuss your implementation ideas with VSP backend team members early and often. There are many common patterns and classes that are in place in Vets-API that should be leveraged, that we can point you to.
- [RuboCop](https://github.com/rubocop-hq/rubocop) is used for Ruby style linting, and is enforced at the CI level.
- [Screencast](https://youtu.be/u61LOvbG0ig) on patterns and practices when adding an endpoint to Vets-API (30min.)
  - [Slide deck](https://hackmd.io/@5i0bFuB7T4601Y0VaS90pw/r1Mn_TqYG?type=slide#/) on adding endpoints to Vets-API, includes links to code in the screencast
  - [Vets-API Endpoint Punch List](../DeveloperDocs/vets-api/vets-api-endpoint-punch-list.md)

### Frontend development

- Familiarize yourself with the [Client application documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started) site. It summarizes several common tasks, common components, and the high level structure of `vets-website` 
- We encourage frequent merges of small pull requests and using [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) to keep partially complete or in progress features from appearing in production. 
- If modifying an existing app, we encourage writing code that's [easy to delete](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to). We encourage coarse feature gating logic (i.e. "please repeat yourself") to avoid needing "shotgun surgery" later when the feature goes live. 
- We rely heavily on automated testing in our continuous integration flow to detect regressions. It's important to follow our unit testing and end to end testing patterns to maintain a highly collaborative environment. 

### 508/Accessibility 

- Add the [aXe browser plugin](https://deque.com/axe).
- Rendered pages must pass an aXe check in e2e suite ([axeCheck helper function](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/forms-system/test/config/helpers.js#L4)). 
- Run a keyboard navigation spot check.
- Ensure proper keyboard focus settings for single-page apps.
- Ensure headings are properly nested.

### General

Reminder, VSP engineers are available to review and/or discuss changes!
