# Ask VA KPIs
Last updated by @beckyphung on January 16, 2025

🚧 10/24 Update: We don't have all targets currently. Also, we're currently working on updating the **Performance KPIs** section.

These KPIs help us understand how Ask VA is meeting expected submitter outcomes and operational performance of our Ask VA application. We'll benchmark our KPIs against VA.gov metrics.

**Jump to:**
- [Monthly KPIs](#monthly-kpis)
- [User experience KPIs](#user-experience-kpis)
- [Calculating user experience KPIs](#user-experience-kpis)
- [Performance KPIs](#performance-kpis)

## Monthly KPIs
<details>
<summary>April 2025</summary>   

**Date:** [start date] to [end date]

**Performance**
- Error rate: 
- Latency: 
- Throughput:

**Form**
- Satisfaction (Feedback button): 
- Experience (Intercept): 
- Completion rate: 
- Time to submit form: 

**Inbox**
- Satisfaction (Feedback button): 
- Experience (Intercept): 
- Reply rate: 
- Time to reply: 

</details>

## User experience KPIs
User Experience KPIs measure how well Ask VA meets the needs and expectations of its users.

### Form
These are KPIs we want to actively track when we launch on VA.gov in 2025.
|KPI|Current (2025)|2024 targets as of 10/24/24|
|:--|:--|:--|
|**Satisfaction** - Increase customer satisfaction score (CSAT) to at least the VA.gov average|23%|**VA.gov average (2024)**: 30%<br>**VA.gov forms average**: ❓|
|**Experience** - Increase experience rating to at least the VA.gov average|TBD after mid-Mar VA.gov launch|**VA.gov average**: 57%<br>**VA.gov forms average**: 3.5|
|**Form completion rate** - Increase the percentage of questions successfully sent by submitters to at least the VA.gov average form completion rate|35%|**VA.gov average form completion rate**: 29%|
|**Time to submit form** - Decrease the average time it takes submitters to send a question from ❓|TBD after mid-Mar VA.gov launch|❓|

#### Other form metrics
These are other form metrics to track. We don't need these for launch.
- Form abandonment rate, including the page at which users exit the form before submitting
- Page interactions, including clicks on phone numbers, the additional info component for military addresses, etc.
- Disaggregate by device, demographics, other filters, etc.

### Dashboard 
These are KPIs we want to actively track when we launch on VA.gov in 2025.
KPI|Current (2025)|2024 targets as of 10/24/24|
|:--|:--|:--|
|**Satisfaction** - Increase customer satisfaction score (CSAT) to at least the VA.gov average|TBD after mid-Mar VA.gov launch|**VA.gov average** (2024): 30%|
|**Experience** - Increase experience rating to at least the VA.gov average|TBD after mid-Mar VA.gov launch|**VA.gov average (2024)**: 57%|
|**Reply rate** - Increase the number of replies to questions to ❓|TBD after mid-Mar VA.gov launch|❓|
|**Time to reply** - Decrease the average time it takes submitters to reply to a question from ❓|TBD after mid-Mar VA.gov launch|❓|

### Other dashboard metrics
These are other dashboard metrics to track. We don't need these for launch.
- Review only rate, which shows how many users only use the dashboard to review questions
- Page interactions, including clicks on tabs, next page, filter usage, accordion, etc.
- Disaggregate by device, demographics, other filters, etc.

## Calculating user experience KPIs
### Satisfaction
- **Data source**: Answers to "What is your overall satisfaction with this site?" in the Medallia feedback button survey. [See survey questions in GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Medallia%20feedback%20surveys.md)
- **How to calculate**: ((Count of "Satisfied" responses `plus` Count of "Very satisfied" responses) `divided by` Count of total responses) `multiplied by` 100

### Experience
- **Data source**: Answers to "How was your experience contacting VA today?" in the Medallia intercept survey. [See survey questions in GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Medallia%20feedback%20surveys.md)
- **How to calculate (Option 1)**: ((Count of "Satisfied" responses `plus` Count of "Very satisfied" responses) `divided by` Count of total responses) `multiplied by` 100
   - The [CSAT Score Dashboard](https://va-gov.domo.com/page/1545882322) in Domo calculates the percentage. 
- **How to calculate (Option 2)**: Transform options ("Very bad" to "Very good") to 1 to 5 scale. With 1 being "Very bad" and 5 being "Very good." Then `average` responses
   - The [VA.gov Forms KPIs dashboard](https://va-gov.domo.com/page/447193050) in Domo calculates the average.

### Form completion rate
- **Data source**: [Google Analytics](https://analytics.google.com/analytics/web/#/p419143770/reports/intelligenthome) from "[GA4] VA.gov - Production" property
- **How to calculate**:
   - Count of clicks on submit button `divided by` Count of total users who visited Ask VA `multiplied by` 100

### Reply rate
- **Data source**: [Google Analytics](https://analytics.google.com/analytics/web/#/p419143770/reports/intelligenthome) from "[GA4] VA.gov - Production" property
- **How to calculate**:
   - Count of clicks on submit button `divided by` Count of total users who open question details page `multiplied by` 100
     
### Time to submit form
- **Data source**: [Google Analytics](https://analytics.google.com/analytics/web/#/p419143770/reports/intelligenthome) from "[GA4] VA.gov - Production" property
- **How to calculate**:
   - Time when user clicked submit button `minus` time when user arrived on unauthenticated form introduction page OR authenticated dashboard page

### Time to reply
- **Data source**: [Google Analytics](https://analytics.google.com/analytics/web/#/p419143770/reports/intelligenthome) from "[GA4] VA.gov - Production" property
- **How to calculate**:
   - Time when user clicked send button `minus` time when user arrived on question details page

## Performance KPIs
Performance KPIs measure the technical aspects of Ask VA, such as speed, reliability, and scalability. They help assess how efficiently the software functions and whether it can handle increasing workloads. The following metrics can be viewed for specific date ranges and/or by environment.
|KPI|Current (2025)|Actual targets as of [date]|
|:--|:--|:--|
|**Zero silent failures** - At any point in time, there are zero silent failures in sending or receiving data needed for VA agents to answer submitter questions|VA.gov silent failures rate: Currently, as defined, there are no silent failures that should occur and need to be tracked||
|**Error rate (Form submissions to CRM, Submit Inquiry)** - The number of non 2xx codes vs 2xx (successful) codes over a unit of time (e.g. per day)|TBD after mid-Mar VA.gov launch||
|**Error rate (Dashboard replies to CRM, Submit Reply)** - The number of non 2xx codes vs 2xx (successful) codes over a unit of time (e.g. per day)|TBD after mid-Mar VA.gov launch||
|**Latency** - Average time to receive a successful response (2xx) from CRM over a unit of time. Will be tracked for Form submissions and Dashboard replies.|TBD after mid-Mar VA.gov launch||
|**Throughput** - Number of Transactions per unit of time (e.g. per day). Can be split by: 1)Successes and Failures and 2) Form submissions and Dashboard replies |TBD after mid-Mar VA.gov launch||
|**Other things**|TBD after mid-Mar VA.gov launch||

### Other performance metrics
These are other performance metrics to track. We don't need these for launch.
- Non-CRM API error rates: API owners have their own dashboards which the Ask VA team can monitor

## Business lines
The Ask VA CRM team tracks business line KPIs in [the AVA Power BI report](https://app.powerbigov.us/groups/me/reports/e895dbed-17f3-45d1-8219-2b3fe27b8b7e?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&pbi_source=linkShare&bookmarkGuid=72bfed1d-0745-4452-a5e8-6a36551cb166). This includes metrics like: average resolution time (days to solve), number of authenticated submitters, submissions by category, and more.
