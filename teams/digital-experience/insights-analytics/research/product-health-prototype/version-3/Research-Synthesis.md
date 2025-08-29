# Results Summary
Based on a previous Product Health prototype which was created in Google Sheets and iterated on to include more data and sources of information.  

[The research plan can be found here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/research/product-health-prototype/version-3/research-plan.md)

## Research Questions
1. What decisions would analytics data help you make?
1. Once you had the data, what sort of action would you take?
1. How specific are you expecting the data to be? Per product? Per form? Per page? And why is that level of detail useful?
1. How often would you ideally look at analytics data? Monthly? Weekly? Daily?
1. What metric is most important to you for determining the health of a product?
1. What is the purpose of this page?
1. What do you think you can do here?
1. What steps would you take next?
1. What is this metric and what is it telling you about your product?
1. What would you do with that information?
1. Are there any metrics that are unclear?
1. Are there any metrics that you don't need?
1. Are there any metrics that are missing?

## Hypothesis
Product owners and stakeholders are able to understand the health status of their products which will allow them to make decisions on what needs attention and how their product is doing in relation to their goals.

## Method

### Dates
October 7th - 16th, 2019

### Participants
* 7 product owners:
  * Product lead for VSP
  * 2 Leads for the platform
  * Product Manager - VAOS
  * Designer at DSVA
  * Engineering lead, VSP program
  * Product Lead for VSA
  
### What We Did
We conducted seven 45 minute, remote, moderated usability testing sessions using zoom and giving users access to a flat jpg of the tool that they could control themselves.

Sessions were conducted online using Zoom.

[The conversation guide can be found here.](https://github.com/department-of-veterans-affairs/va.gov-team/issues/1584#issuecomment-531985559)

## Synthesis
Using [session notes](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsp/teams/insights-analytics/research/product-health-prototype/version-3)
[The Miro board can be found here.](https://miro.com/app/board/o9J_kwEr7ek=/) 

## Insights & Recommendations

### Need for a triage tool
* Users expressed intrest in having a constantly updating real-time dashboard that would alert them to spikes and monitor downtime
* There currently is no tool that does this, so this seems like a basic gap that needs to be filled before people can think about long term health
* Users would only take action if things were unhealthy but wouldn't take action if the product was healthy

**Recommendation:** Build a seporate triage tool for monitoring downtime and alerting when spikes occur.


#### *Product Health* implies a different tool
* Some users identified product health as is if the product was *accessible, up and running* rather than the long term health of the product
* Product Health is a term in the devloper world that is used in relation to status and down time, rather than long term health

**Recommendation:** Change the name of the tool to something different, like the insights tool to imply long term health rather than just up or down status.


### Multiple user groups
* Use case 1: individual product person who cares about their product
* Use case 2: cares about many individual products
* Use case 3: high level and want to see products combined or on the same page

**Recommendation:** Start with Case 1 & 2 then eventually build a dashboard that shares high level stats from the more in depth dashboards for leadership to get a higher level overview.

#### Defining targets for metrics
* Users wanted an achieveable baseline for metrics
* leadership expected to be involved in defining numbers
* teams also wanted to be involved in determining targets
* Some users though the targets should be same across all metrics

**Recommendation:** Have a set standard based on an average and have a process for teams to work with leadership to adjust

### Meter
* users almost universally did not trust a combined metric
* Wanted to be able to adjust the weighing of the number themselves
* Didn't know what the one number was based on
* would be a good sceenshot for a presentation

**Recommendation:** Get rid of the meter and the combined score. It was not serving the purpose to be the one metric for the overall health of the product if people don't understand or trust it.

### KPIS
* users wanted the metrics to relate to KPIs
* wanted them to directly corrolate to the metrics on the dashboard

**Recommendation:** Keep the KPIs section at the top because users found value in seeing them as they went through the dashboard. Have product owners set targets and goals for all metrics show in the KPI planning sessions so the dashboard more closely relates to KPI goals.

### Forms vs. Tools
* different metrics between the two, namely successful submissions, intro page views, and funnel converstions

**Recommendation:** create a modified template for a tool with slightly different metrics


#### Funnel converstions over time
* Heard twice the desire to see how funnel converstions change over time. 1 month and 2 months seems like an appropriate comparisson when prodded. 

**Recommendation:** Add another chart of funnel conversions from previous month


#### 30 day rolling total
* heard from 2 users confusion about the 30 day total and what that meant

**Recommendation:** Add metrics monthly or weekly, rather than having a rolling 30 day total


### downtime in minutes
* heard from multiple users that downtime per month was not a metric that they wanted the number of exact minutes for
* had a hard time calculating how many minutes were in a month to find a total amount of minutes for comparison

**Recommendation:** Changed minutes of downtime per month into % downtime midway through testing, and users were ok with that metric and confusion stopped. Stick with % of downtime


### Thumbs up // thumbs down emoji
* Particpants were confused with the emojis being the only factor to show if a positive metric was good or bad

**Recommendation**: Changed the emojis to a slider scale with a blue to red bar, and this stopped being an issue. Continue to itterate along this path 


### Precise data
* Users wanted to know the exact data points

**Recommendation**: Allow users to hover over each point to see the value. 

