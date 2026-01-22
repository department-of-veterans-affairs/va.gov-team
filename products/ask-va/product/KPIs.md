# Ask VA KPIs
Last updated by @StephanieVargoIBM on January 14, 2026

As of 1/16/26 performance and Medallia feedback KPI's will no longer be updated in this file.  The source of truth can be found at, https://dvagov.sharepoint.com/:x:/r/sites/AskVA/_layouts/15/Doc.aspx?sourcedoc=%7B636E4E88-1964-49E1-9DA9-3DFCD18B455C%7D&file=Ask%20VA%20KPIs%20on%20VA.gov.xlsx&action=default&mobileredirect=true.

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
- Learn more about our CRM endpoints [in this doc](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/integration/crm_api#ask-va-crm-api-endpoints).
- This only includes a few primary CRM endpoints
- Number in parenthesis represent the total (AKA the denominator for a percentage)

|KPI|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|
|:--|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|[Performance] Error rate, Submit inquiry (auth)|0.4% (16850)|0.3% (43517)|0.8% (49123)|.17% (57451)|.62% (62841)|.39% (69368)|.83% (52030)|1.31% (52559)|
|[Performance] Error rate, Submit inquiry (unauth)|0.9% (248)|⚠️5.1% (574)|⚠️14.5% (556)|10.75% (584)|⚠️13.6% (578)|⚠️13.46% (630)|⚠️10.63% (494)|3.14% (500)|
|[Performance] Error rate, Submit reply|0.2% (2462)|0.1% (6827)|0.5% (6870)|.13% (8601)|0.2% (9029)|.54% (10092)|.48% (9653)|.95% (8173)|
|[Performance] AVG p95 Latency, Submit inquiry (auth)|⚠️6.1s|⚠️5.8s|⚠️8.0s|6.26s|⚠️5.95s|⚠️6.56s|⚠️8.29s|⚠️9.5s|
|[Performance] AVG p95 Latency, Submit inquiry (unauth)|2.0s|1.7s|1.7s|1.57s|1.59s|1.65s|1.97s|1.9s|
|[Performance] AVG p95 Latency, Submit reply|3.1s|3.6s|⚠️4.3s|4.35s|3.4s|⚠️4.82s|⚠️5.3s|⚠️6.15s|
|[Performance] Throughput, Successful Submit inquiry (auth + unauth) calls|14744|43887|49219|57842|62942|69589|52035|52303|
|[Performance] Throughput, Successful Submit reply calls|2341|6819|4836|8593|9019|10042|9607|8095|
|[Form/Dashboard] Satisfaction (Intercept)|13% (24)|31% (62)|39% (112)|30% (168)|32% (173)|26% (177)|34% (168)|31% (150)|
|[Form/Dashboard] Satisfaction (Feedback button)|10% (80)|11% (200)|14% (217)|13% (212)|12% (204)|7% (253)|5% (308)|4% (423)|
|[Form] Completion rate|36%|39%|35%|27%|29%|31%|28%|27%
|[Dashboard] Reply rate|21%|23%|20%|22%|21%|24%|24%|21%
|[Form] Time to submit form|x|x|x|x|x|x|x|x|
|[Dashboard] Time to reply|x|x|x|x|x|x|x|x|

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
Performance KPIs measure the technical aspects of Ask VA, such as speed, reliability, and scalability. They help assess how efficiently the software functions and whether it can handle increasing work[...]

The OCTO error rate target is less than 1% and for latency is less than 4s.

- **Zero silent failures** - At any point in time, there are zero silent failures in sending or receiving data needed for VA agents to answer submitter questions
- **Error rate, Submit inquiry (auth)** - Decrease error rate
- **Error rate, Submit inquiry (unauth)** - Decrease error rate
- **Error rate, Submit reply** - Decrease error rate
- **AVG p95 Latency, Submit inquiry (auth)** - Decrease latency
- **AVG p95 Latency, Submit inquiry (unauth)** - Decrease latency
- **AVG p95 Latency, Submit reply** - Decrease latency
- **Throughput, Successful Submit inquiry (auth + unauth) calls** - Increase throughput

### Other performance metrics
These are secondary metrics we can track
- Non-CRM API error rates: API owners have their own dashboards we can monitor

## Business lines
The Ask VA CRM team tracks business line KPIs in [the AVA Power BI report](https://app.powerbigov.us/groups/me/reports/e895dbed-17f3-45d1-8219-2b3fe27b8b7e?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&pb[...]

This includes metrics like: average resolution time (days to solve), number of authenticated submitters, submissions by category, and more.

## Calculating KPIs
This section explains how we calculate each KPI. 

### User experience KPIs
- **Satisfaction (intercept and feedback button)**:((Count of "Satisfied" responses `plus` Count of "Very satisfied" responses) `divided by` Count of total responses) `multiplied by` 100
- **[Form] Completion rate**: Count of successful Submit inquiry (auth + unauth) calls `divided by` Count of total users who visited /contact-us/ask-va/introduction & /contact-us/ask-va/ `multiplied b[...]
- **[Dashboard] Reply rate**: Count of successful Reply calls `divided by` Count of total users who visited /contact-us/ask-va/user/dashboard/[inquiry number] `multiplied by` 100

### Performance KPIs
- **Error rate, Submit inquiry (auth)**: Count of 4xx and 5xx errors DIVIDED BY total number of requests
   - Filter: `payload.action` is create
- **Error rate, Submit inquiry (unauth)**: Count of 4xx and 5xx errors DIVIDED BY total number of requests
   - Filter: `payload.action` unauth_create
 - **Error Rate: Error rate, Reply**: Count of 4xx and 5xx errors DIVIDED BY total number of requests
   - Filter: `payload.action` is create_reply
- **AVG p95 Latency, Submit inquiry (auth)**: View Latency visual [in our Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard?tile_focus=3079491609040160)
- **AVG p95 Latency, Submit inquiry (unauth)**: View Latency visual [in our Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard?tile_focus=3079491609040160)
- **AVG p95 Latency, Submit reply**: View Latency visual [in our Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard?tile_focus=3079491609040160)
- **Throughput, Successful Submit inquiry (auth + unauth) calls**: Count of 2xx requests
   - Filter: `payload.action` is unauth_create OR create

**Data sources**
- [GA4 exploration](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/hQrn2ZlVRFGs0p-tT9Mgwg)
- [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/ye3-k3q-unc/ask-va-dashboard)
- Medallia/VSignals feedback (DM Becky for access)
