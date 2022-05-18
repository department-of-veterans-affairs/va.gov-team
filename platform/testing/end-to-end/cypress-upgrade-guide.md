----
# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Cypress-Upgrade-Guide.1869742109.html) on the Platform website.
### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Cypress Upgrade Guide

Cypress is under active development, and the Cypress development team has been releasing regular changes to the tool. Minor version are released every few weeks, while major versions are released a few times per year. This guide documents our approach to upgrading Cypress consistently so that potential issues with upgrades are adequately addressed, and VFS teams are informed of any relevant changes to Cypress.

# Table of Contents

- [Cypress Upgrade Guide](#cypress-upgrade-guide)
- [Table of Contents](#table-of-contents)
  - [Minor version updates](#minor-version-updates)
  - [Major version updates](#major-version-updates)
  - [Additional resources](#additional-resources)

## Minor version updates

Currently, minor version updates of Cypress are released roughly once every few weeks. Historically, minor versions have fixed bugs and occasionally introduced new features. Minor versions typically do not introduce any potential breaking changes to tests such as test syntax changes.

In `vets-website`, there are two steps to updating Cypress:

- Running `yarn upgrade cypress@version --dev`.
- Manually updating the Cypress version in `package.json` under the `"resolutions"` section.

After installing the update, all existing Cypress tests should be run locally, on Jenkins, and on CircleCI to check for any regressions. Cypress' changelog includes a list of changes included with the minor version releasse, so any test failures should be inspected to see if they are related to these changes.

It is unlikely that minor versions will include significant changes such as major deprecations; however, if this is the case then the [major version update guide](#major-version-updates) should be followed.

## Major version updates

Major version updates to Cypress typically come with significant changes to functionality, new features, deprecated methods, and other changes. Additional testing and communication is required to ensure Cypress is updated without issues.

The process for updating to a new major version is the same as described in the [minor version update section](#minor-version-updates). The major version should be tested locally, on Jenkins, and on CircleCI to check for regressions. Additionally, tests may have to be inspected to see if they contain deprecated methods and other significant changes from the major update.

Due to the significant changes that come with major versions, Cypress has a [migration guide](https://docs.cypress.io/guides/references/migration-guide.html) that helps with the transition. The key changes from this guide should be communicated to engineering teams:

- A migration guide should be provided that covers key changes engineers should be aware of
- If there are any deprecations, these should be mentioned in the migration guide.
- The guide should be shared with all engineering teams before the update is merged to `main`.
- If necessary, teams should be given sufficient notice of changes that may impact testing.
- After sharing the migration guide, the update can be merged to `main`.
- After merging, tests should be monitored to check for new issues. Cypress' migration guides are not comprehensive and may omit breaking changes.

## Additional resources

- Cypress has a migration guide available on [docs.cypress.io](https://docs.cypress.io/guides/references/migration-guide.html).

- Cypress has a [changelog](https://docs.cypress.io/guides/references/changelog.html) available for all versions.
