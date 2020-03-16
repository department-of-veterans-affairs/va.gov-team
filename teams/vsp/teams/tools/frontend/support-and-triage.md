# Support and Triage rotation 

## Overview 

Supporting VSA teams requires a cohesive and well-coordinated experience. The frontend tools team assigns responsibility for this work to a VSP front end engineer on a weekly rotation. This document summarizes the responsibilities of this role and how the rotation works. 

## Rotation 

The role will be assigned to a developer for a week, running during our standard support/business hours (Mon - Fri, around 9am - 5pm Eastern but persons residing on the west coast may start as late as noon). During that time, the responsibilities listed below are that developer's primary responsibility. 

The rotation schedule can be found [here](https://dsva.pagerduty.com/schedules#PIDMJAN).

## What do I do?

### Triage requests in the support channels

During the sprint, you should monitor the following Slack groups for issues:
* #vfs-platform-support (individual requests)
* #vfs-frontend (individual requests)
* #vfs-sentry-alerts
* #oncall (general oncall issues and problems)

- **For small issues in the platform**: Fix it yourself
- **For longer platform related solutions**: If the fix requires more than a couple of hours of work, coordinate with the FE Tools Leads (Brandon Rapp, Rian Fowler) to determine if we need to delegate or defer the work
- **For tasks in applications owned by another team**: Create a ticket and delegate it to someone on that team- preferably an engineering lead or a product manager

_Your primary responsibility is to remain available to quickly acknowledge and triage issues in these channels. You can enlist help from the FE tools team if needed to maintain this availability._

## Dependabot upgrades 

As currently configured, on the first of the month Dependabot will open PRs until it has 15 active open PRs. These are lower priority, but should be worked through as time permits. [Dependabot filter](https://github.com/department-of-veterans-affairs/vets-api/pulls/app%2Fdependabot-preview)

## Pull requests 

Ensure that no pull requests have been waiting on the @department-of-veterans-affairs/frontend-review-group more than 24 hours for a response. This includes follow-ups to reviews. When possible, rely on other FE team members to do PR reviews (e.g. ask for a volunteer and assign the PR to them).

## Support requests

Support requests include every interaction you have with a VSF team member. Even trivial interactions should be tracked for oversight and process improvement. 

- Create an issue describing the request in GitHub and link it to the Global Customer Support epic (ask Brandon if you need a link to this epic). 
- Tag the issues with fe-tools, assign it to yourself, and prepend the title of the Ticket with *[Support] -*. 
- Track any work done with comments. 
- Summarize any solutions and failed attempts so the issue can be referred to again in the future if necessary. 
- If other team members are involved, add them to the ticket.

## Sentry errors

Browse [website-production Sentry](http://sentry.vfs.va.gov/vets-gov/website-production/) and monitor the #vfs-sentry-alerts channel.
The #vfs-sentry-alerts channel is configured to receive alerts that meet one of the following criteria:
* First occurence of an issue
* High volume of an error occurring

If there’s a new error, investigate. If there’s an error that you feel you might be able to fix, start a PR and try. If you need some help, ask for it. The goal is to reduce the number of repeated errors over time so the sentry log is only new, “real” issues.

## Documentation

- Update documentation when resolving support requests. Ideally we have documentation we can link to when resolving support requests. 
- The backlog has many issues tagged with _documentation_ that can be addressed. 

## Oncall support

The oncall developer should handle normal oncall tasks, but may need some frontend support. Helping out or finding the right people to help out can make emergent platform issues easier to deal with.

## Process improvement 

At the end of the rotation, there will be a short handoff meeting where we will discuss
- Ongoing support issues that need to be taken over by the next developer in the rotation
- Patterns in support issues that merit process improvement
