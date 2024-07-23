# Monitors and Alerts for form 10-10d
- Last Edit date: 7/23/2024 

This document lists the various monitors and alerts in place for form 10-10d.

All alerts are set up to populate the **#ivc-forms-datadog** slack channel.


## Monitor: Missing Pega Status
### Triggered: Missing Pega Status
#### Alert Reason:
### Alert Reason on What Triggers Missing Pega Status

The Missing Pega Status alert is triggered when certain conditions regarding the processing of forms are met. Specifically, if any form submissions do not receive a status update from the third-party system, Pega, it will generate an alert. For example, if forms are submitted but Pega fails to acknowledge or update their status within a specified timeframe, this will trigger the alert. This helps us identify and address any issues promptly. Additionally, the alert is triggered if the number of forms missing status updates exceeds a certain threshold. This threshold is set to ensure that any significant delays or failures in form processing are quickly flagged. By monitoring these alerts, we can maintain the efficiency and reliability of the form submission process.

#### Team Actions:
- IVC PRODUCT WILL ADD

### Recovered: Missing Pega Status
#### Alert Reason
- In order to troubleshoot the cause of the Missing Pega Status, follow these step:
- Determine which environment the failure resides on: vets-api development, staging, sandbox, and production environments currently reside in EKS (Amazon Elastic Kubernetes Service).
#### Team Actions:
- No Action needed, this alert is letting us know that volumes are back to normal

## Monitor: IVC ChampVA Forms Pega Callback API Errors
### Triggered: IVC ChampVA Forms Pega Callback API Errors
#### Alert Reason
- IVC ENG PLEASE ADD
#### Team Actions
- IVC PRODUCT WILL ADD

### Recovered: IVC ChampVA Forms Pega Callback API Errors
#### Alert Reason
- IVC ENG PLEASE ADD
#### Team Actions:
- No Action needed, this alert is letting us know that the error rate is back to zero
