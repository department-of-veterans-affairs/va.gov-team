# How to Generate an Analytics Report for VA Stakeholders

These instructions outline how to generate and send an analytics report to our VA stakeholders

- [Frequency](#frequency)
- [Metrics and Where to Get Them](#metrics-and-where-to-get-them)

## Frequency
- Monthly (1st of every month)

##  Metrics and Where to Get Them 

**NOTE: All dashboards should be filtered for the last 1 month**

#### 1-Downtime
- Value = 100 - **Veteran facing - Mobile check-in: Uptime (Actual, not Objective)**
- Source = [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true) 

#### 2-Customer Satisfaction Score
- Value =
- Source =
- Calculation =
  
#### 3-Check-in completion count
- Value = **TOTAL Check Ins (Unique)**
- Source = [eCheck-in PCI GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 4-Check-in error rate
- Value = **TOTAL vets-api fails when attempting to check in (Unique)** divided by **TOTAL Check Ins (Unique)** and multiplied by 100 
- Source = [eCheck-in PCI GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 5-Check-in Latency
- Value = **Check Veteran In - Duration from when a Veteran clicks 'Check in' and receives confirmation (p95) (Acutal, not Objective)**
- Source = [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true) 

#### 6-Pre-Check-in completion count
- Value = **Completed Pre Check Ins (Unique)** 
- Source = [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 7-Pre-Check-in error rate
- Value = **API Request Fails When Attempting to Complete Pre Check In (Non Unique)** divided by **Completed Pre Check Ins (Unique)** multiplied by 100 
- Source = [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 8-Pre-Check-in Latency
- Value = **Pre Check In - Duration from when a Veteran completes 'pre-check-in' and receives confirmation (p95) (Acutal, not Objective)** 
- Source = [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true)

#### 9-Travel via Check-in completion count
- Value = **TOTAL # of BT claims from eCheck-in successfully received by BTS3** 
- Source = [Bene Travel Claims from eCheck-in Report Dashboard](https://analytics.google.com/analytics/web/#/dashboard/-LnfQTl3ShO8HbLIPQ7ZEQ/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 10-Travel via Check-in error rate
- NOTE: Always use column **Unique Events**
- Value = Sum of **BTSSS API Error** divided by the sum of **BTSSS API Started** multiplied by 100 
- Source = [Top Events report in Universal GA - All Va.gov Website Data [Production] Google Analytics View](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240331&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22submit-travel-pay-claim%20-%20started%7Csubmit-travel-pay-claim-45MR%20-%20started%7Csubmit-travel-pay-claim%20-%20failed%7Csubmit-travel-pay-claim-45MR%20-%20failed%22,0%5D%5D/)

#### 11-Travel via Check-in Latency
- NOTE: SAME AS NUMBER 5
- Value = **Check Veteran In - Duration from when a Veteran clicks 'Check in' and receives confirmation (p95) (Acutal, not Objective)** 
- Source = [SLO Dashboard](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1709658513005&to_ts=1712250513005&live=true) 

#### 12-Check-in audience
- NOTE: Always use column **Unique Events**
- Value = **API Request - day-of-validating-user-dob - success** 
- Source = [GA filter for API Requests for PCI](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=5000&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22check-in%7Cday-of%7Csubmit-travel-pay-claim%22,0%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22Search%20Result%22,1%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22API%20Request%22,0%5D%5D&explorer-table-dataTable.sortColumnName=analytics.eventAction&explorer-table-dataTable.sortDescending=true/) 

#### 13-Check-in verification rate
- NOTE: Always use column **Unique Events**
- Value = **API Request - day-of-validating-user-dob - success** divided by **API Request - day-of-validating-user-dob - started** multiplied by 100 
- Source = [GA filter for API Requests for PCI](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=5000&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22check-in%7Cday-of%7Csubmit-travel-pay-claim%22,0%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22Search%20Result%22,1%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22API%20Request%22,0%5D%5D&explorer-table-dataTable.sortColumnName=analytics.eventAction&explorer-table-dataTable.sortDescending=true/)

#### 14-Check-in conversion rate
- NOTE: Always use column **Unique Events**
- Value = **API Request - day-of-validating-user-dob - success** divided by sum of **API Request - check-in-user-45MR - success** and **API Request - check-in-user - success** multiplied by 100
- Source = [GA filter for API Requests for PCI](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.rowCount=5000&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22check-in%7Cday-of%7Csubmit-travel-pay-claim%22,0%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22Search%20Result%22,1%5D,%5B0,%22analytics.eventAction%22,%22PT%22,%22API%20Request%22,0%5D%5D&explorer-table-dataTable.sortColumnName=analytics.eventAction&explorer-table-dataTable.sortDescending=true/)

#### 15-Check-in submissions
- Value = **TOTAL Check Ins (Unique)**
- Source = [eCheck-in (PCI)](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 16-Check-in submission failues
- Value = **TOTAL vets-api fails when attempting to check in (Unique)**
- Source = [eCheck-in (PCI)](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 17-Check-in failure rate
- Value = **TOTAL vets-api fails when attempting to check in (Unique)** divided by the sum of **TOTAL Check Ins (Unique)** and **TOTAL vets-api fails when attempting to check in (Unique)** multiplied by 100 
- Source = [eCheck-in (PCI)](https://analytics.google.com/analytics/web/#/dashboard/1iHzB1FJTq6wHfngzN0LQg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 18-Pre-Check-in audience
- Value = **Successful Pre Check In ID Authentication (Unique)** 
- Source = [Pre-Check-In (PCI) Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) 

#### 19-Pre-Check-in verification rate
- Value = **Successful Pre Check In ID Authentication (Unique)** divided by **Started Pre Check In ID Authentication (Unique)** multiplied by 100 
- Source = [Pre-Check-In (PCI) Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 20-Pre-Check-in conversion rate
- Value = **Completed Pre Check Ins (Unique)** divided by **Successful Pre Check In ID Authentication (Unique)** multiplied by 100 
- Source = [Pre-Check-In (PCI) Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 21-Pre-Check-in submissions
- Value = **Completed Pre Check Ins (Unique)**' 
- Source = [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 22-Pre-Check-in submission failues
- Value = **API Request Fails When Attempting to Complete Pre Check In (Non Unique)** 
- Source = [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) 

#### 23-Pre-Check-in failure rate
- Value = **API Request Fails When Attempting to Complete Pre Check In (Non Unique)** divided by sum of **Completed Pre Check Ins (Unique)** and **API Request Fails When Attempting to Complete Pre Check In (Non Unique)** multiplied by 100 
- Source = [Pre-Check-in (PCI) GA Dashboard](https://analytics.google.com/analytics/web/#/dashboard/DgeEvA4JTruKLAW444xXOg/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 24-Travel via Check-in audience
- Value = **TOTAL # of pageviews of "Do you want to file a BT claim?" page** 
- Source = [Bene Travel Claims from eCheck-in Report Dashboard](https://analytics.google.com/analytics/web/#/dashboard/-LnfQTl3ShO8HbLIPQ7ZEQ/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) 

#### 25-Travel via Check-in verification rate
- Value = **TOTAL # of "Yes" was answered to "Do you want to file a BT claim?"** divided by **TOTAL # of pageviews of "Do you want to file a BT claim?" page** multiplied by 100 
- Source = [Bene Travel Claims from eCheck-in Report Dashboard](https://analytics.google.com/analytics/web/#/dashboard/-LnfQTl3ShO8HbLIPQ7ZEQ/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 26-Travel via Check-in conversion rate
- Value = **TOTAL # of BT claims from eCheck-in successfully received by BTS3** divided by **TOTAL # of "Yes" was answered to "Do you want to file a BT claim?"** multiplied by 100 
- Source = [Bene Travel Claims from eCheck-in Report Dashboard](https://analytics.google.com/analytics/web/#/dashboard/-LnfQTl3ShO8HbLIPQ7ZEQ/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) 

#### 27-Travel via Check-in submissions
- Value = **TOTAL # of BT claims from eCheck-in successfully received by BTS3** 
- Source = [Bene Travel Claims from eCheck-in Report Dashboard](https://analytics.google.com/analytics/web/#/dashboard/-LnfQTl3ShO8HbLIPQ7ZEQ/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/)

#### 28-Travel via Check-in submission failues
- NOTE: Always use column **Unique Events**
- Value = **API Request - submit-travel-pay-claim-45MR - failed** plus **API Request - submit-travel-pay-claim - failed** 
- Source = [GA filter for API Requests for PCI](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240331&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22submit-travel-pay-claim%20-%20failed%7Csubmit-travel-pay-claim-45MR%20-%20failed%22,0%5D%5D/)

#### 29-Travel via Check-in submission started
- NOTE: Always use column **Unique Events**
- Value = Sum of **API Request - submit-travel-pay-claim-45MR - started** and **API Request - submit-travel-pay-claim - started** 
- Source = [GA filter for API Requests for PCI](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240331&explorer-segmentExplorer.segmentId=analytics.eventAction&explorer-table.plotKeys=%5B%5D&explorer-table.advFilter=%5B%5B0,%22analytics.eventAction%22,%22RE%22,%22submit-travel-pay-claim%20-%20started%7Csubmit-travel-pay-claim-45MR%20-%20started%22,0%5D%5D/)



    
