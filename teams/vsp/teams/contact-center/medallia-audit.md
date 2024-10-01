# Authenticated Experience: No Silent Error Report

- [Purpose](#purpose)
- [Monitoring](#monitoring)
  - [Error Rate Increase](#)
  - [Volume Anomaly](#)
- [Response Protocols](#response-protocols)
  - [Playbook: Error and Traffic Monitor Alerts](#playbook-error-and-traffic-monitor-alerts)
  - [Playbook: Scheduled Maintenance](#playbook-scheduled-maintenance)
- [Requirement Checklists](#requirement-checklists)
  - [Documentation](#documentation)
  - [Monitoring](#monitoring)
  - [User Experience](#user-experience)
- [Action Items and Questions](#action-items-and-questions)

## Purpose
Assess level of compliance with the [No Silent Error initiative](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-discover-if-your-app-has-silent-failures.md).

## Monitoring
This section details the current monitors for the Authenticated Experience team, designed to capture errors, failures, and patterns of inconsistent activity.

Both the My VA and Profile teams have a Datadog dashboard:

| **Dashboard**          | **Description**        |
|-------------------|----------------------|
| [My VA Dashboard](https://vagov.ddog-gov.com/dashboard/4dk-pwd-mni/authenticated-experience-my-va?fromUser=false&refresh_mode=sliding&from_ts=1727402646697&to_ts=1727406246697&live=true)     | Contains visualizations for benefits payments, outstanding debts, submission statuses, etc.          |
| [Profile Dashboard](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=sliding&from_ts=1727319633446&to_ts=1727406033446&live=true)    | Contains visualizations for contact information, personal information, direct deposit information, communication preferences, military service history, etc. |

All API endpoints have 2 monitors associated with them:

| **Monitor**          | **Description**                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------|
| Error Rate Increase   | Error rate increases trigger when errors exceed a set threshold within a specific period of time. |
| Volume Anomaly        | Volume anomaly monitors will trigger when there is a rapid increase or decrease in traffic.       |


The list of monitors for My VA and Profile [can be found here](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%22team%3Aauth-experience-profile%22&order=asc&sort=name).

When a monitor is triggered, an alert is sent to the [#accountexp-authexp_alerts](https://dsva.slack.com/archives/C02SYJGH8FJ) channel.

API endpoints that make write requests are also monitored by the VA.gov Watchtower team.  When these monitors trigger, an incident will be created.  Usually, a watch officer will open an incident and reach out in our channel to inquire about an alert and request an explanation.

## Response Protocols
Our [monitor playbooks](#https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/auth-experience/playbooks/monitoring.md) ensure that the team can quickly assess, investigate, and respond to issues with Authenticated Experience's APIs while keeping internal and external teams informed.

#### [Playbook: Error and Traffic Monitor Alerts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/auth-experience/playbooks/monitoring.md#playbook-error-and-traffic-monitor-alerts)

#### [Playbook: Scheduled Maintenance](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/auth-experience/playbooks/monitoring.md#playbook-scheduled-maintenance)

## Requirement Checklists
The following sections present the results of our assessment on how our team complies with the requirements outlined in this document. 


### Documentation

| **Documentation** | **My VA** | **Profile** |
|-------------------|-----------|-------------|
| **Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?**  <br><br> *Our team is currently reviewing this and will be adding links to existing user flow diagrams. We will also create tickets to address any missing diagrams.* | WIP | WIP |
| **Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?** <br><br> *Some maintenance windows in My VA and the Profile are not functioning correctly. We are addressing this issue through ticket [#93234](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93234) to ensure that all maintenance windows operate as intended.* | WIP |WIP |
| **Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors?** <br><br> *As far as we are aware, the owner of the system of record receiving the user's data has not indicated in writing that their system notifies or resolves 100% of fatal errors. We will need to reach out to Lighthouse, VA Profile, and any other relevant upstream systems to confirm this information.* | NO | NO |

### Monitoring
| **Monitoring** | **My VA** | **Profile** |
|----------------|-----------|-------------|
| **Do you monitor the APIs that you submit to via Datadog?** <br><br> *Yes, we monitor all Vets-API endpoints that support My VA and the Profile,  Here is our [list of monitors](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%22team%3Aauth-experience-profile%22&order=asc&sort=name).*| YES | YES |
| **Does your Datadog monitoring follow the appropriate tagging standards?** <br><br> *All of our monitors have the “required tags”, we need to add depency tags, which are recommended.  We are working on this ticket #93609 to create any additional tags and organize existing tags.* | WIP | WIP |
| *Do errors detected by Datadog go into a Slack notifications channel?* <br><br> *Yes, all monitors will send Slack notifications to the [#accountexp-authexp_alerts](#https://dsva.slack.com/archives/C02SYJGH8FJ) channel when triggered.* | YES | YES|
| **Does more than one person monitor the Slack notifications channel?** <br><br> *Yes, multiple members of the Authenticated Experience team monitor the slack channel.* | YES | YES |
| **Do the team members monitoring the Slack channel have a system for acknowledging and responding to error notifications (on-call rotation)?** <br><br> *Here is our [list of playbooks](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/auth-experience/playbooks/monitoring.md).*| YES | YES |

### User Experience
| **User Experience** | **My VA** | **Profile** |
|---------------------|-----------|-------------|
| **Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application?** <br><br> *We integrate with VA Notify to send email confirmations when users update specific sections of their Profile. We need to collaborate with VA Notify to ensure that we are monitoring all email delivery failures, specifically for any failures that originate from the VA Notify system. All other failure points are communicated to the user either on-screen within the My VA Dashboard or Profile, or through email notifications.* | WIP | WIP

## Action Items and Questions

### Action Items
- Improving visibility and monitoring around background jobs that send email notifications using VA Notify.

### Questions
- We need some guidance on when and how to open a tracking issue ticket. Is there a specific template to follow? Should a ticket be opened every time an alert is triggered, or only under certain conditions?

