# Utility Developer Role

The backend tools team can be “interrupted” by unscheduled requests that come in from the support team (often on behalf of a VSA team), leadership, monitoring/ops tooling (Sentry), and other teams and stakeholders at the VA. We want to find some ways to reduce the interruptions for individual team members and clarify who is responsible for handling each request by funneling individual tasks through one person. This person will, handle things that can be handled directly and efficiently and delegate things that cannot. Some specific examples of the kind of requests handled by this developer are:

* Pull requests for review from VSA teams
* Requests for assistance from the support team
* Support requests in the VSA/VSF support channel (#vfs-platform-support)
* Reviewing sentry errors
* Supporting oncall develeoper
* Any internal VSP team PRs
* Small, non-critical issues that can be easily stopped/started

There is no intention to permanently assign this role to a single person -- this is a shared responsibility assigned to the entire team much like handling oncall responsibilities -- and each developer on the team will take a turn on a rotating basis.

## What’s the time commitment (Answer: the entire sprint)

This task is part of several ongoing sprint goals:

* Triage https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2297
* Incident Response https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/1954
* Global Customer Support https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/3675

Each developer will get assigned a sprint and will only be responsible for the objectives related to this ongoing responsibility for that sprint. Since this covers *three* ongoing SuperEpics, we’re assigning it like we’d assign any other sprint deliverable.

The utility developer assignment schedule is on PagerDuty: https://dsva.pagerduty.com/schedules#PPGUD8L

The role will be assigned to a developer for an entire sprint, running during our standard support/business hours (Mon - Fri, ~9am - 5pm Eastern) starting on Wed at 11am on the first day of the sprint and handing off to the next developer two weeks later when the next sprint begins.


## What do I do?

This developer, much like oncall, DOES NOT HAVE TO DO EVERYTHING but _does_ have to be the first point of contact. They will not have any other critical tasks while they are handling these three tasks.

### At the beginning of the sprint

* add yourself to the #vfs-backend-utility-dev group
* make sure you are assigned to each of those three Super Epics listed above
* unmute #vfs-sentry-alerts, #oncall, and #vfs-platform-support Slack channels if they're muted
* add yourself as the backend developer on support to the #vfs-platform-support channl

### During the sprint, you should monitor the following Slack groups for issues:

* #vfs-platform-support (individual requests from VSF team members)
* #vfs-backend-utility-dev (automated feed of GitHub PRs and commits)
* #vfs-sentry-alerts
* #oncall (general oncall issues and problems)

As issues come in, the main job is to acknowledge the incoming request, decide on the best person to handle it, and followup to make sure the request is completed in a timely manner. It is *100%* ok to assign the request, whatever it is, to someone more suited to the task but the first point of contact should be the utility developer. 

Unless its an emergency, waiting until standup to discuss assignments for requests will help keep interruptions to a minimum for everyone.

### Pull Requests

The #vfs-backend-utility-dev channel can be used to track new and resubmitted PRs, as can the GitHub filters in the channel description. We try to have a 24h turnaround, so getting to them quickly is important, especially for small/simple/easy PRs.

There are several GitHub filters you can use, all of which are pinned in the #vfs-backend-utility-dev channel. These include filters for first-time reviews for vets-api and GIDS as well as second reviews for vets-api PRs.

Once you have started to review a PR, *please track it by additing it to the Code Review Epic for the sprint*.

As currently configured, on the first of the month Dependabot will open PRs until it has 15 active open PRs. These are lower priority, but should be worked through as time permits. [Dependabot filter](https://github.com/department-of-veterans-affairs/vets-api/pulls/app%2Fdependabot-preview)

### Support requests

Create an issue describing the request in GitHub and link it to one of the three super-epics. Assign it to yourself. Track any work done with comments. Summarize both failed attempts and final solutions so the issue can be referred to again in the future if necessary. If other team members are involved, add them to the ticket.

### Sentry errors

Browse [Sentry](http://sentry.vfs.va.gov/vets-gov/platform-api-production/) and monitor the #vfs-sentry-alerts channel.

The #vfs-sentry-alerts channel is configured to receive alerts that meet one of the following criteria:
* First occurence of an issue
* High volume of an error occurring

If there’s a new error, investigate. If there’s an error that you feel you might be able to fix, start a PR and try. If you need some help, ask for it. The goal is to reduce the number of repeated errors over time so the sentry log is only new, “real” issues.

### Everything else

The oncall developer should handle normal oncall tasks, but may need some backend support. Helping out or finding the right people to help out can make emergent platform issues easier to deal with.

If there’s *literally* nothing else to do, here are a few more ideas:

* Refactor a spec
* Pair with another developer to help move their issue forward
* Dig into an area of the code you are unfamiliar with

### At the end of the sprint

* unassign yourself from the three Super Epics
* remove yourself from the #vfs-backend-utility-dev Slack channel
* ensure that all of the PRs you reviewed are assigned to the Code Review Sprint XX ticket for your sprint

## Ongoing review

At the end of each sprint, we’ll work to generate a report and figure out between the PM, tech lead, and both current and next utility developer how to adjust the process to continue to make things as smooth and easy as possible for the entire team while also providing excellent support to each other and the VSA teams.
