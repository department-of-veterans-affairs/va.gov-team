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

We want to ensure that anything logged to Sentry will be useful (don't log an entire request response if all we care
about is an error code) and will not contain PII.

### Disabling ESLint

We have various ESLint rules in place to help improve code quality.
There are situations where it makes sense to disable certain rules, but those will have 
to be evaluated on a case-by-case basis.

### Adding icons

We use fontawesome as a dependency which encourages icons to be added with the `<i>` tag.
Sometimes an icon is used purely as decoration, but other times it is used to convey meaning to the user.
We want to ensure that if an icon is being used semantically, those semantics are also conveyed to a screen reader.
