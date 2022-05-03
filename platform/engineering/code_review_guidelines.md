----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Submitting-pull-requests-for-approval.655032351.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----


# Platform code review guidelines

This document covers rules for engaging the VSP team in [pull request reviews](https://help.github.com/en/articles/about-pull-request-reviews). These guidelines are intended to:

* Help maintain the code quality and stability of the platform itself
* Enable VSP team to quickly review changes for VFS teams
* Clarify the process for moving code from development through review to production

We expect developers to be familiar with GitHub and the pull request review process, but want to be clear about our norms to reduce confusion and help code flow through the process as quickly and reliably as possible.

## The pull request review lifecycle in brief

1. For initial review by your project team, create a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/)
2. Automated checks will run against your code. These should be responded to and may block your code from being merged.
3. A VSP engineer will review your code when it is marked "ready for review."  These will typically be completed in one business day.
  - This step is unnecessary for code-owners. (Information on how VSP uses code owners can be found [here](codeowners.md).)
  - For frontend PRs, the [additional automated checks](./manual-review-triggers.md) can trigger a review from the **patform-release-tools** regardless of the use of code-owners.
4.  When all review comments have been resolved, the PR can be merged into the main branch for deployment.

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
    * **Size**: changes should be smaller than a few hundred changed lines and a couple dozen files. Our automated tools will warn you about PRs that are large and automatically fail PRs that are very large. Our FAQ (below) has more information, but if you expect to submit a large pull request you should reach out to the reviewing team early in [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) and factor extra time for review into your planning process.
    * **One thing at a time**: feature code, cleanup/refactoring changes, dependency/package upgrades, and database migrations should all be in **separate PRs**. As much as possible, each PR should address a single feature or bug at a time.

* **Linting**: format your code in accordance with style guidelines.
    * Run your linter and address any linting related issues before opening your PR.
    * If you programmatically ignore a linting recommendation (e.g. via `rubocop:disable`), please comment in the PR explaining why.
    * If your linter does raise any issues unrelated to the PR's subject matter, please fix these in a separate PR.

## FAQ

Q. I created a pull request and I meant to create a draft pull request instead. How do I change it to a draft pull request in GitHub?

A.  Underneath the list of reviewers, there's text that says "Still in progress? Convert to draft" and the `Convert to draft` text is a link to change the PR to a draft.

Q. I need a review *right now*! How do I get one?

A. We try to do pull request reviews quickly, but if you need a review faster, escalate via your DSVA product owner. Please don't post in Slack asking for a review unless it has been more than a full business day.

Q. What do I do if my pull request receives a _warning_ that it is too large?

A. Review your code and decide if you can make two or more smaller, focused pull requests. Feel free to reach out to [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) for help about reducing the size or coordinating a larger review. Expect that reviewing the pull request will take additional time.

Q. What do I do if my pull request was *rejected* because it is too large?

A. As with a _warning_, decide if you can make several smaller pull requests and reach out on the support channel for additional help. Expect that reviewing the pull request may take significant extra time.
