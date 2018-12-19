# Analytics Dashboard Product Outline

- GitHub Label: analytics
- Slack channel: #vetsgov-analytics
- Dashboard link: https://datastudio.google.com/u/0/reporting/144ch_tttTh_z6_mKoI5Wja0_xIKLY8lK/page/hZKZ 
- Point of Contact
  - Tony Whittaker, tony.whittaker@adhocteam.us
  - Ryan Luu, Ryan.luu@adhocteam.us

---

## User Problem Statement
The VA’s data is scattered across multiple systems and offices, analytics on veteran facing tools are difficult to access, and internal team members have a low level of confidence in the accuracy of the metrics. Uncertainty about how online metrics relate to other modes of interaction with the VA (e.g. in person, phone, and other offline interactions) compound these problems when seeking to measure the net effect of the products developed.

Difficulty in accessing information needed to make business decisions and evaluate usage limits opportunities to improve systems, slows development, increases the likelihood of incorrectly reporting key metrics to stakeholders, and creates confusion about what the status and overall performance of products are.

## Audiences
**Product Decision Makers**
1. Product Teams (Internal Development Teams)
2. Product Leads
3. Business Stakeholders - Product Owner
4. Platform User (AbleVets, BAH)

**Product Storytellers**
1. Digital service HQ leadership (Matt, Claire, Leadership)
2. VA Executives
3. White House - office of innovation
4. Congress
5. Internal DSVA Storytellers (Mandi, Clare, Mandi, Andrew, Lauren, etc)
6. Recruiting
7. VSOs

**Interested Influencers**
1. Other parties in the VA that don't necessarily do anything with data, but are interested in the information for shaping the direction of the VA (may look more favorably on the program, keep a good sense that we're doing good work)

## Needs of respective audiences
**Core Needs**
- Accuracy of data
- How the KPI's being tracked tie into larger priorities (KPIs per product & per initiative)
   - i.e. Platform Goal - 70% of applications submitted online -> product goals lead up to this
- Self Service **very important**

**1. Product Decision Makers**
- Trends in data that indicate that something is wrong or successful
- Timeliness of information - as close to real time as possible
- Comparative data against baselines (linear & side by side) - *dependent on baseline data*
- Comparative data from multiple channels (success metrics for HCA - web, phone, offline)
- Comparative industry data (Phase2, post MVP)
- Access to information that indicates the speed of processing (impacts user) **impactful**
- Call Volume to Call Center (categorized & general trends)
- Unmoderated Usability Feedback (Foresee, usertesting.com, heat mapping software, eye-tracking software etc.)
- Detailed view of Analytics (conversion funnels, in a given time period; what changed?)

**2. Product Storytellers**
- Access to information that indicates the *cost of processing* (impacts VA)
- High level statistics with context
  - Context of what the product is
  - Context for the impact to the user
  - Visual of before & after to clearly convey the changes
  - High level conversion funnels (
- User sentiment (quotes, social sentiment from Radian, Foresee)

## User Goals
- Increase visibility into VA.gov analytics by creating a self-service reporting system to allow users easily find key metrics and information across the suite of veteran facing tools.
- Allow users to access accurate reports quickly and easily. 
- Increase the ability of users to explore data across the various data sources related to veteran facing tools.

## Business Goals
- Unify multiple sources of data into a centralized reporting system, containing information on online tools, offline programs and applications, and other sources of data as required.
- Have greater clarity in the definition of KPIs
- Have greater confidence in the accuracy of the metrics tracked and reported to stakeholders and internal teams
- Expand relationships with other VA offices, allowing us to ingest data from sources administered by other programs and offices
- Being able to use analytics data as a non-manual gate for platform users (2nd tier goal)

## Constraints
- Comparative numbers are difficult to collect
- Unknown or unclear sources for none digital data (where do we go?, how is it collected?)
- We know the source of data, but have to ask for it manually & it isn't real time
- Data sources will update with varying frequency
- Don't have acknowledged KPIs for each product
- Don't have acknowledged objectives for Veteran Facing Services

## Assumptions
- The important datasets that we are interested in collecting are available and reasonably accessible to the team.
- We will be able to get reliable and consistent outputs from other offices to aggregate together as a part of our reporting.
- Product person would be willing to pull together data and provide context around them
- We'll be able to access who has ownership of the sources and reporting around them (who is the POC for these various sources)
- Validating that the numbers shared are accurate (webpage/person)


## Solution Approach
Currently the reporting systems we have in place are limited to Google Data Studio. 

There is a multi-step approach needed to address the needs of the various audiences. 
1. Setting effective KPIs across products/teams
2. Identify data gaps and work to aggregate data from various sources to fill those gaps
3. Build an analytics platform centralizes the metrics and makes self-service reporting simple

The proposed solution for #3 seeks to accomplish the objectives with new infrastructure to power dashboarding and reporting:

- Database layer allowing us to store, aggregate, and transform data from multiple sources into interpretable information.
- Dashboard/reporting layer allowing us to connect to the database and visualize information to users, allowing users to more easily find the information they’re seeking.
- Data loading/ ETL pipelines to retrieve and populate the database from original sources to the database.

This proposed structure allows us to easily store multiple sources of data, and visualize them in one place as well as provide infrastructure to be able to continue to iterate on and enhance reporting over time.

## Value Propositions
- Users will have an easier time finding the information they need on the products they are developing and administer
- Executives and stakeholders will be able to find top-level reporting on the net results of veteran facing tools built by the VA.gov team
- Analytics team will be able to better identify areas of concern, issues with products, and areas of opportunity.
- Iterating on the analytics will require aggregating metrics from various Va organizations enabling more accurate data for analyzing and reporting the value the new Va.gov platform is providing for Veterans.

## KPIs (Success Metrics)
- Increase in accuracy of reports and and transparency into metric definitions
- Increase in reporting frequency
– Increase in automated data aggregation vs. manual upload
- Increase in self-service usage and access to analytics information.

# Implementation Info
## Status
- As of 11/14/18, there is a live beta version of the analytics dashboard that exists for the brand consolidated VA.gov. 

## Technical Decisions
- Technical decisions are still to be determined as we scope the work and evaluate the best technical implementation plan.

## Team
- VA Digital Strategist: Andrew Hughey andrew.hughey2@va.gov 
- Product Manager: Ryan Luu ryan.luu@adhocteam.us 
- Design Lead: Emily Waggoner emily@adhocteam.us 
- Eng Lead: Tony Whittaker tony.whittaker@adhocteam.us 
 
## Screenshots
Current State
<img width="1680" alt="screen shot 2018-12-13 at 10 40 46 am" src="https://user-images.githubusercontent.com/7230519/49949421-9237ac00-fec3-11e8-9ccd-4fdad44972f6.png">

After



