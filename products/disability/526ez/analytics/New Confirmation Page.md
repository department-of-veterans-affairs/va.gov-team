# New Confirmation Page Metrics

## Introduction
This document outlines the analytics strategy for the New Confirmation Page feature, which we believe will improve Veteran experience by setting truthful expectations for submission timelines and increasing Veteran confidence in VA's efforts to submit their claim. By monitoring both quantitative and qualitative metrics, we'll gain insight into the feature's performance and its impact on Veterans. This document provides an overview of the success criteria, the metrics we will track, and the targets and expectations we have set for each metric.

### Feature Overview
Once a Veteran hits “submit,” the messaging they receive does not reflect the true submission status, setting false expectations for Veterans on the timeline for their claims processing, and leading to a lack of confidence.

Further details can be found in the [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/product/feature-briefs/Submission%20Experience.md).

### Feature Success Criteria
* Ensure expectations of the submission timeline are set truthfully for the Veteran
* Ensure that Veterans feel confident the VA is trying to submit their claim
* Ensure the language we use is straightforward so that Veterans feel understanding submission status is trivial

### KPIs
OCTO 2024 Key Result: CSAT for our web products have increse by 5 points.

## 3.0 Metrics
### 3.1 Quantitative Metrics
#### **Duplicate Submissions** 
Count of duplicate submissions by month
* Data Collection: Track the number of duplicate submissions received each month
* Target: Reduce the count of duplicate submissions by 5% month-over-month (MoM)
* Rationale: Decreasing duplicate submissions indicates improved clarity and understanding of the submission process among Veterans 

Duplicate submissions are an important metric we need to monitor as we roll out New Confirmation Page. When Veterans hit the submit button more than once, it's usually because they're feeling unsure or uneasy about the expected timeline for processing their application, or they encountered an issue on the confirmation page that left them wondering if we even received their information. Sometimes they may want to change something about their application and figure it's easier to start from scratch. Some Veterans have been waiting a while without any updates, so they submit another application just to be safe.

## 4.0 Collection Methods

We’ll use a few collection methods to monitor the success of New Confirmation Page. Further investigation into the exact techniques for tracking is needed.

### 4.1 Data Sources

* Leverage existing EP400 metrics (not CFI)
* 526 Datadog monitoring to track the count of duplicate submissions (not CFI)
* we can check by user_uuid to submit_all_claim
* Google analytics events for
  * disability-526EZ--submission-successful
  * disability-526EZ--submission-failed
  * disability-526EZ--submission-failed-client
  * disability-526EZ--submission-taking-too-long

### 4.2 Collection Schedule
To ensure we have a comprehensive understanding of the New Confirmation Page's performance and its impact on Veterans, we'll follow a structured data collection schedule.

Week 1 (starting the day after release):
- We'll monitor Google Analytics (GA) and backend metrics daily
- Frequent monitoring will allow us to quickly identify and address any immediate issues or anomalies

Week 2:
- We'll reduce monitoring to twice per week, checking in on Tuesdays and Thursdays
- This will give us a chance to track emerging trends while still staying on top of the data

Weeks 3-8:
- We'll move to a weekly cadence, analyzing the data every Friday
- Weekly check-ins will keep us consistent in making informed decisions based on the insights we gather

Month 3 and beyond:
- We'll transition to monthly monitoring, on the first Friday of each month. This is a more appropriate cadence for qualitative metrics.
- As the New Confirmation Page stabilizes, monthly check-ins will be sufficient to track long-term trends and identify areas for continuous improvement

We'll adjust this schedule as needed based on our findings and any trends or issues that arise. The goal is to be strategic about resource allocation while ensuring we maintain a clear understanding of the New Confirmation Page's performance over time.

## 5.0 FAQ
### How many failed submission are there per month on average?
There are 489 failed submissions per month on average, according to Google Analytics.
### What additional metrics will you be looking at as this feature matures?
<details><summary>Calls to Contact Center</summary>
Count of calls to the call center regarding submission status by month
* Data Collection: Monitor the number of calls received by the contact center related to submission status inquiries each month
* Target: Reduce the count of calls to the contact center about submission status by 5% month-over-month (MoM) 
* Rationale: Fewer calls regarding submission status suggest that customers are better informed about the timeline and feel more confident in the process.

Another important metric to track is the count of calls to the Contact Center regarding submission status each month. This qualitative metric provides insights into cases where Veterans feel uncertain about the status of their application and seek clarification by calling the Contact Center. An increase in such calls may indicate that the New Confirmation Page is not effectively communicating the submission status or timeline, leading to heightened anxiety or concern among Veterans.

By tracking how many duplicates we get each month, monitoring the volume of calls to the Contact Center about submission status, and understanding Veteran confidence we'll have a better sense of whether New Confirmation Page is effectively solving the Veteran problem. If quantitative numbers start trending down, and qualitative metrics trend upwards, we'll know we're on the right track - the new page is giving Veterans the clarity and confidence they need to submit once and be done. But if duplicates are still coming in at the same rate (or worse, increasing), calls to the Contact Center remain high, and Veteran confidence is unchanged or decreasing, that's our cue to take another look and see where we can improve things.
</details>

<details><summary>Veteran Confidence</summary>
Measure Veteran confidence in VA’s efforts to submit their application
* Data Collection: Gather feedback through surveys, user interviews, or other customer feedback channels to assess customer confidence levels.
* Expectation: The New Confirmation Page is expected to have a positive impact on Veteran confidence
* Learning Objective: Understand the extent to which the New Confirmation Page influences Veteran confidence in VA’s efforts to submit their claims.
* Action Plan: Analyze qualitative feedback to identify trends, insights, and areas for improvement in the New Confirmation Page design and messaging.
</details>

## 5.0 Open Questions
* Will the same GA events continue to fire after changed to the Confirmation banner?
* Using existing EP400 metrics, is there a way to extrapolate duplicate claims where the submission is identical or doesn’t contain a new condition?
* Do we have Datadog metrics for duplicate submissions?
* Leveraging recent improvements to accessing Contact Center data, how might we get data on calls related to submission status?
* How will we collect data on Veteran confidence? Is Medallia the right tool for this?
