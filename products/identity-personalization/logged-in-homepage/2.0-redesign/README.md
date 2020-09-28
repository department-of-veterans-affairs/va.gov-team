# Product Outline: Logged-in homepage redesign (Dashboard 2.0)

Last updated September 28, 2020

## Communications

- **GitHub Label**: vsa-authenticated-exp; personalization-2.0; auth-homepage; My VA
- **Slack channel**: vsa-authd-exp

### Roles

|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DEPO Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Liz Lantz |Discovery researcher| liz.lantz@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Cassandra Allen |Designer| callen@governmentcio.com |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Sandra Hallie| Designer|	shallie@governmentcio.com |
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
- [OKRs & KPIs](#okrs--kpis)

# Implementation Information
- [Status](#status)
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

- Many people don't use the My VA dashboard (~8% of users who visit va.gov go to MyVA) .
- We don't guide people to the My VA dashboard.
- The My VA dashboard is too duplicative of the homepage.
- People prefer the homepage over the My VA dashboard because it is a more effective router, and because it has a more appealing visual design.
- On My VA, we have not effectively employed [the design system](https://design.va.gov/). My VA is designed like a content page, so adding new content has made these pages extremely lengthy and hard to scan.

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

### Design/IA

- How do veterans conceptualize the difference between a dashboard/logged-in homepage a profile? What kind of information do they expect to see on each page?
- Do things like "Your dependents" and "Your disability rating" need to be displayed on the new logged-in homepage, or should they be displayed on the VA.gov profile, or both?
- How could an authenticated tool bar/menu fit into the current navigation before Mikki/Ryan/Jen are able to revisit the IA and flatten the IA/nav across the board?
- Is the logged-in homepage really the notification center? Are those two different projects, or the same project?
- How will we show notifications? Where will they "live"? How will they be marked as read/dismissed?
- What info needs to appear as a widget vs. just a link on the new logged-in homepage?
- What works well about the current homepage that veterans don't want to change? What would veterans change about the homepage as it is now?
- How can the initial phase of the 2.0 redesign account for future growth and improvements?

### Technical

- What data do we have access to now that we can show on the homepage? 
- Is there data we have but aren't leveraging?
- Is there data that we don't have and need?
- What data might we want for future phases/improvements?
- Is a progressive web app something we should consider in the future?

### PM

- What staging users will we need, and who can help us get those set up?
- How do we appropriately involve stakeholders, both within DEPO and outside of DEPO, in this project? How do we do this in a way that doesn't allow the homepage to become a dumping ground?
- How can we make this a seamless transition for veterans (from the existing logged-in homepage to the new logged-in homepage)?

## Solution Approach

### Discovery

- We are starting this project with a comprehensive round of discovery to help us answer questions around veteran needs and expectations, DEPO stakeholder needs and expectations, how we should involve stakeholders outside of DEPO, relevant past research and context setting, and existing models for usable and useful logged-in experiences.
- Right now, I imagine that we will only be leveraging data and tools we have access to right now on VA.gov and not integrating entirely new data/backend systems that don't already exist or aren't already in the works. While the new logged-in homepage will grow and change over time, I think this will be a helpful line for us to draw for what is included in an initial build and what we may want to build and include in future phases.

### Phase 1 plan (flexible pending technical discovery):

**In scope**

- Move the following My VA tools over to the homepage:
  - Your applications
  - Your claims
  - Health enrollment status (eg. enrolled; application pending, etc)
  - Prescriptions
  - Secure messages
  - Schedule appointments
- A plan for how to incorporate top 20 tasks links, including directing veterans to the records and documents.
- A visual redesign of the My VA elements moving over to the logged-in homepage.
- A very basic first-time user experience that will account for users who have no benefits and no applications in flight.
- Retiring My VA.
- (Nice to have) Elevating overall disability ratings, GI bill balances, and upcoming appointments.

**Out of scope**

- Doing anything with the Find VA benefits content that currently exists on My VA.
- Incorporating any new data or integrations that do not already exist on VA.gov.
- Navigation work.
- Notification center work.

## OKRs & KPIs

Work in progress can be found here

https://docs.google.com/spreadsheets/d/1B6c1rY-1l64cWhHO7D8WjA328zwfdAhSgKkPatIKmts/edit#gid=1242119200

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

## Target Launch Date
- *What is your target launch date of your MVP/iteration?*
- *What is your date for when you'll evaluate impact after launch?*

--- 

# Implementation Info

## Status

- **Summer 2019**: Personalization 2.0 initial discovery/strategy completed.
- **March 2020**: Kicked off logged-in homepage discovery
- **April 2020**: DEPO stakeholder interviews complete
- **May 2020**: Research review, comparative analysis, analytics review, and user research.
- **June 2020**: Discovery and final readout complete.
- **July 2020**: Project on hold while we get Profile 2.0 ready for QA and other pre-launch tasks. 
- **August 2020**: Design onboarding; technical discovery.
- **September 2020**: Initial design explorations; design intent platform checkpoint; design for health care section begins in earnest; continued discussion around technical approach.

### Key Decisions

## Discovery

- [Personalization 2.0 discovery write-up (2019)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md)
- [Logged-in homepage discovery write-up (Spring 2020)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/discovery-and-research/discovery-summary.md)

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

### Important docs

- [Logged-in homepage use cases MURAL board](https://app.mural.co/t/vsa0499/m/vsa0499/1597156877591/25248822b34df6bbf8041a9b11b3150974e51efb)
- [Logged-in homepage data points spreadsheet](https://docs.google.com/spreadsheets/d/1fO3VxUj8U2M268GnpmNmlL8Jdl8E1as33SzuwoTneV8/edit#gid=1279308525)
- [Design process outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/product/LIH-outline-and-timeline.md)

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

