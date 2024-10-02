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

## Summary
We use an injected Medallia script to implement the digital survey feedback experience on VA.gov. As such, we are not directly in control of the front or back end experience and have not been able to implement the required monitoring without the support of the VSignals Medallia team to access api endpoints. We outline action items below but our overall next step is to work directly with VSignals to support the set up of monitoring for Medallia on VA.gov and access (or create) the necessary documentation. 


## Requirement Checklists
The following sections present the results of our assessment on how our team complies with the requirements outlined in this document. 

### Start

| **Start** | **Medallia** |
|-------------------|-----------|
| Do you know when your application shipped to production? <br><br> *February 9, 2022*  | YES |
| Did your application use the same APIs when it shipped as it does today? <br><br> *We don't directly integrate with Medallia APIs but prior to Medallia, the VA.gov digital survey experience was through Foresee* | N/A |

### Documentation

| **Documentation** | **Medallia** |
|-------------------|-----------|
| **Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?**  <br><br> *Our team will work with the VSignals team to create an accurate submission path diagram* | NO |
| **Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?** <br><br> *We will be following up with the VSignals team to get details on this* | NO |
| **Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors?** <br><br> *As far as we are aware, the owner of the system of record receiving the user's data has not indicated in writing that their system notifies or resolves 100% of fatal errors.* | NO |

### Monitoring
| **Monitoring** | **Medallia** |
|----------------|-----------|
| **Do you monitor the APIs that you submit to via Datadog?** <br><br> *We do not monitor Medallia APIs because we don't currently access them. We run datadog synthetic tests in the absence of access to the api endpoints but will work with VSignals to set up the required datadog dashboards<br> [Medallia Synthetic Tests](https://vagov.ddog-gov.com/synthetics/tests?query=team%3Avfs-contact-center&cols=monitorStatus%2Ctype%2Cname%2Cdomain%2Ctags%2Cenvs%2Cteams%2Cuptime%2CmodifiedAt%2ClastRuns&from_ts=1727882899061&to_ts=1727886499061&live=true)*| NO |
| **Does your Datadog monitoring follow the appropriate tagging standards?** <br><br> *See above* | NO |
| **Do errors detected by Datadog go into a Slack notifications channel?** <br><br> *See above* | NO |
| **Does more than one person monitor the Slack notifications channel?** <br><br> *See above* | NO |
| **Do the team members monitoring the Slack channel have a system for acknowledging and responding to error notifications (on-call rotation)?** <br><br> *See above*| NO |

### User Experience
| **User Experience** | **Medallia** |
|---------------------|-----------|
| **Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application?** <br><br> *We will be following up with the VSignals team for more details.* | NO |

## Action Items and Questions

### Action Items
Follow up with the VSignals Team for the following items
- Setting up Datadog dashboard with required monitoring with associated slack notifications channel
- Accessing or creating a userflow diagram from the VSignals team
- Documentation on error handling in conjunction with VSignals

### Questions


