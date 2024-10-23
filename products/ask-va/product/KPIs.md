# Ask VA KPIs
Last updated by @beckyphung on October 22, 2024

🚧 10/15 Update: We're working on updating this page right now.

These KPIs help us understand how Ask VA is meeting expected submitter outcomes and operational performance of our Ask VA application. We'll benchmark our KPIs against VA.gov metrics.

**Jump to:**
- [User experience KPIs](#user-experience-kpis)
- [Performance KPIs](#performance-kpis)

## User experience KPIs
User Experience KPIs measure how well Ask VA meets the needs and expectations of its users.

### Form
These are KPIs we want to actively track when we launch on VA.gov in 2025.
|Goal|KPI|2024 targets as of 10/23/24|
|:--|:--|:--|
|Make it easy to complete the form|**Satisfaction** - Increase customer satisfaction score (CSAT) to at least the VA.gov average|**VA.gov average**: 57%<br>**VA.gov forms average** (Forms measures this in a different way right now): 3.5|
|Make it easy to complete the form|**Form completion rate** - Increase the percentage of questions successfully sent by submitters to at least the VA.gov average form completion rate|**VA.gov form completion rate**: 29%|
|Make it easy to complete the form|**Time on task** - Decrease the average time it takes submitters to send a question from ??|**VA.gov time on task**: ??|

### Other form KPIs and metrics
Below are other form KPIs and metrics we'll want to track. 
- Form abandonment rate
- [other]

### Target metric sources
We pulled target metrics from the following dashboards in Domo: 
- [VA.gov Forms KPIS](https://va-gov.domo.com/page/447193050)
- [CSAT Score Dashboard](https://va-gov.domo.com/page/1545882322)

### Dashboard 
These are KPIs we want to actively track when we launch on VA.gov in 2025.
|Goal|KPI|Target definition|Actual targets as of [date]|
|:--|:--|:--|:--|
|Make it easy to use the dashboard|**Satisfaction** - Increase customer satisfaction score (CSAT) to at least the VA.gov average|- VA.gov all pages average CSAT<br>-VA Secure messaging average CSAT?|- VA.gov average: [##]%<br>-VA Secure messaging average: [##]%|
|Make it easy to use the dashboard|**Task completion** - Increase the number of replies to questions to ?? VA secure messaging?|VA secure messaging?|VA secure messaging? reply rate:[##]%|
|Make it easy to use the dashboard|**Time on task** - Decrease the average time it takes submitters to reply to a question from ??|VA secure messaging?|VA secure messaging? time on task:[##]%|

### Other dashboard KPIs and metrics
Below are other dashboard KPIs and metrics we'll want to add. 
- [other]

## Performance KPIs
Performance KPIs measure the technical aspects of Ask VA, such as speed, reliability, and scalability. They help assess how efficiently the software functions and whether it can handle increasing workloads.
|Goal|KPI|Target definition|Actual targets as of [date]|
|:--|:--|:--|:--|
|Ensure completely successful submissions|**Zero silent failures** - At any point in time, there are zero silent failures in sending or receiving data needed for VA agents to answer submitter questions|VA.gov silent failures rate|VA.gov silent failures rate: ??|

## Business line KPIs
The Ask VA CRM team tracks business line KPIs in [the AVA Power BI report](https://app.powerbigov.us/groups/me/reports/e895dbed-17f3-45d1-8219-2b3fe27b8b7e?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf&pbi_source=linkShare&bookmarkGuid=72bfed1d-0745-4452-a5e8-6a36551cb166). This includes metrics like: average resolution time (days to solve), number of authenticated submitters, submissions by category, and more.

----
🚧 Old text below

## KPIs (Pick max 3-5):

### Time it takes to submit an inquiry (Reduce this by X%)
If an inquiry was submitted, how long did it take from the start of a session to the end of the session?

Currently, submitters take an average time of ___ to submit an inquiry.

#### To capture the current KPI on this for ask.va.gov
- **For the submitters that submitted an inquiry**
  - What is the average time that it took them from the time that they **landed on the ask.va.gov** to the time that they clicked submit.
  - What is the average time that it took them from the time the **NEXT button is clicked in the “Tell us about your question” page** to the time that they clicked submit.

We do want the data to show authenticated vs. unauthenticated, and type of device. 

When we go live with our new front-end on VA.gov, submitters take an average time of ___ to submit an inquiry. 
- We will use Google Analytics to capture the start and end of a session.

### Percentage of submitters that complete the journey to submit their inquiry with information on what device was used (Increase by X%).
What percentage of submitters completed the user journey once beginning the session?

Currently, ____ percentage of users complete the user journey after beginning the session. 

#### To capture current KPI on this for ask.va.gov, the calculation would be as follows
- **Numerator**: Submitters that completed the journey (end on submission confirmation page)
- **Denominator**: Total number of submitters that click the NEXT button on “Tell us about your question” page (shows intent to submit an inquiry)

When we go live with our new front-end on VA.gov, ____ percentage of users complete the user journey after beginning the session. 
- We will use Google Analytics to capture what percentage of submitters completed the journey
- We do want the data to show authenticated vs. unauthenticated users and type of device. 


### Submitter satisfaction
Meet the target VA.gov satisfaction score (59% - fluid metric). Logic: 59% of the users rated their VA.gov experience as a 4 or 5 on 5 point scale (Medallia survey).

- To capture current KPI on this for ask.va.gov, we need to introduce the Medallia survey on ask.va.gov to capture this metric.
- To capture this metric in our new front-end on VA.gov, we will add the Medallia survey to VA.gov.

## Metrics that we want to monitor for awareness:
- % of rerouted cases
- Resolution time

## KPIs that are not a good fit at this time:
- 20% of submitters get answers to their questions without submitting an issue
- Case resolution time is decreased by x%
- Rerouted cases are reduced by 50%
