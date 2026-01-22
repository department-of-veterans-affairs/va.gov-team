# IVC Forms Monitoring Playbook

_last updated: 12/1/25_  

### Audience 

This playbook is for IVC Forms team members responding to Datadog monitor alerts and other issues in production. Datadog alerts are visible both on the team's Datadog dashboard and the #ivc-forms-datadog Slack channel.

### Required access

- [IVC ChampVA Forms Datadog dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms), read-only access
- [#ivc-forms-datadog](https://dsva.slack.com/archives/C06RQR7V9CM) Public Slack channel
- [#health-apps](https://dsva.slack.com/archives/CMJ2V70UV) Public Slack channel

### Best Practices

Keep these items in mind while working through the sections below:

- For quick communication/solutioning, prefer Slack Huddles or other video conferencing tools. After a huddle, **be sure to provide the key takeaway in writing** and share it to any relevant incident tickets/slack threads.
- For visibility, keep all conversations relevant to the incident threaded under the associated alert in [#ivc-forms-datadog](https://dsva.slack.com/archives/C06RQR7V9CM) or inside of the main DSVA [#ivc-forms](https://dsva.slack.com/archives/C05UDS77ZPH) channel.

### See Also

- [Frequently Seen Alerts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/frequently-seen-alerts.md)
- [Key Personnel](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/key-personnel.md)
- [Commands for the Rails Console on Argo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md)

### Key Personnel

- [Product Owner (PO)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/key-personnel.md#product-owner-po)
- [Product Manager (PM)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/key-personnel.md#product-manager-pm)
- [Delivery Manager (DM)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/key-personnel.md#delivery-manager-dm)
- [Federal Engineer (FE) Closest to our Project](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/key-personnel.md#federal-engineer-fe-closest-to-our-project)
- [EEV Escalation Team Contact](## EEV Escalation Team Contact)

## Missing Pega Status Alert

See [Resolving Missing PEGA Status Issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/resolving-missing-pega-status.md)

## General Datadog Alerts (500 Status, Status other than a 200)

When a Datadog monitor alert is triggered, follow these steps. 

Initial Assessment
- The initial responder, typically the person responsible for on-call monitoring duty, will
  - Review logs associated with the alert
  - Compare them with [Frequently Seen Alerts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/champva/team/frequently-seen-alerts.md) and open tickets under [Epic: IVC Forms production support](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95910)
  - If the alert matches a known issue or an open ticket, acknowledge the alerts in slack according to [Managing Errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md#define-an-on-call-rotation--monitor-errors-in-slack)
	- If additional information can be added to an open ticket, do so
  - Otherwise, this is a new issue, proceed with...
    
Preliminary Investigation
- Initial responder will
  - Collect technical information to put into a ticket, such as
    - Error messages
    - Logs
    - Screenshots
  - Collect information to help assess the urgency of the problem, such as
    - How often the problem has been happening
    - An estimate of how many users are affected

Intake
- Initial responder will
  - Open an incident ticket
    - [Create a new ticket from template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=IVC-Forms-Monitor-Incident.md)
    - [Example ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94827)
  - Notify Product Manager (PM) and Delivery Manager (DM) that an incident ticket has been created
    - Communicate information to help assess the urgency of the problem
- PM and DM will prioritize the ticket

Investigation
- Ticket assignee will
  - Verify that vets-api is receiving submits from vets-website
    - To accomplish this, confirm that production traffic is currently generating logs for vets-api endpoints such as `#submit` [via Datadog here](https://vagov.ddog-gov.com/logs?query=%40name%3A%22IvcChampva%3A%3AV1%3A%3AUploadsController%22%20%40environment%3Aproduction&from_ts=1764001624129&to_ts=1764016024129&live=true)
  - Verify that files are sent successfully to s3
    - To accomplish this, check for recent log activity indicating files uploaded to S3 [via Datadog here](https://vagov.ddog-gov.com/logs?query=%22IVC%20ChampVA%20Forms%20-%20uploaded%20into%20S3%20bucket%22%20%40environment%3Aproduction&from_ts=1764001624129&to_ts=1764016024129&live=true)
    - In the event that supporting documents are not reaching S3, see [Missing Supporting Documents](#missing-supporting-documents) section below.
  - Verify that the Callback API is available
    - To accomplish this, verify that that traffic to the `#update_status` endpoint is returning 200 responses in production via [Datadog here](https://vagov.ddog-gov.com/logs?query=%40name%3A%22IvcChampva%3A%3AV1%3A%3APegaController%22%20%40environment%3Aproduction&from_ts=1764001624129&to_ts=1764016024129&live=true)
  - Determine whether the issue arose due to a deployment, either by the IVC Forms team or the PEGA team. If yes to either, notify IVC Forms PM and DM
    - To accomplish this, review recently deployed PRs from our team, and reach out to PEGA via the `DOCMP PEGA and VA.GOV Sync` Teams channel
  - If root cause has been identified as an issue in vets-website or vets-api, notify PM and DM to determine next steps with Product Owner (PO)
  - If root cause has been identified as an issue outside of vets-website and vets-api, work with PM, DM, and PO to determine contacts and next steps

Resolution
- Ticket assignee will
  - Acknowledge monitoring alerts in slack according to [Managing Errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md#define-an-on-call-rotation--monitor-errors-in-slack)
  - Provide updates on development and deployment of a solution and its status in each environment
  - Notify PM and DM when resolved
  - Monitor outstanding missing Pega statuses and ensure they are cleared appropriately. No statuses should be deleted or cleared without agreement from PO and/or PM.
  - Missing Pega statuses can be changed to 'manually cleared' if a ticket to fix what caused the issue has been documented and sent to PM.  Notify PM that the status is being changed.
- If traffic to the site has been altered, PO or PM will determine when to return to previous levels

## Missing Supporting Documents

_This section requires access to the Rails console in production, see [On Call Procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md) for details._

_In addition to this section, also consult [Resolving Missing PEGA Status Issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/resolving-missing-pega-status.md)_

In the event that one or more supporting document meant to accompany a user's submission does not reach S3, the following steps should be taken (in addition to all other actions listed in the [General Datadog Alerts section](#general-datadog-alerts-500-status-status-other-than-a-200):

Investigation
- Collect the attachment IDs of all documents associated with the given form submission
  ```ruby
  IvcChampvaForm.where(form_uuid: 'xyz')
  ```
- Collect the attachment IDs of documents missing a PEGA status within that batch
  ```ruby
  # Create an instance of the production support helper class (only need to do once per console session)
  msc = IvcChampva::ProdSupportUtilities::MissingStatusCleanup.new

  # Collect and display any submissions with missing statuses
  missing = msc.get_missing_statuses
  ```
- Provide the full list of attachment IDs and their PEGA statuses to the PEGA team for analysis
 - The PEGA team will provide the applicant name and the batchID to the VA.gov team.
 - In the event that a third party applicant has signed the document, the VA.gov team can obtain the email of the signer and give it to the EEV escalation team.

Resolution
  - In a private teams chat labeled **CHAMPVA Production Support**, the PEGA batch ID and name will be given to the EEV Escalation team (see EEV Escalation Team Contact above) where an analyst will examine the application to see if it missing any information for processing.
  - The EEV Escalation team will provide a decision on whether or not the user needs to be contacted and asked for a resubmit of part or all of the form and its documents and will electronically reach out to the applicant to make the application complete.
  - The VA.gov team will clear the error.
  - Based on the PEGA team's response, work with PM, PO, and PEGA team to reach out to the affected user(s).
 
