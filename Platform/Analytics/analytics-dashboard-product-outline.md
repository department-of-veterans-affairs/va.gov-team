# Analytics Dashboard Product Outline

- GitHub Label: analytics
- Slack channel: #vetsgov-analytics
- Current dashboard link: https://datastudio.google.com/u/0/reporting/144ch_tttTh_z6_mKoI5Wja0_xIKLY8lK/page/hZKZ 
- Point of Contact
  - Tony Whittaker, tony.whittaker@adhocteam.us
  - Ryan Luu, Ryan.luu@adhocteam.us

---

## Overarching Problem
**The VA’s service use data is scattered across multiple systems and offices**. Holistic data on veteran facing service use is difficult to access and internal team members have a low level of confidence in the accuracy of the metrics. Uncertainty about how online metrics relate to other modes of interaction with the VA (e.g. in person, phone, and other offline interactions) compound these problems and creates confusion about the overall performance of products.  This problem will only be compounded as we bring more teams onboard to use the platform.

## User Groups
### Product Decision Makers
1. Product Teams (Internal Development Teams)
2. Product Leads
3. Business Stakeholders - Product Owner
4. Platform Users (AbleVets, BAH)

**User Problem Statement**

As a VA Product Decision Maker, it is difficult to measure the success/failure of the services that we're working building, limiting our teams' ability to make data informed decisions about how to prioritize work.

### Product Storytellers
1. Digital service HQ leadership (Matt, Claire, Leadership)
2. VA Executives
3. White House - office of innovation
4. Congress
5. Internal DSVA Storytellers (Mandi, Clare, Mandi, Andrew, Lauren, etc)
6. Recruiting
7. VSOs

**User Problem Statement**

As a VA Product Storyteller, it is difficult to access key metrics from VA.gov, which limits my ability to tell share the impact of our work on VA.gov.

## Goals
### User Goals / *Outcomes*
_Decision Makers_
1. I want to be able to **easily access** key metrics related to my products so that I can evaluate user behavior, identify painpoints and effectively prioritize my team's work.
1. I want to have confidence that the metrics we're collecting are **accurate** so that I can be confident when reporting data and empowered to make data driven decisions.
1. I want to be able to access metrics from **across different channels** so that I can establish a full understanding of how users are accomplishing their goals (online vs. offline) and where they face friction in process (call center, usability feedback, etc.).

_Storytellers_
1. I want to be able to **easily access** key metrics that highlight the work we're doing on VA.gov and the impact we're having on veterans *(I don't want to have to rely on others people to pull metrics)*.
1. I want to have confidence that the metrics we're collecting are **accurate** so that I can be confident when reporting data and generate support from other VA organizations in our initiatives.
1. I want to have **contextual information** about the metrics I'm reporting that will help me tell a compelling story about the work we're doing *(Context of what the product is, impact to the user, visuals of before & after to clearly convey the changes etc.)*

### Business Goals / *Objectives*
1. Increase the number of datasets the VA.gov team has access to
1. Create a consistent cadence for reporting metrics 
1. Improve accuracy of data collected & reported
1. Increase self service access to metrics and insights

## Assumptions
1. We will be able to validate the data we collect on the VFS platform for accuracy
2. Historical and offline data is available for our team to aggregate and leverage
3. We'll be able to identify and connect with stakeholders for other sources of VA data 
4. We will be able to get buy-in from other VA offices to report accurate data on a consistent cadence
5. VA development teams are willing to use data to drive decision making

## Value Propositions
The VA.gov Analytics Dashboard will unify the various sources of data into a centralized reporting system, containing information on online tools, offline programs (e.g. call center) and and other user feedback pathways (e.g. twitter). 

## Solution Approach
**1. Surface what we’re already tracking in Google Analytics**
We're already collecting a lot of data in GA. We need to surface the data in a way that is accessible and understandable so that we can start to  

**2. Set effective KPI's across**

**3. Identify data gaps and work to aggregate data from various sources to fill those gaps**

**4. Build an analytics platform centralizes the metrics and makes self-service reporting simple**




## Notes for Solution approac
- Unify multiple sources of data into a centralized reporting system, containing information on online tools, offline programs and applications, and other sources of data as required.
- Have greater clarity in the definition of KPIs
- Have greater confidence in the accuracy of the metrics tracked and reported to stakeholders and internal teams
- Expand relationships with other VA offices, allowing us to ingest data from sources administered by other programs and offices
- Being able to use analytics data as a non-manual gate for platform users (2nd tier goal)
- Users will have an easier time finding the information they need on the products they are developing and administer
- Executives and stakeholders will be able to find top-level reporting on the net results of veteran facing tools built by the VA.gov team
- Analytics team will be able to better identify areas of concern, issues with products, and areas of opportunity.
- Iterating on the analytics will require aggregating metrics from various Va organizations enabling more accurate data for analyzing and reporting the value the new Va.gov platform is providing for Veterans.

Currently the reporting systems we have in place are limited to Google Data Studio. 

The proposed solution for #3 seeks to accomplish the objectives with new infrastructure to power dashboarding and reporting:

- Database layer allowing us to store, aggregate, and transform data from multiple sources into interpretable information.
- Dashboard/reporting layer allowing us to connect to the database and visualize information to users, allowing users to more easily find the information they’re seeking.
- Data loading/ ETL pipelines to retrieve and populate the database from original sources to the database.

This proposed structure allows us to easily store multiple sources of data, and visualize them in one place as well as provide infrastructure to be able to continue to iterate on and enhance reporting over time.


## Success Metrics

### Target Outcomes
1. Increase consitency of metrics reporting
1. Increase number of data sets included *(offline metrics, related services)*
1. Increase in automated data aggregation vs. manual upload
1. Decrease the number of requests to clarify data outputs *(indicating an increase in data confidence)* 
1. Decrease the number of requests for analytics *(indicating an increase in self-service access)*

# Implementation Info
## Status
- As of 11/14/18, there is a live beta version of the analytics dashboard that exists for the brand consolidated VA.gov. 


## Needs of respective audiences
**Core Needs**
- Accuracy of data
- How the KPI's being tracked tie into larger priorities (KPIs per product & per initiative)
   - i.e. Platform Goal - 70% of applications submitted online -> product goals lead up to this
- Self Service **very important**
- Access to information that indicates the speed of processing (impacts user) **impactful**
- User sentiment (quotes, social sentiment from Radian, Foresee)



## Team
- VA Digital Strategist: Andrew Hughey andrew.hughey2@va.gov 
- Product Manager: Ryan Luu ryan.luu@adhocteam.us 
- Design Lead: Emily Waggoner emily@adhocteam.us 
- Eng Lead: Tony Whittaker tony.whittaker@adhocteam.us 
 
## Screenshots
Current State
<img width="1680" alt="screen shot 2018-12-13 at 10 40 46 am" src="https://user-images.githubusercontent.com/7230519/49949421-9237ac00-fec3-11e8-9ccd-4fdad44972f6.png">

After



