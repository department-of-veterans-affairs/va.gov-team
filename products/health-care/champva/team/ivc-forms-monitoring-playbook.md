# IVC Forms **Missing Pega Status**

_last updated: 1/6/25_  

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

When this monitor is triggered, follow these steps. _(For engineers, please also refer to this document: [Resolving Missing PEGA Status Issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/resolving-missing-pega-status.md) on using the production Rails console.)_

Intake
- Notify IVC Forms team product manager (PM) and delivery manager (DM) to open an incident ticket ([example here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94827)) for the IVC Forms team
- PM and DM will confirm ticket creation and assign ticket to an engineer

Investigation
- Ticket assignee will
  - Verify that vets-api is receiving submits from vets-website
  - Verify that files are sent successfully to s3
    - In the event that supporting documents are not reaching S3, see [Missing Supporting Documents](#missing-supporting-documents) section below.
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
  
## Missing Supporting Documents

_In addition to this section, also consult [Resolving Missing PEGA Status Issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/resolving-missing-pega-status.md) and [On Call Procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/on-call-procedures.md) for more technical details._

In the event that one or more supporting document meant to accompany a user's submission does not reach S3, the following steps should be taken (in addition to all other actions listed in the [Steps section](#steps):

Investigation
- Collect the attachment IDs of all documents associated with the given form submission (via the Production vets-api database)
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

  - In a private teams chat labeled **CHAMPVA Production Support**, the PEGA batch ID and name will be given to the EEV Escalation team (Scot Uyeoka supervisor) where an analyst will examine the application to see if it missing any information for processing.
  - The EEV Escalation team will provide a decision on whether or not the user needs to be contacted and asked for a resubmit of part or all of the form and its documents and will electronically reach out to the applicant to make the application complete.
  - The VA.gov team will clear the error.
  - Based on the PEGA team's response, work with PM, PO, and PEGA team to reach out to the affected user(s).
 
