# Platform System Status
## Communications
GitHub Label:

Slack channel:

Product POCs: Alex Pappas, TJ Rice, Joanne Esteban

Stakeholders:

## The Problem
Alert Data

For Platform Teams, we do not have an easily accessible high level reporting solution that displays to users the health status of endpoints, and the products that rely on those endpoints, on the VA.gov ecosystem so that we can determine the user/product impacts during any outages.  Our current monitoring of these endpoints is using a combination of Prometheus data in conjunction with Grafana that may or may not be integrated into PagerDuty for On-Call alerting.  However, the persistence of this data is limited so it can not be used as an aggregate past approximately 15 days.

Scope of Outages

In addition to a high level health status, we lack an up-to-date dependency mapping of the products that are currently live on VA.gov to their dependant endpoints.  Because of this, it is extremely difficult to understand and report on the severity of outages and related that information to specific products.  For example, when EVSS experiences an outage, there is currently no way to know what products are affected.  Without any type of product mapping, it is difficult for the Triage team (and other teams) to identity the responsible teams to address the issue without significant investigation.

VFS Endpoint Documentation 

VFS Teams currently have no visibility in endpoint dependencies on the backend, or how products utilize them.  If a change is made to a single endpoint, there is no easy way to know what other products might be affected.
User Goals
Application teams would be able to utilize the Endpoint data that is displayed to them on the Analytics & Insights teams Product Health Status Prototype to identify if their product is experiencing issues due to endpoint outages as opposed to other issues.  They would have a significant amount of historical data of endpoint up time to compare to other metrics presented.

All teams have access to a visual mapping of product to endpoint dependencies to help identify teams responsible for issues that surface and assists in identifying teams for cross-team collaboration.

Assist VFS teams while building apps during their onboarding phase in order to reduce interdependency errors with other products.

The Triage team would have a tool that allows them to easily identify and communicate product downtime as it relates to backend service outages.

## Business Goals

Product Managers and Leadership have historical data on product outage occurrences related to backend services so we can define acceptable levels and hold responsible parties accountable.

## Assumptions


## Questions
What is the look back window that is required to satisfy the need
Can this be achieved in Prometheus?  Or is there another way to store the data for longer
How do we make the data accessible?
Analytics & Insights Product Health Tool
Triage Team
Product Managers
Are there existing tools or applications that we can put into place to leverage some, if not all of this information?
Are there Leadership goals (or KPIs) that already exist that we can help report on, and if not are there ones that we want to create?
## Requirements
### In Scope
### Out of Scope
## Solution Approach
- Determine approach to store up to 1 year of data for each endpoint.
- Ensuring this data is accessible to different products that want to utilize it
- Determine how to programatically create a mapping of which products are utilizing each endpoint.
- Both internal (vets-api) and external services)
- Create Dashboard that shows current state of all endpoints (if there are any incidents currently happening) and list out products that are being affected.
- Create simple dashboard to show the current state (and historical data) on the availability of each endpoint as well as products utilizing that endpoint.
## Value Propositions
With a programmatic approach to visually mapping product dependencies we can identify the right teams to solve issues faster.  Having this data stored and accessible allows different internally built tools to support the platform and products robustness.  Lastly, allow for everyone to see when a product is experience downtime because of backend service outages.
## KPIs

# Implementation Info

## Status

## Discovery

## Technical Decisions

## Product Decisions

## Team
- VA Digital Strategist(s):
- Product Manager:
- Design Lead:
- Eng Lead:
- Engineers:
- Screenshots

## Before

## After

