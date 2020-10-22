# KPI Dashboard Product Outline

#### Communications
- Team Name: VSP Analytics & Insights
- GitHub Label: `analytics-insights`
- Slack channel: [#vsp-analytics](https://dsva.slack.com/channels/vsp-analytics)
- Product POCs: Joanne Esteban, @joanne on Slack
- Stakeholders: VFS Teams (product managers and DEPO product owners)

#### Team Members

| Team Member  | Slack         |
|--------------|---------------|
| Amy Cesal    | @amy cesal    |
| Ben McGrady  | @ben mcgrady  |
| Brian Martin | @brian martin |
| Jon Wehausen | @jon wehausen |


---

## Overview
How might we enable customers to use qualitative and quantitative user data to build and iterate on VFSs.

## Problem Statement
Holistic veteran facing services data is difficult to access and interpret because the VA’s data is scattered across multiple analytics systems, is not captured at all, or is too complex to be read accurately or consistently. This limited holistic data makes it difficult to measure VA.gov digital services, limiting Product Teams’ ability to make data informed decisions about how to prioritize work, design the appropriate experiences, and measure their success.
 
## Desired User Outcomes

As a VA product decision maker (product managers and product owners), I want to see my product’s updated success metrics in one place so that I can easily measure my product’s performance and use data to inform my product decisions.

**Product Decision Maker:**
- Product Leads: Product Owners & Product Managers
- Secondary/Proxy: Product Teams

By not addressing product decision makers’ ability to easily see see and understand updates to , the risk is that KPIs and data not being tracked and therefore specific performance, usability, and outcomes metrics not being used to improve products being built and maintained on VA.gov.

**Future Scope:**

Leadership (DSVA and Contract Team Leads): Higher level decision makers & storytellers
Insights is currently able to provide ad hoc reporting to leadership requests

## Assumptions
- VA development teams are willing to use data on a consistent basis to drive decision making
- We will be able to validate the data we collect on the VFS platform for accuracy
- Historical and offline data is available for our team to aggregate and leverage
- We will be able to identify and connect with stakeholders for other sources of VA data
- We will be able to get buy-in from other VA offices to report accurate data on a consistent cadence
- Product “decision makers” include product owners and product managers, who lead overarching product decisions

## Risks
- Lack of use
- Decentivize transparency
- Data misuse
- Business traps

## User Goals

**User Goals**
- Users have an easy way to access, explore, and interpret available data
- Users are confident about the metrics and can easily share insights to their stakeholders
- Users have a single source to diagnose product design and performance improvements

**Business Goals**
- Identify high quality data sets that are valuable to diagnosing the health of VA.gov products
- Improve the quality and accuracy of data that is being collected and reported
- Increase ease of self-service access to metrics, target tracking, and insights
- Automate data aggregation and reporting as much as possible
- Integrate data analysis into the VFS design process

## Solution Approach

1. Surface the data we're already tracking
2. Solidify our reporting model
3. Help teams set effective KPIs across products
4. Centralize metrics & make self-service simple
5. Incorporate targets & data comparisons in a centralized tool
6. Generate buy in from VFS teams
7. Connect additional data sources
8. Stretch: Automate system for self-service

## Target Outcomes
- Use of both qualitative and quantitative data in decision making 
- Reported metrics throughout VFS public forums, such as Team of Teams and Slack
- Set product targets and tracked KPIs
- Number of available data sets (offline metrics, related services) 
- Automated data aggregation vs. manual upload 
*Positive Veteran user sentiment and decrease in frequency of errors on VA.gov so that Veterans have a better digital experience

### KPIs
Service Completion
- Adoption: % of VA.gov products with requested KPI dashboards
- Stickiness: % of recurring users 
- **North Star Metric - Task completion: % of users reporting KPI updates**
Satisfaction
- Customer Sentiment

### OKRs
O: Improve Data Quality: VFS teams use task completion in their success measurements to measure service completion.
KR: Publish standard queries for time to complete tasks metrics for 3 additional products.
KR: Increase new funneling conversions to 3 additional products.

O: Increase Product Stickiness: Increase active dashboard usage. 
KR: 100% of products launching through the Collaboration Cycle have quality KPIs set.
KR: Increase product KPIs tracked in Domo to 2.
KR: Increase average weekly product KPIs shared in Team of Teams to 4 teams

---

## Solution Narrative

### Previous Statuses

**Previous Attempts**

Pre-VSP

**Solution** 
Using Data Studio to surface metrics.

**Findings**
- Many metrics sources that would provide a more holistic product picture cannot be pulled into the dashboard
- Does not support metrics/KPI targeting

---

**1st Platform Iteration**

Q3 2019

**User Approach:** 
If we provide a tool that has easier to read Google Analytics data, will users be interested in using data to inform their product workflow?

**Solution:** 
A performance dashboard with consistent metrics across all VFS applications.

Google Sheets MVP that's manually updated every week and shared on the [#vfs-analytics](https://dsva.slack.com/channels/vfs-analytics) Slack channel. Surfaces weekly and monthly Google Analytics data with platform driven targets for success and links for users to drill deeper:
- Successful submissions
- Failed submissions
- Ratio of unique to total submissions	
- Funnel Conversion	
- Form Submissions or Total Events
- Unique Form Submissions or Unique Total Events

*With the following data identified as necessary for performance evaluation:*

| Metric                                      | Source                                      |
|---------------------------------------------|---------------------------------------------|
| Average Latency (response time)             | VSP Operations (Ops, Front End, Triage)     |
| Call Volume                                 | VSP Analytics & Insights - Contact Center   |
| Time to Completion                          | VSP Analytics & Insights - Google Analytics |
| Offline vs. Online Time to Benefits Receipt | VSP Analytics & Insights - PA&I             |
| Top Point of Entry                          | VSP Analytics & Insights - Google Analytics |
| Last Deploy                                 | VSP Operations                              |

Other user identified features:
- Ability to drill into the data
- Ability to share data
- Ability to easily see goals
- Ability to understand who to contact if the user has any questions

**Findings**
- Users were **excited** about the product & **interested in learning more.**
- Google Sheets was a **barrier to entry** for VA users & less trustworthy than an app.
- The displayed data didn’t give an easy way to see spikes or anomalies
- The data we had didn’t give users a sense of how their product was doing across multiple channels; **it wasn’t easy for users to understand** what could be available or the complete story of their product
- We tested the unavailable data to surface what metrics users would want to evaluate their products
- We had a influx of users, but we didn’t hear about the data being used for improvements or goal setting & **users ultimately dropped off.**

---

**2nd Platform Iteration**

Q4 2019

**User Approach:** 
If we provide a tool that has easier to read available data on a more trustworthy platform, will users be interested in using data to inform their product workflow?

**Solution:** 
A custom front end performance dashboard with consistent metrics across all VFS applications.

*User Researched Metrics:*

Available:
| Metric                                                          | Source                                      |
|-----------------------------------------------------------------|---------------------------------------------|
| Successful Online Form Submissions vs. Offline Form Submissions | VSP Analytics & Insights - Google Analytics |
| Error Rate on Submission Forms                                  | VSP Analytics & Insights - Google Analytics |
| HRC Call Center Calls                                           | VSP Analytics & Insights - Contact Centers  |
| White House Hotline Call Center Calls                           | VSP Analytics & Insights - Contact Centers  |

Unavailable:
| Metric                                           | Source                                      |
|--------------------------------------------------|---------------------------------------------|
| Time to Complete the Form                        | VSP Analytics & Insights - Google Analytics |
| Funnel Conversions                               | VSP Analytics & Insights - Google Analytics |
| Tier 1 Call Center Calls                         | VSP Analytics & Insights - Contact Centers  |
| Tier 3 Call Center Calls                         | VSP Analytics & Insights - Contact Centers  |
| ForeSee - Product Specific Veteran Feedback      | VSP Analytics & Insights - ForeSee          |
| ForeSee - Product Specific Customer Satisfaction | VSP Analytics & Insights - ForeSee          |
| Backend Systems Overall Downtime                 | VSP Back End Tools                          |
| Backend Systems - Services Downtime              | VSP Back End Tools                          |
| Average Latency (Response Time)                  | VSP Operations (Ops, Front End, Triage)     |
| Last Deploy                                      | ?                                           |

Other identified user features:
- Rollup "executive summary" table - showing the difference between targets and actual metrics
- Rollup "executive summary" chart - showing the percent difference of the target over time
- Form filters
- Log in credentials
- VA Design System

**Findings**
- We understand the strategic (performance, usability, and outcomes) metrics that users found useful to grade their products
- Users found the targets and percent difference from target over time charts helpful in tracking goals and spikes
- A custom front end solution is low velocity and **not scalable**
- Using an out of box Business Intelligence (BI) platform will be a quicker way of building dashboards
- In order to surface more user-identified, valuable metrics, the **team will need a data warehouse to expose these metrics**

---
**3rd Platform Iteration**

Q1 2020

**User Approach:** 
If we provide a tool that has easier to read data, will users be interested in using data to inform their product workflow?

**Solution:** 
Use the new BI Tool, Domo, to deliver the previous front end approach. 

**Findings**
- Users were still excited about the tool, but (particularly non-product decision makers) did not know how to use the data
- Users wanted training on how to use Domo
- Users were **still not logging in and checking** the data

---
**4th Platform Iteration**

Q2 2020

**User Approach:** 
If we build a KPI dashboard that has a surfaces team-driven KPIs (after providing VFS teams with resources for more robust KPIs), will users analyze the data and return to the product?

**Solution:** 
Use Domo to deliver team-identified KPIs. 
- We asked that the KPIs be completed, mapped to their product, and to OKRs.
- We created and sent out a self-serve KPI setting workshop on Mural to facilitate KPI setting

**Findings as of April 1, 2020**
- Users were very excited about using the data and had a good understanding of how to proceed with product and business decisions using the data
- Users were consistently returning to the tool
- Metrics are limited to whichever metrics the team deems important. Some of these metrics are still unavailable or unautomated without a data warehouse.

---

#### Current Iteration

Q3 2020-Present

**Findings as of October, 2020**
Data Quality
  - Increased the quality of available user interaction data:
     - Funnels: Google Analytics simplifies how users go through a funnel. With BigQuery, we have been testing using raw data & adding our own business logic
     - Time to Complete: We didn't have this with Google Analytics. This would have required a lot of customized, manual effort, and would have been brittle in how would have been implemented (nuanced user behavior would not have been accounted for).
Dashboard Stickiness
  - 213 Dashboard Views in Q3
    - Avg. 6 users/week
    - 3 dashboard exports/Q3. We need a better metric that we can automate for task completion.
Data Sharing
  - We had 3 out of 14 VFS teams (21.4%) present data *directly* from their KPI dashboards in Team of Teams, which isn't a great percentage but it's a start
  - We have an average of 5 VFS teams (36%) presenting analytics in Team of Teams per week, with 2-3 teams sharing data tracked by the Analytics team. 
  - While data sharing in general has improved over the year, it's not at the place we'd like it to be *and* we are looking to improve the quality of the metrics shared for decision making (such as number of successful submissions *and* funnel conversion percentage instead of number of successful submissions to paint a wider picture)
Sentiment
  - Some frustration with Domo features & “ill-defined” KPIs make it difficult to measure success

**User Approach:**
If we continue to expand on team-driven KPI dashboarding *and* provide user support to make it easier to create success measurements, will more VFS teams set, use and share KPIs more often?

If we give control back to the VFS teams while giving them basic product-analytics resources and support, will they use the right data to make product decisions?

**Solution Approach:**
Expand team-driven product KPI dashboards to other VFS teams, provide non-technical resources to help facilitate quality KPI setting, and increase data availability.

- Build and create robust product KPI dashboards so that users can easily access and analyze their product success metrics. 
- Use the dashboard in tandem with our data reporting processes so that users have incentive to use the data and add it to their workflow. 
- Ask for standardized KPIs, not mapped back to OKRs, but mapped back to user goals and outcomes so that VFS teams can set quality success metrics.
- Begin to build out BigQuery so that users can analyze more valuable metrics and their metrics on Domo can be more accurate and up-to-date
- Create non-technical resources, like an opinionated KPI framework and Analytics Playbook, so that users can more easily start KPI setting and create analytics-informed habits
- Research and MVP what a phased rollout dashboard might look like so that users can understand if they can continue rolling out or if they need pause and fix something
- MVP a “performance dashboard” so that users can review historical baseline website performance that would need to be healthy in order for teams to be able to focus on KPIs.


---
   
## Screenshots

[See Original Google Docs Outline](https://docs.google.com/document/d/1GuuhRXT8-NjEHdFHysNg1VA1o89Qr0_Mkrg46Q8kBeI/edit#)

### Before

### After

---

## Other Links
- [Metrics as Features](https://docs.google.com/presentation/d/1-6lS9XJ6GuK2QICVEjD1BdhPj8E8paNhB6KjDVwVCG8/edit#slide=id.p1)
- [Product Brief (PPT version)](https://docs.google.com/presentation/d/1sI32UbQRqpKqOhBT8lkUuOHgfD4UUkV2cd5Pzw1fP9w/edit#slide=id.g6b3252761e_0_418)
