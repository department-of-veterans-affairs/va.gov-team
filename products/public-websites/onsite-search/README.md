
# On-Search Product Outline - VA.gov (WIP)

## Communications
- GitHub Label: search
- Slack channel: #va-search
- Product POCs: 
   - John Hashimoto, DSVA @John Hashimoto
   - Steph Orkand @Stephanie Orkand
- Search.gov POC: 
   - Arantxa Pipernova (arantxa.recio@gsa.gov)
   - Dawn McCleskey (Dawn.mccleskey@gsa.gov)
   - Ayush Chakravarty (ayush.chakravarty@gsa.gov)

## Table of Contents
- [User Problem Statement](#user-problem-statement)
- [Assumptions](#assumptions)
- [Limitations](#limitations)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Service Level Objective](#service-level-objective)
- [Testing](#testing)
- [Keywords](#keywords)

## User Problem Statement
As a Veteran, I am able to find the information I need to on the VA.gov Website (Desktop and Mobile) as quickly and easily as possible using the search feature.

### User Goals
- As I veteran, I want to easily and quickly find the information I need with few clicks as possible on the VA.gov Website.
- As a veteran, I want to avoid reading long pages of content in order to get to my desired outcome.
- As a veteran, I want to get the most relevant results when I use VA.gov search.
- As a veteran, I want to get the most relevant results even if I am not precise about the information I seek or make a mistake in my search terms.

### Product Goals
- Modernize the on-site search experience on VA.gov with features and functions which enable more directed search (e.g. type-ahead, faceted search, etc.)
- Make VA.gov on-site search results more relevant and reliable
- Measureably improve customer satifisfaction with VA.gov on-site search
- Create a cohesive brand across the VA through direct control of the search page layout and look (To be better defined and verified as a goal)
- Provide a more comprehensive sitemap (https://www.va.gov/site_map.htm) so search results are more accurate by allowing searching within a subdomain (To be better defined and verified as a goal)

## Assumptions
- The current VA.gov on-site search experience is not satisfactory to our users
- Most important modern features -- e.g. type ahead, faceted search -- can be leveraged using VA.gov's API-based implementation with Search.gov

# Requirements
## In Scope
- The VA.gov on-site search experience which is used in the modern header of VA properties and powered by Search.gov 

## Out of Scope
- The search experience on any VA-affiliated Websites not using the VA.gov search powered by Search.gov. 

# Discovery
## Technical
- Initial technical discovery for improvements (Jan 2020) https://github.com/department-of-veterans-affairs/va.gov-team/issues/5322#issuecomment-580918779
- Search.gov GitHub Repository for VA.gov implementation https://github.com/GSA/search-gov-agency-collaboration
## Product
An assessment of the features available for API-based implementations of Search.gov has found that the following capabilities are --  or will soon -- be available: 
- Type-ahead
- Spelling suggestions
- Related searches
- Event-based advanced analytics
- Routed queries
- Faceted search via collections

While the VA.gov content team is currently utilizing the "best bets" features, this effort will encompass an effort to better leverage this feature as well.

## User
- 
## Analytics
The Analytics team is conducting a gap research spike (https://github.com/department-of-veterans-affairs/va.gov-team/issues/8572) to determine what GA data is available and what tagging needs to be done to address key upfront questions surround VA.gov on-site search, including:

- How many VA.gov daily visitors use search -- e.g., 2% or more?
- What are the top search terms/queries overall?
- What are the top search terms per benefits hub/site category -- Health Care, Disability, Education & Training
- How many are searching Top Tasks -- e.g. Check your claim or appeal status, Refill and track your prescription
- Are there any indicators that our search is not fulfilling the users’ needs? 
## Value Propositions
- Reduces confusion for users navigating throughout the site
- Improves brand consistency for the VA
- Expands search results to include new and old pages
- Allows for full stylistic & functional control over the entire page and product

## KPIs
- TBD

# Implementation Info
the search.gov account# for this product is 7378

## Solution Narrative

### Technical Decisions

## Service Level Objectives (SLOs)
These are currently defined as alerts that trigger pagerduty for a product.
- [Search related alerts here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/prometheus/rules/application.rules)

## Testing
The search product can be found in the header of dev, staging, and production environments. Simply type in a word to get results and test the product:
<img width="1680" alt="Screen Shot 2019-04-30 at 3 20 18 PM" src="https://user-images.githubusercontent.com/21130918/56987486-90614300-6b5b-11e9-87d2-8d75f9346b85.png">

## Keywords
- search
- search.gov
- robots.txt
- sitemap
- best bets
- recommended results


