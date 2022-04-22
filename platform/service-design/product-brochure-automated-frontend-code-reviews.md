# **Automated frontend code reviews**

### What is it?

Automated code quality checks allowing you to move faster and bypass reviews from platform engineers when they're not necessary. These checks use an automated process that looks for code additions and modifications that don't meet baseline code quality criteria, and will alert a platform engineer to help out and do a review only if certain more complex issues are found.

### How does it work?

**ESLint:** A standard set of rules for analyzing code that run during every build and report any warnings or errors to VFS Teams.

**Manual review triggers:** Each PR runs through an automated process that looks for code additions and modifications that could negatively impact the platform. If a potential issue is found, a bot leaves a comment and requests a review from `platform-release-tools`.

------

### Product documentation

[Technical Docs](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/manual-reviews) | [Current linting rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md) 

------

### Point of contact 

Post a message in the [#vfs-product-support](https://slack.com/app_redirect?channel=CKENX6FHV) Slack channel and tag the current frontend point of contact to send us feedback or propose your own linting rule.

