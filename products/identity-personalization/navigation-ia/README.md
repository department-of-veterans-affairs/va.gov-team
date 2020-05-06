# Product Outline: Authenticated/logged-in navigation

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

Currently, the logged-in navigation is almost entirely the same as the logged-out navigation on VA.gov. Based on observations from the user testing and research, we have reason to believe that we are not adequately guiding users in the logged-in experience and that we need to create a logged-in navigation that is more oriented towards benefits management, task completion, and access to tools. 

## Problems

In [the initial dashboard 2.0 interviews from 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/dashboard-interviews/research-summary.md#results--takeaways), [direct deposit research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-summary.md#we-need-to-make-it-easier-to-find-the-direct-deposit-tool), [address validation user testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/user-testing/Research%20Summary.md#showing-a-sign-in-link-on-the-change-your-address-content-page-is-confusing-when-a-user-is-already-signed-in), and [profile 2.0 user testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/cpaa-research-findings.md#details-of-findings), we have observed the following problems:

- People are overly reliant on the homepage to navigate to tools when they are logged in. They frequently go back to the Top 20 tasks on the homepage to find what they're looking for. If they don't see the tool they need there, they become confused.
- People expect their tools to be in their personalized menu (displays as [User's name] in the upper-right corner) if they do not see them in the top 20 tasks. But if they don't see tools called out there, they get confused.
- We rarely see people going into the content hubs to find tools when they are logged in. This is certainly not impossible — we have occassionally seen it when people are asked to change their address or direct deposit information, but they are much more likely to rely on the top 20 tasks or the personal menu.

Additionally, some problems we have observed:

- There is little visual differentiation in the nav when people are signed in. This isn't inherently bad, but given that the needs of a user who wants to manage tasks/tools is very different than the needs of someone exploring new benefits, we could do a better job at orienting people.
- The personalized menu is, visually speaking, quite small and calls out key pages instead of specific tools. It's also limited to only showing the My VA dashboard, the Profile, and Account, even though these are not the top tools people need.

### User Problem Statements

- **As a veteran, I want to be able to log in to VA.gov and easily find the tools and tasks that apply to my specific experience at the VA.**
- **As a veteran, I want to be able to log in to VA.gov, quickly complete whatever I came to do, and then get back to the rest of my life.**

### Business Goals

- More effectively guide users to the tasks and tools they need to manage their benefits.
- Pull out tools from content hubs where they currently live.
- Incentivize users to log in and manage their benefits online by creating a usable, useful experience that is preferrable to managing their benefits any other way.

## Assumptions

- People are overly reliant on the top 20 tasks on the homepage.
- People find it hard to navigate to tools in the logged-in experience if they don't see a tool/task in the top 20 tasks on the homepage.
- People prefer a tool like MHV because the navigation is tool-oriented.
- In addition to the logged-in homepage redesign, a tool-oriented navigation would help veterans/users feel like VA.gov is the best place to manage their benefits.
- We need to consider a logged-in navigation on some level as we approach the logged-in homepage redesign.

## Questions

- How would an authenticated tool bar/menu work in harmony with an unauthenticated navigation?
- Given that a veteran may want to learn about other benefits at any point in their relationship with the VA, how do we guide people to "explore" content in a navigation that is more focused on managing benefits?
- What are veteran pain points with the existing navigation?
- Without putting everything on the homepage, how would veterans prefer to find tools?

## Solution Approach

This is still heavily TBD but will likely involve leadership from Meg Peters and Mikki Northuis with heavy collaboration from Jen Lee, Ryan Thurlwell, and Samara Strauss. To start, we should:
- Regroup on the "flattening the IA" work Jen and Mikki already have in the work.
- Inventory logged-in tasks and tools.
- Discuss our vision for a logged out --> logged in experience.
- Conduct a lot of research to support initial designs.
- For the authenticated experience, determine MVP changes to the navigation.

## KPIs

- More people are using the logged in navigation to get to tools.
- People are finding tools more easily/directly from the navigation. (Page paths)
- More people are logging in in general (assumption: we have improved the logged in experience to a degree that people are more incentivized to log in).

---

# Implementation Info

## Solution Narrative

### Status

### Key Decisions

## Discovery

- [Personalization 2.0 discovery write-up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/personalization%202.0/discovery-research/README.md)
- [Profile 2.0 user testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/cpaa-research-findings.md#details-of-findings)
  - Specifically in mobile, participants had a difficult time finding the 'profile menu', and in general were confused about the mobile navigation.

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

