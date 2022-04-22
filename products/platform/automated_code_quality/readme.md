# Automated Code Quality (Front-End) v1.2

----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Automated-code-quality.1845887276.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

Provide automated tooling to automate to improve code quality with explicit and enforced standards to help reduce the burden of code reviews felt by both VFS and VSP Teams.

## Tools Implemented:
**ESLint** - Establish a standard set of linting rules using 'eslint' that will be run during every build and report any warnings or errors to VFS Teams 

**Manual Review Triggers** - Each PR on vets-website will run through an automated process which looks for code additions/modifications which could be considered bad for the platform. If a potential issue is found, a bot will leave an automated comment and request a review from  `platform-release-tools`.

## Product Guides\Documentation:

**ESLint** - [Help Guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/manual-reviews) | [Process for Adding New Rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/adding-new-rules.md) | [Current Linting Rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md) 

**Manual Review Triggers** - [Help Guide](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/front-end-standards/manual-reviews)



## Product Responsibility (Last updated: 3-9-20 )

- Troubleshooting: [#vfs-product-support](https://dsva.slack.com/channels/vfs-product-support)
- Onboarding: [#vsp-tools-fe](https://dsva.slack.com/channels/vsp-tools-fe)
- Maintenance: [#vsp-tools-fe](https://dsva.slack.com/channels/vsp-tools-fe)
- Training Documents: [#vsp-tools-fe](https://dsva.slack.com/channels/vsp-tools-fe) 
- Product Feedback or New Feature Requests: [#vfs-product-support](https://dsva.slack.com/channels/vfs-product-support)

## Examples or References of usage:


## Version Notes:
### Release v1.2 Sprint 20 (04-02-20)

- ESLint - Publish and setup the second set of standard linting rules for [trial](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md) for the next 4 weeks. Feedback from VFS teams will be collected during this period. Please use the tag @platform-release-tools or message any of the release tools team members in Slack and provide us with your feedback.
---
### Release v1.1 Sprint 21 (03-30-20)
- ESLint - First set of standard linting rules are [enforced](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md#SonarJS-deployed-rules) 
---
### Release v1.0 Sprint 20 (03-03-20)
- ESLint - Publish and setup the first set of standard linting rules for [trial](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md#SonarJS-release-rules)
- Manual Review Triggers - Publish a [list of platform standards around code changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/manual-review-triggers.md) that will force a manual review by the FE developers

## Feature Requests:
- Accessibility checks (from Trevor)
- Fix propTypes setting - [Slack Thread](https://dsva.slack.com/archives/CBU0KDSB1/p1585767457354800)
