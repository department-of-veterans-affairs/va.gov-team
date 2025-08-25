# Guidelines for reviewing code

## Background

This doc provides guidelines for VSP engineers doing code reviews for VFS teams: how they should do them, and what emphasis we want to put in those guidelines.

The [guidelines for VFS teams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md) are public; this doc is a VSP-team corollary to that one.


## Frontend review guidelines (vets-website)

These guidelines are for VSP engineers reviewing code in the `vets-website` repository.

### Responsibilities 

*   overall stability of `vets-website`
*   site performance 
*   enforcing test coverage 
*   enforcing linting rules

### Examples of responsibilities 

*   ensuring that external teams are using the VA Design System when possible (i.e. not creating unnecessary CSS)
*   ensuring changes to common helpers in the `platform/` and `site/` won't impact other apps teams 
*   `/platform/site-wide` and `**/*.drupal.liquid` templates are in the shared folders but are generally maintained by the Global UX / CMS teams 

### Examples of things that should block approval

*   The pull request is too large (i.e. more than 300 lines)
*   The changes excessively circumvent rules enforced by CI (e.g. disabling linting, writing unit tests that obviously don’t test anything) 
    *   _Note: there are legitimate reasons to disable linting rules, but use your best judgement. Generally if it’s not a rule that’s been skipped somewhere else in the repo, it’s probably not something we should approve. _
*   The changes impact shared components / helpers but the PR does not document adequate regression testing was performed
    *   Changes to /platform or /site folders (especially to the forms system) should be made by or closely supervised by the Tools and Improvements team 
*   Looping / control structures that obviously could result in unresponsive UIs (e.g. using a `do-while` loop that mutates its terminating condition)
*   Adding excessive or large static assets to the repo
    *   We don’t have any image optimization / compression in the build process
*   Adding files that should be somewhere else (e.g. HTML files should be in the Drupal CMS or the `vagov-content` repo) 

### Examples of things that should not block approval

These are things you can optionally look at, but aren't required to enforce outside of `platform/` and `site/`. We generally offer recommendations, but don't block merging, for these kinds of issues:

*   Poor code style / non-idiomatic JS usage 
    *   _i.e. using a `for` loop instead of a `.map` _
    *   _i.e. using conditionals in a loop instead of `.filter` _
*   Inconsistency with our own style (for other repositories)
    *   _i.e. it's OK to ensure the general style of GIBCT is maintained within that codebase, even if that style doesn’t match our other repositories._
*   The change doesn’t work as intended 
    *   _Generally we rely on the app teams' peer review / QA to validate this _

### Final words

Use your best judgement.

We aren't responsible for the long term maintainability of app code, but we should endeavor to make it easy to write good, clear code.


## Time-boxing

**Each VSP engineer should spend no more than one hour/day performing PR reviews.**

Ideally, this should be a time-boxed activity so that reviews aren’t substantially interfering with other sprint objectives.

### Goals

*   PRs sent to the VSP team are completed in the expected time windows (see [code review guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md) for VFS teams)
    *   _Once you are ready for the VSP team to review your PR, use the GitHub Ready for review button in the merge section of your pull request. An engineer should review the code within one business day._
*   Engineers on the team are able to manage their own time effectively, with PR reviews not crowding out other sprint work
*   PRs are reasonably load-balanced across the VSP team. “Hero engineers” doing a bulk of the PR reviews are a _negative_ indicator toward this goal.
*   PRs that require multiple rounds of review are (as much as possible) handled by the same reviewer, to allow for continued context.

### Suggestions for implementation

*   Each engineer should select a standing time each day in their schedule, setting aside an hour to do PR reviews.
    *   If over time, aim to finish up reviews as quickly as possible to be able to prioritize other work.
    *   If needed, hand off to other reviewers for support on larger reviews.
*   When prioritizing PR reviews to do:
    *   Start by continuing reviews for any in-flight PRs that need a follow-up round of review. _Continued context will make the review process better for everyone!_
    *   Select from remaining PRs that no other engineer has started on yet. 
    *   Prioritize choosing PRs that have been waiting for review the longest, to ensure we’re honoring our “SLA” for review turnaround time.
   
