# Support and Triage rotation (Frontend support dev)

----

# We're moving our docs! 
### Find [the latest version of this page](https://vfs.atlassian.net/wiki/spaces/FTT/pages/1872592907/Support+and+Triage+Rotation) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

## Overview 

Supporting VFS teams requires a cohesive and well-coordinated experience. The frontend tools team assigns responsibility for this work to a VSP frontend engineer (frontend support dev) on a weekly rotation. This document summarizes the responsibilities of this role and how the rotation works. 

## Rotation 

The role will be assigned to a developer for a week, switching on Wednesdays and running during our standard support/business hours (Mon - Fri, around noon - 5pm Eastern). During that time, the responsibilities listed below are that developer's primary responsibility. 

If you are on support, the on call developer may need to reach out, please make sure pagerDuty notifications are turned on and is up to date with your mobile number.

The rotation schedule can be found [here](https://dsva.pagerduty.com/schedules#PIDMJAN).

## What do I do?

### Triage requests in the support channels

During the sprint, you should monitor the following Slack groups for issues:
* [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) (individual requests)
* [#vfs-frontend](https://dsva.slack.com/channels/vfs-frontend) (individual requests)

- **For small issues in the platform**: Fix it yourself
- **For longer platform related solutions**: If the fix requires more than a couple of hours of work, coordinate with the FE Tools Leads (Megan Kelley, Tim Wright) to determine if we need to delegate or defer the work
- **For tasks in applications owned by another team**: Create a ticket and delegate it to someone on that team- preferably an engineering lead or a product manager

_Your primary responsibility is to remain available to quickly acknowledge and triage issues in these channels. You can enlist help from the FE tools team if needed to maintain this availability._

### Monitor deployment

See [this](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/frontend/troubleshooting-build-failures.md) document about monitoring and troubleshooting deployments

### Support requests

Support requests include every interaction you have with a VSF team member. Even trivial interactions should be tracked for oversight and process improvement. 

- Create an issue describing the request in GitHub 
- Tag the issues with fe-tools, assign it to yourself, and prepend the title of the Ticket with *[Support] -*. 
- Track any work done with comments. 
- Summarize any solutions and failed attempts so the issue can be referred to again in the future if necessary. 
- If other team members are involved, add them to the ticket.

### Pull requests 

Ensure that no pull requests have been waiting on the @department-of-veterans-affairs/platform-release-tools more than 24 hours for a response. This includes follow-ups to reviews. 

### Oncall support

The oncall developer may reach out to the frontend support dev to assist with troubleshooting frontend related issues.

## Optional tasks

### Sentry errors

Production website Sentry errors should be reviewed at least once a rotation and up to weekdaily as time permits. 

Browse [website-production Sentry](http://sentry.vfs.va.gov/organizations/vsp/events/?environment=production) and monitor the [#vfs-sentry-alerts](https://dsva.slack.com/channels/vfs-sentry-alerts) channel.
The [#vfs-sentry-alerts](https://dsva.slack.com/channels/vfs-sentry-alerts) channel is configured to receive alerts that meet one of the following criteria:
* First occurrence of an issue
* High volume of an error occurring

If there’s a new error, investigate. If there’s an error that you feel you might be able to fix, start a PR and try. If you need some help, ask for it. The goal is to reduce the number of repeated errors over time so the sentry log is only new, “real” issues.

### Documentation

- Update documentation when resolving support requests. Ideally we have documentation we can link to when resolving support requests. 
- The backlog has many issues tagged with _documentation_ that can be addressed. 
