VANotify keys must be rotated every 180 days.  As of August 4, 2025, this rotation happens when a new API key is emailed securely to the team's engineering contact specified on [staging.notifications.va.gov](staging.notifications.va.gov).  By the next rotation, this process will begin delegating the key rotation onto the individual teams.

### Obtaining a new key

This has yet to be defined, but will eventually be done by engineers with the appropriate roles over on [staging.notifications.va.gov](staging.notifications.va.gov) (VA intranet only).  A new feature is being worked to create new API keys via that page.

### Updating the key in our configuration

In vets-api, `settings.yml` defines a YAML object `vanotify.services` which allows individual services to customize their VANotify configuration.  The important parameter here is `vanotify.services.ivc_champva.api_key`, which is tied into [AWS ParamStore](https://us-gov-west-1.console.amazonaws-us-gov.com/systems-manager/parameters/?region=us-gov-west-1&tab=Table) to define that value.  The ParamStore parameter which holds this value is `/dsva-vagov/vets-api/prod/env_vars/vanotify/services/ivc_champva/api_key` - users with appropriate permissions will need to hit the "Edit" button in the top right when modifying the store value with the new key.  

The new key created on staging.notifications.va.gov needs to be copied, and then pasted into the ParamStore to update the key.  New deployments of vets-api pods will fetch this value automatically.

### Slack Workflow

**If these steps are not performed, we risk missing a key rotation and losing our ability to send emails via VANotify.**

A new Slack List "VANotify API Key Rotation Log" has been created which tracks API key rotations.  This list ties in with two new workflows:

1. "VANotify API Key Rotated"
	- This button starts a workflow which inserts a new item into the above list, with a "Due Date" on the new list item being 180 days from when the workflow is run.
2. "VANotify API Key Rotation Reminder"
	- This workflow runs on a daily timer, checking the above list for due dates of less than 7 days and sends a notification if the API key rotation is due soon.

When a key rotation has been performed, a team member will need to initiate the "VANotify API Key Rotated" workflow to add a new list item.  This will automatically prompt the team 173 days later (7 days prior to expiration), sending daily reminders until the rotation has been performed.

This button to initiate the reminder workflow will be pinned to the channel bookmarks and present in the "Rotation Reminder" alert sent to #ivc-team-engineering.
