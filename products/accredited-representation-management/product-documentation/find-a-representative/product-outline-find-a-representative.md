# Product Outline: Find a Representative
Team: Accredited Representation Management
Product URL: [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep)

---

## Overview
Create a user-friendly, accessible tool for Veterans to search for an accredited representative on VA.gov. This experience is intended to mirror the search functionality of older, external tools: [OGC](https://www.va.gov/ogc/apps/accreditation/index.asp) and [eBenefits](https://www.ebenefits.va.gov/ebenefits/vso-search).

## Problem Statement
There is not currently an experience on VA.gov for Veterans to find a representative. The current experience happens either in person (referrals) or on older systems (eBenefits, OGC) which do not provide a great user experience: confusing errors, dead ends, and inconsistent user flows.

**How might we enable Veterans to find an accredited representative on VA.gov?**
 
## Desired User Outcomes
1. Veterans can search for accredited representatives on VA.gov and filter by location and representative type (VSOs, attorneys and claims agents)
2. Veterans have a clear understanding of the different types of representatives (VSOs, attorneys and claims agents)

## Desired Business Outcomes 
1. Increase the functionality of VA.gov to support searching for accredited representatives
2. Reduce the time it takes for Veterans to find an accredited representative
3. Expedite the deprecation of the legacy eBenefits platform by delivering replacement services

---
## Measuring Success


### Key Performance Indicators (KPIs)
**SEO Insights**
1. **Landing page for representatives** `/get-help-from-accredited-representative`
   1. **Page views**
   2. **Unique page views**
      1. **% of unique page views from VSO/VA IP addresses** _How often are VSO and VA employees using our tool?_
   4. **% of unique views** 
   5. **Bounce rate** _What percent of users land on this page and immediately leave VA.gov without any interaction?_
   6. **Entrance rate** _What percent of users enter the VA.gov site on this page?_
   7. **Exit rate** _What percent of users first interact with or view other pages on VA.gov, before viewing this page and then leaving VA.gov?_
   8. **Top previous pages by %** _What pages are users coming from?_
   9. **Top next pages by %** _What pages are users visiting next?_
2. **Find a Representative tool** `get-help-from-accredited-representative/find-rep`
        1. Same data points as 1a above

**Search Parameter Usage**

1. **% of searches, broken out by representative type** (VSO, Attorney, Claims Agent) _What representative types are users most interested in?_
2. **Top 10 location queries** _Are users gravitating towards certain locations?_
3. **% of searches by search radius, broken out by radius options** _What search radius selections are users gravitating towards?_
4. **% of searches with a specified representative name** _Are users searching with a particular representative in mind?_
5. **Top 10 name queries** _Are users searching for certain representative names?_

**Search Behavior**
1. **Average number of searches per user** _Do users feel the need to search multiple times?_
5. **% of searches where the user is logged in** 
3. **% of searches where the user reports outdated information (at least once)** _What percent of users take the initiative to (or are driven to) report outdated information?_
6. **% of searches that do not return results**
    1. Detail of search parameters that result in no results
4. **# of page clicks on each page** _Are users feeling the need to go beyond page 1 in search results?_
1. **# of clicks on the representative definitions, broken out by representative type** _How often do users need more information on representative type?_
2. **# of contact info clicks, broken out by info type (address, phone and email)** _How do users prefer to contact a representative?_


Data Reporting

### Baseline KPI Values
1. **Unique Pageviews** _measuring growth_
    1. Pre-launch: through the eBenefits or OGC tools
       1. [Google Analytics traffic for June 1st - Nov 30th 2023](https://docs.google.com/spreadsheets/d/1Ne8H_hywzWcL5007MWY0ExpoCBJ0SjHRlkPHVtm7cJU/edit#gid=0)
    3. Post-launch: through the VA.gov Find a Representative tool (SEO Insights KPI #1b)
2. **% increase of unique pageviews this week vs. last week** _measuring proportional growth_

### Objectives and Key results (OKRs)
1. **Objective**: Veterans start moving away from legacy processes for finding a representative, in favor of our solution on VA.gov
    1. **Key Result**: Increase in representative searches on VA.gov (Baseline KPI #1b)
    2. **Key Result**: Decrease in representative searches on eBenefits or OGC (Baseline KPI #1a)
2. **Objective**: Veterans are able to successfully find a representative through our Find a Representative tool
    1. **Key Result**: Minimize the average number of searches per user (Search Behavior KPI #1)
    2. **Key Result**: Minimize the % of searches where the user reports outdated information (Search Behavior KPI #3)

---

## Assumptions
1. Veterans are interested in searching for a representative on VA.gov
2. Veterans are more likely to appoint VSOs, Attorneys and Claims Agents
3. Only a small percentage of Veterans are interested in appointing individual representatives in a VSO

## Solution Approach
Our immediate goal for the Find a Representative MVP is to mirror the representative search functionality on eBenefits, but with critical/impactful updates found through user research.  From there, we will examine the experience through usability testing and incorporate findings into a version 2.0.  Ultimately, we hope to provide a more consistent and intuitive "Find a Representative" experience that lives directly on VA.gov.  

--- 

## Launch Strategy
A landing page "Get help from a VA accredited representative or VSO" (rooted in the Resources and Support section of VA.gov) will include a link to the Find a Representative tool.  There will be multiple entry points into the landing page, stemming from the main navigation as well as in-context with related benefits pages.  

[Complete outline of Redirects and Best Bets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/manage-accredited-representative.md) 

### Launch Dates
1. MVP target release: December 2023 -- **No Go** due to the data powering our search results being only ~50% accurate ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-1.0.md))
2. Version 2.0 release: March 2024 -- **Go** and relesased to 100% of users on 3/13 with updates to Best Bets and redirects implemented on 3/18 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md))
  
### Future
When our [Appoint a Representative product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/appoint-a-representative) goes live, we will work with stakeholders to redirect related pages within [eBenefits]([https://www.ebenefits.va.gov/ebenefits/vso-search).  

We may also redirect the [legacy OGC representative search](https://www.va.gov/ogc/apps/accreditation/index.asp), if there are no downstream effects.  

---
## Product Playbook / Incident Response Plan

[Find a Representative Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/launch-materials/product-playbook-incident-response-plan.md#find-a-representative-playbookincident-response-plan)

---

## Solution Narrative

1. An MVP [originally scheduled for Dec 2023 release](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-1.0.md) was decidedly a "No Go" from the team, due to the data powering our search results being only ~50% accurate.  While the ARM team does not own this data, there are shared concerns with providing inaccurate search results to our users.
   1. To remedy this decision, the team has decided to implement solutions in our product to address this issue.
   2. The team explored working directly with OGC to really representatives for updated contact information, but OGC does not have the bandwidth to manage the intake of updated information.
   3. Research findings from our MVP will also be incorporated into v2.0
2. Version 2.0 was released in March 2024 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md)).
   
---
   

#### Communications

- **Team Name**: Accredited Representation Management
- **GitHub Label**: accredited-representation-management-team
- **Slack channel**: #benefits-representation-management

#### Team Leads
 
 - **DEPO Lead**: Jennifer Bertsch
 - **PM**: Lindsay Li-Smith
 - **Engineering**: Holden Hinkle
 - **Research/Design**: Janelle Finnerty

#### Stakeholders
 - [ARM Stakeholders and Advisors](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699986925507/b10367544c62e9b5e91ce0402cfb40d15b33804f?sender=ubac5f0487f25bc4431288699)
