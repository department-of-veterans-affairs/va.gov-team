# # IVC Forms **Missing Pega Status**

_last updated: 9/17/24_  

## Audience 

This playbook is for IVC Forms team members responding to Datadog Missing Pega Status monitor alerts. These alerts are visible both on the team's Datadog dashboard and the #ivc-forms-datadog Slack channel.


## Required access

- [IVC ChampVA Forms Datadog dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms), read-only access
- [#ivc-forms-datadog](https://dsva.slack.com/archives/C06RQR7V9CM) Public Slack channel


## Best Practices

Keep these items in mind while working through the **Steps** section below:

- For quick communication/solutioning, prefer Slack Huddles or other video conferencing tools. After a huddle, **be sure to provide the key takeaway in writing** and share it to any relevant incident tickets/slack threads.
- For visibility, keep all conversations relevant to the incident inside of the main DSVA  [#ivc-forms](https://dsva.slack.com/archives/C05UDS77ZPH) channel.

## Key Personnel

- Product Owner (PO): Premal Shah
- Product Manager (PM): Bo Altes
- Delivery Manager (DM): Andrea Merrill

## Steps

When this monitor is triggered, follow these steps.

Intake
- Notify IVC Forms team product manager (PM) and delivery manager (DM) to open an incident ticket ([example here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94827)) for the IVC Forms team
- PM and DM will confirm ticket creation and assign ticket to an engineer

Investigation
- Ticket assignee will
  - Verify that vets-api is receiving submits from vets-website
  - Verify that files are sent successfully to s3
  - Verify that the Callback API is available
  - Determine whether the issue arose due to a deployment, either by the IVC Forms team or the PEGA team. If yes to either, notify IVC Forms PM and DM
  - If root cause has been identified as an issue in vets-website or vets-api, notify PM and DM to determine next steps with Product Owner (PO)
  - If root cause has been identified as an issue outside of vets-website and vets-api, work with PM, DM, and PO to determine contacts and next steps

Resolution
- Acknowledge monitoring alerts in slack according to [Managing Errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md#define-an-on-call-rotation--monitor-errors-in-slack)
- IVC Forms engineering will provide updates on development and deployment of a solution and its status in each environment.
- IVC Forms engineering will notify PM and DM when resolved
- IVC Forms engineering will monitor outstanding missing statuses and ensure they are cleared appropriately. No statuses should be deleted or cleared without agreement from PO and/or PM.
- Missing statuses can be changed to 'manually cleared' if a ticket to fix what caused the issue has been documented and sent to PM.  Notify PM that the status is being changed.
- If traffic to the site has been altered, PO or PM will determine when to return to previous levels
  

