
# Search Product Outline - VA.gov - THIS IS A DRAFT

## Communications
- GitHub Label: search
- Slack channel: #Public Websites Team
- Product POCs: 
   - Jennifer Lee, DSVA (Jennifer.Lee27@va.gov)
   - Dave Conlon, DEPO (David.Conlon@va.gov)
   - Kara Kemahli, Ad Hoc (kara@adhocteam.us)
- Search.gov POC: 
   - Dawn McCleskey (Dawn.mccleskey@gsa.gov)

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
Onsite search has not been revisited since the rebranding launch and transition from vets.gov to VA.gov. Since then many legacy pages and forms have been redirected to VA.gov., but a number of subdomains still exist and have not been brought in to the new VA.gov site experience. 

### User Goals
- Easily find and get to relevant, related information that helps veterans, caregivers,  find what I am looking for the first time.

### Business Goals
- Create a cohesive brand across the VA through direct control of the search page layout and look
- Provide a more comprehensive sitemap so search results are more accurate by allowing searching within a subdomain

## Assumptions
- Capturing click events and sending them back to search.gov will help prioritize indexing

## Scope 

## Solution Approach
   

## Value Propositions
- Reduces confusion for users navigating throughout the site
- Improves brand consistency for the VA
- Expands search results to include new and old pages
- Allows for full stylistic & functional control over the entire page and product

## KPIs
---

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


