# Platform code review guidelines

This document covers rules for engaging the VSP team in [pull request reviews](https://help.github.com/en/articles/about-pull-request-reviews). These guidelines are intended to:

* Help maintain the code quality and stability of the platform itself
* Enable VSP team to quickly review changes for VFS teams
* Clarify the process for moving code from development through review to production

We expect developers to be familiar with GitHub and the pull request review process, but want to be clear about our norms to reduce confusion and help code flow through the process as quickly and reliably as possible.

## Code owners on `vets-website`

VSP uses GitHub's [code owners](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) feature to trigger required reviews. A code owner is a GitHub [team](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-organizations) that must approve a change before it can be merged. 

By default, the [`frontend-review-group`](https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group) is the code owner of `vets-website`. VSA teams can optionally create a GitHub team under the [Department of Veteran Affairs GitHub organization](https://github.com/orgs/department-of-veterans-affairs/teams) and assign that team as a code owner of application [folders](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications). **This will remove the `frontend-review-group` as a required reviewer when changes are made to those folders.** 

The code owners configuration can be found [here](https://github.com/department-of-veterans-affairs/vets-website/blob/master/.github/CODEOWNERS). After creating your GitHub team, follow the conventions in the file to assign your team to an application folder. You should understand the following when making changes to the code owners configuration: 

- The **last matching rule** that matches all files in a change **takes precedence**.
- Application code should be structured to **require as few rules as possible**. 
- Only one required reviewer at a time can be triggered by code owners rules.
- Code owners rules are applied to every push after a PR is created. Required reviewers can be removed during this process but **GitHub does not remove the frontend review group once it has been added to a PR** as a required reviewer. 
- The `frontend-review-group` approves changes to code owners file. GitHub teams will be added to the `vets-website` repository during this review- this is required for code owners rules to trigger. 
- **Your group is responsible for managing its GitHub teams**. Since there are many ways to structure a GitHub organization, we recommend [being familiar](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-organizations) with this feature.


## The pull request review lifecycle in brief

1. For initial review by your project team, create a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/)
2. Once you are ready for the VSP team to review your PR, use the GitHub *Ready for review* button in the merge section of your pull request. An engineer should review the code within one business day. 
3. Each additional round of changes will be reviewed within one business day.
4. When all review comments have been resolved, the PR can be merged into the master branch for deployment.

*Hint*: Smaller, focused pull requests will make this easier for everyone!

## Code Review Guidelines

Your code will be automatically reviewed by automated systems for format, common errors, typical
language idioms, and code preferences using language-standard tools. 

When your code is reviewed, here are some of the things we're looking for:

* *Correctness*. Does the code correctly implement the described feature?
* *Code quality*. Is the code readable? Is the code language-idiomatic?
* For front end changes, are screenshots of the change(s) included?


## Basic expectations for pull requests

* **PR title** should be a concise summary of the change.

* **PR Description**: make it clear what the change is describing.
    * explain how code changes are related to the pull request objectives.
    * reference the **GitHub issues** your PR relates to, in order to provide reviewers more context.

* Keep your changes scoped to one feature at a time.
    * **Size**: changes should be smaller than a few hundred changed lines and a couple dozen files. *If your change can't be smaller than this, talk to the team in #vfs-platform-support before asking for a review.*
    * **One thing at a time**: feature code, cleanup/refactoring changes, dependency/package upgrades, and database migrations should all be in **separate PRs**. As much as possible, each PR should address a single feature or bug at a time.

* **Linting**: format your code in accordance with style guidelines.
    * Run your linter and address any linting related issues before opening your PR.
    * If you programmatically ignore a linting recommendation (e.g. via `rubocop:disable`), please comment in the PR explaining why.
    * If your linter does raise any issues unrelated to the PR's subject matter, please fix these in a separate PR.

## FAQ

Q. I created a pull request and I meant to create a draft pull request instead. How do I change it to a draft pull request in GitHub?

A.  Unfortunately, you can't change it. But as an alternative, please add "WIP" to the beginning of the title of your PR and we'll know what it means.

Q. I need a review *right now*! How do I get one?

A. We try to do pull request reviews quickly, but if you need a review faster, escalate via your DSVA product owner. Please don't post in Slack asking for a review unless it has been more than a full business day.
