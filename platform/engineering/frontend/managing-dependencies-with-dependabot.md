# Dependabot in `vets-website` repo

----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Dependabot.1846018114.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

**Author:** Jhonny Gonzalez

**Last Updated:** June 25, 2020

## Overview

Dependabot is an automated dependency management tool. It uses a configuration file, `dependabot.yml`, that lives at the root of each repository to handle the dependencies for that repo.

### `dependabot.yml` file located inside the `.github` folder

```
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      timezone: "America/New_York"
      # Allow up to 10 open pull requests for npm dependencies
      open-pull-requests-limit: 10
```

## Resources

- [Documentation](https://help.github.com/en/github/administering-a-repository/keeping-your-dependencies-updated-automatically)

## Settings

- `dependabot` will run everyday at 9am EST. 
- `dependabot` will only create up to 10 pull request at the time.
- `dependabot` can be located inside GitHub under the [Insights tab > Dependency graph](https://github.com/department-of-veterans-affairs/vets-website/network/updates)
- `dependabot` can be run manually from its settings tab inside GitHub

## Procedures

# Minor and patch

Any minor or patch upgrades should be prioritized since they won't have major impact. However, even minor library version upgrades can break or insert inconsistencies in apps.

In Minor or patches PRs, you need to still verify that there aren't any breaking changes.

# Major

A major version upgrade is often a more conscious decision to upgrade with the understanding that such an upgrade will require some work. Therefore, a ticket should be opened and extended work will be performed.

## Failure after a PR is merged

If a dependency upgrade causes an issue not caught by automated testing, the upgrade should be quickly reverted. A new PR should be created manually and a fix will need to be implemented along the upgrade to prevent any further issues.

_Since automated tests may not catch all issues be sure to read release notes related to any dependency upgrade._

## Recommended practices

- Maintain your dependencies with a level of frequency that the package count and version gap feels manageable
- Update your dependencies by areas of concern
- Test, lint, and run build checks after updating dependencies to look for potential breakage. If a dependency touches a specific piece of functionality conduct some quick smoke tests

## Revision History

_The table below should record the major changes to this document. You don't need to add an entry for typo fixes, other small changes or changes before finishing the initial draft._

| Date          | Revisions Made | Author          | Reviewed By |
| ------------- | -------------- | --------------- | ----------- |
| June 25, 2020 | Initial Draft  | Jhonny Gonzalez | Rian Fowler |
