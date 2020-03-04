# Flag for manual review process

**Author(s):** Brooks Johnson (brooks@adhoc.team)
**Last Updated:** February 20, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Rian Fowler_ \[ \], _Andrew Gunsch_ \[ \], ...  



## Overview

### Objective

The goal is to improve our review process which by adding automated processes which will alert a review team when a manual review is required.
These changes are meant to work alongside the Codeowners changes which will give each app team primary responsibility for reviewing their code.


Intended audience: VSP team

### Background

From the perspective of a VFS engineer, the current review process involves:

1. Creating a Draft PR with appropriate changes
1. Getting a peer review
    - Making any changes until the review is approving
1. Marking the PR as `Ready for Review`
1. Getting approval from a member of the VSP *frontend-review-group*

The final approval from the review group is often not helpful, and it slows the process down.
This frustration often leads to VFS teams ignoring this process and they will directly ask for a VSP review before their PR is ready.

These problems have led to an effort to shift some review responsibility away from the frontend-review-group by implementing [code owners changes](./codeowners.md).

### High Level Design

The plan is to use a CI process to run a script each time a change gets pushed to a PR.
This script will look for anything that should trigger a manual review by the VSP review group, and alert them if it finds something.

## Specifics

### Detailed Design

We will use a nodeJS script that can be run from a job in CircleCI.
Any Github API calls will be made through the [Octokit](https://octokit.github.io/rest.js) package which uses a RESTful API.

The script will:

- Diff the current PR branch against master
  - `octokit.pulls.get(...)` will be used with a [custom media type](https://developer.github.com/v3/pulls/#custom-media-types) format of `diff`
- Loop through the diff output and mark any additions with the filename and position in the diff
- Search the processed diff for occurrences of anything that should warrant a manual review
  - This can be done with a regular expression
- Remove any items from the list of offense additions that have already been commented on by the review bot
  - This is a two step process:
    - Use `octokit.paginate()` to get a list of all comments on a PR and filter out comments that are outdated or weren't made by the bot
    - Filter out any additions from the processed & filtered diff if there is already a current bot comment on it
- If there are any offenses which haven't been commented on, leave a comment and request a review from the *frontend-review-group*
  - Use `octokit.pulls.createReviewRequest()` to request a review from the frontent-review-group
  - Use `octokit.pulls.createReview()` to leave a bot review with a comment on any addition that matched the pattern which hasn't been commented on

Various environment variables will be used in order to allow the script to be easily configurable from CircleCI - see [Debugging](#debugging) for more information.

### Code Location

This code will live in the [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website) in the following directories:

- `script/pr-check.js`
  - The script responsible for performing the automated checks & leaving comments
- `.circleci/config.yml`
  - Responsible for adding jobs and assigning appropriate environment variables

### Testing Plan

There are no automated tests planned for the initial release - all testing will be manual.
Once this process is released and teams provide feedback we will iterate and add unit tests.
The script will be written in a way that should make it easier to test.

### Logging
The script will log to the console:
- Whether or not the branch it is running on has an associated PR
- If there are no offenses that would warrant a comment
- Any previous comments made that do not need to be made again
- Any new comments that will be made

### Debugging

If a user sets up the [proper environment variables](./manual-review-triggers.md#required-environment-variables) locally, the script can be run in a local environment and the logging output can be viewed.  Otherwise we will rely on viewing CircleCI logs.

### Caveats

This current implementation will only be able to identify potential issues if they occur on a single line.
No other context is included.

### Security Concerns

We should make sure that the Github bot auth token is kept secure and it should not be associated with an individual's account.
The current strategy for storing this token is as an [environment variable in CircleCI](https://ui.circleci.com/settings/project/github/department-of-veterans-affairs/vets-website/environment-variables) called `GITHUB_TOKEN`.
If it has to be reset for any reason it should be either updated directly in CircleCI or transmitted securely using keybase or 1Password to someone who has permission to update the environment variable.

The sole communicators in the system are CircleCI and Github.  This isn't really a security concern, but more of a reliability one: if one of those services goes down we do not have a fallback plan.

### Privacy Concerns

None.  This will be static code analysis of a public repo.  No user data will be involved.

### Open Questions and Risks

With this planned implementation we don't have a way of forcing a VFS team to wait for a manual review - all we do is _ask_ them to wait.  It's possible that some teams won't respect this request and will merge a PR that has code that requries a manual review.

It is difficult to estimate the liklihood of this risk.  In order to discover when VFS teams are ignoring the manual review requests, we can perform [a Github Search](https://github.com/department-of-veterans-affairs/vets-website/pulls?q=is%3Apr+commenter%3Ava-vfs-bot+is%3Amerged+) with some special parameters:

> `is:pr commenter:va-vfs-bot is:merged`

This will show us any merged PRs that the `va-vfs-bot` has commented on, and from there we can look at each PR to see if a review was left by the frontend-review-group before it was merged.
To help with the search we can also add a date parameter if we only want to look at PRs merged after a certain date:

> `merged:>=YYYY-MM-DD`

If we discover that teams are disregarding the manual review requests then we will implement stricter rules.
Here are some possible actions we could take, either by themselves or in combination:

- Have the bot leave a review that "requests changes" rather than a simple comment.
- If the script leaves a comment for manual review, have the process exit with a failing status and make it block the build.
    - This could be implemented using a [required status check](https://help.github.com/en/github/administering-a-repository/about-required-status-checks) in GitHub
- Implement a workflow requiring manual approval](https://circleci.com/docs/2.0/workflows/#holding-a-workflow-for-a-manual-approval) in CircleCI

There was some discussion around these ideas in [a Slack thread](https://dsva.slack.com/archives/CQH357ZTP/p1582144303027700)

### Work Estimates
This first iteration can be done in less than a sprint

### Alternatives

During an early discovery phase we considered using Github Actions as our CI tool to run the script, but due to an 
organization-wide shift from Jenkins to Circle CI we decided to switch to Circle as well.

### Future Work

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Feb 20, 2020 | Initial Draft | Brooks Johnson
