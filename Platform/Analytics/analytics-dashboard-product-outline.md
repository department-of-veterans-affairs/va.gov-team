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
We're already collecting a lot of data in GA. We need to surface the data in a way that is accessible/understandable so that we can establish a full understanding of the data we currently have access to and begin to identify gaps.

**2. Set effective KPI's across Product Teams**
In order to demonstrate how effectively our products are achieving key business objectives, we'll work with each of our development teams to create **S**pecific, **M**easurable, **A**ttainable, **R**elevant, **T**ime-bound KPIs. Well defined  KPIs will ensure that the data we're collecting is valuable for making data driven decisions and also provide storytellers with context surrounding the numbers they are reporting.

**3. Solidfy our reporting model** 
Bringing consistency to the way the VA.gov and other VA orgs report data is a critical piece in building confidence in the VA's data accuracy. The suggested approach is to create a monthly reporting cadence where all VA orgs submit all of their organizations metrics on the 5th day of new month and to have all of that information backlinked to it's original source.

**4. Generate buy in from other VA organizations**
A large part of the WBC effort is getting other VA organizations to buy in to the vision for a unified VA.gov. Analytics is another critical piece in achieving this vision and getting their cooperation in synthesizing/reporting their groups' metrics will ensure that we can create a holistic view of how Veterans are interacting with the VA.

**5. Build an analytics platform that centralizes metrics and makes self-service simple**
To support the user and business goals, we will create an Analytics Dashboard that aggregates metrics across VA entities and makes them accessible for both internal teams and external stakeholders to promote transparency and drive towards a metrics focused culture at the VA.

## Success Metrics

### Target Outcomes
1. Increase consitency of metrics reporting
1. Increase number of data sets included *(offline metrics, related services)*
1. Increase in automated data aggregation vs. manual upload
1. Decrease the number of requests to clarify data outputs *(indicating an increase in data confidence)* 
1. Decrease the number of requests for analytics *(indicating an increase in self-service access)*

### Key Storypoints
*the following are key stories that VA storytellers need metrics to support*
- Compiled Product KPI's that lead to larger narratives - i.e. *"70% of Va's applications are submitted online"*
- Access to information that indivates the speed of receiving benefits - i.e. *"We've reduced the time it takes between a veteran applying and receiving education benefits from 1 month to 1 week"*
- User sentiment data to support narratives - i.e. *"85% of users that submitted Foresee survey in 2019 indicate that the new VA.gov helps them achieve their intended task"*

# Implementation Info
## Status
- **11/14/18** - beta version of the analytics dashboard that exists for the brand consolidated VA.gov built using Google Data Studio [link](https://datastudio.google.com/u/0/reporting/144ch_tttTh_z6_mKoI5Wja0_xIKLY8lK/page/OHKZ)
- **12/24/18** - spreadsheet of aggregated Vets/VA metrics was created to track month over month metrics of the modernized tools [link](https://docs.google.com/spreadsheets/d/1L_w8FhhcOttMitKB3_9ge8UN01GcSXmaPZWDIRJIhxI/edit#gid=551050318)
- **1/16/19** - evaluation of potential dashboard options [link](https://docs.google.com/document/d/1ZVata8XExaxf9ULj5dZ5YzwpVS2vMga8nMlofid35Jo/edit#)
- **1/24/19** - Google Analytics documentation [link](https://docs.google.com/document/d/1MlKWlW2MMVdnRGcvqDgp9AgXlVY9O9ulW6uxysXO1Ds/edit)


## Team
- VA Digital Strategist: Andrew Hughey andrew.hughey2@va.gov 
- Product Manager: Ryan Luu ryan.luu@adhocteam.us 
- Design Lead: Emily Waggoner emily@adhocteam.us 
- Eng Lead: Tony Whittaker tony.whittaker@adhocteam.us 
 
## Screenshots
Current State
<img width="1680" alt="screen shot 2018-12-13 at 10 40 46 am" src="https://user-images.githubusercontent.com/7230519/49949421-9237ac00-fec3-11e8-9ccd-4fdad44972f6.png">

After



