VANotify keys must be rotated every 180 days.  As of August 4, 2025, this rotation happens when a new API key is emailed securely via Outlook to the team's engineering contact specified on [staging.notifications.va.gov](staging.notifications.va.gov).  By the next rotation, this process will begin delegating the key rotation onto the individual teams.

### Obtaining a new key

The new process has yet to be defined, but will eventually be done by engineers with the appropriate roles over on [staging.notifications.va.gov](staging.notifications.va.gov) (VA intranet only).  A new feature is being worked to create new API keys via that page.

As of writing this document, we are being emailed a set of keys from the VANotify team.  The email includes UUIDs for staging and production, but we only use the production keys in ParamStore.  The UUIDs provided are `Secret`, `Key ID`, and `Service ID`.  You will need the production `Secret` and `Service ID` UUIDs to assign the new ParamStore secret.

### Updating the key in our configuration

In vets-api, `settings.yml` defines a YAML object `vanotify.services` which allows individual services to customize their VANotify configuration.  The important parameter here is `vanotify.services.ivc_champva.api_key`, which is tied into [AWS ParamStore](https://us-gov-west-1.console.amazonaws-us-gov.com/systems-manager/parameters/?region=us-gov-west-1&tab=Table) to define that value.  The ParamStore secret which holds this value is `/dsva-vagov/vets-api/prod/env_vars/vanotify/services/ivc_champva/api_key` - users with appropriate permissions will need to hit the "Edit" button in the top right when modifying the store value with the new key.  

The format for the API key in the ParamStore secret is `ivc-forms-primary-key-{Service ID}-{Secret}`.  The Service ID will likely remain the same, but the new Secret UUID will need to replace the old one in the value.  Save the changes and monitor the [ZSF email dashboard](https://vagov.ddog-gov.com/dashboard/6eg-fke-mxf/ivc-champva-zsf--email-dashboard) to look for emails not being sent, likely indicating a problem with the new key.

#### After key generation is delegated to teams

Similarly to when we are emailed the new keys, the key created on staging.notifications.va.gov needs to be copied and then pasted into the ParamStore to update the key.  New deployments of vets-api pods will fetch this value automatically.

### Slack Reminders

Keys expire every 180 days, but a set of reminders have been added to #ivc-forms-engineering (OCTO) every 120 days with a link to this documentation.  When a reminder is published the keys should be rotated ASAP so they aren't forgotten.
