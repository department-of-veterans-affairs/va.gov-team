# Product Outline

---

## Overview

The Platform Analytics team seeks to provide analytics as a data platform and educational resources and support for VFS teams to build towards data-informed outcomes.

## Problem Statement

VFS teams need analytics on top of their user research to better determine success so that they can understand what's truly meaningful to prioritize and build for Veterans. 

How might we empower VFS teams to make more data-informed decisions for better Veteran outcomes?

## Desired User Outcomes

When we refer to VFS teams, we are referring to the product decision makers on these teams. 

The primary users are people who are making the product decisions on the VFS teams:

- Product Managers
- DEPO Product Leads/Owners

The secondary users are:

- DEPO leadership
- Developers
- Designers

Our desired outcomes are as follows:

- VFS teams can **set** metrics:
  - North Star metrics and KPIs - so that they understand what success means for their products and how to measure that success; so that they can produce data-informed definitions of product success and goals
  - Leading indicators - so that they can move the needle on their success metrics so that they can understand what to look out for it outcomes are not being met
- VFS teams can **track** their data: 
  - so that they can get frictionless access to accurate, trustworthy, and up-to date data relevant to their products
- VFS teams can **analyze** their data:
  - so that they can get insights into how the data affects their products' value and performance
- VFS teams can **assess** and **leverage** their data:
  - so that they can implement insights into solution narratives, including but not limited to:
    - sprint objectives
    - roadmaps/PI planning
    - product outlines (solution narratives, KPIs, & OKRs) 
  - so that they drive towards data-informed outcomes: their data-informed actions drive post-production changes (or no changes and they have to pivot their strategy) in their KPIs or North Star metric
- VFS teams can **report** data:
  - so that they can support their product design & engineering recommendations or pivots to stakeholders
  - so that they can share data-informed outcomes and use cases with the rest of the VA to encourage data-informed decision making and data sharing

## Undesired User Outcomes

- VFS teams are [data-*driven*, not data-informed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/analytics-playbook.md#what-is-data-informed-decision-making--why-use-it-for-vagov-services): 
  - they only use quantitative data to inform decision making and don't also look at user research
  - they use vanity metrics to drive output instead of outcomes; they are driving the numbers without asking or understanding why

## Desired Business Outcomes

- VA.gov applications are outcomes-driven: data is being used to inform decision making for better Veteran outcomes
- VA.gov-level KPIs and OKRs are tracked, assessed, and reported

## Undesired Business Outcomes

- VA.gov applications are data-*driven* instead of data-*informed*
  - applications' numbers are being moved without the teams or VA understanding why those metrics were moved


---

## Measuring Success

### North Star Metric

Recurring engaged users: Number of VA.gov teams reporting on their Product KPIs (data-informed outcomes) every month

### Key Performance Indicators (KPIs)

*Limit 5-6 KPIs per product*

| Category | Findability                 | Ease of use                  | Service completion                                   | Trust/Satisfaction                       | Health                     |
| -------- | --------------------------- | ---------------------------- | ---------------------------------------------------- | ---------------------------------------- | -------------------------- |
| KPI      | % of VFSs with GTM tracked  | Monthly recurring Domo users | % of VFSs sharing metrics in Team of Teams per month | Platform analytics customer satisfaction | Customer  support velocity |
| KPI      | % of VFSs with KPIs tracked |                              |                                                      |                                          | Number of analytics bugs   |

#### Baseline KPI Values

**Recurring engaged users: 9 out of 18 VFS teams in March 2021 reported Product KPIs in Team of Teams**

* % of VFSs with GTM tracked: As of February 2020, 90-100% of modern VA.gov applications have Google Tag Manager tracked
* % of VFSs with KPIs tracked: As of April 2021, 8 out of 18 VFS teams have KPIs tracked in Domo
* Monthly recurring Domo users: TBD. March 2021 = 183 Page Views
* % of VFSs sharing metrics in Team of Teams per month: 11 out of 18 VFS teams in March 2021 shared metrics in Team of Teams 
* Customer support velocity:
  * January 2021: KPI Dashboards - ~4 sprints
  * January 2021: GTM Implementation - ~3 sprints
* Number of analytics bugs: TBD

### Objectives and Key results (OKRs)

- Objective: VFS testing suite is comprehensive, on par with industry leaders
  - Key result: 90% of VFS teams share metrics in Team of Teams by end of Q2 2021
  - Key result: 75% of VFS teams share data-informed outcomes in Team of Teams by end of Q3 2021
  - Key result: Analytics requests are fulfilled (work is in VFS review) within 1 sprint by end of Q4 2021


---

## Assumptions

- We have buy in from DEPO leads to encourage VFS teams to use our products and standards
- We have the resources (tools, personnel, skillsets, etc.) on our team to do the work
- VA development teams are willing to use data on a consistent basis to drive decision making
- We will be able to validate the data we collect on the VFS platform for accuracy
- Historical and offline data is available for our team to aggregate and leverage
- We will be able to identify and connect with stakeholders for other sources of VA data
- We will be able to get buy-in from other VA offices to report accurate data on a consistent cadence
- Product “decision makers” include product owners and product managers, who lead overarching product decisions

## Solution Approach

Our approach is centered around delivering products and services to ease VFS team use of the entire analytics journey. At the end of the day, we are looking for VFS teams to use actionable insights to drive data-informed decision making for better Veteran outcomes. This product's features are prioritized on the bet that they maximize multiple levels of the desired user outcomes. 

![image-20210217121943290](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/analytics/Screen%20Shot%202021-04-08%20at%206.57.25%20PM.png?raw=true)

To provide frictionless, accessible data, we build and offer (*Analytics features*):

- **Analytics as a Data Platform**

  - Data collection
    - [Data Warehousing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/data-warehouse/data-warehouse-product-outline.md) for Veteran-facing outcomes & health data
  - Clean, quality standardized data
    - [Google Tag Manager](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/google-tag-manager/google-tag-manager-product-outline.md) standardization
    - KPI standardization
  - Documentation to support using analytics products, definitions, & best practices
    - [Analytics Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/analytics-playbook/analytics-playbook-product-outline.md)
    - KPI Setting Framework
    - Google Analytics documentation, specific to VA.gov
- **White glove analytics services**
  - Direct, actionable, & relevant data
    - Dashboards
      - [KPI Dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/kpi-dashboard/kpi-dashboard-product-outline.md)
      - [Performance Dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/analytics-dashboard/performance-dashboard-product-outline.md) (TBD)
    - Tracking
      - [Google Tag Manager](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/google-tag-manager/google-tag-manager-product-outline.md) set up
      - Exploratory Analytics: (TBD)
        - A/B testing
  - Analytics knowledge support 
    - KPI Setting Workshops
    - 1 on 1 customer support
    - Office Hours
    - Lunch & Learns (tutorials) (TBD)
- **Miscellaneous**
  - Covid Dashboard

---

## Go-to-market Strategy

- See feature release plans

## Launch Dates

- See feature launch dates

---

## Solution Narrative

### Current Status

### Key Decisions

---

## Screenshots

See feature narratives for specific feature screenshots

---

#### Communications

<details>


- Team Name: VSP Analytics & Insights
- GitHub Label: `analytics-insights`
- Slack channel: `vsp-analytics`
- Product POCs: Joanne Esteban, Jason Cavnar
- Stakeholders: Rachael Roueche

</details>

#### Team Members

<details>


 - DEPO Lead: Rachael Roueche
 - PM: Joanne Esteban
 - Data Analysis: Chloe Brown
 - Engineering: Jason Cavnar, Jon Wehausen, Brian Martin, Lauren Simpson
 - Research/Design: Mandy Massengill

</details>


#### Stakeholders

<details>
_What offices/departments are critical to make this initiative successful?_


OCTODE leadership

Platform Team

VFS leadership

</details>
