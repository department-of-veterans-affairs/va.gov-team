# DataDog Alert Remediation Playbook

These are the instructions on how to research and remediate alerts from DataDog.

## Information

Slack Channel: [#benefits-management-tools-notifications](https://dsva.slack.com/archives/C0600QN7CFJ)
Data Dog Alerts:

- [DataDog Watchtower Links](https://vagov.ddog-gov.com/monitors/manage?q=team%3Abenefits%20tag%3A%28%22watchtower%22%20AND%20%22team-group%3Amanagement-tools%22%29&order=asc&sort=status)
- [All DataDog Links](https://vagov.ddog-gov.com/monitors/manage?q=team%3Abenefits%20tag%3A%22team-group%3Amanagement-tools%22&order=asc&sort=status)
  OCTO Watchtower Issues: [GH OCTO Watchtower](https://github.com/department-of-veterans-affairs/octo_watchofficer/issues)

## Initial Steps

1. Whomever investigates should mark the message with a set of eyes (👀)
2. Check the [Playbooks](#Playbooks) below to see if there are individual steps
3. Once all steps are complete, mark the message with a white checkmark (✅)

## Playbooks

These playbooks are specific to individual alerts.

### EVSS::DocumentUpload has exhausted its sidekiq queue

This alert happens when a document fails to upload to EVSS. There are many possible causes including service timeouts or accounts missing information.

### Example Message

> Triggered: EVSS::DocumentUpload has exhausted its sidekiq queue
> A EVSS::DocumentUpload sidekiq job has exhausted it's queue retries attempt.
> Please refer to the Sidekiq Job Death Queue for more information
> Watch Officer: you can review this message in Slack by searching with the timestamp below. For questions post to the #benefits-management-tools slack channel.
> Timestamp: 1714592775000

#### Steps to Research/Remediate

1. Search for the matching error message in the [Sidekiq Dead Error Logs](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40message_content%3AEVSS%5C%3A%5C%3ADocumentUpload%2A%20%22died%20with%20error%22%20&agg_m=count&agg_m_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.service_name&fromUser=true&messageDisplay=inline&refresh_mode=sliding&storage=online_archives&stream_sort=desc&viz=stream&from_ts=1714510376016&to_ts=1714683176016&live=true)
2. Find the message that matches the monitor (Example: EVSS::DocumentUpload)
3. Grab the Job ID from the Log message, usually a key after the alert (Example: 55f81ac580f39611be8bdbe5)
4. Go to the [Sidekiq Morgue](https://api.va.gov/sidekiq/morgue)
   - You may not have access. You can [request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request%2Csidekiq-access-request&projects=&template=vetsapi-sidekiq-ui-access.yaml&title=Sidekiq+Admin+UI+access+for+%5Bindividual%5D) access using the issue template. (Example [access request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/82232))
   - Filter by the Job ID
   - Open the record, grab the value of the key: `va_eauth_dodedipnid`
     - **This is the EDIPI of the user, and is considered PII**
5. Send a secure encrypted email with the information to: Bonnie Craig (bonnie.craig@va.gov)
   - Template:
     > Bonnie,
     >
     > We had an issue with an EVSS Document upload. This is the EDIPI of the user: {EDIPI}
6. Send a message in [#evss-prod](https://dsva.slack.com/archives/C8R3JS8BU) stating that you sent an email to Bonnie with the EDIPI of a user who was affected
   - Template:
     > Hello Bonnie, we had an issue with an EVSS Document upload. I emailed you the EDIPI
     >
     > cc. @Steve Albers | @Jerek Shoemaker
