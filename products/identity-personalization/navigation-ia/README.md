# Product Outline: Logged-in navigation

## Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss | DSVA Lead| samara.strauss@va.gov |
|Matt Shea | Product Manager| matt.shea@adhocteam.us |
|Meg Peters | IA/Content strategist | Margaret_T_Peters@omb.eop.gov |
|Mikki Northuis | IA |mikki@adhocteam.us |
|Tressa Furner | Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Sandra Hallie | FE Engineer| shallie@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Jennifer Strickland | 508/Accessibility support| jennifer.strickland@adhocteam.us |

## Table of Contents

# Executive Summary 
- [Overview](#overview)
- [Problems](#problems)
- [User Problem Statements](#user-problem-statements)
- [Business Goals](#business-goals)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Solution Approach](#solution-approach)
- [KPIs](#kpis)

# Implementation Information
- [Solution Narrative](#solution-narrative)
- [Discovery](#discovery)
- [Development](#development)
- [Design](#design)

## Overview

At a high level, this project aims to do the following things:

1. Redesign the logged-in homepage so that it provides a personalized experience. Currently, the homepage does not change when users are logged out or logged in.
2. Elevate status updates and notifications for logged in users.
3. Retire the existing My VA dashboard in favor of a redesigned logged-in homepage.

This is part of the [Personalization 2.0 strategy from 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md). Personalization 2.0 includes the effort to combine the profile and account pages (profile 2.0) and this effort to redesign the logged-in homepage.

## Problems

Based on the research that informed [the Personalization 2.0 strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md#observations-the-my-va-dashboard), these are the main problems we've observed with regards to the My VA dashboard and the existing logged-in homepage.

- People don't use — or even know about — the My VA dashboard.
- We don't guide people to the My VA dashboard.
- The My VA dashboard is too duplicative of the homepage.
- People prefer the homepage over the My VA dashboard because it is a more effective router, and because it has a more appealing visual design.
- On My VA, we have not effectively employed [the design system](https://design.va.gov/). My VA is designed like a content page, so adding new content has made these pages extremely lenghty and hard to scan.

Additionally:

- Important content is burried on My VA. We have a lot of good status/"notification" content in there that is buried if you don't know what you are looking for.
- The logged-in homepage isn't personalized at all, so when users log in, they may see links that no longer apply to their circumstances (eg. seeing an "Apply for health care" link if you're a person who already receives VA health care).

### User Problem Statements

- **As a veteran, I want to be able to log in to VA.gov and easily find the tools and tasks that apply to my specific experience at the VA.**
- **As a veteran, I want to be able to log in to VA.gov and easily see status updates and notifications that apply to my specific experience at the VA.**
- **As a veteran, I want to be able to log in to VA.gov, quickly complete whatever I came to do, and then get back to the rest of my life.**

### Business Goals

- 

## Assumptions

- 

## Questions

- How could an authenticated tool bar/menu fit into the current navigation before Mikki/Ryan/Jen are able to revisit the IA and flatten the IA/nav across the board?

## Solution Approach

- 

## KPIs

- 

---

# Implementation Info

## Solution Narrative

### Status

### Key Decisions

## Discovery

- [Personalization 2.0 discovery write-up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md)

## Development

### How to Access and Test

### Error Handling

### Service Level Objective

### API Calls and Dependent Systems

## Design

### Goals

*From the [Personalization 2.0 strategy from 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md)*

1. **Reduce redundancy** — Specifically, we should reduce redundancy between the My VA dashboard and the VA.gov homepage.
2. **Get users where they need to go** — We should balance bubbling up content with showing a succinct list of links to quickly route people to tools.
3. **Elevate personally relevant information** — Users should see themselves in these updates.
4. **Scale gracefully** — Our designs should allow for future updates and expansion. 
5. **Prioritize wayfinding** — We should make it easy for users to find information that is relevant to them, and we should guide users accordingly depending on where they are in their journey at the VA.
6. **Effectively use visual space** — We should avoid a single-column, "content page" approach. Design updates should more effectively employ [the design system](https://design.va.gov/) and update it as needed.

### Screenshots

### Before

### After

