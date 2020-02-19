# Code owners

## Overview 

This document covers how code owners are used to enforce required reviews. The intended audience for this is leads and developers on VFS teams who want to use code owners to enforce required reviews on their applications. 

## Code owners on `vets-website`

VSP uses GitHub's [code owners](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) feature to trigger required reviews. A code owner is a GitHub [team](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams) that must approve a change before it can be merged. 

By default, [`frontend-review-group`](https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group) is the code owner of `vets-website`. VSA teams can optionally create a GitHub team under the [Department of Veteran Affairs GitHub organization](https://github.com/orgs/department-of-veterans-affairs/teams) and assign that team as a code owner of [application folders](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications). **This will remove `frontend-review-group` as a required reviewer when changes are made to those folders.** 

After creating your GitHub team, follow the conventions in the [`CODEOWNERS` configuration file](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.github/CODEOWNERS) to assign your team to an application folder. You should understand the following when making changes to the code owners configuration: 

- The **last matching rule** that matches all files in a change **takes precedence**.
- Application code should be structured to **require as few rules as possible**. 
- Only one required reviewer at a time can be triggered by code owners rules.
- Code owners rules are applied to every push after a PR is created. Required reviewers can be removed during this process but **GitHub does not remove the frontend review group once it has been added to a PR** as a required reviewer. 
- The `frontend-review-group` approves changes to the `CODEOWNERS` configuration. GitHub teams will be added to the `vets-website` repository during this review since this is required for code owners rules to trigger. 
- **Your group is responsible for managing its GitHub teams**. Since there are many ways to structure a GitHub organization, we recommend [being familiar](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams) with this feature.
