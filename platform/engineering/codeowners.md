----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/How-we-use-GitHub-Code-Owners.655032344.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Code owners

## Overview

This document covers how code owners are used to enforce required reviews. The intended audience for this is leads and developers on VFS teams who want to use code owners to enforce required reviews on their applications.

## VSP Code Owners

VSP uses GitHub's [code owners](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) feature to trigger required reviews. A code owner is a GitHub [team](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams) that must approve a change before it can be merged.

By default, [`platform-release-tools`](https://github.com/orgs/department-of-veterans-affairs/teams/platform-release-tools) is the code owner of `vets-website` and [`backend-review-group`](https://github.com/orgs/department-of-veterans-affairs/teams/backend-review-group) is the code owner of `vets-api`.

## Other Code Owners
VSA and VFS teams can optionally [create a GitHub team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/vsp_user_managment_process.md#creating-a-github-team) under the [Department of Veteran Affairs GitHub organization](https://github.com/orgs/department-of-veterans-affairs/teams) by clicking on the **New team** button. This must be done for the team to become a code owner.

In `vets-website`, a team can be assigned as a code owner of [application folders](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications). **This will remove `platform-release-tools` as a required reviewer when changes are made to those folders.** Follow the conventions in the [`CODEOWNERS` configuration file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.github/CODEOWNERS) to assign your team to an application folder.

In `vets-api`, a team can be assigned as a code owner of [module folders](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules). **This will remove `backend-review-group` as a required reviewer when changes are made to those folders.** Follow the conventions in the [`CODEOWNERS` configuration file](https://github.com/department-of-veterans-affairs/vets-api/blob/master/.github/CODEOWNERS) to assign your team to an application folder.

You should understand the following when making changes to the code owners configuration:

- The **last matching rule** that matches all files in a change **takes precedence**.
- Application code should be structured to **require as few rules as possible**.
- Only one required reviewer per file can be triggered by code owners rules. A pull request may require multiple code owner approvals.
- Code owners rules are applied to every push after a PR is created. Required reviewers can be removed during this process but **GitHub does not remove a review group once it has been added to a PR** as a required reviewer.
- The VSP teams approve changes to the `CODEOWNERS` configuration. The relevant VSP team will add new GitHub teams created by other teams to the applicable repository during this review since this is required for code owners rules to trigger.
- **Your group is responsible for managing its GitHub teams**. Since there are many ways to structure a GitHub organization, we recommend [being familiar](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams) with this feature.
- We recommend having at least three members on a GitHub team used for code owners. By default, **only one** code owner group can approve a change.
