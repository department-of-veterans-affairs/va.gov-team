# Platform code review guidelines

This document covers rules for engaging the VSP team in [pull request reviews](https://help.github.com/en/articles/about-pull-request-reviews). These guidelines are intended to:

* Help maintain the code quality and stability of the platform itself
* Enable VSP team to quickly review changes for VFS teams

Before sending your code to a VSP team for review, your code should meet all of the guidelines below.

*Hint*: smaller, more frequent pull requests will make this easier for everyone!

## General guidelines

* **Review lifecycle**
    * Before sending code to VSP team have it reviewed by your team (see **First review** below) using a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/).  
      * This prevents [code owners](https://help.github.com/en/articles/about-code-owners) from being notified before pull request is ready for review.
    * After having your pull request reviewed by your team you can click the *Ready for review* button in the merge section of your pull request.
      * An engineer from the VSP team will aim to review within 24 hours (not including weekends and holidays) after the pull request has been reviewed by your team and you have been marked it *Ready for review*. Each additional round of changes will be reviewed within 24 hours.  If you need a review faster, escalate via your DSVA product owner.
      * **Do not post in Slack channels requesting VSP code reviews** unless it has been more than 24 hours since requesting review on GitHub.
    * After sending your code for review, don't add additional changes! Code needs to be stable for a safe review.
    * If non-trivial changes to your code are made *after approval by VSP team* and submitted without a re-review, your change is subject to being reverted.

* **First review**: 
  * Use a [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/)
  * Tag your PR with your team-specific label(s)
  * For this first review, your code should be reviewed and approved by a member of your team. 
  * First review should cover:
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
    
## Frontend guidelines (vets-website)

### Responsibilities 

- overall stability of `vets-website`
- site performance 
- enforcing test coverage 
- enforcing linting rules

### Examples of responsibilities 

- ensuring that external teams are using the design.va.gov system when possible (i.e. not creating unnecessary CSS)
- ensuring changes to common helpers in the `platform/` and `site/` won't impact other apps teams 

### Examples of things that should not block approval

These are things you can optionally look at but aren't required to enforce outside of `platform/` and `site/`. Generally we offer recommendations but don't block merging for these these kinds of issues. 

- code style / general js usage 
  - uses a for loop instead of a `.map` 
  - uses conditionals in a loop instead of `.filter` 
- consistency 
  - ensuring the general approach to GIBCT is maintained- even if it's not ideal, it is internally consistent 
- the change works as intended 
  - generally we rely on the app teams' peer review / QA to validate this 

### Notes

- Use your best judgement. We aren't responsible for the long term maintainability of app code but we should endeavor to make it easy to write good, clear code
