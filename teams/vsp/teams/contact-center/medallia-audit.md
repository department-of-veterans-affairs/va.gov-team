# VA.gov Digital Surveys (Medallia): No Silent Error Report

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
VA.gov digital surveys use an injected Medallia script to offer a feedback experience. This section details the current monitors for the Medallia feedback surveys on VA.gov, designed to capture errors, failures, and patterns of inconsistent activity.

Both the My VA and Profile teams have a Datadog dashboard:

| **Dashboard**          | **Description**        |
|-------------------|----------------------|
| [Medallia Dashboard]()     |           |


## Requirement Checklists
The following sections present the results of our assessment on how our team complies with the requirements outlined in this document. 

### Start

| **Start** | **Medallia** |
|-------------------|-----------|
| Do you know when your application shipped to production? <br><br> *February 9, 2022*  | YES |
| Did your application use the same APIs when it shipped as it does today? <br><br> *We don't directly integrate with Medallia APIs* | N/A |

### Documentation

| **Documentation** | **Medallia** |
|-------------------|-----------|
| **Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?**  <br><br> *Our team is in the process of creating this and is tracking that progress in this ticket.* | NO |
| **Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?** <br><br> *We will be following up with the VSignals team to get details on this so * | NO |
| **Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors?** <br><br> *As far as we are aware, the owner of the system of record receiving the user's data has not indicated in writing that their system notifies or resolves 100% of fatal errors. | NO |

### Monitoring
| **Monitoring** | **Medallia** |
|----------------|-----------|
| **Do you monitor the APIs that you submit to via Datadog?** <br><br> **| NO |
| **Does your Datadog monitoring follow the appropriate tagging standards?** <br><br> ** | NO |
| **Do errors detected by Datadog go into a Slack notifications channel?** <br><br> ** | NO |
| **Does more than one person monitor the Slack notifications channel?** <br><br> ** | NO |
| **Do the team members monitoring the Slack channel have a system for acknowledging and responding to error notifications (on-call rotation)?** <br><br> **| NO |

### User Experience
| **User Experience** | **Medallia** |
|---------------------|-----------|
| **Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application?** <br><br> *We will be follow up with the VSIgnals team for more details on what occurs during a failure* | WIP |

## Action Items and Questions

### Action Items


### Questions


