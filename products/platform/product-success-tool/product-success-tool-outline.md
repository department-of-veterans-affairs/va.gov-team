# Product Success Tool Outline

#### Communications
- Team Name: VSP Analytics & Insights
- GitHub Label: `analytics-insights`
- Slack channel: vsp-analytics
- Product POCs: Joanne Esteban, @joanne on Slack
- Stakeholders: VFS Teams (product managers and DEPO product owners)

#### Team Members

| Team Member  | Slack         |
|--------------|---------------|
| Amy Cesal    | @amy cesal    |
| Brian Martin | @brian martin |
| Jon Wehausen | @jon wehausen |


---

## Overview
How might we enable customers to use qualitative and quantitative user data to build and iterate on VFSs.

## Problem Statement
Holistic veteran facing services data is difficult to access and interpret because the VA’s data is scattered across multiple analytics systems, is not captured at all, or is too complex to be read accurately or consistently. This limited holistic data makes it difficult to measure VA.gov digital services, limiting Product Teams’ ability to make data informed decisions about how to prioritize work, design the appropriate experiences, and measure their success.
 
## Desired User Outcomes

As a VA product decision maker, I want to see my product’s success metrics in one place so that I can easily measure my product’s performance and use data to inform my product decisions.

**Product Decision Maker:**
- Product Leads: Product Owners & Product Managers
- Secondary/Proxy: Product Teams

By not addressing product decision makers’ ability to see metrics & KPIs in one place, Insights risks KPIs and data not being tracked and therefore specific performance, usability, and outcomes metrics not being used to improve products being built and maintained on VA.gov.

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
7. Automate system for self-service

## KPIs
- Use of both qualitative and quantitative data in decision making 
- Reported metrics throughout VFS public forums, such as Team of Teams and Slack
- Set product targets and tracked KPIs
- Number of available data sets (offline metrics, related services) 
- Automated data aggregation vs. manual upload 
*Positive Veteran user sentiment and decrease in frequency of errors on VA.gov so that Veterans have a better digital experience

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

Google Sheets MVP that's manually updated every week and shared on the #vfs-analytics Slack channel. Surfaces weekly and monthly Google Analytics data with platform driven targets for success and links for users to drill deeper:
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

### Current Status

Q1-Q2 2020

**User Approach:** 
If we provide a tool that surfaces user/team-identified KPIs, will users be interested in using data to inform their product workflow?

**Solution:** 
Use Domo to deliver team-identified KPIs. We asked that the KPIs be completed, mapped to their product, and to OKRs.

**Current Findings** (as of April 1, 2020)
- Users were very excited about using the data and had a good understanding of how to proceed with product and business decisions using the data
- Users were consistently returning to the tool
- Metrics are limited to whichever metrics the team deems important. Some of these metrics are still unavailable or unautomated without a data warehouse.

**Current Approach**
Expand KPI bet to other VFS teams. Test user stickiness and check in for user sentiment.

---
   
## Screenshots

[See Google Docs Outline](https://docs.google.com/document/d/1GuuhRXT8-NjEHdFHysNg1VA1o89Qr0_Mkrg46Q8kBeI/edit#)

### Before

### After

---

## Other Links
- [Metrics as Features](https://docs.google.com/presentation/d/1-6lS9XJ6GuK2QICVEjD1BdhPj8E8paNhB6KjDVwVCG8/edit#slide=id.p1)
- [Product Brief (PPT version)](https://docs.google.com/presentation/d/1sI32UbQRqpKqOhBT8lkUuOHgfD4UUkV2cd5Pzw1fP9w/edit#slide=id.g6b3252761e_0_418)
