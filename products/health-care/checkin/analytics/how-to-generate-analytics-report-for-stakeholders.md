# How to Generate an Analytics Report for VA Stakeholders

These instructions outline how to generate and send an analytics report to our VA stakeholders

- [Frequency](#frequency)
- [Delivery](#delivery)
- [Format and Metrics to Report](#format-and-metrics-to-report)
- [Where to Get Each Metric ](#where-to-get-each-metric)

## Frequency
- Quarterly
    - Jan-Mar
    - Apr-Jun
    - Jul-Sep
    - Oct-Dec
 
## Delivery
- Via VA Email using this [Outlook template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/analytics/Modernized%20Check-in%20-%20Quarterly%20Metrics%20Report.oft)
- Distribution List
  - Kay Lawyer
  - Kristen McConnel
  - Stephen Barrs
- CC List
  - Lori Pusey
  - Anita Halici
  - Ben Brasso

## Format and Metrics to Report

| Product Name | External System Dependencies | Scheduled and Unscheduled downtime Strategy | Downtime  | Customer Satisfaction score Avg |
|:------------|:---------------------|:----------------------|:---------------------|:--------------------|
| eCheck-In (pre check-in and travel claim included) | Upstream: VeText; Downstream: vets-api, vets-website, VA Notify, VSE, VSE-CS | 1) VeText doesn't send 45MR, 2) VeText responds with unavailable message. 3) eCheck-in displays maintenance window, 4) Post messsage in DSVA to alert OCTO | **1-Downtime** | **2-Customer Satisfaction Score** |


| Transaction Name  | Count  | Error %  | Error Handling   | Latency (50/90p)  |
|:------------|:---------------------|:----------------------|:---------------------|:--------------------|
| Check-In Completed | **3-Check-in completion count** | **4-Check-in error rate** % total "complete check-in" api call failures | Warning alert to Veteran: Something went wrong, see staff to check in. | **5-Check-in Latency** sec |
| Pre Check-In Completed | **6-Pre-Check-in completion count** | **7-Pre-Check-in error rate** % total "complete pre-check-in" api call failures. | Error alert to Veteran: Something went wrong, call your VA health facility, you can still check in online on the day of your appointment.	| **8-Pre-Check-in Latency** sec
| Mileage-only travel submission in Check-In | **9-Travel via Check-in completion count** | **10-Travel via Check-in error rate** % total "vets-api call to BTS3" api call failures. |	Warning alert to Veteran: Something went wrong, you can still file within 30 days. | **11-Travel via Check-in Latency** sec

**Check-In usage**:
- Audience: **12-Check-in audience** unique sessions verified their identity; **13-Check-in verification rate** % verification rate
- Conversion: **14-Check-in conversion rate** % (verified their identity to completing check-in)
- Submissions: **15-Check-in submissions**
- Submission failures: **16-Check-in submission failues** total "complete check-in" api call failures; **17-Check-in failure rate** % total

**Pre Check-in Usage**:
- Audience: **18-Pre-Check-in audience** unique sessions verified their identity; **19-Pre-Check-in verification rate** % verification rate
- Conversion: **20-Pre-Check-in conversion rate** % (verified their identity to completing check-in)
- Submissions: **21-Pre-Check-in submissions**
- Submission failures: **22-Pre-Check-in submission failues** total "complete check-in" api call failures; **23-Pre-Check-in failure rate** % total
 
**Travel Claim via check-in**:
- Audience: **24-Travel via Check-in audience** unique sessions verified their identity; **25-Travel via Check-in verification rate** % verification rate
- Conversion: **26-Travel via Check-in conversion rate** % (verified their identity to completing check-in)
- Submissions: **27-Travel via Check-in submissions**
- Submission failures: **28-Travel via Check-in submission failues** total "vets-api call to BTS3" call failures; **29-Travel via Check-in submission failure rate** % total


##  Where to Get Each Metric 

> [!NOTE]  
> **NOTE: Dashboards should be filtered for the quarter for which metrics are being reported**

| Metrics   | Value/Calculation | Source Dashboard |
|-----------|--------------|------------------|
| 1-Downtime | 100 - Veteran facing - Mobile check-in: Uptime (Actual, not Objective) | [SLOs](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1713117063321&to_ts=1715709063321&live=true)|
| 2-Customer Satisfaction Score |  | Medallia |
| 3-Check-in completion count | API Request - check-in-user.*success | [PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 4-Check-in error rate | API Request - check-in-user.*failed divided by sum of API Request - check-in-user.*failed and API Request - check-in-user.*success multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 5-Check-in Latency | Check Veteran In - Duration from when a Veteran clicks 'Check in' and receives confirmation (p95) (Acutal, not Objective) | [SLOs](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1713117063321&to_ts=1715709063321&live=true)|
| 6-Pre-Check-in completion count | API Request - pre-check-in-user - success |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 7-Pre-Check-in error rate | API Request - pre-check-in-user - failed divided by sum of API Request - pre-check-in-user - failed and API Request - pre-check-in-user - success multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 8-Pre-Check-in Latency | Pre Check In - Duration from when a Veteran completes 'pre-check-in' and receives confirmation (p95) (Acutal, not Objective) | |
| 9-Travel via Check-in completion count| API Request - submit-travel-pay-claim.*success |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 10-Travel via Check-in error rate | API Request - submit-travel-pay-claim.*failed divided by sum of API Request - submit-travel-pay-claim.*failed and API Request - submit-travel-pay-claim.*success multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 11-Travel via Check-in Latency | Check Veteran In - Duration from when a Veteran clicks 'Check in' and receives confirmation (p95) (Acutal, not Objective) | [SLOs](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1713117063321&to_ts=1715709063321&live=true)|
| 12-Check-in audience | API Request - day-of-validating-user-dob - success |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 13-Check-in verification rate | API Request - day-of-validating-user-dob - success divided by API Request - day-of-validating-user-dob - started multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 14-Check-in conversion rate | API Request - check-in-user.*success divided by API Request - day-of-validating-user-dob - success multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 15-Check-in submissions |  API Request - check-in-user.*success |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 16-Check-in submission failues | API Request - check-in-user.*failed |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 17-Check-in failure rate | API Request - check-in-user.*failed divided by sum of API Request - check-in-user.*failed and API Request - check-in-user.*success multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 18-Pre-Check-in audience | API Request - preCheckIn-validating-user-.* - success |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 19-Pre-Check-in verification rate | API Request - preCheckIn-validating-user.*success divided by API Request - preCheckIn-validating-user.*started multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 20-Pre-Check-in conversion rate | API Request - pre-check-in-user - success divided by API Request - preCheckIn-validating-user-.* - started multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 21-Pre-Check-in submissions | API Request - pre-check-in-user - success |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 22-Pre-Check-in submission failues | API Request - pre-check-in-user - failed |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 23-Pre-Check-in failure rate | API Request - pre-check-in-user - failed divided by sum of API Request - pre-check-in-user - failed and API Request - pre-check-in-user - success multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 24-Travel via Check-in audience | nav-check-in.*to-travel-question.*clicked |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 25-Travel via Check-in verification rate | nav-check-in-yes-to-travel-question.*clicked divided by nav-check-in.*to-travel-question.*clicked multiplied by 100 | |
| 26-Travel via Check-in conversion rate | API Request - submit-travel-pay-claim.*success divided by nav-check-in-yes-to-travel-question.*clicked multiplied by 100 |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 27-Travel via Check-in submissions | API Request - submit-travel-pay-claim.*success |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 28-Travel via Check-in submission failues | API Request - submit-travel-pay-claim.*failed |[PCI Metrics](https://analytics.google.com/analytics/web/#/dashboard/HGz2gQKxStaxOOyKrbDT1Q/a50123418w177519031p176188361/_u.date00=20240101&_u.date01=20240325/) |
| 29-Travel via Check-in submission failure rate | API Request - submit-travel-pay-claim.*failed divided by sum of API Request - submit-travel-pay-claim.*failed and API Request - submit-travel-pay-claim.*success multiplied by 100 | |




    
