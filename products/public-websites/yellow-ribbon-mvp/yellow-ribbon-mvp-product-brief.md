# Yellow Ribbon MVP Product Outline

Last Updated January 22, 2020

## POCs

- GitHub Label: ?  

- Slack channel: #vsa-public-websites

- Keywords

  

| Name          | Role                                          |
| ------------- | --------------------------------------------- |
| Jennifer Lee  | DSVA Lead                                     |
| Kara Kemahli  | Product Manager                               |
| Liz Lantz     | Designer/Researcher                           |
| Nick Sullivan | FE Engineer                                   |
| Kelson Adams  | FE Engineer                                   |
| Anne Hurley   | Content                                       |
| Luke Tickner  | Education/GI Bill Comparison Tool SME Contact |
| Tammy Hurley  | Yellow Ribbon SME Contact                     |
| Darrell Neel  | GI Data Service Tech SME Contact              |

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

As part of the efforts to improve the experience our user have interacting with the VA, and modernizing their online experience, the Public Websites team seeks to learn how we might create a more user-friendly front-end experience for tabular data.   An additional goal of this work is to improve the content team's experience of managing this data.

Yellow Ribbon content was identified as a candidate for our first MVP due to the impact improvements to this content would make. As one of the more complex use cases of tabular data, findings from this MVP can be scaled down to simpler use cases.

The GI Bill Comparison Tool (GIBCT) offers Veteran's access to incomplete Yellow Ribbon information when compared to what Veterans can currently access on the legacy pages.  The GIBCT is complex in terms of all the information it offers, and timelines for updates are unknown (owned by BAH team).  For those reasons, we are pursuing our own MVP solution so that we can better understand Veteran's needs for Yellow Ribbon information and inform any future updates to the GIBCT.

Our product is an interim solution until the GIBCT can provide a comparable experience for Yellow Ribbon information.

## User Problem Statement

As a Veteran, I want to easily find information about schools I'm interested in that participate in the Yellow Ribbon program so that I can maximize my education benefits.

As a content manager, I want minimize the amount of time spent updating Yellow Ribbon information so that I can provide Veterans with timely, up-to-date Yellow Ribbon school information

## Solution Goals

- Bring YR participating school information into the benefit hub as a more dynamic, user-friendly content than the current experience of 50+ manual table pages.
- Improve UX for YR tables so that users can easily find info they're looking for
- Reduce the level of effort for stakeholder to keep YR data up-to-date on Veteran-facing page
- Take technical learnings about Drupal functionality and table data IX to inform future research for MVP 2.0 solution or solutions for database-driven table content.


### User Goals

- Identify schools I'm interested in that participate in Yellow Ribbon program, and understand the benefit details that are specific and unique to each school.
- Eliminate manual updates of Yellow Ribbon information

## Hypothesis

- Veterans find the current presentation of YR information tedious to parse through
- Veterans know the degree level, and either city, state, or name of the school they're interested in when they begin their research
- Sorting, filtering, and side-by-side comparison functionality will be helpful for Veterans
- Benefit amount will be the most important variable in the search results
- Veterans will be confused about the difference between this and the GIBCT, and not understand the need for two separate tools

## Requirements 

- Yellow Ribbon participating schools information is available in the Education benefit hub
-  YR data is presented in a dynamic way that allows users to find data they're looking for based on the criteria (which data fields) that's most useful to them (could be filtering, sorting, search, etc.)
- Users can perform a side by side comparison on selected schools (exact number of schools informed by research). Comparison functionality is a stretch goal.
- Solution provides an improved experience for content manager, minimizing manual updating of Yellow Ribbon school information

## Constraints



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

# Implementation Info

## Status

**1/22/2020**



## Solution Narrative

- **December 2019**: Discovery and design begins

- **1/16/2020**: Research plan and conversation guide submitted

- **January 2020**: Development begins

- **1/29/2020**: Started Usability testing

- **March 2020**: Launch on production

  


## How to Access and Test

**Staging**


## Error Handling




## Service Level Objective

| Service&#160;Level&#160;Indicator | Service Level Objective                                      |
| :-------------------------------- | ------------------------------------------------------------ |
| Availability                      | Should not exceed 5% 5xx error rates (as a percent of all requests) for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L6) |
| Latency                           | Percent of requests served in under 2 seconds should not drop to or below 95% for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/c6827877dda83b878bf9a71f80e4703f7977beee/ansible/deployment/config/prometheus/rules/application.rules#L24) |
| Incident Response                 | Initial acknowledgement of the issue within 15 minutes of a triggered alert<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21) |

## API Calls and Dependent Systems



## On Call Support

#

## Design 

### Screenshots

#### Yellow Ribbon Before
