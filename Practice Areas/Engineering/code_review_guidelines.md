# Platform code review guidelines

This document covers rules for engaging the VSP team in [pull request reviews](https://help.github.com/en/articles/about-pull-request-reviews). These guidelines are intended to:

* Help maintain the code quality and stability of the platform itself
* Enable VSP team to quickly review changes for VFS teams

Before sending your code to a VSP team for review, your code should meet all of the guidelines below.

*Hint*: smaller, more frequent pull requests will make this easier for everyone!

## Guidelines

* **Review lifecycle**
    * Before sending code to VSP team have it reviewed by your team (see **First review** below) using a [Draft Pull Request](https://help.github.com/en/articles/about-pull-requests#draft-pull-requests).  
      * This prevents [code owners](https://help.github.com/en/articles/about-code-owners) from being notified before pull request is ready for review.
    * After having your pull request reviewed by your team you can mark your pull request as ready for review.
      * An engineer from the VSP will aim to review within 24 hours (business days) and each additional round of changes will be reviewed within 24 hours.  If you need it faster, escalate via your DSVA product owner.
      * Please **do not post in Slack** channels requesting code reviews unless it has been more then 24 hours (business days).
    * After sending your code for review, don't add additional changes! Code needs to be stable for a safe review.
    * If non-trivial changes to your code are made *after approval by VSP team*, please notify approvers so they can re-review your pull request.

* **First review**: 
  * Use a [Draft Pull Request](https://help.github.com/en/articles/about-pull-requests#draft-pull-requests)
  * For *all code* tag your PR with your team-specific label(s)
  * Your code should first be reviewed and approved by a member of your team. That first review should cover:
    * **Correctness** of the code (does it correctly implement the described feature?)
    * **Code quality**: is it readable? Is it language-idiomatic?
    * **Does it have screenshots of the change?** (FE changes)

* **Description**: make it clear what the change is describing.
    * **PR title** should be a concise summary of the change.
    * In your **PR description**, discuss how code changes are related to the pull request objectives.
    * Reference the **GitHub issues** your PR relates to, in order to provide reviewers more context.

* **Size/complexity**: keep your changes scoped to one feature at a time. This means:
    * **Size**: changes should be smaller than **300** changed lines (not including tests or whitespace). *If your change can't be smaller than this, talk to the team in #vfs-platform-support before asking for a review.*
    * **One thing at a time**: feature code, cleanup/refactoring changes, dependency/package upgrades, and database migrations should all be in **separate PRs**. As much as possible, each PR should address a single feature or bug at a time.

* **Linting**: format your code in accordance with style guidelines.
    * Run your linter and address any linting related issues before opening your PR.
    * If you programmatically ignore a linting recommendation (e.g. via `rubocop:disable`), please comment in the PR explaining why.
    * If your linter does raise any issues unrelated to the PR's subject matter, please fix these in a separate PR.
