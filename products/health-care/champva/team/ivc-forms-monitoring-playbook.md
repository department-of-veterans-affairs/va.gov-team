# # IVC Forms **Missing Pega Status**

_last updated: 9/17/24_  

## Audience 
```
IVC Forms team members responding to Datadog Missing Pega Status monitor alerts. 
```

## Required access


- [IVC ChampVA Forms Datadog dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-forms), read-only access
- [#ivc-forms-datadog](https://dsva.slack.com/archives/C06RQR7V9CM) Slack channel


## Steps
_Diagnosis or action steps to verify the issue, resolve the problem, and/or notify the correct people.  Example:_  
```
Intake
- Notify IVC Forms team product manager and delivery manager to open a ticket for the IVC Forms team

Investigation
- Ticket assignee will
  - Verify that vets-api is receiving submits from vets-website
  - Verify that files are successfully to s3
  - Verify that the Callback API is available
  - Determine whether the issue arose due to a deployment, either by the IVC Forms team or the PEGA team. If yes to either, notify IVC Forms PM and DM

Resolution
- IVC Forms engineering will notify PM and DM when resolved
- IVC Forms engineering will monitor outstanding missing statuses and ensure they are cleared appropriately. No statuses should be deleted without agreement from PO and/or PM.
  
```
