# Utility Developer Role

[VSP Product Support](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsp/teams/product-dev-support) recieves support requests from VFS teams, VSP leadership, and VA stakeholders. These requests often require direct support from the Backend Tools team. The specific support requirements vary, and can lead to unscheduled context switching for the engineers who are involved.

In an effort to reduce interruptions for the team at large and clarify triage responsibilities, the Backend Tools team will designate a single member of the team each sprint to act as the **Utility Developer**.

The assignment schedule is available on [PagerDuty](https://dsva.pagerduty.com/schedules#PPGUD8L). :link:

This is a shared responsibility assigned to the entire team, much like handling on-call responsibilities -- and each developer on the team will take a turn in the rotation.

This role and associated tasks are part of several ongoing multi-sprint goals:

* [Triage](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2297)
* [Incident Response](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/1954)
* [Global Customer Support](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/3675)

##### Monitored Support Channels

* [#vfs-platform-support] - individual support requests from VFS team members
* [#vfs-sentry-alerts] - Alerts for high-volume or unique "first-seen" errors caught by [Sentry]
* [#oncall] - Alerts for VSP on-call level issues
* [#vsp-backend-utility-dev] - Automatic feed of GitHub pull request and commit activity

Some specific examples of the kind of requests handled by this developer are:

* Pull requests for review from VSA teams
* Requests for general assistance in the [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) channel
* On-call developer support requests
* Any internal VSP team PRs
* Review Sentry errors
* Small, non-critical issues that can be easily stopped/started

## Responsibilities

As issues come in, the main job is to:

1. acknowledge the incoming request
1. decide on the best person to handle the request
1. follow up to make sure the request is completed in a timely manner.

It is *100%* acceptable to delegate the request, whatever it is, to someone more suited to the task - but the first point of contact should be the utility developer. Unless it's an emergency, waiting until standup to discuss assignments for requests helps to minimize interruptions for everyone.

---

**The utility developer will...**

* be assigned to a developer for an entire sprint
* be generally available during our standard support/business hours: **M-F 9:00a - 5:00p ET**  :clock5: (adjustable based on time zone)

### At the beginning of the sprint

**The utility developer will...**

* join the [#vsp-backend-utility-dev] Slack channel
* make sure they are assigned to both of the support [Super Epics]
* unmute [#vfs-sentry-alerts], [#oncall], and [#vfs-platform-support] Slack channels (if they're muted)
* update the [#vfs-platform-support] channel topic with their name
* attend a hand-off meeting which occurs at 1:00p ET on the planning day (Wednesday) before a new sprint
* use this time to align with the Backend Tools in standup
* use this time to communicate any major ongoing issues

### Throughout the sprint

**The utility developer will...**

* be the first point of contact for support issues
* resolve support requests that can be resolved directly and efficiently
* delegate support requests appropriately if not directly addressable
* **_not_** be responsible for resolving every issue directly
* **_not_** have any other critical task assignments while they are in the role.

### At the end of the sprint

**The utility developer will...**

* unassign theirself from the [Super Epics]
* add the utility developer who is rotating on to the [#vsp-backend-utility-dev] Slack channel
* remove theirself from the [#vsp-backend-utility-dev] Slack channel
* ensure that all of the PRs reviewed are linked to the [Code Review][Super Epics] ticket for the sprint
* ensure that any resolved [support issues](https://github.com/department-of-veterans-affairs/vsp-support/issues?q=is%3Aopen+is%3Aissue) created via support bot are closed


## Priorities

### Reviewing Pull Requests

VFS teams rely on the VSP Backend Tools team to review and approve pull requests to `vets-api` and `gibct-data-service`. The [#vsp-backend-utility-dev] channel can be used to track new and resubmitted Pull Requests.

Several GitHub filters exist to quickly identify pull requests needing review.

- [first reviews for `vets-api`](https://github.com/department-of-veterans-affairs/vets-api/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+draft%3Afalse+-label%3AVSP+-label%3ALighthouse+review%3Arequired)
- [first reviews for `GIDS`](https://github.com/department-of-veterans-affairs/gibct-data-service/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aopen+draft%3Afalse+review%3Anone+sort%3Aupdated-desc+)
- [subsequent reviews for `vets-api`](https://github.com/department-of-veterans-affairs/vets-api/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+label%3A%22Please+Review%22+-label%3Adependencies+-label%3ALighthouse+-label%3AVSP)
- [VSP team reviews](https://github.com/department-of-veterans-affairs/vets-api/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+draft%3Afalse+label%3AVSP)

For quick reference these are also pinned in the [#vsp-backend-utility-dev] channel.

- add pull request to the [Code Review Epic][Super Epics] for the current sprint

#### GIDS/BAH PR Reviews

The GIDS/BAH team needs a bit more autonomy, and so their PR review process differs from the [standard process](../../../../../../platform/engineering/code_review_guidelines.md) as follows:

- VSP review for major problems with syntax or rubyisms.
- VSP review changes to `db/migrate/*`.
- VSP review changes to `Gemfile`.
- VSP review changes to `spec/factories`.
- VSP will not request large PRs (> 250 SLoC) be broken up, and GIDS will not expect VSP to perform thorough review of large PRs.
- VSP do not critique code organization.
- VSP do not review SQL strings for safety. GIDS are solely responsible for the safety and security of their SQL code.
- VSP do not perform security reviews. GIDS are solely responsible for the security of their code.

#### Overriding Jumbo Pull Requests

When a pull request is large enough, the `Danger-bot` status check will fail. 

![image](https://user-images.githubusercontent.com/3077884/90051737-257f4100-dca6-11ea-9e7a-dd0cb6b1c178.png)

When the pull request is not cognitively complex and cannot be easily broken up into smaller pull requests, it is appropriate to override this status check. 

**Prerequisites**

1. Ensure you are a repo admin

![image](https://user-images.githubusercontent.com/3077884/90051558-da652e00-dca5-11ea-88f5-75d39d0453c7.png)

**Steps**

1. Navigate to `master` branch protection rules

![image](https://user-images.githubusercontent.com/3077884/90052019-9161a980-dca6-11ea-87c4-2000aab5ca13.png)

2. Disable `danger/danger` status check - :warning: This is global! Be sure to put it back after the desired PR is merged! :warning:

![image](https://user-images.githubusercontent.com/3077884/90052234-d84f9f00-dca6-11ea-87cd-dffb10c73051.png)

3. You should now be able to merge the pull request despite the failing status check
4. **Re-enable status check!**

#### VSP Pull Requests

As currently configured, on the first of the month Dependabot will open PRs until it has 15 active open PRs. These are lower priority, but should be worked through as time permits. See open Dependabot PRs with [this filter](https://github.com/department-of-veterans-affairs/vets-api/pulls/app%2Fdependabot-preview).

### Support requests

Track support requests in [this spreadsheet](https://docs.google.com/spreadsheets/d/1BmFJKmkJsgXaj_kebn16veLVJ5H52wlCjmbpS5JdXKo/edit#gid=1793382735). Track any work done or issues created with comments. Summarize both failed attempts and final solutions so the issue can be referred to again in the future if necessary. If other team members are involved, add them to the ticket.

### Sentry errors

If there’s a new error, investigate. If there’s an error that you feel you might be able to fix, start a PR and try. If you need some help, ask for it. The goal is to reduce the number of repeated errors over time so the sentry log is only new, “real” issues.

The [#vfs-sentry-alerts] channel is configured to receive alerts when one of the following criteria are met:

* First occurence of an error
* High volumes of an error occurring

- Browse [Sentry](http://sentry.vfs.va.gov/vets-gov/platform-api-production/) and monitor the [#vfs-sentry-alerts] channel.


### Everything else

The on-call developer typically handles on-call tasks but occasinally they may need some backend support.

Helping out or finding the right people to help out can make emergent platform issues easier to deal with.

If there’s *literally* nothing else to do, here are a few more ideas:

* Upgrade one of the gems from our Gemfile (`bundle outdated --only-explicit`)
* Refactor a spec
* Increase code coverage in a file that is only partially covered
* Pair with another developer to help move their issue forward
* Dig into an area of the code you are unfamiliar with

## Ongoing review

At the end of each sprint, we’ll conduct a retrospective between the product manager, tech lead, and the utility developer(s), with the goal of generating a report on how to adjust the Utility Developer process to improve the efficiency of supporting VFS teams.


[#vfs-platform-support]: https://dsva.slack.com/archives/CBU0KDSB1
[#oncall]: https://dsva.slack.com/archives/C30LCU8S3
[#vfs-sentry-alerts]: https://dsva.slack.com/archives/CJTDG22NM
[#vsp-backend-utility-dev]: https://dsva.slack.com/archives/GRN7R3R44
[Super Epics]: https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/board?labels=tools-be&repos=133843125
[Sentry]: http://sentry.vfs.va.gov/
