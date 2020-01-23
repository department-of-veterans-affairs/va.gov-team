# Yellow Ribbon MVP Product Outline

Last Updated January 23, 2020

## POCs

- Slack channel: #vsa-public-websites

  

| Name          | Role                                          |
| ------------- | --------------------------------------------- |
| Jennifer Lee  | Public Websites Product Owner                 |
| Kara Kemahli  | Product Manager                               |
| Liz Lantz     | Designer/Researcher                           |
| Nick Sullivan | FE Engineer                                   |
| Kelson Adams  | FE Engineer                                   |
| Anne Hurley   | Content                                       |
| Luke Tickner  | Education/GI Bill Comparison Tool SME Contact |
| Tammy Hurley  | Yellow Ribbon SME Contact                     |
| Darrell Neel  | GI Data Service Tech SME Contact              |
| Matt Self     | GIBCT Product Manager                         |
| Brian Grubb   | SharePoint contact for Yellow Ribbon data     |

---

### Table of Contents

# Executive Summary 

- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Decisions](#decisions)
- [The Plan](#the-plan)
- [KPIs](#kpis)

# Implementation Information

- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design)
- [Screenshots](#screenshots)

---

# Executive Summary

To provide Yellow Ribbon. (YR) participating school information as more user-friendly content than the current experience of 50+ manual table pages.  The current experience exists as it does today because there is no single source of Yellow Ribbon data.

Our MVP will be a single-page application that leverages an existing API (GI Data Service) and allows users to search for YR schools based on relevant critera.

## User Problem Statement

As a Veteran, I want to easily find information about schools I'm interested in that participate in the Yellow Ribbon program so that I can maximize my education benefits.

As a content resource, I want to more easily provide Veterans with timely up-to-date Yellow Ribbon school information.

As a Yellow Ribbon data producer, I want to submit timely up-to-date Yellow Ribbon school information to the va.gov. team.

## Solution Goals

- Bring YR participating school information into the benefit hub as a more dynamic, user-friendly content than the current experience of 50+ manual table pages.
- Improve UX for YR tables so that users can easily find info they're looking for
- Reduce the level of effort for stakeholder to keep YR data up-to-date on Veteran-facing page
- Take technical learnings about Drupal functionality and table data IX to inform future research for MVP 2.0 solution or solutions for database-driven table content.
- Gain a better understanding of the information most relevant to Veterans as they research education options


### User Goals

- Identify schools I'm interested in that participate in Yellow Ribbon program, and understand the benefit details that are specific and unique to each school.
- Eliminate manual updates of Yellow Ribbon information

#### **Additional Considerations**

- After learning more about the complexities of Yellow Ribbon data gathering, we have determined our MVP will not address the Yellow Ribbon data producer user needs at this time.

  

## Hypothesis

- Side-by-side comparison functionality will be helpful for Veterans
- Veterans will want the ability to reduce the number of the initial search results (filtering)
- Benefit amount will be the most important variable in the search results
- Veterans will be confused about the difference between this and the GIBCT, and not understand the need for two separate tools

### Assumptions

- Veterans find the current presentation of YR information tedious to parse through
- Veterans know the degree level, and location, or name of the school they're interested in when they begin their research
- Veterans interested in using education benefits are familiar with the GI Bill Comparison tool

## Requirements 

- Yellow Ribbon participating schools information is available through the Education benefit hub
- YR data is presented in a dynamic way that allows users to find data they're looking for based on the criteria (which data fields) that's most useful to them
- Users can perform a side by side comparison on selected schools (exact number of schools informed by research). Comparison functionality is a stretch goal.
- Solution provides an improved experience for content manager, minimizing manual updating of Yellow Ribbon school information
- Solution utilizes the most up-to-date Yellow Ribbon data available via an API

## Constraints

- Drupal is unable to manage large datasets via CSV upload functionality
- We don't know what types of criteria Veteran students will want to filter on
- GIDS API 
  - does not have sorting functionality
  - does not have ability to search based on a `city, state` combination
  - when searching by school name, the API looks at the name, city, and employer. If you pass a separate city value at the time time, the city is not applied to the results

## Discovery Takeaways

- Initial Discovery notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/yellow-ribbon-mvp/research/dec-2019-sme-discovery.md)
- Drupal is not feasible as a solution to manage this data with a dynamic front-end
- Exploration of non-Drupal solutions in [this Slack thread](https://dsva.slack.com/archives/C52CL1PKQ/p1576766725011100)

## Decisions

- At this time we are not updating the GIBCT
- We will leverage the GIDS API for our data source

## The Plan

- Design an interactive prototype with hi-fidelity screens
- Conduct ~ 5 user interviews with tasks focused on current YR presentation and prototype
- In parallel with design and research work, FE development will begin to build MVP in phases
  - Phase one: search + results
  - Phase two: comparison
- Once GIDS is updated with latest Yellow Ribbon data, launch Yellow Ribbon MVP on production
- Initiate redirects of legacy pages

## Phased Roll Out Approach

- 

## KPIs

### Objective

- Take technical learnings about Drupal functionality and table data IX to inform future research for MVP 2.0 solution or solutions for database-driven table content.

### Tracking

- 

---


## Solution Narrative

- **December 2019**: Discovery and design begins

- **1/16/2020**: Research plan and conversation guide submitted

- **January 2020**: Development begins

- **1/29/2020**: Started Usability testing

- **March 2020**: Launch on production

## 

## API Calls and Dependent Systems

GIDS API (need link from developers)

## Design 

### Screenshots

#### Yellow Ribbon Before
