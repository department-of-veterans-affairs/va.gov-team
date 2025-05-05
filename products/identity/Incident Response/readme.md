# Incident Response

## Overview

An incident is an event that compromises the security, performance, or availability of a service or component owned by the OCTO Identity team. The incident response process contains 4 categories: determine the impact, declare the incident, manage the ongoing incident, and resolve the incident.

> [!NOTE]  
> Incidents that impact over 1,000 users in production are considered P1 and need to be declared and managed in Datadog.

## Determine the impact

Monitors are set up to detect the thresholds to declare an incident for each [OCTO Identity service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response/System%20Recovery%20Procedures#list-of-services). If you’re paged during pager duty, there has probably been some type of an incident.

Refer to the [incident declaration guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md) to assess the priority level. If you need to declare a P1 incident, you'll also document the [severity level](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md) based on the overall user impact.

## Declare the incident

For P1 incidents notify VA OCTO Identity Product Leadership directly via Slack and Pagerduty. Then follow the [step-by-step instructions to declare the incident in Datadog](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Datadog%20Incident%20Management.md).

If an incident requires code changes by the OCTO Identity team, check the [guidelines for an Out of Band deploy](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies#DeploymentPolicies-Requestingout-of-banddeploys) to confirm if you need to request one for this incident.

## Manage the ongoing incident

The [incident commander](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/IR%20Roles.md) provides updates every 30 minutes on the status of a declared incident until it’s resolved.

These updates are sent through notifications in Datadog. Recipients of the notification are set to the #identity-support Slack channel when you originally declare the incident.

To create a [new notification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Datadog%20Incident%20Management.md#send-a-notification) in Datadog:

- Navigate to the [declared incident page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Datadog%20Incident%20Management.md#declared-incident-page).
- Click the **Notifications** tab.
- Click **New Notification** to create a new update.
- Enter the information for your update, then click **Send**.

## Resolve the incident

When the service is restored and the incident is resolved:

- Set the Datadog incident status to Resolved.
- Generate a Post Mortem report of the incident.
- Reference [system recovery procedure documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response/System%20Recovery%20Procedures) for the relevant service to determine proper testing and communication.
- After all fields in Datadog are complete and accurate, the [incident commander](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/IR%20Roles.md) sets the incident to Completed and provides a link to the incident to [OCTO Identity team leadership](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

![Screenshot 2025-05-05 at 9 00 46 AM](https://github.com/user-attachments/assets/263712a3-8c44-4f9c-bc3f-64c9201091b8)
