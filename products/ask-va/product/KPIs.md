<img width="895" height="511" alt="image" src="https://github.com/user-attachments/assets/0a5de22b-1151-44b9-943d-33fe127be039" /># Ask VA KPIs
Last updated by @beckyphung on April 10, 2025

These KPIs help us understand how Ask VA is meeting expected submitter outcomes and operational performance of our Ask VA application. We'll benchmark our KPIs against VA.gov metrics.

**Jump to:**
- [Monthly metrics](#monthly-metrics)
- [User experience KPIs](#user-experience-kpis)
- [Calculating user experience KPIs](#user-experience-kpis)
- [Performance KPIs](#performance-kpis)
- [Business lines](#business-lines)
- [Calculating KPIs](#calculating-kpis)

## Monthly metrics
**Notes**
- We launched Ask VA on VA.gov on 5/21/25. 
- Learn more about our CRM endpoints for the Performance KPIs [in this doc](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/integration/crm_api#ask-va-crm-api-endpoints).
- This only includes a few primary CRM endpoints
- Number in parenthesis represent the total (AKA the denominator for a percentage)

|KPI|May|Jun|Jul (Up to 7/22)|
|:--|:--|:--|:--|
|[Performance] Error rate, Submit inquiry (auth)|0.4% (16850)|0.3% (43517)|0.7% (31950)|
|[Performance] Error rate, Submit inquiry (unauth)|0.9% (248)|5.1% (574)|13.54% (363)|
|[Performance] Error rate, Reply|0.2% (2462)|0.1% (6827)|0.3% (4460)|
|[Performance] AVG p95 Latency, Submit inquiry (auth)|6.1s|5.8s|7.5s|
|[Performance] AVG p95 Latency, Submit inquiry (unauth)|2.0s|1.7s|1.6s|
|[Performance] AVG p95 Latency, Reply|3.1s|3.6s|3.4s|
|[Performance] Throughput, Submit inquiry (auth + unauth)|17098|44091|32313|
|[Form/Dashboard] Satisfaction (Intercept)|13% (24)|31% (62)|39% (28)|
|[Form/Dashboard] Satisfaction (Feedback button)|10% (80)|11% (200)|13% (105)|
|[Form] Completion rate|x|x|x|
|[Form] Time to submit form|x|x|x|
|[Dashboard] Reply rate|x|x|x|
|[Dashboard] Time to reply|x|x|x|

## User experience KPIs
User Experience KPIs measure how well Ask VA meets the needs and expectations of its users.

### Form KPIs
Targets: At least the VA.gov average for each KPI

- **Satisfaction (intercept)** - Increase customer satisfaction score (CSAT) 
- **Satisfaction (feedback button)** - Increase customer satisfaction score (CSAT) 
- **Form completion rate** - Increase the percentage of questions successfully sent by submitters 
- **Time to submit form** - Decrease the average time it takes submitters to send a question

#### Other form metrics
These are secondary metrics we can track
- Form abandonment rate, including the page at which users exit the form before submitting
- Page interactions, including clicks on phone numbers, the additional info component for military addresses, etc.
- Disaggregate by device, demographics, other filters, etc.

### Dashboard KPIs
Our targets are to meet at least the VA.gov average.

- **Reply rate** - Increase the number of replies to questions 
- **Time to reply** - Decrease the average time it takes submitters to reply to a question

### Other dashboard metrics
These are secondary metrics we can track
- Review only rate, which shows how many users only use the dashboard to review questions
- Page interactions, including clicks on tabs, next page, filter usage, accordion, etc.
- Disaggregate by device, demographics, other filters, etc.

## Performance KPIs
Performance KPIs measure the technical aspects of Ask VA, such as speed, reliability, and scalability. They help assess how efficiently the software functions and whether it can handle increasing workloads.

The OCTO error rate target is less than 1% and for latency is less than 4s.

- **Zero silent failures** - At any point in time, there are zero silent failures in sending or receiving data needed for VA agents to answer submitter questions
- **Error rate (Form submissions to CRM, Submit Inquiry)** - The number of non 2xx codes vs 2xx (successful) codes over a unit of time (e.g. per day)
- **Error rate (Dashboard replies to CRM, Submit Reply)** - The number of non 2xx codes vs 2xx (successful) codes over a unit of time (e.g. per day)
- **Latency** - Average time to receive a successful response (2xx) from CRM over a unit of time. Will be tracked for Form submissions and Dashboard replies
- **Throughput** - Number of Transactions per unit of time (e.g. per day). Can be split by: 1)Successes and Failures and 2) Form submissions and Dashboard replies 

### Other performance metrics
These are secondary metrics we can track
- Non-CRM API error rates: API owners have their own dashboards we can monitor

## Business lines
The Ask VA CRM team tracks business line KPIs in [the AVA Power BI report](https://app.powerbigov.us/groups/me/reports/e895dbed-17f3-45d1-8219-2b3fe27b8b7e?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&pbi_source=linkShare&bookmarkGuid=72bfed1d-0745-4452-a5e8-6a36551cb166). 

This includes metrics like: average resolution time (days to solve), number of authenticated submitters, submissions by category, and more.

## Calculating KPIs
This section explains how we calculate each KPI. 

### User experience KPIs

**How to calculate**
- **Form completion rate**: Count of successful Submit inquiry (auth + unauth) calls `divided by` Count of total users who visited /contact-us/ask-va/introduction & /contact-us/ask-va/ `multiplied by` 100
- **Dashboard completion rate**: Count of successful Reply calls `divided by` Count of total users who visited /contact-us/ask-va/user/dashboard/[inquiry number] `multiplied by` 100

**Data sources**
- [GA4 exploration](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/hQrn2ZlVRFGs0p-tT9Mgwg)
- [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard?fromUser=true&graphType=flamegraph&refresh_mode=paused&sort=time&from_ts=1751353200000&to_ts=1753209203948&live=false)
