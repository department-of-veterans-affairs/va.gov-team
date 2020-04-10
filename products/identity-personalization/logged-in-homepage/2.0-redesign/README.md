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
- [User Problem Statements](#user-problem-statements)
- [Business Goals](#business-goals)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Solution Approach](#solution-approach)
- [KPIs](#kpis)
- [Discovery Takeaways](#discovery-takeaways)
- [Requirements](#requirements)

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

At a high level, this project aims to do the following things:

1. Redesign the logged-in homepage so that it provides a personalized experience. Currently, the homepage does not change when users are logged out or logged in.
2. Elevate status updates and notifications for logged in users.
3. Retire the existing My VA dashboard in favor of a redesigned logged-in homepage.

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

### User Problem Statements

- **As a veteran, I want to be able to log in to VA.gov and easily find the tools and tasks that apply to my specific experience at the VA.**
- **As a veteran, I want to be able to log in to VA.gov and easily see status updates and notifications that apply to my specific experience at the VA.**
- **As a veteran, I want to be able to log in to VA.gov, quickly complete whatever I came to do, and then get back to the rest of my life.**

### Business Goals

- To lay a foundation for a personalized logged-in homepage for veterans that shows content/links that are relevant to their experience at the VA.
- To lay a foundation for a logged-in homepage for veterans that can accomodate growth and modification over time without quickly becoming unwieldy or cluttered.
- To lay a foundation for logged-in homepage that could eventually be adapted to serve other user types once we're able to support more roles and permissions.
- Have a place to link to/highlight new tools so that we don't have to bury tools in content hubs where veterans can't easily find them.
- Have a place to highlight health care tools to show the potential/viability of consolidating MHV into VA.gov.
- To lay the foundation for how to better highlight status update/action item notifications for veterans.
- To move the VA (outside of DEPO)further in the direction of building/highlighting tools in one place instead of building one-off, silo'd tools.
- To retire My VA.

## Assumptions

- People prefer the logged-in homepage to My VA. It's both more usable and more visually appealing.
- People are reliant on the top 20 tasks on the homepage to navigate the site, and we should be mindful of this as we approach a redesign.
- Status update/alert information is hard to find on My VA.
- The logged-in homepage doesn't need to be too widget heavy. It needs to primarily serve as a router and a place to see status updates. Only a few widgets — e.g. upcoming appointments, your VAMC, etc — are necessary.
- This is a risky project, as the logged-in homepage could easily become a dumping ground or fought-after real estate by VA stakeholders
- This work, from a wayfinding/UX perspective, will be more successful if we accompany it with an authenticated tools menu/nav, but that may not necessarily be part of V1 of this project.

## Questions

### Design

- What info needs to appear as a widget vs. just a link on the new logged in homepage?
- How will we show notifications? Where will they "live"? How will they be marked as read/dismissed?
- Do things like "Your dependents" and "Your disability rating" need to be displayed on the new logged-in homepage, or should they be displayed on the VA.gov profile, or both? 
- What works well about the current homepage that veterans don't want to change? What would veterans change about the homepage as it is now?
- How could an authenticated tool bar/menu fit into the current navigation before Mikki/Ryan/Jen are able to revisit the IA and flatten the IA/nav across the board?
- How can the initial phase of the 2.0 redesign account for future growth and improvements?

### Technical

- What data do we have access to now that we can show on the homepage? 
- Is there data we have but aren't leveraging?
- Is there data that we don't have and need?
- What data might we want for future phases/improvements?

### PM

- What staging users will we need, and who can help us get those set up?
- How do we appropriately involve stakeholders, both within DEPO and outside of DEPO, in this project? How do we do this in a way that doesn't allow the homepage to become a dumping ground?

## Solution Approach

### Discovery

- We are starting this project with a comprehensive round of discovery to help us answer questions around veteran needs and expectations, DEPO stakeholder needs and expectations, how we should involve stakeholders outside of DEPO, relevant past research and context setting, and existing models for usable and useful logged-in experiences.

### Build

- Right now, I imagine that we will only be leveraging data and tools we have access to right now on VA.gov and not integrating entirely new data/backend systems that don't already exist or aren't already in the works. While the new logged-in homepage will grow and change over time, I think this will be a helpful line for us to draw for what is included in an initial build and what we may want to build and include in future phases.

## Value Propositions

- We will reduce the confusion as to whether people should use the homepage or My VA as their landing pad when they are logged in to VA.gov.
- We will make it easier to see helpful status updates/notifications that require action so veterans can act on this information more easily.
- If we create a better, more usable logged in experience, we may see an increase in the number of people who create accounts, log in to VA.gov, and verify their identities.
- We are laying a foundation for a scalable, personalized homepage that can be adapted to other user types when the site is able to accomodate other roles and permissions.

## KPIs

- Do more people log in because we've made it easier to navigate VA.gov and their tools?
- Do we see an increase in accounts created?
- Do we see an increase in people who verify their identities (LOA3)?
- Do we see an increase in people routing to tools through the homepage?
- Do we see a decrease in people calling the call center for information/updates? (Not sure how to measure this)
- Do we see an increase in overall level of satisfaction with the homepage? (eg. Foresee data)

## Discovery Takeaways

- [Personalization 2.0 discovery write-up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md) — Last summer, we conducted research to validate moving forward with a logged-in homepage redesign.
- Currently, we are undergoing a discovery phase geared more specifically toward how we might approach the homepage redesign. We'll link to those reports here as they're completed.

## Requirements

### Goals

*From the Personalization 2.0 strategy from 2019*

1. **Reduce redundancy** — Specifically, we should reduce redundancy between the My VA dashboard and the VA.gov homepage.
2. **Get users where they need to go** — We should balance bubbling up content with showing a succinct list of links to quickly route people to tools.
3. **Elevate personally relevant information** — Users should see themselves in these updates.
4. **Scale gracefully** — Our designs should allow for future updates and expansion. 
5. **Prioritize wayfinding** — We should make it easy for users to find information that is relevant to them, and we should guide users accordingly depending on where they are in their journey at the VA.
6. **Effectively use visual space** — We should avoid a single-column, "content page" approach. Design updates should more effectively employ [the design system](https://design.va.gov/) and update it as needed.

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

![2019 VA.gov homepage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/screenshots/VA.gov%20homepage.png)

#### My VA

*All widgets*

![My VA 1.0 all widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/screenshots/Dashboard-Updated-All%20Features.png)

*Empty state*

![My VA 1.0 empty state](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/screenshots/Dashboard-Updated-Empty%20states.png)

### After

