# **Automated frontend code reviews**

### What is it?

An automated process that looks for code additions and modifications that don't meet platform code quality standards. If no issues are found, the pull request (PR) can be completed without review by a platform engineer.

### How does it work?

**ESLint:** A standard set of rules for analyzing code that run during every build and report any warnings or errors to VFS Teams.

**Manual review triggers:** Each PR runs through an automated process that looks for code additions and modifications that could negatively impact the platform. If a potential issue is found, a bot leaves a comment and requests a review from the frontend-review-group.

------

### Product documentation

[User guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/manual-reviews) | [Current linting rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md) | [Adding new linting rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/adding-new-rules.md)

------

### Point of contact 

Post a message in the [#vfs-product-support](https://slack.com/app_redirect?channel=CKENX6FHV) Slack channel and tag @frontend-review-group to send us feedback.

