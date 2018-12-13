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

## User Goals
- Increase visibility into VA.gov analytics by creating a self-service reporting system to allow users easily find key metrics and information across the suite of veteran facing tools.
- Allow users to access accurate reports quickly and easily. 
- Increase the ability of users to explore data across the various data sources related to veteran facing tools.

## Business Goals
- Unify multiple sources of data into a centralized reporting system, containing information on online tools, offline programs and applications, and other sources of data as required.
- Have greater clarity in the definition of KPIs, and confidence in the accuracy of the metrics tracked and reported to stakeholders and internal teams.
- Expand relationships with other VA offices, allowing us to ingest data from sources administered by other programs and offices.

## Assumptions
The important datasets that we are interested in collecting are available and reasonably accessible to the team.
We will be able to get reliable and consistent outputs from other offices to aggregate together as a part of our reporting.
Data sources will update with varying frequency as our access to new sources grows, with the ultimate goal of getting as close to real-time information as possible.
Not all data sources of interest will update frequently.
Significant time will be required to investigate and understand how data external to the VA.gov team is created and how to interpret this information.

## Scope of Requirements
- We’re still working with Andrew Hughey to define the scope here. Some initial focal points are setting up more granular analytic views around specific user goals. (i.e. what different paths are users taking to get to MHV for refilling their prescription?)

## Solution Approach
Currently the reporting systems we have in place are limited to Google Data Studio. The proposed solution seeks to accomplish the objectives with new infrastructure to power dashboarding and reporting:

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

After



