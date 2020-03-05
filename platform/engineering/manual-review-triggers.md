# Triggering a manual review

Each PR on `vets-website` will run through an automated process which looks for code additions/modifications
which could be considered bad for the platform.  If a potential issue is found, a bot will leave an
automated comment and request a review from the **frontend-review-group**.

## Triggers

Any of the following items if found in a PR diff will prompt a manual review

- A call to `Sentry`
- ESLint being disabled
- An icon being added with `<i ...`

### Sentry calls

We review logs to Sentry to ensure that any new logs will be useful and will not contain PII.

Examples:
- Don't log an entire request response if all that's important is an error code
- Don't log user-identifying information such as names, emails, or user IDs

### Disabling ESLint

We have various ESLint rules in place to help improve code quality.
Disabling ESLint rules will be evaluated on a case-by-case basis.

### Adding icons

We use Font Awesome as a dependency, which uses the `<i>` tag for adding icons. Sometimes an icon is used purely as decoration, but other times it is used to convey meaning to the user.

We review to ensure that whenever an icon is being used semantically, those semantics are also conveyed to a screen reader.


## Required Environment variables

The script relies on some environment variables.

### Provided by Circle by default
-  `CIRCLE_PROJECT_REPONAME`
-  `CIRCLE_PROJECT_USERNAME`
-  `CIRCLE_PULL_REQUEST` (link to the PR -used to get PR number)

### Configured in the Circle UI
- `BOT_NAME`
  - This isn't sensitive, but it made sense to pair it with the auth token
- `GITHUB_TOKEN`
  - An Oauth token used to make calls to the Github API

### YAML config
- `CODE_PATTERN`
  - Regex pattern which will trigger a review comment if found
- `LINE_COMMENT`
  - Review comment for an individual line comment
- `OVERALL_REVIEW_COMMENT`
  - Review comment for the whole review
