# Flag for manual review process

**Author(s):** Brooks Johnson (brooks@adhoc.team)
**Last Updated:** February 20, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Rian Fowler_ \[ \], _Andrew Gunsch_ \[ \], ...  



## Overview

### Objective

The goal is to improve our review process which by adding automated processes which will alert a review team when a manual review is required.
These changes are meant to work alongside the Codeowners changes which will give each app team primary responsibility for reviewing their code.

Non-goals: Creating automation which will absolve VFS teams of their review responsibility.

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

### High Level Design

The plan is to use a CI process to run a script each time a change gets pushed to a PR.
This script will look for anything that should trigger a manual review by the VSP review group, and alert them if it finds something.

## Specifics

### Detailed Design

We will use a script that can be run from a job in CircleCI.
The script will:

- Diff the current PR branch against master
- Make a pass which will mark any additions with the filename and position in the diff
- Search the processed diff for occurrences of anything that should warrant a manual review
- Remove any items from the list of offense additions that have already been commented on by the review bot
- If there are any offenses which haven't been commented on, leave a comment and request a review from the *frontend-review-group*

This will rely on the Github API as well as some environment variables provided by Circle CI.

### Code Location

- `script/pr-check.js`
- `.circleci/config.yml`

### Testing Plan
I will run the script locally in addition to having Circle run it.

### Logging
The script will log to the console:
- Whether or not the branch ir is running on has an associated PR
- If there are no offenses that would warrant a comment
- Any previous comments made that do not need to be made again
- Any new comments that will be made

### Debugging

If a user sets up the proper environment variables locally, the script can be run in a local environment and the logging output can be viewed.  Otherwise we will rely on viewing CircleCI logs.

### Caveats

_To be determined._

### Security Concerns

We should make sure that the Github bot auth token is kept secure and it should not be associated with an individual's account.  The sole communicators in the system are CircleCI and Github.  This isn't really a security concern, but more of a reliability one: if one of those services goes down we do not have a fallback plan.

### Privacy Concerns

None.  This will be static code analysis of a public repo.  No user data will be involved.

### Open Questions and Risks

With this planned implementation we don't have a way of forcing a VFS team to wait for a manual review - all we do is _ask_ them to wait.  It's possible that some teams won't respect this request and will merge a PR that has code that requries a manual review.

It is difficult to estimate the liklihood of this risk.  These changes will be communicated to the teams, and if they disregard the process then we will be forced to implement stricter rules.  Here are some possible actions we could take, either by themselves or in combination:

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
