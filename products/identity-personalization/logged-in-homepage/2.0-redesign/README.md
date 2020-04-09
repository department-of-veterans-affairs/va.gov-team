# Product Outline: Logged-in homepage redesign (Dashboard 2.0)

## Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0; auth-homepage; My VA
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DSVA Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Jen Strickland | 508/Accessibility support| jennifer.strickland@adhocteam.us |

## Table of Contents

# Executive Summary 
- [Overview](#overview)
- [Problems](#problems)
- [User Problem Statement](#user-problem-statement)
- [Business Goals](#business-goals)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Discovery Takeaways](#discovery-takeaways)
- [Requirements](#requirements)
- [Solution Approach](#solution-approach)
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

## Overview

At a high level, this project aims to do major things:

1. Redesign the logged-in homepage so that it is a personalized experience. Currently, the homepage does not change when users are logged out or logged in.
2. Retire the existing My VA dashboard in favor of a redesigned logged-in homepage.

## Problems

Based on some [research we did last summer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md#observations-the-my-va-dashboard), these are the main problems we've observed with regards to the My VA dashboard and the existing logged-in homepage.

- People don't use — or even know about — the My VA dashboard.
- We don't guide people to the My VA dashboard.
- The My VA dashboard is too duplicative of the homepage.
- People prefer the homepage over the My VA dashboard because it is a more effective router, and because it has a more appealing visual design.
- On My VA, we have not effectively employed [the design system](https://design.va.gov/). My VA is designed like a content page, so adding new content has made these pages extremely lenghty and hard to scan.

Additionally:

- Important content is burried on My VA. We have a lot of good status/"notification" content in there that is buried if you don't know what you are looking for.
- The logged-in homepage isn't personalized at all, so when users log in, they may see links that no longer apply to their circumstances (eg. seeing an "Apply for health care" link if you're a person who already receives VA health care).

### User Problem Statement

### Business Goals

## Assumptions

## Questions

## Discovery Takeaways

- [Personalization 2.0 discovery write-up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md) — Last summer, we conducted research to validate moving forward with a logged-in homepage redesign.
- Currently, we are undergoing a discovery phase geared more directly toward the homepage redesign. We'll link to those reports here as they're completed.

## Requirements

### Goals

*From the Personalization 2.0 strategy from 2019*

1. **Reduce redundancy** — Specifically, we should reduce redundancy between the My VA dashboard and the VA.gov homepage.
2. **Get users where they need to go** — We should balance bubbling up content with showing a succinct list of links to quickly route people to tools.
3. **Elevate personally relevant information** — Users should see themselves in these updates.
4. **Scale gracefully** — Our designs should allow for future updates and expansion. 
5. **Prioritize wayfinding** — We should make it easy for users to find information that is relevant to them, and we should guide users accordingly depending on where they are in their journey at the VA.
6. **Effectively use visual space** — We should avoid a single-column, "content page" approach. Design updates should more effectively employ [the design system](https://design.va.gov/) and update it as needed.

### In Scope 

### Out of Scope

## Solution Approach

## Value Propositions

## KPIs

---

# Implementation Info

## Status

- **Summer 2019**: Personalization 2.0 initial discovery/strategy completed.
- **March 2020**: Kicked off logged-in homepage discovery
- **April 2020**: DEPO takeholder interviews complete

## Solution Narrative

## How to Access and Test

## Error Handling

## Service Level Objective

## API Calls and Dependent Systems

## Design

### Screenshots

### Before

#### Logged-in homepage

#### My VA

### After

