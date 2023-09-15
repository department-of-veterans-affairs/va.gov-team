
# Product Outline: Accredited Representation Management

---

## Overview
Create a high-quality accessible service or suite of services within VA.gov to serve Veterans in managing their Power of Attorney (PoA) representation and to support the deprecation of the legacy system used to take those actions.

## Problem Statement
There is not currently an experience on VA.gov for Veterans to find a representative and appoint PoA.  The current experience happens either in person (offline) or through an older system called eBenefits which does not provide a great user experience: confusing errors, dead ends, and inconsistent user flows. 

**How might we unify this process on VA.gov and provide users with clear instructions and expectations around next steps?**
 
## Desired User Outcomes

1. Veterans can use VA.gov to search for a representative and appoint PoA
2. Veterans will have a clear understanding of the types of representatives and the process behind granting that representative PoA
3. Veterans will be able to easily see if they already have an appointed representative on file
4. On related VA.gov interactions that may benefit from appointing PoA, Veterans can easily transition to searching for a representative and appointing PoA

## Undesired User Outcomes
1. Veterans are unable to easily or successfully appoint PoA
2. Veterans are unable to easily or successfully manage their PoA (including changing and removing representation)

## Desired Business Outcomes

1. Increase the functionality of VA.gov to support searching and appointing representatives
2. Provide Veterans with the necessary tools and understanding to manage PoA on their own

## Undesired Business Outcomes
1. Users mail in a form to appoint PoA instead of using our system on VA.gov

---
## Measuring Success


### Key Performance Indicators (KPIs)
1. **% of users by traffic source**
   _Where are users coming into our product flow from?_
3. **% of users who end up downloading a form after initiating a search** 
    _Are users making it through the entire flow?_
    1. Drop off points to track could include:
        1. Display search results, but no selection
        2. Made a selection, but did not complete the form pre-fill
4. **Average time (minutes) from search → form download**
    _How long does it take to complete the entire flow?_
    1. Could be broken out by steps so we can understand which steps are taking longer
    2. Would be nice to pair the average metric with a bar chart that shows the minutes from initiating a search to downloading a form (to understand the average and median, but also the range)
5. **% of authenticated users who initiate a search** (logged on vs. not logged on)
    _How many of our users are logged into a VA.gov account?_
6. **% of authenticated users who end up downloading a form after initiating a search**
    _How many of our users are looking for replacement representation?_

### Baseline KPI Values
1. Number of users completing the search→form download in VA.gov each week/month 

### Objectives and Key results (OKRs)
1. **Objective**: Veterans start moving away from legacy processes for finding a representative, in favor of our solution on VA.gov 
    1. **Key Result**: % of week-over-week/month-over-month growth for users initiating a search
        _Comparing baseline KPI values over time to examine growth_
2. **Objective**: Our MVP flow on VA.gov allows users to successfully find a representative and download a pre-filled 21-22/21-22a form
    1. **Key result**: % of users who end up downloading a form after initiating a search
        _KPI #1 from above_
    2. **Key result**: Average time (minutes) from search → form download
        _KPI #2 from above_

---

## Assumptions
1. Veterans are interested in searching for a representative and appointing PoA on their own, as long as they have a clear understanding of the process

## Solution Approach
**Next step:** Our immediate goal is to provide Veterans with functionality that exists today, but on a unified website (VA.gov).  The plan is to kick off with an MVP which will mirror the same functionality on eBenefits, but with a more consistent and intuitive experience that lives directly on VA.gov.  

**For future:** Our ultimate goal is to allow Veterans to search for a representative AND appoint PoA entirely on VA.gov.  Appointing PoA requires digital submission of a 21-22 or 21-22a form, which we currently do not have supporting API endpoints from Lighthouse to use.  Post-MVP we plan to:
1. Identify support for these Lighthouse API endpoints
2. Investigate how to apply signatures from two parties to achieve digital form submission
3. Consider notifications for when a representative request is approved/rejected
4. Explore additional features like managing open requests for representatives and managing existing representative relationships
5. Integrate with other products or experiences that involve Veterans looking for a representative

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

- **Team Name**: Accredited Representation Management
- **GitHub Label**: accredited-representation-management-team
- **Slack channel**: #benefits-ce-find_a_rep
- Product POCs:
- Stakeholders: 

#### Team Members
 
 - **DEPO Lead**: Zach Goldfine
 - **PM**: Lindsay Li-Smith
 - **Engineering**: Holden Hinkle
 - **Research/Design**: Janelle Finnerty

#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

