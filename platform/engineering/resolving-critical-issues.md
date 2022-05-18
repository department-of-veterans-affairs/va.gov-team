# Resolving critical issues

----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Resolving-critical-issues.1846182121.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

This document describes VSP policy for handling critical issues in main branches, regardless of whether that issue has reached production.

We intend to keep our repositories **always deployable from main branches**. VA.gov does not use release branches; instead, we maintain a focus on keeping the main branches healthy. This means that problematic code in main branches should be resolved as quickly as possible.

## Is my issue critical?

See ["Is my issue critical?"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/deployment-policy.md#is-my-issue-critical) to determine when these guidelines apply.

## Fix forward, or revert?

When an issue in a main branch is discovered, the following decision tree should be used in resolving it:

* Default to reverting the PR that caused the problem.
* *Five minutes*: Can the bug be fixed in a change under five minutes? Go for it. If not, revert the offending PR.
* *One try*: if fixing forward was already attempted and other issues were discovered in the process, revert all involved PRs.

## Requesting a new release

See the [deployment policy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/deployment-policy.md) for process on initiating a new production release from the given main branch.

**Binary rollbacks** (deploying previously-deployed versions) **are not used**, due to risks around database migrations and risks around frontend-backend dependencies. Any exceptions to this rule should **absolutely ensure** that database migrations are not involved in the affected range of commits.

