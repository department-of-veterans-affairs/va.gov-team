# How to Configure Sentry for your Application

The Veteran-facing Services Platform (VSP) utilizes Sentry as a tool to track errors related to VA.gov applications. Sentry allows teams to discover, triage, and prioritize errors in real-time. 

Veteran-facing services (VFS) teams are responsible for configuring and managing their own Sentry teams, managing alerting rules, and monitoring their application’s data. These management rules give VFS teams more responsibility in relation to Sentry alerting and error ownership.

For more in depth technical knowledge, this [Sentry README](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md#runningtesting-sentry-locally) defines the technical, architectural, and configuration details related to Sentry.

# Current Versioning
Our current version of Sentry is `9.1.2`. 

Note: Sentry `10.0` is the latest version of Sentry. The new version is on the horizon, but cannot be upgraded until the Operations team implements their new infrastructure recommit. Details [here](https://github.com/department-of-veterans-affairs/va.gov-team/pull/7989) 

# Getting started
In order to access Sentry, you need to configure the SOCKS proxy. The setup details can be found in the [Internal Tools Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md).

## Creating a new team
Each VFS team needs to designate a Sentry administrator and provide the name of this person in the `#vfs-platform-support` Slack channel. Once acknowledged, a VSP engineer will grant access and assign permissions. The Sentry administrator will then perform the following tasks to configure their Sentry team:

1. Create a new team based on the naming and structuring conventions described in the [VSP user management process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/vsp_user_managment_process.md), for example, vfs-[team name here]. If permissions need to be adjusted ask in the `#vfs-platform-support` Slack channel.
2. Add team members to your Sentry team. This can be done by navigating to **(Project) Settings => Teams => Add Member**.
3. Provide a list of ownership rules (paths and urls) that your team wants to monitor for Sentry errors. Examples can be found in the Sentry issue owners [documentation](https://docs.sentry.io/workflow/issue-owners/#configuration). Ownership rules are used for issues assignment suggestions.
4. Provide the list to a VSP engineer in the `#vfs-platform-support` Slack channel. 

## Issue assignment
The Issue Owners feature has some limitations with automatic issue assignment in Sentry `9.1.2`. For now, issue assignment will be a manual process responsibility for VSP engineers. Automatic issue assignment is a feature adopted in Sentry `10.0`.

## Issue owners and alerting rules
As stated above, the issue owners feature does not automatically assign issues in Sentry `9.1.2`, but it does suggest issue assignees.

The implementation details below will not be adopted until Sentry 10:
* The “Issue Owners” feature allows developers to reduce noise by directing notifications to specific teams based on a path or URL. VFS teams are responsible to provide VSP with a list of paths and URLs that are of concern to their team. By assigning specific alerting rules, Sentry allows teams to pass issues to the developer who can fix them, faster. By defining paths/urls of concern to a team, issues are automatically assigned to teams.

* Any adjustments to alerting rules need to be communicated in the `#vsp-platform-support` Slack channel since “Issue Owners” is a project-based permission that VSP engineers manage.

## Monitoring Slack alerts
* Sentry alerts are currently monitored in the `#vfs-platform-support` Slack channel. Sentry alerting rules are configured to monitor high volume and first seen errors currently.
* VFS Sentry team members are responsible to monitor incoming error alerts, but VSP engineers will triage errors as needed.


## Understanding dashboards and filtering
Issues can be sorted and filtered according to a user’s filtering criteria (for example, last seen or tags). 

### Sentry team filtering
Sentry users can search for issues assigned to their team via custom search. By providing the 'assigned' custom search attribute followed by their team name tag, user can filter by issues assigned to their team.

* Example team assignment search: assigned:#benefits-memorial-1 
* Note: The hashtag needs to be present when searching by team name

Sentry users can obtain more error-related details by drilling down into individual issues for a more comprehensive debugging approach. Unresolved issues will display per project on the issue dashboard. On the project issues dashboard, specific users can be assigned to issues. You can also obtain time-based error data. An overview displaying issue trends can be viewed in the “Overview” tab.

## Tagging standards

VFS engineers are  responsible for complying with VSP’s current [tagging standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-tagging-standards.md). A list of existing tags can be found in Sentry as a per project based setting. Tags can be utilized as a measure along with issue assignment to filter errors realted to your team.

## Slack Sentry reaction legend
We currently have a Slack emoji reaction legend pinned in the `#vfs-sentry-alerts` Slack channel. This legend allows developers to acknowledge issues and remove overlap during issue investigation. The legend can be found with the pinned items in the `#vfs-sentry-alerts` Slack channel.

# Questions
Ask in the `#vfs-platform-support` or `#vfs-sentry-alerts` Slack channels.
