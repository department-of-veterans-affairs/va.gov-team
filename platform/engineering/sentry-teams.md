# Sentry Configurations -- How to for VFS teams

VFS and VSP engineers utilize Sentry as a tool to track errors related to va.gov applications. Sentry allows teams to discover, triage, and prioritize errors in real-time. 

VFS Engineers will be responsible for configuring and managing their own Sentry teams, alerting rules and monitoring their application’s data. These management rules give VFS teams more responsbility in relation to Sentry alerting and error ownership. 

For some more in depth technical knowledge, this [Sentry README](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md#runningtesting-sentry-locally) defines the techical, architectural and configuration details related to Sentry.

# Getting started
VFS teams will first need to configure the SOCKS proxy in order to access Sentry. The setup details can be found in the [Internal Tools Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md)

## Creating a New Team
Each VFS team needs to designate a Sentry administrator and provide the name of this person in the `#vfs-platform-support` Slack channel. Once acknowledged, a VSP engineer will grant access and assign permissions. The Sentry administrator will then perform the following tasks to configure their Sentry team:

1. Create a new team based on the naming and structuring conventions described in the VSP user management process, for example, vfs-[team name here]. If permissions need to be adjusted ask in the `#vfs-platform-support` Slack channel.
2. Add team members to your Sentry team. This can be done by navigating to (Project) Settings => Teams => Add Member
3. Provide a list of ownership rules (paths and urls) that your team wants to monitor for Sentry errors. Examples can be found in the Sentry issue owners [documentation](https://docs.sentry.io/workflow/issue-owners/#configuration).
4. Provide the list to a VSP engineer in the `#vfs-platform-support` Slack channel. 

## Issue Owners and Alerting Rules
The “Issue Owners” feature allows developers to reduce noise by directing notifications to specific teams based on a path or URL. VFS teams are responsible to provide VSP with a list of paths and URLs that are of concern to their team. By assigning specific alerting rules, Sentry allows teams to pass issues to the developer who can fix them, faster.

Any adjustments to alerting rules needs to be communicated in the `#vsp-platform-support` Slack channel since “Issue Owners” is a project-based permission that VSP engineers manage.

## Monitoring Slack Alerts
* Sentry alerts are currently monitored in the `#vfs-platform-support` Slack channel. Sentry alerting rules are configured to monitor high volume and first seen errors currently.
* VFS Sentry team members are responsible to monitor incoming error alerts, but VSP engineers will triage errors as needed.


## Understanding dashboards and filtering
Issues can be sorted and filtered according to a user’s filtering criteria (for example, last seen or tags). You can obtain more error-related details by drilling down into individual issues for a more detailed debugging approach.

Unresolved issues will display per project on the issue dashboard. On the project issues dashboard, specific users can be assigned to issues. You can also obtain time-based error data. An overview displaying issue trends can be viewed in the “Overview” tab.

## Tagging standards

VFS engineers are  responsible for complying with VSP’s current [tagging standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-tagging-standards.md). A list of existing tags can be found in Sentry as a per project based setting.

## Slack Sentry Reaction Legend
We currently have a Slack emoji reaction legend pinned in the `#vfs-sentry-alerts` Slack channel. This legend allows developers to acknowledge issues and remove overlap during issue investigation. The legend can be found with the pinned items in the `#vfs-sentry-alerts` Slack channel.

# Questions
Ask in the `#vfs-platform-support` or `#vfs-sentry-alerts` Slack channels.
