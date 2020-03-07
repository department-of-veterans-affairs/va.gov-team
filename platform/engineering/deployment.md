# Deployment Process

Code goes through several steps to get to production. This document describes this process. It should also be noted that this is the same flow for both content and code changes.


<hr>

* [Automated Deployment Schedule](#automated-deployment-schedule)
* [Summary](#summary)
* [Process Details](#process-details)
* [Other Notes](#other-notes)
* [Deployment Rollbacks](#deployment-rollbacks)
* [Problems/Concerns](#problems--concerns)

<hr>

## Automated Deployment Schedule

| Application | Branch | Changes in by | Deployment Start | Release History |
| --- | --- | --- | --- | --- |
| vets-website | master | 2:00pm ET M-F | 3:00pm ET M-F| https://github.com/department-of-veterans-affairs/vets-website/releases |
| vets-api | master | 2:00pm ET M-F | 3:00pm ET M-F | https://github.com/department-of-veterans-affairs/vets-api/releases |

## Summary

For feature and hotfix development (code changes and content changes), the process looks like:

1. Dev/Content: Create feature branch from `master` branch
1. Dev/Content: Commit changes to feature branch
1. Dev/Content: Feature branch merged to the `master` branch (via Pull Request)
1. Automatic: Build run from `master` branch to create an artifact
1. Automatic: Deploy newly created artifact to dev and staging
1. Automatic: Create a release in GitHub from master, tag artifacts of that commit sha with release name
1. Automatic: Deploy to production using artifacts

## Process Details

The first half of the steps of are:

> 1\. Dev: Create feature branch from `master` branch

> 2\. Dev: Commit changes to feature branch

> 3\. Dev: Feature branch merged to the `master` branch (via Pull Request)

> 4\. Automatic: Build run from `master` branch to create an artifact

> 5\. Automatic: Deploy newly created artifact to dev and staging

During the pull request phase (step 3), the following things happen:

- Code is reviewed
- GitHub triggers Jenkins to run unit tests, linting, and security scans.
  * TODO - List here the tests that run, e.g., Accessibility/508 Compliance, etc
- Committing and code reviewing developers are responsible for running automated **_and_** manual integration tests locally before closing the pull request

All Vets.gov GitHub repos are setup to do squash merges (via the GitHub PR interface), leaving behind a clean revision history that is feature based.

A big assumption in this process is that the `master` should always be deployable. As such, the deployment to the staging environment is configured to happen automatically and can be used to see what something would look like in a production-like environment for any kind of manual testing/verification.

Because `master` is designed to always be deployable, long running features that should _not_ be deployed should utilize feature flags in the code that disable the feature for the actual production environment. Notifying the DevOps team on what feature flags should be enabled/disabled in staging and production environment is an important part of this process. However, it's likely that breakages in staging will occur and that this is necessary to discover these prior to moving anything to the production steps.

Speaking of production steps, things kick off with the daily production push

> 6\. Create a release in GitHub from master, tag artifacts of that commit sha with release name

Every work day at the configured time a Jenkins automerge job sends a link to the #vetsgov-engineers Slack channel with a diff between the last release and the most recent changes in `master`. This commit reference is stored to ensure the diff and released version is deterministic.

After a time has elapsed ( currently set to 60m ) release is created at the reference from above.

> 7\. Automated: Deploy to production using artifacts

From here, Jenkins can kickoff a production deployment. After the deployment occurs, the normal site monitoring infrastructure will be used to valide it is working. As this process is automatic any new features should have monitoring in place before, or as a part of their deployment

## Other Notes

- The code that appears in the `master` branch _actually_ gets deployed to both dev and staging environments. This is done to support different configurations for the DevOps team as they work to support any configuration changes (i.e. in dev first).

## Deployment Rollbacks

If a production deployment introduces issues that affect Service Level Objectives (SLOs) established for the project, the DevOps team may restore service to users by rolling back the deployment. This is accomplished by triggering a new deploy job in Jenkins using a previous release tag.

The use of hotfixes is discouraged, but may be useful in an emergency situation when `master` has significantly deviated from the release and a fix to the failed production release is critical. To create a hotfix, create a branch from the last stable release tag, make changes necessary (with review), create a new release tag following the correct naming scheme, and trigger a deploy in Jenkins with the release name as a parameter.

If SLOs are not affected and a fix is not critical, no rollback will be issued. Instead the fix should be applied through the standard development workflow.

## Problems / Concerns

The creation of this deployment process was triggered and influenced by the following problems (expected or currently experienced) and feedback (based on previous drafts). Not a mandatory read, but explanations for how each is addressed is documented below:

### Complexity of branching strategy

This concern hovers around two things:

- Will people be able to do it without much learning or frequent git mistakes?
- Is our approach an industry standard such that it has a low learning curve?

The process originally followed most closely aligned with [GitHub Flow](https://guides.github.com/introduction/flow/), but this process proved to be overly simple for multiple projects being committed to our `vets-website` and `vets-api` repositories.

Other popular flows such as [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) and [GitLab Flow](https://about.gitlab.com/2014/09/29/gitlab-flow/) were suggested, but have the opposite problem. While being industry standards (like GitHub Flow), they tend to be more complex than our team's needs demand. They are complex enough that they require expert Git knowledge, merging mistakes are commonly made by teams that use them, and they require more active management to maintain clean merge trees. Git Flow and Git Lab do some things really well though: clear guidance on what is being developed and what is in which environment.

While it's not ideal to create our own strategy, none of the strategies seemed to fit the bill with priority being on simplicity. Instead this one was written and does the following things to meet its goals:

- Stays very close to GitHub Flow, the simplest of the industry standards and the easiest to learn/manage
- Uses Git Flow's emphasis on `master` always being deployable, which eases deployment and rollback
- Just seven repeatable steps for any kind of development (feature or hotfix)
- Integrates our team's people work flow (i.e. interactions between development and DevOps teams)

During a quick unscientific survey of the team, most had experience with GitHub Flow, while only a few folks had worked with Git Flow or GitLab Flow in practice (esp. GitLab Flow). Most folks had heard of Git Flow, but only a small subset had used it explicitly. By keeping the chosen flow close to GitHub Flow (and close what the team has been doing), meant this likely has the least cognitive overhead.


### Confusion about what has to happen during code reviews / pull requests

Unfortunately, it's hard to codify this outside of running some things automatically such as the tests and scanners. However, it's really important that teams give each other clear feedback and code reviews are the single most important quality gate for the code.

### Lack of clear process for getting code changes from development to production

Before, we didn't have anything written down that described how things went to production. This process is different from the other Git* Flows in that it says _who_ performs each step. This means that teams know exactly who to involve and who to delegate responsibility to for each part of getting things to go live.

### Different flows between features and hotfixes

This is one of the weaknesses with Git Flow, which requires additional management. We've simplified this by creating a process that is the same for both features and hotfixes. It's expected that things will go to production at least weekly, meaning that there shouldn't be any feature or hotfix branches to manage for long periods of time.

<hr>

Next: [Vets Website Introduction](frontend/vets-website/README.md)
