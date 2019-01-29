# Analytics Dashboard Product Outline

- GitHub Label: analytics
- Slack channel: #vetsgov-analytics
- Points of Contact:
  - Ryan Luu, ryan.luu@adhocteam.us
  - Tony Whittaker, tony.whittaker@adhocteam.us
  - Leah Bannon, leah.bannon2@va.gov 
  - Nedie Recel, nedie.recel@empiricalpath.com

---

## Overarching Problem
Holistic data on veteran facing service use is difficult to access because the VA’s data is scattered across multiple analytics systems or aren't captured at all (time between app submission to receipt of benefits).

This lack of holistic insights limits Product Teams' ability to deliver exceptional digital services and hinders VA Storytellers' ability to share the impact of the work being done at the VA.

## User Groups
### 1) Product Decision Makers
1. Product Teams (Internal Development Teams)
2. Product Leads
3. Business Stakeholders - Product Owner
4. Platform Users (AbleVets, BAH)

**User Problem Statement**

As a VA Product Decision Maker, it is difficult to measure the success/failure of the services that we're building, limiting our teams' ability to make data informed decisions about how to prioritize work.

### 2) Product Storytellers
1. Digital service HQ leadership (Matt, Claire, Charles)
2. VA Executives
3. White House - Office of Innovation
4. Congress
5. Internal DSVA Storytellers (Clare, Andrew, Lauren, Noreen, Cyrus, etc)
6. Recruiting
7. VSOs

**User Problem Statement**

As a VA Product Storyteller, it is difficult to access key metrics from VA.gov, which limits my ability to share the impact of our work on VA.gov.

## Goals
### User Goals - *Outcomes*
_Decision Makers_
1. I want to be able to **easily access** key metrics related to my products so that I can evaluate user behavior, identify painpoints and effectively prioritize my team's work.
1. I want to have confidence that the metrics we're collecting are **accurate** so that I can be confident when reporting data and empowered to make data driven decisions.
1. I want to be able to access metrics from **across different channels** so that I can establish a full understanding of how users are accomplishing their goals (online vs. offline) and where they face friction in process (call center, usability feedback, etc.).

_Storytellers_
1. I want to be able to **easily access** key metrics that highlight the work we're doing on VA.gov and the impact we're having on veterans *(I don't want to have to rely on others people to pull metrics)*.
1. I want to have confidence that the metrics we're collecting are **accurate** so that I can be confident when reporting data and generate support from other VA organizations in our initiatives.
1. I want to have **contextual information** about the metrics I'm reporting that will help me tell a compelling story about the work we're doing *(Context of what the product is, impact to the user, visuals of before & after to clearly convey the changes etc.)*

### Business Goals - *Objectives*
1. Identify high quality data sets that the VA.gov team does not currently have access to
1. Prioritize what missing data is valuable and increase the number of datasets we can access
1. Create a consistent cadence for reporting metrics
1. Improve the quality/accuracy of data that is being collected & reported
1. Increase self service access to metrics and insights
1. Automate data aggregation and reporting as much as possible

## Assumptions
1. We will be able to validate the data we collect on the VFS platform for accuracy
2. Historical and offline data is available for our team to aggregate and leverage
3. We'll be able to identify and connect with stakeholders for other sources of VA data 
4. We will be able to get buy-in from other VA offices to report accurate data on a consistent cadence
5. VA development teams are willing to use data to drive decision making

## Value Propositions
The VA.gov Analytics Dashboard will unify the various sources of data into a centralized reporting system, containing information on online tools, offline programs (e.g. call center) and other user feedback pathways (e.g. twitter). 

## Solution Approach
**1. Surface what we’re already tracking**
- We're already collecting a lot of data in GA and through our internal monitoring tools (Sentry, Grafana, Jenkins, etc). We need to surface the data in a way that is accessible/understandable so that we can establish a complete view of the data we currently have and begin to identify gaps.

**2. Solidfy our reporting model** 
- Bringing consistency to the way that VA.gov and other VA orgs report data is a critical piece in building confidence in the VA's data accuracy. The suggested approach is to create a monthly reporting cadence where all VA orgs submit their organization's metrics on the 5th day of every month. It is imperative that all reported data is backlinked to its original source to ensure accuracy and enable deeper exploration of data trends.

**3. Set effective KPI's across Product Teams**
- In order to demonstrate how effectively our products are achieving key business objectives, we'll work with each of our development teams to create **S**pecific, **M**easurable, **A**ttainable, **R**elevant, **T**ime-bound KPIs. Well defined  KPIs will ensure that the data we're collecting is valuable for making data driven decisions and will provide storytellers with context surrounding the numbers they are reporting.

**4. Centralize metrics and makes self-service simple**
- To validate that the solution approach is solving users' problems, our team will design, prototype, and usability test an Analytics Dashboard on both Decision Makers and Storytellers to further refine our understanding of their needs. We'll continue to iterate based on user research and are open to the solution looking/functioning differently for each audience.

**5. Generate buy in from other VA organizations**
- A large part of the WBC effort is getting other VA organizations to buy in to the vision for a unified VA.gov. Analytics is another critical piece in achieving this vision and getting cooperation from other VA orgs to report their metrics will allow us to create a holistic view of how Veterans are interacting with the VA. We will leverage the MVP from the previous step to encourage buy in and begin to drive change toward a data focused culture across VA.

**6. Automate system for self-sustainment**
- Automation is the key for the long term success of this initiative. The more we can automate, the less we rely on individuals manually exporting and inputing data. This will increase the consistency of data capture and ultimately enable reliable reporting. Additionally, we'll need to create simple methods for new data sets to be added for both platform teams and other VA orgs. The easier it is for others to add and access data, the more valuable the entire system becomes.


## Success Metrics
### Key Storypoints
*the following are key stories that VA storytellers need metrics to support*
- Compiled **Product KPI's that lead to larger narratives** - i.e. *"70% of Va's applications are submitted online"*
- Access to information that indicates the **speed of receiving benefits** - i.e. *"We've reduced the time it takes between a veteran applying and receiving education benefits from 1 month to 1 week"*
- **User sentiment data** to support narratives - i.e. *"85% of users that submitted Foresee survey in 2019 indicate that the new VA.gov helps them achieve their intended task"*

### Target Outcomes
1. Increase the number of available data sets *(offline metrics, related services)*
1. Increase in automated data aggregation vs. manual upload
1. Decrease the number of requests to clarify data outputs *(indicating an increase in data confidence)* 
1. Decrease the number of requests for analytics *(indicating an increase in self-service access)*

# Implementation Info
## Status
- **11/14/18** - beta version of the analytics dashboard that exists for the brand consolidated VA.gov built using Google Data Studio [link](https://datastudio.google.com/u/0/reporting/144ch_tttTh_z6_mKoI5Wja0_xIKLY8lK/page/OHKZ)
- **12/24/18** - spreadsheet of aggregated Vets/VA metrics was created to track month over month metrics of the modernized tools [link](https://docs.google.com/spreadsheets/d/1L_w8FhhcOttMitKB3_9ge8UN01GcSXmaPZWDIRJIhxI/edit#gid=551050318)
- **1/16/19** - evaluation of potential dashboard options [link](https://docs.google.com/document/d/1ZVata8XExaxf9ULj5dZ5YzwpVS2vMga8nMlofid35Jo/edit#)
- **1/24/19** - Google Analytics documentation [link](https://docs.google.com/document/d/1MlKWlW2MMVdnRGcvqDgp9AgXlVY9O9ulW6uxysXO1Ds/edit)


## Team
- VA Platform Lead: Leah Bannon, leah.bannon2@va.gov
- VA Product Lead: Andrew Hughey andrew.hughey2@va.gov 
- Product Manager: Ryan Luu ryan.luu@adhocteam.us 
- Design: Emily Waggoner emily@adhocteam.us 
- Engineering: Tony Whittaker tony.whittaker@adhocteam.us 
- GA: Nedie Recel nedie.recel@empiricalpath.com
 
## Screenshots
**Google Data Studio Dashboard** [link](https://datastudio.google.com/u/0/reporting/144ch_tttTh_z6_mKoI5Wja0_xIKLY8lK/page/OHKZ)
<img width="1680" alt="screen shot 2018-12-13 at 10 40 46 am" src="https://user-images.githubusercontent.com/7230519/49949421-9237ac00-fec3-11e8-9ccd-4fdad44972f6.png">

<br>

**Spreadsheet of Aggregated Vets/Va Metrics** [link](https://docs.google.com/spreadsheets/d/1L_w8FhhcOttMitKB3_9ge8UN01GcSXmaPZWDIRJIhxI/edit#gid=551050318)
<img width="1625" alt="screen shot 2019-01-24 at 1 44 47 pm" src="https://user-images.githubusercontent.com/7230519/51700931-4279f380-1fde-11e9-9d87-8953239a38d9.png">

