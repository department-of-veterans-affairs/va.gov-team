# Platform System Status
## Communications
GitHub Label:

Slack channel:

Product POCs: Alex Pappas, TJ Rice, Joanne Esteban

Stakeholders:

## The Problem

Mapping of Endpoints

We lack an up-to-date dependency mapping of the products that are currently live on VA.gov to their dependent endpoints.  In order to support the Insights & Analytics Product health tool, they require a list of endpoints that are utilized by specific products in order to display relevant backend issues that could be the root cause of other issues being displayed on the tool.  

Alert Data

For Platform Teams, we do not have an easily accessible high level reporting solution that displays the health status of endpoints, and the products that rely on those endpoints, on the VA.gov ecosystem so that we can determine the user/product impacts during any outages.  Our current monitoring of these endpoints is using a combination of Prometheus data in conjunction with Grafana that may or may not be integrated into PagerDuty for On-Call alerting.  However, the persistence of this data is limited so it can not be used as an aggregate past approximately 15 days.


VFS Endpoint Documentation 

VFS Teams currently have no visibility in endpoint dependencies on the backend, or how products utilize them.  If a change is made to a single endpoint, there is no easy way to know what other products might be affected.

## User Goals

Application teams would be able to utilize the Endpoint data that is displayed to them on the Analytics & Insights teams Product Health Status Prototype to identify if their product is experiencing issues due to endpoint outages as opposed to other issues.  They would have a significant amount of historical data of endpoint up time to compare to other metrics presented.

All teams have access to a visual mapping of product to endpoint dependencies to help identify teams responsible for issues that surface and assists in identifying teams for cross-team collaboration.

Assist VFS teams while building apps during their onboarding phase in order to reduce interdependency errors with other products.

The Triage team would have a tool that allows them to easily identify and communicate product downtime as it relates to backend service outages.

## Business Goals

Product Managers and Leadership have historical data on product outage occurrences related to backend services so we can define acceptable levels and hold responsible parties accountable.

## Assumptions


## Questions

How do we store and make the data accessible?

Are there existing tools or applications that we can put into place to leverage some, if not all of this information?

What other data points could be stored or exposed to support other KPIs from different teams or leadership?

## Requirements

### In Scope

From the perspective of the Backend Tools team, the data collection, storage and availability is where the focus will be.  Making that data available through some type of service in a way we can expand on the data sets so other tools could utilize the data in the future as needed.

### Out of Scope

The visualization of the data will be up to other teams.  The service to query the data will be available, but the actual visualization (including where the data is displayed) is out of scope for this product as it pertains to the Backend Tools team.

## Solution Approach

### Step One

Support the insights and analytics product health tool by pro-grammatically generating and storing a mapping document of which product(s) are utilizing which endpoint(s)

- The Mapping document should be kept up to date in real time as endpoints are added and products/features are added to VA.gov

- The Mapping document needs to be available for the Product Health tool to query in order to show the resulting endpoint matches to that product through some type of service through documentation on how the data is stored and how to access it.

### Step Two

Expand the mapping of (internal) endpoints to products/features to include external endpoints in the mapping document.

- Allow tools to query the mapping in order to visualize the full path of a request on the VA.gov platform by providing documentation on how to retrieve the new external end point mapping.

### Step Three

Figure out how to best integrate the status of thesee endpoints over some historical time period so that a tool could make it available to see if any of the end points are down or expeirencing errors and subsequently which products are effected.

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

