## [Performance Dashboard](https://www.va.gov/performance-dashboard/)


## Overview

The IIR team is implementing a new iteration of the [Performance Dashboard](https://www.va.gov/performance-dashboard/) that will include two parts: 1) an overhaul of the backend to modernize the codebase and connect the data to the actual data source 2) updating the frontend designs to be more aligned with design and accessibility standards and to provide more context and meaning to the data points.


## Problem Statement(s)

- VA Stakeholders don't have a trusted, accurate, and public-facing data source to view va.gov performance (v1)

- The performance dashboard is manually updated which leaves room for unreliable data (v1)

- The performance dashboard codebase is greatly outdated and is not modernized for easy iteration updates (v1.5)
  
- The dashboard does not follow the latest VA design system and accessibility requirements (v2)

- VA Stakeholders don’t have enough context and meaning to the data displayed on the dashboard i.e. benchmarking, comparison, etc. (v2)


## User(s)

- Internal VA Product Stakeholders who:

  - Want to oversee the performance of VA digitally offered services

  - Want reliable data to make decisions

  - Take insightful action based on data

- Veterans Affairs committees staff members who:

  - Want visibility into the usage of VA digitally offered services

- Public who:

  - Want transparency into the performance of VA services


## Desired User Outcomes

- VA Stakeholders will have easy access to view key data points about VA.gov. 

- VA Stakeholders will be able to derive meaning from the data displayed- views will be able to uncover insights and help inform decisions.


## Undesired User Outcomes

- VA Stakeholders are overwhelmed with the information and don’t know how to interpret it.


## Desired Business Outcomes

- Application is brought to a modern state where changes can be clearly and easily made in a timely manner.

- All data will be populated automatically, match the source of truth, and follow a clear pattern for the future.

- The dashboard will follow the latest VA design system and accessibility requirements.


## Undesired Business Outcomes

- Adding additional technical complexity that lengthens the time to add features and data to the application.

- Data processing remains manual or adds additional manual work to maintain the application.

- Changes to the application result in reduction of resources and progress from other projects.


## Measuring Success

### KPIs

|                                                  |                         |            |
| ------------------------------------------------ | ----------------------- | ---------- |
| **Description**                                  | **30 Days Post Launch** | **Target** |
| Adherence to Design System Standardization       |                         | Yes        |
| 100% of data displayed on dashboard is automated |                         | 100%       |

### Diagnostic Metrics

The only metric that we can gauge pre and post launch is Page Views. The others we plan to monitor as baseline metrics post launch.

|                                                                                  |                |                         |                         |                         |
| -------------------------------------------------------------------------------- | -------------- | ----------------------- | ----------------------- | ----------------------- |
| **Metric**                                                                       | **Pre Launch** | **30 Days Post Launch** | **60 Days Post Launch** | **90 Days Post Launch** |
| # of page views per month                                                        | 3,500          |                         |                         |                         |
| # of “Share” clicks                                                              | N/A            |                         |                         |                         |
| % of page actions/page views (filtering, sorting, sharing, detailed pages, etc.) | N/A            |                         |                         |                         |


## Assumptions

- Most people visit Domo to get information about transactions within VA.

- Dashboard may not be updated with the current Design System components.

- Consider any overlaps with the VA Secretary’s Dashboard (shared as PDF; Jeff will share with our team).


## Solution Approach

- Automating updates will provide a viable alternative to the current manual data entry process

- We will need to re-run accessibility tests and make adjustments as needed

- Interface will need to be brought up to current VA design system standards

- Storytelling needs a “facelift” as well

- Transactions should be the primary focal point


## Launch Strategy

- Work with Michelle Correll, Communications Lead for OCTO, to disseminate dashboard link to VA committee members during monthly presentation.

- Chris Johnston, Deputy CTO for OCTO, to send out an email to additional stakeholders who have not seen or referenced the dashboard previously. 


## Launch Dates

v1 | Connecting the data source

- Target Launch Date: November 2023

- Actual Launch Date: November 1, 2023

v1.5 | Modernizing the codebase

- Target Launch Date: May 31, 2024

- Actual Launch Date: TBD

v2 | Implementing FE designs

- Target Launch Date: Jun 30, 2024

- Actual Launch Date: TBD

Post Launch Evaluation | 30, 60, & 90 Days


## Screenshots

Before

![](https://lh7-us.googleusercontent.com/8ygfIfT7OldSzmRvhlzfbUT1s08j8wZTUctwJWnSd6gbr5TW8U0Jp-S1586paMLyQ732VqgFGRsSSycrsjM076G2yVlNj45Tt0IcQjIJThtQfSyRyxLMV-pyVUgoPe9Xr9TRopp9RfH_LuguNx6Vs-o)

![](https://lh7-us.googleusercontent.com/skW22YQy-n_5G8atf8X8Z6PWtG810tBUzIe8c3TsM53AfXMWHIG5Uiq4wWGEzdgpfpMNDdxl8oavJv0NxqXIbWqxuAvey-fd6vZEx7mNZop_dRwGbocABFq1oU_lk-PpK1sjkEOLXoItpDoQf7_FF8g)

![](https://lh7-us.googleusercontent.com/l1VHdzvrAJQCsy2N2yQ-vzHVZbbzbRXK-ikFPpPtV1l1ZT8bXtxNMLH4jQbnpcnw_7SgGKk10fF170_IYtyEylCVaXbBCza1z9ikzCr35Vt-fmIWo14pZeUzKShVWvHG_LXlaByOvH2Z69TJWLorwxU)

![](https://lh7-us.googleusercontent.com/AK-ftMMgsDj1LCeQ9S2fq2M1I1xO2JSBuKFqzEKP6u1o-edPMHRvMSHxA223LqPRkjzgIQrSxz9LUw_i633m4wd30nIqQVYrD62gGwx8lyCtYIggxWyqdTrHt_ZXDouuZoUn55aTb9flc4UsyH0_kEk)

After- In Progress


## Communications

Team Name: Innovate, Iterate, & Run

GitHub Label: [performance-dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/performance-dashboard)

Slack Channel: [#iir-product-teams-public](https://dsva.slack.com/archives/C05RJS5DANT)


## Team Members

VAPO: Jeff Barnes

Program Manager: [Emily Allan](mailto:emily@oddball.io)

Delivery Manager: [Tabinda Syed](mailto:tabinda.syed@oddball.io)

Product Manager(s): [Kathleen Kufalk](mailto:kathleen.kufalk@oddball.io) [Pete Egan](mailto:peter.egan@oddball.io) [Megan Commons](mailto:megan.commons@oddball.io)

Engineering: <john.rodriguez@adhocteam.us> [Kyle Henson](mailto:kyle.henson@oddball.io) [Adam King](mailto:adam.king@oddball.io)

Research/Design: <raquel.eisele@adhocteam.us>


## Stakeholders

The internal VA product stakeholders we did usability tests with:

- Michelle Correll, Communications Lead for OCTO
  
- Jonathan Katora

- Melissa Rebstock

- Lauren Alexanderson
